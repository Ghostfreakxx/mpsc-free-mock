"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const questions = [
  {
    category: "ICT",
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Print Unit",
      "Control Program Unit",
    ],
    answer: "Central Processing Unit",
    explanation:
      "CPU means Central Processing Unit. It is called the brain of the computer because it processes instructions and controls the main operations of the system.",
    wrongExplanations: {
      "Computer Power Unit":
        "Wrong. CPU is not related to power supply. Power is supplied by SMPS or battery, not CPU.",
      "Central Print Unit":
        "Wrong. Printing is related to printer devices, not the CPU.",
      "Control Program Unit":
        "Wrong. It sounds technical, but it is not the correct expansion of CPU.",
    },
    hint: "Use elimination. Remove options that sound unrelated to computer processing.",
  },
  {
  category: "ICT",
  question: "What does RAM stand for?",
  options: [
    "Random Access Memory",
    "Read Access Memory",
    "Rapid Access Machine",
    "Random Application Memory"
  ],
  answer: "Random Access Memory",
  explanation:
    "RAM stands for Random Access Memory and is used for temporary storage while a computer is running.",
  wrongExplanations: {
    "Read Access Memory": "This is not the correct expansion of RAM.",
    "Rapid Access Machine": "This is not a computer term.",
    "Random Application Memory": "This is an incorrect expansion."
  },
  hint:
    "RAM is the main temporary memory of a computer."
},

{
  category: "ICT",
  question: "Which of the following is an operating system?",
  options: [
    "Windows",
    "Google",
    "Intel",
    "Oracle"
  ],
  answer: "Windows",
  explanation:
    "Windows is an operating system developed by Microsoft.",
  wrongExplanations: {
    "Google": "Google is primarily a technology company and search engine.",
    "Intel": "Intel manufactures processors and chips.",
    "Oracle": "Oracle is mainly known for database software."
  },
  hint:
    "Think of software that manages a computer."
},

{
  category: "ICT",
  question: "What does URL stand for?",
  options: [
    "Uniform Resource Locator",
    "Universal Resource Link",
    "Uniform Record Locator",
    "Universal Record Link"
  ],
  answer: "Uniform Resource Locator",
  explanation:
    "A URL is the address used to locate a resource on the internet.",
  wrongExplanations: {
    "Universal Resource Link": "Incorrect expansion.",
    "Uniform Record Locator": "Incorrect expansion.",
    "Universal Record Link": "Incorrect expansion."
  },
  hint:
    "It is the web address of a page."
},

{
  category: "ICT",
  question: "Which device is used to print documents on paper?",
  options: [
    "Monitor",
    "Scanner",
    "Printer",
    "Keyboard"
  ],
  answer: "Printer",
  explanation:
    "A printer produces a hard copy of digital documents.",
  wrongExplanations: {
    "Monitor": "A monitor displays information on screen.",
    "Scanner": "A scanner converts physical documents into digital form.",
    "Keyboard": "A keyboard is used for input."
  },
  hint:
    "Think of hard copy output."
},

{
  category: "ICT",
  question: "Which company developed the Android operating system?",
  options: [
    "Apple",
    "Google",
    "Microsoft",
    "IBM"
  ],
  answer: "Google",
  explanation:
    "Android is developed and maintained by Google.",
  wrongExplanations: {
    "Apple": "Apple develops iOS, not Android.",
    "Microsoft": "Microsoft developed Windows Phone.",
    "IBM": "IBM is not the developer of Android."
  },
  hint:
    "Think of the company behind Gmail and YouTube."
},
  {
  category: "Reasoning",
  question: "If A = 1, B = 2, C = 3, then CAT = ?",
  options: [
    "24",
    "26",
    "23",
    "22"
  ],
  answer: "24",
  explanation:
    "C = 3, A = 1 and T = 20. Therefore 3 + 1 + 20 = 24.",
  wrongExplanations: {
    "26": "Incorrect addition.",
    "23": "One of the letter values has been counted incorrectly.",
    "22": "The total is too low."
  },
  hint:
    "Replace each letter with its alphabetical position."
},

{
  category: "Reasoning",
  question: "Find the odd one out.",
  options: [
    "Apple",
    "Mango",
    "Banana",
    "Carrot"
  ],
  answer: "Carrot",
  explanation:
    "Apple, Mango and Banana are fruits, while Carrot is a vegetable.",
  wrongExplanations: {
    "Apple": "Apple belongs to the fruit group.",
    "Mango": "Mango belongs to the fruit group.",
    "Banana": "Banana belongs to the fruit group."
  },
  hint:
    "Look for the item that belongs to a different category."
},

{
  category: "Reasoning",
  question: "Complete the series: 2, 4, 8, 16, ?",
  options: [
    "20",
    "24",
    "32",
    "36"
  ],
  answer: "32",
  explanation:
    "Each number is multiplied by 2. Therefore 16 × 2 = 32.",
  wrongExplanations: {
    "20": "The pattern is doubling, not adding.",
    "24": "The sequence does not increase by a fixed difference.",
    "36": "This does not follow the doubling pattern."
  },
  hint:
    "Check whether the numbers are being multiplied."
},

{
  category: "Reasoning",
  question: "If SOUTH is written as HTUOS, then EAST is written as:",
  options: [
    "TSAE",
    "SAET",
    "EAST",
    "AEST"
  ],
  answer: "TSAE",
  explanation:
    "The word is written in reverse order.",
  wrongExplanations: {
    "SAET": "The order is incorrect.",
    "EAST": "The word has not been reversed.",
    "AEST": "Letters are not fully reversed."
  },
  hint:
    "Look at the position of the first and last letters."
},

{
  category: "Reasoning",
  question: "A clock shows 3:00. What is the angle between the hour hand and minute hand?",
  options: [
    "90°",
    "60°",
    "45°",
    "120°"
  ],
  answer: "90°",
  explanation:
    "At 3:00 the minute hand is at 12 and the hour hand is at 3, forming a right angle.",
  wrongExplanations: {
    "60°": "Too small.",
    "45°": "This is not the angle at 3:00.",
    "120°": "Too large."
  },
  hint:
    "Think of a right angle."
},
{
  category: "Public Administration",
  question: "Who is known as the Father of Public Administration?",
  options: [
    "Woodrow Wilson",
    "Max Weber",
    "Herbert Simon",
    "Luther Gulick"
  ],
  answer: "Woodrow Wilson",
  explanation:
    "Woodrow Wilson is regarded as the Father of Public Administration because of his 1887 essay 'The Study of Administration'.",
  wrongExplanations: {
    "Max Weber": "Weber is famous for Bureaucratic Theory.",
    "Herbert Simon": "Simon is known for Decision-Making Theory.",
    "Luther Gulick": "Gulick is known for POSDCORB."
  },
  hint:
    "Think of the 1887 administration essay."
},

{
  category: "Public Administration",
  question: "Who proposed the concept of POSDCORB?",
  options: [
    "Max Weber",
    "Luther Gulick",
    "Woodrow Wilson",
    "Elton Mayo"
  ],
  answer: "Luther Gulick",
  explanation:
    "Luther Gulick developed POSDCORB to describe the functions of administration.",
  wrongExplanations: {
    "Max Weber": "Weber is associated with bureaucracy.",
    "Woodrow Wilson": "Wilson founded the discipline but not POSDCORB.",
    "Elton Mayo": "Mayo is known for the Hawthorne Studies."
  },
  hint:
    "POSDCORB = Gulick."
},

