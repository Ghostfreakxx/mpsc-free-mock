"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const questions = [
  {
    subject: "Biology",
    question: "Which organelle is known as the powerhouse of the cell?",
    options: [
      "Nucleus",
      "Mitochondria",
      "Ribosome",
      "Golgi apparatus",
    ],
    answer: "Mitochondria",
    explanation:
      "Mitochondria produce most of the energy needed by the cell in the form of ATP.",
    wrongExplanations: {
      Nucleus:
        "The nucleus controls cell activities and contains genetic material.",
      Ribosome:
        "Ribosomes are mainly responsible for protein synthesis.",
      "Golgi apparatus":
        "The Golgi apparatus modifies, sorts and packages proteins.",
    },
    hint: "Think about energy production inside the cell.",
  },

  {
    subject: "Biology",
    question: "Which molecule carries genetic information in most organisms?",
    options: ["DNA", "ATP", "Glucose", "Protein"],
    answer: "DNA",
    explanation:
      "DNA stores the genetic information needed for growth, development and reproduction.",
    wrongExplanations: {
      ATP: "ATP mainly stores and transfers energy in cells.",
      Glucose: "Glucose is an important source of energy.",
      Protein:
        "Proteins perform many functions but they are not the main genetic material.",
    },
    hint: "Think of chromosomes and genes.",
  },

  {
    subject: "Chemistry",
    question: "What is the atomic number of carbon?",
    options: ["4", "6", "8", "12"],
    answer: "6",
    explanation:
      "Carbon has 6 protons in its nucleus, so its atomic number is 6.",
    wrongExplanations: {
      "4": "Beryllium has atomic number 4.",
      "8": "Oxygen has atomic number 8.",
      "12": "12 is close to the common mass number of carbon, not its atomic number.",
    },
    hint: "Atomic number means number of protons.",
  },

  {
    subject: "Chemistry",
    question: "Which gas is produced when an acid reacts with a metal?",
    options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"],
    answer: "Hydrogen",
    explanation:
      "When many metals react with acids, they form a salt and release hydrogen gas.",
    wrongExplanations: {
      Oxygen: "Oxygen is not normally produced in this reaction.",
      Nitrogen: "Nitrogen is not produced in a typical acid-metal reaction.",
      "Carbon dioxide":
        "Carbon dioxide is commonly produced when acids react with carbonates.",
    },
    hint: "Acid + metal → salt + ?",
  },

  {
    subject: "Physics",
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Pascal", "Watt"],
    answer: "Newton",
    explanation:
      "The SI unit of force is the newton, named after Sir Isaac Newton.",
    wrongExplanations: {
      Joule: "Joule is the SI unit of energy.",
      Pascal: "Pascal is the SI unit of pressure.",
      Watt: "Watt is the SI unit of power.",
    },
    hint: "Remember Newton's laws of motion.",
  },

  {
    subject: "Physics",
    question: "Which quantity is measured in volts?",
    options: [
      "Electric current",
      "Electric potential difference",
      "Resistance",
      "Power",
    ],
    answer: "Electric potential difference",
    explanation:
      "Volt is the SI unit of electric potential difference or voltage.",
    wrongExplanations: {
      "Electric current": "Electric current is measured in amperes.",
      Resistance: "Resistance is measured in ohms.",
      Power: "Electrical power is measured in watts.",
    },
    hint: "The name itself is related to voltage.",
  },
  {
  subject: "Biology",
  question: "Which cell organelle is responsible for protein synthesis?",
  options: ["Ribosome", "Lysosome", "Mitochondria", "Centrosome"],
  answer: "Ribosome",
  explanation:
    "Ribosomes are the sites of protein synthesis in the cell. They join amino acids together to form proteins.",
  wrongExplanations: {
    Lysosome: "Lysosomes mainly contain digestive enzymes.",
    Mitochondria: "Mitochondria mainly produce ATP energy.",
    Centrosome: "The centrosome helps in cell division.",
  },
  hint: "Think about where proteins are made.",
},

{
  subject: "Biology",
  question: "Which blood cells help in fighting infections?",
  options: [
    "Red blood cells",
    "White blood cells",
    "Platelets",
    "Plasma"
  ],
  answer: "White blood cells",
  explanation:
    "White blood cells protect the body against infections and harmful microorganisms.",
  wrongExplanations: {
    "Red blood cells": "Red blood cells mainly transport oxygen.",
    Platelets: "Platelets mainly help in blood clotting.",
    Plasma: "Plasma is the liquid part of blood.",
  },
  hint: "Think about the immune system.",
},

{
  subject: "Biology",
  question: "Which part of the human brain controls balance and posture?",
  options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
  answer: "Cerebellum",
  explanation:
    "The cerebellum coordinates voluntary movements and helps maintain balance and posture.",
  wrongExplanations: {
    Cerebrum: "The cerebrum is mainly involved in thinking, memory and voluntary actions.",
    Medulla: "The medulla controls involuntary functions like breathing and heartbeat.",
    Hypothalamus: "The hypothalamus helps regulate temperature, hunger and hormones.",
  },
  hint: "Think about coordination of movement.",
},

{
  subject: "Biology",
  question: "Which hormone lowers blood glucose level?",
  options: ["Adrenaline", "Insulin", "Thyroxine", "Glucagon"],
  answer: "Insulin",
  explanation:
    "Insulin lowers blood glucose by helping body cells take up glucose and promoting its storage.",
  wrongExplanations: {
    Adrenaline: "Adrenaline prepares the body for emergency situations.",
    Thyroxine: "Thyroxine mainly regulates metabolism.",
    Glucagon: "Glucagon raises blood glucose level.",
  },
  hint: "Think about the hormone linked with diabetes.",
},

{
  subject: "Chemistry",
  question: "What is the pH of a neutral solution at room temperature?",
  options: ["0", "5", "7", "14"],
  answer: "7",
  explanation:
    "A neutral solution such as pure water has a pH of 7 at room temperature.",
  wrongExplanations: {
    "0": "A pH near 0 is strongly acidic.",
    "5": "A pH of 5 is acidic.",
    "14": "A pH near 14 is strongly basic.",
  },
  hint: "Neutral lies in the middle of the pH scale.",
},

{
  subject: "Chemistry",
  question: "Which element has the chemical symbol Na?",
  options: ["Nitrogen", "Sodium", "Neon", "Nickel"],
  answer: "Sodium",
  explanation:
    "Na is the chemical symbol for sodium. It comes from the Latin name natrium.",
  wrongExplanations: {
    Nitrogen: "Nitrogen has the symbol N.",
    Neon: "Neon has the symbol Ne.",
    Nickel: "Nickel has the symbol Ni.",
  },
  hint: "Think of common salt.",
},

{
  subject: "Chemistry",
  question: "Which type of bond is formed by transfer of electrons?",
  options: [
    "Covalent bond",
    "Ionic bond",
    "Hydrogen bond",
    "Metallic bond"
  ],
  answer: "Ionic bond",
  explanation:
    "An ionic bond forms when electrons are transferred from one atom to another, producing oppositely charged ions.",
  wrongExplanations: {
    "Covalent bond": "Covalent bonds involve sharing of electrons.",
    "Hydrogen bond": "Hydrogen bonds are weak intermolecular attractions.",
    "Metallic bond": "Metallic bonding involves delocalized electrons in metals.",
  },
  hint: "Transfer, not sharing.",
},

{
  subject: "Chemistry",
  question: "Which gas is essential for combustion?",
  options: ["Nitrogen", "Oxygen", "Hydrogen", "Carbon dioxide"],
  answer: "Oxygen",
  explanation:
    "Oxygen supports combustion and is required for most ordinary burning processes.",
  wrongExplanations: {
    Nitrogen: "Nitrogen does not normally support combustion.",
    Hydrogen: "Hydrogen is combustible itself but is not the main gas supporting combustion.",
    "Carbon dioxide": "Carbon dioxide is commonly used to extinguish fires.",
  },
  hint: "Fire needs fuel, heat and this gas.",
},

{
  subject: "Physics",
  question: "What is the SI unit of electric current?",
  options: ["Volt", "Ampere", "Ohm", "Coulomb"],
  answer: "Ampere",
  explanation:
    "The ampere is the SI unit used to measure electric current.",
  wrongExplanations: {
    Volt: "Volt measures electric potential difference.",
    Ohm: "Ohm measures electrical resistance.",
    Coulomb: "Coulomb measures electric charge.",
  },
  hint: "Current is measured using an ammeter.",
},

{
  subject: "Physics",
  question: "Which law states that every action has an equal and opposite reaction?",
  options: [
    "Newton's First Law",
    "Newton's Second Law",
    "Newton's Third Law",
    "Law of Gravitation"
  ],
  answer: "Newton's Third Law",
  explanation:
    "Newton's Third Law states that for every action, there is an equal and opposite reaction.",
  wrongExplanations: {
    "Newton's First Law": "The First Law deals with inertia.",
    "Newton's Second Law": "The Second Law relates force, mass and acceleration.",
    "Law of Gravitation": "This describes gravitational attraction between masses.",
  },
  hint: "Action and reaction.",
},

{
  subject: "Physics",
  question: "What happens to the speed of light when it enters glass from air?",
  options: [
    "It increases",
    "It decreases",
    "It remains the same",
    "It becomes zero"
  ],
  answer: "It decreases",
  explanation:
    "Light travels slower in glass than in air because glass has a higher refractive index.",
  wrongExplanations: {
    "It increases": "Light does not speed up when entering glass from air.",
    "It remains the same": "Its frequency stays the same, but its speed changes.",
    "It becomes zero": "Light continues travelling through glass.",
  },
  hint: "Glass is optically denser than air.",
},

{
  subject: "Physics",
  question: "Which instrument is used to measure electric potential difference?",
  options: ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
  answer: "Voltmeter",
  explanation:
    "A voltmeter measures electric potential difference between two points in a circuit.",
  wrongExplanations: {
    Ammeter: "An ammeter measures electric current.",
    Galvanometer: "A galvanometer detects and measures small electric currents.",
    Ohmmeter: "An ohmmeter measures electrical resistance.",
  },
  hint: "The name is almost the same as the unit volt.",
},
{
  subject: "Biology",
  question: "Which phase of mitosis is characterized by the alignment of chromosomes at the equatorial plate?",
  options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
  answer: "Metaphase",
  explanation:
    "During metaphase, chromosomes align at the equatorial plate of the cell before sister chromatids separate.",
  wrongExplanations: {
    Prophase: "During prophase, chromosomes condense and the spindle begins to form.",
    Anaphase: "During anaphase, sister chromatids separate and move toward opposite poles.",
    Telophase: "During telophase, chromosomes reach the poles and new nuclear membranes form.",
  },
  hint: "Think of the stage where chromosomes line up in the middle.",
},

{
  subject: "Biology",
  question: "Which enzyme present in saliva begins the digestion of starch?",
  options: ["Pepsin", "Trypsin", "Salivary amylase", "Lipase"],
  answer: "Salivary amylase",
  explanation:
    "Salivary amylase begins carbohydrate digestion in the mouth by breaking down starch.",
  wrongExplanations: {
    Pepsin: "Pepsin digests proteins mainly in the stomach.",
    Trypsin: "Trypsin helps digest proteins in the small intestine.",
    Lipase: "Lipase mainly breaks down fats.",
  },
  hint: "The enzyme is also called salivary amylase or ptyalin.",
},

{
  subject: "Biology",
  question: "Which chamber of the human heart pumps oxygenated blood to the entire body?",
  options: [
    "Right atrium",
    "Right ventricle",
    "Left atrium",
    "Left ventricle"
  ],
  answer: "Left ventricle",
  explanation:
    "The left ventricle pumps oxygenated blood into the aorta, which carries it to the body.",
  wrongExplanations: {
    "Right atrium": "The right atrium receives deoxygenated blood from the body.",
    "Right ventricle": "The right ventricle pumps deoxygenated blood to the lungs.",
    "Left atrium": "The left atrium receives oxygenated blood from the lungs.",
  },
  hint: "Look for the chamber with the thickest muscular wall.",
},

{
  subject: "Biology",
  question: "What is the functional unit of the human kidney?",
  options: ["Neuron", "Nephron", "Alveolus", "Villus"],
  answer: "Nephron",
  explanation:
    "The nephron is the structural and functional unit of the kidney and is responsible for filtering blood and forming urine.",
  wrongExplanations: {
    Neuron: "A neuron is the functional unit of the nervous system.",
    Alveolus: "Alveoli are tiny air sacs involved in gas exchange in the lungs.",
    Villus: "Villi increase the surface area for absorption in the small intestine.",
  },
  hint: "Its name sounds similar to nephrology, the study of kidneys.",
},

{
  subject: "Biology",
  question: "Which nitrogenous base is present in RNA but absent in DNA?",
  options: ["Adenine", "Guanine", "Thymine", "Uracil"],
  answer: "Uracil",
  explanation:
    "RNA contains uracil instead of thymine. DNA normally contains thymine.",
  wrongExplanations: {
    Adenine: "Adenine occurs in both DNA and RNA.",
    Guanine: "Guanine occurs in both DNA and RNA.",
    Thymine: "Thymine is normally found in DNA, not RNA.",
  },
  hint: "RNA replaces thymine with another base beginning with U.",
},

{
  subject: "Biology",
  question: "Which hormone is responsible for the fight-or-flight response?",
  options: ["Insulin", "Adrenaline", "Thyroxine", "Melatonin"],
  answer: "Adrenaline",
  explanation:
    "Adrenaline prepares the body for stressful or emergency situations by increasing heart rate and energy availability.",
  wrongExplanations: {
    Insulin: "Insulin mainly helps regulate blood glucose.",
    Thyroxine: "Thyroxine mainly regulates metabolic activity.",
    Melatonin: "Melatonin helps regulate the sleep-wake cycle.",
  },
  hint: "Think about the adrenal glands and emergency situations.",
},

{
  subject: "Biology",
  question: "Which structure connects the developing human foetus to the placenta?",
  options: ["Fallopian tube", "Umbilical cord", "Ureter", "Cervix"],
  answer: "Umbilical cord",
  explanation:
    "The umbilical cord connects the developing foetus to the placenta and allows exchange of substances through foetal blood vessels.",
  wrongExplanations: {
    "Fallopian tube": "The fallopian tube carries the ovum and is usually the site of fertilization.",
    Ureter: "The ureter carries urine from the kidney to the urinary bladder.",
    Cervix: "The cervix is the lower narrow part of the uterus.",
  },
  hint: "It connects the baby with the placenta during pregnancy.",
},

{
  subject: "Biology",
  question: "In humans, how many chromosomes are normally present in a somatic cell?",
  options: ["23", "44", "46", "48"],
  answer: "46",
  explanation:
    "Human somatic cells normally contain 46 chromosomes arranged in 23 pairs.",
  wrongExplanations: {
    "23": "Human gametes contain 23 chromosomes, not normal somatic cells.",
    "44": "There are 44 autosomes, but two additional sex chromosomes make the total 46.",
    "48": "Normal human somatic cells contain 46 chromosomes.",
  },
  hint: "Humans have 23 pairs of chromosomes.",
},

{
  subject: "Chemistry",
  question: "What is the maximum number of electrons that can occupy the first electron shell?",
  options: ["2", "4", "8", "18"],
  answer: "2",
  explanation:
    "The first shell has n = 1. Using the formula 2n², it can contain a maximum of 2 electrons.",
  wrongExplanations: {
    "4": "The first shell cannot accommodate four electrons.",
    "8": "Eight is the maximum commonly associated with the second shell.",
    "18": "Eighteen is the maximum capacity of the third shell according to 2n².",
  },
  hint: "Use the formula 2n² with n = 1.",
},

{
  subject: "Chemistry",
  question: "Which element is the most electronegative?",
  options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
  answer: "Fluorine",
  explanation:
    "Fluorine has the highest electronegativity among all elements.",
  wrongExplanations: {
    Oxygen: "Oxygen is highly electronegative, but fluorine is higher.",
    Chlorine: "Chlorine is highly electronegative, but less than fluorine.",
    Nitrogen: "Nitrogen is electronegative, but fluorine has a greater value.",
  },
  hint: "Look toward the upper-right region of the periodic table.",
},

{
  subject: "Chemistry",
  question: "Avogadro's number is approximately:",
  options: [
    "6.022 × 10²³",
    "3.0 × 10⁸",
    "9.8 × 10²",
    "1.6 × 10⁻¹⁹"
  ],
  answer: "6.022 × 10²³",
  explanation:
    "One mole contains approximately 6.022 × 10²³ specified elementary entities.",
  wrongExplanations: {
    "3.0 × 10⁸": "This value is associated with the speed of light in metres per second.",
    "9.8 × 10²": "This is not Avogadro's number.",
    "1.6 × 10⁻¹⁹": "This value is associated with the magnitude of the elementary charge in coulombs.",
  },
  hint: "Think of the number of particles present in one mole.",
},

{
  subject: "Chemistry",
  question: "Which quantum number describes the shape of an atomic orbital?",
  options: [
    "Principal quantum number",
    "Azimuthal quantum number",
    "Magnetic quantum number",
    "Spin quantum number"
  ],
  answer: "Azimuthal quantum number",
  explanation:
    "The azimuthal or angular momentum quantum number determines the subshell and the general shape of an orbital.",
  wrongExplanations: {
    "Principal quantum number": "The principal quantum number mainly describes the main energy level and size.",
    "Magnetic quantum number": "The magnetic quantum number describes orbital orientation.",
    "Spin quantum number": "The spin quantum number describes electron spin.",
  },
  hint: "Remember: n = shell, l = shape.",
},

{
  subject: "Chemistry",
  question: "What type of hybridization is present in methane (CH₄)?",
  options: ["sp", "sp²", "sp³", "dsp²"],
  answer: "sp³",
  explanation:
    "The carbon atom in methane undergoes sp³ hybridization and forms four equivalent C-H bonds in a tetrahedral arrangement.",
  wrongExplanations: {
    sp: "sp hybridization commonly produces a linear arrangement.",
    "sp²": "sp² hybridization commonly produces a trigonal planar arrangement.",
    "dsp²": "dsp² hybridization is associated with square planar geometry in certain complexes.",
  },
  hint: "Methane has four equivalent bonds around carbon.",
},

{
  subject: "Chemistry",
  question: "Which substance acts as an oxidizing agent during a redox reaction?",
  options: [
    "The substance that gains electrons",
    "The substance that loses electrons",
    "The substance that loses protons",
    "The substance that gains neutrons"
  ],
  answer: "The substance that gains electrons",
  explanation:
    "An oxidizing agent causes another substance to be oxidized and is itself reduced by gaining electrons.",
  wrongExplanations: {
    "The substance that loses electrons": "A species losing electrons is being oxidized and can act as a reducing agent.",
    "The substance that loses protons": "Proton transfer describes acid-base behaviour, not the definition of an oxidizing agent.",
    "The substance that gains neutrons": "Redox reactions involve changes in oxidation states through electron transfer, not neutron transfer.",
  },
  hint: "Remember OIL RIG: Reduction Is Gain of electrons.",
},

{
  subject: "Physics",
  question: "A body moving with constant velocity has:",
  options: [
    "Constant acceleration",
    "Zero acceleration",
    "Increasing acceleration",
    "Decreasing mass"
  ],
  answer: "Zero acceleration",
  explanation:
    "Acceleration is the rate of change of velocity. If velocity remains constant, acceleration is zero.",
  wrongExplanations: {
    "Constant acceleration": "A non-zero acceleration would change the velocity.",
    "Increasing acceleration": "Increasing acceleration would continuously change the velocity.",
    "Decreasing mass": "Mass does not determine whether velocity is constant.",
  },
  hint: "Ask yourself whether the velocity is changing.",
},

{
  subject: "Physics",
  question: "What is the approximate acceleration due to gravity near the surface of Earth?",
  options: ["4.9 m/s²", "9.8 m/s²", "19.6 m/s²", "98 m/s²"],
  answer: "9.8 m/s²",
  explanation:
    "Near Earth's surface, the acceleration due to gravity is approximately 9.8 m/s².",
  wrongExplanations: {
    "4.9 m/s²": "4.9 appears in some displacement calculations involving half of g.",
    "19.6 m/s²": "This is approximately twice the value of g.",
    "98 m/s²": "This is approximately ten times the value of g.",
  },
  hint: "The standard value of g is just under 10 m/s².",
},

{
  subject: "Physics",
  question: "According to Ohm's law, voltage is equal to:",
  options: ["IR", "I/R", "R/I", "I²R"],
  answer: "IR",
  explanation:
    "Ohm's law is V = IR, where V is potential difference, I is current and R is resistance.",
  wrongExplanations: {
    "I/R": "This is not the standard form of Ohm's law.",
    "R/I": "Resistance divided by current does not give voltage.",
    "I²R": "I²R is used in the expression for electrical power.",
  },
  hint: "Remember the simple formula V = ?",
},

{
  subject: "Physics",
  question: "Which type of mirror is commonly used as a rear-view mirror in vehicles?",
  options: [
    "Plane mirror",
    "Concave mirror",
    "Convex mirror",
    "Parabolic mirror"
  ],
  answer: "Convex mirror",
  explanation:
    "Convex mirrors provide a wider field of view and form upright, diminished virtual images, making them useful as rear-view mirrors.",
  wrongExplanations: {
    "Plane mirror": "A plane mirror provides a narrower field of view than a convex mirror.",
    "Concave mirror": "Concave mirrors can magnify nearby objects and do not provide the required wide field of view.",
    "Parabolic mirror": "Parabolic reflectors are commonly used to focus or direct waves rather than as ordinary vehicle rear-view mirrors.",
  },
  hint: "Drivers need to see a wider area behind the vehicle.",
},

{
  subject: "Physics",
  question: "The energy possessed by a body due to its motion is called:",
  options: [
    "Potential energy",
    "Kinetic energy",
    "Chemical energy",
    "Nuclear energy"
  ],
  answer: "Kinetic energy",
  explanation:
    "Kinetic energy is the energy possessed by an object because of its motion.",
  wrongExplanations: {
    "Potential energy": "Potential energy is associated with position or configuration.",
    "Chemical energy": "Chemical energy is stored in chemical bonds.",
    "Nuclear energy": "Nuclear energy is associated with changes involving atomic nuclei.",
  },
  hint: "The formula is ½mv².",
},

{
  subject: "Physics",
  question: "What is the relationship between frequency and time period?",
  options: ["f = T", "f = 1/T", "f = T²", "f = 2T"],
  answer: "f = 1/T",
  explanation:
    "Frequency and time period are reciprocals. Therefore, frequency f = 1/T.",
  wrongExplanations: {
    "f = T": "Frequency and time period are not equal; they have different units.",
    "f = T²": "Frequency is not the square of the time period.",
    "f = 2T": "There is no general relation stating that frequency is twice the time period.",
  },
  hint: "If one increases, the other decreases. They are reciprocals.",
},
{
  subject: "Biology",
  question: "Which organ produces bile in the human body?",
  options: ["Pancreas", "Liver", "Gall bladder", "Small intestine"],
  answer: "Liver",
  explanation:
    "The liver produces bile, which helps in the digestion and absorption of fats.",
  wrongExplanations: {
    Pancreas: "The pancreas produces digestive enzymes and hormones such as insulin.",
    "Gall bladder": "The gall bladder stores and concentrates bile but does not produce it.",
    "Small intestine": "The small intestine is mainly involved in digestion and absorption.",
  },
  hint: "The largest internal organ produces it.",
},

{
  subject: "Biology",
  question: "Which part of the nephron is mainly responsible for ultrafiltration of blood?",
  options: [
    "Loop of Henle",
    "Glomerulus",
    "Collecting duct",
    "Distal convoluted tubule"
  ],
  answer: "Glomerulus",
  explanation:
    "Ultrafiltration occurs in the glomerulus, where blood pressure forces small molecules into Bowman's capsule.",
  wrongExplanations: {
    "Loop of Henle": "The Loop of Henle mainly helps in concentration of urine.",
    "Collecting duct": "The collecting duct mainly carries urine and helps regulate water reabsorption.",
    "Distal convoluted tubule": "The distal convoluted tubule is mainly involved in selective secretion and reabsorption.",
  },
  hint: "Think of the capillary network inside Bowman's capsule.",
},

{
  subject: "Biology",
  question: "Which blood group is known as the universal donor for red blood cell transfusion?",
  options: ["A positive", "AB positive", "O negative", "B negative"],
  answer: "O negative",
  explanation:
    "O negative red blood cells lack A, B and Rh antigens, so they are commonly used in emergency transfusions when the recipient's blood group is unknown.",
  wrongExplanations: {
    "A positive": "A positive blood contains A and Rh antigens.",
    "AB positive": "AB positive is commonly known as the universal recipient for red blood cells.",
    "B negative": "B negative blood contains B antigen.",
  },
  hint: "Think of the blood group with no A, B or Rh antigen.",
},

{
  subject: "Biology",
  question: "Which gland is commonly called the master gland of the endocrine system?",
  options: ["Thyroid", "Pituitary", "Adrenal", "Pineal"],
  answer: "Pituitary",
  explanation:
    "The pituitary gland is called the master gland because many of its hormones regulate other endocrine glands.",
  wrongExplanations: {
    Thyroid: "The thyroid mainly regulates metabolism through thyroid hormones.",
    Adrenal: "The adrenal glands produce hormones such as adrenaline and cortisol.",
    Pineal: "The pineal gland produces melatonin.",
  },
  hint: "It controls several other endocrine glands.",
},

{
  subject: "Biology",
  question: "Which process produces two genetically identical daughter cells?",
  options: ["Meiosis", "Mitosis", "Fertilization", "Crossing over"],
  answer: "Mitosis",
  explanation:
    "Mitosis usually produces two daughter cells that are genetically identical to the parent cell.",
  wrongExplanations: {
    Meiosis: "Meiosis produces haploid cells with genetic variation.",
    Fertilization: "Fertilization combines two gametes to form a zygote.",
    "Crossing over": "Crossing over creates genetic variation during meiosis.",
  },
  hint: "This is the division used for growth and tissue repair.",
},

{
  subject: "Biology",
  question: "Which molecule is the immediate source of energy for most cellular activities?",
  options: ["DNA", "ATP", "RNA", "Glycogen"],
  answer: "ATP",
  explanation:
    "ATP is often called the energy currency of the cell because it directly supplies energy for many cellular processes.",
  wrongExplanations: {
    DNA: "DNA stores genetic information.",
    RNA: "RNA mainly participates in gene expression and protein synthesis.",
    Glycogen: "Glycogen stores glucose and must be broken down before its energy can be used.",
  },
  hint: "It is called the energy currency of the cell.",
},

{
  subject: "Biology",
  question: "Which pigment is mainly responsible for absorbing light during photosynthesis?",
  options: ["Melanin", "Chlorophyll", "Haemoglobin", "Keratin"],
  answer: "Chlorophyll",
  explanation:
    "Chlorophyll absorbs light energy used to drive photosynthesis in plants.",
  wrongExplanations: {
    Melanin: "Melanin is a pigment found mainly in animal tissues such as skin.",
    Haemoglobin: "Haemoglobin transports oxygen in blood.",
    Keratin: "Keratin is a structural protein found in hair, nails and skin.",
  },
  hint: "It gives leaves their green colour.",
},

{
  subject: "Biology",
  question: "Which part of a flower develops into the fruit after fertilization?",
  options: ["Anther", "Ovary", "Stigma", "Sepal"],
  answer: "Ovary",
  explanation:
    "After fertilization, the ovary generally develops into the fruit while the ovules develop into seeds.",
  wrongExplanations: {
    Anther: "The anther produces pollen grains.",
    Stigma: "The stigma receives pollen.",
    Sepal: "Sepals mainly protect the flower bud.",
  },
  hint: "Ovules become seeds, while this structure becomes the fruit.",
},

{
  subject: "Chemistry",
  question: "Which particle determines the atomic number of an element?",
  options: ["Neutron", "Proton", "Electron", "Nucleus"],
  answer: "Proton",
  explanation:
    "The atomic number is equal to the number of protons present in the nucleus of an atom.",
  wrongExplanations: {
    Neutron: "Neutrons affect the mass number and isotopes, not the atomic number.",
    Electron: "A neutral atom has the same number of electrons and protons, but atomic number is defined by proton number.",
    Nucleus: "The nucleus contains protons and neutrons, but the atomic number specifically counts protons.",
  },
  hint: "Atomic number = number of positively charged particles.",
},

{
  subject: "Chemistry",
  question: "Which gas law states that pressure is inversely proportional to volume at constant temperature?",
  options: ["Charles's law", "Boyle's law", "Avogadro's law", "Gay-Lussac's law"],
  answer: "Boyle's law",
  explanation:
    "Boyle's law states that for a fixed amount of gas at constant temperature, pressure is inversely proportional to volume.",
  wrongExplanations: {
    "Charles's law": "Charles's law relates volume and temperature at constant pressure.",
    "Avogadro's law": "Avogadro's law relates gas volume and number of moles.",
    "Gay-Lussac's law": "Gay-Lussac's law relates pressure and temperature at constant volume.",
  },
  hint: "Remember PV = constant.",
},

{
  subject: "Chemistry",
  question: "Which type of reaction involves loss of electrons?",
  options: ["Reduction", "Oxidation", "Neutralization", "Hydrolysis"],
  answer: "Oxidation",
  explanation:
    "Oxidation is the loss of electrons by a species.",
  wrongExplanations: {
    Reduction: "Reduction is the gain of electrons.",
    Neutralization: "Neutralization usually involves reaction between an acid and a base.",
    Hydrolysis: "Hydrolysis involves reaction with water.",
  },
  hint: "Remember OIL: Oxidation Is Loss.",
},

{
  subject: "Chemistry",
  question: "What is the molecular formula of sulphuric acid?",
  options: ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"],
  answer: "H₂SO₄",
  explanation:
    "Sulphuric acid has the molecular formula H₂SO₄.",
  wrongExplanations: {
    HCl: "HCl is hydrochloric acid.",
    "HNO₃": "HNO₃ is nitric acid.",
    "H₂CO₃": "H₂CO₃ is carbonic acid.",
  },
  hint: "It contains two hydrogens, one sulphur and four oxygens.",
},

{
  subject: "Chemistry",
  question: "Which element belongs to the noble gas group?",
  options: ["Chlorine", "Neon", "Sodium", "Oxygen"],
  answer: "Neon",
  explanation:
    "Neon belongs to Group 18, the noble gases, which have very low chemical reactivity.",
  wrongExplanations: {
    Chlorine: "Chlorine belongs to the halogen group.",
    Sodium: "Sodium is an alkali metal.",
    Oxygen: "Oxygen belongs to Group 16.",
  },
  hint: "Think of a gas commonly used in bright advertising lights.",
},

{
  subject: "Chemistry",
  question: "Which hydrocarbon contains only single carbon-carbon bonds?",
  options: ["Alkane", "Alkene", "Alkyne", "Aromatic hydrocarbon"],
  answer: "Alkane",
  explanation:
    "Alkanes are saturated hydrocarbons containing only single carbon-carbon bonds.",
  wrongExplanations: {
    Alkene: "Alkenes contain at least one carbon-carbon double bond.",
    Alkyne: "Alkynes contain at least one carbon-carbon triple bond.",
    "Aromatic hydrocarbon": "Aromatic compounds contain special delocalized bonding systems.",
  },
  hint: "Saturated hydrocarbons are the simplest family.",
},

{
  subject: "Physics",
  question: "Which quantity is equal to mass multiplied by velocity?",
  options: ["Force", "Momentum", "Power", "Pressure"],
  answer: "Momentum",
  explanation:
    "Linear momentum is given by p = mv, where m is mass and v is velocity.",
  wrongExplanations: {
    Force: "Force is related to the rate of change of momentum and can be written as F = ma in simple cases.",
    Power: "Power is the rate of doing work.",
    Pressure: "Pressure is force per unit area.",
  },
  hint: "Remember p = mv.",
},

{
  subject: "Physics",
  question: "Which physical quantity is measured in joules?",
  options: ["Force", "Energy", "Power", "Pressure"],
  answer: "Energy",
  explanation:
    "The joule is the SI unit of energy and work.",
  wrongExplanations: {
    Force: "Force is measured in newtons.",
    Power: "Power is measured in watts.",
    Pressure: "Pressure is measured in pascals.",
  },
  hint: "Work and this quantity share the same SI unit.",
},

{
  subject: "Physics",
  question: "A force of 10 N acts on a mass of 2 kg. What is the acceleration?",
  options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
  answer: "5 m/s²",
  explanation:
    "Using Newton's Second Law, F = ma. Therefore a = F/m = 10/2 = 5 m/s².",
  wrongExplanations: {
    "2 m/s²": "This does not follow a = F/m.",
    "10 m/s²": "This would ignore the mass of 2 kg.",
    "20 m/s²": "This results from multiplying instead of dividing force by mass.",
  },
  hint: "Use F = ma.",
},

{
  subject: "Physics",
  question: "Which electromagnetic wave has the highest frequency?",
  options: ["Radio waves", "Microwaves", "Visible light", "Gamma rays"],
  answer: "Gamma rays",
  explanation:
    "Gamma rays have the highest frequencies and shortest wavelengths in the electromagnetic spectrum.",
  wrongExplanations: {
    "Radio waves": "Radio waves have very low frequencies and long wavelengths.",
    Microwaves: "Microwaves have higher frequencies than radio waves but far below gamma rays.",
    "Visible light": "Visible light lies between infrared and ultraviolet and has lower frequency than gamma rays.",
  },
  hint: "Think of the most energetic electromagnetic radiation.",
},

{
  subject: "Physics",
  question: "Which lens is used to correct myopia?",
  options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
  answer: "Concave lens",
  explanation:
    "Myopia or short-sightedness is corrected using a concave or diverging lens.",
  wrongExplanations: {
    "Convex lens": "Convex lenses are commonly used to correct hypermetropia.",
    "Cylindrical lens": "Cylindrical lenses are commonly used for astigmatism.",
    "Bifocal lens": "Bifocal lenses are commonly used when correction is needed for both near and distant vision.",
  },
  hint: "Myopia needs a diverging lens.",
},

{
  subject: "Physics",
  question: "What is the SI unit of electrical resistance?",
  options: ["Volt", "Ampere", "Ohm", "Watt"],
  answer: "Ohm",
  explanation:
    "Electrical resistance is measured in ohms, represented by the symbol Ω.",
  wrongExplanations: {
    Volt: "Volt is the unit of potential difference.",
    Ampere: "Ampere is the unit of electric current.",
    Watt: "Watt is the unit of power.",
  },
  hint: "Think of Ohm's law.",
},
{
  subject: "Biology",
  question: "Which enzyme unwinds the DNA double helix during DNA replication?",
  options: ["DNA ligase", "Helicase", "DNA polymerase", "Primase"],
  answer: "Helicase",
  explanation:
    "Helicase unwinds the DNA double helix by separating the two DNA strands during replication.",
  wrongExplanations: {
    "DNA ligase": "DNA ligase joins DNA fragments together.",
    "DNA polymerase": "DNA polymerase synthesizes new DNA strands.",
    Primase: "Primase produces RNA primers needed to begin DNA synthesis.",
  },
  hint: "Its name suggests opening or unwinding the DNA helix.",
},

{
  subject: "Biology",
  question: "During which stage of meiosis does crossing over mainly occur?",
  options: [
    "Prophase I",
    "Metaphase I",
    "Anaphase II",
    "Telophase II"
  ],
  answer: "Prophase I",
  explanation:
    "Crossing over occurs during pachytene of Prophase I when homologous chromosomes exchange genetic material.",
  wrongExplanations: {
    "Metaphase I": "During Metaphase I, homologous chromosome pairs align at the equator.",
    "Anaphase II": "During Anaphase II, sister chromatids separate.",
    "Telophase II": "Telophase II occurs near the end of meiosis and produces haploid nuclei.",
  },
  hint: "Remember pachytene, a stage of Prophase I.",
},

{
  subject: "Biology",
  question: "Which cells of the pancreas secrete insulin?",
  options: [
    "Alpha cells",
    "Beta cells",
    "Delta cells",
    "Acinar cells"
  ],
  answer: "Beta cells",
  explanation:
    "Beta cells of the islets of Langerhans in the pancreas produce and secrete insulin.",
  wrongExplanations: {
    "Alpha cells": "Alpha cells mainly secrete glucagon.",
    "Delta cells": "Delta cells mainly secrete somatostatin.",
    "Acinar cells": "Acinar cells mainly produce digestive enzymes.",
  },
  hint: "Insulin is produced by one type of cell in the islets of Langerhans.",
},

{
  subject: "Biology",
  question: "Where does fertilization normally occur in the human female reproductive system?",
  options: [
    "Uterus",
    "Vagina",
    "Ampullary-isthmic junction",
    "Ovary"
  ],
  answer: "Ampullary-isthmic junction",
  explanation:
    "In humans, fertilization normally occurs near the ampullary-isthmic junction of the fallopian tube.",
  wrongExplanations: {
    Uterus: "The embryo normally implants in the uterus after fertilization.",
    Vagina: "The vagina receives sperm but is not the normal site of fertilization.",
    Ovary: "The ovary releases the secondary oocyte but fertilization normally occurs in the oviduct.",
  },
  hint: "NEET often asks for the specific region of the fallopian tube.",
},

{
  subject: "Biology",
  question: "Which immunoglobulin is the most abundant antibody in human blood?",
  options: ["IgA", "IgE", "IgG", "IgM"],
  answer: "IgG",
  explanation:
    "IgG is the most abundant immunoglobulin in human serum and plays an important role in secondary immune responses.",
  wrongExplanations: {
    IgA: "IgA is especially important in secretions such as saliva, tears and breast milk.",
    IgE: "IgE is strongly associated with allergic reactions and responses to parasites.",
    IgM: "IgM is generally the first antibody produced during a primary immune response.",
  },
  hint: "Think of the major antibody circulating in blood.",
},

{
  subject: "Biology",
  question: "Which part of the chloroplast is the main site of the light-dependent reactions of photosynthesis?",
  options: ["Stroma", "Thylakoid membrane", "Outer membrane", "Matrix"],
  answer: "Thylakoid membrane",
  explanation:
    "The light-dependent reactions occur mainly on the thylakoid membranes, where chlorophyll and electron transport components are located.",
  wrongExplanations: {
    Stroma: "The Calvin cycle or light-independent reactions occur mainly in the stroma.",
    "Outer membrane": "The chloroplast outer membrane is not the main site of the light reactions.",
    Matrix: "Matrix is a term commonly associated with the internal compartment of mitochondria.",
  },
  hint: "Think about where chlorophyll is located inside the chloroplast.",
},

