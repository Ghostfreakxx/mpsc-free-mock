import test from 'node:test';
import assert from 'node:assert/strict';
import {
  HISTORY, STARTING_CASH, applyMove, buy, buyBudget, defaultCosts, equity, finished, indicators, makeCandles, newAccount, newRiskState,
  noRisk, parseHistory, parseSavedGame, replay, review, runStrategy, safeRisk, scenarioOrder, scenarios, sell, startSim, step, summarizeSim,
} from '../app/lib/trading-sim.ts';

const close = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);
const flat = (n, price = 100) => Array.from({ length: n }, () => ({ open: price, high: price, low: price, close: price, volume: 100 }));

test('practice charts are reproducible, well formed and long enough to play', () => {
  for (const id of scenarioOrder) {
    const total = scenarios[id].regimes.reduce((sum, regime) => sum + regime.candles, 0);
    assert.equal(total, 200, id);
    const candles = makeCandles(id, 42);
    assert.equal(candles.length, total);
    assert.deepEqual(makeCandles(id, 42), candles);
    assert.notDeepEqual(makeCandles(id, 43), candles);
    for (const c of candles) {
      assert.ok(c.low > 0 && c.volume > 0, id);
      assert.ok(c.high >= Math.max(c.open, c.close) && c.low <= Math.min(c.open, c.close), id);
    }
    for (let i = 1; i < candles.length; i++) close(candles[i].open, candles[i - 1].close);
  }
});

test('each market tells its story on most charts', () => {
  const seeds = Array.from({ length: 20 }, (_, i) => i + 1);
  const change = (id, seed, from = HISTORY) => { const c = makeCandles(id, seed); return c.at(-1).close / c[from].close - 1; };
  assert.ok(seeds.filter(seed => change('uptrend', seed) > 0.1).length >= 17, 'uptrend should usually rise');
  assert.ok(seeds.filter(seed => change('crash', seed) < -0.1).length >= 17, 'crash should usually fall');
  assert.ok(seeds.filter(seed => Math.abs(change('sideways', seed)) < 0.08).length >= 17, 'sideways should usually go nowhere');
  // The dump ends below where the pump began (candle 110).
  assert.ok(seeds.filter(seed => change('pump', seed, 110) < 0).length >= 17, 'pump and dump should usually end below the start of the pump');
});

test('indicators: moving averages and RSI', () => {
  const rising = Array.from({ length: 60 }, (_, i) => ({ open: 100 + i, high: 101 + i, low: 99 + i, close: 100 + i, volume: 100 }));
  const ind = indicators(rising);
  assert.equal(ind.sma20[18], null);
  close(ind.sma20[19], 109.5);
  close(ind.sma50[59], 134.5);
  assert.equal(ind.rsi14[13], null);
  close(ind.rsi14[30], 100, 1e-6);
  const falling = rising.map(c => ({ ...c, close: 300 - c.close }));
  close(indicators(falling).rsi14[30], 0, 1e-6);
  const mixed = indicators(makeCandles('sideways', 3)).rsi14.filter(v => v !== null);
  assert.ok(mixed.every(v => v >= 0 && v <= 100));
  close(indicators(flat(30)).volRatio[25], 1);
});

test('the account charges fees and slippage on both sides and withholds 1% TDS on a sale', () => {
  let account = buy(newAccount(), HISTORY, 100, 2000, 'test');
  close(account.cash, STARTING_CASH - 2000);
  close(account.trades[0].fee, 4);
  close(account.qty, 1996 / 100.1);
  assert.equal(buy(account, HISTORY + 1, 100, 1000, 'again'), account, 'one position at a time');
  account = sell(account, HISTORY + 1, 100, 'test');
  const gross = (1996 / 100.1) * 99.9;
  const t = account.trades[1];
  close(t.amount, gross);
  close(t.fee, gross * 0.002);
  close(t.tds, gross * 0.01);
  close(t.pnl, gross - gross * 0.002 - 2000);
  assert.ok(t.pnl < -9 && t.pnl > -13, 'a flat round trip loses about 0.6%');
  close(account.cash, STARTING_CASH - 2000 + gross * (1 - 0.002 - 0.01));
  // TDS is a tax credit, so it counts towards equity.
  close(equity(account, 100), STARTING_CASH + t.pnl);
  assert.equal(sell(account, HISTORY + 2, 100, 'nothing'), account);
  assert.deepEqual(defaultCosts, { feePct: 0.002, tdsPct: 0.01, slippagePct: 0.001 });
});