{
  category: "Public Administration",
  question: "What does the letter 'P' in POSDCORB stand for?",
  options: [
    "Planning",
    "Policy",
    "Personnel",
    "Procedure"
  ],
  answer: "Planning",
  explanation:
    "Planning is the first administrative function in POSDCORB.",
  wrongExplanations: {
    "Policy": "Policy is important but not part of POSDCORB.",
    "Personnel": "Personnel is not represented by P.",
    "Procedure": "Procedure is not the correct answer."
  },
  hint:
    "The first step in administration."
},
{
  category: "Political Science",
  question: "Who wrote the book 'The Republic'?",
  options: [
    "Aristotle",
    "Plato",
    "Socrates",
    "Rousseau"
  ],
  answer: "Plato",
  explanation:
    "Plato wrote The Republic, one of the most influential works in political philosophy.",
  wrongExplanations: {
    "Aristotle": "Aristotle wrote Politics.",
    "Socrates": "Socrates did not write books.",
    "Rousseau": "Rousseau wrote The Social Contract."
  },
  hint:
    "Think of Plato's ideal state."
},

{
  category: "Political Science",
  question: "Who is known as the Father of Political Science?",
  options: [
    "Plato",
    "Aristotle",
    "Machiavelli",
    "Locke"
  ],
  answer: "Aristotle",
  explanation:
    "Aristotle is known as the Father of Political Science because of his systematic study of politics and government.",
  wrongExplanations: {
    "Plato": "Plato was Aristotle's teacher.",
    "Machiavelli": "Machiavelli is associated with modern political thought.",
    "Locke": "Locke is known for liberalism."
  },
  hint:
    "Think of the scholar who classified constitutions."
},

{
  category: "Political Science",
  question: "Who wrote 'The Social Contract'?",
  options: [
    "John Locke",
    "Thomas Hobbes",
    "Jean-Jacques Rousseau",
    "Karl Marx"
  ],
  answer: "Jean-Jacques Rousseau",
  explanation:
    "Rousseau wrote The Social Contract in 1762 and introduced the concept of the General Will.",
  wrongExplanations: {
    "John Locke": "Locke wrote Two Treatises of Government.",
    "Thomas Hobbes": "Hobbes wrote Leviathan.",
    "Karl Marx": "Marx wrote The Communist Manifesto with Engels."
  },
  hint:
    "General Will = Rousseau."
},

{
  category: "Political Science",
  question: "Who wrote 'Leviathan'?",
  options: [
    "Thomas Hobbes",
    "John Locke",
    "Rousseau",
    "Bentham"
  ],
  answer: "Thomas Hobbes",
  explanation:
    "Thomas Hobbes wrote Leviathan in 1651 and argued for a strong sovereign authority.",
  wrongExplanations: {
    "John Locke": "Locke advocated limited government.",
    "Rousseau": "Rousseau wrote The Social Contract.",
    "Bentham": "Bentham is associated with Utilitarianism."
  },
  hint:
    "State of Nature and absolute sovereign."
},

{
  category: "Political Science",
  question: "Who developed the theory of Utilitarianism?",
  options: [
    "Karl Marx",
    "Jeremy Bentham",
    "Hegel",
    "Locke"
  ],
  answer: "Jeremy Bentham",
  explanation:
    "Jeremy Bentham developed Utilitarianism based on the principle of the greatest happiness of the greatest number.",
  wrongExplanations: {
    "Karl Marx": "Marx developed historical materialism.",
    "Hegel": "Hegel is associated with dialectics.",
    "Locke": "Locke is associated with liberalism and natural rights."
  },
  hint:
    "Greatest happiness principle."
},
{
  category: "Education",
  question: "Who is known as the Father of Modern Education?",
  options: [
    "John Dewey",
    "Jean-Jacques Rousseau",
    "Johann Heinrich Pestalozzi",
    "Plato"
  ],
  answer: "Johann Heinrich Pestalozzi",
  explanation:
    "Pestalozzi is often regarded as the Father of Modern Education due to his child-centered approach.",
  wrongExplanations: {
    "John Dewey": "Dewey is associated with Pragmatism.",
    "Jean-Jacques Rousseau": "Rousseau influenced educational thought but is not given this title.",
    "Plato": "Plato discussed education in The Republic."
  },
  hint:
    "Think of child-centered education."
},

{
  category: "Education",
  question: "Who is associated with the philosophy of Pragmatism?",
  options: [
    "Plato",
    "John Dewey",
    "Aristotle",
    "Rousseau"
  ],
  answer: "John Dewey",
  explanation:
    "John Dewey is the leading advocate of Pragmatism in education.",
  wrongExplanations: {
    "Plato": "Plato is associated with Idealism.",
    "Aristotle": "Aristotle emphasized observation and logic.",
    "Rousseau": "Rousseau emphasized natural education."
  },
  hint:
    "Learning by doing."
},

{
  category: "Education",
  question: "Which philosophy emphasizes 'Learning by Doing'?",
  options: [
    "Idealism",
    "Realism",
    "Pragmatism",
    "Naturalism"
  ],
  answer: "Pragmatism",
  explanation:
    "Pragmatism emphasizes practical experience and learning through activity.",
  wrongExplanations: {
    "Idealism": "Idealism focuses on ideas and values.",
    "Realism": "Realism focuses on the external world.",
    "Naturalism": "Naturalism emphasizes natural development."
  },
  hint:
    "John Dewey's philosophy."
},

{
  category: "Education",
  question: "Who wrote the book 'Emile'?",
  options: [
    "Rousseau",
    "Dewey",
    "Pestalozzi",
    "Plato"
  ],
  answer: "Rousseau",
  explanation:
    "Rousseau's Emile is a classic work on natural education.",
  wrongExplanations: {
    "Dewey": "Dewey wrote Democracy and Education.",
    "Pestalozzi": "Pestalozzi was influenced by Rousseau.",
    "Plato": "Plato wrote The Republic."
  },
  hint:
    "Natural education."
},

{
  category: "Education",
  question: "Which educational philosophy is most closely associated with Plato?",
  options: [
    "Idealism",
    "Pragmatism",
    "Naturalism",
    "Realism"
  ],
  answer: "Idealism",
  explanation:
    "Plato is considered one of the major proponents of Idealism.",
  wrongExplanations: {
    "Pragmatism": "Associated with Dewey.",
    "Naturalism": "Associated with Rousseau.",
    "Realism": "Associated more closely with Aristotle."
  },
  hint:
    "Think of the world of ideas."
},
{
  category: "Public Administration",
  question: "Which theory is associated with Max Weber?",
  options: [
    "Human Relations Theory",
    "Scientific Management",
    "Bureaucratic Theory",
    "Systems Theory"
  ],
  answer: "Bureaucratic Theory",
  explanation:
    "Max Weber developed the ideal type model of bureaucracy.",
  wrongExplanations: {
    "Human Relations Theory": "Associated with Elton Mayo.",
    "Scientific Management": "Associated with F.W. Taylor.",
    "Systems Theory": "Developed later by other scholars."
  },
  hint:
    "Think hierarchy, rules and offices."
},