{
  subject: "Biology",
  question: "What is the primary CO₂ acceptor in C3 plants?",
  options: [
    "PEP",
    "RuBP",
    "Oxaloacetic acid",
    "Pyruvic acid"
  ],
  answer: "RuBP",
  explanation:
    "In C3 plants, carbon dioxide combines with ribulose-1,5-bisphosphate (RuBP) during the Calvin cycle.",
  wrongExplanations: {
    PEP: "PEP is the primary carbon dioxide acceptor in C4 plants.",
    "Oxaloacetic acid": "Oxaloacetic acid is the first stable product of carbon fixation in C4 plants.",
    "Pyruvic acid": "Pyruvate participates in many metabolic pathways but is not the primary CO₂ acceptor in C3 plants.",
  },
  hint: "C3 plants use a five-carbon CO₂ acceptor.",
},

{
  subject: "Biology",
  question: "Which ecological pyramid is always upright?",
  options: [
    "Pyramid of numbers",
    "Pyramid of biomass",
    "Pyramid of energy",
    "All ecological pyramids"
  ],
  answer: "Pyramid of energy",
  explanation:
    "The pyramid of energy is always upright because energy decreases at each successive trophic level.",
  wrongExplanations: {
    "Pyramid of numbers": "The pyramid of numbers may sometimes be inverted.",
    "Pyramid of biomass": "The pyramid of biomass can be inverted, especially in some aquatic ecosystems.",
    "All ecological pyramids": "Only the energy pyramid must always remain upright.",
  },
  hint: "Energy is lost as it moves from one trophic level to another.",
},

{
  subject: "Chemistry",
  question: "What is the oxidation number of oxygen in most compounds?",
  options: ["+2", "+1", "-1", "-2"],
  answer: "-2",
  explanation:
    "In most compounds, oxygen has an oxidation number of -2, although important exceptions exist such as peroxides.",
  wrongExplanations: {
    "+2": "Oxygen does not normally have an oxidation number of +2 in ordinary compounds.",
    "+1": "This is not the usual oxidation state of oxygen.",
    "-1": "Oxygen has oxidation number -1 in peroxides, not in most compounds.",
  },
  hint: "Remember the usual oxidation state before thinking about exceptions.",
},

{
  subject: "Chemistry",
  question: "Which orbital has a spherical shape?",
  options: ["s orbital", "p orbital", "d orbital", "f orbital"],
  answer: "s orbital",
  explanation:
    "An s orbital has spherical symmetry around the nucleus.",
  wrongExplanations: {
    "p orbital": "A p orbital generally has a dumbbell shape.",
    "d orbital": "Most d orbitals have more complex clover-like shapes.",
    "f orbital": "f orbitals have still more complex shapes.",
  },
  hint: "Start with the simplest atomic orbital.",
},

{
  subject: "Chemistry",
  question: "What is the geometry of a methane molecule?",
  options: [
    "Linear",
    "Trigonal planar",
    "Tetrahedral",
    "Square planar"
  ],
  answer: "Tetrahedral",
  explanation:
    "Methane has four bonding pairs around its central carbon atom and has tetrahedral geometry with bond angles of about 109.5°.",
  wrongExplanations: {
    Linear: "Linear geometry generally has a bond angle of 180°.",
    "Trigonal planar": "Trigonal planar geometry involves three regions of electron density around the central atom.",
    "Square planar": "Square planar geometry is found in certain coordination compounds, not methane.",
  },
  hint: "CH₄ has four equivalent bonds around its central carbon.",
},

{
  subject: "Chemistry",
  question: "Which of the following is an example of an aromatic hydrocarbon?",
  options: ["Methane", "Ethene", "Benzene", "Ethyne"],
  answer: "Benzene",
  explanation:
    "Benzene is an aromatic hydrocarbon containing a stable conjugated ring of six carbon atoms.",
  wrongExplanations: {
    Methane: "Methane is a saturated alkane.",
    Ethene: "Ethene is an alkene.",
    Ethyne: "Ethyne is an alkyne.",
  },
  hint: "Think of the famous six-carbon ring.",
},

{
  subject: "Chemistry",
  question: "Which catalyst is used in the Haber process for the manufacture of ammonia?",
  options: ["Nickel", "Iron", "Platinum", "Vanadium pentoxide"],
  answer: "Iron",
  explanation:
    "Finely divided iron is used as the main catalyst in the Haber process for ammonia production.",
  wrongExplanations: {
    Nickel: "Nickel is commonly used as a catalyst in hydrogenation reactions.",
    Platinum: "Platinum is an important catalyst in several reactions but is not the standard Haber process catalyst.",
    "Vanadium pentoxide": "Vanadium pentoxide is used as a catalyst in the Contact process.",
  },
  hint: "Do not confuse the Haber process with the Contact process.",
},

{
  subject: "Chemistry",
  question: "Which functional group is present in alcohols?",
  options: ["-COOH", "-CHO", "-OH", "-NH₂"],
  answer: "-OH",
  explanation:
    "Alcohols contain the hydroxyl functional group, represented as -OH.",
  wrongExplanations: {
    "-COOH": "The -COOH group is the carboxyl group found in carboxylic acids.",
    "-CHO": "The -CHO group is characteristic of aldehydes.",
    "-NH₂": "The -NH₂ group is associated with amines.",
  },
  hint: "Think of ethanol: C₂H₅OH.",
},

{
  subject: "Physics",
  question: "A car travels 100 metres in 5 seconds at constant speed. What is its speed?",
  options: ["5 m/s", "10 m/s", "20 m/s", "50 m/s"],
  answer: "20 m/s",
  explanation:
    "Speed = distance ÷ time = 100 ÷ 5 = 20 m/s.",
  wrongExplanations: {
    "5 m/s": "This incorrectly uses the time value as the speed.",
    "10 m/s": "100 divided by 5 is 20, not 10.",
    "50 m/s": "This does not follow the formula speed = distance/time.",
  },
  hint: "Use speed = distance ÷ time.",
},

{
  subject: "Physics",
  question: "Which principle explains why a body immersed in a fluid experiences an upward buoyant force?",
  options: [
    "Pascal's principle",
    "Archimedes' principle",
    "Bernoulli's principle",
    "Hooke's law"
  ],
  answer: "Archimedes' principle",
  explanation:
    "Archimedes' principle states that the buoyant force on an immersed body equals the weight of the fluid displaced by it.",
  wrongExplanations: {
    "Pascal's principle": "Pascal's principle concerns transmission of pressure in an enclosed fluid.",
    "Bernoulli's principle": "Bernoulli's principle relates pressure, speed and height in flowing fluids.",
    "Hooke's law": "Hooke's law describes the behaviour of elastic systems such as springs within their elastic limit.",
  },
  hint: "Think of the famous story involving a bath and displacement of water.",
},

{
  subject: "Physics",
  question: "A 2 kg object moves with a velocity of 3 m/s. What is its kinetic energy?",
  options: ["3 J", "6 J", "9 J", "18 J"],
  answer: "9 J",
  explanation:
    "Kinetic energy = ½mv² = ½ × 2 × 3² = 9 J.",
  wrongExplanations: {
    "3 J": "This does not correctly apply the kinetic energy formula.",
    "6 J": "This is obtained from mv, which gives momentum rather than kinetic energy.",
    "18 J": "This misses the factor of one-half in the kinetic energy formula.",
  },
  hint: "Use KE = ½mv² and remember to square the velocity.",
},

{
  subject: "Physics",
  question: "The refractive index of a medium is given by:",
  options: ["v/c", "c/v", "cv", "c + v"],
  answer: "c/v",
  explanation:
    "The absolute refractive index is n = c/v, where c is the speed of light in vacuum and v is its speed in the medium.",
  wrongExplanations: {
    "v/c": "This is the reciprocal of the usual expression for absolute refractive index.",
    cv: "The speeds are not multiplied.",
    "c + v": "Refractive index is a ratio, not a sum.",
  },
  hint: "Light travels fastest in vacuum, so c goes on top.",
},

{
  subject: "Physics",
  question: "Two resistors of 2 Ω and 3 Ω are connected in series. What is their equivalent resistance?",
  options: ["1.2 Ω", "2.5 Ω", "5 Ω", "6 Ω"],
  answer: "5 Ω",
  explanation:
    "For resistors connected in series, resistances are added: R = 2 + 3 = 5 Ω.",
  wrongExplanations: {
    "1.2 Ω": "This type of value can arise when applying the parallel-resistance relation.",
    "2.5 Ω": "Series resistance is not calculated by taking the average.",
    "6 Ω": "The resistances should be added, not multiplied.",
  },
  hint: "Series = simply add the resistances.",
},

{
  subject: "Physics",
  question: "Which phenomenon proves the wave nature of light?",
  options: [
    "Photoelectric effect",
    "Interference",
    "Compton effect",
    "Pair production"
  ],
  answer: "Interference",
  explanation:
    "Interference results from the superposition of waves and provides strong evidence for the wave nature of light.",
  wrongExplanations: {
    "Photoelectric effect": "The photoelectric effect provides evidence for the particle nature of light.",
    "Compton effect": "The Compton effect supports the particle nature of electromagnetic radiation.",
    "Pair production": "Pair production demonstrates conversion of photon energy into matter rather than serving as the standard evidence for wave behaviour.",
  },
  hint: "Think about Young's double-slit experiment.",
},
{
  subject: "Biology",
  question: "Which organelle contains hydrolytic enzymes used for intracellular digestion?",
  options: ["Lysosome", "Ribosome", "Centriole", "Nucleolus"],
  answer: "Lysosome",
  explanation:
    "Lysosomes contain hydrolytic enzymes that digest worn-out cell components and foreign materials.",
  wrongExplanations: {
    Ribosome: "Ribosomes are mainly involved in protein synthesis.",
    Centriole: "Centrioles help organize spindle fibres during cell division.",
    Nucleolus: "The nucleolus is mainly involved in ribosome formation."
  },
  hint: "It is sometimes called the digestive bag of the cell."
},

{
  subject: "Biology",
  question: "Which organelle is mainly responsible for modifying and packaging proteins?",
  options: ["Golgi apparatus", "Mitochondrion", "Lysosome", "Centriole"],
  answer: "Golgi apparatus",
  explanation:
    "The Golgi apparatus modifies, sorts and packages proteins and lipids for transport.",
  wrongExplanations: {
    Mitochondrion: "Mitochondria are mainly involved in ATP production.",
    Lysosome: "Lysosomes mainly perform intracellular digestion.",
    Centriole: "Centrioles participate mainly in cell division."
  },
  hint: "Think of the packaging and dispatch centre of the cell."
},

{
  subject: "Biology",
  question: "Which structure regulates the movement of substances into and out of a cell?",
  options: ["Cell membrane", "Nucleolus", "Chromosome", "Centriole"],
  answer: "Cell membrane",
  explanation:
    "The cell membrane is selectively permeable and controls movement of substances into and out of the cell.",
  wrongExplanations: {
    Nucleolus: "The nucleolus helps form ribosomes.",
    Chromosome: "Chromosomes contain genetic material.",
    Centriole: "Centrioles assist in cell division."
  },
  hint: "It forms the selective boundary of the cell."
},

{
  subject: "Biology",
  question: "Which form of cell division produces gametes in humans?",
  options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
  answer: "Meiosis",
  explanation:
    "Meiosis reduces the chromosome number by half and produces haploid gametes.",
  wrongExplanations: {
    Mitosis: "Mitosis usually produces genetically similar diploid cells for growth and repair.",
    "Binary fission": "Binary fission is common in prokaryotes.",
    Budding: "Budding is an asexual reproductive method seen in organisms such as yeast."
  },
  hint: "Gametes must contain half the normal chromosome number."
},

{
  subject: "Biology",
  question: "A human sperm normally contains how many chromosomes?",
  options: ["22", "23", "44", "46"],
  answer: "23",
  explanation:
    "Human gametes are haploid and normally contain 23 chromosomes.",
  wrongExplanations: {
    "22": "There are 22 autosomes plus one sex chromosome in a human sperm.",
    "44": "Forty-four refers only to the autosomes in a diploid somatic cell.",
    "46": "Forty-six is the normal diploid chromosome number in somatic cells."
  },
  hint: "Gametes contain one chromosome from each of the 23 pairs."
},

{
  subject: "Biology",
  question: "Which molecule carries amino acids to the ribosome during protein synthesis?",
  options: ["mRNA", "tRNA", "DNA", "rRNA only"],
  answer: "tRNA",
  explanation:
    "Transfer RNA carries specific amino acids to the ribosome during translation.",
  wrongExplanations: {
    mRNA: "Messenger RNA carries the genetic code from DNA to the ribosome.",
    DNA: "DNA stores genetic information.",
    "rRNA only": "rRNA forms an important part of ribosomes but does not carry amino acids."
  },
  hint: "The T stands for transfer."
},

{
  subject: "Biology",
  question: "What is the process of formation of RNA from a DNA template called?",
  options: ["Replication", "Translation", "Transcription", "Mutation"],
  answer: "Transcription",
  explanation:
    "Transcription is the process in which information in DNA is copied into RNA.",
  wrongExplanations: {
    Replication: "Replication produces a new DNA molecule from existing DNA.",
    Translation: "Translation uses mRNA information to synthesize proteins.",
    Mutation: "Mutation refers to a change in genetic material."
  },
  hint: "DNA → RNA."
},

{
  subject: "Biology",
  question: "Which enzyme synthesizes a new DNA strand during DNA replication?",
  options: ["DNA polymerase", "Lipase", "Pepsin", "Amylase"],
  answer: "DNA polymerase",
  explanation:
    "DNA polymerase adds nucleotides to synthesize a new DNA strand during replication.",
  wrongExplanations: {
    Lipase: "Lipase digests fats.",
    Pepsin: "Pepsin digests proteins in the stomach.",
    Amylase: "Amylase digests starch."
  },
  hint: "Its name directly refers to DNA synthesis."
},

{
  subject: "Biology",
  question: "Which Mendelian law states that two alleles of a gene separate during gamete formation?",
  options: [
    "Law of Segregation",
    "Law of Dominance",
    "Law of Independent Assortment",
    "Law of Natural Selection"
  ],
  answer: "Law of Segregation",
  explanation:
    "The Law of Segregation states that the two alleles of a gene separate during gamete formation.",
  wrongExplanations: {
    "Law of Dominance": "Dominance explains expression of one allele over another in a heterozygote.",
    "Law of Independent Assortment": "This concerns independent inheritance of different gene pairs under appropriate conditions.",
    "Law of Natural Selection": "Natural selection is associated with evolution, not Mendelian inheritance."
  },
  hint: "Alleles separate from one another."
},

{
  subject: "Biology",
  question: "A cross between an individual of unknown genotype and a homozygous recessive individual is called:",
  options: ["Test cross", "Monohybrid cross", "Back mutation", "Reciprocal cross"],
  answer: "Test cross",
  explanation:
    "A test cross is used to determine the genotype of an individual showing a dominant phenotype.",
  wrongExplanations: {
    "Monohybrid cross": "A monohybrid cross studies inheritance of one character but is not necessarily a test cross.",
    "Back mutation": "Back mutation is a genetic change restoring an earlier condition.",
    "Reciprocal cross": "A reciprocal cross reverses the sexes of parental genotypes."
  },
  hint: "It tests whether a dominant-looking individual is homozygous or heterozygous."
},

{
  subject: "Biology",
  question: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
  options: [
    "Pulmonary artery",
    "Pulmonary vein",
    "Aorta",
    "Vena cava"
  ],
  answer: "Pulmonary vein",
  explanation:
    "Pulmonary veins carry oxygenated blood from the lungs to the left atrium of the heart.",
  wrongExplanations: {
    "Pulmonary artery": "The pulmonary artery carries deoxygenated blood from the heart to the lungs.",
    Aorta: "The aorta carries oxygenated blood from the left ventricle to the body.",
    "Vena cava": "The venae cavae return deoxygenated blood from the body to the right atrium."
  },
  hint: "This is an important exception to the usual artery-vein oxygen rule."
},

{
  subject: "Biology",
  question: "Which respiratory pigment carries oxygen in human red blood cells?",
  options: ["Haemoglobin", "Chlorophyll", "Melanin", "Myosin"],
  answer: "Haemoglobin",
  explanation:
    "Haemoglobin binds oxygen in the lungs and carries it through the blood.",
  wrongExplanations: {
    Chlorophyll: "Chlorophyll is a photosynthetic pigment in plants.",
    Melanin: "Melanin contributes to pigmentation.",
    Myosin: "Myosin is a contractile protein involved in muscle movement."
  },
  hint: "It contains iron and gives blood its red colour."
},

{
  subject: "Biology",
  question: "Gas exchange between air and blood occurs mainly in which lung structures?",
  options: ["Bronchi", "Alveoli", "Trachea", "Larynx"],
  answer: "Alveoli",
  explanation:
    "Alveoli have thin walls and a rich capillary supply, making them the main site of gas exchange.",
  wrongExplanations: {
    Bronchi: "Bronchi mainly conduct air into the lungs.",
    Trachea: "The trachea conducts air toward the lungs.",
    Larynx: "The larynx is involved mainly in voice production and passage of air."
  },
  hint: "Think of millions of tiny air sacs."
},

{
  subject: "Biology",
  question: "Which part of the digestive system is the main site of nutrient absorption?",
  options: ["Stomach", "Small intestine", "Large intestine", "Oesophagus"],
  answer: "Small intestine",
  explanation:
    "Most digested nutrients are absorbed through the villi of the small intestine.",
  wrongExplanations: {
    Stomach: "The stomach mainly stores food and begins significant protein digestion.",
    "Large intestine": "The large intestine mainly absorbs water and electrolytes.",
    Oesophagus: "The oesophagus mainly transports food to the stomach."
  },
  hint: "Its villi greatly increase surface area."
},

{
  subject: "Biology",
  question: "Which enzyme converts pepsinogen into active pepsin in the stomach?",
  options: ["Hydrochloric acid", "Insulin", "Bile", "Trypsin"],
  answer: "Hydrochloric acid",
  explanation:
    "The acidic environment created by hydrochloric acid helps convert pepsinogen into active pepsin.",
  wrongExplanations: {
    Insulin: "Insulin regulates blood glucose.",
    Bile: "Bile aids fat digestion and is released into the small intestine.",
    Trypsin: "Trypsin is a pancreatic protease acting mainly in the small intestine."
  },
  hint: "The stomach needs a strongly acidic environment."
},

{
  subject: "Biology",
  question: "Which hormone increases blood glucose concentration when it becomes too low?",
  options: ["Glucagon", "Insulin", "Oxytocin", "Prolactin"],
  answer: "Glucagon",
  explanation:
    "Glucagon raises blood glucose mainly by promoting breakdown of glycogen in the liver.",
  wrongExplanations: {
    Insulin: "Insulin generally lowers blood glucose.",
    Oxytocin: "Oxytocin is involved in uterine contractions and milk ejection.",
    Prolactin: "Prolactin promotes milk production."
  },
  hint: "It acts largely opposite to insulin."
},

{
  subject: "Biology",
  question: "Which hormone is mainly responsible for milk production after childbirth?",
  options: ["Prolactin", "Oxytocin", "Adrenaline", "Glucagon"],
  answer: "Prolactin",
  explanation:
    "Prolactin stimulates milk production in mammary glands after childbirth.",
  wrongExplanations: {
    Oxytocin: "Oxytocin mainly causes milk ejection and uterine contraction.",
    Adrenaline: "Adrenaline is associated with the fight-or-flight response.",
    Glucagon: "Glucagon raises blood glucose."
  },
  hint: "Do not confuse production with milk ejection."
},

{
  subject: "Biology",
  question: "Which hormone causes milk ejection from the mammary glands?",
  options: ["Oxytocin", "Prolactin", "Thyroxine", "Insulin"],
  answer: "Oxytocin",
  explanation:
    "Oxytocin causes contraction of myoepithelial cells around mammary glands, producing milk ejection.",
  wrongExplanations: {
    Prolactin: "Prolactin stimulates milk production.",
    Thyroxine: "Thyroxine regulates metabolism.",
    Insulin: "Insulin regulates blood glucose."
  },
  hint: "Production = prolactin; ejection = ?"
},

{
  subject: "Biology",
  question: "Which plant hormone is mainly associated with cell elongation and phototropism?",
  options: ["Auxin", "Ethylene", "Abscisic acid", "Cytokinin"],
  answer: "Auxin",
  explanation:
    "Auxins promote cell elongation and play an important role in tropic responses such as phototropism.",
  wrongExplanations: {
    Ethylene: "Ethylene is strongly associated with fruit ripening.",
    "Abscisic acid": "Abscisic acid generally promotes dormancy and stress responses.",
    Cytokinin: "Cytokinins mainly promote cell division and delay senescence."
  },
  hint: "It accumulates unevenly when a shoot bends toward light."
},

{
  subject: "Biology",
  question: "Which plant hormone is strongly associated with fruit ripening?",
  options: ["Ethylene", "Auxin", "Gibberellin", "Cytokinin"],
  answer: "Ethylene",
  explanation:
    "Ethylene is a gaseous plant hormone that promotes ripening in many fruits.",
  wrongExplanations: {
    Auxin: "Auxin is strongly associated with cell elongation and tropisms.",
    Gibberellin: "Gibberellins promote stem elongation and several growth processes.",
    Cytokinin: "Cytokinins promote cell division."
  },
  hint: "It is unusual because it is a gaseous hormone."
},

{
  subject: "Biology",
  question: "Water moves upward through the xylem of tall plants mainly because of:",
  options: [
    "Transpiration pull",
    "Photosynthesis only",
    "Diffusion of sugar",
    "Phloem pressure"
  ],
  answer: "Transpiration pull",
  explanation:
    "Loss of water through leaves creates tension that helps pull a continuous column of water upward through xylem.",
  wrongExplanations: {
    "Photosynthesis only": "Photosynthesis does not directly provide the main pulling force for xylem ascent.",
    "Diffusion of sugar": "Sugars are mainly transported through phloem.",
    "Phloem pressure": "Phloem transport is different from xylem water movement."
  },
  hint: "Evaporation from leaves creates a pulling force."
},

{
  subject: "Biology",
  question: "Which tissue transports manufactured food in plants?",
  options: ["Phloem", "Xylem", "Epidermis", "Cambium"],
  answer: "Phloem",
  explanation:
    "Phloem transports sugars and other organic nutrients from source tissues to other parts of the plant.",
  wrongExplanations: {
    Xylem: "Xylem mainly transports water and minerals.",
    Epidermis: "The epidermis mainly protects plant surfaces.",
    Cambium: "Cambium is a meristem involved in secondary growth."
  },
  hint: "Xylem moves water; this tissue moves food."
},

{
  subject: "Biology",
  question: "Which interaction benefits both participating species?",
  options: ["Mutualism", "Predation", "Parasitism", "Competition"],
  answer: "Mutualism",
  explanation:
    "Mutualism is an ecological interaction in which both participating species benefit.",
  wrongExplanations: {
    Predation: "In predation, one organism benefits while the prey is harmed.",
    Parasitism: "A parasite benefits while the host is harmed.",
    Competition: "Competition negatively affects organisms competing for limited resources."
  },
  hint: "Both organisms receive a benefit."
},

{
  subject: "Biology",
  question: "Which process converts atmospheric nitrogen into biologically usable nitrogen compounds?",
  options: [
    "Nitrogen fixation",
    "Denitrification",
    "Transpiration",
    "Respiration"
  ],
  answer: "Nitrogen fixation",
  explanation:
    "Nitrogen fixation converts atmospheric nitrogen into compounds such as ammonia that can enter biological systems.",
  wrongExplanations: {
    Denitrification: "Denitrification converts nitrogen compounds back toward atmospheric nitrogen.",
    Transpiration: "Transpiration is water loss from aerial plant parts.",
    Respiration: "Respiration releases energy from organic molecules."
  },
  hint: "Certain bacteria such as Rhizobium perform this process."
},

{
  subject: "Chemistry",
  question: "Which subatomic particle has no electrical charge?",
  options: ["Neutron", "Proton", "Electron", "Positron"],
  answer: "Neutron",
  explanation:
    "A neutron is electrically neutral and is found in the atomic nucleus.",
  wrongExplanations: {
    Proton: "A proton has a positive charge.",
    Electron: "An electron has a negative charge.",
    Positron: "A positron has a positive charge."
  },
  hint: "Its name suggests neutrality."
},

{
  subject: "Chemistry",
  question: "Isotopes of an element have the same number of:",
  options: ["Protons", "Neutrons", "Nucleons", "Mass numbers"],
  answer: "Protons",
  explanation:
    "Isotopes have the same atomic number and therefore the same number of protons, but different numbers of neutrons.",
  wrongExplanations: {
    Neutrons: "Different neutron numbers are what distinguish isotopes.",
    Nucleons: "Different isotopes generally have different total numbers of nucleons.",
    "Mass numbers": "Their mass numbers differ."
  },
  hint: "They remain the same element because their atomic number is unchanged."
},

{
  subject: "Chemistry",
  question: "How many electrons can occupy a single atomic orbital?",
  options: ["1", "2", "4", "8"],
  answer: "2",
  explanation:
    "According to the Pauli exclusion principle, a single orbital can contain a maximum of two electrons with opposite spins.",
  wrongExplanations: {
    "1": "An orbital may contain one electron, but its maximum capacity is two.",
    "4": "Four electrons cannot occupy a single orbital.",
    "8": "Eight can describe the capacity of some shells, not a single orbital."
  },
  hint: "They must have opposite spins."
},

{
  subject: "Chemistry",
  question: "Which principle states that electrons occupy lower-energy orbitals before higher-energy orbitals?",
  options: [
    "Aufbau principle",
    "Pauli exclusion principle",
    "Hund's rule",
    "Le Chatelier's principle"
  ],
  answer: "Aufbau principle",
  explanation:
    "The Aufbau principle states that electrons fill available orbitals starting with those of lower energy.",
  wrongExplanations: {
    "Pauli exclusion principle": "Pauli limits an orbital to two electrons with opposite spins.",
    "Hund's rule": "Hund's rule describes electron filling among degenerate orbitals.",
    "Le Chatelier's principle": "Le Chatelier's principle concerns equilibrium shifts."
  },
  hint: "Aufbau means building up."
},

{
  subject: "Chemistry",
  question: "According to Hund's rule, electrons occupy degenerate orbitals:",
  options: [
    "Singly before pairing",
    "In pairs immediately",
    "Only after ionization",
    "Without any spin"
  ],
  answer: "Singly before pairing",
  explanation:
    "Hund's rule states that electrons occupy degenerate orbitals singly with parallel spins before pairing occurs.",
  wrongExplanations: {
    "In pairs immediately": "Electrons avoid pairing in degenerate orbitals until necessary.",
    "Only after ionization": "Hund's rule applies during normal electron configuration.",
    "Without any spin": "Electrons always possess spin."
  },
  hint: "Imagine people choosing empty seats before sharing one."
},

{
  subject: "Chemistry",
  question: "Across a period in the periodic table, atomic radius generally:",
  options: ["Decreases", "Increases greatly", "Remains exactly constant", "Becomes zero"],
  answer: "Decreases",
  explanation:
    "Across a period, increasing effective nuclear charge generally pulls electrons closer to the nucleus, decreasing atomic radius.",
  wrongExplanations: {
    "Increases greatly": "The general trend across a period is the opposite.",
    "Remains exactly constant": "Atomic radius changes systematically across periods.",
    "Becomes zero": "Atoms always have finite size."
  },
  hint: "Nuclear charge increases while electrons enter the same principal shell."
},

{
  subject: "Chemistry",
  question: "Which group of the periodic table contains the alkali metals?",
  options: ["Group 1", "Group 2", "Group 17", "Group 18"],
  answer: "Group 1",
  explanation:
    "Group 1 contains the alkali metals such as lithium, sodium and potassium.",
  wrongExplanations: {
    "Group 2": "Group 2 contains alkaline earth metals.",
    "Group 17": "Group 17 contains halogens.",
    "Group 18": "Group 18 contains noble gases."
  },
  hint: "Sodium and potassium belong here."
},

{
  subject: "Chemistry",
  question: "Which group contains the halogens?",
  options: ["Group 17", "Group 1", "Group 16", "Group 18"],
  answer: "Group 17",
  explanation:
    "Fluorine, chlorine, bromine and iodine are halogens belonging to Group 17.",
  wrongExplanations: {
    "Group 1": "Group 1 contains alkali metals.",
    "Group 16": "Group 16 is the chalcogen group.",
    "Group 18": "Group 18 contains noble gases."
  },
  hint: "Think fluorine and chlorine."
},

{
  subject: "Chemistry",
  question: "At chemical equilibrium, the forward and reverse reactions occur:",
  options: [
    "At equal rates",
    "Only in the forward direction",
    "Only in the reverse direction",
    "At zero rate"
  ],
  answer: "At equal rates",
  explanation:
    "Dynamic equilibrium exists when the rates of forward and reverse reactions are equal.",
  wrongExplanations: {
    "Only in the forward direction": "Both reactions continue at equilibrium.",
    "Only in the reverse direction": "Both directions continue simultaneously.",
    "At zero rate": "Chemical equilibrium is dynamic, not static."
  },
  hint: "Equilibrium does not mean the reactions stop."
},

{
  subject: "Chemistry",
  question: "According to Le Chatelier's principle, increasing pressure favours the side of a gaseous equilibrium with:",
  options: [
    "Fewer moles of gas",
    "More moles of gas",
    "Exactly the same colour",
    "More solid material"
  ],
  answer: "Fewer moles of gas",
  explanation:
    "Increasing pressure shifts a gaseous equilibrium toward the side containing fewer moles of gas when the gas mole numbers differ.",
  wrongExplanations: {
    "More moles of gas": "Higher pressure generally opposes the side with more gas particles.",
    "Exactly the same colour": "Colour does not determine the pressure response.",
    "More solid material": "Pure solids do not determine this gas-pressure trend."
  },
  hint: "The system tries to reduce the applied pressure."
},

{
  subject: "Chemistry",
  question: "A solution with pH 3 is:",
  options: ["Acidic", "Neutral", "Basic", "Always a buffer"],
  answer: "Acidic",
  explanation:
    "At ordinary conditions, a pH below 7 indicates an acidic solution.",
  wrongExplanations: {
    Neutral: "A neutral aqueous solution is around pH 7 at room temperature.",
    Basic: "Basic solutions generally have pH values above 7.",
    "Always a buffer": "A pH value alone does not prove that a solution is a buffer."
  },
  hint: "Below 7 means acid."
},

{
  subject: "Chemistry",
  question: "Which acid is present naturally in vinegar?",
  options: ["Acetic acid", "Sulphuric acid", "Nitric acid", "Hydrochloric acid"],
  answer: "Acetic acid",
  explanation:
    "Vinegar contains dilute acetic acid, also called ethanoic acid.",
  wrongExplanations: {
    "Sulphuric acid": "Sulphuric acid is a strong mineral acid.",
    "Nitric acid": "Nitric acid is not the normal acid present in vinegar.",
    "Hydrochloric acid": "Hydrochloric acid occurs naturally in gastric juice, not vinegar."
  },
  hint: "Its IUPAC name is ethanoic acid."
},

{
  subject: "Chemistry",
  question: "The general formula of open-chain alkanes is:",
  options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnHn"],
  answer: "CnH2n+2",
  explanation:
    "Acyclic saturated hydrocarbons called alkanes follow the general formula CnH2n+2.",
  wrongExplanations: {
    CnH2n: "This is commonly the general formula for simple acyclic alkenes.",
    "CnH2n-2": "This is commonly the general formula for simple acyclic alkynes.",
    CnHn: "This is not the general formula of alkanes."
  },
  hint: "Check methane CH4 and ethane C2H6."
},

{
  subject: "Chemistry",
  question: "Which functional group characterizes carboxylic acids?",
  options: ["-COOH", "-OH", "-CHO", "-O-"],
  answer: "-COOH",
  explanation:
    "Carboxylic acids contain the carboxyl functional group, -COOH.",
  wrongExplanations: {
    "-OH": "The hydroxyl group characterizes alcohols.",
    "-CHO": "The -CHO group characterizes aldehydes.",
    "-O-": "An oxygen bridge is characteristic of ethers."
  },
  hint: "Think of ethanoic acid, CH3COOH."
},

{
  subject: "Chemistry",
  question: "Which compound is an aldehyde?",
  options: ["Ethanal", "Ethanol", "Ethanoic acid", "Ethene"],
  answer: "Ethanal",
  explanation:
    "Ethanal contains the aldehyde functional group -CHO.",
  wrongExplanations: {
    Ethanol: "Ethanol is an alcohol.",
    "Ethanoic acid": "Ethanoic acid is a carboxylic acid.",
    Ethene: "Ethene is an alkene."
  },
  hint: "Aldehyde names commonly end in -al."
},

{
  subject: "Chemistry",
  question: "Which compound is used as the monomer for polyethylene?",
  options: ["Ethene", "Ethane", "Ethyne", "Benzene"],
  answer: "Ethene",
  explanation:
    "Polyethylene is formed by addition polymerization of ethene molecules.",
  wrongExplanations: {
    Ethane: "Ethane is a saturated hydrocarbon and is not the standard monomer of polyethylene.",
    Ethyne: "Ethyne contains a triple bond and is not the monomer used for polyethylene.",
    Benzene: "Benzene is aromatic and does not form polyethylene."
  },
  hint: "Polyethylene comes from ethylene, another name for ethene."
},

{
  subject: "Chemistry",
  question: "Which metal is extracted from bauxite?",
  options: ["Aluminium", "Iron", "Copper", "Zinc"],
  answer: "Aluminium",
  explanation:
    "Bauxite is the principal commercial ore of aluminium.",
  wrongExplanations: {
    Iron: "Iron is commonly extracted from ores such as hematite.",
    Copper: "Copper occurs in ores such as copper pyrites.",
    Zinc: "Zinc is obtained from ores such as zinc blende."
  },
  hint: "Think of the Bayer and Hall-Héroult processes."
},

{
  subject: "Chemistry",
  question: "Which catalyst is used in the Contact process for manufacturing sulphuric acid?",
  options: ["Vanadium pentoxide", "Iron", "Nickel", "Manganese dioxide"],
  answer: "Vanadium pentoxide",
  explanation:
    "Vanadium pentoxide, V2O5, catalyses oxidation of sulphur dioxide to sulphur trioxide in the Contact process.",
  wrongExplanations: {
    Iron: "Iron is associated with the Haber process.",
    Nickel: "Nickel is commonly used in hydrogenation reactions.",
    "Manganese dioxide": "Manganese dioxide catalyses some decomposition reactions but is not the Contact process catalyst."
  },
  hint: "Do not confuse it with iron in the Haber process."
},

{
  subject: "Chemistry",
  question: "Which gas is produced at the cathode during electrolysis of acidified water?",
  options: ["Hydrogen", "Oxygen", "Chlorine", "Nitrogen"],
  answer: "Hydrogen",
  explanation:
    "Hydrogen ions gain electrons at the cathode and form hydrogen gas.",
  wrongExplanations: {
    Oxygen: "Oxygen is produced at the anode during electrolysis of acidified water.",
    Chlorine: "Chlorine can be produced in electrolysis involving chloride ions.",
    Nitrogen: "Nitrogen is not produced from ordinary electrolysis of acidified water."
  },
  hint: "Reduction occurs at the cathode."
},

{
  subject: "Physics",
  question: "The slope of a displacement-time graph represents:",
  options: ["Velocity", "Acceleration", "Force", "Momentum"],
  answer: "Velocity",
  explanation:
    "Velocity is the rate of change of displacement with time, so it equals the slope of a displacement-time graph.",
  wrongExplanations: {
    Acceleration: "Acceleration is related to the slope of a velocity-time graph.",
    Force: "Force is not obtained directly from the slope of a displacement-time graph.",
    Momentum: "Momentum equals mass multiplied by velocity."
  },
  hint: "Slope means change in displacement divided by change in time."
},

{
  subject: "Physics",
  question: "The slope of a velocity-time graph represents:",
  options: ["Acceleration", "Displacement", "Momentum", "Power"],
  answer: "Acceleration",
  explanation:
    "Acceleration is the rate of change of velocity with time and therefore equals the slope of a velocity-time graph.",
  wrongExplanations: {
    Displacement: "Displacement can be obtained from the area under a velocity-time graph.",
    Momentum: "Momentum depends on mass and velocity.",
    Power: "Power is the rate of doing work."
  },
  hint: "Change in velocity divided by time."
},

{
  subject: "Physics",
  question: "The area under a velocity-time graph represents:",
  options: ["Displacement", "Acceleration", "Force", "Power"],
  answer: "Displacement",
  explanation:
    "Integrating velocity over time gives displacement, represented graphically by the area under a velocity-time curve.",
  wrongExplanations: {
    Acceleration: "Acceleration is represented by the slope of the graph.",
    Force: "Force requires information about mass and acceleration.",
    Power: "Power is not represented by this area."
  },
  hint: "Velocity × time has the dimensions of displacement."
},

{
  subject: "Physics",
  question: "Which of Newton's laws is also known as the law of inertia?",
  options: [
    "First law",
    "Second law",
    "Third law",
    "Law of gravitation"
  ],
  answer: "First law",
  explanation:
    "Newton's First Law states that an object remains at rest or in uniform motion unless acted upon by a net external force.",
  wrongExplanations: {
    "Second law": "The Second Law relates net force to acceleration.",
    "Third law": "The Third Law deals with action-reaction force pairs.",
    "Law of gravitation": "The law of gravitation describes gravitational attraction."
  },
  hint: "Inertia means resistance to a change in motion."
},

{
  subject: "Physics",
  question: "What is the SI unit of momentum?",
  options: ["kg m/s", "N/m", "J/s", "kg/m3"],
  answer: "kg m/s",
  explanation:
    "Momentum equals mass multiplied by velocity, so its SI unit is kg m/s.",
  wrongExplanations: {
    "N/m": "N/m can represent quantities such as spring constant.",
    "J/s": "J/s is the watt, a unit of power.",
    "kg/m3": "kg/m3 is a unit of density."
  },
  hint: "Use p = mv."
},

