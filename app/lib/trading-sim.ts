// Paper-trading simulator: practice charts, indicators, a risk manager and a fake-money account.
//
// The engine follows a WazirX trading bot's paper mode (indicators.py, risk.py, broker.py and
// engine.py): one position at a time, a fee on every trade, 1% TDS on every sale, slippage on
// fills, and safety rules that run after every decision and can veto or force a trade. It runs in
// the browser on generated practice charts. There are no real prices, no exchange and no AI calls.
// This file is loaded in the browser, so keep it free of question-bank imports.

export type Candle = { open: number; high: number; low: number; close: number; volume: number };
export type Action = "BUY" | "SELL" | "HOLD";
export type Decision = { action: Action; reason: string };

// ---------------------------------------------------------------- practice charts

export type ScenarioId = "uptrend" | "crash" | "sideways" | "pump";
type Regime = { candles: number; drift: number; vol: number; volume?: number; revert?: number };
export type Scenario = { id: ScenarioId; name: string; summary: string; debrief: string; lesson: string; regimes: Regime[] };

export const CANDLES_PER_DAY = 24; // one candle = one hour
export const HISTORY = 60; // candles shown before the first decision, so the indicators have data
export const STARTING_CASH = 10000;

export const scenarios: Record<ScenarioId, Scenario> = {
  uptrend: {
    id: "uptrend", name: "Steady climb",
    summary: "The price drifts upwards with a sharp dip in the middle.",
    debrief: "In a rising market, buying and holding is hard to beat. Every extra trade pays a fee and 1% TDS, and selling in the dip often means missing the recovery.",
    lesson: "costs",
    regimes: [{ candles: 60, drift: 0.0005, vol: 0.007 }, { candles: 50, drift: 0.004, vol: 0.008 }, { candles: 20, drift: -0.005, vol: 0.011, volume: 1.6 }, { candles: 70, drift: 0.003, vol: 0.008 }],
  },
  crash: {
    id: "crash", name: "Sudden crash",
    summary: "Calm and rising, then a fast fall on heavy volume.",
    debrief: "A stop-loss turns a crash into a small, planned loss. Without one, a 40% fall needs a 67% rise just to get back to where you started.",
    lesson: "risk",
    regimes: [{ candles: 60, drift: 0.001, vol: 0.007 }, { candles: 40, drift: 0.002, vol: 0.007 }, { candles: 25, drift: -0.014, vol: 0.018, volume: 2.6 }, { candles: 75, drift: -0.001, vol: 0.012, volume: 1.3 }],
  },
  sideways: {
    id: "sideways", name: "Going nowhere",
    summary: "The price chops up and down around the same level.",
    debrief: "In a sideways market, trend signals keep firing and reversing. Each round trip costs about 0.6% of the trade in fees and slippage and locks up another 1% as TDS, so doing nothing often wins.",
    lesson: "indicators",
    regimes: [{ candles: 200, drift: 0, vol: 0.009, revert: 0.06 }],
  },
  pump: {
    id: "pump", name: "Pump and dump",
    summary: "A quiet coin suddenly rockets on huge volume. What happens next?",
    debrief: "This is how 'signal' groups make money from their followers: insiders buy early, the group shouts 'BUY NOW', and insiders sell into the rush. The price usually ends below where the pump began.",
    lesson: "scams",
    regimes: [{ candles: 60, drift: 0, vol: 0.005, revert: 0.03 }, { candles: 50, drift: 0, vol: 0.005, revert: 0.03 }, { candles: 12, drift: 0.03, vol: 0.015, volume: 5 }, { candles: 8, drift: 0, vol: 0.03, volume: 3 }, { candles: 20, drift: -0.03, vol: 0.02, volume: 3 }, { candles: 50, drift: -0.002, vol: 0.01, volume: 1.2 }],
  },
};
export const scenarioOrder: ScenarioId[] = ["uptrend", "crash", "sideways", "pump"];
export const isScenarioId = (value: unknown): value is ScenarioId => typeof value === "string" && Object.hasOwn(scenarios, value);

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// The same scenario and seed always give the same chart, so a saved game can be replayed.
export function makeCandles(id: ScenarioId, seed: number): Candle[] {
  const rand = mulberry32(seed * 7919 + id.length * 104729);
  const normal = () => Math.sqrt(-2 * Math.log(1 - rand())) * Math.cos(2 * Math.PI * rand());
  const anchor = Math.log(800 + Math.floor(rand() * 400));
  let logPrice = anchor;
  const candles: Candle[] = [];
  for (const regime of scenarios[id].regimes) {
    for (let i = 0; i < regime.candles; i++) {
      const open = Math.exp(logPrice);
      logPrice += regime.drift + regime.vol * normal() + (regime.revert ?? 0) * (anchor - logPrice);
      const close = Math.exp(logPrice);
      const wick = () => Math.abs(normal()) * regime.vol * 0.5;
      candles.push({
        open, close,
        high: Math.max(open, close) * (1 + wick()),
        low: Math.min(open, close) * (1 - wick()),
        volume: 100 * (regime.volume ?? 1) * Math.exp(0.35 * normal()),
      });
    }
  }
  return candles;
}