{
  category: "Public Administration",
  question: "Who is known for the Hawthorne Experiments?",
  options: [
    "Elton Mayo",
    "Woodrow Wilson",
    "Max Weber",
    "Chester Barnard"
  ],
  answer: "Elton Mayo",
  explanation:
    "Elton Mayo conducted the Hawthorne Studies and emphasized human relations in organizations.",
  wrongExplanations: {
    "Woodrow Wilson": "Wilson is linked to Public Administration.",
    "Max Weber": "Weber focused on bureaucracy.",
    "Chester Barnard": "Barnard emphasized cooperation in organizations."
  },
  hint:
    "Human Relations School."
},
{
    category: "History",
    question: "In which year was the Indian National Congress founded?",
    options: ["1885", "1905", "1947", "1857"],
    answer: "1885",
    explanation:
      "The Indian National Congress was founded in 1885. It later became the leading organisation of the Indian freedom movement.",
    wrongExplanations: {
      "1905": "1905 is associated with the Partition of Bengal.",
      "1947": "1947 is the year India became independent.",
      "1857": "1857 refers to the Revolt of 1857.",
    },
    hint: "Remember the late nineteenth century.",
  },
  {
  category: "Geography",
  question: "Which is the largest state of India by area?",
  options: [
    "Maharashtra",
    "Rajasthan",
    "Madhya Pradesh",
    "Uttar Pradesh"
  ],
  answer: "Rajasthan",
  explanation:
    "Rajasthan is the largest state in India by area, covering more than 340,000 square kilometres.",
  wrongExplanations: {
    "Maharashtra":
      "Maharashtra is large but smaller than Rajasthan.",
    "Madhya Pradesh":
      "Madhya Pradesh is the second-largest state by area.",
    "Uttar Pradesh":
      "Uttar Pradesh is the most populous state, not the largest by area."
  },
  hint:
    "Think of the state that contains the Thar Desert."
},
  {
    category: "Mizoram GK",
    question: "What is the capital of Mizoram?",
    options: ["Silchar", "Aizawl", "Shillong", "Imphal"],
    answer: "Aizawl",
    explanation:
      "Aizawl is the capital city of Mizoram. It is the political, administrative and educational centre of the state.",
    wrongExplanations: {
      Silchar: "Wrong. Silchar is in Assam.",
      Shillong: "Wrong. Shillong is the capital of Meghalaya.",
      Imphal: "Wrong. Imphal is the capital of Manipur.",
    },
    hint: "Remember Mizoram’s capital is located in the central part of the state.",
  },
  {
    category: "Indian Polity",
    question: "Who is known as the Father of the Indian Constitution?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Dr. B. R. Ambedkar",
      "Sardar Patel",
    ],
    answer: "Dr. B. R. Ambedkar",
    explanation:
      "Dr. B. R. Ambedkar is known as the Father of the Indian Constitution because he served as the Chairman of the Drafting Committee.",
    wrongExplanations: {
      "Mahatma Gandhi":
        "Wrong. Gandhi led the freedom movement but did not draft the Constitution.",
      "Jawaharlal Nehru":
        "Wrong. Nehru was important in national politics but was not Chairman of the Drafting Committee.",
      "Sardar Patel":
        "Wrong. Patel helped integrate princely states but is not called Father of the Constitution.",
    },
    hint: "Look for the person connected with the Drafting Committee.",
  },
  {
  category: "Indian Polity",
  question: "Which Article of the Constitution guarantees Equality before Law?",
  options: [
    "Article 14",
    "Article 19",
    "Article 21",
    "Article 32"
  ],
  answer: "Article 14",
  explanation:
    "Article 14 guarantees Equality before Law and Equal Protection of Laws to all persons within India.",
  wrongExplanations: {
    "Article 19":
      "Article 19 deals with freedoms such as speech and expression.",
    "Article 21":
      "Article 21 deals with Protection of Life and Personal Liberty.",
    "Article 32":
      "Article 32 provides the Right to Constitutional Remedies."
  },
  hint:
    "The equality chapter starts with Article 14."
},
  {
    category: "History",
    question: "The Mizoram Peace Accord was signed in which year?",
    options: ["1972", "1986", "1987", "1991"],
    answer: "1986",
    explanation:
      "The Mizoram Peace Accord was signed on 30 June 1986 between the Government of India and the Mizo National Front.",
    wrongExplanations: {
      "1972": "Wrong. Mizoram became a Union Territory in 1972.",
      "1987": "Wrong. Mizoram became a full state in 1987.",
      "1991": "Wrong. This is not related to the Peace Accord.",
    },
    hint: "Peace Accord first, statehood after that.",
  },
  {
  category: "History",
  question: "Who founded the Indian National Congress in 1885?",
  options: [
    "A.O. Hume",
    "Mahatma Gandhi",
    "Jawaharlal Nehru",
    "Subhas Chandra Bose"
  ],
  answer: "A.O. Hume",
  explanation:
    "A.O. Hume, a retired British civil servant, played a key role in founding the Indian National Congress in 1885.",
  wrongExplanations: {
    "Mahatma Gandhi": "Gandhi joined Congress later.",
    "Jawaharlal Nehru": "Nehru was a later Congress leader.",
    "Subhas Chandra Bose": "Bose was not the founder."
  },
  hint:
    "Think of the retired British civil servant."
},

{
  category: "History",
  question: "The Revolt of 1857 started at:",
  options: [
    "Delhi",
    "Meerut",
    "Kanpur",
    "Lucknow"
  ],
  answer: "Meerut",
  explanation:
    "The Revolt of 1857 began at Meerut before spreading across North India.",
  wrongExplanations: {
    "Delhi": "Delhi became a major centre later.",
    "Kanpur": "Kanpur was important but not the starting point.",
    "Lucknow": "Lucknow became a major battlefield later."
  },
  hint:
    "Think of the cantonment where sepoys first revolted."
},

{
  category: "History",
  question: "Who was known as the 'Iron Man of India'?",
  options: [
    "Jawaharlal Nehru",
    "Subhas Chandra Bose",
    "Sardar Vallabhbhai Patel",
    "Rajendra Prasad"
  ],
  answer: "Sardar Vallabhbhai Patel",
  explanation:
    "Patel earned the title Iron Man of India for integrating princely states into the Indian Union.",
  wrongExplanations: {
    "Jawaharlal Nehru": "Nehru was India's first Prime Minister.",
    "Subhas Chandra Bose": "Bose led the INA.",
    "Rajendra Prasad": "Prasad was India's first President."
  },
  hint:
    "Think of national integration after independence."
},

{
  category: "History",
  question: "Who gave the slogan 'Give me blood, and I will give you freedom'?",
  options: [
    "Bhagat Singh",
    "Subhas Chandra Bose",
    "Mahatma Gandhi",
    "Bal Gangadhar Tilak"
  ],
  answer: "Subhas Chandra Bose",
  explanation:
    "Subhas Chandra Bose used this slogan to inspire support for the Indian National Army.",
  wrongExplanations: {
    "Bhagat Singh": "Bhagat Singh was a revolutionary but did not use this slogan.",
    "Mahatma Gandhi": "Gandhi promoted non-violence.",
    "Bal Gangadhar Tilak": "Tilak's famous slogan was different."
  },
  hint:
    "Think of the INA leader."
},

{
  category: "History",
  question: "India became independent on:",
  options: [
    "26 January 1950",
    "15 August 1947",
    "26 November 1949",
    "2 October 1947"
  ],
  answer: "15 August 1947",
  explanation:
    "India achieved independence from British rule on 15 August 1947.",
  wrongExplanations: {
    "26 January 1950": "India became a Republic on this date.",
    "26 November 1949": "The Constitution was adopted on this date.",
    "2 October 1947": "This is not India's Independence Day."
  },
  hint:
    "Think of Independence Day."
},
  {
    category: "Geography",
    question: "Mizoram is mainly known for which type of terrain?",
    options: ["Desert", "Coastal plain", "Hilly terrain", "Large plateau"],
    answer: "Hilly terrain",
    explanation:
      "Mizoram is a hilly state. Its physical geography is dominated by hills, valleys, forests and rivers.",
    wrongExplanations: {
      Desert: "Wrong. Mizoram is not a desert region.",
      "Coastal plain": "Wrong. Mizoram has no sea coast.",
      "Large plateau": "Wrong. Mizoram is mainly hilly, not a large plateau.",
    },
    hint: "Think of Mizoram’s roads, slopes and mountains.",
  },
  {
  category: "Geography",
  question: "Which is the largest ocean in the world?",
  options: [
    "Atlantic Ocean",
    "Indian Ocean",
    "Pacific Ocean",
    "Arctic Ocean"
  ],
  answer: "Pacific Ocean",
  explanation:
    "The Pacific Ocean is the largest and deepest ocean on Earth.",
  wrongExplanations: {
    "Atlantic Ocean": "Atlantic is the second largest ocean.",
    "Indian Ocean": "Indian Ocean is smaller than the Pacific.",
    "Arctic Ocean": "Arctic is the smallest ocean."
  },
  hint:
    "Think of the ocean between Asia and the Americas."
},

