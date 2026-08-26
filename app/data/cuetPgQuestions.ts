export type CuetPgQuestion = {
  subject: string;
  category: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  wrongExplanations?: Record<string, string>;
  hint?: string;
};

export const cuetPgQuestions: CuetPgQuestion[] = Array<CuetPgQuestion>(
  {
    subject: "General Aptitude",
    category: "Logical Reasoning",
    question: "Find the next number: 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "36"],
    answer: "32",
    explanation:
      "Each number is multiplied by 2. Therefore, 16 × 2 = 32.",
    wrongExplanations: {
      "20": "The sequence is not increasing by 4.",
      "24": "The sequence follows multiplication, not simple addition.",
      "36": "36 does not follow the doubling pattern.",
    },
    hint: "Look at how each number changes from the previous number.",
  },
{
  subject: "Political Science",
  category: "Political Theory",
  question: "Who described justice as fairness?",
  options: ["John Rawls", "Robert Nozick", "Karl Marx", "J.S. Mill"],
  answer: "John Rawls",
  explanation:
    "John Rawls developed the idea of justice as fairness in A Theory of Justice.",
  wrongExplanations: {
    "Robert Nozick":
      "Nozick developed the entitlement theory of justice and criticised Rawls.",
    "Karl Marx":
      "Marx focused mainly on class relations, capitalism and exploitation.",
    "J.S. Mill":
      "Mill is mainly associated with utilitarianism and liberty."
  },
  hint: "Think of the original position and veil of ignorance."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Who developed the entitlement theory of justice?",
  options: ["Robert Nozick", "John Rawls", "Jeremy Bentham", "T.H. Green"],
  answer: "Robert Nozick",
  explanation:
    "Robert Nozick developed the entitlement theory of justice in Anarchy, State, and Utopia.",
  wrongExplanations: {
    "John Rawls":
      "Rawls developed justice as fairness.",
    "Jeremy Bentham":
      "Bentham is strongly associated with utilitarianism.",
    "T.H. Green":
      "Green is associated with idealist liberalism and positive freedom."
  },
  hint: "Think of the minimal state."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Who is most strongly associated with the concept of negative liberty?",
  options: ["Isaiah Berlin", "Karl Marx", "Plato", "Antonio Gramsci"],
  answer: "Isaiah Berlin",
  explanation:
    "Isaiah Berlin distinguished between negative liberty and positive liberty.",
  wrongExplanations: {
    "Karl Marx":
      "Marx focused mainly on class, alienation and capitalism.",
    Plato:
      "Plato focused on justice, philosopher-kings and the ideal state.",
    "Antonio Gramsci":
      "Gramsci is associated with cultural hegemony."
  },
  hint: "Think Two Concepts of Liberty."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Positive liberty generally refers to:",
  options: [
    "Capacity for self-mastery and self-development",
    "Absence of all laws",
    "Freedom from taxation only",
    "Freedom from foreign rule only"
  ],
  answer: "Capacity for self-mastery and self-development",
  explanation:
    "Positive liberty refers to the ability or capacity to control one's life and develop one's potential.",
  wrongExplanations: {
    "Absence of all laws":
      "Positive liberty does not mean complete absence of law.",
    "Freedom from taxation only":
      "This is far too narrow.",
    "Freedom from foreign rule only":
      "This concerns national independence rather than the concept of positive liberty."
  },
  hint: "Think freedom to, not only freedom from."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Utilitarianism is most closely associated with:",
  options: [
    "The greatest happiness of the greatest number",
    "Class struggle",
    "Divine right",
    "Natural aristocracy"
  ],
  answer: "The greatest happiness of the greatest number",
  explanation:
    "Utilitarianism evaluates actions and policies according to their contribution to overall happiness or utility.",
  wrongExplanations: {
    "Class struggle":
      "Class struggle is central to Marxist theory.",
    "Divine right":
      "Divine-right theory justified monarchy through religious authority.",
    "Natural aristocracy":
      "This is not the central principle of utilitarianism."
  },
  hint: "Think Bentham."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Who wrote On Liberty?",
  options: ["J.S. Mill", "John Locke", "Thomas Hobbes", "Edmund Burke"],
  answer: "J.S. Mill",
  explanation:
    "John Stuart Mill wrote On Liberty, a major work defending individual freedom.",
  wrongExplanations: {
    "John Locke":
      "Locke wrote works such as Two Treatises of Government.",
    "Thomas Hobbes":
      "Hobbes wrote Leviathan.",
    "Edmund Burke":
      "Burke is associated with conservative political thought."
  },
  hint: "Think harm principle."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Who wrote Leviathan?",
  options: ["Thomas Hobbes", "John Locke", "Rousseau", "Machiavelli"],
  answer: "Thomas Hobbes",
  explanation:
    "Thomas Hobbes published Leviathan in 1651.",
  wrongExplanations: {
    "John Locke":
      "Locke wrote Two Treatises of Government.",
    Rousseau:
      "Rousseau wrote The Social Contract.",
    Machiavelli:
      "Machiavelli wrote The Prince."
  },
  hint: "Think absolute sovereign."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "According to Hobbes, life in the state of nature was:",
  options: [
    "Solitary, poor, nasty, brutish and short",
    "Peaceful and cooperative",
    "Completely democratic",
    "Governed by natural parliament"
  ],
  answer: "Solitary, poor, nasty, brutish and short",
  explanation:
    "Hobbes described the state of nature as insecure and conflict-ridden.",
  wrongExplanations: {
    "Peaceful and cooperative":
      "This is closer to some interpretations of Locke or Rousseau.",
    "Completely democratic":
      "Hobbes did not describe the state of nature as democratic.",
    "Governed by natural parliament":
      "There was no organised government in Hobbes's state of nature."
  },
  hint: "Think war of all against all."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Who defended natural rights to life, liberty and property?",
  options: ["John Locke", "Thomas Hobbes", "Plato", "Hegel"],
  answer: "John Locke",
  explanation:
    "John Locke argued that individuals possess natural rights to life, liberty and property.",
  wrongExplanations: {
    "Thomas Hobbes":
      "Hobbes emphasised security and sovereign authority.",
    Plato:
      "Plato focused on justice and philosopher-kings.",
    Hegel:
      "Hegel developed idealist philosophy and a theory of the state."
  },
  hint: "Think limited government and right of resistance."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Who wrote The Social Contract?",
  options: ["Jean-Jacques Rousseau", "John Locke", "Bentham", "Montesquieu"],
  answer: "Jean-Jacques Rousseau",
  explanation:
    "Rousseau wrote The Social Contract and developed the concept of the general will.",
  wrongExplanations: {
    "John Locke":
      "Locke wrote Two Treatises of Government.",
    Bentham:
      "Bentham is associated with utilitarianism.",
    Montesquieu:
      "Montesquieu is associated with separation of powers."
  },
  hint: "Think general will."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "The concept of the general will is associated with:",
  options: ["Rousseau", "Hobbes", "Locke", "Mill"],
  answer: "Rousseau",
  explanation:
    "Rousseau used the concept of the general will to describe the collective will directed toward the common good.",
  wrongExplanations: {
    Hobbes:
      "Hobbes focused on sovereign authority.",
    Locke:
      "Locke focused on natural rights and limited government.",
    Mill:
      "Mill is associated with utilitarianism and liberty."
  },
  hint: "Think popular sovereignty."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Who wrote The Prince?",
  options: ["Niccolò Machiavelli", "Thomas Hobbes", "Aristotle", "John Locke"],
  answer: "Niccolò Machiavelli",
  explanation:
    "Machiavelli wrote The Prince, one of the most famous works of political thought.",
  wrongExplanations: {
    "Thomas Hobbes":
      "Hobbes wrote Leviathan.",
    Aristotle:
      "Aristotle wrote Politics.",
    "John Locke":
      "Locke wrote Two Treatises of Government."
  },
  hint: "Think Renaissance Florence."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Who wrote Politics?",
  options: ["Aristotle", "Plato", "Machiavelli", "Rousseau"],
  answer: "Aristotle",
  explanation:
    "Aristotle wrote Politics, a foundational work in political science.",
  wrongExplanations: {
    Plato:
      "Plato wrote The Republic.",
    Machiavelli:
      "Machiavelli wrote The Prince.",
    Rousseau:
      "Rousseau wrote The Social Contract."
  },
  hint: "Think classification of constitutions."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Who wrote The Republic?",
  options: ["Plato", "Aristotle", "Hobbes", "Locke"],
  answer: "Plato",
  explanation:
    "Plato wrote The Republic, which discusses justice and the ideal state.",
  wrongExplanations: {
    Aristotle:
      "Aristotle wrote Politics.",
    Hobbes:
      "Hobbes wrote Leviathan.",
    Locke:
      "Locke wrote Two Treatises of Government."
  },
  hint: "Think philosopher-king."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Who wrote Hind Swaraj?",
  options: [
    "Mahatma Gandhi",
    "B.R. Ambedkar",
    "Jawaharlal Nehru",
    "M.N. Roy"
  ],
  answer: "Mahatma Gandhi",
  explanation:
    "Mahatma Gandhi wrote Hind Swaraj in 1909.",
  wrongExplanations: {
    "B.R. Ambedkar":
      "Ambedkar wrote works such as Annihilation of Caste.",
    "Jawaharlal Nehru":
      "Nehru wrote works such as The Discovery of India.",
    "M.N. Roy":
      "Roy is associated with radical humanism."
  },
  hint: "Think critique of modern civilisation."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Who wrote Annihilation of Caste?",
  options: ["B.R. Ambedkar", "Mahatma Gandhi", "M.N. Roy", "Aurobindo"],
  answer: "B.R. Ambedkar",
  explanation:
    "B.R. Ambedkar wrote Annihilation of Caste as a powerful critique of caste hierarchy.",
  wrongExplanations: {
    "Mahatma Gandhi":
      "Gandhi wrote Hind Swaraj.",
    "M.N. Roy":
      "Roy developed radical humanism.",
    Aurobindo:
      "Aurobindo is associated with spiritual nationalism."
  },
  hint: "Think caste reform and constitutionalism."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Radical Humanism is associated with:",
  options: ["M.N. Roy", "Gandhi", "Nehru", "Savarkar"],
  answer: "M.N. Roy",
  explanation:
    "M.N. Roy developed the philosophy of Radical Humanism.",
  wrongExplanations: {
    Gandhi:
      "Gandhi is associated with satyagraha and non-violence.",
    Nehru:
      "Nehru is associated with democratic socialism and secular nationalism.",
    Savarkar:
      "Savarkar is associated with Hindutva."
  },
  hint: "Think former Marxist turned radical humanist."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which Part of the Indian Constitution contains Fundamental Rights?",
  options: ["Part III", "Part IV", "Part IVA", "Part V"],
  answer: "Part III",
  explanation:
    "Fundamental Rights are mainly contained in Part III of the Constitution.",
  wrongExplanations: {
    "Part IV":
      "Part IV contains Directive Principles of State Policy.",
    "Part IVA":
      "Part IVA contains Fundamental Duties.",
    "Part V":
      "Part V deals with the Union."
  },
  hint: "Rights come before Directive Principles."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Directive Principles of State Policy are contained in:",
  options: ["Part IV", "Part III", "Part IVA", "Part VI"],
  answer: "Part IV",
  explanation:
    "Directive Principles of State Policy are contained in Part IV of the Constitution.",
  wrongExplanations: {
    "Part III":
      "Part III contains Fundamental Rights.",
    "Part IVA":
      "Part IVA contains Fundamental Duties.",
    "Part VI":
      "Part VI deals mainly with the States."
  },
  hint: "Think Articles 36 to 51."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Fundamental Duties are listed under:",
  options: ["Article 51A", "Article 21", "Article 32", "Article 356"],
  answer: "Article 51A",
  explanation:
    "The Fundamental Duties of citizens are listed under Article 51A.",
  wrongExplanations: {
    "Article 21":
      "Article 21 protects life and personal liberty.",
    "Article 32":
      "Article 32 provides the Right to Constitutional Remedies.",
    "Article 356":
      "Article 356 concerns failure of constitutional machinery in a state."
  },
  hint: "Think Part IVA."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Who called Article 32 the heart and soul of the Constitution?",
  options: ["B.R. Ambedkar", "Jawaharlal Nehru", "Rajendra Prasad", "K.M. Munshi"],
  answer: "B.R. Ambedkar",
  explanation:
    "B.R. Ambedkar described Article 32 as the heart and soul of the Constitution.",
  wrongExplanations: {
    "Jawaharlal Nehru":
      "Nehru played a major role in constitution-making but did not make this famous remark.",
    "Rajendra Prasad":
      "Rajendra Prasad was President of the Constituent Assembly.",
    "K.M. Munshi":
      "Munshi was an important member of the Constituent Assembly."
  },
  hint: "Think chief architect of the Constitution."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The President of India is elected by:",
  options: [
    "An electoral college",
    "Direct popular vote",
    "Only Lok Sabha members",
    "Only state governors"
  ],
  answer: "An electoral college",
  explanation:
    "The President is elected indirectly by an electoral college consisting of elected MPs and elected members of state legislative assemblies, with constitutionally specified inclusion of certain UT assemblies.",
  wrongExplanations: {
    "Direct popular vote":
      "India does not directly elect the President.",
    "Only Lok Sabha members":
      "The electoral college includes more than Lok Sabha members.",
    "Only state governors":
      "Governors do not elect the President."
  },
  hint: "Think indirect election."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Who wrote Politics Among Nations?",
  options: [
    "Hans J. Morgenthau",
    "Kenneth Waltz",
    "Robert Keohane",
    "Alexander Wendt"
  ],
  answer: "Hans J. Morgenthau",
  explanation:
    "Hans J. Morgenthau wrote Politics Among Nations, a major text of classical realism.",
  wrongExplanations: {
    "Kenneth Waltz":
      "Waltz wrote Theory of International Politics.",
    "Robert Keohane":
      "Keohane is associated with neoliberal institutionalism.",
    "Alexander Wendt":
      "Wendt is associated with constructivism."
  },
  hint: "Classical realism."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Who wrote Theory of International Politics?",
  options: ["Kenneth Waltz", "Hans Morgenthau", "Joseph Nye", "Samuel Huntington"],
  answer: "Kenneth Waltz",
  explanation:
    "Kenneth Waltz wrote Theory of International Politics and developed structural realism.",
  wrongExplanations: {
    "Hans Morgenthau":
      "Morgenthau is associated with classical realism.",
    "Joseph Nye":
      "Nye is associated with soft power and complex interdependence.",
    "Samuel Huntington":
      "Huntington wrote The Clash of Civilizations."
  },
  hint: "Think neorealism."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Soft power is most closely associated with:",
  options: ["Joseph Nye", "Kenneth Waltz", "Morgenthau", "Lenin"],
  answer: "Joseph Nye",
  explanation:
    "Joseph Nye developed the concept of soft power.",
  wrongExplanations: {
    "Kenneth Waltz":
      "Waltz is associated with structural realism.",
    Morgenthau:
      "Morgenthau focused on power politics and national interest.",
    Lenin:
      "Lenin developed theories of imperialism and revolution."
  },
  hint: "Attraction rather than coercion."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "The concept of complex interdependence is associated with:",
  options: [
    "Robert Keohane and Joseph Nye",
    "Morgenthau and Waltz",
    "Marx and Engels",
    "Hobbes and Locke"
  ],
  answer: "Robert Keohane and Joseph Nye",
  explanation:
    "Robert Keohane and Joseph Nye developed the idea of complex interdependence.",
  wrongExplanations: {
    "Morgenthau and Waltz":
      "They are associated mainly with realist approaches.",
    "Marx and Engels":
      "They developed Marxist theory.",
    "Hobbes and Locke":
      "They are social contract thinkers."
  },
  hint: "Think transnational relations."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Who is associated with the ideal type of bureaucracy?",
  options: ["Max Weber", "Woodrow Wilson", "Herbert Simon", "Elton Mayo"],
  answer: "Max Weber",
  explanation:
    "Max Weber developed the ideal-type model of bureaucracy based on hierarchy, rules and rational-legal authority.",
  wrongExplanations: {
    "Woodrow Wilson":
      "Wilson is associated with the politics-administration distinction.",
    "Herbert Simon":
      "Simon criticised classical principles of administration.",
    "Elton Mayo":
      "Mayo is associated with the human relations approach."
  },
  hint: "Think rational-legal authority."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Who wrote The Study of Administration?",
  options: ["Woodrow Wilson", "Max Weber", "Chester Barnard", "F.W. Taylor"],
  answer: "Woodrow Wilson",
  explanation:
    "Woodrow Wilson published The Study of Administration in 1887.",
  wrongExplanations: {
    "Max Weber":
      "Weber developed bureaucratic theory.",
    "Chester Barnard":
      "Barnard wrote The Functions of the Executive.",
    "F.W. Taylor":
      "Taylor developed scientific management."
  },
  hint: "Think politics-administration dichotomy."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Scientific Management is associated with:",
  options: ["F.W. Taylor", "Elton Mayo", "Max Weber", "Herbert Simon"],
  answer: "F.W. Taylor",
  explanation:
    "Frederick Winslow Taylor developed Scientific Management.",
  wrongExplanations: {
    "Elton Mayo":
      "Mayo is associated with human relations theory.",
    "Max Weber":
      "Weber is associated with bureaucracy.",
    "Herbert Simon":
      "Simon is associated with decision-making theory."
  },
  hint: "Think time and motion studies."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "The Hawthorne Experiments are associated with:",
  options: ["Elton Mayo", "F.W. Taylor", "Max Weber", "Luther Gulick"],
  answer: "Elton Mayo",
  explanation:
    "Elton Mayo is strongly associated with the Hawthorne Experiments and the human relations movement.",
  wrongExplanations: {
    "F.W. Taylor":
      "Taylor is associated with scientific management.",
    "Max Weber":
      "Weber is associated with bureaucracy.",
    "Luther Gulick":
      "Gulick is associated with POSDCORB."
  },
  hint: "Think human relations."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "POSDCORB is associated with:",
  options: ["Luther Gulick", "Herbert Simon", "Max Weber", "Mary Parker Follett"],
  answer: "Luther Gulick",
  explanation:
    "Luther Gulick popularised POSDCORB as a summary of administrative functions.",
  wrongExplanations: {
    "Herbert Simon":
      "Simon criticised many classical principles as proverbs.",
    "Max Weber":
      "Weber developed bureaucratic theory.",
    "Mary Parker Follett":
      "Follett emphasised coordination and human relations."
  },
  hint: "Planning, Organizing, Staffing..."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 3, 6, 12, 24, ?",
  options: ["36", "42", "48", "54"],
  answer: "48",
  explanation:
    "Each number is multiplied by 2. Therefore, 24 × 2 = 48.",
  wrongExplanations: {
    "36": "The sequence is not increasing by 12.",
    "42": "42 does not follow the doubling pattern.",
    "54": "54 does not follow the pattern."
  },
  hint: "Look for multiplication."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the odd one out: Apple, Mango, Banana, Carrot",
  options: ["Apple", "Mango", "Banana", "Carrot"],
  answer: "Carrot",
  explanation:
    "Apple, mango and banana are fruits, while carrot is a vegetable/root crop.",
  wrongExplanations: {
    Apple: "Apple belongs to the fruit group.",
    Mango: "Mango belongs to the fruit group.",
    Banana: "Banana belongs to the fruit group."
  },
  hint: "Three belong to one food category."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 25% of 200?",
  options: ["25", "40", "50", "75"],
  answer: "50",
  explanation:
    "25% of 200 = 25/100 × 200 = 50.",
  wrongExplanations: {
    "25": "This is 12.5% of 200.",
    "40": "This is 20% of 200.",
    "75": "This is 37.5% of 200."
  },
  hint: "25% means one-fourth."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "If 5 pens cost ₹100, what is the cost of one pen?",
  options: ["₹10", "₹20", "₹25", "₹50"],
  answer: "₹20",
  explanation:
    "₹100 ÷ 5 = ₹20 per pen.",
  wrongExplanations: {
    "₹10": "Five pens at ₹10 would cost ₹50.",
    "₹25": "Five pens at ₹25 would cost ₹125.",
    "₹50": "Five pens at ₹50 would cost ₹250."
  },
  hint: "Divide total cost by number of pens."
},

{
  subject: "General Aptitude",
  category: "Language",
  question: "Choose the correct synonym of 'rapid'.",
  options: ["Fast", "Slow", "Weak", "Late"],
  answer: "Fast",
  explanation:
    "Rapid means fast or quick.",
  wrongExplanations: {
    Slow: "Slow is nearly the opposite of rapid.",
    Weak: "Weak refers to lack of strength.",
    Late: "Late refers to time."
  },
  hint: "Think quick."
},

{
  subject: "General Aptitude",
  category: "Language",
  question: "Choose the correct antonym of 'ancient'.",
  options: ["Modern", "Old", "Historic", "Past"],
  answer: "Modern",
  explanation:
    "Modern is the opposite of ancient.",
  wrongExplanations: {
    Old: "Old is similar in meaning to ancient.",
    Historic: "Historic relates to history.",
    Past: "Past refers to earlier time."
  },
  hint: "Think present-day."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The Constitution of India came into force on:",
  options: [
    "26 January 1950",
    "15 August 1947",
    "26 November 1949",
    "2 October 1950"
  ],
  answer: "26 January 1950",
  explanation:
    "The Constitution came into force on 26 January 1950.",
  wrongExplanations: {
    "15 August 1947":
      "India became independent on 15 August 1947.",
    "26 November 1949":
      "The Constitution was adopted on 26 November 1949.",
    "2 October 1950":
      "This is not the commencement date."
  },
  hint: "Republic Day."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "CPU stands for:",
  options: [
    "Central Processing Unit",
    "Computer Processing Utility",
    "Central Program Unit",
    "Control Processing User"
  ],
  answer: "Central Processing Unit",
  explanation:
    "CPU stands for Central Processing Unit and performs major processing operations in a computer.",
  wrongExplanations: {
    "Computer Processing Utility":
      "This is not the standard expansion.",
    "Central Program Unit":
      "This is incorrect.",
    "Control Processing User":
      "This is not a recognised expansion."
  },
  hint: "Think main processor."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Which of the following is an input device?",
  options: ["Keyboard", "Monitor", "Printer", "Speaker"],
  answer: "Keyboard",
  explanation:
    "A keyboard sends user input into the computer.",
  wrongExplanations: {
    Monitor: "A monitor is an output device.",
    Printer: "A printer is an output device.",
    Speaker: "A speaker is an output device."
  },
  hint: "Which one sends data into the computer?"
},
{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which Article of the Indian Constitution guarantees equality before law?",
  options: ["Article 14", "Article 19", "Article 21", "Article 25"],
  answer: "Article 14",
  explanation:
    "Article 14 guarantees equality before the law and equal protection of the laws.",
  wrongExplanations: {
    "Article 19": "Article 19 guarantees certain freedoms.",
    "Article 21": "Article 21 protects life and personal liberty.",
    "Article 25": "Article 25 deals with freedom of religion."
  },
  hint: "Think equality."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which Article protects life and personal liberty?",
  options: ["Article 21", "Article 14", "Article 32", "Article 44"],
  answer: "Article 21",
  explanation:
    "Article 21 states that no person shall be deprived of life or personal liberty except according to procedure established by law.",
  wrongExplanations: {
    "Article 14": "Article 14 deals with equality.",
    "Article 32": "Article 32 deals with constitutional remedies.",
    "Article 44": "Article 44 is a Directive Principle relating to a Uniform Civil Code."
  },
  hint: "Life and liberty."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which Article deals with freedom of speech and expression?",
  options: ["Article 19", "Article 17", "Article 29", "Article 51A"],
  answer: "Article 19",
  explanation:
    "Article 19 protects several freedoms including freedom of speech and expression.",
  wrongExplanations: {
    "Article 17": "Article 17 abolishes untouchability.",
    "Article 29": "Article 29 protects cultural and educational interests.",
    "Article 51A": "Article 51A lists Fundamental Duties."
  },
  hint: "Think six freedoms."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Who appoints the Prime Minister of India?",
  options: ["President", "Chief Justice of India", "Speaker", "Election Commission"],
  answer: "President",
  explanation:
    "The President appoints the Prime Minister, normally the leader who commands majority support in the Lok Sabha.",
  wrongExplanations: {
    "Chief Justice of India": "The Chief Justice does not appoint the Prime Minister.",
    Speaker: "The Speaker presides over the Lok Sabha.",
    "Election Commission": "The Election Commission conducts elections."
  },
  hint: "Formal constitutional appointment."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Council of Ministers is collectively responsible to:",
  options: ["Lok Sabha", "Rajya Sabha", "President alone", "Supreme Court"],
  answer: "Lok Sabha",
  explanation:
    "Under the parliamentary system, the Council of Ministers is collectively responsible to the Lok Sabha.",
  wrongExplanations: {
    "Rajya Sabha": "The government does not depend on Rajya Sabha confidence for survival.",
    "President alone": "The President acts largely on ministerial advice.",
    "Supreme Court": "The judiciary does not exercise parliamentary confidence."
  },
  hint: "The government must retain the confidence of the lower house."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which House of Parliament is a permanent body?",
  options: ["Rajya Sabha", "Lok Sabha", "Both dissolve together", "Neither"],
  answer: "Rajya Sabha",
  explanation:
    "Rajya Sabha is a continuing chamber and is not subject to dissolution.",
  wrongExplanations: {
    "Lok Sabha": "Lok Sabha can be dissolved.",
    "Both dissolve together": "Only the Lok Sabha is subject to dissolution.",
    Neither: "Rajya Sabha is constitutionally a permanent chamber."
  },
  hint: "One-third retire periodically."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "A Money Bill can be introduced only in:",
  options: ["Lok Sabha", "Rajya Sabha", "Either House", "Supreme Court"],
  answer: "Lok Sabha",
  explanation:
    "A Money Bill can be introduced only in the Lok Sabha.",
  wrongExplanations: {
    "Rajya Sabha": "Rajya Sabha cannot introduce a Money Bill.",
    "Either House": "Money Bills have a special constitutional procedure.",
    "Supreme Court": "Courts do not introduce legislation."
  },
  hint: "Think financial supremacy of the lower house."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Who decides whether a Bill is a Money Bill?",
  options: ["Speaker of the Lok Sabha", "President", "Prime Minister", "Chairman of Rajya Sabha"],
  answer: "Speaker of the Lok Sabha",
  explanation:
    "The Speaker of the Lok Sabha certifies whether a Bill is a Money Bill.",
  wrongExplanations: {
    President: "The President does not certify Money Bills.",
    "Prime Minister": "The Prime Minister does not formally certify Money Bills.",
    "Chairman of Rajya Sabha": "The Chairman of Rajya Sabha does not make this certification."
  },
  hint: "Think lower-house presiding officer."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Vice-President of India is ex officio Chairman of:",
  options: ["Rajya Sabha", "Lok Sabha", "Supreme Court", "NITI Aayog"],
  answer: "Rajya Sabha",
  explanation:
    "The Vice-President serves as the ex officio Chairman of the Rajya Sabha.",
  wrongExplanations: {
    "Lok Sabha": "Lok Sabha is presided over by the Speaker.",
    "Supreme Court": "The Chief Justice heads the Supreme Court.",
    "NITI Aayog": "The Prime Minister chairs NITI Aayog."
  },
  hint: "Upper House."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which constitutional body conducts elections in India?",
  options: ["Election Commission of India", "UPSC", "Finance Commission", "CAG"],
  answer: "Election Commission of India",
  explanation:
    "The Election Commission supervises, directs and controls elections to Parliament, State Legislatures and the offices of President and Vice-President.",
  wrongExplanations: {
    UPSC: "UPSC conducts recruitment examinations for public services.",
    "Finance Commission": "Finance Commission deals with fiscal distribution.",
    CAG: "CAG audits public accounts."
  },
  hint: "Think electoral management."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which Article provides for the Election Commission of India?",
  options: ["Article 324", "Article 280", "Article 148", "Article 356"],
  answer: "Article 324",
  explanation:
    "Article 324 vests the superintendence, direction and control of elections in the Election Commission.",
  wrongExplanations: {
    "Article 280": "Article 280 provides for the Finance Commission.",
    "Article 148": "Article 148 deals with the CAG.",
    "Article 356": "Article 356 concerns President's Rule."
  },
  hint: "Election Commission = 324."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Finance Commission is constituted under:",
  options: ["Article 280", "Article 324", "Article 148", "Article 263"],
  answer: "Article 280",
  explanation:
    "Article 280 provides for the constitution of the Finance Commission.",
  wrongExplanations: {
    "Article 324": "Article 324 deals with elections.",
    "Article 148": "Article 148 deals with the CAG.",
    "Article 263": "Article 263 deals with the Inter-State Council."
  },
  hint: "Finance = 280."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Comptroller and Auditor General of India is provided under:",
  options: ["Article 148", "Article 280", "Article 324", "Article 312"],
  answer: "Article 148",
  explanation:
    "Article 148 provides for the office of the Comptroller and Auditor General of India.",
  wrongExplanations: {
    "Article 280": "This concerns the Finance Commission.",
    "Article 324": "This concerns the Election Commission.",
    "Article 312": "This concerns All India Services."
  },
  hint: "CAG = 148."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which constitutional amendment lowered the voting age from 21 to 18?",
  options: ["61st Amendment", "42nd Amendment", "44th Amendment", "73rd Amendment"],
  answer: "61st Amendment",
  explanation:
    "The 61st Constitutional Amendment lowered the voting age from 21 to 18 years.",
  wrongExplanations: {
    "42nd Amendment": "The 42nd Amendment introduced major constitutional changes including Fundamental Duties.",
    "44th Amendment": "The 44th Amendment reversed several Emergency-era changes.",
    "73rd Amendment": "The 73rd Amendment constitutionalised Panchayati Raj."
  },
  hint: "Voting age = 61st."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which amendment constitutionalised Panchayati Raj institutions?",
  options: ["73rd Amendment", "74th Amendment", "42nd Amendment", "52nd Amendment"],
  answer: "73rd Amendment",
  explanation:
    "The 73rd Constitutional Amendment gave constitutional status to Panchayati Raj institutions.",
  wrongExplanations: {
    "74th Amendment": "The 74th Amendment deals with urban local bodies.",
    "42nd Amendment": "The 42nd Amendment introduced wide constitutional changes.",
    "52nd Amendment": "The 52nd Amendment introduced the anti-defection law."
  },
  hint: "Rural local government."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which amendment gave constitutional status to municipalities?",
  options: ["74th Amendment", "73rd Amendment", "44th Amendment", "61st Amendment"],
  answer: "74th Amendment",
  explanation:
    "The 74th Constitutional Amendment gave constitutional recognition to urban local bodies.",
  wrongExplanations: {
    "73rd Amendment": "The 73rd Amendment deals with Panchayats.",
    "44th Amendment": "The 44th Amendment dealt with post-Emergency constitutional reforms.",
    "61st Amendment": "The 61st Amendment lowered the voting age."
  },
  hint: "Urban local government."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Comparative Politics primarily involves:",
  options: [
    "Comparison of political systems and processes",
    "Study of one constitution only",
    "Study of international law only",
    "Study of political philosophy only"
  ],
  answer: "Comparison of political systems and processes",
  explanation:
    "Comparative Politics examines similarities and differences among political systems, institutions and processes.",
  wrongExplanations: {
    "Study of one constitution only": "Comparative Politics goes beyond one country.",
    "Study of international law only": "That belongs more to International Relations and law.",
    "Study of political philosophy only": "Political theory is a distinct area."
  },
  hint: "The word comparative gives the clue."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Who is associated with the structural-functional approach in comparative politics?",
  options: ["Gabriel Almond", "Karl Marx", "John Rawls", "Hans Morgenthau"],
  answer: "Gabriel Almond",
  explanation:
    "Gabriel Almond used structural-functional analysis in comparative political studies.",
  wrongExplanations: {
    "Karl Marx": "Marx is associated with class analysis and historical materialism.",
    "John Rawls": "Rawls is a theorist of justice.",
    "Hans Morgenthau": "Morgenthau is associated with realism in IR."
  },
  hint: "Think Almond and comparative politics."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "The concept of political culture is strongly associated with:",
  options: ["Gabriel Almond and Sidney Verba", "Marx and Engels", "Hobbes and Locke", "Bentham and Mill"],
  answer: "Gabriel Almond and Sidney Verba",
  explanation:
    "Almond and Verba developed a major comparative study of political culture in The Civic Culture.",
  wrongExplanations: {
    "Marx and Engels": "They developed Marxist theory.",
    "Hobbes and Locke": "They are social contract thinkers.",
    "Bentham and Mill": "They are associated with utilitarianism."
  },
  hint: "Think The Civic Culture."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Which type of political culture is marked by low awareness of the political system?",
  options: ["Parochial", "Subject", "Participant", "Civic"],
  answer: "Parochial",
  explanation:
    "In a parochial political culture, citizens have limited awareness of the political system.",
  wrongExplanations: {
    Subject: "Subject culture involves awareness but limited participation.",
    Participant: "Participant culture involves active political engagement.",
    Civic: "Civic culture is a balanced mixture supportive of democracy."
  },
  hint: "Lowest political awareness."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "A participant political culture is characterised by:",
  options: [
    "Active citizen involvement",
    "Complete political ignorance",
    "Only obedience to rulers",
    "Absence of political institutions"
  ],
  answer: "Active citizen involvement",
  explanation:
    "Participant culture involves citizens who are aware of politics and actively engage in political processes.",
  wrongExplanations: {
    "Complete political ignorance": "That is closer to parochial culture.",
    "Only obedience to rulers": "That is closer to subject culture.",
    "Absence of political institutions": "Political culture assumes a political system."
  },
  hint: "Participant = active."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Political development commonly refers to:",
  options: [
    "Growth of political institutions and capacity",
    "Only economic growth",
    "Only military expansion",
    "Only population growth"
  ],
  answer: "Growth of political institutions and capacity",
  explanation:
    "Political development refers broadly to institutional capacity, participation, legitimacy and political modernisation.",
  wrongExplanations: {
    "Only economic growth": "Economic development is related but distinct.",
    "Only military expansion": "Military power is only one aspect of politics.",
    "Only population growth": "Population growth is demographic."
  },
  hint: "Think institutional development."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Balance of power is mainly associated with which theoretical tradition?",
  options: ["Realism", "Constructivism", "Feminism only", "Postmodernism"],
  answer: "Realism",
  explanation:
    "Balance of power is a central idea in realist approaches to international relations.",
  wrongExplanations: {
    Constructivism: "Constructivism emphasises norms, ideas and identities.",
    "Feminism only": "Feminist IR focuses on gendered structures of power.",
    Postmodernism: "Postmodernism critiques dominant narratives and categories."
  },
  hint: "Power politics."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Neorealism is also known as:",
  options: ["Structural realism", "Classical liberalism", "Constructivism", "Dependency theory"],
  answer: "Structural realism",
  explanation:
    "Neorealism, especially associated with Kenneth Waltz, is also called structural realism.",
  wrongExplanations: {
    "Classical liberalism": "Liberalism is a different theoretical tradition.",
    Constructivism: "Constructivism emphasises socially constructed identities and norms.",
    "Dependency theory": "Dependency theory focuses on unequal global economic relations."
  },
  hint: "Waltz."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Constructivism in International Relations is strongly associated with:",
  options: ["Alexander Wendt", "Hans Morgenthau", "Kenneth Waltz", "John Mearsheimer"],
  answer: "Alexander Wendt",
  explanation:
    "Alexander Wendt is one of the most influential constructivist scholars in International Relations.",
  wrongExplanations: {
    "Hans Morgenthau": "Morgenthau is a classical realist.",
    "Kenneth Waltz": "Waltz is a structural realist.",
    "John Mearsheimer": "Mearsheimer is associated with offensive realism."
  },
  hint: "Anarchy is what states make of it."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Who wrote 'Anarchy is what states make of it'?",
  options: ["Alexander Wendt", "Kenneth Waltz", "Robert Keohane", "Morgenthau"],
  answer: "Alexander Wendt",
  explanation:
    "Alexander Wendt used this phrase to challenge purely materialist interpretations of international anarchy.",
  wrongExplanations: {
    "Kenneth Waltz": "Waltz emphasised anarchy as a structural condition.",
    "Robert Keohane": "Keohane is associated with neoliberal institutionalism.",
    Morgenthau: "Morgenthau is associated with classical realism."
  },
  hint: "Constructivism."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "The term 'security dilemma' refers to:",
  options: [
    "One state's security measures making others feel less secure",
    "A state having no military",
    "Economic recession only",
    "Failure of elections"
  ],
  answer: "One state's security measures making others feel less secure",
  explanation:
    "The security dilemma occurs when steps taken by one state to increase its security create insecurity in others.",
  wrongExplanations: {
    "A state having no military": "That is not the definition.",
    "Economic recession only": "The concept is primarily about security relations.",
    "Failure of elections": "The concept is international rather than electoral."
  },
  hint: "Your defence may look like my threat."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Which theory focuses on unequal relations between developed and developing countries?",
  options: ["Dependency theory", "Classical realism", "Liberal institutionalism", "Pluralism"],
  answer: "Dependency theory",
  explanation:
    "Dependency theory argues that global economic relations can reproduce underdevelopment in peripheral countries.",
  wrongExplanations: {
    "Classical realism": "Realism focuses mainly on power and security.",
    "Liberal institutionalism": "This emphasises cooperation through institutions.",
    Pluralism: "Pluralism deals more with distribution of political power."
  },
  hint: "Core and periphery."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "The Non-Aligned Movement formally emerged during the Cold War mainly to:",
  options: [
    "Avoid formal alignment with major power blocs",
    "Join NATO",
    "Join the Warsaw Pact",
    "Create a single world government"
  ],
  answer: "Avoid formal alignment with major power blocs",
  explanation:
    "Non-alignment sought strategic autonomy rather than formal alignment with either major Cold War bloc.",
  wrongExplanations: {
    "Join NATO": "NAM was not created to join the Western military bloc.",
    "Join the Warsaw Pact": "NAM was not created to join the Soviet bloc.",
    "Create a single world government": "That was not its main objective."
  },
  hint: "Neither bloc."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "The Bandung Conference was held in:",
  options: ["1955", "1945", "1961", "1971"],
  answer: "1955",
  explanation:
    "The Bandung Conference of Asian and African countries was held in 1955.",
  wrongExplanations: {
    "1945": "1945 marks the end of World War II and creation of the UN.",
    "1961": "The first NAM summit was held in Belgrade in 1961.",
    "1971": "This is not the Bandung year."
  },
  hint: "Before the first NAM summit."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Who wrote Administrative Behavior?",
  options: ["Herbert Simon", "Chester Barnard", "Max Weber", "Luther Gulick"],
  answer: "Herbert Simon",
  explanation:
    "Herbert Simon wrote Administrative Behavior and developed decision-making theory.",
  wrongExplanations: {
    "Chester Barnard": "Barnard wrote The Functions of the Executive.",
    "Max Weber": "Weber developed bureaucratic theory.",
    "Luther Gulick": "Gulick is associated with POSDCORB."
  },
  hint: "Bounded rationality."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "The concept of bounded rationality is associated with:",
  options: ["Herbert Simon", "F.W. Taylor", "Max Weber", "Elton Mayo"],
  answer: "Herbert Simon",
  explanation:
    "Simon argued that decision-makers operate under limits of information, time and cognitive capacity.",
  wrongExplanations: {
    "F.W. Taylor": "Taylor developed scientific management.",
    "Max Weber": "Weber developed bureaucracy.",
    "Elton Mayo": "Mayo developed the human relations approach."
  },
  hint: "Decision-making under limits."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Who wrote The Functions of the Executive?",
  options: ["Chester Barnard", "Herbert Simon", "Woodrow Wilson", "F.W. Taylor"],
  answer: "Chester Barnard",
  explanation:
    "Chester Barnard wrote The Functions of the Executive.",
  wrongExplanations: {
    "Herbert Simon": "Simon wrote Administrative Behavior.",
    "Woodrow Wilson": "Wilson wrote The Study of Administration.",
    "F.W. Taylor": "Taylor wrote Principles of Scientific Management."
  },
  hint: "Think executive organisation."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "New Public Administration emerged prominently after the:",
  options: ["Minnowbrook Conference", "Bandung Conference", "Bretton Woods Conference", "Yalta Conference"],
  answer: "Minnowbrook Conference",
  explanation:
    "The Minnowbrook Conference of 1968 became closely associated with New Public Administration.",
  wrongExplanations: {
    "Bandung Conference": "Bandung concerned Afro-Asian cooperation.",
    "Bretton Woods Conference": "Bretton Woods created major international financial institutions.",
    "Yalta Conference": "Yalta dealt with post-war arrangements."
  },
  hint: "Think social equity."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "A major value emphasised by New Public Administration is:",
  options: ["Social equity", "Rigid neutrality only", "Profit maximisation", "Military expansion"],
  answer: "Social equity",
  explanation:
    "New Public Administration emphasised relevance, change and especially social equity.",
  wrongExplanations: {
    "Rigid neutrality only": "NPA criticised excessive value-neutrality.",
    "Profit maximisation": "That is more associated with private-sector logic.",
    "Military expansion": "This is unrelated."
  },
  hint: "Equity was central."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "New Public Management emphasises:",
  options: [
    "Efficiency and managerial techniques",
    "Complete rejection of performance measurement",
    "Hereditary administration",
    "No citizen orientation"
  ],
  answer: "Efficiency and managerial techniques",
  explanation:
    "New Public Management promotes performance, efficiency, competition and private-sector-style management techniques.",
  wrongExplanations: {
    "Complete rejection of performance measurement": "NPM strongly values performance measurement.",
    "Hereditary administration": "NPM is a modern managerial approach.",
    "No citizen orientation": "NPM often reframes citizens as clients or customers."
  },
  hint: "Private-sector style management."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Political socialisation refers to:",
  options: [
    "Learning political values and attitudes",
    "Only joining a political party",
    "Only voting",
    "Only studying constitutions"
  ],
  answer: "Learning political values and attitudes",
  explanation:
    "Political socialisation is the process through which individuals acquire political values, beliefs and orientations.",
  wrongExplanations: {
    "Only joining a political party": "Party membership is only one possible political activity.",
    "Only voting": "Voting is political participation, not the whole process of socialisation.",
    "Only studying constitutions": "Political learning is much broader."
  },
  hint: "Family, school and media matter."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Which is a primary agent of political socialisation?",
  options: ["Family", "Stock exchange only", "Weather", "Geological survey"],
  answer: "Family",
  explanation:
    "Family is one of the earliest and most important agents of political socialisation.",
  wrongExplanations: {
    "Stock exchange only": "This is not a primary socialisation institution.",
    Weather: "Weather does not systematically teach political values.",
    "Geological survey": "This is not a socialisation agency."
  },
  hint: "First social environment."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Political participation includes:",
  options: [
    "Voting and campaigning",
    "Only reading books",
    "Only economic production",
    "Only judicial review"
  ],
  answer: "Voting and campaigning",
  explanation:
    "Political participation includes voting, campaigning, protesting, joining parties and other political activities.",
  wrongExplanations: {
    "Only reading books": "Reading can inform citizens but is not necessarily participation.",
    "Only economic production": "Economic activity is distinct from political participation.",
    "Only judicial review": "Judicial review is performed by courts."
  },
  hint: "Citizen involvement in politics."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "The concept of elite circulation is associated with:",
  options: ["Vilfredo Pareto", "Karl Marx", "Robert Dahl", "John Rawls"],
  answer: "Vilfredo Pareto",
  explanation:
    "Pareto developed the idea of circulation of elites.",
  wrongExplanations: {
    "Karl Marx": "Marx focused on class conflict.",
    "Robert Dahl": "Dahl is associated with pluralism.",
    "John Rawls": "Rawls is associated with justice theory."
  },
  hint: "Elite theory."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Who is associated with the concept of the 'power elite'?",
  options: ["C. Wright Mills", "Robert Dahl", "Max Weber", "David Easton"],
  answer: "C. Wright Mills",
  explanation:
    "C. Wright Mills used the concept of the power elite to describe concentrated power among major institutional elites.",
  wrongExplanations: {
    "Robert Dahl": "Dahl is associated with pluralism and polyarchy.",
    "Max Weber": "Weber is associated with bureaucracy, authority and class-status-party.",
    "David Easton": "Easton developed systems analysis."
  },
  hint: "American elite theory."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Polyarchy is most closely associated with:",
  options: ["Robert Dahl", "Pareto", "Mosca", "Michels"],
  answer: "Robert Dahl",
  explanation:
    "Robert Dahl used the concept of polyarchy to describe actually existing democratic systems with competition and participation.",
  wrongExplanations: {
    Pareto: "Pareto is associated with elite circulation.",
    Mosca: "Mosca developed ruling-class theory.",
    Michels: "Michels developed the iron law of oligarchy."
  },
  hint: "Pluralist democracy."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "The iron law of oligarchy is associated with:",
  options: ["Robert Michels", "Robert Dahl", "Gabriel Almond", "Max Weber"],
  answer: "Robert Michels",
  explanation:
    "Robert Michels argued that large organisations tend toward oligarchic control.",
  wrongExplanations: {
    "Robert Dahl": "Dahl is associated with polyarchy.",
    "Gabriel Almond": "Almond is associated with political culture and comparative politics.",
    "Max Weber": "Weber developed bureaucracy and authority types."
  },
  hint: "Organisation tends toward oligarchy."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 5, 10, 20, 40, ?",
  options: ["50", "60", "80", "100"],
  answer: "80",
  explanation:
    "Each number is multiplied by 2. Therefore, 40 × 2 = 80.",
  wrongExplanations: {
    "50": "This would add 10 rather than follow the pattern.",
    "60": "This does not follow doubling.",
    "100": "This is too large for the pattern."
  },
  hint: "Multiply by the same number each time."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the missing number: 1, 4, 9, 16, ?",
  options: ["20", "24", "25", "36"],
  answer: "25",
  explanation:
    "The sequence contains squares: 1², 2², 3², 4², 5².",
  wrongExplanations: {
    "20": "20 is not a perfect square in the sequence.",
    "24": "24 is not the next square.",
    "36": "36 is 6² and comes after 25."
  },
  hint: "Think perfect squares."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Book is to Reading as Fork is to:",
  options: ["Eating", "Sleeping", "Writing", "Driving"],
  answer: "Eating",
  explanation:
    "A book is used for reading, while a fork is used for eating.",
  wrongExplanations: {
    Sleeping: "A fork is not used for sleeping.",
    Writing: "A fork is not a writing tool.",
    Driving: "A fork is unrelated to driving."
  },
  hint: "Object and its main use."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 15% of 300?",
  options: ["30", "45", "60", "75"],
  answer: "45",
  explanation:
    "15% of 300 = 15/100 × 300 = 45.",
  wrongExplanations: {
    "30": "30 is 10% of 300.",
    "60": "60 is 20% of 300.",
    "75": "75 is 25% of 300."
  },
  hint: "10% is 30 and 5% is 15."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A student scores 80 marks out of 100. What is the percentage?",
  options: ["70%", "75%", "80%", "85%"],
  answer: "80%",
  explanation:
    "Percentage = 80/100 × 100 = 80%.",
  wrongExplanations: {
    "70%": "This would correspond to 70 marks out of 100.",
    "75%": "This would correspond to 75 marks out of 100.",
    "85%": "This would correspond to 85 marks out of 100."
  },
  hint: "Out of 100 makes it direct."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is the average of 10, 20 and 30?",
  options: ["15", "20", "25", "30"],
  answer: "20",
  explanation:
    "Average = (10 + 20 + 30) ÷ 3 = 60 ÷ 3 = 20.",
  wrongExplanations: {
    "15": "This is too low.",
    "25": "This is too high.",
    "30": "This is the largest value, not the average."
  },
  hint: "Add, then divide by the number of values."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "If the ratio of boys to girls is 2:3 and there are 20 boys, how many girls are there?",
  options: ["25", "30", "35", "40"],
  answer: "30",
  explanation:
    "If 2 parts = 20, then 1 part = 10. Therefore, 3 parts = 30 girls.",
  wrongExplanations: {
    "25": "This does not match the ratio.",
    "35": "This does not match 3 parts.",
    "40": "This would give a 1:2 ratio."
  },
  hint: "2 parts = 20."
},

{
  subject: "General Aptitude",
  category: "Language",
  question: "Choose the synonym of 'accurate'.",
  options: ["Correct", "Wrong", "Weak", "Slow"],
  answer: "Correct",
  explanation:
    "Accurate means correct, exact or precise.",
  wrongExplanations: {
    Wrong: "Wrong is the opposite of accurate.",
    Weak: "Weak refers to lack of strength.",
    Slow: "Slow refers to speed."
  },
  hint: "Think precise."
},

{
  subject: "General Aptitude",
  category: "Language",
  question: "Choose the antonym of 'expand'.",
  options: ["Contract", "Increase", "Develop", "Enlarge"],
  answer: "Contract",
  explanation:
    "Contract means to become smaller and is the opposite of expand.",
  wrongExplanations: {
    Increase: "Increase is similar to expand.",
    Develop: "Develop does not mean the opposite.",
    Enlarge: "Enlarge is a synonym of expand."
  },
  hint: "Make smaller."
},

{
  subject: "General Aptitude",
  category: "Language",
  question: "Choose the correctly spelled word:",
  options: ["Necessary", "Necesary", "Neccessary", "Nessesary"],
  answer: "Necessary",
  explanation:
    "Necessary is the correct spelling.",
  wrongExplanations: {
    Necesary: "This is missing one 's'.",
    Neccessary: "This contains an extra 'c'.",
    Nessesary: "This spelling is incorrect."
  },
  hint: "One c, two s."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "Who was the first President of India?",
  options: ["Rajendra Prasad", "S. Radhakrishnan", "Jawaharlal Nehru", "Zakir Husain"],
  answer: "Rajendra Prasad",
  explanation:
    "Dr. Rajendra Prasad was the first President of India.",
  wrongExplanations: {
    "S. Radhakrishnan": "He was the second President.",
    "Jawaharlal Nehru": "Nehru was the first Prime Minister.",
    "Zakir Husain": "He became President later."
  },
  hint: "President of the Constituent Assembly."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of the United Nations is located in:",
  options: ["New York", "Geneva", "Paris", "Vienna"],
  answer: "New York",
  explanation:
    "The principal headquarters of the United Nations is in New York City.",
  wrongExplanations: {
    Geneva: "Geneva hosts major UN offices but not the principal headquarters.",
    Paris: "UNESCO is headquartered in Paris.",
    Vienna: "Vienna hosts several UN organisations."
  },
  hint: "Think United States."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "How many permanent members are there in the UN Security Council?",
  options: ["5", "10", "15", "20"],
  answer: "5",
  explanation:
    "The Security Council has five permanent members.",
  wrongExplanations: {
    "10": "There are ten non-permanent members.",
    "15": "This is the total membership of the Security Council.",
    "20": "The Council has fewer members."
  },
  hint: "P5."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "RAM stands for:",
  options: [
    "Random Access Memory",
    "Read Access Machine",
    "Rapid Application Memory",
    "Remote Access Module"
  ],
  answer: "Random Access Memory",
  explanation:
    "RAM stands for Random Access Memory and temporarily stores data used by active programs.",
  wrongExplanations: {
    "Read Access Machine": "This is not the correct expansion.",
    "Rapid Application Memory": "This is incorrect.",
    "Remote Access Module": "This is not the standard meaning."
  },
  hint: "Temporary working memory."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Which of the following is an operating system?",
  options: ["Windows", "Google", "Python", "HTML"],
  answer: "Windows",
  explanation:
    "Windows is an operating system developed by Microsoft.",
  wrongExplanations: {
    Google: "Google is a technology company and search service.",
    Python: "Python is a programming language.",
    HTML: "HTML is a markup language."
  },
  hint: "It manages computer hardware and software."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Which protocol is commonly used to access websites securely?",
  options: ["HTTPS", "FTP", "SMTP", "POP3"],
  answer: "HTTPS",
  explanation:
    "HTTPS is the secure version of HTTP used for encrypted web communication.",
  wrongExplanations: {
    FTP: "FTP is used mainly for file transfer.",
    SMTP: "SMTP is used for sending email.",
    POP3: "POP3 is used for retrieving email."
  },
  hint: "Look for the secure web protocol."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Which device is primarily used to store data permanently?",
  options: ["SSD", "RAM", "CPU", "Cache only"],
  answer: "SSD",
  explanation:
    "An SSD stores data persistently even when power is turned off.",
  wrongExplanations: {
    RAM: "RAM is volatile working memory.",
    CPU: "CPU processes instructions rather than serving as primary persistent storage.",
    "Cache only": "Cache is temporary high-speed memory."
  },
  hint: "Think storage drive."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "A class has 40 students. If 25 are female, how many are male?",
  options: ["10", "15", "20", "25"],
  answer: "15",
  explanation:
    "Male students = 40 - 25 = 15.",
  wrongExplanations: {
    "10": "This leaves only 35 total students.",
    "20": "This would make the total 45.",
    "25": "This would make the total 50."
  },
  hint: "Subtract female students from total students."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "A library had 500 books and purchased 100 more. What is the new total?",
  options: ["400", "500", "600", "700"],
  answer: "600",
  explanation:
    "500 + 100 = 600 books.",
  wrongExplanations: {
    "400": "This would mean books were removed.",
    "500": "This ignores the new purchase.",
    "700": "This adds too many books."
  },
  hint: "Add the new books."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "If sales rise from 200 units to 250 units, the increase is:",
  options: ["25 units", "50 units", "75 units", "100 units"],
  answer: "50 units",
  explanation:
    "Increase = 250 - 200 = 50 units.",
  wrongExplanations: {
    "25 units": "This is only half the increase.",
    "75 units": "This is too large.",
    "100 units": "This would mean sales doubled by half the original amount."
  },
  hint: "New value minus old value."
},
{
  subject: "History",
  category: "Ancient India",
  question: "Which civilisation is associated with Harappa and Mohenjo-daro?",
  options: [
    "Indus Valley Civilisation",
    "Vedic Civilisation",
    "Mauryan Empire",
    "Gupta Empire"
  ],
  answer: "Indus Valley Civilisation",
  explanation:
    "Harappa and Mohenjo-daro were major urban centres of the Indus Valley Civilisation.",
  wrongExplanations: {
    "Vedic Civilisation":
      "The Vedic period developed later and was not centred on Harappa and Mohenjo-daro.",
    "Mauryan Empire":
      "The Mauryan Empire emerged much later in ancient Indian history.",
    "Gupta Empire":
      "The Gupta Empire belongs to a much later historical period."
  },
  hint: "Think Bronze Age urban civilisation."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Great Bath was discovered at:",
  options: ["Mohenjo-daro", "Harappa", "Lothal", "Kalibangan"],
  answer: "Mohenjo-daro",
  explanation:
    "The Great Bath is one of the most famous structures discovered at Mohenjo-daro.",
  wrongExplanations: {
    Harappa:
      "Harappa was an important Indus site, but the Great Bath is associated with Mohenjo-daro.",
    Lothal:
      "Lothal is famous especially for its dockyard.",
    Kalibangan:
      "Kalibangan is known for archaeological evidence such as fire altars and ploughed fields."
  },
  hint: "Think of the famous public bathing structure."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Who founded the Mauryan Empire?",
  options: [
    "Chandragupta Maurya",
    "Ashoka",
    "Bindusara",
    "Harshavardhana"
  ],
  answer: "Chandragupta Maurya",
  explanation:
    "Chandragupta Maurya founded the Mauryan Empire in the fourth century BCE.",
  wrongExplanations: {
    Ashoka:
      "Ashoka was a later Mauryan ruler and grandson of Chandragupta Maurya.",
    Bindusara:
      "Bindusara was the son and successor of Chandragupta Maurya.",
    Harshavardhana:
      "Harsha ruled centuries after the Mauryan Empire."
  },
  hint: "Think of Chanakya or Kautilya."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Arthashastra is traditionally associated with:",
  options: ["Kautilya", "Kalidasa", "Banabhatta", "Megasthenes"],
  answer: "Kautilya",
  explanation:
    "The Arthashastra is traditionally attributed to Kautilya, also known as Chanakya.",
  wrongExplanations: {
    Kalidasa:
      "Kalidasa was a major classical Sanskrit poet and dramatist.",
    Banabhatta:
      "Banabhatta wrote Harshacharita.",
    Megasthenes:
      "Megasthenes wrote Indica."
  },
  hint: "Think Chanakya."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Who wrote Indica?",
  options: ["Megasthenes", "Fa-Hien", "Xuanzang", "Kautilya"],
  answer: "Megasthenes",
  explanation:
    "Megasthenes wrote Indica based on his observations of Mauryan India.",
  wrongExplanations: {
    "Fa-Hien":
      "Fa-Hien was a Chinese Buddhist traveller who visited India later.",
    Xuanzang:
      "Xuanzang visited India during the seventh century CE.",
    Kautilya:
      "Kautilya is associated with the Arthashastra."
  },
  hint: "Greek ambassador at the Mauryan court."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Ashoka adopted Buddhism after which major war?",
  options: ["Kalinga War", "Battle of Plassey", "Battle of Panipat", "Battle of Hydaspes"],
  answer: "Kalinga War",
  explanation:
    "The violence of the Kalinga War deeply influenced Ashoka and contributed to his embrace of Buddhist principles.",
  wrongExplanations: {
    "Battle of Plassey":
      "The Battle of Plassey took place in 1757.",
    "Battle of Panipat":
      "The Panipat battles belong to medieval and early modern Indian history.",
    "Battle of Hydaspes":
      "The Battle of Hydaspes involved Alexander and Porus."
  },
  hint: "Think dhamma."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Gupta period is often described as a:",
  options: [
    "Golden Age",
    "Colonial Age",
    "Stone Age",
    "Industrial Age"
  ],
  answer: "Golden Age",
  explanation:
    "The Gupta period is often described as a Golden Age because of developments in literature, science, mathematics and art.",
  wrongExplanations: {
    "Colonial Age":
      "Colonial rule belongs to much later history.",
    "Stone Age":
      "The Stone Age predates organised ancient empires.",
    "Industrial Age":
      "Industrialisation belongs to modern history."
  },
  hint: "Think classical Indian achievements."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who founded the Mughal Empire in India?",
  options: ["Babur", "Akbar", "Humayun", "Sher Shah"],
  answer: "Babur",
  explanation:
    "Babur founded the Mughal Empire after defeating Ibrahim Lodi in the First Battle of Panipat in 1526.",
  wrongExplanations: {
    Akbar:
      "Akbar greatly expanded the Mughal Empire but did not found it.",
    Humayun:
      "Humayun was Babur's son and successor.",
    "Sher Shah":
      "Sher Shah established the Sur Empire."
  },
  hint: "First Battle of Panipat."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The First Battle of Panipat was fought in:",
  options: ["1526", "1556", "1761", "1757"],
  answer: "1526",
  explanation:
    "The First Battle of Panipat was fought in 1526 between Babur and Ibrahim Lodi.",
  wrongExplanations: {
    "1556":
      "1556 marks the Second Battle of Panipat.",
    "1761":
      "1761 marks the Third Battle of Panipat.",
    "1757":
      "1757 marks the Battle of Plassey."
  },
  hint: "Babur versus Ibrahim Lodi."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who introduced the policy of Sulh-i-Kul?",
  options: ["Akbar", "Aurangzeb", "Babur", "Shah Jahan"],
  answer: "Akbar",
  explanation:
    "Akbar promoted Sulh-i-Kul, meaning universal peace, as part of his approach to religious tolerance.",
  wrongExplanations: {
    Aurangzeb:
      "Aurangzeb followed a different religious policy.",
    Babur:
      "Babur founded the Mughal Empire.",
    "Shah Jahan":
      "Shah Jahan is associated especially with architecture."
  },
  hint: "Think religious tolerance."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Mansabdari system was developed under:",
  options: ["Akbar", "Alauddin Khalji", "Sher Shah", "Iltutmish"],
  answer: "Akbar",
  explanation:
    "The Mansabdari system became an important administrative and military institution under Akbar.",
  wrongExplanations: {
    "Alauddin Khalji":
      "Alauddin Khalji is associated with market and military reforms.",
    "Sher Shah":
      "Sher Shah is known for administrative and revenue reforms.",
    Iltutmish:
      "Iltutmish consolidated the Delhi Sultanate."
  },
  hint: "Rank and military obligation."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Battle of Plassey was fought in:",
  options: ["1757", "1764", "1857", "1885"],
  answer: "1757",
  explanation:
    "The Battle of Plassey was fought in 1757 and greatly strengthened East India Company influence in Bengal.",
  wrongExplanations: {
    "1764":
      "1764 is the year of the Battle of Buxar.",
    "1857":
      "1857 marks the major revolt against Company rule.",
    "1885":
      "1885 marks the foundation of the Indian National Congress."
  },
  hint: "Robert Clive."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Battle of Buxar was fought in:",
  options: ["1764", "1757", "1773", "1857"],
  answer: "1764",
  explanation:
    "The Battle of Buxar was fought in 1764 and further strengthened Company power.",
  wrongExplanations: {
    "1757":
      "1757 is the year of the Battle of Plassey.",
    "1773":
      "1773 is associated with the Regulating Act.",
    "1857":
      "1857 marks the Revolt of 1857."
  },
  hint: "Seven years after Plassey."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Permanent Settlement was introduced by:",
  options: ["Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie", "Lord Ripon"],
  answer: "Lord Cornwallis",
  explanation:
    "Lord Cornwallis introduced the Permanent Settlement in Bengal in 1793.",
  wrongExplanations: {
    "Lord Wellesley":
      "Wellesley is associated with the Subsidiary Alliance.",
    "Lord Dalhousie":
      "Dalhousie is associated with the Doctrine of Lapse.",
    "Lord Ripon":
      "Ripon is associated with local self-government reforms."
  },
  hint: "1793."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Doctrine of Lapse is associated with:",
  options: ["Lord Dalhousie", "Lord Curzon", "Lord Ripon", "Lord Canning"],
  answer: "Lord Dalhousie",
  explanation:
    "Lord Dalhousie used the Doctrine of Lapse to annex several Indian states.",
  wrongExplanations: {
    "Lord Curzon":
      "Curzon is associated with the Partition of Bengal.",
    "Lord Ripon":
      "Ripon is known for local self-government reforms.",
    "Lord Canning":
      "Canning was Governor-General during the Revolt of 1857."
  },
  hint: "Annexation policy."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Revolt of 1857 began at:",
  options: ["Meerut", "Delhi", "Kanpur", "Lucknow"],
  answer: "Meerut",
  explanation:
    "The Revolt of 1857 began among sepoys at Meerut before spreading to Delhi and other centres.",
  wrongExplanations: {
    Delhi:
      "Delhi became a major centre after the revolt spread from Meerut.",
    Kanpur:
      "Kanpur became another major centre of revolt.",
    Lucknow:
      "Lucknow also witnessed major resistance."
  },
  hint: "May 1857."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Indian National Congress was founded in:",
  options: ["1885", "1905", "1919", "1942"],
  answer: "1885",
  explanation:
    "The Indian National Congress was founded in 1885.",
  wrongExplanations: {
    "1905":
      "1905 is associated with the Partition of Bengal.",
    "1919":
      "1919 is associated with the Rowlatt Act and Jallianwala Bagh.",
    "1942":
      "1942 is associated with the Quit India Movement."
  },
  hint: "Late nineteenth century."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Partition of Bengal took place in:",
  options: ["1905", "1911", "1919", "1935"],
  answer: "1905",
  explanation:
    "Lord Curzon partitioned Bengal in 1905.",
  wrongExplanations: {
    "1911":
      "The partition was annulled in 1911.",
    "1919":
      "1919 marks major political developments including the Government of India Act.",
    "1935":
      "1935 marks another major Government of India Act."
  },
  hint: "Swadeshi Movement."
},

{
  subject: "History",
  category: "Modern India",
  question: "Who launched the Non-Cooperation Movement in 1920?",
  options: ["Mahatma Gandhi", "Subhas Chandra Bose", "B.G. Tilak", "Jawaharlal Nehru"],
  answer: "Mahatma Gandhi",
  explanation:
    "Mahatma Gandhi launched the Non-Cooperation Movement in 1920.",
  wrongExplanations: {
    "Subhas Chandra Bose":
      "Bose later led the Indian National Army.",
    "B.G. Tilak":
      "Tilak was a major nationalist leader but died in 1920.",
    "Jawaharlal Nehru":
      "Nehru became a major Congress leader but did not launch the movement."
  },
  hint: "Non-violence and boycott."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Civil Disobedience Movement began with the:",
  options: ["Salt March", "Quit India Resolution", "Partition of Bengal", "Lucknow Pact"],
  answer: "Salt March",
  explanation:
    "Gandhi's Salt March to Dandi in 1930 launched the Civil Disobedience Movement.",
  wrongExplanations: {
    "Quit India Resolution":
      "The Quit India Movement began in 1942.",
    "Partition of Bengal":
      "The Partition of Bengal occurred in 1905.",
    "Lucknow Pact":
      "The Lucknow Pact was concluded in 1916."
  },
  hint: "Dandi."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Quit India Movement was launched in:",
  options: ["1942", "1930", "1920", "1947"],
  answer: "1942",
  explanation:
    "The Quit India Movement was launched in August 1942.",
  wrongExplanations: {
    "1930":
      "1930 marks the Civil Disobedience Movement.",
    "1920":
      "1920 marks the Non-Cooperation Movement.",
    "1947":
      "India became independent in 1947."
  },
  hint: "Do or Die."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Which layer of Earth lies directly below the crust?",
  options: ["Mantle", "Outer core", "Inner core", "Atmosphere"],
  answer: "Mantle",
  explanation:
    "The mantle lies directly beneath Earth's crust.",
  wrongExplanations: {
    "Outer core":
      "The outer core lies below the mantle.",
    "Inner core":
      "The inner core is Earth's deepest major layer.",
    Atmosphere:
      "The atmosphere lies above Earth's surface."
  },
  hint: "Crust, mantle, core."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The movement of tectonic plates is mainly associated with:",
  options: [
    "Processes within Earth's mantle",
    "Lunar phases only",
    "Ocean tides only",
    "Cloud formation"
  ],
  answer: "Processes within Earth's mantle",
  explanation:
    "Plate movement is linked to heat and dynamic processes within Earth's mantle.",
  wrongExplanations: {
    "Lunar phases only":
      "Lunar phases do not drive plate tectonics.",
    "Ocean tides only":
      "Tides are primarily caused by gravitational forces.",
    "Cloud formation":
      "Cloud formation is atmospheric."
  },
  hint: "Think convection and mantle dynamics."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The boundary where two tectonic plates move apart is called:",
  options: ["Divergent boundary", "Convergent boundary", "Transform boundary", "Passive boundary only"],
  answer: "Divergent boundary",
  explanation:
    "At divergent boundaries, tectonic plates move away from each other.",
  wrongExplanations: {
    "Convergent boundary":
      "At convergent boundaries, plates move toward one another.",
    "Transform boundary":
      "At transform boundaries, plates slide past each other.",
    "Passive boundary only":
      "This is not the standard term."
  },
  hint: "Diverge = move apart."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Which type of rainfall occurs when moist air is forced to rise over mountains?",
  options: ["Orographic rainfall", "Convectional rainfall", "Cyclonic rainfall", "Artificial rainfall"],
  answer: "Orographic rainfall",
  explanation:
    "Orographic rainfall occurs when moist air rises over high relief, cools and condenses.",
  wrongExplanations: {
    "Convectional rainfall":
      "Convectional rainfall is caused mainly by strong surface heating.",
    "Cyclonic rainfall":
      "Cyclonic rainfall is associated with low-pressure systems and fronts.",
    "Artificial rainfall":
      "This is not a natural rainfall type."
  },
  hint: "Oro = mountain."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Which instrument measures atmospheric pressure?",
  options: ["Barometer", "Thermometer", "Rain gauge", "Anemometer"],
  answer: "Barometer",
  explanation:
    "A barometer measures atmospheric pressure.",
  wrongExplanations: {
    Thermometer:
      "A thermometer measures temperature.",
    "Rain gauge":
      "A rain gauge measures rainfall.",
    Anemometer:
      "An anemometer measures wind speed."
  },
  hint: "Pressure."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Which instrument measures wind speed?",
  options: ["Anemometer", "Barometer", "Hygrometer", "Seismograph"],
  answer: "Anemometer",
  explanation:
    "An anemometer measures wind speed.",
  wrongExplanations: {
    Barometer:
      "A barometer measures atmospheric pressure.",
    Hygrometer:
      "A hygrometer measures humidity.",
    Seismograph:
      "A seismograph records seismic waves."
  },
  hint: "Wind."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Population density means:",
  options: [
    "Number of people per unit area",
    "Total birth rate only",
    "Number of cities only",
    "Migration rate only"
  ],
  answer: "Number of people per unit area",
  explanation:
    "Population density measures how many people live within a specified area.",
  wrongExplanations: {
    "Total birth rate only":
      "Birth rate measures births, not density.",
    "Number of cities only":
      "Urban centres do not define population density.",
    "Migration rate only":
      "Migration affects population but is not density."
  },
  hint: "People divided by area."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Urbanisation refers to:",
  options: [
    "Growth of urban population and settlements",
    "Decline of all towns",
    "Only agricultural expansion",
    "Only forest conservation"
  ],
  answer: "Growth of urban population and settlements",
  explanation:
    "Urbanisation refers to increasing population concentration in towns and cities.",
  wrongExplanations: {
    "Decline of all towns":
      "Urbanisation generally involves urban growth.",
    "Only agricultural expansion":
      "Agricultural expansion is a rural land-use process.",
    "Only forest conservation":
      "Forest conservation is environmental management."
  },
  hint: "Growth of towns and cities."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Migration from villages to cities is called:",
  options: [
    "Rural-urban migration",
    "Urban-rural migration",
    "International migration only",
    "Seasonal rainfall"
  ],
  answer: "Rural-urban migration",
  explanation:
    "Movement from rural settlements to urban areas is called rural-urban migration.",
  wrongExplanations: {
    "Urban-rural migration":
      "This refers to movement from cities to rural areas.",
    "International migration only":
      "International migration crosses national borders.",
    "Seasonal rainfall":
      "Rainfall is unrelated to the term."
  },
  hint: "Village to city."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Which factor commonly acts as a pull factor in migration?",
  options: [
    "Employment opportunity",
    "War",
    "Drought",
    "Political persecution"
  ],
  answer: "Employment opportunity",
  explanation:
    "Better employment opportunities often attract people toward a destination.",
  wrongExplanations: {
    War:
      "War usually pushes people away from an area.",
    Drought:
      "Drought is commonly a push factor.",
    "Political persecution":
      "Persecution forces people to leave."
  },
  hint: "Pull attracts."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Primary economic activities mainly involve:",
  options: [
    "Extraction of natural resources",
    "Manufacturing only",
    "Banking only",
    "Software services only"
  ],
  answer: "Extraction of natural resources",
  explanation:
    "Primary activities include agriculture, fishing, forestry and mining.",
  wrongExplanations: {
    "Manufacturing only":
      "Manufacturing belongs to the secondary sector.",
    "Banking only":
      "Banking is a tertiary activity.",
    "Software services only":
      "Software services belong mainly to the service sector."
  },
  hint: "Directly from nature."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Manufacturing belongs mainly to which sector?",
  options: ["Secondary", "Primary", "Tertiary", "Quaternary only"],
  answer: "Secondary",
  explanation:
    "The secondary sector transforms raw materials into manufactured goods.",
  wrongExplanations: {
    Primary:
      "Primary activities extract raw materials.",
    Tertiary:
      "Tertiary activities provide services.",
    "Quaternary only":
      "Quaternary activities are knowledge-intensive services."
  },
  hint: "Raw material to finished product."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "The law of demand states that, other things being equal:",
  options: [
    "Demand falls when price rises",
    "Demand rises when price rises",
    "Price never affects demand",
    "Demand is always zero"
  ],
  answer: "Demand falls when price rises",
  explanation:
    "The law of demand describes an inverse relationship between price and quantity demanded, other things remaining constant.",
  wrongExplanations: {
    "Demand rises when price rises":
      "This is opposite to the normal law of demand.",
    "Price never affects demand":
      "Price is one of the major determinants of quantity demanded.",
    "Demand is always zero":
      "Demand depends on market conditions."
  },
  hint: "Price up, quantity demanded down."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "The law of supply generally states that:",
  options: [
    "Quantity supplied rises when price rises",
    "Quantity supplied falls when price rises",
    "Supply is unrelated to price",
    "Supply is always fixed"
  ],
  answer: "Quantity supplied rises when price rises",
  explanation:
    "Other things equal, producers generally supply more when market price rises.",
  wrongExplanations: {
    "Quantity supplied falls when price rises":
      "This is opposite to the usual law of supply.",
    "Supply is unrelated to price":
      "Price strongly influences quantity supplied.",
    "Supply is always fixed":
      "Supply can vary."
  },
  hint: "Higher price can encourage production."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Elasticity of demand measures:",
  options: [
    "Responsiveness of demand to changes in determinants",
    "Total production only",
    "Government spending only",
    "Population size only"
  ],
  answer: "Responsiveness of demand to changes in determinants",
  explanation:
    "Elasticity measures how strongly quantity demanded responds to changes such as price or income.",
  wrongExplanations: {
    "Total production only":
      "Production is a supply-side concept.",
    "Government spending only":
      "Government spending belongs to public finance and macroeconomics.",
    "Population size only":
      "Population can affect demand but does not define elasticity."
  },
  hint: "Responsiveness."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A market with a single seller is called:",
  options: ["Monopoly", "Perfect competition", "Oligopoly", "Monopsony"],
  answer: "Monopoly",
  explanation:
    "A monopoly exists when one seller dominates the supply of a product or service.",
  wrongExplanations: {
    "Perfect competition":
      "Perfect competition has many buyers and sellers.",
    Oligopoly:
      "An oligopoly has a small number of major sellers.",
    Monopsony:
      "A monopsony has a single major buyer."
  },
  hint: "Mono = one seller."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A market dominated by a few large firms is called:",
  options: ["Oligopoly", "Monopoly", "Perfect competition", "Monopsony"],
  answer: "Oligopoly",
  explanation:
    "An oligopoly contains a small number of major firms whose decisions influence one another.",
  wrongExplanations: {
    Monopoly:
      "A monopoly has one seller.",
    "Perfect competition":
      "Perfect competition has many small sellers.",
    Monopsony:
      "A monopsony refers to one buyer."
  },
  hint: "Oligo = few."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "GDP measures:",
  options: [
    "Value of final goods and services produced within a country",
    "Only government salaries",
    "Only exports",
    "Only agricultural output"
  ],
  answer: "Value of final goods and services produced within a country",
  explanation:
    "Gross Domestic Product measures the value of final goods and services produced within a country's borders during a specified period.",
  wrongExplanations: {
    "Only government salaries":
      "Government compensation is only one component.",
    "Only exports":
      "Exports are only one part of GDP.",
    "Only agricultural output":
      "GDP includes all major sectors."
  },
  hint: "Domestic production."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Inflation refers to:",
  options: [
    "A sustained rise in the general price level",
    "A sustained fall in all prices",
    "Only an increase in wages",
    "Only an increase in population"
  ],
  answer: "A sustained rise in the general price level",
  explanation:
    "Inflation is a persistent increase in the average level of prices.",
  wrongExplanations: {
    "A sustained fall in all prices":
      "That is closer to deflation.",
    "Only an increase in wages":
      "Wages may rise during inflation but do not define it.",
    "Only an increase in population":
      "Population growth is demographic."
  },
  hint: "Purchasing power falls."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Unemployment occurs when:",
  options: [
    "People willing and able to work cannot find suitable jobs",
    "Everyone stops working voluntarily",
    "Prices rise",
    "Exports increase"
  ],
  answer: "People willing and able to work cannot find suitable jobs",
  explanation:
    "Unemployment refers to people who are available for work but cannot obtain employment.",
  wrongExplanations: {
    "Everyone stops working voluntarily":
      "People outside the labour force are not necessarily unemployed.",
    "Prices rise":
      "This refers to inflation.",
    "Exports increase":
      "Export growth does not define unemployment."
  },
  hint: "Willing and able to work."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Fiscal policy mainly involves:",
  options: [
    "Government taxation and expenditure",
    "Only interest rates",
    "Only bank lending",
    "Only exchange rates"
  ],
  answer: "Government taxation and expenditure",
  explanation:
    "Fiscal policy uses taxation, government expenditure and borrowing to influence economic activity.",
  wrongExplanations: {
    "Only interest rates":
      "Interest rates are mainly part of monetary policy.",
    "Only bank lending":
      "Bank lending is influenced by monetary and financial conditions.",
    "Only exchange rates":
      "Exchange-rate policy is distinct."
  },
  hint: "Government budget."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Monetary policy in India is primarily conducted by:",
  options: ["Reserve Bank of India", "Parliament alone", "Supreme Court", "Election Commission"],
  answer: "Reserve Bank of India",
  explanation:
    "The Reserve Bank of India is the country's central bank and conducts monetary policy.",
  wrongExplanations: {
    "Parliament alone":
      "Parliament legislates but does not directly conduct monetary policy.",
    "Supreme Court":
      "The judiciary does not conduct monetary policy.",
    "Election Commission":
      "The Election Commission conducts elections."
  },
  hint: "Central bank."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Human development focuses primarily on:",
  options: [
    "Expanding people's capabilities and opportunities",
    "Only increasing military expenditure",
    "Only increasing population",
    "Only increasing exports"
  ],
  answer: "Expanding people's capabilities and opportunities",
  explanation:
    "Human development emphasises health, education, capabilities and meaningful opportunities.",
  wrongExplanations: {
    "Only increasing military expenditure":
      "Military spending does not define human development.",
    "Only increasing population":
      "Population growth alone does not represent development.",
    "Only increasing exports":
      "Exports can support growth but are not the full measure."
  },
  hint: "People-centred development."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Who is generally regarded as the founder of sociology?",
  options: ["Auguste Comte", "Karl Marx", "Max Weber", "Emile Durkheim"],
  answer: "Auguste Comte",
  explanation:
    "Auguste Comte coined the term sociology and is often called the father of sociology.",
  wrongExplanations: {
    "Karl Marx":
      "Marx made major contributions to sociology but did not coin the term.",
    "Max Weber":
      "Weber is one of the classical sociological thinkers.",
    "Emile Durkheim":
      "Durkheim helped institutionalise sociology as an academic discipline."
  },
  hint: "Positivism."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Social structure refers to:",
  options: [
    "Relatively stable patterns of social relationships",
    "Only physical buildings",
    "Only population numbers",
    "Only economic prices"
  ],
  answer: "Relatively stable patterns of social relationships",
  explanation:
    "Social structure refers to organised patterns of roles, institutions and relationships within society.",
  wrongExplanations: {
    "Only physical buildings":
      "Social structure is not the same as physical infrastructure.",
    "Only population numbers":
      "Population is only one social characteristic.",
    "Only economic prices":
      "Prices belong to economic analysis."
  },
  hint: "Patterns of relationships."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "A primary group is characterised mainly by:",
  options: [
    "Close personal relationships",
    "Only formal contracts",
    "No interaction",
    "Temporary market exchange only"
  ],
  answer: "Close personal relationships",
  explanation:
    "Primary groups such as family and close friends involve intimate and enduring relationships.",
  wrongExplanations: {
    "Only formal contracts":
      "Formal contracts are more common in secondary groups.",
    "No interaction":
      "A social group requires interaction.",
    "Temporary market exchange only":
      "This does not describe primary relationships."
  },
  hint: "Family."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of social facts is associated with:",
  options: ["Emile Durkheim", "Max Weber", "Karl Marx", "Herbert Spencer"],
  answer: "Emile Durkheim",
  explanation:
    "Durkheim argued that social facts are external social forces that influence individual behaviour.",
  wrongExplanations: {
    "Max Weber":
      "Weber focused strongly on social action and interpretive sociology.",
    "Karl Marx":
      "Marx focused on class and historical materialism.",
    "Herbert Spencer":
      "Spencer developed evolutionary analogies in sociology."
  },
  hint: "Rules of Sociological Method."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of social action is associated with:",
  options: ["Max Weber", "Durkheim", "Comte", "Pareto"],
  answer: "Max Weber",
  explanation:
    "Max Weber placed meaningful social action at the centre of sociological analysis.",
  wrongExplanations: {
    Durkheim:
      "Durkheim emphasised social facts.",
    Comte:
      "Comte developed positivism.",
    Pareto:
      "Pareto is associated with elite theory."
  },
  hint: "Interpretive sociology."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Alienation is a major concept associated with:",
  options: ["Karl Marx", "Durkheim", "Comte", "Mead"],
  answer: "Karl Marx",
  explanation:
    "Marx analysed alienation under capitalism, especially the separation of workers from their labour and its products.",
  wrongExplanations: {
    Durkheim:
      "Durkheim is associated with concepts such as anomie and social solidarity.",
    Comte:
      "Comte is associated with positivism.",
    Mead:
      "Mead is associated with symbolic interactionism."
  },
  hint: "Capitalism and labour."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of anomie is strongly associated with:",
  options: ["Emile Durkheim", "Karl Marx", "Max Weber", "Talcott Parsons"],
  answer: "Emile Durkheim",
  explanation:
    "Durkheim used the concept of anomie to describe weakened or disrupted social norms.",
  wrongExplanations: {
    "Karl Marx":
      "Marx focused on class conflict and alienation.",
    "Max Weber":
      "Weber examined rationalisation and social action.",
    "Talcott Parsons":
      "Parsons developed structural functionalism."
  },
  hint: "Normlessness."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Which institution is usually considered the primary agency of socialisation?",
  options: ["Family", "Stock market", "Court only", "Factory only"],
  answer: "Family",
  explanation:
    "Family is usually the earliest and most influential agency of socialisation.",
  wrongExplanations: {
    "Stock market":
      "The stock market is an economic institution.",
    "Court only":
      "Courts perform legal functions rather than primary socialisation.",
    "Factory only":
      "Workplaces socialise adults but are not usually the primary agency."
  },
  hint: "First social environment."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Modernisation commonly involves:",
  options: [
    "Transformation of institutions and social life",
    "Complete return to prehistoric society",
    "Only population decline",
    "Only religious conversion"
  ],
  answer: "Transformation of institutions and social life",
  explanation:
    "Modernisation refers to broad changes associated with industrialisation, education, technology and new institutions.",
  wrongExplanations: {
    "Complete return to prehistoric society":
      "Modernisation generally involves institutional transformation, not reversal.",
    "Only population decline":
      "Population change is only one possible effect.",
    "Only religious conversion":
      "Modernisation is much broader."
  },
  hint: "Technology, education, institutions."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Formal education is characterised by:",
  options: [
    "Structured institutional learning",
    "Completely accidental learning",
    "Learning without any organisation",
    "Only learning from friends"
  ],
  answer: "Structured institutional learning",
  explanation:
    "Formal education takes place through organised institutions such as schools, colleges and universities.",
  wrongExplanations: {
    "Completely accidental learning":
      "Accidental learning is more closely related to informal education.",
    "Learning without any organisation":
      "Formal education is organised.",
    "Only learning from friends":
      "Peer learning is generally informal."
  },
  hint: "School and college."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Informal education mainly occurs through:",
  options: [
    "Everyday life and social interaction",
    "Only universities",
    "Only formal examinations",
    "Only government schools"
  ],
  answer: "Everyday life and social interaction",
  explanation:
    "Informal education occurs naturally through family, media, community and daily experience.",
  wrongExplanations: {
    "Only universities":
      "Universities mainly provide formal education.",
    "Only formal examinations":
      "Informal learning does not depend on formal examinations.",
    "Only government schools":
      "Schools provide formal education."
  },
  hint: "Learning outside formal institutions."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Motivation refers to:",
  options: [
    "Forces that initiate and direct behaviour",
    "Only punishment",
    "Only examination marks",
    "Only physical growth"
  ],
  answer: "Forces that initiate and direct behaviour",
  explanation:
    "Motivation influences the initiation, direction and persistence of behaviour.",
  wrongExplanations: {
    "Only punishment":
      "Punishment is only one external influence.",
    "Only examination marks":
      "Marks can motivate but do not define motivation.",
    "Only physical growth":
      "Physical growth is biological."
  },
  hint: "Why people act."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Intrinsic motivation comes mainly from:",
  options: [
    "Personal interest and satisfaction",
    "External reward only",
    "Fear of punishment only",
    "Compulsory attendance only"
  ],
  answer: "Personal interest and satisfaction",
  explanation:
    "Intrinsic motivation comes from internal enjoyment, interest or satisfaction in the activity itself.",
  wrongExplanations: {
    "External reward only":
      "External rewards are examples of extrinsic motivation.",
    "Fear of punishment only":
      "Fear is an external pressure.",
    "Compulsory attendance only":
      "Compulsion is not intrinsic."
  },
  hint: "Internal motivation."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "A learner-centred approach gives greater importance to:",
  options: [
    "Active participation of students",
    "Teacher lecture only",
    "Memorisation only",
    "No student interaction"
  ],
  answer: "Active participation of students",
  explanation:
    "Learner-centred education emphasises student involvement, needs, interests and active learning.",
  wrongExplanations: {
    "Teacher lecture only":
      "Learner-centred teaching uses broader methods.",
    "Memorisation only":
      "Understanding and participation are emphasised.",
    "No student interaction":
      "Interaction is often encouraged."
  },
  hint: "Student at the centre."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Formative assessment is mainly used:",
  options: [
    "During the learning process",
    "Only at the end of a degree",
    "Only for punishment",
    "Only for university admission"
  ],
  answer: "During the learning process",
  explanation:
    "Formative assessment provides feedback during learning so that teaching and learning can improve.",
  wrongExplanations: {
    "Only at the end of a degree":
      "End-of-course assessment is more closely associated with summative assessment.",
    "Only for punishment":
      "Assessment should support learning, not punishment.",
    "Only for university admission":
      "Admission tests are not the definition of formative assessment."
  },
  hint: "Feedback while learning."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Summative assessment is usually conducted:",
  options: [
    "At the end of a course or unit",
    "Before teaching begins only",
    "Every minute",
    "Without evaluating achievement"
  ],
  answer: "At the end of a course or unit",
  explanation:
    "Summative assessment evaluates learning after a substantial period of instruction.",
  wrongExplanations: {
    "Before teaching begins only":
      "That is more closely related to diagnostic or baseline assessment.",
    "Every minute":
      "Summative assessment is not continuous minute-by-minute evaluation.",
    "Without evaluating achievement":
      "Its purpose is to evaluate achievement."
  },
  hint: "Final evaluation."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Inclusive education aims to:",
  options: [
    "Educate diverse learners together where possible",
    "Exclude students with disabilities",
    "Teach only high achievers",
    "Separate all students permanently"
  ],
  answer: "Educate diverse learners together where possible",
  explanation:
    "Inclusive education seeks meaningful participation for students with diverse backgrounds and abilities.",
  wrongExplanations: {
    "Exclude students with disabilities":
      "Inclusion seeks to reduce exclusion.",
    "Teach only high achievers":
      "Inclusive education is meant for diverse learners.",
    "Separate all students permanently":
      "Inclusion generally seeks common participation."
  },
  hint: "Education for all."
},

{
  subject: "English",
  category: "Grammar",
  question: "Which word is a noun?",
  options: ["Freedom", "Quickly", "Beautiful", "Run"],
  answer: "Freedom",
  explanation:
    "Freedom names an idea or condition and is therefore a noun.",
  wrongExplanations: {
    Quickly:
      "Quickly is an adverb.",
    Beautiful:
      "Beautiful is an adjective.",
    Run:
      "Run is commonly used as a verb, though it can also function as a noun in some contexts."
  },
  hint: "Name of an idea."
},

{
  subject: "English",
  category: "Grammar",
  question: "Which word is an adjective?",
  options: ["Beautiful", "Beauty", "Beautifully", "Beautify"],
  answer: "Beautiful",
  explanation:
    "Beautiful is an adjective because it describes a noun.",
  wrongExplanations: {
    Beauty:
      "Beauty is a noun.",
    Beautifully:
      "Beautifully is an adverb.",
    Beautify:
      "Beautify is a verb."
  },
  hint: "Describing word."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct sentence:",
  options: [
    "She goes to college every day.",
    "She go to college every day.",
    "She going to college every day.",
    "She gone to college every day."
  ],
  answer: "She goes to college every day.",
  explanation:
    "With the third-person singular subject 'she' in the simple present, the verb takes -s or -es.",
  wrongExplanations: {
    "She go to college every day.":
      "The verb must agree with the third-person singular subject.",
    "She going to college every day.":
      "This requires an auxiliary verb, such as 'is going'.",
    "She gone to college every day.":
      "Gone requires an auxiliary verb such as has."
  },
  hint: "Third-person singular present tense."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'abundant'.",
  options: ["Plentiful", "Rare", "Empty", "Weak"],
  answer: "Plentiful",
  explanation:
    "Abundant means existing in large quantities or plentiful.",
  wrongExplanations: {
    Rare:
      "Rare means uncommon and is close to the opposite.",
    Empty:
      "Empty means containing nothing.",
    Weak:
      "Weak relates to lack of strength."
  },
  hint: "A lot of something."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'scarce'.",
  options: ["Abundant", "Rare", "Limited", "Insufficient"],
  answer: "Abundant",
  explanation:
    "Scarce means limited or insufficient, while abundant means plentiful.",
  wrongExplanations: {
    Rare:
      "Rare is similar in meaning to scarce.",
    Limited:
      "Limited is similar to scarce.",
    Insufficient:
      "Insufficient also suggests scarcity."
  },
  hint: "Opposite of limited."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "The main idea of a passage is:",
  options: [
    "Its central message",
    "Every minor detail",
    "Only the first word",
    "Only the final sentence"
  ],
  answer: "Its central message",
  explanation:
    "The main idea expresses the central point or message developed through the passage.",
  wrongExplanations: {
    "Every minor detail":
      "Details support the main idea but are not the main idea themselves.",
    "Only the first word":
      "A single word cannot normally represent the full central idea.",
    "Only the final sentence":
      "The conclusion may help, but the main idea comes from the passage as a whole."
  },
  hint: "What is the passage mainly about?"
},

{
  subject: "English",
  category: "Writing",
  question: "A good academic paragraph should normally contain:",
  options: [
    "One clear central idea",
    "Many unrelated ideas",
    "No logical order",
    "Only quotations"
  ],
  answer: "One clear central idea",
  explanation:
    "A strong paragraph develops one central idea supported by relevant sentences.",
  wrongExplanations: {
    "Many unrelated ideas":
      "Unrelated ideas weaken coherence.",
    "No logical order":
      "Logical organisation improves clarity.",
    "Only quotations":
      "Quotations may support a paragraph but should not replace the writer's explanation."
  },
  hint: "Unity and coherence."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next letter: A, C, E, G, ?",
  options: ["H", "I", "J", "K"],
  answer: "I",
  explanation:
    "The sequence skips one letter each time: A, C, E, G, I.",
  wrongExplanations: {
    H:
      "H comes immediately after G and does not continue the skip pattern.",
    J:
      "J is one position beyond the correct next letter.",
    K:
      "K skips too many letters."
  },
  hint: "Move forward two letters each time."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "If all roses are flowers and some flowers fade quickly, which statement is definitely true?",
  options: [
    "All roses are flowers",
    "All flowers are roses",
    "All roses fade quickly",
    "No flower fades quickly"
  ],
  answer: "All roses are flowers",
  explanation:
    "The first statement directly tells us that every rose belongs to the category of flowers.",
  wrongExplanations: {
    "All flowers are roses":
      "The relationship cannot automatically be reversed.",
    "All roses fade quickly":
      "We only know that some flowers fade quickly.",
    "No flower fades quickly":
      "This contradicts the information given."
  },
  hint: "Use only what is guaranteed."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 3/4 of 80?",
  options: ["20", "40", "60", "70"],
  answer: "60",
  explanation:
    "3/4 × 80 = 60.",
  wrongExplanations: {
    "20":
      "20 is one-fourth of 80.",
    "40":
      "40 is half of 80.",
    "70":
      "70 is not three-fourths of 80."
  },
  hint: "Divide by 4, then multiply by 3."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A product costs ₹500 after a discount of ₹100. What was the original price?",
  options: ["₹400", "₹500", "₹600", "₹700"],
  answer: "₹600",
  explanation:
    "Original price = final price + discount = ₹500 + ₹100 = ₹600.",
  wrongExplanations: {
    "₹400":
      "This subtracts the discount instead of adding it back.",
    "₹500":
      "This ignores the discount.",
    "₹700":
      "This adds too much."
  },
  hint: "Add the discount back."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Which of the following is a web browser?",
  options: ["Chrome", "Windows", "Excel", "Python"],
  answer: "Chrome",
  explanation:
    "Google Chrome is a web browser used to access websites.",
  wrongExplanations: {
    Windows:
      "Windows is an operating system.",
    Excel:
      "Excel is spreadsheet software.",
    Python:
      "Python is a programming language."
  },
  hint: "Used to open websites."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "URL stands for:",
  options: [
    "Uniform Resource Locator",
    "Universal Record Link",
    "User Resource Language",
    "Uniform Retrieval Logic"
  ],
  answer: "Uniform Resource Locator",
  explanation:
    "URL stands for Uniform Resource Locator, which identifies the address of a resource on the web.",
  wrongExplanations: {
    "Universal Record Link":
      "This is not the correct expansion.",
    "User Resource Language":
      "This is incorrect.",
    "Uniform Retrieval Logic":
      "This is not the standard meaning."
  },
  hint: "Web address."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "India became a republic on:",
  options: [
    "26 January 1950",
    "15 August 1947",
    "26 November 1949",
    "2 October 1947"
  ],
  answer: "26 January 1950",
  explanation:
    "India became a republic when the Constitution came into force on 26 January 1950.",
  wrongExplanations: {
    "15 August 1947":
      "India became independent on this date.",
    "26 November 1949":
      "The Constitution was adopted on this date.",
    "2 October 1947":
      "This is not the date India became a republic."
  },
  hint: "Republic Day."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The currency of Japan is:",
  options: ["Yen", "Won", "Dollar", "Euro"],
  answer: "Yen",
  explanation:
    "The Japanese currency is the yen.",
  wrongExplanations: {
    Won:
      "Won is used in Korea.",
    Dollar:
      "Several countries use dollars, but Japan does not.",
    Euro:
      "The euro is used by many European Union countries."
  },
  hint: "¥."
},
{
  subject: "History",
  category: "Modern India",
  question: "The Jallianwala Bagh massacre took place in:",
  options: ["1919", "1905", "1920", "1930"],
  answer: "1919",
  explanation:
    "The Jallianwala Bagh massacre took place in Amritsar in 1919.",
  wrongExplanations: {
    "1905": "1905 is associated with the Partition of Bengal.",
    "1920": "1920 is associated with the Non-Cooperation Movement.",
    "1930": "1930 is associated with the Civil Disobedience Movement."
  },
  hint: "Think Amritsar and General Dyer."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Rowlatt Act was passed in:",
  options: ["1919", "1909", "1935", "1942"],
  answer: "1919",
  explanation:
    "The Rowlatt Act was passed in 1919 and allowed detention without normal judicial safeguards.",
  wrongExplanations: {
    "1909": "1909 is associated with the Morley-Minto Reforms.",
    "1935": "1935 is associated with the Government of India Act.",
    "1942": "1942 is associated with the Quit India Movement."
  },
  hint: "Same year as Jallianwala Bagh."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Lucknow Pact was signed in:",
  options: ["1916", "1905", "1928", "1932"],
  answer: "1916",
  explanation:
    "The Lucknow Pact between the Indian National Congress and the Muslim League was concluded in 1916.",
  wrongExplanations: {
    "1905": "1905 is associated with the Partition of Bengal.",
    "1928": "1928 is associated with the Nehru Report.",
    "1932": "1932 is associated with the Communal Award and Poona Pact."
  },
  hint: "Congress-League cooperation."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Simon Commission arrived in India in:",
  options: ["1928", "1919", "1930", "1935"],
  answer: "1928",
  explanation:
    "The Simon Commission arrived in India in 1928 and faced widespread protests.",
  wrongExplanations: {
    "1919": "1919 is associated with the Rowlatt Act and Jallianwala Bagh.",
    "1930": "1930 marks the start of the Civil Disobedience Movement.",
    "1935": "1935 is associated with the Government of India Act."
  },
  hint: "Simon Go Back."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Poona Pact was signed in:",
  options: ["1932", "1930", "1928", "1942"],
  answer: "1932",
  explanation:
    "The Poona Pact of 1932 was concluded between Mahatma Gandhi and B.R. Ambedkar regarding representation of the depressed classes.",
  wrongExplanations: {
    "1930": "1930 is associated with the Salt March.",
    "1928": "1928 is associated with the Simon Commission and Nehru Report.",
    "1942": "1942 is associated with the Quit India Movement."
  },
  hint: "Gandhi and Ambedkar."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Government of India Act that introduced provincial autonomy was:",
  options: [
    "Government of India Act 1935",
    "Government of India Act 1909",
    "Government of India Act 1919",
    "Indian Councils Act 1861"
  ],
  answer: "Government of India Act 1935",
  explanation:
    "The Government of India Act 1935 introduced provincial autonomy and proposed an all-India federation.",
  wrongExplanations: {
    "Government of India Act 1909": "The 1909 reforms introduced separate electorates for Muslims.",
    "Government of India Act 1919": "The 1919 Act introduced dyarchy in the provinces.",
    "Indian Councils Act 1861": "The 1861 Act expanded legislative councils."
  },
  hint: "Largest constitutional reform before independence."
},

{
  subject: "History",
  category: "World History",
  question: "The French Revolution began in:",
  options: ["1789", "1776", "1815", "1848"],
  answer: "1789",
  explanation:
    "The French Revolution began in 1789 and transformed French politics and society.",
  wrongExplanations: {
    "1776": "1776 is associated with American independence.",
    "1815": "1815 is associated with the defeat of Napoleon and the Congress of Vienna.",
    "1848": "1848 saw revolutions across Europe."
  },
  hint: "Liberty, Equality, Fraternity."
},

{
  subject: "History",
  category: "World History",
  question: "The Industrial Revolution began first in:",
  options: ["Britain", "France", "Germany", "Russia"],
  answer: "Britain",
  explanation:
    "The Industrial Revolution began in Britain during the eighteenth century.",
  wrongExplanations: {
    France: "France industrialised later than Britain.",
    Germany: "Germany became a major industrial power later in the nineteenth century.",
    Russia: "Russian industrialisation occurred much later."
  },
  hint: "Textiles, coal and steam power."
},

{
  subject: "History",
  category: "World History",
  question: "The Russian Revolution of October took place in:",
  options: ["1917", "1905", "1914", "1921"],
  answer: "1917",
  explanation:
    "The Bolshevik Revolution took place in 1917.",
  wrongExplanations: {
    "1905": "1905 saw an earlier Russian Revolution.",
    "1914": "1914 marks the beginning of the First World War.",
    "1921": "1921 is associated with the New Economic Policy."
  },
  hint: "Lenin and the Bolsheviks."
},

{
  subject: "History",
  category: "World History",
  question: "Who led the Bolsheviks during the Russian Revolution?",
  options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky only", "Karl Marx"],
  answer: "Vladimir Lenin",
  explanation:
    "Vladimir Lenin led the Bolshevik Party during the October Revolution of 1917.",
  wrongExplanations: {
    "Joseph Stalin": "Stalin rose to dominant power after Lenin's death.",
    "Leon Trotsky only": "Trotsky was a major Bolshevik leader but Lenin was the central political leader.",
    "Karl Marx": "Marx died decades before the Russian Revolution."
  },
  hint: "April Theses."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The Coriolis force is caused by:",
  options: ["Earth's rotation", "Earth's revolution only", "Ocean salinity", "Solar eclipses"],
  answer: "Earth's rotation",
  explanation:
    "The Coriolis effect results from Earth's rotation and influences winds and ocean currents.",
  wrongExplanations: {
    "Earth's revolution only": "Earth's revolution around the Sun does not directly create the Coriolis effect.",
    "Ocean salinity": "Salinity affects water density but not the Coriolis force itself.",
    "Solar eclipses": "Eclipses are unrelated."
  },
  hint: "Deflection of moving air."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The equatorial low-pressure belt is commonly called the:",
  options: ["Doldrums", "Horse latitudes", "Roaring Forties", "Polar front"],
  answer: "Doldrums",
  explanation:
    "The equatorial low-pressure belt is commonly known as the doldrums.",
  wrongExplanations: {
    "Horse latitudes": "Horse latitudes are subtropical high-pressure belts.",
    "Roaring Forties": "The Roaring Forties are strong westerly winds in the Southern Hemisphere.",
    "Polar front": "The polar front occurs where polar and mid-latitude air masses meet."
  },
  hint: "Calm equatorial zone."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Trade winds generally blow from:",
  options: [
    "Subtropical high-pressure belts toward the equatorial low",
    "Equator toward the poles directly",
    "Polar low toward subtropical high",
    "West to east everywhere"
  ],
  answer: "Subtropical high-pressure belts toward the equatorial low",
  explanation:
    "Trade winds blow from subtropical high-pressure belts toward the equatorial low-pressure belt.",
  wrongExplanations: {
    "Equator toward the poles directly": "Trade winds move toward the equator, not away from it.",
    "Polar low toward subtropical high": "This is not the trade-wind circulation.",
    "West to east everywhere": "Trade winds are generally easterlies."
  },
  hint: "Toward the equator."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A tropical cyclone requires:",
  options: [
    "Warm ocean water",
    "Very cold ocean water",
    "No moisture",
    "No atmospheric circulation"
  ],
  answer: "Warm ocean water",
  explanation:
    "Tropical cyclones develop over warm ocean waters that provide heat and moisture.",
  wrongExplanations: {
    "Very cold ocean water": "Cold water suppresses cyclone development.",
    "No moisture": "Moisture is essential.",
    "No atmospheric circulation": "Cyclones require organised atmospheric circulation."
  },
  hint: "Warm sea surface."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The point inside Earth where an earthquake originates is called the:",
  options: ["Focus", "Epicentre", "Fault line only", "Crater"],
  answer: "Focus",
  explanation:
    "The focus, or hypocentre, is the point inside Earth where an earthquake begins.",
  wrongExplanations: {
    Epicentre: "The epicentre is the point on Earth's surface directly above the focus.",
    "Fault line only": "A fault may generate earthquakes, but the exact origin point is the focus.",
    Crater: "A crater is a surface depression often associated with volcanoes or impacts."
  },
  hint: "Inside Earth."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The point on Earth's surface directly above an earthquake focus is called the:",
  options: ["Epicentre", "Focus", "Mantle", "Rift"],
  answer: "Epicentre",
  explanation:
    "The epicentre lies on the surface directly above the earthquake focus.",
  wrongExplanations: {
    Focus: "The focus lies within Earth.",
    Mantle: "The mantle is a major layer of Earth.",
    Rift: "A rift is a zone of crustal extension."
  },
  hint: "Surface point."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A census is primarily used to collect data about:",
  options: ["Population", "Only weather", "Only trade", "Only rivers"],
  answer: "Population",
  explanation:
    "A census systematically collects demographic and related information about a population.",
  wrongExplanations: {
    "Only weather": "Weather data are collected by meteorological agencies.",
    "Only trade": "Trade data come from economic statistics.",
    "Only rivers": "River information comes from hydrological and geographical surveys."
  },
  hint: "Population count."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Birth rate is commonly expressed as births per:",
  options: ["1000 population", "100 population", "10 population", "1 million only"],
  answer: "1000 population",
  explanation:
    "Crude birth rate is usually expressed as the number of live births per 1000 population per year.",
  wrongExplanations: {
    "100 population": "This is not the usual demographic standard.",
    "10 population": "This would be too small a denominator.",
    "1 million only": "The standard crude rate uses 1000."
  },
  hint: "Per thousand."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Marginal utility refers to:",
  options: [
    "Additional satisfaction from consuming one more unit",
    "Total satisfaction only",
    "Cost of production only",
    "Government tax revenue"
  ],
  answer: "Additional satisfaction from consuming one more unit",
  explanation:
    "Marginal utility is the extra satisfaction obtained from consuming one additional unit of a good.",
  wrongExplanations: {
    "Total satisfaction only": "That is total utility.",
    "Cost of production only": "Cost is a producer-side concept.",
    "Government tax revenue": "Tax revenue belongs to public finance."
  },
  hint: "Marginal = additional."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "The law of diminishing marginal utility states that:",
  options: [
    "Additional satisfaction usually falls as more units are consumed",
    "Total utility immediately becomes zero",
    "Price always rises",
    "Production always increases"
  ],
  answer: "Additional satisfaction usually falls as more units are consumed",
  explanation:
    "The law states that marginal utility tends to decline as a consumer consumes more units of the same good.",
  wrongExplanations: {
    "Total utility immediately becomes zero": "Total utility can continue to rise even while marginal utility falls.",
    "Price always rises": "The law concerns utility, not necessarily price.",
    "Production always increases": "Production is unrelated."
  },
  hint: "First slice versus tenth slice."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Fixed cost is a cost that:",
  options: [
    "Does not change with output in the short run",
    "Always changes directly with output",
    "Exists only when output is zero",
    "Is paid only by consumers"
  ],
  answer: "Does not change with output in the short run",
  explanation:
    "Fixed costs remain unchanged over a range of output in the short run.",
  wrongExplanations: {
    "Always changes directly with output": "That describes variable cost more closely.",
    "Exists only when output is zero": "Fixed cost exists even when output is zero.",
    "Is paid only by consumers": "Costs are borne by producers."
  },
  hint: "Rent is a classic example."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Variable cost changes mainly with:",
  options: ["Level of output", "Political elections", "Population census", "Exchange rate only"],
  answer: "Level of output",
  explanation:
    "Variable costs rise or fall as production changes.",
  wrongExplanations: {
    "Political elections": "Elections do not define variable cost.",
    "Population census": "Census activity is unrelated.",
    "Exchange rate only": "Exchange rates may affect some costs but do not define variable cost."
  },
  hint: "More production, more inputs."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Deflation refers to:",
  options: [
    "A sustained fall in the general price level",
    "A sustained rise in prices",
    "Only higher wages",
    "Only higher taxes"
  ],
  answer: "A sustained fall in the general price level",
  explanation:
    "Deflation is a persistent decline in the general level of prices.",
  wrongExplanations: {
    "A sustained rise in prices": "That is inflation.",
    "Only higher wages": "Wage change does not define deflation.",
    "Only higher taxes": "Tax changes do not define deflation."
  },
  hint: "Opposite of inflation."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Stagflation combines:",
  options: [
    "Inflation and stagnation",
    "Deflation and rapid growth",
    "High exports and low imports",
    "Full employment and zero inflation"
  ],
  answer: "Inflation and stagnation",
  explanation:
    "Stagflation refers to a combination of high inflation and weak economic growth, often with high unemployment.",
  wrongExplanations: {
    "Deflation and rapid growth": "This is almost the opposite combination.",
    "High exports and low imports": "This describes a trade pattern.",
    "Full employment and zero inflation": "That is not stagflation."
  },
  hint: "Stagnation + inflation."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "The central bank acts as lender of last resort mainly to:",
  options: [
    "Support banks facing severe liquidity problems",
    "Finance every private purchase",
    "Conduct elections",
    "Control weather"
  ],
  answer: "Support banks facing severe liquidity problems",
  explanation:
    "A central bank can provide emergency liquidity to financial institutions to prevent systemic instability.",
  wrongExplanations: {
    "Finance every private purchase": "Central banks do not directly finance ordinary consumer purchases.",
    "Conduct elections": "Election authorities conduct elections.",
    "Control weather": "This is unrelated."
  },
  hint: "Emergency support for banks."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "A direct tax is generally imposed directly on:",
  options: ["Income or wealth", "Goods at point of sale only", "Imports only", "Road traffic only"],
  answer: "Income or wealth",
  explanation:
    "Direct taxes are imposed directly on individuals or organisations, commonly on income or wealth.",
  wrongExplanations: {
    "Goods at point of sale only": "That is more typical of indirect taxation.",
    "Imports only": "Import duties are indirect taxes.",
    "Road traffic only": "This does not define direct taxation."
  },
  hint: "Income tax."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "An indirect tax is commonly imposed on:",
  options: ["Goods and services", "Only personal income", "Only inherited wealth", "Only salaries"],
  answer: "Goods and services",
  explanation:
    "Indirect taxes are commonly levied on expenditure involving goods and services.",
  wrongExplanations: {
    "Only personal income": "Income tax is a direct tax.",
    "Only inherited wealth": "Wealth-related taxes are generally direct.",
    "Only salaries": "Salary income is taxed directly."
  },
  hint: "GST is an example."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The theory of class struggle is most closely associated with:",
  options: ["Karl Marx", "Max Weber", "Durkheim", "Comte"],
  answer: "Karl Marx",
  explanation:
    "Karl Marx viewed class struggle as a major force driving historical change.",
  wrongExplanations: {
    "Max Weber": "Weber developed a multidimensional view of stratification.",
    Durkheim: "Durkheim focused on social solidarity and social facts.",
    Comte: "Comte is associated with positivism."
  },
  hint: "Bourgeoisie and proletariat."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of bureaucracy as a rational organisation is associated with:",
  options: ["Max Weber", "Karl Marx", "Durkheim", "George Herbert Mead"],
  answer: "Max Weber",
  explanation:
    "Weber analysed bureaucracy as a form of rational-legal organisation.",
  wrongExplanations: {
    "Karl Marx": "Marx focused more on class and capitalism.",
    Durkheim: "Durkheim focused on social integration.",
    "George Herbert Mead": "Mead is associated with symbolic interactionism."
  },
  hint: "Ideal type."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Mechanical solidarity is associated with societies that have:",
  options: [
    "Low division of labour",
    "Very complex division of labour only",
    "No shared values",
    "Only urban industries"
  ],
  answer: "Low division of labour",
  explanation:
    "Durkheim associated mechanical solidarity with relatively simple societies having similar roles and strong shared beliefs.",
  wrongExplanations: {
    "Very complex division of labour only": "That is associated more with organic solidarity.",
    "No shared values": "Mechanical solidarity depends strongly on shared beliefs.",
    "Only urban industries": "Urban-industrial societies are associated more with organic solidarity."
  },
  hint: "Similarity binds people."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Organic solidarity is associated with:",
  options: [
    "Complex division of labour",
    "No specialisation",
    "Complete social isolation",
    "Only tribal kinship"
  ],
  answer: "Complex division of labour",
  explanation:
    "Organic solidarity develops in complex societies where people perform specialised but interdependent roles.",
  wrongExplanations: {
    "No specialisation": "Organic solidarity depends on specialisation.",
    "Complete social isolation": "Interdependence is central.",
    "Only tribal kinship": "Simple kin-based societies are associated more with mechanical solidarity."
  },
  hint: "Difference and interdependence."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Social stratification refers to:",
  options: [
    "Structured inequality between groups",
    "Only physical geography",
    "Only age differences",
    "Complete equality"
  ],
  answer: "Structured inequality between groups",
  explanation:
    "Social stratification refers to organised patterns of inequality involving class, caste, status and power.",
  wrongExplanations: {
    "Only physical geography": "That belongs to geography.",
    "Only age differences": "Age may matter but does not define stratification.",
    "Complete equality": "Stratification implies unequal ranking."
  },
  hint: "Hierarchy in society."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Social mobility means:",
  options: [
    "Movement between social positions",
    "Only physical travel",
    "Only migration abroad",
    "Only population growth"
  ],
  answer: "Movement between social positions",
  explanation:
    "Social mobility refers to movement of individuals or groups within a system of social stratification.",
  wrongExplanations: {
    "Only physical travel": "Geographical movement is different from social mobility.",
    "Only migration abroad": "Migration can occur without social mobility.",
    "Only population growth": "Population growth is demographic."
  },
  hint: "Upward or downward movement."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Learning by reinforcement is strongly associated with:",
  options: ["B.F. Skinner", "Jean Piaget", "Sigmund Freud", "Carl Rogers"],
  answer: "B.F. Skinner",
  explanation:
    "B.F. Skinner developed operant conditioning, which emphasises reinforcement and consequences.",
  wrongExplanations: {
    "Jean Piaget": "Piaget developed a theory of cognitive development.",
    "Sigmund Freud": "Freud developed psychoanalytic theory.",
    "Carl Rogers": "Rogers is associated with humanistic psychology."
  },
  hint: "Operant conditioning."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Classical conditioning is associated with:",
  options: ["Ivan Pavlov", "B.F. Skinner", "Jean Piaget", "Abraham Maslow"],
  answer: "Ivan Pavlov",
  explanation:
    "Ivan Pavlov demonstrated classical conditioning through experiments involving dogs.",
  wrongExplanations: {
    "B.F. Skinner": "Skinner is associated with operant conditioning.",
    "Jean Piaget": "Piaget studied cognitive development.",
    "Abraham Maslow": "Maslow developed the hierarchy of needs."
  },
  hint: "Bell and salivation."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "The hierarchy of needs is associated with:",
  options: ["Abraham Maslow", "Piaget", "Skinner", "Pavlov"],
  answer: "Abraham Maslow",
  explanation:
    "Maslow proposed a hierarchy of human needs ranging from physiological needs to self-actualisation.",
  wrongExplanations: {
    Piaget: "Piaget developed cognitive-development theory.",
    Skinner: "Skinner developed operant conditioning.",
    Pavlov: "Pavlov developed classical conditioning."
  },
  hint: "Self-actualisation."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Jean Piaget is mainly associated with:",
  options: [
    "Cognitive development",
    "Classical conditioning",
    "Operant conditioning",
    "Psychoanalysis"
  ],
  answer: "Cognitive development",
  explanation:
    "Jean Piaget developed a stage theory of children's cognitive development.",
  wrongExplanations: {
    "Classical conditioning": "Pavlov is associated with classical conditioning.",
    "Operant conditioning": "Skinner is associated with operant conditioning.",
    Psychoanalysis: "Freud is associated with psychoanalysis."
  },
  hint: "Stages of thinking."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "The lecture method is generally considered:",
  options: [
    "Teacher-centred",
    "Completely learner-centred",
    "A laboratory method only",
    "A fieldwork method only"
  ],
  answer: "Teacher-centred",
  explanation:
    "Traditional lecture teaching is primarily teacher-centred because the teacher controls presentation of content.",
  wrongExplanations: {
    "Completely learner-centred": "Learner-centred methods involve greater active student participation.",
    "A laboratory method only": "Lectures do not require laboratory work.",
    "A fieldwork method only": "Lectures are classroom-based."
  },
  hint: "Teacher speaks most."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Discussion method is useful mainly because it encourages:",
  options: [
    "Active participation",
    "Complete silence",
    "Only memorisation",
    "No communication"
  ],
  answer: "Active participation",
  explanation:
    "Discussion encourages students to express ideas, listen to others and participate actively.",
  wrongExplanations: {
    "Complete silence": "Discussion requires interaction.",
    "Only memorisation": "Discussion can promote understanding and critical thinking.",
    "No communication": "Communication is central."
  },
  hint: "Students talk and think."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct past tense of 'go'.",
  options: ["Went", "Goed", "Gone", "Going"],
  answer: "Went",
  explanation:
    "Went is the simple past form of go.",
  wrongExplanations: {
    Goed: "This is not a correct English form.",
    Gone: "Gone is the past participle.",
    Going: "Going is the present participle."
  },
  hint: "Irregular verb."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct plural form of 'child'.",
  options: ["Children", "Childs", "Childes", "Childrens"],
  answer: "Children",
  explanation:
    "Children is the irregular plural form of child.",
  wrongExplanations: {
    Childs: "This is not the standard plural.",
    Childes: "This is incorrect.",
    Childrens: "Children is already plural."
  },
  hint: "Irregular plural."
},

{
  subject: "English",
  category: "Grammar",
  question: "Which sentence is in passive voice?",
  options: [
    "The book was written by Orwell.",
    "Orwell wrote the book.",
    "She reads every day.",
    "They are studying."
  ],
  answer: "The book was written by Orwell.",
  explanation:
    "In passive voice, the subject receives the action.",
  wrongExplanations: {
    "Orwell wrote the book.": "This is active voice.",
    "She reads every day.": "This is active voice.",
    "They are studying.": "This is active voice."
  },
  hint: "Subject receives the action."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'brief'.",
  options: ["Short", "Long", "Complex", "Ancient"],
  answer: "Short",
  explanation:
    "Brief means short in duration or length.",
  wrongExplanations: {
    Long: "Long is the opposite.",
    Complex: "Complex means complicated.",
    Ancient: "Ancient means very old."
  },
  hint: "Not lengthy."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'generous'.",
  options: ["Selfish", "Kind", "Helpful", "Giving"],
  answer: "Selfish",
  explanation:
    "Selfish is opposite in meaning to generous.",
  wrongExplanations: {
    Kind: "Kind is similar to generous.",
    Helpful: "Helpful is positive and related to generosity.",
    Giving: "Giving is a synonym of generous."
  },
  hint: "Opposite of giving."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 2, 5, 8, 11, ?",
  options: ["12", "13", "14", "15"],
  answer: "14",
  explanation:
    "The pattern adds 3 each time: 2, 5, 8, 11, 14.",
  wrongExplanations: {
    "12": "This adds only 1.",
    "13": "This adds 2.",
    "15": "This adds 4."
  },
  hint: "Constant difference."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "If CAT is coded as DBU, how is DOG coded using the same rule?",
  options: ["EPH", "COF", "EOG", "DPH"],
  answer: "EPH",
  explanation:
    "Each letter is moved one place forward: D→E, O→P, G→H.",
  wrongExplanations: {
    COF: "This moves letters backward.",
    EOG: "Only the first letter changes correctly.",
    DPH: "The first letter has not been changed."
  },
  hint: "Move each letter one step forward."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Which number is the odd one out: 2, 4, 8, 9, 16?",
  options: ["2", "8", "9", "16"],
  answer: "9",
  explanation:
    "2, 4, 8 and 16 follow powers or repeated doubling, while 9 breaks the pattern.",
  wrongExplanations: {
    "2": "2 fits the doubling progression.",
    "8": "8 fits the progression.",
    "16": "16 fits the progression."
  },
  hint: "Look for powers of 2."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 40% of 250?",
  options: ["80", "90", "100", "120"],
  answer: "100",
  explanation:
    "40% of 250 = 0.4 × 250 = 100.",
  wrongExplanations: {
    "80": "This is 32% of 250.",
    "90": "This does not equal 40%.",
    "120": "This is 48% of 250."
  },
  hint: "10% is 25."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "If a number increases from 50 to 60, the percentage increase is:",
  options: ["10%", "20%", "25%", "30%"],
  answer: "20%",
  explanation:
    "Increase = 10. Percentage increase = 10/50 × 100 = 20%.",
  wrongExplanations: {
    "10%": "This uses the increase directly without dividing by the original.",
    "25%": "This is too high.",
    "30%": "This is too high."
  },
  hint: "Increase divided by original."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "The simple interest on ₹1000 at 10% per year for 2 years is:",
  options: ["₹100", "₹200", "₹300", "₹400"],
  answer: "₹200",
  explanation:
    "Simple Interest = PRT/100 = 1000 × 10 × 2 / 100 = ₹200.",
  wrongExplanations: {
    "₹100": "This is interest for only one year.",
    "₹300": "This is too high.",
    "₹400": "This doubles the correct interest."
  },
  hint: "SI = PRT/100."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "A survey shows 60 students prefer tea and 40 prefer coffee. What percentage prefer tea?",
  options: ["40%", "50%", "60%", "70%"],
  answer: "60%",
  explanation:
    "Total = 100 students, so 60 out of 100 means 60%.",
  wrongExplanations: {
    "40%": "This represents coffee preference.",
    "50%": "Half would be 50 students.",
    "70%": "This is higher than the actual share."
  },
  hint: "Total is exactly 100."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Which of the following is spreadsheet software?",
  options: ["Microsoft Excel", "Google Chrome", "Windows", "Python"],
  answer: "Microsoft Excel",
  explanation:
    "Microsoft Excel is spreadsheet software used for calculations, tables and data analysis.",
  wrongExplanations: {
    "Google Chrome": "Chrome is a web browser.",
    Windows: "Windows is an operating system.",
    Python: "Python is a programming language."
  },
  hint: "Rows and columns."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "HTML is mainly used to:",
  options: [
    "Structure web pages",
    "Manage computer hardware",
    "Send email only",
    "Store electricity"
  ],
  answer: "Structure web pages",
  explanation:
    "HTML is a markup language used to structure content on web pages.",
  wrongExplanations: {
    "Manage computer hardware": "Operating systems handle hardware management.",
    "Send email only": "Email uses protocols such as SMTP.",
    "Store electricity": "HTML has nothing to do with electrical storage."
  },
  hint: "Web page structure."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of UNESCO is in:",
  options: ["Paris", "New York", "Geneva", "Rome"],
  answer: "Paris",
  explanation:
    "UNESCO is headquartered in Paris, France.",
  wrongExplanations: {
    "New York": "The main UN headquarters is in New York.",
    Geneva: "Geneva hosts many international organisations.",
    Rome: "FAO is headquartered in Rome."
  },
  hint: "France."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of the World Health Organization is in:",
  options: ["Geneva", "Paris", "London", "New York"],
  answer: "Geneva",
  explanation:
    "The World Health Organization is headquartered in Geneva, Switzerland.",
  wrongExplanations: {
    Paris: "UNESCO is headquartered in Paris.",
    London: "WHO headquarters is not in London.",
    "New York": "The main UN headquarters is in New York."
  },
  hint: "Switzerland."
},

{
  subject: "General Aptitude",
  category: "Language",
  question: "Choose the correctly spelled word:",
  options: ["Environment", "Enviroment", "Envirnoment", "Environmant"],
  answer: "Environment",
  explanation:
    "Environment is the correct spelling.",
  wrongExplanations: {
    Enviroment: "This omits the 'n' after 'iro'.",
    Envirnoment: "The letters are incorrectly ordered.",
    Environmant: "The final vowel is incorrect."
  },
  hint: "Environ + ment."
},
{
  subject: "History",
  category: "Ancient India",
  question: "The Rig Veda is primarily a collection of:",
  options: ["Hymns", "Legal codes", "Medical texts", "Dramas"],
  answer: "Hymns",
  explanation:
    "The Rig Veda is the oldest Vedic text and mainly contains hymns dedicated to various deities.",
  wrongExplanations: {
    "Legal codes": "Legal codes are associated with texts such as the Dharmashastras.",
    "Medical texts": "Ayurvedic traditions are found in other texts.",
    Dramas: "Dramatic literature developed separately."
  },
  hint: "Oldest Veda."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Who was the twenty-fourth Tirthankara of Jainism?",
  options: ["Mahavira", "Parshvanatha", "Rishabhanatha", "Gautama Buddha"],
  answer: "Mahavira",
  explanation:
    "Mahavira is traditionally regarded as the twenty-fourth Tirthankara of Jainism.",
  wrongExplanations: {
    Parshvanatha: "Parshvanatha was the twenty-third Tirthankara.",
    Rishabhanatha: "Rishabhanatha is regarded as the first Tirthankara.",
    "Gautama Buddha": "Buddha founded Buddhism, not Jainism."
  },
  hint: "Contemporary of the Buddha."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The founder of Buddhism was:",
  options: ["Gautama Buddha", "Mahavira", "Ashoka", "Nagarjuna"],
  answer: "Gautama Buddha",
  explanation:
    "Siddhartha Gautama, known as the Buddha, founded Buddhism.",
  wrongExplanations: {
    Mahavira: "Mahavira is associated with Jainism.",
    Ashoka: "Ashoka later supported the spread of Buddhism.",
    Nagarjuna: "Nagarjuna was an important Buddhist philosopher."
  },
  hint: "Siddhartha Gautama."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Four Noble Truths belong to:",
  options: ["Buddhism", "Jainism", "Vedic religion", "Sikhism"],
  answer: "Buddhism",
  explanation:
    "The Four Noble Truths form a central teaching of Buddhism.",
  wrongExplanations: {
    Jainism: "Jainism has distinct teachings centred on non-violence and liberation.",
    "Vedic religion": "The Four Noble Truths are not Vedic teachings.",
    Sikhism: "Sikhism developed much later."
  },
  hint: "Suffering and its end."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Nalanda was famous as a centre of:",
  options: ["Learning", "Shipbuilding", "Military training only", "Mining"],
  answer: "Learning",
  explanation:
    "Nalanda was one of the most renowned centres of higher learning in ancient India.",
  wrongExplanations: {
    Shipbuilding: "Nalanda was not famous primarily for shipbuilding.",
    "Military training only": "Its main fame came from scholarship and education.",
    Mining: "Nalanda was not a major mining centre."
  },
  hint: "Ancient university."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who founded the Delhi Sultanate's Mamluk or Slave dynasty?",
  options: ["Qutb-ud-din Aibak", "Iltutmish", "Balban", "Alauddin Khalji"],
  answer: "Qutb-ud-din Aibak",
  explanation:
    "Qutb-ud-din Aibak established the Mamluk or Slave dynasty in Delhi.",
  wrongExplanations: {
    Iltutmish: "Iltutmish consolidated the dynasty after Aibak.",
    Balban: "Balban was a later ruler of the Slave dynasty.",
    "Alauddin Khalji": "Alauddin belonged to the Khalji dynasty."
  },
  hint: "First Sultan of Delhi from the Mamluk line."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who completed much of the Qutub Minar after Qutb-ud-din Aibak?",
  options: ["Iltutmish", "Balban", "Alauddin Khalji", "Firoz Shah Tughlaq"],
  answer: "Iltutmish",
  explanation:
    "Iltutmish completed additional storeys of the Qutub Minar after Aibak.",
  wrongExplanations: {
    Balban: "Balban did not complete the main early construction.",
    "Alauddin Khalji": "Alauddin planned other major architectural works.",
    "Firoz Shah Tughlaq": "Firoz Shah repaired the minar later."
  },
  hint: "Successor who consolidated the Sultanate."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Market control measures are most strongly associated with:",
  options: ["Alauddin Khalji", "Babur", "Iltutmish", "Sher Shah"],
  answer: "Alauddin Khalji",
  explanation:
    "Alauddin Khalji introduced extensive market regulations and price controls.",
  wrongExplanations: {
    Babur: "Babur founded the Mughal Empire.",
    Iltutmish: "Iltutmish strengthened the early Delhi Sultanate.",
    "Sher Shah": "Sher Shah is known for revenue and administrative reforms."
  },
  hint: "Price control."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Vijayanagara Empire was founded in:",
  options: ["1336", "1206", "1526", "1600"],
  answer: "1336",
  explanation:
    "The Vijayanagara Empire was founded in 1336 by Harihara and Bukka.",
  wrongExplanations: {
    "1206": "1206 marks the beginning of the Delhi Sultanate.",
    "1526": "1526 marks the foundation of the Mughal Empire.",
    "1600": "1600 marks the founding of the English East India Company."
  },
  hint: "Harihara and Bukka."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Krishnadevaraya belonged to which dynasty?",
  options: ["Tuluva", "Khalji", "Lodi", "Sur"],
  answer: "Tuluva",
  explanation:
    "Krishnadevaraya was the most famous ruler of the Tuluva dynasty of Vijayanagara.",
  wrongExplanations: {
    Khalji: "The Khaljis ruled the Delhi Sultanate.",
    Lodi: "The Lodis were the last dynasty of the Delhi Sultanate.",
    Sur: "The Sur dynasty was founded by Sher Shah."
  },
  hint: "Vijayanagara."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The atmosphere contains the highest proportion of:",
  options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon only"],
  answer: "Nitrogen",
  explanation:
    "Nitrogen makes up about 78 percent of Earth's atmosphere.",
  wrongExplanations: {
    Oxygen: "Oxygen makes up about 21 percent.",
    "Carbon dioxide": "Carbon dioxide occurs in a much smaller proportion.",
    "Argon only": "Argon is present in small amounts."
  },
  hint: "About 78%."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The ozone layer is concentrated mainly in the:",
  options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
  answer: "Stratosphere",
  explanation:
    "Most atmospheric ozone is concentrated in the stratosphere.",
  wrongExplanations: {
    Troposphere: "The troposphere contains most weather.",
    Mesosphere: "The mesosphere lies above the stratosphere.",
    Thermosphere: "The thermosphere is much higher."
  },
  hint: "Above the weather layer."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Humidity refers to the amount of:",
  options: ["Water vapour in the air", "Dust in the soil", "Salt in the ocean", "Oxygen in rocks"],
  answer: "Water vapour in the air",
  explanation:
    "Humidity measures the amount of water vapour present in the atmosphere.",
  wrongExplanations: {
    "Dust in the soil": "That does not define humidity.",
    "Salt in the ocean": "That refers to salinity.",
    "Oxygen in rocks": "This is unrelated."
  },
  hint: "Moisture in air."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A contour line joins points of equal:",
  options: ["Elevation", "Temperature", "Rainfall only", "Population"],
  answer: "Elevation",
  explanation:
    "Contour lines connect places having equal height above a reference level.",
  wrongExplanations: {
    Temperature: "Lines of equal temperature are isotherms.",
    "Rainfall only": "Lines of equal rainfall are isohyets.",
    Population: "Population distribution uses different mapping methods."
  },
  hint: "Topographic maps."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Demography is the study of:",
  options: ["Population", "Rocks", "Climate only", "Soils only"],
  answer: "Population",
  explanation:
    "Demography studies population size, structure, distribution and change.",
  wrongExplanations: {
    Rocks: "Rocks are studied in geology.",
    "Climate only": "Climate is studied in climatology.",
    "Soils only": "Soils are studied in pedology."
  },
  hint: "Births, deaths and migration."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A high dependency ratio means:",
  options: [
    "A relatively large non-working-age population compared with working-age population",
    "Everyone is employed",
    "Population density is zero",
    "Migration has stopped"
  ],
  answer: "A relatively large non-working-age population compared with working-age population",
  explanation:
    "The dependency ratio compares dependents, typically children and older persons, with the working-age population.",
  wrongExplanations: {
    "Everyone is employed": "Employment and dependency ratio are different measures.",
    "Population density is zero": "Density is unrelated.",
    "Migration has stopped": "Migration does not define dependency ratio."
  },
  hint: "Dependents compared with workers."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Quaternary activities mainly involve:",
  options: [
    "Knowledge and information services",
    "Fishing only",
    "Mining only",
    "Basic manufacturing only"
  ],
  answer: "Knowledge and information services",
  explanation:
    "Quaternary activities include research, information technology and knowledge-intensive services.",
  wrongExplanations: {
    "Fishing only": "Fishing is a primary activity.",
    "Mining only": "Mining is a primary activity.",
    "Basic manufacturing only": "Manufacturing is a secondary activity."
  },
  hint: "Knowledge economy."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Consumer equilibrium occurs when a consumer:",
  options: [
    "Maximises satisfaction subject to income constraints",
    "Always buys the most expensive good",
    "Spends nothing",
    "Ignores prices"
  ],
  answer: "Maximises satisfaction subject to income constraints",
  explanation:
    "Consumer equilibrium describes the allocation of income that provides maximum attainable satisfaction.",
  wrongExplanations: {
    "Always buys the most expensive good": "Price alone does not determine equilibrium.",
    "Spends nothing": "That is not the general condition.",
    "Ignores prices": "Prices are essential constraints."
  },
  hint: "Maximum utility."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Perfect competition is characterised by:",
  options: [
    "Many buyers and sellers",
    "One seller only",
    "A few sellers only",
    "One buyer only"
  ],
  answer: "Many buyers and sellers",
  explanation:
    "Perfect competition assumes many buyers and sellers and no single participant controls market price.",
  wrongExplanations: {
    "One seller only": "That is monopoly.",
    "A few sellers only": "That is oligopoly.",
    "One buyer only": "That is monopsony."
  },
  hint: "Many small firms."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Price discrimination means:",
  options: [
    "Charging different prices for the same product to different buyers or markets",
    "Always selling below cost",
    "Government fixing one price",
    "Giving every customer the same price"
  ],
  answer: "Charging different prices for the same product to different buyers or markets",
  explanation:
    "Price discrimination occurs when a seller charges different prices not fully explained by cost differences.",
  wrongExplanations: {
    "Always selling below cost": "That is not the definition.",
    "Government fixing one price": "That is price regulation.",
    "Giving every customer the same price": "That is the opposite."
  },
  hint: "Different customers, different prices."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "National income broadly measures:",
  options: [
    "Income generated by economic activity over a period",
    "Only tax collections",
    "Only company profits",
    "Only foreign aid"
  ],
  answer: "Income generated by economic activity over a period",
  explanation:
    "National income measures the income earned from production and economic activity within a defined framework.",
  wrongExplanations: {
    "Only tax collections": "Tax revenue is only one fiscal component.",
    "Only company profits": "Profits are only one type of income.",
    "Only foreign aid": "Foreign aid does not define national income."
  },
  hint: "Economy-wide income."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "A recession generally refers to:",
  options: [
    "A significant decline in economic activity",
    "Rapid inflation only",
    "Permanent full employment",
    "A rise in all exports"
  ],
  answer: "A significant decline in economic activity",
  explanation:
    "A recession is a broad downturn in economic activity, often involving lower output and employment.",
  wrongExplanations: {
    "Rapid inflation only": "Inflation can occur with or without recession.",
    "Permanent full employment": "Recession usually weakens employment.",
    "A rise in all exports": "Export growth does not define recession."
  },
  hint: "Economic slowdown."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "The Human Development Index includes indicators related to:",
  options: [
    "Health, education and income",
    "Only military power",
    "Only exports",
    "Only population density"
  ],
  answer: "Health, education and income",
  explanation:
    "HDI combines measures of life expectancy, education and income.",
  wrongExplanations: {
    "Only military power": "Military power is not part of HDI.",
    "Only exports": "Exports are not one of the three main HDI dimensions.",
    "Only population density": "Density is not an HDI component."
  },
  hint: "Three dimensions."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Poverty line generally represents:",
  options: [
    "A threshold used to identify minimum basic living standards",
    "The maximum income allowed",
    "Only the price of food",
    "The exchange rate"
  ],
  answer: "A threshold used to identify minimum basic living standards",
  explanation:
    "A poverty line is used to distinguish populations below a specified minimum standard of living.",
  wrongExplanations: {
    "The maximum income allowed": "Poverty lines are minimum thresholds.",
    "Only the price of food": "Modern poverty measures can include broader needs.",
    "The exchange rate": "Exchange rate is unrelated."
  },
  hint: "Minimum standard."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Culture includes:",
  options: [
    "Shared values, beliefs, norms and symbols",
    "Only clothing",
    "Only food",
    "Only laws"
  ],
  answer: "Shared values, beliefs, norms and symbols",
  explanation:
    "Culture includes material and non-material patterns such as values, beliefs, norms, language and symbols.",
  wrongExplanations: {
    "Only clothing": "Clothing is only one cultural element.",
    "Only food": "Food practices are only one aspect.",
    "Only laws": "Laws are only one part of social norms and institutions."
  },
  hint: "Way of life."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Norms are:",
  options: [
    "Shared rules and expectations of behaviour",
    "Only written constitutions",
    "Only economic prices",
    "Natural disasters"
  ],
  answer: "Shared rules and expectations of behaviour",
  explanation:
    "Norms guide appropriate and expected behaviour within a society or group.",
  wrongExplanations: {
    "Only written constitutions": "Norms can be formal or informal.",
    "Only economic prices": "Prices are economic variables.",
    "Natural disasters": "Disasters are physical events."
  },
  hint: "Expected behaviour."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "A social role refers to:",
  options: [
    "Expected behaviour linked to a social status",
    "Only legal punishment",
    "Only economic class",
    "A person's height"
  ],
  answer: "Expected behaviour linked to a social status",
  explanation:
    "A role consists of expectations attached to a particular social position or status.",
  wrongExplanations: {
    "Only legal punishment": "Legal punishment is not a role.",
    "Only economic class": "Class may influence roles but does not define them.",
    "A person's height": "Height is biological."
  },
  hint: "Status and role."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Marriage is generally considered a:",
  options: ["Social institution", "Natural disaster", "Political party", "Economic market only"],
  answer: "Social institution",
  explanation:
    "Marriage is a socially regulated institution governing family and kinship relations.",
  wrongExplanations: {
    "Natural disaster": "Marriage is social, not natural hazard.",
    "Political party": "A political party is a political organisation.",
    "Economic market only": "Marriage is much broader than economic exchange."
  },
  hint: "Family institution."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Globalisation refers broadly to:",
  options: [
    "Growing worldwide interconnectedness",
    "Complete isolation of countries",
    "Only population decline",
    "Only rural development"
  ],
  answer: "Growing worldwide interconnectedness",
  explanation:
    "Globalisation involves increasing economic, political, cultural and technological connections across borders.",
  wrongExplanations: {
    "Complete isolation of countries": "Globalisation involves more connection, not less.",
    "Only population decline": "Population change is not its definition.",
    "Only rural development": "Globalisation affects many sectors and spaces."
  },
  hint: "World becoming more connected."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "The zone of proximal development is associated with:",
  options: ["Lev Vygotsky", "Jean Piaget", "B.F. Skinner", "Pavlov"],
  answer: "Lev Vygotsky",
  explanation:
    "Vygotsky described the zone of proximal development as the gap between what learners can do independently and with guidance.",
  wrongExplanations: {
    "Jean Piaget": "Piaget focused on stages of cognitive development.",
    "B.F. Skinner": "Skinner is associated with operant conditioning.",
    Pavlov: "Pavlov is associated with classical conditioning."
  },
  hint: "Learning with support."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Scaffolding in education means:",
  options: [
    "Temporary support to help a learner perform a task",
    "Building school walls",
    "Punishing mistakes",
    "Removing all guidance"
  ],
  answer: "Temporary support to help a learner perform a task",
  explanation:
    "Scaffolding provides structured support that is gradually reduced as the learner becomes more independent.",
  wrongExplanations: {
    "Building school walls": "This is physical scaffolding, not educational scaffolding.",
    "Punishing mistakes": "Scaffolding is supportive.",
    "Removing all guidance": "It begins with guidance."
  },
  hint: "Support first, independence later."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Project method emphasises:",
  options: [
    "Learning by doing",
    "Passive listening only",
    "Memorisation only",
    "No student activity"
  ],
  answer: "Learning by doing",
  explanation:
    "The project method engages learners in meaningful activities and practical problem solving.",
  wrongExplanations: {
    "Passive listening only": "Projects require active participation.",
    "Memorisation only": "Projects emphasise application and experience.",
    "No student activity": "Student activity is central."
  },
  hint: "Do and learn."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Diagnostic assessment is mainly used to:",
  options: [
    "Identify learning difficulties",
    "Award final degrees only",
    "Punish students",
    "Replace teaching"
  ],
  answer: "Identify learning difficulties",
  explanation:
    "Diagnostic assessment helps identify specific strengths, weaknesses and learning problems.",
  wrongExplanations: {
    "Award final degrees only": "That is not its main purpose.",
    "Punish students": "Assessment should inform support.",
    "Replace teaching": "Assessment complements teaching."
  },
  hint: "Diagnose the problem."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "A barrier-free learning environment aims to:",
  options: [
    "Improve accessibility for all learners",
    "Exclude students with disabilities",
    "Reduce participation",
    "Remove teaching materials"
  ],
  answer: "Improve accessibility for all learners",
  explanation:
    "Barrier-free environments reduce physical, communication and instructional obstacles.",
  wrongExplanations: {
    "Exclude students with disabilities": "The goal is inclusion.",
    "Reduce participation": "Accessibility aims to increase participation.",
    "Remove teaching materials": "Materials should be adapted, not removed."
  },
  hint: "Accessibility."
},

{
  subject: "English",
  category: "Grammar",
  question: "Identify the adverb in the sentence: 'She speaks softly.'",
  options: ["Softly", "She", "Speaks", "None"],
  answer: "Softly",
  explanation:
    "Softly modifies the verb speaks and tells us how the action is performed.",
  wrongExplanations: {
    She: "She is a pronoun.",
    Speaks: "Speaks is a verb.",
    None: "The sentence clearly contains an adverb."
  },
  hint: "How does she speak?"
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct article: 'He is ___ honest man.'",
  options: ["an", "a", "the only", "no article"],
  answer: "an",
  explanation:
    "Honest begins with a vowel sound because the h is silent, so 'an' is used.",
  wrongExplanations: {
    a: "Article choice depends on sound, not spelling alone.",
    "the only": "The definite article is not required here.",
    "no article": "An article is required before singular countable noun 'man'."
  },
  hint: "Listen to the first sound."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct preposition: 'She is interested ___ politics.'",
  options: ["in", "on", "at", "by"],
  answer: "in",
  explanation:
    "The standard expression is 'interested in'.",
  wrongExplanations: {
    on: "Interested on is not standard here.",
    at: "Interested at is incorrect in this expression.",
    by: "Interested by can occur in limited contexts, but 'interested in' is the standard collocation."
  },
  hint: "Common collocation."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'significant'.",
  options: ["Important", "Tiny", "Useless", "Weak"],
  answer: "Important",
  explanation:
    "Significant means important, meaningful or noteworthy.",
  wrongExplanations: {
    Tiny: "Tiny refers to size.",
    Useless: "Useless is nearly opposite in value.",
    Weak: "Weak refers to strength."
  },
  hint: "Meaningful."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'complex'.",
  options: ["Simple", "Difficult", "Complicated", "Detailed"],
  answer: "Simple",
  explanation:
    "Simple is the opposite of complex.",
  wrongExplanations: {
    Difficult: "Difficult can be similar in meaning to complex.",
    Complicated: "Complicated is a synonym of complex.",
    Detailed: "Detailed does not mean the opposite."
  },
  hint: "Easy to understand."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 1, 2, 4, 8, 16, ?",
  options: ["24", "30", "32", "36"],
  answer: "32",
  explanation:
    "Each number is doubled, so 16 × 2 = 32.",
  wrongExplanations: {
    "24": "This does not follow doubling.",
    "30": "This does not follow the pattern.",
    "36": "This is too large."
  },
  hint: "Multiply by 2."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "If SOUTH is written as TPVUI, then NORTH becomes:",
  options: ["OPSUI", "OPSTI", "NPSUI", "OQTUI"],
  answer: "OPSUI",
  explanation:
    "Each letter is shifted one place forward: N→O, O→P, R→S, T→U, H→I.",
  wrongExplanations: {
    OPSTI: "The fourth letter is shifted incorrectly.",
    NPSUI: "The first letter was not shifted.",
    OQTUI: "The second and third letters do not follow the rule."
  },
  hint: "Move every letter forward by one."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 12.5% of 80?",
  options: ["5", "10", "15", "20"],
  answer: "10",
  explanation:
    "12.5% equals one-eighth, and one-eighth of 80 is 10.",
  wrongExplanations: {
    "5": "This is 6.25% of 80.",
    "15": "This is too high.",
    "20": "This is 25% of 80."
  },
  hint: "12.5% = 1/8."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A train travels 120 km in 2 hours. What is its average speed?",
  options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
  answer: "60 km/h",
  explanation:
    "Average speed = distance ÷ time = 120 ÷ 2 = 60 km/h.",
  wrongExplanations: {
    "40 km/h": "This would cover only 80 km in 2 hours.",
    "50 km/h": "This would cover 100 km.",
    "80 km/h": "This would cover 160 km."
  },
  hint: "Distance divided by time."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "A college has 200 students. If 120 are undergraduate students, how many are postgraduate students?",
  options: ["60", "70", "80", "90"],
  answer: "80",
  explanation:
    "Postgraduate students = 200 - 120 = 80.",
  wrongExplanations: {
    "60": "This would total only 180 students.",
    "70": "This would total 190.",
    "90": "This would total 210."
  },
  hint: "Subtract."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Which of the following is cloud storage?",
  options: ["Google Drive", "Keyboard", "CPU", "Printer"],
  answer: "Google Drive",
  explanation:
    "Google Drive stores files on remote servers accessible through the internet.",
  wrongExplanations: {
    Keyboard: "A keyboard is an input device.",
    CPU: "CPU is the main processing unit.",
    Printer: "A printer is an output device."
  },
  hint: "Online file storage."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Phishing is mainly an attempt to:",
  options: [
    "Trick users into revealing sensitive information",
    "Improve internet speed",
    "Repair computer hardware",
    "Compress files"
  ],
  answer: "Trick users into revealing sensitive information",
  explanation:
    "Phishing uses deceptive messages or websites to steal passwords, banking details or other sensitive information.",
  wrongExplanations: {
    "Improve internet speed": "Phishing is a cyber threat, not a performance tool.",
    "Repair computer hardware": "Hardware repair is unrelated.",
    "Compress files": "Compression reduces file size."
  },
  hint: "Fake links and login pages."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The International Court of Justice is located in:",
  options: ["The Hague", "Geneva", "Paris", "New York"],
  answer: "The Hague",
  explanation:
    "The International Court of Justice is based at the Peace Palace in The Hague, Netherlands.",
  wrongExplanations: {
    Geneva: "Geneva hosts many international organisations.",
    Paris: "UNESCO is based in Paris.",
    "New York": "The main UN headquarters is in New York."
  },
  hint: "Netherlands."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The World Bank is headquartered in:",
  options: ["Washington, D.C.", "Geneva", "Paris", "Rome"],
  answer: "Washington, D.C.",
  explanation:
    "The World Bank Group is headquartered in Washington, D.C.",
  wrongExplanations: {
    Geneva: "WHO is headquartered in Geneva.",
    Paris: "UNESCO is headquartered in Paris.",
    Rome: "FAO is headquartered in Rome."
  },
  hint: "Same city as IMF."
},
{
  subject: "History",
  category: "Ancient India",
  question: "The Ajanta caves are especially famous for:",
  options: ["Buddhist paintings", "Mughal gardens", "Sultanate forts", "Maratha palaces"],
  answer: "Buddhist paintings",
  explanation:
    "The Ajanta caves are especially famous for their Buddhist murals, sculptures and monastic architecture.",
  wrongExplanations: {
    "Mughal gardens": "Ajanta predates the Mughal period.",
    "Sultanate forts": "Ajanta is not associated with Delhi Sultanate military architecture.",
    "Maratha palaces": "Ajanta is much older than the Maratha period."
  },
  hint: "Think Buddhist cave art."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Sanchi Stupa is closely associated with:",
  options: ["Buddhism", "Jainism only", "Sikhism", "Islam"],
  answer: "Buddhism",
  explanation:
    "The Great Stupa at Sanchi is one of the most important surviving monuments of Buddhist architecture in India.",
  wrongExplanations: {
    "Jainism only": "Sanchi is primarily associated with Buddhism.",
    Sikhism: "Sikhism developed many centuries later.",
    Islam: "Sanchi predates Islamic rule in India."
  },
  hint: "Stupa."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who established the Sur Empire in North India?",
  options: ["Sher Shah Suri", "Babur", "Humayun", "Akbar"],
  answer: "Sher Shah Suri",
  explanation:
    "Sher Shah Suri defeated Humayun and established the Sur Empire.",
  wrongExplanations: {
    Babur: "Babur founded the Mughal Empire.",
    Humayun: "Humayun was temporarily displaced by Sher Shah.",
    Akbar: "Akbar restored and expanded Mughal power later."
  },
  hint: "Grand Trunk Road reforms."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The construction of the Taj Mahal was commissioned by:",
  options: ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"],
  answer: "Shah Jahan",
  explanation:
    "Shah Jahan commissioned the Taj Mahal in memory of Mumtaz Mahal.",
  wrongExplanations: {
    Akbar: "Akbar is associated with Fatehpur Sikri and other works.",
    Aurangzeb: "Aurangzeb ruled after Shah Jahan.",
    Jahangir: "Jahangir was Shah Jahan's father."
  },
  hint: "Mumtaz Mahal."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Swadeshi Movement emerged mainly in response to:",
  options: ["Partition of Bengal", "Rowlatt Act", "Simon Commission", "Quit India Movement"],
  answer: "Partition of Bengal",
  explanation:
    "The Swadeshi Movement grew in response to the Partition of Bengal in 1905.",
  wrongExplanations: {
    "Rowlatt Act": "The Rowlatt Act was passed in 1919.",
    "Simon Commission": "The Simon Commission arrived in 1928.",
    "Quit India Movement": "The Quit India Movement began in 1942."
  },
  hint: "1905."
},

{
  subject: "History",
  category: "Modern India",
  question: "The slogan 'Do or Die' is associated with:",
  options: ["Quit India Movement", "Non-Cooperation Movement", "Swadeshi Movement", "Home Rule Movement"],
  answer: "Quit India Movement",
  explanation:
    "Mahatma Gandhi gave the slogan 'Do or Die' during the Quit India Movement of 1942.",
  wrongExplanations: {
    "Non-Cooperation Movement": "This movement began in 1920.",
    "Swadeshi Movement": "This movement followed the Partition of Bengal.",
    "Home Rule Movement": "The Home Rule Movement was associated with Tilak and Annie Besant."
  },
  hint: "1942."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The longest day in the Northern Hemisphere occurs around:",
  options: ["21 June", "21 December", "21 March", "23 September"],
  answer: "21 June",
  explanation:
    "Around 21 June, the Northern Hemisphere experiences the summer solstice and its longest day.",
  wrongExplanations: {
    "21 December": "This is the winter solstice in the Northern Hemisphere.",
    "21 March": "This is near the spring equinox.",
    "23 September": "This is near the autumn equinox."
  },
  hint: "Summer solstice."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The Tropic of Cancer lies at approximately:",
  options: ["23.5° N", "23.5° S", "66.5° N", "0°"],
  answer: "23.5° N",
  explanation:
    "The Tropic of Cancer lies at about 23.5 degrees north latitude.",
  wrongExplanations: {
    "23.5° S": "That is the Tropic of Capricorn.",
    "66.5° N": "That is the Arctic Circle.",
    "0°": "That is the Equator."
  },
  hint: "Northern tropical line."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Lines joining places of equal atmospheric pressure are called:",
  options: ["Isobars", "Isotherms", "Isohyets", "Contours"],
  answer: "Isobars",
  explanation:
    "Isobars join points having equal atmospheric pressure.",
  wrongExplanations: {
    Isotherms: "Isotherms join places of equal temperature.",
    Isohyets: "Isohyets join places of equal rainfall.",
    Contours: "Contours join places of equal elevation."
  },
  hint: "Bar = pressure."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Which type of rock forms from cooling and solidification of magma or lava?",
  options: ["Igneous", "Sedimentary", "Metamorphic", "Organic only"],
  answer: "Igneous",
  explanation:
    "Igneous rocks form when molten material cools and solidifies.",
  wrongExplanations: {
    Sedimentary: "Sedimentary rocks form mainly through deposition and compaction.",
    Metamorphic: "Metamorphic rocks form when existing rocks are altered by heat and pressure.",
    "Organic only": "This is not a major rock category."
  },
  hint: "Fire-origin rocks."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A megacity is generally understood as a city with a population of more than:",
  options: ["10 million", "1 million", "500,000", "100 million"],
  answer: "10 million",
  explanation:
    "The common international definition of a megacity is an urban agglomeration with more than 10 million people.",
  wrongExplanations: {
    "1 million": "This is too low for the usual megacity threshold.",
    "500,000": "This is well below the threshold.",
    "100 million": "This is far above the standard definition."
  },
  hint: "Eight-digit population."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Which activity belongs to the tertiary sector?",
  options: ["Banking", "Mining", "Agriculture", "Manufacturing"],
  answer: "Banking",
  explanation:
    "Banking is a service activity and belongs to the tertiary sector.",
  wrongExplanations: {
    Mining: "Mining is a primary activity.",
    Agriculture: "Agriculture is a primary activity.",
    Manufacturing: "Manufacturing is a secondary activity."
  },
  hint: "Service sector."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A normal good is one for which demand generally:",
  options: [
    "Rises when consumer income rises",
    "Falls whenever income rises",
    "Never changes with income",
    "Is always zero"
  ],
  answer: "Rises when consumer income rises",
  explanation:
    "For a normal good, demand generally increases as consumer income increases.",
  wrongExplanations: {
    "Falls whenever income rises": "That behaviour is associated with inferior goods.",
    "Never changes with income": "Income can influence demand for normal goods.",
    "Is always zero": "This is incorrect."
  },
  hint: "Higher income, more demand."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "An inferior good is one whose demand generally:",
  options: [
    "Falls as income rises",
    "Always rises as income rises",
    "Never changes",
    "Depends only on government taxes"
  ],
  answer: "Falls as income rises",
  explanation:
    "Consumers often reduce demand for inferior goods when their income increases and they switch to preferred alternatives.",
  wrongExplanations: {
    "Always rises as income rises": "That is typical of normal goods.",
    "Never changes": "Income affects demand for inferior goods.",
    "Depends only on government taxes": "Taxes are not the defining factor."
  },
  hint: "Income up, demand down."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Opportunity cost arises because:",
  options: [
    "Resources are scarce and choices must be made",
    "Resources are unlimited",
    "Every good is free",
    "Consumers have no preferences"
  ],
  answer: "Resources are scarce and choices must be made",
  explanation:
    "Scarcity forces individuals and societies to choose among alternative uses of resources.",
  wrongExplanations: {
    "Resources are unlimited": "If resources were unlimited, opportunity cost would lose its basic meaning.",
    "Every good is free": "Goods generally use scarce resources.",
    "Consumers have no preferences": "Preferences help determine choices but scarcity is the fundamental cause."
  },
  hint: "Scarcity."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "The repo rate in India is the rate at which:",
  options: [
    "RBI lends short-term funds to commercial banks",
    "Commercial banks lend to RBI only",
    "Citizens borrow directly from Parliament",
    "The government taxes imports"
  ],
  answer: "RBI lends short-term funds to commercial banks",
  explanation:
    "The repo rate is the policy rate at which the Reserve Bank of India lends short-term funds to banks against eligible securities.",
  wrongExplanations: {
    "Commercial banks lend to RBI only": "That is not the repo-rate definition.",
    "Citizens borrow directly from Parliament": "Parliament is not a lending institution.",
    "The government taxes imports": "That concerns customs duties."
  },
  hint: "RBI to banks."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "A budget deficit occurs when:",
  options: [
    "Government expenditure exceeds government revenue",
    "Revenue exceeds expenditure",
    "Exports exceed imports",
    "Saving exceeds investment"
  ],
  answer: "Government expenditure exceeds government revenue",
  explanation:
    "A budget deficit exists when government spending is greater than its revenue during a period.",
  wrongExplanations: {
    "Revenue exceeds expenditure": "That would produce a budget surplus.",
    "Exports exceed imports": "That refers to a trade surplus.",
    "Saving exceeds investment": "That is a different macroeconomic relationship."
  },
  hint: "Government spends more than it receives."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Economic growth usually refers to:",
  options: [
    "Increase in real output over time",
    "Only higher prices",
    "Only population growth",
    "Only higher taxes"
  ],
  answer: "Increase in real output over time",
  explanation:
    "Economic growth generally refers to an increase in real national output or real GDP over time.",
  wrongExplanations: {
    "Only higher prices": "Higher prices can occur without real growth.",
    "Only population growth": "Population and output growth are separate.",
    "Only higher taxes": "Tax increases do not define economic growth."
  },
  hint: "Real GDP."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Sustainable development means development that:",
  options: [
    "Meets present needs without severely compromising future generations",
    "Uses all resources immediately",
    "Ignores environmental costs",
    "Stops all economic activity"
  ],
  answer: "Meets present needs without severely compromising future generations",
  explanation:
    "Sustainable development seeks to balance present development with long-term environmental and social needs.",
  wrongExplanations: {
    "Uses all resources immediately": "This is unsustainable.",
    "Ignores environmental costs": "Sustainability includes environmental considerations.",
    "Stops all economic activity": "Sustainable development does not mean ending development."
  },
  hint: "Present and future."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Ethnocentrism means:",
  options: [
    "Judging other cultures by the standards of one's own culture",
    "Accepting every culture as identical",
    "Studying only economics",
    "Rejecting all social norms"
  ],
  answer: "Judging other cultures by the standards of one's own culture",
  explanation:
    "Ethnocentrism involves viewing one's own cultural values as the standard for evaluating others.",
  wrongExplanations: {
    "Accepting every culture as identical": "This does not define ethnocentrism.",
    "Studying only economics": "Ethnocentrism is a cultural concept.",
    "Rejecting all social norms": "This is unrelated."
  },
  hint: "Own culture at the centre."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Cultural relativism encourages people to:",
  options: [
    "Understand cultural practices within their own context",
    "Judge every culture only by one's own standards",
    "Reject cultural differences",
    "Assume all societies are identical"
  ],
  answer: "Understand cultural practices within their own context",
  explanation:
    "Cultural relativism encourages interpretation of beliefs and practices in relation to their cultural context.",
  wrongExplanations: {
    "Judge every culture only by one's own standards": "That is closer to ethnocentrism.",
    "Reject cultural differences": "Cultural relativism recognises differences.",
    "Assume all societies are identical": "Societies are culturally diverse."
  },
  hint: "Context matters."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Kinship refers to:",
  options: [
    "Social relationships based on descent, marriage or recognised family ties",
    "Only economic contracts",
    "Only political parties",
    "Only workplace relations"
  ],
  answer: "Social relationships based on descent, marriage or recognised family ties",
  explanation:
    "Kinship systems organise relationships based on descent, marriage and culturally recognised family connections.",
  wrongExplanations: {
    "Only economic contracts": "Kinship is broader than contractual exchange.",
    "Only political parties": "Political parties are political organisations.",
    "Only workplace relations": "Work relations are not the main basis of kinship."
  },
  hint: "Family ties."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Horizontal social mobility refers to:",
  options: [
    "Movement between positions of roughly similar status",
    "Movement to a much higher social class only",
    "Movement to a lower class only",
    "Physical migration only"
  ],
  answer: "Movement between positions of roughly similar status",
  explanation:
    "Horizontal mobility involves a change in social position without a major change in rank or status.",
  wrongExplanations: {
    "Movement to a much higher social class only": "That is upward vertical mobility.",
    "Movement to a lower class only": "That is downward vertical mobility.",
    "Physical migration only": "Geographical mobility is distinct."
  },
  hint: "Same level."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Secularisation broadly refers to:",
  options: [
    "Declining influence of religious institutions in some areas of social life",
    "Complete disappearance of religion everywhere",
    "Increase in agricultural production",
    "Only growth of cities"
  ],
  answer: "Declining influence of religious institutions in some areas of social life",
  explanation:
    "Secularisation generally refers to reduced religious authority or differentiation between religious and other social institutions.",
  wrongExplanations: {
    "Complete disappearance of religion everywhere": "Secularisation does not necessarily mean religion vanishes.",
    "Increase in agricultural production": "This is unrelated.",
    "Only growth of cities": "Urbanisation and secularisation are distinct processes."
  },
  hint: "Religion and institutions."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Education as a process of socialisation means that it helps learners:",
  options: [
    "Acquire social values and behaviour",
    "Avoid all social interaction",
    "Reject all cultural knowledge",
    "Learn only mathematics"
  ],
  answer: "Acquire social values and behaviour",
  explanation:
    "Education helps transmit social norms, values, knowledge and expected patterns of behaviour.",
  wrongExplanations: {
    "Avoid all social interaction": "Education often increases social interaction.",
    "Reject all cultural knowledge": "Education frequently transmits cultural knowledge.",
    "Learn only mathematics": "Education is much broader."
  },
  hint: "Society teaches through education."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Positive reinforcement means:",
  options: [
    "Adding a desirable consequence to increase behaviour",
    "Always punishing a learner",
    "Removing all feedback",
    "Ignoring behaviour completely"
  ],
  answer: "Adding a desirable consequence to increase behaviour",
  explanation:
    "Positive reinforcement strengthens behaviour by presenting a rewarding or desirable consequence.",
  wrongExplanations: {
    "Always punishing a learner": "Punishment aims to reduce behaviour.",
    "Removing all feedback": "Reinforcement depends on consequences.",
    "Ignoring behaviour completely": "Ignoring is not positive reinforcement."
  },
  hint: "Reward increases behaviour."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "The cognitive domain in Bloom's taxonomy is mainly concerned with:",
  options: ["Thinking and knowledge", "Physical movement only", "Emotions only", "Nutrition"],
  answer: "Thinking and knowledge",
  explanation:
    "The cognitive domain concerns intellectual abilities such as remembering, understanding, applying and analysing.",
  wrongExplanations: {
    "Physical movement only": "That belongs more to the psychomotor domain.",
    "Emotions only": "That is associated with the affective domain.",
    Nutrition: "Nutrition is unrelated to Bloom's domains."
  },
  hint: "Thinking."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Collaborative learning involves:",
  options: [
    "Students working together toward learning goals",
    "Students never interacting",
    "Only teacher monologue",
    "Only individual memorisation"
  ],
  answer: "Students working together toward learning goals",
  explanation:
    "Collaborative learning uses group interaction and shared responsibility for learning.",
  wrongExplanations: {
    "Students never interacting": "Interaction is central.",
    "Only teacher monologue": "That is teacher-centred instruction.",
    "Only individual memorisation": "Collaboration involves shared activity."
  },
  hint: "Learning together."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Reliability of a test refers mainly to:",
  options: [
    "Consistency of measurement",
    "How attractive the question paper looks",
    "How long the test is only",
    "Whether all students pass"
  ],
  answer: "Consistency of measurement",
  explanation:
    "A reliable test produces reasonably consistent results under comparable conditions.",
  wrongExplanations: {
    "How attractive the question paper looks": "Appearance does not define reliability.",
    "How long the test is only": "Length can influence reliability but does not define it.",
    "Whether all students pass": "Pass rates do not measure reliability."
  },
  hint: "Consistency."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Validity of a test means:",
  options: [
    "It measures what it is intended to measure",
    "It always gives high marks",
    "It is very long",
    "It has colourful pages"
  ],
  answer: "It measures what it is intended to measure",
  explanation:
    "Validity concerns whether an assessment actually measures the intended knowledge, skill or construct.",
  wrongExplanations: {
    "It always gives high marks": "High scores do not prove validity.",
    "It is very long": "Length is not validity.",
    "It has colourful pages": "Visual design does not determine validity."
  },
  hint: "Measures the right thing."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct sentence:",
  options: [
    "They have finished their work.",
    "They has finished their work.",
    "They have finish their work.",
    "They finished has their work."
  ],
  answer: "They have finished their work.",
  explanation:
    "The present perfect with plural subject 'they' uses 'have' plus the past participle 'finished'.",
  wrongExplanations: {
    "They has finished their work.": "Use 'have' with 'they'.",
    "They have finish their work.": "The past participle 'finished' is required.",
    "They finished has their work.": "The word order is incorrect."
  },
  hint: "Have + past participle."
},

{
  subject: "English",
  category: "Grammar",
  question: "Identify the conjunction in: 'I stayed home because it was raining.'",
  options: ["because", "stayed", "home", "raining"],
  answer: "because",
  explanation:
    "'Because' joins the main clause with the reason clause.",
  wrongExplanations: {
    stayed: "'Stayed' is a verb.",
    home: "'Home' functions as a noun or adverb depending on context.",
    raining: "'Raining' is part of the verb phrase."
  },
  hint: "Joining word."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'obtain'.",
  options: ["Acquire", "Lose", "Reject", "Destroy"],
  answer: "Acquire",
  explanation:
    "Obtain means to get or acquire something.",
  wrongExplanations: {
    Lose: "Lose is nearly opposite.",
    Reject: "Reject means refuse.",
    Destroy: "Destroy means damage completely."
  },
  hint: "Get."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'temporary'.",
  options: ["Permanent", "Brief", "Short", "Limited"],
  answer: "Permanent",
  explanation:
    "Permanent means lasting, while temporary means for a limited period.",
  wrongExplanations: {
    Brief: "Brief is similar to temporary.",
    Short: "Short can also imply limited duration.",
    Limited: "Limited is closer to temporary."
  },
  hint: "Lasting."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "An inference is:",
  options: [
    "A conclusion drawn from evidence in the text",
    "A direct quotation only",
    "A spelling mistake",
    "The title of every passage"
  ],
  answer: "A conclusion drawn from evidence in the text",
  explanation:
    "An inference is a reasonable conclusion based on clues and information provided in a text.",
  wrongExplanations: {
    "A direct quotation only": "A quotation is explicit information.",
    "A spelling mistake": "This is unrelated.",
    "The title of every passage": "A title may guide interpretation but is not an inference."
  },
  hint: "Read between the lines."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 7, 14, 21, 28, ?",
  options: ["32", "35", "36", "42"],
  answer: "35",
  explanation:
    "The sequence increases by 7 each time.",
  wrongExplanations: {
    "32": "This adds only 4.",
    "36": "This adds 8.",
    "42": "42 would be the term after 35."
  },
  hint: "Multiples of 7."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Which word does not belong: Square, Triangle, Circle, Banana?",
  options: ["Square", "Triangle", "Circle", "Banana"],
  answer: "Banana",
  explanation:
    "Square, triangle and circle are geometric shapes, while banana is a fruit.",
  wrongExplanations: {
    Square: "Square is a geometric shape.",
    Triangle: "Triangle is a geometric shape.",
    Circle: "Circle is a geometric shape."
  },
  hint: "Three are shapes."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is the ratio 20:40 in simplest form?",
  options: ["1:2", "2:1", "1:4", "2:3"],
  answer: "1:2",
  explanation:
    "Dividing both terms by 20 gives 1:2.",
  wrongExplanations: {
    "2:1": "This reverses the ratio.",
    "1:4": "This over-reduces the second term.",
    "2:3": "This does not preserve the ratio."
  },
  hint: "Divide both by 20."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "If a book costs ₹240 after a 20% discount, what was the original price?",
  options: ["₹250", "₹280", "₹300", "₹320"],
  answer: "₹300",
  explanation:
    "After a 20% discount, the price is 80% of original. Original = 240 ÷ 0.8 = ₹300.",
  wrongExplanations: {
    "₹250": "20% off ₹250 gives ₹200.",
    "₹280": "20% off ₹280 gives ₹224.",
    "₹320": "20% off ₹320 gives ₹256."
  },
  hint: "₹240 is 80%."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "A survey has 150 respondents. If 90 support an option, how many do not support it?",
  options: ["50", "60", "70", "90"],
  answer: "60",
  explanation:
    "150 - 90 = 60 respondents.",
  wrongExplanations: {
    "50": "This would total 140.",
    "70": "This would total 160.",
    "90": "This assumes equal groups."
  },
  hint: "Total minus supporters."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Two-factor authentication improves security by:",
  options: [
    "Requiring more than one form of verification",
    "Removing passwords completely in every case",
    "Making every website public",
    "Disabling encryption"
  ],
  answer: "Requiring more than one form of verification",
  explanation:
    "Two-factor authentication uses two different verification factors, making account compromise more difficult.",
  wrongExplanations: {
    "Removing passwords completely in every case": "2FA may still use a password as one factor.",
    "Making every website public": "This would reduce security.",
    "Disabling encryption": "Encryption and 2FA are separate security measures."
  },
  hint: "Password plus another factor."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "A strong password should generally:",
  options: [
    "Be difficult to guess and unique",
    "Use only the word password",
    "Be shared with friends",
    "Be identical for every account"
  ],
  answer: "Be difficult to guess and unique",
  explanation:
    "Strong unique passwords reduce the risk that one compromised account will expose others.",
  wrongExplanations: {
    "Use only the word password": "This is extremely weak.",
    "Be shared with friends": "Passwords should remain private.",
    "Be identical for every account": "Password reuse increases risk."
  },
  hint: "Unique and hard to guess."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The Food and Agriculture Organization is headquartered in:",
  options: ["Rome", "Paris", "Geneva", "New York"],
  answer: "Rome",
  explanation:
    "The Food and Agriculture Organization of the United Nations is headquartered in Rome, Italy.",
  wrongExplanations: {
    Paris: "UNESCO is headquartered in Paris.",
    Geneva: "WHO is headquartered in Geneva.",
    "New York": "The principal UN headquarters is in New York."
  },
  hint: "Italy."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The International Monetary Fund is headquartered in:",
  options: ["Washington, D.C.", "Geneva", "Vienna", "The Hague"],
  answer: "Washington, D.C.",
  explanation:
    "The International Monetary Fund is headquartered in Washington, D.C.",
  wrongExplanations: {
    Geneva: "Many international bodies are based in Geneva, but not the IMF.",
    Vienna: "Vienna hosts several UN organisations.",
    "The Hague": "The International Court of Justice is based in The Hague."
  },
  hint: "Same city as the World Bank."
},
{
  subject: "History",
  category: "Ancient India",
  question: "The Upanishads are mainly concerned with:",
  options: [
    "Philosophical ideas about reality and the self",
    "Military administration only",
    "Trade routes only",
    "Court poetry only"
  ],
  answer: "Philosophical ideas about reality and the self",
  explanation:
    "The Upanishads contain philosophical discussions on concepts such as Brahman, Atman, knowledge and liberation.",
  wrongExplanations: {
    "Military administration only":
      "The Upanishads are philosophical and spiritual texts.",
    "Trade routes only":
      "Trade is not their main concern.",
    "Court poetry only":
      "They are not primarily court literature."
  },
  hint: "Think Atman and Brahman."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The capital of the Mauryan Empire was:",
  options: ["Pataliputra", "Taxila", "Ujjain", "Mathura"],
  answer: "Pataliputra",
  explanation:
    "Pataliputra served as the main imperial capital of the Mauryan Empire.",
  wrongExplanations: {
    Taxila:
      "Taxila was an important centre but not the main Mauryan capital.",
    Ujjain:
      "Ujjain was an important city and provincial centre.",
    Mathura:
      "Mathura was important historically but was not the Mauryan imperial capital."
  },
  hint: "Present-day Patna region."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who introduced the token currency experiment in the Delhi Sultanate?",
  options: [
    "Muhammad bin Tughlaq",
    "Alauddin Khalji",
    "Iltutmish",
    "Balban"
  ],
  answer: "Muhammad bin Tughlaq",
  explanation:
    "Muhammad bin Tughlaq experimented with token currency using base metals.",
  wrongExplanations: {
    "Alauddin Khalji":
      "Alauddin Khalji is better known for market controls.",
    Iltutmish:
      "Iltutmish consolidated the early Delhi Sultanate.",
    Balban:
      "Balban is associated with a strong monarchy."
  },
  hint: "Famous for ambitious experiments."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Mughal revenue system associated with Todar Mal is known as:",
  options: ["Zabt", "Iqta", "Jagir only", "Ryotwari"],
  answer: "Zabt",
  explanation:
    "The zabt system was an important land revenue arrangement associated with Todar Mal under Akbar.",
  wrongExplanations: {
    Iqta:
      "Iqta was associated mainly with the Delhi Sultanate.",
    "Jagir only":
      "Jagirs were revenue assignments, but the assessment system linked with Todar Mal was zabt.",
    Ryotwari:
      "Ryotwari was introduced under British rule."
  },
  hint: "Akbar's revenue administration."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Home Rule Movement in India was associated with:",
  options: [
    "Bal Gangadhar Tilak and Annie Besant",
    "Gandhi and Ambedkar",
    "Nehru and Patel",
    "Bose and Bhagat Singh"
  ],
  answer: "Bal Gangadhar Tilak and Annie Besant",
  explanation:
    "Tilak and Annie Besant launched Home Rule Leagues to demand greater self-government.",
  wrongExplanations: {
    "Gandhi and Ambedkar":
      "They are associated with other major political and social struggles.",
    "Nehru and Patel":
      "They were important Congress leaders but not founders of the Home Rule Leagues.",
    "Bose and Bhagat Singh":
      "They belonged to different strands of nationalist politics."
  },
  hint: "1916."
},

{
  subject: "History",
  category: "World History",
  question: "The Treaty of Versailles was signed after:",
  options: [
    "First World War",
    "Second World War",
    "French Revolution",
    "Russian Revolution"
  ],
  answer: "First World War",
  explanation:
    "The Treaty of Versailles was signed in 1919 as part of the post-First World War peace settlement.",
  wrongExplanations: {
    "Second World War":
      "The post-Second World War settlement was different.",
    "French Revolution":
      "The French Revolution occurred more than a century earlier.",
    "Russian Revolution":
      "The Russian Revolution occurred during the First World War."
  },
  hint: "1919."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Which process breaks rocks into smaller pieces without transporting them?",
  options: ["Weathering", "Erosion", "Deposition", "Transportation"],
  answer: "Weathering",
  explanation:
    "Weathering breaks down rocks in place through physical, chemical or biological processes.",
  wrongExplanations: {
    Erosion:
      "Erosion involves removal and movement of material.",
    Deposition:
      "Deposition occurs when transported material is laid down.",
    Transportation:
      "Transportation moves weathered or eroded material."
  },
  hint: "Breakdown in place."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Which river landform is created by deposition at a river mouth?",
  options: ["Delta", "Waterfall", "Gorge", "Meander only"],
  answer: "Delta",
  explanation:
    "A delta forms when a river deposits sediment near its mouth.",
  wrongExplanations: {
    Waterfall:
      "Waterfalls are erosional features.",
    Gorge:
      "Gorges are formed mainly by vertical erosion.",
    "Meander only":
      "Meanders form through erosion and deposition along river bends."
  },
  hint: "Nile and Ganga-Brahmaputra examples."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The process by which water changes from liquid to vapour is:",
  options: ["Evaporation", "Condensation", "Precipitation", "Infiltration"],
  answer: "Evaporation",
  explanation:
    "Evaporation converts liquid water into water vapour.",
  wrongExplanations: {
    Condensation:
      "Condensation changes vapour into liquid.",
    Precipitation:
      "Precipitation is water falling from the atmosphere.",
    Infiltration:
      "Infiltration is movement of water into soil."
  },
  hint: "Liquid to gas."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Sex ratio generally refers to:",
  options: [
    "Numerical relationship between males and females",
    "Number of births only",
    "Number of workers only",
    "Number of cities per state"
  ],
  answer: "Numerical relationship between males and females",
  explanation:
    "Sex ratio expresses the numerical relationship between male and female populations.",
  wrongExplanations: {
    "Number of births only":
      "Birth rate is a different demographic measure.",
    "Number of workers only":
      "This refers more to labour-force statistics.",
    "Number of cities per state":
      "This is unrelated."
  },
  hint: "Male-female population balance."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "An industry that uses large quantities of raw materials may prefer to locate near:",
  options: [
    "Sources of raw materials",
    "Only tourist attractions",
    "Only political capitals",
    "Only universities"
  ],
  answer: "Sources of raw materials",
  explanation:
    "Locating near bulky raw materials can reduce transport costs.",
  wrongExplanations: {
    "Only tourist attractions":
      "Tourism is not the key factor for many heavy industries.",
    "Only political capitals":
      "Capital-city location is not always important.",
    "Only universities":
      "Universities may matter for knowledge industries, but not necessarily raw-material industries."
  },
  hint: "Transport cost."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Which energy source is renewable?",
  options: ["Solar energy", "Coal", "Petroleum", "Natural gas"],
  answer: "Solar energy",
  explanation:
    "Solar energy is renewable because sunlight is naturally replenished.",
  wrongExplanations: {
    Coal:
      "Coal is a finite fossil fuel.",
    Petroleum:
      "Petroleum is non-renewable.",
    "Natural gas":
      "Natural gas is a fossil fuel."
  },
  hint: "Sun."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "When total revenue equals total cost, a firm is at:",
  options: [
    "Break-even point",
    "Maximum loss automatically",
    "Perfect competition only",
    "Zero production only"
  ],
  answer: "Break-even point",
  explanation:
    "At the break-even point, total revenue equals total cost, so economic profit is zero.",
  wrongExplanations: {
    "Maximum loss automatically":
      "Break-even means neither profit nor loss.",
    "Perfect competition only":
      "Break-even can occur under different market structures.",
    "Zero production only":
      "A firm can break even at positive output."
  },
  hint: "Revenue = cost."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Average cost is calculated as:",
  options: [
    "Total cost divided by output",
    "Total revenue divided by output",
    "Price multiplied by output",
    "Fixed cost minus variable cost"
  ],
  answer: "Total cost divided by output",
  explanation:
    "Average cost equals total cost divided by quantity produced.",
  wrongExplanations: {
    "Total revenue divided by output":
      "That gives average revenue.",
    "Price multiplied by output":
      "That gives total revenue.",
    "Fixed cost minus variable cost":
      "That is not average cost."
  },
  hint: "Cost per unit."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "The balance of trade is the difference between:",
  options: [
    "Exports and imports of goods",
    "Government revenue and expenditure",
    "Savings and investment only",
    "Births and deaths"
  ],
  answer: "Exports and imports of goods",
  explanation:
    "The balance of trade compares the value of a country's merchandise exports and imports.",
  wrongExplanations: {
    "Government revenue and expenditure":
      "That concerns the government budget.",
    "Savings and investment only":
      "That is a macroeconomic accounting relationship.",
    "Births and deaths":
      "Those are demographic variables."
  },
  hint: "Trade."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "A trade surplus occurs when:",
  options: [
    "Exports exceed imports",
    "Imports exceed exports",
    "Government spending exceeds revenue",
    "Inflation exceeds growth"
  ],
  answer: "Exports exceed imports",
  explanation:
    "A trade surplus occurs when the value of exports is greater than imports.",
  wrongExplanations: {
    "Imports exceed exports":
      "That produces a trade deficit.",
    "Government spending exceeds revenue":
      "That describes a fiscal deficit.",
    "Inflation exceeds growth":
      "This does not define a trade surplus."
  },
  hint: "Sell abroad more than buy."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Per capita income is calculated by:",
  options: [
    "Dividing total income by population",
    "Multiplying population by income",
    "Subtracting population from GDP",
    "Dividing exports by imports"
  ],
  answer: "Dividing total income by population",
  explanation:
    "Per capita income gives average income per person by dividing aggregate income by population.",
  wrongExplanations: {
    "Multiplying population by income":
      "This increases rather than averages income.",
    "Subtracting population from GDP":
      "These quantities cannot be meaningfully subtracted in this way.",
    "Dividing exports by imports":
      "That relates to trade."
  },
  hint: "Per person."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Inclusive growth aims to:",
  options: [
    "Spread the benefits of growth across wider sections of society",
    "Benefit only the richest group",
    "Stop all private investment",
    "Reduce all production"
  ],
  answer: "Spread the benefits of growth across wider sections of society",
  explanation:
    "Inclusive growth seeks broad participation in and benefits from economic progress.",
  wrongExplanations: {
    "Benefit only the richest group":
      "That is contrary to inclusion.",
    "Stop all private investment":
      "Inclusive growth does not require eliminating private activity.",
    "Reduce all production":
      "It aims at growth with wider benefits."
  },
  hint: "Growth for more people."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Status in sociology refers to:",
  options: [
    "A recognised social position",
    "Only personal wealth",
    "Only political office",
    "Only educational qualification"
  ],
  answer: "A recognised social position",
  explanation:
    "Status refers to a socially recognised position occupied by an individual within a social structure.",
  wrongExplanations: {
    "Only personal wealth":
      "Wealth can influence status but does not define every status.",
    "Only political office":
      "Political office is one possible status.",
    "Only educational qualification":
      "Education may affect status but is not the whole concept."
  },
  hint: "Position in society."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "An achieved status is one that is mainly:",
  options: [
    "Acquired through effort or action",
    "Assigned automatically at birth only",
    "Biologically fixed in every case",
    "Unrelated to social life"
  ],
  answer: "Acquired through effort or action",
  explanation:
    "Achieved status is attained through choices, effort, qualifications or accomplishments.",
  wrongExplanations: {
    "Assigned automatically at birth only":
      "That describes ascribed status more closely.",
    "Biologically fixed in every case":
      "Achieved statuses are not biologically fixed.",
    "Unrelated to social life":
      "Status is a social concept."
  },
  hint: "Earned status."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Education as a social institution mainly helps to:",
  options: [
    "Transmit knowledge and social values",
    "Eliminate all culture",
    "Stop social interaction",
    "Remove all social roles"
  ],
  answer: "Transmit knowledge and social values",
  explanation:
    "Education transmits knowledge, skills, values and social expectations across generations.",
  wrongExplanations: {
    "Eliminate all culture":
      "Education often helps transmit culture.",
    "Stop social interaction":
      "Schools create significant social interaction.",
    "Remove all social roles":
      "Education helps prepare individuals for roles."
  },
  hint: "Knowledge and socialisation."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Vertical social mobility involves:",
  options: [
    "Movement to a higher or lower social position",
    "Movement between equal-status jobs only",
    "Only physical travel",
    "No change in social position"
  ],
  answer: "Movement to a higher or lower social position",
  explanation:
    "Vertical mobility involves upward or downward movement in a system of social ranking.",
  wrongExplanations: {
    "Movement between equal-status jobs only":
      "That is closer to horizontal mobility.",
    "Only physical travel":
      "Geographic movement is distinct.",
    "No change in social position":
      "Mobility necessarily involves change."
  },
  hint: "Up or down."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Industrialisation generally refers to:",
  options: [
    "Expansion of machine-based production",
    "Only growth in farming",
    "Only population decline",
    "Only religious reform"
  ],
  answer: "Expansion of machine-based production",
  explanation:
    "Industrialisation involves the growth of manufacturing, machinery, factories and associated social changes.",
  wrongExplanations: {
    "Only growth in farming":
      "That refers to agricultural development.",
    "Only population decline":
      "Population change is not its definition.",
    "Only religious reform":
      "Industrialisation is primarily economic and social."
  },
  hint: "Factories and machines."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Non-formal education is generally:",
  options: [
    "Organised learning outside the regular formal system",
    "Completely accidental learning only",
    "Identical to university education",
    "Learning that has no objectives"
  ],
  answer: "Organised learning outside the regular formal system",
  explanation:
    "Non-formal education is organised and purposeful but occurs outside the conventional formal school system.",
  wrongExplanations: {
    "Completely accidental learning only":
      "That is closer to informal learning.",
    "Identical to university education":
      "University education is usually formal.",
    "Learning that has no objectives":
      "Non-formal education generally has defined objectives."
  },
  hint: "Organised but outside formal schooling."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "The affective domain is mainly concerned with:",
  options: [
    "Attitudes, values and emotions",
    "Only physical movement",
    "Only factual recall",
    "Only numerical ability"
  ],
  answer: "Attitudes, values and emotions",
  explanation:
    "The affective domain concerns feelings, attitudes, interests and values.",
  wrongExplanations: {
    "Only physical movement":
      "That belongs to the psychomotor domain.",
    "Only factual recall":
      "That belongs to the cognitive domain.",
    "Only numerical ability":
      "That is a cognitive skill."
  },
  hint: "Feelings and values."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "The psychomotor domain is mainly concerned with:",
  options: [
    "Physical and motor skills",
    "Values only",
    "Memory only",
    "Emotions only"
  ],
  answer: "Physical and motor skills",
  explanation:
    "The psychomotor domain focuses on movement, coordination and practical physical skills.",
  wrongExplanations: {
    "Values only":
      "Values belong mainly to the affective domain.",
    "Memory only":
      "Memory belongs mainly to the cognitive domain.",
    "Emotions only":
      "Emotions belong mainly to the affective domain."
  },
  hint: "Movement and skill."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Problem-solving method mainly develops:",
  options: [
    "Reasoning and application",
    "Passive memorisation only",
    "No thinking",
    "Only handwriting"
  ],
  answer: "Reasoning and application",
  explanation:
    "Problem-solving approaches encourage learners to analyse situations, apply knowledge and develop solutions.",
  wrongExplanations: {
    "Passive memorisation only":
      "Problem solving requires active thinking.",
    "No thinking":
      "Thinking is central to the method.",
    "Only handwriting":
      "Writing may be involved but is not the main objective."
  },
  hint: "Apply knowledge to a problem."
},

{
  subject: "Education",
  category: "Assessment",
  question: "A rubric is mainly used to:",
  options: [
    "Describe criteria for evaluating performance",
    "Replace every examination",
    "Punish students",
    "Store attendance only"
  ],
  answer: "Describe criteria for evaluating performance",
  explanation:
    "A rubric provides criteria and performance levels for assessing student work.",
  wrongExplanations: {
    "Replace every examination":
      "Rubrics can support many assessments but do not replace all examinations.",
    "Punish students":
      "Rubrics are assessment tools.",
    "Store attendance only":
      "Attendance records have a different purpose."
  },
  hint: "Scoring criteria."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct comparative form of 'good'.",
  options: ["Better", "Gooder", "Best", "More good"],
  answer: "Better",
  explanation:
    "Better is the irregular comparative form of good.",
  wrongExplanations: {
    Gooder: "This form is incorrect.",
    Best: "Best is the superlative form.",
    "More good": "Standard English uses better."
  },
  hint: "Irregular comparison."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct superlative form of 'bad'.",
  options: ["Worst", "Worse", "Baddest", "Most bad"],
  answer: "Worst",
  explanation:
    "Worst is the irregular superlative form of bad.",
  wrongExplanations: {
    Worse: "Worse is comparative.",
    Baddest: "This is not standard in formal English.",
    "Most bad": "Standard English uses worst."
  },
  hint: "Bad, worse, ?"
},

{
  subject: "English",
  category: "Grammar",
  question: "Identify the pronoun in the sentence: 'They completed the project.'",
  options: ["They", "Completed", "Project", "The"],
  answer: "They",
  explanation:
    "'They' is a pronoun replacing a noun or noun phrase.",
  wrongExplanations: {
    Completed: "Completed is a verb.",
    Project: "Project is a noun.",
    The: "The is an article."
  },
  hint: "Word replacing a noun."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'essential'.",
  options: ["Necessary", "Optional", "Minor", "Rare"],
  answer: "Necessary",
  explanation:
    "Essential means necessary or absolutely important.",
  wrongExplanations: {
    Optional: "Optional is almost the opposite.",
    Minor: "Minor means less important.",
    Rare: "Rare means uncommon."
  },
  hint: "Required."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'optimistic'.",
  options: ["Pessimistic", "Hopeful", "Positive", "Confident"],
  answer: "Pessimistic",
  explanation:
    "Pessimistic is the opposite of optimistic.",
  wrongExplanations: {
    Hopeful: "Hopeful is similar to optimistic.",
    Positive: "Positive is similar in tone.",
    Confident: "Confident is not the opposite."
  },
  hint: "Expecting bad outcomes."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "A supporting detail in a passage usually:",
  options: [
    "Provides evidence for the main idea",
    "Always contradicts the main idea",
    "Has no connection with the passage",
    "Is only the title"
  ],
  answer: "Provides evidence for the main idea",
  explanation:
    "Supporting details explain, illustrate or provide evidence for the central idea.",
  wrongExplanations: {
    "Always contradicts the main idea":
      "Relevant supporting details generally reinforce or develop the main idea.",
    "Has no connection with the passage":
      "A supporting detail must be relevant.",
    "Is only the title":
      "A title is not a supporting detail."
  },
  hint: "Evidence and examples."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 10, 20, 30, 40, ?",
  options: ["45", "50", "55", "60"],
  answer: "50",
  explanation:
    "The sequence increases by 10 each time.",
  wrongExplanations: {
    "45": "This adds only 5.",
    "55": "This adds 15.",
    "60": "60 would come after 50."
  },
  hint: "Add 10."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Doctor is to Hospital as Teacher is to:",
  options: ["School", "Market", "Airport", "Farm"],
  answer: "School",
  explanation:
    "A doctor commonly works in a hospital, while a teacher commonly works in a school.",
  wrongExplanations: {
    Market: "This is not the usual workplace of a teacher.",
    Airport: "This is unrelated.",
    Farm: "This is unrelated."
  },
  hint: "Profession and workplace."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 30% of 150?",
  options: ["35", "40", "45", "50"],
  answer: "45",
  explanation:
    "30% of 150 = 0.30 × 150 = 45.",
  wrongExplanations: {
    "35": "This is below 30%.",
    "40": "This is not exactly 30%.",
    "50": "This is one-third of 150."
  },
  hint: "10% is 15."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "If 4 notebooks cost ₹120, what is the cost of 7 notebooks at the same rate?",
  options: ["₹180", "₹200", "₹210", "₹240"],
  answer: "₹210",
  explanation:
    "One notebook costs ₹30, so 7 notebooks cost 7 × 30 = ₹210.",
  wrongExplanations: {
    "₹180": "This equals the cost of 6 notebooks.",
    "₹200": "This does not match the unit price.",
    "₹240": "This equals the cost of 8 notebooks."
  },
  hint: "Find unit cost first."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "A department has 80 students. If 48 are female, what percentage are female?",
  options: ["50%", "55%", "60%", "65%"],
  answer: "60%",
  explanation:
    "48/80 × 100 = 60%.",
  wrongExplanations: {
    "50%": "This would mean 40 students.",
    "55%": "This would mean 44 students.",
    "65%": "This would mean 52 students."
  },
  hint: "48 divided by 80."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Which device connects multiple devices within a local network?",
  options: ["Switch", "Keyboard", "Printer", "Scanner"],
  answer: "Switch",
  explanation:
    "A network switch connects devices within a local area network and forwards data between them.",
  wrongExplanations: {
    Keyboard: "A keyboard is an input device.",
    Printer: "A printer is an output device.",
    Scanner: "A scanner is an input device."
  },
  hint: "LAN device."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Malware is software designed to:",
  options: [
    "Cause harm or perform unwanted actions",
    "Improve every computer automatically",
    "Increase monitor size",
    "Replace electricity"
  ],
  answer: "Cause harm or perform unwanted actions",
  explanation:
    "Malware includes malicious programs such as viruses, ransomware and spyware.",
  wrongExplanations: {
    "Improve every computer automatically":
      "Malware is harmful rather than beneficial.",
    "Increase monitor size":
      "Software cannot physically enlarge a monitor.",
    "Replace electricity":
      "This is impossible."
  },
  hint: "Malicious software."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of SAARC is located in:",
  options: ["Kathmandu", "New Delhi", "Dhaka", "Colombo"],
  answer: "Kathmandu",
  explanation:
    "The SAARC Secretariat is located in Kathmandu, Nepal.",
  wrongExplanations: {
    "New Delhi": "India is a SAARC member, but the Secretariat is not in New Delhi.",
    Dhaka: "SAARC was established through the Dhaka Summit, but its Secretariat is elsewhere.",
    Colombo: "Sri Lanka is a member, but the Secretariat is not in Colombo."
  },
  hint: "Nepal."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "ASEAN was established in:",
  options: ["1967", "1945", "1955", "1991"],
  answer: "1967",
  explanation:
    "ASEAN was established in 1967 through the Bangkok Declaration.",
  wrongExplanations: {
    "1945": "This is the year the United Nations was established.",
    "1955": "This is associated with the Bandung Conference.",
    "1991": "ASEAN existed long before 1991."
  },
  hint: "Bangkok Declaration."
},
{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A hypothesis is best described as:",
  options: [
    "A testable statement about a possible relationship",
    "A final proven conclusion",
    "A bibliography",
    "A research budget"
  ],
  answer: "A testable statement about a possible relationship",
  explanation:
    "A hypothesis is a tentative and testable statement that researchers examine using evidence.",
  wrongExplanations: {
    "A final proven conclusion":
      "A hypothesis is tested during research and is not automatically a final conclusion.",
    "A bibliography":
      "A bibliography lists sources used in research.",
    "A research budget":
      "A budget concerns research expenses."
  },
  hint: "Something that can be tested."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Primary data are data that:",
  options: [
    "Are collected directly by the researcher",
    "Come only from textbooks",
    "Are always more than ten years old",
    "Cannot be analysed"
  ],
  answer: "Are collected directly by the researcher",
  explanation:
    "Primary data are collected first-hand through methods such as interviews, surveys, observation or experiments.",
  wrongExplanations: {
    "Come only from textbooks":
      "Textbooks are generally secondary sources.",
    "Are always more than ten years old":
      "The age of data does not determine whether it is primary.",
    "Cannot be analysed":
      "Primary data are collected specifically for analysis."
  },
  hint: "First-hand information."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "The harm principle is associated with:",
  options: ["J.S. Mill", "Thomas Hobbes", "Karl Marx", "Plato"],
  answer: "J.S. Mill",
  explanation:
    "J.S. Mill argued that individual liberty should generally be limited only to prevent harm to others.",
  wrongExplanations: {
    "Thomas Hobbes":
      "Hobbes emphasised security and sovereign authority.",
    "Karl Marx":
      "Marx focused on class relations and capitalism.",
    Plato:
      "Plato focused on justice and the ideal state."
  },
  hint: "Think On Liberty."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Judicial review in India allows courts to:",
  options: [
    "Examine the constitutionality of laws and government actions",
    "Conduct parliamentary elections",
    "Prepare the Union Budget",
    "Appoint all ministers"
  ],
  answer: "Examine the constitutionality of laws and government actions",
  explanation:
    "Judicial review enables courts to examine whether laws and executive actions are consistent with the Constitution.",
  wrongExplanations: {
    "Conduct parliamentary elections":
      "Elections are conducted by the Election Commission.",
    "Prepare the Union Budget":
      "The Union Budget is prepared by the executive.",
    "Appoint all ministers":
      "Ministerial appointments follow constitutional procedures involving the President and Prime Minister."
  },
  hint: "Constitutionality."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Collective security is based on the idea that:",
  options: [
    "Aggression against one should concern all members",
    "Every state should remain completely isolated",
    "Only powerful states deserve security",
    "Military alliances must always be secret"
  ],
  answer: "Aggression against one should concern all members",
  explanation:
    "Collective security seeks a common response against aggression threatening any member of the system.",
  wrongExplanations: {
    "Every state should remain completely isolated":
      "Collective security requires cooperation.",
    "Only powerful states deserve security":
      "The principle is intended to apply collectively.",
    "Military alliances must always be secret":
      "Secrecy is not the defining principle."
  },
  hint: "Security as a common responsibility."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Accountability in public administration means that officials should:",
  options: [
    "Be answerable for their decisions and actions",
    "Operate without any oversight",
    "Ignore laws",
    "Avoid public responsibility"
  ],
  answer: "Be answerable for their decisions and actions",
  explanation:
    "Accountability requires public officials to explain and justify their actions and face consequences where appropriate.",
  wrongExplanations: {
    "Operate without any oversight":
      "Oversight is an important part of accountability.",
    "Ignore laws":
      "Administrative action must operate within law.",
    "Avoid public responsibility":
      "Accountability requires responsibility rather than avoidance."
  },
  hint: "Answerability."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Allahabad Pillar inscription praises which Gupta ruler?",
  options: ["Samudragupta", "Chandragupta Maurya", "Ashoka", "Harsha"],
  answer: "Samudragupta",
  explanation:
    "The Allahabad Pillar inscription composed by Harisena praises the achievements of Samudragupta.",
  wrongExplanations: {
    "Chandragupta Maurya":
      "He founded the Mauryan Empire centuries earlier.",
    Ashoka:
      "Ashoka used pillar inscriptions, but the Allahabad Prashasti praises Samudragupta.",
    Harsha:
      "Harsha ruled later in the seventh century."
  },
  hint: "Gupta conqueror."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Fa-Hien visited India mainly during the reign of:",
  options: ["Chandragupta II", "Ashoka", "Harsha", "Akbar"],
  answer: "Chandragupta II",
  explanation:
    "The Chinese Buddhist traveller Fa-Hien visited India during the Gupta period, particularly the reign of Chandragupta II.",
  wrongExplanations: {
    Ashoka:
      "Ashoka ruled many centuries before Fa-Hien.",
    Harsha:
      "Xuanzang is more closely associated with Harsha's reign.",
    Akbar:
      "Akbar ruled in the sixteenth century."
  },
  hint: "Gupta period."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who founded the Khalsa in 1699?",
  options: ["Guru Gobind Singh", "Guru Nanak", "Guru Arjan", "Guru Tegh Bahadur"],
  answer: "Guru Gobind Singh",
  explanation:
    "Guru Gobind Singh founded the Khalsa at Anandpur Sahib in 1699.",
  wrongExplanations: {
    "Guru Nanak":
      "Guru Nanak founded the Sikh faith.",
    "Guru Arjan":
      "Guru Arjan compiled the Adi Granth and was the fifth Sikh Guru.",
    "Guru Tegh Bahadur":
      "Guru Tegh Bahadur was the ninth Sikh Guru."
  },
  hint: "Tenth Sikh Guru."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Indian National Army is most closely associated with:",
  options: [
    "Subhas Chandra Bose",
    "B.R. Ambedkar",
    "Dadabhai Naoroji",
    "Gopal Krishna Gokhale"
  ],
  answer: "Subhas Chandra Bose",
  explanation:
    "Subhas Chandra Bose became the most prominent leader associated with the Indian National Army.",
  wrongExplanations: {
    "B.R. Ambedkar":
      "Ambedkar focused on constitutionalism and social justice.",
    "Dadabhai Naoroji":
      "Naoroji developed the drain theory.",
    "Gopal Krishna Gokhale":
      "Gokhale was a moderate nationalist leader."
  },
  hint: "Azad Hind."
},

{
  subject: "History",
  category: "World History",
  question: "The League of Nations was created after:",
  options: [
    "First World War",
    "Second World War",
    "Cold War",
    "French Revolution"
  ],
  answer: "First World War",
  explanation:
    "The League of Nations was established after the First World War as part of the post-war peace settlement.",
  wrongExplanations: {
    "Second World War":
      "The United Nations was created after the Second World War.",
    "Cold War":
      "The League existed before the Cold War.",
    "French Revolution":
      "The French Revolution occurred more than a century earlier."
  },
  hint: "Predecessor of the United Nations."
},

{
  subject: "History",
  category: "World History",
  question: "The Berlin Wall fell in:",
  options: ["1989", "1961", "1991", "1945"],
  answer: "1989",
  explanation:
    "The Berlin Wall fell in November 1989, symbolising the collapse of communist control in Eastern Europe.",
  wrongExplanations: {
    "1961":
      "The Berlin Wall was constructed in 1961.",
    "1991":
      "The Soviet Union dissolved in 1991.",
    "1945":
      "The Second World War ended in 1945."
  },
  hint: "Two years before the Soviet Union ended."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The Equator is located at:",
  options: ["0° latitude", "0° longitude", "23.5° N", "90° N"],
  answer: "0° latitude",
  explanation:
    "The Equator is the reference line for latitude and is located at zero degrees latitude.",
  wrongExplanations: {
    "0° longitude":
      "Zero degrees longitude is the Prime Meridian.",
    "23.5° N":
      "This is approximately the Tropic of Cancer.",
    "90° N":
      "This is the North Pole."
  },
  hint: "Latitude."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The Prime Meridian passes through:",
  options: ["Greenwich", "New Delhi", "Tokyo", "New York"],
  answer: "Greenwich",
  explanation:
    "The Prime Meridian at zero degrees longitude passes through Greenwich in London.",
  wrongExplanations: {
    "New Delhi":
      "India uses a standard meridian east of Greenwich.",
    Tokyo:
      "Tokyo lies far east of the Prime Meridian.",
    "New York":
      "New York lies west of the Prime Meridian."
  },
  hint: "London."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A tsunami is commonly caused by:",
  options: [
    "Undersea earthquakes",
    "Normal rainfall",
    "Daily tides only",
    "Cloud formation"
  ],
  answer: "Undersea earthquakes",
  explanation:
    "Large undersea earthquakes can suddenly displace seawater and generate tsunamis.",
  wrongExplanations: {
    "Normal rainfall":
      "Rainfall does not normally generate tsunamis.",
    "Daily tides only":
      "Tides are regular gravitational movements.",
    "Cloud formation":
      "Clouds do not create tsunamis."
  },
  hint: "Seafloor displacement."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A push factor in migration is:",
  options: ["Unemployment", "Better jobs elsewhere", "Higher wages elsewhere", "Better education elsewhere"],
  answer: "Unemployment",
  explanation:
    "Unemployment can push people to leave their place of origin in search of opportunities elsewhere.",
  wrongExplanations: {
    "Better jobs elsewhere":
      "This is a pull factor.",
    "Higher wages elsewhere":
      "This attracts migrants and is a pull factor.",
    "Better education elsewhere":
      "This is also a pull factor."
  },
  hint: "Something that drives people away."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "The demographic transition model describes changes in:",
  options: [
    "Birth rates and death rates",
    "Rock formation only",
    "Atmospheric pressure only",
    "Ocean currents only"
  ],
  answer: "Birth rates and death rates",
  explanation:
    "The demographic transition model explains how birth and death rates change as societies develop.",
  wrongExplanations: {
    "Rock formation only":
      "That belongs to physical geography and geology.",
    "Atmospheric pressure only":
      "This belongs to climatology.",
    "Ocean currents only":
      "This belongs to oceanography."
  },
  hint: "Population change."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Which sector includes research and advanced information services?",
  options: ["Quaternary", "Primary", "Secondary", "Subsistence only"],
  answer: "Quaternary",
  explanation:
    "The quaternary sector includes knowledge-intensive activities such as research, data and information technology.",
  wrongExplanations: {
    Primary:
      "Primary activities extract natural resources.",
    Secondary:
      "Secondary activities involve manufacturing.",
    "Subsistence only":
      "Subsistence is not a standard sector classification."
  },
  hint: "Knowledge economy."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Demand for a substitute good may rise when:",
  options: [
    "The price of another substitute rises",
    "Its own usefulness disappears",
    "Consumer income becomes zero in every case",
    "All markets close"
  ],
  answer: "The price of another substitute rises",
  explanation:
    "If the price of one substitute rises, consumers may switch toward the relatively cheaper alternative.",
  wrongExplanations: {
    "Its own usefulness disappears":
      "Demand would usually fall.",
    "Consumer income becomes zero in every case":
      "This does not describe the substitute relationship.",
    "All markets close":
      "Demand cannot operate normally without markets."
  },
  hint: "Tea and coffee."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Complementary goods are goods that are:",
  options: [
    "Usually consumed together",
    "Always identical",
    "Always produced by government",
    "Never used together"
  ],
  answer: "Usually consumed together",
  explanation:
    "Complementary goods are commonly used together, such as cars and fuel.",
  wrongExplanations: {
    "Always identical":
      "Complementary goods are different goods.",
    "Always produced by government":
      "Ownership does not define complements.",
    "Never used together":
      "That is the opposite of complementarity."
  },
  hint: "Car and petrol."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "The Consumer Price Index is commonly used to measure:",
  options: ["Inflation", "Population growth", "Exports only", "Election turnout"],
  answer: "Inflation",
  explanation:
    "The Consumer Price Index tracks changes in the prices of a basket of goods and services consumed by households.",
  wrongExplanations: {
    "Population growth":
      "Population growth is measured using demographic statistics.",
    "Exports only":
      "Export values are trade statistics.",
    "Election turnout":
      "Turnout is an electoral statistic."
  },
  hint: "Cost of living."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "When a central bank raises interest rates, borrowing generally becomes:",
  options: ["More expensive", "Free", "Automatically illegal", "Unrelated to interest"],
  answer: "More expensive",
  explanation:
    "Higher interest rates generally increase the cost of borrowing and can reduce credit demand.",
  wrongExplanations: {
    Free:
      "Higher interest does not make borrowing free.",
    "Automatically illegal":
      "Interest-rate changes do not make borrowing illegal.",
    "Unrelated to interest":
      "Interest is a major component of borrowing cost."
  },
  hint: "Higher rate, higher borrowing cost."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "Public expenditure refers to:",
  options: [
    "Spending by government",
    "Only private household spending",
    "Only company profits",
    "Only exports"
  ],
  answer: "Spending by government",
  explanation:
    "Public expenditure includes government spending on administration, welfare, infrastructure and other public functions.",
  wrongExplanations: {
    "Only private household spending":
      "That is private consumption.",
    "Only company profits":
      "Profits are private income.",
    "Only exports":
      "Exports are international trade transactions."
  },
  hint: "Government spending."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Income inequality refers to:",
  options: [
    "Unequal distribution of income among individuals or groups",
    "Equal income for everyone",
    "Only inflation",
    "Only unemployment"
  ],
  answer: "Unequal distribution of income among individuals or groups",
  explanation:
    "Income inequality describes differences in income received by different people or sections of society.",
  wrongExplanations: {
    "Equal income for everyone":
      "That would indicate complete equality.",
    "Only inflation":
      "Inflation concerns prices.",
    "Only unemployment":
      "Unemployment concerns access to jobs."
  },
  hint: "Distribution of income."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of verstehen is associated with:",
  options: ["Max Weber", "Karl Marx", "Durkheim", "Comte"],
  answer: "Max Weber",
  explanation:
    "Weber used verstehen to refer to interpretive understanding of meaningful social action.",
  wrongExplanations: {
    "Karl Marx":
      "Marx emphasised class relations and historical materialism.",
    Durkheim:
      "Durkheim focused on social facts.",
    Comte:
      "Comte developed positivism."
  },
  hint: "Interpretive understanding."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Who wrote The Protestant Ethic and the Spirit of Capitalism?",
  options: ["Max Weber", "Karl Marx", "Durkheim", "Talcott Parsons"],
  answer: "Max Weber",
  explanation:
    "Max Weber examined links between Protestant ethics and the development of modern capitalism.",
  wrongExplanations: {
    "Karl Marx":
      "Marx analysed capitalism from a materialist and class perspective.",
    Durkheim:
      "Durkheim wrote works such as Suicide.",
    "Talcott Parsons":
      "Parsons developed structural functionalism."
  },
  hint: "Religion and capitalism."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Caste is generally described as a relatively:",
  options: [
    "Closed system of stratification",
    "Completely open system",
    "Temporary political party",
    "Market institution only"
  ],
  answer: "Closed system of stratification",
  explanation:
    "Traditional caste systems restrict mobility and assign social position largely by birth.",
  wrongExplanations: {
    "Completely open system":
      "Open systems allow much greater mobility.",
    "Temporary political party":
      "Caste is a social institution rather than a temporary party.",
    "Market institution only":
      "Caste has social, cultural and historical dimensions."
  },
  hint: "Status by birth."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Religion as a social institution can contribute to:",
  options: [
    "Shared beliefs and social integration",
    "Only economic pricing",
    "Only weather forecasting",
    "Only industrial production"
  ],
  answer: "Shared beliefs and social integration",
  explanation:
    "Religion can provide shared meanings, rituals, values and forms of social solidarity.",
  wrongExplanations: {
    "Only economic pricing":
      "Pricing is an economic process.",
    "Only weather forecasting":
      "Weather forecasting is scientific and meteorological.",
    "Only industrial production":
      "Industrial production is an economic process."
  },
  hint: "Beliefs and solidarity."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Urbanisation can contribute to:",
  options: [
    "Changes in occupations and social relationships",
    "Complete disappearance of all institutions",
    "Only agricultural isolation",
    "No social change"
  ],
  answer: "Changes in occupations and social relationships",
  explanation:
    "Urbanisation often changes employment patterns, family arrangements, lifestyles and social interaction.",
  wrongExplanations: {
    "Complete disappearance of all institutions":
      "Institutions change but do not simply disappear.",
    "Only agricultural isolation":
      "Urbanisation generally reduces reliance on purely agricultural occupations.",
    "No social change":
      "Urbanisation is itself a major process of social change."
  },
  hint: "Cities reshape social life."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "Participant observation is especially associated with:",
  options: [
    "Observing a group while participating in its activities",
    "Only reading government statistics",
    "Only conducting laboratory experiments",
    "Avoiding all contact with participants"
  ],
  answer: "Observing a group while participating in its activities",
  explanation:
    "Participant observation involves direct involvement in a group's setting while systematically observing social behaviour.",
  wrongExplanations: {
    "Only reading government statistics":
      "That uses secondary quantitative data.",
    "Only conducting laboratory experiments":
      "Participant observation usually occurs in natural social settings.",
    "Avoiding all contact with participants":
      "Interaction may be central to the method."
  },
  hint: "Participate and observe."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Learning through observation and imitation is strongly associated with:",
  options: ["Albert Bandura", "Pavlov", "Skinner", "Freud"],
  answer: "Albert Bandura",
  explanation:
    "Bandura's social learning theory emphasises learning through observation, modelling and imitation.",
  wrongExplanations: {
    Pavlov:
      "Pavlov is associated with classical conditioning.",
    Skinner:
      "Skinner is associated with operant conditioning.",
    Freud:
      "Freud developed psychoanalytic theory."
  },
  hint: "Bobo doll experiment."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Transfer of learning occurs when:",
  options: [
    "Previous learning affects new learning",
    "A student changes classrooms",
    "A teacher transfers schools",
    "Books are moved between libraries"
  ],
  answer: "Previous learning affects new learning",
  explanation:
    "Transfer of learning refers to the influence of previously acquired knowledge or skills on a new learning situation.",
  wrongExplanations: {
    "A student changes classrooms":
      "That is physical movement.",
    "A teacher transfers schools":
      "That is administrative transfer.",
    "Books are moved between libraries":
      "That is physical transfer rather than learning transfer."
  },
  hint: "Old learning influences new."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "A teaching aid is mainly used to:",
  options: [
    "Improve understanding and communication",
    "Replace the teacher completely",
    "Prevent student participation",
    "Increase confusion"
  ],
  answer: "Improve understanding and communication",
  explanation:
    "Teaching aids support explanation, visualisation and learner engagement.",
  wrongExplanations: {
    "Replace the teacher completely":
      "Teaching aids support rather than fully replace teaching.",
    "Prevent student participation":
      "Good aids can increase participation.",
    "Increase confusion":
      "Their purpose is to improve clarity."
  },
  hint: "Support learning."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Criterion-referenced assessment compares a learner's performance with:",
  options: [
    "A defined standard or criterion",
    "Only other students",
    "A random number",
    "Teacher salary"
  ],
  answer: "A defined standard or criterion",
  explanation:
    "Criterion-referenced tests evaluate performance against predetermined learning standards.",
  wrongExplanations: {
    "Only other students":
      "That is more characteristic of norm-referenced assessment.",
    "A random number":
      "Assessment requires meaningful criteria.",
    "Teacher salary":
      "Teacher salary is unrelated."
  },
  hint: "Performance against a standard."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Universal Design for Learning encourages:",
  options: [
    "Multiple ways of engaging with and demonstrating learning",
    "One identical method for every learner",
    "Removing accessibility features",
    "Excluding students with different needs"
  ],
  answer: "Multiple ways of engaging with and demonstrating learning",
  explanation:
    "Universal Design for Learning promotes flexible methods of representation, engagement and expression.",
  wrongExplanations: {
    "One identical method for every learner":
      "UDL recognises learner diversity.",
    "Removing accessibility features":
      "Accessibility is central to UDL.",
    "Excluding students with different needs":
      "UDL aims to increase inclusion."
  },
  hint: "Flexible learning design."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Lifelong learning means:",
  options: [
    "Learning throughout different stages of life",
    "Learning only during childhood",
    "Learning only in universities",
    "Stopping education after employment"
  ],
  answer: "Learning throughout different stages of life",
  explanation:
    "Lifelong learning recognises that education and skill development continue throughout life.",
  wrongExplanations: {
    "Learning only during childhood":
      "Learning continues beyond childhood.",
    "Learning only in universities":
      "Lifelong learning occurs in formal, non-formal and informal settings.",
    "Stopping education after employment":
      "Employment can involve continued learning."
  },
  hint: "Learning never really ends."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct sentence:",
  options: [
    "Neither of the answers is correct.",
    "Neither of the answers are correct.",
    "Neither of answer is correct.",
    "Neither answers are correct."
  ],
  answer: "Neither of the answers is correct.",
  explanation:
    "In formal standard usage, 'neither' is treated as singular in this construction.",
  wrongExplanations: {
    "Neither of the answers are correct.":
      "Formal examination grammar normally expects the singular verb 'is'.",
    "Neither of answer is correct.":
      "The plural noun 'answers' is required after 'of the'.",
    "Neither answers are correct.":
      "This construction is grammatically incorrect."
  },
  hint: "Neither = not one."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'If I ___ you, I would study harder.'",
  options: ["were", "was", "am", "be"],
  answer: "were",
  explanation:
    "The subjunctive form 'were' is traditionally used in hypothetical expressions such as 'If I were you'.",
  wrongExplanations: {
    was:
      "Informal speech may use 'was', but formal examination grammar prefers 'were'.",
    am:
      "The sentence describes a hypothetical situation.",
    be:
      "The bare infinitive does not fit this construction."
  },
  hint: "Hypothetical condition."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'diligent'.",
  options: ["Hardworking", "Lazy", "Careless", "Weak"],
  answer: "Hardworking",
  explanation:
    "Diligent means hardworking, careful and persistent in one's work.",
  wrongExplanations: {
    Lazy:
      "Lazy is nearly the opposite.",
    Careless:
      "Diligent people are generally careful.",
    Weak:
      "Weak refers to strength rather than effort."
  },
  hint: "Works carefully and consistently."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'hostile'.",
  options: ["Friendly", "Angry", "Aggressive", "Unfriendly"],
  answer: "Friendly",
  explanation:
    "Hostile means unfriendly or aggressive, so friendly is its opposite.",
  wrongExplanations: {
    Angry:
      "Angry is closer to hostile.",
    Aggressive:
      "Aggressive is similar to hostile.",
    Unfriendly:
      "Unfriendly is a synonym of hostile."
  },
  hint: "Opposite of unfriendly."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "The tone of a passage refers to:",
  options: [
    "The writer's attitude toward the subject",
    "Only the number of paragraphs",
    "Only sentence length",
    "The font used"
  ],
  answer: "The writer's attitude toward the subject",
  explanation:
    "Tone reflects the writer's attitude, such as critical, humorous, serious or optimistic.",
  wrongExplanations: {
    "Only the number of paragraphs":
      "Paragraph count does not determine tone.",
    "Only sentence length":
      "Sentence length may influence style but does not define tone.",
    "The font used":
      "Font is a visual design feature."
  },
  hint: "How the writer feels."
},

{
  subject: "English",
  category: "Writing",
  question: "A thesis statement usually presents:",
  options: [
    "The central argument or main position of an essay",
    "Only the bibliography",
    "Every supporting example",
    "Only the author's name"
  ],
  answer: "The central argument or main position of an essay",
  explanation:
    "A thesis statement clearly communicates the main argument or controlling idea of an academic essay.",
  wrongExplanations: {
    "Only the bibliography":
      "A bibliography lists sources.",
    "Every supporting example":
      "Examples support the thesis but are not the thesis itself.",
    "Only the author's name":
      "Authorship information is separate."
  },
  hint: "Main argument."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 2, 6, 12, 20, 30, ?",
  options: ["36", "40", "42", "48"],
  answer: "42",
  explanation:
    "The differences are 4, 6, 8 and 10. The next difference is 12, so 30 + 12 = 42.",
  wrongExplanations: {
    "36":
      "This would add only 6.",
    "40":
      "This would add 10 again instead of continuing the pattern.",
    "48":
      "This adds too much."
  },
  hint: "Look at the differences."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "If A is taller than B and B is taller than C, who is tallest?",
  options: ["A", "B", "C", "Cannot be determined"],
  answer: "A",
  explanation:
    "If A > B and B > C in height, then A is taller than both B and C.",
  wrongExplanations: {
    B:
      "A is stated to be taller than B.",
    C:
      "Both A and B are taller than C.",
    "Cannot be determined":
      "The information is sufficient."
  },
  hint: "A > B > C."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is the average of 12, 18, 24 and 30?",
  options: ["18", "20", "21", "24"],
  answer: "21",
  explanation:
    "12 + 18 + 24 + 30 = 84, and 84 ÷ 4 = 21.",
  wrongExplanations: {
    "18":
      "This is below the correct average.",
    "20":
      "84 divided by 4 is not 20.",
    "24":
      "24 is one of the values, not the average."
  },
  hint: "Add all four, divide by four."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A shopkeeper buys an item for ₹400 and sells it for ₹500. What is the profit percentage?",
  options: ["20%", "25%", "30%", "40%"],
  answer: "25%",
  explanation:
    "Profit = ₹100. Profit percentage = 100/400 × 100 = 25%.",
  wrongExplanations: {
    "20%":
      "This incorrectly uses the selling price as the base.",
    "30%":
      "The profit is only one-fourth of the cost price.",
    "40%":
      "This is too high."
  },
  hint: "Profit divided by cost price."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "A firewall is primarily used to:",
  options: [
    "Control and filter network traffic",
    "Increase screen brightness",
    "Print documents",
    "Charge a battery"
  ],
  answer: "Control and filter network traffic",
  explanation:
    "A firewall monitors and filters network traffic according to security rules.",
  wrongExplanations: {
    "Increase screen brightness":
      "Display brightness is unrelated to network security.",
    "Print documents":
      "Printers handle document output.",
    "Charge a battery":
      "Charging is a hardware power function."
  },
  hint: "Network security barrier."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The United Nations was established in:",
  options: ["1945", "1919", "1955", "1961"],
  answer: "1945",
  explanation:
    "The United Nations officially came into existence in 1945 after the Second World War.",
  wrongExplanations: {
    "1919":
      "The League of Nations emerged after the First World War.",
    "1955":
      "The Bandung Conference was held in 1955.",
    "1961":
      "The first Non-Aligned Movement summit was held in 1961."
  },
  hint: "End of World War II."
},
{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A sample is:",
  options: [
    "A smaller group selected from a larger population",
    "The entire population in every case",
    "Only a research conclusion",
    "Only a bibliography"
  ],
  answer: "A smaller group selected from a larger population",
  explanation:
    "A sample is a subset of a population selected for study.",
  wrongExplanations: {
    "The entire population in every case":
      "The entire population is called the population or universe, not a sample.",
    "Only a research conclusion":
      "A conclusion is drawn after analysis.",
    "Only a bibliography":
      "A bibliography lists sources."
  },
  hint: "Part of a larger population."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A questionnaire is mainly used to:",
  options: [
    "Collect information from respondents",
    "Replace all analysis",
    "Write the bibliography",
    "Create a research title only"
  ],
  answer: "Collect information from respondents",
  explanation:
    "A questionnaire contains structured questions used to collect data from respondents.",
  wrongExplanations: {
    "Replace all analysis":
      "Collected data still need analysis.",
    "Write the bibliography":
      "Bibliographies list sources.",
    "Create a research title only":
      "Questionnaires are data-collection tools."
  },
  hint: "Survey tool."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "The concept of civil society generally refers to:",
  options: [
    "Associations and organisations between the individual and the state",
    "Only the military",
    "Only government departments",
    "Only courts"
  ],
  answer: "Associations and organisations between the individual and the state",
  explanation:
    "Civil society includes voluntary associations, groups and organisations operating outside the direct structure of the state.",
  wrongExplanations: {
    "Only the military":
      "The military is part of the state apparatus.",
    "Only government departments":
      "Government departments belong to the state.",
    "Only courts":
      "Courts are state institutions."
  },
  hint: "Associational life outside the state."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The anti-defection law was added to the Constitution by the:",
  options: [
    "52nd Amendment",
    "42nd Amendment",
    "44th Amendment",
    "61st Amendment"
  ],
  answer: "52nd Amendment",
  explanation:
    "The 52nd Constitutional Amendment of 1985 introduced the Tenth Schedule dealing with defection.",
  wrongExplanations: {
    "42nd Amendment":
      "The 42nd Amendment made wide constitutional changes but did not introduce the anti-defection law.",
    "44th Amendment":
      "The 44th Amendment reversed several Emergency-era provisions.",
    "61st Amendment":
      "The 61st Amendment lowered the voting age."
  },
  hint: "Tenth Schedule."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Deterrence in international politics is based mainly on:",
  options: [
    "Preventing action through threat of unacceptable costs",
    "Removing all military capability",
    "Ending diplomacy",
    "Avoiding all communication"
  ],
  answer: "Preventing action through threat of unacceptable costs",
  explanation:
    "Deterrence seeks to prevent an opponent from acting by convincing it that the costs will outweigh the benefits.",
  wrongExplanations: {
    "Removing all military capability":
      "Deterrence usually depends on credible capability.",
    "Ending diplomacy":
      "Diplomacy can coexist with deterrence.",
    "Avoiding all communication":
      "Credible deterrence often requires signalling."
  },
  hint: "Threat prevents action."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Delegation means:",
  options: [
    "Assigning authority and responsibility to a subordinate",
    "Removing all authority from an organisation",
    "Ending supervision completely",
    "Abolishing hierarchy"
  ],
  answer: "Assigning authority and responsibility to a subordinate",
  explanation:
    "Delegation involves entrusting tasks and authority to lower levels while ultimate accountability often remains above.",
  wrongExplanations: {
    "Removing all authority from an organisation":
      "Delegation redistributes authority rather than eliminating it.",
    "Ending supervision completely":
      "Delegation does not necessarily end supervision.",
    "Abolishing hierarchy":
      "Delegation can operate within hierarchy."
  },
  hint: "Passing authority downward."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Gupta ruler known as Vikramaditya was:",
  options: [
    "Chandragupta II",
    "Samudragupta",
    "Chandragupta Maurya",
    "Skandagupta"
  ],
  answer: "Chandragupta II",
  explanation:
    "Chandragupta II is commonly associated with the title Vikramaditya.",
  wrongExplanations: {
    Samudragupta:
      "Samudragupta is famous for military expansion and the Allahabad Prashasti.",
    "Chandragupta Maurya":
      "He founded the Mauryan Empire.",
    Skandagupta:
      "Skandagupta was a later Gupta ruler."
  },
  hint: "Gupta ruler linked with cultural flourishing."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Buddhist council traditionally associated with Ashoka was the:",
  options: [
    "Third Buddhist Council",
    "First Buddhist Council",
    "Second Buddhist Council",
    "Fourth Buddhist Council"
  ],
  answer: "Third Buddhist Council",
  explanation:
    "The Third Buddhist Council is traditionally associated with the reign of Ashoka.",
  wrongExplanations: {
    "First Buddhist Council":
      "The First Council is traditionally associated with the period soon after Buddha's death.",
    "Second Buddhist Council":
      "The Second Council took place earlier than Ashoka.",
    "Fourth Buddhist Council":
      "The Fourth Council is associated with a later period."
  },
  hint: "Ashoka = third."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who built Fatehpur Sikri as an imperial capital?",
  options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
  answer: "Akbar",
  explanation:
    "Akbar developed Fatehpur Sikri as an imperial capital near Agra.",
  wrongExplanations: {
    Babur:
      "Babur founded the Mughal Empire but did not build Fatehpur Sikri as the capital.",
    "Shah Jahan":
      "Shah Jahan is strongly associated with Shahjahanabad and the Taj Mahal.",
    Aurangzeb:
      "Aurangzeb ruled later."
  },
  hint: "Buland Darwaza."
},

{
  subject: "History",
  category: "Modern India",
  question: "Who is associated with the Drain Theory?",
  options: [
    "Dadabhai Naoroji",
    "Mahatma Gandhi",
    "Subhas Chandra Bose",
    "B.R. Ambedkar"
  ],
  answer: "Dadabhai Naoroji",
  explanation:
    "Dadabhai Naoroji argued that British colonial rule caused a drain of wealth from India.",
  wrongExplanations: {
    "Mahatma Gandhi":
      "Gandhi focused on satyagraha, swaraj and non-violence.",
    "Subhas Chandra Bose":
      "Bose is associated with militant nationalism and the INA.",
    "B.R. Ambedkar":
      "Ambedkar focused on caste, social justice and constitutionalism."
  },
  hint: "Poverty and Un-British Rule in India."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Cabinet Mission came to India in:",
  options: ["1946", "1942", "1935", "1947"],
  answer: "1946",
  explanation:
    "The Cabinet Mission arrived in India in 1946 to propose a constitutional framework for the transfer of power.",
  wrongExplanations: {
    "1942":
      "1942 is associated with the Cripps Mission and Quit India Movement.",
    "1935":
      "1935 is associated with the Government of India Act.",
    "1947":
      "India became independent in 1947."
  },
  hint: "One year before independence."
},

{
  subject: "History",
  category: "World History",
  question: "The United Nations replaced which earlier international organisation?",
  options: [
    "League of Nations",
    "NATO",
    "Warsaw Pact",
    "European Union"
  ],
  answer: "League of Nations",
  explanation:
    "The United Nations was established after the Second World War, succeeding the failed League of Nations.",
  wrongExplanations: {
    NATO:
      "NATO is a military alliance founded in 1949.",
    "Warsaw Pact":
      "The Warsaw Pact was established in 1955.",
    "European Union":
      "The European Union developed much later."
  },
  hint: "Organisation created after World War I."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The lithosphere consists mainly of:",
  options: [
    "Crust and uppermost mantle",
    "Only the inner core",
    "Only the atmosphere",
    "Only ocean water"
  ],
  answer: "Crust and uppermost mantle",
  explanation:
    "The lithosphere is the rigid outer layer comprising the crust and the uppermost part of the mantle.",
  wrongExplanations: {
    "Only the inner core":
      "The inner core lies deep within Earth.",
    "Only the atmosphere":
      "The atmosphere is gaseous and separate from the lithosphere.",
    "Only ocean water":
      "Ocean water belongs to the hydrosphere."
  },
  hint: "Rigid outer Earth."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "An isotherm joins places of equal:",
  options: ["Temperature", "Pressure", "Rainfall", "Elevation"],
  answer: "Temperature",
  explanation:
    "Isotherms are lines joining places with equal temperature.",
  wrongExplanations: {
    Pressure:
      "Lines of equal pressure are isobars.",
    Rainfall:
      "Lines of equal rainfall are isohyets.",
    Elevation:
      "Lines of equal elevation are contours."
  },
  hint: "Therm = heat."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The water cycle includes:",
  options: [
    "Evaporation, condensation and precipitation",
    "Only erosion",
    "Only earthquakes",
    "Only wind movement"
  ],
  answer: "Evaporation, condensation and precipitation",
  explanation:
    "The water cycle includes evaporation, condensation, precipitation and movement of water through Earth's systems.",
  wrongExplanations: {
    "Only erosion":
      "Erosion can involve water but does not define the water cycle.",
    "Only earthquakes":
      "Earthquakes are tectonic processes.",
    "Only wind movement":
      "Wind influences weather but is not the whole water cycle."
  },
  hint: "Water moves between surface and atmosphere."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A population pyramid shows:",
  options: [
    "Age and sex structure of a population",
    "Only national income",
    "Only rainfall",
    "Only industrial output"
  ],
  answer: "Age and sex structure of a population",
  explanation:
    "Population pyramids graphically represent the age and sex composition of a population.",
  wrongExplanations: {
    "Only national income":
      "Income is an economic measure.",
    "Only rainfall":
      "Rainfall belongs to climatology.",
    "Only industrial output":
      "Industrial output is an economic statistic."
  },
  hint: "Age groups and male-female distribution."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Population growth equals the combined effect of:",
  options: [
    "Births, deaths and migration",
    "Only rainfall and temperature",
    "Only imports and exports",
    "Only education"
  ],
  answer: "Births, deaths and migration",
  explanation:
    "Population size changes through natural increase and net migration.",
  wrongExplanations: {
    "Only rainfall and temperature":
      "Climate can influence settlement but does not directly calculate population growth.",
    "Only imports and exports":
      "These are trade variables.",
    "Only education":
      "Education may influence demographic behaviour but is not the direct accounting relationship."
  },
  hint: "Births minus deaths plus migration."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "A raw-material-oriented industry is likely to locate near:",
  options: [
    "Its major raw material source",
    "Only a parliament building",
    "Only a tourist site",
    "Only an airport regardless of need"
  ],
  answer: "Its major raw material source",
  explanation:
    "Industries using bulky or weight-losing raw materials often locate near their source to reduce transport costs.",
  wrongExplanations: {
    "Only a parliament building":
      "Political institutions are not the main locational factor.",
    "Only a tourist site":
      "Tourism is irrelevant to many industrial decisions.",
    "Only an airport regardless of need":
      "Transport needs vary by industry."
  },
  hint: "Reduce transport cost."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Marginal cost is:",
  options: [
    "The additional cost of producing one more unit",
    "Total fixed cost",
    "Total revenue",
    "Average revenue"
  ],
  answer: "The additional cost of producing one more unit",
  explanation:
    "Marginal cost measures the change in total cost caused by producing an additional unit of output.",
  wrongExplanations: {
    "Total fixed cost":
      "Fixed cost does not vary with each extra unit in the short run.",
    "Total revenue":
      "Revenue concerns income from sales.",
    "Average revenue":
      "Average revenue is revenue per unit sold."
  },
  hint: "Extra unit."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Marginal revenue is:",
  options: [
    "Additional revenue from selling one more unit",
    "Total cost",
    "Fixed cost per unit",
    "Government revenue"
  ],
  answer: "Additional revenue from selling one more unit",
  explanation:
    "Marginal revenue is the change in total revenue when one additional unit is sold.",
  wrongExplanations: {
    "Total cost":
      "Cost and revenue are different concepts.",
    "Fixed cost per unit":
      "That is related to average fixed cost.",
    "Government revenue":
      "Government revenue belongs to public finance."
  },
  hint: "Extra revenue."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "The money supply refers broadly to:",
  options: [
    "The stock of money available in an economy",
    "Only government tax receipts",
    "Only foreign currency",
    "Only gold reserves"
  ],
  answer: "The stock of money available in an economy",
  explanation:
    "Money supply measures the quantity of money available for use in an economy under defined monetary aggregates.",
  wrongExplanations: {
    "Only government tax receipts":
      "Tax receipts are fiscal revenue.",
    "Only foreign currency":
      "Domestic money supply is broader.",
    "Only gold reserves":
      "Modern money supply is not limited to gold."
  },
  hint: "Money circulating in the economy."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "A rise in the general price level reduces the purchasing power of:",
  options: ["Money", "Population", "Land area", "Rainfall"],
  answer: "Money",
  explanation:
    "When prices rise, the same amount of money buys fewer goods and services.",
  wrongExplanations: {
    Population:
      "Population size is unrelated to purchasing power itself.",
    "Land area":
      "Land area does not change because of inflation.",
    Rainfall:
      "Rainfall is unrelated."
  },
  hint: "Inflation."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "A progressive tax is one in which:",
  options: [
    "The tax rate rises as taxable income rises",
    "Everyone pays exactly the same amount",
    "The tax rate falls as income rises",
    "No income is taxed"
  ],
  answer: "The tax rate rises as taxable income rises",
  explanation:
    "A progressive tax imposes higher tax rates on higher levels of income.",
  wrongExplanations: {
    "Everyone pays exactly the same amount":
      "That is not progressive taxation.",
    "The tax rate falls as income rises":
      "That describes a regressive pattern.",
    "No income is taxed":
      "That means no tax."
  },
  hint: "Higher income, higher rate."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Human capital refers to:",
  options: [
    "Knowledge, skills and health embodied in people",
    "Only machines",
    "Only natural resources",
    "Only government buildings"
  ],
  answer: "Knowledge, skills and health embodied in people",
  explanation:
    "Human capital includes education, skills, experience and health that improve people's productive capabilities.",
  wrongExplanations: {
    "Only machines":
      "Machines are physical capital.",
    "Only natural resources":
      "Natural resources are natural capital.",
    "Only government buildings":
      "Buildings are physical assets."
  },
  hint: "Investment in people."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Who wrote Suicide?",
  options: ["Emile Durkheim", "Max Weber", "Karl Marx", "Auguste Comte"],
  answer: "Emile Durkheim",
  explanation:
    "Durkheim's Suicide examined social causes of different types of suicide.",
  wrongExplanations: {
    "Max Weber":
      "Weber wrote works on authority, religion and capitalism.",
    "Karl Marx":
      "Marx wrote extensively on capitalism and class.",
    "Auguste Comte":
      "Comte developed positivism."
  },
  hint: "Social integration and regulation."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The idea of the looking-glass self is associated with:",
  options: [
    "Charles Horton Cooley",
    "Karl Marx",
    "Durkheim",
    "Pareto"
  ],
  answer: "Charles Horton Cooley",
  explanation:
    "Cooley argued that self-concept develops partly through imagining how others perceive us.",
  wrongExplanations: {
    "Karl Marx":
      "Marx focused on class and capitalism.",
    Durkheim:
      "Durkheim focused on social facts and solidarity.",
    Pareto:
      "Pareto is associated with elite theory."
  },
  hint: "Self through others' reactions."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Social control refers to:",
  options: [
    "Mechanisms used to encourage conformity to social norms",
    "Only police action",
    "Only taxation",
    "Only elections"
  ],
  answer: "Mechanisms used to encourage conformity to social norms",
  explanation:
    "Social control includes formal and informal mechanisms that regulate behaviour and maintain social order.",
  wrongExplanations: {
    "Only police action":
      "Police are one formal mechanism, but social control is broader.",
    "Only taxation":
      "Taxation is mainly a fiscal process.",
    "Only elections":
      "Elections are political processes."
  },
  hint: "Formal and informal regulation."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "The family is commonly described as a primary group because it involves:",
  options: [
    "Close and personal relationships",
    "Only formal contracts",
    "No emotional ties",
    "Only temporary contact"
  ],
  answer: "Close and personal relationships",
  explanation:
    "Families usually involve intimate, enduring and emotionally significant relationships.",
  wrongExplanations: {
    "Only formal contracts":
      "Primary relationships are not defined mainly by formal contracts.",
    "No emotional ties":
      "Emotional ties are often central.",
    "Only temporary contact":
      "Primary groups tend to be more enduring."
  },
  hint: "Intimate relations."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Westernisation in sociology generally refers to:",
  options: [
    "Adoption of institutions or cultural patterns associated with Western societies",
    "Only migration to Europe",
    "Only use of English",
    "Complete rejection of local culture in every case"
  ],
  answer: "Adoption of institutions or cultural patterns associated with Western societies",
  explanation:
    "Westernisation refers broadly to social and cultural changes influenced by Western institutions, ideas and practices.",
  wrongExplanations: {
    "Only migration to Europe":
      "Migration is not required.",
    "Only use of English":
      "Language can be one element but does not define the whole process.",
    "Complete rejection of local culture in every case":
      "Westernisation can coexist with local traditions."
  },
  hint: "Influence of Western institutions and culture."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "A structured interview uses:",
  options: [
    "A predetermined set of questions",
    "No questions at all",
    "Only random conversation",
    "Only secondary documents"
  ],
  answer: "A predetermined set of questions",
  explanation:
    "Structured interviews use standardised questions asked in a consistent order.",
  wrongExplanations: {
    "No questions at all":
      "Interviews require questions.",
    "Only random conversation":
      "That would be unstructured rather than structured.",
    "Only secondary documents":
      "Document analysis is a different method."
  },
  hint: "Same questions for respondents."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Readiness to learn means:",
  options: [
    "The learner is prepared to undertake a learning task",
    "The learner already knows everything",
    "Teaching is unnecessary",
    "Examinations should be removed"
  ],
  answer: "The learner is prepared to undertake a learning task",
  explanation:
    "Readiness includes the developmental, motivational and prior-learning conditions needed for effective learning.",
  wrongExplanations: {
    "The learner already knows everything":
      "Readiness does not mean complete mastery.",
    "Teaching is unnecessary":
      "Prepared learners still require learning experiences.",
    "Examinations should be removed":
      "Assessment policy is unrelated."
  },
  hint: "Prepared to learn."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Individual differences among learners mean teachers should:",
  options: [
    "Use flexible teaching approaches",
    "Assume every learner is identical",
    "Ignore learning needs",
    "Use one method regardless of context"
  ],
  answer: "Use flexible teaching approaches",
  explanation:
    "Learners differ in ability, background, motivation and pace, so teaching often benefits from flexibility.",
  wrongExplanations: {
    "Assume every learner is identical":
      "Learners differ in many important ways.",
    "Ignore learning needs":
      "Effective teaching considers learner needs.",
    "Use one method regardless of context":
      "Different learners and tasks may require different methods."
  },
  hint: "Learners are not identical."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Microteaching is mainly used for:",
  options: [
    "Practising specific teaching skills in a simplified setting",
    "Teaching thousands of students at once",
    "Replacing teacher education completely",
    "Conducting only final examinations"
  ],
  answer: "Practising specific teaching skills in a simplified setting",
  explanation:
    "Microteaching allows teachers or trainees to practise particular skills with reduced class size, content and time.",
  wrongExplanations: {
    "Teaching thousands of students at once":
      "Microteaching deliberately reduces complexity.",
    "Replacing teacher education completely":
      "It is one technique within teacher education.",
    "Conducting only final examinations":
      "It is primarily a training technique."
  },
  hint: "Small lesson, specific skill."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Norm-referenced assessment compares a learner with:",
  options: [
    "Other learners in a reference group",
    "A fixed mastery standard only",
    "No standard at all",
    "Only the teacher"
  ],
  answer: "Other learners in a reference group",
  explanation:
    "Norm-referenced assessment interprets a learner's performance relative to the performance of others.",
  wrongExplanations: {
    "A fixed mastery standard only":
      "That is criterion-referenced assessment.",
    "No standard at all":
      "Norms provide the comparison framework.",
    "Only the teacher":
      "The comparison is with a reference group."
  },
  hint: "Relative ranking."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Differentiated instruction means:",
  options: [
    "Adapting teaching to learner differences",
    "Teaching every student identically in every situation",
    "Removing all learning objectives",
    "Separating every learner permanently"
  ],
  answer: "Adapting teaching to learner differences",
  explanation:
    "Differentiated instruction adjusts content, process or assessment according to learners' readiness, needs or interests.",
  wrongExplanations: {
    "Teaching every student identically in every situation":
      "Differentiation recognises differences.",
    "Removing all learning objectives":
      "Objectives can remain while methods vary.",
    "Separating every learner permanently":
      "Differentiation can occur in inclusive classrooms."
  },
  hint: "Different needs, flexible methods."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Value education mainly aims to develop:",
  options: [
    "Ethical and socially responsible behaviour",
    "Only examination speed",
    "Only handwriting",
    "Only physical strength"
  ],
  answer: "Ethical and socially responsible behaviour",
  explanation:
    "Value education promotes ethical reasoning, responsibility, respect and socially desirable values.",
  wrongExplanations: {
    "Only examination speed":
      "Exam speed is an academic skill, not the main aim.",
    "Only handwriting":
      "Handwriting is unrelated.",
    "Only physical strength":
      "Physical strength belongs more to physical education."
  },
  hint: "Values and ethics."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'She ___ here since 2020.'",
  options: [
    "has lived",
    "lived only",
    "have lived",
    "living"
  ],
  answer: "has lived",
  explanation:
    "The present perfect is used for a situation beginning in the past and continuing to the present.",
  wrongExplanations: {
    "lived only":
      "Simple past does not clearly express continuation to the present here.",
    "have lived":
      "The singular subject 'she' requires 'has'.",
    living:
      "An auxiliary verb is required."
  },
  hint: "Since + continuing situation."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct indirect speech: He said, 'I am tired.'",
  options: [
    "He said that he was tired.",
    "He said that I am tired.",
    "He says he tired.",
    "He said that he is tire."
  ],
  answer: "He said that he was tired.",
  explanation:
    "With a past reporting verb, the present tense commonly shifts back to past tense in reported speech.",
  wrongExplanations: {
    "He said that I am tired.":
      "The pronoun and tense are not correctly shifted.",
    "He says he tired.":
      "The verb structure is incomplete.",
    "He said that he is tire.":
      "The noun/adjective form and tense are incorrect."
  },
  hint: "Backshift the tense."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'evaluate'.",
  options: ["Assess", "Ignore", "Destroy", "Hide"],
  answer: "Assess",
  explanation:
    "Evaluate means to assess or judge the quality, value or significance of something.",
  wrongExplanations: {
    Ignore:
      "Ignore means not to consider something.",
    Destroy:
      "Destroy means damage completely.",
    Hide:
      "Hide means conceal."
  },
  hint: "Judge or assess."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'increase'.",
  options: ["Decrease", "Expand", "Rise", "Grow"],
  answer: "Decrease",
  explanation:
    "Decrease means to become smaller or less and is the opposite of increase.",
  wrongExplanations: {
    Expand:
      "Expand is similar to increase.",
    Rise:
      "Rise is similar to increase.",
    Grow:
      "Grow is similar to increase."
  },
  hint: "Become less."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "A fact is different from an opinion because a fact:",
  options: [
    "Can be verified with evidence",
    "Is always emotional",
    "Can never be checked",
    "Must always be controversial"
  ],
  answer: "Can be verified with evidence",
  explanation:
    "A factual statement can be checked against evidence, while an opinion expresses a belief or judgment.",
  wrongExplanations: {
    "Is always emotional":
      "Facts do not depend on emotional expression.",
    "Can never be checked":
      "Verifiability is a key feature of factual claims.",
    "Must always be controversial":
      "Facts may be uncontroversial."
  },
  hint: "Can it be checked?"
},

{
  subject: "English",
  category: "Writing",
  question: "Coherence in writing means:",
  options: [
    "Ideas are logically connected and easy to follow",
    "Every sentence is unrelated",
    "Only difficult words are used",
    "There are no paragraphs"
  ],
  answer: "Ideas are logically connected and easy to follow",
  explanation:
    "Coherent writing presents ideas in a logical sequence with clear connections.",
  wrongExplanations: {
    "Every sentence is unrelated":
      "That destroys coherence.",
    "Only difficult words are used":
      "Vocabulary difficulty does not create coherence.",
    "There are no paragraphs":
      "Paragraph organisation often improves coherence."
  },
  hint: "Logical flow."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 4, 9, 16, 25, ?",
  options: ["30", "32", "36", "49"],
  answer: "36",
  explanation:
    "The numbers are consecutive squares: 2², 3², 4², 5², 6².",
  wrongExplanations: {
    "30":
      "30 is not a perfect square.",
    "32":
      "32 is not the next square.",
    "49":
      "49 is 7² and comes after 36."
  },
  hint: "Perfect squares."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Bird is to Fly as Fish is to:",
  options: ["Swim", "Run", "Climb", "Write"],
  answer: "Swim",
  explanation:
    "Flying is a typical mode of movement for birds, while swimming is typical for fish.",
  wrongExplanations: {
    Run:
      "Fish do not normally run.",
    Climb:
      "Climbing is not the usual movement of fish.",
    Write:
      "This is unrelated."
  },
  hint: "Animal and movement."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 18% of 200?",
  options: ["30", "36", "40", "45"],
  answer: "36",
  explanation:
    "18% of 200 = 18/100 × 200 = 36.",
  wrongExplanations: {
    "30":
      "This is 15% of 200.",
    "40":
      "This is 20% of 200.",
    "45":
      "This is 22.5% of 200."
  },
  hint: "10% is 20 and 8% is 16."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "If 6 workers complete a task in 10 days at the same rate, the total worker-days required are:",
  options: ["16", "60", "100", "600"],
  answer: "60",
  explanation:
    "Worker-days = 6 workers × 10 days = 60 worker-days.",
  wrongExplanations: {
    "16":
      "This incorrectly adds workers and days.",
    "100":
      "This multiplies the days by themselves.",
    "600":
      "This is ten times too large."
  },
  hint: "Workers × days."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Encryption is used mainly to:",
  options: [
    "Protect data by converting it into an unreadable form without the key",
    "Increase screen resolution",
    "Delete every file",
    "Improve keyboard speed"
  ],
  answer: "Protect data by converting it into an unreadable form without the key",
  explanation:
    "Encryption transforms readable data into encoded data that normally requires a key to recover.",
  wrongExplanations: {
    "Increase screen resolution":
      "Resolution is a display property.",
    "Delete every file":
      "Encryption protects data rather than necessarily deleting it.",
    "Improve keyboard speed":
      "Keyboard performance is unrelated."
  },
  hint: "Protect readable data."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of the World Trade Organization is in:",
  options: ["Geneva", "Paris", "New York", "Rome"],
  answer: "Geneva",
  explanation:
    "The World Trade Organization is headquartered in Geneva, Switzerland.",
  wrongExplanations: {
    Paris:
      "UNESCO is headquartered in Paris.",
    "New York":
      "The principal UN headquarters is in New York.",
    Rome:
      "FAO is headquartered in Rome."
  },
  hint: "Switzerland."
},
{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Qualitative research mainly focuses on:",
  options: [
    "Meanings, experiences and interpretations",
    "Only numerical measurement",
    "Only laboratory experiments",
    "Only financial data"
  ],
  answer: "Meanings, experiences and interpretations",
  explanation:
    "Qualitative research is mainly concerned with understanding meanings, experiences, perceptions and social processes.",
  wrongExplanations: {
    "Only numerical measurement":
      "Numerical measurement is more strongly associated with quantitative research.",
    "Only laboratory experiments":
      "Qualitative research can use interviews, observation and case studies.",
    "Only financial data":
      "Financial data are not the defining feature of qualitative research."
  },
  hint: "Think words and meanings."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Quantitative research mainly relies on:",
  options: [
    "Numerical data and statistical analysis",
    "Only personal stories",
    "Only philosophical discussion",
    "Only historical documents"
  ],
  answer: "Numerical data and statistical analysis",
  explanation:
    "Quantitative research commonly uses measurable variables, numerical data and statistical techniques.",
  wrongExplanations: {
    "Only personal stories":
      "Personal narratives are more common in qualitative research.",
    "Only philosophical discussion":
      "This is not the defining feature of quantitative research.",
    "Only historical documents":
      "Historical documents can be used in many types of research."
  },
  hint: "Numbers and statistics."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Equality of opportunity means:",
  options: [
    "People should have fair chances to pursue positions and opportunities",
    "Everyone must receive identical outcomes",
    "No competition should exist",
    "Only wealthy people should compete"
  ],
  answer: "People should have fair chances to pursue positions and opportunities",
  explanation:
    "Equality of opportunity emphasises fair access to opportunities rather than identical outcomes for everyone.",
  wrongExplanations: {
    "Everyone must receive identical outcomes":
      "That describes equality of outcome more closely.",
    "No competition should exist":
      "Competition can still exist under fair opportunity.",
    "Only wealthy people should compete":
      "That contradicts equal opportunity."
  },
  hint: "Fair chance, not identical result."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Supreme Court of India is the:",
  options: [
    "Highest court of the country",
    "Lower house of Parliament",
    "Election authority",
    "Central bank"
  ],
  answer: "Highest court of the country",
  explanation:
    "The Supreme Court is the apex judicial institution in India.",
  wrongExplanations: {
    "Lower house of Parliament":
      "The Lok Sabha is the lower house of Parliament.",
    "Election authority":
      "The Election Commission manages elections.",
    "Central bank":
      "The Reserve Bank of India is the central bank."
  },
  hint: "Apex judiciary."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Diplomacy mainly involves:",
  options: [
    "Negotiation and communication between states",
    "Only military invasion",
    "Only domestic taxation",
    "Only judicial review"
  ],
  answer: "Negotiation and communication between states",
  explanation:
    "Diplomacy is a major tool through which states communicate, negotiate and manage international relations.",
  wrongExplanations: {
    "Only military invasion":
      "Military action is different from diplomacy.",
    "Only domestic taxation":
      "Taxation is a domestic fiscal issue.",
    "Only judicial review":
      "Judicial review is a legal process."
  },
  hint: "Talk before conflict."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Decentralisation means:",
  options: [
    "Distributing authority to lower levels",
    "Concentrating all authority at the top",
    "Ending administration",
    "Removing all local institutions"
  ],
  answer: "Distributing authority to lower levels",
  explanation:
    "Decentralisation involves transferring decision-making authority and responsibilities to lower or local levels.",
  wrongExplanations: {
    "Concentrating all authority at the top":
      "That describes centralisation.",
    "Ending administration":
      "Decentralisation reorganises administration rather than ending it.",
    "Removing all local institutions":
      "Local institutions are often strengthened through decentralisation."
  },
  hint: "Power downward."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Which ancient Indian ruler is associated with the Kalinga War?",
  options: ["Ashoka", "Samudragupta", "Harsha", "Kanishka"],
  answer: "Ashoka",
  explanation:
    "Ashoka fought the Kalinga War, after which he adopted a more peaceful policy associated with dhamma.",
  wrongExplanations: {
    Samudragupta:
      "Samudragupta was a Gupta ruler.",
    Harsha:
      "Harsha ruled centuries later.",
    Kanishka:
      "Kanishka belonged to the Kushan dynasty."
  },
  hint: "Mauryan emperor."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Kanishka is associated with which dynasty?",
  options: ["Kushan", "Maurya", "Gupta", "Chola"],
  answer: "Kushan",
  explanation:
    "Kanishka was one of the most famous rulers of the Kushan Empire.",
  wrongExplanations: {
    Maurya:
      "The Mauryan dynasty included rulers such as Chandragupta Maurya and Ashoka.",
    Gupta:
      "The Gupta dynasty came later.",
    Chola:
      "The Cholas were a major South Indian dynasty."
  },
  hint: "Central Asian origin."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Iqta system was mainly associated with:",
  options: [
    "Delhi Sultanate",
    "Mauryan Empire",
    "Gupta Empire",
    "British rule"
  ],
  answer: "Delhi Sultanate",
  explanation:
    "The Iqta system was an important administrative and revenue arrangement under the Delhi Sultanate.",
  wrongExplanations: {
    "Mauryan Empire":
      "The Mauryan administration followed different arrangements.",
    "Gupta Empire":
      "The Gupta period used different administrative structures.",
    "British rule":
      "British rule introduced systems such as Permanent Settlement and Ryotwari."
  },
  hint: "Sultanate revenue assignments."
},

{
  subject: "History",
  category: "Modern India",
  question: "Who founded the Servants of India Society?",
  options: [
    "Gopal Krishna Gokhale",
    "Bal Gangadhar Tilak",
    "Mahatma Gandhi",
    "Subhas Chandra Bose"
  ],
  answer: "Gopal Krishna Gokhale",
  explanation:
    "Gopal Krishna Gokhale founded the Servants of India Society in 1905.",
  wrongExplanations: {
    "Bal Gangadhar Tilak":
      "Tilak was associated with assertive nationalism and Home Rule.",
    "Mahatma Gandhi":
      "Gandhi founded other organisations and movements.",
    "Subhas Chandra Bose":
      "Bose later led the INA and Forward Bloc."
  },
  hint: "Moderate nationalist leader."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Cripps Mission came to India in:",
  options: ["1942", "1930", "1946", "1919"],
  answer: "1942",
  explanation:
    "The Cripps Mission came to India in 1942 with proposals for constitutional development during World War II.",
  wrongExplanations: {
    "1930":
      "1930 is associated with the Civil Disobedience Movement.",
    "1946":
      "1946 is associated with the Cabinet Mission.",
    "1919":
      "1919 is associated with the Rowlatt Act and constitutional reforms."
  },
  hint: "Same year as Quit India."
},

{
  subject: "History",
  category: "World History",
  question: "The Cold War was mainly a rivalry between:",
  options: [
    "United States and Soviet Union",
    "Britain and France",
    "India and China",
    "Germany and Italy"
  ],
  answer: "United States and Soviet Union",
  explanation:
    "The Cold War was dominated by ideological and geopolitical rivalry between the United States and the Soviet Union.",
  wrongExplanations: {
    "Britain and France":
      "They were Western allies rather than the two main Cold War rivals.",
    "India and China":
      "They had important relations but did not define the Cold War system.",
    "Germany and Italy":
      "This pairing is more associated with the Second World War period."
  },
  hint: "Capitalist and communist superpowers."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Latitude measures distance:",
  options: [
    "North or south of the Equator",
    "East or west of Greenwich",
    "Above sea level only",
    "Between two mountains"
  ],
  answer: "North or south of the Equator",
  explanation:
    "Latitude measures angular distance north or south of the Equator.",
  wrongExplanations: {
    "East or west of Greenwich":
      "That describes longitude.",
    "Above sea level only":
      "That describes elevation.",
    "Between two mountains":
      "This is unrelated."
  },
  hint: "Equator reference."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Longitude measures distance:",
  options: [
    "East or west of the Prime Meridian",
    "North or south of the Equator",
    "Above sea level",
    "Between river valleys"
  ],
  answer: "East or west of the Prime Meridian",
  explanation:
    "Longitude measures angular distance east or west of the Prime Meridian.",
  wrongExplanations: {
    "North or south of the Equator":
      "That describes latitude.",
    "Above sea level":
      "That describes elevation.",
    "Between river valleys":
      "This is unrelated."
  },
  hint: "Greenwich reference."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A rain shadow area is usually found:",
  options: [
    "On the leeward side of a mountain",
    "On the windward side only",
    "At the Equator only",
    "Inside every river delta"
  ],
  answer: "On the leeward side of a mountain",
  explanation:
    "The leeward side receives less rainfall after moist air loses much of its moisture on the windward slope.",
  wrongExplanations: {
    "On the windward side only":
      "The windward side generally receives more rainfall.",
    "At the Equator only":
      "Rain shadow depends on relief, not just latitude.",
    "Inside every river delta":
      "Deltas are unrelated to rain shadow formation."
  },
  hint: "Dry side of mountain."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Literacy rate is generally used as an indicator of:",
  options: [
    "Educational development",
    "Only rainfall",
    "Only soil fertility",
    "Only industrial location"
  ],
  answer: "Educational development",
  explanation:
    "Literacy rate is commonly used to assess educational and social development.",
  wrongExplanations: {
    "Only rainfall":
      "Rainfall is a climatic variable.",
    "Only soil fertility":
      "Soil fertility concerns agriculture.",
    "Only industrial location":
      "Industrial location depends on many factors."
  },
  hint: "Ability to read and write."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A settlement with high population density and non-agricultural occupations is generally:",
  options: ["Urban", "Rural", "Nomadic only", "Uninhabited"],
  answer: "Urban",
  explanation:
    "Urban settlements generally have higher population density and more non-agricultural economic activity.",
  wrongExplanations: {
    Rural:
      "Rural settlements tend to have lower density and stronger agricultural orientation.",
    "Nomadic only":
      "Nomadic groups do not necessarily form dense permanent settlements.",
    Uninhabited:
      "An uninhabited area has no settled population."
  },
  hint: "Town or city."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Tourism belongs mainly to which sector?",
  options: ["Tertiary", "Primary", "Secondary", "Extractive only"],
  answer: "Tertiary",
  explanation:
    "Tourism is a service activity and therefore belongs mainly to the tertiary sector.",
  wrongExplanations: {
    Primary:
      "Primary activities involve extraction from nature.",
    Secondary:
      "Secondary activities involve manufacturing.",
    "Extractive only":
      "Tourism does not extract natural resources."
  },
  hint: "Service activity."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Utility in economics refers to:",
  options: [
    "Satisfaction obtained from consumption",
    "Only government service",
    "Only electricity supply",
    "Only production cost"
  ],
  answer: "Satisfaction obtained from consumption",
  explanation:
    "Utility refers to the satisfaction or benefit a consumer derives from consuming goods or services.",
  wrongExplanations: {
    "Only government service":
      "Public utilities are different from the economic concept of utility.",
    "Only electricity supply":
      "Electricity can provide utility but does not define the concept.",
    "Only production cost":
      "Cost is a producer-side concept."
  },
  hint: "Consumer satisfaction."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A price ceiling is:",
  options: [
    "A legal maximum price",
    "A legal minimum price",
    "A tax on income",
    "A subsidy only"
  ],
  answer: "A legal maximum price",
  explanation:
    "A price ceiling sets the highest legally permitted price for a good or service.",
  wrongExplanations: {
    "A legal minimum price":
      "That is a price floor.",
    "A tax on income":
      "Income taxation is unrelated.",
    "A subsidy only":
      "A subsidy is financial support, not a price ceiling."
  },
  hint: "Ceiling = maximum."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Gross Domestic Product at constant prices is mainly used to measure:",
  options: [
    "Real economic output",
    "Only inflation",
    "Only government revenue",
    "Only imports"
  ],
  answer: "Real economic output",
  explanation:
    "GDP at constant prices removes the effect of price changes and is used to measure real output growth.",
  wrongExplanations: {
    "Only inflation":
      "Inflation is measured using price indices.",
    "Only government revenue":
      "Government revenue is a fiscal measure.",
    "Only imports":
      "Imports are only one part of national accounting."
  },
  hint: "Remove price changes."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "A current account in the balance of payments includes:",
  options: [
    "Trade in goods and services and related income flows",
    "Only government salaries",
    "Only domestic taxes",
    "Only central bank reserves"
  ],
  answer: "Trade in goods and services and related income flows",
  explanation:
    "The current account includes exports and imports of goods and services along with income and transfer flows.",
  wrongExplanations: {
    "Only government salaries":
      "Government salaries are not the defining component.",
    "Only domestic taxes":
      "Taxes are part of public finance.",
    "Only central bank reserves":
      "Reserve assets belong elsewhere in external accounts."
  },
  hint: "Trade and income flows."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "A fiscal deficit broadly means:",
  options: [
    "Government expenditure exceeds its non-borrowed receipts",
    "Exports exceed imports",
    "Prices fall",
    "Population declines"
  ],
  answer: "Government expenditure exceeds its non-borrowed receipts",
  explanation:
    "Fiscal deficit reflects the government's total borrowing requirement when expenditure exceeds revenue and non-debt receipts.",
  wrongExplanations: {
    "Exports exceed imports":
      "That describes a trade surplus.",
    "Prices fall":
      "That describes deflation.",
    "Population declines":
      "That is a demographic change."
  },
  hint: "Government borrowing gap."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Multidimensional poverty considers:",
  options: [
    "Several deprivations such as health, education and living standards",
    "Income only",
    "Only exports",
    "Only inflation"
  ],
  answer: "Several deprivations such as health, education and living standards",
  explanation:
    "Multidimensional poverty goes beyond income to include multiple forms of deprivation.",
  wrongExplanations: {
    "Income only":
      "That is narrower than multidimensional poverty.",
    "Only exports":
      "Exports are unrelated.",
    "Only inflation":
      "Inflation can affect poverty but does not define multidimensional poverty."
  },
  hint: "More than income."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Socialisation continues:",
  options: [
    "Throughout life",
    "Only during infancy",
    "Only during school",
    "Only after retirement"
  ],
  answer: "Throughout life",
  explanation:
    "Socialisation is a lifelong process as individuals continuously learn new roles, norms and expectations.",
  wrongExplanations: {
    "Only during infancy":
      "Early childhood is important, but socialisation continues later.",
    "Only during school":
      "Family, work, media and other institutions also socialise people.",
    "Only after retirement":
      "Socialisation begins much earlier."
  },
  hint: "Lifelong process."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "A reference group is a group that:",
  options: [
    "Individuals use as a standard for evaluating themselves",
    "Always consists of family members",
    "Must be a political party",
    "Has no influence on behaviour"
  ],
  answer: "Individuals use as a standard for evaluating themselves",
  explanation:
    "Reference groups provide standards for attitudes, behaviour, aspirations or self-evaluation.",
  wrongExplanations: {
    "Always consists of family members":
      "Reference groups can include many different groups.",
    "Must be a political party":
      "Political parties can be reference groups, but not always.",
    "Has no influence on behaviour":
      "Reference groups can strongly influence attitudes and behaviour."
  },
  hint: "Group used for comparison."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "The economy as a social institution is mainly concerned with:",
  options: [
    "Production, distribution and consumption",
    "Only marriage",
    "Only religious rituals",
    "Only elections"
  ],
  answer: "Production, distribution and consumption",
  explanation:
    "The economic institution organises how goods and services are produced, distributed and consumed.",
  wrongExplanations: {
    "Only marriage":
      "Marriage belongs to the family institution.",
    "Only religious rituals":
      "Those belong mainly to religious institutions.",
    "Only elections":
      "Elections belong to political institutions."
  },
  hint: "Goods and services."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Class systems generally allow more social mobility than:",
  options: ["Caste systems", "Open markets", "Modern schools", "Voluntary groups"],
  answer: "Caste systems",
  explanation:
    "Class systems are usually more open to movement than traditional caste systems based largely on birth.",
  wrongExplanations: {
    "Open markets":
      "Markets are not systems of social stratification in the same sense.",
    "Modern schools":
      "Schools are educational institutions.",
    "Voluntary groups":
      "Voluntary groups are not stratification systems."
  },
  hint: "Open versus closed stratification."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Modernisation can lead to:",
  options: [
    "Changes in institutions, technology and social values",
    "No social change at all",
    "Only population decline",
    "Only environmental destruction"
  ],
  answer: "Changes in institutions, technology and social values",
  explanation:
    "Modernisation involves broad transformations in technology, economy, institutions and cultural patterns.",
  wrongExplanations: {
    "No social change at all":
      "Modernisation is itself a process of change.",
    "Only population decline":
      "Population change is only one possible consequence.",
    "Only environmental destruction":
      "Environmental problems may occur but do not define modernisation."
  },
  hint: "Broad transformation."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "A case study examines:",
  options: [
    "A particular case in depth",
    "Only national statistics",
    "Every society at once",
    "No evidence"
  ],
  answer: "A particular case in depth",
  explanation:
    "Case-study research investigates a bounded case such as a person, institution, community or event in detail.",
  wrongExplanations: {
    "Only national statistics":
      "Case studies can use many types of evidence.",
    "Every society at once":
      "A case study is usually focused.",
    "No evidence":
      "Case studies depend on systematic evidence."
  },
  hint: "Deep study of one case."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Attention is important in learning because it helps the learner:",
  options: [
    "Focus on relevant information",
    "Ignore every stimulus",
    "Avoid all thinking",
    "Forget immediately"
  ],
  answer: "Focus on relevant information",
  explanation:
    "Attention helps learners select and process information necessary for effective learning.",
  wrongExplanations: {
    "Ignore every stimulus":
      "Attention selects rather than completely blocks all stimuli.",
    "Avoid all thinking":
      "Attention supports cognitive processing.",
    "Forget immediately":
      "Attention generally supports encoding and memory."
  },
  hint: "Focus."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Memory involves:",
  options: [
    "Encoding, storage and retrieval of information",
    "Only handwriting",
    "Only physical exercise",
    "Only punishment"
  ],
  answer: "Encoding, storage and retrieval of information",
  explanation:
    "Memory involves taking in information, retaining it and retrieving it when required.",
  wrongExplanations: {
    "Only handwriting":
      "Handwriting is a motor and academic skill.",
    "Only physical exercise":
      "Exercise may influence health but does not define memory.",
    "Only punishment":
      "Punishment is unrelated to the core memory process."
  },
  hint: "Learn, store, recall."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Brainstorming is useful for:",
  options: [
    "Generating many ideas",
    "Stopping creativity",
    "Allowing only one answer immediately",
    "Preventing participation"
  ],
  answer: "Generating many ideas",
  explanation:
    "Brainstorming encourages participants to produce a variety of ideas before evaluating them.",
  wrongExplanations: {
    "Stopping creativity":
      "Brainstorming is intended to encourage creativity.",
    "Allowing only one answer immediately":
      "Multiple possibilities are encouraged.",
    "Preventing participation":
      "Participation is central."
  },
  hint: "Idea generation."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Feedback is most useful when it is:",
  options: [
    "Specific and constructive",
    "Always insulting",
    "Completely unrelated",
    "Never given"
  ],
  answer: "Specific and constructive",
  explanation:
    "Effective feedback identifies strengths, weaknesses and ways to improve.",
  wrongExplanations: {
    "Always insulting":
      "Insults do not support learning.",
    "Completely unrelated":
      "Feedback should address performance.",
    "Never given":
      "Feedback can be important for improvement."
  },
  hint: "Help the learner improve."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "An accommodation in education generally means:",
  options: [
    "Changing how a learner accesses learning without necessarily changing the learning goal",
    "Removing the learner from education",
    "Cancelling every assessment",
    "Lowering all standards automatically"
  ],
  answer: "Changing how a learner accesses learning without necessarily changing the learning goal",
  explanation:
    "Accommodations can include changes in presentation, timing, environment or response format while maintaining core learning expectations.",
  wrongExplanations: {
    "Removing the learner from education":
      "Accommodation aims to support participation.",
    "Cancelling every assessment":
      "Assessments can be adapted rather than removed.",
    "Lowering all standards automatically":
      "Accommodation does not necessarily change learning standards."
  },
  hint: "Access support."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Education for citizenship aims to develop:",
  options: [
    "Responsible and informed participation in society",
    "Only examination performance",
    "Only physical strength",
    "Only private income"
  ],
  answer: "Responsible and informed participation in society",
  explanation:
    "Citizenship education promotes knowledge, values and skills needed for responsible participation in public life.",
  wrongExplanations: {
    "Only examination performance":
      "Citizenship education is broader than exams.",
    "Only physical strength":
      "Physical development is not its central aim.",
    "Only private income":
      "Economic gain is not its main focus."
  },
  hint: "Responsible citizen."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'Each of the students ___ a book.'",
  options: ["has", "have", "having", "are having"],
  answer: "has",
  explanation:
    "'Each' is treated as singular in standard formal grammar, so 'has' is correct.",
  wrongExplanations: {
    have:
      "The plural verb does not agree with singular 'each'.",
    having:
      "A finite verb is required.",
    "are having":
      "This does not agree with the singular subject."
  },
  hint: "Each = singular."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct passive form of 'They built the bridge.'",
  options: [
    "The bridge was built by them.",
    "The bridge built them.",
    "The bridge is build by them.",
    "They were built by the bridge."
  ],
  answer: "The bridge was built by them.",
  explanation:
    "The object becomes the subject and the passive uses 'was built'.",
  wrongExplanations: {
    "The bridge built them.":
      "This changes the meaning and remains active.",
    "The bridge is build by them.":
      "The past participle 'built' is required.",
    "They were built by the bridge.":
      "This reverses the meaning."
  },
  hint: "Object becomes subject."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'reliable'.",
  options: ["Dependable", "Uncertain", "Careless", "False"],
  answer: "Dependable",
  explanation:
    "Reliable means dependable or trustworthy.",
  wrongExplanations: {
    Uncertain:
      "Uncertain is almost the opposite.",
    Careless:
      "Careless does not mean reliable.",
    False:
      "False refers to incorrectness."
  },
  hint: "Can be trusted."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'frequent'.",
  options: ["Rare", "Common", "Regular", "Repeated"],
  answer: "Rare",
  explanation:
    "Frequent means occurring often, while rare means occurring infrequently.",
  wrongExplanations: {
    Common:
      "Common is similar to frequent.",
    Regular:
      "Regular can imply frequent occurrence.",
    Repeated:
      "Repeated is also related to frequency."
  },
  hint: "Not often."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "The purpose of skimming a passage is mainly to:",
  options: [
    "Get the general idea quickly",
    "Memorise every word",
    "Check spelling only",
    "Translate every sentence"
  ],
  answer: "Get the general idea quickly",
  explanation:
    "Skimming is rapid reading used to identify the main idea and overall structure.",
  wrongExplanations: {
    "Memorise every word":
      "Skimming is fast and selective.",
    "Check spelling only":
      "Proofreading checks spelling.",
    "Translate every sentence":
      "Translation is a different task."
  },
  hint: "Read quickly for the gist."
},

{
  subject: "English",
  category: "Writing",
  question: "A conclusion paragraph should generally:",
  options: [
    "Bring the discussion to a clear close",
    "Introduce many unrelated new arguments",
    "Contain no connection to the essay",
    "Only repeat the title"
  ],
  answer: "Bring the discussion to a clear close",
  explanation:
    "A conclusion summarises or synthesises the discussion and reinforces the main point.",
  wrongExplanations: {
    "Introduce many unrelated new arguments":
      "Major new arguments should normally appear in the body.",
    "Contain no connection to the essay":
      "The conclusion should relate directly to the discussion.",
    "Only repeat the title":
      "A conclusion should do more than repeat the title."
  },
  hint: "Close the argument."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 3, 9, 27, 81, ?",
  options: ["162", "243", "324", "729"],
  answer: "243",
  explanation:
    "Each term is multiplied by 3, so 81 × 3 = 243.",
  wrongExplanations: {
    "162":
      "This multiplies by 2.",
    "324":
      "This multiplies by 4.",
    "729":
      "729 would come later in the sequence."
  },
  hint: "Multiply by 3."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "If all teachers are educated and Ravi is a teacher, then Ravi is:",
  options: ["Educated", "Not educated", "A doctor", "Cannot be determined"],
  answer: "Educated",
  explanation:
    "If every teacher belongs to the educated group and Ravi is a teacher, then Ravi must be educated.",
  wrongExplanations: {
    "Not educated":
      "This contradicts the first statement.",
    "A doctor":
      "No information about being a doctor is given.",
    "Cannot be determined":
      "The conclusion follows directly."
  },
  hint: "Simple syllogism."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 5/8 of 160?",
  options: ["80", "90", "100", "120"],
  answer: "100",
  explanation:
    "160 ÷ 8 = 20, and 20 × 5 = 100.",
  wrongExplanations: {
    "80":
      "This is half of 160.",
    "90":
      "This does not match 5/8.",
    "120":
      "This is three-fourths of 160."
  },
  hint: "Divide by 8 first."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A salary rises from ₹20,000 to ₹22,000. What is the percentage increase?",
  options: ["5%", "10%", "15%", "20%"],
  answer: "10%",
  explanation:
    "Increase = ₹2,000. Percentage increase = 2000/20000 × 100 = 10%.",
  wrongExplanations: {
    "5%":
      "5% of ₹20,000 is only ₹1,000.",
    "15%":
      "15% would be ₹3,000.",
    "20%":
      "20% would be ₹4,000."
  },
  hint: "Increase divided by original salary."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "A backup is created mainly to:",
  options: [
    "Recover data if the original is lost or damaged",
    "Make passwords weaker",
    "Remove all files permanently",
    "Disable storage"
  ],
  answer: "Recover data if the original is lost or damaged",
  explanation:
    "Backups provide additional copies of data so information can be restored after loss, corruption or device failure.",
  wrongExplanations: {
    "Make passwords weaker":
      "Backups are unrelated to password strength.",
    "Remove all files permanently":
      "Backups preserve copies rather than destroy them.",
    "Disable storage":
      "Backups require storage."
  },
  hint: "Extra copy for recovery."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The United Nations Security Council has a total of:",
  options: ["15 members", "5 members", "10 members", "20 members"],
  answer: "15 members",
  explanation:
    "The Security Council consists of 5 permanent and 10 non-permanent members.",
  wrongExplanations: {
    "5 members":
      "There are five permanent members, not five total.",
    "10 members":
      "There are ten non-permanent members.",
    "20 members":
      "The Council has fifteen members."
  },
  hint: "5 permanent + 10 elected."
},
{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Random sampling means:",
  options: [
    "Every member of the population has a known chance of selection",
    "Only convenient respondents are selected",
    "Only experts are selected",
    "No sampling method is used"
  ],
  answer: "Every member of the population has a known chance of selection",
  explanation:
    "Random sampling uses chance-based selection so members of the population have a known probability of being chosen.",
  wrongExplanations: {
    "Only convenient respondents are selected":
      "That describes convenience sampling.",
    "Only experts are selected":
      "That is closer to purposive sampling.",
    "No sampling method is used":
      "Random sampling is itself a sampling method."
  },
  hint: "Selection by chance."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Secondary data are usually obtained from:",
  options: [
    "Existing reports, books, records and datasets",
    "Only direct interviews conducted by the researcher",
    "Only laboratory experiments",
    "Only participant observation"
  ],
  answer: "Existing reports, books, records and datasets",
  explanation:
    "Secondary data have already been collected or produced by other researchers, institutions or agencies.",
  wrongExplanations: {
    "Only direct interviews conducted by the researcher":
      "Direct interviews usually produce primary data.",
    "Only laboratory experiments":
      "Experiments can generate primary data.",
    "Only participant observation":
      "Participant observation usually generates primary data."
  },
  hint: "Already existing information."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Political obligation refers to the question of:",
  options: [
    "Why citizens should obey the state",
    "Why states should have no laws",
    "How to abolish all institutions",
    "Why elections should end"
  ],
  answer: "Why citizens should obey the state",
  explanation:
    "Political obligation examines the moral or political reasons citizens may have for obeying laws and political authority.",
  wrongExplanations: {
    "Why states should have no laws":
      "Political obligation assumes the existence of political authority and law.",
    "How to abolish all institutions":
      "That is not the central question.",
    "Why elections should end":
      "Political obligation is broader than electoral politics."
  },
  hint: "Why obey authority?"
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The basic structure doctrine is associated with which Supreme Court case?",
  options: [
    "Kesavananda Bharati case",
    "Golaknath case only",
    "Maneka Gandhi case",
    "S.R. Bommai case"
  ],
  answer: "Kesavananda Bharati case",
  explanation:
    "The Supreme Court articulated the basic structure doctrine in the Kesavananda Bharati judgment of 1973.",
  wrongExplanations: {
    "Golaknath case only":
      "Golaknath was important in the amendment debate but did not establish the basic structure doctrine.",
    "Maneka Gandhi case":
      "Maneka Gandhi is strongly associated with Article 21 and due process principles.",
    "S.R. Bommai case":
      "S.R. Bommai is important for federalism and Article 356."
  },
  hint: "1973."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "The term 'national interest' is most closely associated with:",
  options: [
    "Realist approaches",
    "Only postmodernism",
    "Only feminism",
    "Only environmentalism"
  ],
  answer: "Realist approaches",
  explanation:
    "Realist theories place national interest, power and security at the centre of international politics.",
  wrongExplanations: {
    "Only postmodernism":
      "Postmodern approaches critique dominant categories and discourses.",
    "Only feminism":
      "Feminist approaches analyse gender and power relations.",
    "Only environmentalism":
      "Environmental politics focuses on ecological issues."
  },
  hint: "Power and security."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Span of control refers to:",
  options: [
    "The number of subordinates supervised by a manager",
    "The length of a government building",
    "The number of laws in a constitution",
    "The duration of an election"
  ],
  answer: "The number of subordinates supervised by a manager",
  explanation:
    "Span of control refers to how many subordinates directly report to and are supervised by one superior.",
  wrongExplanations: {
    "The length of a government building":
      "This is a physical measurement, not an administrative concept.",
    "The number of laws in a constitution":
      "This is unrelated.",
    "The duration of an election":
      "Election duration is not span of control."
  },
  hint: "How many people one superior manages."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Sangam literature is associated mainly with:",
  options: [
    "Ancient Tamil society",
    "Mughal administration",
    "Delhi Sultanate",
    "British colonial rule"
  ],
  answer: "Ancient Tamil society",
  explanation:
    "Sangam literature provides important information about early historic Tamil society, culture and polity.",
  wrongExplanations: {
    "Mughal administration":
      "Sangam literature predates the Mughal period by many centuries.",
    "Delhi Sultanate":
      "It is much earlier than the Delhi Sultanate.",
    "British colonial rule":
      "It is ancient rather than colonial literature."
  },
  hint: "Tamilakam."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Which dynasty is associated with rulers such as Rajaraja I and Rajendra I?",
  options: ["Chola", "Maurya", "Gupta", "Kushan"],
  answer: "Chola",
  explanation:
    "Rajaraja I and Rajendra I were major rulers of the imperial Chola dynasty.",
  wrongExplanations: {
    Maurya:
      "The Mauryan dynasty ruled much earlier in northern India.",
    Gupta:
      "The Gupta dynasty was centred mainly in northern India.",
    Kushan:
      "The Kushans ruled parts of northern India and Central Asia."
  },
  hint: "Powerful South Indian maritime dynasty."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who was the first woman ruler of the Delhi Sultanate?",
  options: ["Razia Sultan", "Nur Jahan", "Rani Durgavati", "Chand Bibi"],
  answer: "Razia Sultan",
  explanation:
    "Razia Sultan ruled the Delhi Sultanate during the thirteenth century.",
  wrongExplanations: {
    "Nur Jahan":
      "Nur Jahan was an influential Mughal empress but not Sultan of Delhi.",
    "Rani Durgavati":
      "Rani Durgavati ruled Gondwana.",
    "Chand Bibi":
      "Chand Bibi is associated with the Deccan."
  },
  hint: "Daughter of Iltutmish."
},

{
  subject: "History",
  category: "Modern India",
  question: "Who founded the Forward Bloc in 1939?",
  options: [
    "Subhas Chandra Bose",
    "Jawaharlal Nehru",
    "Mahatma Gandhi",
    "Sardar Patel"
  ],
  answer: "Subhas Chandra Bose",
  explanation:
    "Subhas Chandra Bose founded the Forward Bloc after resigning from the presidency of the Indian National Congress.",
  wrongExplanations: {
    "Jawaharlal Nehru":
      "Nehru remained a major Congress leader.",
    "Mahatma Gandhi":
      "Gandhi did not found the Forward Bloc.",
    "Sardar Patel":
      "Patel was a senior Congress leader."
  },
  hint: "1939."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Mountbatten Plan was announced in:",
  options: ["1947", "1946", "1942", "1935"],
  answer: "1947",
  explanation:
    "The Mountbatten Plan of June 1947 outlined the transfer of power and partition of British India.",
  wrongExplanations: {
    "1946":
      "1946 is associated with the Cabinet Mission.",
    "1942":
      "1942 is associated with the Cripps Mission and Quit India.",
    "1935":
      "1935 is associated with the Government of India Act."
  },
  hint: "Final transfer of power."
},

{
  subject: "History",
  category: "World History",
  question: "The Marshall Plan was designed mainly to:",
  options: [
    "Support European economic recovery after World War II",
    "Create the League of Nations",
    "Start the Russian Revolution",
    "End the French Revolution"
  ],
  answer: "Support European economic recovery after World War II",
  explanation:
    "The Marshall Plan provided American economic assistance for post-war reconstruction in Western Europe.",
  wrongExplanations: {
    "Create the League of Nations":
      "The League was established after World War I.",
    "Start the Russian Revolution":
      "The Russian Revolution took place in 1917.",
    "End the French Revolution":
      "The French Revolution belongs to the late eighteenth century."
  },
  hint: "Post-1945 reconstruction."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The hydrosphere includes:",
  options: [
    "All water on, under and above Earth's surface",
    "Only ocean water",
    "Only groundwater",
    "Only atmospheric gases"
  ],
  answer: "All water on, under and above Earth's surface",
  explanation:
    "The hydrosphere includes oceans, rivers, lakes, groundwater, ice and atmospheric water.",
  wrongExplanations: {
    "Only ocean water":
      "Oceans are only one part of the hydrosphere.",
    "Only groundwater":
      "Groundwater is only one component.",
    "Only atmospheric gases":
      "Most atmospheric gases belong to the atmosphere, not the hydrosphere."
  },
  hint: "All forms of water."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A fold mountain is formed mainly by:",
  options: [
    "Compression of Earth's crust",
    "River deposition only",
    "Wind erosion only",
    "Glacial melting only"
  ],
  answer: "Compression of Earth's crust",
  explanation:
    "Fold mountains form when crustal layers are compressed and folded during tectonic convergence.",
  wrongExplanations: {
    "River deposition only":
      "River deposition creates features such as deltas and floodplains.",
    "Wind erosion only":
      "Wind erosion creates desert landforms.",
    "Glacial melting only":
      "Glacial processes create different landforms."
  },
  hint: "Converging plates."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Which gas is most important for photosynthesis?",
  options: ["Carbon dioxide", "Nitrogen", "Argon", "Helium"],
  answer: "Carbon dioxide",
  explanation:
    "Plants use carbon dioxide, water and sunlight during photosynthesis.",
  wrongExplanations: {
    Nitrogen:
      "Nitrogen is important for plant nutrition but is not the main gas consumed in photosynthesis.",
    Argon:
      "Argon is chemically inert.",
    Helium:
      "Helium is not used in photosynthesis."
  },
  hint: "Plants absorb it from the air."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A rural settlement is generally associated more strongly with:",
  options: [
    "Primary activities such as agriculture",
    "Only software development",
    "Only stock exchanges",
    "Only international airports"
  ],
  answer: "Primary activities such as agriculture",
  explanation:
    "Rural settlements are often closely associated with agriculture, forestry and other primary-sector activities.",
  wrongExplanations: {
    "Only software development":
      "Software is mainly a tertiary or quaternary activity.",
    "Only stock exchanges":
      "Stock exchanges are highly urban financial institutions.",
    "Only international airports":
      "Large international airports are usually urban infrastructure."
  },
  hint: "Village economy."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Population ageing occurs when:",
  options: [
    "The proportion of older people increases",
    "Only birth rates rise sharply",
    "Every person becomes the same age",
    "Migration completely stops"
  ],
  answer: "The proportion of older people increases",
  explanation:
    "Population ageing refers to an increasing share of older age groups in the population.",
  wrongExplanations: {
    "Only birth rates rise sharply":
      "High birth rates generally increase younger age groups.",
    "Every person becomes the same age":
      "This is impossible.",
    "Migration completely stops":
      "Migration can affect ageing but does not define it."
  },
  hint: "Larger elderly share."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "A market-oriented industry tends to locate near:",
  options: [
    "Its consumers",
    "Only mineral deposits",
    "Only forests",
    "Only river sources"
  ],
  answer: "Its consumers",
  explanation:
    "Industries producing perishable, bulky or consumer-sensitive goods may locate close to markets.",
  wrongExplanations: {
    "Only mineral deposits":
      "That is more relevant to raw-material-oriented industries.",
    "Only forests":
      "Forest location matters only for certain industries.",
    "Only river sources":
      "Water may matter, but market orientation is defined by proximity to consumers."
  },
  hint: "Close to buyers."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A price floor is:",
  options: [
    "A legal minimum price",
    "A legal maximum price",
    "A tax on exports",
    "A subsidy only"
  ],
  answer: "A legal minimum price",
  explanation:
    "A price floor prevents prices from falling below a legally established minimum.",
  wrongExplanations: {
    "A legal maximum price":
      "That is a price ceiling.",
    "A tax on exports":
      "Export taxation is unrelated.",
    "A subsidy only":
      "A subsidy can support prices but is not itself a price floor."
  },
  hint: "Floor = minimum."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Consumer surplus is the difference between:",
  options: [
    "What a consumer is willing to pay and what they actually pay",
    "Total revenue and total cost",
    "Exports and imports",
    "Taxes and expenditure"
  ],
  answer: "What a consumer is willing to pay and what they actually pay",
  explanation:
    "Consumer surplus measures the benefit consumers receive when market price is below their maximum willingness to pay.",
  wrongExplanations: {
    "Total revenue and total cost":
      "That is related to profit.",
    "Exports and imports":
      "That relates to the balance of trade.",
    "Taxes and expenditure":
      "That relates to public finance."
  },
  hint: "Willingness to pay minus actual price."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Monetary policy mainly affects the economy through:",
  options: [
    "Interest rates, liquidity and credit conditions",
    "Only rainfall",
    "Only population growth",
    "Only elections"
  ],
  answer: "Interest rates, liquidity and credit conditions",
  explanation:
    "Monetary policy influences borrowing, lending and spending through interest rates, liquidity and financial conditions.",
  wrongExplanations: {
    "Only rainfall":
      "Rainfall is a climatic factor.",
    "Only population growth":
      "Population is demographic.",
    "Only elections":
      "Elections do not define monetary policy."
  },
  hint: "Central bank tools."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "A depreciation of a currency generally means:",
  options: [
    "Its value falls relative to another currency",
    "Its value is permanently fixed",
    "Every domestic price falls",
    "Imports disappear completely"
  ],
  answer: "Its value falls relative to another currency",
  explanation:
    "Currency depreciation means that more units of the domestic currency are generally needed to purchase a given amount of foreign currency.",
  wrongExplanations: {
    "Its value is permanently fixed":
      "That describes a fixed exchange rate, not depreciation.",
    "Every domestic price falls":
      "Depreciation may actually raise some import costs.",
    "Imports disappear completely":
      "Imports may become more expensive but do not necessarily disappear."
  },
  hint: "Domestic currency becomes weaker."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "Government borrowing is commonly used to finance:",
  options: [
    "Fiscal deficits",
    "Only private household consumption",
    "Only foreign tourism",
    "Only weather services"
  ],
  answer: "Fiscal deficits",
  explanation:
    "When government expenditure exceeds non-borrowed receipts, borrowing helps finance the resulting fiscal gap.",
  wrongExplanations: {
    "Only private household consumption":
      "Households borrow independently.",
    "Only foreign tourism":
      "Tourism is not the general purpose of government borrowing.",
    "Only weather services":
      "Borrowing supports the overall budget, not just one service."
  },
  hint: "Budget gap."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "The Gini coefficient is commonly used to measure:",
  options: [
    "Income or wealth inequality",
    "Population density",
    "Inflation only",
    "Literacy only"
  ],
  answer: "Income or wealth inequality",
  explanation:
    "The Gini coefficient measures the degree of inequality in a distribution such as income or wealth.",
  wrongExplanations: {
    "Population density":
      "Density measures people per unit area.",
    "Inflation only":
      "Inflation is measured using price indices.",
    "Literacy only":
      "Literacy is measured using education statistics."
  },
  hint: "Inequality measure."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of manifest and latent functions is associated with:",
  options: [
    "Robert K. Merton",
    "Karl Marx",
    "Max Weber",
    "Auguste Comte"
  ],
  answer: "Robert K. Merton",
  explanation:
    "Merton distinguished between manifest functions, which are intended, and latent functions, which are unintended.",
  wrongExplanations: {
    "Karl Marx":
      "Marx focused on class and capitalism.",
    "Max Weber":
      "Weber focused on social action, authority and rationalisation.",
    "Auguste Comte":
      "Comte developed positivism."
  },
  hint: "Intended versus unintended consequences."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Structural functionalism is strongly associated with:",
  options: [
    "Talcott Parsons",
    "Karl Marx only",
    "George Herbert Mead only",
    "Michel Foucault only"
  ],
  answer: "Talcott Parsons",
  explanation:
    "Talcott Parsons developed a major structural-functional theory of social systems.",
  wrongExplanations: {
    "Karl Marx only":
      "Marx is associated with conflict and class analysis.",
    "George Herbert Mead only":
      "Mead is associated with symbolic interactionism.",
    "Michel Foucault only":
      "Foucault is associated with power, discourse and post-structural analysis."
  },
  hint: "Social system and functions."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "A sanction is:",
  options: [
    "A reward or punishment used to encourage conformity",
    "Only a written law",
    "Only an economic price",
    "A population census"
  ],
  answer: "A reward or punishment used to encourage conformity",
  explanation:
    "Sanctions are positive or negative responses used to reinforce social norms.",
  wrongExplanations: {
    "Only a written law":
      "Laws can contain sanctions, but sanctions can also be informal.",
    "Only an economic price":
      "Prices are market variables.",
    "A population census":
      "A census collects demographic information."
  },
  hint: "Reward or punishment."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Political institutions mainly organise:",
  options: [
    "Power, authority and collective decision-making",
    "Only family relationships",
    "Only religious rituals",
    "Only commodity prices"
  ],
  answer: "Power, authority and collective decision-making",
  explanation:
    "Political institutions organise authority, governance, law-making and collective decisions.",
  wrongExplanations: {
    "Only family relationships":
      "Family relations belong mainly to kinship institutions.",
    "Only religious rituals":
      "These belong mainly to religious institutions.",
    "Only commodity prices":
      "Prices are economic."
  },
  hint: "State and authority."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Ascribed status is usually:",
  options: [
    "Assigned without individual choice, often at birth",
    "Always achieved through education",
    "Always gained through employment",
    "Always temporary"
  ],
  answer: "Assigned without individual choice, often at birth",
  explanation:
    "Ascribed statuses are socially assigned and often linked to characteristics present at birth.",
  wrongExplanations: {
    "Always achieved through education":
      "That is closer to achieved status.",
    "Always gained through employment":
      "Employment is often an achieved status.",
    "Always temporary":
      "Ascribed statuses may be enduring."
  },
  hint: "Given rather than earned."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "A survey is especially useful for:",
  options: [
    "Collecting standardised information from many respondents",
    "Studying one person only in every case",
    "Avoiding data collection",
    "Replacing all theory"
  ],
  answer: "Collecting standardised information from many respondents",
  explanation:
    "Surveys use questionnaires or structured interviews to collect comparable information from respondents.",
  wrongExplanations: {
    "Studying one person only in every case":
      "That is more characteristic of some case studies.",
    "Avoiding data collection":
      "Surveys are data-collection methods.",
    "Replacing all theory":
      "Theory and evidence perform different roles."
  },
  hint: "Many respondents."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Insight learning is strongly associated with:",
  options: [
    "Wolfgang Köhler",
    "B.F. Skinner",
    "Ivan Pavlov",
    "Sigmund Freud"
  ],
  answer: "Wolfgang Köhler",
  explanation:
    "Köhler's experiments with chimpanzees contributed to Gestalt ideas about insight learning.",
  wrongExplanations: {
    "B.F. Skinner":
      "Skinner is associated with operant conditioning.",
    "Ivan Pavlov":
      "Pavlov is associated with classical conditioning.",
    "Sigmund Freud":
      "Freud developed psychoanalysis."
  },
  hint: "Gestalt psychology."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Motivation that depends on rewards or punishments is called:",
  options: [
    "Extrinsic motivation",
    "Intrinsic motivation",
    "Insight learning",
    "Latent learning only"
  ],
  answer: "Extrinsic motivation",
  explanation:
    "Extrinsic motivation comes from external rewards, punishments or pressures.",
  wrongExplanations: {
    "Intrinsic motivation":
      "Intrinsic motivation comes from internal interest or satisfaction.",
    "Insight learning":
      "Insight learning concerns sudden understanding of a problem.",
    "Latent learning only":
      "Latent learning concerns learning not immediately demonstrated."
  },
  hint: "External reward."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Inquiry-based learning encourages students to:",
  options: [
    "Ask questions and investigate problems",
    "Only copy notes",
    "Avoid evidence",
    "Memorise without understanding"
  ],
  answer: "Ask questions and investigate problems",
  explanation:
    "Inquiry-based learning engages learners in questioning, investigation, evidence gathering and explanation.",
  wrongExplanations: {
    "Only copy notes":
      "Inquiry requires more active investigation.",
    "Avoid evidence":
      "Evidence is central to inquiry.",
    "Memorise without understanding":
      "Inquiry emphasises understanding."
  },
  hint: "Question, investigate, discover."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Continuous assessment means:",
  options: [
    "Assessment conducted at different points during learning",
    "Only one examination at the very end",
    "No assessment at all",
    "Only attendance checking"
  ],
  answer: "Assessment conducted at different points during learning",
  explanation:
    "Continuous assessment gathers evidence of learner progress throughout a course or learning period.",
  wrongExplanations: {
    "Only one examination at the very end":
      "That is a single summative event.",
    "No assessment at all":
      "Continuous assessment involves repeated evaluation.",
    "Only attendance checking":
      "Attendance alone does not measure learning."
  },
  hint: "Assessment over time."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Assistive technology in education is used to:",
  options: [
    "Support learners who face barriers in accessing or demonstrating learning",
    "Make education less accessible",
    "Replace every teacher",
    "Prevent students from communicating"
  ],
  answer: "Support learners who face barriers in accessing or demonstrating learning",
  explanation:
    "Assistive technologies can help learners access content, communicate and participate more independently.",
  wrongExplanations: {
    "Make education less accessible":
      "Its purpose is to improve accessibility.",
    "Replace every teacher":
      "Technology supports teaching rather than necessarily replacing teachers.",
    "Prevent students from communicating":
      "Many assistive tools improve communication."
  },
  hint: "Accessibility support."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Democratic education generally encourages:",
  options: [
    "Participation, dialogue and respect for others",
    "Blind obedience only",
    "No student voice",
    "Exclusion from decision-making"
  ],
  answer: "Participation, dialogue and respect for others",
  explanation:
    "Democratic education promotes participation, critical thinking, dialogue and respect for diverse viewpoints.",
  wrongExplanations: {
    "Blind obedience only":
      "Democratic education encourages thoughtful participation.",
    "No student voice":
      "Student voice can be an important element.",
    "Exclusion from decision-making":
      "Democratic approaches generally encourage participation."
  },
  hint: "Participation and dialogue."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct sentence:",
  options: [
    "One of my friends lives in Delhi.",
    "One of my friends live in Delhi.",
    "One of my friend live in Delhi.",
    "One of friends lives Delhi."
  ],
  answer: "One of my friends lives in Delhi.",
  explanation:
    "The subject is 'one', which is singular, so the singular verb 'lives' is required.",
  wrongExplanations: {
    "One of my friends live in Delhi.":
      "The singular subject 'one' requires 'lives'.",
    "One of my friend live in Delhi.":
      "The noun after 'one of my' should be plural.",
    "One of friends lives Delhi.":
      "The possessive and preposition are missing."
  },
  hint: "One = singular."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'By next year, she ___ her degree.'",
  options: [
    "will have completed",
    "will completed",
    "has complete",
    "completing"
  ],
  answer: "will have completed",
  explanation:
    "The future perfect is used for an action expected to be completed before a future point.",
  wrongExplanations: {
    "will completed":
      "The structure is grammatically incorrect.",
    "has complete":
      "The past participle and tense are incorrect.",
    completing:
      "A finite verb phrase is required."
  },
  hint: "Future perfect."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'concise'.",
  options: ["Brief", "Lengthy", "Confusing", "Ancient"],
  answer: "Brief",
  explanation:
    "Concise means expressing something clearly in few words.",
  wrongExplanations: {
    Lengthy:
      "Lengthy is the opposite in terms of length.",
    Confusing:
      "Concise does not mean unclear.",
    Ancient:
      "Ancient refers to age."
  },
  hint: "Short and clear."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'artificial'.",
  options: ["Natural", "Synthetic", "Manufactured", "Imitation"],
  answer: "Natural",
  explanation:
    "Natural is the opposite of artificial.",
  wrongExplanations: {
    Synthetic:
      "Synthetic is similar to artificial.",
    Manufactured:
      "Manufactured often implies artificial production.",
    Imitation:
      "Imitation is also related to artificiality."
  },
  hint: "Not man-made."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "Scanning a text is mainly used to:",
  options: [
    "Find specific information quickly",
    "Read every word slowly",
    "Memorise the entire passage",
    "Rewrite the passage"
  ],
  answer: "Find specific information quickly",
  explanation:
    "Scanning involves moving quickly through a text to locate a particular name, date, fact or detail.",
  wrongExplanations: {
    "Read every word slowly":
      "That is intensive reading rather than scanning.",
    "Memorise the entire passage":
      "Scanning is selective.",
    "Rewrite the passage":
      "Writing is a different task."
  },
  hint: "Search for one detail."
},

{
  subject: "English",
  category: "Writing",
  question: "A topic sentence usually:",
  options: [
    "States the main idea of a paragraph",
    "Lists every source",
    "Ends the entire essay",
    "Contains only a quotation"
  ],
  answer: "States the main idea of a paragraph",
  explanation:
    "A topic sentence introduces or expresses the central idea developed in a paragraph.",
  wrongExplanations: {
    "Lists every source":
      "Sources belong in citations or references.",
    "Ends the entire essay":
      "A conclusion ends the essay.",
    "Contains only a quotation":
      "A topic sentence should communicate the paragraph's main idea."
  },
  hint: "Main idea of one paragraph."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 100, 90, 80, 70, ?",
  options: ["50", "60", "65", "75"],
  answer: "60",
  explanation:
    "The sequence decreases by 10 each time.",
  wrongExplanations: {
    "50":
      "50 would come after 60.",
    "65":
      "This decreases by only 5.",
    "75":
      "This would increase from 70."
  },
  hint: "Subtract 10."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Pen is to Write as Knife is to:",
  options: ["Cut", "Read", "Listen", "Drive"],
  answer: "Cut",
  explanation:
    "A pen is commonly used to write, while a knife is commonly used to cut.",
  wrongExplanations: {
    Read:
      "A knife is not used for reading.",
    Listen:
      "A knife is unrelated to listening.",
    Drive:
      "A knife is not used for driving."
  },
  hint: "Object and function."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 35% of 200?",
  options: ["60", "65", "70", "75"],
  answer: "70",
  explanation:
    "35% of 200 = 0.35 × 200 = 70.",
  wrongExplanations: {
    "60":
      "This is 30% of 200.",
    "65":
      "This is 32.5% of 200.",
    "75":
      "This is 37.5% of 200."
  },
  hint: "30% is 60 and 5% is 10."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A number is increased by 25% from 80. What is the new number?",
  options: ["90", "95", "100", "105"],
  answer: "100",
  explanation:
    "25% of 80 is 20, so the new number is 80 + 20 = 100.",
  wrongExplanations: {
    "90":
      "This is only a 12.5% increase.",
    "95":
      "This is not a 25% increase.",
    "105":
      "This is too high."
  },
  hint: "One-fourth of 80."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Which of the following is an example of an operating system?",
  options: ["Linux", "HTML", "Google Search", "JPEG"],
  answer: "Linux",
  explanation:
    "Linux is an operating system used on computers, servers and many other devices.",
  wrongExplanations: {
    HTML:
      "HTML is a markup language.",
    "Google Search":
      "Google Search is a search engine.",
    JPEG:
      "JPEG is an image file format."
  },
  hint: "Manages hardware and software."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of the International Labour Organization is in:",
  options: ["Geneva", "Paris", "Rome", "Vienna"],
  answer: "Geneva",
  explanation:
    "The International Labour Organization is headquartered in Geneva, Switzerland.",
  wrongExplanations: {
    Paris:
      "UNESCO is headquartered in Paris.",
    Rome:
      "FAO is headquartered in Rome.",
    Vienna:
      "Vienna hosts several other international organisations."
  },
  hint: "Switzerland."
},
{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Reliability in research refers mainly to:",
  options: [
    "Consistency of measurement",
    "Popularity of the topic",
    "Length of the questionnaire",
    "Number of references only"
  ],
  answer: "Consistency of measurement",
  explanation:
    "Reliability refers to the extent to which a research instrument produces consistent results under similar conditions.",
  wrongExplanations: {
    "Popularity of the topic":
      "Popularity does not determine reliability.",
    "Length of the questionnaire":
      "Length may affect design, but it does not define reliability.",
    "Number of references only":
      "References are unrelated to measurement consistency."
  },
  hint: "Think consistency."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Validity in research refers to whether:",
  options: [
    "A tool measures what it is intended to measure",
    "A questionnaire is very long",
    "Every respondent gives the same answer",
    "The researcher uses many tables"
  ],
  answer: "A tool measures what it is intended to measure",
  explanation:
    "Validity concerns whether an instrument accurately measures the concept or variable it is designed to measure.",
  wrongExplanations: {
    "A questionnaire is very long":
      "Length does not guarantee validity.",
    "Every respondent gives the same answer":
      "Agreement among respondents does not prove validity.",
    "The researcher uses many tables":
      "Presentation style is unrelated to validity."
  },
  hint: "Measures the right thing."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Sovereignty refers primarily to:",
  options: [
    "Supreme authority within a political community",
    "Only military strength",
    "Only economic wealth",
    "Only electoral participation"
  ],
  answer: "Supreme authority within a political community",
  explanation:
    "Sovereignty refers to the highest authority within a political system, especially the authority to make and enforce binding decisions.",
  wrongExplanations: {
    "Only military strength":
      "Military strength may support sovereignty but does not define it.",
    "Only economic wealth":
      "Wealth is not the same as supreme political authority.",
    "Only electoral participation":
      "Participation is important in democracy but is not sovereignty itself."
  },
  hint: "Highest political authority."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The doctrine of separation of powers is most closely associated with:",
  options: [
    "Montesquieu",
    "Karl Marx",
    "John Rawls",
    "Mahatma Gandhi"
  ],
  answer: "Montesquieu",
  explanation:
    "Montesquieu famously developed the idea of separating legislative, executive and judicial powers.",
  wrongExplanations: {
    "Karl Marx":
      "Marx focused on class relations and capitalism.",
    "John Rawls":
      "Rawls is associated with theories of justice.",
    "Mahatma Gandhi":
      "Gandhi focused on non-violence, swaraj and political ethics."
  },
  hint: "Legislature, executive, judiciary."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "An alliance is best understood as:",
  options: [
    "An agreement between states for cooperation, often in security matters",
    "A domestic tax system",
    "A judicial decision",
    "A local government body"
  ],
  answer: "An agreement between states for cooperation, often in security matters",
  explanation:
    "An alliance is a formal or informal arrangement in which states cooperate, often for defence or strategic purposes.",
  wrongExplanations: {
    "A domestic tax system":
      "Tax systems are internal fiscal arrangements.",
    "A judicial decision":
      "Judicial decisions are legal rulings.",
    "A local government body":
      "Local institutions are domestic."
  },
  hint: "States cooperating for security."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Coordination in administration means:",
  options: [
    "Bringing different activities into harmony",
    "Removing all departments",
    "Ending communication",
    "Allowing units to work in complete isolation"
  ],
  answer: "Bringing different activities into harmony",
  explanation:
    "Coordination ensures that different units and activities work together toward common organisational goals.",
  wrongExplanations: {
    "Removing all departments":
      "Coordination works among departments rather than eliminating them.",
    "Ending communication":
      "Communication is important for coordination.",
    "Allowing units to work in complete isolation":
      "That is the opposite of coordination."
  },
  hint: "Working together smoothly."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Iron Pillar at Mehrauli is associated with the:",
  options: [
    "Gupta period",
    "Mauryan period only",
    "Mughal period",
    "British period"
  ],
  answer: "Gupta period",
  explanation:
    "The Iron Pillar at Mehrauli is generally associated with the Gupta period and is noted for its metallurgy.",
  wrongExplanations: {
    "Mauryan period only":
      "It is not generally dated to the Mauryan period.",
    "Mughal period":
      "The pillar predates Mughal rule.",
    "British period":
      "It is far older than colonial rule."
  },
  hint: "Ancient metallurgy."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The ancient university of Vikramashila was associated mainly with:",
  options: [
    "Buddhist learning",
    "Mughal military training",
    "British administration",
    "Maratha warfare"
  ],
  answer: "Buddhist learning",
  explanation:
    "Vikramashila was a major centre of Buddhist learning in eastern India.",
  wrongExplanations: {
    "Mughal military training":
      "It existed much earlier than the Mughal period.",
    "British administration":
      "It predates colonial rule by centuries.",
    "Maratha warfare":
      "It was an educational centre, not a military institution."
  },
  hint: "Ancient centre of learning."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who succeeded Babur as Mughal emperor?",
  options: ["Humayun", "Akbar", "Jahangir", "Sher Shah"],
  answer: "Humayun",
  explanation:
    "Humayun succeeded his father Babur as the second Mughal emperor.",
  wrongExplanations: {
    Akbar:
      "Akbar was Humayun's son and succeeded him later.",
    Jahangir:
      "Jahangir was Akbar's son.",
    "Sher Shah":
      "Sher Shah temporarily displaced Humayun but was not Babur's successor."
  },
  hint: "Babur's son."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Nehru Report was published in:",
  options: ["1928", "1919", "1935", "1946"],
  answer: "1928",
  explanation:
    "The Nehru Report of 1928 proposed a constitutional framework for India.",
  wrongExplanations: {
    "1919":
      "1919 is associated with the Montagu-Chelmsford reforms and Rowlatt Act.",
    "1935":
      "1935 is associated with the Government of India Act.",
    "1946":
      "1946 is associated with the Cabinet Mission."
  },
  hint: "Same year as Simon Commission protests."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Lahore Session of the Indian National Congress in 1929 is famous for declaring:",
  options: [
    "Purna Swaraj",
    "Separate electorates",
    "Partition of Bengal",
    "Dyarchy"
  ],
  answer: "Purna Swaraj",
  explanation:
    "The Lahore Session of 1929 adopted the goal of complete independence, or Purna Swaraj.",
  wrongExplanations: {
    "Separate electorates":
      "Separate electorates came through earlier constitutional reforms.",
    "Partition of Bengal":
      "The Partition of Bengal occurred in 1905.",
    Dyarchy:
      "Dyarchy was introduced by the Government of India Act 1919."
  },
  hint: "Complete independence."
},

{
  subject: "History",
  category: "World History",
  question: "The North Atlantic Treaty Organization was founded in:",
  options: ["1949", "1945", "1955", "1961"],
  answer: "1949",
  explanation:
    "NATO was established in 1949 as a collective defence alliance.",
  wrongExplanations: {
    "1945":
      "The United Nations was founded in 1945.",
    "1955":
      "The Warsaw Pact was established in 1955.",
    "1961":
      "1961 is associated with the first NAM summit and Berlin Wall construction."
  },
  hint: "Early Cold War alliance."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The biosphere refers to:",
  options: [
    "The zone of Earth where life exists",
    "Only the atmosphere",
    "Only the oceans",
    "Only the crust"
  ],
  answer: "The zone of Earth where life exists",
  explanation:
    "The biosphere includes all regions of land, water and atmosphere where living organisms are found.",
  wrongExplanations: {
    "Only the atmosphere":
      "Life exists in land and water too.",
    "Only the oceans":
      "The biosphere is broader than marine environments.",
    "Only the crust":
      "Life also exists in water and the lower atmosphere."
  },
  hint: "Bio = life."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "An oxbow lake is formed from:",
  options: [
    "A cut-off river meander",
    "A volcanic crater only",
    "A glacier only",
    "A coastal cliff"
  ],
  answer: "A cut-off river meander",
  explanation:
    "An oxbow lake forms when a river cuts through the neck of a meander and abandons the old loop.",
  wrongExplanations: {
    "A volcanic crater only":
      "Crater lakes form differently.",
    "A glacier only":
      "Glaciers create other kinds of lakes.",
    "A coastal cliff":
      "Coastal erosion produces different features."
  },
  hint: "Former river bend."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A glacier is:",
  options: [
    "A large moving mass of ice",
    "A warm ocean current",
    "A desert wind",
    "A volcanic gas"
  ],
  answer: "A large moving mass of ice",
  explanation:
    "A glacier is a large body of ice that moves slowly under its own weight.",
  wrongExplanations: {
    "A warm ocean current":
      "Ocean currents are moving seawater.",
    "A desert wind":
      "Desert winds are atmospheric phenomena.",
    "A volcanic gas":
      "Volcanic gases are unrelated."
  },
  hint: "Moving ice."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A high birth rate and rapidly falling death rate usually produce:",
  options: [
    "Rapid population growth",
    "Population decline",
    "Zero population growth",
    "No demographic change"
  ],
  answer: "Rapid population growth",
  explanation:
    "When births remain high while deaths fall, natural increase becomes large.",
  wrongExplanations: {
    "Population decline":
      "Decline occurs when deaths exceed births, other things equal.",
    "Zero population growth":
      "High births and falling deaths generally produce positive growth.",
    "No demographic change":
      "This combination strongly affects population size."
  },
  hint: "Many births, fewer deaths."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Migration within the same country is called:",
  options: [
    "Internal migration",
    "International migration",
    "External trade",
    "Urbanisation only"
  ],
  answer: "Internal migration",
  explanation:
    "Internal migration refers to movement from one place to another within national borders.",
  wrongExplanations: {
    "International migration":
      "International migration crosses national borders.",
    "External trade":
      "Trade involves goods and services, not population movement.",
    "Urbanisation only":
      "Urbanisation may involve internal migration but is a broader process."
  },
  hint: "Inside national borders."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Which factor is especially important for the location of a hydroelectric power plant?",
  options: [
    "Reliable water supply and suitable relief",
    "Only proximity to a stock exchange",
    "Only population density",
    "Only political boundaries"
  ],
  answer: "Reliable water supply and suitable relief",
  explanation:
    "Hydroelectric power requires adequate flowing water and suitable elevation differences or dam sites.",
  wrongExplanations: {
    "Only proximity to a stock exchange":
      "Financial centres are not the key physical requirement.",
    "Only population density":
      "Demand matters, but water and relief are essential.",
    "Only political boundaries":
      "Administrative borders do not generate hydropower."
  },
  hint: "Water + height."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Producer surplus is the difference between:",
  options: [
    "The price received and the minimum price a producer is willing to accept",
    "Exports and imports",
    "Total cost and fixed cost",
    "Tax and subsidy"
  ],
  answer: "The price received and the minimum price a producer is willing to accept",
  explanation:
    "Producer surplus measures the benefit sellers receive when market price exceeds their minimum acceptable price.",
  wrongExplanations: {
    "Exports and imports":
      "That concerns trade balance.",
    "Total cost and fixed cost":
      "That gives variable cost.",
    "Tax and subsidy":
      "These are fiscal instruments."
  },
  hint: "Benefit to seller."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "An externality occurs when:",
  options: [
    "An economic activity affects third parties not directly involved",
    "Every market reaches equilibrium",
    "Only producers benefit",
    "Government expenditure becomes zero"
  ],
  answer: "An economic activity affects third parties not directly involved",
  explanation:
    "Externalities are costs or benefits imposed on others outside the direct transaction.",
  wrongExplanations: {
    "Every market reaches equilibrium":
      "Externalities often cause market failure.",
    "Only producers benefit":
      "Externalities can affect many third parties.",
    "Government expenditure becomes zero":
      "This is unrelated."
  },
  hint: "Third-party effect."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "A contractionary monetary policy generally aims to:",
  options: [
    "Reduce inflationary pressure",
    "Increase inflation deliberately",
    "Eliminate all banks",
    "Increase every government salary"
  ],
  answer: "Reduce inflationary pressure",
  explanation:
    "Contractionary monetary policy typically raises borrowing costs or reduces liquidity to slow demand and inflation.",
  wrongExplanations: {
    "Increase inflation deliberately":
      "That is opposite to the usual objective.",
    "Eliminate all banks":
      "Monetary policy operates through the financial system.",
    "Increase every government salary":
      "Government salaries are a fiscal matter."
  },
  hint: "Tight money."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "An expansionary fiscal policy generally involves:",
  options: [
    "Higher government spending or lower taxes",
    "Higher taxes and lower spending only",
    "Eliminating money supply",
    "Closing all markets"
  ],
  answer: "Higher government spending or lower taxes",
  explanation:
    "Expansionary fiscal policy seeks to stimulate aggregate demand through greater spending or tax reductions.",
  wrongExplanations: {
    "Higher taxes and lower spending only":
      "That is contractionary fiscal policy.",
    "Eliminating money supply":
      "Money supply is primarily a monetary issue.",
    "Closing all markets":
      "This is unrelated."
  },
  hint: "Government stimulates demand."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "A subsidy is:",
  options: [
    "Financial support provided to reduce costs or encourage an activity",
    "A criminal penalty",
    "A population census",
    "A form of rainfall"
  ],
  answer: "Financial support provided to reduce costs or encourage an activity",
  explanation:
    "Subsidies are financial benefits or support provided by government to producers, consumers or activities.",
  wrongExplanations: {
    "A criminal penalty":
      "A penalty imposes a cost rather than support.",
    "A population census":
      "A census collects demographic data.",
    "A form of rainfall":
      "This is unrelated."
  },
  hint: "Government support."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Underemployment occurs when:",
  options: [
    "A worker is employed below their capacity or for insufficient hours",
    "A person has no job at all in every case",
    "Every worker receives promotion",
    "Inflation becomes zero"
  ],
  answer: "A worker is employed below their capacity or for insufficient hours",
  explanation:
    "Underemployment occurs when workers have jobs but their labour is not fully utilised.",
  wrongExplanations: {
    "A person has no job at all in every case":
      "That is unemployment rather than underemployment.",
    "Every worker receives promotion":
      "Promotion is unrelated.",
    "Inflation becomes zero":
      "Inflation and underemployment are different concepts."
  },
  hint: "Working, but not fully utilised."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Symbolic interactionism is strongly associated with:",
  options: [
    "George Herbert Mead",
    "Karl Marx",
    "Emile Durkheim",
    "Auguste Comte"
  ],
  answer: "George Herbert Mead",
  explanation:
    "George Herbert Mead is a foundational thinker in symbolic interactionism.",
  wrongExplanations: {
    "Karl Marx":
      "Marx is associated with conflict and class analysis.",
    "Emile Durkheim":
      "Durkheim is associated with social facts and functionalism.",
    "Auguste Comte":
      "Comte is associated with positivism."
  },
  hint: "Self, symbols and interaction."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The term 'anomie' broadly refers to:",
  options: [
    "A condition of weakened social norms",
    "Perfect social integration",
    "Only economic prosperity",
    "Only political participation"
  ],
  answer: "A condition of weakened social norms",
  explanation:
    "Anomie describes a situation in which social norms are weak, unclear or disrupted.",
  wrongExplanations: {
    "Perfect social integration":
      "Anomie involves weakened regulation rather than perfect integration.",
    "Only economic prosperity":
      "Economic conditions can contribute but do not define anomie.",
    "Only political participation":
      "Participation is unrelated to the definition."
  },
  hint: "Normlessness."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "A subculture is:",
  options: [
    "A group with distinctive cultural patterns within a larger society",
    "A society with no culture",
    "Only a political party",
    "A natural environment"
  ],
  answer: "A group with distinctive cultural patterns within a larger society",
  explanation:
    "A subculture shares many features of the larger society but also has distinctive values, norms or styles.",
  wrongExplanations: {
    "A society with no culture":
      "All societies have cultural patterns.",
    "Only a political party":
      "Political parties can form subcultures, but the concept is broader.",
    "A natural environment":
      "Subculture is a social concept."
  },
  hint: "Culture within a culture."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "The state as a social institution mainly exercises:",
  options: [
    "Political authority",
    "Only family authority",
    "Only religious authority",
    "Only market exchange"
  ],
  answer: "Political authority",
  explanation:
    "The state is the central institution exercising legitimate political authority over a territory and population.",
  wrongExplanations: {
    "Only family authority":
      "Family authority belongs to kinship institutions.",
    "Only religious authority":
      "Religious institutions exercise different forms of authority.",
    "Only market exchange":
      "Markets are economic institutions."
  },
  hint: "Government and authority."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Upward mobility means:",
  options: [
    "Movement to a higher social position",
    "Movement to a lower position",
    "No change in status",
    "Only migration to another city"
  ],
  answer: "Movement to a higher social position",
  explanation:
    "Upward mobility occurs when an individual or group moves to a position with higher social status.",
  wrongExplanations: {
    "Movement to a lower position":
      "That is downward mobility.",
    "No change in status":
      "Mobility requires a change in position.",
    "Only migration to another city":
      "Geographical movement does not necessarily change status."
  },
  hint: "Move up."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "An interview schedule is:",
  options: [
    "A prepared set of questions used by an interviewer",
    "A list of research expenses",
    "Only a timetable",
    "A bibliography"
  ],
  answer: "A prepared set of questions used by an interviewer",
  explanation:
    "An interview schedule guides the interviewer through predetermined questions and topics.",
  wrongExplanations: {
    "A list of research expenses":
      "That is part of a budget.",
    "Only a timetable":
      "Schedule here refers to a research instrument, not just time planning.",
    "A bibliography":
      "A bibliography lists sources."
  },
  hint: "Questions for interviewer."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Reinforcement differs from punishment because reinforcement aims to:",
  options: [
    "Increase a behaviour",
    "Always reduce behaviour",
    "End learning",
    "Remove all consequences"
  ],
  answer: "Increase a behaviour",
  explanation:
    "Reinforcement strengthens behaviour, while punishment is intended to reduce unwanted behaviour.",
  wrongExplanations: {
    "Always reduce behaviour":
      "That is the aim of punishment.",
    "End learning":
      "Reinforcement is a learning mechanism.",
    "Remove all consequences":
      "Reinforcement itself is a consequence."
  },
  hint: "Strengthen behaviour."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "A learner's prior knowledge is important because it:",
  options: [
    "Influences how new information is understood",
    "Has no effect on learning",
    "Should always be ignored",
    "Prevents all new learning"
  ],
  answer: "Influences how new information is understood",
  explanation:
    "New learning is often connected to existing knowledge, concepts and experiences.",
  wrongExplanations: {
    "Has no effect on learning":
      "Prior knowledge can strongly influence understanding.",
    "Should always be ignored":
      "Effective teaching often activates prior knowledge.",
    "Prevents all new learning":
      "Prior knowledge can support new learning."
  },
  hint: "New ideas connect to old ones."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Demonstration method is especially useful when:",
  options: [
    "Showing how a process or skill is performed",
    "No practical activity is involved",
    "Students must never observe anything",
    "Only theoretical definitions are required"
  ],
  answer: "Showing how a process or skill is performed",
  explanation:
    "Demonstration allows learners to observe a process, procedure or skill before practising it themselves.",
  wrongExplanations: {
    "No practical activity is involved":
      "Demonstration is especially suited to practical processes.",
    "Students must never observe anything":
      "Observation is central.",
    "Only theoretical definitions are required":
      "A lecture may be more suitable for purely verbal explanation."
  },
  hint: "Show how."
},

{
  subject: "Education",
  category: "Assessment",
  question: "An achievement test is mainly designed to measure:",
  options: [
    "What a learner has learned",
    "Only personality",
    "Only physical height",
    "Only family background"
  ],
  answer: "What a learner has learned",
  explanation:
    "Achievement tests measure knowledge or skills acquired through instruction.",
  wrongExplanations: {
    "Only personality":
      "Personality tests measure psychological traits.",
    "Only physical height":
      "Height is a physical measurement.",
    "Only family background":
      "Background information is not achievement."
  },
  hint: "Learning outcome."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Peer support in an inclusive classroom can help by:",
  options: [
    "Increasing participation and social interaction",
    "Isolating learners",
    "Preventing cooperation",
    "Removing all teacher support"
  ],
  answer: "Increasing participation and social interaction",
  explanation:
    "Peer support can improve belonging, communication and participation among diverse learners.",
  wrongExplanations: {
    "Isolating learners":
      "Peer support aims to reduce isolation.",
    "Preventing cooperation":
      "Cooperation is central to peer support.",
    "Removing all teacher support":
      "Peer support complements rather than replaces teachers."
  },
  hint: "Students helping students."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Education contributes to social change by:",
  options: [
    "Developing knowledge, values and new skills",
    "Preventing all new ideas",
    "Ending communication",
    "Keeping every institution unchanged"
  ],
  answer: "Developing knowledge, values and new skills",
  explanation:
    "Education can influence social change by spreading knowledge, encouraging new values and preparing people for changing roles.",
  wrongExplanations: {
    "Preventing all new ideas":
      "Education can encourage innovation.",
    "Ending communication":
      "Education relies heavily on communication.",
    "Keeping every institution unchanged":
      "Education itself can transform institutions."
  },
  hint: "Knowledge can change society."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'The news ___ surprising.'",
  options: ["is", "are", "were only", "have"],
  answer: "is",
  explanation:
    "Although 'news' ends in -s, it is treated as a singular uncountable noun.",
  wrongExplanations: {
    are:
      "News takes a singular verb in standard English.",
    "were only":
      "The sentence requires the present tense.",
    have:
      "The verb does not agree with the subject."
  },
  hint: "News is singular."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct sentence:",
  options: [
    "There are many reasons for the change.",
    "There is many reasons for the change.",
    "There many reasons is for the change.",
    "There are much reasons for the change."
  ],
  answer: "There are many reasons for the change.",
  explanation:
    "The plural noun 'reasons' requires 'are' and the countable quantifier 'many'.",
  wrongExplanations: {
    "There is many reasons for the change.":
      "The plural subject requires 'are'.",
    "There many reasons is for the change.":
      "The word order is incorrect.",
    "There are much reasons for the change.":
      "'Much' is generally used with uncountable nouns."
  },
  hint: "Plural noun = are + many."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'modify'.",
  options: ["Change", "Preserve exactly", "Destroy", "Ignore"],
  answer: "Change",
  explanation:
    "Modify means to change or alter something, usually partially.",
  wrongExplanations: {
    "Preserve exactly":
      "That is the opposite of modification.",
    Destroy:
      "Destroy is much stronger than modify.",
    Ignore:
      "Ignore means pay no attention."
  },
  hint: "Alter."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'visible'.",
  options: ["Invisible", "Clear", "Obvious", "Noticeable"],
  answer: "Invisible",
  explanation:
    "Invisible means unable to be seen and is the opposite of visible.",
  wrongExplanations: {
    Clear:
      "Clear can mean easily visible.",
    Obvious:
      "Obvious means easy to notice.",
    Noticeable:
      "Noticeable is similar to visible."
  },
  hint: "Cannot be seen."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "Context clues help a reader to:",
  options: [
    "Infer the meaning of unfamiliar words",
    "Ignore the passage",
    "Count paragraphs only",
    "Correct the author's spelling only"
  ],
  answer: "Infer the meaning of unfamiliar words",
  explanation:
    "Readers can use surrounding words and sentences to estimate the meaning of unfamiliar vocabulary.",
  wrongExplanations: {
    "Ignore the passage":
      "Context clues require careful reading.",
    "Count paragraphs only":
      "Paragraph count does not reveal word meaning.",
    "Correct the author's spelling only":
      "Context clues are mainly about meaning."
  },
  hint: "Use nearby words."
},

{
  subject: "English",
  category: "Writing",
  question: "A transition word is used mainly to:",
  options: [
    "Connect ideas smoothly",
    "Delete the main idea",
    "Make sentences unrelated",
    "Replace every noun"
  ],
  answer: "Connect ideas smoothly",
  explanation:
    "Transitions such as however, therefore and moreover help show relationships between ideas.",
  wrongExplanations: {
    "Delete the main idea":
      "Transitions support organisation.",
    "Make sentences unrelated":
      "They improve connections.",
    "Replace every noun":
      "Transitions are not noun substitutes."
  },
  hint: "However, therefore, moreover."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 81, 27, 9, 3, ?",
  options: ["1", "2", "6", "9"],
  answer: "1",
  explanation:
    "Each term is divided by 3: 81, 27, 9, 3, 1.",
  wrongExplanations: {
    "2":
      "This does not follow division by 3.",
    "6":
      "This would increase rather than continue the pattern.",
    "9":
      "9 appeared earlier in the sequence."
  },
  hint: "Divide by 3."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Eye is to See as Ear is to:",
  options: ["Hear", "Smell", "Taste", "Touch"],
  answer: "Hear",
  explanation:
    "The eye is used for seeing and the ear is used for hearing.",
  wrongExplanations: {
    Smell:
      "Smelling is associated with the nose.",
    Taste:
      "Taste is associated mainly with the tongue.",
    Touch:
      "Touch is associated with the skin."
  },
  hint: "Sense organ and function."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 45% of 200?",
  options: ["80", "90", "100", "110"],
  answer: "90",
  explanation:
    "45% of 200 = 0.45 × 200 = 90.",
  wrongExplanations: {
    "80":
      "This is 40% of 200.",
    "100":
      "This is 50% of 200.",
    "110":
      "This is 55% of 200."
  },
  hint: "40% is 80, plus 5% is 10."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A car travels 180 km in 3 hours. What is its average speed?",
  options: ["50 km/h", "60 km/h", "70 km/h", "90 km/h"],
  answer: "60 km/h",
  explanation:
    "Average speed = 180 ÷ 3 = 60 km/h.",
  wrongExplanations: {
    "50 km/h":
      "This would cover 150 km in 3 hours.",
    "70 km/h":
      "This would cover 210 km.",
    "90 km/h":
      "This would cover 270 km."
  },
  hint: "Distance divided by time."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Which of the following is used to uniquely identify a device on a network?",
  options: ["IP address", "Font size", "File name only", "Screen resolution"],
  answer: "IP address",
  explanation:
    "An IP address identifies a device or network interface for communication over an IP network.",
  wrongExplanations: {
    "Font size":
      "Font size affects text display.",
    "File name only":
      "A file name identifies a file, not a network device.",
    "Screen resolution":
      "Resolution describes display dimensions."
  },
  hint: "Network address."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of UNICEF is in:",
  options: ["New York", "Geneva", "Paris", "Rome"],
  answer: "New York",
  explanation:
    "UNICEF is headquartered in New York City.",
  wrongExplanations: {
    Geneva:
      "Geneva hosts many international organisations, but not UNICEF headquarters.",
    Paris:
      "UNESCO is headquartered in Paris.",
    Rome:
      "FAO is headquartered in Rome."
  },
  hint: "Same city as the main UN headquarters."
},
{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A variable in research is:",
  options: [
    "A characteristic that can take different values",
    "A fixed conclusion only",
    "A bibliography entry",
    "A research title"
  ],
  answer: "A characteristic that can take different values",
  explanation:
    "A variable is any characteristic, attribute or factor that can vary across cases or observations.",
  wrongExplanations: {
    "A fixed conclusion only":
      "A conclusion is an outcome of research, not a variable.",
    "A bibliography entry":
      "A bibliography lists sources.",
    "A research title":
      "A title identifies the topic but is not a variable."
  },
  hint: "Something that can change."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Correlation refers to:",
  options: [
    "A relationship between two variables",
    "Proof that one variable always causes another",
    "A research budget",
    "A list of respondents only"
  ],
  answer: "A relationship between two variables",
  explanation:
    "Correlation measures the degree to which two variables are associated, but it does not by itself prove causation.",
  wrongExplanations: {
    "Proof that one variable always causes another":
      "Correlation does not automatically prove causation.",
    "A research budget":
      "A budget concerns expenses.",
    "A list of respondents only":
      "A respondent list is not a statistical relationship."
  },
  hint: "Association, not necessarily cause."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Legitimacy refers to:",
  options: [
    "Acceptance of political authority as rightful",
    "Only military power",
    "Only economic growth",
    "Only election campaigning"
  ],
  answer: "Acceptance of political authority as rightful",
  explanation:
    "Legitimacy exists when people regard political authority and rule as justified or rightful.",
  wrongExplanations: {
    "Only military power":
      "Force may sustain control but does not by itself create legitimacy.",
    "Only economic growth":
      "Economic performance can affect legitimacy but does not define it.",
    "Only election campaigning":
      "Campaigning is one political activity."
  },
  hint: "Right to rule."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Inter-State Council is provided for under:",
  options: ["Article 263", "Article 280", "Article 324", "Article 356"],
  answer: "Article 263",
  explanation:
    "Article 263 provides for the establishment of an Inter-State Council for coordination between states and the Union.",
  wrongExplanations: {
    "Article 280":
      "Article 280 provides for the Finance Commission.",
    "Article 324":
      "Article 324 deals with the Election Commission.",
    "Article 356":
      "Article 356 deals with failure of constitutional machinery in a state."
  },
  hint: "Centre-state coordination."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "The concept of bipolarity refers to:",
  options: [
    "A system dominated by two major powers or blocs",
    "A system with no major powers",
    "A system with only one state",
    "A local government arrangement"
  ],
  answer: "A system dominated by two major powers or blocs",
  explanation:
    "Bipolarity describes an international system in which two major powers or blocs dominate global politics.",
  wrongExplanations: {
    "A system with no major powers":
      "That would not be bipolar.",
    "A system with only one state":
      "That would not describe an international system.",
    "A local government arrangement":
      "Bipolarity is an international-relations concept."
  },
  hint: "Cold War."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Centralisation means:",
  options: [
    "Concentration of authority at higher levels",
    "Distribution of authority to lower levels",
    "Complete absence of authority",
    "Only local self-government"
  ],
  answer: "Concentration of authority at higher levels",
  explanation:
    "Centralisation concentrates decision-making authority in higher or central levels of an organisation.",
  wrongExplanations: {
    "Distribution of authority to lower levels":
      "That describes decentralisation.",
    "Complete absence of authority":
      "Centralisation strengthens rather than removes authority.",
    "Only local self-government":
      "Local self-government is usually linked with decentralisation."
  },
  hint: "Power at the top."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The famous rock-cut temples at Mahabalipuram are associated with the:",
  options: ["Pallavas", "Mauryas", "Guptas", "Mughals"],
  answer: "Pallavas",
  explanation:
    "Mahabalipuram became an important centre of Pallava architecture and rock-cut monuments.",
  wrongExplanations: {
    Mauryas:
      "Mauryan architecture belongs to an earlier period.",
    Guptas:
      "The Guptas are associated mainly with northern India.",
    Mughals:
      "Mughal architecture belongs to a much later period."
  },
  hint: "South Indian dynasty."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Brihadeshwara Temple at Thanjavur was built by:",
  options: ["Rajaraja I", "Ashoka", "Harsha", "Samudragupta"],
  answer: "Rajaraja I",
  explanation:
    "Rajaraja I commissioned the Brihadeshwara Temple, one of the great monuments of Chola architecture.",
  wrongExplanations: {
    Ashoka:
      "Ashoka was a Mauryan ruler and lived much earlier.",
    Harsha:
      "Harsha ruled in northern India.",
    Samudragupta:
      "Samudragupta was a Gupta ruler."
  },
  hint: "Chola architecture."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Battle of Haldighati was fought between Maharana Pratap and the forces of:",
  options: ["Akbar", "Babur", "Aurangzeb", "Sher Shah"],
  answer: "Akbar",
  explanation:
    "The Battle of Haldighati in 1576 was fought between Maharana Pratap and Mughal forces under Akbar.",
  wrongExplanations: {
    Babur:
      "Babur died decades before the battle.",
    Aurangzeb:
      "Aurangzeb ruled later.",
    "Sher Shah":
      "Sher Shah belonged to the Sur dynasty."
  },
  hint: "Mewar versus Mughal power."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Indian Councils Act of 1909 is also known as:",
  options: [
    "Morley-Minto Reforms",
    "Montagu-Chelmsford Reforms",
    "Minto-Curzon Reforms",
    "Ripon Reforms"
  ],
  answer: "Morley-Minto Reforms",
  explanation:
    "The Indian Councils Act 1909 is commonly known as the Morley-Minto Reforms.",
  wrongExplanations: {
    "Montagu-Chelmsford Reforms":
      "These are associated with the Government of India Act 1919.",
    "Minto-Curzon Reforms":
      "This is not the standard name.",
    "Ripon Reforms":
      "Ripon is associated with local self-government."
  },
  hint: "1909."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Government of India Act 1919 introduced:",
  options: ["Dyarchy in provinces", "Complete independence", "Universal adult franchise", "Panchayati Raj"],
  answer: "Dyarchy in provinces",
  explanation:
    "The Government of India Act 1919 introduced dyarchy in provincial administration.",
  wrongExplanations: {
    "Complete independence":
      "India remained under British rule.",
    "Universal adult franchise":
      "Voting rights remained restricted.",
    "Panchayati Raj":
      "Constitutional status for Panchayats came much later."
  },
  hint: "Transferred and reserved subjects."
},

{
  subject: "History",
  category: "World History",
  question: "The Warsaw Pact was established in:",
  options: ["1955", "1949", "1945", "1961"],
  answer: "1955",
  explanation:
    "The Warsaw Pact was established in 1955 as a military alliance led by the Soviet Union.",
  wrongExplanations: {
    "1949":
      "NATO was founded in 1949.",
    "1945":
      "The United Nations was founded in 1945.",
    "1961":
      "1961 is associated with the Berlin Wall and first NAM summit."
  },
  hint: "Soviet-led alliance."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The mantle is located between the:",
  options: [
    "Crust and core",
    "Atmosphere and crust",
    "Inner core and outer core only",
    "Hydrosphere and atmosphere"
  ],
  answer: "Crust and core",
  explanation:
    "The mantle is the thick layer between Earth's crust and core.",
  wrongExplanations: {
    "Atmosphere and crust":
      "The atmosphere lies above Earth's surface.",
    "Inner core and outer core only":
      "These are both parts of the core.",
    "Hydrosphere and atmosphere":
      "The mantle is inside Earth."
  },
  hint: "Middle major layer."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Sedimentary rocks commonly form through:",
  options: [
    "Deposition, compaction and cementation",
    "Cooling of magma only",
    "Melting of the inner core",
    "Atmospheric pressure only"
  ],
  answer: "Deposition, compaction and cementation",
  explanation:
    "Sedimentary rocks form when sediments accumulate, become compacted and are cemented together.",
  wrongExplanations: {
    "Cooling of magma only":
      "That produces igneous rocks.",
    "Melting of the inner core":
      "This is unrelated.",
    "Atmospheric pressure only":
      "Pressure alone does not define sedimentary rock formation."
  },
  hint: "Layers of sediment."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Metamorphic rocks form when existing rocks are changed by:",
  options: [
    "Heat and pressure",
    "Only rainfall",
    "Only river deposition",
    "Only evaporation"
  ],
  answer: "Heat and pressure",
  explanation:
    "Metamorphic rocks form when existing rocks are altered by heat, pressure or chemically active fluids.",
  wrongExplanations: {
    "Only rainfall":
      "Rainfall contributes to weathering.",
    "Only river deposition":
      "Deposition is associated with sedimentary rocks.",
    "Only evaporation":
      "Evaporation is part of the water cycle."
  },
  hint: "Changed rock."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A population with a broad-based population pyramid generally has:",
  options: [
    "A high proportion of young people",
    "A very old population only",
    "No births",
    "No children"
  ],
  answer: "A high proportion of young people",
  explanation:
    "A broad base usually indicates high birth rates and a large younger population.",
  wrongExplanations: {
    "A very old population only":
      "Older populations tend to have narrower bases.",
    "No births":
      "A broad base indicates many births.",
    "No children":
      "A broad base reflects many children."
  },
  hint: "Wide base = many young people."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Net migration is calculated as:",
  options: [
    "Immigration minus emigration",
    "Births minus deaths",
    "Deaths minus births",
    "Exports minus imports"
  ],
  answer: "Immigration minus emigration",
  explanation:
    "Net migration is the difference between the number entering and leaving an area.",
  wrongExplanations: {
    "Births minus deaths":
      "That gives natural increase.",
    "Deaths minus births":
      "That gives natural decrease when positive.",
    "Exports minus imports":
      "That relates to trade balance."
  },
  hint: "In minus out."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Coal is classified as:",
  options: [
    "A non-renewable energy resource",
    "A renewable energy resource",
    "A human resource",
    "A service-sector activity"
  ],
  answer: "A non-renewable energy resource",
  explanation:
    "Coal forms over geological time and cannot be replenished on a human timescale.",
  wrongExplanations: {
    "A renewable energy resource":
      "Coal is finite.",
    "A human resource":
      "Human resources refer to people and their skills.",
    "A service-sector activity":
      "Coal is a natural resource."
  },
  hint: "Fossil fuel."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A market failure occurs when:",
  options: [
    "The market does not allocate resources efficiently",
    "Every market produces perfect results",
    "There are no consumers",
    "Government spending is zero"
  ],
  answer: "The market does not allocate resources efficiently",
  explanation:
    "Market failure occurs when unregulated market outcomes are inefficient, often due to externalities, public goods or imperfect information.",
  wrongExplanations: {
    "Every market produces perfect results":
      "That is the opposite of market failure.",
    "There are no consumers":
      "This is not the standard definition.",
    "Government spending is zero":
      "Public spending does not define market failure."
  },
  hint: "Inefficient market outcome."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Public goods are typically:",
  options: [
    "Non-rival and non-excludable",
    "Always privately owned",
    "Rival and fully excludable",
    "Only luxury goods"
  ],
  answer: "Non-rival and non-excludable",
  explanation:
    "Pure public goods can be consumed by one person without reducing availability to others and people cannot easily be excluded.",
  wrongExplanations: {
    "Always privately owned":
      "Ownership does not define a pure public good.",
    "Rival and fully excludable":
      "That describes private goods more closely.",
    "Only luxury goods":
      "Luxury status is unrelated."
  },
  hint: "Street lighting."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "The unemployment rate is generally calculated as unemployed persons divided by:",
  options: [
    "The labour force",
    "Total population only",
    "Number of firms",
    "Government employees only"
  ],
  answer: "The labour force",
  explanation:
    "The unemployment rate measures unemployed people actively seeking work as a percentage of the labour force.",
  wrongExplanations: {
    "Total population only":
      "Children and people outside the labour force are usually excluded.",
    "Number of firms":
      "Firm numbers are unrelated.",
    "Government employees only":
      "The labour force includes much more than government workers."
  },
  hint: "Employed + unemployed seeking work."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "A trade deficit occurs when:",
  options: [
    "Imports exceed exports",
    "Exports exceed imports",
    "Tax revenue exceeds spending",
    "GDP rises"
  ],
  answer: "Imports exceed exports",
  explanation:
    "A trade deficit occurs when a country imports more goods than it exports in value terms.",
  wrongExplanations: {
    "Exports exceed imports":
      "That creates a trade surplus.",
    "Tax revenue exceeds spending":
      "That is a fiscal surplus.",
    "GDP rises":
      "GDP growth does not define trade balance."
  },
  hint: "Buy abroad more than sell abroad."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "A regressive tax tends to place a relatively greater burden on:",
  options: [
    "Lower-income groups",
    "Higher-income groups only",
    "Only corporations",
    "Only foreign citizens"
  ],
  answer: "Lower-income groups",
  explanation:
    "A regressive tax takes a larger proportion of income from lower-income groups than from higher-income groups.",
  wrongExplanations: {
    "Higher-income groups only":
      "That is closer to progressive taxation.",
    "Only corporations":
      "Regressivity refers to burden relative to income.",
    "Only foreign citizens":
      "Nationality does not define regressivity."
  },
  hint: "Lower income, heavier relative burden."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "The capability approach to development is most closely associated with:",
  options: ["Amartya Sen", "Adam Smith only", "David Ricardo only", "Milton Friedman only"],
  answer: "Amartya Sen",
  explanation:
    "Amartya Sen's capability approach focuses on the real freedoms and capabilities people have to live lives they value.",
  wrongExplanations: {
    "Adam Smith only":
      "Smith is a foundational classical economist.",
    "David Ricardo only":
      "Ricardo is associated with classical economics and comparative advantage.",
    "Milton Friedman only":
      "Friedman is associated with monetarism and market-oriented economics."
  },
  hint: "Freedom and capability."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The distinction between Gemeinschaft and Gesellschaft is associated with:",
  options: ["Ferdinand Tönnies", "Karl Marx", "Durkheim", "Weber"],
  answer: "Ferdinand Tönnies",
  explanation:
    "Tönnies distinguished between Gemeinschaft, based on close communal ties, and Gesellschaft, based on impersonal associations.",
  wrongExplanations: {
    "Karl Marx":
      "Marx focused on class and capitalism.",
    Durkheim:
      "Durkheim distinguished mechanical and organic solidarity.",
    Weber:
      "Weber focused on social action and rationalisation."
  },
  hint: "Community and society."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of cultural capital is strongly associated with:",
  options: ["Pierre Bourdieu", "Auguste Comte", "Pareto", "Herbert Spencer"],
  answer: "Pierre Bourdieu",
  explanation:
    "Bourdieu used the concept of cultural capital to explain how knowledge, tastes and dispositions can reproduce social advantage.",
  wrongExplanations: {
    "Auguste Comte":
      "Comte is associated with positivism.",
    Pareto:
      "Pareto is associated with elite theory.",
    "Herbert Spencer":
      "Spencer is associated with evolutionary sociology."
  },
  hint: "Education, taste and social advantage."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Role conflict occurs when:",
  options: [
    "Different social roles make incompatible demands",
    "A person has no social role",
    "Every social expectation is identical",
    "Only one role exists"
  ],
  answer: "Different social roles make incompatible demands",
  explanation:
    "Role conflict arises when expectations attached to different roles compete with one another.",
  wrongExplanations: {
    "A person has no social role":
      "Most individuals occupy multiple roles.",
    "Every social expectation is identical":
      "Conflict requires incompatible expectations.",
    "Only one role exists":
      "Role conflict generally involves multiple roles."
  },
  hint: "Two roles clash."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Mass media can act as an agent of:",
  options: [
    "Socialisation",
    "Only geological change",
    "Only climate change",
    "Only biological evolution"
  ],
  answer: "Socialisation",
  explanation:
    "Mass media can transmit values, information, norms and political attitudes and therefore influence socialisation.",
  wrongExplanations: {
    "Only geological change":
      "Media do not produce geological processes.",
    "Only climate change":
      "Media may discuss climate change but do not define it.",
    "Only biological evolution":
      "Biological evolution is a different process."
  },
  hint: "Media teaches norms and ideas."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Social exclusion refers to:",
  options: [
    "Processes that prevent individuals or groups from full participation in society",
    "Complete social equality",
    "Only physical distance",
    "Only international migration"
  ],
  answer: "Processes that prevent individuals or groups from full participation in society",
  explanation:
    "Social exclusion involves barriers to participation in economic, political, social or cultural life.",
  wrongExplanations: {
    "Complete social equality":
      "Exclusion reflects inequality rather than equality.",
    "Only physical distance":
      "Exclusion can occur without geographical separation.",
    "Only international migration":
      "Migration can contribute to exclusion but does not define it."
  },
  hint: "Blocked from participation."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "Content analysis is used to study:",
  options: [
    "Patterns and meanings in texts, media or documents",
    "Only blood samples",
    "Only weather data",
    "Only chemical reactions"
  ],
  answer: "Patterns and meanings in texts, media or documents",
  explanation:
    "Content analysis systematically examines communication materials such as documents, speeches, newspapers or media content.",
  wrongExplanations: {
    "Only blood samples":
      "That belongs to biological or medical research.",
    "Only weather data":
      "Weather data are analysed in meteorology.",
    "Only chemical reactions":
      "Chemical reactions belong to chemistry."
  },
  hint: "Analyse texts and media."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Self-efficacy refers to:",
  options: [
    "Belief in one's ability to perform a task",
    "Physical strength only",
    "Amount of money earned",
    "Number of textbooks owned"
  ],
  answer: "Belief in one's ability to perform a task",
  explanation:
    "Self-efficacy is the belief that one can organise and carry out actions required to succeed in a specific task.",
  wrongExplanations: {
    "Physical strength only":
      "Self-efficacy is psychological rather than purely physical.",
    "Amount of money earned":
      "Income does not define self-efficacy.",
    "Number of textbooks owned":
      "Resources do not equal belief in capability."
  },
  hint: "Can I do this?"
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Learning difficulties should generally be addressed by:",
  options: [
    "Identifying needs and providing appropriate support",
    "Ignoring the learner",
    "Punishing every error",
    "Removing the learner from education"
  ],
  answer: "Identifying needs and providing appropriate support",
  explanation:
    "Effective support begins by identifying specific difficulties and adapting instruction or assistance accordingly.",
  wrongExplanations: {
    "Ignoring the learner":
      "Ignoring difficulties can worsen them.",
    "Punishing every error":
      "Punishment does not address underlying learning needs.",
    "Removing the learner from education":
      "Inclusive approaches aim to support participation."
  },
  hint: "Identify and support."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Experiential learning emphasises:",
  options: [
    "Learning through experience and reflection",
    "Only listening to lectures",
    "Only memorising definitions",
    "No practical involvement"
  ],
  answer: "Learning through experience and reflection",
  explanation:
    "Experiential learning connects direct experience with reflection and application.",
  wrongExplanations: {
    "Only listening to lectures":
      "Experiential learning requires active involvement.",
    "Only memorising definitions":
      "It focuses more on application and reflection.",
    "No practical involvement":
      "Experience is central."
  },
  hint: "Experience + reflection."
},

{
  subject: "Education",
  category: "Assessment",
  question: "A portfolio assessment contains:",
  options: [
    "A collection of a learner's work over time",
    "Only one multiple-choice question",
    "Only attendance records",
    "Only the final mark"
  ],
  answer: "A collection of a learner's work over time",
  explanation:
    "A portfolio contains selected work demonstrating progress, achievement and learning across a period.",
  wrongExplanations: {
    "Only one multiple-choice question":
      "A portfolio uses multiple pieces of work.",
    "Only attendance records":
      "Attendance may be recorded elsewhere.",
    "Only the final mark":
      "Portfolios provide richer evidence than one mark."
  },
  hint: "Collection of student work."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Inclusive classrooms should ideally value:",
  options: [
    "Learner diversity",
    "Only one type of learner",
    "Exclusion",
    "Uniform ability"
  ],
  answer: "Learner diversity",
  explanation:
    "Inclusive education recognises differences in ability, background, language and learning needs as part of normal classroom diversity.",
  wrongExplanations: {
    "Only one type of learner":
      "Inclusion serves diverse learners.",
    Exclusion:
      "Inclusion seeks to reduce exclusion.",
    "Uniform ability":
      "Learners naturally differ."
  },
  hint: "Different learners belong together."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "The social aim of education emphasises:",
  options: [
    "Preparing individuals to participate effectively in society",
    "Only private benefit",
    "Only examination success",
    "Only physical development"
  ],
  answer: "Preparing individuals to participate effectively in society",
  explanation:
    "The social aim of education stresses citizenship, social responsibility and contribution to collective life.",
  wrongExplanations: {
    "Only private benefit":
      "Education also has social functions.",
    "Only examination success":
      "Examinations are only one part of education.",
    "Only physical development":
      "The social aim is broader."
  },
  hint: "Education for society."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'He ___ already left when I arrived.'",
  options: ["had", "has", "have", "is"],
  answer: "had",
  explanation:
    "The past perfect is used for an action completed before another past action.",
  wrongExplanations: {
    has:
      "Present perfect does not fit the past-time sequence.",
    have:
      "The subject is singular and the tense is wrong.",
    is:
      "This cannot form the required perfect tense."
  },
  hint: "Earlier past action."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct sentence:",
  options: [
    "She enjoys reading novels.",
    "She enjoys to read novels.",
    "She enjoy reading novels.",
    "She enjoying novels."
  ],
  answer: "She enjoys reading novels.",
  explanation:
    "The verb 'enjoy' is normally followed by a gerund, and 'she' takes 'enjoys'.",
  wrongExplanations: {
    "She enjoys to read novels.":
      "'Enjoy' is normally followed by -ing.",
    "She enjoy reading novels.":
      "The third-person singular requires 'enjoys'.",
    "She enjoying novels.":
      "A finite verb is missing."
  },
  hint: "Enjoy + ing."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'interpret'.",
  options: ["Explain", "Ignore", "Remove", "Destroy"],
  answer: "Explain",
  explanation:
    "Interpret means to explain or understand the meaning of something.",
  wrongExplanations: {
    Ignore:
      "Ignore means not pay attention.",
    Remove:
      "Remove means take away.",
    Destroy:
      "Destroy means damage completely."
  },
  hint: "Explain meaning."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'maximum'.",
  options: ["Minimum", "Highest", "Greatest", "Largest"],
  answer: "Minimum",
  explanation:
    "Minimum means the smallest possible amount and is the opposite of maximum.",
  wrongExplanations: {
    Highest:
      "Highest is similar to maximum.",
    Greatest:
      "Greatest is similar to maximum.",
    Largest:
      "Largest is similar to maximum."
  },
  hint: "Smallest."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "An author's purpose may be to:",
  options: [
    "Inform, persuade, entertain or explain",
    "Only use long words",
    "Only create paragraphs",
    "Only repeat the title"
  ],
  answer: "Inform, persuade, entertain or explain",
  explanation:
    "Authors write for different purposes including informing, persuading, entertaining and explaining.",
  wrongExplanations: {
    "Only use long words":
      "Vocabulary choice is not the purpose itself.",
    "Only create paragraphs":
      "Paragraphs are structural units.",
    "Only repeat the title":
      "A title does not define purpose."
  },
  hint: "Why was the text written?"
},

{
  subject: "English",
  category: "Writing",
  question: "Paraphrasing means:",
  options: [
    "Expressing an idea in your own words while preserving its meaning",
    "Copying every word exactly",
    "Deleting the original idea",
    "Changing the topic completely"
  ],
  answer: "Expressing an idea in your own words while preserving its meaning",
  explanation:
    "Paraphrasing restates information using different wording and sentence structure without changing the core meaning.",
  wrongExplanations: {
    "Copying every word exactly":
      "That is quotation or copying, not paraphrasing.",
    "Deleting the original idea":
      "The meaning should remain.",
    "Changing the topic completely":
      "A paraphrase stays faithful to the original idea."
  },
  hint: "Same meaning, different words."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 11, 22, 33, 44, ?",
  options: ["50", "55", "60", "66"],
  answer: "55",
  explanation:
    "The sequence increases by 11 each time.",
  wrongExplanations: {
    "50":
      "This adds only 6.",
    "60":
      "This adds 16.",
    "66":
      "66 comes after 55."
  },
  hint: "Multiples of 11."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "If Monday is followed by Tuesday, Tuesday is followed by:",
  options: ["Wednesday", "Friday", "Sunday", "Monday"],
  answer: "Wednesday",
  explanation:
    "The normal sequence of weekdays is Monday, Tuesday, Wednesday.",
  wrongExplanations: {
    Friday:
      "Friday comes later in the week.",
    Sunday:
      "Sunday does not immediately follow Tuesday.",
    Monday:
      "Monday comes before Tuesday."
  },
  hint: "Weekday order."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 7/10 of 200?",
  options: ["120", "130", "140", "150"],
  answer: "140",
  explanation:
    "7/10 × 200 = 140.",
  wrongExplanations: {
    "120":
      "This is 60% of 200.",
    "130":
      "This is 65% of 200.",
    "150":
      "This is 75% of 200."
  },
  hint: "70% of 200."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "If 10 books cost ₹500, what is the cost of 3 books at the same rate?",
  options: ["₹100", "₹150", "₹200", "₹250"],
  answer: "₹150",
  explanation:
    "One book costs ₹50, so 3 books cost ₹150.",
  wrongExplanations: {
    "₹100":
      "This equals the cost of 2 books.",
    "₹200":
      "This equals the cost of 4 books.",
    "₹250":
      "This equals the cost of 5 books."
  },
  hint: "Find price of one book first."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "A computer virus is:",
  options: [
    "Malicious code that can infect files or systems",
    "A hardware component",
    "A web browser",
    "A printer driver only"
  ],
  answer: "Malicious code that can infect files or systems",
  explanation:
    "A computer virus is malicious software that can attach to files or programs and spread when executed.",
  wrongExplanations: {
    "A hardware component":
      "A virus is software, not hardware.",
    "A web browser":
      "A browser is legitimate application software.",
    "A printer driver only":
      "Drivers allow hardware to communicate with the operating system."
  },
  hint: "Malware that spreads."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of the International Atomic Energy Agency is in:",
  options: ["Vienna", "Geneva", "Paris", "Rome"],
  answer: "Vienna",
  explanation:
    "The International Atomic Energy Agency is headquartered in Vienna, Austria.",
  wrongExplanations: {
    Geneva:
      "Geneva hosts many other international organisations.",
    Paris:
      "UNESCO is headquartered in Paris.",
    Rome:
      "FAO is headquartered in Rome."
  },
  hint: "Austria."
},
{
  subject: "Political Science",
  category: "Research Methodology",
  question: "An independent variable is usually the variable that:",
  options: [
    "Is used to explain or influence another variable",
    "Is always the final result",
    "Cannot change",
    "Is only found in qualitative research"
  ],
  answer: "Is used to explain or influence another variable",
  explanation:
    "An independent variable is commonly treated as the explanatory or influencing variable in a relationship.",
  wrongExplanations: {
    "Is always the final result":
      "The outcome is usually treated as the dependent variable.",
    "Cannot change":
      "Variables can take different values.",
    "Is only found in qualitative research":
      "Independent variables are widely used in quantitative research."
  },
  hint: "Think cause or predictor."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A dependent variable is usually:",
  options: [
    "The outcome being explained or measured",
    "The researcher's name",
    "The bibliography",
    "The sample size only"
  ],
  answer: "The outcome being explained or measured",
  explanation:
    "The dependent variable is the outcome that may change in response to an independent variable.",
  wrongExplanations: {
    "The researcher's name":
      "This is unrelated to variables.",
    "The bibliography":
      "A bibliography lists sources.",
    "The sample size only":
      "Sample size is a research design feature."
  },
  hint: "Think outcome."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Pluralism argues that political power is:",
  options: [
    "Distributed among many competing groups",
    "Held permanently by one individual",
    "Controlled only by the military",
    "Absent from society"
  ],
  answer: "Distributed among many competing groups",
  explanation:
    "Pluralist theory views political power as dispersed among multiple groups and interests.",
  wrongExplanations: {
    "Held permanently by one individual":
      "That would describe extreme concentration of power.",
    "Controlled only by the military":
      "Pluralism rejects such a narrow concentration.",
    "Absent from society":
      "Pluralism is a theory about how power is distributed."
  },
  hint: "Many groups compete."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The constitutional head of a state in India is the:",
  options: ["Governor", "Chief Minister", "Chief Secretary", "Speaker"],
  answer: "Governor",
  explanation:
    "The Governor is the constitutional head of a state, while the Chief Minister leads the elected government.",
  wrongExplanations: {
    "Chief Minister":
      "The Chief Minister is the real executive leader of the state government.",
    "Chief Secretary":
      "The Chief Secretary is the senior-most state civil servant.",
    Speaker:
      "The Speaker presides over the Legislative Assembly."
  },
  hint: "Formal head of the state."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Multilateralism refers to:",
  options: [
    "Cooperation among several states",
    "Relations between only two states",
    "Complete isolation",
    "Only domestic politics"
  ],
  answer: "Cooperation among several states",
  explanation:
    "Multilateralism involves coordinated interaction among three or more states, often through institutions.",
  wrongExplanations: {
    "Relations between only two states":
      "That is bilateralism.",
    "Complete isolation":
      "Multilateralism requires cooperation.",
    "Only domestic politics":
      "It is an international concept."
  },
  hint: "Many states together."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Hierarchy in administration means:",
  options: [
    "A graded structure of authority",
    "No superior-subordinate relationship",
    "Complete equality of every office",
    "Absence of organisation"
  ],
  answer: "A graded structure of authority",
  explanation:
    "Hierarchy arranges offices in levels of authority and responsibility.",
  wrongExplanations: {
    "No superior-subordinate relationship":
      "Hierarchy is based on such relationships.",
    "Complete equality of every office":
      "Hierarchical offices differ in authority.",
    "Absence of organisation":
      "Hierarchy is an organisational principle."
  },
  hint: "Levels of authority."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Satavahanas were mainly associated with:",
  options: [
    "The Deccan region",
    "Only Kashmir",
    "Only Bengal",
    "Only Punjab"
  ],
  answer: "The Deccan region",
  explanation:
    "The Satavahanas ruled large parts of the Deccan and played an important role in early Indian history.",
  wrongExplanations: {
    "Only Kashmir":
      "Their core region was not Kashmir.",
    "Only Bengal":
      "They were not primarily a Bengal dynasty.",
    "Only Punjab":
      "Punjab was not their main base."
  },
  hint: "Central and southern India."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Kushans played an important role in promoting trade along the:",
  options: [
    "Silk Route",
    "Atlantic slave route",
    "Cape Route only",
    "Panama Canal"
  ],
  answer: "Silk Route",
  explanation:
    "The Kushan Empire occupied a strategic position connecting India, Central Asia and Silk Route trade networks.",
  wrongExplanations: {
    "Atlantic slave route":
      "This belongs to a much later historical period.",
    "Cape Route only":
      "The Cape sea route developed much later.",
    "Panama Canal":
      "The Panama Canal opened in the twentieth century."
  },
  hint: "India to Central Asia."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who founded the Lodi dynasty?",
  options: [
    "Bahlul Lodi",
    "Ibrahim Lodi",
    "Sikandar Lodi",
    "Daulat Khan Lodi"
  ],
  answer: "Bahlul Lodi",
  explanation:
    "Bahlul Lodi founded the Lodi dynasty in the Delhi Sultanate.",
  wrongExplanations: {
    "Ibrahim Lodi":
      "Ibrahim Lodi was the last Lodi ruler.",
    "Sikandar Lodi":
      "Sikandar Lodi was a later ruler of the dynasty.",
    "Daulat Khan Lodi":
      "He was a regional noble rather than founder of the dynasty."
  },
  hint: "First Lodi Sultan."
},

{
  subject: "History",
  category: "Modern India",
  question: "Who founded the Brahmo Samaj?",
  options: [
    "Raja Ram Mohan Roy",
    "Swami Dayanand Saraswati",
    "Swami Vivekananda",
    "Ishwar Chandra Vidyasagar"
  ],
  answer: "Raja Ram Mohan Roy",
  explanation:
    "Raja Ram Mohan Roy founded the Brahmo Samaj as a major social and religious reform movement.",
  wrongExplanations: {
    "Swami Dayanand Saraswati":
      "He founded the Arya Samaj.",
    "Swami Vivekananda":
      "He founded the Ramakrishna Mission.",
    "Ishwar Chandra Vidyasagar":
      "He was a major social reformer but did not found Brahmo Samaj."
  },
  hint: "Early nineteenth-century reformer."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Arya Samaj was founded by:",
  options: [
    "Swami Dayanand Saraswati",
    "Raja Ram Mohan Roy",
    "Swami Vivekananda",
    "Jyotirao Phule"
  ],
  answer: "Swami Dayanand Saraswati",
  explanation:
    "Swami Dayanand Saraswati founded the Arya Samaj in 1875.",
  wrongExplanations: {
    "Raja Ram Mohan Roy":
      "He founded Brahmo Samaj.",
    "Swami Vivekananda":
      "He founded the Ramakrishna Mission.",
    "Jyotirao Phule":
      "Phule founded the Satyashodhak Samaj."
  },
  hint: "Back to the Vedas."
},

{
  subject: "History",
  category: "World History",
  question: "The Cuban Missile Crisis occurred in:",
  options: ["1962", "1949", "1955", "1971"],
  answer: "1962",
  explanation:
    "The Cuban Missile Crisis of 1962 brought the United States and Soviet Union close to nuclear confrontation.",
  wrongExplanations: {
    "1949":
      "NATO was founded in 1949.",
    "1955":
      "The Warsaw Pact was founded in 1955.",
    "1971":
      "This is unrelated to the Cuban Missile Crisis."
  },
  hint: "Kennedy and Khrushchev."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The inner core of Earth is mainly:",
  options: [
    "Solid",
    "Liquid",
    "Gas",
    "Water"
  ],
  answer: "Solid",
  explanation:
    "The inner core is solid due to immense pressure despite its very high temperature.",
  wrongExplanations: {
    Liquid:
      "The outer core is liquid.",
    Gas:
      "The core is metallic rather than gaseous.",
    Water:
      "The core is not composed of water."
  },
  hint: "High pressure keeps it solid."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The outer core of Earth is mainly:",
  options: [
    "Liquid",
    "Solid",
    "Gas",
    "Ice"
  ],
  answer: "Liquid",
  explanation:
    "The outer core is a liquid metallic layer composed mainly of iron and nickel.",
  wrongExplanations: {
    Solid:
      "The inner core is solid.",
    Gas:
      "The outer core is not gaseous.",
    Ice:
      "Temperatures are extremely high."
  },
  hint: "Source of much of Earth's magnetic field."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A peninsula is a landform surrounded by water on:",
  options: [
    "Three sides",
    "One side",
    "Two sides only",
    "All four sides"
  ],
  answer: "Three sides",
  explanation:
    "A peninsula is a piece of land surrounded by water on three sides and connected to a larger landmass.",
  wrongExplanations: {
    "One side":
      "This is not sufficient to define a peninsula.",
    "Two sides only":
      "A peninsula is typically surrounded on three sides.",
    "All four sides":
      "Land surrounded by water on all sides is an island."
  },
  hint: "India is often described as a peninsula."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A declining birth rate combined with low death rate often leads to:",
  options: [
    "Slower population growth",
    "Explosive population growth",
    "No population ageing",
    "Higher infant mortality automatically"
  ],
  answer: "Slower population growth",
  explanation:
    "When both birth and death rates are low, population growth usually slows.",
  wrongExplanations: {
    "Explosive population growth":
      "Rapid growth occurs more often when birth rates remain high while death rates fall.",
    "No population ageing":
      "Low birth rates can contribute to ageing.",
    "Higher infant mortality automatically":
      "Low death rates do not imply higher infant mortality."
  },
  hint: "Later stage of demographic transition."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A metropolitan area generally consists of:",
  options: [
    "A large city and its surrounding urbanised areas",
    "Only one village",
    "Only agricultural land",
    "Only forests"
  ],
  answer: "A large city and its surrounding urbanised areas",
  explanation:
    "A metropolitan area includes a major urban centre and nearby settlements economically and socially linked to it.",
  wrongExplanations: {
    "Only one village":
      "A metropolitan area is much larger.",
    "Only agricultural land":
      "Urban development is central.",
    "Only forests":
      "Forests do not define metropolitan areas."
  },
  hint: "Big city plus surrounding urban zone."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Transport networks are important to economic geography because they:",
  options: [
    "Connect producers, markets and consumers",
    "Eliminate all production",
    "Prevent trade",
    "Make location irrelevant"
  ],
  answer: "Connect producers, markets and consumers",
  explanation:
    "Transport networks influence accessibility, trade costs, industrial location and market connections.",
  wrongExplanations: {
    "Eliminate all production":
      "Transport supports production and exchange.",
    "Prevent trade":
      "Transport usually enables trade.",
    "Make location irrelevant":
      "Location remains important."
  },
  hint: "Move goods and people."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A positive externality occurs when:",
  options: [
    "An activity creates benefits for third parties",
    "An activity harms only the buyer",
    "Every transaction is taxed",
    "A market closes"
  ],
  answer: "An activity creates benefits for third parties",
  explanation:
    "A positive externality occurs when people outside the transaction receive benefits without directly paying for them.",
  wrongExplanations: {
    "An activity harms only the buyer":
      "That is not an external benefit.",
    "Every transaction is taxed":
      "Taxation does not define an externality.",
    "A market closes":
      "Market closure is unrelated."
  },
  hint: "Benefit beyond buyer and seller."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A negative externality occurs when:",
  options: [
    "An activity imposes costs on third parties",
    "Every consumer receives a benefit",
    "Prices remain stable",
    "Government revenue rises"
  ],
  answer: "An activity imposes costs on third parties",
  explanation:
    "Pollution is a classic example of a negative externality because others bear costs from the producer's activity.",
  wrongExplanations: {
    "Every consumer receives a benefit":
      "That does not describe a negative externality.",
    "Prices remain stable":
      "Price stability is unrelated.",
    "Government revenue rises":
      "Fiscal revenue does not define externality."
  },
  hint: "Pollution."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Aggregate demand refers to:",
  options: [
    "Total demand for goods and services in an economy",
    "Demand for one product only",
    "Only government demand",
    "Only foreign demand"
  ],
  answer: "Total demand for goods and services in an economy",
  explanation:
    "Aggregate demand represents total planned spending on domestically produced goods and services.",
  wrongExplanations: {
    "Demand for one product only":
      "That is individual market demand.",
    "Only government demand":
      "Government spending is only one component.",
    "Only foreign demand":
      "Exports are only one component."
  },
  hint: "Economy-wide demand."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Aggregate supply refers to:",
  options: [
    "Total output firms are willing to produce",
    "Only agricultural output",
    "Only exports",
    "Only government services"
  ],
  answer: "Total output firms are willing to produce",
  explanation:
    "Aggregate supply refers to the total quantity of goods and services firms are willing to produce at different price levels.",
  wrongExplanations: {
    "Only agricultural output":
      "It includes all major sectors.",
    "Only exports":
      "Exports are only part of total output.",
    "Only government services":
      "It is broader than government activity."
  },
  hint: "Economy-wide supply."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "Capital expenditure by government usually creates:",
  options: [
    "Assets or long-term productive capacity",
    "Only routine office expenses",
    "Only salary payments",
    "Only interest payments"
  ],
  answer: "Assets or long-term productive capacity",
  explanation:
    "Capital expenditure often finances infrastructure, equipment and other assets with longer-term benefits.",
  wrongExplanations: {
    "Only routine office expenses":
      "These are generally revenue expenditure.",
    "Only salary payments":
      "Salaries are usually revenue expenditure.",
    "Only interest payments":
      "Interest payments are generally revenue expenditure."
  },
  hint: "Roads, buildings, infrastructure."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "A demographic dividend can occur when:",
  options: [
    "A large share of the population is of working age",
    "The entire population is elderly",
    "No one participates in the labour force",
    "Births and deaths are both zero"
  ],
  answer: "A large share of the population is of working age",
  explanation:
    "A demographic dividend may arise when the working-age population becomes relatively large and is productively employed.",
  wrongExplanations: {
    "The entire population is elderly":
      "That usually increases dependency.",
    "No one participates in the labour force":
      "Productive employment is crucial for the dividend.",
    "Births and deaths are both zero":
      "That does not define demographic dividend."
  },
  hint: "Large working-age share."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of social action is central to the work of:",
  options: [
    "Max Weber",
    "Auguste Comte",
    "Herbert Spencer",
    "Vilfredo Pareto"
  ],
  answer: "Max Weber",
  explanation:
    "Weber defined sociology around the interpretive understanding of meaningful social action.",
  wrongExplanations: {
    "Auguste Comte":
      "Comte emphasised positivism.",
    "Herbert Spencer":
      "Spencer used evolutionary analogies.",
    "Vilfredo Pareto":
      "Pareto is associated with elite theory."
  },
  hint: "Meaningful action."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of class consciousness is strongly associated with:",
  options: [
    "Karl Marx",
    "Durkheim",
    "Comte",
    "Parsons"
  ],
  answer: "Karl Marx",
  explanation:
    "Class consciousness refers to awareness of shared class interests and position, an important Marxist concept.",
  wrongExplanations: {
    Durkheim:
      "Durkheim focused on solidarity and social facts.",
    Comte:
      "Comte is associated with positivism.",
    Parsons:
      "Parsons developed structural functionalism."
  },
  hint: "Workers becoming aware of class interests."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Social interaction refers to:",
  options: [
    "Mutual influence between individuals or groups",
    "Only physical movement",
    "Only economic exchange",
    "No communication"
  ],
  answer: "Mutual influence between individuals or groups",
  explanation:
    "Social interaction involves actions and responses through which people influence one another.",
  wrongExplanations: {
    "Only physical movement":
      "Movement alone is not necessarily social interaction.",
    "Only economic exchange":
      "Economic interaction is only one type.",
    "No communication":
      "Interaction usually involves some form of communication."
  },
  hint: "Action and response."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Schools contribute to society by:",
  options: [
    "Educating and socialising new generations",
    "Only collecting taxes",
    "Only enforcing criminal law",
    "Only producing goods"
  ],
  answer: "Educating and socialising new generations",
  explanation:
    "Schools transmit knowledge, skills, values and social norms.",
  wrongExplanations: {
    "Only collecting taxes":
      "Tax collection is a government fiscal function.",
    "Only enforcing criminal law":
      "Law enforcement is performed by legal institutions.",
    "Only producing goods":
      "Schools primarily provide education."
  },
  hint: "Education and socialisation."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Downward mobility refers to:",
  options: [
    "Movement to a lower social position",
    "Movement to a higher position",
    "No change in position",
    "Only moving to another country"
  ],
  answer: "Movement to a lower social position",
  explanation:
    "Downward mobility occurs when an individual or group moves to a lower position in the social hierarchy.",
  wrongExplanations: {
    "Movement to a higher position":
      "That is upward mobility.",
    "No change in position":
      "That is not mobility.",
    "Only moving to another country":
      "Migration does not necessarily change social position."
  },
  hint: "Move down."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "Quantitative sociology commonly uses:",
  options: [
    "Numerical data and statistical analysis",
    "Only personal diaries",
    "Only philosophical texts",
    "No measurement"
  ],
  answer: "Numerical data and statistical analysis",
  explanation:
    "Quantitative sociology uses measurable variables and statistical techniques to study social patterns.",
  wrongExplanations: {
    "Only personal diaries":
      "Diaries are more commonly qualitative sources.",
    "Only philosophical texts":
      "These may support theory but do not define quantitative research.",
    "No measurement":
      "Measurement is central to quantitative methods."
  },
  hint: "Numbers."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Metacognition means:",
  options: [
    "Thinking about one's own thinking and learning",
    "Only memorising facts",
    "Only physical movement",
    "Only teaching others"
  ],
  answer: "Thinking about one's own thinking and learning",
  explanation:
    "Metacognition involves awareness and regulation of one's own cognitive processes.",
  wrongExplanations: {
    "Only memorising facts":
      "Memory is only one cognitive process.",
    "Only physical movement":
      "That belongs to psychomotor learning.",
    "Only teaching others":
      "Teaching is not the definition of metacognition."
  },
  hint: "Think about how you think."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "A learning curve shows:",
  options: [
    "Changes in performance over practice or time",
    "Only school attendance",
    "Only examination dates",
    "Only physical height"
  ],
  answer: "Changes in performance over practice or time",
  explanation:
    "A learning curve represents improvement or changes in performance as practice or learning progresses.",
  wrongExplanations: {
    "Only school attendance":
      "Attendance is a separate measure.",
    "Only examination dates":
      "Dates do not show learning performance.",
    "Only physical height":
      "Height is a biological measure."
  },
  hint: "Performance across practice."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Cooperative learning usually requires:",
  options: [
    "Students working together in small groups",
    "No student interaction",
    "Only teacher lecture",
    "Complete competition at all times"
  ],
  answer: "Students working together in small groups",
  explanation:
    "Cooperative learning organises students into groups where they work together toward shared learning goals.",
  wrongExplanations: {
    "No student interaction":
      "Interaction is central.",
    "Only teacher lecture":
      "Cooperative learning is student-active.",
    "Complete competition at all times":
      "Cooperation rather than constant competition is emphasised."
  },
  hint: "Small-group learning."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Objective-type tests include:",
  options: [
    "Multiple-choice questions",
    "Only long essays",
    "Only oral speeches",
    "Only project work"
  ],
  answer: "Multiple-choice questions",
  explanation:
    "Multiple-choice, true-false and matching items are common objective-type assessment formats.",
  wrongExplanations: {
    "Only long essays":
      "Essays are subjective-response items.",
    "Only oral speeches":
      "Oral presentations are performance assessments.",
    "Only project work":
      "Projects are alternative assessments."
  },
  hint: "Fixed correct response."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "An inclusive teacher should generally:",
  options: [
    "Adapt instruction when learners have different needs",
    "Ignore learner differences",
    "Exclude weaker learners",
    "Use barriers intentionally"
  ],
  answer: "Adapt instruction when learners have different needs",
  explanation:
    "Inclusive teaching responds flexibly to diverse learner needs and seeks participation for all students.",
  wrongExplanations: {
    "Ignore learner differences":
      "Learner differences should be recognised.",
    "Exclude weaker learners":
      "Exclusion contradicts inclusion.",
    "Use barriers intentionally":
      "Inclusive education seeks to remove barriers."
  },
  hint: "Adapt and include."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Education and culture are related because education helps to:",
  options: [
    "Transmit and transform culture",
    "Eliminate every tradition",
    "Stop communication",
    "Prevent social learning"
  ],
  answer: "Transmit and transform culture",
  explanation:
    "Education passes cultural knowledge and values across generations while also contributing to cultural change.",
  wrongExplanations: {
    "Eliminate every tradition":
      "Education may preserve as well as question traditions.",
    "Stop communication":
      "Communication is central to education.",
    "Prevent social learning":
      "Education is itself a major form of social learning."
  },
  hint: "Culture passes through education."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct sentence:",
  options: [
    "The committee has made its decision.",
    "The committee have made their decision only.",
    "The committee making its decision.",
    "The committee has make its decision."
  ],
  answer: "The committee has made its decision.",
  explanation:
    "In standard singular collective usage, 'committee' takes 'has made'.",
  wrongExplanations: {
    "The committee have made their decision only.":
      "Some varieties allow plural collective agreement, but the singular form is the safer standard exam answer here.",
    "The committee making its decision.":
      "A finite verb is missing.",
    "The committee has make its decision.":
      "The past participle 'made' is required."
  },
  hint: "Has + past participle."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct preposition: 'He is responsible ___ the project.'",
  options: ["for", "of", "at", "with"],
  answer: "for",
  explanation:
    "The standard expression is 'responsible for'.",
  wrongExplanations: {
    of:
      "'Responsible of' is not standard in this context.",
    at:
      "'Responsible at' is incorrect here.",
    with:
      "'Responsible with' does not fit the standard collocation."
  },
  hint: "Common collocation."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'retain'.",
  options: ["Keep", "Lose", "Reject", "Remove"],
  answer: "Keep",
  explanation:
    "Retain means to keep or continue to have something.",
  wrongExplanations: {
    Lose:
      "Lose is the opposite.",
    Reject:
      "Reject means refuse.",
    Remove:
      "Remove means take away."
  },
  hint: "Continue to have."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'accept'.",
  options: ["Reject", "Receive", "Approve", "Agree"],
  answer: "Reject",
  explanation:
    "Reject means refuse or decline and is the opposite of accept.",
  wrongExplanations: {
    Receive:
      "Receive is similar to accept.",
    Approve:
      "Approve is positive and related to acceptance.",
    Agree:
      "Agree is also similar in meaning."
  },
  hint: "Refuse."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "A summary should:",
  options: [
    "Present the main points briefly",
    "Copy the entire passage",
    "Include every minor detail",
    "Change the author's main meaning"
  ],
  answer: "Present the main points briefly",
  explanation:
    "A summary condenses a text while preserving its central ideas.",
  wrongExplanations: {
    "Copy the entire passage":
      "That is reproduction, not summary.",
    "Include every minor detail":
      "Summaries focus on essential points.",
    "Change the author's main meaning":
      "A summary should remain faithful to the original meaning."
  },
  hint: "Short version of main ideas."
},

{
  subject: "English",
  category: "Writing",
  question: "A citation is used mainly to:",
  options: [
    "Acknowledge the source of information or ideas",
    "Hide the source",
    "Increase paragraph length only",
    "Replace all explanation"
  ],
  answer: "Acknowledge the source of information or ideas",
  explanation:
    "Citations identify where information, arguments or quotations came from.",
  wrongExplanations: {
    "Hide the source":
      "Citations make sources visible.",
    "Increase paragraph length only":
      "Length is not the purpose.",
    "Replace all explanation":
      "Citations support rather than replace analysis."
  },
  hint: "Give credit."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 6, 12, 18, 24, ?",
  options: ["28", "30", "32", "36"],
  answer: "30",
  explanation:
    "The sequence increases by 6 each time.",
  wrongExplanations: {
    "28":
      "This adds only 4.",
    "32":
      "This adds 8.",
    "36":
      "36 comes after 30."
  },
  hint: "Multiples of 6."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Hand is to Glove as Foot is to:",
  options: ["Shoe", "Hat", "Shirt", "Belt"],
  answer: "Shoe",
  explanation:
    "A glove is worn on the hand, while a shoe is worn on the foot.",
  wrongExplanations: {
    Hat:
      "A hat is worn on the head.",
    Shirt:
      "A shirt is worn on the torso.",
    Belt:
      "A belt is worn around the waist."
  },
  hint: "Body part and clothing."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 20% of 450?",
  options: ["80", "90", "100", "110"],
  answer: "90",
  explanation:
    "20% of 450 = 0.20 × 450 = 90.",
  wrongExplanations: {
    "80":
      "This is less than 20%.",
    "100":
      "This is more than 20%.",
    "110":
      "This is too high."
  },
  hint: "10% is 45."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A number falls from 200 to 150. What is the percentage decrease?",
  options: ["20%", "25%", "30%", "50%"],
  answer: "25%",
  explanation:
    "Decrease = 50. Percentage decrease = 50/200 × 100 = 25%.",
  wrongExplanations: {
    "20%":
      "20% of 200 is 40.",
    "30%":
      "30% of 200 is 60.",
    "50%":
      "50% would reduce 200 to 100."
  },
  hint: "Decrease divided by original."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Cloud computing allows users to:",
  options: [
    "Access computing resources over the internet",
    "Only use offline paper files",
    "Remove all networks",
    "Operate without any computing resources"
  ],
  answer: "Access computing resources over the internet",
  explanation:
    "Cloud computing provides services such as storage, software and processing through remote internet-connected systems.",
  wrongExplanations: {
    "Only use offline paper files":
      "Cloud computing is digital and network-based.",
    "Remove all networks":
      "Network access is central.",
    "Operate without any computing resources":
      "Cloud computing still relies on computing infrastructure."
  },
  hint: "Remote servers."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of the Asian Development Bank is in:",
  options: ["Manila", "Tokyo", "New Delhi", "Bangkok"],
  answer: "Manila",
  explanation:
    "The Asian Development Bank is headquartered in Manila, Philippines.",
  wrongExplanations: {
    Tokyo:
      "Japan is an important ADB member, but the headquarters is not in Tokyo.",
    "New Delhi":
      "India is a member, but the headquarters is not in New Delhi.",
    Bangkok:
      "Bangkok hosts several regional institutions but not ADB headquarters."
  },
  hint: "Philippines."
},
{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A census method studies:",
  options: [
    "Every unit in the population",
    "Only a small sample",
    "Only experts",
    "Only published books"
  ],
  answer: "Every unit in the population",
  explanation:
    "A census method collects information from all units or members of the defined population.",
  wrongExplanations: {
    "Only a small sample":
      "That describes sample-based research.",
    "Only experts":
      "Expert selection is a purposive approach, not a census.",
    "Only published books":
      "Published books are secondary sources."
  },
  hint: "Whole population."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Purposive sampling means selecting respondents:",
  options: [
    "Because they meet specific research criteria",
    "Only by lottery",
    "Without any reason",
    "Only from the researcher's family"
  ],
  answer: "Because they meet specific research criteria",
  explanation:
    "Purposive sampling deliberately selects participants who have characteristics or knowledge relevant to the research question.",
  wrongExplanations: {
    "Only by lottery":
      "Lottery selection is a form of random sampling.",
    "Without any reason":
      "Purposive sampling follows defined criteria.",
    "Only from the researcher's family":
      "That would be biased and is not the definition."
  },
  hint: "Selected for a reason."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Citizenship generally refers to:",
  options: [
    "Membership in a political community with rights and duties",
    "Only residence in a city",
    "Only payment of taxes",
    "Only voting"
  ],
  answer: "Membership in a political community with rights and duties",
  explanation:
    "Citizenship involves legal and political membership together with associated rights, duties and participation.",
  wrongExplanations: {
    "Only residence in a city":
      "Residence alone does not define citizenship.",
    "Only payment of taxes":
      "Tax payment is only one possible duty.",
    "Only voting":
      "Voting is only one aspect of citizenship."
  },
  hint: "Rights + duties + membership."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The President can proclaim a national emergency under:",
  options: ["Article 352", "Article 356", "Article 360", "Article 324"],
  answer: "Article 352",
  explanation:
    "Article 352 provides for proclamation of a national emergency under specified constitutional conditions.",
  wrongExplanations: {
    "Article 356":
      "Article 356 concerns failure of constitutional machinery in a state.",
    "Article 360":
      "Article 360 provides for financial emergency.",
    "Article 324":
      "Article 324 deals with the Election Commission."
  },
  hint: "National emergency."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Unipolarity refers to an international system dominated by:",
  options: [
    "One major power",
    "Two equal powers",
    "Many equal powers",
    "No states"
  ],
  answer: "One major power",
  explanation:
    "A unipolar system is one in which a single state possesses a dominant share of overall power.",
  wrongExplanations: {
    "Two equal powers":
      "That describes bipolarity.",
    "Many equal powers":
      "That is closer to multipolarity.",
    "No states":
      "That would not describe the current state system."
  },
  hint: "Uni = one."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Unity of command means that an employee should normally receive orders from:",
  options: [
    "One superior",
    "Many unrelated superiors",
    "No superior",
    "Only external agencies"
  ],
  answer: "One superior",
  explanation:
    "Unity of command seeks to avoid confusion by ensuring that a subordinate is responsible to one immediate superior.",
  wrongExplanations: {
    "Many unrelated superiors":
      "Multiple command sources can create conflict.",
    "No superior":
      "That would remove the command structure.",
    "Only external agencies":
      "External agencies are not the normal line of command."
  },
  hint: "One boss."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Harappan civilisation is especially noted for:",
  options: [
    "Planned urban settlements",
    "Feudal castles",
    "Mughal gardens",
    "Colonial railways"
  ],
  answer: "Planned urban settlements",
  explanation:
    "Harappan cities displayed advanced town planning, drainage and standardised construction.",
  wrongExplanations: {
    "Feudal castles":
      "These belong to later historical contexts.",
    "Mughal gardens":
      "Mughal gardens appeared much later.",
    "Colonial railways":
      "Railways belong to the modern colonial period."
  },
  hint: "Grid streets and drainage."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Third Buddhist Council is traditionally associated with:",
  options: ["Ashoka", "Kanishka", "Harsha", "Chandragupta II"],
  answer: "Ashoka",
  explanation:
    "The Third Buddhist Council is traditionally linked with Ashoka's reign.",
  wrongExplanations: {
    Kanishka:
      "Kanishka is associated with a later Buddhist council tradition.",
    Harsha:
      "Harsha ruled much later.",
    "Chandragupta II":
      "He was a Gupta ruler."
  },
  hint: "Mauryan emperor."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Vijayanagara capital was located at:",
  options: ["Hampi", "Delhi", "Agra", "Patna"],
  answer: "Hampi",
  explanation:
    "Hampi served as the capital of the Vijayanagara Empire.",
  wrongExplanations: {
    Delhi:
      "Delhi was associated with the Sultanate and later empires.",
    Agra:
      "Agra became an important Mughal centre.",
    Patna:
      "Patna is associated with ancient Pataliputra."
  },
  hint: "Karnataka ruins."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Satyashodhak Samaj was founded by:",
  options: [
    "Jyotirao Phule",
    "Raja Ram Mohan Roy",
    "Swami Vivekananda",
    "Dayanand Saraswati"
  ],
  answer: "Jyotirao Phule",
  explanation:
    "Jyotirao Phule founded the Satyashodhak Samaj to challenge caste inequality and social oppression.",
  wrongExplanations: {
    "Raja Ram Mohan Roy":
      "He founded Brahmo Samaj.",
    "Swami Vivekananda":
      "He founded the Ramakrishna Mission.",
    "Dayanand Saraswati":
      "He founded Arya Samaj."
  },
  hint: "Anti-caste reformer."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Ilbert Bill controversy took place during the viceroyalty of:",
  options: [
    "Lord Ripon",
    "Lord Curzon",
    "Lord Dalhousie",
    "Lord Wellesley"
  ],
  answer: "Lord Ripon",
  explanation:
    "The Ilbert Bill controversy occurred during Lord Ripon's tenure in the 1880s.",
  wrongExplanations: {
    "Lord Curzon":
      "Curzon is associated with the Partition of Bengal.",
    "Lord Dalhousie":
      "Dalhousie is associated with the Doctrine of Lapse.",
    "Lord Wellesley":
      "Wellesley is associated with the Subsidiary Alliance."
  },
  hint: "Liberal viceroy."
},

{
  subject: "History",
  category: "World History",
  question: "The policy of containment during the Cold War was mainly directed against the spread of:",
  options: [
    "Communism",
    "Colonialism only",
    "Capitalism",
    "Democracy"
  ],
  answer: "Communism",
  explanation:
    "Containment was a major United States strategy aimed at limiting the expansion of Soviet influence and communism.",
  wrongExplanations: {
    "Colonialism only":
      "Containment was not mainly an anti-colonial doctrine.",
    Capitalism:
      "The United States supported capitalist systems.",
    Democracy:
      "Containment was not aimed at stopping democracy."
  },
  hint: "Cold War US strategy."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The crust is thickest beneath:",
  options: [
    "Major mountain ranges",
    "Deep ocean trenches only",
    "The open ocean",
    "The atmosphere"
  ],
  answer: "Major mountain ranges",
  explanation:
    "Continental crust is especially thick beneath major mountain belts.",
  wrongExplanations: {
    "Deep ocean trenches only":
      "Oceanic crust is generally thinner than continental crust.",
    "The open ocean":
      "Oceanic crust is relatively thin.",
    "The atmosphere":
      "The atmosphere is not part of the crust."
  },
  hint: "Continental roots."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A watershed is:",
  options: [
    "A divide separating drainage basins",
    "A type of ocean current",
    "A volcanic vent",
    "A desert dune"
  ],
  answer: "A divide separating drainage basins",
  explanation:
    "A watershed or drainage divide separates neighbouring river basins.",
  wrongExplanations: {
    "A type of ocean current":
      "Ocean currents are marine circulation systems.",
    "A volcanic vent":
      "Volcanic vents release magma and gases.",
    "A desert dune":
      "Dunes are depositional landforms."
  },
  hint: "Separates river basins."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Groundwater is stored mainly in permeable rock layers called:",
  options: ["Aquifers", "Isobars", "Deltas", "Faults"],
  answer: "Aquifers",
  explanation:
    "Aquifers are permeable geological formations capable of storing and transmitting groundwater.",
  wrongExplanations: {
    Isobars:
      "Isobars are lines of equal atmospheric pressure.",
    Deltas:
      "Deltas are depositional river landforms.",
    Faults:
      "Faults are fractures in Earth's crust."
  },
  hint: "Underground water storage."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Life expectancy refers to:",
  options: [
    "Average number of years a person is expected to live",
    "Maximum legal age",
    "Only retirement age",
    "Average marriage age"
  ],
  answer: "Average number of years a person is expected to live",
  explanation:
    "Life expectancy estimates the average years a newborn is expected to live under prevailing mortality conditions.",
  wrongExplanations: {
    "Maximum legal age":
      "There is no such demographic measure.",
    "Only retirement age":
      "Retirement age is a policy decision.",
    "Average marriage age":
      "That is a separate demographic indicator."
  },
  hint: "Health and mortality indicator."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "The term 'population distribution' refers to:",
  options: [
    "How people are spread across space",
    "Only total population size",
    "Only birth rate",
    "Only death rate"
  ],
  answer: "How people are spread across space",
  explanation:
    "Population distribution describes the spatial pattern of where people live.",
  wrongExplanations: {
    "Only total population size":
      "Size does not show spatial distribution.",
    "Only birth rate":
      "Birth rate is a demographic process.",
    "Only death rate":
      "Death rate is another demographic process."
  },
  hint: "Where people live."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Iron and steel industries are traditionally influenced strongly by access to:",
  options: [
    "Raw materials and transport",
    "Only tourist sites",
    "Only schools",
    "Only rainfall"
  ],
  answer: "Raw materials and transport",
  explanation:
    "Traditional iron and steel production depends heavily on bulky raw materials, energy and transport infrastructure.",
  wrongExplanations: {
    "Only tourist sites":
      "Tourism does not determine heavy industrial location.",
    "Only schools":
      "Education can affect labour quality but is not the main traditional location factor.",
    "Only rainfall":
      "Rainfall alone is insufficient."
  },
  hint: "Coal, iron ore, transport."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Scarcity means:",
  options: [
    "Resources are limited relative to wants",
    "Every resource is unlimited",
    "Every good is free",
    "People have no wants"
  ],
  answer: "Resources are limited relative to wants",
  explanation:
    "Scarcity exists because human wants exceed the limited resources available to satisfy them.",
  wrongExplanations: {
    "Every resource is unlimited":
      "That would eliminate scarcity.",
    "Every good is free":
      "Scarce resources normally involve opportunity costs.",
    "People have no wants":
      "Scarcity arises because wants exist."
  },
  hint: "Limited resources."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "The production possibility curve illustrates:",
  options: [
    "Trade-offs between alternative combinations of output",
    "Only inflation",
    "Only unemployment",
    "Only taxation"
  ],
  answer: "Trade-offs between alternative combinations of output",
  explanation:
    "A production possibility curve shows combinations of goods that can be produced with available resources and technology.",
  wrongExplanations: {
    "Only inflation":
      "Inflation is a macroeconomic price issue.",
    "Only unemployment":
      "Unemployment can affect production but does not define the curve.",
    "Only taxation":
      "Taxation is a fiscal issue."
  },
  hint: "Choice and opportunity cost."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Nominal GDP differs from real GDP because nominal GDP:",
  options: [
    "Uses current prices",
    "Always removes inflation",
    "Measures only exports",
    "Measures only agriculture"
  ],
  answer: "Uses current prices",
  explanation:
    "Nominal GDP values output using current prices, while real GDP adjusts for price changes.",
  wrongExplanations: {
    "Always removes inflation":
      "Real GDP adjusts for inflation.",
    "Measures only exports":
      "GDP includes all domestic final production.",
    "Measures only agriculture":
      "GDP includes all major sectors."
  },
  hint: "Current prices."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Economic stabilisation policies are mainly used to reduce:",
  options: [
    "Large fluctuations in output, employment and prices",
    "All economic activity",
    "Population automatically",
    "Only rainfall variation"
  ],
  answer: "Large fluctuations in output, employment and prices",
  explanation:
    "Fiscal and monetary policies are often used to stabilise growth, employment and inflation.",
  wrongExplanations: {
    "All economic activity":
      "Stabilisation aims to support stable activity.",
    "Population automatically":
      "Population policy is different.",
    "Only rainfall variation":
      "Rainfall is climatic."
  },
  hint: "Smooth the business cycle."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "Revenue expenditure generally includes:",
  options: [
    "Salaries, subsidies and routine expenses",
    "Only construction of new highways",
    "Only purchase of major capital equipment",
    "Only acquisition of land"
  ],
  answer: "Salaries, subsidies and routine expenses",
  explanation:
    "Revenue expenditure covers routine government spending that generally does not directly create major assets.",
  wrongExplanations: {
    "Only construction of new highways":
      "Major infrastructure is generally capital expenditure.",
    "Only purchase of major capital equipment":
      "That is typically capital expenditure.",
    "Only acquisition of land":
      "Land acquisition is generally capital expenditure."
  },
  hint: "Routine government spending."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Economic development is broader than economic growth because it also includes:",
  options: [
    "Changes in living standards and human wellbeing",
    "Only increase in output",
    "Only increase in exports",
    "Only increase in taxes"
  ],
  answer: "Changes in living standards and human wellbeing",
  explanation:
    "Development includes structural change, health, education, poverty reduction and broader improvements in wellbeing.",
  wrongExplanations: {
    "Only increase in output":
      "That describes growth more narrowly.",
    "Only increase in exports":
      "Exports are only one economic variable.",
    "Only increase in taxes":
      "Tax revenue is not development itself."
  },
  hint: "Growth plus quality of life."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Who is associated with the concept of the 'iron cage' of rationality?",
  options: ["Max Weber", "Karl Marx", "Durkheim", "Comte"],
  answer: "Max Weber",
  explanation:
    "Weber used the image of an iron cage to describe the constraining effects of modern rationalisation and bureaucracy.",
  wrongExplanations: {
    "Karl Marx":
      "Marx focused on capitalism, exploitation and class.",
    Durkheim:
      "Durkheim focused on solidarity and social facts.",
    Comte:
      "Comte developed positivism."
  },
  hint: "Rationalisation and bureaucracy."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of false consciousness is associated with:",
  options: [
    "Marxist theory",
    "Functionalism only",
    "Symbolic interactionism only",
    "Positivism only"
  ],
  answer: "Marxist theory",
  explanation:
    "False consciousness refers to distorted understanding of class interests within Marxist analysis.",
  wrongExplanations: {
    "Functionalism only":
      "Functionalism focuses on social order and functions.",
    "Symbolic interactionism only":
      "Interactionism focuses on meaning in interaction.",
    "Positivism only":
      "Positivism concerns scientific approaches to social study."
  },
  hint: "Class awareness."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Values are:",
  options: [
    "General ideas about what is desirable or important",
    "Only criminal laws",
    "Only economic prices",
    "Only physical objects"
  ],
  answer: "General ideas about what is desirable or important",
  explanation:
    "Values are broad cultural standards about what a society or group considers good, desirable or important.",
  wrongExplanations: {
    "Only criminal laws":
      "Laws may reflect values but are not identical to them.",
    "Only economic prices":
      "Prices are market measures.",
    "Only physical objects":
      "Values are symbolic and cultural."
  },
  hint: "What society considers important."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "The legal system contributes to social order mainly by:",
  options: [
    "Establishing and enforcing formal rules",
    "Removing all norms",
    "Ending all institutions",
    "Preventing every disagreement"
  ],
  answer: "Establishing and enforcing formal rules",
  explanation:
    "Legal institutions regulate behaviour through formal laws, procedures and sanctions.",
  wrongExplanations: {
    "Removing all norms":
      "Law is itself a form of formal norm.",
    "Ending all institutions":
      "Law helps organise institutions.",
    "Preventing every disagreement":
      "Legal systems manage conflicts but cannot eliminate all disagreement."
  },
  hint: "Formal social control."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Intergenerational mobility compares:",
  options: [
    "The social position of children with that of their parents",
    "One person's status at two points in the same day",
    "Only migration between cities",
    "Only changes in age"
  ],
  answer: "The social position of children with that of their parents",
  explanation:
    "Intergenerational mobility examines changes in social position across generations.",
  wrongExplanations: {
    "One person's status at two points in the same day":
      "That is not intergenerational comparison.",
    "Only migration between cities":
      "Geographical movement is different.",
    "Only changes in age":
      "Ageing is not social mobility."
  },
  hint: "Parents versus children."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "A focus group usually involves:",
  options: [
    "A guided discussion among a small group of participants",
    "Only one respondent answering alone",
    "Only statistical tables",
    "No interaction"
  ],
  answer: "A guided discussion among a small group of participants",
  explanation:
    "Focus groups collect qualitative data through moderated discussion among several participants.",
  wrongExplanations: {
    "Only one respondent answering alone":
      "That describes an individual interview.",
    "Only statistical tables":
      "Focus groups primarily produce qualitative discussion data.",
    "No interaction":
      "Interaction among participants is central."
  },
  hint: "Small-group discussion."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Retention in learning means:",
  options: [
    "Keeping learned information over time",
    "Forgetting immediately",
    "Only attending class",
    "Only taking notes"
  ],
  answer: "Keeping learned information over time",
  explanation:
    "Retention refers to the ability to preserve learned material in memory for later use.",
  wrongExplanations: {
    "Forgetting immediately":
      "That is the opposite of retention.",
    "Only attending class":
      "Attendance does not guarantee retention.",
    "Only taking notes":
      "Note-taking may support retention but is not the definition."
  },
  hint: "Remember later."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Positive transfer occurs when previous learning:",
  options: [
    "Helps new learning",
    "Makes new learning more difficult",
    "Has no effect",
    "Causes forgetting only"
  ],
  answer: "Helps new learning",
  explanation:
    "Positive transfer occurs when previously learned knowledge or skills make a new task easier.",
  wrongExplanations: {
    "Makes new learning more difficult":
      "That describes negative transfer.",
    "Has no effect":
      "That would mean zero transfer.",
    "Causes forgetting only":
      "Transfer concerns influence on new learning."
  },
  hint: "Old learning helps new learning."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Role-play is especially useful for:",
  options: [
    "Practising social situations and perspectives",
    "Only memorising dates",
    "Preventing student participation",
    "Only silent reading"
  ],
  answer: "Practising social situations and perspectives",
  explanation:
    "Role-play allows students to explore situations, viewpoints and communication through simulated roles.",
  wrongExplanations: {
    "Only memorising dates":
      "Role-play is experiential rather than memory-only.",
    "Preventing student participation":
      "Participation is central.",
    "Only silent reading":
      "Role-play requires active performance."
  },
  hint: "Act out a situation."
},

{
  subject: "Education",
  category: "Assessment",
  question: "A diagnostic test is best administered when a teacher wants to:",
  options: [
    "Identify specific learning problems",
    "Give a final degree",
    "Rank every student nationally",
    "Replace classroom teaching"
  ],
  answer: "Identify specific learning problems",
  explanation:
    "Diagnostic testing helps locate particular areas of difficulty so appropriate support can be planned.",
  wrongExplanations: {
    "Give a final degree":
      "Certification is not diagnostic assessment.",
    "Rank every student nationally":
      "That is not its main purpose.",
    "Replace classroom teaching":
      "Diagnostic assessment informs teaching."
  },
  hint: "Find the weakness."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Reasonable accommodation aims to:",
  options: [
    "Reduce unnecessary barriers faced by learners",
    "Create new barriers",
    "Exclude learners",
    "Guarantee identical performance"
  ],
  answer: "Reduce unnecessary barriers faced by learners",
  explanation:
    "Reasonable accommodation provides adjustments that help learners participate without imposing unnecessary barriers.",
  wrongExplanations: {
    "Create new barriers":
      "Accommodation aims to remove barriers.",
    "Exclude learners":
      "The purpose is inclusion.",
    "Guarantee identical performance":
      "Accommodation improves access, not guaranteed outcomes."
  },
  hint: "Remove barriers."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Education promotes national integration by encouraging:",
  options: [
    "Understanding and respect across diverse groups",
    "Hostility between communities",
    "Complete isolation",
    "Rejection of citizenship"
  ],
  answer: "Understanding and respect across diverse groups",
  explanation:
    "Education can contribute to national integration through shared civic values, mutual understanding and respect for diversity.",
  wrongExplanations: {
    "Hostility between communities":
      "That weakens integration.",
    "Complete isolation":
      "Integration requires interaction.",
    "Rejection of citizenship":
      "Citizenship can strengthen national participation."
  },
  hint: "Unity with diversity."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'I look forward to ___ from you.'",
  options: ["hearing", "hear", "heard", "have heard"],
  answer: "hearing",
  explanation:
    "In the expression 'look forward to', the word 'to' is a preposition and is followed by a gerund.",
  wrongExplanations: {
    hear:
      "The base verb does not follow the preposition here.",
    heard:
      "The simple past is incorrect.",
    "have heard":
      "This does not fit the structure."
  },
  hint: "Look forward to + ing."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct sentence:",
  options: [
    "He has been working here for five years.",
    "He is working here since five years.",
    "He has working here for five years.",
    "He been works here five years."
  ],
  answer: "He has been working here for five years.",
  explanation:
    "The present perfect continuous correctly describes an activity that began in the past and continues to the present.",
  wrongExplanations: {
    "He is working here since five years.":
      "'For' is used with a duration, and the tense is unsuitable.",
    "He has working here for five years.":
      "'Been' is required.",
    "He been works here five years.":
      "The verb structure is incorrect."
  },
  hint: "Has been + ing."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'relevant'.",
  options: ["Related", "Unrelated", "Useless", "Separate"],
  answer: "Related",
  explanation:
    "Relevant means closely connected to the matter being considered.",
  wrongExplanations: {
    Unrelated:
      "Unrelated is the opposite.",
    Useless:
      "Something can be useful but irrelevant, so this is not a synonym.",
    Separate:
      "Separate suggests lack of connection."
  },
  hint: "Connected to the topic."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'superior'.",
  options: ["Inferior", "Better", "Higher", "Excellent"],
  answer: "Inferior",
  explanation:
    "Inferior means lower in quality or rank and is the opposite of superior.",
  wrongExplanations: {
    Better:
      "Better is similar to superior.",
    Higher:
      "Higher is also related to superior.",
    Excellent:
      "Excellent is positive rather than opposite."
  },
  hint: "Lower in rank or quality."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "A biased passage is one that:",
  options: [
    "Shows a strong preference or prejudice",
    "Contains no viewpoint",
    "Always presents every side equally",
    "Only gives dictionary definitions"
  ],
  answer: "Shows a strong preference or prejudice",
  explanation:
    "Bias occurs when language or selection of information strongly favours one side or perspective.",
  wrongExplanations: {
    "Contains no viewpoint":
      "Bias involves a viewpoint.",
    "Always presents every side equally":
      "Balanced treatment reduces bias.",
    "Only gives dictionary definitions":
      "Definitions are not necessarily biased."
  },
  hint: "One-sided treatment."
},

{
  subject: "English",
  category: "Writing",
  question: "Proofreading mainly involves:",
  options: [
    "Checking writing for errors before final submission",
    "Creating the first idea only",
    "Removing all paragraphs",
    "Changing the topic completely"
  ],
  answer: "Checking writing for errors before final submission",
  explanation:
    "Proofreading focuses on correcting spelling, grammar, punctuation and formatting errors.",
  wrongExplanations: {
    "Creating the first idea only":
      "Idea generation belongs to planning.",
    "Removing all paragraphs":
      "Paragraphs support organisation.",
    "Changing the topic completely":
      "Proofreading preserves the content while correcting errors."
  },
  hint: "Final error check."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 1, 8, 27, 64, ?",
  options: ["81", "100", "125", "216"],
  answer: "125",
  explanation:
    "The sequence contains cubes: 1³, 2³, 3³, 4³, 5³.",
  wrongExplanations: {
    "81":
      "81 is 3 to the fourth power, not the next cube.",
    "100":
      "100 is not a perfect cube.",
    "216":
      "216 is 6³ and comes after 125."
  },
  hint: "Perfect cubes."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Puppy is to Dog as Kitten is to:",
  options: ["Cat", "Cow", "Horse", "Goat"],
  answer: "Cat",
  explanation:
    "A puppy is a young dog and a kitten is a young cat.",
  wrongExplanations: {
    Cow:
      "A young cow is a calf.",
    Horse:
      "A young horse is a foal.",
    Goat:
      "A young goat is a kid."
  },
  hint: "Young animal and adult."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 15% of 400?",
  options: ["40", "50", "60", "80"],
  answer: "60",
  explanation:
    "15% of 400 = 0.15 × 400 = 60.",
  wrongExplanations: {
    "40":
      "This is 10% of 400.",
    "50":
      "This is 12.5% of 400.",
    "80":
      "This is 20% of 400."
  },
  hint: "10% is 40 and 5% is 20."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A person saves ₹2,000 from a monthly income of ₹10,000. What percentage of income is saved?",
  options: ["10%", "20%", "25%", "30%"],
  answer: "20%",
  explanation:
    "Savings percentage = 2000/10000 × 100 = 20%.",
  wrongExplanations: {
    "10%":
      "10% would be ₹1,000.",
    "25%":
      "25% would be ₹2,500.",
    "30%":
      "30% would be ₹3,000."
  },
  hint: "Savings divided by income."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "A search engine is used mainly to:",
  options: [
    "Find information on the web",
    "Edit photographs only",
    "Replace an operating system",
    "Store electricity"
  ],
  answer: "Find information on the web",
  explanation:
    "Search engines index online content and help users locate relevant webpages and information.",
  wrongExplanations: {
    "Edit photographs only":
      "Photo editors perform that function.",
    "Replace an operating system":
      "A search engine does not manage hardware or software.",
    "Store electricity":
      "This is unrelated."
  },
  hint: "Google-style service."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of the Organisation of Islamic Cooperation is in:",
  options: ["Jeddah", "Geneva", "Paris", "New York"],
  answer: "Jeddah",
  explanation:
    "The Organisation of Islamic Cooperation has its General Secretariat in Jeddah, Saudi Arabia.",
  wrongExplanations: {
    Geneva:
      "Geneva hosts many international organisations.",
    Paris:
      "UNESCO is headquartered in Paris.",
    "New York":
      "The United Nations headquarters is in New York."
  },
  hint: "Saudi Arabia."
},
{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Convenience sampling selects respondents mainly because they are:",
  options: [
    "Easy to access",
    "Selected completely at random",
    "Chosen only by law",
    "Always experts"
  ],
  answer: "Easy to access",
  explanation:
    "Convenience sampling selects participants who are readily available or easy for the researcher to reach.",
  wrongExplanations: {
    "Selected completely at random":
      "That describes probability sampling.",
    "Chosen only by law":
      "Legal selection is not the basis of convenience sampling.",
    "Always experts":
      "Expert selection is closer to purposive sampling."
  },
  hint: "Easy to reach."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "An open-ended question allows respondents to:",
  options: [
    "Answer in their own words",
    "Choose only yes or no",
    "Select only one number",
    "Avoid answering completely"
  ],
  answer: "Answer in their own words",
  explanation:
    "Open-ended questions allow respondents to express their views freely rather than choosing from fixed response options.",
  wrongExplanations: {
    "Choose only yes or no":
      "That is a closed-ended format.",
    "Select only one number":
      "That is a fixed-response format.",
    "Avoid answering completely":
      "That is not the purpose of open-ended questions."
  },
  hint: "Free response."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Authority differs from mere power because authority is generally:",
  options: [
    "Regarded as legitimate",
    "Always based only on force",
    "Completely illegal",
    "Unrelated to obedience"
  ],
  answer: "Regarded as legitimate",
  explanation:
    "Authority is power that is accepted as rightful or legitimate by those subject to it.",
  wrongExplanations: {
    "Always based only on force":
      "Force can produce control without creating legitimate authority.",
    "Completely illegal":
      "Authority is normally linked with recognised legitimacy.",
    "Unrelated to obedience":
      "Authority involves an expectation of obedience."
  },
  hint: "Legitimate power."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "A financial emergency in India may be proclaimed under:",
  options: ["Article 360", "Article 352", "Article 356", "Article 324"],
  answer: "Article 360",
  explanation:
    "Article 360 provides for proclamation of a financial emergency.",
  wrongExplanations: {
    "Article 352":
      "Article 352 concerns national emergency.",
    "Article 356":
      "Article 356 concerns failure of constitutional machinery in a state.",
    "Article 324":
      "Article 324 deals with the Election Commission."
  },
  hint: "Financial emergency."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Multipolarity refers to an international system with:",
  options: [
    "Several major centres of power",
    "Only one dominant power",
    "Only two dominant powers",
    "No states"
  ],
  answer: "Several major centres of power",
  explanation:
    "Multipolarity describes an international system in which power is distributed among several major states or centres.",
  wrongExplanations: {
    "Only one dominant power":
      "That is unipolarity.",
    "Only two dominant powers":
      "That is bipolarity.",
    "No states":
      "That would not describe a state-based international system."
  },
  hint: "Multi = many."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Line agencies in administration are mainly responsible for:",
  options: [
    "Carrying out the primary objectives of an organisation",
    "Only giving advice",
    "Only auditing accounts",
    "Only ceremonial functions"
  ],
  answer: "Carrying out the primary objectives of an organisation",
  explanation:
    "Line agencies directly perform the core functions for which an organisation exists.",
  wrongExplanations: {
    "Only giving advice":
      "Advisory roles are more commonly associated with staff agencies.",
    "Only auditing accounts":
      "Audit is a specialised control function.",
    "Only ceremonial functions":
      "Line agencies perform substantive operational work."
  },
  hint: "Direct execution."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Harappan site of Lothal is especially famous for its:",
  options: ["Dockyard", "Rock-cut caves", "Iron pillar", "Ashokan stupa"],
  answer: "Dockyard",
  explanation:
    "Lothal is especially known for a large brick structure interpreted as a dockyard linked with maritime trade.",
  wrongExplanations: {
    "Rock-cut caves":
      "Rock-cut caves are associated with later periods.",
    "Iron pillar":
      "The famous Iron Pillar is associated with Mehrauli.",
    "Ashokan stupa":
      "Ashokan monuments belong to the Mauryan period."
  },
  hint: "Maritime trade."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The term 'Mahajanapadas' refers to:",
  options: [
    "Large states of early historic India",
    "Mughal provinces",
    "British presidencies",
    "Modern Indian states"
  ],
  answer: "Large states of early historic India",
  explanation:
    "The Mahajanapadas were major territorial states that emerged in northern India around the sixth century BCE.",
  wrongExplanations: {
    "Mughal provinces":
      "Mughal provinces were called subahs.",
    "British presidencies":
      "Presidencies belonged to colonial administration.",
    "Modern Indian states":
      "Mahajanapadas belong to ancient history."
  },
  hint: "Sixth century BCE."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who introduced the Din-i Ilahi?",
  options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
  answer: "Akbar",
  explanation:
    "Akbar introduced Din-i Ilahi as an ethical fellowship influenced by different religious traditions.",
  wrongExplanations: {
    Jahangir:
      "Jahangir succeeded Akbar.",
    "Shah Jahan":
      "Shah Jahan is associated strongly with Mughal architecture.",
    Aurangzeb:
      "Aurangzeb followed a different religious policy."
  },
  hint: "Religious experimentation."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Ramakrishna Mission was founded by:",
  options: [
    "Swami Vivekananda",
    "Raja Ram Mohan Roy",
    "Dayanand Saraswati",
    "Jyotirao Phule"
  ],
  answer: "Swami Vivekananda",
  explanation:
    "Swami Vivekananda founded the Ramakrishna Mission in 1897.",
  wrongExplanations: {
    "Raja Ram Mohan Roy":
      "He founded Brahmo Samaj.",
    "Dayanand Saraswati":
      "He founded Arya Samaj.",
    "Jyotirao Phule":
      "He founded the Satyashodhak Samaj."
  },
  hint: "Disciple of Ramakrishna."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Champaran Satyagraha took place in:",
  options: ["1917", "1919", "1920", "1930"],
  answer: "1917",
  explanation:
    "Gandhi led the Champaran Satyagraha in 1917 in support of indigo cultivators.",
  wrongExplanations: {
    "1919":
      "1919 is associated with the Rowlatt Act and Jallianwala Bagh.",
    "1920":
      "1920 marks the Non-Cooperation Movement.",
    "1930":
      "1930 marks the Salt March and Civil Disobedience Movement."
  },
  hint: "Indigo farmers."
},

{
  subject: "History",
  category: "World History",
  question: "The policy of perestroika is associated with:",
  options: [
    "Mikhail Gorbachev",
    "Joseph Stalin",
    "Vladimir Lenin",
    "Nikita Khrushchev"
  ],
  answer: "Mikhail Gorbachev",
  explanation:
    "Perestroika referred to economic and political restructuring introduced under Mikhail Gorbachev.",
  wrongExplanations: {
    "Joseph Stalin":
      "Stalin led the Soviet Union much earlier.",
    "Vladimir Lenin":
      "Lenin led the Bolshevik Revolution and early Soviet state.",
    "Nikita Khrushchev":
      "Khrushchev led the Soviet Union before Gorbachev."
  },
  hint: "Late Soviet reform."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The process by which water enters the soil is called:",
  options: ["Infiltration", "Evaporation", "Condensation", "Precipitation"],
  answer: "Infiltration",
  explanation:
    "Infiltration is the movement of water from the ground surface into the soil.",
  wrongExplanations: {
    Evaporation:
      "Evaporation changes liquid water into vapour.",
    Condensation:
      "Condensation changes vapour into liquid.",
    Precipitation:
      "Precipitation is water falling from the atmosphere."
  },
  hint: "Water moves into soil."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A meander is:",
  options: [
    "A bend in a river channel",
    "A mountain peak",
    "A desert dune",
    "A coastal cliff"
  ],
  answer: "A bend in a river channel",
  explanation:
    "A meander is a looping or winding bend that develops in a river channel.",
  wrongExplanations: {
    "A mountain peak":
      "Mountain peaks are relief features.",
    "A desert dune":
      "Dunes are formed by wind deposition.",
    "A coastal cliff":
      "Coastal cliffs form through marine erosion."
  },
  hint: "Winding river."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The monsoon is primarily a seasonal reversal of:",
  options: ["Winds", "Ocean depth", "Latitude", "Earth's rotation"],
  answer: "Winds",
  explanation:
    "A monsoon is characterised by a seasonal reversal of prevailing wind direction, often associated with major rainfall changes.",
  wrongExplanations: {
    "Ocean depth":
      "Ocean depth does not reverse seasonally.",
    Latitude:
      "Latitude is fixed for a location.",
    "Earth's rotation":
      "Earth's rotation does not seasonally reverse."
  },
  hint: "Seasonal wind system."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A population with a very narrow base in its age pyramid usually indicates:",
  options: [
    "Low birth rates",
    "Very high birth rates",
    "No older people",
    "Extremely high infant population"
  ],
  answer: "Low birth rates",
  explanation:
    "A narrow base indicates relatively fewer children and therefore generally lower recent birth rates.",
  wrongExplanations: {
    "Very high birth rates":
      "High birth rates usually create a broad base.",
    "No older people":
      "A narrow base says little by itself about the absence of older people.",
    "Extremely high infant population":
      "That would broaden the base."
  },
  hint: "Few young children."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "The crude death rate is usually expressed as deaths per:",
  options: ["1000 population", "100 population", "10 population", "1 million only"],
  answer: "1000 population",
  explanation:
    "The crude death rate is generally calculated as annual deaths per 1000 population.",
  wrongExplanations: {
    "100 population":
      "The standard demographic denominator is 1000.",
    "10 population":
      "This is too small for the standard rate.",
    "1 million only":
      "That is not the usual crude death rate measure."
  },
  hint: "Per thousand."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "The location of information technology industries is strongly influenced by:",
  options: [
    "Skilled labour and communication infrastructure",
    "Only coal deposits",
    "Only fertile soil",
    "Only rainfall"
  ],
  answer: "Skilled labour and communication infrastructure",
  explanation:
    "Knowledge-intensive industries depend heavily on skilled workers, digital connectivity and supporting urban infrastructure.",
  wrongExplanations: {
    "Only coal deposits":
      "Coal is more relevant to traditional heavy industries.",
    "Only fertile soil":
      "Soil fertility mainly affects agriculture.",
    "Only rainfall":
      "Rainfall is not the main determinant."
  },
  hint: "Knowledge economy."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "The equilibrium price in a market occurs where:",
  options: [
    "Quantity demanded equals quantity supplied",
    "Demand is always zero",
    "Supply is always zero",
    "Government fixes every price"
  ],
  answer: "Quantity demanded equals quantity supplied",
  explanation:
    "Market equilibrium occurs at the price where buyers wish to purchase exactly the amount sellers wish to supply.",
  wrongExplanations: {
    "Demand is always zero":
      "That would not create a normal market equilibrium.",
    "Supply is always zero":
      "No market exchange could occur.",
    "Government fixes every price":
      "Market equilibrium can exist without price controls."
  },
  hint: "Demand = supply."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "An increase in demand, with supply unchanged, generally causes equilibrium price to:",
  options: ["Rise", "Fall", "Remain zero", "Disappear"],
  answer: "Rise",
  explanation:
    "When demand rises while supply remains unchanged, greater competition among buyers tends to increase equilibrium price.",
  wrongExplanations: {
    Fall:
      "A fall would be more likely if demand decreased.",
    "Remain zero":
      "There is no reason for price to become zero.",
    Disappear:
      "A new equilibrium generally forms."
  },
  hint: "More buyers, same supply."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "The business cycle refers to:",
  options: [
    "Fluctuations in economic activity over time",
    "Only changes in population",
    "Only changes in rainfall",
    "Only changes in tax rates"
  ],
  answer: "Fluctuations in economic activity over time",
  explanation:
    "The business cycle includes periods of expansion, slowdown, recession and recovery.",
  wrongExplanations: {
    "Only changes in population":
      "Population change is demographic.",
    "Only changes in rainfall":
      "Rainfall is climatic.",
    "Only changes in tax rates":
      "Tax rates can influence the cycle but do not define it."
  },
  hint: "Boom and recession."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "A central bank may lower interest rates mainly to:",
  options: [
    "Encourage borrowing and spending",
    "Make borrowing more expensive",
    "Stop all investment",
    "Reduce every salary"
  ],
  answer: "Encourage borrowing and spending",
  explanation:
    "Lower interest rates can reduce borrowing costs and encourage consumption and investment.",
  wrongExplanations: {
    "Make borrowing more expensive":
      "Lower rates generally make borrowing cheaper.",
    "Stop all investment":
      "Lower rates usually seek to encourage investment.",
    "Reduce every salary":
      "Salary levels are not directly set through the policy rate."
  },
  hint: "Cheaper credit."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "Tax revenue is an important source of:",
  options: [
    "Government income",
    "Only private profit",
    "Only household savings",
    "Only foreign aid"
  ],
  answer: "Government income",
  explanation:
    "Taxes provide governments with revenue to finance public expenditure and services.",
  wrongExplanations: {
    "Only private profit":
      "Tax payments reduce private disposable resources rather than create private profit.",
    "Only household savings":
      "Taxes and household savings are different concepts.",
    "Only foreign aid":
      "Tax revenue is domestically collected government income."
  },
  hint: "Funds public spending."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Infrastructure contributes to development by:",
  options: [
    "Supporting production, connectivity and public services",
    "Preventing all trade",
    "Reducing every investment",
    "Eliminating education"
  ],
  answer: "Supporting production, connectivity and public services",
  explanation:
    "Roads, electricity, communication, water and other infrastructure can improve productivity and access to services.",
  wrongExplanations: {
    "Preventing all trade":
      "Infrastructure usually facilitates trade.",
    "Reducing every investment":
      "Good infrastructure can attract investment.",
    "Eliminating education":
      "Infrastructure can improve access to education."
  },
  hint: "Roads, power and connectivity."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Who developed the idea of the 'sociological imagination'?",
  options: [
    "C. Wright Mills",
    "Talcott Parsons",
    "Auguste Comte",
    "Herbert Spencer"
  ],
  answer: "C. Wright Mills",
  explanation:
    "C. Wright Mills used the term sociological imagination to connect personal experiences with wider social structures and historical forces.",
  wrongExplanations: {
    "Talcott Parsons":
      "Parsons is associated with structural functionalism.",
    "Auguste Comte":
      "Comte is associated with positivism.",
    "Herbert Spencer":
      "Spencer is associated with evolutionary sociology."
  },
  hint: "Personal troubles and public issues."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The concept of hegemony is strongly associated with:",
  options: [
    "Antonio Gramsci",
    "Max Weber",
    "Durkheim",
    "Comte"
  ],
  answer: "Antonio Gramsci",
  explanation:
    "Gramsci used the concept of hegemony to explain how dominant groups maintain power partly through cultural and ideological consent.",
  wrongExplanations: {
    "Max Weber":
      "Weber focused on authority, social action and rationalisation.",
    Durkheim:
      "Durkheim focused on social facts and solidarity.",
    Comte:
      "Comte developed positivism."
  },
  hint: "Consent and cultural domination."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Social identity refers to:",
  options: [
    "A person's sense of belonging to social groups",
    "Only physical appearance",
    "Only income",
    "Only age"
  ],
  answer: "A person's sense of belonging to social groups",
  explanation:
    "Social identity develops partly through membership in groups such as communities, occupations or other social categories.",
  wrongExplanations: {
    "Only physical appearance":
      "Appearance may influence identity but does not define social identity.",
    "Only income":
      "Income is only one social characteristic.",
    "Only age":
      "Age is one category but social identity is broader."
  },
  hint: "Who am I in relation to groups?"
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Economic institutions regulate:",
  options: [
    "Production, exchange and distribution",
    "Only religious rituals",
    "Only family relationships",
    "Only voting"
  ],
  answer: "Production, exchange and distribution",
  explanation:
    "Economic institutions organise how goods, services and resources are produced, exchanged and distributed.",
  wrongExplanations: {
    "Only religious rituals":
      "These belong mainly to religious institutions.",
    "Only family relationships":
      "These belong mainly to kinship institutions.",
    "Only voting":
      "Voting belongs to political institutions."
  },
  hint: "Economic activity."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Intragenerational mobility refers to:",
  options: [
    "Change in a person's social position during their lifetime",
    "Comparison only between parents and children",
    "Only migration between countries",
    "Only changes in age"
  ],
  answer: "Change in a person's social position during their lifetime",
  explanation:
    "Intragenerational mobility examines movement within the social hierarchy during one person's lifetime.",
  wrongExplanations: {
    "Comparison only between parents and children":
      "That is intergenerational mobility.",
    "Only migration between countries":
      "Migration is geographical rather than necessarily social mobility.",
    "Only changes in age":
      "Ageing does not define mobility."
  },
  hint: "Within one generation."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "A longitudinal study collects data:",
  options: [
    "Across an extended period of time",
    "At only one moment",
    "Without any participants",
    "Only from books"
  ],
  answer: "Across an extended period of time",
  explanation:
    "Longitudinal research follows individuals, groups or trends across multiple points in time.",
  wrongExplanations: {
    "At only one moment":
      "That describes a cross-sectional study more closely.",
    "Without any participants":
      "Longitudinal research can involve repeated participant data.",
    "Only from books":
      "Many types of data can be used."
  },
  hint: "Study over time."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Negative transfer occurs when previous learning:",
  options: [
    "Interferes with new learning",
    "Helps new learning",
    "Has no effect at all",
    "Guarantees success"
  ],
  answer: "Interferes with new learning",
  explanation:
    "Negative transfer occurs when previously learned habits or knowledge make a new task more difficult.",
  wrongExplanations: {
    "Helps new learning":
      "That is positive transfer.",
    "Has no effect at all":
      "That would be zero transfer.",
    "Guarantees success":
      "Negative transfer makes learning harder."
  },
  hint: "Old habit causes difficulty."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Forgetting may occur because of:",
  options: [
    "Interference or weak retention",
    "Perfect memory",
    "Unlimited attention",
    "Complete understanding in every case"
  ],
  answer: "Interference or weak retention",
  explanation:
    "Forgetting can result from factors such as interference, weak encoding, decay or retrieval failure.",
  wrongExplanations: {
    "Perfect memory":
      "Perfect memory would reduce forgetting.",
    "Unlimited attention":
      "Strong attention generally supports memory.",
    "Complete understanding in every case":
      "Understanding usually improves retention."
  },
  hint: "Memory failure."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "A seminar method usually involves:",
  options: [
    "Presentation and discussion of a topic",
    "Only silent copying",
    "No communication",
    "Only physical exercise"
  ],
  answer: "Presentation and discussion of a topic",
  explanation:
    "Seminars commonly involve a prepared presentation followed by discussion, questions and exchange of ideas.",
  wrongExplanations: {
    "Only silent copying":
      "Seminars require active intellectual engagement.",
    "No communication":
      "Communication is central.",
    "Only physical exercise":
      "Seminars are academic activities."
  },
  hint: "Present and discuss."
},

{
  subject: "Education",
  category: "Assessment",
  question: "A multiple-choice item normally contains:",
  options: [
    "A stem and several alternatives",
    "Only an essay",
    "Only a drawing",
    "No question"
  ],
  answer: "A stem and several alternatives",
  explanation:
    "A standard multiple-choice item has a stem presenting the question or problem and a set of response alternatives.",
  wrongExplanations: {
    "Only an essay":
      "An essay requires an extended written response.",
    "Only a drawing":
      "A drawing may appear in some tests but does not define an MCQ.",
    "No question":
      "The item must present a problem or prompt."
  },
  hint: "Question + options."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Accessibility in education means:",
  options: [
    "Learning opportunities can be reached and used by diverse learners",
    "Only top-performing students can participate",
    "All barriers are deliberately increased",
    "Every learner must use exactly the same method"
  ],
  answer: "Learning opportunities can be reached and used by diverse learners",
  explanation:
    "Accessibility aims to reduce physical, communication, technological and instructional barriers.",
  wrongExplanations: {
    "Only top-performing students can participate":
      "Accessibility aims at wider participation.",
    "All barriers are deliberately increased":
      "Accessibility seeks to remove barriers.",
    "Every learner must use exactly the same method":
      "Flexible access may be necessary."
  },
  hint: "Can everyone access learning?"
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Vocational education mainly aims to develop:",
  options: [
    "Practical occupational skills",
    "Only abstract philosophy",
    "Only examination memory",
    "Only political participation"
  ],
  answer: "Practical occupational skills",
  explanation:
    "Vocational education prepares learners with practical knowledge and skills linked to occupations and employment.",
  wrongExplanations: {
    "Only abstract philosophy":
      "Vocational education is strongly practice-oriented.",
    "Only examination memory":
      "Skill development is more central.",
    "Only political participation":
      "That belongs more to citizenship education."
  },
  hint: "Skills for work."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'Neither the teacher nor the students ___ ready.'",
  options: ["are", "is", "was only", "be"],
  answer: "are",
  explanation:
    "With 'neither...nor', the verb commonly agrees with the subject nearest to it. Here, 'students' is plural.",
  wrongExplanations: {
    is:
      "The nearest subject is plural.",
    "was only":
      "The sentence requires present tense.",
    be:
      "A finite verb is required."
  },
  hint: "Verb agrees with the nearest subject."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct sentence:",
  options: [
    "She is one of the best students in the class.",
    "She is one of the best student in the class.",
    "She are one of best students in class.",
    "She is one of better student."
  ],
  answer: "She is one of the best students in the class.",
  explanation:
    "The expression 'one of the' is followed by a plural noun, and 'best' correctly forms the superlative.",
  wrongExplanations: {
    "She is one of the best student in the class.":
      "'Student' should be plural after 'one of the'.",
    "She are one of best students in class.":
      "The verb and article usage are incorrect.",
    "She is one of better student.":
      "The superlative 'best' and plural noun are required."
  },
  hint: "One of the + plural noun."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'substantial'.",
  options: ["Considerable", "Tiny", "Insignificant", "Empty"],
  answer: "Considerable",
  explanation:
    "Substantial means large, important or considerable in amount or degree.",
  wrongExplanations: {
    Tiny:
      "Tiny is nearly the opposite.",
    Insignificant:
      "Insignificant is also opposite in meaning.",
    Empty:
      "Empty refers to containing nothing."
  },
  hint: "Large or important."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'permit'.",
  options: ["Forbid", "Allow", "Accept", "Approve"],
  answer: "Forbid",
  explanation:
    "Permit means allow, while forbid means prohibit.",
  wrongExplanations: {
    Allow:
      "Allow is a synonym of permit.",
    Accept:
      "Accept is not the opposite.",
    Approve:
      "Approve is similar in meaning."
  },
  hint: "Prohibit."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "A cause-and-effect relationship in a passage explains:",
  options: [
    "Why something happened and what resulted",
    "Only the author's name",
    "Only spelling rules",
    "Only paragraph length"
  ],
  answer: "Why something happened and what resulted",
  explanation:
    "Cause-and-effect writing connects an event or condition with the consequences that follow from it.",
  wrongExplanations: {
    "Only the author's name":
      "Authorship is unrelated.",
    "Only spelling rules":
      "Spelling does not define causal relationships.",
    "Only paragraph length":
      "Length does not determine cause and effect."
  },
  hint: "Cause → result."
},

{
  subject: "English",
  category: "Writing",
  question: "Editing differs from proofreading because editing often focuses more on:",
  options: [
    "Clarity, organisation and content",
    "Only spelling mistakes",
    "Only page numbers",
    "Only the title"
  ],
  answer: "Clarity, organisation and content",
  explanation:
    "Editing may involve revising ideas, structure and clarity, while proofreading focuses more narrowly on surface errors.",
  wrongExplanations: {
    "Only spelling mistakes":
      "That is more typical of proofreading.",
    "Only page numbers":
      "Page numbers are only a formatting detail.",
    "Only the title":
      "Editing applies to the whole text."
  },
  hint: "Improve the writing, not just errors."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 5, 15, 45, 135, ?",
  options: ["270", "405", "540", "675"],
  answer: "405",
  explanation:
    "Each term is multiplied by 3, so 135 × 3 = 405.",
  wrongExplanations: {
    "270":
      "This multiplies by 2.",
    "540":
      "This multiplies by 4.",
    "675":
      "This multiplies by 5."
  },
  hint: "Multiply by 3."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Clock is to Time as Thermometer is to:",
  options: ["Temperature", "Distance", "Weight", "Speed"],
  answer: "Temperature",
  explanation:
    "A clock measures time, while a thermometer measures temperature.",
  wrongExplanations: {
    Distance:
      "Distance is measured using devices such as rulers or odometers.",
    Weight:
      "Weight is measured using scales.",
    Speed:
      "Speed is measured using instruments such as speedometers."
  },
  hint: "Instrument and measurement."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 25% of 360?",
  options: ["80", "90", "100", "120"],
  answer: "90",
  explanation:
    "25% is one-fourth, and 360 ÷ 4 = 90.",
  wrongExplanations: {
    "80":
      "This is less than one-fourth.",
    "100":
      "This is not exactly 25%.",
    "120":
      "This is one-third of 360."
  },
  hint: "One-fourth."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "If the ratio of two numbers is 3:5 and the smaller number is 24, what is the larger number?",
  options: ["32", "36", "40", "48"],
  answer: "40",
  explanation:
    "If 3 parts equal 24, one part equals 8. Therefore, 5 parts equal 40.",
  wrongExplanations: {
    "32":
      "That equals 4 parts.",
    "36":
      "That equals 4.5 parts.",
    "48":
      "That equals 6 parts."
  },
  hint: "3 parts = 24."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Ransomware is malware that typically:",
  options: [
    "Locks or encrypts data and demands payment",
    "Improves computer performance",
    "Creates strong passwords",
    "Repairs damaged hardware"
  ],
  answer: "Locks or encrypts data and demands payment",
  explanation:
    "Ransomware restricts access to data or systems and commonly demands payment for restoration.",
  wrongExplanations: {
    "Improves computer performance":
      "Ransomware is malicious.",
    "Creates strong passwords":
      "Password managers perform that kind of function.",
    "Repairs damaged hardware":
      "Hardware repair is unrelated."
  },
  hint: "Files held for ransom."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of the United Nations Environment Programme is in:",
  options: ["Nairobi", "Geneva", "Paris", "New York"],
  answer: "Nairobi",
  explanation:
    "The United Nations Environment Programme is headquartered in Nairobi, Kenya.",
  wrongExplanations: {
    Geneva:
      "Geneva hosts many UN agencies, but UNEP headquarters is elsewhere.",
    Paris:
      "UNESCO is headquartered in Paris.",
    "New York":
      "The principal UN headquarters is in New York."
  },
  hint: "Kenya."
},
// =========================
// POLITICAL SCIENCE - 20
// =========================

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Who described the state as a necessary evil?",
  options: ["Thomas Paine", "Hegel", "Plato", "Aristotle"],
  answer: "Thomas Paine",
  explanation: "Thomas Paine viewed government as necessary but potentially restrictive of individual liberty.",
  hint: "Think classical liberal suspicion of government."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "The concept of positive freedom is strongly associated with:",
  options: ["T.H. Green", "Thomas Hobbes", "Jeremy Bentham", "Machiavelli"],
  answer: "T.H. Green",
  explanation: "T.H. Green understood freedom as the capacity to realise one's potential.",
  hint: "Freedom to develop oneself."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Who wrote The Concept of the Political?",
  options: ["Carl Schmitt", "John Rawls", "Robert Dahl", "Isaiah Berlin"],
  answer: "Carl Schmitt",
  explanation: "Carl Schmitt wrote The Concept of the Political and emphasised the friend-enemy distinction.",
  hint: "Friend versus enemy."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "The idea of distributive justice is mainly concerned with:",
  options: [
    "Distribution of benefits and burdens",
    "Only criminal punishment",
    "Only election procedures",
    "Only military authority"
  ],
  answer: "Distribution of benefits and burdens",
  explanation: "Distributive justice concerns how resources, opportunities, benefits and burdens should be shared.",
  hint: "Who gets what?"
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Who distinguished between power and authority through legitimate domination?",
  options: ["Max Weber", "Karl Marx", "John Locke", "Rousseau"],
  answer: "Max Weber",
  explanation: "Max Weber analysed traditional, charismatic and rational-legal forms of legitimate authority.",
  hint: "Three types of authority."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Which Schedule of the Constitution contains the anti-defection provisions?",
  options: ["Tenth Schedule", "Ninth Schedule", "Seventh Schedule", "Eleventh Schedule"],
  answer: "Tenth Schedule",
  explanation: "The Tenth Schedule contains provisions dealing with disqualification on grounds of defection.",
  hint: "Added by the 52nd Amendment."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Seventh Schedule divides powers through:",
  options: [
    "Union, State and Concurrent Lists",
    "Fundamental Rights",
    "Fundamental Duties",
    "Emergency provisions"
  ],
  answer: "Union, State and Concurrent Lists",
  explanation: "The Seventh Schedule distributes legislative subjects between the Union and states.",
  hint: "Three legislative lists."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Eleventh Schedule relates to:",
  options: ["Panchayats", "Municipalities", "Parliament", "Judiciary"],
  answer: "Panchayats",
  explanation: "The Eleventh Schedule lists subjects that may be entrusted to Panchayats.",
  hint: "73rd Amendment."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Twelfth Schedule relates to:",
  options: ["Municipalities", "Panchayats", "Fundamental Rights", "Languages"],
  answer: "Municipalities",
  explanation: "The Twelfth Schedule lists functions associated with urban local government.",
  hint: "74th Amendment."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Residuary legislative powers in India belong primarily to:",
  options: ["Parliament", "State Legislatures", "Supreme Court", "Governors"],
  answer: "Parliament",
  explanation: "The Constitution gives residuary legislative powers primarily to Parliament.",
  hint: "India has a strong-centre federation."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Offensive realism is strongly associated with:",
  options: ["John Mearsheimer", "Alexander Wendt", "Robert Keohane", "Joseph Nye"],
  answer: "John Mearsheimer",
  explanation: "John Mearsheimer developed a major offensive realist theory of international politics.",
  hint: "Great powers seek maximum power."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Democratic peace theory argues that:",
  options: [
    "Democracies rarely fight one another",
    "Democracies never fight any wars",
    "Authoritarian states never fight",
    "All democracies form one state"
  ],
  answer: "Democracies rarely fight one another",
  explanation: "Democratic peace theory argues that established democracies are unusually unlikely to wage war against each other.",
  hint: "Democracy-to-democracy relations."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "The Bretton Woods institutions include:",
  options: [
    "IMF and World Bank",
    "UNESCO and WHO",
    "NATO and WTO",
    "ASEAN and SAARC"
  ],
  answer: "IMF and World Bank",
  explanation: "The Bretton Woods system created the IMF and what became the World Bank system.",
  hint: "International finance."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "The principle of non-intervention means:",
  options: [
    "States should generally avoid interfering in the domestic affairs of other states",
    "States must never communicate",
    "International law should disappear",
    "Every state must join a military alliance"
  ],
  answer: "States should generally avoid interfering in the domestic affairs of other states",
  explanation: "Non-intervention protects sovereign control over domestic affairs.",
  hint: "Sovereignty."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "The scalar principle refers to:",
  options: [
    "A clear chain of authority",
    "Equal pay only",
    "Public participation only",
    "Financial auditing"
  ],
  answer: "A clear chain of authority",
  explanation: "The scalar principle refers to an unbroken hierarchy from the highest to the lowest level.",
  hint: "Chain of command."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Staff agencies mainly provide:",
  options: ["Advice and support", "Direct frontline execution only", "Judicial review", "Election management"],
  answer: "Advice and support",
  explanation: "Staff agencies support line agencies through advice, planning and specialised assistance.",
  hint: "Support rather than direct execution."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A Likert scale is commonly used to measure:",
  options: ["Attitudes", "Physical height", "Population density", "Rainfall"],
  answer: "Attitudes",
  explanation: "Likert scales commonly measure levels of agreement or disagreement with statements.",
  hint: "Strongly agree to strongly disagree."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A pilot study is conducted mainly to:",
  options: [
    "Test the research design before the main study",
    "Publish the final findings",
    "Replace the full research project",
    "Eliminate respondents"
  ],
  answer: "Test the research design before the main study",
  explanation: "A pilot study helps identify problems in questions, procedures or instruments before full data collection.",
  hint: "Small test before the real study."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Triangulation in research means:",
  options: [
    "Using multiple methods or sources to examine a problem",
    "Using exactly three respondents",
    "Drawing geographical triangles",
    "Avoiding comparison"
  ],
  answer: "Using multiple methods or sources to examine a problem",
  explanation: "Triangulation strengthens research by comparing evidence from different methods, sources or perspectives.",
  hint: "Cross-check evidence."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "Research ethics requires informed consent mainly so that participants:",
  options: [
    "Understand the study and voluntarily agree",
    "Are forced to participate",
    "Cannot leave the study",
    "Must reveal every personal detail"
  ],
  answer: "Understand the study and voluntarily agree",
  explanation: "Informed consent protects participant autonomy by ensuring voluntary and informed participation.",
  hint: "Know and agree."
},

// =========================
// HISTORY - 20
// =========================

{
  subject: "History",
  category: "Ancient India",
  question: "Which Harappan site is famous for evidence of a ploughed field?",
  options: ["Kalibangan", "Lothal", "Dholavira", "Mohenjo-daro"],
  answer: "Kalibangan",
  explanation: "Kalibangan is well known for archaeological evidence interpreted as a ploughed field.",
  hint: "Rajasthan Harappan site."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Dholavira is located in present-day:",
  options: ["Gujarat", "Punjab", "Bihar", "Odisha"],
  answer: "Gujarat",
  explanation: "Dholavira is a major Harappan site in the Kutch region of Gujarat.",
  hint: "Rann of Kutch."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Gayatri Mantra occurs in the:",
  options: ["Rig Veda", "Arthashastra", "Ramayana", "Manusmriti"],
  answer: "Rig Veda",
  explanation: "The Gayatri Mantra appears in the Rig Veda.",
  hint: "Oldest Veda."
},

{
  subject: "History",
  category: "Ancient India",
  question: "Bimbisara was a ruler of:",
  options: ["Magadha", "Kosala", "Avanti", "Gandhara"],
  answer: "Magadha",
  explanation: "Bimbisara was an important ruler of Magadha before the Mauryan period.",
  hint: "Early rise of Magadha."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The capital of Kanishka is traditionally associated with:",
  options: ["Purushapura", "Pataliputra", "Madurai", "Kannauj"],
  answer: "Purushapura",
  explanation: "Purushapura, present-day Peshawar, was an important Kushan capital under Kanishka.",
  hint: "Present-day Peshawar."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Qutub Minar was begun by:",
  options: ["Qutb-ud-din Aibak", "Iltutmish", "Balban", "Alauddin Khalji"],
  answer: "Qutb-ud-din Aibak",
  explanation: "Qutb-ud-din Aibak began construction of the Qutub Minar.",
  hint: "Founder of the Mamluk dynasty."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who shifted the capital from Delhi to Daulatabad?",
  options: ["Muhammad bin Tughlaq", "Firoz Shah Tughlaq", "Balban", "Sikandar Lodi"],
  answer: "Muhammad bin Tughlaq",
  explanation: "Muhammad bin Tughlaq famously attempted to shift the capital from Delhi to Daulatabad.",
  hint: "Ambitious Tughlaq experiment."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Battle of Talikota in 1565 weakened the:",
  options: ["Vijayanagara Empire", "Mughal Empire", "Maratha Empire", "Gupta Empire"],
  answer: "Vijayanagara Empire",
  explanation: "The Battle of Talikota severely weakened Vijayanagara power.",
  hint: "Deccan sultanates versus Vijayanagara."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Mughal emperor who built the Red Fort in Delhi was:",
  options: ["Shah Jahan", "Akbar", "Jahangir", "Babur"],
  answer: "Shah Jahan",
  explanation: "Shah Jahan built the Red Fort as part of his new capital Shahjahanabad.",
  hint: "Shahjahanabad."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Shivaji was formally crowned at:",
  options: ["Raigad", "Pune", "Satara", "Agra"],
  answer: "Raigad",
  explanation: "Shivaji's coronation took place at Raigad in 1674.",
  hint: "Maratha capital fort."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Subsidiary Alliance is strongly associated with:",
  options: ["Lord Wellesley", "Lord Cornwallis", "Lord Ripon", "Lord Canning"],
  answer: "Lord Wellesley",
  explanation: "Lord Wellesley expanded British influence through the Subsidiary Alliance system.",
  hint: "British indirect control."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Vernacular Press Act was passed during the rule of:",
  options: ["Lord Lytton", "Lord Ripon", "Lord Curzon", "Lord Canning"],
  answer: "Lord Lytton",
  explanation: "The Vernacular Press Act of 1878 was enacted during Lord Lytton's viceroyalty.",
  hint: "1878."
},

{
  subject: "History",
  category: "Modern India",
  question: "The All India Muslim League was founded in:",
  options: ["1906", "1885", "1916", "1920"],
  answer: "1906",
  explanation: "The Muslim League was founded at Dhaka in 1906.",
  hint: "One year after Bengal partition."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Surat Split of the Indian National Congress occurred in:",
  options: ["1907", "1905", "1911", "1919"],
  answer: "1907",
  explanation: "The Congress split between moderates and extremists at Surat in 1907.",
  hint: "Moderates versus extremists."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Kakori incident took place in:",
  options: ["1925", "1919", "1930", "1942"],
  answer: "1925",
  explanation: "The Kakori train action was carried out by revolutionaries in 1925.",
  hint: "Hindustan Republican Association."
},

{
  subject: "History",
  category: "World History",
  question: "The American Declaration of Independence was adopted in:",
  options: ["1776", "1789", "1815", "1861"],
  answer: "1776",
  explanation: "The thirteen American colonies declared independence in 1776.",
  hint: "Fourth of July."
},

{
  subject: "History",
  category: "World History",
  question: "Napoleon was finally defeated at:",
  options: ["Waterloo", "Leipzig only", "Versailles", "Vienna"],
  answer: "Waterloo",
  explanation: "Napoleon's final military defeat came at Waterloo in 1815.",
  hint: "1815."
},

{
  subject: "History",
  category: "World History",
  question: "The unification of Germany is most closely associated with:",
  options: ["Otto von Bismarck", "Garibaldi", "Metternich", "Napoleon III"],
  answer: "Otto von Bismarck",
  explanation: "Bismarck led Prussia through wars and diplomacy toward German unification.",
  hint: "Blood and iron."
},

{
  subject: "History",
  category: "World History",
  question: "The Bolsheviks renamed themselves as the:",
  options: ["Communist Party", "Liberal Party", "Labour Party", "Social Democratic Party of Germany"],
  answer: "Communist Party",
  explanation: "After the revolution, the Bolshevik organisation developed into the Communist Party.",
  hint: "Lenin's party."
},

{
  subject: "History",
  category: "World History",
  question: "The Soviet Union formally dissolved in:",
  options: ["1991", "1989", "1985", "1995"],
  answer: "1991",
  explanation: "The Soviet Union formally ceased to exist in December 1991.",
  hint: "End of Cold War era."
},

// =========================
// GEOGRAPHY - 20
// =========================

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The deepest layer of Earth is the:",
  options: ["Inner core", "Mantle", "Crust", "Lithosphere"],
  answer: "Inner core",
  explanation: "The inner core forms Earth's deepest major internal layer.",
  hint: "Centre of Earth."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The theory of continental drift is associated with:",
  options: ["Alfred Wegener", "Charles Darwin", "Newton", "Humboldt"],
  answer: "Alfred Wegener",
  explanation: "Alfred Wegener proposed that continents had once been joined and later drifted apart.",
  hint: "Pangaea."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Pangaea was:",
  options: ["A supercontinent", "An ancient ocean", "A volcano", "A glacier"],
  answer: "A supercontinent",
  explanation: "Pangaea refers to the ancient supercontinent that later broke apart.",
  hint: "All continents joined."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The Pacific Ring of Fire is known for frequent:",
  options: ["Earthquakes and volcanoes", "Sandstorms", "Blizzards only", "River floods only"],
  answer: "Earthquakes and volcanoes",
  explanation: "The Pacific margins contain many active plate boundaries, volcanoes and earthquake zones.",
  hint: "Plate boundaries around the Pacific."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Magma that reaches Earth's surface is called:",
  options: ["Lava", "Sediment", "Loess", "Humus"],
  answer: "Lava",
  explanation: "Molten rock beneath the surface is magma; once it reaches the surface it is called lava.",
  hint: "Magma outside Earth."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The troposphere contains most of Earth's:",
  options: ["Weather", "Ozone layer", "Satellites", "Outer-space radiation"],
  answer: "Weather",
  explanation: "Most clouds, rainfall and weather processes occur in the troposphere.",
  hint: "Lowest atmospheric layer."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The instrument used to measure humidity is:",
  options: ["Hygrometer", "Barometer", "Anemometer", "Seismograph"],
  answer: "Hygrometer",
  explanation: "A hygrometer measures atmospheric humidity.",
  hint: "Hydro relates to moisture."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "Lines joining places of equal rainfall are:",
  options: ["Isohyets", "Isobars", "Isotherms", "Contours"],
  answer: "Isohyets",
  explanation: "Isohyets connect locations receiving equal amounts of rainfall.",
  hint: "Rainfall line."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A floodplain is formed mainly by:",
  options: ["River deposition", "Volcanic eruption", "Glacial erosion", "Wind erosion"],
  answer: "River deposition",
  explanation: "Floodplains develop through repeated flooding and deposition of river sediments.",
  hint: "Flat land beside rivers."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A stalactite grows from the:",
  options: ["Roof of a cave", "Floor of a cave", "River mouth", "Mountain summit"],
  answer: "Roof of a cave",
  explanation: "Stalactites hang downward from cave ceilings.",
  hint: "Stalactites hold tight to the ceiling."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Infant mortality rate measures deaths of children below:",
  options: ["One year of age", "Five years", "Ten years", "Fifteen years"],
  answer: "One year of age",
  explanation: "Infant mortality refers to deaths before the first birthday, usually per 1000 live births.",
  hint: "Infant = first year."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Natural increase of population equals:",
  options: ["Birth rate minus death rate", "Immigration minus emigration", "Exports minus imports", "Urban minus rural population"],
  answer: "Birth rate minus death rate",
  explanation: "Natural increase measures population growth from births and deaths without migration.",
  hint: "No migration."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Brain drain refers to:",
  options: [
    "Migration of highly skilled people",
    "Population ageing",
    "Declining rainfall",
    "Loss of farmland"
  ],
  answer: "Migration of highly skilled people",
  explanation: "Brain drain describes the departure of educated or highly skilled workers from a region or country.",
  hint: "Skilled migration."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A conurbation is created when:",
  options: [
    "Neighbouring urban areas grow and merge",
    "A village becomes empty",
    "A river changes course",
    "A mountain collapses"
  ],
  answer: "Neighbouring urban areas grow and merge",
  explanation: "A conurbation forms when expanding towns or cities physically join into a larger continuous urban area.",
  hint: "Cities merge."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "The study of settlements is commonly called:",
  options: ["Settlement geography", "Geomorphology", "Oceanography", "Climatology"],
  answer: "Settlement geography",
  explanation: "Settlement geography examines the location, form and development of human settlements.",
  hint: "Villages, towns and cities."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Fishing belongs to the:",
  options: ["Primary sector", "Secondary sector", "Tertiary sector", "Quaternary sector"],
  answer: "Primary sector",
  explanation: "Fishing directly extracts biological resources from nature.",
  hint: "Directly from nature."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Construction belongs mainly to the:",
  options: ["Secondary sector", "Primary sector", "Tertiary sector", "Quinary sector only"],
  answer: "Secondary sector",
  explanation: "Construction transforms materials into buildings and infrastructure.",
  hint: "Produces physical structures."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Retail trade belongs mainly to the:",
  options: ["Tertiary sector", "Primary sector", "Secondary sector", "Extractive sector"],
  answer: "Tertiary sector",
  explanation: "Retailing provides distribution and sales services.",
  hint: "Service activity."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Wind power is considered:",
  options: ["Renewable", "Non-renewable", "A fossil fuel", "A mineral"],
  answer: "Renewable",
  explanation: "Wind is naturally replenished and can be used repeatedly to generate electricity.",
  hint: "Naturally replenished."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Petroleum is classified as:",
  options: ["A fossil fuel", "A renewable resource", "A human resource", "A service"],
  answer: "A fossil fuel",
  explanation: "Petroleum formed from ancient organic material over geological time and is non-renewable.",
  hint: "Oil."
},

// =========================
// ECONOMICS - 20
// =========================

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Economics is fundamentally concerned with:",
  options: ["Scarcity and choice", "Only money", "Only taxation", "Only trade"],
  answer: "Scarcity and choice",
  explanation: "Economics studies how scarce resources are allocated among competing wants.",
  hint: "Limited resources."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "The demand curve normally slopes:",
  options: ["Downward", "Upward", "Vertically always", "Horizontally always"],
  answer: "Downward",
  explanation: "Under normal conditions, higher prices are associated with lower quantity demanded.",
  hint: "Inverse price-demand relationship."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "The supply curve normally slopes:",
  options: ["Upward", "Downward", "Vertically always", "Never changes"],
  answer: "Upward",
  explanation: "Higher prices generally encourage producers to supply greater quantities.",
  hint: "Price up, supply up."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "If demand exceeds supply at the current price, the market faces a:",
  options: ["Shortage", "Surplus", "Equilibrium", "Subsidy"],
  answer: "Shortage",
  explanation: "A shortage occurs when quantity demanded is greater than quantity supplied.",
  hint: "Too many buyers, too few goods."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "If supply exceeds demand at the current price, the market faces a:",
  options: ["Surplus", "Shortage", "Monopoly", "Externality"],
  answer: "Surplus",
  explanation: "A surplus occurs when quantity supplied exceeds quantity demanded.",
  hint: "Too many goods."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A perfectly inelastic demand curve is:",
  options: ["Vertical", "Horizontal", "Downward sloping at 45 degrees", "Upward sloping"],
  answer: "Vertical",
  explanation: "With perfectly inelastic demand, quantity demanded does not respond to price changes.",
  hint: "Quantity never changes."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Perfectly elastic demand is represented by a:",
  options: ["Horizontal line", "Vertical line", "Circular curve", "Upward line"],
  answer: "Horizontal line",
  explanation: "Perfectly elastic demand means even a tiny price increase reduces demand to zero.",
  hint: "One market price."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "An oligopoly contains:",
  options: ["A few dominant sellers", "One seller", "Many tiny sellers only", "One buyer"],
  answer: "A few dominant sellers",
  explanation: "Oligopoly describes a market dominated by a small number of major firms.",
  hint: "Few sellers."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "GDP stands for:",
  options: ["Gross Domestic Product", "General Development Price", "Gross Demand Programme", "Government Domestic Plan"],
  answer: "Gross Domestic Product",
  explanation: "GDP measures final production within a country's borders.",
  hint: "Domestic output."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "GNP differs from GDP mainly because GNP considers:",
  options: [
    "Income connected with residents or nationals",
    "Only agricultural output",
    "Only government expenditure",
    "Only imports"
  ],
  answer: "Income connected with residents or nationals",
  explanation: "GNP adjusts domestic production for relevant income flows between residents and the rest of the world.",
  hint: "National versus domestic."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Hyperinflation refers to:",
  options: ["Extremely rapid inflation", "Mild inflation", "Falling prices", "Stable prices"],
  answer: "Extremely rapid inflation",
  explanation: "Hyperinflation is an exceptionally high and accelerating increase in prices.",
  hint: "Extreme inflation."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Disinflation means:",
  options: [
    "Inflation continues but at a slower rate",
    "Prices fall continuously",
    "Inflation becomes infinite",
    "GDP becomes zero"
  ],
  answer: "Inflation continues but at a slower rate",
  explanation: "Disinflation is a reduction in the rate of inflation, not necessarily a fall in the price level.",
  hint: "Slower inflation."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "The RBI is India's:",
  options: ["Central bank", "Largest commercial bank", "Stock exchange", "Finance ministry"],
  answer: "Central bank",
  explanation: "The Reserve Bank of India is India's central monetary authority.",
  hint: "Monetary policy."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "CRR stands for:",
  options: ["Cash Reserve Ratio", "Credit Revenue Rate", "Capital Recovery Ratio", "Current Reserve Return"],
  answer: "Cash Reserve Ratio",
  explanation: "CRR is the share of deposits banks must maintain as cash reserves with the RBI under applicable rules.",
  hint: "Bank reserves."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "A balanced budget occurs when:",
  options: [
    "Government revenue equals expenditure",
    "Expenditure exceeds revenue",
    "Revenue exceeds expenditure",
    "Taxes become zero"
  ],
  answer: "Government revenue equals expenditure",
  explanation: "A balanced budget has equal government receipts and expenditure under the relevant accounting definition.",
  hint: "Revenue = spending."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "A budget surplus occurs when:",
  options: [
    "Government revenue exceeds expenditure",
    "Expenditure exceeds revenue",
    "Imports exceed exports",
    "Inflation rises"
  ],
  answer: "Government revenue exceeds expenditure",
  explanation: "A budget surplus exists when public revenue is greater than expenditure.",
  hint: "Government receives more than it spends."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "HDI is published by:",
  options: ["UNDP", "WTO", "IMF", "WHO"],
  answer: "UNDP",
  explanation: "The United Nations Development Programme publishes the Human Development Report containing HDI measures.",
  hint: "United Nations development agency."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Absolute poverty refers to:",
  options: [
    "Inability to meet basic minimum needs",
    "Having less income than the richest person",
    "Any income inequality",
    "Only unemployment"
  ],
  answer: "Inability to meet basic minimum needs",
  explanation: "Absolute poverty concerns inability to secure minimum basic necessities.",
  hint: "Basic survival needs."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Relative poverty compares a person's income or living standard with:",
  options: [
    "Others in the same society",
    "Only historical kings",
    "Only foreign exchange rates",
    "Only government expenditure"
  ],
  answer: "Others in the same society",
  explanation: "Relative poverty evaluates deprivation compared with prevailing living standards.",
  hint: "Poor compared with others."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "The informal sector generally includes activities that are:",
  options: [
    "Less formally regulated and protected",
    "Always government-owned",
    "Always illegal",
    "Only agricultural"
  ],
  answer: "Less formally regulated and protected",
  explanation: "Informal employment often lacks full registration, legal protection or social-security coverage.",
  hint: "Outside much formal regulation."
},

// =========================
// SOCIOLOGY - 20
// =========================

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Auguste Comte divided sociology into:",
  options: ["Social statics and social dynamics", "Class and status", "Gemeinschaft and Gesellschaft", "Base and superstructure"],
  answer: "Social statics and social dynamics",
  explanation: "Comte distinguished social order from processes of social change.",
  hint: "Order and progress."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Durkheim's concept of collective conscience refers to:",
  options: [
    "Shared beliefs and moral attitudes",
    "Individual income",
    "Only political ideology",
    "Personal memory"
  ],
  answer: "Shared beliefs and moral attitudes",
  explanation: "Collective conscience refers to common beliefs and sentiments binding members of society.",
  hint: "Shared social morality."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Weber's rational-legal authority is based mainly on:",
  options: ["Formal rules and offices", "Family tradition", "Personal charisma only", "Military force only"],
  answer: "Formal rules and offices",
  explanation: "Rational-legal authority rests on impersonal rules and legally defined offices.",
  hint: "Modern bureaucracy."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Marx described the owners of the means of production as the:",
  options: ["Bourgeoisie", "Proletariat", "Peasantry only", "Clergy"],
  answer: "Bourgeoisie",
  explanation: "In Marxist theory, the bourgeoisie owns and controls the means of production under capitalism.",
  hint: "Capitalist owners."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "The proletariat refers mainly to:",
  options: ["Wage workers", "Capitalist owners", "Feudal kings", "Religious authorities"],
  answer: "Wage workers",
  explanation: "The proletariat sells labour power because it does not own major means of production.",
  hint: "Working class."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Society can be understood as:",
  options: [
    "A network of social relationships",
    "Only a geographical territory",
    "Only government offices",
    "Only economic markets"
  ],
  answer: "A network of social relationships",
  explanation: "Sociology views society as patterned relationships, institutions and interactions among people.",
  hint: "People connected socially."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "A social group requires:",
  options: [
    "Interaction and some shared identity",
    "Only physical closeness",
    "No communication",
    "Exactly two people always"
  ],
  answer: "Interaction and some shared identity",
  explanation: "Social groups involve interaction, shared awareness and some common relationship.",
  hint: "Not just a crowd."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "A secondary group is typically:",
  options: [
    "Formal and goal-oriented",
    "Highly intimate only",
    "Always a family",
    "Based only on kinship"
  ],
  answer: "Formal and goal-oriented",
  explanation: "Secondary groups usually involve more impersonal relationships organised around specific purposes.",
  hint: "Workplace or organisation."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Deviance refers to behaviour that:",
  options: [
    "Violates social norms",
    "Always follows every norm",
    "Occurs only in prisons",
    "Is always criminal"
  ],
  answer: "Violates social norms",
  explanation: "Deviance concerns departures from socially accepted norms and does not always involve crime.",
  hint: "Norm violation."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Resocialisation involves:",
  options: [
    "Learning new norms and roles that replace earlier ones",
    "No learning",
    "Only childhood learning",
    "Only biological growth"
  ],
  answer: "Learning new norms and roles that replace earlier ones",
  explanation: "Resocialisation occurs when people adopt significantly different behaviours and expectations.",
  hint: "Learn a new way of life."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "The institution most directly associated with reproduction and early socialisation is:",
  options: ["Family", "Market", "Court", "Parliament"],
  answer: "Family",
  explanation: "Families commonly organise reproduction, care and early socialisation.",
  hint: "First institution."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Religion commonly involves:",
  options: [
    "Beliefs and practices concerning the sacred",
    "Only economic exchange",
    "Only political voting",
    "Only biological relations"
  ],
  answer: "Beliefs and practices concerning the sacred",
  explanation: "Sociological definitions of religion commonly emphasise sacred beliefs, rituals and communities.",
  hint: "Sacred beliefs."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Social inequality refers to:",
  options: [
    "Unequal access to valued resources and opportunities",
    "Everyone receiving the same resources",
    "Only biological difference",
    "Only geographical distance"
  ],
  answer: "Unequal access to valued resources and opportunities",
  explanation: "Social inequality involves uneven distribution of resources, status, power and opportunities.",
  hint: "Unequal life chances."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "Weber analysed stratification through:",
  options: ["Class, status and party", "Only class", "Only caste", "Only occupation"],
  answer: "Class, status and party",
  explanation: "Weber treated economic class, social status and political party as distinct dimensions of power.",
  hint: "Three dimensions."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Social change refers to:",
  options: [
    "Significant changes in social structure or culture over time",
    "Only changes in weather",
    "Only personal mood",
    "No institutional change"
  ],
  answer: "Significant changes in social structure or culture over time",
  explanation: "Social change involves transformation of institutions, relationships, norms or cultural patterns.",
  hint: "Society changes over time."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Industrial society is characterised strongly by:",
  options: [
    "Machine production and occupational specialisation",
    "Only subsistence farming",
    "No division of labour",
    "No urbanisation"
  ],
  answer: "Machine production and occupational specialisation",
  explanation: "Industrial societies rely heavily on mechanised production and specialised occupations.",
  hint: "Factories and specialised work."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "A cross-sectional study collects data:",
  options: [
    "At one point in time",
    "Across many decades necessarily",
    "Only from children",
    "Only through experiments"
  ],
  answer: "At one point in time",
  explanation: "Cross-sectional research examines a population or phenomenon at a particular time.",
  hint: "Snapshot."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "Ethnography usually involves:",
  options: [
    "Detailed study of a culture or social group",
    "Only mathematical modelling",
    "Only national census data",
    "Only laboratory testing"
  ],
  answer: "Detailed study of a culture or social group",
  explanation: "Ethnography typically involves prolonged observation and interpretation of a group's social life.",
  hint: "Deep field study."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "Qualitative interviews are particularly useful for studying:",
  options: [
    "Experiences and meanings",
    "Only rainfall totals",
    "Only GDP",
    "Only physical measurements"
  ],
  answer: "Experiences and meanings",
  explanation: "Qualitative interviews allow participants to explain perceptions, experiences and interpretations in depth.",
  hint: "Detailed personal responses."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "Sampling error arises because:",
  options: [
    "A sample may differ from the full population",
    "Every census is wrong",
    "Researchers use citations",
    "All respondents lie"
  ],
  answer: "A sample may differ from the full population",
  explanation: "Sampling error reflects differences between sample estimates and the true population value.",
  hint: "Sample is not exactly population."
},

// =========================
// EDUCATION - 20
// =========================

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Thorndike is associated with the:",
  options: ["Law of Effect", "Hierarchy of Needs", "Classical Conditioning", "Insight Theory"],
  answer: "Law of Effect",
  explanation: "Edward Thorndike argued that behaviours followed by satisfying consequences are strengthened.",
  hint: "Connectionism."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "The Law of Exercise is associated with:",
  options: ["Thorndike", "Maslow", "Piaget", "Freud"],
  answer: "Thorndike",
  explanation: "Thorndike's Law of Exercise emphasised strengthening learning through practice.",
  hint: "Practice strengthens connections."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Piaget's sensorimotor stage occurs mainly during:",
  options: ["Infancy", "Adolescence", "Adulthood", "Old age"],
  answer: "Infancy",
  explanation: "The sensorimotor stage is Piaget's first stage and covers roughly birth to two years.",
  hint: "First Piaget stage."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Piaget's formal operational stage is associated with:",
  options: [
    "Abstract reasoning",
    "Only reflex behaviour",
    "No logical thought",
    "Only sensory exploration"
  ],
  answer: "Abstract reasoning",
  explanation: "Formal operational thought allows hypothetical and abstract reasoning.",
  hint: "Adolescent abstract thinking."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Maslow placed which needs at the base of his hierarchy?",
  options: ["Physiological needs", "Self-actualisation", "Esteem needs", "Belonging needs"],
  answer: "Physiological needs",
  explanation: "Basic needs such as food, water and rest form the base of Maslow's hierarchy.",
  hint: "Survival first."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Self-actualisation in Maslow's theory refers to:",
  options: [
    "Realising one's potential",
    "Only earning money",
    "Only physical survival",
    "Avoiding learning"
  ],
  answer: "Realising one's potential",
  explanation: "Self-actualisation refers to fulfilment and development of one's capacities.",
  hint: "Highest-level growth need."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Inductive teaching generally moves from:",
  options: [
    "Specific examples to general principles",
    "General principle to specific examples",
    "Conclusion to no evidence",
    "Theory to theory only"
  ],
  answer: "Specific examples to general principles",
  explanation: "Induction begins with particular observations and develops broader generalisations.",
  hint: "Specific → general."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Deductive teaching generally moves from:",
  options: [
    "General principle to specific application",
    "Specific examples to a general principle",
    "Experience to no conclusion",
    "Observation without theory"
  ],
  answer: "General principle to specific application",
  explanation: "Deduction starts with a general rule and applies it to particular cases.",
  hint: "General → specific."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Discovery learning is strongly associated with:",
  options: ["Jerome Bruner", "Pavlov", "Freud", "Thorndike"],
  answer: "Jerome Bruner",
  explanation: "Jerome Bruner promoted discovery learning in which learners actively construct understanding.",
  hint: "Learners discover principles."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Constructivism views learners as:",
  options: [
    "Active constructors of knowledge",
    "Passive receivers only",
    "Unable to use prior knowledge",
    "Dependent only on punishment"
  ],
  answer: "Active constructors of knowledge",
  explanation: "Constructivism argues that learners actively build understanding using experience and prior knowledge.",
  hint: "Build knowledge."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Essay tests are especially useful for assessing:",
  options: [
    "Ability to organise and express ideas",
    "Only recognition memory",
    "Only attendance",
    "Only motor skills"
  ],
  answer: "Ability to organise and express ideas",
  explanation: "Essay questions can test organisation, explanation, argument and synthesis.",
  hint: "Extended response."
},

{
  subject: "Education",
  category: "Assessment",
  question: "A true-false question is an example of:",
  options: ["Objective assessment", "Essay assessment", "Project assessment", "Portfolio assessment"],
  answer: "Objective assessment",
  explanation: "True-false items have predetermined correct responses.",
  hint: "Fixed answer."
},

{
  subject: "Education",
  category: "Assessment",
  question: "A good test item should avoid:",
  options: ["Unnecessary ambiguity", "Clear wording", "Relevant content", "Appropriate difficulty"],
  answer: "Unnecessary ambiguity",
  explanation: "Ambiguous questions may measure confusion rather than intended learning.",
  hint: "Questions should be clear."
},

{
  subject: "Education",
  category: "Assessment",
  question: "A test blueprint helps ensure:",
  options: [
    "Balanced coverage of content and objectives",
    "Random question selection only",
    "No relation to syllabus",
    "Only difficult questions"
  ],
  answer: "Balanced coverage of content and objectives",
  explanation: "A blueprint maps questions to content areas and learning outcomes.",
  hint: "Plan before making the test."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Mainstreaming generally means:",
  options: [
    "Placing learners with special needs in regular settings when appropriate",
    "Permanent segregation",
    "Removing learners from schooling",
    "Teaching only online"
  ],
  answer: "Placing learners with special needs in regular settings when appropriate",
  explanation: "Mainstreaming increases participation in ordinary classrooms while providing needed support.",
  hint: "Regular classroom participation."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Braille is mainly used by learners with:",
  options: ["Visual impairment", "Hearing impairment", "Speech difficulty only", "Mobility impairment only"],
  answer: "Visual impairment",
  explanation: "Braille is a tactile reading and writing system particularly useful for blind learners.",
  hint: "Raised dots."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Sign language is especially important for many learners with:",
  options: ["Hearing impairment", "Visual impairment", "Only physical disability", "Only dyslexia"],
  answer: "Hearing impairment",
  explanation: "Sign languages provide a visual means of communication used widely within Deaf communities.",
  hint: "Visual language."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "The hidden curriculum refers to:",
  options: [
    "Unintended values and norms learned through schooling",
    "Secret examination questions",
    "Deleted textbook chapters",
    "Only extracurricular activities"
  ],
  answer: "Unintended values and norms learned through schooling",
  explanation: "The hidden curriculum includes informal lessons about discipline, authority, competition and social expectations.",
  hint: "Learning beyond official syllabus."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Curriculum is broader than a syllabus because curriculum includes:",
  options: [
    "Learning experiences, aims and assessment",
    "Only textbook chapters",
    "Only examination dates",
    "Only teacher names"
  ],
  answer: "Learning experiences, aims and assessment",
  explanation: "Curriculum includes educational goals, content, teaching experiences and assessment.",
  hint: "Whole educational plan."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Co-curricular activities help develop:",
  options: [
    "Broader social, creative and personal skills",
    "Only examination marks",
    "Only textbook memory",
    "No educational abilities"
  ],
  answer: "Broader social, creative and personal skills",
  explanation: "Co-curricular activities can support teamwork, leadership, creativity and confidence.",
  hint: "Learning beyond classroom content."
},

// =========================
// ENGLISH - 20
// =========================

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'She ___ to the market yesterday.'",
  options: ["went", "go", "goes", "gone"],
  answer: "went",
  explanation: "The simple past form of go is went.",
  hint: "Yesterday = past."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'They ___ playing football now.'",
  options: ["are", "is", "was", "has"],
  answer: "are",
  explanation: "The present continuous with plural subject 'they' uses 'are playing'.",
  hint: "They + are."
},

{
  subject: "English",
  category: "Grammar",
  question: "Which sentence is correct?",
  options: [
    "He does not like coffee.",
    "He do not likes coffee.",
    "He does not likes coffee.",
    "He not like coffee."
  ],
  answer: "He does not like coffee.",
  explanation: "After 'does not', the main verb remains in its base form.",
  hint: "Does + base verb."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct article: 'She bought ___ umbrella.'",
  options: ["an", "a", "the only", "no article"],
  answer: "an",
  explanation: "Umbrella begins with a vowel sound, so 'an' is used.",
  hint: "Vowel sound."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct preposition: 'The book is ___ the table.'",
  options: ["on", "at", "from", "through"],
  answer: "on",
  explanation: "'On' is used when something rests on a surface.",
  hint: "Surface position."
},

{
  subject: "English",
  category: "Grammar",
  question: "Identify the verb in: 'The students completed the assignment.'",
  options: ["completed", "students", "assignment", "the"],
  answer: "completed",
  explanation: "'Completed' expresses the action performed by the students.",
  hint: "Action word."
},

{
  subject: "English",
  category: "Grammar",
  question: "Identify the adjective in: 'She wore a beautiful dress.'",
  options: ["beautiful", "wore", "dress", "she"],
  answer: "beautiful",
  explanation: "'Beautiful' describes the noun 'dress'.",
  hint: "Describing word."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct plural of 'analysis'.",
  options: ["analyses", "analysises", "analysis", "analysi"],
  answer: "analyses",
  explanation: "The plural of analysis is analyses.",
  hint: "Irregular Greek-origin plural."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'assist'.",
  options: ["Help", "Prevent", "Refuse", "Stop"],
  answer: "Help",
  explanation: "Assist means to help or support.",
  hint: "Give support."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'commence'.",
  options: ["Begin", "End", "Stop", "Delay"],
  answer: "Begin",
  explanation: "Commence means begin or start.",
  hint: "Start."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'frequent'.",
  options: ["Common", "Rare", "Absent", "Impossible"],
  answer: "Common",
  explanation: "Frequent means happening often or commonly.",
  hint: "Happens often."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'major'.",
  options: ["Minor", "Large", "Important", "Main"],
  answer: "Minor",
  explanation: "Minor is the opposite of major.",
  hint: "Smaller importance."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'victory'.",
  options: ["Defeat", "Success", "Achievement", "Triumph"],
  answer: "Defeat",
  explanation: "Defeat is the opposite of victory.",
  hint: "Loss."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'include'.",
  options: ["Exclude", "Contain", "Add", "Accept"],
  answer: "Exclude",
  explanation: "Exclude means leave out and is the opposite of include.",
  hint: "Leave out."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "The central idea of a paragraph is usually supported by:",
  options: ["Supporting details", "Unrelated facts", "Only punctuation", "Only the title"],
  answer: "Supporting details",
  explanation: "Supporting details explain or provide evidence for the paragraph's main idea.",
  hint: "Evidence around the main point."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "A reader should identify the author's tone by examining:",
  options: [
    "Word choice and attitude",
    "Only font size",
    "Only page number",
    "Only paragraph count"
  ],
  answer: "Word choice and attitude",
  explanation: "Tone is communicated largely through vocabulary, emphasis and the writer's attitude.",
  hint: "How does the writer sound?"
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "A persuasive passage mainly attempts to:",
  options: ["Influence the reader", "List random facts", "Avoid all arguments", "Give only dictionary meanings"],
  answer: "Influence the reader",
  explanation: "Persuasive writing aims to convince readers to accept an argument or position.",
  hint: "Convince."
},

{
  subject: "English",
  category: "Writing",
  question: "An introduction should normally:",
  options: [
    "Introduce the topic and direction of the writing",
    "Contain only references",
    "End the argument",
    "Give unrelated examples"
  ],
  answer: "Introduce the topic and direction of the writing",
  explanation: "An introduction establishes the subject and prepares the reader for the main discussion.",
  hint: "Beginning of the argument."
},

{
  subject: "English",
  category: "Writing",
  question: "Plagiarism occurs when someone:",
  options: [
    "Uses another person's work without proper acknowledgement",
    "Cites a source correctly",
    "Paraphrases with citation",
    "Writes an original argument"
  ],
  answer: "Uses another person's work without proper acknowledgement",
  explanation: "Plagiarism involves presenting another person's words or ideas as one's own without proper credit.",
  hint: "Using work without credit."
},

{
  subject: "English",
  category: "Writing",
  question: "A bibliography contains:",
  options: [
    "Information about sources",
    "Only chapter titles",
    "Only examination marks",
    "Only quotations"
  ],
  answer: "Information about sources",
  explanation: "A bibliography lists books, articles and other sources consulted or cited.",
  hint: "Source list."
},

// =========================
// GENERAL APTITUDE - 20
// =========================

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 2, 3, 5, 8, 12, ?",
  options: ["15", "16", "17", "18"],
  answer: "17",
  explanation: "The differences are +1, +2, +3, +4, so the next difference is +5.",
  hint: "Look at increasing differences."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 20, 18, 16, 14, ?",
  options: ["10", "11", "12", "13"],
  answer: "12",
  explanation: "The sequence decreases by 2 each time.",
  hint: "Subtract 2."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next letter: B, D, F, H, ?",
  options: ["I", "J", "K", "L"],
  answer: "J",
  explanation: "The sequence skips one letter each time.",
  hint: "Move forward two letters."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the odd one out: 3, 5, 7, 9, 11",
  options: ["3", "7", "9", "11"],
  answer: "9",
  explanation: "3, 5, 7 and 11 are prime numbers; 9 is not prime.",
  hint: "Prime numbers."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Water is to Thirst as Food is to:",
  options: ["Hunger", "Sleep", "Cold", "Travel"],
  answer: "Hunger",
  explanation: "Water satisfies thirst, while food satisfies hunger.",
  hint: "Need and solution."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 50% of 360?",
  options: ["160", "170", "180", "190"],
  answer: "180",
  explanation: "50% means half, and half of 360 is 180.",
  hint: "Divide by 2."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 10% of 750?",
  options: ["50", "65", "75", "85"],
  answer: "75",
  explanation: "10% of 750 is 75.",
  hint: "Divide by 10."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 5% of 600?",
  options: ["20", "30", "40", "50"],
  answer: "30",
  explanation: "5% of 600 = 30.",
  hint: "Half of 10%."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is the average of 5, 10, 15, 20 and 25?",
  options: ["10", "15", "20", "25"],
  answer: "15",
  explanation: "The total is 75 and 75 ÷ 5 = 15.",
  hint: "Add and divide by five."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "If 8 pens cost ₹160, one pen costs:",
  options: ["₹10", "₹20", "₹25", "₹30"],
  answer: "₹20",
  explanation: "₹160 divided by 8 equals ₹20.",
  hint: "Unit cost."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A ₹1,000 item receives a 10% discount. The sale price is:",
  options: ["₹800", "₹850", "₹900", "₹950"],
  answer: "₹900",
  explanation: "10% of ₹1,000 is ₹100, so the final price is ₹900.",
  hint: "Subtract ₹100."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A shopkeeper makes ₹50 profit on an item costing ₹250. Profit percentage is:",
  options: ["10%", "20%", "25%", "50%"],
  answer: "20%",
  explanation: "Profit percentage = 50 ÷ 250 × 100 = 20%.",
  hint: "Profit divided by cost."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "Out of 500 students, 300 passed. What percentage passed?",
  options: ["50%", "55%", "60%", "70%"],
  answer: "60%",
  explanation: "300 ÷ 500 × 100 = 60%.",
  hint: "Three-fifths."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "A village population rises from 1,000 to 1,200. The increase is:",
  options: ["100", "150", "200", "250"],
  answer: "200",
  explanation: "1,200 minus 1,000 equals 200.",
  hint: "New minus old."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "ROM stands for:",
  options: [
    "Read Only Memory",
    "Random Output Memory",
    "Remote Operating Machine",
    "Rapid Online Module"
  ],
  answer: "Read Only Memory",
  explanation: "ROM stands for Read Only Memory.",
  hint: "Non-volatile memory."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "A router is mainly used to:",
  options: [
    "Connect different networks",
    "Print documents",
    "Scan photographs",
    "Increase monitor brightness"
  ],
  answer: "Connect different networks",
  explanation: "Routers forward network traffic between different networks.",
  hint: "Internet networking device."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "A VPN is commonly used to:",
  options: [
    "Create an encrypted network connection",
    "Increase physical RAM",
    "Repair a monitor",
    "Print files"
  ],
  answer: "Create an encrypted network connection",
  explanation: "A VPN creates a protected connection through a network such as the internet.",
  hint: "Virtual Private Network."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Spam email refers mainly to:",
  options: [
    "Unsolicited bulk messages",
    "Encrypted messages only",
    "Government emails",
    "Draft emails"
  ],
  answer: "Unsolicited bulk messages",
  explanation: "Spam commonly refers to unwanted mass electronic messages.",
  hint: "Unwanted messages."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of ASEAN is in:",
  options: ["Jakarta", "Bangkok", "Singapore", "Manila"],
  answer: "Jakarta",
  explanation: "The ASEAN Secretariat is headquartered in Jakarta, Indonesia.",
  hint: "Indonesia."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of SAARC is in:",
  options: ["Kathmandu", "New Delhi", "Dhaka", "Islamabad"],
  answer: "Kathmandu",
  explanation: "The SAARC Secretariat is located in Kathmandu, Nepal.",
  hint: "Nepal."
},
// =========================
// POLITICAL SCIENCE - 20
// =========================

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Who wrote Leviathan?",
  options: ["Thomas Hobbes", "John Locke", "Rousseau", "J.S. Mill"],
  answer: "Thomas Hobbes",
  explanation: "Thomas Hobbes wrote Leviathan and defended a strong sovereign authority.",
  hint: "State of nature and absolute sovereignty."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "John Locke is strongly associated with the idea of:",
  options: [
    "Natural rights",
    "Absolute monarchy",
    "Historical materialism",
    "Elite circulation"
  ],
  answer: "Natural rights",
  explanation: "Locke defended natural rights such as life, liberty and property.",
  hint: "Life, liberty, property."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "The phrase 'greatest happiness of the greatest number' is associated with:",
  options: ["Jeremy Bentham", "Plato", "Hegel", "Hobbes"],
  answer: "Jeremy Bentham",
  explanation: "Bentham used utility and happiness as the basis for judging laws and institutions.",
  hint: "Utilitarianism."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Who wrote On Liberty?",
  options: ["J.S. Mill", "Thomas Hobbes", "Karl Marx", "Rousseau"],
  answer: "J.S. Mill",
  explanation: "J.S. Mill's On Liberty is a major defence of individual freedom.",
  hint: "Harm principle."
},

{
  subject: "Political Science",
  category: "Political Theory",
  question: "Rawls's original position uses the idea of:",
  options: [
    "Veil of ignorance",
    "Class struggle",
    "General will",
    "Divine right"
  ],
  answer: "Veil of ignorance",
  explanation: "Rawls used the veil of ignorance to imagine fair principles chosen without knowledge of one's social position.",
  hint: "Choose rules without knowing who you are."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Fundamental Rights are mainly contained in:",
  options: ["Part III", "Part IV", "Part IVA", "Part V"],
  answer: "Part III",
  explanation: "Part III of the Constitution contains the Fundamental Rights.",
  hint: "Rights chapter."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Directive Principles of State Policy are contained in:",
  options: ["Part IV", "Part III", "Part IVA", "Part VI"],
  answer: "Part IV",
  explanation: "Part IV contains the Directive Principles of State Policy.",
  hint: "Guidelines to the state."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Fundamental Duties are contained in:",
  options: ["Part IVA", "Part III", "Part IV", "Part V"],
  answer: "Part IVA",
  explanation: "Fundamental Duties are listed in Part IVA of the Constitution.",
  hint: "Added later by amendment."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "The Right to Constitutional Remedies is associated with:",
  options: ["Article 32", "Article 21", "Article 19", "Article 14"],
  answer: "Article 32",
  explanation: "Article 32 allows individuals to approach the Supreme Court for enforcement of Fundamental Rights.",
  hint: "Ambedkar called it heart and soul."
},

{
  subject: "Political Science",
  category: "Indian Government & Politics",
  question: "Equality before law is guaranteed under:",
  options: ["Article 14", "Article 19", "Article 21", "Article 25"],
  answer: "Article 14",
  explanation: "Article 14 guarantees equality before the law and equal protection of laws.",
  hint: "Equality article."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Realism assumes that the international system is largely:",
  options: ["Anarchic", "Fully hierarchical", "Without states", "Governed by one world government"],
  answer: "Anarchic",
  explanation: "Realists generally view the international system as lacking a central authority above states.",
  hint: "No world government."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Liberal institutionalism emphasises the role of:",
  options: [
    "International institutions and cooperation",
    "Only military power",
    "Only geography",
    "Only domestic constitutions"
  ],
  answer: "International institutions and cooperation",
  explanation: "Liberal institutionalism argues that institutions can help states cooperate despite anarchy.",
  hint: "Rules and institutions matter."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "Constructivism in IR emphasises:",
  options: [
    "Ideas, identities and norms",
    "Only military capability",
    "Only geography",
    "Only trade balances"
  ],
  answer: "Ideas, identities and norms",
  explanation: "Constructivism focuses on how social ideas, identities and norms shape international behaviour.",
  hint: "Interests are socially constructed."
},

{
  subject: "Political Science",
  category: "International Relations",
  question: "The United Nations Charter was signed in:",
  options: ["1945", "1919", "1955", "1961"],
  answer: "1945",
  explanation: "The UN Charter was signed in 1945 at San Francisco.",
  hint: "End of World War II."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Henri Fayol is associated with:",
  options: [
    "Administrative principles",
    "Scientific management only",
    "Human relations only",
    "Decision theory only"
  ],
  answer: "Administrative principles",
  explanation: "Fayol developed general principles of management and administration.",
  hint: "Unity of command and scalar chain."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Herbert Simon criticised classical administrative principles as:",
  options: [
    "Proverbs",
    "Laws of nature",
    "Constitutional rules",
    "Economic formulas"
  ],
  answer: "Proverbs",
  explanation: "Simon argued that many classical principles were contradictory and resembled proverbs.",
  hint: "Administrative Behavior."
},

{
  subject: "Political Science",
  category: "Public Administration",
  question: "Bounded rationality is associated with:",
  options: ["Herbert Simon", "Max Weber", "Taylor", "Fayol"],
  answer: "Herbert Simon",
  explanation: "Simon argued that decision-makers operate with limited information, time and cognitive capacity.",
  hint: "Satisficing."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A null hypothesis usually states that:",
  options: [
    "There is no relationship or difference",
    "A relationship definitely exists",
    "The research is invalid",
    "The sample is too small"
  ],
  answer: "There is no relationship or difference",
  explanation: "The null hypothesis generally assumes no statistically meaningful relationship or difference.",
  hint: "H0."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A dependent variable changes in response to:",
  options: [
    "The independent variable",
    "The bibliography",
    "The title",
    "The sample frame only"
  ],
  answer: "The independent variable",
  explanation: "The dependent variable is typically the outcome affected or explained by the independent variable.",
  hint: "Outcome variable."
},

{
  subject: "Political Science",
  category: "Research Methodology",
  question: "A literature review mainly helps a researcher to:",
  options: [
    "Understand existing research and identify gaps",
    "Avoid reading previous studies",
    "Replace data collection",
    "Remove the research question"
  ],
  answer: "Understand existing research and identify gaps",
  explanation: "A literature review maps existing knowledge, debates, methods and gaps.",
  hint: "What is already known?"
},

// =========================
// HISTORY - 20
// =========================

{
  subject: "History",
  category: "Ancient India",
  question: "The Great Bath was discovered at:",
  options: ["Mohenjo-daro", "Lothal", "Kalibangan", "Ropar"],
  answer: "Mohenjo-daro",
  explanation: "The Great Bath is one of the most famous structures discovered at Mohenjo-daro.",
  hint: "Major Harappan city."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Harappan civilisation used mainly:",
  options: ["Bronze", "Iron", "Steel", "Aluminium"],
  answer: "Bronze",
  explanation: "The Harappan civilisation belonged broadly to the Bronze Age.",
  hint: "Copper plus tin."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The earliest Buddhist texts were mainly preserved in:",
  options: ["Pali", "Persian", "Arabic", "English"],
  answer: "Pali",
  explanation: "Many early Buddhist canonical texts were preserved in Pali.",
  hint: "Tipitaka language."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Mauryan Empire was founded by:",
  options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Bimbisara"],
  answer: "Chandragupta Maurya",
  explanation: "Chandragupta Maurya founded the Mauryan Empire in the late fourth century BCE.",
  hint: "Supported by Chanakya."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Arthashastra is traditionally associated with:",
  options: ["Kautilya", "Kalidasa", "Banabhatta", "Patanjali"],
  answer: "Kautilya",
  explanation: "The Arthashastra is traditionally attributed to Kautilya or Chanakya.",
  hint: "Mauryan political thought."
},

{
  subject: "History",
  category: "Ancient India",
  question: "The Gupta period is often associated with the development of:",
  options: ["Classical Sanskrit literature", "European feudalism", "Islamic architecture", "British administration"],
  answer: "Classical Sanskrit literature",
  explanation: "The Gupta era is strongly associated with Sanskrit literature, science and art.",
  hint: "Kalidasa."
},

{
  subject: "History",
  category: "Medieval India",
  question: "Who defeated Ibrahim Lodi in the First Battle of Panipat?",
  options: ["Babur", "Akbar", "Sher Shah", "Humayun"],
  answer: "Babur",
  explanation: "Babur defeated Ibrahim Lodi at Panipat in 1526.",
  hint: "Beginning of Mughal rule."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Second Battle of Panipat was fought in:",
  options: ["1556", "1526", "1761", "1576"],
  answer: "1556",
  explanation: "The Second Battle of Panipat in 1556 strengthened Akbar's position.",
  hint: "Akbar and Hemu."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The Third Battle of Panipat was fought in:",
  options: ["1761", "1757", "1764", "1707"],
  answer: "1761",
  explanation: "The Third Battle of Panipat was fought between the Marathas and Ahmad Shah Abdali in 1761.",
  hint: "Maratha setback."
},

{
  subject: "History",
  category: "Medieval India",
  question: "The mansabdari system was developed extensively under:",
  options: ["Akbar", "Babur", "Humayun", "Aurangzeb only"],
  answer: "Akbar",
  explanation: "Akbar developed the mansabdari system as a major feature of Mughal administration.",
  hint: "Rank and service."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Battle of Plassey was fought in:",
  options: ["1757", "1764", "1773", "1857"],
  answer: "1757",
  explanation: "The Battle of Plassey in 1757 marked a major expansion of Company power in Bengal.",
  hint: "Robert Clive."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Battle of Buxar was fought in:",
  options: ["1764", "1757", "1773", "1793"],
  answer: "1764",
  explanation: "The Battle of Buxar in 1764 further strengthened Company power.",
  hint: "After Plassey."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Permanent Settlement is associated with:",
  options: ["Lord Cornwallis", "Lord Wellesley", "Lord Ripon", "Lord Curzon"],
  answer: "Lord Cornwallis",
  explanation: "The Permanent Settlement of Bengal was introduced under Lord Cornwallis.",
  hint: "1793."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Doctrine of Lapse is associated with:",
  options: ["Lord Dalhousie", "Lord Canning", "Lord Ripon", "Lord Lytton"],
  answer: "Lord Dalhousie",
  explanation: "Dalhousie used the Doctrine of Lapse to annex several princely states.",
  hint: "Annexation policy."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Revolt of 1857 began at:",
  options: ["Meerut", "Delhi", "Kanpur", "Lucknow"],
  answer: "Meerut",
  explanation: "The uprising began among sepoys at Meerut in May 1857.",
  hint: "Then marched to Delhi."
},

{
  subject: "History",
  category: "Modern India",
  question: "The Indian National Congress was founded in:",
  options: ["1885", "1905", "1906", "1919"],
  answer: "1885",
  explanation: "The Indian National Congress was founded in 1885.",
  hint: "A.O. Hume."
},

{
  subject: "History",
  category: "World History",
  question: "The Enlightenment emphasised:",
  options: ["Reason", "Feudal privilege only", "Absolute superstition", "Isolation"],
  answer: "Reason",
  explanation: "Enlightenment thinkers emphasised reason, criticism and individual rights.",
  hint: "Age of Reason."
},

{
  subject: "History",
  category: "World History",
  question: "The Estates-General was summoned in France in:",
  options: ["1789", "1776", "1815", "1848"],
  answer: "1789",
  explanation: "The Estates-General met in 1789 as France's political crisis deepened.",
  hint: "Start of French Revolution."
},

{
  subject: "History",
  category: "World History",
  question: "The Bolsheviks seized power in Russia in:",
  options: ["October 1917", "1905", "1914", "1924"],
  answer: "October 1917",
  explanation: "The Bolsheviks seized political power during the October Revolution of 1917.",
  hint: "Lenin."
},

{
  subject: "History",
  category: "World History",
  question: "The Great Depression began in:",
  options: ["1929", "1919", "1939", "1945"],
  answer: "1929",
  explanation: "The Great Depression is conventionally associated with the economic crash beginning in 1929.",
  hint: "Wall Street crash."
},

// =========================
// GEOGRAPHY - 20
// =========================

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The largest ocean on Earth is the:",
  options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  answer: "Pacific Ocean",
  explanation: "The Pacific is the largest and deepest ocean basin.",
  hint: "Largest ocean."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The smallest ocean is the:",
  options: ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean", "Pacific Ocean"],
  answer: "Arctic Ocean",
  explanation: "The Arctic Ocean is the smallest of the major oceans.",
  hint: "Around the North Pole."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The Mariana Trench is located in the:",
  options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  answer: "Pacific Ocean",
  explanation: "The Mariana Trench lies in the western Pacific and contains the deepest known ocean point.",
  hint: "Challenger Deep."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A tectonic plate consists mainly of:",
  options: ["Lithosphere", "Inner core", "Atmosphere", "Hydrosphere"],
  answer: "Lithosphere",
  explanation: "Tectonic plates are rigid sections of the lithosphere.",
  hint: "Crust plus uppermost mantle."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "At a divergent plate boundary, plates:",
  options: ["Move apart", "Move together", "Never move", "Move vertically only"],
  answer: "Move apart",
  explanation: "Divergent boundaries form where tectonic plates separate.",
  hint: "Mid-ocean ridges."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "At a convergent plate boundary, plates generally:",
  options: ["Move toward each other", "Move apart", "Remain completely stationary", "Move only eastward"],
  answer: "Move toward each other",
  explanation: "Convergent boundaries occur where plates approach and collide or subduct.",
  hint: "Collision."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A transform plate boundary involves plates:",
  options: ["Sliding past each other", "Moving apart only", "Colliding only", "Melting completely"],
  answer: "Sliding past each other",
  explanation: "Transform boundaries occur where plates move horizontally past one another.",
  hint: "San Andreas Fault."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "The instrument used to record earthquakes is a:",
  options: ["Seismograph", "Barometer", "Hygrometer", "Thermometer"],
  answer: "Seismograph",
  explanation: "A seismograph detects and records seismic waves.",
  hint: "Earthquake instrument."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A river's source is:",
  options: ["The place where it begins", "Its mouth", "Its delta", "Its floodplain"],
  answer: "The place where it begins",
  explanation: "The source or headwaters are where a river originates.",
  hint: "Beginning of river."
},

{
  subject: "Geography",
  category: "Physical Geography",
  question: "A river mouth is:",
  options: ["Where the river enters a sea, lake or another river", "Where it begins", "A mountain pass", "A glacier summit"],
  answer: "Where the river enters a sea, lake or another river",
  explanation: "The mouth marks the downstream end of a river system.",
  hint: "End of river."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Population explosion refers to:",
  options: ["Very rapid population growth", "Population decline", "Population ageing only", "Zero migration"],
  answer: "Very rapid population growth",
  explanation: "Population explosion describes unusually rapid growth over a relatively short period.",
  hint: "Fast growth."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Emigration means:",
  options: ["Leaving a country or region to live elsewhere", "Entering a country", "Moving within one city only", "Daily commuting only"],
  answer: "Leaving a country or region to live elsewhere",
  explanation: "Emigration refers to outward migration from the place of origin.",
  hint: "Exit."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Immigration means:",
  options: ["Entering a country or region to live there", "Leaving a country", "Daily travel to work", "Tourism only"],
  answer: "Entering a country or region to live there",
  explanation: "Immigration refers to inward migration into a destination.",
  hint: "Incoming."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "Urbanisation usually increases when:",
  options: ["More people live in towns and cities", "Every city disappears", "All jobs remain agricultural", "Population becomes zero"],
  answer: "More people live in towns and cities",
  explanation: "Urbanisation is the increasing share of population living in urban settlements.",
  hint: "More urban population."
},

{
  subject: "Geography",
  category: "Human Geography",
  question: "A pull factor in migration is:",
  options: ["Better employment opportunities", "War", "Famine", "Persecution"],
  answer: "Better employment opportunities",
  explanation: "Pull factors attract migrants toward a destination.",
  hint: "Something attractive."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Mining belongs mainly to the:",
  options: ["Primary sector", "Secondary sector", "Tertiary sector", "Quaternary sector"],
  answer: "Primary sector",
  explanation: "Mining extracts natural resources directly from Earth.",
  hint: "Resource extraction."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Banking belongs mainly to the:",
  options: ["Tertiary sector", "Primary sector", "Secondary sector", "Extractive sector"],
  answer: "Tertiary sector",
  explanation: "Banking is a financial service.",
  hint: "Service sector."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Research and development belongs mainly to the:",
  options: ["Quaternary sector", "Primary sector", "Secondary sector", "Agricultural sector"],
  answer: "Quaternary sector",
  explanation: "Research and development is knowledge-intensive and belongs to the quaternary sector.",
  hint: "Knowledge services."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Geothermal energy uses heat from:",
  options: ["Inside Earth", "Sunlight only", "Wind only", "Ocean tides only"],
  answer: "Inside Earth",
  explanation: "Geothermal energy uses heat originating from Earth's interior.",
  hint: "Geo = Earth."
},

{
  subject: "Geography",
  category: "Economic Geography",
  question: "Tidal energy is produced using:",
  options: ["Movement of ocean tides", "Coal", "Wind only", "Oil"],
  answer: "Movement of ocean tides",
  explanation: "Tidal power captures energy from periodic movement of seawater caused by tides.",
  hint: "Sea level movement."
},

// =========================
// ECONOMICS - 20
// =========================

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A demand schedule shows:",
  options: ["Quantities demanded at different prices", "Only one price", "Only supply", "Only income"],
  answer: "Quantities demanded at different prices",
  explanation: "A demand schedule lists how much consumers are willing to buy at various prices.",
  hint: "Price and quantity demanded."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "A supply schedule shows:",
  options: ["Quantities supplied at different prices", "Only consumer income", "Only demand", "Only profit"],
  answer: "Quantities supplied at different prices",
  explanation: "A supply schedule lists the quantities producers are willing to sell at different prices.",
  hint: "Price and quantity supplied."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Price elasticity of demand measures responsiveness of quantity demanded to:",
  options: ["Changes in price", "Only population", "Only rainfall", "Only taxation"],
  answer: "Changes in price",
  explanation: "Price elasticity measures how strongly quantity demanded changes when price changes.",
  hint: "Responsiveness to price."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Demand is elastic when:",
  options: ["Quantity responds strongly to price changes", "Quantity never changes", "Price is zero", "Supply is fixed"],
  answer: "Quantity responds strongly to price changes",
  explanation: "Elastic demand means percentage quantity response is relatively large compared with the price change.",
  hint: "Sensitive demand."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Demand is inelastic when:",
  options: ["Quantity responds weakly to price changes", "Quantity responds very strongly", "Demand disappears", "Price becomes negative"],
  answer: "Quantity responds weakly to price changes",
  explanation: "Inelastic demand means consumers change quantity demanded relatively little when price changes.",
  hint: "Not very sensitive."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Total revenue equals:",
  options: ["Price multiplied by quantity sold", "Cost multiplied by tax", "Income minus population", "Demand minus supply"],
  answer: "Price multiplied by quantity sold",
  explanation: "Total revenue is calculated as price times quantity sold.",
  hint: "P × Q."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Profit equals:",
  options: ["Total revenue minus total cost", "Total cost minus revenue", "Price plus quantity", "Taxes minus GDP"],
  answer: "Total revenue minus total cost",
  explanation: "Profit is the difference between revenue earned and costs incurred.",
  hint: "TR - TC."
},

{
  subject: "Economics",
  category: "Microeconomics",
  question: "Average revenue is usually:",
  options: ["Revenue per unit sold", "Total cost per unit", "Profit per worker", "Tax per household"],
  answer: "Revenue per unit sold",
  explanation: "Average revenue equals total revenue divided by quantity sold.",
  hint: "Revenue per unit."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Inflation reduces:",
  options: ["Purchasing power of money", "Population density", "Land area", "Literacy automatically"],
  answer: "Purchasing power of money",
  explanation: "When prices rise, each unit of money buys fewer goods and services.",
  hint: "Money buys less."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Deflation can increase the real burden of:",
  options: ["Debt", "Population", "Rainfall", "Exports automatically"],
  answer: "Debt",
  explanation: "Falling prices can make fixed nominal debts harder to repay in real terms.",
  hint: "Debt becomes heavier."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "Full employment does not necessarily mean:",
  options: ["Zero unemployment", "Low cyclical unemployment", "High labour use", "Economic activity"],
  answer: "Zero unemployment",
  explanation: "Even at full employment, frictional and some structural unemployment may remain.",
  hint: "Some unemployment is normal."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "A recession often causes unemployment to:",
  options: ["Rise", "Disappear", "Remain exactly zero", "Become illegal"],
  answer: "Rise",
  explanation: "Economic downturns reduce production and labour demand, often increasing unemployment.",
  hint: "Less output, fewer jobs."
},

{
  subject: "Economics",
  category: "Macroeconomics",
  question: "An economic boom is generally associated with:",
  options: ["Rapid growth in economic activity", "Falling output only", "No investment", "Zero consumption"],
  answer: "Rapid growth in economic activity",
  explanation: "A boom is a period of strong production, investment and demand.",
  hint: "Expansion."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "Public revenue includes:",
  options: ["Taxes and non-tax receipts", "Only private income", "Only household savings", "Only company wages"],
  answer: "Taxes and non-tax receipts",
  explanation: "Government revenue comes from taxes and sources such as fees, dividends and other receipts.",
  hint: "Government income."
},

{
  subject: "Economics",
  category: "Public Finance",
  question: "Public debt is money owed by:",
  options: ["Government", "Only households", "Only firms", "Only banks"],
  answer: "Government",
  explanation: "Public debt is the outstanding debt obligation of government.",
  hint: "Government borrowing."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Human development focuses on expanding:",
  options: ["People's capabilities and choices", "Only GDP", "Only exports", "Only taxes"],
  answer: "People's capabilities and choices",
  explanation: "Human development emphasises what people are able to be and do.",
  hint: "People-centred development."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Education can raise productivity by improving:",
  options: ["Human capital", "Natural rainfall", "Mineral deposits", "Exchange rates"],
  answer: "Human capital",
  explanation: "Education improves knowledge and skills that can raise worker productivity.",
  hint: "Skills and knowledge."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "A poverty trap occurs when:",
  options: [
    "Low income makes it difficult to escape poverty",
    "Everyone becomes wealthy",
    "Taxes disappear",
    "Exports always rise"
  ],
  answer: "Low income makes it difficult to escape poverty",
  explanation: "A poverty trap describes self-reinforcing conditions that keep people or economies poor.",
  hint: "Poverty reinforces poverty."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Social security programmes mainly aim to:",
  options: ["Protect people against economic and social risks", "Increase only exports", "Reduce all education", "End banking"],
  answer: "Protect people against economic and social risks",
  explanation: "Social security can protect against risks such as old age, illness, unemployment or disability.",
  hint: "Safety net."
},

{
  subject: "Economics",
  category: "Development Economics",
  question: "Inclusive development emphasises:",
  options: ["Broad participation in development benefits", "Growth for only a small elite", "No public services", "No employment"],
  answer: "Broad participation in development benefits",
  explanation: "Inclusive development seeks to ensure that growth and opportunities are shared widely.",
  hint: "Development for more people."
},

// =========================
// SOCIOLOGY - 20
// =========================

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Who is commonly called the father of sociology?",
  options: ["Auguste Comte", "Karl Marx", "Max Weber", "Durkheim"],
  answer: "Auguste Comte",
  explanation: "Auguste Comte is widely credited with coining the term sociology.",
  hint: "Positivism."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Durkheim described social facts as:",
  options: [
    "External and constraining social forces",
    "Purely individual emotions",
    "Only economic facts",
    "Only laws"
  ],
  answer: "External and constraining social forces",
  explanation: "Durkheim argued that social facts exist outside individuals and exert constraint over them.",
  hint: "Rules of Sociological Method."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Marx argued that history is strongly shaped by:",
  options: ["Class struggle", "Only religion", "Only geography", "Only law"],
  answer: "Class struggle",
  explanation: "Marx viewed conflict between social classes as a major force in historical change.",
  hint: "Bourgeoisie versus proletariat."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Weber's concept of charisma refers to authority based on:",
  options: ["Exceptional personal qualities", "Formal rules only", "Tradition only", "Inheritance only"],
  answer: "Exceptional personal qualities",
  explanation: "Charismatic authority rests on devotion to the perceived extraordinary qualities of a leader.",
  hint: "Leader's personality."
},

{
  subject: "Sociology",
  category: "Sociological Thinkers",
  question: "Merton's latent functions are:",
  options: ["Unintended consequences", "Always intended goals", "Only negative outcomes", "Only economic outcomes"],
  answer: "Unintended consequences",
  explanation: "Latent functions are consequences that are not consciously intended or recognised.",
  hint: "Hidden consequences."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Social structure refers to:",
  options: ["Patterned social relationships and institutions", "Only buildings", "Only laws", "Only families"],
  answer: "Patterned social relationships and institutions",
  explanation: "Social structure describes relatively stable patterns of roles, groups and institutions.",
  hint: "Framework of society."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "A role is linked to a person's:",
  options: ["Status", "Height", "Age only", "Income only"],
  answer: "Status",
  explanation: "A role refers to expected behaviour connected to a particular status.",
  hint: "Status has expectations."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Role strain occurs when:",
  options: ["Different expectations within one role conflict", "Two completely different roles conflict", "No role exists", "Status disappears"],
  answer: "Different expectations within one role conflict",
  explanation: "Role strain occurs when demands within a single role become difficult to meet.",
  hint: "Pressure inside one role."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Primary socialisation usually occurs first in the:",
  options: ["Family", "Workplace", "Political party", "Court"],
  answer: "Family",
  explanation: "Families are usually the earliest and most important agents of primary socialisation.",
  hint: "First social environment."
},

{
  subject: "Sociology",
  category: "Basic Concepts",
  question: "Peer groups become especially important during:",
  options: ["Childhood and adolescence", "Only old age", "Only infancy", "Only retirement"],
  answer: "Childhood and adolescence",
  explanation: "Peer groups strongly influence identity, behaviour and social learning during childhood and adolescence.",
  hint: "Friends influence behaviour."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "Marriage commonly regulates:",
  options: ["Family and kinship relationships", "Only taxation", "Only voting", "Only trade"],
  answer: "Family and kinship relationships",
  explanation: "Marriage is a major institution organising family, kinship and socially recognised partnerships.",
  hint: "Family institution."
},

{
  subject: "Sociology",
  category: "Social Institutions",
  question: "The economy as an institution organises:",
  options: ["Production and distribution", "Only religion", "Only voting", "Only education"],
  answer: "Production and distribution",
  explanation: "Economic institutions regulate production, exchange, distribution and consumption.",
  hint: "Goods and resources."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "A closed stratification system offers:",
  options: ["Limited social mobility", "Unlimited mobility", "No hierarchy", "Equal status automatically"],
  answer: "Limited social mobility",
  explanation: "Closed systems restrict movement between social positions.",
  hint: "Caste-like system."
},

{
  subject: "Sociology",
  category: "Social Stratification",
  question: "An open stratification system allows:",
  options: ["Greater social mobility", "No movement at all", "Only inherited status", "No achievement"],
  answer: "Greater social mobility",
  explanation: "Open systems permit more movement based on education, occupation or achievement.",
  hint: "Class-like system."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Technological change can influence:",
  options: ["Work, communication and social relations", "Only weather", "Only biology", "Nothing social"],
  answer: "Work, communication and social relations",
  explanation: "Technology can transform occupations, institutions and everyday interaction.",
  hint: "Technology reshapes society."
},

{
  subject: "Sociology",
  category: "Social Change",
  question: "Migration can contribute to:",
  options: ["Cultural exchange", "Only isolation", "No demographic change", "No social change"],
  answer: "Cultural exchange",
  explanation: "Migration can spread ideas, languages, customs and social practices.",
  hint: "People bring culture."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "A hypothesis in sociology should ideally be:",
  options: ["Testable", "Impossible to examine", "Purely decorative", "Unrelated to data"],
  answer: "Testable",
  explanation: "A useful hypothesis should be capable of being examined using evidence.",
  hint: "Can evidence support or reject it?"
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "A sample frame is:",
  options: ["A list or source identifying population members", "A final conclusion", "A chart only", "A research theory"],
  answer: "A list or source identifying population members",
  explanation: "A sampling frame provides the set from which a sample is selected.",
  hint: "Who can be sampled?"
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "Random sampling is useful because it can reduce:",
  options: ["Selection bias", "All research errors", "Need for analysis", "Need for a population"],
  answer: "Selection bias",
  explanation: "Random selection gives population members a defined chance of inclusion and can reduce selection bias.",
  hint: "Chance-based selection."
},

{
  subject: "Sociology",
  category: "Research Methods",
  question: "Secondary data may include:",
  options: ["Census reports and published statistics", "Only new interviews", "Only participant observation", "Only experiments"],
  answer: "Census reports and published statistics",
  explanation: "Secondary data are previously collected materials such as official records and published datasets.",
  hint: "Already existing data."
},

// =========================
// EDUCATION - 20
// =========================

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Intrinsic motivation comes from:",
  options: ["Internal interest or satisfaction", "External rewards only", "Punishment only", "Grades only"],
  answer: "Internal interest or satisfaction",
  explanation: "Intrinsic motivation arises when an activity is rewarding in itself.",
  hint: "Doing it because you enjoy it."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Extrinsic motivation comes mainly from:",
  options: ["External rewards or consequences", "Internal curiosity only", "Natural maturation only", "Memory only"],
  answer: "External rewards or consequences",
  explanation: "Extrinsic motivation is driven by external outcomes such as rewards, grades or punishments.",
  hint: "Outside reward."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "The concrete operational stage is associated with:",
  options: ["Logical thinking about concrete objects", "Abstract reasoning only", "Reflexes only", "No logical ability"],
  answer: "Logical thinking about concrete objects",
  explanation: "Piaget's concrete operational stage involves logical reasoning about tangible situations.",
  hint: "Concrete logic."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "The preoperational stage is characterised strongly by:",
  options: ["Symbolic thinking", "Advanced abstract reasoning", "No language", "Adult reasoning"],
  answer: "Symbolic thinking",
  explanation: "Children in the preoperational stage develop language and symbolic thought but still have limits in logical operations.",
  hint: "Before concrete operations."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Vygotsky emphasised the importance of:",
  options: ["Social interaction in learning", "Only biological maturation", "Only punishment", "Only memory"],
  answer: "Social interaction in learning",
  explanation: "Vygotsky argued that cognitive development is strongly shaped by social and cultural interaction.",
  hint: "Learning with others."
},

{
  subject: "Education",
  category: "Educational Psychology",
  question: "Scaffolding is gradually removed when:",
  options: ["The learner becomes more independent", "The learner becomes more confused", "The teacher leaves immediately", "The task becomes impossible"],
  answer: "The learner becomes more independent",
  explanation: "Support is reduced as learners gain competence.",
  hint: "Support fades over time."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Active learning requires students to:",
  options: ["Engage directly with the learning task", "Only listen passively", "Avoid questions", "Memorise without participation"],
  answer: "Engage directly with the learning task",
  explanation: "Active learning involves discussion, problem solving, practice or other forms of participation.",
  hint: "Students do something."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "Peer teaching involves:",
  options: ["Students helping other students learn", "Only teachers lecturing", "No interaction", "Only examinations"],
  answer: "Students helping other students learn",
  explanation: "Peer teaching uses learners as instructional partners.",
  hint: "Students teach students."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "A lesson plan helps a teacher to:",
  options: ["Organise objectives, content and activities", "Avoid preparation", "Remove all objectives", "Ignore assessment"],
  answer: "Organise objectives, content and activities",
  explanation: "Lesson planning structures what will be taught, how and for what purpose.",
  hint: "Plan the class."
},

{
  subject: "Education",
  category: "Teaching and Learning",
  question: "A learning objective should describe:",
  options: ["What learners should be able to do", "Only teacher activities", "Only classroom furniture", "Only exam dates"],
  answer: "What learners should be able to do",
  explanation: "Learning objectives identify expected learner outcomes.",
  hint: "Student outcome."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Formative assessment is conducted mainly:",
  options: ["During learning", "Only after graduation", "Only before admission", "Only once in life"],
  answer: "During learning",
  explanation: "Formative assessment provides information that can improve ongoing teaching and learning.",
  hint: "Assessment while learning."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Summative assessment is commonly conducted:",
  options: ["At the end of a learning period", "Before any teaching", "Every minute", "Without objectives"],
  answer: "At the end of a learning period",
  explanation: "Summative assessment evaluates achievement after instruction.",
  hint: "Final assessment."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Diagnostic assessment is used before or during instruction to:",
  options: ["Identify strengths and weaknesses", "Award final certificates only", "Punish learners", "Remove all feedback"],
  answer: "Identify strengths and weaknesses",
  explanation: "Diagnostic assessment helps determine what learners know and where they need support.",
  hint: "Find learning gaps."
},

{
  subject: "Education",
  category: "Assessment",
  question: "Criterion-referenced tests measure performance against:",
  options: ["Defined standards", "Other students only", "Teacher popularity", "School size"],
  answer: "Defined standards",
  explanation: "Criterion-referenced assessment judges whether specified learning criteria are met.",
  hint: "Standard, not rank."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Inclusive education seeks to maximise:",
  options: ["Participation", "Segregation", "Exclusion", "Barriers"],
  answer: "Participation",
  explanation: "Inclusive education aims to ensure meaningful participation for diverse learners.",
  hint: "Everyone participates."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "A ramp in a school mainly improves:",
  options: ["Physical accessibility", "Exam difficulty", "Curriculum length", "Teacher salary"],
  answer: "Physical accessibility",
  explanation: "Ramps can help learners with mobility needs access buildings more easily.",
  hint: "Barrier-free infrastructure."
},

{
  subject: "Education",
  category: "Inclusive Education",
  question: "Captioning in educational videos particularly helps learners with:",
  options: ["Hearing difficulties", "Visual impairment only", "Mobility issues only", "Only handwriting problems"],
  answer: "Hearing difficulties",
  explanation: "Captions provide written access to spoken content.",
  hint: "Speech becomes text."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Education may promote social mobility through:",
  options: ["Skills and qualifications", "Only inherited status", "Only family background", "Only age"],
  answer: "Skills and qualifications",
  explanation: "Education can improve access to occupations and opportunities.",
  hint: "Education can change opportunities."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "The curriculum should ideally reflect:",
  options: ["Educational aims and learner needs", "Only examination length", "Only school buildings", "Only teacher preferences"],
  answer: "Educational aims and learner needs",
  explanation: "A curriculum should align goals, content, learning experiences and learner needs.",
  hint: "Purposeful educational design."
},

{
  subject: "Education",
  category: "Educational Foundations",
  question: "Teacher education mainly prepares individuals for:",
  options: ["Effective teaching practice", "Only administration", "Only politics", "Only accounting"],
  answer: "Effective teaching practice",
  explanation: "Teacher education develops subject knowledge, pedagogy, assessment and professional skills.",
  hint: "Prepare teachers."
},

// =========================
// ENGLISH - 20
// =========================

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'He ___ a letter every week.'",
  options: ["writes", "write", "writing", "written"],
  answer: "writes",
  explanation: "A third-person singular subject takes 'writes' in the simple present.",
  hint: "He + verb-s."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'We ___ dinner when the phone rang.'",
  options: ["were having", "was having", "have", "are had"],
  answer: "were having",
  explanation: "Past continuous describes an ongoing past action interrupted by another action.",
  hint: "We + were."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct sentence:",
  options: [
    "She has never seen snow.",
    "She never has saw snow.",
    "She have never seen snow.",
    "She has never saw snow."
  ],
  answer: "She has never seen snow.",
  explanation: "Present perfect uses has plus the past participle 'seen'.",
  hint: "Has + seen."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'There ___ a book on the desk.'",
  options: ["is", "are", "were", "have"],
  answer: "is",
  explanation: "The singular noun 'book' takes 'is'.",
  hint: "One book."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'There ___ several books on the desk.'",
  options: ["are", "is", "has", "was"],
  answer: "are",
  explanation: "The plural noun 'books' takes 'are'.",
  hint: "Several books."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct pronoun: 'Rahul and I completed ___ work.'",
  options: ["our", "their", "his", "its"],
  answer: "our",
  explanation: "'Rahul and I' is first-person plural, so 'our' is correct.",
  hint: "We = our."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'She is taller ___ her sister.'",
  options: ["than", "then", "from", "to"],
  answer: "than",
  explanation: "'Than' is used in comparisons.",
  hint: "Comparison word."
},

{
  subject: "English",
  category: "Grammar",
  question: "Choose the correct form: 'This is the ___ book I have read.'",
  options: ["best", "better", "good", "more good"],
  answer: "best",
  explanation: "The superlative form of good is best.",
  hint: "Good, better, best."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'obvious'.",
  options: ["Clear", "Hidden", "Uncertain", "Rare"],
  answer: "Clear",
  explanation: "Obvious means easy to see or understand.",
  hint: "Easy to notice."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'decline'.",
  options: ["Decrease", "Increase", "Expand", "Improve"],
  answer: "Decrease",
  explanation: "Decline can mean decrease or become less.",
  hint: "Go down."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the synonym of 'precise'.",
  options: ["Exact", "Vague", "Loose", "General"],
  answer: "Exact",
  explanation: "Precise means exact and carefully defined.",
  hint: "Very accurate."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'arrival'.",
  options: ["Departure", "Entry", "Coming", "Approach"],
  answer: "Departure",
  explanation: "Departure is the opposite of arrival.",
  hint: "Leaving."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'success'.",
  options: ["Failure", "Achievement", "Victory", "Progress"],
  answer: "Failure",
  explanation: "Failure is the opposite of success.",
  hint: "Not succeeding."
},

{
  subject: "English",
  category: "Vocabulary",
  question: "Choose the antonym of 'legal'.",
  options: ["Illegal", "Lawful", "Valid", "Permitted"],
  answer: "Illegal",
  explanation: "Illegal means contrary to law and is the opposite of legal.",
  hint: "Against the law."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "A comparison passage mainly examines:",
  options: ["Similarities and differences", "Only causes", "Only chronology", "Only definitions"],
  answer: "Similarities and differences",
  explanation: "Comparison writing identifies how two or more subjects are alike and different.",
  hint: "Compare and contrast."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "Chronological order arranges information by:",
  options: ["Time sequence", "Importance only", "Alphabetical order only", "Random order"],
  answer: "Time sequence",
  explanation: "Chronological organisation presents events in the order in which they occur.",
  hint: "First, next, later."
},

{
  subject: "English",
  category: "Comprehension Skills",
  question: "A conclusion drawn from evidence is called:",
  options: ["Inference", "Title", "Heading", "Quotation"],
  answer: "Inference",
  explanation: "An inference is a reasoned conclusion based on textual evidence.",
  hint: "Read between the lines."
},

{
  subject: "English",
  category: "Writing",
  question: "A coherent essay should have:",
  options: ["Logical flow between ideas", "Random paragraphs", "No central argument", "Unrelated evidence"],
  answer: "Logical flow between ideas",
  explanation: "Coherence allows readers to follow the development of ideas easily.",
  hint: "Ideas connect."
},

{
  subject: "English",
  category: "Writing",
  question: "A citation should be used when:",
  options: ["Using another person's ideas or words", "Writing your own common observation only", "Choosing a font", "Starting a paragraph"],
  answer: "Using another person's ideas or words",
  explanation: "Citations acknowledge sources of borrowed ideas, data or quotations.",
  hint: "Give credit."
},

{
  subject: "English",
  category: "Writing",
  question: "A draft is:",
  options: ["A preliminary version of writing", "The bibliography only", "The final printed book only", "A citation style"],
  answer: "A preliminary version of writing",
  explanation: "A draft is an early version that can be revised and improved.",
  hint: "First version."
},

// =========================
// GENERAL APTITUDE - 20
// =========================

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 4, 8, 12, 16, ?",
  options: ["18", "20", "22", "24"],
  answer: "20",
  explanation: "The sequence increases by 4 each time.",
  hint: "Add 4."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next number: 30, 25, 20, 15, ?",
  options: ["5", "10", "12", "14"],
  answer: "10",
  explanation: "The sequence decreases by 5 each time.",
  hint: "Subtract 5."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the next letter: A, C, E, G, ?",
  options: ["H", "I", "J", "K"],
  answer: "I",
  explanation: "The sequence moves forward by two letters each time.",
  hint: "Skip one letter."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Find the odd one out: 4, 9, 16, 25, 30",
  options: ["4", "9", "25", "30"],
  answer: "30",
  explanation: "4, 9, 16 and 25 are perfect squares, while 30 is not.",
  hint: "Perfect squares."
},

{
  subject: "General Aptitude",
  category: "Logical Reasoning",
  question: "Teacher is to School as Doctor is to:",
  options: ["Hospital", "Market", "Bank", "Farm"],
  answer: "Hospital",
  explanation: "A teacher commonly works in a school, while a doctor commonly works in a hospital.",
  hint: "Profession and workplace."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 60% of 150?",
  options: ["80", "90", "100", "110"],
  answer: "90",
  explanation: "60% of 150 equals 90.",
  hint: "6 × 15."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is 8% of 500?",
  options: ["30", "40", "50", "60"],
  answer: "40",
  explanation: "8% of 500 equals 40.",
  hint: "1% is 5."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "What is the average of 10, 20, 30, 40 and 50?",
  options: ["20", "25", "30", "35"],
  answer: "30",
  explanation: "The total is 150 and 150 divided by 5 equals 30.",
  hint: "Middle value in an even sequence."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "If 12 pencils cost ₹120, one pencil costs:",
  options: ["₹5", "₹10", "₹12", "₹15"],
  answer: "₹10",
  explanation: "₹120 divided by 12 equals ₹10.",
  hint: "Unit price."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A ₹2,000 item gets a 25% discount. Sale price is:",
  options: ["₹1,400", "₹1,500", "₹1,600", "₹1,750"],
  answer: "₹1,500",
  explanation: "25% of ₹2,000 is ₹500, so the sale price is ₹1,500.",
  hint: "Subtract one-fourth."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "Simple interest on ₹1,500 at 10% for 2 years is:",
  options: ["₹150", "₹200", "₹300", "₹350"],
  answer: "₹300",
  explanation: "SI = 1500 × 10 × 2 / 100 = ₹300.",
  hint: "PRT/100."
},

{
  subject: "General Aptitude",
  category: "Quantitative Aptitude",
  question: "A product bought for ₹600 is sold for ₹720. Profit is:",
  options: ["₹100", "₹120", "₹150", "₹180"],
  answer: "₹120",
  explanation: "Profit = ₹720 - ₹600 = ₹120.",
  hint: "Selling minus cost."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "Out of 400 people, 100 prefer option A. What percentage prefer option A?",
  options: ["20%", "25%", "30%", "40%"],
  answer: "25%",
  explanation: "100 divided by 400 multiplied by 100 equals 25%.",
  hint: "One-fourth."
},

{
  subject: "General Aptitude",
  category: "Data Interpretation",
  question: "A group has 75 men and 25 women. What percentage are women?",
  options: ["20%", "25%", "30%", "35%"],
  answer: "25%",
  explanation: "There are 100 people in total, so 25 women equal 25%.",
  hint: "Total is 100."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "A web browser is used to:",
  options: ["Access and display websites", "Replace RAM", "Repair hardware", "Measure temperature"],
  answer: "Access and display websites",
  explanation: "Browsers retrieve and display web content.",
  hint: "Chrome, Firefox, Edge."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "A URL is:",
  options: ["An address of a web resource", "A computer virus", "A hardware chip", "A printer command"],
  answer: "An address of a web resource",
  explanation: "A URL identifies the location of a resource on the web.",
  hint: "Web address."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "Wi-Fi is mainly used for:",
  options: ["Wireless network connectivity", "Printing only", "Charging batteries only", "Editing documents only"],
  answer: "Wireless network connectivity",
  explanation: "Wi-Fi connects devices to local networks using radio signals.",
  hint: "Wireless internet."
},

{
  subject: "General Aptitude",
  category: "ICT",
  question: "A phishing email often tries to:",
  options: ["Steal sensitive information", "Improve security", "Repair files", "Upgrade hardware automatically"],
  answer: "Steal sensitive information",
  explanation: "Phishing messages impersonate trusted sources to obtain credentials or financial information.",
  hint: "Fake message."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of UNESCO is in:",
  options: ["Paris", "Rome", "Geneva", "Vienna"],
  answer: "Paris",
  explanation: "UNESCO is headquartered in Paris, France.",
  hint: "France."
},

{
  subject: "General Aptitude",
  category: "General Awareness",
  question: "The headquarters of WHO is in:",
  options: ["Geneva", "Paris", "Rome", "New York"],
  answer: "Geneva",
  explanation: "The World Health Organization is headquartered in Geneva, Switzerland.",
  hint: "Switzerland."
},
// ======================================================
// LANGUAGE - 20
// ======================================================

{
  subject: "English",
  category: "Language",
  question: "Choose the correctly spelt word:",
  options: [
    "Accommodation",
    "Accomodation",
    "Acommodation",
    "Accommadation"
  ],
  answer: "Accommodation",
  explanation:
    "Accommodation is the correct spelling. It contains double 'c' and double 'm'.",
  hint: "Remember: ac + com + modation."
},

{
  subject: "English",
  category: "Language",
  question: "Choose the synonym of 'abundant':",
  options: [
    "Plentiful",
    "Scarce",
    "Limited",
    "Rare"
  ],
  answer: "Plentiful",
  explanation:
    "Abundant means existing in large quantities, so plentiful is the closest synonym.",
  hint: "Think: available in large amounts."
},

{
  subject: "English",
  category: "Language",
  question: "Choose the antonym of 'optimistic':",
  options: [
    "Pessimistic",
    "Hopeful",
    "Positive",
    "Confident"
  ],
  answer: "Pessimistic",
  explanation:
    "Optimistic means expecting favourable outcomes, while pessimistic means expecting unfavourable outcomes.",
  hint: "Opposite of expecting the best."
},

{
  subject: "English",
  category: "Language",
  question: "Choose the correct sentence:",
  options: [
    "She has lived here for five years.",
    "She has lived here since five years.",
    "She is living here since five years.",
    "She live here for five years."
  ],
  answer: "She has lived here for five years.",
  explanation:
    "'For' is used with a period of time, while 'since' is normally used with a starting point.",
  hint: "Five years is a duration."
},

{
  subject: "English",
  category: "Language",
  question: "Fill in the blank: He is good ___ mathematics.",
  options: [
    "at",
    "in",
    "on",
    "for"
  ],
  answer: "at",
  explanation:
    "The standard expression is 'good at' something.",
  hint: "Good ___ something."
},

{
  subject: "English",
  category: "Language",
  question: "Choose the correct article: She is ___ honest person.",
  options: [
    "an",
    "a",
    "the",
    "no article"
  ],
  answer: "an",
  explanation:
    "'Honest' begins with a vowel sound because the 'h' is silent, so 'an' is used.",
  hint: "Listen to the sound, not simply the first letter."
},

{
  subject: "English",
  category: "Language",
  question: "Identify the adjective in the sentence: 'The clever student answered quickly.'",
  options: [
    "clever",
    "student",
    "answered",
    "quickly"
  ],
  answer: "clever",
  explanation:
    "'Clever' describes the noun 'student', so it functions as an adjective.",
  hint: "Which word describes the student?"
},

{
  subject: "English",
  category: "Language",
  question: "Identify the adverb in the sentence: 'The child spoke softly.'",
  options: [
    "softly",
    "child",
    "spoke",
    "the"
  ],
  answer: "softly",
  explanation:
    "'Softly' modifies the verb 'spoke' and tells us how the child spoke.",
  hint: "How did the child speak?"
},

{
  subject: "English",
  category: "Language",
  question: "Choose the correct plural of 'criterion':",
  options: [
    "Criteria",
    "Criterions",
    "Criterions",
    "Criterias"
  ],
  answer: "Criteria",
  explanation:
    "'Criterion' is singular and 'criteria' is its standard plural form.",
  hint: "One criterion, many..."
},

{
  subject: "English",
  category: "Language",
  question: "What does the idiom 'break the ice' mean?",
  options: [
    "To make people feel more comfortable in a social situation",
    "To destroy something frozen",
    "To end a friendship",
    "To become angry"
  ],
  answer: "To make people feel more comfortable in a social situation",
  explanation:
    "'Break the ice' means to reduce initial tension or begin friendly interaction.",
  hint: "Think of starting a comfortable conversation."
},

{
  subject: "English",
  category: "Language",
  question: "What does 'once in a blue moon' mean?",
  options: [
    "Very rarely",
    "Every day",
    "Immediately",
    "Twice a month"
  ],
  answer: "Very rarely",
  explanation:
    "The expression 'once in a blue moon' describes something that happens very rarely.",
  hint: "Not something that happens often."
},

{
  subject: "English",
  category: "Language",
  question: "Choose the word closest in meaning to 'concise':",
  options: [
    "Brief",
    "Lengthy",
    "Confusing",
    "Ancient"
  ],
  answer: "Brief",
  explanation:
    "Concise means expressing something clearly using relatively few words.",
  hint: "Short and to the point."
},

{
  subject: "English",
  category: "Language",
  question: "Choose the correct form: Neither the teacher nor the students ___ ready.",
  options: [
    "are",
    "is",
    "was",
    "has"
  ],
  answer: "are",
  explanation:
    "With 'neither...nor', the verb generally agrees with the subject nearest to it. Here, 'students' is plural.",
  hint: "Look at the noun closest to the verb."
},

{
  subject: "English",
  category: "Language",
  question: "Choose the passive form of 'The committee approved the proposal.'",
  options: [
    "The proposal was approved by the committee.",
    "The proposal is approving the committee.",
    "The committee was approved by the proposal.",
    "The proposal has approve by the committee."
  ],
  answer: "The proposal was approved by the committee.",
  explanation:
    "In the passive voice, the object 'the proposal' becomes the grammatical subject and the past tense becomes 'was approved'.",
  hint: "Move 'the proposal' to the beginning."
},

{
  subject: "English",
  category: "Language",
  question: "Change into indirect speech: Ravi said, 'I am tired.'",
  options: [
    "Ravi said that he was tired.",
    "Ravi said that I am tired.",
    "Ravi says that he tired.",
    "Ravi said he is tired yesterday."
  ],
  answer: "Ravi said that he was tired.",
  explanation:
    "In reported speech with a past reporting verb, 'I' changes according to the speaker and 'am' normally changes to 'was'.",
  hint: "I → he; am → was."
},

{
  subject: "English",
  category: "Language",
  question: "Choose the correct word: The new rule will ___ all students.",
  options: [
    "affect",
    "effect",
    "effects",
    "effected"
  ],
  answer: "affect",
  explanation:
    "'Affect' is commonly used as a verb meaning to influence something.",
  hint: "You need a verb meaning 'influence'."
},

{
  subject: "English",
  category: "Language",
  question: "Which word is a conjunction?",
  options: [
    "Although",
    "Quickly",
    "Beautiful",
    "Teacher"
  ],
  answer: "Although",
  explanation:
    "'Although' is a subordinating conjunction used to connect a dependent clause with a main clause.",
  hint: "It connects clauses."
},

{
  subject: "English",
  category: "Language",
  question: "Choose the correct sentence:",
  options: [
    "Each of the students has a book.",
    "Each of the students have a book.",
    "Each of the student have a book.",
    "Each students has a book."
  ],
  answer: "Each of the students has a book.",
  explanation:
    "'Each' is treated as singular, so it takes the singular verb 'has'.",
  hint: "'Each' controls the verb."
},

{
  subject: "English",
  category: "Language",
  question: "What does the prefix 'anti-' generally mean?",
  options: [
    "Against",
    "Before",
    "Together",
    "Inside"
  ],
  answer: "Against",
  explanation:
    "The prefix 'anti-' generally indicates opposition to or action against something.",
  hint: "Think of 'anti-war'."
},

{
  subject: "English",
  category: "Language",
  question: "A person who can speak several languages is called:",
  options: [
    "Multilingual",
    "Monologue",
    "Anonymous",
    "Illiterate"
  ],
  answer: "Multilingual",
  explanation:
    "A multilingual person can use or speak more than one language.",
  hint: "Multi means many."
},

// ======================================================
// WRITING - 20
// ======================================================

{
  subject: "English",
  category: "Writing",
  question: "The main purpose of a topic sentence is to:",
  options: [
    "State the main idea of a paragraph",
    "End an entire book",
    "Provide a bibliography",
    "Give only statistical data"
  ],
  answer: "State the main idea of a paragraph",
  explanation:
    "A topic sentence introduces or expresses the central idea that the rest of the paragraph develops.",
  hint: "It tells the reader what the paragraph is about."
},

{
  subject: "English",
  category: "Writing",
  question: "A well-developed paragraph should normally have:",
  options: [
    "Unity and coherence",
    "Several unrelated ideas",
    "No central idea",
    "Only quotations"
  ],
  answer: "Unity and coherence",
  explanation:
    "Good paragraphs maintain a clear central idea and connect their sentences logically.",
  hint: "One idea with logical flow."
},

{
  subject: "English",
  category: "Writing",
  question: "Coherence in writing means:",
  options: [
    "Ideas are logically connected",
    "Every sentence is extremely long",
    "All sentences use difficult vocabulary",
    "No punctuation is used"
  ],
  answer: "Ideas are logically connected",
  explanation:
    "Coherence means that ideas and sentences fit together in a logical and understandable sequence.",
  hint: "The writing should flow."
},

{
  subject: "English",
  category: "Writing",
  question: "Which transition word is commonly used to show contrast?",
  options: [
    "However",
    "Therefore",
    "Furthermore",
    "Similarly"
  ],
  answer: "However",
  explanation:
    "'However' is commonly used to introduce a contrasting or opposing point.",
  hint: "Think: but."
},

{
  subject: "English",
  category: "Writing",
  question: "Which transition word normally indicates a result or conclusion?",
  options: [
    "Therefore",
    "Meanwhile",
    "Although",
    "Similarly"
  ],
  answer: "Therefore",
  explanation:
    "'Therefore' introduces a result, inference or conclusion based on what came before.",
  hint: "Because of this..."
},

{
  subject: "English",
  category: "Writing",
  question: "The thesis statement of an essay usually presents:",
  options: [
    "The central argument or main idea",
    "Every reference in full",
    "Only the title",
    "The writer's address"
  ],
  answer: "The central argument or main idea",
  explanation:
    "A thesis statement tells the reader the central claim, argument or controlling idea of an essay.",
  hint: "The essay's main claim."
},

{
  subject: "English",
  category: "Writing",
  question: "The introduction of an academic essay should normally:",
  options: [
    "Introduce the topic and central argument",
    "Repeat the conclusion word for word",
    "Contain no relevant information",
    "List only references"
  ],
  answer: "Introduce the topic and central argument",
  explanation:
    "An introduction provides context and normally establishes the essay's central argument or purpose.",
  hint: "Tell the reader what is coming."
},

{
  subject: "English",
  category: "Writing",
  question: "The conclusion of an essay should primarily:",
  options: [
    "Bring the main argument to a clear close",
    "Introduce several completely new arguments",
    "Delete the thesis",
    "Provide unrelated examples"
  ],
  answer: "Bring the main argument to a clear close",
  explanation:
    "A conclusion draws together the main discussion and reinforces the overall argument without simply repeating everything.",
  hint: "Close the argument."
},

{
  subject: "English",
  category: "Writing",
  question: "Paraphrasing means:",
  options: [
    "Expressing another source's idea in your own words",
    "Copying a passage word for word without citation",
    "Deleting the original meaning",
    "Changing only the font"
  ],
  answer: "Expressing another source's idea in your own words",
  explanation:
    "Paraphrasing restates information using new wording and sentence structure while preserving the original meaning.",
  hint: "Same idea, your own wording."
},

{
  subject: "English",
  category: "Writing",
  question: "A summary should:",
  options: [
    "Present the main points in a shorter form",
    "Always be longer than the original",
    "Include every minor detail",
    "Change the original argument completely"
  ],
  answer: "Present the main points in a shorter form",
  explanation:
    "A summary condenses material by presenting its most important ideas without reproducing all details.",
  hint: "Short version of the main ideas."
},

{
  subject: "English",
  category: "Writing",
  question: "Plagiarism occurs when a writer:",
  options: [
    "Uses another person's work without proper acknowledgement",
    "Cites a source correctly",
    "Develops an original argument",
    "Proofreads an essay"
  ],
  answer: "Uses another person's work without proper acknowledgement",
  explanation:
    "Plagiarism involves presenting another person's words or ideas as one's own without appropriate acknowledgement.",
  hint: "Using someone's work without credit."
},

{
  subject: "English",
  category: "Writing",
  question: "A citation is used mainly to:",
  options: [
    "Acknowledge the source of information or ideas",
    "Increase the word count",
    "Replace the essay title",
    "Avoid paragraphing"
  ],
  answer: "Acknowledge the source of information or ideas",
  explanation:
    "Citations identify sources and allow readers to see where particular information, evidence or ideas originated.",
  hint: "Give credit to the source."
},

{
  subject: "English",
  category: "Writing",
  question: "Proofreading is primarily done to:",
  options: [
    "Find and correct errors in a written text",
    "Choose the research topic",
    "Conduct an interview",
    "Collect survey responses"
  ],
  answer: "Find and correct errors in a written text",
  explanation:
    "Proofreading is the final checking process for spelling, grammar, punctuation and similar errors.",
  hint: "Final error check."
},

{
  subject: "English",
  category: "Writing",
  question: "Editing differs from basic proofreading because editing often focuses more on:",
  options: [
    "Clarity, structure and expression",
    "Counting pages only",
    "Changing the author's name",
    "Printing the document"
  ],
  answer: "Clarity, structure and expression",
  explanation:
    "Editing may involve improving organisation, clarity and style, while proofreading focuses more narrowly on surface errors.",
  hint: "Improving the writing itself."
},

{
  subject: "English",
  category: "Writing",
  question: "Which sentence is most appropriate for formal academic writing?",
  options: [
    "The evidence suggests that the policy had limited success.",
    "This policy was kinda useless.",
    "The policy totally sucked.",
    "You know, the policy wasn't great."
  ],
  answer: "The evidence suggests that the policy had limited success.",
  explanation:
    "Academic writing generally uses precise, evidence-based and relatively formal language.",
  hint: "Choose the professional and evidence-based sentence."
},

{
  subject: "English",
  category: "Writing",
  question: "Which is the clearest sentence?",
  options: [
    "The committee approved the proposal after reviewing the evidence.",
    "The proposal, being a thing, was sort of approved in a way.",
    "The committee, which was there, did the thing.",
    "After stuff happened, approval occurred somehow."
  ],
  answer: "The committee approved the proposal after reviewing the evidence.",
  explanation:
    "Effective writing communicates the actor, action and context clearly and directly.",
  hint: "Choose precision over vague language."
},

{
  subject: "English",
  category: "Writing",
  question: "An argumentative essay normally requires the writer to:",
  options: [
    "Present and support a claim",
    "List unrelated facts only",
    "Avoid all evidence",
    "Write without a central position"
  ],
  answer: "Present and support a claim",
  explanation:
    "Argumentative writing develops a position and supports it with reasons and relevant evidence.",
  hint: "Claim + evidence."
},

{
  subject: "English",
  category: "Writing",
  question: "Evidence in an academic argument is mainly used to:",
  options: [
    "Support claims",
    "Replace all reasoning",
    "Make sentences longer",
    "Avoid a conclusion"
  ],
  answer: "Support claims",
  explanation:
    "Evidence strengthens an argument by providing support for the claims being made.",
  hint: "Why should the reader believe your claim?"
},

{
  subject: "English",
  category: "Writing",
  question: "A counterargument is:",
  options: [
    "An argument that challenges or differs from the writer's position",
    "The title of the essay",
    "A spelling mistake",
    "The bibliography"
  ],
  answer: "An argument that challenges or differs from the writer's position",
  explanation:
    "A counterargument presents a competing position that a writer may acknowledge and respond to.",
  hint: "The other side of the argument."
},

{
  subject: "English",
  category: "Writing",
  question: "Which practice improves clarity in writing?",
  options: [
    "Using precise and direct language",
    "Adding unnecessary words",
    "Repeating every sentence",
    "Using vague expressions whenever possible"
  ],
  answer: "Using precise and direct language",
  explanation:
    "Clear writing generally uses precise words, direct sentence structures and only as much detail as necessary.",
  hint: "Say exactly what you mean."
},
// ======================================================
// COMPARATIVE POLITICS - 20
// ======================================================

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Comparative politics primarily involves the study of:",
  options: [
    "Political systems across different countries and societies",
    "Only international wars",
    "Only political philosophy",
    "Only public finance"
  ],
  answer: "Political systems across different countries and societies",
  explanation:
    "Comparative politics compares political institutions, processes and behaviour across different political systems.",
  hint: "Compare political systems."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "The traditional approach to comparative politics focused mainly on:",
  options: [
    "Formal political institutions",
    "Voting behaviour only",
    "Political psychology only",
    "Statistical modelling only"
  ],
  answer: "Formal political institutions",
  explanation:
    "Traditional comparative politics concentrated heavily on constitutions, legislatures, executives and other formal institutions.",
  hint: "Constitutions and institutions."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "The behavioural approach in comparative politics emphasises:",
  options: [
    "Actual political behaviour",
    "Only constitutional documents",
    "Only political philosophy",
    "Only historical rulers"
  ],
  answer: "Actual political behaviour",
  explanation:
    "Behaviouralism shifted attention toward observable political behaviour, attitudes, voting and participation.",
  hint: "What people actually do politically."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "The political system approach is strongly associated with:",
  options: [
    "David Easton",
    "John Rawls",
    "Karl Marx",
    "Jeremy Bentham"
  ],
  answer: "David Easton",
  explanation:
    "David Easton developed an influential systems approach for analysing political life.",
  hint: "Inputs, outputs and feedback."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "In David Easton's political system, demands and support are called:",
  options: [
    "Inputs",
    "Outputs",
    "Institutions",
    "Capabilities"
  ],
  answer: "Inputs",
  explanation:
    "Easton described demands and support entering the political system as inputs.",
  hint: "They enter the system."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "In Easton's model, public policies and decisions are:",
  options: [
    "Outputs",
    "Inputs",
    "Demands",
    "Environmental pressures only"
  ],
  answer: "Outputs",
  explanation:
    "Political authorities process inputs and produce authoritative decisions and policies as outputs.",
  hint: "What comes out of the system."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "The structural-functional approach is strongly associated with:",
  options: [
    "Gabriel Almond",
    "Thomas Hobbes",
    "John Locke",
    "Robert Nozick"
  ],
  answer: "Gabriel Almond",
  explanation:
    "Gabriel Almond used structural-functional analysis to compare the structures and functions of political systems.",
  hint: "Almond and comparative politics."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Political socialisation is classified by Almond as primarily an:",
  options: [
    "Input function",
    "Output function",
    "Judicial function only",
    "Economic output"
  ],
  answer: "Input function",
  explanation:
    "Political socialisation and recruitment are among the input functions identified in structural-functional analysis.",
  hint: "Citizens enter political life."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Interest articulation refers to:",
  options: [
    "Expression of political demands and interests",
    "Implementation of court judgments",
    "Collection of taxes only",
    "Appointment of judges"
  ],
  answer: "Expression of political demands and interests",
  explanation:
    "Interest articulation occurs when individuals and groups express their needs and demands to the political system.",
  hint: "Expressing demands."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Interest aggregation refers to:",
  options: [
    "Combining different interests into broader policy alternatives",
    "Preventing citizens from expressing interests",
    "Removing political parties",
    "Conducting a census"
  ],
  answer: "Combining different interests into broader policy alternatives",
  explanation:
    "Interest aggregation brings different demands together and converts them into broader programmes or policy choices.",
  hint: "Many demands become broader programmes."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "A parliamentary system normally has:",
  options: [
    "A close relationship between executive and legislature",
    "Complete separation of executive and legislature",
    "No legislature",
    "No political parties"
  ],
  answer: "A close relationship between executive and legislature",
  explanation:
    "In parliamentary government, the executive normally emerges from and remains responsible to the legislature.",
  hint: "Executive comes from Parliament."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "A presidential system is generally characterised by:",
  options: [
    "Separation of executive and legislative authority",
    "Fusion of all branches",
    "Absence of an executive",
    "Hereditary executive power"
  ],
  answer: "Separation of executive and legislative authority",
  explanation:
    "Presidential systems normally provide separate electoral and constitutional bases for the executive and legislature.",
  hint: "Think United States."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Federalism constitutionally divides power between:",
  options: [
    "Different levels of government",
    "Only political parties",
    "Judges and voters",
    "Government and corporations"
  ],
  answer: "Different levels of government",
  explanation:
    "A federal system constitutionally distributes governmental authority between national and regional governments.",
  hint: "Centre plus regional units."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "A unitary system generally concentrates ultimate constitutional authority in:",
  options: [
    "The central government",
    "Independent regional sovereign states",
    "Private companies",
    "International organisations"
  ],
  answer: "The central government",
  explanation:
    "In a unitary system, ultimate constitutional authority rests with the central level even when powers are decentralised.",
  hint: "One ultimate constitutional centre."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "A two-party system is one in which:",
  options: [
    "Two major parties dominate political competition",
    "Only two parties are legally allowed in every case",
    "Political parties are prohibited",
    "Every citizen forms a party"
  ],
  answer: "Two major parties dominate political competition",
  explanation:
    "A two-party system is characterised by two major parties being the principal competitors for governmental power.",
  hint: "Dominance, not necessarily only two existing parties."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "A multi-party system is characterised by:",
  options: [
    "Several significant political parties",
    "No political parties",
    "Only one legal candidate",
    "Military government"
  ],
  answer: "Several significant political parties",
  explanation:
    "Multi-party systems contain several parties capable of significantly influencing electoral and governmental competition.",
  hint: "More than two important competitors."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Political development generally refers to changes in:",
  options: [
    "Political institutions, participation and governing capacity",
    "Climate alone",
    "Population alone",
    "Military technology alone"
  ],
  answer: "Political institutions, participation and governing capacity",
  explanation:
    "Political development concerns changes in institutional capacity, political participation and the organisation of political authority.",
  hint: "Development of the political system."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Political culture refers to:",
  options: [
    "Orientations and attitudes toward politics",
    "Only government buildings",
    "Only election laws",
    "Only political speeches"
  ],
  answer: "Orientations and attitudes toward politics",
  explanation:
    "Political culture consists of beliefs, values and orientations that people hold toward political objects and processes.",
  hint: "How people think and feel about politics."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Almond and Verba are famous for their study of:",
  options: [
    "Civic culture",
    "Historical materialism",
    "Utilitarianism",
    "Bureaucratic management"
  ],
  answer: "Civic culture",
  explanation:
    "Gabriel Almond and Sidney Verba examined political culture in their influential work The Civic Culture.",
  hint: "Political culture study."
},

{
  subject: "Political Science",
  category: "Comparative Politics",
  question: "Political recruitment refers to the process through which:",
  options: [
    "Individuals are selected for political roles",
    "Taxes are collected",
    "Borders are created",
    "Courts interpret laws"
  ],
  answer: "Individuals are selected for political roles",
  explanation:
    "Political recruitment concerns the selection and movement of individuals into political offices and leadership roles.",
  hint: "Who enters political leadership?"
},

// ======================================================
// POLITICAL SOCIOLOGY - 20
// ======================================================

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Political sociology mainly studies the relationship between:",
  options: [
    "Society and politics",
    "Chemistry and physics",
    "Geography and astronomy",
    "Medicine and biology"
  ],
  answer: "Society and politics",
  explanation:
    "Political sociology examines how social structures, groups and identities interact with political power and institutions.",
  hint: "Politics inside society."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Power is commonly understood as the ability to:",
  options: [
    "Influence the behaviour of others",
    "Avoid every social relationship",
    "Remove all institutions",
    "Eliminate communication"
  ],
  answer: "Influence the behaviour of others",
  explanation:
    "Power generally refers to the capacity of individuals or groups to influence actions, decisions or outcomes.",
  hint: "Getting others to act."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Max Weber defined the state in relation to its claim to the legitimate use of:",
  options: [
    "Physical force",
    "Religious doctrine",
    "Private property",
    "International trade"
  ],
  answer: "Physical force",
  explanation:
    "Weber described the modern state as claiming a monopoly of the legitimate use of physical force within a given territory.",
  hint: "Legitimate coercion."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "According to Weber, authority differs from mere power because authority is considered:",
  options: [
    "Legitimate",
    "Always violent",
    "Always hereditary",
    "Economically equal"
  ],
  answer: "Legitimate",
  explanation:
    "Authority is power regarded as legitimate by those who obey it.",
  hint: "Accepted power."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Weber identified how many ideal types of legitimate authority?",
  options: [
    "Three",
    "Two",
    "Four",
    "Five"
  ],
  answer: "Three",
  explanation:
    "Weber identified traditional, charismatic and legal-rational authority.",
  hint: "Traditional + charismatic + legal-rational."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Traditional authority derives legitimacy mainly from:",
  options: [
    "Established customs and traditions",
    "Written examinations",
    "Scientific experiments",
    "Public opinion surveys"
  ],
  answer: "Established customs and traditions",
  explanation:
    "Traditional authority rests upon belief in the legitimacy of long-established customs and inherited practices.",
  hint: "Because it has long been done this way."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Charismatic authority rests primarily upon:",
  options: [
    "Perceived extraordinary qualities of a leader",
    "Written rules",
    "Ancient customs only",
    "Property ownership"
  ],
  answer: "Perceived extraordinary qualities of a leader",
  explanation:
    "Charismatic authority is based on followers' devotion to the exceptional qualities attributed to a leader.",
  hint: "Personality-based legitimacy."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Legal-rational authority is based mainly on:",
  options: [
    "Formal rules and laws",
    "Personal loyalty alone",
    "Family inheritance",
    "Religious miracles"
  ],
  answer: "Formal rules and laws",
  explanation:
    "Legal-rational authority rests upon belief in formally established rules and offices.",
  hint: "Modern bureaucracy."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Elite theory argues that political power tends to be concentrated in:",
  options: [
    "A relatively small group",
    "Every citizen equally at all times",
    "Foreign governments only",
    "No identifiable group"
  ],
  answer: "A relatively small group",
  explanation:
    "Elite theorists emphasise that a minority often occupies strategically important positions of political and social power.",
  hint: "The few rather than the many."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "The idea of the 'circulation of elites' is associated with:",
  options: [
    "Vilfredo Pareto",
    "Karl Marx",
    "John Locke",
    "David Easton"
  ],
  answer: "Vilfredo Pareto",
  explanation:
    "Pareto argued that elites continuously change as new groups rise and older elites decline.",
  hint: "One elite replaces another."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "The 'iron law of oligarchy' is associated with:",
  options: [
    "Robert Michels",
    "Gaetano Mosca",
    "Max Weber",
    "Gabriel Almond"
  ],
  answer: "Robert Michels",
  explanation:
    "Michels argued that large organisations tend to become dominated by a relatively small leadership group.",
  hint: "Organisation tends toward oligarchy."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Political socialisation refers to the process by which individuals:",
  options: [
    "Develop political values and orientations",
    "Lose all political knowledge",
    "Automatically become politicians",
    "Join the military"
  ],
  answer: "Develop political values and orientations",
  explanation:
    "Political socialisation is the process through which people acquire political attitudes, beliefs and patterns of behaviour.",
  hint: "Learning politics."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Which is commonly an important agent of political socialisation?",
  options: [
    "Family",
    "Weather",
    "Soil",
    "Mineral deposits"
  ],
  answer: "Family",
  explanation:
    "Family is an important early source through which individuals may acquire political attitudes and values.",
  hint: "The first social institution for many people."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Political participation includes activities such as:",
  options: [
    "Voting and campaigning",
    "Sleeping",
    "Biological growth",
    "Weather forecasting"
  ],
  answer: "Voting and campaigning",
  explanation:
    "Political participation includes actions through which citizens seek to influence political decisions or leadership.",
  hint: "Citizens taking part in politics."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Conventional political participation commonly includes:",
  options: [
    "Voting in elections",
    "Military coups",
    "Political assassination",
    "Armed rebellion"
  ],
  answer: "Voting in elections",
  explanation:
    "Voting is a standard institutional and conventional form of political participation in democratic systems.",
  hint: "Normal democratic participation."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Political apathy refers to:",
  options: [
    "Low interest or involvement in politics",
    "Very high political participation",
    "Membership in several parties",
    "Holding political office"
  ],
  answer: "Low interest or involvement in politics",
  explanation:
    "Political apathy describes limited political interest, concern or participation.",
  hint: "Not interested in politics."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Civil society generally refers to:",
  options: [
    "Voluntary associations and organisations outside the state",
    "Government ministries only",
    "The armed forces only",
    "The judiciary alone"
  ],
  answer: "Voluntary associations and organisations outside the state",
  explanation:
    "Civil society includes associations, organisations and networks operating between individuals, the state and often the market.",
  hint: "Groups outside formal government."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "A social movement usually seeks to:",
  options: [
    "Promote or resist social and political change",
    "Perform only government administration",
    "Replace every social institution",
    "Prevent all collective action"
  ],
  answer: "Promote or resist social and political change",
  explanation:
    "Social movements involve collective action organised around demands for change or resistance to change.",
  hint: "Collective action."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Political legitimacy refers to:",
  options: [
    "Acceptance of political authority as rightful",
    "Possession of military weapons only",
    "Economic growth only",
    "Population size"
  ],
  answer: "Acceptance of political authority as rightful",
  explanation:
    "Legitimacy exists when political authority is broadly regarded as appropriate, justified or rightful.",
  hint: "Why people accept authority."
},

{
  subject: "Political Science",
  category: "Political Sociology",
  question: "Social class can influence political behaviour through differences in:",
  options: [
    "Interests, resources and opportunities",
    "Planetary movement",
    "Climate zones only",
    "Biological species"
  ],
  answer: "Interests, resources and opportunities",
  explanation:
    "Class position can shape political interests, access to resources, participation and voting behaviour.",
  hint: "Social position can affect politics."
},
// ======================================================
// POLITICAL THOUGHT - 20
// ======================================================

{
  subject: "Political Science",
  category: "Political Thought",
  question: "According to Plato, the ideal state should be ruled by:",
  options: [
    "Philosopher kings",
    "Merchants",
    "Military commanders alone",
    "Hereditary landlords"
  ],
  answer: "Philosopher kings",
  explanation:
    "Plato believed that philosophers should rule because they possess knowledge of justice and the good.",
  hint: "Think of Plato's Republic."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Plato discussed his theory of justice mainly in:",
  options: [
    "The Republic",
    "The Prince",
    "Leviathan",
    "Two Treatises of Government"
  ],
  answer: "The Republic",
  explanation:
    "The Republic is Plato's major work dealing with justice, education and the ideal political order.",
  hint: "Plato's best-known political dialogue."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Aristotle described human beings as:",
  options: [
    "Political animals",
    "Economic machines",
    "Naturally isolated individuals",
    "Completely apolitical beings"
  ],
  answer: "Political animals",
  explanation:
    "Aristotle argued that human beings naturally live in political communities and achieve their development within them.",
  hint: "Man is by nature a..."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "According to Aristotle, the best practicable form of government is:",
  options: [
    "Polity",
    "Tyranny",
    "Oligarchy",
    "Despotism"
  ],
  answer: "Polity",
  explanation:
    "Aristotle regarded polity as a balanced constitutional government combining elements of democracy and oligarchy.",
  hint: "A mixed and moderate constitution."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Who wrote The Prince?",
  options: [
    "Niccolo Machiavelli",
    "Thomas Hobbes",
    "John Locke",
    "Jean-Jacques Rousseau"
  ],
  answer: "Niccolo Machiavelli",
  explanation:
    "Machiavelli wrote The Prince, a major work examining political power, leadership and statecraft.",
  hint: "Italian Renaissance thinker."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Machiavelli is important in political thought because he:",
  options: [
    "Analysed politics largely in terms of power and practical statecraft",
    "Rejected the existence of states",
    "Developed utilitarianism",
    "Created the veil of ignorance"
  ],
  answer: "Analysed politics largely in terms of power and practical statecraft",
  explanation:
    "Machiavelli examined political action in practical terms and helped separate political analysis from traditional moral and religious approaches.",
  hint: "Politics as it actually operates."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "In Hobbes's state of nature, human life is insecure mainly because:",
  options: [
    "There is no common authority to enforce order",
    "A democratic government is too powerful",
    "Private property has been abolished",
    "International organisations control individuals"
  ],
  answer: "There is no common authority to enforce order",
  explanation:
    "Hobbes argued that without a common sovereign authority, insecurity and conflict dominate the state of nature.",
  hint: "No sovereign exists."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Hobbes believed that political order required:",
  options: [
    "A powerful sovereign",
    "The abolition of government",
    "Direct democracy in every matter",
    "Complete individual independence"
  ],
  answer: "A powerful sovereign",
  explanation:
    "Hobbes believed individuals establish sovereign authority to escape the insecurity of the state of nature.",
  hint: "Think of Leviathan."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "John Locke identified the natural rights of individuals as:",
  options: [
    "Life, liberty and property",
    "Equality, fraternity and sovereignty",
    "Work, food and education",
    "Power, authority and legitimacy"
  ],
  answer: "Life, liberty and property",
  explanation:
    "Locke argued that individuals possess natural rights to life, liberty and property.",
  hint: "Three famous Lockean rights."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "According to Locke, people may resist a government when it:",
  options: [
    "Violates their natural rights",
    "Conducts regular elections",
    "Protects individual liberty",
    "Operates under law"
  ],
  answer: "Violates their natural rights",
  explanation:
    "Locke argued that government exists through consent to protect natural rights and may be resisted if it systematically violates them.",
  hint: "Government is not absolute."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Rousseau's concept of the general will refers to:",
  options: [
    "The common good of the political community",
    "The personal wishes of the ruler",
    "The interests of the wealthiest citizens",
    "The decisions of foreign governments"
  ],
  answer: "The common good of the political community",
  explanation:
    "Rousseau's general will represents the collective orientation toward the common good rather than merely private interests.",
  hint: "Not simply everyone's private wishes."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Who wrote The Social Contract?",
  options: [
    "Jean-Jacques Rousseau",
    "John Stuart Mill",
    "Jeremy Bentham",
    "Karl Marx"
  ],
  answer: "Jean-Jacques Rousseau",
  explanation:
    "Rousseau published The Social Contract in 1762 and explored popular sovereignty and legitimate political authority.",
  hint: "Man is born free..."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Jeremy Bentham is most closely associated with:",
  options: [
    "Utilitarianism",
    "Idealism",
    "Anarchism",
    "Fascism"
  ],
  answer: "Utilitarianism",
  explanation:
    "Bentham developed utilitarianism, judging actions and policies according to their contribution to happiness or utility.",
  hint: "Greatest happiness principle."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "J.S. Mill's harm principle argues that individual liberty may be restricted mainly to:",
  options: [
    "Prevent harm to others",
    "Enforce every social custom",
    "Prevent unpopular opinions",
    "Increase government authority"
  ],
  answer: "Prevent harm to others",
  explanation:
    "Mill argued that coercion against an individual is principally justified to prevent harm to other people.",
  hint: "Your freedom ends where harm to others begins."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Karl Marx viewed the state in a capitalist society primarily in relation to:",
  options: [
    "Class relations",
    "Climate",
    "Language alone",
    "Religious rituals alone"
  ],
  answer: "Class relations",
  explanation:
    "Marxist political thought connects the state with the structure of class relations and the capitalist mode of production.",
  hint: "Think bourgeoisie and proletariat."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Marx used the term alienation mainly to describe:",
  options: [
    "Workers becoming separated from their labour and its products",
    "States leaving international organisations",
    "Citizens changing nationality",
    "Political parties losing elections"
  ],
  answer: "Workers becoming separated from their labour and its products",
  explanation:
    "Marx argued that capitalist production alienates workers from the products they create, the labour process and aspects of human potential.",
  hint: "Worker and labour."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Antonio Gramsci's concept of hegemony emphasises:",
  options: [
    "Leadership maintained partly through consent and ideas",
    "Military power alone",
    "Geographical expansion alone",
    "Complete absence of ideology"
  ],
  answer: "Leadership maintained partly through consent and ideas",
  explanation:
    "Gramsci explained how dominant groups maintain power not only through coercion but also by gaining social and cultural consent.",
  hint: "Power through consent as well as force."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "John Rawls described his theory as:",
  options: [
    "Justice as fairness",
    "Justice as utility",
    "Justice as domination",
    "Justice as tradition"
  ],
  answer: "Justice as fairness",
  explanation:
    "Rawls developed the idea of justice as fairness through principles that free and equal persons would choose under fair conditions.",
  hint: "Rawls's famous phrase."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Robert Nozick defended the idea of:",
  options: [
    "A minimal state",
    "An absolute monarchy",
    "A centrally planned socialist state",
    "A stateless tribal society"
  ],
  answer: "A minimal state",
  explanation:
    "Nozick argued that the legitimate state should be limited mainly to protecting individuals against force, theft and fraud and enforcing contracts.",
  hint: "Very limited government."
},

{
  subject: "Political Science",
  category: "Political Thought",
  question: "Mary Wollstonecraft is especially important for her defence of:",
  options: [
    "Women's equality and education",
    "Absolute monarchy",
    "Colonial rule",
    "Military government"
  ],
  answer: "Women's equality and education",
  explanation:
    "Wollstonecraft argued for women's rational equality and education, especially in A Vindication of the Rights of Woman.",
  hint: "Early feminist political thought."
},

// ======================================================
// INDIAN POLITICAL THOUGHT - 20
// ======================================================

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "The Arthashastra is traditionally associated with:",
  options: [
    "Kautilya",
    "Manu",
    "Ashoka",
    "Kalidasa"
  ],
  answer: "Kautilya",
  explanation:
    "The Arthashastra is traditionally attributed to Kautilya, also known as Chanakya, and discusses statecraft, administration and political strategy.",
  hint: "Advisor associated with Chandragupta Maurya."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Kautilya's Saptanga theory describes:",
  options: [
    "Seven elements of the state",
    "Seven forms of democracy",
    "Seven fundamental rights",
    "Seven stages of revolution"
  ],
  answer: "Seven elements of the state",
  explanation:
    "The Saptanga theory understands the state through seven constituent elements, including the ruler, ministers, territory and treasury.",
  hint: "Sapta means seven."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Raja Ram Mohan Roy strongly campaigned against:",
  options: [
    "Sati",
    "Modern education",
    "Freedom of the press",
    "Women's education"
  ],
  answer: "Sati",
  explanation:
    "Raja Ram Mohan Roy was a major social reformer who campaigned against the practice of sati.",
  hint: "Major nineteenth-century social reform."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Raja Ram Mohan Roy is associated with the establishment of:",
  options: [
    "Brahmo Samaj",
    "Arya Samaj",
    "Servants of India Society",
    "Forward Bloc"
  ],
  answer: "Brahmo Samaj",
  explanation:
    "Raja Ram Mohan Roy founded the Brahmo Sabha in 1828, which developed into the Brahmo Samaj.",
  hint: "Bengal reform movement."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Swami Vivekananda emphasised the importance of:",
  options: [
    "Human development and service",
    "Colonial domination",
    "Caste discrimination",
    "Political isolation"
  ],
  answer: "Human development and service",
  explanation:
    "Vivekananda emphasised human dignity, education, spiritual development and service to humanity.",
  hint: "Service to humanity."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Who wrote Hind Swaraj?",
  options: [
    "Mahatma Gandhi",
    "Jawaharlal Nehru",
    "B.R. Ambedkar",
    "M.N. Roy"
  ],
  answer: "Mahatma Gandhi",
  explanation:
    "Gandhi wrote Hind Swaraj in 1909, presenting his critique of modern civilisation and his understanding of swaraj.",
  hint: "Gandhi's critique of modern civilisation."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Gandhi's concept of Satyagraha is based primarily on:",
  options: [
    "Truth and non-violence",
    "Military force",
    "Political secrecy",
    "Economic competition"
  ],
  answer: "Truth and non-violence",
  explanation:
    "Satyagraha involves resistance grounded in truth, moral courage and non-violence.",
  hint: "Satya + moral resistance."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Gandhi's idea of Swaraj included:",
  options: [
    "Self-rule and self-discipline",
    "Only territorial expansion",
    "Absolute rule by a monarch",
    "Permanent colonial administration"
  ],
  answer: "Self-rule and self-discipline",
  explanation:
    "For Gandhi, swaraj went beyond political independence and also involved individual and collective self-rule.",
  hint: "Rule over oneself as well as political freedom."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Gandhi's theory of trusteeship was mainly concerned with:",
  options: [
    "The social responsibility of wealth",
    "Military administration",
    "Judicial appointments",
    "International borders"
  ],
  answer: "The social responsibility of wealth",
  explanation:
    "Trusteeship proposed that those possessing wealth should regard it as held in trust for the welfare of society.",
  hint: "Wealth carries responsibility."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "B.R. Ambedkar considered which problem a major obstacle to social democracy in India?",
  options: [
    "Caste inequality",
    "Universal education",
    "Constitutional government",
    "Industrial development"
  ],
  answer: "Caste inequality",
  explanation:
    "Ambedkar regarded caste as a deeply unequal social order incompatible with liberty, equality and fraternity.",
  hint: "Annihilation of Caste."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Who wrote Annihilation of Caste?",
  options: [
    "B.R. Ambedkar",
    "Mahatma Gandhi",
    "Jawaharlal Nehru",
    "Rabindranath Tagore"
  ],
  answer: "B.R. Ambedkar",
  explanation:
    "Annihilation of Caste is one of Ambedkar's most important critiques of caste hierarchy.",
  hint: "Ambedkar's famous critique."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Ambedkar's understanding of social democracy emphasised:",
  options: [
    "Liberty, equality and fraternity",
    "Monarchy, aristocracy and empire",
    "Force, expansion and conquest",
    "Isolation, hierarchy and privilege"
  ],
  answer: "Liberty, equality and fraternity",
  explanation:
    "Ambedkar repeatedly stressed liberty, equality and fraternity as essential principles of a democratic social order.",
  hint: "Three democratic principles."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Jawaharlal Nehru strongly supported:",
  options: [
    "Scientific temper",
    "Religious rule of the state",
    "Hereditary monarchy",
    "Political isolation from science"
  ],
  answer: "Scientific temper",
  explanation:
    "Nehru regarded scientific thinking, rational inquiry and modern institutions as important for India's development.",
  hint: "Reason and modern science."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Nehru's economic vision after independence was closely associated with:",
  options: [
    "Planned development",
    "Complete abolition of the state",
    "Pure laissez-faire without planning",
    "Return to feudalism"
  ],
  answer: "Planned development",
  explanation:
    "Nehru supported economic planning, industrialisation and a significant developmental role for the state.",
  hint: "Five-Year Plans."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Rabindranath Tagore was particularly critical of aggressive:",
  options: [
    "Nationalism",
    "Education",
    "Humanism",
    "Cultural exchange"
  ],
  answer: "Nationalism",
  explanation:
    "Tagore criticised aggressive and mechanical forms of nationalism while promoting humanism and international understanding.",
  hint: "He warned against narrow nationalism."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Tagore's political and social thought strongly emphasised:",
  options: [
    "Universal humanism",
    "Racial hierarchy",
    "Military dictatorship",
    "Political violence"
  ],
  answer: "Universal humanism",
  explanation:
    "Tagore emphasised human freedom, cultural openness and a universal human identity beyond narrow political divisions.",
  hint: "Humanity beyond borders."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "M.N. Roy eventually developed the philosophy known as:",
  options: [
    "Radical Humanism",
    "Integral Humanism",
    "Utilitarianism",
    "Fabian Socialism"
  ],
  answer: "Radical Humanism",
  explanation:
    "M.N. Roy moved beyond orthodox Marxism and developed Radical Humanism, emphasising reason and individual freedom.",
  hint: "Roy + Humanism."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Who gave the idea of Integral Humanism?",
  options: [
    "Deendayal Upadhyaya",
    "M.N. Roy",
    "B.R. Ambedkar",
    "Ram Manohar Lohia"
  ],
  answer: "Deendayal Upadhyaya",
  explanation:
    "Deendayal Upadhyaya developed Integral Humanism as a framework for social and political thought.",
  hint: "Do not confuse it with M.N. Roy's Radical Humanism."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Ram Manohar Lohia is most closely associated with:",
  options: [
    "Socialism",
    "Absolute monarchy",
    "Colonialism",
    "Fascism"
  ],
  answer: "Socialism",
  explanation:
    "Lohia was an important Indian socialist thinker who addressed inequality, caste, gender and decentralisation.",
  hint: "Indian socialist tradition."
},

{
  subject: "Political Science",
  category: "Indian Political Thought",
  question: "Jyotirao Phule strongly criticised:",
  options: [
    "Caste oppression and social inequality",
    "Women's education",
    "Education of lower castes",
    "Social reform"
  ],
  answer: "Caste oppression and social inequality",
  explanation:
    "Jyotirao Phule challenged caste domination and worked for the education and emancipation of marginalised communities and women.",
  hint: "Anti-caste social reformer."
},
{
  subject: "Political Science",
  category: "Political Theory",
  question: "Who wrote A Theory of Justice?",
  options: [
    "John Rawls",
    "Robert Nozick",
    "Karl Marx",
    "Jeremy Bentham",
  ],
  answer: "John Rawls",
  explanation:
    "John Rawls published A Theory of Justice in 1971 and developed the idea of justice as fairness.",
  wrongExplanations: {
    "Robert Nozick":
      "Robert Nozick wrote Anarchy, State, and Utopia and criticised Rawls.",
    "Karl Marx":
      "Karl Marx focused mainly on class relations, capitalism and historical materialism.",
    "Jeremy Bentham":
      "Jeremy Bentham is strongly associated with utilitarianism.",
  },
  hint: "Think of justice as fairness.",
}, 
);