// ---------------------------------------------------------------- indicators

export type Indicators = { sma20: (number | null)[]; sma50: (number | null)[]; rsi14: (number | null)[]; volRatio: (number | null)[] };

function sma(values: number[], period: number): (number | null)[] {
  let sum = 0;
  return values.map((value, i) => {
    sum += value - (i >= period ? values[i - period] : 0);
    return i >= period - 1 ? sum / period : null;
  });
}

// Wilder's RSI, as pandas' ewm(alpha=1/period, adjust=False) computes it.
function rsi(close: number[], period = 14): (number | null)[] {
  let gain = 0, loss = 0;
  return close.map((value, i) => {
    if (i === 0) return null;
    const delta = value - close[i - 1];
    const alpha = i === 1 ? 1 : 1 / period;
    gain += alpha * (Math.max(delta, 0) - gain);
    loss += alpha * (Math.max(-delta, 0) - loss);
    if (i < period) return null;
    return 100 - 100 / (1 + gain / Math.max(loss, 1e-12));
  });
}

export function indicators(candles: Candle[]): Indicators {
  const close = candles.map(candle => candle.close);
  const volume = candles.map(candle => candle.volume);
  const avgVolume = sma(volume, 20);
  return {
    sma20: sma(close, 20), sma50: sma(close, 50), rsi14: rsi(close),
    volRatio: volume.map((value, i) => avgVolume[i] ? value / avgVolume[i]! : null),
  };
}

// ---------------------------------------------------------------- account

export type Costs = { feePct: number; tdsPct: number; slippagePct: number };
export const defaultCosts: Costs = { feePct: 0.002, tdsPct: 0.01, slippagePct: 0.001 };

export type Trade = { index: number; side: "BUY" | "SELL"; price: number; qty: number; amount: number; fee: number; tds: number; pnl: number; reason: string };
export type Account = { cash: number; qty: number; entryPrice: number | null; costBasis: number; tdsPaid: number; trades: Trade[] };

export const newAccount = (cash = STARTING_CASH): Account => ({ cash, qty: 0, entryPrice: null, costBasis: 0, tdsPaid: 0, trades: [] });

export function buy(account: Account, index: number, price: number, budget: number, reason: string, costs = defaultCosts): Account {
  const spend = Math.min(budget, account.cash);
  if (spend <= 0 || account.qty > 0) return account;
  const fill = price * (1 + costs.slippagePct);
  const fee = spend * costs.feePct;
  const qty = (spend - fee) / fill;
  const trade: Trade = { index, side: "BUY", price: fill, qty, amount: spend, fee, tds: 0, pnl: 0, reason };
  return { ...account, cash: account.cash - spend, qty, entryPrice: fill, costBasis: spend, trades: [...account.trades, trade] };
}

