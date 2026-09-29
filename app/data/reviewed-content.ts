import { additionalQuestions } from "./additional-questions.ts";
import { additionalQuotas, practiceExpansion } from "./expanded-practice.ts";
import { jeeSources, jeeTopics } from "./jee-topics.ts";

export type Stream = "mpsc" | "neet" | "jee" | "cuet-pg";
export const contentRevision = "2026-09-27";
export const contentScope = "Foundation revision only; not a complete syllabus or a prediction of exam questions.";

export const sources = {
  constitution: { title: "Legislative Department: Constitution of India (May 2024 edition)", url: "https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf" },
  mizoram: { title: "Government of Mizoram: state history", url: "https://eram.mizoram.gov.in/pages/about-us" },
  biology: { title: "NCERT Biology: Cell, the Unit of Life", url: "https://ncert.nic.in/textbook/pdf/kebo108.pdf" },
  physics: { title: "OpenStax College Physics 2e: 4.3 Newton's Second Law", url: "https://openstax.org/books/college-physics-2e/pages/4-3-newtons-second-law-of-motion-concept-of-a-system" },
  chemistry: { title: "OpenStax Chemistry 2e: 2.3 Atomic Structure", url: "https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism" },
  mathematics: { title: "OpenStax College Algebra 2e: 2.5 Quadratic Equations", url: "https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations" },
  economics: { title: "OpenStax Principles of Economics 3e: 3.1 Demand and Supply", url: "https://openstax.org/books/principles-economics-3e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services" },
  sociology: { title: "OpenStax Introduction to Sociology 3e: 1.3 Theoretical Perspectives", url: "https://openstax.org/books/introduction-sociology-3e/pages/1-3-theoretical-perspectives-in-sociology" },
  english: { title: "Purdue OWL: Subject-Verb Agreement", url: "https://owl.purdue.edu/owl/general_writing/grammar/subject_verb_agreement.html" },
  environment: { title: "UNEP OzonAction: About the Montreal Protocol", url: "https://www.unep.org/ozonaction/who-we-are/about-montreal-protocol" },
  administration: { title: "Government of India: Citizen's Charter FAQ", url: "https://goicharters.nic.in/faq" },
  history: { title: "NCERT Themes in Indian History I: Bricks, Beads and Bones", url: "https://ncert.nic.in/textbook/pdf/lehs101.pdf" },
  geography: { title: "NOAA: What is latitude?", url: "https://oceanservice.noaa.gov/facts/latitude.html" },
  education: { title: "Vanderbilt IRIS: Assessment-Centered Learning Environments", url: "https://iris.peabody.vanderbilt.edu/module/hpl/cresource/q1/p04/" },
  ...jeeSources,
} as const;

export type SourceId = keyof typeof sources;
export type ReviewedQuestion = {
  id: string; subject: string; category: string; question: string;
  options: string[]; answer: string; explanation: string;
  sourceId: SourceId; sourceLocation: string; reviewedOn: string;
  kind: "original"; streams: Stream[];
  hint?: string; wrongExplanations?: Record<string, string>;
};

export type QuestionSeed = [prompt: string, options: [string, string, string, string], answerIndex: number, explanation: string, location: string];
export type Topic = {
  id: string; subject: string; title: string; sourceId: SourceId;
  streams: Stream[]; notes: string[]; pitfall: string; questions: QuestionSeed[];
};

