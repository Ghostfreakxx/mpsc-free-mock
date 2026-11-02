"use client";

import Link from "next/link";
import { BookOpen, FastForward, Flag, RotateCcw, ShieldCheck, ShieldOff, StepForward, TriangleAlert } from "lucide-react";
import { Fragment, useEffect, useMemo, useState } from "react";
import {
  CANDLES_PER_DAY, HISTORY, STARTING_CASH, applyMove, buyMoves, equity, finished, indicators, noRisk, parseHistory, parseSavedGame,
  replay, runStrategy, safeRisk, scenarioOrder, scenarios, strategies, strategyOrder, summarizeSim,
  type Candle, type HistoryEntry, type Indicators, type Move, type SavedGame, type ScenarioId, type Trade,
} from "../lib/trading-sim";
import styles from "./trading.module.css";

const GAME_KEY = "trading-sim:game:v1";
const HISTORY_KEY = "trading-sim:history:v1";

function readStorage(key: string) {
  try { return window.localStorage.getItem(key); } catch { return null; }
}
function writeStorage(key: string, value: string | null) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch { /* The simulator still works without saved progress. */ }
}

const rupees = (value: number) => `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
const price = (value: number) => `₹${value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const signed = (value: number, digits = 1) => `${value > 0 ? "+" : ""}${value.toFixed(digits)}%`;
const tone = (value: number) => value > 0.005 ? styles.gain : value < -0.005 ? styles.loss : undefined;
// Event handlers pick a fresh chart; render code never calls this.
const newSeed = () => Math.floor(Math.random() * 1e9);

export default function TradingSimulator() {
  const [loaded, setLoaded] = useState(false);
  const [game, setGame] = useState<SavedGame | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [scenario, setScenario] = useState<ScenarioId>("uptrend");
  const [safety, setSafety] = useState(true);

  // Restore after mount so the server and the first client render match.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = parseSavedGame(readStorage(GAME_KEY));
      setGame(saved);
      if (saved) { setScenario(saved.scenario); setSafety(saved.safety); }
      setHistory(parseHistory(readStorage(HISTORY_KEY)));
      setLoaded(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) writeStorage(GAME_KEY, game ? JSON.stringify(game) : null);
  }, [game, loaded]);

  const sim = useMemo(() => game ? replay(game) : null, [game]);
  const done = Boolean(sim && finished(sim.state, sim.candles));

  function play(moves: Move[]) {
    if (!game || !sim || done) return;
    const room = sim.candles.length - sim.state.index;
    const next = { ...game, moves: [...game.moves, ...moves.slice(0, room)] };
    const after = replay(next);
    if (finished(after.state, after.candles)) {
      const result = summarizeSim(after.state, after.candles);
      const entry: HistoryEntry = { scenario: next.scenario, safety: next.safety, returnPct: result.returnPct, priceChangePct: result.priceChangePct, trades: result.trades };
      const nextHistory = [entry, ...parseHistory(readStorage(HISTORY_KEY))].slice(0, 10);
      writeStorage(HISTORY_KEY, JSON.stringify(nextHistory));
      setHistory(nextHistory);
      window.scrollTo({ top: 0 });
    }
    setGame(next);
  }

  // Wait several candles, but stop early if a safety rule sells for you.
  function wait(count: number) {
    if (!sim) return;
    const moves: Move[] = [];
    let state = sim.state;
    for (let i = 0; i < count && !finished(state, sim.candles); i++) {
      const before = state.account.trades.length;
      moves.push("h");
      state = applyMove(state, sim.candles, sim.config, "h");
      if (state.account.trades.length !== before) break;
    }
    play(moves);
  }

  const start = (id: ScenarioId, withSafety: boolean) => {
    setScenario(id); setSafety(withSafety);
    setGame({ scenario: id, seed: newSeed(), safety: withSafety, moves: [] });
    window.scrollTo({ top: 0 });
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/">← Home</Link>
        <Link href="/trading/learn" prefetch={false}><BookOpen size={15} /> Lessons</Link>
      </header>
      <div className={`${styles.wrap} ${styles.stack}`}>
        {!sim ? (
          <Setup loaded={loaded} scenario={scenario} setScenario={setScenario} safety={safety} setSafety={setSafety} history={history} onStart={() => start(scenario, safety)} />
        ) : done ? (
          <Results game={game!} sim={sim} onAgain={() => start(game!.scenario, game!.safety)} onNew={() => setGame(null)} />
        ) : (
          <Game game={game!} sim={sim} onMove={move => play([move])} onWait={wait} onEnd={() => play(Array<Move>(sim.candles.length).fill("h"))} onQuit={() => setGame(null)} />
        )}
      </div>
    </main>
  );
}

