export const syllabusSource = "https://jeemain.nta.nic.in/document/syllabus-2026/";
export const syllabusBaseline = "JEE Main 2026 · Paper 1";
export const subjects = ["Physics", "Chemistry", "Mathematics"] as const;
export type Subject = typeof subjects[number];

// Unit numbers map to NTA's baseline, not a count of completed teaching chapters.
export const courseUnits: Record<Subject, string[]> = {
  Physics: [
    "Measurement", "Kinematics", "Newtonian mechanics", "Work and energy", "Rotation",
    "Gravity", "Solids, fluids and heat", "Thermodynamics", "Gas kinetics", "Oscillations and waves",
    "Electrostatics", "Electric circuits", "Magnetism", "Induction and AC", "Electromagnetic waves",
    "Optics", "Wave-particle duality", "Atomic and nuclear physics", "Semiconductors", "Experimental skills",
  ],
  Chemistry: [
    "Chemical foundations", "Atomic structure", "Bonding", "Chemical thermodynamics", "Solutions",
    "Equilibria", "Redox and electrochemistry", "Reaction kinetics", "Periodicity", "p-block",
    "d/f-block", "Coordination chemistry", "Organic analysis", "Organic foundations", "Hydrocarbons",
    "Halogen compounds", "Oxygen compounds", "Nitrogen compounds", "Biomolecules", "Practical chemistry",
  ],
  Mathematics: [
    "Sets and mappings", "Complex numbers and quadratics", "Matrices and determinants", "Counting",
    "Binomial expansion", "Sequences", "Differential calculus", "Integration", "Differential equations",
    "Plane geometry", "Spatial geometry", "Vectors", "Statistics and probability", "Trigonometry",
  ],
};

export type StudyLesson = {
  id: string; subject: Subject; unit: number; title: string; summary: string;
  prerequisites: string; remaining: string;
  sections: { title: string; paragraphs: string[]; formula?: string }[];
  examples: { question: string; steps: string[]; answer: string }[];
  quiz: { question: string; options: string[]; answer: number; explanation: string }[];
  sources: { title: string; url: string }[];
};