{
  subject: "Physics",
  question: "Impulse is equal to the change in:",
  options: ["Momentum", "Mass", "Power", "Density"],
  answer: "Momentum",
  explanation:
    "Impulse equals the change in momentum of an object.",
  wrongExplanations: {
    Mass: "Mass does not generally change because of ordinary mechanical impulse.",
    Power: "Power is the rate of doing work.",
    Density: "Density is mass per unit volume."
  },
  hint: "Impulse = force × time."
},

{
  subject: "Physics",
  question: "The gravitational force between two masses varies inversely as:",
  options: [
    "The square of their separation",
    "Their separation",
    "The cube of their separation",
    "Their combined mass"
  ],
  answer: "The square of their separation",
  explanation:
    "Newton's law of gravitation contains the inverse-square relationship F ∝ 1/r².",
  wrongExplanations: {
    "Their separation": "Gravity does not follow a simple inverse first-power law.",
    "The cube of their separation": "The gravitational force follows an inverse-square, not inverse-cube, relation.",
    "Their combined mass": "Gravitational force is directly related to the product of the two masses."
  },
  hint: "Remember F = Gm1m2/r²."
},

{
  subject: "Physics",
  question: "The escape velocity from the surface of a planet depends on:",
  options: [
    "Mass and radius of the planet",
    "Mass of the escaping object only",
    "Colour of the planet",
    "Atmospheric temperature only"
  ],
  answer: "Mass and radius of the planet",
  explanation:
    "Escape velocity is given by √(2GM/R), so it depends on the planet's mass and radius.",
  wrongExplanations: {
    "Mass of the escaping object only": "The escaping object's mass cancels from the escape-velocity expression.",
    "Colour of the planet": "Colour has no role in gravitational escape velocity.",
    "Atmospheric temperature only": "Atmospheric conditions are not the fundamental variables in the escape-velocity equation."
  },
  hint: "Think of √(2GM/R)."
},

{
  subject: "Physics",
  question: "What is the SI unit of work?",
  options: ["Joule", "Newton", "Watt", "Pascal"],
  answer: "Joule",
  explanation:
    "The SI unit of work is the joule.",
  wrongExplanations: {
    Newton: "Newton is the unit of force.",
    Watt: "Watt is the unit of power.",
    Pascal: "Pascal is the unit of pressure."
  },
  hint: "Work and energy have the same unit."
},

{
  subject: "Physics",
  question: "Power is defined as:",
  options: [
    "Work done per unit time",
    "Force multiplied by time",
    "Mass per unit volume",
    "Momentum per unit distance"
  ],
  answer: "Work done per unit time",
  explanation:
    "Power measures the rate at which work is done or energy is transferred.",
  wrongExplanations: {
    "Force multiplied by time": "Force × time gives impulse.",
    "Mass per unit volume": "This defines density.",
    "Momentum per unit distance": "This is not the definition of power."
  },
  hint: "P = W/t."
},

{
  subject: "Physics",
  question: "What is the SI unit of frequency?",
  options: ["Hertz", "Second", "Metre", "Decibel"],
  answer: "Hertz",
  explanation:
    "Frequency is measured in hertz, where one hertz means one cycle per second.",
  wrongExplanations: {
    Second: "The second is the SI unit of time.",
    Metre: "The metre is the SI unit of length.",
    Decibel: "The decibel is commonly used for logarithmic intensity levels."
  },
  hint: "One cycle per second equals one of these."
},

{
  subject: "Physics",
  question: "The speed of a wave is equal to:",
  options: [
    "Frequency × wavelength",
    "Frequency ÷ wavelength",
    "Wavelength ÷ frequency",
    "Frequency + wavelength"
  ],
  answer: "Frequency × wavelength",
  explanation:
    "Wave speed is given by v = fλ.",
  wrongExplanations: {
    "Frequency ÷ wavelength": "This does not give the correct dimensions for speed.",
    "Wavelength ÷ frequency": "This is not the standard wave equation.",
    "Frequency + wavelength": "Quantities with different units cannot simply be added in this way."
  },
  hint: "Remember v = fλ."
},

{
  subject: "Physics",
  question: "Sound cannot travel through:",
  options: ["Vacuum", "Water", "Steel", "Air"],
  answer: "Vacuum",
  explanation:
    "Sound is a mechanical wave and requires a material medium for propagation.",
  wrongExplanations: {
    Water: "Sound can travel through liquids.",
    Steel: "Sound can travel through solids.",
    Air: "Sound commonly travels through air."
  },
  hint: "Mechanical waves need particles to transmit vibrations."
},

{
  subject: "Physics",
  question: "Which property of sound primarily determines its pitch?",
  options: ["Frequency", "Amplitude", "Speed", "Intensity"],
  answer: "Frequency",
  explanation:
    "Pitch is primarily determined by frequency; higher-frequency sounds are perceived as higher pitched.",
  wrongExplanations: {
    Amplitude: "Amplitude is more closely related to loudness.",
    Speed: "The speed of sound depends mainly on the medium.",
    Intensity: "Intensity affects loudness rather than pitch."
  },
  hint: "High pitch means rapid vibration."
},

{
  subject: "Physics",
  question: "A convex lens is also called a:",
  options: [
    "Converging lens",
    "Diverging lens",
    "Plane mirror",
    "Reflecting prism"
  ],
  answer: "Converging lens",
  explanation:
    "A convex lens converges parallel rays of light toward its principal focus.",
  wrongExplanations: {
    "Diverging lens": "A concave lens is a diverging lens.",
    "Plane mirror": "A plane mirror reflects rather than refracts light through a curved lens.",
    "Reflecting prism": "A prism and lens are different optical devices."
  },
  hint: "Parallel rays come together after passing through it."
},

{
  subject: "Physics",
  question: "Hypermetropia is commonly corrected using a:",
  options: ["Convex lens", "Concave lens", "Plane glass plate", "Prism only"],
  answer: "Convex lens",
  explanation:
    "Hypermetropia or long-sightedness is corrected using a converging convex lens.",
  wrongExplanations: {
    "Concave lens": "Concave lenses are used for myopia.",
    "Plane glass plate": "A plane glass plate does not provide the required focusing power.",
    "Prism only": "A prism is not the normal corrective optical element for hypermetropia."
  },
  hint: "Myopia uses concave; hypermetropia uses the opposite."
},

{
  subject: "Physics",
  question: "Electric current is defined as the rate of flow of:",
  options: ["Electric charge", "Voltage", "Resistance", "Power"],
  answer: "Electric charge",
  explanation:
    "Electric current is the amount of electric charge flowing per unit time, I = Q/t.",
  wrongExplanations: {
    Voltage: "Voltage is potential difference.",
    Resistance: "Resistance opposes current flow.",
    Power: "Electrical power is the rate of energy transfer."
  },
  hint: "I = Q/t."
},

{
  subject: "Physics",
  question: "Two resistors connected in parallel have an equivalent resistance that is:",
  options: [
    "Less than the smallest individual resistance",
    "Greater than both resistances",
    "Always equal to their sum",
    "Always zero"
  ],
  answer: "Less than the smallest individual resistance",
  explanation:
    "Adding parallel paths increases total conductance, so equivalent resistance becomes smaller than either individual branch resistance.",
  wrongExplanations: {
    "Greater than both resistances": "Parallel connection decreases equivalent resistance.",
    "Always equal to their sum": "Simple addition applies to series resistors.",
    "Always zero": "Parallel resistance is not generally zero."
  },
  hint: "Parallel circuits give current more paths."
},

{
  subject: "Physics",
  question: "Electrical power in a circuit can be calculated using:",
  options: ["P = VI", "P = V/I", "P = IR", "P = Q/t only"],
  answer: "P = VI",
  explanation:
    "Electrical power equals potential difference multiplied by current: P = VI.",
  wrongExplanations: {
    "P = V/I": "V/I gives resistance according to Ohm's law.",
    "P = IR": "IR gives voltage.",
    "P = Q/t only": "Q/t gives electric current."
  },
  hint: "Power = voltage × current."
},

{
  subject: "Biology",
  question: "Which type of RNA forms the major structural component of ribosomes?",
  options: ["mRNA", "tRNA", "rRNA", "snRNA"],
  answer: "rRNA",
  explanation:
    "Ribosomal RNA combines with proteins to form ribosomes and also participates in protein synthesis.",
  wrongExplanations: {
    mRNA: "mRNA carries genetic information from DNA to ribosomes.",
    tRNA: "tRNA carries amino acids during translation.",
    snRNA: "snRNA mainly participates in RNA processing in eukaryotic cells."
  },
  hint: "Its name begins with ribosomal."
},

{
  subject: "Biology",
  question: "Which codon normally acts as the start codon during translation?",
  options: ["AUG", "UAA", "UAG", "UGA"],
  answer: "AUG",
  explanation:
    "AUG is the usual start codon and codes for methionine.",
  wrongExplanations: {
    UAA: "UAA is a stop codon.",
    UAG: "UAG is a stop codon.",
    UGA: "UGA is a stop codon."
  },
  hint: "The start codon also codes for methionine."
},

{
  subject: "Biology",
  question: "Which of the following is a stop codon?",
  options: ["AUG", "UGG", "UAA", "GCU"],
  answer: "UAA",
  explanation:
    "UAA is one of the three stop codons that signal termination of translation.",
  wrongExplanations: {
    AUG: "AUG is usually the start codon.",
    UGG: "UGG codes for tryptophan.",
    GCU: "GCU codes for alanine."
  },
  hint: "The three stop codons are UAA, UAG and UGA."
},

{
  subject: "Biology",
  question: "Which scientist is associated with the theory of natural selection?",
  options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"],
  answer: "Charles Darwin",
  explanation:
    "Charles Darwin developed the theory of evolution by natural selection.",
  wrongExplanations: {
    "Gregor Mendel": "Mendel is associated with laws of inheritance.",
    "Louis Pasteur": "Pasteur made major contributions to microbiology and germ theory.",
    "Robert Hooke": "Hooke described cells after observing cork."
  },
  hint: "Think of On the Origin of Species."
},

{
  subject: "Biology",
  question: "Homologous organs provide evidence for:",
  options: [
    "Divergent evolution",
    "Convergent evolution",
    "Artificial selection only",
    "No evolutionary relationship"
  ],
  answer: "Divergent evolution",
  explanation:
    "Homologous organs share a common basic structure and origin but may perform different functions, indicating divergent evolution.",
  wrongExplanations: {
    "Convergent evolution": "Convergent evolution is commonly associated with analogous organs.",
    "Artificial selection only": "Homology is broader evidence for common ancestry.",
    "No evolutionary relationship": "Homologous structures indicate evolutionary relationship."
  },
  hint: "Same basic origin, different functions."
},

{
  subject: "Biology",
  question: "Analogous organs are commonly associated with:",
  options: [
    "Convergent evolution",
    "Divergent evolution",
    "Genetic drift only",
    "Mutation only"
  ],
  answer: "Convergent evolution",
  explanation:
    "Analogous organs perform similar functions but have different evolutionary origins, indicating convergent evolution.",
  wrongExplanations: {
    "Divergent evolution": "Divergent evolution commonly produces homologous structures.",
    "Genetic drift only": "Genetic drift is not the defining explanation for analogous organs.",
    "Mutation only": "Mutation alone does not define analogy."
  },
  hint: "Different origin, similar function."
},

{
  subject: "Biology",
  question: "Which enzyme is responsible for carbon fixation in the Calvin cycle?",
  options: ["RuBisCO", "Pepsin", "Catalase", "Amylase"],
  answer: "RuBisCO",
  explanation:
    "RuBisCO catalyses fixation of carbon dioxide to RuBP in the Calvin cycle.",
  wrongExplanations: {
    Pepsin: "Pepsin digests proteins in the stomach.",
    Catalase: "Catalase breaks down hydrogen peroxide.",
    Amylase: "Amylase digests starch."
  },
  hint: "It is often described as one of the most abundant enzymes on Earth."
},

{
  subject: "Biology",
  question: "Photorespiration is most prominent in:",
  options: ["C3 plants", "C4 plants", "CAM plants only", "Aquatic algae only"],
  answer: "C3 plants",
  explanation:
    "Photorespiration is more significant in C3 plants because RuBisCO can react with oxygen.",
  wrongExplanations: {
    "C4 plants": "C4 plants possess mechanisms that reduce photorespiration.",
    "CAM plants only": "CAM plants also reduce photorespiration through temporal separation of carbon fixation.",
    "Aquatic algae only": "Photorespiration is not limited to aquatic algae."
  },
  hint: "C4 plants evolved a mechanism that reduces this problem."
},

{
  subject: "Biology",
  question: "Which mineral is a central component of chlorophyll?",
  options: ["Magnesium", "Iron", "Calcium", "Sodium"],
  answer: "Magnesium",
  explanation:
    "Magnesium occupies the central position in the chlorophyll molecule.",
  wrongExplanations: {
    Iron: "Iron is important in many proteins and enzymes but is not the central atom of chlorophyll.",
    Calcium: "Calcium has structural and signalling roles in plants.",
    Sodium: "Sodium is not the central element in chlorophyll."
  },
  hint: "Think of Mg."
},

{
  subject: "Biology",
  question: "Which mineral is an important component of haemoglobin?",
  options: ["Iron", "Magnesium", "Sodium", "Potassium"],
  answer: "Iron",
  explanation:
    "Iron is present in the haem group of haemoglobin and is essential for oxygen binding.",
  wrongExplanations: {
    Magnesium: "Magnesium is central to chlorophyll, not haemoglobin.",
    Sodium: "Sodium is important for fluid balance and nerve function.",
    Potassium: "Potassium is important for membrane potentials and cellular function."
  },
  hint: "Deficiency of this mineral can cause anaemia."
},

{
  subject: "Biology",
  question: "Which vitamin is essential for normal blood clotting?",
  options: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin A"],
  answer: "Vitamin K",
  explanation:
    "Vitamin K is required for synthesis of several blood-clotting factors.",
  wrongExplanations: {
    "Vitamin C": "Vitamin C is important for collagen synthesis and antioxidant functions.",
    "Vitamin D": "Vitamin D is important for calcium metabolism.",
    "Vitamin A": "Vitamin A is important for vision and epithelial health."
  },
  hint: "Think K for clotting."
},

{
  subject: "Biology",
  question: "Deficiency of vitamin D in children may cause:",
  options: ["Rickets", "Scurvy", "Night blindness", "Beriberi"],
  answer: "Rickets",
  explanation:
    "Vitamin D deficiency can impair bone mineralization and cause rickets in children.",
  wrongExplanations: {
    Scurvy: "Scurvy is caused by vitamin C deficiency.",
    "Night blindness": "Night blindness is commonly associated with vitamin A deficiency.",
    Beriberi: "Beriberi is caused by vitamin B1 deficiency."
  },
  hint: "It affects growing bones."
},

{
  subject: "Biology",
  question: "Which vitamin deficiency causes scurvy?",
  options: ["Vitamin C", "Vitamin D", "Vitamin B1", "Vitamin A"],
  answer: "Vitamin C",
  explanation:
    "Vitamin C deficiency causes scurvy due to impaired collagen synthesis.",
  wrongExplanations: {
    "Vitamin D": "Vitamin D deficiency can cause rickets or osteomalacia.",
    "Vitamin B1": "Vitamin B1 deficiency causes beriberi.",
    "Vitamin A": "Vitamin A deficiency can impair vision."
  },
  hint: "Citrus fruits help prevent it."
},

{
  subject: "Biology",
  question: "The pacemaker of the human heart is the:",
  options: ["SA node", "AV node", "Bundle of His", "Purkinje fibres"],
  answer: "SA node",
  explanation:
    "The sinoatrial node initiates the normal heartbeat and acts as the natural pacemaker of the heart.",
  wrongExplanations: {
    "AV node": "The AV node delays and relays impulses from atria toward ventricles.",
    "Bundle of His": "The Bundle of His conducts impulses toward the ventricles.",
    "Purkinje fibres": "Purkinje fibres distribute impulses through ventricular muscle."
  },
  hint: "It is located in the right atrium."
},

{
  subject: "Biology",
  question: "Which blood vessel has the thickest wall?",
  options: ["Artery", "Vein", "Capillary", "Venule"],
  answer: "Artery",
  explanation:
    "Arteries generally have thick muscular and elastic walls because they carry blood under higher pressure.",
  wrongExplanations: {
    Vein: "Veins have thinner walls and often contain valves.",
    Capillary: "Capillaries have extremely thin walls for exchange.",
    Venule: "Venules are small vessels draining capillary beds."
  },
  hint: "Think of high-pressure blood leaving the heart."
},

{
  subject: "Biology",
  question: "Which part of the brain regulates body temperature?",
  options: ["Hypothalamus", "Cerebellum", "Medulla", "Pons"],
  answer: "Hypothalamus",
  explanation:
    "The hypothalamus plays a major role in thermoregulation and homeostasis.",
  wrongExplanations: {
    Cerebellum: "The cerebellum coordinates movement and balance.",
    Medulla: "The medulla regulates functions such as breathing and heart rate.",
    Pons: "The pons participates in neural communication and respiratory regulation."
  },
  hint: "It also regulates hunger and thirst."
},

{
  subject: "Biology",
  question: "Which neuron carries impulses from a receptor toward the central nervous system?",
  options: ["Sensory neuron", "Motor neuron", "Interneuron only", "Effector neuron"],
  answer: "Sensory neuron",
  explanation:
    "Sensory or afferent neurons carry impulses from receptors toward the central nervous system.",
  wrongExplanations: {
    "Motor neuron": "Motor neurons carry impulses from the CNS toward effectors.",
    "Interneuron only": "Interneurons mainly connect neurons within the CNS.",
    "Effector neuron": "This is not the standard term for the neuron carrying receptor signals inward."
  },
  hint: "Afferent means arriving at the CNS."
},

{
  subject: "Biology",
  question: "Which structure prevents food from entering the trachea during swallowing?",
  options: ["Epiglottis", "Glottis", "Bronchiole", "Diaphragm"],
  answer: "Epiglottis",
  explanation:
    "The epiglottis covers the glottis during swallowing and helps prevent food entering the respiratory passage.",
  wrongExplanations: {
    Glottis: "The glottis is the opening into the laryngeal airway.",
    Bronchiole: "Bronchioles are small air passages in the lungs.",
    Diaphragm: "The diaphragm is the main muscle involved in breathing."
  },
  hint: "It acts like a flap."
},

{
  subject: "Biology",
  question: "The contraction of the diaphragm during inspiration causes the thoracic cavity volume to:",
  options: ["Increase", "Decrease", "Remain unchanged", "Become zero"],
  answer: "Increase",
  explanation:
    "When the diaphragm contracts and flattens, thoracic volume increases and air is drawn into the lungs.",
  wrongExplanations: {
    Decrease: "A decrease in thoracic volume is associated more with expiration.",
    "Remain unchanged": "Diaphragm contraction changes thoracic volume.",
    "Become zero": "The thoracic cavity cannot become zero in volume."
  },
  hint: "Larger chest volume lowers internal pressure."
},

{
  subject: "Biology",
  question: "Which part of a neuron receives most incoming signals?",
  options: ["Dendrites", "Axon", "Myelin sheath", "Axon terminal only"],
  answer: "Dendrites",
  explanation:
    "Dendrites are specialized for receiving signals from other neurons or receptors.",
  wrongExplanations: {
    Axon: "The axon mainly carries impulses away from the cell body.",
    "Myelin sheath": "Myelin insulates the axon and speeds conduction.",
    "Axon terminal only": "Axon terminals mainly transmit signals to another cell."
  },
  hint: "Think of the branching structures near the cell body."
},

{
  subject: "Biology",
  question: "Which hormone is secreted by the thyroid gland?",
  options: ["Thyroxine", "Insulin", "Adrenaline", "Growth hormone"],
  answer: "Thyroxine",
  explanation:
    "The thyroid gland secretes thyroid hormones including thyroxine, which influence metabolism.",
  wrongExplanations: {
    Insulin: "Insulin is produced by pancreatic beta cells.",
    Adrenaline: "Adrenaline is produced mainly by the adrenal medulla.",
    "Growth hormone": "Growth hormone is secreted by the anterior pituitary."
  },
  hint: "Its name comes from the gland itself."
},

{
  subject: "Biology",
  question: "Which hormone promotes water reabsorption in the kidneys?",
  options: ["ADH", "Insulin", "Thyroxine", "FSH"],
  answer: "ADH",
  explanation:
    "Antidiuretic hormone increases water reabsorption in the kidney collecting ducts.",
  wrongExplanations: {
    Insulin: "Insulin regulates blood glucose.",
    Thyroxine: "Thyroxine regulates metabolism.",
    FSH: "FSH is involved in reproductive function."
  },
  hint: "Its full name means anti-diuretic hormone."
},

{
  subject: "Biology",
  question: "Which cells in the testes produce testosterone?",
  options: ["Leydig cells", "Sertoli cells", "Spermatogonia", "Epididymal cells"],
  answer: "Leydig cells",
  explanation:
    "Leydig or interstitial cells produce testosterone in response to LH.",
  wrongExplanations: {
    "Sertoli cells": "Sertoli cells support developing sperm cells.",
    Spermatogonia: "Spermatogonia are germ cells that give rise to sperm.",
    "Epididymal cells": "The epididymis stores and helps mature sperm but does not produce most testosterone."
  },
  hint: "They are also called interstitial cells."
},

{
  subject: "Biology",
  question: "Which hormone triggers ovulation in human females?",
  options: ["LH", "FSH", "Prolactin", "Insulin"],
  answer: "LH",
  explanation:
    "A mid-cycle surge of luteinizing hormone triggers ovulation.",
  wrongExplanations: {
    FSH: "FSH promotes follicular development but the LH surge triggers ovulation.",
    Prolactin: "Prolactin promotes milk production.",
    Insulin: "Insulin regulates blood glucose."
  },
  hint: "Think of the mid-cycle surge."
},

{
  subject: "Chemistry",
  question: "Which thermodynamic quantity is represented by H?",
  options: ["Enthalpy", "Entropy", "Internal energy", "Gibbs energy"],
  answer: "Enthalpy",
  explanation:
    "H denotes enthalpy, a thermodynamic state function commonly associated with heat changes at constant pressure.",
  wrongExplanations: {
    Entropy: "Entropy is represented by S.",
    "Internal energy": "Internal energy is commonly represented by U.",
    "Gibbs energy": "Gibbs free energy is represented by G."
  },
  hint: "H = ?"
},

{
  subject: "Chemistry",
  question: "An exothermic reaction has a value of ΔH that is generally:",
  options: ["Negative", "Positive", "Always zero", "Infinite"],
  answer: "Negative",
  explanation:
    "Exothermic reactions release heat, so the enthalpy change of the system is negative.",
  wrongExplanations: {
    Positive: "Positive ΔH corresponds to an endothermic process.",
    "Always zero": "Heat-releasing reactions generally have a non-zero enthalpy change.",
    Infinite: "Thermodynamic enthalpy changes are finite for ordinary reactions."
  },
  hint: "The system loses heat."
},

{
  subject: "Chemistry",
  question: "An endothermic reaction has a value of ΔH that is generally:",
  options: ["Positive", "Negative", "Always zero", "Undefined"],
  answer: "Positive",
  explanation:
    "Endothermic reactions absorb heat, giving a positive enthalpy change.",
  wrongExplanations: {
    Negative: "Negative ΔH describes an exothermic reaction.",
    "Always zero": "Heat absorption means the enthalpy change is not generally zero.",
    Undefined: "ΔH is well-defined for a thermodynamic process between states."
  },
  hint: "The system absorbs heat."
},

{
  subject: "Chemistry",
  question: "Entropy is commonly described as a measure of:",
  options: ["Disorder or energy dispersal", "Atomic mass only", "Acidity only", "Pressure only"],
  answer: "Disorder or energy dispersal",
  explanation:
    "Entropy measures the dispersal of energy and is often described qualitatively as disorder.",
  wrongExplanations: {
    "Atomic mass only": "Entropy is a thermodynamic property, not merely atomic mass.",
    "Acidity only": "Acidity is described using concepts such as pH and acid strength.",
    "Pressure only": "Entropy can depend on conditions but is not simply pressure."
  },
  hint: "Symbol S."
},

{
  subject: "Chemistry",
  question: "For a spontaneous process at constant temperature and pressure, Gibbs free energy change is generally:",
  options: ["Negative", "Positive", "Always zero", "Always one"],
  answer: "Negative",
  explanation:
    "A process is thermodynamically spontaneous under constant temperature and pressure when ΔG is negative.",
  wrongExplanations: {
    Positive: "Positive ΔG indicates a non-spontaneous direction under those conditions.",
    "Always zero": "ΔG is zero at equilibrium.",
    "Always one": "There is no such general requirement."
  },
  hint: "Spontaneous: ΔG < 0."
},

{
  subject: "Chemistry",
  question: "At equilibrium, Gibbs free energy change for the reaction is:",
  options: ["Zero", "Always negative", "Always positive", "Infinite"],
  answer: "Zero",
  explanation:
    "At equilibrium, there is no net thermodynamic driving force, so ΔG for the reaction is zero.",
  wrongExplanations: {
    "Always negative": "Negative ΔG indicates spontaneous forward change.",
    "Always positive": "Positive ΔG favours the reverse direction.",
    Infinite: "The equilibrium condition does not involve infinite ΔG."
  },
  hint: "Neither direction is favoured overall."
},

{
  subject: "Chemistry",
  question: "Which concentration unit is defined as moles of solute per litre of solution?",
  options: ["Molarity", "Molality", "Mole fraction", "Normality only"],
  answer: "Molarity",
  explanation:
    "Molarity is the number of moles of solute per litre of solution.",
  wrongExplanations: {
    Molality: "Molality is moles of solute per kilogram of solvent.",
    "Mole fraction": "Mole fraction is the ratio of moles of a component to total moles.",
    "Normality only": "Normality is based on equivalents per litre, not moles per litre."
  },
  hint: "M = moles/litre."
},

{
  subject: "Chemistry",
  question: "Which concentration unit is defined as moles of solute per kilogram of solvent?",
  options: ["Molality", "Molarity", "Mole fraction", "Percentage volume"],
  answer: "Molality",
  explanation:
    "Molality is the number of moles of solute per kilogram of solvent.",
  wrongExplanations: {
    Molarity: "Molarity uses litres of solution.",
    "Mole fraction": "Mole fraction is dimensionless and based on mole ratios.",
    "Percentage volume": "Volume percentage is defined differently."
  },
  hint: "Lowercase m is based on mass of solvent."
},

{
  subject: "Chemistry",
  question: "Raoult's law is mainly associated with:",
  options: [
    "Vapour pressure of solutions",
    "Radioactive decay",
    "Electrolysis",
    "Nuclear fission"
  ],
  answer: "Vapour pressure of solutions",
  explanation:
    "Raoult's law relates the partial vapour pressure of a component in an ideal solution to its mole fraction.",
  wrongExplanations: {
    "Radioactive decay": "Radioactive decay follows nuclear decay laws.",
    Electrolysis: "Electrolysis involves chemical change driven by electric current.",
    "Nuclear fission": "Fission involves splitting atomic nuclei."
  },
  hint: "Think solution + vapour pressure."
},

{
  subject: "Chemistry",
  question: "Which colligative property involves the lowering of the freezing point of a solvent?",
  options: [
    "Freezing point depression",
    "Boiling point elevation",
    "Osmotic pressure",
    "Relative vapour pressure only"
  ],
  answer: "Freezing point depression",
  explanation:
    "Adding a non-volatile solute generally lowers the freezing point of the solvent.",
  wrongExplanations: {
    "Boiling point elevation": "This refers to an increase in boiling point.",
    "Osmotic pressure": "Osmotic pressure concerns solvent movement through a semipermeable membrane.",
    "Relative vapour pressure only": "This does not directly name the freezing-point effect."
  },
  hint: "The name describes the effect directly."
},

{
  subject: "Chemistry",
  question: "Osmosis is the movement of solvent through a semipermeable membrane from:",
  options: [
    "Lower solute concentration to higher solute concentration",
    "Higher solute concentration to lower solute concentration only",
    "Solid to gas",
    "Gas to vacuum only"
  ],
  answer: "Lower solute concentration to higher solute concentration",
  explanation:
    "In osmosis, solvent moves through a semipermeable membrane toward the side with higher solute concentration.",
  wrongExplanations: {
    "Higher solute concentration to lower solute concentration only": "That is opposite to the usual net solvent movement in osmosis.",
    "Solid to gas": "That describes sublimation.",
    "Gas to vacuum only": "That is not osmosis."
  },
  hint: "Water moves toward the more concentrated solution."
},

{
  subject: "Chemistry",
  question: "The electrode where oxidation occurs is called the:",
  options: ["Anode", "Cathode", "Salt bridge", "Electrolyte"],
  answer: "Anode",
  explanation:
    "Oxidation always occurs at the anode.",
  wrongExplanations: {
    Cathode: "Reduction occurs at the cathode.",
    "Salt bridge": "A salt bridge helps maintain electrical neutrality in electrochemical cells.",
    Electrolyte: "An electrolyte conducts ions but is not an electrode."
  },
  hint: "Remember AN OX."
},

{
  subject: "Chemistry",
  question: "The electrode where reduction occurs is called the:",
  options: ["Cathode", "Anode", "Salt bridge", "Electrolyte"],
  answer: "Cathode",
  explanation:
    "Reduction always occurs at the cathode.",
  wrongExplanations: {
    Anode: "Oxidation occurs at the anode.",
    "Salt bridge": "A salt bridge is not an electrode.",
    Electrolyte: "The electrolyte provides mobile ions."
  },
  hint: "Remember RED CAT."
},

{
  subject: "Chemistry",
  question: "Faraday's laws are associated with:",
  options: ["Electrolysis", "Gas expansion", "Chemical equilibrium only", "Atomic spectra only"],
  answer: "Electrolysis",
  explanation:
    "Faraday's laws relate the amount of substance deposited during electrolysis to the electric charge passed.",
  wrongExplanations: {
    "Gas expansion": "Gas expansion is described by gas laws and thermodynamics.",
    "Chemical equilibrium only": "Faraday's laws do not describe equilibrium constants.",
    "Atomic spectra only": "Atomic spectra are described by atomic theory and quantum mechanics."
  },
  hint: "Think electrochemistry."
},

{
  subject: "Chemistry",
  question: "The rate of a chemical reaction generally increases when temperature increases because:",
  options: [
    "More molecules have sufficient activation energy",
    "Atoms become heavier",
    "Equilibrium always disappears",
    "Catalysts are automatically formed"
  ],
  answer: "More molecules have sufficient activation energy",
  explanation:
    "Higher temperature increases the fraction of molecules with enough energy to overcome the activation-energy barrier.",
  wrongExplanations: {
    "Atoms become heavier": "Atomic masses do not increase with ordinary temperature changes.",
    "Equilibrium always disappears": "Equilibrium can still exist at higher temperature.",
    "Catalysts are automatically formed": "Heating does not automatically create catalysts."
  },
  hint: "Think about activation energy."
},

{
  subject: "Chemistry",
  question: "A catalyst increases reaction rate mainly by:",
  options: [
    "Providing a lower activation-energy pathway",
    "Increasing the reaction enthalpy",
    "Changing the final equilibrium constant at the same temperature",
    "Increasing atomic masses"
  ],
  answer: "Providing a lower activation-energy pathway",
  explanation:
    "A catalyst speeds a reaction by providing an alternative pathway with lower activation energy.",
  wrongExplanations: {
    "Increasing the reaction enthalpy": "A catalyst does not alter the overall enthalpy change.",
    "Changing the final equilibrium constant at the same temperature": "A catalyst speeds both directions and does not change the equilibrium constant.",
    "Increasing atomic masses": "Catalysts do not change atomic masses."
  },
  hint: "Catalyst = lower Ea."
},

{
  subject: "Chemistry",
  question: "The rate law for a reaction is determined primarily by:",
  options: ["Experiment", "Balanced equation alone", "Colour of reactants", "Atomic mass alone"],
  answer: "Experiment",
  explanation:
    "Reaction orders and rate laws are generally determined experimentally.",
  wrongExplanations: {
    "Balanced equation alone": "Stoichiometric coefficients do not generally equal reaction orders unless justified by mechanism.",
    "Colour of reactants": "Colour does not determine the mathematical rate law.",
    "Atomic mass alone": "Atomic mass alone cannot determine reaction order."
  },
  hint: "Do not assume coefficients automatically become powers."
},

{
  subject: "Chemistry",
  question: "The half-life of a first-order reaction is:",
  options: [
    "Independent of initial concentration",
    "Directly proportional to initial concentration",
    "Always zero",
    "Equal to activation energy"
  ],
  answer: "Independent of initial concentration",
  explanation:
    "For a first-order reaction, t1/2 = 0.693/k, so it does not depend on initial reactant concentration.",
  wrongExplanations: {
    "Directly proportional to initial concentration": "That is not true for a first-order reaction.",
    "Always zero": "Half-life is a finite positive time.",
    "Equal to activation energy": "Half-life and activation energy are different physical quantities."
  },
  hint: "Remember 0.693/k."
},

{
  subject: "Physics",
  question: "Which equation relates final velocity, initial velocity, acceleration and time?",
  options: ["v = u + at", "s = vt only", "F = ma", "P = VI"],
  answer: "v = u + at",
  explanation:
    "For constant acceleration, final velocity is given by v = u + at.",
  wrongExplanations: {
    "s = vt only": "This form applies only in particular constant-velocity situations.",
    "F = ma": "This is Newton's Second Law.",
    "P = VI": "This is electrical power."
  },
  hint: "First equation of uniformly accelerated motion."
},

{
  subject: "Physics",
  question: "Which equation gives displacement under constant acceleration?",
  options: [
    "s = ut + 1/2 at²",
    "P = VI",
    "F = GMm/r²",
    "v = fλ"
  ],
  answer: "s = ut + 1/2 at²",
  explanation:
    "For uniformly accelerated motion, displacement is given by s = ut + 1/2 at².",
  wrongExplanations: {
    "P = VI": "This is an electrical power relation.",
    "F = GMm/r²": "This is Newton's law of gravitation.",
    "v = fλ": "This is the wave-speed relation."
  },
  hint: "It contains initial velocity, time and acceleration."
},

{
  subject: "Physics",
  question: "Centripetal acceleration for uniform circular motion is:",
  options: ["v²/r", "vr", "r/v²", "v/r²"],
  answer: "v²/r",
  explanation:
    "For circular motion, centripetal acceleration is ac = v²/r directed toward the centre.",
  wrongExplanations: {
    vr: "This has the wrong dimensional form for acceleration.",
    "r/v²": "This is the reciprocal-type form and is incorrect.",
    "v/r²": "This also has incorrect dimensions."
  },
  hint: "Speed squared divided by radius."
},

{
  subject: "Physics",
  question: "The centripetal force in circular motion always acts:",
  options: [
    "Toward the centre",
    "Away from the centre",
    "Along the tangent",
    "Vertically upward only"
  ],
  answer: "Toward the centre",
  explanation:
    "Centripetal force is the net inward force responsible for changing the direction of velocity in circular motion.",
  wrongExplanations: {
    "Away from the centre": "An apparent outward centrifugal effect may be described in a rotating frame, but centripetal force is inward.",
    "Along the tangent": "Tangential force changes speed rather than providing centripetal acceleration.",
    "Vertically upward only": "Its direction depends on the circle's centre, not necessarily vertical."
  },
  hint: "Centripetal means centre-seeking."
},

{
  subject: "Physics",
  question: "Torque is the rotational analogue of:",
  options: ["Force", "Mass", "Velocity", "Energy only"],
  answer: "Force",
  explanation:
    "Torque produces rotational effects just as force produces translational acceleration.",
  wrongExplanations: {
    Mass: "Moment of inertia is more closely analogous to mass in rotational motion.",
    Velocity: "Angular velocity is the rotational counterpart of linear velocity.",
    "Energy only": "Torque is not the rotational analogue of energy."
  },
  hint: "Force causes translation; torque causes rotation."
},

{
  subject: "Physics",
  question: "Moment of inertia is the rotational analogue of:",
  options: ["Mass", "Force", "Momentum", "Power"],
  answer: "Mass",
  explanation:
    "Moment of inertia measures resistance to angular acceleration and plays a role analogous to mass in linear motion.",
  wrongExplanations: {
    Force: "Torque is analogous to force.",
    Momentum: "Angular momentum is analogous to linear momentum.",
    Power: "Rotational power has a different relation."
  },
  hint: "It measures resistance to changing rotational motion."
},

{
  subject: "Physics",
  question: "Angular momentum remains conserved when:",
  options: [
    "External torque is zero",
    "External force is always non-zero",
    "Mass becomes zero",
    "Velocity is always zero"
  ],
  answer: "External torque is zero",
  explanation:
    "Angular momentum is conserved when the net external torque on a system is zero.",
  wrongExplanations: {
    "External force is always non-zero": "An external force may or may not produce torque depending on its line of action.",
    "Mass becomes zero": "Mass need not become zero for angular momentum conservation.",
    "Velocity is always zero": "Angular momentum can be conserved in rotating systems with non-zero velocity."
  },
  hint: "Torque is to angular momentum what force is to linear momentum."
},

{
  subject: "Physics",
  question: "Pressure is defined as:",
  options: ["Force per unit area", "Area per unit force", "Mass per unit volume", "Work per unit time"],
  answer: "Force per unit area",
  explanation:
    "Pressure is given by P = F/A.",
  wrongExplanations: {
    "Area per unit force": "This is the reciprocal of the correct relationship.",
    "Mass per unit volume": "This defines density.",
    "Work per unit time": "This defines power."
  },
  hint: "P = F/A."
},

{
  subject: "Physics",
  question: "The SI unit of pressure is:",
  options: ["Pascal", "Newton", "Joule", "Watt"],
  answer: "Pascal",
  explanation:
    "Pressure is measured in pascals, where 1 Pa = 1 N/m².",
  wrongExplanations: {
    Newton: "Newton is the unit of force.",
    Joule: "Joule is the unit of work and energy.",
    Watt: "Watt is the unit of power."
  },
  hint: "Named after Blaise Pascal."
},

