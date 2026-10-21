import type { StudyLesson } from "./course";

export const chemistryFoundationsLesson: StudyLesson = {
  id: "chemistry-foundations", subject: "Chemistry", unit: 1,
  title: "Chemical foundations: particles, evidence and equations",
  summary: "Matter, Dalton's model, combination laws, relative masses and balanced reactions.",
  prerequisites: "Ratios and simple arithmetic; continue with the separate Mole Concept lesson.",
  remaining: "This written foundation complements Mole Concept. It is not a Marin recording or a complete Chemistry course. Further multi-step stoichiometry practice remains useful.",
  sections: [
    { title: "First ask what the sample contains", paragraphs: [
      "Imagine pure water beside salt water. Pure water is a compound with a fixed composition; salt water is a mixture whose proportions can change. Matter has mass and occupies space. Solids, liquids and gases describe physical states, not whether a sample is an element, compound or mixture.",
      "An element contains one kind of element, identified by proton number. A compound joins different elements chemically. An atom is an individual atomic entity; a molecule is a bonded group such as O2 or H2O. O2 is an elemental molecule, not a compound. Solid NaCl is counted using formula units, not isolated NaCl molecules."
    ] },
    { title: "Dalton offered a model that could explain ratios", paragraphs: [
      "Dalton proposed that matter consists of atoms, compounds combine atoms in simple whole-number ratios, and chemical reactions rearrange them. This explains why balancing an equation changes coefficients rather than the identity of each substance.",
      "The historical model needs qualifications: atoms contain subatomic particles, isotopes of one element differ in mass, and nuclear reactions can change elements. Ordinary chemical bookkeeping conserves each element's atoms; it does not require every original Dalton statement to remain literally true."
    ] },
    { title: "Follow mass through a closed reaction", paragraphs: [
      "For ordinary reactions, total mass is conserved to the precision of chemical measurements. Include every reactant and product in the closed system. If 10.0 g of a carbonate yields 5.6 g of solid and gas escapes, the gas accounts for 4.4 g. Looking only at the solid falsely suggests mass vanished."
    ], formula: "Total reactant mass = total product mass (ordinary chemical model)" },
    { title: "Compare composition before naming a law", paragraphs: [
      "Definite proportions means a given pure compound has a fixed elemental mass ratio. Using H = 1 and O = 16, water contains hydrogen and oxygen in a 1:8 mass ratio. Changing the sample size leaves that ratio unchanged.",
      "Multiple proportions compares different compounds of the same elements. Fix the carbon mass at 12 g: CO pairs it with 16 g oxygen, while CO2 pairs it with 32 g. The oxygen masses are in the simple ratio 1:2. Comparing unequal carbon amounts first would hide the test."
    ] },
    { title: "Volumes and particles have stated conditions", paragraphs: [
      "For gaseous reactants and gaseous products measured at the same temperature and pressure, combining volumes follow simple ratios. The reaction 2H2(g) + O2(g) -> 2H2O(g) gives 2:1:2. If water condenses, do not assign its liquid volume that gas ratio.",
      "Avogadro's law relates equal gas volumes at the same temperature and pressure to equal molecular counts in the ideal-gas model. Equal volume does not imply equal mass. Convert an equation's coefficients to mass only after using the appropriate molar masses."
    ] },
    { title: "Relative mass is not a mass in grams", paragraphs: [
      "One unified atomic mass unit, u, is one twelfth of the mass of a carbon-12 atom in its ground state at rest. Relative atomic mass compares an atomic mass with u and has no unit. Tabulated elemental relative atomic masses reflect isotope abundances; they are not generally whole-number nucleon counts.",
      "With the stated rounded masses, H2O has relative molecular mass 18. One molecule has mass approximately 18 u; one mole has molar mass approximately 18 g/mol for these calculations. These quantities describe different scales. For NaCl, use relative formula mass instead of implying a discrete molecule."
    ] },
    { title: "Balance atoms without changing the substance", paragraphs: [
      "Try Fe + O2 -> Fe2O3. Start with oxygen: placing 2 before Fe2O3 gives six oxygen atoms, requiring 3O2. The product now contains four iron atoms, requiring 4Fe. Check both elements: 4Fe + 3O2 -> 2Fe2O3.",
      "Never change a subscript just to balance: FeO and Fe2O3 are different compounds. Use the smallest whole-number coefficients. For ionic equations, conserve total charge as well as each element's atom count."
    ], formula: "4Fe + 3O2 -> 2Fe2O3" },
    { title: "Use the equation as a mole recipe", paragraphs: [
      "Now connect to Mole Concept. The balanced iron reaction consumes four moles of Fe for every three moles of O2. With 0.40 mol Fe and 0.20 mol O2, compare 0.40/4 with 0.20/3. Oxygen gives the smaller available reaction extent, so it limits the product.",
      "The product amount is 2 x (0.20/3) = 0.1333 mol Fe2O3. Iron used is 4 x (0.20/3) = 0.2667 mol, leaving 0.1333 mol. Keep unrounded values until the final answer; these are theoretical amounts for complete conversion under the stated reaction."
    ] },
  ],
  examples: [
    { question: "A 9 g water sample contains how much hydrogen and oxygen? Use mass ratio H:O = 1:8.", steps: ["There are 9 total ratio parts.", "Hydrogen = 9 x 1/9 = 1 g; oxygen = 9 x 8/9 = 8 g.", "Their sum recovers the original 9 g."], answer: "1 g H and 8 g O." },
    { question: "Two oxides contain 6 g carbon with 8 g and 16 g oxygen. Which combination law does this illustrate?", steps: ["Carbon mass is already the same in both samples.", "Compare oxygen masses: 8:16 = 1:2.", "Different compounds with fixed carbon and a simple oxygen ratio test multiple proportions."], answer: "Law of multiple proportions." },
    { question: "Balance C2H6 + O2 -> CO2 + H2O.", steps: ["One ethane requires 2CO2 for carbon and 3H2O for hydrogen.", "Products contain 7 oxygen atoms, requiring 7/2 O2.", "Multiply every coefficient by 2 and recheck C, H and O."], answer: "2C2H6 + 7O2 -> 4CO2 + 6H2O." },
    { question: "For 4Fe + 3O2 -> 2Fe2O3, use 0.40 mol Fe and 0.20 mol O2. Find the limiting reactant and theoretical product.", steps: ["Available extents: Fe = 0.40/4 = 0.10 mol; O2 = 0.20/3 mol.", "O2 limits because its extent is smaller.", "Product = 2 x 0.20/3 mol; unused Fe = 0.40 - 4 x 0.20/3 mol."], answer: "O2 limits; approximately 0.13 mol Fe2O3 forms and 0.13 mol Fe remains (two significant figures)." },
  ],
  quiz: [
    { question: "Which is a compound?", options: ["O2", "H2O", "Air", "Salt water"], answer: 1, explanation: "H2O contains different elements chemically combined. O2 is elemental; the other two are mixtures." },
    { question: "Which observation modifies Dalton's identical-mass claim for atoms of an element?", options: ["Conservation of atoms in chemical reactions", "Balanced equations", "Isotopes", "Fixed composition of pure water"], answer: 2, explanation: "Isotopes have the same proton number but different neutron counts and masses." },
    { question: "A closed ordinary reaction has 12 g reactants. Products are 7 g solid plus gas. What gas mass is required?", options: ["5 g", "7 g", "12 g", "19 g"], answer: 0, explanation: "Include the gas: 12 - 7 = 5 g, consistent with mass conservation." },
    { question: "For fixed 12 g carbon, oxygen masses 16 g and 32 g in two oxides illustrate:", options: ["Equal gas masses", "Multiple proportions", "No conservation", "Changing composition of one pure compound"], answer: 1, explanation: "Different compounds combine fixed carbon with oxygen masses in the simple ratio 1:2." },
    { question: "Relative molecular mass of water is 18 using rounded atomic masses. Its unit is:", options: ["g", "g/mol", "u", "None"], answer: 3, explanation: "Relative molecular mass is a dimensionless ratio. Molecular mass in u and molar mass in g/mol are distinct quantities." },
    { question: "Smallest integer coefficient of O2 in ethane combustion is:", options: ["3", "5", "7", "14"], answer: 2, explanation: "2C2H6 + 7O2 -> 4CO2 + 6H2O conserves 4 C, 12 H and 14 O atoms." },
    { question: "Why must gas-volume ratios specify temperature and pressure?", options: ["Gas volume depends on those conditions", "Gas mass is always zero", "Coefficients are gram ratios", "All gases have equal density"], answer: 0, explanation: "The coefficient-to-volume comparison requires matching temperature and pressure and suitable gas behavior." },
    { question: "In 4Fe + 3O2 -> 2Fe2O3 with 0.40 mol Fe and 0.20 mol O2, which limits?", options: ["Fe because its coefficient is larger", "Neither", "Fe because its mass is larger", "O2"], answer: 3, explanation: "Compare moles/coefficient: 0.10 for Fe versus 0.0667 for O2. Oxygen supplies the smaller reaction extent." },
  ],
  sources: [
    { title: "NTA: JEE Main 2026 syllabus, Chemistry Unit 1", url: "https://jeemain.nta.nic.in/document/syllabus-2026/" },
    { title: "OpenStax: classification of matter", url: "https://openstax.org/books/chemistry-2e/pages/1-2-phases-and-classification-of-matter" },
    { title: "OpenStax: early atomic theory", url: "https://openstax.org/books/chemistry-2e/pages/2-1-early-ideas-in-atomic-theory" },
    { title: "OpenStax: balancing chemical equations", url: "https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations" },
  ],
};
