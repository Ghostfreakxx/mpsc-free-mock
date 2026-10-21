export const syllabusSource = "https://jeemain.nta.nic.in/document/syllabus-2026/";
export const syllabusBaseline = "JEE Main 2026 · Paper 1";
export const syllabusChecked = "2 October 2026";
export const syllabusPdf = "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf";
export const subjects = ["Physics", "Chemistry", "Mathematics"] as const;
export type Subject = typeof subjects[number];

// Unit numbers map to NTA's baseline, not a count of completed teaching chapters.
export const courseUnits: Record<Subject, string[]> = {
  Physics: [
    "Units and Measurements", "Kinematics", "Laws of Motion", "Work, Energy and Power", "Rotational Motion",
    "Gravitation", "Properties of Solids and Liquids", "Thermodynamics", "Kinetic Theory of Gases", "Oscillations and Waves",
    "Electrostatics", "Current Electricity", "Magnetic Effects of Current and Magnetism", "Electromagnetic Induction and Alternating Currents", "Electromagnetic Waves",
    "Optics", "Dual Nature of Matter and Radiation", "Atoms and Nuclei", "Electronic Devices", "Experimental Skills",
  ],
  Chemistry: [
    "Some Basic Concepts in Chemistry", "Atomic Structure", "Chemical Bonding and Molecular Structure", "Chemical Thermodynamics", "Solutions",
    "Equilibrium", "Redox Reactions and Electrochemistry", "Chemical Kinetics", "Classification of Elements and Periodicity in Properties", "p-Block Elements",
    "d- and f-Block Elements", "Coordination Compounds", "Purification and Characterisation of Organic Compounds", "Some Basic Principles of Organic Chemistry", "Hydrocarbons",
    "Organic Compounds Containing Halogens", "Organic Compounds Containing Oxygen", "Organic Compounds Containing Nitrogen", "Biomolecules", "Principles Related to Practical Chemistry",
  ],
  Mathematics: [
    "Sets, Relations and Functions", "Complex Numbers and Quadratic Equations", "Matrices and Determinants", "Permutations and Combinations",
    "Binomial Theorem and Its Simple Applications", "Sequence and Series", "Limit, Continuity and Differentiability", "Integral Calculus", "Differential Equations",
    "Co-ordinate Geometry", "Three Dimensional Geometry", "Vector Algebra", "Statistics and Probability", "Trigonometry",
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
