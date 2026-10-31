// Authored by scripts/expand-atomic-bonding-measurement-models.mjs.
export const atomicBondingMeasurementModelsAdditions = {
  "atomic-structure": {
    "chapters": [
      {
        "title": "A spectral wavenumber is reciprocal wavelength with a stated length unit",
        "formula": "Vacuum wavenumber σ=1/λ;1 cm−1=100 m−1;λ(nm)=10^7/σ(cm−1)",
        "script": "A spectral number written in reciprocal centimetres is not a wavelength in centimetres and is not a frequency in hertz. In the usual spectroscopic convention, vacuum wavenumber is the reciprocal of vacuum wavelength. A supplied transition wavenumber of twenty thousand reciprocal centimetres therefore corresponds to a wavelength of one divided by twenty thousand centimetres, or five hundred nanometres. Converting the wavenumber to SI gives two million reciprocal metres because one reciprocal centimetre equals one hundred reciprocal metres. Using a supplied speed of light of three times ten to the eight metres per second gives frequency six times ten to the fourteen hertz. With the rounded photon constant twelve hundred forty electron volt nanometres, the photon energy is two point four eight electron volts. These are different units for the same specified photon, not independent observations of different transitions. Spectroscopic reciprocal wavelength also differs from the angular wavenumber defined with an extra factor of two pi. Vacuum and air wavelengths must not be mixed silently. The wavenumber alone gives an energy separation; it does not identify an atom or prove which transition is allowed.",
        "points": [
          "σ20000 cm−1 · λ500 nm;σ2×10^6 m−1 · Vacuum values specified",
          "c3×10^8 m/s · ν6×10^14 Hz · ν=cσ",
          "hc1240 eV nm · E2.48 eV · No extra factor2π"
        ],
        "board": {
          "heading": "Convert the reciprocal length unit before using photon formulas",
          "columns": [
            "Given / model",
            "Result / ledger",
            "Condition / limit"
          ],
          "rows": [
            [
              "σ20000 cm−1",
              "λ500 nm;σ2×10^6 m−1",
              "Vacuum values specified"
            ],
            [
              "c3×10^8 m/s",
              "ν6×10^14 Hz",
              "ν=cσ"
            ],
            [
              "hc1240 eV nm",
              "E2.48 eV",
              "No extra factor2π"
            ]
          ]
        }
      },
      {
        "title": "An ensemble mean ion charge is not the charge of an individual ion",
        "formula": "Argon Z18;fractions .20 Ar,.50 Ar+,.30 Ar2+;mean charge1.10e;mean bound electrons16.90",
        "script": "An average measured over many atoms can be noninteger even though each specified ion has an integer electron count. Consider a supplied argon population with nuclear charge eighteen. Twenty percent of its nuclei occur as neutral atoms, fifty percent as singly positive ions and thirty percent as doubly positive ions. The fractions sum to one. The mean positive charge per nucleus is zero times zero point two plus one times zero point five plus two times zero point three, giving one point one elementary charges. The mean number of bound electrons is eighteen minus one point one, or sixteen point nine. This does not describe an individual atom with a fractional electron removed. In an explicit ten nucleus inventory, two neutral atoms contain thirty-six bound electrons, five singly charged ions contain eighty-five, and three doubly charged ions contain forty-eight. The total is one hundred sixty-nine bound electrons, eleven fewer than ten initially neutral argon atoms. Electrons removed from this selected population must be included elsewhere in a complete system charge balance. These fractions are supplied, not predicted from a temperature or an equilibrium constant. Separate an ensemble average from the allowed count for one species.",
        "points": [
          "Z18;fractions .20,.50,.30 · Mean q/e=1.10 · Ar,Ar+,Ar2+ are distinct species",
          "Ten nuclei:2 Ar,5 Ar+,3 Ar2+ · 36+85+48=169 bound e− · 11 e− removed from neutral population",
          "Mean bound e−16.90 · An average,not one fractional ion · Fractions are supplied"
        ],
        "board": {
          "heading": "Integer species counts can produce a noninteger population mean",
          "columns": [
            "Given / model",
            "Result / ledger",
            "Condition / limit"
          ],
          "rows": [
            [
              "Z18;fractions .20,.50,.30",
              "Mean q/e=1.10",
              "Ar,Ar+,Ar2+ are distinct species"
            ],
            [
              "Ten nuclei:2 Ar,5 Ar+,3 Ar2+",
              "36+85+48=169 bound e−",
              "11 e− removed from neutral population"
            ],
            [
              "Mean bound e−16.90",
              "An average,not one fractional ion",
              "Fractions are supplied"
            ]
          ]
        }
      },
      {
        "title": "Supporting resolving power distinguishes line spacing from instrument response",
        "formula": "R=λ/δλ;near500 nm,a .100 nm separation corresponds to R≈5000 under the chosen convention",
        "script": "Two transitions can have different wavelengths without appearing as two clean peaks in an instrument. A supporting spectroscopic comparison uses resolving power defined as a representative wavelength divided by a specified resolution width. Near five hundred nanometres, two supplied lines separated by zero point one zero zero nanometre correspond to a resolving power benchmark of about five thousand. An instrument with resolving power two thousand has a corresponding width of about zero point two five zero nanometre at that wavelength, while resolving power ten thousand gives about zero point zero five zero nanometre. The narrower response is more favourable for distinguishing that pair. This calculation is not an unconditional guarantee of two visibly separated peaks. The line shape, relative intensities, noise, sampling and the chosen resolution criterion matter. Physical broadening of the source can also differ from instrumental broadening. Increasing resolving power does not create a new atomic energy level or increase the transition separation. Likewise, counting allowed atomic transitions is not the same as counting experimentally distinguishable peaks. State the wavelength region and width convention before comparing two instruments.",
        "points": [
          "Lines near500 nm;spacing .100 nm · Benchmark R≈5000 · Specified width convention",
          "Instrument R2000 · δλ≈.250 nm · Spacing smaller than response width",
          "Instrument R10000 · δλ≈.050 nm · More favourable,not guaranteed"
        ],
        "board": {
          "heading": "Distinct transitions need sufficient instrument resolution to separate",
          "columns": [
            "Given / model",
            "Result / ledger",
            "Condition / limit"
          ],
          "rows": [
            [
              "Lines near500 nm;spacing .100 nm",
              "Benchmark R≈5000",
              "Specified width convention"
            ],
            [
              "Instrument R2000",
              "δλ≈.250 nm",
              "Spacing smaller than response width"
            ],
            [
              "Instrument R10000",
              "δλ≈.050 nm",
              "More favourable,not guaranteed"
            ]
          ]
        }
      },
      {
        "title": "A metal work function is not the ionization energy of an isolated atom",
        "formula": "Photoemission:Kmax=hν−φ;supplied metal φ4.50 eV,photon6.00 eV gives Kmax1.50 eV",
        "script": "The energy needed to remove an electron depends on the physical initial and final states. A metal work function concerns removing an electron from a particular surface into vacuum. First ionization energy concerns removing an electron from an isolated gaseous atom to form a gaseous positive ion. They are not interchangeable thresholds merely because both involve electron removal. For a supplied metal surface work function of four point five zero electron volts, a six point zero zero electron volt photon can give a maximum emitted electron kinetic energy of one point five zero electron volts in the simple photoelectric model. The same photon cannot ionize an isolated ground state hydrogen atom whose supplied threshold is thirteen point six electron volts. This comparison does not say that all electrons in a metal behave like isolated hydrogen atoms. Surface condition and material identity influence the work function. Raising photon intensity at fixed frequency can affect emission counts under appropriate conditions, but it does not change this single photon maximum energy balance. Begin by naming the material state and the removal process before selecting a threshold value.",
        "points": [
          "Metal surface φ4.50 eV · Photon6.00 eV→Kmax1.50 eV · Simple photoemission model",
          "Isolated ground-state H · Ionization threshold13.6 eV · 6.00 eV is below threshold",
          "Work function versus ionization · Different initial/final states · No universal threshold substitution"
        ],
        "board": {
          "heading": "Electron removal thresholds depend on the physical system",
          "columns": [
            "Given / model",
            "Result / ledger",
            "Condition / limit"
          ],
          "rows": [
            [
              "Metal surface φ4.50 eV",
              "Photon6.00 eV→Kmax1.50 eV",
              "Simple photoemission model"
            ],
            [
              "Isolated ground-state H",
              "Ionization threshold13.6 eV",
              "6.00 eV is below threshold"
            ],
            [
              "Work function versus ionization",
              "Different initial/final states",
              "No universal threshold substitution"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A vacuum wavenumber20000 cm−1 corresponds to which wavelength?",
        "options": [
          "50 nm",
          "500 nm",
          "5000 nm",
          "20000 nm"
        ],
        "answer": 1,
        "explanation": "Invert the reciprocal-centimetre value before converting length: λ(nm)=10^7/σ(cm−1)=500 nm. Wavenumber is not itself a wavelength."
      },
      {
        "question": "Using hc1240 eV nm, a500 nm photon has energy:",
        "options": [
          ".248 eV",
          "24.8 eV",
          "2.48 eV",
          "6.00 eV"
        ],
        "answer": 2,
        "explanation": "The supplied photon constant gives E=1240/500=2.48 eV, with no extra2π factor."
      },
      {
        "question": "For .20 neutral Ar,.50 Ar+ and .30 Ar2+, mean positive charge per nucleus is:",
        "options": [
          ".80e",
          "1.00e",
          "1.30e",
          "1.10e"
        ],
        "answer": 3,
        "explanation": "The population-weighted charge is0×.20+1×.50+2×.30=1.10 in elementary-charge units."
      },
      {
        "question": "For that population with Z18, mean bound-electron count is:",
        "options": [
          "16.90",
          "18.00",
          "17.10",
          "1.10"
        ],
        "answer": 0,
        "explanation": "Average bound electrons are18−1.10=16.90; each individual specified species still has an integer count."
      },
      {
        "question": "Under R=λ/δλ near500 nm, a width .100 nm gives R:",
        "options": [
          "500",
          "5000",
          "50000",
          ".0002"
        ],
        "answer": 1,
        "explanation": "Resolving power is a dimensionless ratio500/.100=5000 in the specified width convention."
      },
      {
        "question": "At500 nm an instrument with R10000 has the specified width:",
        "options": [
          ".500 nm",
          ".100 nm",
          ".0500 nm",
          "5.00 nm"
        ],
        "answer": 2,
        "explanation": "Rearrange δλ=λ/R=500/10000=.0500 nm; peak separation still depends on the response and data quality."
      },
      {
        "question": "For supplied metal φ4.50 eV and photon6.00 eV, simple maximum photoelectron kinetic energy is:",
        "options": [
          "10.50 eV",
          "4.50 eV",
          "6.00 eV",
          "1.50 eV"
        ],
        "answer": 3,
        "explanation": "The photoemission energy balance gives Kmax=6.00−4.50=1.50 eV."
      },
      {
        "question": "Why must the13.6 eV isolated ground-state H ionization threshold not replace the supplied metal work function?",
        "options": [
          "The processes have different physical initial and final states",
          "All surface thresholds equal13.6 eV",
          "A metal surface has no electrons",
          "Photon energy depends only on intensity"
        ],
        "answer": 0,
        "explanation": "A surface-to-vacuum work function and gas-atom-to-gas-ion ionization energy describe different processes."
      }
    ],
    "sources": [
      {
        "title": "NIST: atomic spectroscopy units and photon relations",
        "url": "https://physics.nist.gov/Pubs/AtSpec/node01.html"
      },
      {
        "title": "ESO: resolving power and line separation",
        "url": "https://www.eso.org/sci/meetings/2020/LaSillaSchool2020/LSS2020_Zoccali.pdf"
      },
      {
        "title": "OpenStax: photoelectric energy balance",
        "url": "https://openstax.org/books/university-physics-volume-3/pages/6-2-photoelectric-effect"
      }
    ]
  },
  "chemical-bonding": {
    "chapters": [
      {
        "title": "Lattice dissociation and ion hydration need compatible signs and molar bases",
        "formula": "Hypothetical salt:ΔHlattice,diss=+800;combined ion hydration=−780;ΔHsolution=+20 kJ/mol salt",
        "script": "An ionic solid entering water involves both separating its lattice and interacting with the solvent. A supplied thermochemical ledger can represent this through gaseous ions as a hypothetical intermediate. Suppose lattice dissociation of one mole of a hypothetical salt costs eight hundred kilojoules, while combined hydration of the ions from that same mole releases seven hundred eighty kilojoules. The stated solution step absorbs twenty kilojoules per mole of salt. The gaseous ions cancel when the two processes are added. If a table instead gives lattice formation enthalpy as negative eight hundred, that step must be reversed before it represents lattice dissociation. Hydration values for individual ions also require their formula coefficients before they can be combined on a per mole of salt basis. The positive solution enthalpy does not alone prove that the salt is insoluble, because equilibrium involves free energy and the relevant solution conditions. Entropy and activities cannot be discarded. Nor does this simple ledger imply that real dissolution physically proceeds by releasing a measurable cloud of gaseous ions.",
        "points": [
          "Lattice dissociation · +800 kJ/mol salt · Solid→gaseous ions",
          "Combined hydration · −780 kJ/mol salt · Same stoichiometric ion amounts",
          "Sum:solution enthalpy · +20 kJ/mol salt · Not a solubility verdict"
        ],
        "board": {
          "heading": "Reverse lattice formation before using it as a dissociation step",
          "columns": [
            "Given / model",
            "Result / ledger",
            "Condition / limit"
          ],
          "rows": [
            [
              "Lattice dissociation",
              "+800 kJ/mol salt",
              "Solid→gaseous ions"
            ],
            [
              "Combined hydration",
              "−780 kJ/mol salt",
              "Same stoichiometric ion amounts"
            ],
            [
              "Sum:solution enthalpy",
              "+20 kJ/mol salt",
              "Not a solubility verdict"
            ]
          ]
        }
      },
      {
        "title": "Iodine chloride ions require a complete electron ledger before a shape",
        "formula": "ICl2−:22 valence e−,AX2E3,linear;ICl4−:36 valence e−,AX4E2,square planar",
        "script": "A familiar central atom does not force every one of its compounds into the same shape. Compare the selected iodine chloride anions with two and four terminal chlorines. For the two chloride species, iodine contributes seven valence electrons, the chlorines contribute fourteen and the negative charge adds one, giving twenty-two. Two single bonds use four electrons and terminal chlorine lone pairs use twelve. The remaining six electrons are three central lone pairs. The five domain VSEPR model places those lone pairs equatorially, leaving the two bonded atoms in a linear arrangement. For the four chloride species, the total is thirty-six valence electrons. Four single bonds use eight, terminal chlorine lone pairs use twenty-four and the remaining four electrons form two central lone pairs. Its six domain model places the lone pairs opposite one another, leaving a square planar arrangement of chlorine atoms. Electron-domain geometry and the geometry of the nuclei are different labels in both cases. These are expanded valence Lewis and VSEPR descriptions; the counting does not establish a detailed orbital composition or require literal d orbital hybridization as an experimental conclusion.",
        "points": [
          "ICl2−:7+14+1=22 e− · 2 bonds+3 central lone pairs · AX2E3:linear nuclei",
          "ICl4−:7+28+1=36 e− · 4 bonds+2 central lone pairs · AX4E2:square-planar nuclei",
          "Electron domains versus nuclei · Five domains versus six · Lewis/VSEPR model,not orbital proof"
        ],
        "board": {
          "heading": "Complete the terminal octets before assigning central lone pairs",
          "columns": [
            "Given / model",
            "Result / ledger",
            "Condition / limit"
          ],
          "rows": [
            [
              "ICl2−:7+14+1=22 e−",
              "2 bonds+3 central lone pairs",
              "AX2E3:linear nuclei"
            ],
            [
              "ICl4−:7+28+1=36 e−",
              "4 bonds+2 central lone pairs",
              "AX4E2:square-planar nuclei"
            ],
            [
              "Electron domains versus nuclei",
              "Five domains versus six",
              "Lewis/VSEPR model,not orbital proof"
            ]
          ]
        }
      },
      {
        "title": "Hydrogen-bond network contacts must not count every bond twice",
        "formula": "Supplied closed graph:N20 water nodes,degree4 per node;unique edges=N×4/2=40",
        "script": "A molecule can participate in several intermolecular contacts without every listed contact representing a different bond. In a supporting closed network model, suppose twenty water molecules each participate in four hydrogen bonds. Counting four contacts at each molecule gives eighty endpoints, but every hydrogen bond connects two molecules and has been counted from both ends. The number of distinct hydrogen bonds is therefore forty. The same ideal graph can assign each molecule two donor contacts and two acceptor contacts, giving forty donor roles and forty acceptor roles for the same forty directed bonds. These role counts must not be added to claim eighty separate bonds. Each water molecule also contains two ordinary covalent oxygen hydrogen bonds, which belong to a different inventory. The model assumes all stated contacts are satisfied without boundary losses. A finite surface or an incomplete cluster can reduce the average degree, and liquid water continually changes its local contacts. This abstract counting exercise does not assert that every liquid water molecule always has exactly four hydrogen bonds or that the displayed graph is an actual crystal geometry. Count unique connections after defining the nodes and the contact convention.",
        "points": [
          "20 molecules×4 contacts · 80 endpoints /2=40 bonds · Each bond counted at both ends",
          "Two donor+two acceptor roles each · 40 donor;40 acceptor roles · Same40 directed bonds",
          "Covalent O–H bonds · 20×2=40 separate bonds · Closed ideal graph,not liquid snapshot"
        ],
        "board": {
          "heading": "A network contact count needs one division by two",
          "columns": [
            "Given / model",
            "Result / ledger",
            "Condition / limit"
          ],
          "rows": [
            [
              "20 molecules×4 contacts",
              "80 endpoints /2=40 bonds",
              "Each bond counted at both ends"
            ],
            [
              "Two donor+two acceptor roles each",
              "40 donor;40 acceptor roles",
              "Same40 directed bonds"
            ],
            [
              "Covalent O–H bonds",
              "20×2=40 separate bonds",
              "Closed ideal graph,not liquid snapshot"
            ]
          ]
        }
      },
      {
        "title": "A dipole-based charge estimate depends on the chosen point-charge model",
        "formula": "Hypothetical neutral diatomic:μ=.300 eÅ,r1.20 Å;two-point model q/e=.300/1.20=.250",
        "script": "A molecular dipole can be converted into an effective charge only after the charge model has been stated. In a supplied neutral diatomic example, represent the molecule by equal and opposite point charges located at the two nuclei. The dipole magnitude is then charge magnitude times separation. Let the separation be one point two zero angstrom and the supplied dipole be zero point three zero zero elementary charge angstrom. Dividing gives an effective charge magnitude of zero point two five zero elementary charge on each site in this model. Full opposite unit charges at that separation would give one point two zero elementary charge angstrom, so the supplied dipole is twenty-five percent of that full point-charge reference. This ratio is sometimes used as a simple ionic-character comparison, but it is not a unique measured partition of the real electron density. Different charge models can describe a distributed molecular density differently. Formal charges also use equal bond-electron assignment and need not equal these effective charges. A zero total molecular charge does not require each site to have zero partial charge. Keep the dipole unit, the length unit and the assumptions of the two-site model consistent.",
        "points": [
          "Supplied μ.300 eÅ;r1.20 Å · q/e=.250 · Two opposite point charges",
          "Full unit-charge reference · μreference1.20 eÅ · μ/μreference25%",
          "Neutral total charge · +.250e and−.250e in model · Not unique real-density partition"
        ],
        "board": {
          "heading": "A dipole gives a model charge only after geometry and assumptions",
          "columns": [
            "Given / model",
            "Result / ledger",
            "Condition / limit"
          ],
          "rows": [
            [
              "Supplied μ.300 eÅ;r1.20 Å",
              "q/e=.250",
              "Two opposite point charges"
            ],
            [
              "Full unit-charge reference",
              "μreference1.20 eÅ",
              "μ/μreference25%"
            ],
            [
              "Neutral total charge",
              "+.250e and−.250e in model",
              "Not unique real-density partition"
            ]
          ]
        }
      }
    ],
    "quiz": [
      {
        "question": "A hypothetical salt has lattice dissociation+800 and combined hydration−780 kJ/mol salt. Solution enthalpy is:",
        "options": [
          "−1580 kJ/mol",
          "+20 kJ/mol",
          "−20 kJ/mol",
          "+1580 kJ/mol"
        ],
        "answer": 1,
        "explanation": "The gaseous-ion intermediate cancels, leaving+800−780=+20 kJ per mole of the same salt basis."
      },
      {
        "question": "If lattice formation is tabulated as−800 kJ/mol, its dissociation step in this cycle is:",
        "options": [
          "−800 kJ/mol",
          "0 kJ/mol",
          "+800 kJ/mol",
          "−1600 kJ/mol"
        ],
        "answer": 2,
        "explanation": "Dissociation reverses the stated lattice-formation process, so its enthalpy has the opposite sign."
      },
      {
        "question": "For the selected ICl2− Lewis/VSEPR model, central lone-pair count and nuclear shape are:",
        "options": [
          "Two;bent",
          "One;linear",
          "Three;bent",
          "Three;linear"
        ],
        "answer": 3,
        "explanation": "Twenty-two total electrons leave six on iodine after bonds and terminal octets, giving AX2E3 and linear nuclei."
      },
      {
        "question": "For ICl4−, which selected Lewis/VSEPR description is consistent?",
        "options": [
          "36 valence e−;AX4E2;square planar",
          "34 valence e−;AX4;tetrahedral",
          "36 valence e−;AX4E;seesaw",
          "22 valence e−;AX4E2;linear"
        ],
        "answer": 0,
        "explanation": "The total is7+4×7+1=36; two central lone pairs remain in a six-domain arrangement."
      },
      {
        "question": "Twenty nodes each have four contacts in a closed undirected hydrogen-bond graph. Distinct bonds?",
        "options": [
          "80",
          "40",
          "20",
          "10"
        ],
        "answer": 1,
        "explanation": "The degree sum is80, but each edge contributes two endpoints;80/2=40 unique bonds."
      },
      {
        "question": "If each of those nodes donates two and accepts two bonds, the40 donor and40 acceptor roles describe:",
        "options": [
          "80 different bonds",
          "20 bonds",
          "The same40 directed bonds",
          "Only covalent O–H bonds"
        ],
        "answer": 2,
        "explanation": "Each hydrogen bond has one donor role and one acceptor role, so the role counts refer to the same forty connections."
      },
      {
        "question": "For μ=.300 eÅ and r1.20 Å in the supplied neutral two-point-charge model, |q| is:",
        "options": [
          ".360e",
          "4.00e",
          "1.20e",
          ".250e"
        ],
        "answer": 3,
        "explanation": "Under the stated two-site point-charge assumption, μ=qr gives |q|/e=.300/1.20=.250. This does not uniquely partition real electron density."
      },
      {
        "question": "Relative to full opposite unit charges at the same separation, that dipole is:",
        "options": [
          "25%",
          "75%",
          "100%",
          "40%"
        ],
        "answer": 0,
        "explanation": "The full reference is1.20 eÅ; .300/1.20=.25. This ratio is model-based, not a unique electron-density partition."
      }
    ],
    "sources": [
      {
        "title": "NCERT via IIT Kanpur: lattice and hydration solution cycle",
        "url": "https://sathee.iitk.ac.in/or/sathee-neet/ncert-books/neet-ncert-books/neet-nb-che-11/chemistry-11-chapter-6-thermodynamics/"
      },
      {
        "title": "University of Florida: VSEPR geometry and iodine chloride anions",
        "url": "https://chem.libretexts.org/Courses/University_of_Florida/CHM2047%3A_One-Semester_General_Chemistry_%28Kleiman%29/05%3A_Molecular_Structure_and_Geometry/5.04%3A_VSEPR_Geometry"
      },
      {
        "title": "Georgia Tech: water donor and acceptor contacts",
        "url": "https://williams.chemistry.gatech.edu/structure/molecular_interactions/mol_int.html"
      },
      {
        "title": "OpenStax: charge separation and molecular dipoles",
        "url": "https://openstax.org/books/chemistry-2e/pages/7-6-molecular-structure-and-polarity"
      }
    ]
  }
} as const;