{
  subject: "Physics",
  question: "Bernoulli's principle relates pressure in a flowing fluid to its:",
  options: ["Speed and height", "Colour", "Electric charge only", "Atomic number"],
  answer: "Speed and height",
  explanation:
    "Bernoulli's equation relates pressure, kinetic energy per unit volume and gravitational potential energy per unit volume.",
  wrongExplanations: {
    Colour: "Colour has no role in Bernoulli's equation.",
    "Electric charge only": "Bernoulli's principle is a fluid-mechanics principle.",
    "Atomic number": "Atomic number is unrelated."
  },
  hint: "Pressure, velocity and elevation."
},

{
  subject: "Physics",
  question: "For an incompressible fluid, the continuity equation is commonly written as:",
  options: ["A1v1 = A2v2", "V = IR", "F = ma", "Q = mcΔT"],
  answer: "A1v1 = A2v2",
  explanation:
    "For steady incompressible flow, the product of cross-sectional area and fluid speed remains constant.",
  wrongExplanations: {
    "V = IR": "This is Ohm's law.",
    "F = ma": "This is Newton's Second Law.",
    "Q = mcΔT": "This is a heat equation."
  },
  hint: "Narrower pipe usually means faster flow."
},

{
  subject: "Physics",
  question: "Specific heat capacity is the heat required to raise the temperature of:",
  options: [
    "Unit mass of a substance by one degree",
    "Any object by 100 degrees",
    "One mole only by one degree always",
    "A vacuum by one degree"
  ],
  answer: "Unit mass of a substance by one degree",
  explanation:
    "Specific heat capacity is the energy required to raise the temperature of unit mass by one kelvin or one degree Celsius.",
  wrongExplanations: {
    "Any object by 100 degrees": "This is not the definition.",
    "One mole only by one degree always": "That describes molar heat capacity rather than specific heat capacity.",
    "A vacuum by one degree": "A vacuum is not treated as a substance with ordinary specific heat capacity."
  },
  hint: "Think Q = mcΔT."
},

{
  subject: "Physics",
  question: "The first law of thermodynamics is an expression of conservation of:",
  options: ["Energy", "Charge only", "Momentum only", "Mass number"],
  answer: "Energy",
  explanation:
    "The first law of thermodynamics expresses conservation of energy in thermal processes.",
  wrongExplanations: {
    "Charge only": "Charge conservation is a separate physical principle.",
    "Momentum only": "Momentum conservation is a separate mechanical principle.",
    "Mass number": "Mass number is a nuclear property."
  },
  hint: "Heat and work are forms of energy transfer."
},

{
  subject: "Physics",
  question: "In an isothermal process for an ideal gas, temperature remains:",
  options: ["Constant", "Increasing", "Decreasing", "Infinite"],
  answer: "Constant",
  explanation:
    "An isothermal process occurs at constant temperature.",
  wrongExplanations: {
    Increasing: "That would not be isothermal.",
    Decreasing: "That would not be isothermal.",
    Infinite: "Temperature does not become infinite by definition."
  },
  hint: "Iso = same, thermal = temperature."
},

{
  subject: "Physics",
  question: "In an adiabatic process, heat exchange with the surroundings is:",
  options: ["Zero", "Maximum", "Always positive", "Always negative"],
  answer: "Zero",
  explanation:
    "An ideal adiabatic process involves no heat transfer between the system and surroundings.",
  wrongExplanations: {
    Maximum: "Adiabatic means no heat exchange.",
    "Always positive": "Q is zero, not positive.",
    "Always negative": "Q is zero, not negative."
  },
  hint: "Adiabatic means thermally insulated."
},

{
  subject: "Physics",
  question: "Simple harmonic motion has a restoring force that is:",
  options: [
    "Proportional to displacement and opposite in direction",
    "Independent of displacement",
    "Always equal to weight",
    "Always zero"
  ],
  answer: "Proportional to displacement and opposite in direction",
  explanation:
    "In simple harmonic motion, restoring force follows F = -kx.",
  wrongExplanations: {
    "Independent of displacement": "The restoring force varies linearly with displacement.",
    "Always equal to weight": "Weight is not necessarily the restoring force in SHM.",
    "Always zero": "The restoring force is zero only at equilibrium."
  },
  hint: "Remember F = -kx."
},

{
  subject: "Physics",
  question: "The time period of a simple pendulum for small oscillations is:",
  options: ["2π√(L/g)", "2π√(g/L)", "L/g", "g/L"],
  answer: "2π√(L/g)",
  explanation:
    "For small oscillations, a simple pendulum has period T = 2π√(L/g).",
  wrongExplanations: {
    "2π√(g/L)": "The ratio inside the square root is reversed.",
    "L/g": "The square root and 2π factor are missing.",
    "g/L": "This is dimensionally incorrect for time."
  },
  hint: "Longer pendulum means longer period."
},

{
  subject: "Physics",
  question: "In a transverse wave, particles of the medium vibrate:",
  options: [
    "Perpendicular to the direction of wave propagation",
    "Parallel to the direction of wave propagation",
    "Only clockwise",
    "Without moving at all"
  ],
  answer: "Perpendicular to the direction of wave propagation",
  explanation:
    "In transverse waves, particle displacement is perpendicular to the direction in which the wave travels.",
  wrongExplanations: {
    "Parallel to the direction of wave propagation": "That describes longitudinal waves.",
    "Only clockwise": "Particle motion need not be circular.",
    "Without moving at all": "Particles oscillate around equilibrium positions."
  },
  hint: "Think of a wave on a stretched string."
},

{
  subject: "Physics",
  question: "In a longitudinal wave, particles of the medium vibrate:",
  options: [
    "Parallel to the direction of propagation",
    "Perpendicular to the direction of propagation",
    "Only vertically",
    "Only horizontally"
  ],
  answer: "Parallel to the direction of propagation",
  explanation:
    "In longitudinal waves, particles oscillate back and forth parallel to the direction the wave travels.",
  wrongExplanations: {
    "Perpendicular to the direction of propagation": "That describes transverse waves.",
    "Only vertically": "Orientation depends on the propagation direction.",
    "Only horizontally": "Orientation depends on the propagation direction."
  },
  hint: "Sound in air is the classic example."
},

{
  subject: "Physics",
  question: "The bending of light when it passes from one medium into another is called:",
  options: ["Refraction", "Reflection", "Diffraction", "Polarization"],
  answer: "Refraction",
  explanation:
    "Refraction is the change in direction of light caused by a change in its speed between media.",
  wrongExplanations: {
    Reflection: "Reflection is the bouncing back of light from a surface.",
    Diffraction: "Diffraction is bending and spreading around obstacles or apertures.",
    Polarization: "Polarization concerns the orientation of transverse-wave oscillations."
  },
  hint: "It happens when light enters glass from air."
},

{
  subject: "Physics",
  question: "Total internal reflection can occur when light travels from:",
  options: [
    "A denser medium to a rarer medium",
    "A rarer medium to a denser medium only",
    "Vacuum to vacuum",
    "Any medium at any angle"
  ],
  answer: "A denser medium to a rarer medium",
  explanation:
    "Total internal reflection requires light to travel from an optically denser medium to a rarer medium and strike above the critical angle.",
  wrongExplanations: {
    "A rarer medium to a denser medium only": "Total internal reflection does not occur in this direction.",
    "Vacuum to vacuum": "There is no interface change in refractive index.",
    "Any medium at any angle": "A critical-angle condition must also be satisfied."
  },
  hint: "Think glass to air."
},

{
  subject: "Physics",
  question: "Optical fibres work mainly on the principle of:",
  options: [
    "Total internal reflection",
    "Diffraction only",
    "Photoelectric effect",
    "Nuclear fission"
  ],
  answer: "Total internal reflection",
  explanation:
    "Light is guided through optical fibres by repeated total internal reflection.",
  wrongExplanations: {
    "Diffraction only": "Diffraction is not the main guiding mechanism.",
    "Photoelectric effect": "The photoelectric effect involves emission of electrons by light.",
    "Nuclear fission": "Nuclear fission is unrelated to optical communication."
  },
  hint: "Light repeatedly reflects inside the fibre."
},

{
  subject: "Physics",
  question: "The charge on an electron is:",
  options: [
    "-1.6 × 10⁻¹⁹ C",
    "+1.6 × 10⁻¹⁹ C",
    "0 C",
    "-9.8 C"
  ],
  answer: "-1.6 × 10⁻¹⁹ C",
  explanation:
    "An electron carries one negative elementary charge, approximately -1.6 × 10⁻¹⁹ coulomb.",
  wrongExplanations: {
    "+1.6 × 10⁻¹⁹ C": "This is the magnitude and sign of a proton's charge.",
    "0 C": "The electron is not electrically neutral.",
    "-9.8 C": "This value is unrelated to elementary charge."
  },
  hint: "Negative elementary charge."
},

{
  subject: "Physics",
  question: "Coulomb's law states that electrostatic force is inversely proportional to:",
  options: [
    "Square of the separation",
    "Separation only",
    "Cube of the separation",
    "Product of charges"
  ],
  answer: "Square of the separation",
  explanation:
    "Coulomb's law has the form F = kq1q2/r².",
  wrongExplanations: {
    "Separation only": "The law follows an inverse-square relation.",
    "Cube of the separation": "The denominator contains r², not r³.",
    "Product of charges": "Force is directly proportional to the product of the charges."
  },
  hint: "It has the same distance dependence as gravitational force."
},

{
  subject: "Physics",
  question: "Electric field is defined as force per unit:",
  options: ["Positive test charge", "Mass", "Area", "Time"],
  answer: "Positive test charge",
  explanation:
    "Electric field strength is E = F/q for a small positive test charge.",
  wrongExplanations: {
    Mass: "Force per unit mass describes gravitational field strength.",
    Area: "Force per unit area defines pressure.",
    Time: "Force per unit time is not electric field."
  },
  hint: "E = F/q."
},

{
  subject: "Physics",
  question: "The SI unit of capacitance is:",
  options: ["Farad", "Henry", "Tesla", "Weber"],
  answer: "Farad",
  explanation:
    "Capacitance is measured in farads.",
  wrongExplanations: {
    Henry: "Henry is the unit of inductance.",
    Tesla: "Tesla is the unit of magnetic flux density.",
    Weber: "Weber is the unit of magnetic flux."
  },
  hint: "Named after Michael Faraday."
},

{
  subject: "Physics",
  question: "Capacitance is defined as:",
  options: ["Q/V", "V/Q", "IR", "VI"],
  answer: "Q/V",
  explanation:
    "Capacitance is the charge stored per unit potential difference, C = Q/V.",
  wrongExplanations: {
    "V/Q": "This is the reciprocal of capacitance.",
    IR: "IR gives voltage by Ohm's law.",
    VI: "VI gives electrical power."
  },
  hint: "C = charge divided by voltage."
},

{
  subject: "Physics",
  question: "The magnetic field around a long straight current-carrying wire consists of:",
  options: [
    "Concentric circles",
    "Straight radial lines",
    "No magnetic field",
    "Elliptical electric field lines only"
  ],
  answer: "Concentric circles",
  explanation:
    "Magnetic field lines around a straight current-carrying wire form concentric circles centred on the wire.",
  wrongExplanations: {
    "Straight radial lines": "Radial lines are associated more with fields around isolated charges.",
    "No magnetic field": "Electric current produces a magnetic field.",
    "Elliptical electric field lines only": "This does not describe the magnetic field around a straight wire."
  },
  hint: "Use the right-hand thumb rule."
},

{
  subject: "Physics",
  question: "The SI unit of magnetic flux density is:",
  options: ["Tesla", "Weber", "Henry", "Farad"],
  answer: "Tesla",
  explanation:
    "Magnetic flux density B is measured in tesla.",
  wrongExplanations: {
    Weber: "Weber is the unit of magnetic flux.",
    Henry: "Henry is the unit of inductance.",
    Farad: "Farad is the unit of capacitance."
  },
  hint: "Symbol T."
},

{
  subject: "Physics",
  question: "Faraday's law of electromagnetic induction relates induced emf to the rate of change of:",
  options: ["Magnetic flux", "Mass", "Temperature only", "Resistance only"],
  answer: "Magnetic flux",
  explanation:
    "Faraday's law states that induced emf is proportional to the rate of change of magnetic flux linkage.",
  wrongExplanations: {
    Mass: "Mass change does not generate emf according to Faraday's law.",
    "Temperature only": "Temperature change alone is not the defining quantity.",
    "Resistance only": "Resistance affects current but not the basic induction law."
  },
  hint: "Changing magnetic field through a loop."
},

{
  subject: "Physics",
  question: "Lenz's law gives the direction of:",
  options: [
    "Induced current",
    "Gravitational force",
    "Sound propagation",
    "Heat capacity"
  ],
  answer: "Induced current",
  explanation:
    "Lenz's law states that the induced current opposes the change in magnetic flux that produces it.",
  wrongExplanations: {
    "Gravitational force": "Gravity is unrelated to electromagnetic induction.",
    "Sound propagation": "Sound direction is governed by wave propagation.",
    "Heat capacity": "Heat capacity is a thermal property."
  },
  hint: "The induced effect opposes the change causing it."
},

{
  subject: "Physics",
  question: "A transformer operates using:",
  options: [
    "Alternating current",
    "Steady direct current only",
    "Static charge only",
    "Mechanical friction only"
  ],
  answer: "Alternating current",
  explanation:
    "Transformers require changing magnetic flux, which is produced by alternating current.",
  wrongExplanations: {
    "Steady direct current only": "A steady DC current does not continuously change magnetic flux.",
    "Static charge only": "Transformers depend on electromagnetic induction.",
    "Mechanical friction only": "Friction is not their operating principle."
  },
  hint: "Changing current creates changing magnetic flux."
},

{
  subject: "Physics",
  question: "Which electromagnetic radiation has the longest wavelength?",
  options: ["Radio waves", "Visible light", "X-rays", "Gamma rays"],
  answer: "Radio waves",
  explanation:
    "Radio waves occupy the longest-wavelength region of the electromagnetic spectrum.",
  wrongExplanations: {
    "Visible light": "Visible wavelengths are much shorter than radio waves.",
    "X-rays": "X-rays have very short wavelengths.",
    "Gamma rays": "Gamma rays have the shortest wavelengths and highest frequencies."
  },
  hint: "Opposite end of the spectrum from gamma rays."
},

{
  subject: "Physics",
  question: "Which electromagnetic radiation is commonly used for medical imaging of bones?",
  options: ["X-rays", "Radio waves", "Microwaves", "Infrared"],
  answer: "X-rays",
  explanation:
    "X-rays penetrate soft tissue more readily than bone, making them useful for skeletal imaging.",
  wrongExplanations: {
    "Radio waves": "Radio waves are used in communication and in MRI as part of a different imaging mechanism.",
    Microwaves: "Microwaves are widely used in communication and heating.",
    Infrared: "Infrared is associated with thermal radiation."
  },
  hint: "Traditional bone radiographs use these."
},

{
  subject: "Biology",
  question: "Which enzyme joins Okazaki fragments during DNA replication?",
  options: ["DNA ligase", "Helicase", "Primase", "RNA polymerase"],
  answer: "DNA ligase",
  explanation:
    "DNA ligase joins Okazaki fragments on the lagging strand by sealing breaks in the sugar-phosphate backbone.",
  wrongExplanations: {
    Helicase: "Helicase separates the two DNA strands.",
    Primase: "Primase synthesizes RNA primers.",
    "RNA polymerase": "RNA polymerase synthesizes RNA during transcription."
  },
  hint: "Think of an enzyme that acts like molecular glue."
},

{
  subject: "Biology",
  question: "Okazaki fragments are formed on which DNA strand during replication?",
  options: ["Lagging strand", "Leading strand", "Template strand only", "Both strands continuously"],
  answer: "Lagging strand",
  explanation:
    "The lagging strand is synthesized discontinuously as short Okazaki fragments.",
  wrongExplanations: {
    "Leading strand": "The leading strand is synthesized continuously.",
    "Template strand only": "Both new strands use templates, but Okazaki fragments specifically form during lagging-strand synthesis.",
    "Both strands continuously": "Only the leading strand is synthesized continuously."
  },
  hint: "One strand is made continuously, the other in pieces."
},

{
  subject: "Biology",
  question: "Which enzyme synthesizes RNA during transcription?",
  options: ["RNA polymerase", "DNA ligase", "Helicase", "Reverse transcriptase"],
  answer: "RNA polymerase",
  explanation:
    "RNA polymerase uses a DNA template to synthesize RNA during transcription.",
  wrongExplanations: {
    "DNA ligase": "DNA ligase joins DNA fragments.",
    Helicase: "Helicase unwinds DNA.",
    "Reverse transcriptase": "Reverse transcriptase produces DNA from an RNA template."
  },
  hint: "Its name directly describes RNA synthesis."
},

{
  subject: "Biology",
  question: "Which enzyme converts RNA into DNA in retroviruses?",
  options: ["Reverse transcriptase", "DNA polymerase", "Ligase", "Amylase"],
  answer: "Reverse transcriptase",
  explanation:
    "Reverse transcriptase synthesizes DNA using RNA as a template.",
  wrongExplanations: {
    "DNA polymerase": "Ordinary DNA polymerase generally synthesizes DNA from a DNA template.",
    Ligase: "Ligase joins nucleic acid fragments.",
    Amylase: "Amylase digests starch."
  },
  hint: "The information flow is reversed from the usual DNA → RNA."
},

{
  subject: "Biology",
  question: "PCR is mainly used to:",
  options: [
    "Amplify a specific DNA sequence",
    "Translate proteins",
    "Destroy all DNA",
    "Separate chromosomes during mitosis"
  ],
  answer: "Amplify a specific DNA sequence",
  explanation:
    "Polymerase Chain Reaction produces millions of copies of a selected DNA region.",
  wrongExplanations: {
    "Translate proteins": "Translation occurs at ribosomes.",
    "Destroy all DNA": "PCR copies rather than destroys DNA.",
    "Separate chromosomes during mitosis": "Chromosome separation is a cellular process unrelated to PCR."
  },
  hint: "PCR makes many copies of DNA."
},

{
  subject: "Biology",
  question: "Which enzyme is widely used in PCR because it can tolerate high temperatures?",
  options: ["Taq polymerase", "Pepsin", "RuBisCO", "DNA ligase"],
  answer: "Taq polymerase",
  explanation:
    "Taq polymerase is heat-stable and can survive the repeated heating cycles used in PCR.",
  wrongExplanations: {
    Pepsin: "Pepsin is a digestive enzyme.",
    RuBisCO: "RuBisCO participates in carbon fixation.",
    "DNA ligase": "DNA ligase joins DNA fragments but is not the standard heat-stable PCR polymerase."
  },
  hint: "It comes from Thermus aquaticus."
},

{
  subject: "Biology",
  question: "Restriction enzymes are used in biotechnology mainly to:",
  options: [
    "Cut DNA at specific sequences",
    "Produce ATP",
    "Translate mRNA",
    "Destroy ribosomes"
  ],
  answer: "Cut DNA at specific sequences",
  explanation:
    "Restriction endonucleases recognize specific DNA sequences and cut DNA at or near those sites.",
  wrongExplanations: {
    "Produce ATP": "ATP is mainly produced through cellular metabolism.",
    "Translate mRNA": "Ribosomes perform translation.",
    "Destroy ribosomes": "Restriction enzymes specifically act on DNA."
  },
  hint: "Think of molecular scissors."
},

{
  subject: "Biology",
  question: "A plasmid used in genetic engineering usually acts as a:",
  options: ["Vector", "Hormone", "Enzyme", "Antibody"],
  answer: "Vector",
  explanation:
    "Plasmids can carry foreign DNA into host cells and therefore act as cloning vectors.",
  wrongExplanations: {
    Hormone: "Plasmids are DNA molecules, not hormones.",
    Enzyme: "A plasmid is genetic material, not an enzyme.",
    Antibody: "Antibodies are immune proteins."
  },
  hint: "It carries foreign DNA into another cell."
},

{
  subject: "Biology",
  question: "Bt cotton was genetically modified mainly for resistance against:",
  options: ["Insect pests", "Drought only", "Fungal diseases only", "High soil salinity only"],
  answer: "Insect pests",
  explanation:
    "Bt cotton contains genes from Bacillus thuringiensis that produce proteins toxic to certain insect pests.",
  wrongExplanations: {
    "Drought only": "Bt modification primarily targets insect pests.",
    "Fungal diseases only": "Bt toxin is mainly insecticidal.",
    "High soil salinity only": "Bt cotton was not primarily developed for salt tolerance."
  },
  hint: "Bt toxin targets certain insect larvae."
},

{
  subject: "Biology",
  question: "Which bacterium is commonly used as a vector for transferring genes into plants?",
  options: [
    "Agrobacterium tumefaciens",
    "Rhizobium leguminosarum",
    "Escherichia coli only",
    "Lactobacillus"
  ],
  answer: "Agrobacterium tumefaciens",
  explanation:
    "Agrobacterium tumefaciens naturally transfers DNA into plant cells and is widely used in plant genetic engineering.",
  wrongExplanations: {
    "Rhizobium leguminosarum": "Rhizobium is best known for nitrogen fixation in legume roots.",
    "Escherichia coli only": "E. coli is widely used in biotechnology but is not the classic natural plant gene-transfer vector.",
    Lactobacillus: "Lactobacillus is commonly associated with fermentation."
  },
  hint: "Its Ti plasmid is famous in plant biotechnology."
},

{
  subject: "Biology",
  question: "Which stage of ecological succession begins on a previously lifeless surface?",
  options: ["Primary succession", "Secondary succession", "Climax only", "Migration"],
  answer: "Primary succession",
  explanation:
    "Primary succession begins in an area where no previous biological community or developed soil exists.",
  wrongExplanations: {
    "Secondary succession": "Secondary succession occurs where a previous community existed.",
    "Climax only": "A climax community is a later stage of succession.",
    Migration: "Migration is movement of organisms, not a type of succession."
  },
  hint: "Think bare rock or newly formed land."
},

{
  subject: "Biology",
  question: "Secondary succession generally occurs:",
  options: [
    "Where a previous community existed",
    "Only on newly formed volcanic rock",
    "Only in oceans",
    "Without any soil"
  ],
  answer: "Where a previous community existed",
  explanation:
    "Secondary succession begins after disturbance in an area where soil and traces of the previous community remain.",
  wrongExplanations: {
    "Only on newly formed volcanic rock": "That is a classic setting for primary succession.",
    "Only in oceans": "Secondary succession can occur in many terrestrial environments.",
    "Without any soil": "Secondary succession usually starts where soil is already present."
  },
  hint: "Think forest recovery after a fire."
},

{
  subject: "Biology",
  question: "Which organisms usually form the first trophic level of a food chain?",
  options: ["Producers", "Primary consumers", "Secondary consumers", "Decomposers only"],
  answer: "Producers",
  explanation:
    "Producers capture energy and form the first trophic level in most ecosystems.",
  wrongExplanations: {
    "Primary consumers": "Primary consumers feed on producers and occupy the second trophic level.",
    "Secondary consumers": "Secondary consumers occupy a higher trophic level.",
    "Decomposers only": "Decomposers act across trophic levels rather than forming the usual first trophic level."
  },
  hint: "Energy enters the food chain here."
},

{
  subject: "Biology",
  question: "According to the ten percent law, approximately how much energy passes to the next trophic level?",
  options: ["10%", "1%", "50%", "90%"],
  answer: "10%",
  explanation:
    "Lindeman's ten percent law states that roughly 10% of energy is transferred from one trophic level to the next.",
  wrongExplanations: {
    "1%": "This is much lower than the approximate trophic-transfer rule.",
    "50%": "Energy transfer is generally far less efficient.",
    "90%": "Most energy is actually lost rather than transferred."
  },
  hint: "The name of the law gives the answer."
},

{
  subject: "Biology",
  question: "Which term describes the variety of living organisms in an area?",
  options: ["Biodiversity", "Biomagnification", "Succession", "Eutrophication"],
  answer: "Biodiversity",
  explanation:
    "Biodiversity refers to variation at genetic, species and ecosystem levels.",
  wrongExplanations: {
    Biomagnification: "Biomagnification is increasing concentration of pollutants along food chains.",
    Succession: "Succession is gradual ecological community change.",
    Eutrophication: "Eutrophication is nutrient enrichment of water bodies."
  },
  hint: "Bio + diversity."
},

{
  subject: "Biology",
  question: "Increasing concentration of a persistent pollutant at higher trophic levels is called:",
  options: ["Biomagnification", "Nitrogen fixation", "Succession", "Commensalism"],
  answer: "Biomagnification",
  explanation:
    "Biomagnification is the progressive increase in concentration of persistent pollutants along a food chain.",
  wrongExplanations: {
    "Nitrogen fixation": "Nitrogen fixation converts atmospheric nitrogen into usable compounds.",
    Succession: "Succession describes ecosystem community change.",
    Commensalism: "Commensalism is a biological interaction between species."
  },
  hint: "The pollutant becomes magnified up the food chain."
},

{
  subject: "Biology",
  question: "Excessive nutrient enrichment of a lake leading to algal blooms is called:",
  options: ["Eutrophication", "Biomagnification", "Desertification", "Fixation"],
  answer: "Eutrophication",
  explanation:
    "Eutrophication occurs when excess nutrients stimulate algal growth and can reduce dissolved oxygen.",
  wrongExplanations: {
    Biomagnification: "Biomagnification involves pollutant concentration through trophic levels.",
    Desertification: "Desertification is land degradation in dry regions.",
    Fixation: "Fixation is not the term for nutrient over-enrichment of water."
  },
  hint: "Think fertilizers entering lakes."
},

{
  subject: "Biology",
  question: "Double fertilization is characteristic of:",
  options: ["Angiosperms", "Gymnosperms", "Bryophytes", "Pteridophytes"],
  answer: "Angiosperms",
  explanation:
    "Flowering plants undergo double fertilization, producing a zygote and typically a triploid primary endosperm nucleus.",
  wrongExplanations: {
    Gymnosperms: "Gymnosperms do not show the typical angiosperm double-fertilization process.",
    Bryophytes: "Bryophytes reproduce without double fertilization.",
    Pteridophytes: "Pteridophytes do not show angiosperm-type double fertilization."
  },
  hint: "It is a defining feature of flowering plants."
},

{
  subject: "Biology",
  question: "In angiosperms, one male gamete fuses with the egg to form the:",
  options: ["Zygote", "Endosperm", "Pollen grain", "Embryo sac"],
  answer: "Zygote",
  explanation:
    "Fusion of one male gamete with the egg produces the diploid zygote.",
  wrongExplanations: {
    Endosperm: "Endosperm develops after the second male gamete fuses with the polar nuclei.",
    "Pollen grain": "The pollen grain carries the male gametophyte.",
    "Embryo sac": "The embryo sac is the female gametophyte."
  },
  hint: "Male gamete + egg = ?"
},

{
  subject: "Biology",
  question: "In flowering plants, the second male gamete usually fuses with the polar nuclei to form:",
  options: [
    "Primary endosperm nucleus",
    "Zygote",
    "Pollen tube",
    "Seed coat"
  ],
  answer: "Primary endosperm nucleus",
  explanation:
    "Triple fusion produces the primary endosperm nucleus, which is usually triploid.",
  wrongExplanations: {
    Zygote: "The zygote forms from fusion of the egg and one male gamete.",
    "Pollen tube": "The pollen tube transports male gametes.",
    "Seed coat": "The seed coat develops mainly from integuments."
  },
  hint: "This is the second part of double fertilization."
},

{
  subject: "Chemistry",
  question: "Which ligand is neutral?",
  options: ["NH3", "Cl-", "CN-", "OH-"],
  answer: "NH3",
  explanation:
    "Ammonia is a neutral ligand because it carries no overall charge.",
  wrongExplanations: {
    "Cl-": "Chloride is negatively charged.",
    "CN-": "Cyanide is negatively charged.",
    "OH-": "Hydroxide is negatively charged."
  },
  hint: "Look for the species with no charge."
},

{
  subject: "Chemistry",
  question: "The coordination number of cobalt in [Co(NH3)6]3+ is:",
  options: ["6", "3", "2", "9"],
  answer: "6",
  explanation:
    "Six ammonia ligands are directly bonded to the cobalt ion, giving coordination number 6.",
  wrongExplanations: {
    "3": "The +3 charge does not determine coordination number.",
    "2": "There are more than two donor atoms attached.",
    "9": "Coordination number counts directly bonded donor atoms, not total atoms."
  },
  hint: "Count the ligands directly attached to Co."
},

{
  subject: "Chemistry",
  question: "Which type of ligand attaches through two donor atoms?",
  options: ["Bidentate ligand", "Monodentate ligand", "Ambidentate ligand only", "Anion only"],
  answer: "Bidentate ligand",
  explanation:
    "A bidentate ligand coordinates to a metal through two donor atoms.",
  wrongExplanations: {
    "Monodentate ligand": "A monodentate ligand coordinates through one donor atom.",
    "Ambidentate ligand only": "An ambidentate ligand has two possible donor atoms but generally binds through one at a time.",
    "Anion only": "Charge does not define ligand denticity."
  },
  hint: "Bi means two."
},

{
  subject: "Chemistry",
  question: "Which of the following is a bidentate ligand?",
  options: ["Ethane-1,2-diamine", "NH3", "Cl-", "H2O"],
  answer: "Ethane-1,2-diamine",
  explanation:
    "Ethane-1,2-diamine has two nitrogen donor atoms and can bind through both.",
  wrongExplanations: {
    NH3: "Ammonia is monodentate.",
    "Cl-": "Chloride is normally monodentate.",
    H2O: "Water usually coordinates through one oxygen atom."
  },
  hint: "Look for two donor nitrogen atoms."
},

{
  subject: "Chemistry",
  question: "Transition elements commonly show variable oxidation states because:",
  options: [
    "Both ns and (n-1)d electrons can participate in bonding",
    "They contain no electrons",
    "They are always gases",
    "Their nuclei change during reactions"
  ],
  answer: "Both ns and (n-1)d electrons can participate in bonding",
  explanation:
    "The energies of ns and (n-1)d orbitals are similar, allowing different numbers of electrons to participate in bonding.",
  wrongExplanations: {
    "They contain no electrons": "Transition atoms contain electrons like all ordinary atoms.",
    "They are always gases": "Most transition elements are solids.",
    "Their nuclei change during reactions": "Ordinary chemical reactions involve electrons, not nuclear changes."
  },
  hint: "Think of closely spaced s and d orbital energies."
},

{
  subject: "Chemistry",
  question: "The colour of many transition-metal compounds is mainly associated with:",
  options: ["d-electron transitions", "Nuclear fission", "Loss of all neutrons", "Presence of hydrogen only"],
  answer: "d-electron transitions",
  explanation:
    "Visible light can promote electrons between split d orbitals, producing characteristic colours.",
  wrongExplanations: {
    "Nuclear fission": "Chemical colour does not require nuclear reactions.",
    "Loss of all neutrons": "Neutron loss is not involved.",
    "Presence of hydrogen only": "Hydrogen is not responsible for the characteristic colours."
  },
  hint: "Think of partially filled d orbitals."
},

{
  subject: "Chemistry",
  question: "Which element is classified as a transition metal?",
  options: ["Iron", "Sodium", "Calcium", "Neon"],
  answer: "Iron",
  explanation:
    "Iron is a d-block element with partially filled d orbitals in its atoms or common ions.",
  wrongExplanations: {
    Sodium: "Sodium is an alkali metal.",
    Calcium: "Calcium is an alkaline earth metal.",
    Neon: "Neon is a noble gas."
  },
  hint: "Fe is the familiar example."
},

{
  subject: "Chemistry",
  question: "The functional group of ketones is:",
  options: [">C=O", "-CHO", "-COOH", "-NH2"],
  answer: ">C=O",
  explanation:
    "Ketones contain a carbonyl group bonded to two carbon groups.",
  wrongExplanations: {
    "-CHO": "The -CHO group is found in aldehydes.",
    "-COOH": "The -COOH group is found in carboxylic acids.",
    "-NH2": "The -NH2 group is characteristic of amines."
  },
  hint: "A ketone contains a carbonyl between two carbons."
},

{
  subject: "Chemistry",
  question: "Which compound is a ketone?",
  options: ["Propanone", "Propanal", "Propanol", "Propanoic acid"],
  answer: "Propanone",
  explanation:
    "Propanone contains a carbonyl group bonded to two carbon atoms and is therefore a ketone.",
  wrongExplanations: {
    Propanal: "Propanal is an aldehyde.",
    Propanol: "Propanol is an alcohol.",
    "Propanoic acid": "Propanoic acid is a carboxylic acid."
  },
  hint: "Ketone names often end in -one."
},

{
  subject: "Chemistry",
  question: "Which reagent can distinguish an aldehyde from a ketone by producing a silver mirror?",
  options: ["Tollens' reagent", "Benedict's reagent only", "Concentrated H2SO4", "NaCl solution"],
  answer: "Tollens' reagent",
  explanation:
    "Aldehydes generally reduce Tollens' reagent and produce a silver mirror, while ordinary ketones do not.",
  wrongExplanations: {
    "Benedict's reagent only": "Benedict's reagent can detect reducing substances but the classic silver-mirror test uses Tollens' reagent.",
    "Concentrated H2SO4": "Sulphuric acid is not the silver-mirror reagent.",
    "NaCl solution": "Sodium chloride does not provide this test."
  },
  hint: "Silver mirror test."
},

{
  subject: "Chemistry",
  question: "Hydrogenation of an alkene generally produces a:",
  options: ["Alkane", "Alkyne", "Alcohol", "Carboxylic acid"],
  answer: "Alkane",
  explanation:
    "Hydrogen adds across the carbon-carbon double bond, converting an alkene into a saturated alkane.",
  wrongExplanations: {
    Alkyne: "Hydrogenation reduces unsaturation rather than increasing it.",
    Alcohol: "Hydrogenation alone does not normally add an -OH group.",
    "Carboxylic acid": "This reaction does not normally form a carboxyl group."
  },
  hint: "Adding hydrogen removes the double bond."
},

{
  subject: "Chemistry",
  question: "The addition of HBr to an unsymmetrical alkene commonly follows:",
  options: ["Markovnikov's rule", "Hund's rule", "Pauli principle", "Raoult's law"],
  answer: "Markovnikov's rule",
  explanation:
    "In normal electrophilic addition of HX to an unsymmetrical alkene, hydrogen generally adds to the carbon already bearing more hydrogens.",
  wrongExplanations: {
    "Hund's rule": "Hund's rule concerns electron configuration.",
    "Pauli principle": "The Pauli principle concerns occupancy of orbitals.",
    "Raoult's law": "Raoult's law concerns vapour pressure of solutions."
  },
  hint: "This rule is specific to addition reactions of alkenes."
},

{
  subject: "Chemistry",
  question: "Which compound is aromatic according to the classic 4n + 2 rule?",
  options: ["Benzene", "Cyclobutane", "Cyclohexane", "Propane"],
  answer: "Benzene",
  explanation:
    "Benzene contains six delocalized pi electrons, satisfying Hückel's 4n + 2 rule with n = 1.",
  wrongExplanations: {
    Cyclobutane: "Cyclobutane is not an aromatic conjugated ring.",
    Cyclohexane: "Cyclohexane contains only single bonds and is non-aromatic.",
    Propane: "Propane is an acyclic alkane."
  },
  hint: "Six pi electrons fit 4n + 2."
},

{
  subject: "Chemistry",
  question: "Proteins are polymers whose monomer units are:",
  options: ["Amino acids", "Glucose molecules", "Fatty acids only", "Nucleotides"],
  answer: "Amino acids",
  explanation:
    "Proteins are polypeptides formed by linking amino acids through peptide bonds.",
  wrongExplanations: {
    "Glucose molecules": "Glucose forms polysaccharides such as starch and glycogen.",
    "Fatty acids only": "Fatty acids are components of many lipids.",
    Nucleotides: "Nucleotides form nucleic acids."
  },
  hint: "Peptide bonds connect these units."
},

{
  subject: "Chemistry",
  question: "The bond linking amino acids in proteins is called a:",
  options: ["Peptide bond", "Glycosidic bond", "Phosphodiester bond", "Metallic bond"],
  answer: "Peptide bond",
  explanation:
    "A peptide bond forms between the amino group of one amino acid and the carboxyl group of another.",
  wrongExplanations: {
    "Glycosidic bond": "Glycosidic bonds commonly link monosaccharides.",
    "Phosphodiester bond": "Phosphodiester bonds link nucleotides in nucleic acids.",
    "Metallic bond": "Metallic bonding occurs in metals."
  },
  hint: "Proteins are polypeptides."
},

{
  subject: "Chemistry",
  question: "Glucose is classified as a:",
  options: ["Monosaccharide", "Disaccharide", "Protein", "Fatty acid"],
  answer: "Monosaccharide",
  explanation:
    "Glucose is a simple sugar consisting of a single carbohydrate unit.",
  wrongExplanations: {
    Disaccharide: "Disaccharides contain two monosaccharide units.",
    Protein: "Proteins are polymers of amino acids.",
    "Fatty acid": "Fatty acids are components of many lipids."
  },
  hint: "It is one of the simplest carbohydrates."
},

{
  subject: "Chemistry",
  question: "Sucrose is composed of:",
  options: ["Glucose and fructose", "Two glucose units only", "Glucose and galactose", "Two fructose units"],
  answer: "Glucose and fructose",
  explanation:
    "Sucrose is a disaccharide formed from glucose and fructose.",
  wrongExplanations: {
    "Two glucose units only": "Maltose contains two glucose units.",
    "Glucose and galactose": "Lactose contains glucose and galactose.",
    "Two fructose units": "Sucrose is not formed from two fructose molecules."
  },
  hint: "Table sugar combines two different monosaccharides."
},

{
  subject: "Chemistry",
  question: "DNA and RNA are polymers of:",
  options: ["Nucleotides", "Amino acids", "Fatty acids", "Monosaccharides only"],
  answer: "Nucleotides",
  explanation:
    "Nucleic acids are long chains of nucleotide units.",
  wrongExplanations: {
    "Amino acids": "Amino acids form proteins.",
    "Fatty acids": "Fatty acids are components of lipids.",
    "Monosaccharides only": "Although nucleotides contain sugars, nucleic acids are polymers of complete nucleotides."
  },
  hint: "Each unit contains sugar, phosphate and a nitrogenous base."
},