{
  category: "Geography",
  question: "Which is the highest mountain peak in the world?",
  options: [
    "Kanchenjunga",
    "Mount Everest",
    "K2",
    "Nanga Parbat"
  ],
  answer: "Mount Everest",
  explanation:
    "Mount Everest is the highest mountain peak above sea level at 8,848.86 metres.",
  wrongExplanations: {
    "Kanchenjunga": "Kanchenjunga is the third highest mountain.",
    "K2": "K2 is the second highest mountain.",
    "Nanga Parbat": "Nanga Parbat is much lower than Everest."
  },
  hint:
    "Think of Nepal and Tibet."
},

{
  category: "Geography",
  question: "Which river is known as the 'Sorrow of Bihar'?",
  options: [
    "Ganga",
    "Kosi",
    "Yamuna",
    "Godavari"
  ],
  answer: "Kosi",
  explanation:
    "The Kosi River frequently changes course and causes devastating floods in Bihar.",
  wrongExplanations: {
    "Ganga": "The Ganga is important but not known by this title.",
    "Yamuna": "Yamuna is mainly associated with North India.",
    "Godavari": "Godavari flows through Peninsular India."
  },
  hint:
    "Think of a flood-prone river."
},

{
  category: "Geography",
  question: "Which Indian state has the longest coastline?",
  options: [
    "Tamil Nadu",
    "Gujarat",
    "Maharashtra",
    "Andhra Pradesh"
  ],
  answer: "Gujarat",
  explanation:
    "Gujarat has the longest coastline among Indian states.",
  wrongExplanations: {
    "Tamil Nadu": "Tamil Nadu has a long coastline but not the longest.",
    "Maharashtra": "Maharashtra's coastline is shorter.",
    "Andhra Pradesh": "Andhra Pradesh ranks below Gujarat."
  },
  hint:
    "Think of India's western coast."
},

{
  category: "Geography",
  question: "Which layer of the atmosphere contains the ozone layer?",
  options: [
    "Troposphere",
    "Stratosphere",
    "Mesosphere",
    "Thermosphere"
  ],
  answer: "Stratosphere",
  explanation:
    "The ozone layer is located mainly in the stratosphere and protects Earth from harmful ultraviolet radiation.",
  wrongExplanations: {
    "Troposphere": "Weather occurs mainly in the troposphere.",
    "Mesosphere": "The mesosphere lies above the stratosphere.",
    "Thermosphere": "The thermosphere is much higher."
  },
  hint:
    "One layer above the troposphere."
},
  {
    category: "Economics",
    question: "Inflation means:",
    options: [
      "Fall in prices",
      "Rise in general price level",
      "Increase in rainfall",
      "Decrease in population",
    ],
    answer: "Rise in general price level",
    explanation:
      "Inflation means a continuous rise in the general price level. It reduces the purchasing power of money.",
    wrongExplanations: {
      "Fall in prices": "Wrong. Fall in prices is called deflation.",
      "Increase in rainfall": "Wrong. Rainfall is a geographical concept.",
      "Decrease in population": "Wrong. This is demographic change, not inflation.",
    },
    hint: "Think of market prices becoming expensive.",
  },
  {
    category: "Polity",
    question: "Who appoints the Prime Minister of India?",
    options: [
      "President",
      "Governor",
      "Chief Justice",
      "Parliament"
    ],
    answer: "President",
    explanation:
      "The President appoints the Prime Minister under the Constitution.",
    wrongExplanations: {
      "Governor": "Governor only appoints Chief Ministers in states.",
      "Chief Justice": "The judiciary does not appoint the Prime Minister.",
      "Parliament": "Parliament supports the PM but does not officially appoint.",
    },
    hint: "Think about the constitutional head of India.",
  },
{
  category: "Indian Polity",
  question: "Who appoints the Governor of a State in India?",
  options: [
    "Prime Minister",
    "President",
    "Chief Minister",
    "Parliament"
  ],
  answer: "President",
  explanation:
    "The Governor of a State is appointed by the President of India under Article 155 of the Constitution.",
  wrongExplanations: {
    "Prime Minister": "The Prime Minister may advise, but the appointment is made by the President.",
    "Chief Minister": "The Chief Minister is not the appointing authority.",
    "Parliament": "Parliament does not appoint Governors."
  },
  hint:
    "Think of the constitutional head of the Union."
},

{
  category: "Indian Polity",
  question: "How many Houses are there in the Indian Parliament?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  answer: "Two",
  explanation:
    "The Indian Parliament consists of Lok Sabha and Rajya Sabha.",
  wrongExplanations: {
    "One": "India has a bicameral Parliament.",
    "Three": "There are only two Houses.",
    "Four": "This is incorrect."
  },
  hint:
    "Lok Sabha + Rajya Sabha."
},

{
  category: "Indian Polity",
  question: "What is the minimum voting age in India?",
  options: [
    "16",
    "18",
    "21",
    "25"
  ],
  answer: "18",
  explanation:
    "The voting age was reduced from 21 to 18 years by the 61st Constitutional Amendment Act, 1988.",
  wrongExplanations: {
    "16": "India does not permit voting at 16.",
    "21": "This was the previous voting age.",
    "25": "This is the minimum age for contesting some elections, not voting."
  },
  hint:
    "61st Constitutional Amendment."
},

{
  category: "Indian Polity",
  question: "Which Fundamental Right is known as the 'Heart and Soul' of the Constitution?",
  options: [
    "Right to Equality",
    "Right to Freedom",
    "Right to Constitutional Remedies",
    "Right against Exploitation"
  ],
  answer: "Right to Constitutional Remedies",
  explanation:
    "Dr. B.R. Ambedkar called the Right to Constitutional Remedies the Heart and Soul of the Constitution.",
  wrongExplanations: {
    "Right to Equality": "Important, but not described by Ambedkar with this phrase.",
    "Right to Freedom": "A key right, but not the Heart and Soul.",
    "Right against Exploitation": "Protects against forced labour and trafficking."
  },
  hint:
    "Think of Article 32."
},

{
  category: "Indian Polity",
  question: "Which constitutional office is known as the 'First Citizen of India'?",
  options: [
    "Prime Minister",
    "President",
    "Chief Justice of India",
    "Vice-President"
  ],
  answer: "President",
  explanation:
    "The President is the constitutional head of the Indian Republic and is known as the First Citizen of India.",
  wrongExplanations: {
    "Prime Minister": "The PM is the head of government.",
    "Chief Justice of India": "The CJI heads the judiciary.",
    "Vice-President": "The Vice-President is the second highest constitutional office."
  },
  hint:
    "Constitutional head of the Republic."
},
  {
    category: "History",
    question: "Who was the first Prime Minister of independent India?",
    options: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Sardar Patel",
      "Rajendra Prasad"
    ],
    answer: "Jawaharlal Nehru",
    explanation:
      "Jawaharlal Nehru became the first Prime Minister in 1947.",
    wrongExplanations: {
      "Mahatma Gandhi": "Gandhi never became Prime Minister.",
      "Sardar Patel": "Patel was the first Deputy Prime Minister.",
      "Rajendra Prasad": "He became the first President of India.",
    },
    hint: "He delivered the 'Tryst with Destiny' speech.",
  },

  {
    category: "Science",
    question: "Which planet is known as the Blue Planet?",
    options: [
      "Earth",
      "Mars",
      "Venus",
      "Jupiter"
    ],
    answer: "Earth",
    explanation:
      "Earth is called the Blue Planet because most of its surface is covered by water.",
    wrongExplanations: {
      "Mars": "Mars is known as the Red Planet.",
      "Venus": "Venus is the hottest planet.",
      "Jupiter": "Jupiter is the largest planet.",
    },
    hint: "Think about oceans.",
  },
  {
  category: "Science",
  question: "Which organ pumps blood throughout the human body?",
  options: [
    "Liver",
    "Heart",
    "Kidney",
    "Lungs"
  ],
  answer: "Heart",
  explanation:
    "The heart pumps blood throughout the body through the circulatory system.",
  wrongExplanations: {
    "Liver": "The liver helps in metabolism and detoxification.",
    "Kidney": "The kidney filters waste from blood.",
    "Lungs": "The lungs help in breathing and gas exchange."
  },
  hint:
    "Think of the central organ of the circulatory system."
},

