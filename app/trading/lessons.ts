// Lessons for the trading course (/trading/learn). Rendered on the server; import it only from
// server components, never from a "use client" file.

export type LessonBlock = { heading?: string; text?: string[]; points?: string[] };
export type CheckQuestion = { question: string; options: string[]; answer: string; why: string };
export type Lesson = { id: string; title: string; minutes: number; intro: string; blocks: LessonBlock[]; remember: string[]; check: CheckQuestion[] };

export const lessons: Lesson[] = [
  {
    id: "markets",
    title: "How a market works",
    minutes: 6,
    intro: "A price is not set by anyone. It is simply where the last buyer and seller agreed to trade.",
    blocks: [
      {
        heading: "Buyers, sellers and the order book",
        text: [
          "An exchange keeps a list of everyone who wants to buy (bids) and everyone who wants to sell (asks). This list is the order book. A trade happens when a buyer's price meets a seller's price, and that trade becomes the new 'price' you see on the screen.",
          "The gap between the highest bid and the lowest ask is the spread. When you buy immediately, you pay the ask; when you sell immediately, you get the bid. So you lose the spread on every round trip, even before fees.",
        ],
      },
      {
        heading: "Why prices move",
        text: [
          "If more people want to buy than sell at the current price, buyers must offer more and the price rises. If more people want to sell, the price falls. News, fear, greed, big holders and simple chance all shift that balance.",
          "Liquidity is how much is waiting in the order book. In a liquid market (a large company's shares, Bitcoin on a big exchange) you can buy or sell a lot without moving the price. In an illiquid one (a tiny coin) one large order can move the price sharply, and you may not be able to sell when you want to.",
        ],
      },
      {
        heading: "Limit and market orders",
        points: [
          "A limit order says 'buy at ₹1,000 or less'. It waits in the order book until someone accepts that price, or it never fills.",
          "A market order says 'buy now at any price'. It fills at once, but in a fast or thin market the price can be worse than you expected. This difference is called slippage.",
          "Some exchanges (WazirX among them) accept only limit orders, so every order needs a price.",
        ],
      },
      {
        heading: "Shares, crypto and who protects you",
        text: [
          "Shares are part-ownership of a company and trade on exchanges regulated by SEBI, through SEBI-registered brokers. Crypto coins are not shares, not legal tender in India, and are not regulated by SEBI or the RBI as investments. Crypto exchanges must register with FIU-IND for anti-money-laundering rules, but that registration does not protect your money if the exchange fails.",
        ],
      },
    ],
    remember: [
      "Price is the last agreed trade, set by supply and demand.",
      "Every round trip costs you the spread plus fees.",
      "Small, illiquid markets move sharply and can trap you.",
    ],
    check: [
      {
        question: "You place a market order to buy a small coin during a sudden rush. What is most likely?",
        options: ["You pay exactly the last price shown", "You pay more than the last price shown", "The order is refused", "You pay less than the last price shown"],
        answer: "You pay more than the last price shown",
        why: "A market order takes whatever sellers are offering. In a rush, the cheapest asks are taken quickly, so your fill is worse than the last price. That gap is slippage.",
      },
      {
        question: "Who regulates share trading on Indian stock exchanges?",
        options: ["RBI", "SEBI", "FIU-IND", "No one"],
        answer: "SEBI",
        why: "SEBI regulates the stock market and registers brokers and investment advisers. Crypto investments are outside SEBI's protection.",
      },
    ],
  },
  {
    id: "charts",
    title: "Reading a candlestick chart",
    minutes: 5,
    intro: "Each candle shows four prices for one period of time: open, high, low and close.",
    blocks: [
      {
        heading: "One candle",
        points: [
          "The body runs from the open to the close. Green (up) means it closed higher than it opened; red (down) means it closed lower.",
          "The thin lines (wicks) show the highest and lowest prices reached during that period.",
          "In the simulator each candle is one hour, so 24 candles make a day.",
        ],
      },
      {
        heading: "Volume",
        text: [
          "Volume is how much was traded. A big move on high volume means many people took part. A sudden jump in volume on a quiet coin is often the start of a pump, or of panic selling.",
        ],
      },
      {
        heading: "Timeframes change the story",
        text: [
          "The same coin can look like it is crashing on a 5-minute chart and rising on a daily chart. Short timeframes are mostly noise. Beginners who stare at 1-minute charts trade far too often and pay far too much in fees.",
        ],
      },
    ],
    remember: [
      "Body = open to close; wicks = high and low.",
      "Volume tells you how many people are behind a move.",
      "Short timeframes are mostly noise.",
    ],
    check: [
      {
        question: "A red candle has a long lower wick. What happened during that hour?",
        options: ["The price never fell below the open", "The price fell a lot, then recovered some of the fall before closing", "The price closed at its lowest point", "No trades took place"],
        answer: "The price fell a lot, then recovered some of the fall before closing",
        why: "The lower wick marks the lowest price. A long wick below a body means the price dropped far, then buyers pushed it back up before the close.",
      },
    ],
  },
  {
    id: "indicators",
    title: "Indicators: useful, not magic",
    minutes: 6,
    intro: "Indicators are calculations on past prices. They describe what has already happened; they cannot see the future.",
    blocks: [
      {
        heading: "Moving averages (SMA)",
        text: [
          "SMA20 is the average closing price of the last 20 candles. When the short average (SMA20) crosses above the long one (SMA50), the recent trend is up. The trend bot in the simulator trades on these crosses.",
          "Moving averages lag. By the time a cross happens, much of the move is often over. In a sideways market they cross again and again, and each false signal costs fees.",
        ],
      },
      {
        heading: "RSI (Relative Strength Index)",
        text: [
          "RSI measures how strong recent gains were compared with recent losses, on a scale of 0 to 100. Below 30 is called 'oversold' and above 70 'overbought'.",
          "Oversold does not mean 'about to rise'. In a crash, RSI can stay below 30 while the price keeps falling. The dip bot in the simulator shows this: it keeps buying a falling price.",
        ],
      },
      {
        heading: "Others you will hear about",
        points: [
          "MACD: the gap between two moving averages, used to judge momentum.",
          "Bollinger Bands: lines two standard deviations above and below the average, showing how volatile the price is.",
          "ATR: the average size of a candle's range, also a measure of volatility.",
        ],
      },
      {
        heading: "The honest test",
        text: [
          "Any rule can look brilliant on the chart it was invented on. The real test is whether it beats simply buying and holding, after costs, on data it has never seen. Most simple rules do not.",
        ],
      },
    ],
    remember: [
      "Indicators describe the past; they do not predict.",
      "Moving averages lag and give false signals in sideways markets.",
      "Always compare a strategy with buy-and-hold after costs.",
    ],
    check: [
      {
        question: "RSI has been below 30 for two days and the price keeps falling. What does this tell you?",
        options: ["A rise is guaranteed soon", "Selling pressure is strong; oversold can stay oversold", "The indicator is broken", "You should buy with all your money"],
        answer: "Selling pressure is strong; oversold can stay oversold",
        why: "RSI only measures recent gains against losses. A strong downtrend keeps RSI low for a long time. It is a description, not a promise of a bounce.",
      },
    ],
  },
  {
    id: "costs",
    title: "Costs and tax in India",
    minutes: 7,
    intro: "Costs are the one part of trading you can be certain about, and they quietly eat most beginners' profits.",
    blocks: [
      {
        heading: "What one trade costs",
        points: [
          "Exchange fee: often about 0.1–0.5% of the trade, charged on both the buy and the sell. The simulator uses 0.2%.",
          "Spread and slippage: the price you get is a little worse than the price you see. The simulator uses 0.1% each way.",
          "GST of 18% is charged on the exchange's fee in India.",
        ],
      },
      {
        heading: "Tax on crypto (rules for 2026, unchanged by the Income-tax Act, 2025; check for changes)",
        points: [
          "1% TDS is deducted from the amount you receive when you sell, above small yearly limits. You can claim it back when you file your income-tax return, but until then that cash is locked.",
          "Profits are taxed at a flat 30% (plus cess), whatever your income slab.",
          "Losses cannot be set off against other income or against gains from another coin, and cannot be carried forward. A ₹5,000 loss on one coin does not reduce the tax on a ₹5,000 gain on another.",
          "Shares are taxed differently, with their own short-term and long-term rates. Ask a chartered accountant (CA) about your own situation.",
        ],
      },
      {
        heading: "A worked example",
        text: [
          "You buy ₹2,000 of a coin and sell it after a 2% rise. The sale is worth about ₹2,040 before costs. Fees and slippage on both sides take about ₹12, so your profit is about ₹28. TDS of about ₹20 is held back until you file your return, and 30% tax on the ₹28 leaves you around ₹20. Do this ten times a day with a few losers mixed in, and the costs win.",
        ],
      },
    ],
    remember: [
      "A round trip costs about 0.5–1% before tax.",
      "Crypto profits are taxed at 30%, and losses do not reduce that tax.",
      "Trading often is the surest way to make the exchange rich.",
    ],
    check: [
      {
        question: "You lost ₹3,000 on coin A and gained ₹3,000 on coin B in the same year. Under the 2026 rules, what is your taxable crypto gain?",
        options: ["₹0", "₹3,000", "₹6,000", "−₹3,000, carried forward"],
        answer: "₹3,000",
        why: "Crypto losses cannot be set off against crypto gains on another coin, so the full ₹3,000 gain on coin B is taxed at 30%.",
      },
      {
        question: "What happens to the 1% TDS deducted when you sell?",
        options: ["It is a fee the exchange keeps", "It is lost forever", "It counts toward your tax and can be claimed when you file your return", "It is refunded the next day"],
        answer: "It counts toward your tax and can be claimed when you file your return",
        why: "TDS is tax collected in advance. It is credited to your PAN and adjusted when you file, but the cash is not available for trading until then.",
      },
    ],
  },
  {
    id: "risk",
    title: "Managing risk",
    minutes: 7,
    intro: "Good traders are not people who are always right. They are people who lose small when they are wrong.",
    blocks: [
      {
        heading: "Losses are harder to recover than they look",
        points: [
          "Lose 10%, and you need +11% to get back to where you started.",
          "Lose 25%, and you need +33%.",
          "Lose 50%, and you need +100%.",
          "Lose 90%, and you need +900%.",
        ],
      },
      {
        heading: "The safety rules in the simulator",
        points: [
          "Position size: use at most 25% of your balance (and at most ₹2,000) on one trade. One bad trade then cannot ruin you.",
          "Stop-loss: sell automatically if the price falls 3% below your buy price. Decide your exit before you enter.",
          "Take-profit: sell automatically at +6%, so greed does not turn a winner into a loser.",
          "Daily loss limit: stop buying for the day after losing ₹500. Chasing losses ('revenge trading') is how small losses become big ones.",
          "Trade limit: at most 6 trades a day, to stop overtrading.",
        ],
      },
      {
        heading: "Habits that keep you safe",
        points: [
          "Only use money you could lose completely without hurting your studies, rent, food or family.",
          "Never borrow to trade, and avoid leverage, futures and options until you understand them deeply. With 10x leverage, a 10% move against you wipes out everything.",
          "Do not 'average down' by buying more of a falling coin to lower your average price, unless that was your plan before you bought.",
          "Write down why you made each trade. Review the losers honestly.",
        ],
      },
    ],
    remember: [
      "Decide your exit before you buy.",
      "Small positions keep one mistake from ruining you.",
      "A 50% loss needs a 100% gain to recover.",
    ],
    check: [
      {
        question: "Your ₹10,000 falls to ₹5,000. What gain do you now need to get back to ₹10,000?",
        options: ["50%", "75%", "100%", "200%"],
        answer: "100%",
        why: "₹5,000 has to double to reach ₹10,000. That is why limiting losses matters more than finding big winners.",
      },
      {
        question: "With 10x leverage, how far does the price need to move against you to wipe out your money?",
        options: ["About 1%", "About 10%", "About 50%", "100%"],
        answer: "About 10%",
        why: "Leverage multiplies both gains and losses. At 10x, a 10% move against you is a 100% loss of your own money, and fees make it happen even sooner.",
      },
    ],
  },
  {
    id: "safety",
    title: "Keeping your money and accounts safe",
    minutes: 6,
    intro: "Most money lost in crypto is not lost to bad trades. It is lost to hacks, collapsed exchanges and stolen passwords.",
    blocks: [
      {
        heading: "Exchanges can fail",
        text: [
          "In July 2024, hackers stole about $230 million from WazirX, India's best-known crypto exchange. Withdrawals were frozen and users waited many months to recover part of their money through a court-approved restructuring. In 2022, FTX, then one of the largest exchanges in the world, collapsed after it was found to be using customers' money.",
          "Keep only what you are actively trading on an exchange. An exchange is not a bank, and there is no deposit insurance.",
        ],
      },
      {
        heading: "Protect your accounts",
        points: [
          "Use a unique, long password and turn on two-factor authentication with an authenticator app, not only SMS.",
          "Never share an OTP, password, recovery (seed) phrase or private key with anyone, including people who say they are from the exchange or 'support'. Real support never asks for these.",
          "If you create an API key for a trading bot, give it trading permission only. Never enable withdrawals, and restrict it to your own IP address if you can.",
          "Download apps only from the official app store listing or website. Fake trading apps that show made-up profits are common.",
          "Check the web address before you log in. Phishing sites copy real ones exactly.",
        ],
      },
      {
        heading: "Before you put in money",
        points: [
          "Build an emergency fund first: a few months of essential expenses in a bank account.",
          "Know the difference between investing for years and trading for days. Most long-term wealth comes from steady saving, not trading.",
          "Investment advice for shares should come from a SEBI-registered investment adviser. You can check a registration on the SEBI website.",
        ],
      },
    ],
    remember: [
      "Not your keys, not your coins: an exchange can freeze or lose your money.",
      "Never share an OTP, seed phrase or password with anyone.",
      "Bot API keys: trading only, never withdrawals.",
    ],
    check: [
      {
        question: "Someone from 'WazirX support' messages you on Telegram and asks for your OTP to unlock your frozen funds. What do you do?",
        options: ["Share it quickly before the offer expires", "Share only half the OTP", "Never share it; contact support only through the official app or website", "Ask them to call you first, then share it"],
        answer: "Never share it; contact support only through the official app or website",
        why: "No real support team asks for an OTP. Anyone who has your OTP can take over your account. Scammers often target people who are already worried about lost funds.",
      },
    ],
  },
  {
    id: "scams",
    title: "Spotting scams",
    minutes: 6,
    intro: "If someone promises sure profits, they are making money from you, not for you.",
    blocks: [
      {
        heading: "Common traps",
        points: [
          "Guaranteed returns: '3% a day', 'double your money in a month'. No honest investment can promise this.",
          "Tip groups on Telegram, WhatsApp or Instagram: paid 'signals' or a 'VIP' group. Often the organisers buy first and sell to their own members (pump and dump).",
          "Trading bots for a fee: 'our AI bot makes 20% a month'. If it worked, they would not need your subscription money.",
          "Task scams: you are paid small amounts to like videos or rate hotels, then asked to 'invest' to unlock bigger tasks. The early payouts are bait.",
          "Romance or friendship scams: a new online friend shows off profits and guides you to a trading site they control. You can deposit, but never withdraw.",
          "Recovery scams: after you lose money, someone offers to get it back for a fee. They are often the same scammers.",
        ],
      },
      {
        heading: "Warning signs",
        points: [
          "Pressure to act now: 'only today', 'last few spots'.",
          "You can deposit easily but withdrawals need a new 'tax', 'fee' or 'verification payment'.",
          "Payment to a personal bank account or UPI ID instead of the platform.",
          "Screenshots of profits as proof. Screenshots are easy to fake.",
        ],
      },
      {
        heading: "If you have been cheated",
        points: [
          "Call the national cybercrime helpline 1930 as soon as possible. Reporting quickly gives the best chance of freezing the money.",
          "File a complaint at cybercrime.gov.in and keep every screenshot, transaction ID and phone number.",
          "Tell your bank. Do not pay anyone who promises to recover the money.",
        ],
      },
    ],
    remember: [
      "Guaranteed returns are always a lie.",
      "If you cannot withdraw, it is a scam; do not pay more to unlock it.",
      "Report fraud on 1930 and at cybercrime.gov.in.",
    ],
    check: [
      {
        question: "A site shows your ₹5,000 has grown to ₹40,000, but says you must pay ₹8,000 'tax' before you can withdraw. What is going on?",
        options: ["Normal tax rules", "A scam: the profit is fake and the 'tax' is more money for the scammer", "A temporary bank delay", "A sign the investment is working"],
        answer: "A scam: the profit is fake and the 'tax' is more money for the scammer",
        why: "Real tax is deducted from your payout or paid to the government, never as an upfront payment to the platform. The balance on a scam site is just a number on a screen.",
      },
    ],
  },
  {
    id: "bots",
    title: "Trading bots and AI",
    minutes: 5,
    intro: "A bot only follows rules faster. It does not make a losing idea profitable.",
    blocks: [
      {
        heading: "How a careful bot is built",
        points: [
          "Market data comes in: candles and indicators.",
          "A strategy (a rule, or an AI model) proposes BUY, SELL or HOLD.",
          "A separate risk manager has the final say. It enforces the stop-loss, size limits and daily loss limit, and the strategy cannot override it. The simulator works the same way.",
          "Every decision and its reason is logged, so you can check it later.",
        ],
      },
      {
        heading: "Backtest, then paper trade, then (maybe) real money",
        text: [
          "A backtest runs the strategy on past data. It is easy to fool yourself: if you keep adjusting rules until the past looks good, you have only memorised the past (overfitting). AI models can also 'remember' famous market moves from their training data.",
          "Paper trading uses live prices with fake money for weeks. Only if a strategy beats buy-and-hold after costs, in both the backtest and paper trading, is it worth trying with a small amount of real money.",
        ],
      },
      {
        heading: "What AI can and cannot do",
        text: [
          "An AI model can read indicators and explain them in plain words, and it can be told to be cautious. It cannot see the future, it can be confidently wrong, and each request costs money. Treat it as a second opinion, never as a guarantee.",
        ],
      },
    ],
    remember: [
      "A risk manager the strategy cannot override is the most important part of a bot.",
      "Backtest, then paper trade for weeks, before real money.",
      "If a strategy does not beat buy-and-hold after costs, do not use it.",
    ],
    check: [
      {
        question: "Your bot made 60% in a backtest after you tuned its settings 50 times on the same data. What should you do next?",
        options: ["Put all your savings in", "Test it on data it has never seen and paper trade it for weeks", "Tune it more to reach 100%", "Sell it to friends"],
        answer: "Test it on data it has never seen and paper trade it for weeks",
        why: "Tuning on the same data finds settings that fit the past, not the future. Only fresh data and paper trading show whether it really works.",
      },
    ],
  },
];
