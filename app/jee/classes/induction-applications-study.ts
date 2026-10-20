import type { StudyLesson } from "./course";

export const inductionApplicationsLesson: StudyLesson = {
  id: "induction-applications", subject: "Physics", unit: 14,
  title: "Induction and AC applications: motion, energy and resonance",
  summary: "Sliding and rotating conductors, inductor switching and series-resonance calculations.",
  prerequisites: "Faraday and Lenz laws, motional emf, inductance and sinusoidal AC circuits.",
  remaining: "Original JEE-style practice supplements the separate three-chapter Marin applications classroom and existing foundation recordings; these are not official past-paper questions. Wider induction geometry, coupled circuits, real transformer losses and AC network practice remain.",
  sections: [
    { title: "A sliding rod turns mechanical work into heat", paragraphs: [
      "A rod of length l moves right at constant speed v along conducting rails. A uniform field B points into the page and the rails form a closed circuit through resistance R. The growing area increases inward flux, so the induced current is counterclockwise to oppose that increase. In the moving rod, current flows upward. Its magnetic force points left, opposing motion. An external force must maintain the stated constant speed.",
      "Neglect rail resistance, friction and circuit inductance. The emf magnitude is Blv, current is Blv/R and braking force magnitude is BIl. With B=0.50 T, l=0.40 m, v=3 m/s and R=2 ohm, emf is 0.60 V, current 0.30 A and force 0.060 N. External power Fv=0.18 W equals resistor heating I squared R. A magnetic field is not a free energy source; the external agent supplies the electrical energy."
    ], formula: "emf=Blv; I=Blv/R; F=BIl; Fv=I^2 R" },
    { title: "A rotating rod needs integration because speed varies", paragraphs: [
      "Rotate a radial conducting rod of length l about one end with angular speed omega in a uniform perpendicular field. A point at distance s from the pivot has speed omega s. Therefore the small motional contribution is B omega s ds, not one common tip speed for every element. Integrating from zero to l gives emf magnitude B omega l squared/2. For rotation counterclockwise with field out of the page, positive charges are driven outward, making the tip positive relative to the pivot.",
      "Take B=0.40 T, omega=20 rad/s and l=0.50 m. The open-circuit end voltage is 1.0 V. If a stationary return path and sliding contacts close a circuit with total resistance 5 ohm, neglecting inductance, current is 0.20 A. Braking torque magnitude is B I l squared/2 = 0.010 N m. Maintaining rotation requires power torque times omega = 0.20 W, matching I squared R. Current needs a closed path; an isolated rotating rod can have voltage without continuous circuit current."
    ], formula: "emf=integral_0^l(B omega s ds)=B omega l^2/2; torque=B I l^2/2" },
    { title: "Inductor current cannot jump under finite voltage", paragraphs: [
      "For an ideal inductor of constant L, voltage in the passive sign convention is L dI/dt. A sudden finite voltage changes the slope of current, not the current instantly. When a constant source E is connected to an initially unenergized series RL circuit, current rises as E/R times [1-exp(-tR/L)]. The time constant is L/R. At one time constant, current reaches about 63.2 percent of its final value, not its full steady value.",
      "With E=10 V, R=5 ohm and L=0.50 H, final current is 2 A and the time constant is 0.10 s. Final magnetic energy is L I squared/2 = 1 J. If the source is removed and a closed resistor-inductor discharge path remains, current decays exponentially and that stored energy becomes heat. Opening the only current path is different: a large voltage can develop and cause a spark. Never assume a harmless exponential decay without specifying the discharge circuit."
    ], formula: "RL growth: I=(E/R)[1-exp(-t/tau)]; tau=L/R; U=L I^2/2" },
    { title: "Series resonance cancels reactances, not individual voltages", paragraphs: [
      "For a sinusoidal source driving a series resistor, inductor and capacitor, impedance magnitude is sqrt[R squared+(omega L-1/(omega C)) squared]. At omega0=1/sqrt(LC), the two reactances cancel in the total phasor sum. The circuit impedance is R and current is in phase with the source. This assumes ideal L and C, with total series loss included in R. It does not say the inductor and capacitor each have zero voltage.",
      "Let L=0.20 H, C=20 microF, R=10 ohm and source RMS voltage 20 V. Resonance is at omega0=500 rad/s, about 79.58 Hz. Current is 2 A RMS, while each reactive element has RMS voltage 200 V. These voltages oppose in phase and cancel in the loop sum. Source power is 40 W, entirely dissipated in R in this ideal model. Keep RMS quantities with RMS quantities; inserting a peak voltage into an RMS power formula gives the wrong result."
    ], formula: "omega0=1/sqrt(LC); at resonance I_rms=V_rms/R; V_L=I_rms omega0 L" },
    { title: "Half-power bandwidth makes selectivity quantitative", paragraphs: [
      "For the same series RLC circuit driven at fixed source voltage, average power is I_rms squared R. Half the resonant power means current falls to its resonant value divided by sqrt(2). The corresponding condition is absolute value of omega L-1/(omega C) equal to R. Solving the two positive-frequency equations gives lower and upper half-power frequencies. Their angular-frequency difference is exactly R/L for this ideal series model.",
      "In our example, the bandwidth is 50 rad/s and quality factor Q=omega0 L/R=10. The half-power angular frequencies are approximately 475.62 and 525.62 rad/s. Their geometric mean is omega0; their arithmetic midpoint is not exactly omega0. Avoid assuming perfectly symmetric endpoints unless using a justified narrow-band approximation. Higher Q gives a sharper current response, but real parasitic resistance and component limits constrain voltage magnification and selectivity. These applications supplement the foundational lesson rather than completing all AC networks."
    ], formula: "delta omega=R/L; Q=omega0 L/R; omega_low omega_high=omega0^2" },
  ],
  examples: [
    { question: "A 0.40 m rod moves at 3 m/s in B=0.50 T through a 2 ohm rail circuit. Find emf, braking force and power.", steps: ["emf=Blv=0.60 V; current=0.60/2=0.30 A.", "Braking force=BIl=0.060 N opposite motion.", "External power=Fv=0.18 W.", "Resistor heating=I^2 R=0.18 W checks energy conservation."], answer: "0.60 V; 0.060 N; 0.18 W." },
    { question: "A 0.50 m radial rod rotates at 20 rad/s in 0.40 T. With a stationary return path and total resistance 5 ohm, find emf, current and braking torque.", steps: ["Integrate B omega s ds to get B omega l^2/2=1.0 V.", "Current is 1/5=0.20 A.", "Torque=B I l^2/2=0.010 N m.", "Torque times omega=0.20 W equals I^2 R."], answer: "1.0 V; 0.20 A; 0.010 N m." },
    { question: "For L=0.20 H, C=20 microF, R=10 ohm and 20 V RMS, find resonance, current and bandwidth.", steps: ["omega0=1/sqrt(0.20 x 20 x 10^-6)=500 rad/s.", "Resonant RMS current=20/10=2 A.", "Each reactive RMS voltage is 2 x 500 x 0.20=200 V.", "Bandwidth R/L=50 rad/s; quality factor=10."], answer: "500 rad/s; 2 A RMS; bandwidth 50 rad/s; reactive voltage 200 V RMS." },
  ],
  quiz: [
    { question: "What supplies the heat energy in the ideal constant-speed sliding-rod circuit?", options: ["The static field alone", "The external mechanical agent", "The rails create energy", "No energy is required"], answer: 1, explanation: "The external force maintains motion against magnetic braking. Its mechanical power Fv equals resistor heating in the stated ideal circuit." },
    { question: "What is the end emf of a radial rod rotating about one end in a perpendicular uniform field?", options: ["B omega l^2", "B omega l", "B omega l^2/2", "Zero for every rotation"], answer: 2, explanation: "Local speed is omega s, so integrating B omega s ds along the rod produces the factor one half. Tip speed cannot represent every element." },
    { question: "For L=0.50 H and R=5 ohm, what is the RL time constant?", options: ["0.10 s", "10 s", "2.5 s", "0.01 s"], answer: 0, explanation: "The time constant is L/R=0.50/5=0.10 s. At this time growth current is about 63.2 percent of its eventual steady value." },
    { question: "In the stated resonant series circuit, what is the inductor RMS voltage?", options: ["0 V", "20 V", "40 V", "200 V"], answer: 3, explanation: "The current is 2 A RMS and inductive reactance is 100 ohm, giving 200 V RMS. Capacitor voltage cancels it in the phasor loop sum." },
    { question: "For a series RLC circuit with R=10 ohm and L=0.20 H, what is half-power angular bandwidth?", options: ["500 rad/s", "50 rad/s", "2 rad/s", "0.02 rad/s"], answer: 1, explanation: "For ideal series RLC at fixed source voltage, the difference of the half-power angular frequencies is exactly R/L=50 rad/s." },
  ],
  sources: [
    { title: "OpenStax: motional emf", url: "https://openstax.org/books/university-physics-volume-2/pages/13-3-motional-emf" },
    { title: "OpenStax: AC resonance", url: "https://openstax.org/books/university-physics-volume-2/pages/15-5-resonance-in-an-ac-circuit" },
    { title: "Official JEE Main 2026 syllabus", url: "https://jeemain.nta.nic.in/document/syllabus-2026/" },
  ],
};