{
  category: "Science",
  question: "What is the chemical symbol for Gold?",
  options: [
    "Ag",
    "Au",
    "Gd",
    "Go"
  ],
  answer: "Au",
  explanation:
    "The chemical symbol Au comes from the Latin word Aurum, meaning gold.",
  wrongExplanations: {
    "Ag": "Ag is the symbol for Silver.",
    "Gd": "Gd is the symbol for Gadolinium.",
    "Go": "Go is not a valid chemical symbol."
  },
  hint:
    "Gold's symbol comes from a Latin word."
},

{
  category: "Science",
  question: "Which planet is known as the Red Planet?",
  options: [
    "Venus",
    "Mars",
    "Jupiter",
    "Mercury"
  ],
  answer: "Mars",
  explanation:
    "Mars appears red because of iron oxide (rust) on its surface.",
  wrongExplanations: {
    "Venus": "Venus is known for its thick atmosphere.",
    "Jupiter": "Jupiter is the largest planet.",
    "Mercury": "Mercury is the closest planet to the Sun."
  },
  hint:
    "The planet associated with war in Roman mythology."
},

{
  category: "Science",
  question: "Water boils at what temperature at sea level?",
  options: [
    "90°C",
    "95°C",
    "100°C",
    "110°C"
  ],
  answer: "100°C",
  explanation:
    "Pure water boils at 100°C at standard atmospheric pressure.",
  wrongExplanations: {
    "90°C": "Below the normal boiling point.",
    "95°C": "Still below the standard boiling point.",
    "110°C": "Above the standard boiling point."
  },
  hint:
    "This is one of the most commonly tested science facts."
},

{
  category: "Science",
  question: "Which gas is most abundant in Earth's atmosphere?",
  options: [
    "Oxygen",
    "Carbon Dioxide",
    "Nitrogen",
    "Hydrogen"
  ],
  answer: "Nitrogen",
  explanation:
    "Nitrogen makes up about 78% of Earth's atmosphere.",
  wrongExplanations: {
    "Oxygen": "Oxygen is about 21% of the atmosphere.",
    "Carbon Dioxide": "Carbon dioxide exists in much smaller quantities.",
    "Hydrogen": "Hydrogen is not the dominant atmospheric gas."
  },
  hint:
    "Think of the largest percentage in the atmosphere."
},
  {
  category: "Science",
  question: "Which vitamin is mainly produced when the skin is exposed to sunlight?",
  options: [
    "Vitamin A",
    "Vitamin B12",
    "Vitamin C",
    "Vitamin D"
  ],
  answer: "Vitamin D",
  explanation:
    "Vitamin D is produced in the skin when it is exposed to ultraviolet rays from sunlight.",
  wrongExplanations: {
    "Vitamin A":
      "Vitamin A is mainly obtained through food sources.",
    "Vitamin B12":
      "Vitamin B12 is mainly obtained from animal-based foods.",
    "Vitamin C":
      "Vitamin C is commonly obtained from fruits and vegetables."
  },
  hint:
    "Think of the vitamin associated with bones and sunlight."
},
 {
  category: "Science",
  question: "Which blood group is known as the universal donor?",
  options: [
    "A",
    "B",
    "AB",
    "O Negative"
  ],
  answer: "O Negative",
  explanation:
    "O Negative blood can generally be transfused to patients of any blood group in emergencies.",
  wrongExplanations: {
    "A": "A blood group is not a universal donor.",
    "B": "B blood group is not a universal donor.",
    "AB": "AB is known as the universal recipient."
  },
  hint:
    "Think of emergency blood transfusions."
},

{
  category: "Science",
  question: "What is the SI unit of force?",
  options: [
    "Joule",
    "Newton",
    "Watt",
    "Pascal"
  ],
  answer: "Newton",
  explanation:
    "The SI unit of force is the Newton, named after Sir Isaac Newton.",
  wrongExplanations: {
    "Joule": "Joule is the unit of energy.",
    "Watt": "Watt is the unit of power.",
    "Pascal": "Pascal is the unit of pressure."
  },
  hint:
    "Think of Newton's Laws of Motion."
},

{
  category: "Science",
  question: "Which part of the plant conducts photosynthesis?",
  options: [
    "Root",
    "Stem",
    "Leaf",
    "Flower"
  ],
  answer: "Leaf",
  explanation:
    "Leaves contain chlorophyll and are the primary site of photosynthesis.",
  wrongExplanations: {
    "Root": "Roots absorb water and minerals.",
    "Stem": "Stems support the plant and transport materials.",
    "Flower": "Flowers are mainly reproductive structures."
  },
  hint:
    "Think green."
},

{
  category: "Science",
  question: "Which scientist proposed the Law of Gravitation?",
  options: [
    "Albert Einstein",
    "Isaac Newton",
    "Galileo",
    "Nikola Tesla"
  ],
  answer: "Isaac Newton",
  explanation:
    "Sir Isaac Newton formulated the Universal Law of Gravitation.",
  wrongExplanations: {
    "Albert Einstein": "Einstein developed the Theory of Relativity.",
    "Galileo": "Galileo contributed to motion and astronomy.",
    "Nikola Tesla": "Tesla is known for electrical innovations."
  },
  hint:
    "The falling apple story."
},

{
  category: "Science",
  question: "Which vitamin deficiency causes scurvy?",
  options: [
    "Vitamin A",
    "Vitamin B",
    "Vitamin C",
    "Vitamin D"
  ],
  answer: "Vitamin C",
  explanation:
    "Scurvy is caused by a deficiency of Vitamin C.",
  wrongExplanations: {
    "Vitamin A": "Vitamin A deficiency affects vision.",
    "Vitamin B": "Vitamin B deficiencies cause other disorders.",
    "Vitamin D": "Vitamin D deficiency is linked to rickets."
  },
  hint:
    "Think citrus fruits."
},
{
    category: "Economics",
    question: "Which institution issues currency notes in India?",
    options: [
      "Reserve Bank of India",
      "State Bank of India",
      "Finance Commission",
      "NITI Aayog"
    ],
    answer: "Reserve Bank of India",
    explanation:
      "The RBI is responsible for issuing currency notes in India.",
    wrongExplanations: {
      "State Bank of India": "SBI is a commercial bank.",
      "Finance Commission": "It deals with financial distribution.",
      "NITI Aayog": "NITI Aayog is a policy think tank.",
    },
    hint: "It is India's central bank.",
  },
{
  category: "Economics",
  question: "Which institution issues currency notes in India?",
  options: [
    "Ministry of Finance",
    "Reserve Bank of India",
    "NITI Aayog",
    "State Bank of India"
  ],
  answer: "Reserve Bank of India",
  explanation:
    "The Reserve Bank of India is responsible for issuing currency notes in India except the one-rupee note.",
  wrongExplanations: {
    "Ministry of Finance": "The Ministry manages finances but does not issue most currency notes.",
    "NITI Aayog": "NITI Aayog is a policy think tank.",
    "State Bank of India": "SBI is a commercial bank."
  },
  hint:
    "Think of India's central bank."
},