export function sell(account: Account, index: number, price: number, reason: string, costs = defaultCosts): Account {
  if (account.qty <= 0) return account;
  const fill = price * (1 - costs.slippagePct);
  const gross = account.qty * fill;
  const fee = gross * costs.feePct;
  const tds = gross * costs.tdsPct;
  // TDS can be claimed back when you file your tax return, so it is not counted as a loss, but it
  // is cash you cannot trade with until then.
  const pnl = gross - fee - account.costBasis;
  const trade: Trade = { index, side: "SELL", price: fill, qty: account.qty, amount: gross, fee, tds, pnl, reason };
  return { ...account, cash: account.cash + gross - fee - tds, qty: 0, entryPrice: null, costBasis: 0, tdsPaid: account.tdsPaid + tds, trades: [...account.trades, trade] };
}

export const equity = (account: Account, price: number) => account.cash + account.qty * price + account.tdsPaid;

// ---------------------------------------------------------------- risk manager

export type RiskConfig = {
  maxPositionPct: number; maxTrade: number; stopLossPct: number; takeProfitPct: number;
  maxDailyLoss: number; maxTradesPerDay: number;
};
// The bot's defaults for a ₹10,000 account.
export const safeRisk: RiskConfig = { maxPositionPct: 0.25, maxTrade: 2000, stopLossPct: 0.03, takeProfitPct: 0.06, maxDailyLoss: 500, maxTradesPerDay: 6 };
// No safety rules: any size, no automatic exits, no daily limits.
export const noRisk: RiskConfig = { maxPositionPct: 1, maxTrade: Infinity, stopLossPct: Infinity, takeProfitPct: Infinity, maxDailyLoss: Infinity, maxTradesPerDay: Infinity };

export type RiskState = { day: number; realizedToday: number; tradesToday: number; halted: string | null };
export const newRiskState = (): RiskState => ({ day: -1, realizedToday: 0, tradesToday: 0, halted: null });

const pct = (value: number) => `${value >= 0 ? "+" : ""}${(value * 100).toFixed(1)}%`;

// The decision that is actually carried out. Protective exits override everything.
export function review(config: RiskConfig, state: RiskState, decision: Decision, price: number, account: Account): Decision {
  if (account.qty > 0 && account.entryPrice) {
    const change = price / account.entryPrice - 1;
    if (change <= -config.stopLossPct) return { action: "SELL", reason: `Stop-loss: ${pct(change)} from your buy price` };
    if (change >= config.takeProfitPct) return { action: "SELL", reason: `Take-profit: ${pct(change)} from your buy price` };
  }
  if (decision.action === "BUY") {
    if (state.halted) return { action: "HOLD", reason: `Buy blocked: ${state.halted}` };
    if (state.tradesToday >= config.maxTradesPerDay) return { action: "HOLD", reason: "Buy blocked: maximum trades for today" };
    if (account.qty > 0) return { action: "HOLD", reason: "Buy blocked: you already hold the coin" };
  }
  if (decision.action === "SELL" && account.qty <= 0) return { action: "HOLD", reason: "Nothing to sell" };
  return decision;
}

export const buyBudget = (config: RiskConfig, cash: number, share = 1) =>
  Math.min(cash * Math.min(share, config.maxPositionPct), config.maxTrade);

// ---------------------------------------------------------------- one candle at a time

export type SimState = { index: number; account: Account; risk: RiskState; curve: number[]; notes: string[] };

export const startSim = (cash = STARTING_CASH): SimState => ({ index: HISTORY, account: newAccount(cash), risk: newRiskState(), curve: [], notes: [] });

