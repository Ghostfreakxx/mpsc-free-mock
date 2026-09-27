import type { QuestionSeed } from "./reviewed-content";

export const additionalQuestions: Record<string, QuestionSeed[]> = {
  "political-science": [
    ["Which part of the Constitution contains the Directive Principles of State Policy?", ["Part II", "Part III", "Part IV", "Part IVA"], 2, "Directive Principles are in Part IV; Fundamental Duties are in Part IVA.", "Constitution: Part IV heading"],
    ["Which pair is correctly matched?", ["Article 14 - Fundamental Duties", "Article 32 - Constitutional remedies", "Article 51A - Finance Commission", "Article 21A - Election Commission"], 1, "Article 32 concerns enforcement of the rights in Part III.", "Articles 14, 21A, 32 and 51A"],
    ["A statement says Article 21A guarantees compulsory education to every person of every age. What is the error?", ["The article concerns elections", "The article applies only to university students", "The article specifies ages six to fourteen", "The article concerns only teacher recruitment"], 2, "Article 21A specifies an age range; it is not an all-ages compulsory-education provision.", "Article 21A"],
  ],
  mizoram: [
    ["Mizoram became a Union Territory on:", ["21 January 1972", "20 February 1987", "25 April 1952", "1 April 1898"], 0, "Union Territory status began on 21 January 1972, before statehood.", "About Us: North Eastern Areas (Re-organisation) Act paragraph"],
    ["After Independence, the Mizo autonomous district was part of which state?", ["Manipur", "Tripura", "Meghalaya", "Assam"], 3, "The government history places the autonomous district within Assam.", "About Us: post-Independence autonomous district"],
    ["Which constitutional schedule governed the post-Independence autonomous district described in Mizoram's government history?", ["Fifth Schedule", "Sixth Schedule", "Seventh Schedule", "Tenth Schedule"], 1, "The history identifies autonomy under the Sixth Schedule.", "About Us: post-Independence autonomous district"],
  ],
  biology: [
    ["Which scientist explained that new cells arise from pre-existing cells?", ["Robert Brown", "Rudolf Virchow", "Charles Darwin", "Gregor Mendel"], 1, "Virchow extended cell theory by explaining the origin of cells from existing cells.", "Section 8.2: Cell Theory"],
    ["A cheek cell differs from a typical onion epidermal cell by lacking a:", ["Plasma membrane", "Cytoplasm", "Cell wall", "Nucleus"], 2, "A cheek cell is an animal cell and has no cell wall.", "Section 8.3: An Overview of Cell"],
    ["Which feature is shared by prokaryotic and eukaryotic cells?", ["A nuclear envelope", "Membrane-bound mitochondria", "A Golgi apparatus", "Cytoplasm"], 3, "Both cell types contain cytoplasm; membrane-bound organelles distinguish eukaryotes.", "Section 8.3: An Overview of Cell"],
  ],
  physics: [
    ["A 5 kg object's weight where g = 9.8 m/s^2 is:", ["5 N", "49 N", "0.51 N", "98 N"], 1, "Weight = mg = 5 x 9.8 = 49 N.", "Section 4.3: Weight; original calculation"],
    ["The same net force acts on masses m and 3m. The second acceleration is:", ["Three times the first", "Equal to the first", "One third of the first", "Nine times the first"], 2, "At fixed net force, acceleration is inversely proportional to mass.", "Section 4.3: inverse proportionality to mass"],
    ["A 2 kg body has perpendicular net force components 6 N east and 8 N north. Its acceleration magnitude is:", ["5 m/s^2", "7 m/s^2", "10 m/s^2", "14 m/s^2"], 0, "The resultant is sqrt(6^2 + 8^2) = 10 N; divide by 2 kg to obtain 5 m/s^2.", "Section 4.3: net external force as a vector sum; original calculation"],
  ],
  chemistry: [
    ["A chloride ion Cl- has atomic number 17. Its electron count is:", ["16", "17", "18", "35"], 2, "A charge of -1 means one more electron than protons: 18.", "Section 2.3: Ions"],
    ["An atom contains 8 protons and 10 neutrons. Its mass number is:", ["2", "8", "10", "18"], 3, "Mass number counts protons plus neutrons: 8 + 10 = 18.", "Section 2.3: mass number"],
    ["Which pair represents isotopes of the same element?", ["Z=6, A=12 and Z=6, A=14", "Z=6, A=12 and Z=7, A=12", "Z=8, A=16 and Z=7, A=14", "Z=11, A=23 and Z=12, A=24"], 0, "Isotopes share atomic number but differ in mass number.", "Section 2.3: Isotopes"],
  ],
  mathematics: [
    ["For x^2 - 2x - 8 = 0, the two roots are:", ["2 and 4", "-2 and 4", "-4 and 2", "-2 and -4"], 1, "(x - 4)(x + 2) = 0, so x is 4 or -2.", "Section 2.5: factoring; original calculation"],
    ["For which real k does x^2 + 4x + k = 0 have a repeated root?", ["-4", "0", "4", "16"], 2, "A repeated root requires discriminant 16 - 4k = 0, giving k = 4.", "Section 2.5: discriminant; original calculation"],
    ["Which equation is quadratic in x?", ["0x^2 + 3x + 1 = 0", "x^3 + x = 0", "2x + 7 = 0", "5x^2 - 1 = 0"], 3, "The coefficient of x^2 must be nonzero and the highest power must be two.", "Section 2.5: definition of a quadratic equation"],
  ],
  economics: [
    ["At a stated price, sellers offer 150 units and buyers demand 100 units. The market has:", ["A shortage of 50 units", "A surplus of 50 units", "A surplus of 250 units", "Equilibrium"], 1, "Excess supply = 150 - 100 = 50 units.", "Section 3.1: surplus; original numerical example"],
    ["At a stated price, buyers demand 90 units and sellers supply 60 units. Excess demand is:", ["30 units", "60 units", "90 units", "150 units"], 0, "The shortage is quantity demanded minus quantity supplied: 90 - 60 = 30.", "Section 3.1: shortage; original numerical example"],
    ["Holding other factors constant, the standard law of demand relates a higher own price to:", ["A larger quantity demanded", "A smaller quantity demanded", "An automatic rightward demand shift", "An unchanged quantity in every market"], 1, "The standard demand relationship is inverse, with other determinants held constant.", "Section 3.1: Demand for Goods and Services"],
  ],
  sociology: [
    ["A school's intended outcome is to teach literacy. In Merton's terminology, this is a:", ["Latent function", "Social dysfunction", "Manifest function", "Status conflict"], 2, "An intended, recognised consequence is a manifest function.", "Section 1.3: Functionalism; manifest and latent functions"],
    ["Unplanned friendships formed at a training programme illustrate which concept, if they benefit participants?", ["Manifest function", "Latent function", "Role conflict", "Social dysfunction"], 1, "A beneficial unintended consequence is a latent function.", "Section 1.3: Functionalism; original application"],
    ["Which perspective most directly examines face-to-face meaning-making at the micro level?", ["Symbolic interactionism", "Structural functionalism", "Macro conflict analysis", "World-systems analysis"], 0, "Symbolic interactionism focuses on meaning within interaction.", "Section 1.3: theoretical perspectives comparison"],
  ],
  english: [
    ["Choose the correct verb: 'Everyone in the two teams ___ a badge.'", ["have", "are having", "has", "were having"], 2, "'Everyone' is singular despite the nearby plural noun 'teams'.", "Subject-Verb Agreement: indefinite pronouns; original sentence"],
    ["Choose the correct verb: 'The students in the front row ___ attentive.'", ["is", "was", "has been", "are"], 3, "The subject 'students' is plural; 'row' is inside a prepositional phrase.", "Subject-Verb Agreement: intervening phrases; original sentence"],
    ["Which sentence has correct subject-verb agreement?", ["The list of names are ready.", "The list of names is ready.", "The list of names have arrived.", "The list of names were checked."], 1, "The singular subject 'list' requires 'is'; the plural 'names' does not control the verb.", "Subject-Verb Agreement: intervening phrases; original sentence"],
  ],
  "environmental-studies": [
    ["Which class of chemicals is a classic target of ozone-protection controls under the Montreal Protocol?", ["Chlorofluorocarbons", "All carbohydrates", "All proteins", "All noble gases"], 0, "Chlorofluorocarbons are ozone-depleting substances controlled by the Protocol.", "About the Montreal Protocol: controlled substances"],
    ["A policy phases out ozone-depleting refrigerants. Its most direct environmental objective is:", ["Preventing soil erosion", "Protecting stratospheric ozone", "Reducing ocean salinity", "Increasing groundwater recharge"], 1, "Controlling ozone-depleting substances protects the ozone layer.", "About the Montreal Protocol: objective; original application"],
    ["Which statement correctly distinguishes two atmospheric issues?", ["Ozone depletion and climate warming are identical", "All greenhouse gases necessarily deplete ozone", "Ozone depletion concerns loss of protective ozone; climate warming concerns Earth's heat balance", "The ozone layer primarily blocks sound"], 2, "The issues are distinct even though some controlled substances also affect climate.", "About the Montreal Protocol: ozone protection and climate benefits"],
  ],
  "public-administration": [
    ["A service charter promises prompt processing but states no time limit. Which improvement makes the promise easier to evaluate?", ["Removing the complaint address", "Adding a measurable processing deadline", "Making the charter confidential", "Replacing standards with a slogan"], 1, "A measurable deadline makes service performance assessable.", "Citizen's Charter FAQ: standards of services; original application"],
    ["A charter is published in a format its intended users cannot access. Which principle is most directly undermined?", ["Accessibility", "Budget annuality", "Legislative privilege", "Judicial precedent"], 0, "Service commitments must be accessible to their users.", "Citizen's Charter FAQ: non-discrimination and accessibility"],
    ["Which evidence best tests whether a charter's five-day processing standard is being met?", ["The number of slogans displayed", "The cover colour of the charter", "Actual receipt and completion dates of applications", "The number of pages in the charter"], 2, "Elapsed processing times can be compared against the promised standard.", "Citizen's Charter FAQ: service standards; original evaluation example"],
  ],
  history: [
    ["Which is archaeological evidence rather than a proposed interpretation?", ["A recovered seal", "A claim that a figure depicts a particular deity", "An assumption about the ruler's title", "A proposed translation of an undeciphered sign"], 0, "The seal is a material find; the other choices interpret its meaning or context.", "Bricks, Beads and Bones: opening discussion of archaeological evidence"],
    ["According to NCERT, many Harappan seals were made from:", ["Paper", "Steatite", "Steel", "Rubber"], 1, "The opening description identifies steatite as the stone used for Harappan seals.", "Page 1: opening paragraph"],
    ["Why should a proposed religious meaning of a Harappan object be treated cautiously?", ["All objects have readable labels", "No material evidence survives", "An object's function may have competing interpretations", "Only written evidence can be historical evidence"], 2, "NCERT distinguishes material remains from interpretations that may remain uncertain.", "Chapter 1: Problems of Interpretation"],
  ],
  geography: [
    ["Which coordinate is outside the valid range of latitude?", ["45 degrees N", "90 degrees S", "0 degrees", "120 degrees N"], 3, "Latitude extends only to 90 degrees north or south.", "What is latitude?: range from equator to poles"],
    ["Two places are at 12 degrees N and 12 degrees S. Their difference in latitude is:", ["0 degrees", "12 degrees", "24 degrees", "144 degrees"], 2, "They lie on opposite sides of the equator: 12 + 12 = 24 degrees.", "What is latitude?: north/south coordinates; original calculation"],
    ["Lines of latitude run mainly in which direction around Earth?", ["East-west", "North-south through both poles", "Radially toward Earth's centre", "Only along coastlines"], 0, "Parallels run east-west while indicating north-south position.", "What is latitude?: parallels"],
  ],
  education: [
    ["A quiz is followed by targeted feedback and a revised attempt before the final assessment. Its main use is:", ["Summative certification only", "Formative improvement", "Random allocation", "Attendance recording"], 1, "Feedback and revision make the evidence useful for improving current learning.", "Formative Assessment: feedback and revision; original scenario"],
    ["Which factor best distinguishes formative from summative assessment?", ["Whether a pen is used", "Whether the test is online", "The purpose and use of the evidence", "The colour of the answer sheet"], 2, "The same instrument can support different purposes; formative evidence improves ongoing learning.", "Formative Assessment and Summative Assessment"],
    ["A learner compares study methods and changes the one that is not working. This most directly demonstrates:", ["Metacognitive monitoring", "Mechanical copying", "Final certification", "Random guessing"], 0, "Monitoring and improving one's own learning strategies are metacognitive activities.", "Formative Assessment: metacognitive skills"],
  ],
  "general-aptitude": [
    ["A rectangle has perimeter 38 cm and width 7 cm. Its length is:", ["12 cm", "19 cm", "24 cm", "31 cm"], 0, "2(l + 7) = 38, so l = 19 - 7 = 12 cm.", "Section 2.5: geometric applications; original calculation"],
    ["A rectangular garden is twice as long as it is wide and has area 72 m^2. Its width is:", ["3 m", "6 m", "9 m", "12 m"], 1, "2w^2 = 72 gives w^2 = 36; the positive width is 6 m.", "Section 2.5: geometric applications; original calculation"],
    ["A square has area 81 cm^2. Its perimeter is:", ["9 cm", "18 cm", "36 cm", "81 cm"], 2, "The side is sqrt(81) = 9 cm; perimeter = 4 x 9 = 36 cm.", "Section 2.5: square-root property and geometric applications; original calculation"],
  ],
};