{
  category: "Economics",
  question: "Inflation means:",
  options: [
    "Fall in prices",
    "Rise in general price level",
    "Increase in exports",
    "Decrease in population"
  ],
  answer: "Rise in general price level",
  explanation:
    "Inflation refers to a sustained increase in the general price level of goods and services.",
  wrongExplanations: {
    "Fall in prices": "This is called deflation.",
    "Increase in exports": "Exports may affect the economy but are not inflation.",
    "Decrease in population": "Population change is unrelated."
  },
  hint:
    "Think about what happens when everything becomes more expensive."
},

{
  category: "Economics",
  question: "GDP stands for:",
  options: [
    "Gross Domestic Product",
    "General Development Plan",
    "Global Domestic Product",
    "Gross Development Policy"
  ],
  answer: "Gross Domestic Product",
  explanation:
    "GDP measures the total value of goods and services produced within a country.",
  wrongExplanations: {
    "General Development Plan": "Not a standard economic term.",
    "Global Domestic Product": "Incorrect expansion.",
    "Gross Development Policy": "Incorrect expansion."
  },
  hint:
    "One of the most common economics abbreviations."
},

{
  category: "Economics",
  question: "Which of the following is a direct tax?",
  options: [
    "GST",
    "Customs Duty",
    "Income Tax",
    "Excise Duty"
  ],
  answer: "Income Tax",
  explanation:
    "Income Tax is paid directly by individuals and organizations to the government.",
  wrongExplanations: {
    "GST": "GST is an indirect tax.",
    "Customs Duty": "Customs Duty is an indirect tax.",
    "Excise Duty": "Excise Duty is an indirect tax."
  },
  hint:
    "Think of the tax deducted from earnings."
},

{
  category: "Economics",
  question: "Which sector is known as the primary sector?",
  options: [
    "Agriculture",
    "Manufacturing",
    "Banking",
    "IT Services"
  ],
  answer: "Agriculture",
  explanation:
    "The primary sector includes activities involving natural resources such as farming, fishing and forestry.",
  wrongExplanations: {
    "Manufacturing": "This belongs to the secondary sector.",
    "Banking": "Banking belongs to the tertiary sector.",
    "IT Services": "IT belongs to the tertiary sector."
  },
  hint:
    "Think of activities directly connected with nature."
},
  {
    category: "ICT",
    question: "Which of the following is an operating system?",
    options: [
      "Windows",
      "Google",
      "Intel",
      "Python"
    ],
    answer: "Windows",
    explanation:
      "Windows is an operating system developed by Microsoft.",
    wrongExplanations: {
      "Google": "Google is a company and search engine.",
      "Intel": "Intel manufactures processors.",
      "Python": "Python is a programming language.",
    },
    hint: "It manages computer hardware and software.",
  },

  {
    category: "Geography",
    question: "Which is the highest mountain peak in the world?",
    options: [
      "Mount Everest",
      "Kanchenjunga",
      "K2",
      "Nanga Parbat"
    ],
    answer: "Mount Everest",
    explanation:
      "Mount Everest is the highest mountain peak above sea level.",
    wrongExplanations: {
      "Kanchenjunga": "It is the third highest peak.",
      "K2": "K2 is the second highest mountain.",
      "Nanga Parbat": "It is a major Himalayan peak but not the highest.",
    },
    hint: "Located in the Himalayas.",
  },
  {
    category: "English",
    question: "Choose the correct plural form of 'Child'.",
    options: ["Children", "Child"],
    answer: "Children",
    explanation: "The correct plural of 'child' is 'children'.",
    wrongExplanations: {
      Child: "'Child' is singular; plural is 'children'.",
    },
    hint: "Irregular plural form.",
  },
{
  category: "English",
  question: "Choose the correct synonym of 'Liberty'.",
  options: [
    "Freedom",
    "Punishment",
    "Fear",
    "Control"
  ],
  answer: "Freedom",
  explanation:
    "Liberty means freedom or the state of being free from unnecessary restrictions.",
  wrongExplanations: {
    "Punishment":
      "Punishment is the opposite of liberty.",
    "Fear":
      "Fear is an emotion and not a synonym of liberty.",
    "Control":
      "Control implies restriction rather than freedom."
  },
  hint:
    "Liberty is a key concept in political science and democracy."
},
  {
  category: "English",
  question: "Choose the synonym of 'Brave'.",
  options: [
    "Cowardly",
    "Fearless",
    "Weak",
    "Lazy"
  ],
  answer: "Fearless",
  explanation:
    "Brave means fearless, courageous or willing to face danger.",
  wrongExplanations: {
    "Cowardly": "Cowardly is the opposite of brave.",
    "Weak": "Weak refers to lack of strength, not courage.",
    "Lazy": "Lazy means unwilling to work."
  },
  hint:
    "Look for the word closest to courage."
},

{
  category: "English",
  question: "Choose the antonym of 'Victory'.",
  options: [
    "Success",
    "Triumph",
    "Defeat",
    "Achievement"
  ],
  answer: "Defeat",
  explanation:
    "Defeat is the opposite of victory.",
  wrongExplanations: {
    "Success": "Success is similar to victory.",
    "Triumph": "Triumph means victory.",
    "Achievement": "Achievement is generally a positive accomplishment."
  },
  hint:
    "Find the opposite meaning."
},

{
  category: "English",
  question: "Identify the correct sentence.",
  options: [
    "She go to school every day.",
    "She goes to school every day.",
    "She going to school every day.",
    "She gone to school every day."
  ],
  answer: "She goes to school every day.",
  explanation:
    "A singular subject in the present tense takes 'goes'.",
  wrongExplanations: {
    "She go to school every day.": "Verb agreement is incorrect.",
    "She going to school every day.": "The sentence is grammatically incomplete.",
    "She gone to school every day.": "Wrong verb form."
  },
  hint:
    "Check subject-verb agreement."
},

{
  category: "English",
  question: "What is the plural form of 'Child'?",
  options: [
    "Childs",
    "Children",
    "Childes",
    "Childrens"
  ],
  answer: "Children",
  explanation:
    "Children is the irregular plural form of child.",
  wrongExplanations: {
    "Childs": "Incorrect plural form.",
    "Childes": "Not an accepted English word.",
    "Childrens": "Double plural error."
  },
  hint:
    "This is an irregular noun."
},

{
  category: "English",
  question: "Choose the correctly spelled word.",
  options: [
    "Recieve",
    "Receive",
    "Receeve",
    "Receve"
  ],
  answer: "Receive",
  explanation:
    "Receive follows the rule 'i before e except after c'.",
  wrongExplanations: {
    "Recieve": "Common spelling mistake.",
    "Receeve": "Incorrect spelling.",
    "Receve": "Missing letter."
  },
  hint:
    "Remember the spelling rule involving 'c'."
},
{
  category: "English",
  question: "Choose the correct antonym of 'Ancient'.",
  options: [
    "Old",
    "Modern",
    "Historic",
    "Traditional"
  ],
  answer: "Modern",
  explanation:
    "Modern refers to the present or recent times, which is the opposite of ancient.",
  wrongExplanations: {
    "Old": "Old is similar in meaning to ancient.",
    "Historic": "Historic refers to something important in history.",
    "Traditional": "Traditional refers to customs and practices."
  },
  hint:
    "Look for the opposite of very old."
},

{
  category: "English",
  question: "Identify the noun in the sentence: 'The boy kicked the ball.'",
  options: [
    "kicked",
    "boy",
    "the",
    "ball"
  ],
  answer: "boy",
  explanation:
    "A noun names a person, place, thing or idea. 'Boy' is a noun.",
  wrongExplanations: {
    "kicked": "Kicked is a verb.",
    "the": "The is an article.",
    "ball": "Ball is also a noun, but the question asks for a noun and 'boy' is the expected answer."
  },
  hint:
    "A noun names a person, place or thing."
},

