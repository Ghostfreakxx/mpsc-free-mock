import TradingSimulator from "./trading-simulator";

export const metadata = {
  title: "Trading Simulator | MPSC Free Mock",
  description: "Free paper-trading practice with pretend money: read a price chart, buy, sell or wait, and compare yourself with simple trading bots after real fees and TDS.",
};

export default function Page() {
  return <TradingSimulator />;
}
