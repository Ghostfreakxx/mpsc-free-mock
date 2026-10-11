import type { StudyLesson } from "./course";

export const circuitApplicationsLesson: StudyLesson = {
  id: "circuit-applications", subject: "Physics", unit: 12,
  title: "Circuit applications: sources, power and unbalanced bridges",
  summary: "Internal resistance, maximum load power, temperature changes and node-potential calculations.",
  prerequisites: "Ohm's law, series and parallel resistors, Kirchhoff rules and electric power.",
  remaining: "Original JEE-style practice accompanies the separate three-chapter Marin applications classroom and existing foundations; these are not official past-paper questions. Wider multi-source networks, bridge end corrections and experimental uncertainty remain.",
  sections: [
    { title: "A real source loses voltage internally", paragraphs: [
      "A cell's emf describes energy supplied per unit charge by its source mechanism. Terminal voltage describes the potential difference available outside. Model a discharging cell as an ideal emf E in series with internal resistance r. Connecting an external resistance R gives I = E/(R+r). The load receives V = IR = E-Ir. Do not use emf as the load voltage unless internal loss is negligible or current is zero.",
      "For E = 12 V, r = 2 ohm and R = 4 ohm, current is 2 A and terminal voltage is 8 V. Source power is EI = 24 W. The load receives I squared R = 16 W, while internal heating is I squared r = 8 W. These add correctly. This simple model assumes steady operation and constant parameters; an actual cell's internal resistance and emf can change with state of charge and temperature."
    ], formula: "I = E/(R+r); V_terminal = E-Ir; EI = I^2 R + I^2 r" },
    { title: "Maximum power is not maximum efficiency", paragraphs: [
      "For a fixed source with positive internal resistance, load power is P = E squared R/(R+r) squared. A tiny R draws substantial current but has little voltage across it; a very large R has voltage but little current. The best compromise for maximum power occurs at R = r. Differentiation gives dP/dR = E squared (r-R)/(R+r) cubed, whose sign changes from positive to negative there.",
      "A 12 V source with r = 2 ohm delivers maximum load power of 18 W at R = 2 ohm. Half the source power then heats the internal resistance, so efficiency is 50 percent. Increasing R above r improves the fraction delivered to the load while reducing power. JEE questions may ask either maximum power or high efficiency; they are different objectives. This result is for the stated fixed-emf, fixed-resistance model, not permission to short a real battery."
    ], formula: "P_load = E^2 R/(R+r)^2; P_max = E^2/(4r) at R=r; efficiency = R/(R+r)" },
    { title: "Temperature changes resistance and the circuit operating point", paragraphs: [
      "Near a reference temperature T0, a metal resistor is often approximated by R(T) = R0[1+alpha(T-T0)]. Here alpha is specified at that reference temperature. This is a limited-range approximation, not a universal law for all materials. Positive alpha means resistance increases on warming. Geometry changes are assumed negligible in this model. Keep the temperature difference in degrees Celsius or kelvin; those differences have the same numerical size.",
      "If R0 = 10 ohm at 20 degrees Celsius and alpha = 0.004 per kelvin, warming to 70 degrees Celsius gives 12 ohm. Across an ideal constant 12 V supply, current drops from 1.2 A to 1 A and power from 14.4 W to 12 W. Under an ideal constant-current supply, heating instead increases power because P = I squared R. First identify what the supply holds constant, then choose a power expression. Self-heating can require a thermal model beyond this prescribed-temperature calculation."
    ], formula: "R(T)=R0[1+alpha(T-T0)]; fixed V: P=V^2/R; fixed I: P=I^2 R" },
    { title: "An unbalanced bridge needs node equations", paragraphs: [
      "Label the supply nodes A = 12 V and D = 0 V. The upper path is A--3 ohm--B--6 ohm--D. The lower path is A--6 ohm--C--3 ohm--D. A 3 ohm bridge joins B to C. Because the two divider ratios differ, B and C are not at equal potential. Current flows through the bridge, so treating each outer path as an independent series divider would ignore loading.",
      "Write outgoing currents at each unknown node and set their sum to zero. At B: (B-12)/3 + B/6 + (B-C)/3 = 0. At C: (C-12)/6 + C/3 + (C-B)/3 = 0. Multiplying by six gives 5B-2C=24 and -2B+5C=12. Solving yields B = 48/7 V and C = 36/7 V. Bridge current is (B-C)/3 = 4/7 A from B to C. A negative result under your chosen arrow would simply reverse its direction."
    ], formula: "At each steady node: sum[(V_node-V_neighbor)/R_branch] = 0" },
    { title: "Check a network with conservation and limiting cases", paragraphs: [
      "The supply current in this bridge is (12-B)/3 + (12-C)/6 = 20/7 A. Thus its equivalent resistance is 12/(20/7) = 4.2 ohm. Removing the middle resistor would give two 9 ohm paths in parallel, or 4.5 ohm. Adding a conducting path reduces equivalent resistance here, so 4.2 ohm is a sensible result. The bridge current is not the whole supply current; label each branch rather than reusing one symbol everywhere.",
      "A second check compares source power with the sum of I squared R over all five resistors. Both are 240/7 W. In a balanced bridge, equal node potentials give zero middle current, and the simple divider calculation becomes valid. Build this habit: draw nodes, define current directions, write independent equations, solve, and check charge and energy conservation. These methods extend to mixed circuits without assuming that a visually adjacent pair of resistors is necessarily in series."
    ], formula: "P_source = V_supply I_supply = sum(I_branch^2 R_branch)" },
  ],
  examples: [
    { question: "A 12 V cell with internal resistance 2 ohm drives 4 ohm. Find current, terminal voltage and power losses.", steps: ["Total resistance is 6 ohm, so current is 2 A.", "Terminal voltage is 12-2 x 2 = 8 V.", "Load power is 2^2 x 4 = 16 W and internal heating is 2^2 x 2 = 8 W.", "Source power 12 x 2 = 24 W equals 16+8 W."], answer: "2 A; 8 V; load 16 W and internal heating 8 W." },
    { question: "Find the load for maximum power from E = 12 V, r = 2 ohm, and the efficiency there.", steps: ["Differentiate E^2 R/(R+r)^2 or use its sign-changing derivative.", "Maximum occurs at R=r=2 ohm.", "P_max=144/(4 x 2)=18 W.", "Efficiency R/(R+r)=1/2."], answer: "2 ohm load; maximum 18 W; efficiency 50 percent." },
    { question: "For the five-resistor bridge defined in section four, find bridge current and equivalent resistance.", steps: ["Node equations are 5B-2C=24 and -2B+5C=12.", "B=48/7 V and C=36/7 V.", "Bridge current is (B-C)/3=4/7 A from B to C.", "Supply current is 20/7 A, giving resistance 4.2 ohm."], answer: "Bridge current 4/7 A from B to C; equivalent resistance 4.2 ohm." },
  ],
  quiz: [
    { question: "A 12 V cell with r=2 ohm drives R=4 ohm. What is terminal voltage?", options: ["12 V", "8 V", "6 V", "4 V"], answer: 1, explanation: "Current is 12/(4+2)=2 A. Internal voltage drop is 4 V, leaving an 8 V potential difference across the load." },
    { question: "For fixed E and positive r, what load maximizes delivered power?", options: ["R=0", "R=2r", "R=r", "R approaches infinity"], answer: 2, explanation: "The derivative of E squared R/(R+r) squared changes from positive to negative at R=r. Efficiency there is only 50 percent." },
    { question: "A 10 ohm resistor at 20 C has alpha=0.004/K. What is its resistance at 70 C in the linear model?", options: ["12 ohm", "10.2 ohm", "8 ohm", "14 ohm"], answer: 0, explanation: "The change is 50 K, giving 10[1+0.004 x 50]=12 ohm. Use a temperature difference, not the final absolute temperature." },
    { question: "In the described bridge, B=48/7 V and C=36/7 V with 3 ohm between them. Find current B to C.", options: ["12/7 A", "20/7 A", "0 A", "4/7 A"], answer: 3, explanation: "The bridge voltage is 12/7 V. Divide by its own 3 ohm resistance to get 4/7 A; the supply current is a different quantity." },
    { question: "A resistor's resistance increases while an ideal source holds its current constant. What happens to its power?", options: ["Decreases", "Increases", "Stays fixed", "Becomes zero"], answer: 1, explanation: "For constant current, P=I squared R increases with resistance. The decreasing-power conclusion applies instead to a constant-voltage source." },
  ],
  sources: [
    { title: "OpenStax: Kirchhoff's rules", url: "https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules" },
    { title: "Official JEE Main 2026 syllabus", url: "https://jeemain.nta.nic.in/document/syllabus-2026/" },
  ],
};