export const topics: Topic[] = [
  { id: "political-science", subject: "Political Science", title: "Rights and constitutional remedies", sourceId: "constitution", streams: ["mpsc", "cuet-pg"],
    notes: ["Article 14 protects equality before law and equal protection of laws for every person within India. Do not replace 'person' with 'citizen'.", "Article 21A concerns free and compulsory education for children aged six to fourteen. Article 32 provides access to the Supreme Court to enforce Part III rights.", "Fundamental Duties are in Article 51A, Part IVA. Directive Principles are in Part IV. Keep rights, duties and policy principles distinct."],
    pitfall: "An article number is not enough: identify its beneficiary and the right or institution it addresses.",
    questions: [
      ["Article 14's equality guarantee applies to which group within India?", ["Only voters", "Every person", "Only public servants", "Only citizens"], 1, "Article 14 uses 'any person'; citizenship is not its eligibility condition.", "Article 14"],
      ["Which article provides the right to approach the Supreme Court for enforcement of Part III rights?", ["Article 51A", "Article 280", "Article 32", "Article 148"], 2, "Article 32 guarantees the remedy for enforcement of Fundamental Rights.", "Article 32(1)"],
      ["The age range specified by Article 21A is:", ["3 to 6 years", "6 to 14 years", "14 to 18 years", "6 to 18 years"], 1, "Article 21A specifies children aged six to fourteen.", "Article 21A"],
      ["Where are Fundamental Duties listed?", ["Part IV", "Part III", "Part IVA", "Part IX"], 2, "Part IVA contains Article 51A on Fundamental Duties.", "Part IVA, Article 51A"],
    ] },
  { id: "mizoram", subject: "Mizoram GK", title: "Mizoram statehood", sourceId: "mizoram", streams: ["mpsc"],
    notes: ["Mizoram became a state on 20 February 1987. The political settlement preceding statehood was reached in 1986.", "Build a timeline with separate entries for the settlement and statehood. Dates of agreements and dates when constitutional changes take effect are not interchangeable."],
    pitfall: "Do not use the settlement year as the statehood year.",
    questions: [
      ["On which date did Mizoram attain statehood?", ["20 February 1987", "15 August 1947", "26 January 1950", "1 December 1963"], 0, "The government history records statehood on 20 February 1987.", "About Us: statehood paragraph"],
      ["Which sequence matches Mizoram's settlement and statehood?", ["Statehood in 1986, settlement in 1987", "Both in 1972", "Settlement in 1986, statehood in 1987", "Both in 1991"], 2, "The 1986 settlement preceded statehood in February 1987.", "About Us: political settlement and statehood"],
    ] },
  { id: "biology", subject: "Biology", title: "Cell structures", sourceId: "biology", streams: ["neet"],
    notes: ["Prokaryotic cells lack a membrane-bound nucleus. Their DNA is not enclosed by a nuclear envelope.", "Ribosomes carry out protein synthesis and are not membrane-bound. Mitochondria participate in aerobic respiration and ATP production in eukaryotic cells."],
    pitfall: "Lacking a nucleus does not mean lacking genetic material or ribosomes.",
    questions: [
      ["Which structure is absent from a typical bacterial cell?", ["Plasma membrane", "Ribosomes", "DNA", "Membrane-bound nucleus"], 3, "Bacteria are prokaryotes; their DNA is not enclosed in a membrane-bound nucleus.", "Section 8.4: Prokaryotic Cells"],
      ["Which structure performs protein synthesis?", ["Lysosome", "Ribosome", "Vacuole", "Centriole"], 1, "Ribosomes translate genetic information into proteins.", "Section 8.5: Ribosomes"],
      ["Which organelle is closely associated with aerobic ATP production?", ["Golgi apparatus", "Nucleolus", "Mitochondrion", "Lysosome"], 2, "Mitochondria are the principal sites of aerobic respiration in eukaryotic cells.", "Section 8.5: Mitochondria"],
    ] },
  { id: "physics", subject: "Physics", title: "Net force and acceleration", sourceId: "physics", streams: ["neet", "jee"],
    notes: ["For constant mass in an inertial frame, net external force equals mass times acceleration. Add forces as vectors before applying F = ma.", "With mass in kilograms and acceleration in metres per second squared, force is in newtons. Zero net force means zero acceleration, not necessarily zero velocity."],
    pitfall: "Use the net force, not just one applied force. Mass and weight are different quantities.",
    questions: [
      ["A 3 kg body has a net force of 18 N. Its acceleration is:", ["54 m/s^2", "6 m/s^2", "15 m/s^2", "0.167 m/s^2"], 1, "a = F/m = 18/3 = 6 m/s^2.", "Section 4.3: a = F_net/m"],
      ["Forces of 14 N right and 6 N left act on a 4 kg body. Its acceleration is:", ["5 m/s^2 right", "2 m/s^2 left", "2 m/s^2 right", "0 m/s^2"], 2, "Net force = 14 - 6 = 8 N right; a = 8/4 = 2 m/s^2 right.", "Section 4.3: vector sum of external forces"],
      ["A body moves with constant velocity in an inertial frame. Its net force is:", ["Zero", "Always equal to its weight", "Increasing", "Necessarily nonzero"], 0, "Constant velocity gives zero acceleration, so net force is zero.", "Section 4.3: Newton's second law"],
    ] },
  { id: "chemistry", subject: "Chemistry", title: "Atoms, isotopes and ions", sourceId: "chemistry", streams: ["neet", "jee"],
    notes: ["Atomic number Z counts protons. Mass number A counts protons plus neutrons; neutrons = A - Z.", "Isotopes have equal proton counts but different neutron counts. Ion formation changes electron count, not the nucleus: positive ions have lost electrons."],
    pitfall: "Mass number is an integer for one isotope; relative atomic mass can be an abundance-weighted average.",
    questions: [
      ["An atom has Z = 13 and A = 27. How many neutrons does it contain?", ["13", "27", "40", "14"], 3, "Neutrons = A - Z = 27 - 13 = 14.", "Section 2.3: atomic and mass numbers"],
      ["Two isotopes of one element must have the same number of:", ["Neutrons", "Protons", "Nucleons", "Electrons in every charge state"], 1, "The proton count defines the element; isotope neutron counts differ.", "Section 2.3: Isotopes"],
      ["A sodium ion Na+ has 11 protons. How many electrons does it have?", ["12", "11", "10", "9"], 2, "Charge +1 means one fewer electron than protons: 11 - 1 = 10.", "Section 2.3: Ions"],
    ] },
  { id: "mathematics", subject: "Mathematics", title: "Quadratic equations", sourceId: "mathematics", streams: ["jee"],
    notes: ["Write a quadratic as ax^2 + bx + c = 0 with a nonzero. Factoring works by setting each factor equal to zero.", "The discriminant b^2 - 4ac identifies two distinct real roots when positive, one repeated real root when zero, and no real roots when negative."],
    pitfall: "Move every term to one side before factoring. Check roots by substitution into the original equation.",
    questions: [
      ["The roots of x^2 - 9x + 20 = 0 are:", ["-4 and -5", "2 and 10", "4 and 5", "-2 and -10"], 2, "(x - 4)(x - 5) = 0, giving 4 and 5.", "Section 2.5: solving by factoring"],
      ["How many distinct real roots does x^2 + 6x + 9 = 0 have?", ["Zero", "One", "Two", "Three"], 1, "The discriminant is 36 - 36 = 0; x = -3 is repeated.", "Section 2.5: discriminant"],
      ["Which equation has no real roots?", ["x^2 - 16 = 0", "x^2 - x = 0", "x^2 + 4x + 4 = 0", "x^2 + 4 = 0"], 3, "A real square cannot equal -4; the discriminant is negative.", "Section 2.5: discriminant"],
    ] },
  { id: "economics", subject: "Economics", title: "Demand, supply and equilibrium", sourceId: "economics", streams: ["mpsc", "cuet-pg"],
    notes: ["Holding other factors constant, a change in the good's own price causes movement along its demand curve. A change in a non-price determinant shifts the curve.", "At equilibrium, quantity demanded equals quantity supplied. A price below equilibrium produces excess demand in the standard model."],
    pitfall: "Demand is the whole relationship; quantity demanded is a quantity at a specified price.",
    questions: [
      ["A good's price falls, with other determinants unchanged. This causes:", ["A shift of demand to the left", "Movement along the demand curve", "A shift of demand to the right", "No change in quantity demanded"], 1, "An own-price change is a movement along a given demand curve.", "Section 3.1: demand versus quantity demanded"],
      ["At market equilibrium, which equality holds?", ["Price equals income", "Demand equals zero", "Quantity demanded equals quantity supplied", "Profit equals zero"], 2, "Equilibrium clears the market: planned purchases equal planned sales.", "Section 3.1: Equilibrium"],
      ["In the standard demand-supply model, a price below equilibrium creates:", ["A shortage", "A surplus", "Zero demand", "Perfectly elastic supply"], 0, "Quantity demanded exceeds quantity supplied at that price.", "Section 3.1: shortages"],
    ] },
  { id: "sociology", subject: "Sociology", title: "Three theoretical perspectives", sourceId: "sociology", streams: ["cuet-pg"],
    notes: ["Functionalism considers how connected institutions contribute to social functioning. Conflict theory examines competition, inequality and power.", "Symbolic interactionism focuses on meaning constructed through social interaction, often at the micro level."],
    pitfall: "A theory is an analytical perspective, not a claim that every social event has one cause.",
    questions: [
      ["A study of how classmates interpret gestures is most directly associated with:", ["Symbolic interactionism", "Structural functionalism", "Marxist conflict theory", "Demographic transition theory"], 0, "Interpreting shared symbols in everyday encounters fits symbolic interactionism.", "Section 1.3: Symbolic Interactionist Theory"],
      ["Which perspective foregrounds unequal control of scarce resources?", ["Functionalism", "Conflict theory", "Symbolic interactionism", "Demographic transition theory"], 1, "Conflict theory emphasises competition, power and inequality.", "Section 1.3: Conflict Theory"],
      ["Analysing how education and family contribute to the functioning of the wider social system best fits:", ["Conflict theory", "Symbolic interactionism", "Functionalism", "Social exchange theory"], 2, "Functionalism analyses relationships among parts of a social system.", "Section 1.3: Functionalism"],
    ] },
  { id: "english", subject: "English", title: "Subject-verb agreement", sourceId: "english", streams: ["mpsc", "cuet-pg"],
    notes: ["Find the grammatical subject before choosing the verb. Words inside an intervening phrase do not change the subject's number.", "Indefinite pronouns such as each and everyone take singular verbs in standard agreement. In a simple subject joined by and, use a plural verb."],
    pitfall: "The noun nearest the verb may belong to a prepositional phrase rather than be the subject.",
    questions: [
      ["Choose the correct verb: 'The box of old letters ___ on the shelf.'", ["are", "were", "is", "have been"], 2, "The subject is singular 'box', not plural 'letters'.", "Agreement rule: intervening phrases"],
      ["Choose the correct verb: 'Each of these candidates ___ a ticket.'", ["have", "has", "are having", "were having"], 1, "'Each' takes a singular verb: has.", "Agreement rule: each and other indefinite pronouns"],
      ["Choose the correct verb: 'Rina and Zote ___ ready.'", ["is", "was", "has been", "are"], 3, "Two people joined by 'and' form a plural subject.", "Agreement rule: subjects joined by and"],
    ] },
  { id: "environmental-studies", subject: "Environmental Studies", title: "Ozone protection", sourceId: "environment", streams: ["mpsc"],
    notes: ["The Montreal Protocol was adopted in 1987 to control ozone-depleting substances. Stratospheric ozone helps shield life from harmful ultraviolet radiation.", "Keep ozone depletion distinct from climate warming. Different environmental agreements have different principal objectives."],
    pitfall: "Do not describe every atmospheric treaty as primarily a carbon-dioxide agreement.",
    questions: [
      ["What is the primary objective of the Montreal Protocol?", ["Control ozone-depleting substances", "Conserve internationally important wetlands", "Regulate transboundary hazardous waste", "Control international trade in endangered species"], 0, "The treaty targets substances that deplete the ozone layer.", "About the Montreal Protocol: introduction"],
      ["In which year was the Montreal Protocol adopted?", ["1972", "1992", "1987", "2015"], 2, "The Protocol dates to 1987.", "About the Montreal Protocol: adoption"],
      ["The ozone layer particularly limits exposure to which radiation?", ["Radio waves", "Ultraviolet radiation", "Sound waves", "Microwaves only"], 1, "Ozone protection reduces harmful ultraviolet exposure.", "About the Montreal Protocol: ozone protection"],
    ] },
  { id: "public-administration", subject: "Public Administration", title: "Citizen's Charters", sourceId: "administration", streams: ["mpsc"],
    notes: ["A Citizen's Charter states an organisation's commitments to its service users. Useful elements include service standards, accessibility and grievance redress.", "A measurable promise can be assessed against actual performance. A general slogan alone gives citizens little basis for checking delivery."],
    pitfall: "Publishing a charter is not the same as meeting its standards. Evaluate implementation and access to redress.",
    questions: [
      ["Which item belongs in a Citizen's Charter?", ["Private party membership rules", "A confidential election strategy", "Service standards and grievance procedures", "A replacement for the Constitution"], 2, "A charter sets out service commitments and routes for redress.", "FAQ: definition and charter components"],
      ["Which commitment is most readily measurable?", ["Provide excellent service", "Acknowledge applications within two working days", "Always aim higher", "Be universally admired"], 1, "A stated time limit can be compared with actual service performance.", "FAQ: standards of services; original application example"],
      ["Why include grievance contact details in a charter?", ["To eliminate service standards", "To conceal responsibility", "To replace all courts", "To help users seek redress"], 3, "Access to a grievance mechanism is part of citizen-focused service commitments.", "FAQ: grievance redress"],
    ] },
  { id: "history", subject: "History", title: "Harappan evidence", sourceId: "history", streams: ["mpsc", "cuet-pg"],
    notes: ["NCERT dates the Mature Harappan urban phase to approximately 2600-1900 BCE. Archaeologists reconstruct life from material evidence including settlements, seals and plant remains.", "The Harappan script remains undeciphered. Distinguish an observed artefact from a proposed interpretation of its purpose."],
    pitfall: "Do not present a speculative religious interpretation as a directly readable inscription.",
    questions: [
      ["The Mature Harappan phase is conventionally dated to approximately:", ["2600-1900 BCE", "600-300 BCE", "1200-1700 CE", "8000-7000 BCE"], 0, "NCERT identifies the urban Mature Harappan phase as 2600-1900 BCE.", "Page 1: Terminologies, Places and Time"],
      ["Which statement about the Harappan script is supported by NCERT?", ["All inscriptions are translated", "It is identical to modern English", "It remains undeciphered", "It was written only on paper"], 2, "The script has not been securely deciphered.", "Page 1: opening paragraph"],
      ["Charred seeds are particularly useful evidence for investigating Harappan:", ["Royal succession", "Diet and crops", "Spoken language", "Legal codes"], 1, "Plant remains help archaeobotanists reconstruct subsistence.", "Pages 2-3: Subsistence Strategies"],
    ] },
  { id: "geography", subject: "Geography", title: "Latitude and location", sourceId: "geography", streams: ["mpsc", "cuet-pg"],
    notes: ["Latitude specifies position north or south of the equator. The equator is 0 degrees; the poles are 90 degrees north and south.", "Parallels run east-west. Meridians of longitude converge at the poles; lines of latitude remain parallel."],
    pitfall: "The direction a line runs is not the direction in which its coordinate is measured.",
    questions: [
      ["Which latitude marks the equator?", ["90 degrees N", "0 degrees", "23.5 degrees S", "180 degrees"], 1, "The equator is the zero reference for latitude.", "What is latitude?: opening definition"],
      ["A location at 25 degrees S lies in which hemisphere?", ["Northern", "Both northern and southern", "Neither", "Southern"], 3, "S denotes a position south of the equator.", "What is latitude?: degrees north and south"],
      ["Which lines converge at Earth's poles?", ["All parallels", "The equator", "Meridians of longitude", "The tropics"], 2, "Longitude meridians converge; latitude parallels do not.", "What is latitude?: latitude and longitude comparison"],
    ] },
  { id: "education", subject: "Education", title: "Assessment for learning", sourceId: "education", streams: ["mpsc", "cuet-pg"],
    notes: ["Formative assessment provides feedback while learning can still be improved. Teachers and learners can use the evidence to revise their approach.", "Summative assessment evaluates achieved learning. The purpose and use of evidence matter more than whether the instrument is a quiz, essay or test."],
    pitfall: "A quiz is not automatically formative: feedback must inform further learning.",
    questions: [
      ["A teacher uses exit slips to plan tomorrow's remedial lesson. This is primarily:", ["Formative assessment", "Final certification", "Administrative budgeting", "Random selection"], 0, "Evidence is being used during learning to adapt subsequent instruction.", "Formative Assessment"],
      ["An end-of-course assessment used to certify achievement is primarily:", ["Diagnostic only", "Summative", "A teaching timetable", "An attendance register"], 1, "Its purpose is to measure attained learning at the end of the course.", "Summative Assessment"],
      ["Which action best supports formative assessment?", ["Withholding all feedback", "Ranking students without feedback", "Providing feedback and an opportunity to revise", "Discarding evidence of misunderstanding"], 2, "Feedback followed by revision helps improve ongoing learning.", "Assessment-centered environments: feedback, reflection and revision"],
    ] },
];