{
  subject: "Physics",
  question: "The photoelectric effect supports the:",
  options: ["Particle nature of light", "Wave nature only", "Mechanical nature of sound", "Existence of gravity only"],
  answer: "Particle nature of light",
  explanation:
    "The photoelectric effect is explained by light delivering energy in discrete photons.",
  wrongExplanations: {
    "Wave nature only": "Classical wave theory alone could not explain key photoelectric observations.",
    "Mechanical nature of sound": "The photoelectric effect concerns electromagnetic radiation.",
    "Existence of gravity only": "Gravity is unrelated."
  },
  hint: "Einstein explained light as photons."
},

{
  subject: "Physics",
  question: "The energy of a photon is given by:",
  options: ["E = hf", "E = mc only", "E = IR", "E = qV/t"],
  answer: "E = hf",
  explanation:
    "Photon energy equals Planck's constant multiplied by frequency.",
  wrongExplanations: {
    "E = mc only": "The famous mass-energy relation involves mc².",
    "E = IR": "IR gives voltage.",
    "E = qV/t": "This is not the photon-energy equation."
  },
  hint: "Planck constant × frequency."
},

{
  subject: "Physics",
  question: "Increasing the frequency of incident light above threshold frequency increases the maximum:",
  options: [
    "Kinetic energy of photoelectrons",
    "Number of protons",
    "Mass of electrons",
    "Charge of electrons"
  ],
  answer: "Kinetic energy of photoelectrons",
  explanation:
    "Einstein's photoelectric equation shows that higher photon frequency increases the maximum kinetic energy of emitted electrons.",
  wrongExplanations: {
    "Number of protons": "Light frequency does not alter atomic proton number in the photoelectric effect.",
    "Mass of electrons": "Electron rest mass remains unchanged.",
    "Charge of electrons": "Each electron retains the same elementary charge."
  },
  hint: "Kmax = hf - work function."
},

{
  subject: "Physics",
  question: "Increasing the intensity of light above threshold frequency mainly increases the:",
  options: [
    "Number of emitted photoelectrons",
    "Maximum kinetic energy necessarily",
    "Electron charge",
    "Work function of the metal"
  ],
  answer: "Number of emitted photoelectrons",
  explanation:
    "Greater intensity means more incident photons per unit time, so more photoelectrons can be emitted.",
  wrongExplanations: {
    "Maximum kinetic energy necessarily": "Maximum kinetic energy depends mainly on photon frequency.",
    "Electron charge": "Electron charge is fixed.",
    "Work function of the metal": "Work function is a property of the material."
  },
  hint: "Intensity controls photon number."
},

{
  subject: "Physics",
  question: "de Broglie wavelength is inversely proportional to:",
  options: ["Momentum", "Charge", "Temperature only", "Density"],
  answer: "Momentum",
  explanation:
    "The de Broglie relation is λ = h/p.",
  wrongExplanations: {
    Charge: "Charge does not appear directly in the de Broglie relation.",
    "Temperature only": "Temperature may influence particle motion but is not the defining denominator.",
    Density: "Density is unrelated to the basic de Broglie equation."
  },
  hint: "λ = h/p."
},

{
  subject: "Physics",
  question: "The nucleus of an atom contains:",
  options: ["Protons and neutrons", "Electrons only", "Photons only", "Neutrons and electrons only"],
  answer: "Protons and neutrons",
  explanation:
    "Atomic nuclei are composed mainly of positively charged protons and neutral neutrons.",
  wrongExplanations: {
    "Electrons only": "Electrons occupy regions outside the nucleus.",
    "Photons only": "Photons are not the ordinary constituent particles of nuclei.",
    "Neutrons and electrons only": "Protons are essential nuclear constituents."
  },
  hint: "Electrons are outside the nucleus."
},

{
  subject: "Physics",
  question: "Radioactive decay is generally:",
  options: [
    "A spontaneous nuclear process",
    "A chemical reaction controlled completely by temperature",
    "An electron-transfer reaction only",
    "A process requiring combustion"
  ],
  answer: "A spontaneous nuclear process",
  explanation:
    "Radioactive decay occurs spontaneously in unstable atomic nuclei.",
  wrongExplanations: {
    "A chemical reaction controlled completely by temperature": "Ordinary temperature changes have little effect on typical nuclear decay rates.",
    "An electron-transfer reaction only": "Radioactive decay involves the nucleus.",
    "A process requiring combustion": "Combustion is unrelated."
  },
  hint: "It occurs in unstable nuclei."
},

{
  subject: "Physics",
  question: "An alpha particle consists of:",
  options: [
    "Two protons and two neutrons",
    "One electron",
    "One proton only",
    "Two electrons and two protons"
  ],
  answer: "Two protons and two neutrons",
  explanation:
    "An alpha particle is essentially a helium-4 nucleus containing two protons and two neutrons.",
  wrongExplanations: {
    "One electron": "That resembles a beta-minus particle.",
    "One proton only": "An alpha particle contains four nucleons.",
    "Two electrons and two protons": "Alpha particles contain no electrons."
  },
  hint: "Think helium nucleus."
},

{
  subject: "Physics",
  question: "A beta-minus particle is essentially a:",
  options: ["High-speed electron", "Helium nucleus", "Photon", "Neutron pair"],
  answer: "High-speed electron",
  explanation:
    "Beta-minus radiation consists of energetic electrons emitted during certain nuclear transformations.",
  wrongExplanations: {
    "Helium nucleus": "A helium nucleus is an alpha particle.",
    Photon: "Gamma radiation consists of photons.",
    "Neutron pair": "Beta-minus particles are not neutron pairs."
  },
  hint: "β− carries negative charge."
},

{
  subject: "Physics",
  question: "Gamma radiation consists of:",
  options: [
    "High-energy electromagnetic photons",
    "Helium nuclei",
    "Electrons only",
    "Protons only"
  ],
  answer: "High-energy electromagnetic photons",
  explanation:
    "Gamma rays are high-energy electromagnetic radiation emitted by excited nuclei.",
  wrongExplanations: {
    "Helium nuclei": "Helium nuclei are alpha particles.",
    "Electrons only": "Electrons are associated with beta-minus radiation.",
    "Protons only": "Gamma radiation is not a stream of protons."
  },
  hint: "Gamma has no mass and no electric charge."
},

{
  subject: "Physics",
  question: "Nuclear fission is the process in which:",
  options: [
    "A heavy nucleus splits into smaller nuclei",
    "Light nuclei combine",
    "Electrons combine with photons",
    "Atoms lose only valence electrons"
  ],
  answer: "A heavy nucleus splits into smaller nuclei",
  explanation:
    "Nuclear fission involves splitting a heavy nucleus into smaller nuclei, usually releasing energy and neutrons.",
  wrongExplanations: {
    "Light nuclei combine": "That describes nuclear fusion.",
    "Electrons combine with photons": "This is not fission.",
    "Atoms lose only valence electrons": "That describes ionization, not a nuclear reaction."
  },
  hint: "Fission means splitting."
},

{
  subject: "Physics",
  question: "Nuclear fusion involves:",
  options: [
    "Combining light nuclei into a heavier nucleus",
    "Splitting a heavy nucleus",
    "Removing valence electrons only",
    "Cooling a gas to zero kelvin"
  ],
  answer: "Combining light nuclei into a heavier nucleus",
  explanation:
    "Fusion combines light nuclei and can release enormous amounts of energy.",
  wrongExplanations: {
    "Splitting a heavy nucleus": "That is nuclear fission.",
    "Removing valence electrons only": "That is ionization.",
    "Cooling a gas to zero kelvin": "That is unrelated to nuclear fusion."
  },
  hint: "Fusion means joining."
},

{
  subject: "Physics",
  question: "The Sun produces most of its energy through:",
  options: ["Nuclear fusion", "Nuclear fission", "Chemical combustion", "Electrical resistance"],
  answer: "Nuclear fusion",
  explanation:
    "The Sun converts hydrogen nuclei into helium through fusion reactions, releasing energy.",
  wrongExplanations: {
    "Nuclear fission": "The Sun is not powered mainly by splitting heavy nuclei.",
    "Chemical combustion": "Chemical burning cannot explain the Sun's enormous energy output and lifetime.",
    "Electrical resistance": "Resistance is not the Sun's main energy source."
  },
  hint: "Hydrogen nuclei combine to form helium."
},

{
  subject: "Physics",
  question: "A semiconductor has electrical conductivity:",
  options: [
    "Between that of a conductor and an insulator",
    "Always greater than copper",
    "Always exactly zero",
    "Independent of temperature"
  ],
  answer: "Between that of a conductor and an insulator",
  explanation:
    "Semiconductors have conductivity intermediate between good conductors and insulators.",
  wrongExplanations: {
    "Always greater than copper": "Copper is an excellent conductor.",
    "Always exactly zero": "Semiconductors can conduct electric current.",
    "Independent of temperature": "Semiconductor conductivity strongly depends on temperature and doping."
  },
  hint: "The name itself means semi-conducting."
},

{
  subject: "Physics",
  question: "Pure silicon is an example of a:",
  options: [
    "Intrinsic semiconductor",
    "p-type semiconductor only",
    "n-type semiconductor only",
    "Superconductor"
  ],
  answer: "Intrinsic semiconductor",
  explanation:
    "Pure semiconductor material without intentional impurity doping is called intrinsic.",
  wrongExplanations: {
    "p-type semiconductor only": "p-type material is produced by suitable doping.",
    "n-type semiconductor only": "n-type material is also produced by doping.",
    Superconductor: "Silicon at ordinary conditions is not classified as a conventional superconductor."
  },
  hint: "Intrinsic means pure."
},

{
  subject: "Physics",
  question: "Doping silicon with a pentavalent impurity generally produces:",
  options: ["n-type semiconductor", "p-type semiconductor", "Perfect insulator", "Vacuum"],
  answer: "n-type semiconductor",
  explanation:
    "Pentavalent dopants contribute extra electrons, making electrons the majority carriers.",
  wrongExplanations: {
    "p-type semiconductor": "p-type material is generally produced using trivalent impurities.",
    "Perfect insulator": "Doping increases useful conductivity.",
    Vacuum: "A doped solid does not become a vacuum."
  },
  hint: "Pentavalent dopants donate extra electrons."
},

{
  subject: "Physics",
  question: "Doping silicon with a trivalent impurity generally produces:",
  options: ["p-type semiconductor", "n-type semiconductor", "Perfect conductor", "Noble gas"],
  answer: "p-type semiconductor",
  explanation:
    "Trivalent impurities create electron deficiencies called holes, making holes the majority carriers.",
  wrongExplanations: {
    "n-type semiconductor": "n-type material generally uses pentavalent dopants.",
    "Perfect conductor": "Doped semiconductors are not perfect conductors.",
    "Noble gas": "Doping does not transform silicon into a noble gas."
  },
  hint: "Trivalent doping creates holes."
},

{
  subject: "Physics",
  question: "The majority charge carriers in an n-type semiconductor are:",
  options: ["Electrons", "Holes", "Protons", "Neutrons"],
  answer: "Electrons",
  explanation:
    "n-type semiconductors contain donor impurities that provide additional free electrons.",
  wrongExplanations: {
    Holes: "Holes are the majority carriers in p-type material.",
    Protons: "Protons remain bound within atomic nuclei.",
    Neutrons: "Neutrons are not electrical charge carriers."
  },
  hint: "n-type means negative carriers dominate."
},

{
  subject: "Physics",
  question: "The majority charge carriers in a p-type semiconductor are:",
  options: ["Holes", "Electrons", "Neutrons", "Photons"],
  answer: "Holes",
  explanation:
    "In p-type semiconductors, holes behave as the majority positive charge carriers.",
  wrongExplanations: {
    Electrons: "Electrons are minority carriers in p-type semiconductor material.",
    Neutrons: "Neutrons do not carry electric charge.",
    Photons: "Photons are particles of electromagnetic radiation."
  },
  hint: "p-type is associated with positive holes."
},

{
  subject: "Physics",
  question: "A p-n junction diode primarily allows current to flow:",
  options: [
    "More easily in one direction",
    "Equally in both directions",
    "Only when cooled to absolute zero",
    "Without any applied voltage under all conditions"
  ],
  answer: "More easily in one direction",
  explanation:
    "A diode conducts strongly in forward bias and blocks most current in reverse bias.",
  wrongExplanations: {
    "Equally in both directions": "Directional conduction is the key property of a diode.",
    "Only when cooled to absolute zero": "Ordinary semiconductor diodes work at normal temperatures.",
    "Without any applied voltage under all conditions": "Current behaviour depends on bias and circuit conditions."
  },
  hint: "A diode acts like an electrical one-way valve."
},

{
  subject: "Physics",
  question: "A diode used for converting alternating current into direct current performs:",
  options: ["Rectification", "Amplification only", "Modulation only", "Nuclear decay"],
  answer: "Rectification",
  explanation:
    "Rectification uses the one-way conduction of diodes to convert AC into a unidirectional output.",
  wrongExplanations: {
    "Amplification only": "Amplification is commonly associated with devices such as transistors.",
    "Modulation only": "Modulation changes a carrier signal for communication.",
    "Nuclear decay": "Nuclear processes are unrelated."
  },
  hint: "AC → DC."
},

{
  subject: "Physics",
  question: "A transistor can commonly be used as:",
  options: ["An amplifier or switch", "A mechanical lens", "A chemical catalyst only", "A nuclear fuel"],
  answer: "An amplifier or switch",
  explanation:
    "Transistors are widely used for electronic amplification and switching.",
  wrongExplanations: {
    "A mechanical lens": "Lenses are optical devices.",
    "A chemical catalyst only": "A transistor is an electronic semiconductor device.",
    "A nuclear fuel": "Transistors are not nuclear fuels."
  },
  hint: "Modern electronic circuits depend heavily on this function."
},

{
  subject: "Physics",
  question: "Which logic gate gives output 1 only when both inputs are 1?",
  options: ["AND gate", "OR gate", "NOT gate", "NOR gate"],
  answer: "AND gate",
  explanation:
    "An AND gate produces a high output only when all required inputs are high.",
  wrongExplanations: {
    "OR gate": "An OR gate gives output 1 when at least one input is 1.",
    "NOT gate": "A NOT gate has one input and reverses its logic state.",
    "NOR gate": "A NOR gate gives output 1 only when all inputs are 0."
  },
  hint: "Input A AND input B must both be true."
},

{
  subject: "Physics",
  question: "Which logic gate reverses the input signal?",
  options: ["NOT gate", "AND gate", "OR gate", "XOR gate"],
  answer: "NOT gate",
  explanation:
    "A NOT gate produces the opposite logical output of its input.",
  wrongExplanations: {
    "AND gate": "AND combines two or more logical inputs.",
    "OR gate": "OR outputs true when at least one input is true.",
    "XOR gate": "XOR compares inputs and is not a simple inverter."
  },
  hint: "It is also called an inverter."
},
{
  subject: "Biology",
  question: "Which structure is absent in a typical prokaryotic cell?",
  options: ["Membrane-bound nucleus", "Ribosomes", "Plasma membrane", "DNA"],
  answer: "Membrane-bound nucleus",
  explanation:
    "Prokaryotic cells contain DNA but lack a true membrane-bound nucleus.",
  wrongExplanations: {
    Ribosomes: "Prokaryotic cells contain 70S ribosomes.",
    "Plasma membrane": "Prokaryotic cells possess a plasma membrane.",
    DNA: "Prokaryotes contain genetic material in the nucleoid region."
  },
  hint: "Think about the major difference between prokaryotes and eukaryotes."
},
{
  subject: "Biology",
  question: "Who proposed the five-kingdom system of classification?",
  options: ["R.H. Whittaker", "Carolus Linnaeus", "Charles Darwin", "Gregor Mendel"],
  answer: "R.H. Whittaker",
  explanation:
    "R.H. Whittaker proposed the five-kingdom classification system in 1969.",
  wrongExplanations: {
    "Carolus Linnaeus": "Linnaeus developed the system of binomial nomenclature.",
    "Charles Darwin": "Darwin is associated with evolution by natural selection.",
    "Gregor Mendel": "Mendel is associated with the laws of inheritance."
  },
  hint: "Think of Monera, Protista, Fungi, Plantae and Animalia."
},

{
  subject: "Biology",
  question: "Which kingdom includes bacteria in the five-kingdom classification?",
  options: ["Monera", "Protista", "Fungi", "Plantae"],
  answer: "Monera",
  explanation:
    "Monera includes prokaryotic organisms such as bacteria.",
  wrongExplanations: {
    Protista: "Protista mainly contains unicellular eukaryotes.",
    Fungi: "Fungi are eukaryotic organisms with absorptive nutrition.",
    Plantae: "Plantae includes multicellular photosynthetic eukaryotes."
  },
  hint: "Bacteria are prokaryotes."
},

{
  subject: "Biology",
  question: "Which group contains organisms with chitin in their cell walls?",
  options: ["Fungi", "Plants", "Animals", "Protozoa only"],
  answer: "Fungi",
  explanation:
    "Fungal cell walls commonly contain chitin.",
  wrongExplanations: {
    Plants: "Plant cell walls mainly contain cellulose.",
    Animals: "Animal cells do not have cell walls.",
    "Protozoa only": "Protozoa generally do not have fungal-type chitinous cell walls."
  },
  hint: "Mushrooms and moulds belong here."
},

{
  subject: "Biology",
  question: "Which group of plants is commonly called the amphibians of the plant kingdom?",
  options: ["Bryophytes", "Gymnosperms", "Angiosperms", "Algae"],
  answer: "Bryophytes",
  explanation:
    "Bryophytes live on land but require water for sexual reproduction, so they are called amphibians of the plant kingdom.",
  wrongExplanations: {
    Gymnosperms: "Gymnosperms produce naked seeds and do not require external water for fertilization.",
    Angiosperms: "Angiosperms are flowering seed plants.",
    Algae: "Most algae are primarily aquatic."
  },
  hint: "They include mosses and liverworts."
},

{
  subject: "Biology",
  question: "Which plant group was the first to develop well-defined vascular tissues?",
  options: ["Pteridophytes", "Bryophytes", "Algae", "Fungi"],
  answer: "Pteridophytes",
  explanation:
    "Pteridophytes are vascular cryptogams possessing xylem and phloem.",
  wrongExplanations: {
    Bryophytes: "Bryophytes lack true vascular tissues.",
    Algae: "Algae do not possess true vascular tissues.",
    Fungi: "Fungi are not plants and lack xylem and phloem."
  },
  hint: "Think of ferns."
},

{
  subject: "Biology",
  question: "Seeds of gymnosperms are described as:",
  options: ["Naked", "Enclosed in fruits", "Always microscopic", "Produced inside flowers"],
  answer: "Naked",
  explanation:
    "Gymnosperm seeds are not enclosed inside an ovary or fruit.",
  wrongExplanations: {
    "Enclosed in fruits": "That is characteristic of angiosperms.",
    "Always microscopic": "Gymnosperm seeds can be large and visible.",
    "Produced inside flowers": "Gymnosperms generally produce cones rather than true flowers."
  },
  hint: "Gymnosperm literally means naked seed."
},

{
  subject: "Biology",
  question: "Which feature is characteristic of mammals?",
  options: ["Mammary glands", "Feathers", "Gills throughout life", "Exoskeleton of chitin"],
  answer: "Mammary glands",
  explanation:
    "Mammals possess mammary glands that produce milk for their young.",
  wrongExplanations: {
    Feathers: "Feathers are characteristic of birds.",
    "Gills throughout life": "Most adult mammals breathe through lungs.",
    "Exoskeleton of chitin": "A chitinous exoskeleton is characteristic of arthropods."
  },
  hint: "The name Mammalia comes from this structure."
},

{
  subject: "Biology",
  question: "Which animal phylum has jointed appendages?",
  options: ["Arthropoda", "Mollusca", "Annelida", "Cnidaria"],
  answer: "Arthropoda",
  explanation:
    "Arthropods are characterized by jointed appendages and a chitinous exoskeleton.",
  wrongExplanations: {
    Mollusca: "Molluscs typically have a soft body and muscular foot.",
    Annelida: "Annelids are segmented worms.",
    Cnidaria: "Cnidarians possess stinging cells called cnidocytes."
  },
  hint: "Arthro means joint."
},

{
  subject: "Biology",
  question: "Which phylum includes earthworms?",
  options: ["Annelida", "Arthropoda", "Mollusca", "Platyhelminthes"],
  answer: "Annelida",
  explanation:
    "Earthworms are segmented worms belonging to phylum Annelida.",
  wrongExplanations: {
    Arthropoda: "Arthropods include insects, spiders and crustaceans.",
    Mollusca: "Molluscs include snails, clams and octopuses.",
    Platyhelminthes: "Platyhelminthes are flatworms."
  },
  hint: "Think of segmented worms."
},

{
  subject: "Biology",
  question: "Which phylum includes starfish?",
  options: ["Echinodermata", "Mollusca", "Arthropoda", "Porifera"],
  answer: "Echinodermata",
  explanation:
    "Starfish are marine animals belonging to phylum Echinodermata.",
  wrongExplanations: {
    Mollusca: "Mollusca includes animals such as snails and octopuses.",
    Arthropoda: "Arthropoda includes insects and crustaceans.",
    Porifera: "Porifera includes sponges."
  },
  hint: "The name means spiny skin."
},

{
  subject: "Biology",
  question: "Sponges belong to which phylum?",
  options: ["Porifera", "Cnidaria", "Annelida", "Chordata"],
  answer: "Porifera",
  explanation:
    "Sponges belong to Porifera and possess numerous pores in their bodies.",
  wrongExplanations: {
    Cnidaria: "Cnidarians include jellyfish and Hydra.",
    Annelida: "Annelids are segmented worms.",
    Chordata: "Chordates possess a notochord at some stage."
  },
  hint: "Porifera means pore-bearing."
},

{
  subject: "Biology",
  question: "Which structure is present in all chordates at least during some stage of development?",
  options: ["Notochord", "Vertebral column", "Four limbs", "Hair"],
  answer: "Notochord",
  explanation:
    "Presence of a notochord at least during embryonic development is a defining characteristic of chordates.",
  wrongExplanations: {
    "Vertebral column": "Not all chordates are vertebrates.",
    "Four limbs": "Many chordates lack four limbs.",
    Hair: "Hair is characteristic mainly of mammals."
  },
  hint: "Chordata is named after this supporting structure."
},

{
  subject: "Biology",
  question: "Which carbohydrate is stored mainly in animal liver and muscles?",
  options: ["Glycogen", "Starch", "Cellulose", "Sucrose"],
  answer: "Glycogen",
  explanation:
    "Animals store glucose mainly in the form of glycogen, especially in liver and skeletal muscles.",
  wrongExplanations: {
    Starch: "Starch is the major storage carbohydrate in plants.",
    Cellulose: "Cellulose is mainly structural in plant cell walls.",
    Sucrose: "Sucrose is a transport sugar in many plants rather than the main animal storage carbohydrate."
  },
  hint: "Sometimes called animal starch."
},

{
  subject: "Biology",
  question: "Which polysaccharide is the major structural component of plant cell walls?",
  options: ["Cellulose", "Glycogen", "Starch", "Lactose"],
  answer: "Cellulose",
  explanation:
    "Cellulose forms strong fibres that provide structural support to plant cell walls.",
  wrongExplanations: {
    Glycogen: "Glycogen is an animal storage polysaccharide.",
    Starch: "Starch stores energy in plants.",
    Lactose: "Lactose is a disaccharide found in milk."
  },
  hint: "Humans cannot digest this fibre efficiently."
},

{
  subject: "Biology",
  question: "Which nitrogenous bases are purines?",
  options: ["Adenine and guanine", "Cytosine and thymine", "Thymine and uracil", "Cytosine and uracil"],
  answer: "Adenine and guanine",
  explanation:
    "Adenine and guanine are double-ring purine bases.",
  wrongExplanations: {
    "Cytosine and thymine": "Both are pyrimidines.",
    "Thymine and uracil": "Both are pyrimidines.",
    "Cytosine and uracil": "Both are pyrimidines."
  },
  hint: "Remember AG are purines."
},

{
  subject: "Biology",
  question: "Which nitrogenous bases are pyrimidines in DNA?",
  options: ["Cytosine and thymine", "Adenine and guanine", "Adenine and thymine", "Guanine and cytosine"],
  answer: "Cytosine and thymine",
  explanation:
    "Cytosine and thymine are the two pyrimidine bases present in DNA.",
  wrongExplanations: {
    "Adenine and guanine": "These are purines.",
    "Adenine and thymine": "Adenine is a purine.",
    "Guanine and cytosine": "Guanine is a purine."
  },
  hint: "DNA pyrimidines are C and T."
},

{
  subject: "Biology",
  question: "Which bond joins complementary nitrogenous bases between two DNA strands?",
  options: ["Hydrogen bonds", "Peptide bonds", "Glycosidic bonds only", "Disulfide bonds"],
  answer: "Hydrogen bonds",
  explanation:
    "Complementary bases on opposite DNA strands are held together by hydrogen bonds.",
  wrongExplanations: {
    "Peptide bonds": "Peptide bonds connect amino acids.",
    "Glycosidic bonds only": "Glycosidic bonds connect bases to sugars within nucleotides.",
    "Disulfide bonds": "Disulfide bonds commonly stabilize protein structures."
  },
  hint: "A-T has two and G-C has three."
},

{
  subject: "Biology",
  question: "According to Chargaff's rule in double-stranded DNA:",
  options: ["A equals T and G equals C", "A equals G", "T equals C only", "All four bases are always equal"],
  answer: "A equals T and G equals C",
  explanation:
    "Complementary base pairing produces approximately equal amounts of adenine and thymine, and guanine and cytosine.",
  wrongExplanations: {
    "A equals G": "There is no general requirement for adenine to equal guanine.",
    "T equals C only": "Thymine and cytosine are not required to be equal.",
    "All four bases are always equal": "Only complementary pairs must be equal."
  },
  hint: "Think complementary base pairing."
},

{
  subject: "Biology",
  question: "Which contraceptive device is placed inside the uterus?",
  options: ["IUD", "Condom", "Oral pill", "Diaphragm only"],
  answer: "IUD",
  explanation:
    "An intrauterine device is inserted into the uterus to prevent pregnancy.",
  wrongExplanations: {
    Condom: "A condom is a barrier method used externally or internally during intercourse.",
    "Oral pill": "Oral contraceptives are taken by mouth.",
    "Diaphragm only": "A contraceptive diaphragm is placed in the vagina over the cervix."
  },
  hint: "IUD stands for intrauterine device."
},

{
  subject: "Biology",
  question: "Which contraceptive method also helps reduce transmission of many sexually transmitted infections?",
  options: ["Condom", "IUD only", "Oral contraceptive pill", "Tubectomy only"],
  answer: "Condom",
  explanation:
    "Condoms act as physical barriers and can reduce transmission of many sexually transmitted infections.",
  wrongExplanations: {
    "IUD only": "IUDs mainly prevent pregnancy and do not provide reliable STI protection.",
    "Oral contraceptive pill": "Oral contraceptives do not provide STI protection.",
    "Tubectomy only": "Tubectomy prevents pregnancy but does not prevent STI transmission."
  },
  hint: "Think barrier protection."
},

{
  subject: "Biology",
  question: "Vasectomy is a surgical contraceptive procedure performed in:",
  options: ["Males", "Females", "Both sexes identically", "Plants"],
  answer: "Males",
  explanation:
    "Vasectomy involves cutting or blocking the vas deferens in males.",
  wrongExplanations: {
    Females: "The corresponding female sterilization procedure is tubectomy.",
    "Both sexes identically": "The reproductive ducts involved differ between males and females.",
    Plants: "Vasectomy is a human surgical contraceptive method."
  },
  hint: "Think vas deferens."
},

{
  subject: "Biology",
  question: "Tubectomy involves blocking the:",
  options: ["Fallopian tubes", "Vas deferens", "Urethra", "Cervix permanently"],
  answer: "Fallopian tubes",
  explanation:
    "Tubectomy prevents the egg and sperm from meeting by cutting or blocking the fallopian tubes.",
  wrongExplanations: {
    "Vas deferens": "Blocking the vas deferens is vasectomy.",
    Urethra: "The urethra is not blocked during tubectomy.",
    "Cervix permanently": "Tubectomy specifically targets the fallopian tubes."
  },
  hint: "Female sterilization involves the oviducts."
},

{
  subject: "Biology",
  question: "Which trophic level is occupied by herbivores?",
  options: ["Primary consumers", "Producers", "Secondary consumers", "Decomposers only"],
  answer: "Primary consumers",
  explanation:
    "Herbivores feed directly on producers and therefore act as primary consumers.",
  wrongExplanations: {
    Producers: "Producers synthesize their own organic food.",
    "Secondary consumers": "Secondary consumers generally feed on primary consumers.",
    "Decomposers only": "Decomposers obtain nutrients from dead organic matter."
  },
  hint: "They are the first consumer level."
},

{
  subject: "Biology",
  question: "A species restricted naturally to a particular geographical area is called:",
  options: ["Endemic", "Cosmopolitan", "Exotic only", "Migratory only"],
  answer: "Endemic",
  explanation:
    "An endemic species naturally occurs only in a particular geographic region.",
  wrongExplanations: {
    Cosmopolitan: "Cosmopolitan species have very wide geographical distributions.",
    "Exotic only": "An exotic species has been introduced outside its native range.",
    "Migratory only": "Migratory species move seasonally between regions."
  },
  hint: "Think species unique to one region."
},

{
  subject: "Chemistry",
  question: "Which element is the most abundant in Earth's crust by mass?",
  options: ["Oxygen", "Silicon", "Aluminium", "Iron"],
  answer: "Oxygen",
  explanation:
    "Oxygen is the most abundant element in Earth's crust by mass.",
  wrongExplanations: {
    Silicon: "Silicon is the second most abundant element in the crust.",
    Aluminium: "Aluminium is the most abundant metal in Earth's crust.",
    Iron: "Iron is abundant but not the most abundant element in the crust."
  },
  hint: "Most rocks contain oxides and silicates."
},

{
  subject: "Chemistry",
  question: "Which is the most abundant metal in Earth's crust?",
  options: ["Aluminium", "Iron", "Calcium", "Sodium"],
  answer: "Aluminium",
  explanation:
    "Aluminium is the most abundant metallic element in Earth's crust.",
  wrongExplanations: {
    Iron: "Iron is abundant but less common in the crust than aluminium.",
    Calcium: "Calcium is abundant but not the most abundant metal.",
    Sodium: "Sodium is also common but less abundant than aluminium."
  },
  hint: "Its principal ore is bauxite."
},

{
  subject: "Chemistry",
  question: "Which allotrope of carbon conducts electricity well?",
  options: ["Graphite", "Diamond", "Fullerene only", "Charcoal only"],
  answer: "Graphite",
  explanation:
    "Graphite has delocalized electrons that can move along its layers and conduct electricity.",
  wrongExplanations: {
    Diamond: "Diamond has localized covalent bonds and is a poor electrical conductor.",
    "Fullerene only": "The classic highly conducting allotrope asked at this level is graphite.",
    "Charcoal only": "Charcoal is not the standard crystalline allotrope used to explain electrical conduction."
  },
  hint: "It is used in electrodes."
},

{
  subject: "Chemistry",
  question: "Diamond is extremely hard mainly because:",
  options: [
    "Each carbon forms a three-dimensional covalent network",
    "It contains metallic bonds",
    "It is composed of ionic crystals",
    "Its molecules are held only by weak forces"
  ],
  answer: "Each carbon forms a three-dimensional covalent network",
  explanation:
    "In diamond, each carbon is strongly bonded to four others in a rigid three-dimensional network.",
  wrongExplanations: {
    "It contains metallic bonds": "Diamond is a covalent network solid.",
    "It is composed of ionic crystals": "Diamond contains neutral carbon atoms connected covalently.",
    "Its molecules are held only by weak forces": "Diamond is not made of separate molecules held by weak intermolecular forces."
  },
  hint: "Think strong covalent bonds throughout the crystal."
},

{
  subject: "Chemistry",
  question: "Which compound is commonly called laughing gas?",
  options: ["Nitrous oxide", "Nitric oxide", "Nitrogen dioxide", "Ammonia"],
  answer: "Nitrous oxide",
  explanation:
    "Nitrous oxide, N2O, is commonly known as laughing gas.",
  wrongExplanations: {
    "Nitric oxide": "Nitric oxide has the formula NO.",
    "Nitrogen dioxide": "Nitrogen dioxide is NO2 and is a brown toxic gas.",
    Ammonia: "Ammonia is NH3."
  },
  hint: "Its formula is N2O."
},

{
  subject: "Chemistry",
  question: "Which gas has a characteristic pungent smell and turns moist red litmus blue?",
  options: ["Ammonia", "Carbon dioxide", "Chlorine", "Hydrogen"],
  answer: "Ammonia",
  explanation:
    "Ammonia is a basic gas and turns moist red litmus paper blue.",
  wrongExplanations: {
    "Carbon dioxide": "Carbon dioxide is acidic in water.",
    Chlorine: "Chlorine bleaches moist litmus after initially showing acidic behaviour.",
    Hydrogen: "Hydrogen is not a basic gas with this characteristic test."
  },
  hint: "NH3 is basic."
},