{
  category: "English",
  question: "Choose the correctly punctuated sentence.",
  options: [
    "Lets go home.",
    "Let's go home.",
    "Lets' go home.",
    "Lets go home's."
  ],
  answer: "Let's go home.",
  explanation:
    "Let's is the contraction of 'Let us'.",
  wrongExplanations: {
    "Lets go home.": "Missing apostrophe.",
    "Lets' go home.": "Incorrect apostrophe placement.",
    "Lets go home's.": "Incorrect grammar and punctuation."
  },
  hint:
    "Think of the contraction for 'Let us'."
},

{
  category: "English",
  question: "What is the past tense of 'write'?",
  options: [
    "Written",
    "Wrote",
    "Writing",
    "Writes"
  ],
  answer: "Wrote",
  explanation:
    "Wrote is the simple past tense of write.",
  wrongExplanations: {
    "Written": "Written is the past participle.",
    "Writing": "Writing is the present participle.",
    "Writes": "Writes is present tense."
  },
  hint:
    "Simple past tense."
},

{
  category: "English",
  question: "Choose the synonym of 'Rapid'.",
  options: [
    "Slow",
    "Fast",
    "Weak",
    "Quiet"
  ],
  answer: "Fast",
  explanation:
    "Rapid means fast or quick.",
  wrongExplanations: {
    "Slow": "Slow is the opposite of rapid.",
    "Weak": "Weak relates to strength, not speed.",
    "Quiet": "Quiet relates to sound."
  },
  hint:
    "Think speed."
},
{
    category: "Mizoram GK",
    question: "Which language is primarily spoken in Mizoram?",
    options: [
      "Mizo",
      "Hindi",
      "Bengali",
      "Nepali"
    ],
    answer: "Mizo",
    explanation:
      "Mizo is the primary language spoken in Mizoram.",
    wrongExplanations: {
      "Hindi": "Hindi is widely understood but not the primary language.",
      "Bengali": "Bengali is mainly spoken in West Bengal.",
      "Nepali": "Nepali is not the primary language of Mizoram.",
    },
    hint: "It is also called Lusei language.",
  },
{
  category: "Mizoram GK",
  question: "In which year did Mizoram become a full-fledged state of India?",
  options: [
    "1972",
    "1986",
    "1987",
    "1990"
  ],
  answer: "1987",
  explanation:
    "Mizoram became the 23rd state of India on 20 February 1987.",
  wrongExplanations: {
    "1972": "Mizoram became a Union Territory in 1972, not a state.",
    "1986": "1986 was the year of the Mizoram Peace Accord.",
    "1990": "Mizoram had already become a state by then."
  },
  hint:
    "Think: Peace Accord first, statehood next."
},

{
  category: "Mizoram GK",
  question: "What is the official language of Mizoram?",
  options: [
    "Hindi",
    "English",
    "Mizo",
    "Bengali"
  ],
  answer: "Mizo",
  explanation:
    "Mizo is the principal official language of Mizoram and is widely spoken throughout the state.",
  wrongExplanations: {
    "Hindi": "Hindi is widely understood but not the principal official language.",
    "English": "English is used in administration and education but is not the primary language.",
    "Bengali": "Bengali is not the official language of Mizoram."
  },
  hint:
    "Think of the language spoken by the majority community."
},

{
  category: "Mizoram GK",
  question: "Which district is known as the 'Rice Bowl of Mizoram'?",
  options: [
    "Aizawl",
    "Champhai",
    "Kolasib",
    "Mamit"
  ],
  answer: "Champhai",
  explanation:
    "Champhai is often called the Rice Bowl of Mizoram because of its extensive paddy cultivation.",
  wrongExplanations: {
    "Aizawl": "Aizawl is the capital district.",
    "Kolasib": "Kolasib is agriculturally important but not known by this title.",
    "Mamit": "Mamit is known for forests and agriculture but not as the Rice Bowl."
  },
  hint:
    "Think of the district bordering Myanmar with large plains."
},

{
  category: "Mizoram GK",
  question: "Who was the first Chief Minister of Mizoram after it became a state?",
  options: [
    "Laldenga",
    "Ch. Chhunga",
    "Zoramthanga",
    "Lal Thanhawla"
  ],
  answer: "Laldenga",
  explanation:
    "Laldenga became the first Chief Minister of Mizoram after statehood in 1987.",
  wrongExplanations: {
    "Ch. Chhunga": "He was an important leader but not the first CM after statehood.",
    "Zoramthanga": "He became Chief Minister later.",
    "Lal Thanhawla": "He served as Chief Minister later."
  },
  hint:
    "Think of the leader associated with the Peace Accord."
},

{
  category: "Mizoram GK",
  question: "Which international country shares the longest border with Mizoram?",
  options: [
    "Bangladesh",
    "Bhutan",
    "Nepal",
    "China"
  ],
  answer: "Bangladesh",
  explanation:
    "Mizoram shares a longer international border with Bangladesh than with Myanmar.",
  wrongExplanations: {
    "Bhutan": "Bhutan does not border Mizoram.",
    "Nepal": "Nepal does not border Mizoram.",
    "China": "China does not border Mizoram."
  },
  hint:
    "Think west of Mizoram."
},
  {
    category: "Current Affairs",
    question: "What is the minimum voting age in India?",
    options: [
      "18 years",
      "21 years",
      "16 years",
      "25 years"
    ],
    answer: "18 years",
    explanation:
      "The voting age in India was reduced from 21 to 18 by the 61st Constitutional Amendment.",
    wrongExplanations: {
      "21 years": "This was the old voting age.",
      "16 years": "Too young under Indian law.",
      "25 years": "This is the minimum age for some elections, not voting.",
    },
    hint: "Young adults can vote after school age.",
  },
  {
  category: "Current Affairs",
  question: "Which organization conducts the Civil Services Examination in India?",
  options: [
    "UPSC",
    "SSC",
    "UGC",
    "Election Commission of India"
  ],
  answer: "UPSC",
  explanation:
    "The Union Public Service Commission conducts the Civil Services Examination for recruitment to services such as IAS, IPS and IFS.",
  wrongExplanations: {
    "SSC": "SSC conducts exams for various central government posts, but not the Civil Services Examination.",
    "UGC": "UGC deals mainly with higher education regulation and grants.",
    "Election Commission of India": "The Election Commission conducts and supervises elections, not civil service recruitment."
  },
  hint: "Think of the constitutional body connected with IAS and IPS recruitment."
},

{
  category: "Current Affairs",
  question: "Which body is responsible for conducting elections in India?",
  options: [
    "Election Commission of India",
    "Supreme Court of India",
    "NITI Aayog",
    "Finance Commission"
  ],
  answer: "Election Commission of India",
  explanation:
    "The Election Commission of India is responsible for supervising, directing and controlling elections to Parliament, State Legislatures and the offices of President and Vice-President.",
  wrongExplanations: {
    "Supreme Court of India": "The Supreme Court interprets the Constitution and decides legal disputes.",
    "NITI Aayog": "NITI Aayog is a policy think tank, not an election body.",
    "Finance Commission": "The Finance Commission deals with financial distribution between the Union and States."
  },
  hint: "The keyword is election."
},

{
  category: "Current Affairs",
  question: "Which institution prepares India’s Union Budget?",
  options: [
    "Ministry of Finance",
    "Ministry of Home Affairs",
    "Election Commission",
    "Supreme Court"
  ],
  answer: "Ministry of Finance",
  explanation:
    "India’s Union Budget is prepared by the Ministry of Finance and presented in Parliament by the Finance Minister.",
  wrongExplanations: {
    "Ministry of Home Affairs": "The Home Ministry deals mainly with internal security and administration.",
    "Election Commission": "The Election Commission conducts elections.",
    "Supreme Court": "The Supreme Court is the highest judicial body, not a budget-making institution."
  },
  hint: "Budget is directly connected with finance."
},

