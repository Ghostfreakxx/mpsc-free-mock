// Authored by scripts/expand-mole-atomic-measurements.mjs.
export const moleAtomicMeasurementsAdditions = {
  "mole-concept": {
    "base": 17,
    "quizBase": 24,
    "chapters": [
      {
        "title": "Trace concentration needs a stated ppm basis",
        "formula": "Mass ppm = mass solute / mass solution × 10⁶; 1 mass ppm = 1 mg/kg",
        "script": "Parts per million is a ratio, so first identify whether the stated basis is mass, volume or particle number. On a mass basis, one part per million means one milligram solute per kilogram of solution. It is not automatically one milligram per litre. Consider a supplied solution with solute mass concentration three point zero zero milligrams per litre and density one point two zero kilograms per litre. One litre therefore has solution mass one point two zero kilograms. Dividing three milligrams by that mass gives two point five zero milligrams per kilogram, or two point five zero mass parts per million. In a dilute aqueous solution whose density is approximately one kilogram per litre, milligrams per litre can numerically approximate mass parts per million, but the density assumption must be stated. Mass parts per billion use a factor of one billion instead of one million, so one mass part per million equals one thousand mass parts per billion. The denominator is the total solution mass, not just the solvent mass. Keep the concentration basis attached to the number rather than using a trace unit as a universal shortcut.",
        "points": [
          "Mass ppm definition · 1 mg per kg of solution · Basis must be stated",
          "3.00 mg/L; density 1.20 kg/L · 3.00/1.20 mg/kg · 2.50 mass ppm",
          "Density about 1 kg/L only · mg/L approximately mass ppm · 1 mass ppm = 1000 mass ppb"
        ],
        "board": {
          "heading": "Trace concentration needs a stated ppm basis",
          "columns": [
            "Given / model",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Mass ppm definition",
              "1 mg per kg of solution",
              "Basis must be stated"
            ],
            [
              "3.00 mg/L; density 1.20 kg/L",
              "3.00/1.20 mg/kg",
              "2.50 mass ppm"
            ],
            [
              "Density about 1 kg/L only",
              "mg/L approximately mass ppm",
              "1 mass ppm = 1000 mass ppb"
            ]
          ]
        }
      },
      {
        "title": "Mole fraction and mass fraction are different",
        "formula": "Ideal mixture: pi=xiP; mean M=ΣxiMi; mass fraction uses niMi",
        "script": "Gas mixture composition can be expressed in several different ways. Suppose an ideal mixture contains two moles helium and one mole nitrogen molecules at a common temperature. The total amount is three moles, so the helium mole fraction is two thirds. If the total pressure is three bar, Dalton's law gives a helium partial pressure of two bar and nitrogen partial pressure of one bar. With supplied molar masses four and twenty eight grams per mole, the helium mass is eight grams and nitrogen mass twenty eight grams. Helium therefore contributes only eight of the thirty six grams, a mass fraction of two ninths rather than two thirds. The mean molar mass is total mass divided by total amount, or twelve grams per mole. In the ideal gas model, density equals pressure times mean molar mass divided by the gas constant and absolute temperature, using consistent units. This relation can connect density to composition, but cannot uniquely identify every possible mixture without knowing which gases are present. Mole fraction counts chemical entities, whereas mass fraction weights each entity by its molar mass.",
        "points": [
          "2 mol He + 1 mol N₂ · xHe=2/3; total P=3 bar · pHe=2 bar; pN₂=1 bar",
          "He=4; N₂=28 g/mol · Masses 8 g and 28 g · He mass fraction=8/36=2/9",
          "Total mass 36 g; total amount 3 mol · Mean M=12 g/mol · Ideal density ρ=P mean M/(RT)"
        ],
        "board": {
          "heading": "Mole fraction and mass fraction are different",
          "columns": [
            "Given / model",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "2 mol He + 1 mol N₂",
              "xHe=2/3; total P=3 bar",
              "pHe=2 bar; pN₂=1 bar"
            ],
            [
              "He=4; N₂=28 g/mol",
              "Masses 8 g and 28 g",
              "He mass fraction=8/36=2/9"
            ],
            [
              "Total mass 36 g; total amount 3 mol",
              "Mean M=12 g/mol",
              "Ideal density ρ=P mean M/(RT)"
            ]
          ]
        }
      },
      {
        "title": "Precipitation tracks reacting ions and excess",
        "formula": "Ag⁺ + Cl⁻ → AgCl(s); amount precipitated = smaller initial reacting-ion amount",
        "script": "A precipitation calculation starts with the ions that actually react rather than every ion written in the molecular equation. Mix twenty five point zero zero millilitres of zero point one zero zero molar silver nitrate with forty point zero zero millilitres of zero point zero five zero zero molar sodium chloride. The initial silver ion amount is two point five zero millimoles and chloride amount two point zero zero millimoles. In the simplified complete precipitation model, the one to one net ionic equation makes chloride limiting, giving two point zero zero millimoles silver chloride. Using the supplied molar mass one hundred forty three point five grams per mole, the precipitate mass is zero point two eight seven gram. Excess silver ion is zero point five zero zero millimole. If final liquid volume is approximated by the sum, sixty five millilitres, its excess silver concentration is about zero point zero zero seven six nine molar. Sodium and nitrate are spectator ions in this net reaction; they have not disappeared from solution. Finite solubility, complex formation and volume changes would require a more detailed model. State those approximations before treating the limiting ion result as exact experimental recovery.",
        "points": [
          "Ag⁺ initially 2.50 mmol · Cl⁻ initially 2.00 mmol · Cl⁻ limits; AgCl=2.00 mmol",
          "AgCl M=143.5 g/mol · 0.00200×143.5 · 0.287 g theoretical precipitate",
          "Ag⁺ excess 0.500 mmol · Assume total liquid volume 65.00 mL · [Ag⁺]excess ≈ 0.00769 M"
        ],
        "board": {
          "heading": "Precipitation tracks reacting ions and excess",
          "columns": [
            "Given / model",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Ag⁺ initially 2.50 mmol",
              "Cl⁻ initially 2.00 mmol",
              "Cl⁻ limits; AgCl=2.00 mmol"
            ],
            [
              "AgCl M=143.5 g/mol",
              "0.00200×143.5",
              "0.287 g theoretical precipitate"
            ],
            [
              "Ag⁺ excess 0.500 mmol",
              "Assume total liquid volume 65.00 mL",
              "[Ag⁺]excess ≈ 0.00769 M"
            ]
          ]
        }
      },
      {
        "title": "Atom economy and isolated yield measure different things",
        "formula": "Atom economy = stoichiometric mass of desired product / mass of stoichiometric reactants × 100%",
        "script": "Atom economy is a supporting stoichiometric measure of how much reactant mass enters the desired product in a balanced net reaction. It differs from the percentage yield measured in a particular experiment. Consider ethanoic acid plus ethanol forming ethyl ethanoate and water. Use rounded molar masses sixty, forty six, eighty eight and eighteen grams per mole, respectively. One stoichiometric reaction unit starts with one hundred six grams of reactants and forms eighty eight grams of desired ester plus eighteen grams of water. The ester atom economy is therefore eighty eight divided by one hundred six, or about eighty three point zero percent. Even a hypothetical one hundred percent ester yield would not change that stoichiometric fraction. If an experiment starting with the stated stoichiometric amounts instead isolates ester at eighty percent of theoretical yield, its ester mass is seventy point four grams. Product purity is yet another question: an impure recovered sample mass cannot automatically be counted as pure ester. This simplified atom economy calculation excludes solvents and other process inputs and therefore does not measure every environmental impact or practical waste stream. Keep balanced reaction design, reaction yield and recovered sample purity as separate quantities.",
        "points": [
          "Acid 60 + alcohol 46 g/mol · Ester 88 + water 18 g/mol · Total mass 106 g per reaction unit",
          "Desired ester atom economy · 88/106×100 · About 83.0%; not isolated yield",
          "80.0% of 88 g theoretical ester · Pure isolated ester=70.4 g · Purity and process inputs are separate"
        ],
        "board": {
          "heading": "Atom economy and isolated yield measure different things",
          "columns": [
            "Given / model",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Acid 60 + alcohol 46 g/mol",
              "Ester 88 + water 18 g/mol",
              "Total mass 106 g per reaction unit"
            ],
            [
              "Desired ester atom economy",
              "88/106×100",
              "About 83.0%; not isolated yield"
            ],
            [
              "80.0% of 88 g theoretical ester",
              "Pure isolated ester=70.4 g",
              "Purity and process inputs are separate"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A solution contains 3.00 mg solute per litre and has density 1.20 kg/L. Its mass-based ppm is:",
        "options": [
          "2.50 ppm",
          "3.60 ppm",
          "3.00 ppm",
          "0.400 ppm"
        ],
        "answer": 0,
        "explanation": "One litre has 1.20 kg solution, so 3.00/1.20=2.50 mg/kg, equal to 2.50 mass ppm."
      },
      {
        "question": "One mass-based ppm equals:",
        "options": [
          "One mg/L at every density",
          "1000 mass-based ppb",
          "One g per g solution",
          "100 mass-based ppb"
        ],
        "answer": 1,
        "explanation": "The mass-fraction factors are 10^6 and 10^9; the same fraction is 1000 times as many ppb."
      },
      {
        "question": "An ideal mixture has 2 mol He and 1 mol N2 at total pressure 3 bar. The helium partial pressure is:",
        "options": [
          "1 bar",
          "3 bar",
          "2 bar",
          "2/9 bar"
        ],
        "answer": 2,
        "explanation": "Helium mole fraction is 2/3, so its partial pressure is (2/3)×3=2 bar."
      },
      {
        "question": "For that mixture, using He=4 and N2=28 g/mol, helium mass fraction is:",
        "options": [
          "2/3",
          "1/3",
          "7/9",
          "2/9"
        ],
        "answer": 3,
        "explanation": "Helium mass is 8 g and total mass 36 g, so its mass fraction is 8/36=2/9."
      },
      {
        "question": "Mix 2.50 mmol Ag+ with 2.00 mmol Cl− in the complete AgCl precipitation model. With AgCl=143.5 g/mol, precipitate mass is:",
        "options": [
          "0.287 g",
          "0.35875 g",
          "0.07175 g",
          "0.574 g"
        ],
        "answer": 0,
        "explanation": "The 1:1 reaction is limited by 2.00 mmol chloride: 0.00200×143.5=0.287 g."
      },
      {
        "question": "The same mixture leaves 0.500 mmol excess Ag+ in an assumed 65.00 mL liquid volume. Its excess concentration is approximately:",
        "options": [
          "0.0308 M",
          "0.00769 M",
          "0.0385 M",
          "0.000500 M"
        ],
        "answer": 1,
        "explanation": "Divide 0.000500 mol by 0.06500 L; spectator-ion amounts do not replace the reacting-ion balance."
      },
      {
        "question": "For acid 60 + alcohol 46 → desired ester 88 + water 18, ester atom economy is approximately:",
        "options": [
          "100%",
          "80.0%",
          "83.0%",
          "70.4%"
        ],
        "answer": 2,
        "explanation": "Use the balanced stoichiometric masses: 88/(60+46)×100≈83.0%."
      },
      {
        "question": "If theoretical pure ester is 88.0 g and isolated pure-product yield is 80.0%, recovered ester mass is:",
        "options": [
          "88.0 g",
          "106 g",
          "83.0 g",
          "70.4 g"
        ],
        "answer": 3,
        "explanation": "Isolated yield applies to theoretical product: 0.800×88.0=70.4 g; it is distinct from atom economy."
      }
    ],
    "sources": [
      {
        "title": "OpenStax: trace concentration units",
        "url": "https://openstax.org/books/chemistry-2e/pages/3-4-other-units-for-solution-concentrations"
      },
      {
        "title": "OpenStax: ideal gas mixtures and partial pressures",
        "url": "https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions"
      },
      {
        "title": "OpenStax: precipitation reactions",
        "url": "https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions"
      },
      {
        "title": "American Chemical Society: atom economy and green chemistry",
        "url": "https://www.acs.org/green-chemistry-sustainability/principles/12-principles-of-green-chemistry.html"
      }
    ]
  },
  "atomic-structure": {
    "base": 17,
    "quizBase": 26,
    "chapters": [
      {
        "title": "A head-on alpha particle has a closest approach",
        "formula": "Heavy fixed nucleus: K∞ = k(2e)(Ze)/rmin; use 1.44 MeV fm for ke²",
        "script": "Rutherford scattering supports a small concentrated positive nucleus, but a classical head on trajectory also supplies a useful energy calculation. Model an alpha particle as charge plus two e approaching a heavy fixed nucleus of charge plus Z e. Take its initial kinetic energy far from the nucleus, where the interaction potential is approximately zero. At the head on turning point, its kinetic energy in this fixed nucleus approximation is zero and the initial energy has become electrostatic potential energy. Thus the closest centre to centre separation equals the Coulomb constant times two Z e squared divided by the initial kinetic energy. With the supplied conversion that the Coulomb constant times e squared is one point four four mega electron volt femtometres, a five point zero zero mega electron volt alpha particle approaching gold with Z seventy nine gives forty five point five femtometres approximately. Doubling the incident energy halves this turning separation in the model. This value is not the nuclear radius and not a claim that the particle touches the nucleus. Nonzero impact parameter, recoil, electron screening and short range nuclear effects require additional treatment.",
        "points": [
          "Head-on α; charge +2e · Heavy fixed nucleus +Ze · Initial K becomes Coulomb potential",
          "K=5.00 MeV; gold Z=79 · rmin=2×79×1.44/5.00 · 45.5 fm approximately",
          "Double initial K; same nucleus · rmin inversely proportional to K · 22.8 fm; not a nuclear radius"
        ],
        "board": {
          "heading": "A head-on alpha particle has a closest approach",
          "columns": [
            "Given / model",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Head-on α; charge +2e",
              "Heavy fixed nucleus +Ze",
              "Initial K becomes Coulomb potential"
            ],
            [
              "K=5.00 MeV; gold Z=79",
              "rmin=2×79×1.44/5.00",
              "45.5 fm approximately"
            ],
            [
              "Double initial K; same nucleus",
              "rmin inversely proportional to K",
              "22.8 fm; not a nuclear radius"
            ]
          ]
        }
      },
      {
        "title": "The 2s radial node differs from the 2p angular node",
        "formula": "Hydrogen x=r/a₀: P2s=x²(2−x)²e⁻ˣ/8; P2p=x⁴e⁻ˣ/24",
        "script": "Excited orbital distributions show why a node must be described with its geometry. For a hydrogen atom, define x as radius divided by the Bohr radius. The normalized two s radial distribution with respect to x is x squared times two minus x squared times the exponential of minus x, divided by eight, where the entire two minus x factor is squared. It vanishes at x equal to two, creating a spherical radial node between inner and outer probability regions. The two p radial distribution is x to the fourth times the exponential of minus x, divided by twenty four. It has no positive radius radial node. Yet a real two p orbital has an angular nodal plane, so zero radial nodes does not mean no nodes at all. Both plotted radial distributions vanish at the origin because the spherical shell factor contains radius squared; that endpoint is not counted as an extra radial node. The two s radial wavefunction changes sign across its radial node, while its squared probability remains nonnegative. These are stationary probability distributions, not paths followed by an electron or rigid boundaries enclosing every measurement.",
        "points": [
          "Hydrogen; x=r/a₀ · P2s=x²(2−x)²exp(−x)/8 · One radial node: x=2",
          "P2p=x⁴exp(−x)/24 · No positive-radius radial zero · One angular nodal plane in real 2p",
          "P(x)dx gives shell probability · Both curves vanish at x=0 · Origin is not an extra radial node"
        ],
        "board": {
          "heading": "The 2s radial node differs from the 2p angular node",
          "columns": [
            "Given / model",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Hydrogen; x=r/a₀",
              "P2s=x²(2−x)²exp(−x)/8",
              "One radial node: x=2"
            ],
            [
              "P2p=x⁴exp(−x)/24",
              "No positive-radius radial zero",
              "One angular nodal plane in real 2p"
            ],
            [
              "P(x)dx gives shell probability",
              "Both curves vanish at x=0",
              "Origin is not an extra radial node"
            ]
          ]
        }
      },
      {
        "title": "Equal speed and equal kinetic energy give different wavelengths",
        "formula": "Nonrelativistic: λ=h/(mv); at equal K, λ=h/√(2mK)",
        "script": "A matter wave comparison must specify what is held equal. For a nonrelativistic particle, de Broglie wavelength is Planck's constant divided by momentum. At equal speed, momentum is proportional to mass, so wavelength is inversely proportional to mass. At equal kinetic energy, however, momentum is the square root of twice mass times kinetic energy, so wavelength varies with the inverse square root of mass. Suppose the supplied proton to electron mass ratio is approximately eighteen hundred thirty six. At the same nonrelativistic kinetic energy, the electron wavelength is the square root of eighteen hundred thirty six times the proton wavelength, about forty two point eight times as large. At the same speed, the ratio is instead eighteen hundred thirty six. Equal accelerating potential magnitudes also give equal kinetic energies for particles starting from rest with equal charge magnitudes, provided the electric field accelerates each particle in the appropriate direction and losses are negligible. That condition does not apply unchanged to a doubly charged alpha particle. Compare momentum formulas first, and keep relativistic corrections outside the stated low speed model.",
        "points": [
          "Electron / proton; equal speed · λ inversely proportional to mass · λe/λp ≈ 1836",
          "Equal nonrelativistic kinetic energy · λ inversely proportional to √mass · λe/λp=√1836 ≈ 42.8",
          "Equal |q| and accelerating |V| · K gain=|q| |V| from rest · Equal K; not automatically equal speed"
        ],
        "board": {
          "heading": "Equal speed and equal kinetic energy give different wavelengths",
          "columns": [
            "Given / model",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "Electron / proton; equal speed",
              "λ inversely proportional to mass",
              "λe/λp ≈ 1836"
            ],
            [
              "Equal nonrelativistic kinetic energy",
              "λ inversely proportional to √mass",
              "λe/λp=√1836 ≈ 42.8"
            ],
            [
              "Equal |q| and accelerating |V|",
              "K gain=|q| |V| from rest",
              "Equal K; not automatically equal speed"
            ]
          ]
        }
      },
      {
        "title": "Beam power counts photons before it predicts current",
        "formula": "Photon rate=P/Eγ; collected electron rate=ηP/Eγ; current=eηP/Eγ",
        "script": "Photon energy and photon arrival rate answer different experimental questions. Consider a monochromatic beam with incident power four point zero zero milliwatts and photon energy four point zero zero electron volts. Use the supplied rounded elementary charge one point six zero times ten to the minus nineteen coulomb, so one photon carries six point four zero times ten to the minus nineteen joule. Power divided by photon energy then gives six point two five times ten to the fifteen photons per second. Now stipulate an overall collected electron yield of twenty percent, meaning zero point two zero collected electron per incident photon. The electron collection rate is one point two five times ten to the fifteen per second, and the resulting current is zero point two zero zero milliampere. This efficiency already includes the stated emission and collection losses, so it must not be applied twice. The calculation presumes photon energy above the material threshold and an elementary one photon process. At fixed beam power, increasing photon energy reduces photon count rate. Maximum photoelectron kinetic energy instead depends on photon energy minus work function, not simply on total beam power.",
        "points": [
          "P=4.00 mW; Eγ=4.00 eV · e=1.60×10⁻¹⁹ C · Photon rate=6.25×10¹⁵ s⁻¹",
          "Overall collected yield η=0.200 · Electron rate=η×photon rate · 1.25×10¹⁵ electrons/s",
          "I=e×electron rate · 0.000200 A · 0.200 mA; above-threshold model"
        ],
        "board": {
          "heading": "Beam power counts photons before it predicts current",
          "columns": [
            "Given / model",
            "Reason / calculation",
            "Result / limit"
          ],
          "rows": [
            [
              "P=4.00 mW; Eγ=4.00 eV",
              "e=1.60×10⁻¹⁹ C",
              "Photon rate=6.25×10¹⁵ s⁻¹"
            ],
            [
              "Overall collected yield η=0.200",
              "Electron rate=η×photon rate",
              "1.25×10¹⁵ electrons/s"
            ],
            [
              "I=e×electron rate",
              "0.000200 A",
              "0.200 mA; above-threshold model"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "For a head-on 5.00 MeV alpha particle and fixed gold nucleus Z=79, use ke²=1.44 MeV fm. Closest separation is approximately:",
        "options": [
          "7.00 fm",
          "45.5 fm",
          "22.8 fm",
          "227.5 fm"
        ],
        "answer": 1,
        "explanation": "Energy conservation gives rmin=2×79×1.44/5.00≈45.5 fm; this is not the nuclear radius."
      },
      {
        "question": "In that same fixed-nucleus head-on model, doubling initial alpha kinetic energy changes closest separation to:",
        "options": [
          "Twice the original",
          "The same value",
          "Half the original",
          "Four times the original"
        ],
        "answer": 2,
        "explanation": "The turning separation is inversely proportional to the supplied initial kinetic energy."
      },
      {
        "question": "For hydrogen, P2s(x)=x²(2−x)²e^(−x)/8. Its positive-radius radial node occurs at:",
        "options": [
          "x=0 only",
          "x=1",
          "x=4",
          "x=2"
        ],
        "answer": 3,
        "explanation": "The factor (2−x)² vanishes at x=2; the origin endpoint is not counted as an additional radial node."
      },
      {
        "question": "Which statement correctly compares hydrogen 2s and a real 2p orbital?",
        "options": [
          "2s has one radial node; real 2p has an angular nodal plane",
          "Both have two radial nodes",
          "2p has no node of any kind",
          "2s probability becomes negative beyond its node"
        ],
        "answer": 0,
        "explanation": "Node geometry matters: 2s has one spherical radial node; a real 2p has no radial node but has an angular nodal plane."
      },
      {
        "question": "At equal nonrelativistic kinetic energy with mp/me=1836, λe/λp is approximately:",
        "options": [
          "1836",
          "42.8",
          "1/1836",
          "1/42.8"
        ],
        "answer": 1,
        "explanation": "At equal K, wavelength is inversely proportional to √mass, so the ratio is √1836≈42.8."
      },
      {
        "question": "At equal nonrelativistic speed using the same masses, λe/λp is:",
        "options": [
          "42.8",
          "1",
          "1836",
          "1/1836"
        ],
        "answer": 2,
        "explanation": "At equal speed, momenta scale directly with mass and wavelengths inversely with mass."
      },
      {
        "question": "A 4.00 mW monochromatic beam has photon energy 4.00 eV. Using 1 eV=1.60×10^−19 J, its photon rate is:",
        "options": [
          "1.00×10^15 s^−1",
          "1.25×10^15 s^−1",
          "6.25×10^12 s^−1",
          "6.25×10^15 s^−1"
        ],
        "answer": 3,
        "explanation": "Divide 0.00400 J/s by 6.40×10^−19 J/photon to obtain 6.25×10^15 photons/s."
      },
      {
        "question": "With overall collected electron yield 0.200 per incident photon in that beam, current is:",
        "options": [
          "0.200 mA",
          "1.00 mA",
          "0.0400 mA",
          "200 mA"
        ],
        "answer": 0,
        "explanation": "Apply the overall collected yield once: I=eηP/Eγ=(1.60×10^−19)×0.200×6.25×10^15=0.000200 A=0.200 mA."
      }
    ],
    "sources": [
      {
        "title": "Physlet Quantum Physics: Rutherford closest approach",
        "url": "https://www.compadre.org/PQP/quantum-need/prob4_5.cfm"
      },
      {
        "title": "OpenStax: quantum theory of the hydrogen atom",
        "url": "https://openstax.org/books/university-physics-volume-3/pages/8-1-the-hydrogen-atom"
      },
      {
        "title": "OpenStax: de Broglie matter waves",
        "url": "https://openstax.org/books/university-physics-volume-3/pages/6-5-de-broglies-matter-waves"
      },
      {
        "title": "OpenStax: photon energies and photon rates",
        "url": "https://openstax.org/books/college-physics-2e/pages/29-3-photon-energies-and-the-electromagnetic-spectrum"
      }
    ]
  }
} as const;