{
  subject: "Chemistry",
  question: "Which acid is manufactured industrially by the Contact process?",
  options: ["Sulphuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
  answer: "Sulphuric acid",
  explanation:
    "The Contact process is the major industrial method for producing sulphuric acid.",
  wrongExplanations: {
    "Nitric acid": "Nitric acid is commonly produced by the Ostwald process.",
    "Hydrochloric acid": "Hydrochloric acid is not made by the Contact process.",
    "Acetic acid": "Acetic acid is produced through other chemical and biological routes."
  },
  hint: "You already know V2O5 is its catalyst."
},

{
  subject: "Chemistry",
  question: "The Ostwald process is used for industrial manufacture of:",
  options: ["Nitric acid", "Sulphuric acid", "Ammonia", "Sodium carbonate"],
  answer: "Nitric acid",
  explanation:
    "The Ostwald process oxidizes ammonia to produce nitric acid.",
  wrongExplanations: {
    "Sulphuric acid": "Sulphuric acid is produced by the Contact process.",
    Ammonia: "Ammonia is manufactured by the Haber process.",
    "Sodium carbonate": "Sodium carbonate can be manufactured by the Solvay process."
  },
  hint: "Haber gives NH3; Ostwald uses NH3 to make this acid."
},

{
  subject: "Chemistry",
  question: "The Solvay process is mainly used to manufacture:",
  options: ["Sodium carbonate", "Ammonia", "Sulphuric acid", "Nitric acid"],
  answer: "Sodium carbonate",
  explanation:
    "The Solvay process is an industrial method for manufacturing sodium carbonate.",
  wrongExplanations: {
    Ammonia: "Ammonia is manufactured by the Haber process.",
    "Sulphuric acid": "Sulphuric acid is produced by the Contact process.",
    "Nitric acid": "Nitric acid is produced by the Ostwald process."
  },
  hint: "Think washing soda industry."
},

{
  subject: "Chemistry",
  question: "Which reagent converts an alcohol into an alkene by dehydration?",
  options: ["Concentrated sulphuric acid with heat", "Dilute NaCl", "Water only", "Ammonia only"],
  answer: "Concentrated sulphuric acid with heat",
  explanation:
    "Concentrated sulphuric acid can remove water from an alcohol and produce an alkene.",
  wrongExplanations: {
    "Dilute NaCl": "Sodium chloride does not normally dehydrate alcohols.",
    "Water only": "Adding water does not cause dehydration.",
    "Ammonia only": "Ammonia is not the standard dehydrating reagent."
  },
  hint: "Dehydration means removal of H2O."
},

{
  subject: "Chemistry",
  question: "Oxidation of a primary alcohol first generally produces a:",
  options: ["Aldehyde", "Ketone", "Alkane", "Amide"],
  answer: "Aldehyde",
  explanation:
    "Controlled oxidation of a primary alcohol produces an aldehyde before further oxidation to a carboxylic acid.",
  wrongExplanations: {
    Ketone: "Secondary alcohols generally oxidize to ketones.",
    Alkane: "Oxidation does not remove oxygen to form an alkane.",
    Amide: "Amides are not normal first oxidation products of alcohols."
  },
  hint: "Primary alcohol → aldehyde → acid."
},

{
  subject: "Chemistry",
  question: "Oxidation of a secondary alcohol generally produces a:",
  options: ["Ketone", "Aldehyde", "Carboxylic acid directly", "Alkene only"],
  answer: "Ketone",
  explanation:
    "Secondary alcohols are oxidized to ketones.",
  wrongExplanations: {
    Aldehyde: "Primary alcohols form aldehydes.",
    "Carboxylic acid directly": "Secondary alcohol oxidation normally produces ketones.",
    "Alkene only": "Alkenes are obtained by dehydration rather than ordinary oxidation."
  },
  hint: "Secondary alcohol → ketone."
},

{
  subject: "Chemistry",
  question: "Which reaction forms an ester from a carboxylic acid and an alcohol?",
  options: ["Esterification", "Hydrogenation", "Polymerization", "Neutralization only"],
  answer: "Esterification",
  explanation:
    "A carboxylic acid reacts with an alcohol to form an ester and water.",
  wrongExplanations: {
    Hydrogenation: "Hydrogenation adds hydrogen to unsaturated compounds.",
    Polymerization: "Polymerization forms large molecules from monomers.",
    "Neutralization only": "Acid-base neutralization usually produces salt and water."
  },
  hint: "Acid + alcohol → ester + water."
},

{
  subject: "Chemistry",
  question: "Esters are often recognized by their:",
  options: ["Pleasant fruity smell", "Strong metallic character", "Blue flame only", "Magnetic properties"],
  answer: "Pleasant fruity smell",
  explanation:
    "Many low-molecular-mass esters have characteristic pleasant fruity odours.",
  wrongExplanations: {
    "Strong metallic character": "Esters are molecular organic compounds.",
    "Blue flame only": "Flame colour is not their defining property.",
    "Magnetic properties": "Esters are not identified primarily by magnetism."
  },
  hint: "Many artificial fruit flavours contain these compounds."
},

{
  subject: "Chemistry",
  question: "Hydrolysis of an ester in the presence of a strong base is called:",
  options: ["Saponification", "Hydrogenation", "Nitration", "Halogenation"],
  answer: "Saponification",
  explanation:
    "Base hydrolysis of an ester produces a carboxylate salt and an alcohol and is called saponification.",
  wrongExplanations: {
    Hydrogenation: "Hydrogenation adds hydrogen.",
    Nitration: "Nitration introduces a nitro group.",
    Halogenation: "Halogenation introduces halogen atoms."
  },
  hint: "This reaction is important in soap manufacture."
},

{
  subject: "Chemistry",
  question: "Soap molecules contain:",
  options: [
    "A hydrophilic head and hydrophobic tail",
    "Only hydrophilic groups",
    "Only hydrophobic groups",
    "No carbon atoms"
  ],
  answer: "A hydrophilic head and hydrophobic tail",
  explanation:
    "Soap molecules have an ionic or polar water-attracting head and a long non-polar hydrocarbon tail.",
  wrongExplanations: {
    "Only hydrophilic groups": "The hydrophobic tail is essential for trapping grease.",
    "Only hydrophobic groups": "A water-attracting head is also required.",
    "No carbon atoms": "Soap molecules contain long hydrocarbon chains."
  },
  hint: "One end likes water, the other likes oil."
},

{
  subject: "Chemistry",
  question: "Micelles formed by soap in water trap grease mainly in their:",
  options: ["Hydrophobic interior", "Hydrophilic exterior only", "Metallic core", "Nuclear region"],
  answer: "Hydrophobic interior",
  explanation:
    "The non-polar hydrocarbon tails cluster inward and trap oils and grease inside micelles.",
  wrongExplanations: {
    "Hydrophilic exterior only": "The hydrophilic heads face the surrounding water.",
    "Metallic core": "Soap micelles do not contain a metallic core.",
    "Nuclear region": "Micelles are molecular aggregates, not atomic nuclei."
  },
  hint: "Oil avoids water and stays with the hydrocarbon tails."
},

{
  subject: "Physics",
  question: "The gravitational potential energy of a mass m at distance r from a mass M is:",
  options: ["-GMm/r", "GMm/r²", "GMm/r", "-GMm/r²"],
  answer: "-GMm/r",
  explanation:
    "Taking zero potential energy at infinity, gravitational potential energy is U = -GMm/r.",
  wrongExplanations: {
    "GMm/r²": "This resembles the magnitude of gravitational force.",
    "GMm/r": "The sign must be negative with zero potential at infinity.",
    "-GMm/r²": "The dependence is 1/r, not 1/r²."
  },
  hint: "Gravitationally bound systems have negative potential energy."
},

{
  subject: "Physics",
  question: "The acceleration due to gravity at the centre of Earth is approximately:",
  options: ["Zero", "9.8 m/s²", "Infinite", "19.6 m/s²"],
  answer: "Zero",
  explanation:
    "At Earth's centre, gravitational pulls from all directions cancel, giving zero net gravitational field.",
  wrongExplanations: {
    "9.8 m/s²": "This is approximately the surface value.",
    Infinite: "Gravity does not become infinite at Earth's centre.",
    "19.6 m/s²": "This is twice the surface value and is incorrect."
  },
  hint: "Symmetry causes all gravitational pulls to cancel."
},

{
  subject: "Physics",
  question: "The value of acceleration due to gravity generally decreases when altitude above Earth's surface:",
  options: ["Increases", "Decreases to zero immediately", "Remains exactly constant", "Changes colour"],
  answer: "Increases",
  explanation:
    "As distance from Earth's centre increases, gravitational acceleration decreases.",
  wrongExplanations: {
    "Decreases to zero immediately": "Gravity decreases gradually, not instantly.",
    "Remains exactly constant": "Gravity varies with distance from Earth's centre.",
    "Changes colour": "Colour has no effect on gravity."
  },
  hint: "Gravity follows an inverse-square dependence on distance."
},

{
  subject: "Physics",
  question: "A geostationary satellite has an orbital period of approximately:",
  options: ["24 hours", "12 hours", "1 hour", "365 days"],
  answer: "24 hours",
  explanation:
    "A geostationary satellite must match Earth's rotational period, approximately 24 hours.",
  wrongExplanations: {
    "12 hours": "This would not keep the satellite fixed over one longitude.",
    "1 hour": "This period is far too short.",
    "365 days": "This is approximately Earth's orbital period around the Sun."
  },
  hint: "It must rotate with Earth."
},

{
  subject: "Physics",
  question: "A geostationary satellite must orbit in the plane of Earth's:",
  options: ["Equator", "Prime meridian only", "North pole", "Any inclined orbit"],
  answer: "Equator",
  explanation:
    "A geostationary orbit must be circular and lie in the equatorial plane.",
  wrongExplanations: {
    "Prime meridian only": "The prime meridian is a longitude, not an orbital plane requirement.",
    "North pole": "A polar orbit cannot remain fixed over one point.",
    "Any inclined orbit": "Inclined orbits appear to move north and south in the sky."
  },
  hint: "It must remain above the same point on Earth."
},

{
  subject: "Physics",
  question: "The electric potential due to a point charge q at distance r is proportional to:",
  options: ["q/r", "q/r²", "qr", "r/q"],
  answer: "q/r",
  explanation:
    "Electric potential due to a point charge is V = kq/r.",
  wrongExplanations: {
    "q/r²": "The electric field varies as q/r².",
    qr: "Potential decreases with distance rather than increasing linearly.",
    "r/q": "This is not the electrostatic potential relation."
  },
  hint: "Potential varies as 1/r; field varies as 1/r²."
},

{
  subject: "Physics",
  question: "The SI unit of electric potential is:",
  options: ["Volt", "Ampere", "Ohm", "Farad"],
  answer: "Volt",
  explanation:
    "Electric potential and potential difference are measured in volts.",
  wrongExplanations: {
    Ampere: "Ampere measures current.",
    Ohm: "Ohm measures resistance.",
    Farad: "Farad measures capacitance."
  },
  hint: "Potential difference is another name for voltage."
},

{
  subject: "Physics",
  question: "Equipotential surfaces are always:",
  options: [
    "Perpendicular to electric field lines",
    "Parallel to electric field lines everywhere",
    "Unrelated to electric fields",
    "Circular only"
  ],
  answer: "Perpendicular to electric field lines",
  explanation:
    "The electric field points in the direction of greatest decrease of potential and is perpendicular to equipotential surfaces.",
  wrongExplanations: {
    "Parallel to electric field lines everywhere": "Moving along an equipotential surface requires no work, so the field cannot lie along it.",
    "Unrelated to electric fields": "Potential and electric field are closely related.",
    "Circular only": "Equipotential shapes depend on the charge distribution."
  },
  hint: "No work is done moving along an equipotential surface."
},

{
  subject: "Physics",
  question: "Work done in moving a charge along an equipotential surface is:",
  options: ["Zero", "Maximum", "Always negative", "Infinite"],
  answer: "Zero",
  explanation:
    "There is no potential difference between two points on the same equipotential surface, so electrical work is zero.",
  wrongExplanations: {
    Maximum: "No potential difference means no work by the electric field.",
    "Always negative": "The work is exactly zero.",
    Infinite: "There is no infinite energy requirement."
  },
  hint: "W = qΔV."
},

{
  subject: "Physics",
  question: "Capacitors connected in parallel have the same:",
  options: ["Potential difference", "Charge necessarily", "Capacitance necessarily", "Plate area"],
  answer: "Potential difference",
  explanation:
    "Each capacitor connected across the same two nodes has the same potential difference.",
  wrongExplanations: {
    "Charge necessarily": "Different capacitances may store different charges.",
    "Capacitance necessarily": "The individual capacitances can be different.",
    "Plate area": "Physical dimensions need not be identical."
  },
  hint: "Parallel components share the same two connection points."
},

{
  subject: "Physics",
  question: "For capacitors connected in parallel, equivalent capacitance is:",
  options: ["The sum of individual capacitances", "Less than the smallest", "Always zero", "The reciprocal sum only"],
  answer: "The sum of individual capacitances",
  explanation:
    "Parallel capacitances add directly: Ceq = C1 + C2 + ...",
  wrongExplanations: {
    "Less than the smallest": "That behaviour applies to capacitors connected in series.",
    "Always zero": "Parallel capacitance increases total capacitance.",
    "The reciprocal sum only": "Reciprocal addition applies to series capacitors."
  },
  hint: "Capacitors behave opposite to resistors for series and parallel addition."
},

{
  subject: "Physics",
  question: "The magnetic force on a moving charged particle is maximum when its velocity is:",
  options: [
    "Perpendicular to the magnetic field",
    "Parallel to the magnetic field",
    "Zero",
    "Opposite but parallel to the field"
  ],
  answer: "Perpendicular to the magnetic field",
  explanation:
    "Magnetic force is F = qvB sin θ and is maximum when θ = 90°.",
  wrongExplanations: {
    "Parallel to the magnetic field": "For θ = 0°, magnetic force is zero.",
    Zero: "A stationary charge experiences no magnetic force.",
    "Opposite but parallel to the field": "At 180°, sin θ is zero."
  },
  hint: "sin 90° = 1."
},

{
  subject: "Physics",
  question: "A charged particle moving parallel to a uniform magnetic field experiences:",
  options: ["Zero magnetic force", "Maximum magnetic force", "Infinite force", "A force opposite to gravity only"],
  answer: "Zero magnetic force",
  explanation:
    "When velocity is parallel to the magnetic field, θ = 0° and qvB sin θ = 0.",
  wrongExplanations: {
    "Maximum magnetic force": "Maximum force occurs for perpendicular motion.",
    "Infinite force": "Magnetic force remains finite.",
    "A force opposite to gravity only": "Magnetic force is not defined relative to gravity."
  },
  hint: "Use F = qvB sin θ."
},

{
  subject: "Physics",
  question: "The direction of force on a current-carrying conductor in a magnetic field can be found using:",
  options: ["Fleming's left-hand rule", "Fleming's right-hand rule", "Snell's law", "Lenz's law only"],
  answer: "Fleming's left-hand rule",
  explanation:
    "Fleming's left-hand rule gives the direction of force or motion in a motor.",
  wrongExplanations: {
    "Fleming's right-hand rule": "The right-hand rule is commonly used for induced current in generators.",
    "Snell's law": "Snell's law describes refraction.",
    "Lenz's law only": "Lenz's law determines the direction of induced current relative to changing flux."
  },
  hint: "Motor = left hand."
},

{
  subject: "Physics",
  question: "Fleming's right-hand rule is mainly associated with:",
  options: ["Electric generators", "Electric motors only", "Refraction", "Capacitors"],
  answer: "Electric generators",
  explanation:
    "Fleming's right-hand rule gives the direction of induced current in generator action.",
  wrongExplanations: {
    "Electric motors only": "Motor force direction is commonly found using Fleming's left-hand rule.",
    Refraction: "Refraction follows Snell's law.",
    Capacitors: "Capacitor behaviour is not determined using Fleming's rule."
  },
  hint: "Generator = right hand."
},

{
  subject: "Physics",
  question: "An electric motor converts:",
  options: [
    "Electrical energy into mechanical energy",
    "Mechanical energy into electrical energy",
    "Heat into nuclear energy",
    "Light into chemical energy only"
  ],
  answer: "Electrical energy into mechanical energy",
  explanation:
    "An electric motor uses magnetic forces on current-carrying conductors to produce mechanical motion.",
  wrongExplanations: {
    "Mechanical energy into electrical energy": "That is the main function of an electric generator.",
    "Heat into nuclear energy": "A motor does not perform nuclear conversion.",
    "Light into chemical energy only": "That is unrelated to motor operation."
  },
  hint: "Electricity makes something rotate."
},

{
  subject: "Physics",
  question: "An electric generator converts:",
  options: [
    "Mechanical energy into electrical energy",
    "Electrical energy into mechanical energy",
    "Nuclear energy into mass only",
    "Electrical energy into chemical energy only"
  ],
  answer: "Mechanical energy into electrical energy",
  explanation:
    "A generator uses electromagnetic induction to convert mechanical motion into electrical energy.",
  wrongExplanations: {
    "Electrical energy into mechanical energy": "That describes an electric motor.",
    "Nuclear energy into mass only": "Generators do not operate by nuclear conversion.",
    "Electrical energy into chemical energy only": "That is not the primary generator function."
  },
  hint: "A turbine turns and electricity is produced."
},

{
  subject: "Physics",
  question: "The wavelength of visible light is approximately in the range:",
  options: ["400 to 700 nm", "1 to 10 m", "1 to 10 km", "0.001 to 0.01 nm only"],
  answer: "400 to 700 nm",
  explanation:
    "The human eye detects electromagnetic radiation roughly from about 400 nm to 700 nm.",
  wrongExplanations: {
    "1 to 10 m": "These wavelengths are much longer than visible light.",
    "1 to 10 km": "Kilometre wavelengths lie in the radio region.",
    "0.001 to 0.01 nm only": "These are far shorter wavelengths associated with very energetic radiation."
  },
  hint: "Visible light wavelengths are measured in hundreds of nanometres."
},

{
  subject: "Physics",
  question: "Which colour of visible light has the shortest wavelength?",
  options: ["Violet", "Red", "Yellow", "Orange"],
  answer: "Violet",
  explanation:
    "Violet light has the shortest wavelength and highest frequency within the visible spectrum.",
  wrongExplanations: {
    Red: "Red has the longest wavelength in the visible spectrum.",
    Yellow: "Yellow lies in the middle region.",
    Orange: "Orange has a longer wavelength than violet."
  },
  hint: "Violet is closer to ultraviolet."
},

{
  subject: "Physics",
  question: "Which colour of visible light has the longest wavelength?",
  options: ["Red", "Violet", "Blue", "Green"],
  answer: "Red",
  explanation:
    "Red light has the longest wavelength in the visible spectrum.",
  wrongExplanations: {
    Violet: "Violet has the shortest visible wavelength.",
    Blue: "Blue has a shorter wavelength than red.",
    Green: "Green lies between blue and red."
  },
  hint: "Red is next to infrared."
},
{
  subject: "Biology",
  question: "The opening through which the pollen tube usually enters an ovule is called the:",
  options: ["Micropyle", "Hilum", "Chalaza", "Funicle"],
  answer: "Micropyle",
  explanation:
    "The micropyle is a small opening in the integuments of the ovule through which the pollen tube commonly enters.",
  wrongExplanations: {
    Hilum: "The hilum is the region where the seed or ovule is attached.",
    Chalaza: "The chalaza is the region opposite the micropyle.",
    Funicle: "The funicle attaches the ovule to the placenta."
  },
  hint: "Think of the tiny opening in the ovule."
},

{
  subject: "Biology",
  question: "The mature embryo sac of a typical angiosperm usually contains:",
  options: ["7 cells and 8 nuclei", "8 cells and 8 nuclei", "4 cells and 4 nuclei", "2 cells and 8 nuclei"],
  answer: "7 cells and 8 nuclei",
  explanation:
    "A typical mature angiosperm embryo sac is seven-celled but contains eight nuclei.",
  wrongExplanations: {
    "8 cells and 8 nuclei": "The two polar nuclei are present within one central cell.",
    "4 cells and 4 nuclei": "The mature embryo sac normally contains more cells and nuclei.",
    "2 cells and 8 nuclei": "Eight nuclei are distributed among seven cells."
  },
  hint: "Remember the classic NEET combination: 7 cells, 8 nuclei."
},

{
  subject: "Biology",
  question: "The nutritive tissue that supports developing pollen grains inside the anther is the:",
  options: ["Tapetum", "Epidermis", "Endothecium only", "Middle lamella"],
  answer: "Tapetum",
  explanation:
    "The tapetum is the innermost wall layer of the microsporangium and provides nourishment to developing pollen grains.",
  wrongExplanations: {
    Epidermis: "The epidermis is the outer protective layer.",
    "Endothecium only": "The endothecium mainly helps in anther dehiscence.",
    "Middle lamella": "The middle lamella is found between adjacent plant cells."
  },
  hint: "It is the innermost anther wall layer."
},

{
  subject: "Biology",
  question: "The tough outer wall of a pollen grain is called:",
  options: ["Exine", "Intine", "Testa", "Pericarp"],
  answer: "Exine",
  explanation:
    "The exine is the resistant outer wall of pollen and contains sporopollenin.",
  wrongExplanations: {
    Intine: "Intine is the inner wall of a pollen grain.",
    Testa: "Testa is the outer seed coat.",
    Pericarp: "Pericarp develops from the ovary wall and forms the fruit wall."
  },
  hint: "It contains highly resistant sporopollenin."
},

{
  subject: "Biology",
  question: "Which substance makes the pollen exine highly resistant?",
  options: ["Sporopollenin", "Cellulose only", "Chitin", "Glycogen"],
  answer: "Sporopollenin",
  explanation:
    "Sporopollenin is an extremely resistant organic material present in the pollen exine.",
  wrongExplanations: {
    "Cellulose only": "Cellulose is important in plant structures but does not give pollen exine its exceptional resistance.",
    Chitin: "Chitin is common in fungal walls and arthropod exoskeletons.",
    Glycogen: "Glycogen is an animal storage carbohydrate."
  },
  hint: "This material can survive harsh environmental conditions."
},

{
  subject: "Biology",
  question: "The process of formation of pollen grains from microspore mother cells is called:",
  options: ["Microsporogenesis", "Megasporogenesis", "Embryogenesis", "Gametogenesis only"],
  answer: "Microsporogenesis",
  explanation:
    "Microsporogenesis is the formation of haploid microspores from diploid microspore mother cells through meiosis.",
  wrongExplanations: {
    Megasporogenesis: "Megasporogenesis produces megaspores in the ovule.",
    Embryogenesis: "Embryogenesis is development of the embryo.",
    "Gametogenesis only": "Microsporogenesis is the more specific term."
  },
  hint: "Microspores eventually develop into pollen grains."
},

{
  subject: "Biology",
  question: "The formation of megaspores from a megaspore mother cell occurs by:",
  options: ["Meiosis", "Mitosis only", "Binary fission", "Budding"],
  answer: "Meiosis",
  explanation:
    "The diploid megaspore mother cell undergoes meiosis to produce haploid megaspores.",
  wrongExplanations: {
    "Mitosis only": "Mitosis does not reduce chromosome number.",
    "Binary fission": "Binary fission is common in prokaryotic reproduction.",
    Budding: "Budding is not the normal process of megaspore formation."
  },
  hint: "The chromosome number must be reduced."
},

{
  subject: "Biology",
  question: "Which hormone is mainly responsible for milk production after childbirth?",
  options: ["Prolactin", "Oxytocin", "FSH", "Testosterone"],
  answer: "Prolactin",
  explanation:
    "Prolactin stimulates milk synthesis in the mammary glands after childbirth.",
  wrongExplanations: {
    Oxytocin: "Oxytocin mainly causes milk ejection.",
    FSH: "FSH mainly regulates ovarian follicles and spermatogenesis.",
    Testosterone: "Testosterone is the principal male sex hormone."
  },
  hint: "Production and ejection of milk use different hormones."
},

{
  subject: "Biology",
  question: "Which hormone mainly causes milk ejection from mammary glands?",
  options: ["Oxytocin", "Prolactin", "Insulin", "Thyroxine"],
  answer: "Oxytocin",
  explanation:
    "Oxytocin causes contraction of myoepithelial cells around mammary glands, resulting in milk ejection.",
  wrongExplanations: {
    Prolactin: "Prolactin mainly stimulates milk production.",
    Insulin: "Insulin regulates blood glucose.",
    Thyroxine: "Thyroxine regulates metabolism."
  },
  hint: "Prolactin produces; this hormone pushes the milk out."
},

{
  subject: "Biology",
  question: "The hormone detected by most pregnancy tests is:",
  options: ["hCG", "TSH", "ADH", "GH"],
  answer: "hCG",
  explanation:
    "Human chorionic gonadotropin is produced after implantation and can be detected in urine or blood during pregnancy.",
  wrongExplanations: {
    TSH: "TSH stimulates the thyroid gland.",
    ADH: "ADH regulates water balance.",
    GH: "Growth hormone promotes growth."
  },
  hint: "Its full name begins with human chorionic."
},

{
  subject: "Biology",
  question: "The corpus luteum mainly secretes:",
  options: ["Progesterone", "Insulin", "Adrenaline", "Thyroxine"],
  answer: "Progesterone",
  explanation:
    "The corpus luteum secretes progesterone, which helps maintain the uterine endometrium.",
  wrongExplanations: {
    Insulin: "Insulin is secreted by pancreatic beta cells.",
    Adrenaline: "Adrenaline is secreted by the adrenal medulla.",
    Thyroxine: "Thyroxine is secreted by the thyroid gland."
  },
  hint: "This hormone helps maintain pregnancy and the endometrium."
},

{
  subject: "Biology",
  question: "Ovulation in human females is triggered mainly by a sudden surge of:",
  options: ["LH", "Insulin", "Prolactin", "ADH"],
  answer: "LH",
  explanation:
    "A sharp rise in luteinizing hormone during the middle of the menstrual cycle triggers ovulation.",
  wrongExplanations: {
    Insulin: "Insulin regulates blood glucose.",
    Prolactin: "Prolactin stimulates milk production.",
    ADH: "ADH regulates water reabsorption."
  },
  hint: "Think LH surge."
},

{
  subject: "Biology",
  question: "Which hormone stimulates the development of ovarian follicles?",
  options: ["FSH", "ADH", "Oxytocin", "Melatonin"],
  answer: "FSH",
  explanation:
    "Follicle-stimulating hormone promotes growth and maturation of ovarian follicles.",
  wrongExplanations: {
    ADH: "ADH regulates water balance.",
    Oxytocin: "Oxytocin is involved in childbirth and milk ejection.",
    Melatonin: "Melatonin helps regulate circadian rhythms."
  },
  hint: "The full name contains the word follicle."
},

{
  subject: "Biology",
  question: "Which part of a nephron is mainly responsible for ultrafiltration of blood?",
  options: ["Glomerulus", "Loop of Henle", "Collecting duct", "Distal tubule only"],
  answer: "Glomerulus",
  explanation:
    "High pressure in glomerular capillaries forces water and small solutes into Bowman's capsule.",
  wrongExplanations: {
    "Loop of Henle": "The loop of Henle is important for concentrating urine.",
    "Collecting duct": "The collecting duct mainly adjusts water reabsorption and carries urine.",
    "Distal tubule only": "The distal tubule mainly modifies the filtrate."
  },
  hint: "It is a tuft of capillaries inside Bowman's capsule."
},

{
  subject: "Biology",
  question: "Which part of the nephron is especially important in establishing the concentration gradient of the kidney medulla?",
  options: ["Loop of Henle", "Bowman's capsule", "Glomerulus", "Renal artery"],
  answer: "Loop of Henle",
  explanation:
    "The loop of Henle contributes to the counter-current mechanism that establishes the medullary osmotic gradient.",
  wrongExplanations: {
    "Bowman's capsule": "Bowman's capsule collects glomerular filtrate.",
    Glomerulus: "The glomerulus performs ultrafiltration.",
    "Renal artery": "The renal artery supplies blood to the kidney."
  },
  hint: "Think counter-current mechanism."
},

{
  subject: "Biology",
  question: "Which hormone increases water reabsorption by the kidney collecting ducts?",
  options: ["ADH", "Insulin", "Glucagon", "Calcitonin"],
  answer: "ADH",
  explanation:
    "Antidiuretic hormone increases the permeability of collecting ducts to water, reducing water loss.",
  wrongExplanations: {
    Insulin: "Insulin lowers blood glucose.",
    Glucagon: "Glucagon raises blood glucose.",
    Calcitonin: "Calcitonin helps regulate calcium levels."
  },
  hint: "Antidiuretic means reducing urine volume."
},

{
  subject: "Biology",
  question: "The natural pacemaker of the human heart is the:",
  options: ["SA node", "AV node", "Purkinje fibres", "Bundle of His"],
  answer: "SA node",
  explanation:
    "The sinoatrial node generates rhythmic electrical impulses and normally sets the heart rate.",
  wrongExplanations: {
    "AV node": "The AV node delays and relays impulses from the atria to the ventricles.",
    "Purkinje fibres": "Purkinje fibres distribute impulses through ventricular muscle.",
    "Bundle of His": "The bundle of His conducts impulses toward the ventricles."
  },
  hint: "It is located in the right atrium."
},

{
  subject: "Biology",
  question: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
  options: ["Pulmonary vein", "Pulmonary artery", "Vena cava", "Hepatic portal vein"],
  answer: "Pulmonary vein",
  explanation:
    "Pulmonary veins return oxygen-rich blood from the lungs to the left atrium.",
  wrongExplanations: {
    "Pulmonary artery": "The pulmonary artery carries deoxygenated blood from the heart to the lungs.",
    "Vena cava": "The venae cavae return deoxygenated systemic blood to the right atrium.",
    "Hepatic portal vein": "The hepatic portal vein carries blood from digestive organs to the liver."
  },
  hint: "This is the famous exception among veins."
},

{
  subject: "Biology",
  question: "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
  options: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Coronary artery"],
  answer: "Pulmonary artery",
  explanation:
    "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs.",
  wrongExplanations: {
    "Pulmonary vein": "Pulmonary veins carry oxygenated blood toward the heart.",
    Aorta: "The aorta carries oxygenated blood to the systemic circulation.",
    "Coronary artery": "Coronary arteries supply the heart muscle."
  },
  hint: "This is the famous exception among arteries."
},

{
  subject: "Biology",
  question: "The oxygen-binding pigment present in red blood cells is:",
  options: ["Haemoglobin", "Myoglobin only", "Melanin", "Keratin"],
  answer: "Haemoglobin",
  explanation:
    "Haemoglobin in red blood cells binds oxygen and transports it through the blood.",
  wrongExplanations: {
    "Myoglobin only": "Myoglobin stores oxygen mainly in muscle tissue.",
    Melanin: "Melanin is a pigment involved in skin and hair colour.",
    Keratin: "Keratin is a structural protein."
  },
  hint: "It contains iron."
},

{
  subject: "Biology",
  question: "Which cells differentiate into plasma cells that produce antibodies?",
  options: ["B lymphocytes", "Red blood cells", "Platelets", "Neutrophils only"],
  answer: "B lymphocytes",
  explanation:
    "Activated B lymphocytes can differentiate into plasma cells that secrete antibodies.",
  wrongExplanations: {
    "Red blood cells": "Red blood cells transport respiratory gases.",
    Platelets: "Platelets participate in blood clotting.",
    "Neutrophils only": "Neutrophils mainly perform phagocytosis."
  },
  hint: "Think humoral immunity."
},

{
  subject: "Biology",
  question: "Which cells are mainly responsible for cell-mediated immunity?",
  options: ["T lymphocytes", "Erythrocytes", "Platelets", "Adipocytes"],
  answer: "T lymphocytes",
  explanation:
    "T lymphocytes are central to cell-mediated immune responses.",
  wrongExplanations: {
    Erythrocytes: "Erythrocytes transport oxygen.",
    Platelets: "Platelets help in clotting.",
    Adipocytes: "Adipocytes store fat."
  },
  hint: "The other major lymphocyte group is associated with antibodies."
},

{
  subject: "Biology",
  question: "The first stable product of carbon fixation in C4 plants is:",
  options: ["Oxaloacetic acid", "3-phosphoglycerate", "Pyruvate only", "Glucose"],
  answer: "Oxaloacetic acid",
  explanation:
    "In C4 plants, PEP carboxylase initially fixes carbon dioxide into the four-carbon compound oxaloacetic acid.",
  wrongExplanations: {
    "3-phosphoglycerate": "3-PGA is the first stable product of the Calvin cycle in C3 plants.",
    "Pyruvate only": "Pyruvate participates in regeneration of PEP but is not the first stable fixation product.",
    Glucose: "Glucose is produced much later."
  },
  hint: "C4 means the first stable product contains four carbons."
},

{
  subject: "Biology",
  question: "The primary carbon dioxide acceptor in C4 plants is:",
  options: ["PEP", "RuBP", "PGA", "NADPH"],
  answer: "PEP",
  explanation:
    "Phosphoenolpyruvate accepts carbon dioxide during the initial fixation step in C4 plants.",
  wrongExplanations: {
    RuBP: "RuBP is the carbon dioxide acceptor in the Calvin cycle.",
    PGA: "PGA is a product rather than the initial C4 acceptor.",
    NADPH: "NADPH provides reducing power."
  },
  hint: "PEP carboxylase acts on this molecule."
},

{
  subject: "Biology",
  question: "Photorespiration is generally much lower in:",
  options: ["C4 plants", "C3 plants", "All plants equally", "Non-green plants only"],
  answer: "C4 plants",
  explanation:
    "C4 plants concentrate carbon dioxide around RuBisCO, greatly reducing photorespiration.",
  wrongExplanations: {
    "C3 plants": "C3 plants generally experience more photorespiration under hot and dry conditions.",
    "All plants equally": "Photosynthetic pathways strongly affect photorespiration.",
    "Non-green plants only": "The comparison mainly concerns photosynthetic C3 and C4 plants."
  },
  hint: "Their CO2-concentrating mechanism gives them an advantage."
},

{
  subject: "Biology",
  question: "Which enzyme initially fixes carbon dioxide in C4 plants?",
  options: ["PEP carboxylase", "Pepsin", "Catalase", "DNA polymerase"],
  answer: "PEP carboxylase",
  explanation:
    "PEP carboxylase catalyses the initial fixation of carbon dioxide in C4 mesophyll cells.",
  wrongExplanations: {
    Pepsin: "Pepsin is a digestive enzyme.",
    Catalase: "Catalase breaks down hydrogen peroxide.",
    "DNA polymerase": "DNA polymerase synthesizes DNA."
  },
  hint: "Its substrate is phosphoenolpyruvate."
},

{
  subject: "Biology",
  question: "The phenomenon in which one gene influences multiple phenotypic traits is called:",
  options: ["Pleiotropy", "Codominance", "Linkage", "Mutation only"],
  answer: "Pleiotropy",
  explanation:
    "Pleiotropy occurs when a single gene affects more than one phenotypic characteristic.",
  wrongExplanations: {
    Codominance: "Codominance occurs when both alleles are fully expressed.",
    Linkage: "Linkage refers to genes located on the same chromosome tending to be inherited together.",
    "Mutation only": "Mutation is a change in genetic material."
  },
  hint: "One gene, many effects."
},

{
  subject: "Biology",
  question: "Genes located on the same chromosome tend to be inherited together because of:",
  options: ["Linkage", "Independent assortment only", "Translation", "Replication"],
  answer: "Linkage",
  explanation:
    "Genes located close together on the same chromosome tend to pass together into gametes and are described as linked.",
  wrongExplanations: {
    "Independent assortment only": "Linked genes may deviate from independent assortment.",
    Translation: "Translation produces proteins from mRNA.",
    Replication: "Replication copies DNA."
  },
  hint: "Morgan's experiments with fruit flies helped establish this idea."
},

{
  subject: "Biology",
  question: "Exchange of genetic material between homologous chromosomes occurs during:",
  options: ["Crossing over", "Translation", "Binary fission", "DNA transcription only"],
  answer: "Crossing over",
  explanation:
    "Crossing over exchanges corresponding DNA segments between homologous chromosomes during meiosis.",
  wrongExplanations: {
    Translation: "Translation occurs at ribosomes.",
    "Binary fission": "Binary fission is a form of asexual reproduction.",
    "DNA transcription only": "Transcription produces RNA from DNA."
  },
  hint: "It increases genetic recombination."
},

{
  subject: "Biology",
  question: "Crossing over normally occurs during which stage of meiosis?",
  options: ["Prophase I", "Prophase II", "Metaphase II", "Telophase II"],
  answer: "Prophase I",
  explanation:
    "Homologous chromosomes pair and exchange genetic material during prophase I of meiosis.",
  wrongExplanations: {
    "Prophase II": "Homologous chromosome pairing has already occurred before meiosis II.",
    "Metaphase II": "Chromosomes align during metaphase II.",
    "Telophase II": "Telophase II occurs near the end of meiosis."
  },
  hint: "Homologous chromosomes pair during the first meiotic division."
},
{
  subject: "Chemistry",
  question: "The quantum number that primarily determines the shape of an atomic orbital is the:",
  options: ["Azimuthal quantum number", "Principal quantum number", "Magnetic quantum number", "Spin quantum number"],
  answer: "Azimuthal quantum number",
  explanation:
    "The azimuthal or angular momentum quantum number determines the subshell and general shape of an orbital.",
  wrongExplanations: {
    "Principal quantum number": "The principal quantum number mainly describes the shell and approximate size or energy.",
    "Magnetic quantum number": "The magnetic quantum number describes orbital orientation.",
    "Spin quantum number": "The spin quantum number describes electron spin."
  },
  hint: "It distinguishes s, p, d and f subshells."
},

{
  subject: "Chemistry",
  question: "The magnetic quantum number describes the:",
  options: ["Orientation of an orbital", "Main energy shell", "Electron spin only", "Atomic mass"],
  answer: "Orientation of an orbital",
  explanation:
    "The magnetic quantum number specifies the orientation of an orbital within a subshell.",
  wrongExplanations: {
    "Main energy shell": "The principal quantum number identifies the main shell.",
    "Electron spin only": "Electron spin is described by the spin quantum number.",
    "Atomic mass": "Quantum numbers do not directly specify atomic mass."
  },
  hint: "Think orientation in space."
},

{
  subject: "Chemistry",
  question: "The maximum number of electrons that can occupy a p subshell is:",
  options: ["6", "2", "10", "14"],
  answer: "6",
  explanation:
    "A p subshell contains three orbitals, each capable of holding two electrons.",
  wrongExplanations: {
    "2": "Two electrons fit in one orbital, not the whole p subshell.",
    "10": "A d subshell can hold ten electrons.",
    "14": "An f subshell can hold fourteen electrons."
  },
  hint: "Three p orbitals × two electrons each."
},

{
  subject: "Chemistry",
  question: "The maximum number of electrons in a d subshell is:",
  options: ["10", "6", "14", "2"],
  answer: "10",
  explanation:
    "A d subshell contains five orbitals and can therefore hold ten electrons.",
  wrongExplanations: {
    "6": "Six is the maximum for a p subshell.",
    "14": "Fourteen is the maximum for an f subshell.",
    "2": "Two electrons fit in a single orbital."
  },
  hint: "Five orbitals × two electrons."
},

{
  subject: "Chemistry",
  question: "Hund's rule states that electrons occupy degenerate orbitals:",
  options: [
    "Singly before pairing",
    "In pairs immediately",
    "Only with opposite orbital directions",
    "Without any spin"
  ],
  answer: "Singly before pairing",
  explanation:
    "Electrons occupy degenerate orbitals singly with parallel spins before pairing occurs.",
  wrongExplanations: {
    "In pairs immediately": "Electrons first occupy separate degenerate orbitals.",
    "Only with opposite orbital directions": "Hund's rule concerns electron occupancy and spin.",
    "Without any spin": "Electrons always possess spin."
  },
  hint: "Empty seats are filled one by one before sharing."
},

{
  subject: "Chemistry",
  question: "The Pauli exclusion principle states that:",
  options: [
    "No two electrons in an atom can have all four quantum numbers identical",
    "Electrons always pair before occupying empty orbitals",
    "All electrons have identical energies",
    "Only one electron can exist in an atom"
  ],
  answer: "No two electrons in an atom can have all four quantum numbers identical",
  explanation:
    "The Pauli exclusion principle prevents two electrons in the same atom from sharing the same complete set of four quantum numbers.",
  wrongExplanations: {
    "Electrons always pair before occupying empty orbitals": "Hund's rule predicts the opposite for degenerate orbitals.",
    "All electrons have identical energies": "Electrons can occupy different energy levels.",
    "Only one electron can exist in an atom": "Atoms can contain many electrons."
  },
  hint: "Two electrons in one orbital must have opposite spins."
},

{
  subject: "Chemistry",
  question: "The Aufbau principle describes:",
  options: [
    "Filling lower-energy orbitals before higher-energy orbitals",
    "Pairing all electrons first",
    "Radioactive decay",
    "Breaking chemical bonds with light"
  ],
  answer: "Filling lower-energy orbitals before higher-energy orbitals",
  explanation:
    "According to the Aufbau principle, electrons occupy available orbitals in order of increasing energy.",
  wrongExplanations: {
    "Pairing all electrons first": "Hund's rule governs distribution within degenerate orbitals.",
    "Radioactive decay": "Radioactivity is a nuclear phenomenon.",
    "Breaking chemical bonds with light": "That describes photochemical processes."
  },
  hint: "Aufbau means building up."
},

{
  subject: "Chemistry",
  question: "Which element has the electronic configuration 1s2 2s2 2p6 3s1?",
  options: ["Sodium", "Magnesium", "Neon", "Aluminium"],
  answer: "Sodium",
  explanation:
    "The configuration contains 11 electrons, corresponding to atomic number 11, sodium.",
  wrongExplanations: {
    Magnesium: "Magnesium has 12 electrons.",
    Neon: "Neon has 10 electrons.",
    Aluminium: "Aluminium has 13 electrons."
  },
  hint: "Count the electrons."
},

{
  subject: "Chemistry",
  question: "Which element has the highest electronegativity?",
  options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
  answer: "Fluorine",
  explanation:
    "Fluorine is the most electronegative element on the Pauling scale.",
  wrongExplanations: {
    Oxygen: "Oxygen is highly electronegative but lower than fluorine.",
    Chlorine: "Chlorine is less electronegative than fluorine.",
    Nitrogen: "Nitrogen is less electronegative than fluorine."
  },
  hint: "It sits near the upper-right corner of the periodic table."
},

{
  subject: "Chemistry",
  question: "Across a period from left to right, atomic radius generally:",
  options: ["Decreases", "Increases", "Remains exactly constant", "Becomes infinite"],
  answer: "Decreases",
  explanation:
    "Increasing effective nuclear charge pulls electrons closer to the nucleus across a period.",
  wrongExplanations: {
    Increases: "Atomic radius generally decreases across a period.",
    "Remains exactly constant": "Effective nuclear charge changes across the period.",
    "Becomes infinite": "Atomic size remains finite."
  },
  hint: "The nucleus pulls more strongly across a period."
},

{
  subject: "Chemistry",
  question: "Down a group in the periodic table, atomic radius generally:",
  options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
  answer: "Increases",
  explanation:
    "Additional electron shells are added down a group, increasing atomic size.",
  wrongExplanations: {
    Decreases: "The addition of shells generally outweighs increasing nuclear charge.",
    "Remains constant": "Atomic size changes down a group.",
    "Becomes zero": "Atoms retain finite size."
  },
  hint: "More electron shells are added."
},

{
  subject: "Chemistry",
  question: "Ionization enthalpy generally increases across a period because:",
  options: [
    "Effective nuclear charge increases",
    "Atomic radius always increases",
    "Electrons become neutrons",
    "Nuclear charge decreases"
  ],
  answer: "Effective nuclear charge increases",
  explanation:
    "Greater effective nuclear attraction generally makes electrons harder to remove across a period.",
  wrongExplanations: {
    "Atomic radius always increases": "Atomic radius generally decreases across a period.",
    "Electrons become neutrons": "Chemical periodic trends do not transform electrons into neutrons.",
    "Nuclear charge decreases": "Nuclear charge increases across a period."
  },
  hint: "Electrons are held more strongly."
},

{
  subject: "Chemistry",
  question: "Which type of bond is formed by sharing electron pairs between atoms?",
  options: ["Covalent bond", "Ionic bond", "Metallic bond only", "Hydrogen bond only"],
  answer: "Covalent bond",
  explanation:
    "Covalent bonds form when atoms share one or more pairs of electrons.",
  wrongExplanations: {
    "Ionic bond": "Ionic bonding primarily involves electrostatic attraction after electron transfer.",
    "Metallic bond only": "Metallic bonding involves delocalized electrons in a metal lattice.",
    "Hydrogen bond only": "Hydrogen bonding is usually an intermolecular or intramolecular attraction."
  },
  hint: "Share rather than transfer."
},

{
  subject: "Chemistry",
  question: "The bond order of a nitrogen molecule, N2, is:",
  options: ["3", "2", "1", "0"],
  answer: "3",
  explanation:
    "The two nitrogen atoms in N2 are connected by a triple bond, giving bond order 3.",
  wrongExplanations: {
    "2": "Bond order 2 corresponds to a double bond.",
    "1": "Bond order 1 corresponds to a single bond.",
    "0": "Bond order zero would indicate no stable bond."
  },
  hint: "N≡N."
},

{
  subject: "Chemistry",
  question: "Which hybridization is associated with a tetrahedral arrangement around carbon in methane?",
  options: ["sp3", "sp2", "sp", "dsp2"],
  answer: "sp3",
  explanation:
    "Carbon in methane uses four equivalent sp3 hybrid orbitals arranged tetrahedrally.",
  wrongExplanations: {
    sp2: "sp2 hybridization commonly gives trigonal planar geometry.",
    sp: "sp hybridization commonly gives linear geometry.",
    dsp2: "dsp2 is associated with certain square-planar complexes."
  },
  hint: "Four equivalent sigma bonds."
},

{
  subject: "Chemistry",
  question: "Carbon atoms in ethene are primarily:",
  options: ["sp2 hybridized", "sp3 hybridized", "sp hybridized", "Unhybridized only"],
  answer: "sp2 hybridized",
  explanation:
    "Each carbon in ethene forms three sigma bonds using sp2 hybrid orbitals and one pi bond using an unhybridized p orbital.",
  wrongExplanations: {
    "sp3 hybridized": "sp3 is typical of carbon with four single bonds.",
    "sp hybridized": "sp is typical of carbon in a triple bond.",
    "Unhybridized only": "Most bonding orbitals in ethene are hybridized."
  },
  hint: "A carbon-carbon double bond suggests sp2."
},

{
  subject: "Chemistry",
  question: "Carbon atoms in ethyne are primarily:",
  options: ["sp hybridized", "sp2 hybridized", "sp3 hybridized", "d2sp3 hybridized"],
  answer: "sp hybridized",
  explanation:
    "Each carbon in ethyne is sp hybridized and forms a linear arrangement.",
  wrongExplanations: {
    "sp2 hybridized": "sp2 is typical of carbon-carbon double bonds.",
    "sp3 hybridized": "sp3 is typical of saturated carbon.",
    "d2sp3 hybridized": "This hybridization is associated with some octahedral complexes."
  },
  hint: "A triple bond gives a linear carbon arrangement."
},

{
  subject: "Chemistry",
  question: "Which type of isomerism occurs when compounds have the same molecular formula but different carbon skeletons?",
  options: ["Chain isomerism", "Geometrical isomerism", "Optical isomerism", "Coordination isomerism"],
  answer: "Chain isomerism",
  explanation:
    "Chain isomers differ in the arrangement or branching of their carbon skeleton.",
  wrongExplanations: {
    "Geometrical isomerism": "Geometrical isomers differ in spatial arrangement around restricted bonds.",
    "Optical isomerism": "Optical isomers are non-superimposable mirror images.",
    "Coordination isomerism": "Coordination isomerism occurs in certain coordination compounds."
  },
  hint: "Straight chain versus branched chain."
},

{
  subject: "Chemistry",
  question: "Compounds that are non-superimposable mirror images are called:",
  options: ["Enantiomers", "Chain isomers", "Tautomers", "Homologues"],
  answer: "Enantiomers",
  explanation:
    "Enantiomers are stereoisomers that are mirror images but cannot be superimposed.",
  wrongExplanations: {
    "Chain isomers": "Chain isomers have different carbon skeletons.",
    Tautomers: "Tautomers readily interconvert by movement of a proton and double bond.",
    Homologues: "Members of a homologous series differ by repeating structural units."
  },
  hint: "Think left and right hands."
},

{
  subject: "Chemistry",
  question: "The carbon atom attached to four different groups is commonly called a:",
  options: ["Chiral carbon", "Carbonyl carbon", "Carbocation only", "Primary carbon only"],
  answer: "Chiral carbon",
  explanation:
    "A tetrahedral carbon bonded to four different groups can act as a chiral centre.",
  wrongExplanations: {
    "Carbonyl carbon": "A carbonyl carbon is double bonded to oxygen.",
    "Carbocation only": "A carbocation carries a positive charge.",
    "Primary carbon only": "Primary classification depends on the number of carbon neighbours."
  },
  hint: "It can produce optical isomerism."
},

{
  subject: "Chemistry",
  question: "Which intermediate carries a positive charge on carbon?",
  options: ["Carbocation", "Carbanion", "Free radical", "Carbene only"],
  answer: "Carbocation",
  explanation:
    "A carbocation is an organic intermediate in which carbon carries a positive charge.",
  wrongExplanations: {
    Carbanion: "A carbanion carries a negative charge.",
    "Free radical": "A free radical contains an unpaired electron.",
    "Carbene only": "A carbene is a neutral divalent carbon species."
  },
  hint: "Cation means positive."
},

{
  subject: "Chemistry",
  question: "Which intermediate carries a negative charge on carbon?",
  options: ["Carbanion", "Carbocation", "Free radical", "Electrophile only"],
  answer: "Carbanion",
  explanation:
    "A carbanion contains a negatively charged carbon atom.",
  wrongExplanations: {
    Carbocation: "A carbocation carries a positive charge.",
    "Free radical": "A radical contains an unpaired electron.",
    "Electrophile only": "Electrophile describes an electron-pair acceptor rather than specifically a negatively charged carbon."
  },
  hint: "Anion means negative."
},

{
  subject: "Chemistry",
  question: "An electrophile is a species that:",
  options: ["Accepts an electron pair", "Donates an electron pair", "Always contains a neutron", "Always has a negative charge"],
  answer: "Accepts an electron pair",
  explanation:
    "Electrophiles are electron-deficient species capable of accepting an electron pair.",
  wrongExplanations: {
    "Donates an electron pair": "Electron-pair donors are nucleophiles.",
    "Always contains a neutron": "Nuclear composition does not define electrophiles.",
    "Always has a negative charge": "Electrophiles are often positive or neutral electron-deficient species."
  },
  hint: "Electrophiles love electrons."
},

{
  subject: "Chemistry",
  question: "A nucleophile is a species that:",
  options: ["Donates an electron pair", "Accepts an electron pair only", "Has no electrons", "Must always be positively charged"],
  answer: "Donates an electron pair",
  explanation:
    "Nucleophiles are electron-rich species that donate electron pairs to form bonds.",
  wrongExplanations: {
    "Accepts an electron pair only": "Electron-pair acceptors are electrophiles.",
    "Has no electrons": "A nucleophile must have available electron density.",
    "Must always be positively charged": "Many nucleophiles are negative or neutral."
  },
  hint: "Think electron-rich."
},

{
  subject: "Chemistry",
  question: "The common ion effect generally causes the ionization of a weak electrolyte to:",
  options: ["Decrease", "Increase greatly", "Remain completely unaffected", "Become nuclear"],
  answer: "Decrease",
  explanation:
    "Adding an ion already present in the equilibrium shifts the equilibrium and suppresses ionization of the weak electrolyte.",
  wrongExplanations: {
    "Increase greatly": "A common ion generally suppresses rather than promotes ionization.",
    "Remain completely unaffected": "The equilibrium position changes.",
    "Become nuclear": "The effect concerns chemical equilibrium."
  },
  hint: "Le Chatelier's principle can explain it."
},

{
  subject: "Chemistry",
  question: "A buffer solution resists changes in:",
  options: ["pH", "Mass number", "Atomic number", "Number of neutrons"],
  answer: "pH",
  explanation:
    "Buffers resist large changes in pH when small amounts of acid or base are added.",
  wrongExplanations: {
    "Mass number": "Chemical buffers do not alter nuclear mass number.",
    "Atomic number": "Atomic number is fixed by proton number.",
    "Number of neutrons": "Buffer action does not involve nuclear changes."
  },
  hint: "Buffers keep acidity relatively stable."
},

{
  subject: "Chemistry",
  question: "An acidic buffer can be prepared from:",
  options: [
    "A weak acid and its salt with a strong base",
    "A strong acid and strong base only",
    "Pure water only",
    "A metal and oxygen"
  ],
  answer: "A weak acid and its salt with a strong base",
  explanation:
    "An acidic buffer commonly consists of a weak acid and the salt of its conjugate base.",
  wrongExplanations: {
    "A strong acid and strong base only": "Complete neutralization does not normally produce the required buffer pair.",
    "Pure water only": "Pure water is not an effective buffer.",
    "A metal and oxygen": "This does not define a buffer system."
  },
  hint: "Example: acetic acid plus sodium acetate."
},

{
  subject: "Chemistry",
  question: "The solubility product constant is represented by:",
  options: ["Ksp", "Ka", "Kb", "Kw only"],
  answer: "Ksp",
  explanation:
    "Ksp is the equilibrium constant associated with dissolution of a sparingly soluble ionic solid.",
  wrongExplanations: {
    Ka: "Ka is an acid dissociation constant.",
    Kb: "Kb is a base dissociation constant.",
    "Kw only": "Kw is the ionic product of water."
  },
  hint: "The letters stand for solubility product."
},

{
  subject: "Chemistry",
  question: "In an electrochemical cell, the salt bridge mainly helps to:",
  options: [
    "Maintain electrical neutrality",
    "Produce electrons from nothing",
    "Increase atomic number",
    "Stop all ion movement"
  ],
  answer: "Maintain electrical neutrality",
  explanation:
    "The salt bridge permits ion migration between half-cells and prevents excessive charge buildup.",
  wrongExplanations: {
    "Produce electrons from nothing": "Electrons arise from oxidation reactions.",
    "Increase atomic number": "Electrochemical cells do not change nuclear proton numbers.",
    "Stop all ion movement": "Ion movement through the bridge is essential."
  },
  hint: "It completes the internal ionic circuit."
},

{
  subject: "Chemistry",
  question: "In a galvanic cell, electrons flow through the external circuit from:",
  options: ["Anode to cathode", "Cathode to anode", "Salt bridge to anode", "Electrolyte to nucleus"],
  answer: "Anode to cathode",
  explanation:
    "Oxidation at the anode releases electrons, which travel through the external circuit toward the cathode.",
  wrongExplanations: {
    "Cathode to anode": "This reverses the actual electron-flow direction.",
    "Salt bridge to anode": "The salt bridge transports ions rather than external-circuit electrons.",
    "Electrolyte to nucleus": "Electrons do not flow into atomic nuclei in this process."
  },
  hint: "Oxidation releases electrons at the anode."
},

{
  subject: "Chemistry",
  question: "The standard electrode potential of the standard hydrogen electrode is defined as:",
  options: ["0 V", "1 V", "-1 V", "100 V"],
  answer: "0 V",
  explanation:
    "The standard hydrogen electrode is assigned an electrode potential of exactly zero volts under standard conditions.",
  wrongExplanations: {
    "1 V": "Its reference potential is not one volt.",
    "-1 V": "It is defined as zero.",
    "100 V": "This is far outside the reference definition."
  },
  hint: "It is the reference against which other electrode potentials are measured."
},

{
  subject: "Chemistry",
  question: "Faraday's first law of electrolysis states that the mass deposited is proportional to:",
  options: ["Quantity of electricity passed", "Voltage only", "Temperature only", "Pressure only"],
  answer: "Quantity of electricity passed",
  explanation:
    "The mass deposited or liberated during electrolysis is directly proportional to the electric charge passed through the electrolyte.",
  wrongExplanations: {
    "Voltage only": "Voltage alone does not state Faraday's first law.",
    "Temperature only": "Temperature is not the defining proportional quantity.",
    "Pressure only": "Pressure is not the basis of the law."
  },
  hint: "Charge Q = It."
},

{
  subject: "Chemistry",
  question: "The unit of rate constant for a first-order reaction is:",
  options: ["s^-1", "mol L^-1 s^-1", "L mol^-1 s^-1", "mol^2 L^-2"],
  answer: "s^-1",
  explanation:
    "For a first-order reaction, the rate constant has dimensions of inverse time.",
  wrongExplanations: {
    "mol L^-1 s^-1": "This corresponds to reaction rate dimensions.",
    "L mol^-1 s^-1": "This is typical for a second-order rate constant.",
    "mol^2 L^-2": "This is not the unit of a first-order rate constant."
  },
  hint: "First-order half-life depends only on k."
},

{
  subject: "Chemistry",
  question: "For a first-order reaction, half-life is:",
  options: [
    "Independent of initial concentration",
    "Directly proportional to initial concentration",
    "Always zero",
    "Dependent only on pressure"
  ],
  answer: "Independent of initial concentration",
  explanation:
    "The half-life of a first-order reaction is t1/2 = 0.693/k and therefore does not depend on initial concentration.",
  wrongExplanations: {
    "Directly proportional to initial concentration": "This is not true for first-order kinetics.",
    "Always zero": "A reaction requires finite time to reach half concentration.",
    "Dependent only on pressure": "The standard first-order half-life expression depends on k."
  },
  hint: "t1/2 = 0.693/k."
},

{
  subject: "Chemistry",
  question: "The minimum energy that reacting molecules must possess for an effective collision is called:",
  options: ["Activation energy", "Ionization energy", "Lattice energy", "Bond order"],
  answer: "Activation energy",
  explanation:
    "Activation energy is the minimum energy barrier that reactants must overcome for reaction to occur.",
  wrongExplanations: {
    "Ionization energy": "Ionization energy removes an electron from an isolated gaseous atom.",
    "Lattice energy": "Lattice energy concerns ionic crystal formation or separation.",
    "Bond order": "Bond order describes bond multiplicity or strength."
  },
  hint: "Catalysts lower this energy barrier."
},

{
  subject: "Chemistry",
  question: "Adsorption is mainly a:",
  options: ["Surface phenomenon", "Bulk phenomenon only", "Nuclear phenomenon", "Radioactive phenomenon"],
  answer: "Surface phenomenon",
  explanation:
    "Adsorption involves accumulation of particles on the surface of another substance.",
  wrongExplanations: {
    "Bulk phenomenon only": "Absorption, rather than adsorption, involves penetration into the bulk.",
    "Nuclear phenomenon": "Adsorption involves intermolecular interactions, not nuclear changes.",
    "Radioactive phenomenon": "Radioactivity is unrelated."
  },
  hint: "ADsorption occurs AT the surface."
},

{
  subject: "Chemistry",
  question: "A colloidal particle generally has a size intermediate between:",
  options: [
    "A true solution particle and a suspension particle",
    "An atom and its nucleus only",
    "A proton and neutron",
    "Two planets"
  ],
  answer: "A true solution particle and a suspension particle",
  explanation:
    "Colloidal particles are larger than ordinary solute particles but smaller than particles in typical suspensions.",
  wrongExplanations: {
    "An atom and its nucleus only": "Colloid classification concerns dispersed particles in mixtures.",
    "A proton and neutron": "These are subatomic particles.",
    "Two planets": "Planetary scale is irrelevant."
  },
  hint: "Colloids lie between solutions and suspensions."
},

{
  subject: "Chemistry",
  question: "Scattering of light by colloidal particles is called the:",
  options: ["Tyndall effect", "Photoelectric effect", "Doppler effect", "Zeeman effect"],
  answer: "Tyndall effect",
  explanation:
    "The Tyndall effect is the scattering of a beam of light by colloidal particles.",
  wrongExplanations: {
    "Photoelectric effect": "The photoelectric effect involves emission of electrons by light.",
    "Doppler effect": "The Doppler effect concerns apparent frequency changes due to relative motion.",
    "Zeeman effect": "The Zeeman effect is splitting of spectral lines in a magnetic field."
  },
  hint: "It can make a beam of light visible in a colloid."
},

{
  subject: "Chemistry",
  question: "Which metal is extracted commercially from bauxite?",
  options: ["Aluminium", "Iron", "Copper", "Zinc"],
  answer: "Aluminium",
  explanation:
    "Bauxite is the principal commercial ore of aluminium.",
  wrongExplanations: {
    Iron: "Important iron ores include hematite and magnetite.",
    Copper: "Copper is obtained from ores such as copper pyrites.",
    Zinc: "Zinc is obtained from ores such as zinc blende."
  },
  hint: "We already identified this as the most abundant metal in Earth's crust."
}
,
{
  subject: "Biology",
  question: "Which type of ribosome is normally found in the cytoplasm of prokaryotic cells?",
  options: ["70S", "80S", "60S", "90S"],
  answer: "70S",
  explanation:
    "Prokaryotic cytoplasmic ribosomes are 70S, consisting of 50S and 30S subunits.",
  wrongExplanations: {
    "80S": "80S ribosomes are typical of the eukaryotic cytoplasm.",
    "60S": "60S is the large subunit of a eukaryotic 80S ribosome.",
    "90S": "90S is not the standard functional ribosome type."
  },
  hint: "Bacteria generally have the smaller ribosome."
},

{
  subject: "Biology",
  question: "Which organelle contains its own DNA and 70S-type ribosomes?",
  options: ["Mitochondrion", "Golgi apparatus", "Lysosome", "Peroxisome"],
  answer: "Mitochondrion",
  explanation:
    "Mitochondria contain their own DNA and ribosomes resembling those of prokaryotes.",
  wrongExplanations: {
    "Golgi apparatus": "The Golgi apparatus does not contain its own genome.",
    Lysosome: "Lysosomes contain digestive enzymes but no independent DNA.",
    Peroxisome: "Peroxisomes do not possess their own genome."
  },
  hint: "This supports the endosymbiotic theory."
},

{
  subject: "Biology",
  question: "The fluid-filled internal region of a mitochondrion is called the:",
  options: ["Matrix", "Stroma", "Lumen", "Nucleoplasm"],
  answer: "Matrix",
  explanation:
    "The mitochondrial matrix contains enzymes for processes such as the Krebs cycle.",
  wrongExplanations: {
    Stroma: "Stroma is the fluid region inside chloroplasts.",
    Lumen: "Lumen usually refers to an internal cavity or the thylakoid interior.",
    Nucleoplasm: "Nucleoplasm is found inside the nucleus."
  },
  hint: "Do not confuse mitochondria with chloroplasts."
},

{
  subject: "Biology",
  question: "The Krebs cycle in eukaryotic cells occurs mainly in the:",
  options: ["Mitochondrial matrix", "Cytoplasm", "Golgi apparatus", "Nucleus"],
  answer: "Mitochondrial matrix",
  explanation:
    "Most enzymes of the Krebs cycle are located in the mitochondrial matrix.",
  wrongExplanations: {
    Cytoplasm: "Glycolysis occurs in the cytoplasm.",
    "Golgi apparatus": "The Golgi apparatus modifies and packages cellular products.",
    Nucleus: "The nucleus stores genetic material."
  },
  hint: "Think about aerobic respiration after glycolysis."
},

{
  subject: "Biology",
  question: "Glycolysis occurs in the:",
  options: ["Cytoplasm", "Mitochondrial matrix", "Nucleus", "Chloroplast only"],
  answer: "Cytoplasm",
  explanation:
    "Glycolysis is the breakdown of glucose to pyruvate and occurs in the cytoplasm.",
  wrongExplanations: {
    "Mitochondrial matrix": "The Krebs cycle occurs mainly in the mitochondrial matrix.",
    Nucleus: "Glycolysis is not a nuclear process.",
    "Chloroplast only": "Glycolysis is not restricted to chloroplasts."
  },
  hint: "It occurs before pyruvate enters mitochondria."
},

{
  subject: "Biology",
  question: "The final electron acceptor in aerobic respiration is:",
  options: ["Oxygen", "Carbon dioxide", "Glucose", "Pyruvate"],
  answer: "Oxygen",
  explanation:
    "Oxygen accepts electrons at the end of the electron transport chain and combines with protons to form water.",
  wrongExplanations: {
    "Carbon dioxide": "Carbon dioxide is produced during decarboxylation reactions.",
    Glucose: "Glucose is the starting fuel molecule.",
    Pyruvate: "Pyruvate is an intermediate product of glycolysis."
  },
  hint: "Aerobic respiration requires this gas."
},

{
  subject: "Biology",
  question: "In human muscles during oxygen shortage, pyruvate may be converted into:",
  options: ["Lactic acid", "Ethanol", "Acetic acid", "Sucrose"],
  answer: "Lactic acid",
  explanation:
    "During anaerobic conditions in muscle cells, pyruvate can be reduced to lactate.",
  wrongExplanations: {
    Ethanol: "Ethanol fermentation is typical of yeast.",
    "Acetic acid": "Acetic acid is not the main anaerobic product of human muscle.",
    Sucrose: "Sucrose is a carbohydrate, not a fermentation product."
  },
  hint: "Think of intense exercise."
},

{
  subject: "Biology",
  question: "Which enzyme breaks down hydrogen peroxide inside cells?",
  options: ["Catalase", "Pepsin", "Trypsin", "Maltase"],
  answer: "Catalase",
  explanation:
    "Catalase rapidly converts hydrogen peroxide into water and oxygen.",
  wrongExplanations: {
    Pepsin: "Pepsin digests proteins in the stomach.",
    Trypsin: "Trypsin digests proteins in the small intestine.",
    Maltase: "Maltase breaks maltose into glucose."
  },
  hint: "Its name comes from catalytic breakdown of peroxide."
},

{
  subject: "Biology",
  question: "Which cells control the opening and closing of stomata?",
  options: ["Guard cells", "Companion cells", "Sieve tube cells", "Root hair cells"],
  answer: "Guard cells",
  explanation:
    "Changes in guard-cell turgidity regulate the opening and closing of stomatal pores.",
  wrongExplanations: {
    "Companion cells": "Companion cells support phloem sieve-tube elements.",
    "Sieve tube cells": "Sieve tubes transport organic food.",
    "Root hair cells": "Root hair cells absorb water and minerals."
  },
  hint: "They surround each stomatal pore."
},

{
  subject: "Biology",
  question: "The loss of water vapour from aerial parts of plants is called:",
  options: ["Transpiration", "Respiration", "Guttation", "Translocation"],
  answer: "Transpiration",
  explanation:
    "Transpiration is the loss of water as vapour, mainly through stomata.",
  wrongExplanations: {
    Respiration: "Respiration releases energy from organic molecules.",
    Guttation: "Guttation is the loss of liquid water droplets.",
    Translocation: "Translocation refers mainly to movement of organic substances through phloem."
  },
  hint: "This process helps create transpiration pull."
},

{
  subject: "Biology",
  question: "Loss of liquid water droplets from leaf margins is called:",
  options: ["Guttation", "Transpiration", "Diffusion", "Plasmolysis"],
  answer: "Guttation",
  explanation:
    "Guttation is the exudation of liquid water through hydathodes, often at leaf margins.",
  wrongExplanations: {
    Transpiration: "Transpiration is mainly loss of water vapour.",
    Diffusion: "Diffusion is movement of particles down a concentration gradient.",
    Plasmolysis: "Plasmolysis is shrinkage of the cell contents in a hypertonic solution."
  },
  hint: "This produces visible droplets rather than vapour."
},

{
  subject: "Biology",
  question: "Which plant tissue is mainly responsible for increase in length of roots and shoots?",
  options: ["Apical meristem", "Lateral meristem", "Permanent tissue", "Cork"],
  answer: "Apical meristem",
  explanation:
    "Apical meristems at root and shoot tips produce primary growth and increase plant length.",
  wrongExplanations: {
    "Lateral meristem": "Lateral meristems mainly increase thickness.",
    "Permanent tissue": "Permanent tissues are differentiated and generally do not drive primary elongation.",
    Cork: "Cork is protective tissue."
  },
  hint: "Think of the growing tips."
},

{
  subject: "Biology",
  question: "Secondary growth in dicot stems is mainly produced by:",
  options: ["Lateral meristems", "Apical meristems only", "Root hairs", "Stomata"],
  answer: "Lateral meristems",
  explanation:
    "Vascular cambium and cork cambium are lateral meristems responsible for increase in girth.",
  wrongExplanations: {
    "Apical meristems only": "Apical meristems mainly increase length.",
    "Root hairs": "Root hairs absorb water and minerals.",
    Stomata: "Stomata regulate gas exchange and transpiration."
  },
  hint: "Secondary growth means increase in thickness."
},

{
  subject: "Biology",
  question: "Which floral part produces pollen grains?",
  options: ["Anther", "Stigma", "Ovary", "Sepal"],
  answer: "Anther",
  explanation:
    "Pollen grains develop within pollen sacs located in the anther.",
  wrongExplanations: {
    Stigma: "The stigma receives pollen.",
    Ovary: "The ovary contains ovules.",
    Sepal: "Sepals protect the flower bud."
  },
  hint: "It is part of the stamen."
},

{
  subject: "Biology",
  question: "The receptive surface for pollen grains in a flower is the:",
  options: ["Stigma", "Anther", "Filament", "Petal"],
  answer: "Stigma",
  explanation:
    "The stigma is adapted to receive pollen grains during pollination.",
  wrongExplanations: {
    Anther: "The anther produces pollen.",
    Filament: "The filament supports the anther.",
    Petal: "Petals mainly attract pollinators."
  },
  hint: "It is the upper part of the carpel."
},

{
  subject: "Biology",
  question: "Transfer of pollen from the anther to the stigma is called:",
  options: ["Pollination", "Fertilization", "Germination", "Sporulation"],
  answer: "Pollination",
  explanation:
    "Pollination is the transfer of pollen grains from anther to stigma.",
  wrongExplanations: {
    Fertilization: "Fertilization is fusion of male and female gametes.",
    Germination: "Germination is the beginning of seed growth.",
    Sporulation: "Sporulation refers to formation of spores."
  },
  hint: "It occurs before fertilization."
},

{
  subject: "Biology",
  question: "Which organism is commonly used in bread and alcohol fermentation?",
  options: ["Saccharomyces cerevisiae", "Plasmodium", "Rhizopus only", "Amoeba"],
  answer: "Saccharomyces cerevisiae",
  explanation:
    "Saccharomyces cerevisiae is yeast widely used in baking and alcoholic fermentation.",
  wrongExplanations: {
    Plasmodium: "Plasmodium is the parasite causing malaria.",
    "Rhizopus only": "Rhizopus is a mould and is not the standard baker's yeast.",
    Amoeba: "Amoeba is a protozoan."
  },
  hint: "Think baker's yeast."
},

{
  subject: "Biology",
  question: "Malaria is caused by a parasite belonging to the genus:",
  options: ["Plasmodium", "Salmonella", "Trypanosoma only", "Aspergillus"],
  answer: "Plasmodium",
  explanation:
    "Malaria is caused by protozoan parasites of the genus Plasmodium.",
  wrongExplanations: {
    Salmonella: "Salmonella is a bacterial genus.",
    "Trypanosoma only": "Trypanosoma causes diseases such as sleeping sickness.",
    Aspergillus: "Aspergillus is a fungal genus."
  },
  hint: "Female Anopheles mosquitoes transmit it."
},

{
  subject: "Biology",
  question: "The vector that transmits malaria to humans is the:",
  options: [
    "Female Anopheles mosquito",
    "Male Anopheles mosquito",
    "Housefly",
    "Tsetse fly"
  ],
  answer: "Female Anopheles mosquito",
  explanation:
    "Female Anopheles mosquitoes transmit Plasmodium parasites while taking blood meals.",
  wrongExplanations: {
    "Male Anopheles mosquito": "Male mosquitoes do not take blood meals.",
    Housefly: "Houseflies can mechanically transmit pathogens but do not transmit malaria.",
    "Tsetse fly": "Tsetse flies transmit African trypanosomiasis."
  },
  hint: "Only the blood-feeding sex transmits malaria."
},

{
  subject: "Biology",
  question: "AIDS is caused by:",
  options: ["HIV", "HBV", "Plasmodium", "Salmonella"],
  answer: "HIV",
  explanation:
    "Acquired Immunodeficiency Syndrome is caused by Human Immunodeficiency Virus.",
  wrongExplanations: {
    HBV: "HBV causes hepatitis B.",
    Plasmodium: "Plasmodium causes malaria.",
    Salmonella: "Some Salmonella species cause typhoid and foodborne disease."
  },
  hint: "The abbreviation begins with Human Immunodeficiency."
},

{
  subject: "Biology",
  question: "HIV primarily attacks which immune cells?",
  options: ["CD4+ T helper cells", "Red blood cells", "Platelets", "Neurons only"],
  answer: "CD4+ T helper cells",
  explanation:
    "HIV targets cells expressing CD4, especially helper T lymphocytes.",
  wrongExplanations: {
    "Red blood cells": "Mature red blood cells are not the main targets of HIV.",
    Platelets: "Platelets mainly function in clotting.",
    "Neurons only": "HIV does not primarily target neurons."
  },
  hint: "These cells coordinate many immune responses."
},

{
  subject: "Biology",
  question: "Vaccination generally produces:",
  options: ["Active acquired immunity", "Passive acquired immunity only", "No immune memory", "Genetic mutation only"],
  answer: "Active acquired immunity",
  explanation:
    "Vaccines stimulate the person's own immune system to produce immune responses and memory cells.",
  wrongExplanations: {
    "Passive acquired immunity only": "Passive immunity involves receiving ready-made antibodies.",
    "No immune memory": "Many vaccines are designed to generate immunological memory.",
    "Genetic mutation only": "Vaccination does not work primarily by causing mutation."
  },
  hint: "The body makes its own antibodies after exposure to antigen."
},

{
  subject: "Biology",
  question: "Ready-made antibodies transferred from another source provide:",
  options: ["Passive immunity", "Active immunity", "Autoimmunity", "Allergy only"],
  answer: "Passive immunity",
  explanation:
    "Passive immunity results from receiving preformed antibodies rather than producing them through one's own immune response.",
  wrongExplanations: {
    "Active immunity": "Active immunity requires the person's own immune response.",
    Autoimmunity: "Autoimmunity is an immune response against self-antigens.",
    "Allergy only": "Allergy is an exaggerated immune response to normally harmless substances."
  },
  hint: "Antibodies are received, not produced."
},

{
  subject: "Chemistry",
  question: "The ideal gas equation is:",
  options: ["PV = nRT", "P = IV", "V = IR", "E = mc²"],
  answer: "PV = nRT",
  explanation:
    "The ideal gas equation relates pressure, volume, amount of gas and absolute temperature.",
  wrongExplanations: {
    "P = IV": "This is an electrical power expression.",
    "V = IR": "This is Ohm's law.",
    "E = mc²": "This is the mass-energy relation."
  },
  hint: "Pressure × volume equals moles × gas constant × temperature."
},

{
  subject: "Chemistry",
  question: "At constant pressure, the volume of a fixed amount of gas is directly proportional to its absolute temperature. This is:",
  options: ["Charles's law", "Boyle's law", "Dalton's law", "Henry's law"],
  answer: "Charles's law",
  explanation:
    "Charles's law states that V is directly proportional to absolute temperature at constant pressure.",
  wrongExplanations: {
    "Boyle's law": "Boyle's law relates pressure and volume at constant temperature.",
    "Dalton's law": "Dalton's law concerns partial pressures of gases.",
    "Henry's law": "Henry's law relates gas solubility to pressure."
  },
  hint: "Volume rises as temperature rises."
},

{
  subject: "Chemistry",
  question: "Dalton's law states that the total pressure of a mixture of non-reacting gases equals:",
  options: [
    "The sum of their partial pressures",
    "The product of their pressures",
    "The lowest partial pressure",
    "Zero"
  ],
  answer: "The sum of their partial pressures",
  explanation:
    "Dalton's law states that total pressure is the sum of the partial pressures of all component gases.",
  wrongExplanations: {
    "The product of their pressures": "Partial pressures are added, not multiplied.",
    "The lowest partial pressure": "Total pressure includes contributions from every gas.",
    Zero: "A gas mixture does not generally have zero pressure."
  },
  hint: "Ptotal = P1 + P2 + ..."
},

{
  subject: "Chemistry",
  question: "Henry's law relates the solubility of a gas in a liquid to:",
  options: ["Partial pressure of the gas", "Atomic number", "Colour of the liquid", "Mass number"],
  answer: "Partial pressure of the gas",
  explanation:
    "At constant temperature, gas solubility is related to its partial pressure above the solution.",
  wrongExplanations: {
    "Atomic number": "Atomic number does not define gas solubility.",
    "Colour of the liquid": "Colour is not the governing variable in Henry's law.",
    "Mass number": "Mass number is unrelated."
  },
  hint: "Higher gas pressure generally increases dissolved gas."
},

{
  subject: "Chemistry",
  question: "Which intermolecular force is especially important between water molecules?",
  options: ["Hydrogen bonding", "Metallic bonding", "Ionic bonding only", "Nuclear force"],
  answer: "Hydrogen bonding",
  explanation:
    "Strong intermolecular hydrogen bonding occurs because hydrogen is bonded to electronegative oxygen.",
  wrongExplanations: {
    "Metallic bonding": "Metallic bonding occurs in metals.",
    "Ionic bonding only": "Water is a covalent molecular substance.",
    "Nuclear force": "Nuclear forces act within atomic nuclei."
  },
  hint: "This helps explain water's unusually high boiling point."
},

{
  subject: "Chemistry",
  question: "Which molecule has a bent molecular geometry?",
  options: ["H2O", "CO2", "BeCl2", "CH4"],
  answer: "H2O",
  explanation:
    "Water has two bonding pairs and two lone pairs around oxygen, producing a bent molecular shape.",
  wrongExplanations: {
    CO2: "Carbon dioxide is linear.",
    BeCl2: "Gaseous BeCl2 is commonly treated as linear.",
    CH4: "Methane is tetrahedral."
  },
  hint: "Lone pairs on oxygen change the shape."
},

{
  subject: "Chemistry",
  question: "The molecular geometry of carbon dioxide is:",
  options: ["Linear", "Bent", "Tetrahedral", "Trigonal pyramidal"],
  answer: "Linear",
  explanation:
    "Carbon dioxide has two regions of electron density around carbon and a bond angle of 180°.",
  wrongExplanations: {
    Bent: "CO2 has no lone pair on the central carbon causing bending.",
    Tetrahedral: "Tetrahedral geometry requires four electron regions.",
    "Trigonal pyramidal": "This geometry commonly occurs with three bonds and one lone pair."
  },
  hint: "O=C=O."
},

{
  subject: "Chemistry",
  question: "The shape of ammonia, NH3, is:",
  options: ["Trigonal pyramidal", "Trigonal planar", "Linear", "Tetrahedral molecular shape"],
  answer: "Trigonal pyramidal",
  explanation:
    "NH3 contains three N-H bonds and one lone pair, giving a trigonal pyramidal molecular shape.",
  wrongExplanations: {
    "Trigonal planar": "The lone pair pushes the bonds out of a planar arrangement.",
    Linear: "Three bonds around nitrogen cannot produce a simple linear geometry.",
    "Tetrahedral molecular shape": "The electron-pair geometry is tetrahedral, but the molecular shape is trigonal pyramidal."
  },
  hint: "Three bonds plus one lone pair."
},

{
  subject: "Chemistry",
  question: "Which substance is amphoteric?",
  options: ["Aluminium oxide", "Sodium oxide", "Sulphur trioxide", "Hydrochloric acid"],
  answer: "Aluminium oxide",
  explanation:
    "Aluminium oxide reacts with both acids and bases and is therefore amphoteric.",
  wrongExplanations: {
    "Sodium oxide": "Sodium oxide is strongly basic.",
    "Sulphur trioxide": "Sulphur trioxide is an acidic oxide.",
    "Hydrochloric acid": "Hydrochloric acid is an acid rather than an amphoteric oxide."
  },
  hint: "It can react with both acids and bases."
},

{
  subject: "Chemistry",
  question: "Which oxide is strongly basic?",
  options: ["Na2O", "CO2", "SO3", "NO2"],
  answer: "Na2O",
  explanation:
    "Sodium oxide is a basic oxide and forms sodium hydroxide with water.",
  wrongExplanations: {
    CO2: "Carbon dioxide is an acidic oxide.",
    SO3: "Sulphur trioxide is an acidic oxide.",
    NO2: "Nitrogen dioxide behaves as an acidic oxide."
  },
  hint: "Metal oxides of highly electropositive metals are often basic."
},

{
  subject: "Chemistry",
  question: "Which element shows the strongest metallic character among these?",
  options: ["Sodium", "Chlorine", "Oxygen", "Fluorine"],
  answer: "Sodium",
  explanation:
    "Sodium readily loses an electron and has strong metallic character.",
  wrongExplanations: {
    Chlorine: "Chlorine is a non-metal.",
    Oxygen: "Oxygen is a non-metal.",
    Fluorine: "Fluorine is a highly electronegative non-metal."
  },
  hint: "Metallic character is strongest toward the left of the periodic table."
},

{
  subject: "Chemistry",
  question: "Which alkali metal ion is mainly responsible for the yellow colour in a flame test?",
  options: ["Sodium", "Potassium", "Lithium", "Calcium"],
  answer: "Sodium",
  explanation:
    "Sodium compounds produce an intense yellow flame.",
  wrongExplanations: {
    Potassium: "Potassium commonly gives a lilac flame.",
    Lithium: "Lithium gives a crimson-red flame.",
    Calcium: "Calcium gives a brick-red or orange-red flame."
  },
  hint: "Common salt gives a strong yellow flame."
},

{
  subject: "Chemistry",
  question: "Which gas is released when calcium carbonate reacts with dilute hydrochloric acid?",
  options: ["Carbon dioxide", "Hydrogen", "Oxygen", "Nitrogen"],
  answer: "Carbon dioxide",
  explanation:
    "Acid-carbonate reactions produce a salt, water and carbon dioxide.",
  wrongExplanations: {
    Hydrogen: "Hydrogen is commonly produced when acids react with suitable metals.",
    Oxygen: "Oxygen is not the usual product of acid-carbonate reactions.",
    Nitrogen: "Nitrogen is not produced."
  },
  hint: "Acid + carbonate → salt + water + ?"
},

{
  subject: "Chemistry",
  question: "Which reagent is commonly used to test for carbon dioxide gas?",
  options: ["Limewater", "Bromine water", "Tollens' reagent", "Fehling's solution"],
  answer: "Limewater",
  explanation:
    "Carbon dioxide turns limewater milky due to formation of calcium carbonate.",
  wrongExplanations: {
    "Bromine water": "Bromine water is commonly used to test unsaturation.",
    "Tollens' reagent": "Tollens' reagent tests aldehydes.",
    "Fehling's solution": "Fehling's solution is used for certain reducing compounds."
  },
  hint: "The solution becomes milky."
},

{
  subject: "Chemistry",
  question: "Bromine water is decolourised by:",
  options: ["Ethene", "Ethane", "Methane", "Neon"],
  answer: "Ethene",
  explanation:
    "Ethene undergoes addition with bromine across its carbon-carbon double bond and decolourises bromine water.",
  wrongExplanations: {
    Ethane: "Ethane is saturated and does not readily decolourise bromine water under ordinary test conditions.",
    Methane: "Methane does not undergo this addition reaction.",
    Neon: "Neon is chemically very unreactive."
  },
  hint: "The test detects carbon-carbon unsaturation."
},

{
  subject: "Chemistry",
  question: "Which polymer is formed from vinyl chloride monomers?",
  options: ["PVC", "Polyethylene", "Teflon", "Nylon-6"],
  answer: "PVC",
  explanation:
    "Polyvinyl chloride is formed by polymerization of vinyl chloride.",
  wrongExplanations: {
    Polyethylene: "Polyethylene is formed from ethene.",
    Teflon: "Teflon is formed from tetrafluoroethene.",
    "Nylon-6": "Nylon-6 is a polyamide formed from caprolactam."
  },
  hint: "The monomer name appears in the polymer name."
},

{
  subject: "Chemistry",
  question: "Teflon is chemically known as:",
  options: ["Polytetrafluoroethylene", "Polyvinyl chloride", "Polystyrene", "Polypropylene"],
  answer: "Polytetrafluoroethylene",
  explanation:
    "Teflon is PTFE, formed from tetrafluoroethylene monomers.",
  wrongExplanations: {
    "Polyvinyl chloride": "PVC is a different polymer.",
    Polystyrene: "Polystyrene is formed from styrene.",
    Polypropylene: "Polypropylene is formed from propene."
  },
  hint: "The abbreviation is PTFE."
},

{
  subject: "Chemistry",
  question: "Which biomolecule is the main long-term energy-storage material in animals?",
  options: ["Lipids", "DNA", "Mineral salts", "RNA only"],
  answer: "Lipids",
  explanation:
    "Lipids store large amounts of energy and serve as important long-term energy reserves.",
  wrongExplanations: {
    DNA: "DNA primarily stores genetic information.",
    "Mineral salts": "Mineral salts do not function as major energy reserves.",
    "RNA only": "RNA primarily participates in gene expression."
  },
  hint: "Fat stores more energy per gram than carbohydrate."
},

{
  subject: "Chemistry",
  question: "Enzymes are mostly:",
  options: ["Proteins", "Lipids", "Minerals", "Simple sugars"],
  answer: "Proteins",
  explanation:
    "Most enzymes are proteins, although some RNA molecules also have catalytic activity.",
  wrongExplanations: {
    Lipids: "Lipids are not the main class of biological catalysts.",
    Minerals: "Some minerals act as cofactors but are not enzymes themselves.",
    "Simple sugars": "Simple sugars are carbohydrates, not the usual biological catalysts."
  },
  hint: "They are biological catalysts made mainly from amino acids."
},

{
  subject: "Physics",
  question: "The RMS value of alternating current with peak value I0 is:",
  options: ["I0/√2", "I0√2", "I0/2", "2I0"],
  answer: "I0/√2",
  explanation:
    "For sinusoidal alternating current, Irms = I0/√2.",
  wrongExplanations: {
    "I0√2": "This would be larger than the peak value and is incorrect.",
    "I0/2": "The RMS factor is 1/√2, not 1/2.",
    "2I0": "The RMS current cannot exceed the peak current in this way."
  },
  hint: "RMS is about 0.707 times the peak value."
},

{
  subject: "Physics",
  question: "The average value of a sinusoidal alternating current over one complete cycle is:",
  options: ["Zero", "I0", "I0/√2", "Infinite"],
  answer: "Zero",
  explanation:
    "Positive and negative halves of a sinusoidal AC waveform cancel over a complete cycle.",
  wrongExplanations: {
    I0: "I0 is the peak value.",
    "I0/√2": "This is the RMS value.",
    Infinite: "Alternating current remains finite."
  },
  hint: "Equal positive and negative halves cancel."
},

{
  subject: "Physics",
  question: "In a purely resistive AC circuit, current and voltage are:",
  options: ["In phase", "90° out of phase", "180° out of phase", "Unrelated"],
  answer: "In phase",
  explanation:
    "For a pure resistor, current reaches its maximum and minimum at the same time as voltage.",
  wrongExplanations: {
    "90° out of phase": "A 90° phase difference occurs in ideal inductive or capacitive circuits.",
    "180° out of phase": "Current is not opposite in phase in a pure resistor.",
    Unrelated: "Ohm's law links current and voltage."
  },
  hint: "A resistor introduces no phase shift."
},

{
  subject: "Physics",
  question: "In a pure inductive AC circuit, current:",
  options: [
    "Lags voltage by 90°",
    "Leads voltage by 90°",
    "Is exactly in phase",
    "Is always zero"
  ],
  answer: "Lags voltage by 90°",
  explanation:
    "In an ideal inductor, current lags the applied voltage by one-quarter cycle.",
  wrongExplanations: {
    "Leads voltage by 90°": "Current leads voltage in a pure capacitive circuit.",
    "Is exactly in phase": "That is true for a pure resistor.",
    "Is always zero": "Alternating current can flow through an inductor."
  },
  hint: "Remember: in an inductor, current lags."
},

{
  subject: "Physics",
  question: "In a pure capacitive AC circuit, current:",
  options: [
    "Leads voltage by 90°",
    "Lags voltage by 90°",
    "Is in phase",
    "Never flows"
  ],
  answer: "Leads voltage by 90°",
  explanation:
    "In an ideal capacitor, current leads voltage by 90°.",
  wrongExplanations: {
    "Lags voltage by 90°": "This describes a pure inductor.",
    "Is in phase": "This describes a pure resistor.",
    "Never flows": "Alternating current can pass through a capacitive circuit."
  },
  hint: "Capacitor: current comes first."
},

{
  subject: "Physics",
  question: "A step-up transformer increases:",
  options: ["Voltage", "Frequency", "Power ideally", "Charge of electrons"],
  answer: "Voltage",
  explanation:
    "A step-up transformer has more secondary turns than primary turns and increases voltage.",
  wrongExplanations: {
    Frequency: "A transformer does not change the AC frequency.",
    "Power ideally": "In an ideal transformer, input and output power are equal.",
    "Charge of electrons": "Electron charge is a fundamental constant."
  },
  hint: "More secondary turns means higher secondary voltage."
},

{
  subject: "Physics",
  question: "For an ideal transformer, the ratio Vs/Vp equals:",
  options: ["Ns/Np", "Np/Ns", "Is/Ip", "Frequency ratio"],
  answer: "Ns/Np",
  explanation:
    "Transformer voltage ratio equals the ratio of secondary to primary turns.",
  wrongExplanations: {
    "Np/Ns": "This is the reciprocal of the voltage ratio.",
    "Is/Ip": "Current ratio is inversely related to turns ratio in an ideal transformer.",
    "Frequency ratio": "Frequency remains unchanged."
  },
  hint: "Voltage follows number of turns."
},

{
  subject: "Physics",
  question: "The focal length of a plane mirror is:",
  options: ["Infinite", "Zero", "One metre", "Negative one metre always"],
  answer: "Infinite",
  explanation:
    "A plane mirror can be considered a spherical mirror with infinite radius of curvature, giving infinite focal length.",
  wrongExplanations: {
    Zero: "A plane mirror does not have zero focal length.",
    "One metre": "Its focal length is not fixed at one metre.",
    "Negative one metre always": "There is no fixed finite focal length."
  },
  hint: "A plane mirror has infinite radius of curvature."
},

{
  subject: "Physics",
  question: "The image formed by a plane mirror is:",
  options: [
    "Virtual and erect",
    "Real and inverted",
    "Real and erect",
    "Always magnified"
  ],
  answer: "Virtual and erect",
  explanation:
    "A plane mirror forms a virtual, erect image of the same size as the object.",
  wrongExplanations: {
    "Real and inverted": "A plane mirror cannot project its image on a screen.",
    "Real and erect": "The image is not real.",
    "Always magnified": "Magnification is one."
  },
  hint: "You cannot project a normal mirror image onto a screen."
},

{
  subject: "Physics",
  question: "The magnification produced by a plane mirror is:",
  options: ["+1", "-1", "0", "+2"],
  answer: "+1",
  explanation:
    "A plane mirror forms an erect image equal in size to the object, so magnification is +1.",
  wrongExplanations: {
    "-1": "Negative magnification would indicate an inverted image.",
    "0": "The image has finite size.",
    "+2": "A plane mirror does not double image size."
  },
  hint: "Same size and erect."
},

{
  subject: "Physics",
  question: "Which mirror is commonly used by dentists to obtain a magnified image of teeth?",
  options: ["Concave mirror", "Convex mirror", "Plane mirror only", "Two-way mirror"],
  answer: "Concave mirror",
  explanation:
    "A concave mirror can produce a magnified upright virtual image when the object is within the focal length.",
  wrongExplanations: {
    "Convex mirror": "A convex mirror always forms a diminished virtual image.",
    "Plane mirror only": "A plane mirror does not magnify.",
    "Two-way mirror": "A two-way mirror is not used for optical magnification."
  },
  hint: "It can magnify nearby objects."
},

{
  subject: "Physics",
  question: "The power of a lens is measured in:",
  options: ["Dioptre", "Tesla", "Pascal", "Weber"],
  answer: "Dioptre",
  explanation:
    "Lens power is the reciprocal of focal length in metres and is measured in dioptres.",
  wrongExplanations: {
    Tesla: "Tesla measures magnetic flux density.",
    Pascal: "Pascal measures pressure.",
    Weber: "Weber measures magnetic flux."
  },
  hint: "P = 1/f, where f is in metres."
},

{
  subject: "Physics",
  question: "A lens of focal length 0.5 m has a power of:",
  options: ["2 D", "0.5 D", "5 D", "20 D"],
  answer: "2 D",
  explanation:
    "Power P = 1/f = 1/0.5 = 2 dioptres.",
  wrongExplanations: {
    "0.5 D": "This incorrectly uses focal length directly as power.",
    "5 D": "The reciprocal of 0.5 is 2.",
    "20 D": "That would correspond to a focal length of 0.05 m."
  },
  hint: "Use P = 1/f."
},

{
  subject: "Physics",
  question: "The minimum frequency required to cause photoelectric emission from a metal is called:",
  options: ["Threshold frequency", "Resonant frequency", "Natural frequency", "Carrier frequency"],
  answer: "Threshold frequency",
  explanation:
    "Below the threshold frequency, photons do not have enough energy to overcome the metal's work function.",
  wrongExplanations: {
    "Resonant frequency": "Resonance concerns maximum response of an oscillating system.",
    "Natural frequency": "Natural frequency is associated with free oscillation.",
    "Carrier frequency": "Carrier frequency is used in communication systems."
  },
  hint: "Below this frequency, no photoelectrons are emitted."
},

{
  subject: "Physics",
  question: "The minimum energy required to remove an electron from a metal surface is called:",
  options: ["Work function", "Binding energy per nucleon only", "Ionization current", "Stopping current"],
  answer: "Work function",
  explanation:
    "The work function is the minimum energy needed to liberate an electron from the metal surface.",
  wrongExplanations: {
    "Binding energy per nucleon only": "That term is mainly used in nuclear physics.",
    "Ionization current": "Current is not an energy requirement.",
    "Stopping current": "Stopping potential, not stopping current, is relevant to photoelectrons."
  },
  hint: "Einstein's equation uses φ for this quantity."
},

{
  subject: "Physics",
  question: "The stopping potential in the photoelectric effect is used to determine the maximum:",
  options: [
    "Kinetic energy of photoelectrons",
    "Number of neutrons",
    "Wavelength of the metal",
    "Mass of the nucleus"
  ],
  answer: "Kinetic energy of photoelectrons",
  explanation:
    "The maximum kinetic energy is related to stopping potential by Kmax = eV0.",
  wrongExplanations: {
    "Number of neutrons": "Stopping potential does not measure nuclear composition.",
    "Wavelength of the metal": "Metals do not have a single wavelength measured this way.",
    "Mass of the nucleus": "Nuclear mass is unrelated."
  },
  hint: "Kmax = eV0."
},

{
  subject: "Physics",
  question: "The half-life of a radioactive sample is the time required for:",
  options: [
    "Half the original radioactive nuclei to decay",
    "All nuclei to decay",
    "The mass to double",
    "The temperature to halve"
  ],
  answer: "Half the original radioactive nuclei to decay",
  explanation:
    "After one half-life, half of the original undecayed radioactive nuclei remain.",
  wrongExplanations: {
    "All nuclei to decay": "Radioactive decay approaches zero statistically rather than finishing after one half-life.",
    "The mass to double": "Radioactive decay does not double sample mass.",
    "The temperature to halve": "Half-life is unrelated to temperature."
  },
  hint: "After one half-life, 50% remains."
},

{
  subject: "Physics",
  question: "After two half-lives, the fraction of an original radioactive sample remaining is:",
  options: ["1/4", "1/2", "3/4", "1/8"],
  answer: "1/4",
  explanation:
    "After one half-life 1/2 remains, and after two half-lives (1/2)² = 1/4 remains.",
  wrongExplanations: {
    "1/2": "This is the fraction after one half-life.",
    "3/4": "Decay does not remove only one quarter after two half-lives.",
    "1/8": "This is the fraction remaining after three half-lives."
  },
  hint: "Repeatedly divide by two."
},
{
  subject: "Physics",
  question: "The moment of inertia of a body depends on:",
  options: [
    "Mass distribution about the axis of rotation",
    "Angular velocity only",
    "Temperature only",
    "Colour of the body"
  ],
  answer: "Mass distribution about the axis of rotation",
  explanation:
    "Moment of inertia depends on how the mass of a body is distributed relative to the chosen axis.",
  wrongExplanations: {
    "Angular velocity only": "Moment of inertia is a property of mass distribution, not rotational speed.",
    "Temperature only": "Temperature is not its defining factor.",
    "Colour of the body": "Colour has no mechanical effect."
  },
  hint: "Rotational inertia depends on where the mass is located."
},

{
  subject: "Physics",
  question: "The rotational analogue of force is:",
  options: ["Torque", "Angular momentum", "Moment of inertia", "Power"],
  answer: "Torque",
  explanation:
    "Torque produces angular acceleration just as force produces linear acceleration.",
  wrongExplanations: {
    "Angular momentum": "Angular momentum is analogous to linear momentum.",
    "Moment of inertia": "Moment of inertia is analogous to mass.",
    Power: "Power is the rate of doing work."
  },
  hint: "F = ma corresponds to τ = Iα."
},

{
  subject: "Physics",
  question: "The rotational analogue of mass is:",
  options: ["Moment of inertia", "Torque", "Angular velocity", "Angular momentum"],
  answer: "Moment of inertia",
  explanation:
    "Moment of inertia measures resistance to angular acceleration and plays a role similar to mass in linear motion.",
  wrongExplanations: {
    Torque: "Torque is analogous to force.",
    "Angular velocity": "Angular velocity describes rotational speed.",
    "Angular momentum": "Angular momentum corresponds to linear momentum."
  },
  hint: "It represents rotational inertia."
},

{
  subject: "Physics",
  question: "Angular momentum of a rigid body rotating about a fixed axis is:",
  options: ["L = Iω", "L = I/ω", "L = mgh", "L = qV"],
  answer: "L = Iω",
  explanation:
    "For rotation about a fixed principal axis, angular momentum equals moment of inertia multiplied by angular velocity.",
  wrongExplanations: {
    "L = I/ω": "Angular momentum increases rather than decreases with angular velocity for fixed I.",
    "L = mgh": "mgh is gravitational potential energy.",
    "L = qV": "qV represents electrical potential energy."
  },
  hint: "Compare linear momentum p = mv."
},

{
  subject: "Physics",
  question: "When no external torque acts on a system, its total:",
  options: ["Angular momentum is conserved", "Force becomes infinite", "Mass becomes zero", "Temperature must remain zero"],
  answer: "Angular momentum is conserved",
  explanation:
    "The law of conservation of angular momentum applies when the net external torque is zero.",
  wrongExplanations: {
    "Force becomes infinite": "Zero external torque does not imply infinite force.",
    "Mass becomes zero": "Mass is not destroyed.",
    "Temperature must remain zero": "Temperature is unrelated to this conservation law."
  },
  hint: "This explains why a skater spins faster after pulling in their arms."
},

{
  subject: "Physics",
  question: "A rotating skater pulls their arms inward. Their angular speed generally:",
  options: ["Increases", "Decreases", "Becomes zero", "Remains fixed in all cases"],
  answer: "Increases",
  explanation:
    "Pulling the arms inward decreases moment of inertia, so angular velocity increases to conserve angular momentum.",
  wrongExplanations: {
    Decreases: "A decrease in moment of inertia causes angular speed to increase when angular momentum is conserved.",
    "Becomes zero": "The skater continues rotating.",
    "Remains fixed in all cases": "Angular velocity changes when moment of inertia changes."
  },
  hint: "Iω remains approximately constant."
},

{
  subject: "Physics",
  question: "For pure rolling without slipping, the speed of the centre of mass is:",
  options: ["v = Rω", "v = R/ω", "v = ω/R", "v = Rω²"],
  answer: "v = Rω",
  explanation:
    "The rolling condition connects translational speed and angular speed through v = Rω.",
  wrongExplanations: {
    "v = R/ω": "This has incorrect dimensions.",
    "v = ω/R": "This also has incorrect dimensions for velocity.",
    "v = Rω²": "Pure rolling requires v = Rω."
  },
  hint: "Linear speed equals radius × angular speed."
},

{
  subject: "Physics",
  question: "The time period of a simple pendulum for small oscillations is:",
  options: ["2π√(L/g)", "2π√(g/L)", "L/g", "2πLg"],
  answer: "2π√(L/g)",
  explanation:
    "For small angular oscillations, the period of a simple pendulum is T = 2π√(L/g).",
  wrongExplanations: {
    "2π√(g/L)": "The ratio inside the square root is reversed.",
    "L/g": "This does not have dimensions of time.",
    "2πLg": "This is dimensionally incorrect."
  },
  hint: "Longer pendulum means longer period."
},

{
  subject: "Physics",
  question: "The time period of a simple pendulum is independent of its:",
  options: ["Mass of the bob", "Length", "Acceleration due to gravity", "Effective gravitational field"],
  answer: "Mass of the bob",
  explanation:
    "The simple pendulum period T = 2π√(L/g) contains length and gravity but not the bob's mass.",
  wrongExplanations: {
    Length: "Increasing length increases the period.",
    "Acceleration due to gravity": "The period depends inversely on the square root of g.",
    "Effective gravitational field": "Changes in effective gravity change the period."
  },
  hint: "Look at the pendulum formula."
},

{
  subject: "Physics",
  question: "In simple harmonic motion, acceleration is:",
  options: [
    "Proportional to displacement and opposite in direction",
    "Constant everywhere",
    "Always zero",
    "Proportional to velocity in the same direction"
  ],
  answer: "Proportional to displacement and opposite in direction",
  explanation:
    "SHM satisfies a = -ω²x, so acceleration is proportional to displacement and directed toward equilibrium.",
  wrongExplanations: {
    "Constant everywhere": "Acceleration changes with displacement.",
    "Always zero": "Acceleration is zero only at equilibrium.",
    "Proportional to velocity in the same direction": "The defining SHM relation involves displacement."
  },
  hint: "a = -ω²x."
},

{
  subject: "Physics",
  question: "In simple harmonic motion, the speed of the particle is maximum at the:",
  options: ["Mean position", "Extreme position", "Both extremes only", "Turning point only"],
  answer: "Mean position",
  explanation:
    "At the mean position, potential energy is minimum and kinetic energy and speed are maximum.",
  wrongExplanations: {
    "Extreme position": "The particle momentarily stops at an extreme.",
    "Both extremes only": "Speed is zero at both extremes.",
    "Turning point only": "Turning points are the extreme positions where velocity becomes zero."
  },
  hint: "It moves fastest while crossing equilibrium."
},

{
  subject: "Physics",
  question: "In simple harmonic motion, acceleration magnitude is maximum at the:",
  options: ["Extreme positions", "Mean position", "Every position equally", "Position of maximum speed"],
  answer: "Extreme positions",
  explanation:
    "Since |a| = ω²|x|, acceleration magnitude is greatest where displacement is maximum.",
  wrongExplanations: {
    "Mean position": "Acceleration is zero at the mean position.",
    "Every position equally": "Acceleration changes with displacement.",
    "Position of maximum speed": "Maximum speed occurs at the mean position, where acceleration is zero."
  },
  hint: "Maximum displacement gives maximum restoring acceleration."
},

{
  subject: "Physics",
  question: "Resonance occurs when the frequency of an external periodic force equals the system's:",
  options: ["Natural frequency", "Zero frequency", "Maximum possible speed", "Amplitude"],
  answer: "Natural frequency",
  explanation:
    "Resonance produces a large response when the driving frequency matches the natural frequency of the system.",
  wrongExplanations: {
    "Zero frequency": "A static force does not produce ordinary resonance.",
    "Maximum possible speed": "Speed is not a frequency.",
    Amplitude: "Amplitude describes displacement size, not frequency."
  },
  hint: "Matching frequencies produce resonance."
},

{
  subject: "Physics",
  question: "The first law of thermodynamics is essentially a statement of conservation of:",
  options: ["Energy", "Charge only", "Momentum only", "Mass number"],
  answer: "Energy",
  explanation:
    "The first law relates heat, work and internal energy and expresses conservation of energy in thermodynamic processes.",
  wrongExplanations: {
    "Charge only": "Charge conservation is a separate principle.",
    "Momentum only": "Momentum conservation is a mechanical principle.",
    "Mass number": "Mass number concerns nuclei."
  },
  hint: "Heat supplied becomes internal energy and/or work."
},

{
  subject: "Physics",
  question: "In an isothermal process for an ideal gas, which quantity remains constant?",
  options: ["Temperature", "Pressure", "Volume", "Internal energy for every substance"],
  answer: "Temperature",
  explanation:
    "An isothermal process occurs at constant temperature.",
  wrongExplanations: {
    Pressure: "Pressure may change during isothermal expansion or compression.",
    Volume: "Volume may also change.",
    "Internal energy for every substance": "The defining condition is constant temperature; the ideal-gas internal energy consequence should not be generalized to every substance."
  },
  hint: "Iso means same; thermal refers to temperature."
},

{
  subject: "Physics",
  question: "In an adiabatic process:",
  options: [
    "No heat is exchanged with the surroundings",
    "Temperature must always remain constant",
    "Pressure must remain constant",
    "Volume must remain constant"
  ],
  answer: "No heat is exchanged with the surroundings",
  explanation:
    "An adiabatic process is characterized by zero heat transfer between system and surroundings.",
  wrongExplanations: {
    "Temperature must always remain constant": "Temperature can change during an adiabatic process.",
    "Pressure must remain constant": "Pressure can change.",
    "Volume must remain constant": "Volume can change."
  },
  hint: "For an adiabatic process, Q = 0."
},

{
  subject: "Physics",
  question: "The efficiency of an ideal Carnot engine depends on:",
  options: [
    "Temperatures of the hot and cold reservoirs",
    "Colour of the engine",
    "Mass of the engine only",
    "Atmospheric pressure only"
  ],
  answer: "Temperatures of the hot and cold reservoirs",
  explanation:
    "Carnot efficiency is η = 1 - Tc/Th when temperatures are measured on an absolute scale.",
  wrongExplanations: {
    "Colour of the engine": "Colour does not determine thermodynamic efficiency.",
    "Mass of the engine only": "Carnot efficiency is not determined by engine mass.",
    "Atmospheric pressure only": "The ideal efficiency depends on reservoir temperatures."
  },
  hint: "η = 1 - Tc/Th."
},

{
  subject: "Physics",
  question: "According to the second law of thermodynamics, heat naturally flows from:",
  options: [
    "A hotter body to a colder body",
    "A colder body to a hotter body without external work",
    "Low mass to high mass",
    "Low pressure to high pressure only"
  ],
  answer: "A hotter body to a colder body",
  explanation:
    "Spontaneous heat transfer occurs from higher temperature to lower temperature.",
  wrongExplanations: {
    "A colder body to a hotter body without external work": "Reversing natural heat flow requires external work, as in a refrigerator.",
    "Low mass to high mass": "Heat flow is governed by temperature difference.",
    "Low pressure to high pressure only": "Pressure alone does not define spontaneous heat flow."
  },
  hint: "Hot tea cools in a room rather than becoming hotter by itself."
},

{
  subject: "Physics",
  question: "Gauss's law relates electric flux through a closed surface to:",
  options: [
    "Charge enclosed by the surface",
    "Total mass enclosed",
    "Magnetic field only",
    "Temperature inside"
  ],
  answer: "Charge enclosed by the surface",
  explanation:
    "Gauss's law states that net electric flux through a closed surface equals enclosed charge divided by permittivity of free space.",
  wrongExplanations: {
    "Total mass enclosed": "Mass is relevant to gravitation, not electric Gauss's law.",
    "Magnetic field only": "Electric Gauss's law concerns electric flux.",
    "Temperature inside": "Temperature does not determine electric flux."
  },
  hint: "Φ = Qenclosed/ε0."
},

{
  subject: "Physics",
  question: "The electric field inside a conductor in electrostatic equilibrium is:",
  options: ["Zero", "Infinite", "Always 9.8 N/C", "Equal to its surface potential"],
  answer: "Zero",
  explanation:
    "Free charges redistribute until the internal electric field of a conductor in electrostatic equilibrium becomes zero.",
  wrongExplanations: {
    Infinite: "The field is not infinite.",
    "Always 9.8 N/C": "9.8 is associated with gravitational acceleration near Earth.",
    "Equal to its surface potential": "Electric field and electric potential are different physical quantities."
  },
  hint: "Otherwise free charges would continue moving."
},

{
  subject: "Physics",
  question: "Excess electrostatic charge on an isolated conductor resides mainly on its:",
  options: ["Surface", "Centre only", "Entire volume uniformly in every case", "Nucleus"],
  answer: "Surface",
  explanation:
    "In electrostatic equilibrium, excess charge on a conductor resides on its surface.",
  wrongExplanations: {
    "Centre only": "Excess charge is not concentrated at the centre.",
    "Entire volume uniformly in every case": "Free excess charge moves to the surface.",
    Nucleus: "The statement concerns macroscopic conductor charge distribution."
  },
  hint: "Free charges repel each other as far apart as possible."
},

{
  subject: "Physics",
  question: "A charged particle entering a uniform magnetic field perpendicular to the field follows a:",
  options: ["Circular path", "Straight path", "Parabolic path due only to magnetism", "Stationary path"],
  answer: "Circular path",
  explanation:
    "The magnetic force remains perpendicular to velocity and acts as a centripetal force.",
  wrongExplanations: {
    "Straight path": "A perpendicular magnetic force continuously changes the direction of motion.",
    "Parabolic path due only to magnetism": "A uniform perpendicular magnetic field produces circular motion.",
    "Stationary path": "The particle continues moving."
  },
  hint: "Magnetic force changes direction, not speed."
},

{
  subject: "Physics",
  question: "The radius of the circular path of a charged particle moving perpendicular to a magnetic field is:",
  options: ["mv/qB", "qB/mv", "qvB", "mB/qv"],
  answer: "mv/qB",
  explanation:
    "Equating magnetic force qvB to centripetal force mv²/r gives r = mv/qB.",
  wrongExplanations: {
    "qB/mv": "This is the reciprocal form and has incorrect dimensions for radius.",
    qvB: "qvB is the magnetic force magnitude.",
    "mB/qv": "The variables are arranged incorrectly."
  },
  hint: "Set qvB = mv²/r."
},

{
  subject: "Physics",
  question: "Lenz's law states that induced current flows in a direction that:",
  options: [
    "Opposes the change in magnetic flux producing it",
    "Always increases the original flux",
    "Has no relation to magnetic flux",
    "Destroys conservation of energy"
  ],
  answer: "Opposes the change in magnetic flux producing it",
  explanation:
    "Lenz's law gives the direction of induced current such that its magnetic effect opposes the change causing it.",
  wrongExplanations: {
    "Always increases the original flux": "The induced effect opposes the change rather than simply increasing it.",
    "Has no relation to magnetic flux": "The law directly concerns changing magnetic flux.",
    "Destroys conservation of energy": "Lenz's law is consistent with conservation of energy."
  },
  hint: "Nature resists the change."
},

{
  subject: "Physics",
  question: "The phenomenon of producing an emf by changing magnetic flux is called:",
  options: ["Electromagnetic induction", "Electrostatic shielding", "Resonance", "Diffraction"],
  answer: "Electromagnetic induction",
  explanation:
    "A changing magnetic flux through a circuit induces an electromotive force.",
  wrongExplanations: {
    "Electrostatic shielding": "Shielding protects regions from external electric fields.",
    Resonance: "Resonance involves matching frequencies.",
    Diffraction: "Diffraction is wave bending and spreading."
  },
  hint: "Faraday is strongly associated with this phenomenon."
},

{
  subject: "Physics",
  question: "The SI unit of magnetic flux is:",
  options: ["Weber", "Tesla", "Henry", "Coulomb"],
  answer: "Weber",
  explanation:
    "Magnetic flux is measured in webers.",
  wrongExplanations: {
    Tesla: "Tesla measures magnetic flux density.",
    Henry: "Henry measures inductance.",
    Coulomb: "Coulomb measures electric charge."
  },
  hint: "Wb."
},

{
  subject: "Physics",
  question: "The phenomenon in which a changing current in a coil induces an emf in the same coil is called:",
  options: ["Self-induction", "Mutual induction", "Rectification", "Polarization"],
  answer: "Self-induction",
  explanation:
    "A changing current changes the coil's own magnetic flux and induces an emf in that same coil.",
  wrongExplanations: {
    "Mutual induction": "Mutual induction occurs between different nearby coils.",
    Rectification: "Rectification converts alternating current to unidirectional current.",
    Polarization: "Polarization concerns wave orientation."
  },
  hint: "The coil induces emf in itself."
},

{
  subject: "Physics",
  question: "The SI unit of inductance is:",
  options: ["Henry", "Farad", "Weber per second only", "Ohm metre"],
  answer: "Henry",
  explanation:
    "The SI unit of self-inductance and mutual inductance is the henry.",
  wrongExplanations: {
    Farad: "Farad measures capacitance.",
    "Weber per second only": "Weber per second is equivalent to a volt, not the named SI unit of inductance.",
    "Ohm metre": "Ohm metre is a unit of resistivity."
  },
  hint: "Named after Joseph Henry."
},

{
  subject: "Physics",
  question: "In Young's double-slit experiment, fringe width is directly proportional to:",
  options: ["Wavelength", "Slit separation", "Inverse screen distance", "Frequency"],
  answer: "Wavelength",
  explanation:
    "Fringe width is β = λD/d, so it increases with wavelength.",
  wrongExplanations: {
    "Slit separation": "Fringe width is inversely proportional to slit separation.",
    "Inverse screen distance": "Fringe width is directly proportional to screen distance.",
    Frequency: "For fixed wave speed, larger frequency means shorter wavelength and smaller fringe width."
  },
  hint: "β = λD/d."
},

{
  subject: "Physics",
  question: "The bending of light around the edges of a narrow obstacle or aperture is called:",
  options: ["Diffraction", "Refraction", "Reflection", "Polarization"],
  answer: "Diffraction",
  explanation:
    "Diffraction is the spreading or bending of waves when they encounter apertures or obstacles comparable to their wavelength.",
  wrongExplanations: {
    Refraction: "Refraction is bending caused by a change in wave speed between media.",
    Reflection: "Reflection is the return of a wave from a boundary.",
    Polarization: "Polarization concerns the orientation of transverse oscillations."
  },
  hint: "It becomes important when the opening is comparable to wavelength."
},

{
  subject: "Physics",
  question: "Polarization of light provides evidence that light waves are:",
  options: ["Transverse", "Longitudinal only", "Stationary particles only", "Mechanical sound waves"],
  answer: "Transverse",
  explanation:
    "Only transverse waves can be polarized, so polarization demonstrates the transverse nature of light.",
  wrongExplanations: {
    "Longitudinal only": "Ordinary longitudinal waves cannot be polarized in this manner.",
    "Stationary particles only": "Polarization is a wave phenomenon.",
    "Mechanical sound waves": "Light is electromagnetic, not a mechanical sound wave."
  },
  hint: "Only one major type of wave can be polarized."
},
{
  subject: "Physics",
  question: "Which device converts light energy directly into electrical energy?",
  options: ["Solar cell", "Transformer", "Resistor", "Inductor"],
  answer: "Solar cell",
  explanation:
    "A photovoltaic solar cell converts incident light directly into electrical energy.",
  wrongExplanations: {
    Transformer: "A transformer changes AC voltage through electromagnetic induction.",
    Resistor: "A resistor dissipates electrical energy mainly as heat.",
    Inductor: "An inductor stores energy in a magnetic field."
  },
  hint: "Photovoltaic effect."
},

{
  subject: "Physics",
  question: "An LED emits light when it is:",
  options: ["Forward biased", "Reverse biased strongly", "Disconnected", "Placed in vacuum only"],
  answer: "Forward biased",
  explanation:
    "In forward bias, electron-hole recombination in an LED releases energy as photons.",
  wrongExplanations: {
    "Reverse biased strongly": "LEDs are normally operated in forward bias.",
    Disconnected: "No current flows when the circuit is open.",
    "Placed in vacuum only": "LED operation does not require a vacuum."
  },
  hint: "Current must flow through the p-n junction normally."
},

{
  subject: "Physics",
  question: "Which semiconductor device is commonly used to detect light?",
  options: ["Photodiode", "Ordinary resistor", "Transformer", "Inductor"],
  answer: "Photodiode",
  explanation:
    "A photodiode converts incident light into an electrical response and is widely used as a light detector.",
  wrongExplanations: {
    "Ordinary resistor": "A resistor is not designed primarily as a light detector.",
    Transformer: "A transformer changes AC voltage.",
    Inductor: "An inductor responds primarily to changing current and magnetic fields."
  },
  hint: "Its name combines photo and diode."
}
];