topics.push({
  id: "general-aptitude", subject: "General Aptitude", title: "Numerical reasoning", sourceId: "mathematics", streams: ["mpsc", "cuet-pg"],
  notes: ["For a rectangle, area = length times width, while perimeter = twice the sum of length and width. Keep square units for area and linear units for perimeter.", "Translate the conditions into an equation, solve it and substitute back. Reject a negative solution when the unknown represents a physical length."],
  pitfall: "An area and a perimeter measure different things; the same numeral does not make their units interchangeable.",
  questions: [
    ["A rectangle has area 48 cm^2 and length 8 cm. Its perimeter is:", ["14 cm", "28 cm", "48 cm", "96 cm"], 1, "Width = 48/8 = 6 cm. Perimeter = 2(8 + 6) = 28 cm.", "Section 2.5: geometric applications; original worked example"],
    ["A rectangle is 3 cm longer than it is wide and has area 28 cm^2. Its width is:", ["7 cm", "14 cm", "4 cm", "3 cm"], 2, "w(w + 3) = 28 gives (w + 7)(w - 4) = 0. A width is positive, so w = 4 cm.", "Section 2.5: geometric applications; original worked example"],
  ],
});

// JEE foundation topics are fully hand-written, so all their questions are original seeds.
topics.push(...jeeTopics);

