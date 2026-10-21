import type { ReviewedQuestion } from "./reviewed-content";
import { mizoConcepts } from "./mizo-concepts.ts";
import { mizoManual } from "./mizo-manual.ts";

export const mizoTranslationStatus = "Draft translation - fluent-speaker review pending";
export const mizoReferences = [
  { title: "Mizoram State Day: English and Mizo", url: "https://rajbhavan.mizoram.gov.in/governor-dr-hari-babu-kambhampati-graces-the-celebration-of-the-37th-mizoram-state-day/" },
  { title: "Government of Mizoram: historical timeline", url: "https://eram.mizoram.gov.in/pages/about-us" },
];

export const mizoEnglishGlossary = [
  ["zirtirtu", "teacher", "verified from supplied phrase list"],
  ["zirlaite", "learners / students", "draft; confirm preferred exam wording"],
  ["khua leh tui", "citizens / people of the state", "draft; context-sensitive"],
  ["sawrkar", "government", "draft; confirm register"],
  ["rawngbawlna", "service", "draft; used in Citizen's Charter context"],
  ["sawiselna", "complaint / grievance", "draft; context-sensitive"],
  ["chinfelna", "redress / resolution", "draft; context-sensitive"],
  ["Danpui", "Constitution", "draft; constitutional context"],
  ["dikna", "right", "draft; confirm plural and legal usage"],
  ["thutiam", "commitment / promise", "draft; context-sensitive"],
  ["hriatthiamna", "understanding", "draft"],
  ["tehna", "assessment / measurement", "draft; context-sensitive"],
  ["ngaihtuahna", "thinking / reasoning", "draft; context-sensitive"],
  ["humhalhna", "protection", "draft"],
  ["inremna", "agreement / settlement", "draft; context-sensitive"],
  ["ram", "domain / land area", "official Mizoram history context"],
  ["puitling", "full / mature / adult", "context-sensitive; do not translate mechanically"],
  ["naupang", "child / children", "verified from supplied phrase list"],
  ["mipui", "public / people", "draft; context-sensitive"],
  ["hriattirna", "information / notification", "draft; context-sensitive"],
] as const;

export type MizoTranslation = {
  question: string;
  options: string[];
  explanation: string;
  status: "draft";
};

export const mizoCategories: Record<string, string> = {
  All: "Zawng zawng",
  "Rights and constitutional remedies": "Diknate leh Danpui humhalhna",
  "Mizoram statehood": "Mizoram state puitling nihna",
  "Demand, supply and equilibrium": "Lei duh zat leh pek chhuah zat",
  "Subject-verb agreement": "Subject leh verb inmilna",
  "Ozone protection": "Ozone humhalhna",
  "Citizen's Charters": "Mipui tana rawngbawlna thutiam",
  "Harappan evidence": "Harappa hmanlai thil zirna",
  "Latitude and location": "Latitude leh hmun dinhmun",
  "Assessment for learning": "Zirna tih that nana tehna",
  "Numerical reasoning": "Chhiarkawp ngaihtuahna",
  Percentages: "Percentage chhutna",
  "Simple interest": "Simple interest chhutna",
  Averages: "Average chhutna",
  "Ratio and proportion": "Ratio leh proportion",
  "Discount, tax and commission": "Discount, tax leh commission",
};

// MPSC general-studies topics published in English first. Their Mizo drafts need a fluent writer,
// so they never receive a guessed translation; the practice page shows "Mizo translation pending".
export const mizoPendingTopicIds = new Set([
  "union-polity", "local-government", "union-judiciary", "public-finance", "sixth-schedule", "constitution-making",
  "gandhi-national-movement", "revolt-of-1857", "india-location", "climate-agreements", "biodiversity-agreements", "nutrition-vitamins",
]);
const topicIdOf = (questionId: string) => questionId.replace(/-\d+$/, "");

const unchangedTerms = new Set([
  "21 January 1972", "20 February 1987", "25 April 1952", "1 April 1898", "Sixth Schedule", "Assam", "1986", "Ram", "Government of India Act, 1935",
  "Steatite", "Archaeobotany", "2600-1900 BCE", "Daya Ram Sahni", "S.R. Rao", "R.S. Bisht", "1922", "1946", "1875",
  "Montreal Protocol", "1987", "Chlorofluorocarbons", "Hydrochlorofluorocarbons", "Hydrofluorocarbons", "Kigali Amendment", "2016", "Citizen's Charter",
]);