// Decide at the close of candle `state.index`, then move to the next candle.
// `share` is the part of available cash a BUY may use (the risk config may cap it further).
export function step(state: SimState, candles: Candle[], config: RiskConfig, decision: Decision, share = 1, costs = defaultCosts): SimState {
  const i = state.index;
  if (i >= candles.length) return state;
  const price = candles[i].close;
  const day = Math.floor(i / CANDLES_PER_DAY);
  let risk = day === state.risk.day ? state.risk : { ...newRiskState(), day };
  const final = review(config, risk, decision, price, state.account);
  let account = state.account;
  const notes = final.action !== decision.action || final.reason !== decision.reason ? [...state.notes, `Candle ${i - HISTORY + 1}: ${final.reason}`] : state.notes;
  if (final.action === "BUY") {
    account = buy(account, i, price, buyBudget(config, account.cash, share), final.reason, costs);
    if (account !== state.account) risk = { ...risk, tradesToday: risk.tradesToday + 1 };
  } else if (final.action === "SELL") {
    account = sell(account, i, price, final.reason, costs);
    const trade = account.trades.at(-1);
    if (account !== state.account && trade) {
      const realizedToday = risk.realizedToday + trade.pnl;
      risk = { ...risk, tradesToday: risk.tradesToday + 1, realizedToday, halted: realizedToday <= -config.maxDailyLoss ? `daily loss limit reached (₹${Math.abs(realizedToday).toFixed(0)})` : risk.halted };
    }
  }
  return { index: i + 1, account, risk, curve: [...state.curve, equity(account, price)], notes };
}

export const finished = (state: SimState, candles: Candle[]) => state.index >= candles.length;

// ---------------------------------------------------------------- results

export type Result = {
  startEquity: number; endEquity: number; returnPct: number; priceChangePct: number; maxDrawdownPct: number;
  trades: number; roundTrips: number; winRatePct: number | null; feesPaid: number; tdsWithheld: number;
};

export function summarizeSim(state: SimState, candles: Candle[], startCash = STARTING_CASH): Result {
  const last = candles[Math.min(state.index, candles.length) - 1].close;
  const first = candles[HISTORY].close;
  const endEquity = equity(state.account, last);
  let peak = startCash, drawdown = 0;
  for (const value of state.curve) {
    peak = Math.max(peak, value);
    drawdown = Math.min(drawdown, value / peak - 1);
  }
  const sells = state.account.trades.filter(trade => trade.side === "SELL");
  const round = (value: number) => Math.round(value * 100) / 100;
  return {
    startEquity: startCash, endEquity: round(endEquity),
    returnPct: round((endEquity / startCash - 1) * 100),
    priceChangePct: round((last / first - 1) * 100),
    maxDrawdownPct: round(drawdown * 100),
    trades: state.account.trades.length, roundTrips: sells.length,
    winRatePct: sells.length ? Math.round((sells.filter(trade => trade.pnl > 0).length / sells.length) * 1000) / 10 : null,
    feesPaid: round(state.account.trades.reduce((sum, trade) => sum + trade.fee, 0)),
    tdsWithheld: round(state.account.tdsPaid),
  };
}

// ---------------------------------------------------------------- rule-based bots

export type StrategyId = "sma" | "rsi" | "hold";
export type Strategy = (candles: Candle[], ind: Indicators, i: number, holding: boolean) => Decision;

export const strategies: Record<StrategyId, { name: string; short: string; decide: Strategy }> = {
  sma: {
    name: "Trend bot (SMA cross)",
    short: "Buys when SMA20 crosses above SMA50",
    decide: (_candles, { sma20, sma50 }, i, holding) => {
      const [a0, b0, a1, b1] = [sma20[i - 1], sma50[i - 1], sma20[i], sma50[i]];
      if (a0 === null || b0 === null || a1 === null || b1 === null) return { action: "HOLD", reason: "Not enough data" };
      if (!holding && a0 <= b0 && a1 > b1) return { action: "BUY", reason: "SMA20 crossed above SMA50 (uptrend starting)" };
      if (holding && a0 >= b0 && a1 < b1) return { action: "SELL", reason: "SMA20 crossed below SMA50 (downtrend starting)" };
      return { action: "HOLD", reason: "No crossover" };
    },
  },
  rsi: {
    name: "Dip bot (RSI)",
    short: "Buys below RSI 30, sells above 70",
    decide: (_candles, { rsi14 }, i, holding) => {
      const value = rsi14[i];
      if (value === null) return { action: "HOLD", reason: "Not enough data" };
      if (!holding && value < 30) return { action: "BUY", reason: `RSI ${value.toFixed(0)}: oversold` };
      if (holding && value > 70) return { action: "SELL", reason: `RSI ${value.toFixed(0)}: overbought` };
      return { action: "HOLD", reason: `RSI ${value.toFixed(0)}: neutral` };
    },
  },
  hold: {
    name: "Buy and hold",
    short: "Buys once with everything",
    decide: (_candles, _ind, _i, holding) => holding ? { action: "HOLD", reason: "Holding" } : { action: "BUY", reason: "Buy once and hold" },
  },
};
export const strategyOrder: StrategyId[] = ["sma", "rsi", "hold"];

