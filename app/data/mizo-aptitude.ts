// Draft Mizo for the aptitude templates (aptitude-templates.ts), worked out from the English prompt
// and its keyed answer. The full engine (mizo-translations.ts) uses it for the bank, and the practice
// pages use it for fresh-number versions, so this file must stay small and free of bank imports.
export type AptitudeMizo = { question: string; explanation: string };

const done = (question: string, explanation: string): AptitudeMizo => ({ question, explanation });

export function aptitudeMizo(prompt: string, answer: string): AptitudeMizo | undefined {
  // Percentage and simple-interest templates (pattern-batch-topics.ts). The worked line repeats
  // the English answer so the Mizo explanation always shows the keyed value.
  let match = prompt.match(/^What is ([\d.]+)% of (\d+)\?$/);
  if (match) {
    const [, percent, whole] = match;
    return done(`${whole}-a ${percent}% chu eng zat nge?`, `${percent}/100 x ${whole} = ${answer}.`);
  }
  match = prompt.match(/^(\d+) is what percent of (\d+)\?$/);
  if (match) {
    const [, part, whole] = match;
    return done(`${part} hi ${whole}-a percent engzat nge?`, `${part}/${whole} x 100 = ${answer}.`);
  }
  match = prompt.match(/^A price (rises|falls) from Rs (\d+) to Rs (\d+)\. What is the percentage (?:increase|decrease)\?$/);
  if (match) {
    const [, direction, from, to] = match;
    const change = Math.abs(+to - +from);
    const verb = direction === "rises" ? "a san" : "a tlahniam";
    const noun = direction === "rises" ? "A pun zat" : "A tlahniam zat";
    return done(`Man chu Rs ${from} atangin Rs ${to}-ah ${verb}. ${noun} chu percent engzat nge?`, `${noun} = ${change}; ${change}/${from} x 100 = ${answer}. A hmasa zat (${from}) hmangin then tur a ni.`);
  }
  match = prompt.match(/^Find the simple interest on Rs (\d+) at (\d+)% per year for (\d+) years\.$/);
  if (match) {
    const [, principal, rate, years] = match;
    return done(`Rs ${principal} chu kum khatah ${rate}% interest-in kum ${years} chhung dah a ni. Simple interest chhut rawh.`, `I = P x r x t = ${principal} x ${rate}/100 x ${years} = ${answer}.`);
  }
  match = prompt.match(/^Rs (\d+) is invested at (\d+)% simple interest per year for (\d+) years\. What is the total amount at the end\?$/);
  if (match) {
    const [, principal, rate, years] = match;
    const interest = (+principal * +rate * +years) / 100;
    return done(`Rs ${principal} chu kum khatah ${rate}% simple interest-in kum ${years} chhung dah a ni. A tawpah a vaiin eng zat nge a nih?`, `I = ${principal} x ${rate}/100 x ${years} = Rs ${interest}; a vaiin = ${principal} + ${interest} = ${answer}.`);
  }
  match = prompt.match(/^Rs (\d+) earns Rs (\d+) simple interest in (\d+) years\. What is the annual interest rate\?$/);
  if (match) {
    const [, principal, interest, years] = match;
    return done(`Rs ${principal} chuan kum ${years}-ah simple interest Rs ${interest} a hlawk. Kum khat interest rate chu eng zat nge?`, `r = (I x 100) / (P x t) = (${interest} x 100) / (${principal} x ${years}) = ${answer}.`);
  }
  // Averages, ratio and discount templates (batch-three-topics.ts).
  match = prompt.match(/^Find the mean of ([\d, ]+) and (\d+)\.$/);
  if (match) {
    const [, head, last] = match;
    const values = [...head.split(", "), last].map(Number);
    return done(`${head} leh ${last} average (mean) chu eng zat nge?`, `Mean = a vaiin / a zat = ${values.reduce((a, b) => a + b, 0)}/${values.length} = ${answer}.`);
  }
  match = prompt.match(/^The mean of (\d+) numbers is (\d+)\. What is their sum\?$/);
  if (match) {
    const [, count, mean] = match;
    return done(`Number ${count} average chu ${mean} a ni. A vaiin chu eng zat nge?`, `A vaiin = a zat x average = ${count} x ${mean} = ${answer}.`);
  }
  match = prompt.match(/^The mean of 4 numbers is (\d+)\. Three of them are (\d+), (\d+) and (\d+)\. Find the fourth\.$/);
  if (match) {
    const [, mean, a, b, c] = match;
    return done(`Number 4 average chu ${mean} a ni. A pathum chu ${a}, ${b} leh ${c} an ni. A palina chhut rawh.`, `A pali vaiin = 4 x ${mean} = ${4 * +mean}; a palina = ${4 * +mean} - ${+a + +b + +c} = ${answer}.`);
  }
  match = prompt.match(/^Divide Rs (\d+) in the ratio (\d+):(\d+)\. What is the larger share\?$/);
  if (match) {
    const [, total, a, b] = match;
    return done(`Rs ${total} chu ${a}:${b} ratio-in then rawh. A tam zawk chan chu eng zat nge?`, `A tam zawk chan = ${total} x ${b}/(${a} + ${b}) = ${answer}.`);
  }
  match = prompt.match(/^If (\d+) pens cost Rs (\d+), how much do (\d+) pens cost\?$/);
  if (match) {
    const [, count, cost, wanted] = match;
    return done(`Pen ${count} man chu Rs ${cost} a ni chuan, pen ${wanted} man chu eng zat nge?`, `Pen pakhat man = ${cost}/${count} = Rs ${+cost / +count}; pen ${wanted} man = ${answer}.`);
  }
  match = prompt.match(/^Solve for x: x\/(\d+) = (\d+)\/(\d+)\.$/);
  if (match) {
    const [, a, b, c] = match;
    return done(`x chhut rawh: x/${a} = ${b}/${c}.`, `x = ${a} x ${b}/${c} = ${answer}.`);
  }
  match = prompt.match(/^An item marked Rs (\d+) is sold at a ([\d.]+)% discount\. What is the sale price\?$/);
  if (match) {
    const [, price, rate] = match;
    const discount = (+price * +rate) / 100;
    return done(`Rs ${price} man ziak bungrua chu ${rate}% discount-in hralh a ni. A hralh man chu eng zat nge?`, `Discount = ${price} x ${rate}/100 = Rs ${discount}; hralh man = ${price} - ${discount} = ${answer}.`);
  }
  match = prompt.match(/^Sales tax of (\d+)% is charged on a Rs (\d+) purchase\. What is the total cost\?$/);
  if (match) {
    const [, rate, price] = match;
    const tax = (+price * +rate) / 100;
    return done(`Rs ${price} bungrua lei-ah ${rate}% sales tax a awm. A vaiin man chu eng zat nge?`, `Tax = ${price} x ${rate}/100 = Rs ${tax}; a vaiin = ${price} + ${tax} = ${answer}.`);
  }
  match = prompt.match(/^A salesperson earns (\d+)% commission on sales of Rs (\d+)\. What is the commission\?$/);
  if (match) {
    const [, rate, sales] = match;
    return done(`Hralhtu chuan Rs ${sales} a hralh-ah ${rate}% commission a hmu. A commission chu eng zat nge?`, `Commission = ${sales} x ${rate}/100 = ${answer}.`);
  }
  // Speed and profit templates (batch-four-topics.ts).
  match = prompt.match(/^A car travels (\d+) km in (\d+) hours\. What is its average speed\?$/);
  if (match) {
    const [, distance, hours] = match;
    return done(`Car chuan darkar ${hours}-ah km ${distance} a kal. A speed average chu eng zat nge?`, `Speed = distance / time = ${distance}/${hours} = ${answer}.`);
  }
  match = prompt.match(/^A train moves at (\d+) km\/h\. How far does it travel in (\d+) hours\?$/);
  if (match) {
    const [, speed, hours] = match;
    return done(`Train chu darkar khatah km ${speed} a kal. Darkar ${hours}-ah km engzat nge a kal ang?`, `Distance = speed x time = ${speed} x ${hours} = ${answer}.`);
  }
  match = prompt.match(/^How long does it take to cover (\d+) km at (\d+) km\/h\?$/);
  if (match) {
    const [, distance, speed] = match;
    return done(`Darkar khatah km ${speed} speed-in km ${distance} kal turin darkar engzat nge a ngai?`, `Time = distance / speed = ${distance}/${speed} = ${answer}.`);
  }
  match = prompt.match(/^A shopkeeper buys an item for Rs (\d+) and sells it for Rs (\d+)\. What is the profit percent\?$/);
  if (match) {
    const [, cost, sale] = match;
    return done(`Dawrkaiin bungrua Rs ${cost}-in a lei a, Rs ${sale}-in a hralh. A hlawkna (profit) chu percent engzat nge?`, `Profit = ${sale} - ${cost} = Rs ${+sale - +cost}; ${+sale - +cost}/${cost} x 100 = ${answer}. A lei man (cost) hmangin then tur a ni.`);
  }
  match = prompt.match(/^An item bought for Rs (\d+) is sold at a loss of (\d+)%\. What is the selling price\?$/);
  if (match) {
    const [, cost, rate] = match;
    const loss = (+cost * +rate) / 100;
    return done(`Rs ${cost}-a lei bungrua chu ${rate}% loss-in hralh a ni. A hralh man chu eng zat nge?`, `Loss = ${cost} x ${rate}/100 = Rs ${loss}; hralh man = ${cost} - ${loss} = ${answer}.`);
  }
  match = prompt.match(/^A shop marks up an item costing Rs (\d+) by (\d+)%\. What is the marked price\?$/);
  if (match) {
    const [, cost, rate] = match;
    const markup = (+cost * +rate) / 100;
    return done(`Dawr chuan Rs ${cost} man bungrua chu ${rate}% mark-up-in man a ziak. A man ziak chu eng zat nge?`, `Mark-up = ${cost} x ${rate}/100 = Rs ${markup}; man ziak = ${cost} + ${markup} = ${answer}.`);
  }
  return undefined;
}