function term(text: string): string | undefined {
  return mizoConcepts[text] ?? (unchangedTerms.has(text) || /^Article (14|17|19|21|21A|23|24|25|32|40|51A)$/.test(text) ? text : undefined);
}

// These patterns correspond only to the bank's deterministic question templates.
// Unrecognised future content falls back to English, never a guessed translation.
export function getMizoTranslation(q: ReviewedQuestion): MizoTranslation | undefined {
  if (!q.streams.includes("mpsc") || mizoPendingTopicIds.has(topicIdOf(q.id))) return undefined;
  const finish = (question: string, explanation: string, options = q.options): MizoTranslation => ({ question, options: [...options], explanation, status: "draft" });
  const manual = mizoManual[q.id];
  if (manual) return finish(manual[0], manual[2], manual[1] ?? q.options);

  if (q.sourceLocation.endsWith("original recall variant") || q.sourceLocation.endsWith("original matching variant")) {
    const separator = q.explanation.indexOf(": ");
    const label = q.explanation.slice(0, separator);
    const description = q.explanation.slice(separator + 2, -1);
    const translatedLabel = term(label);
    const translatedDescription = mizoConcepts[description];
    const options = q.options.map(term);
    if (separator < 0 || !translatedLabel || !translatedDescription || options.some(option => !option)) return undefined;
    const prompt = q.sourceLocation.endsWith("original recall variant")
      ? `"${translatedDescription}" tih nen inmil chu eng nge?`
      : `${translatedLabel} hrilhfiahna dik thlang rawh.`;
    return finish(prompt, `${translatedLabel}: ${translatedDescription}.`, options as string[]);
  }

  const english = q.question.match(/^Complete in the simple present: '(.+)'$/);
  if (q.subject === "English" && english) {
    const singular = q.explanation === "The grammatical subject is singular; use 'is'. Intervening phrases do not change subject number.";
    const plural = q.explanation === "The grammatical subject is plural; use 'are'. Intervening phrases do not change subject number.";
    if (!singular && !plural) return undefined;
    return finish(`Simple present hmangin dah khat rawh: '${english[1]}'`, `Subject chu ${singular ? "singular a ni; 'is'" : "plural a ni; 'are'"} hman tur a ni. A inkara phrase-te chuan subject number an thlak lo.`);
  }

  let match = q.question.match(/^A rectangle is (\d+) cm long and (\d+) cm wide\. What is its perimeter\?$/);
  if (match) {
    const [, l, w] = match;
    return finish(`Rectangle sei zawng chu ${l} cm a ni a, a vang chu ${w} cm a ni. A sir vel zawng chu eng zat nge?`, `A sir vel zawng = 2 x (a sei + a vang) = 2(${l} + ${w}) = ${2 * (+l + +w)} cm.`);
  }
  match = q.question.match(/^A rectangle has area (\d+) cm\^2 and length (\d+) cm\. Find its width\.$/);
  if (match) {
    const [, area, l] = match;
    return finish(`Rectangle zau zawng chu ${area} cm^2 a ni a, a sei zawng chu ${l} cm a ni. A vang zawng chhut rawh.`, `A vang = a zau zawng / a sei = ${area}/${l} = ${+area / +l} cm.`);
  }
  match = q.question.match(/^Two locations are at (\d+) degrees N and (\d+) degrees S\. Their difference in latitude is:$/);
  if (match) {
    const [, north, south] = match;
    return finish(`Hmun pahnih chu ${north} degrees N leh ${south} degrees S-ah an awm. An latitude inkar chu eng zat nge?`, `Equator sir lehlam ve veah an awm; chuvangin ${north} + ${south} = ${+north + +south} degrees.`);
  }
  match = q.question.match(/^A location moves from (\d+) degrees N to (\d+) degrees N along a meridian\. Its change in latitude is:$/);
  if (match) {
    const [, from, to] = match;
    return finish(`Meridian zuiin ${from} degrees N atanga ${to} degrees N-ah kal a ni. Latitude danglamna chu eng zat nge?`, `A pahnihin hmar lamah an awm: ${to} - ${from} = ${+to - +from} degrees.`);
  }
  match = q.question.match(/^At price P, quantity supplied is (\d+) units and quantity demanded is (\d+) units\. What is the surplus\?$/);
  if (match) {
    const [, supply, demand] = match;
    return finish(`Man P-ah pek chhuah zat chu unit ${supply} a ni a, lei duh zat chu unit ${demand} a ni. A tamna (surplus) chu eng zat nge?`, `Surplus = pek chhuah zat - lei duh zat = ${supply} - ${demand} = ${+supply - +demand} units.`);
  }
  match = q.question.match(/^At price Q, buyers demand (\d+) units and sellers offer (\d+) units\. What is the shortage\?$/);
  if (match) {
    const [, demand, supply] = match;
    return finish(`Man Q-ah leituten unit ${demand} an duh a, hralhtuten unit ${supply} an pe chhuak. Indaih lohna (shortage) chu eng zat nge?`, `Shortage = lei duh zat - pek chhuah zat = ${demand} - ${supply} = ${+demand - +supply} units.`);
  }
  // Percentage and simple-interest templates (pattern-batch-topics.ts). The worked line repeats
  // the English answer so the Mizo explanation always shows the keyed value.
  match = q.question.match(/^What is ([\d.]+)% of (\d+)\?$/);
  if (match) {
    const [, percent, whole] = match;
    return finish(`${whole}-a ${percent}% chu eng zat nge?`, `${percent}/100 x ${whole} = ${q.answer}.`);
  }
  match = q.question.match(/^(\d+) is what percent of (\d+)\?$/);
  if (match) {
    const [, part, whole] = match;
    return finish(`${part} hi ${whole}-a percent engzat nge?`, `${part}/${whole} x 100 = ${q.answer}.`);
  }
  match = q.question.match(/^A price (rises|falls) from Rs (\d+) to Rs (\d+)\. What is the percentage (?:increase|decrease)\?$/);
  if (match) {
    const [, direction, from, to] = match;
    const change = Math.abs(+to - +from);
    const verb = direction === "rises" ? "a san" : "a tlahniam";
    const noun = direction === "rises" ? "A pun zat" : "A tlahniam zat";
    return finish(`Man chu Rs ${from} atangin Rs ${to}-ah ${verb}. ${noun} chu percent engzat nge?`, `${noun} = ${change}; ${change}/${from} x 100 = ${q.answer}. A hmasa zat (${from}) hmangin then tur a ni.`);
  }
  match = q.question.match(/^Find the simple interest on Rs (\d+) at (\d+)% per year for (\d+) years\.$/);
  if (match) {
    const [, principal, rate, years] = match;
    return finish(`Rs ${principal} chu kum khatah ${rate}% interest-in kum ${years} chhung dah a ni. Simple interest chhut rawh.`, `I = P x r x t = ${principal} x ${rate}/100 x ${years} = ${q.answer}.`);
  }
  match = q.question.match(/^Rs (\d+) is invested at (\d+)% simple interest per year for (\d+) years\. What is the total amount at the end\?$/);
  if (match) {
    const [, principal, rate, years] = match;
    const interest = (+principal * +rate * +years) / 100;
    return finish(`Rs ${principal} chu kum khatah ${rate}% simple interest-in kum ${years} chhung dah a ni. A tawpah a vaiin eng zat nge a nih?`, `I = ${principal} x ${rate}/100 x ${years} = Rs ${interest}; a vaiin = ${principal} + ${interest} = ${q.answer}.`);
  }
  match = q.question.match(/^Rs (\d+) earns Rs (\d+) simple interest in (\d+) years\. What is the annual interest rate\?$/);
  if (match) {
    const [, principal, interest, years] = match;
    return finish(`Rs ${principal} chuan kum ${years}-ah simple interest Rs ${interest} a hlawk. Kum khat interest rate chu eng zat nge?`, `r = (I x 100) / (P x t) = (${interest} x 100) / (${principal} x ${years}) = ${q.answer}.`);
  }
  // Averages, ratio and discount templates (batch-three-topics.ts).
  match = q.question.match(/^Find the mean of ([\d, ]+) and (\d+)\.$/);
  if (match) {
    const [, head, last] = match;
    const values = [...head.split(", "), last].map(Number);
    return finish(`${head} leh ${last} average (mean) chu eng zat nge?`, `Mean = a vaiin / a zat = ${values.reduce((a, b) => a + b, 0)}/${values.length} = ${q.answer}.`);
  }
  match = q.question.match(/^The mean of (\d+) numbers is (\d+)\. What is their sum\?$/);
  if (match) {
    const [, count, mean] = match;
    return finish(`Number ${count} average chu ${mean} a ni. A vaiin chu eng zat nge?`, `A vaiin = a zat x average = ${count} x ${mean} = ${q.answer}.`);
  }
  match = q.question.match(/^The mean of 4 numbers is (\d+)\. Three of them are (\d+), (\d+) and (\d+)\. Find the fourth\.$/);
  if (match) {
    const [, mean, a, b, c] = match;
    return finish(`Number 4 average chu ${mean} a ni. A pathum chu ${a}, ${b} leh ${c} an ni. A palina chhut rawh.`, `A pali vaiin = 4 x ${mean} = ${4 * +mean}; a palina = ${4 * +mean} - ${+a + +b + +c} = ${q.answer}.`);
  }
  match = q.question.match(/^Divide Rs (\d+) in the ratio (\d+):(\d+)\. What is the larger share\?$/);
  if (match) {
    const [, total, a, b] = match;
    return finish(`Rs ${total} chu ${a}:${b} ratio-in then rawh. A tam zawk chan chu eng zat nge?`, `A tam zawk chan = ${total} x ${b}/(${a} + ${b}) = ${q.answer}.`);
  }
  match = q.question.match(/^If (\d+) pens cost Rs (\d+), how much do (\d+) pens cost\?$/);
  if (match) {
    const [, count, cost, wanted] = match;
    return finish(`Pen ${count} man chu Rs ${cost} a ni chuan, pen ${wanted} man chu eng zat nge?`, `Pen pakhat man = ${cost}/${count} = Rs ${+cost / +count}; pen ${wanted} man = ${q.answer}.`);
  }
  match = q.question.match(/^Solve for x: x\/(\d+) = (\d+)\/(\d+)\.$/);
  if (match) {
    const [, a, b, c] = match;
    return finish(`x chhut rawh: x/${a} = ${b}/${c}.`, `x = ${a} x ${b}/${c} = ${q.answer}.`);
  }
  match = q.question.match(/^An item marked Rs (\d+) is sold at a ([\d.]+)% discount\. What is the sale price\?$/);
  if (match) {
    const [, price, rate] = match;
    const discount = (+price * +rate) / 100;
    return finish(`Rs ${price} man ziak bungrua chu ${rate}% discount-in hralh a ni. A hralh man chu eng zat nge?`, `Discount = ${price} x ${rate}/100 = Rs ${discount}; hralh man = ${price} - ${discount} = ${q.answer}.`);
  }
  match = q.question.match(/^Sales tax of (\d+)% is charged on a Rs (\d+) purchase\. What is the total cost\?$/);
  if (match) {
    const [, rate, price] = match;
    const tax = (+price * +rate) / 100;
    return finish(`Rs ${price} bungrua lei-ah ${rate}% sales tax a awm. A vaiin man chu eng zat nge?`, `Tax = ${price} x ${rate}/100 = Rs ${tax}; a vaiin = ${price} + ${tax} = ${q.answer}.`);
  }
  match = q.question.match(/^A salesperson earns (\d+)% commission on sales of Rs (\d+)\. What is the commission\?$/);
  if (match) {
    const [, rate, sales] = match;
    return finish(`Hralhtu chuan Rs ${sales} a hralh-ah ${rate}% commission a hmu. A commission chu eng zat nge?`, `Commission = ${sales} x ${rate}/100 = ${q.answer}.`);
  }
  return undefined;
}