test('the risk manager forces exits and vetoes unsafe buys', () => {
  const holding = buy(newAccount(), HISTORY, 100, 2000, 'test');
  const entry = holding.entryPrice;
  const hold = { action: 'HOLD', reason: 'wait' };
  const state = newRiskState();
  assert.equal(review(safeRisk, state, hold, entry * 0.969, holding).action, 'SELL');
  assert.match(review(safeRisk, state, hold, entry * 0.969, holding).reason, /Stop-loss/);
  assert.match(review(safeRisk, state, hold, entry * 1.061, holding).reason, /Take-profit/);
  assert.equal(review(safeRisk, state, hold, entry * 0.99, holding).action, 'HOLD');
  assert.equal(review(noRisk, state, hold, entry * 0.5, holding).action, 'HOLD', 'no automatic exits without safety rules');
  assert.equal(review(safeRisk, state, { action: 'BUY', reason: 'x' }, 100, holding).action, 'HOLD');
  assert.equal(review(safeRisk, state, { action: 'SELL', reason: 'x' }, 100, newAccount()).action, 'HOLD');
  assert.equal(review(safeRisk, { ...state, halted: 'daily loss' }, { action: 'BUY', reason: 'x' }, 100, newAccount()).action, 'HOLD');
  assert.equal(review(safeRisk, { ...state, tradesToday: 6 }, { action: 'BUY', reason: 'x' }, 100, newAccount()).action, 'HOLD');
  assert.equal(buyBudget(safeRisk, 10000, 1), 2000);
  assert.equal(buyBudget(safeRisk, 4000, 1), 1000);
  assert.equal(buyBudget(safeRisk, 4000, 0.1), 400);
  assert.equal(buyBudget(noRisk, 10000, 1), 10000);
});

test('a big loss halts buying for the rest of the day', () => {
  // Price halves after the buy; without automatic exits the sale realises a large loss.
  const candles = [...flat(HISTORY + 1, 100), ...flat(10, 50)];
  const config = { ...noRisk, maxDailyLoss: 500 };
  let state = step(startSim(), candles, config, { action: 'BUY', reason: 'buy' });
  state = step(state, candles, config, { action: 'SELL', reason: 'sell' });
  assert.ok(state.risk.halted);
  const after = step(state, candles, config, { action: 'BUY', reason: 'again' });
  assert.equal(after.account.qty, 0);
  assert.match(after.notes.at(-1), /Buy blocked/);
});

test('bots and buy-and-hold run to the end of every market', () => {
  for (const id of scenarioOrder) {
    const candles = makeCandles(id, 5);
    const hold = runStrategy(candles, 'hold', noRisk);
    const priceChange = candles.at(-1).close / candles[HISTORY].close - 1;
    assert.equal(hold.trades, 1);
    // Buy-and-hold with everything tracks the price, less the buy fee and slippage.
    close(hold.returnPct / 100, (1 - 0.002) * (1 + priceChange) / 1.001 - 1, 1e-3);
    for (const strategy of ['sma', 'rsi']) {
      const result = runStrategy(candles, strategy, safeRisk);
      assert.ok(Number.isFinite(result.returnPct) && result.maxDrawdownPct <= 0, `${id} ${strategy}`);
    }
  }
});

test('a saved game is rebuilt from its moves, and corrupt saves are ignored', () => {
  const game = { scenario: 'crash', seed: 99, safety: true, moves: ['h', 'b2', 'h', 'h', 's', 'bA'] };
  const { candles, state } = replay(game);
  assert.equal(state.index, HISTORY + 6);
  assert.equal(state.account.trades.length, 3);
  assert.ok(state.account.trades[2].amount <= 2000, 'safety rules cap an all-in buy');
  assert.deepEqual(parseSavedGame(JSON.stringify(game)), game);
  let rest = state;
  while (!finished(rest, candles)) rest = applyMove(rest, candles, safeRisk, 'h');
  assert.equal(summarizeSim(rest, candles).trades >= 3, true);

  for (const bad of [null, '', 'not json', '[]', '{}',
    JSON.stringify({ ...game, scenario: 'moon' }),
    JSON.stringify({ ...game, scenario: 'toString' }),
    JSON.stringify({ ...game, seed: -1 }),
    JSON.stringify({ ...game, seed: 1.5 }),
    JSON.stringify({ ...game, safety: 'yes' }),
    JSON.stringify({ ...game, moves: ['buy'] }),
    JSON.stringify({ ...game, moves: Array(141).fill('h') })]) {
    assert.equal(parseSavedGame(bad), null, String(bad));
  }
});

test('saved history keeps only valid entries', () => {
  const good = { scenario: 'pump', safety: false, returnPct: -12.5, priceChangePct: -20, trades: 3 };
  assert.deepEqual(parseHistory(JSON.stringify([good, { ...good, scenario: 'x' }, { ...good, returnPct: 'lots' }, null, 5])), [good]);
  assert.deepEqual(parseHistory('{'), []);
  assert.deepEqual(parseHistory(JSON.stringify(Array(15).fill(good))).length, 10);
});