{
  category: "Current Affairs",
  question: "Which Indian body replaced the Planning Commission in 2015?",
  options: [
    "NITI Aayog",
    "Finance Commission",
    "UPSC",
    "Lok Sabha Secretariat"
  ],
  answer: "NITI Aayog",
  explanation:
    "NITI Aayog replaced the Planning Commission in 2015 as the Government of India’s policy think tank.",
  wrongExplanations: {
    "Finance Commission": "The Finance Commission recommends financial distribution between Centre and States.",
    "UPSC": "UPSC conducts recruitment examinations.",
    "Lok Sabha Secretariat": "It provides administrative support to the Lok Sabha."
  },
  hint: "Think of the policy think tank created after the Planning Commission."
},

{
  category: "Current Affairs",
  question: "Which ministry mainly handles disaster management in India?",
  options: [
    "Ministry of Home Affairs",
    "Ministry of External Affairs",
    "Ministry of Education",
    "Ministry of Railways"
  ],
  answer: "Ministry of Home Affairs",
  explanation:
    "Disaster management in India is mainly handled by the Ministry of Home Affairs, along with bodies such as the National Disaster Management Authority.",
  wrongExplanations: {
    "Ministry of External Affairs": "This ministry handles foreign relations.",
    "Ministry of Education": "This ministry handles education-related policies.",
    "Ministry of Railways": "This ministry handles railway transport."
  },
  hint: "Disaster management is linked with internal administration and security."
},
  {
    category: "Polity",
    question: "Which article of the Indian Constitution deals with equality before law?",

    explanation: "Article 14 provides equality before law and equal protection of laws.",
    wrongExplanations: {
      "Article 19": "Article 19 deals with freedoms.",
      "Article 21": "Article 21 deals with life and personal liberty.",
      "Article 32": "Article 32 deals with constitutional remedies.",
    },
    hint: "Think about equality.",
  },
{
  category: "Current Affairs",
  question: "Who is the constitutional head of India?",
  options: [
    "Prime Minister",
    "President",
    "Chief Justice of India",
    "Vice-President"
  ],
  answer: "President",
  explanation:
    "The President is the constitutional head of the Republic of India.",
  wrongExplanations: {
    "Prime Minister": "The Prime Minister is the head of government.",
    "Chief Justice of India": "The CJI heads the judiciary.",
    "Vice-President": "The Vice-President is not the constitutional head."
  },
  hint:
    "Think constitutional head, not executive head."
},

{
  category: "Current Affairs",
  question: "Which institution is known as the lower house of Parliament?",
  options: [
    "Rajya Sabha",
    "Lok Sabha",
    "Supreme Court",
    "Legislative Council"
  ],
  answer: "Lok Sabha",
  explanation:
    "Lok Sabha is the directly elected lower house of the Indian Parliament.",
  wrongExplanations: {
    "Rajya Sabha": "Rajya Sabha is the upper house.",
    "Supreme Court": "The Supreme Court is part of the judiciary.",
    "Legislative Council": "This exists only in some states."
  },
  hint:
    "Direct election by the people."
},

{
  category: "Current Affairs",
  question: "Which body conducts elections to Parliament and State Legislatures in India?",
  options: [
    "UPSC",
    "Election Commission of India",
    "NITI Aayog",
    "Finance Commission"
  ],
  answer: "Election Commission of India",
  explanation:
    "The Election Commission supervises and conducts elections across India.",
  wrongExplanations: {
    "UPSC": "UPSC conducts recruitment examinations.",
    "NITI Aayog": "NITI Aayog is a policy think tank.",
    "Finance Commission": "Finance Commission deals with financial distribution."
  },
  hint:
    "Think elections."
},

{
  category: "Current Affairs",
  question: "What is the term of office of the President of India?",
  options: [
    "4 years",
    "5 years",
    "6 years",
    "7 years"
  ],
  answer: "5 years",
  explanation:
    "The President of India holds office for a term of five years.",
  wrongExplanations: {
    "4 years": "Incorrect constitutional term.",
    "6 years": "This is not the President's tenure.",
    "7 years": "Incorrect."
  },
  hint:
    "Same duration as a full Lok Sabha term."
},
];

const categories = ["All", ...Array.from(new Set(questions.map((q) => q.category)))];

export default function HomePage() {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const filteredQuestions = useMemo(() => {
    if (category === "All") return questions;
    return questions.filter((q) => q.category === category);
  }, [category]);

  const currentQuestion = filteredQuestions[index % filteredQuestions.length];

  function nextQuestion() {
    setSelectedAnswer("");
    setIndex((prev) => (prev + 1) % filteredQuestions.length);
  }

  function changeCategory(cat: string) {
    setCategory(cat);
    setIndex(0);
    setSelectedAnswer("");
  }

  const isCorrect = selectedAnswer === currentQuestion.answer;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 rounded-3xl border border-cyan-400/40 bg-slate-900 p-6 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Mizoram Exam Practice
          </p>

          <h1 className="mt-3 text-4xl font-bold text-cyan-300 md:text-6xl">
            MPSC FREE MOCK
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            MCQ-style practice questions with correct explanation, wrong answer
            explanation, elimination method and hints for Mizoram students.
          </p>

          <div className="mt-6">
            <Link
              href="/college-notes"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Open Arts College Notes
            </Link>
          </div>
        </section>

        <section className="mb-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => changeCategory(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                category === cat
                  ? "bg-cyan-400 text-slate-950"
                  : "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <p className="text-sm text-cyan-300">
              Question {index + 1} of {filteredQuestions.length} |{" "}
              {currentQuestion.category}
            </p>

            <h2 className="mt-4 text-2xl font-bold text-white">
              {currentQuestion.question}
            </h2>

            <div className="mt-6 grid gap-4">
              {currentQuestion.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedAnswer(option)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selectedAnswer === option
                      ? option === currentQuestion?.answer
                        ? "border-green-400 bg-green-400/15"
                        : "border-red-400 bg-red-400/15"
                      : "border-cyan-400/70 hover:bg-cyan-400/10"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={nextQuestion}
              className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Next Question
            </button>
          </div>

          <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <h2 className="text-3xl font-bold text-cyan-300">Explanation</h2>

            {!selectedAnswer ? (
              <p className="mt-6 text-slate-300">
                Select an answer to view the explanation.
              </p>
            ) : (
              <div className="mt-6 space-y-5">
                <div
                  className={`rounded-2xl border p-4 ${
                    isCorrect
                      ? "border-green-400 bg-green-400/10"
                      : "border-red-400 bg-red-400/10"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold ${
                      isCorrect ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isCorrect ? "Correct Answer" : "Wrong Answer"}
                  </h3>

                  <p className="mt-3 text-slate-300">
                    {isCorrect
                      ? currentQuestion.explanation
                      : currentQuestion.wrongExplanations[
                          selectedAnswer as keyof typeof currentQuestion.wrongExplanations
                        ]}
                  </p>
                </div>

                {!isCorrect && (
                  <div className="rounded-2xl border border-cyan-400/50 p-4">
                    <p className="text-cyan-300">Correct Answer:</p>
                    <p className="mt-2 text-xl font-bold text-white">
                      {currentQuestion.answer}
                    </p>

                    <p className="mt-4 text-slate-300">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}

                <div className="rounded-2xl border border-yellow-400/50 bg-yellow-400/10 p-4">
                  <h3 className="font-bold text-yellow-300">
                    Elimination Method / Hint
                  </h3>
                  <p className="mt-2 text-slate-300">{currentQuestion.hint}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}