export function runStrategy(candles: Candle[], id: StrategyId, config: RiskConfig): Result {
  const ind = indicators(candles);
  let state = startSim();
  while (!finished(state, candles)) {
    const decision = strategies[id].decide(candles, ind, state.index, state.account.qty > 0);
    state = step(state, candles, config, decision);
  }
  return summarizeSim(state, candles);
}

// ---------------------------------------------------------------- saved games

// A game is stored as its inputs (scenario, seed, safety rules and every decision) and rebuilt by
// replaying them, so nothing read back from storage is trusted as a balance.
export type Move = "b1" | "b2" | "b5" | "bA" | "s" | "h";
export type SavedGame = { scenario: ScenarioId; seed: number; safety: boolean; moves: Move[] };
const moveShare: Record<Move, number> = { b1: 0.1, b2: 0.25, b5: 0.5, bA: 1, s: 0, h: 0 };
export const buyMoves = [{ move: "b1", label: "10%" }, { move: "b2", label: "25%" }, { move: "b5", label: "50%" }, { move: "bA", label: "All" }] as const;
const isMove = (value: unknown): value is Move => typeof value === "string" && Object.hasOwn(moveShare, value);

export function applyMove(state: SimState, candles: Candle[], config: RiskConfig, move: Move): SimState {
  if (move === "s") return step(state, candles, config, { action: "SELL", reason: "You sold" });
  if (move === "h") return step(state, candles, config, { action: "HOLD", reason: "You waited" });
  return step(state, candles, config, { action: "BUY", reason: "You bought" }, moveShare[move]);
}

export function replay(game: SavedGame) {
  const candles = makeCandles(game.scenario, game.seed);
  const config = game.safety ? safeRisk : noRisk;
  let state = startSim();
  for (const move of game.moves) state = applyMove(state, candles, config, move);
  return { candles, config, state };
}

export function parseSavedGame(raw: string | null): SavedGame | null {
  try {
    const value: unknown = raw ? JSON.parse(raw) : null;
    if (!value || typeof value !== "object") return null;
    const { scenario, seed, safety, moves } = value as Record<string, unknown>;
    if (!isScenarioId(scenario) || !Number.isInteger(seed) || (seed as number) < 0 || (seed as number) > 1e9 || typeof safety !== "boolean") return null;
    const total = scenarios[scenario].regimes.reduce((sum, regime) => sum + regime.candles, 0);
    if (!Array.isArray(moves) || moves.length > total - HISTORY || !moves.every(isMove)) return null;
    return { scenario, seed: seed as number, safety, moves };
  } catch { return null; }
}

export type HistoryEntry = { scenario: ScenarioId; safety: boolean; returnPct: number; priceChangePct: number; trades: number };

export function parseHistory(raw: string | null): HistoryEntry[] {
  try {
    const value: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(value)) return [];
    return value.filter((entry): entry is HistoryEntry => entry && typeof entry === "object" && isScenarioId(entry.scenario)
      && typeof entry.safety === "boolean" && [entry.returnPct, entry.priceChangePct, entry.trades].every(n => typeof n === "number" && Number.isFinite(n))).slice(0, 10);
  } catch { return []; }
}