const originalTopicCounts = new Map(topics.map(topic => [topic.id, topic.questions.length]));
// Append within each topic so existing question IDs and saved progress stay stable.
for (const topic of topics) {
  const quota = Math.max(...topic.streams.map(stream => additionalQuotas[stream]?.[topic.id] ?? 0));
  const additions = [...(additionalQuestions[topic.id] ?? []), ...(practiceExpansion[topic.id] ?? [])];
  if (additions.length < quota) throw new Error(`Insufficient reviewed additions for ${topic.id}`);
  topic.questions.push(...additions.slice(0, quota));
}

export const reviewedQuestions: ReviewedQuestion[] = topics.flatMap(topic =>
  topic.questions.map(([question, options, answerIndex, explanation, sourceLocation], index) => ({
    id: `${topic.id}-${index + 1}`, subject: topic.subject, category: topic.title,
    question, options, answer: options[answerIndex], explanation,
    sourceId: topic.sourceId, sourceLocation, reviewedOn: contentRevision,
    kind: "original" as const,
    streams: topic.streams.filter(stream => index < originalTopicCounts.get(topic.id)! || index - originalTopicCounts.get(topic.id)! < additionalQuotas[stream][topic.id]),
  })),
);

export function getReviewedQuestions(stream: Stream): ReviewedQuestion[] {
  return reviewedQuestions.filter(question => question.streams.includes(stream));
}

export const collegeSubjects = ["Political Science", "History", "Economics", "Sociology", "Public Administration", "English", "Geography", "Education", "Environmental Studies"];
export type NotePack = { id: string; title: string; group: string; topicIds: string[] };
export const notePacks: NotePack[] = [
  ...(["mpsc", "neet", "jee", "cuet-pg"] as Stream[]).map(stream => ({
    id: stream, title: ({ mpsc: "MPSC", neet: "NEET", jee: "JEE Main", "cuet-pg": "CUET PG" })[stream] + " foundation notes",
    group: "Exam streams", topicIds: topics.filter(topic => topic.streams.includes(stream)).map(topic => topic.id),
  })),
  ...topics.filter(topic => collegeSubjects.includes(topic.subject)).map(topic => ({
    id: topic.id, title: `${topic.subject} revision notes`, group: "College subjects", topicIds: [topic.id],
  })),
];
