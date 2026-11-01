import type { Item } from "./question-builders.ts";

// Aptitude question templates, shared by the bank and the practice pages. The batch files build their
// fixed questions with these, and the practice pages build fresh-number versions with the same code when
// a question comes back (app/lib/question-variants.ts). Distractors are the usual slips for each
// calculation. Browser code loads this file, so it must stay small and must not import the bank.

export type Rng = () => number;
export type AptitudeTemplate = {
  // Reads the numbers back out of a prompt this template wrote; null if the prompt is not its own.
  parse: (prompt: string) => number[] | null;
  build: (values: readonly number[]) => Item;
  // Numbers chosen so the answer comes out clean.
  sample: (rng: Rng) => number[];
};

const round = (value: number) => Number(value.toFixed(1));
const round2 = (value: number) => Number(value.toFixed(2));
const listOf = (values: readonly number[]) => `${values.slice(0, -1).join(", ")} and ${values.at(-1)}`;
const sum = (values: readonly number[]) => values.reduce((a, b) => a + b, 0);
const int = (rng: Rng, min: number, max: number) => min + Math.floor(rng() * (max - min + 1));
const pick = <T,>(rng: Rng, values: readonly T[]) => values[Math.floor(rng() * values.length)];
const numbers = (pattern: RegExp) => (prompt: string) => {
  const match = prompt.match(pattern);
  return match ? match.slice(1).map(Number) : null;
};

// A boat's speed in still water and a slower stream, never exactly half the boat's speed (which
// would make two of the usual slips give the same option).
function boatSample(rng: Rng, fastest = 30): [number, number] {
  const boat = int(rng, 6, fastest);
  let stream = int(rng, 1, Math.min(8, boat - 2));
  if (2 * stream === boat) stream -= 1;
  return [boat, stream];
}

// Tries random numbers until `accept` finds a clean set; `fallback` is a known clean one.
function search(rng: Rng, draw: () => number[], accept: (values: number[]) => boolean, fallback: number[]): number[] {
  for (let tries = 0; tries < 400; tries += 1) {
    const values = draw();
    if (accept(values)) return values;
  }
  return fallback;
}

// Principal and rate pairs whose two-year compound interest is a whole number of rupees.
function compoundSample(rng: Rng): number[] {
  const [rate, unit, most] = pick(rng, [[10, 100, 100], [5, 400, 25], [20, 100, 50], [4, 2500, 4], [8, 2500, 4]] as const);
  return [unit * int(rng, Math.ceil(500 / unit), most), rate];
}