function Setup({ loaded, scenario, setScenario, safety, setSafety, history, onStart }: {
  loaded: boolean; scenario: ScenarioId; setScenario: (id: ScenarioId) => void; safety: boolean; setSafety: (on: boolean) => void;
  history: HistoryEntry[]; onStart: () => void;
}) {
  return (
    <>
      <div>
        <div className={styles.kicker}>Free practice · fake money</div>
        <h1 className={styles.title}>Trading simulator</h1>
        <p className={styles.lead}>
          Practise reading a price chart and deciding when to buy, sell or wait, with {rupees(STARTING_CASH)} of pretend money.
          Real fees, slippage and 1% TDS are charged on every trade. At the end, see how you did against two simple trading bots and plain buy-and-hold.
        </p>
      </div>
      <div className={`${styles.panel} ${styles.notice}`}>
        <TriangleAlert size={16} />
        <p>
          Charts here are generated for practice and are not real prices. Nothing on this page is financial advice.
          Real trading can lose real money, and most beginners lose. Read the <Link href="/trading/learn" prefetch={false}>lessons on risk, costs and scams</Link> first.
        </p>
      </div>
      <section className={styles.panel}>
        <h2 className={styles.sectionTitle}>1. Choose a market</h2>
        <div className={styles.choiceGrid}>
          {scenarioOrder.map(id => (
            <button key={id} type="button" className={styles.choice} aria-pressed={scenario === id} onClick={() => setScenario(id)}>
              <strong>{scenarios[id].name}</strong>
              <span>{scenarios[id].summary}</span>
            </button>
          ))}
        </div>
        <p className={styles.muted} data-spaced>Each game draws a new chart, so you can play a market many times.</p>
      </section>
      <section className={styles.panel}>
        <h2 className={styles.sectionTitle}>2. Safety rules</h2>
        <div className={styles.row}>
          <button type="button" className={styles.chip} aria-pressed={safety} onClick={() => setSafety(true)}><ShieldCheck size={14} /> On (recommended)</button>
          <button type="button" className={styles.chip} aria-pressed={!safety} onClick={() => setSafety(false)}><ShieldOff size={14} /> Off</button>
        </div>
        <p className={styles.muted} data-spaced>
          {safety
            ? `On: each trade uses at most 25% of your cash (max ${rupees(safeRisk.maxTrade)}), the coin is sold automatically at −3% (stop-loss) or +6% (take-profit), and buying stops for the day after a ${rupees(safeRisk.maxDailyLoss)} loss.`
            : "Off: you can put everything into one trade and there are no automatic exits. Try a crash with safety off to see why the rules exist."}
        </p>
      </section>
      <div className={styles.row}>
        <button type="button" className={styles.button} disabled={!loaded} onClick={onStart}>Start with {rupees(STARTING_CASH)}</button>
      </div>
      {history.length > 0 && (
        <section className={styles.panel}>
          <h2 className={styles.sectionTitle}>Your recent games</h2>
          <ul className={styles.history}>
            {history.map((entry, i) => (
              <li key={i}>
                <span>{scenarios[entry.scenario].name} · safety {entry.safety ? "on" : "off"} · {entry.trades} trades</span>
                <span><strong className={tone(entry.returnPct)}>{signed(entry.returnPct)}</strong> <small className={styles.muted}>(coin {signed(entry.priceChangePct)})</small></span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

type Sim = ReturnType<typeof replay>;

function Game({ game, sim, onMove, onWait, onEnd, onQuit }: {
  game: SavedGame; sim: Sim; onMove: (move: Move) => void; onWait: (count: number) => void; onEnd: () => void; onQuit: () => void;
}) {
  const { candles, state, config } = sim;
  const ind = useMemo(() => indicators(candles), [candles]);
  const i = state.index;
  const now = candles[i].close;
  const total = equity(state.account, now);
  const holding = state.account.qty > 0;
  const entry = state.account.entryPrice;
  const played = i - HISTORY;
  const remaining = candles.length - i;
  const lastNote = state.notes.at(-1);
  const showNote = lastNote?.startsWith(`Candle ${played}:`);
  const safetyOn = config !== noRisk;
  const value = (n: number | null, digits = 2) => n === null ? "—" : n.toFixed(digits);
  const vsNow = (n: number | null) => {
    if (n === null) return "—";
    const gap = (now / n - 1) * 100;
    return `${price(n)}, price ${Math.abs(gap).toFixed(1)}% ${gap >= 0 ? "above" : "below"}`;
  };

  return (
    <>
      <div className={`${styles.row} ${styles.between}`}>
        <div>
          <div className={styles.kicker}>{scenarios[game.scenario].name} · safety {safetyOn ? "on" : "off"}</div>
          <h1 className={styles.title}>Hour {played + 1} of {candles.length - HISTORY}</h1>
        </div>
        <button type="button" className={`${styles.button} ${styles.outline}`} onClick={onQuit}><RotateCcw size={15} /> Quit</button>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}><span>Price</span><strong>{price(now)}</strong></div>
        <div className={styles.stat}><span>Cash</span><strong>{rupees(state.account.cash)}</strong></div>
        <div className={styles.stat}><span>Coins worth</span><strong>{rupees(state.account.qty * now)}</strong></div>
        <div className={styles.stat}><span>Total</span><strong className={tone(total / STARTING_CASH - 1)}>{rupees(total)} <small>{signed((total / STARTING_CASH - 1) * 100)}</small></strong></div>
      </div>
      <PriceChart candles={candles} upto={i} ind={ind} trades={state.account.trades} entry={entry} stop={safetyOn && entry ? entry * (1 - config.stopLossPct) : null} take={safetyOn && entry ? entry * (1 + config.takeProfitPct) : null} />
      <section className={styles.panel}>
        <dl className={styles.readout}>
          <div><dt>SMA20 (20-hour average)</dt><dd>{vsNow(ind.sma20[i])}</dd></div>
          <div><dt>SMA50 (50-hour average)</dt><dd>{vsNow(ind.sma50[i])}</dd></div>
          <div><dt>RSI (30 oversold · 70 overbought)</dt><dd>{value(ind.rsi14[i], 0)}</dd></div>
          <div><dt>Volume vs average</dt><dd>{value(ind.volRatio[i], 1)}×</dd></div>
        </dl>
      </section>
      <section className={`${styles.panel} ${styles.actions}`} aria-label="Your decision">
        {showNote && <p className={styles.alert} role="status">{lastNote!.replace(/^Candle \d+: /, "")}</p>}
        {holding && entry ? (
          <p className={styles.muted}>
            You hold {state.account.qty.toFixed(4)} coins bought at {price(entry)}: <strong className={tone(now / entry - 1)}>{signed((now / entry - 1) * 100, 2)}</strong>.
            {safetyOn && ` Auto-sell below ${price(entry * (1 - config.stopLossPct))} or above ${price(entry * (1 + config.takeProfitPct))}.`}
          </p>
        ) : (
          <p className={styles.muted}>You hold no coins. Decide at this hour&apos;s closing price: buy, or wait for the next hour.</p>
        )}
        {state.risk.halted && <p className={styles.alert}>Buying is paused until tomorrow: {state.risk.halted}.</p>}
        <div>
          <div className={styles.actionLabel}>{holding ? "Sell" : "Buy with this share of your cash"}</div>
          <div className={styles.row} data-spaced>
            {holding ? (
              <button type="button" className={`${styles.button} ${styles.sellButton}`} onClick={() => onMove("s")}>Sell all coins</button>
            ) : buyMoves.map(({ move, label }) => (
              <button key={move} type="button" className={styles.button} disabled={Boolean(state.risk.halted)} onClick={() => onMove(move)}>Buy {label}</button>
            ))}
          </div>
          {!holding && safetyOn && <p className={styles.muted} data-spaced>Safety rules cap any buy at 25% of cash and {rupees(config.maxTrade)}.</p>}
        </div>
        <div>
          <div className={styles.actionLabel}>Or wait</div>
          <div className={styles.row} data-spaced>
            <button type="button" className={`${styles.button} ${styles.outline}`} onClick={() => onMove("h")}><StepForward size={15} /> Next hour</button>
            <button type="button" className={`${styles.button} ${styles.outline}`} onClick={() => onWait(6)}><FastForward size={15} /> 6 hours</button>
            <button type="button" className={`${styles.button} ${styles.outline}`} onClick={() => onWait(CANDLES_PER_DAY)}><FastForward size={15} /> 1 day</button>
            <button type="button" className={`${styles.button} ${styles.outline}`} onClick={onEnd}><Flag size={15} /> Hold to the end ({remaining} h)</button>
          </div>
        </div>
      </section>
      <TradeLog trades={state.account.trades} />
    </>
  );
}

function TradeLog({ trades }: { trades: Trade[] }) {
  if (!trades.length) return null;
  return (
    <section className={styles.panel}>
      <h2 className={styles.sectionTitle}>Your trades</h2>
      <ul className={styles.log}>
        {[...trades].reverse().slice(0, 8).map(trade => (
          <li key={`${trade.index}-${trade.side}`}>
            <span><strong className={trade.side === "BUY" ? styles.gain : styles.loss}>{trade.side === "BUY" ? "Bought" : "Sold"}</strong> {rupees(trade.amount)} at {price(trade.price)} <small>hour {trade.index - HISTORY + 1} · {trade.reason}</small></span>
            <small>fee {price(trade.fee)}{trade.tds ? ` · TDS ${price(trade.tds)}` : ""}{trade.side === "SELL" ? <> · <strong className={tone(trade.pnl)}>{trade.pnl >= 0 ? "+" : "−"}{price(Math.abs(trade.pnl))}</strong></> : null}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}

const VIEW = 48; // candles on screen
const W = 400, PRICE_H = 170, VOL_H = 26, RSI_H = 50, GAP = 10, PAD_R = 46;

function PriceChart({ candles, upto, ind, trades, entry, stop, take }: {
  candles: Candle[]; upto: number; ind: Indicators; trades: Trade[]; entry: number | null; stop: number | null; take: number | null;
}) {
  const from = Math.max(0, upto - VIEW + 1);
  const shown = candles.slice(from, upto + 1);
  const values = shown.flatMap(c => [c.high, c.low]);
  for (let k = from; k <= upto; k++) for (const n of [ind.sma20[k], ind.sma50[k]]) if (n !== null) values.push(n);
  for (const n of [entry, stop, take]) if (n !== null) values.push(n);
  const hi = Math.max(...values) * 1.002, lo = Math.min(...values) * 0.998;
  const plot = W - PAD_R;
  const step = plot / VIEW;
  const x = (k: number) => (k - from + 0.5) * step;
  const y = (v: number) => 4 + (1 - (v - lo) / (hi - lo)) * (PRICE_H - 8);
  const volTop = PRICE_H + GAP, rsiTop = volTop + VOL_H + GAP;
  const maxVol = Math.max(...shown.map(c => c.volume));
  const rsiY = (v: number) => rsiTop + (1 - v / 100) * RSI_H;
  const line = (series: (number | null)[], map: (v: number) => number) =>
    series.slice(from, upto + 1).map((v, j) => v === null ? null : `${x(from + j).toFixed(1)},${map(v).toFixed(1)}`).filter(Boolean).join(" ");
  const ticks = [hi - (hi - lo) * 0.05, (hi + lo) / 2, lo + (hi - lo) * 0.05];
  const height = rsiTop + RSI_H + 4;
  const last = candles[upto];
  const change = (last.close / candles[from].close - 1) * 100;

  return (
    <figure className={styles.chartFrame}>
      <svg className={styles.chart} viewBox={`0 0 ${W} ${height}`} role="img" aria-label={`Price chart of the last ${shown.length} hours: ${signed(change)}, now ${price(last.close)}`}>
        {ticks.map(t => <g key={t}><line className={styles.grid} x1={0} x2={plot} y1={y(t)} y2={y(t)} /><text className={styles.axis} x={plot + 4} y={y(t) + 3}>{t.toFixed(0)}</text></g>)}
        {take !== null && <line className={styles.takeLine} x1={0} x2={plot} y1={y(take)} y2={y(take)} />}
        {stop !== null && <line className={styles.stopLine} x1={0} x2={plot} y1={y(stop)} y2={y(stop)} />}
        {entry !== null && <line className={styles.entryLine} x1={0} x2={plot} y1={y(entry)} y2={y(entry)} />}
        {shown.map((c, j) => {
          const k = from + j, cls = c.close >= c.open ? styles.up : styles.down;
          const top = y(Math.max(c.open, c.close)), bottom = y(Math.min(c.open, c.close));
          return (
            <g key={k} className={cls}>
              <line x1={x(k)} x2={x(k)} y1={y(c.high)} y2={y(c.low)} strokeWidth={1} />
              <rect x={x(k) - step * 0.35} width={step * 0.7} y={top} height={Math.max(bottom - top, 0.8)} />
            </g>
          );
        })}
        <polyline className={styles.sma20} points={line(ind.sma20, y)} />
        <polyline className={styles.sma50} points={line(ind.sma50, y)} />
        {trades.filter(t => t.index >= from && t.index <= upto).map(t => {
          const cx = x(t.index), c = candles[t.index];
          return t.side === "BUY"
            ? <path key={`b${t.index}`} className={styles.buyMark} d={`M${cx} ${y(c.low) + 3} l-4 7 h8 z`} />
            : <path key={`s${t.index}`} className={styles.sellMark} d={`M${cx} ${y(c.high) - 3} l-4 -7 h8 z`} />;
        })}
        {shown.map((c, j) => {
          const k = from + j, h = (c.volume / maxVol) * VOL_H;
          return <rect key={`v${k}`} className={(ind.volRatio[k] ?? 0) > 2 ? styles.volumeHigh : styles.volume} x={x(k) - step * 0.35} width={step * 0.7} y={volTop + VOL_H - h} height={h} />;
        })}
        <text className={styles.axis} x={plot + 4} y={volTop + VOL_H - 2}>Vol</text>
        {[30, 70].map(v => <g key={v}><line className={styles.grid} x1={0} x2={plot} y1={rsiY(v)} y2={rsiY(v)} /><text className={styles.axis} x={plot + 4} y={rsiY(v) + 3}>{v}</text></g>)}
        <polyline className={styles.rsiLine} points={line(ind.rsi14, rsiY)} />
        <text className={styles.axis} x={plot + 4} y={rsiTop + RSI_H}>RSI</text>
      </svg>
      <ul className={styles.legend}>
        <li><span className={`${styles.key} ${styles.keySma20}`} />SMA20</li>
        <li><span className={`${styles.key} ${styles.keySma50}`} />SMA50</li>
        <li><span className={`${styles.key} ${styles.keyRsi}`} />RSI</li>
        <li><span className={`${styles.key} ${styles.keyBuy}`} />Buy ▲</li>
        <li><span className={`${styles.key} ${styles.keySell}`} />Sell ▼</li>
        {entry !== null && <li>Dashed lines: buy price{stop !== null ? ", stop-loss, take-profit" : ""}</li>}
      </ul>
    </figure>
  );
}

function Results({ game, sim, onAgain, onNew }: { game: SavedGame; sim: Sim; onAgain: () => void; onNew: () => void }) {
  const { candles, state } = sim;
  const you = summarizeSim(state, candles);
  const scenario = scenarios[game.scenario];
  // Bots follow the bot's own safety rules; buy-and-hold never sells, so it runs without them.
  const bots = useMemo(() => strategyOrder.map(id => ({ id, ...strategies[id], result: runStrategy(candles, id, id === "hold" ? noRisk : safeRisk) })), [candles]);
  const best = bots.reduce((a, b) => b.result.returnPct > a.result.returnPct ? b : a);
  const beatAll = bots.every(bot => you.returnPct >= bot.result.returnPct);
  const row = (name: string, note: string, r: typeof you, mine = false) => (
    <tr className={mine ? styles.youRow : undefined}>
      <td>{name}<small>{note}</small></td>
      <td className={tone(r.returnPct)}>{signed(r.returnPct, 2)}</td>
      <td>{r.trades}</td>
      <td>{r.maxDrawdownPct.toFixed(1)}%</td>
      <td>{rupees(r.feesPaid + r.tdsWithheld)}</td>
    </tr>
  );

  return (
    <>
      <div>
        <div className={styles.kicker}>{scenario.name} · safety {game.safety ? "on" : "off"}</div>
        <h1 className={styles.title}>You finished with {rupees(you.endEquity)} ({signed(you.returnPct, 2)})</h1>
        <p className={styles.lead}>The coin moved {signed(you.priceChangePct, 2)} over {candles.length - HISTORY} hours. {beatAll ? "You beat every bot on this chart. Try another chart to see if it holds up." : `${best.name} did best here.`}</p>
      </div>
      <section className={styles.panel}>
        <h2 className={styles.sectionTitle}>You against the bots</h2>
        <div className={styles.scroll}>
          <table className={styles.table}>
            <thead><tr><th>Trader</th><th>Return</th><th>Trades</th><th>Worst fall</th><th>Fees + TDS</th></tr></thead>
            <tbody>
              {row("You", `${you.roundTrips} completed ${you.roundTrips === 1 ? "trade" : "trades"}${you.winRatePct !== null ? `, ${you.winRatePct}% winners` : ""}`, you, true)}
              {bots.map(bot => <Fragment key={bot.id}>{row(bot.name, bot.short, bot.result)}</Fragment>)}
            </tbody>
          </table>
        </div>
        <p className={styles.muted} data-spaced>
          The bots use the safety rules (25% per trade, stop-loss, take-profit). TDS is counted in your total because you can claim it back, but it stays locked until you file your tax return. You paid {rupees(you.feesPaid)} in fees and had {rupees(you.tdsWithheld)} withheld as TDS.
        </p>
      </section>
      <section className={`${styles.panel} ${styles.debrief}`}>
        <h2 className={styles.sectionTitle}>What this market teaches</h2>
        <p>{scenario.debrief}</p>
        <Link href={`/trading/learn#${scenario.lesson}`} prefetch={false}>Read the lesson →</Link>
      </section>
      <div className={styles.row}>
        <button type="button" className={styles.button} onClick={onAgain}><RotateCcw size={15} /> Play this market again (new chart)</button>
        <button type="button" className={`${styles.button} ${styles.outline}`} onClick={onNew}>Choose another market</button>
      </div>
    </>
  );
}

