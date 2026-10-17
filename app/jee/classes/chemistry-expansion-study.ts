import type { StudyLesson } from "./course";

const syllabus = { title: "NTA: JEE Main 2026 Chemistry syllabus", url: "https://jeemain.nta.nic.in/document/syllabus-2026/" };

export const chemistryExpansionLessons: StudyLesson[] = [
  {
    id: "atomic-spectra", subject: "Chemistry", unit: 2,
    title: "Atomic spectra and matter waves: connect energy with evidence",
    summary: "Photons, photoelectric thresholds, Bohr derivations, spectra and uncertainty.",
    prerequisites: "Atomic Structure foundation, scientific notation and basic electrostatic force.",
    remaining: "Written Unit 2 companion, not a Marin recording of its own. The Atomic Structure recording covers these calculations plus introductory nodes, orbital shapes and configuration exceptions. Detailed radial wavefunction plots and further mixed problems remain; the unit is not yet complete.",
    sections: [
      { title: "A colour tells us about photon energy", paragraphs: [
        "Imagine comparing red and violet light. In vacuum both travel at c, but violet has shorter wavelength and higher frequency. The wave relation is c = frequency x wavelength. One photon's energy is h times frequency, not the total energy of an entire beam.",
        "At 400 nm, using hc = 1240 eV nm, a photon carries 3.10 eV. At 800 nm it carries 1.55 eV. Doubling wavelength halves photon energy. Convert nanometres to metres when using h in J s instead; mixing these units creates enormous numerical errors."
      ], formula: "c = nu lambda; E = h nu = hc/lambda" },
      { title: "Brightness cannot replace the threshold", paragraphs: [
        "Photoelectric emission tests the particle picture. A surface needs a minimum energy per photon, the work function phi. Above threshold, maximum electron kinetic energy is h nu - phi. Below threshold, increasing ordinary light intensity does not supply enough energy per photon in the elementary single-photon model.",
        "For 400 nm light and phi = 2.00 eV, maximum kinetic energy is 1.10 eV. The stopping-potential magnitude is 1.10 V because e times that voltage removes the maximum kinetic energy. Intensity controls photon arrival rate and can change photocurrent under fixed collection conditions; frequency controls the maximum energy."
      ], formula: "Kmax = h nu - phi; e Vs = Kmax; nu0 = phi/h" },
      { title: "Derive the historical Bohr radius", paragraphs: [
        "Bohr postulated non-radiating stationary orbits and angular momentum mvr = n hbar. For a one-electron ion, Coulomb attraction provides centripetal force: k Z e^2/r^2 = mv^2/r. Replace v using the angular-momentum condition. Solving gives r = n^2 hbar^2/(m k Z e^2), hence r is proportional to n^2/Z.",
        "The same force relation gives kinetic energy kZe^2/(2r), while potential energy is -kZe^2/r. Add them: total energy is -kZe^2/(2r), or -13.6 Z^2/n^2 eV with the usual introductory constants. This model describes hydrogen and one-electron ions, not neutral helium. It neglects reduced-mass and relativistic corrections and does not describe modern electron trajectories."
      ], formula: "r_n = a0 n^2/Z; a0 approximately 0.0529 nm; E_n = -13.6 Z^2/n^2 eV" },
      { title: "A spectral line connects two levels", paragraphs: [
        "Emission carries the positive difference E_initial - E_final when the final bound level is lower. For hydrogen n = 4 to n = 2, energy is 13.6(1/4 - 1/16) = 2.55 eV and wavelength is about 486 nm. Absorption reverses the energy flow; do not report a negative photon energy.",
        "Lyman transitions finish at n = 1, Balmer at n = 2, and Paschen at n = 3. The Rydberg expression uses the lower level first so its bracket is positive. Ionization takes an electron to the zero-energy continuum: hydrogen initially at n = 2 needs 3.40 eV, not the ground state's 13.6 eV."
      ], formula: "1/lambda = R Z^2(1/n_low^2 - 1/n_high^2)" },
      { title: "Matter also has a wavelength", paragraphs: [
        "De Broglie's relation is lambda = h/p. A non-relativistic electron accelerated from rest through a potential difference V has kinetic energy eV, so p = sqrt(2meV). Combine them to obtain lambda = h/sqrt(2meV). The familiar electron approximation lambda in angstroms = 12.27/sqrt(V in volts) has a stated low-speed range.",
        "At 150 V the predicted wavelength is about 1.00 angstrom. Quadrupling V doubles momentum and halves wavelength. Use the particle's momentum, not photon momentum hc: matter waves are not electromagnetic waves travelling at c."
      ], formula: "lambda = h/p; non-relativistic electron: lambda = h/sqrt(2meV)" },
      { title: "Uncertainty is a property of the quantum state", paragraphs: [
        "Heisenberg's relation connects spreads in position and the matching momentum component: Delta x Delta p_x >= hbar/2. These are standard deviations of a state, not simply a ruler's least count. It is not an excuse for careless measurement and does not mean the electron secretly follows a known circular track.",
        "Using hbar = 1.055 x 10^-34 J s and Delta x = 1.00 x 10^-10 m gives Delta p_x at least 5.275 x 10^-25 kg m/s. With electron mass 9.11 x 10^-31 kg, the corresponding non-relativistic velocity spread is at least 5.79 x 10^5 m/s. Sharper localization requires greater momentum spread."
      ], formula: "Delta x Delta p_x >= hbar/2 = h/(4 pi)" },
    ],
    examples: [
      { question: "A 620 nm photon strikes a surface with work function 1.50 eV. Find Kmax and stopping potential. Use hc = 1240 eV nm.", steps: ["Photon energy = 1240/620 = 2.00 eV.", "Kmax = 2.00 - 1.50 = 0.50 eV.", "Stopping-potential magnitude is 0.50 V; the electron-energy numerical value in eV equals e times the voltage in these units."], answer: "0.50 eV; 0.50 V." },
      { question: "Find the n = 2 radius and energy of He+. Use a0 = 0.0529 nm.", steps: ["He+ has one electron and Z = 2, so the hydrogen-like model applies.", "Radius = 0.0529 x 4/2 = 0.1058 nm.", "Energy = -13.6 x 4/4 = -13.6 eV."], answer: "0.1058 nm and -13.6 eV in the stated model." },
      { question: "For an electron accelerated non-relativistically, how does wavelength change from 100 V to 400 V?", steps: ["Momentum is proportional to sqrt(V), not V.", "Momentum doubles because sqrt(400/100) = 2.", "Wavelength is inversely proportional to momentum."], answer: "The wavelength halves: approximately 1.227 to 0.6135 angstrom using the stated shortcut." },
    ],
    quiz: [
      { question: "A 500 nm photon has what energy using hc = 1240 eV nm?", options: ["0.403 eV", "2.48 eV", "6.20 eV", "1240 eV"], answer: 1, explanation: "Divide 1240 eV nm by 500 nm: 2.48 eV. The wavelength units cancel." },
      { question: "Below a metal's single-photon photoelectric threshold, increasing intensity ordinarily:", options: ["Raises every photon's frequency", "Guarantees electron emission", "Does not overcome the per-photon threshold", "Makes the work function zero"], answer: 2, explanation: "More below-threshold photons do not change the energy of each photon in this elementary model." },
      { question: "For hydrogen at n = 2, energy required to reach the continuum is:", options: ["3.40 eV", "13.6 eV", "-3.40 eV", "10.2 eV"], answer: 0, explanation: "E2 = -13.6/4 = -3.40 eV. Reaching zero requires a positive 3.40 eV." },
      { question: "Which system permits the basic one-electron Bohr formulas?", options: ["Neutral helium", "Neutral lithium", "Oxygen molecule", "Li2+"], answer: 3, explanation: "Li2+ retains exactly one electron. The other listed systems are not hydrogen-like one-electron ions." },
      { question: "Quadrupling non-relativistic electron accelerating voltage changes wavelength by:", options: ["Four times", "One half", "One quarter", "Two times"], answer: 1, explanation: "Lambda is proportional to V^(-1/2), so the ratio is 1/sqrt(4) = 1/2." },
      { question: "Halving position spread changes the minimum allowed momentum spread by:", options: ["One half", "One quarter", "Two times", "No constraint"], answer: 2, explanation: "The uncertainty-product lower bound stays fixed, so the minimum momentum spread doubles." },
    ],
    sources: [syllabus,
      { title: "OpenStax: electromagnetic energy", url: "https://openstax.org/books/chemistry-2e/pages/6-1-electromagnetic-energy" },
      { title: "OpenStax: Bohr model", url: "https://openstax.org/books/chemistry-2e/pages/6-2-the-bohr-model" },
      { title: "OpenStax: quantum theory", url: "https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory" }],
  },
  {
    id: "periodic-trends", subject: "Chemistry", unit: 9,
    title: "Periodic trends: explain the pattern before memorising it",
    summary: "Electronic blocks, shielding, radii, ionization, electron gain and reactivity.",
    prerequisites: "Electron configurations and the Atomic Structure foundation.",
    remaining: "Written Unit 9 foundation, not a Marin recording. Valence, oxidation-state patterns, detailed group reactivity and further exceptions need additional practice and teaching; this is not complete inorganic Chemistry.",
    sections: [
      { title: "Read the table as a repeating electron pattern", paragraphs: [
        "The modern periodic law relates recurring properties to atomic number, not increasing atomic mass. Periods track occupied-shell patterns, while similar outer configurations explain many group similarities. Do not infer that all members react identically.",
        "The differentiating electron identifies an s, p, d or f block. Sodium ends in 3s1 and is s-block; chlorine ends in 3p5 and is p-block. Helium has 1s2 but belongs with the noble gases in group 18 because of its closed-shell chemistry. Distinguish electronic block from group placement."
      ] },
      { title: "Competing effects explain atomic size", paragraphs: [
        "Across a typical main-group period, increasing nuclear charge strengthens the effective attraction while electrons are added within the same principal shell. Shielding is incomplete, so radius generally decreases. Down a group, added shells and shielding generally increase radius despite higher nuclear charge.",
        "A radius needs a definition: covalent, metallic and van der Waals values are not interchangeable. A noble-gas nonbonded radius should not be compared blindly with a neighbour's covalent radius. The simple directional arrows are trends, not substitutes for specified data."
      ] },
      { title: "Same electron count makes ionic comparisons simpler", paragraphs: [
        "A cation is usually smaller than its neutral parent because electrons are removed and the remaining electrons experience stronger attraction; removal of an outer shell can make the change dramatic. An anion is usually larger because added electrons increase repulsion within the cloud.",
        "For an isoelectronic series, electron count is fixed. More protons pull that common electron population inward. Thus O2-, F-, Na+ and Mg2+ decrease in radius in that order. Check the electron count first: a mixed series is not automatically isoelectronic."
      ] },
      { title: "Ionization energy is positive and has exceptions", paragraphs: [
        "First ionization enthalpy removes one electron from an isolated gaseous atom. It generally rises across a period and falls down a group. Be exceeds B because B loses a higher-energy 2p electron; N exceeds O because O has a paired 2p electron whose removal relieves repulsion.",
        "Successive ionizations always concern progressively more positive gaseous ions. A large jump after the second removal can indicate two easily removed outer electrons, provided the electronic configuration supports that interpretation. Do not confuse ionization energy with electron affinity or a bond energy."
      ] },
      { title: "Electron gain requires a sign convention", paragraphs: [
        "Write the process X(g) + e- -> X-(g). Electron gain enthalpy is negative when this process releases energy; some electron-affinity tables instead quote a positive released-energy magnitude. Read the convention before sorting numbers.",
        "Chlorine has a more negative first electron gain enthalpy than fluorine: adding an electron to fluorine's compact 2p cloud has stronger repulsion. Adding a second electron to an already negative gaseous ion requires energy. Neither rule says fluorine is less electronegative in a bond."
      ] },
      { title: "Separate bond attraction from isolated-atom processes", paragraphs: [
        "Electronegativity describes attraction for shared electron density in a bond. It is not the same as the energy of adding an electron to an isolated atom. Across a typical main-group period metallic character generally decreases, while down a group it generally increases.",
        "Alkali metals more readily lose their outer electron down the group; halogen oxidizing behavior in ordinary aqueous chemistry broadly weakens down the group. Actual reactions also depend on hydration, bond energies, conditions and kinetics. Use trends to explain comparisons, then check exceptions and the reaction environment."
      ] },
    ],
    examples: [
      { question: "Order O2-, F-, Na+ and Mg2+ by decreasing radius.", steps: ["Each has ten electrons.", "Their proton numbers are 8, 9, 11 and 12.", "Within this isoelectronic series, increasing nuclear attraction contracts the electron cloud."], answer: "O2- > F- > Na+ > Mg2+." },
      { question: "Why is first ionization enthalpy of oxygen lower than nitrogen despite increasing atomic number?", steps: ["Nitrogen has three singly occupied 2p orbitals.", "Oxygen has a pair in one 2p orbital.", "Removing a paired oxygen electron reduces repulsion, creating an exception to the broad trend."], answer: "Electron pairing offsets the simple across-period trend." },
      { question: "An atom has configuration [Ne]3s2. Predict its period, group and a likely successive-ionization jump.", steps: ["Highest occupied principal shell is 3: period 3.", "The s2 main-group outer configuration places it in group 2.", "After two removals, the closed neon-like core remains; the third ionization needs much more energy."], answer: "Period 3, group 2; a large jump from second to third ionization." },
    ],
    quiz: [
      { question: "The modern periodic law is based on:", options: ["Atomic mass alone", "Atomic number", "Neutron count", "Molecular mass"], answer: 1, explanation: "Atomic number determines the nuclear charge and electronic pattern underlying periodic properties." },
      { question: "Which is smallest in the listed ten-electron series?", options: ["O2-", "F-", "Na+", "Mg2+"], answer: 3, explanation: "Mg2+ has the largest nuclear charge while all four species retain ten electrons." },
      { question: "Which exception to a simple increasing first-ionization trend is correct?", options: ["B > Be", "O > N", "Be > B", "Na > Ne"], answer: 2, explanation: "B loses a 2p electron more readily than Be loses a 2s electron, so Be has the higher value." },
      { question: "For exothermic X(g) + e- -> X-(g), electron gain enthalpy is:", options: ["Negative", "Always zero", "Positive", "A radius"], answer: 0, explanation: "The system releases energy, so its enthalpy change is negative under this stated convention." },
      { question: "A [Ne]3s2 atom has the largest core-related jump after removal of:", options: ["One outer electron", "Two outer electrons", "Ten outer electrons", "No electrons"], answer: 1, explanation: "Two outer electrons are removed before ionization starts removing the neon-like core." },
      { question: "Which comparison is correct?", options: ["Fluorine has lower electronegativity than chlorine", "Electron gain enthalpy equals electronegativity", "Second electron gain is always exothermic", "Chlorine's first electron gain enthalpy is more negative than fluorine's"], answer: 3, explanation: "Compact fluorine 2p orbitals create stronger added-electron repulsion; this does not reverse electronegativity." },
    ],
    sources: [syllabus, { title: "OpenStax: periodic variations", url: "https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties" }],
  },
  {
    id: "chemical-bonding", subject: "Chemistry", unit: 3,
    title: "Chemical bonding: from electrons to shape and properties",
    summary: "Lewis structures, charge bookkeeping, VSEPR, polarity, overlap and molecular orbitals.",
    prerequisites: "Valence electrons, periodic trends and basic orbital terminology.",
    remaining: "Written companion to the eight-chapter Marin recording for Unit 3. The recording adds polarization comparisons, five- and six-domain shapes, bond counting and hydrogen bonding. Quantitative lattice-enthalpy cycles, fuller molecular-orbital diagrams and additional shape comparisons remain; this is not complete unit coverage.",
    sections: [
      { title: "Bond formation must lower the appropriate energy", paragraphs: [
        "Atoms do not bond merely because someone tells them to complete an octet. Bond formation can lower a system's energy through interactions among nuclei and electrons. The octet rule is a useful bookkeeping pattern with exceptions, including electron-deficient and odd-electron species.",
        "Ionic solids are stabilized by attractions in an extended lattice; transferring an electron between isolated atoms is not the entire energy story. Small, highly charged ions tend to have stronger electrostatic lattice interactions for comparable structures. A full lattice-enthalpy calculation needs an energy cycle and a stated formation-versus-separation sign convention."
      ] },
      { title: "Count all valence electrons before drawing", paragraphs: [
        "For a Lewis structure, add valence electrons from every atom, add electrons for negative charge and subtract for positive charge. Draw a plausible connected skeleton, satisfy terminal shells where appropriate, then place remaining electrons and examine the central atom.",
        "CO2 has 4 + 2 x 6 = 16 valence electrons. Two C=O double bonds and two lone pairs on each oxygen account for them. A double bond counts as one electron domain for shape, even though it contains two shared electron pairs. Hydrogen follows a duet, not an octet."
      ] },
      { title: "Formal charge and resonance improve the bookkeeping", paragraphs: [
        "Formal charge is valence electrons minus nonbonding electrons minus half the bonding electrons. In NH4+, nitrogen has four single bonds and no lone pair: 5 - 0 - 4 = +1. Hydrogen atoms each have zero formal charge, so the total matches the ion charge.",
        "Resonance contributors keep the nuclei in the same arrangement but differ in electron placement. They are not rapidly alternating independent molecules. Carbonate's equivalent C-O bonds reflect delocalization; one chosen Lewis drawing is not three permanently different bond lengths. Formal charge is a bookkeeping quantity, not a measured full ionic charge on an atom."
      ], formula: "Formal charge = valence - nonbonding - bonding/2" },
      { title: "Electron domains predict shape, not just a name", paragraphs: [
        "VSEPR compares electron domains around a central atom. Two domains give a linear arrangement, three trigonal planar and four tetrahedral. Molecular shape names the atom positions only; lone pairs still affect the arrangement but are not counted as bonded atoms in that name.",
        "CO2 is linear. NH3 has three bonds and one lone pair: tetrahedral electron-domain arrangement but trigonal-pyramidal molecular shape. H2O has two bonds and two lone pairs: a bent molecule. Lone-pair effects help reduce the H-N-H and H-O-H angles below the ideal tetrahedral 109.5 degrees; exact angles are not universal domain-count constants."
      ] },
      { title: "Vector addition decides whether bond dipoles cancel", paragraphs: [
        "A polar bond need not make a polar molecule. CO2 has polar C-O bonds, but its equal opposite bond dipoles cancel in the ideal linear molecule. Bent water does not have that cancellation and has a net molecular dipole.",
        "Consider both shape and whether surrounding atoms are identical. Trigonal-planar BF3 has symmetry cancellation, while replacing a terminal atom can destroy it. Do not add dipole magnitudes without directions. A molecular dipole is an observable consequence of the full charge distribution, not a literal arrow drawn only between two labels."
      ] },
      { title: "Overlap and hybridization are complementary models", paragraphs: [
        "In valence-bond language, head-on overlap produces a sigma bond and side-on overlap produces a pi bond. A double bond contains one sigma and one pi; a triple bond contains one sigma and two pi bonds. Rotation that destroys side-on overlap is not freely allowed like the elementary single-sigma-bond picture.",
        "The familiar localized descriptions use sp for two-domain linear carbon, sp2 for three-domain planar carbon and sp3 for four-domain carbon. In ethene each carbon is sp2 with an unhybridized p orbital contributing to the pi bond. Hybridization is a model for localized bonding, not an independently measured label proving every geometry. Hydrogen bonding requires an appropriate donor and acceptor; it influences water's properties and can occur between molecules or within one molecule."
      ] },
      { title: "Molecular orbitals explain what Lewis drawings miss", paragraphs: [
        "Molecular orbitals extend over the molecule. Combining compatible atomic wavefunctions gives bonding and antibonding combinations; electrons fill according to energy, Pauli and Hund principles. Bond order is half the difference between bonding and antibonding electron populations.",
        "For O2, the elementary molecular-orbital configuration has two unpaired electrons in degenerate pi antibonding orbitals, explaining paramagnetism. Removing one of these electrons gives O2+ with bond order 2.5; adding one gives O2- with bond order 1.5. Within this related series, higher bond order generally means a shorter, stronger bond. Orbital ordering varies between diatomic species, so a single diagram must not be reused blindly."
      ], formula: "Bond order = (N_bonding - N_antibonding)/2" },
    ],
    examples: [
      { question: "Find nitrogen's formal charge in NH4+.", steps: ["Nitrogen supplies 5 valence electrons.", "There are no nonbonding electrons and 8 bonding electrons around N.", "Formal charge = 5 - 0 - 8/2 = +1; the whole ion's charge is also +1."], answer: "+1 on N in this Lewis bookkeeping." },
      { question: "Compare the electron-domain and molecular shapes of NH3 and H2O.", steps: ["Each central atom has four electron domains.", "NH3 has three bond domains plus one lone pair: trigonal pyramidal.", "H2O has two bond domains plus two lone pairs: bent."], answer: "Both have tetrahedral domain arrangements, but their molecular shapes differ." },
      { question: "Rank bond orders of O2+, O2 and O2- in the elementary MO model.", steps: ["O2 has bond order 2.", "Removing an antibonding electron increases bond order by 0.5.", "Adding an antibonding electron decreases bond order by 0.5."], answer: "O2+ (2.5) > O2 (2) > O2- (1.5)." },
    ],
    quiz: [
      { question: "Total valence electrons in CO2 are:", options: ["8", "12", "16", "18"], answer: 2, explanation: "Carbon contributes four and the two oxygen atoms contribute twelve: total sixteen." },
      { question: "Molecular shape of NH3 is:", options: ["Trigonal planar", "Trigonal pyramidal", "Linear", "Square planar"], answer: 1, explanation: "Three bonded atoms and one lone pair produce a trigonal-pyramidal molecular shape." },
      { question: "Why is ideal CO2 nonpolar despite polar bonds?", options: ["It has no electrons", "Oxygen is nonpolar in every compound", "Double bonds never have dipoles", "Equal opposite bond dipoles cancel"], answer: 3, explanation: "Its linear symmetric charge distribution has no net molecular dipole." },
      { question: "An ordinary double bond consists of:", options: ["One sigma and one pi bond", "Two sigma bonds", "Two pi bonds only", "One ionic and one metallic bond"], answer: 0, explanation: "Head-on overlap provides one sigma bond, and side-on overlap provides one pi bond." },
      { question: "Why is ground-state O2 paramagnetic in elementary MO theory?", options: ["It has no bonds", "All electrons are paired", "It has two unpaired pi-antibonding electrons", "It contains a permanent cation"], answer: 2, explanation: "Hund filling of degenerate pi-antibonding orbitals leaves two unpaired electrons." },
      { question: "Removing one antibonding electron from O2 gives bond order:", options: ["1.5", "2.5", "0", "4"], answer: 1, explanation: "O2 starts at two; reducing the antibonding population by one raises the bond order by one half." },
    ],
    sources: [syllabus,
      { title: "OpenStax: covalent bonding", url: "https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding" },
      { title: "OpenStax: shape and polarity", url: "https://openstax.org/books/chemistry-2e/pages/7-6-molecular-structure-and-polarity" },
      { title: "OpenStax: hybrid orbitals", url: "https://openstax.org/books/chemistry-2e/pages/8-2-hybrid-atomic-orbitals" },
      { title: "OpenStax: molecular orbitals", url: "https://openstax.org/books/chemistry-2e/pages/8-4-molecular-orbital-theory" }],
  },
];