export const aptitude = {
  // Percentages and simple interest (pattern-batch-topics.ts).
  percentOf: {
    parse: numbers(/^What is ([\d.]+)% of (\d+)\?$/),
    build: ([p, n]) => {
      const value = round((p / 100) * n);
      return [`What is ${p}% of ${n}?`, String(value), [String(round(value * 10)), String(round(value / 10)), String(round(value + p))], `${p}/100 x ${n} = ${value}.`, "Section 6.2: translate and solve basic percent equations"];
    },
    sample: rng => [pick(rng, [5, 10, 15, 20, 25, 30, 35, 40, 45, 60, 75]), 20 * int(rng, 2, 40)],
  },
  partPercent: {
    parse: numbers(/^(\d+) is what percent of (\d+)\?$/),
    build: ([part, whole]) => {
      const value = round((part / whole) * 100);
      return [`${part} is what percent of ${whole}?`, `${value}%`, [`${round((whole / part) * 100)}%`, `${part}%`, `${round(((whole - part) / whole) * 100)}%`], `${part}/${whole} x 100 = ${value}%.`, "Section 6.2: translate and solve basic percent equations"];
    },
    sample: rng => {
      // Multiples of 20 with percentages in steps of 5 keep the part a whole number.
      const whole = 20 * int(rng, 1, 20);
      return [(whole * pick(rng, [10, 15, 20, 25, 30, 40, 45, 60, 75])) / 100, whole];
    },
  },
  percentRise: {
    parse: numbers(/^A price rises from Rs (\d+) to Rs (\d+)\. What is the percentage increase\?$/),
    build: ([from, to]) => {
      const change = to - from, value = round((change / from) * 100);
      return [`A price rises from Rs ${from} to Rs ${to}. What is the percentage increase?`, `${value}%`, [`${change}%`, `${round((change / to) * 100)}%`, `${round((to / from) * 100)}%`], `Increase = ${to} - ${from} = ${change}; ${change}/${from} x 100 = ${value}%. Always divide by the original amount.`, "Section 6.2: find percent increase"];
    },
    sample: rng => {
      const from = 20 * int(rng, 2, 25);
      return [from, (from * (100 + pick(rng, [10, 15, 20, 25, 30, 40, 50]))) / 100];
    },
  },
  percentFall: {
    parse: numbers(/^A price falls from Rs (\d+) to Rs (\d+)\. What is the percentage decrease\?$/),
    build: ([from, to]) => {
      const change = from - to, value = round((change / from) * 100);
      return [`A price falls from Rs ${from} to Rs ${to}. What is the percentage decrease?`, `${value}%`, [`${change}%`, `${round((change / to) * 100)}%`, `${round((to / from) * 100)}%`], `Decrease = ${from} - ${to} = ${change}; ${change}/${from} x 100 = ${value}%. Always divide by the original amount.`, "Section 6.2: find percent decrease"];
    },
    sample: rng => {
      const from = 20 * int(rng, 2, 25);
      return [from, (from * (100 - pick(rng, [10, 15, 20, 25, 30, 40]))) / 100];
    },
  },
  simpleInterest: {
    parse: numbers(/^Find the simple interest on Rs (\d+) at (\d+)% per year for (\d+) years\.$/),
    build: ([principal, rate, years]) => {
      const interest = (principal * rate * years) / 100;
      return [`Find the simple interest on Rs ${principal} at ${rate}% per year for ${years} years.`, `Rs ${interest}`, [`Rs ${(principal * rate) / 100}`, `Rs ${principal + interest}`, `Rs ${interest * years}`], `I = P x r x t = ${principal} x ${rate}/100 x ${years} = Rs ${interest}.`, "Section 6.4: simple interest formula I = Prt"];
    },
    sample: rng => [100 * int(rng, 5, 60), int(rng, 2, 12), int(rng, 2, 6)],
  },
  simpleAmount: {
    parse: numbers(/^Rs (\d+) is invested at (\d+)% simple interest per year for (\d+) years\. What is the total amount at the end\?$/),
    build: ([principal, rate, years]) => {
      const interest = (principal * rate * years) / 100, amount = principal + interest;
      return [`Rs ${principal} is invested at ${rate}% simple interest per year for ${years} years. What is the total amount at the end?`, `Rs ${amount}`, [`Rs ${interest}`, `Rs ${principal + (principal * rate) / 100}`, `Rs ${amount + interest}`], `I = ${principal} x ${rate}/100 x ${years} = Rs ${interest}; amount = ${principal} + ${interest} = Rs ${amount}.`, "Section 6.4: total amount = principal + interest"];
    },
    sample: rng => [100 * int(rng, 5, 60), int(rng, 2, 12), int(rng, 2, 6)],
  },
  simpleRate: {
    parse: numbers(/^Rs (\d+) earns Rs (\d+) simple interest in (\d+) years\. What is the annual interest rate\?$/),
    build: ([principal, interest, years]) => {
      const rate = (interest * 100) / (principal * years);
      return [`Rs ${principal} earns Rs ${interest} simple interest in ${years} years. What is the annual interest rate?`, `${rate}%`, [`${(interest * 100) / principal}%`, `${rate * 2}%`, `${rate / 2}%`], `r = (I x 100) / (P x t) = (${interest} x 100) / (${principal} x ${years}) = ${rate}%.`, "Section 6.4: solve I = Prt for the rate"];
    },
    sample: rng => {
      const principal = 100 * int(rng, 5, 60), years = int(rng, 2, 6);
      return [principal, (principal * 2 * int(rng, 1, 6) * years) / 100, years];
    },
  },

  // Averages, ratio and proportion, discount, tax and commission (batch-three-topics.ts).
  mean: {
    parse: prompt => {
      const match = prompt.match(/^Find the mean of ([\d, ]+) and (\d+)\.$/);
      return match ? [...match[1].split(", "), match[2]].map(Number) : null;
    },
    build: values => {
      const total = sum(values), mean = round(total / values.length);
      return [`Find the mean of ${listOf(values)}.`, String(mean), [String(total), String(Math.max(...values) - Math.min(...values)), String(round(total / (values.length - 1)))], `Mean = sum / count = ${total}/${values.length} = ${mean}.`, "Section 5.5: calculate the mean of a set of numbers"];
    },
    sample: rng => {
      const values = Array.from({ length: int(rng, 3, 5) }, () => int(rng, 3, 40));
      // Nudge the largest value so the mean is a whole number.
      values.sort((a, b) => a - b);
      values[values.length - 1] += (values.length - (sum(values) % values.length)) % values.length;
      return values;
    },
  },
  meanSum: {
    parse: numbers(/^The mean of (\d+) numbers is (\d+)\. What is their sum\?$/),
    build: ([count, mean]) => {
      const total = count * mean;
      return [`The mean of ${count} numbers is ${mean}. What is their sum?`, String(total), [String(count + mean), String(mean), String(total / 2)], `Sum = count x mean = ${count} x ${mean} = ${total}.`, "Section 5.5: mean = sum / count, rearranged"];
    },
    sample: rng => [int(rng, 4, 12), int(rng, 6, 40)],
  },
  meanFourth: {
    parse: numbers(/^The mean of 4 numbers is (\d+)\. Three of them are (\d+), (\d+) and (\d+)\. Find the fourth\.$/),
    build: ([mean, a, b, c]) => {
      const fourth = 4 * mean - (a + b + c);
      return [`The mean of 4 numbers is ${mean}. Three of them are ${a}, ${b} and ${c}. Find the fourth.`, String(fourth), [String(mean), String(4 * mean), String(round((a + b + c) / 3))], `Sum of all four = 4 x ${mean} = ${4 * mean}; fourth = ${4 * mean} - ${a + b + c} = ${fourth}.`, "Section 5.5: mean = sum / count, rearranged"];
    },
    sample: rng => {
      const mean = int(rng, 10, 30);
      return [mean, mean + int(rng, -6, 6), mean + int(rng, -6, 6), mean + int(rng, -6, 6)];
    },
  },
  ratioShare: {
    parse: numbers(/^Divide Rs (\d+) in the ratio (\d+):(\d+)\. What is the larger share\?$/),
    build: ([total, a, b]) => {
      const share = (total * b) / (a + b);
      return [`Divide Rs ${total} in the ratio ${a}:${b}. What is the larger share?`, `Rs ${share}`, [`Rs ${(total * a) / (a + b)}`, `Rs ${total / 2}`, `Rs ${round((total * b) / a)}`], `Larger share = ${total} x ${b}/(${a} + ${b}) = Rs ${share}.`, "Section 6.5: proportion applications"];
    },
    sample: rng => {
      const [a, b] = pick(rng, [[1, 2], [1, 3], [2, 3], [2, 5], [3, 4], [3, 5], [4, 5], [3, 7], [5, 7]]);
      return [(a + b) * 10 * int(rng, 2, 20), a, b];
    },
  },
  unitCost: {
    parse: numbers(/^If (\d+) pens cost Rs (\d+), how much do (\d+) pens cost\?$/),
    build: ([count, cost, wanted]) => {
      const price = (cost / count) * wanted;
      return [`If ${count} pens cost Rs ${cost}, how much do ${wanted} pens cost?`, `Rs ${price}`, [`Rs ${cost / count}`, `Rs ${cost + (wanted - count)}`, `Rs ${round((cost * count) / wanted)}`], `One pen costs ${cost}/${count} = Rs ${cost / count}; ${wanted} pens cost Rs ${price}.`, "Section 6.5: solve proportions"];
    },
    sample: rng => {
      const count = int(rng, 2, 8);
      return [count, count * int(rng, 5, 30), int(rng, 3, 15)];
    },
  },
  solveProportion: {
    parse: numbers(/^Solve for x: x\/(\d+) = (\d+)\/(\d+)\.$/),
    build: ([a, b, c]) => {
      const x = (a * b) / c;
      return [`Solve for x: x/${a} = ${b}/${c}.`, String(x), [String(round((a * c) / b)), String(round((b * c) / a)), String(a + b - c)], `x = ${a} x ${b}/${c} = ${x}.`, "Section 6.5: solve proportions by cross-multiplication"];
    },
    sample: rng => {
      const c = int(rng, 2, 9);
      return [c * int(rng, 1, 5), int(rng, 2, 9), c];
    },
  },
  discount: {
    parse: numbers(/^An item marked Rs (\d+) is sold at a ([\d.]+)% discount\. What is the sale price\?$/),
    build: ([price, rate]) => {
      const discount = (price * rate) / 100, sale = price - discount;
      return [`An item marked Rs ${price} is sold at a ${rate}% discount. What is the sale price?`, `Rs ${sale}`, [`Rs ${discount}`, `Rs ${price + discount}`, `Rs ${price - rate}`], `Discount = ${price} x ${rate}/100 = Rs ${discount}; sale price = ${price} - ${discount} = Rs ${sale}.`, "Section 6.3: discount applications"];
    },
    sample: rng => [80 * int(rng, 3, 40), pick(rng, [5, 10, 12.5, 15, 20, 25, 30, 40])],
  },
  salesTax: {
    parse: numbers(/^Sales tax of (\d+)% is charged on a Rs (\d+) purchase\. What is the total cost\?$/),
    build: ([rate, price]) => {
      const tax = (price * rate) / 100, total = price + tax;
      return [`Sales tax of ${rate}% is charged on a Rs ${price} purchase. What is the total cost?`, `Rs ${total}`, [`Rs ${tax}`, `Rs ${price - tax}`, `Rs ${price + rate}`], `Tax = ${price} x ${rate}/100 = Rs ${tax}; total = ${price} + ${tax} = Rs ${total}.`, "Section 6.3: sales tax applications"];
    },
    sample: rng => [int(rng, 2, 18), 100 * int(rng, 2, 30)],
  },
  commission: {
    parse: numbers(/^A salesperson earns (\d+)% commission on sales of Rs (\d+)\. What is the commission\?$/),
    build: ([rate, sales]) => {
      const commission = (sales * rate) / 100;
      return [`A salesperson earns ${rate}% commission on sales of Rs ${sales}. What is the commission?`, `Rs ${commission}`, [`Rs ${commission * 10}`, `Rs ${commission / 10}`, `Rs ${sales + commission}`], `Commission = ${sales} x ${rate}/100 = Rs ${commission}.`, "Section 6.3: commission applications"];
    },
    sample: rng => [int(rng, 1, 10), 500 * int(rng, 4, 60)],
  },

  // Speed, distance and time; profit, loss and mark-up (batch-four-topics.ts).
  averageSpeed: {
    parse: numbers(/^A car travels (\d+) km in (\d+) hours\. What is its average speed\?$/),
    build: ([distance, hours]) => {
      const speed = distance / hours;
      return [`A car travels ${distance} km in ${hours} hours. What is its average speed?`, `${speed} km/h`, [`${distance * hours} km/h`, `${distance - hours} km/h`, `${round(distance / (hours + 1))} km/h`], `Speed = distance / time = ${distance}/${hours} = ${speed} km/h.`, "Section 3.5: distance = rate x time"];
    },
    sample: rng => {
      const hours = int(rng, 2, 8);
      return [hours * 5 * int(rng, 6, 18), hours];
    },
  },
  distance: {
    parse: numbers(/^A train moves at (\d+) km\/h\. How far does it travel in (\d+) hours\?$/),
    build: ([speed, hours]) => {
      const distance = speed * hours;
      return [`A train moves at ${speed} km/h. How far does it travel in ${hours} hours?`, `${distance} km`, [`${round(speed / hours)} km`, `${speed + hours} km`, `${distance * 2} km`], `Distance = speed x time = ${speed} x ${hours} = ${distance} km.`, "Section 3.5: distance = rate x time"];
    },
    sample: rng => [3 * int(rng, 10, 30), int(rng, 2, 8)],
  },
  travelTime: {
    parse: numbers(/^How long does it take to cover (\d+) km at (\d+) km\/h\?$/),
    build: ([distance, speed]) => {
      const hours = distance / speed;
      return [`How long does it take to cover ${distance} km at ${speed} km/h?`, `${hours} hours`, [`${hours + 1} hours`, `${hours - 1} hours`, `${round2(speed / distance)} hours`], `Time = distance / speed = ${distance}/${speed} = ${hours} hours.`, "Section 3.5: distance = rate x time, solved for time"];
    },
    sample: rng => {
      const speed = pick(rng, [30, 35, 40, 45, 50, 60, 70, 75, 80]);
      return [speed * int(rng, 2, 8), speed];
    },
  },
  profitPercent: {
    parse: numbers(/^A shopkeeper buys an item for Rs (\d+) and sells it for Rs (\d+)\. What is the profit percent\?$/),
    build: ([cost, sale]) => {
      const profit = sale - cost, percent = round((profit / cost) * 100);
      return [`A shopkeeper buys an item for Rs ${cost} and sells it for Rs ${sale}. What is the profit percent?`, `${percent}%`, [`${profit}%`, `${round((profit / sale) * 100)}%`, `${round((sale / cost) * 100)}%`], `Profit = ${sale} - ${cost} = Rs ${profit}; ${profit}/${cost} x 100 = ${percent}%. Profit percent is on the cost price.`, "Section 6.2: percent increase applied to profit"];
    },
    sample: rng => {
      const cost = 100 * int(rng, 2, 20);
      return [cost, (cost * (100 + pick(rng, [5, 10, 12, 15, 20, 25, 30, 40]))) / 100];
    },
  },
  lossPrice: {
    parse: numbers(/^An item bought for Rs (\d+) is sold at a loss of (\d+)%\. What is the selling price\?$/),
    build: ([cost, rate]) => {
      const loss = (cost * rate) / 100, sale = cost - loss;
      return [`An item bought for Rs ${cost} is sold at a loss of ${rate}%. What is the selling price?`, `Rs ${sale}`, [`Rs ${loss}`, `Rs ${cost + loss}`, `Rs ${cost - rate}`], `Loss = ${cost} x ${rate}/100 = Rs ${loss}; selling price = ${cost} - ${loss} = Rs ${sale}.`, "Section 6.2: percent decrease applied to loss"];
    },
    sample: rng => [100 * int(rng, 2, 20), pick(rng, [5, 10, 15, 20, 25, 30])],
  },
  markup: {
    parse: numbers(/^A shop marks up an item costing Rs (\d+) by (\d+)%\. What is the marked price\?$/),
    build: ([cost, rate]) => {
      const markup = (cost * rate) / 100, price = cost + markup;
      return [`A shop marks up an item costing Rs ${cost} by ${rate}%. What is the marked price?`, `Rs ${price}`, [`Rs ${markup}`, `Rs ${cost - markup}`, `Rs ${cost + rate}`], `Mark-up = ${cost} x ${rate}/100 = Rs ${markup}; marked price = ${cost} + ${markup} = Rs ${price}.`, "Section 6.3: mark-up applications"];
    },
    sample: rng => [100 * int(rng, 2, 20), pick(rng, [10, 20, 25, 30, 40, 50])],
  },
  // Time and work; compound interest (batch-six-topics.ts). Mizo drafts for these are pending.
  workTogether: {
    parse: numbers(/^A can finish a job in (\d+) days and B can finish it in (\d+) days\. Working together, how many days will they take\?$/),
    build: ([a, b]) => {
      const days = round((a * b) / (a + b));
      return [`A can finish a job in ${a} days and B can finish it in ${b} days. Working together, how many days will they take?`, `${days} days`, [`${a + b} days`, `${round((a + b) / 2)} days`, `${round(Math.min(a, b) / 2)} days`], `Together they do 1/${a} + 1/${b} = ${a + b}/${a * b} of the job each day, so they need ${a * b}/${a + b} = ${days} days.`, "Section 7.5: work applications of rational equations"];
    },
    sample: rng => {
      const [a, b] = pick(rng, [[3, 6], [4, 12], [6, 12], [10, 15], [12, 24], [20, 30], [12, 36], [15, 30], [30, 60]]);
      const k = int(rng, 1, 2);
      return rng() < 0.5 ? [a * k, b * k] : [b * k, a * k];
    },
  },
  workersDays: {
    parse: numbers(/^(\d+) workers can finish a job in (\d+) days\. How many days will (\d+) workers take, working at the same rate\?$/),
    build: ([workers, days, others]) => {
      const total = workers * days, needed = round(total / others);
      return [`${workers} workers can finish a job in ${days} days. How many days will ${others} workers take, working at the same rate?`, `${needed} days`, [`${round((days * others) / workers)} days`, `${days} days`, `${total} days`], `Total work = ${workers} x ${days} = ${total} worker-days; ${total}/${others} = ${needed} days.`, "Section 7.5: work applications of rational equations"];
    },
    sample: rng => {
      const workers = int(rng, 2, 12);
      let days = int(rng, 3, 20);
      if (days === workers) days += 1;
      // `days` itself divides the total, so a whole-number answer always exists.
      const total = workers * days;
      const others = pick(rng, Array.from({ length: 19 }, (_, i) => i + 2).filter(n => n !== workers && total % n === 0));
      return [workers, days, others];
    },
  },
  tankFill: {
    parse: numbers(/^One tap fills a tank in (\d+) hours and a drain empties it in (\d+) hours\. With both open, how long does the empty tank take to fill\?$/),
    build: ([fill, drain]) => {
      const hours = round((fill * drain) / (drain - fill));
      return [`One tap fills a tank in ${fill} hours and a drain empties it in ${drain} hours. With both open, how long does the empty tank take to fill?`, `${hours} hours`, [`${round((fill * drain) / (fill + drain))} hours`, `${drain - fill} hours`, `${fill + drain} hours`], `Net filling each hour = 1/${fill} - 1/${drain} = ${drain - fill}/${fill * drain} of the tank, so it takes ${fill * drain}/${drain - fill} = ${hours} hours.`, "Section 7.5: work applications of rational equations"];
    },
    sample: rng => {
      const [fill, drain] = pick(rng, [[2, 3], [4, 12], [4, 6], [10, 15], [12, 20], [6, 10], [3, 4], [5, 6]]);
      const k = int(rng, 1, 2);
      return [fill * k, drain * k];
    },
  },
  compoundInterest: {
    parse: numbers(/^Find the compound interest on Rs (\d+) at (\d+)% per year for 2 years, compounded annually\.$/),
    build: ([principal, rate]) => {
      const amount = round2(principal * (1 + rate / 100) ** 2), interest = round2(amount - principal);
      return [`Find the compound interest on Rs ${principal} at ${rate}% per year for 2 years, compounded annually.`, `Rs ${interest}`, [`Rs ${(2 * principal * rate) / 100}`, `Rs ${amount}`, `Rs ${(principal * rate) / 100}`], `Amount = ${principal} x (1 + ${rate}/100)^2 = Rs ${amount}; compound interest = ${amount} - ${principal} = Rs ${interest}.`, "Section 6.4: compound interest"];
    },
    sample: rng => compoundSample(rng),
  },
  compoundAmount: {
    parse: numbers(/^Rs (\d+) is invested at (\d+)% per year, compounded annually\. What is the amount after 2 years\?$/),
    build: ([principal, rate]) => {
      const amount = round2(principal * (1 + rate / 100) ** 2);
      return [`Rs ${principal} is invested at ${rate}% per year, compounded annually. What is the amount after 2 years?`, `Rs ${amount}`, [`Rs ${principal + (2 * principal * rate) / 100}`, `Rs ${round2(amount - principal)}`, `Rs ${round2(principal * (1 + rate / 100))}`], `A = P(1 + r/100)^t = ${principal} x (1 + ${rate}/100)^2 = Rs ${amount}.`, "Section 6.4: compound interest"];
    },
    sample: rng => compoundSample(rng),
  },
  compoundDifference: {
    parse: numbers(/^What is the difference between compound interest and simple interest on Rs (\d+) at (\d+)% per year for 2 years\?$/),
    build: ([principal, rate]) => {
      const difference = round2(principal * (rate / 100) ** 2);
      return [`What is the difference between compound interest and simple interest on Rs ${principal} at ${rate}% per year for 2 years?`, `Rs ${difference}`, [`Rs ${(principal * rate) / 100}`, `Rs ${round2(2 * difference)}`, `Rs ${round2(principal * (1 + rate / 100) ** 2 - principal)}`], `For 2 years the difference is P(r/100)^2 = ${principal} x (${rate}/100)^2 = Rs ${difference}: the interest earned on the first year's interest.`, "Section 6.4: compound interest"];
    },
    sample: rng => compoundSample(rng),
  },
  // Boats and streams; mixtures and alligation (batch-seven-topics.ts). Mizo drafts for these are pending.
  streamSpeed: {
    parse: numbers(/^A boat goes downstream at (\d+) km\/h and upstream at (\d+) km\/h\. What is the speed of the stream\?$/),
    build: ([down, up]) => {
      const stream = round((down - up) / 2), boat = round((down + up) / 2);
      return [`A boat goes downstream at ${down} km/h and upstream at ${up} km/h. What is the speed of the stream?`, `${stream} km/h`, [`${boat} km/h`, `${down - up} km/h`, `${down} km/h`], `Downstream speed = boat + stream and upstream speed = boat - stream. Subtracting, the stream's speed is (${down} - ${up})/2 = ${stream} km/h.`, "Section 4.2: uniform motion applications"];
    },
    sample: rng => {
      const [boat, stream] = boatSample(rng);
      return [boat + stream, boat - stream];
    },
  },
  stillWaterSpeed: {
    parse: numbers(/^A boat goes downstream at (\d+) km\/h and upstream at (\d+) km\/h\. What is its speed in still water\?$/),
    build: ([down, up]) => {
      const stream = round((down - up) / 2), boat = round((down + up) / 2);
      return [`A boat goes downstream at ${down} km/h and upstream at ${up} km/h. What is its speed in still water?`, `${boat} km/h`, [`${stream} km/h`, `${down + up} km/h`, `${down - up} km/h`], `Downstream (boat + stream) plus upstream (boat - stream) is twice the boat's speed, so it is (${down} + ${up})/2 = ${boat} km/h.`, "Section 4.2: uniform motion applications"];
    },
    sample: rng => {
      const [boat, stream] = boatSample(rng);
      return [boat + stream, boat - stream];
    },
  },
  downstreamTime: {
    parse: numbers(/^A boat moves at (\d+) km\/h in still water and the stream flows at (\d+) km\/h\. How many hours does it take to go (\d+) km downstream\?$/),
    build: ([boat, stream, distance]) => {
      const hours = round2(distance / (boat + stream));
      return [`A boat moves at ${boat} km/h in still water and the stream flows at ${stream} km/h. How many hours does it take to go ${distance} km downstream?`, `${hours} hours`, [`${round2(distance / (boat - stream))} hours`, `${round2(distance / boat)} hours`, `${round2(distance / stream)} hours`], `Downstream the stream helps: ${boat} + ${stream} = ${boat + stream} km/h, so the time is ${distance}/${boat + stream} = ${hours} hours.`, "Section 4.2: uniform motion applications"];
    },
    sample: rng => {
      const [boat, stream] = boatSample(rng, 24);
      return [boat, stream, (boat + stream) * int(rng, 2, 6)];
    },
  },
  upstreamDistance: {
    parse: numbers(/^A boat moves at (\d+) km\/h in still water against a stream of (\d+) km\/h\. How far upstream does it go in (\d+) hours\?$/),
    build: ([boat, stream, hours]) => {
      const distance = (boat - stream) * hours;
      return [`A boat moves at ${boat} km/h in still water against a stream of ${stream} km/h. How far upstream does it go in ${hours} hours?`, `${distance} km`, [`${(boat + stream) * hours} km`, `${boat * hours} km`, `${stream * hours} km`], `Upstream the stream slows it: ${boat} - ${stream} = ${boat - stream} km/h, so in ${hours} hours it goes ${boat - stream} x ${hours} = ${distance} km.`, "Section 4.2: uniform motion applications"];
    },
    sample: rng => [...boatSample(rng, 24), int(rng, 2, 6)],
  },
  mixturePercent: {
    parse: numbers(/^(\d+) litres of (\d+)% acid solution is mixed with (\d+) litres of (\d+)% acid solution\. What is the acid percentage of the mixture\?$/),
    build: ([a, p, b, q]) => {
      const acid = round2((a * p + b * q) / 100), percent = round2((a * p + b * q) / (a + b));
      return [`${a} litres of ${p}% acid solution is mixed with ${b} litres of ${q}% acid solution. What is the acid percentage of the mixture?`, `${percent}%`, [`${round2((p + q) / 2)}%`, `${acid}%`, `${p + q}%`], `Acid = ${a} x ${p}/100 + ${b} x ${q}/100 = ${acid} litres in ${a + b} litres, so the mixture is ${acid}/${a + b} x 100 = ${percent}% acid. Weight each strength by its volume instead of averaging the two percentages.`, "Section 4.3: mixture applications"];
    },
    sample: rng => search(rng,
      () => [int(rng, 2, 20), 5 * int(rng, 1, 18), int(rng, 2, 20), 5 * int(rng, 1, 18)],
      ([a, p, b, q]) => a !== b && p !== q && (a * p + b * q) % (a + b) === 0,
      [4, 10, 6, 35]),
  },
  alligationQuantity: {
    parse: numbers(/^Rice costing Rs (\d+) per kg is mixed with rice costing Rs (\d+) per kg to make a mixture worth Rs (\d+) per kg\. How many kg of the cheaper rice go with (\d+) kg of the dearer rice\?$/),
    build: ([cheap, dear, mean, dearKg]) => {
      const cheapKg = round2((dearKg * (dear - mean)) / (mean - cheap));
      return [`Rice costing Rs ${cheap} per kg is mixed with rice costing Rs ${dear} per kg to make a mixture worth Rs ${mean} per kg. How many kg of the cheaper rice go with ${dearKg} kg of the dearer rice?`, `${cheapKg} kg`, [`${round2((dearKg * (mean - cheap)) / (dear - mean))} kg`, `${dearKg} kg`, `${round2((dearKg * (dear - mean)) / (dear - cheap))} kg`], `By alligation, cheaper : dearer = (${dear} - ${mean}) : (${mean} - ${cheap}) = ${dear - mean} : ${mean - cheap}, so ${dearKg} kg of the dearer rice needs ${dearKg} x ${dear - mean}/${mean - cheap} = ${cheapKg} kg of the cheaper.`, "Section 4.3: mixture applications"];
    },
    sample: rng => search(rng,
      () => {
        const cheap = int(rng, 20, 60), dear = cheap + int(rng, 6, 30), mean = int(rng, cheap + 1, dear - 1);
        return [cheap, dear, mean, (mean - cheap) * int(rng, 1, 6)];
      },
      ([cheap, dear, mean]) => dear - mean !== mean - cheap,
      [30, 45, 35, 10]),
  },
  addWater: {
    parse: numbers(/^A mixture of (\d+) litres of milk and water is (\d+)% water\. How many litres of water must be added to make it (\d+)% water\?$/),
    build: ([total, p, q]) => {
      const milk = round2((total * (100 - p)) / 100), newTotal = round2((milk * 100) / (100 - q)), added = round2(newTotal - total);
      return [`A mixture of ${total} litres of milk and water is ${p}% water. How many litres of water must be added to make it ${q}% water?`, `${added} litres`, [`${round2((total * (q - p)) / 100)} litres`, `${q - p} litres`, `${newTotal} litres`], `The milk stays at ${total} x ${100 - p}/100 = ${milk} litres. At ${q}% water, milk is ${100 - q}% of the mixture, so the new total is ${milk} x 100/${100 - q} = ${newTotal} litres; add ${newTotal} - ${total} = ${added} litres of water.`, "Section 4.3: mixture applications"];
    },
    sample: rng => search(rng,
      () => {
        const p = 5 * int(rng, 1, 8);
        return [10 * int(rng, 2, 12), p, p + 5 * int(rng, 1, 6)];
      },
      ([total, p, q]) => {
        if ((total * (100 - p)) % (100 - q)) return false;
        const added = (total * (100 - p)) / (100 - q) - total;
        return new Set([added, (total * (q - p)) / 100, q - p]).size === 3;
      },
      [40, 10, 25]),
  },
} satisfies Record<string, AptitudeTemplate>;

export const aptitudeTemplates: AptitudeTemplate[] = Object.values(aptitude);
