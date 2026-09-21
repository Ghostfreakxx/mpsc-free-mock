export type JeeQuestion = {
  subject: string;
  category: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  wrongExplanations?: Record<string, string>;
  hint?: string;
};

export const jeeQuestions: JeeQuestion[] = [
  {
    subject: "Physics",
    category: "Units and Measurement",
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    answer: "Newton",
    explanation:
      "Force is measured in Newton (N), defined as the force needed to give a 1 kg mass an acceleration of 1 m/s².",
    wrongExplanations: {
      Joule: "Joule is the SI unit of energy or work, not force.",
      Watt: "Watt is the SI unit of power (energy per second).",
      Pascal: "Pascal is the SI unit of pressure (force per unit area).",
    },
    hint: "Think of Newton's second law: F = ma.",
  },
  {
    subject: "Physics",
    category: "Mechanics",
    question:
      "Newton's First Law of Motion is also known as the law of:",
    options: ["Inertia", "Acceleration", "Action-Reaction", "Gravitation"],
    answer: "Inertia",
    explanation:
      "Newton's First Law states that an object stays at rest or in uniform motion unless acted upon by an external force, which defines inertia.",
    wrongExplanations: {
      Acceleration: "Acceleration relates to Newton's Second Law (F = ma).",
      "Action-Reaction": "This describes Newton's Third Law.",
      Gravitation: "Gravitation is a separate law described by Newton.",
    },
    hint: "This law explains why objects resist changes in their state of motion.",
  },
  {
    subject: "Physics",
    category: "Electricity",
    question: "Ohm's Law relates voltage (V), current (I) and resistance (R) as:",
    options: ["V = IR", "V = I/R", "I = VR", "R = VI"],
    answer: "V = IR",
    explanation:
      "Ohm's Law states that voltage equals current multiplied by resistance, V = IR, for a conductor at constant temperature.",
    wrongExplanations: {
      "V = I/R": "This incorrectly divides current by resistance.",
      "I = VR": "This incorrectly multiplies voltage by resistance to get current.",
      "R = VI": "This incorrectly multiplies voltage and current to get resistance.",
    },
    hint: "Rearranging gives R = V/I, the definition of resistance.",
  },
  {
    subject: "Physics",
    category: "Optics",
    question: "The approximate speed of light in vacuum is:",
    options: [
      "3 × 10^5 m/s",
      "3 × 10^6 m/s",
      "3 × 10^8 m/s",
      "3 × 10^10 m/s",
    ],
    answer: "3 × 10^8 m/s",
    explanation:
      "The speed of light in vacuum is approximately 3 × 10^8 m/s (exactly 299,792,458 m/s).",
    wrongExplanations: {
      "3 × 10^5 m/s": "This is too small by three orders of magnitude.",
      "3 × 10^6 m/s": "This is too small by two orders of magnitude.",
      "3 × 10^10 m/s": "This is too large; that value is closer to cm/s in CGS units (3 × 10^10 cm/s).",
    },
    hint: "Remember the CGS value 3 × 10^10 cm/s and convert to metres.",
  },
  {
    subject: "Physics",
    category: "Mechanics",
    question:
      "According to the work-energy theorem, the work done by the net force on a body equals its:",
    options: [
      "Change in momentum",
      "Change in kinetic energy",
      "Change in potential energy",
      "Change in mass",
    ],
    answer: "Change in kinetic energy",
    explanation:
      "The work-energy theorem states that the net work done on an object equals the change in its kinetic energy (W = ΔKE).",
    wrongExplanations: {
      "Change in momentum": "Change in momentum equals impulse, not work.",
      "Change in potential energy":
        "Work by a conservative force equals the negative change in potential energy, not the general work-energy relation.",
      "Change in mass": "Mass does not change due to work in classical mechanics.",
    },
    hint: "Recall W = F·d and KE = ½mv²; derive the link between them.",
  },
  {
    subject: "Physics",
    category: "Units and Measurement",
    question: "The SI unit of electric current is the:",
    options: ["Volt", "Ampere", "Ohm", "Coulomb"],
    answer: "Ampere",
    explanation:
      "Electric current is measured in Amperes (A), one of the seven SI base units.",
    wrongExplanations: {
      Volt: "Volt is the unit of electric potential difference.",
      Ohm: "Ohm is the unit of electrical resistance.",
      Coulomb: "Coulomb is the unit of electric charge, not current.",
    },
    hint: "Current is charge flowing per second; the base SI unit is named after André-Marie Ampère.",
  },
  {
    subject: "Physics",
    category: "Mechanics",
    question: "The dimensional formula of force is:",
    options: ["[MLT^-1]", "[MLT^-2]", "[ML^2T^-2]", "[ML^-1T^-2]"],
    answer: "[MLT^-2]",
    explanation:
      "Force = mass × acceleration, and acceleration has dimensions [LT^-2], so force has dimensions [MLT^-2].",
    wrongExplanations: {
      "[MLT^-1]": "This is the dimensional formula of momentum.",
      "[ML^2T^-2]": "This is the dimensional formula of energy or work.",
      "[ML^-1T^-2]": "This is the dimensional formula of pressure.",
    },
    hint: "Start from F = ma and substitute the dimensions of mass and acceleration.",
  },
  {
    subject: "Physics",
    category: "Gravitation",
    question:
      "The acceleration due to gravity near the Earth's surface is approximately:",
    options: ["6.4 m/s²", "8.9 m/s²", "9.8 m/s²", "11.2 m/s²"],
    answer: "9.8 m/s²",
    explanation:
      "The standard value of acceleration due to gravity near the Earth's surface is approximately 9.8 m/s² (9.81 m/s²).",
    wrongExplanations: {
      "6.4 m/s²": "This is not a standard physical constant used for g.",
      "8.9 m/s²": "This is close but not the accepted standard value.",
      "11.2 m/s²": "11.2 km/s is Earth's escape velocity, not g in m/s².",
    },
    hint: "This value is used throughout mechanics problems as 'g'.",
  },
  {
    subject: "Chemistry",
    category: "Atomic Structure",
    question: "The atomic number of Hydrogen is:",
    options: ["0", "1", "2", "8"],
    answer: "1",
    explanation:
      "Hydrogen has atomic number 1, meaning a neutral hydrogen atom has one proton and one electron.",
    wrongExplanations: {
      "0": "An atomic number of 0 would mean no protons, which is not an element.",
      "2": "Atomic number 2 belongs to Helium.",
      "8": "Atomic number 8 belongs to Oxygen.",
    },
    hint: "Hydrogen is the first and lightest element on the periodic table.",
  },
  {
    subject: "Chemistry",
    category: "Physical Chemistry",
    question: "Avogadro's number is approximately:",
    options: [
      "6.022 × 10^23",
      "3.14 × 10^23",
      "9.8 × 10^23",
      "1.6 × 10^19",
    ],
    answer: "6.022 × 10^23",
    explanation:
      "Avogadro's number, 6.022 × 10^23, is the number of particles (atoms, molecules, ions) in one mole of a substance.",
    wrongExplanations: {
      "3.14 × 10^23": "This resembles π but is not Avogadro's number.",
      "9.8 × 10^23": "This is not a recognised physical or chemical constant.",
      "1.6 × 10^19": "This is close to the reciprocal of the elementary charge (1.6 × 10^-19 C), not Avogadro's number.",
    },
    hint: "It defines the mole, the SI unit for amount of substance.",
  },
  {
    subject: "Chemistry",
    category: "Acids and Bases",
    question: "The pH of pure water at 25°C is:",
    options: ["0", "1", "7", "14"],
    answer: "7",
    explanation:
      "Pure water at 25°C has a pH of 7, making it neutral (neither acidic nor basic).",
    wrongExplanations: {
      "0": "A pH of 0 indicates a strongly acidic solution.",
      "1": "A pH of 1 indicates a strongly acidic solution.",
      "14": "A pH of 14 indicates a strongly basic (alkaline) solution.",
    },
    hint: "Neutral substances sit exactly in the middle of the 0–14 pH scale.",
  },
  {
    subject: "Chemistry",
    category: "Basic Concepts",
    question: "The chemical formula of water is:",
    options: ["H2O", "HO2", "H2O2", "OH"],
    answer: "H2O",
    explanation:
      "Water is composed of two hydrogen atoms bonded to one oxygen atom, giving the formula H2O.",
    wrongExplanations: {
      HO2: "This is not a standard stable, common compound.",
      H2O2: "H2O2 is hydrogen peroxide, a different compound.",
      OH: "OH represents the hydroxide ion, not water itself.",
    },
    hint: "Think of the common name for H2O taught from primary school.",
  },
  {
    subject: "Chemistry",
    category: "Periodic Table",
    question:
      "The modern periodic law states that properties of elements are a periodic function of their:",
    options: [
      "Atomic mass",
      "Atomic number",
      "Number of neutrons",
      "Valency",
    ],
    answer: "Atomic number",
    explanation:
      "Henry Moseley showed that elements are correctly ordered by increasing atomic number, which forms the basis of the modern periodic law.",
    wrongExplanations: {
      "Atomic mass": "Mendeleev's original table used atomic mass, later replaced by atomic number.",
      "Number of neutrons": "Neutron count varies between isotopes of the same element.",
      Valency: "Valency is a periodic property, not the basis of the arrangement itself.",
    },
    hint: "This replaced Mendeleev's earlier atomic-mass-based arrangement.",
  },
  {
    subject: "Chemistry",
    category: "Physical Chemistry",
    question: "The SI unit for the amount of substance is the:",
    options: ["Gram", "Mole", "Litre", "Molarity"],
    answer: "Mole",
    explanation:
      "The mole is the SI base unit for amount of substance, defined using Avogadro's number of particles.",
    wrongExplanations: {
      Gram: "Gram is a unit of mass, not amount of substance.",
      Litre: "Litre is a unit of volume.",
      Molarity: "Molarity is a unit of concentration (mol/L), not amount of substance itself.",
    },
    hint: "One of the seven SI base units, symbol 'mol'.",
  },
  {
    subject: "Chemistry",
    category: "Basic Concepts",
    question: "A catalyst is a substance that:",
    options: [
      "Increases the reaction rate and is consumed permanently",
      "Increases the reaction rate without being consumed permanently",
      "Decreases the reaction rate and is consumed",
      "Has no effect on the reaction rate",
    ],
    answer: "Increases the reaction rate without being consumed permanently",
    explanation:
      "A catalyst speeds up a chemical reaction by lowering activation energy and is regenerated at the end, so it is not permanently consumed.",
    wrongExplanations: {
      "Increases the reaction rate and is consumed permanently":
        "Catalysts are regenerated, not permanently used up.",
      "Decreases the reaction rate and is consumed":
        "A substance that slows a reaction is an inhibitor, not a catalyst.",
      "Has no effect on the reaction rate":
        "This describes an inert substance, not a catalyst.",
    },
    hint: "Catalysts change the pathway (activation energy), not the products.",
  },
  {
    subject: "Chemistry",
    category: "Periodic Table",
    question: "Which of the following is a noble gas?",
    options: ["Nitrogen", "Neon", "Chlorine", "Sulphur"],
    answer: "Neon",
    explanation:
      "Neon belongs to Group 18 of the periodic table, the noble gases, which are largely unreactive.",
    wrongExplanations: {
      Nitrogen: "Nitrogen is a Group 15 non-metal, not a noble gas.",
      Chlorine: "Chlorine is a Group 17 halogen.",
      Sulphur: "Sulphur is a Group 16 non-metal.",
    },
    hint: "Noble gases sit in the last column of the periodic table.",
  },
  {
    subject: "Mathematics",
    category: "Calculus",
    question: "The derivative of sin x with respect to x is:",
    options: ["cos x", "-cos x", "-sin x", "tan x"],
    answer: "cos x",
    explanation: "d/dx (sin x) = cos x is a standard derivative rule in calculus.",
    wrongExplanations: {
      "-cos x": "This is the derivative of -sin x, not sin x.",
      "-sin x": "This is the second derivative of sin x, i.e., derivative of cos x.",
      "tan x": "tan x is a separate trigonometric function, not the derivative of sin x.",
    },
    hint: "Remember the cycle: derivative of sin is cos, derivative of cos is -sin.",
  },
  {
    subject: "Mathematics",
    category: "Algebra",
    question:
      "The roots of the quadratic equation ax² + bx + c = 0 are given by:",
    options: [
      "x = (-b ± √(b² - 4ac)) / 2a",
      "x = (b ± √(b² - 4ac)) / 2a",
      "x = (-b ± √(b² + 4ac)) / 2a",
      "x = (-b ± √(4ac - b²)) / 2a",
    ],
    answer: "x = (-b ± √(b² - 4ac)) / 2a",
    explanation:
      "The quadratic formula x = (-b ± √(b² - 4ac)) / 2a is derived by completing the square on ax² + bx + c = 0.",
    wrongExplanations: {
      "x = (b ± √(b² - 4ac)) / 2a": "The sign of b must be negative in the numerator.",
      "x = (-b ± √(b² + 4ac)) / 2a": "The term under the square root should be b² - 4ac, not b² + 4ac.",
      "x = (-b ± √(4ac - b²)) / 2a": "This reverses the sign inside the square root incorrectly.",
    },
    hint: "The term b² - 4ac is called the discriminant.",
  },
  {
    subject: "Mathematics",
    category: "Trigonometry",
    question: "The value of sin 90° is:",
    options: ["0", "1/2", "√3/2", "1"],
    answer: "1",
    explanation: "sin 90° = 1, since at 90° the sine function reaches its maximum value.",
    wrongExplanations: {
      "0": "sin 0° = 0, not sin 90°.",
      "1/2": "sin 30° = 1/2.",
      "√3/2": "sin 60° = √3/2.",
    },
    hint: "Picture the unit circle: at 90°, the point is at the top, with y-coordinate 1.",
  },
  {
    subject: "Mathematics",
    category: "Algebra",
    question: "The sum of the first n natural numbers is given by:",
    options: ["n(n+1)/2", "n(n-1)/2", "n²/2", "n(n+1)"],
    answer: "n(n+1)/2",
    explanation:
      "The sum 1 + 2 + ... + n equals n(n+1)/2, a standard arithmetic series result.",
    wrongExplanations: {
      "n(n-1)/2": "This formula gives the number of ways to choose 2 items from n, not the sum of naturals.",
      "n²/2": "This is only approximately correct for large n and is not the exact formula.",
      "n(n+1)": "This is exactly double the correct sum.",
    },
    hint: "Test it with n = 3: 1+2+3 = 6, and check which formula gives 6.",
  },
  {
    subject: "Mathematics",
    category: "Geometry",
    question: "The area of a circle with radius r is:",
    options: ["2πr", "πr", "πr²", "2πr²"],
    answer: "πr²",
    explanation: "The area enclosed by a circle of radius r is πr².",
    wrongExplanations: {
      "2πr": "This is the formula for the circumference of a circle, not its area.",
      "πr": "This is not a standard area or circumference formula.",
      "2πr²": "This is exactly double the correct area.",
    },
    hint: "Don't confuse the area formula with the circumference formula (2πr).",
  },
  {
    subject: "Mathematics",
    category: "Complex Numbers",
    question: "The value of i² (where i is the imaginary unit) is:",
    options: ["1", "-1", "i", "-i"],
    answer: "-1",
    explanation: "By definition, i = √-1, so i² = -1.",
    wrongExplanations: {
      "1": "Squaring i does not return to 1; that would make i a real number.",
      i: "i² simplifies to a real number, not i itself.",
      "-i": "i² is real-valued (-1), not imaginary.",
    },
    hint: "i is defined specifically so that i² = -1.",
  },
  {
    subject: "Mathematics",
    category: "Logarithms",
    question: "The value of log₁₀ 10 is:",
    options: ["0", "1", "10", "100"],
    answer: "1",
    explanation: "log₁₀ 10 = 1, since 10 raised to the power 1 equals 10.",
    wrongExplanations: {
      "0": "log₁₀ 1 = 0, not log₁₀ 10.",
      "10": "This confuses the logarithm's value with its base/argument.",
      "100": "This is not consistent with the definition of a base-10 logarithm.",
    },
    hint: "logₐ a always equals 1 for any valid base a.",
  },
  {
    subject: "Mathematics",
    category: "Calculus",
    question: "The derivative of xⁿ with respect to x is:",
    options: ["n·xⁿ", "n·xⁿ⁻¹", "xⁿ⁻¹", "(n-1)·xⁿ"],
    answer: "n·xⁿ⁻¹",
    explanation:
      "By the power rule of differentiation, d/dx (xⁿ) = n·xⁿ⁻¹.",
    wrongExplanations: {
      "n·xⁿ": "The exponent must decrease by one; it should not stay as xⁿ.",
      "xⁿ⁻¹": "This is missing the multiplying factor of n.",
      "(n-1)·xⁿ": "Both the coefficient and exponent are incorrect here.",
    },
    hint: "Bring the exponent down as a multiplier, then reduce the exponent by 1.",
  },
];
