import type { ReviewedQuestion } from "./reviewed-content";
import { mizoConcepts } from "./mizo-concepts.ts";
import { mizoManual } from "./mizo-manual.ts";

export const mizoTranslationStatus = "Draft translation - fluent-speaker review pending";
export const mizoReferences = [
  { title: "Mizoram State Day: English and Mizo", url: "https://rajbhavan.mizoram.gov.in/governor-dr-hari-babu-kambhampati-graces-the-celebration-of-the-37th-mizoram-state-day/" },
  { title: "Government of Mizoram: historical timeline", url: "https://eram.mizoram.gov.in/pages/about-us" },
];

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
};

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
  if (!q.streams.includes("mpsc")) return undefined;
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
  return undefined;
}