const subjects = [
  "All",
  ...Array.from(new Set(questions.map((q) => q.subject))),
];

export default function NeetPage() {
  const [subject, setSubject] = useState("All");
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const filteredQuestions = useMemo(() => {
    if (subject === "All") return questions;

    return questions.filter((q) => q.subject === subject);
  }, [subject]);

  const currentQuestion =
    filteredQuestions[index % filteredQuestions.length];

  function nextQuestion() {
    setSelectedAnswer("");
    setIndex((prev) => (prev + 1) % filteredQuestions.length);
  }

  function changeSubject(newSubject: string) {
    setSubject(newSubject);
    setIndex(0);
    setSelectedAnswer("");
  }

  const isCorrect = selectedAnswer === currentQuestion.answer;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 rounded-3xl border border-cyan-400/40 bg-slate-900 p-6 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Free Student Practice
          </p>

          <h1 className="mt-3 text-4xl font-bold text-cyan-300 md:text-6xl">
            NEET SCIENCE PRACTICE
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            Practice Biology, Chemistry and Physics MCQs with simple
            explanations and hints.
          </p>

          <div className="mt-6">
            <Link
              href="/"
              className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/10"
            >
              ← Back to MPSC Free Mock
            </Link>
          </div>
        </section>

        <section className="mb-6 flex flex-wrap gap-3">
          {subjects.map((item) => (
            <button
              key={item}
              onClick={() => changeSubject(item)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                subject === item
                  ? "bg-cyan-400 text-slate-950"
                  : "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
              }`}
            >
              {item}
            </button>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/50 bg-slate-900 p-6 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <p className="text-sm text-cyan-300">
              Question {index + 1} of {filteredQuestions.length} |{" "}
              {currentQuestion.subject}
            </p>

            <h2 className="mt-4 text-2xl font-bold text-white">
              {currentQuestion.question}
            </h2>

            <div className="mt-6 grid gap-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedAnswer(option)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selectedAnswer === option
                      ? option === currentQuestion.answer
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
            <h2 className="text-3xl font-bold text-cyan-300">
              Explanation
            </h2>

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

                  <p className="mt-2 text-slate-300">
                    {currentQuestion.hint}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}