// Small, dependency-free Mizo support data that client components can import directly.
// The translation engine (mizo-translations.ts) pulls in the full concept dictionary, so the
// practice pages receive precomputed translations from the server instead of importing it.
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
  "Speed, distance and time": "Speed, distance leh time",
  "Profit, loss and mark-up": "Profit, loss leh mark-up",
};
