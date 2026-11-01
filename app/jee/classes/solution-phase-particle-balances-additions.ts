// Authored by scripts/expand-solution-phase-particle-balances.mjs.
export const solutionPhaseParticleBalancesAdditions = {
  "chapters": [
    {
      "title": "A two-phase lever rule balances the feed against both equilibrium compositions",
      "formula": "zA=.40,xA=.25,yA=.75;V/F=(zA−xA)/(yA−xA)=.30;10 mol feed→7 mol liquid+3 mol vapour",
      "script": "A vapour composition and a liquid composition do not by themselves specify how much of each phase is present. Add an overall component balance. Consider a supplied binary mixture containing ten moles overall, with component A mole fraction zero point four zero. At the specified equilibrium conditions, the coexisting liquid has A fraction zero point two five and the vapour zero point seven five. Let the vapour fraction of the total amount be beta. The overall A fraction is one minus beta times the liquid fraction plus beta times the vapour fraction. Solving gives beta equal to zero point four zero minus zero point two five, divided by zero point seven five minus zero point two five, or zero point three zero. The mixture therefore contains three moles vapour and seven moles liquid. A contributes two point two five moles in the vapour and one point seven five in the liquid, totaling the original four. The overall composition must lie between the two supplied phase compositions for this two phase balance to be physically possible. These compositions are given as an equilibrium pair, not predicted from arbitrary independent guesses. This supporting lever rule calculation determines phase amounts, not the speed of separation or an unlimited distillation yield.",
      "points": [
        "Feed10 mol;zA.40 · Liquid xA.25;vapour yA.75 · Supplied coexisting phase pair",
        "β=(.40−.25)/(.75−.25) · β=.30;V3 mol;L7 mol · Overall composition between x and y",
        "A in liquid1.75 mol · A in vapour2.25 mol · Total A4.00 mol conserved"
      ],
      "board": {
        "heading": "Use both the phase equilibrium data and the overall material balance",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "Feed10 mol;zA.40",
            "Liquid xA.25;vapour yA.75",
            "Supplied coexisting phase pair"
          ],
          [
            "β=(.40−.25)/(.75−.25)",
            "β=.30;V3 mol;L7 mol",
            "Overall composition between x and y"
          ],
          [
            "A in liquid1.75 mol",
            "A in vapour2.25 mol",
            "Total A4.00 mol conserved"
          ]
        ]
      }
    },
    {
      "title": "Count osmotic particles after a complete neutralization reaction",
      "formula": "100 mL.0100 M HCl+100 mL.0100 M NaOH→Na+ andCl− each.00100 mol;π≈.246 atm at300 K",
      "script": "Osmotic pressure depends on the solute species remaining after chemical reaction, not every ion counted before mixing. In a stipulated dilute ideal example, mix one hundred millilitres of zero point zero one zero zero molar hydrochloric acid with an equal volume and concentration of sodium hydroxide. Assume complete dissociation and neutralization, additive volumes and final temperature three hundred kelvin. Each solution initially supplies one millimole of its formula units. Hydrogen ions and hydroxide ions react to form water, while one millimole each of sodium and chloride ions remain dissolved. The counted solute particle amount is therefore two millimoles in zero point two zero zero litre, giving particle concentration zero point zero one zero zero mole per litre. Using the ideal osmotic expression with gas constant zero point zero eight two zero five seven litre atmosphere per mole per kelvin gives about zero point two four six atmosphere. Counting all four millimoles of the original ions would wrongly double this prediction. The water produced joins the solvent rather than becoming an additional independent solute species in this model. Residual water ionization is negligible on this concentration scale. Real activity corrections and nonadditive volumes would require more information; the example isolates reaction bookkeeping before the osmotic calculation.",
      "points": [
        "Equal1.00 mmol HCl andNaOH · H+ andOH−→water · Complete neutralization assumed",
        "Na+1 mmol;Cl−1 mmol · 2 mmol particles in.200 L · Particle concentration.0100 M",
        "π=cparticles RT;T300 K · π≈.246 atm · Dilute ideal model;not initial-ion sum"
      ],
      "board": {
        "heading": "Finish the reaction before applying the osmotic particle count",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "Equal1.00 mmol HCl andNaOH",
            "H+ andOH−→water",
            "Complete neutralization assumed"
          ],
          [
            "Na+1 mmol;Cl−1 mmol",
            "2 mmol particles in.200 L",
            "Particle concentration.0100 M"
          ],
          [
            "π=cparticles RT;T300 K",
            "π≈.246 atm",
            "Dilute ideal model;not initial-ion sum"
          ]
        ]
      }
    },
    {
      "title": "Temperature comparisons of Henry constants keep the pressure convention fixed",
      "formula": "p=KH x;supplied KH(300 K)=1000 bar,KH(330 K)=2000 bar;at p1 bar,x=.0010 and.00050",
      "script": "A temperature comparison of gas solubility requires both a Henry law convention and a specified gas partial pressure. Use a supplied hypothetical gas solvent pair whose pressure equals a Henry coefficient times dissolved mole fraction. Let that coefficient be one thousand bar at three hundred kelvin and two thousand bar at three hundred thirty kelvin. If the gas partial pressure is held at one bar in both cases, the equilibrium dissolved mole fractions are zero point zero zero one zero and zero point zero zero zero five zero. Solubility in this mole fraction sense is halved in the supplied dataset when the temperature rises. Now define the reciprocal coefficient as dissolved mole fraction divided by pressure. Its values are one thousandth and one two thousandth per bar, so that coefficient decreases rather than increases. Both descriptions represent the same physical data; their numerical trends differ because the equations differ. This example does not establish that every gas solvent pair has the same temperature dependence. Nor may the one bar assumption be silently applied to a sealed finite headspace whose gas pressure changes as gas dissolves or temperature changes. That closed system needs a separate total amount balance and gas equation. Always state what pressure is controlled before interpreting a temperature trend.",
      "points": [
        "p=KHx;KH1000→2000 bar · At fixed p1 bar:x.0010→.00050 · Supplied300 K and330 K data",
        "Reciprocal coefficient x/p · 1/1000→1/2000 bar−1 · Same data;opposite coefficient trend",
        "Finite sealed headspace · Partial pressure need not stay1 bar · Needs gas and total-amount balance"
      ],
      "board": {
        "heading": "Keep the coefficient equation and controlled gas pressure explicit",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "p=KHx;KH1000→2000 bar",
            "At fixed p1 bar:x.0010→.00050",
            "Supplied300 K and330 K data"
          ],
          [
            "Reciprocal coefficient x/p",
            "1/1000→1/2000 bar−1",
            "Same data;opposite coefficient trend"
          ],
          [
            "Finite sealed headspace",
            "Partial pressure need not stay1 bar",
            "Needs gas and total-amount balance"
          ]
        ]
      }
    },
    {
      "title": "A dimerization equilibrium makes the apparent particle factor concentration dependent",
      "formula": "2A⇌A2;Kc=[A2]/[A]²=10 L/mol;Ctotal=.100 M→[A].050,[A2].025 M;i=.75",
      "script": "An association fraction inferred for one solution need not remain constant after dilution. Consider a supplied ideal concentration model in which two monomers A form a dimer and no other solute species occur. Let the concentration equilibrium constant, dimer concentration divided by the square of monomer concentration, be ten litres per mole at fixed temperature. The analytical concentration counts monomer units, so it equals free monomer concentration plus twice the dimer concentration. At analytical concentration zero point one zero zero molar, a free monomer concentration of zero point zero five zero satisfies both equations, giving dimer concentration zero point zero two five molar. The total solute particle concentration is zero point zero seven five molar and the ideal particle factor relative to monomer units is zero point seven five. Dilute the analytical concentration to zero point zero one zero zero molar while keeping temperature and the supplied constant unchanged. Solving the same balance gives free monomer about zero point zero zero eight five four one molar and dimer about zero point zero zero zero seven two nine five. The particle factor rises to about zero point nine two seven one because a smaller fraction of units is associated. This concentration constant is a stipulated ideal model, not a universal activity based constant with units. It does not predict association kinetics.",
      "points": [
        "Kc10 L/mol;Ctotal.100 M · [A].050;[A2].025 M · Ctotal=[A]+2[A2]",
        "Particles[A]+[A2]=.075 M · i=.075/.100=.750 · No extra species",
        "Ctotal diluted to.0100 M · [A]≈.008541 M;i≈.9271 · Same supplied Kc and temperature"
      ],
      "board": {
        "heading": "Solve the association balance again after changing concentration",
        "columns": [
          "Given / model",
          "Result / balance",
          "Condition / limit"
        ],
        "rows": [
          [
            "Kc10 L/mol;Ctotal.100 M",
            "[A].050;[A2].025 M",
            "Ctotal=[A]+2[A2]"
          ],
          [
            "Particles[A]+[A2]=.075 M",
            "i=.075/.100=.750",
            "No extra species"
          ],
          [
            "Ctotal diluted to.0100 M",
            "[A]≈.008541 M;i≈.9271",
            "Same supplied Kc and temperature"
          ]
        ]
      }
    }
  ],
  "quiz": [
    {
      "question": "For a supplied coexisting pair xA=.25,yA=.75 and overall zA=.40, the vapour mole fraction of the total phase amount is:",
      "options": [
        ".70",
        ".30",
        ".40",
        ".50"
      ],
      "answer": 1,
      "explanation": "The lever rule gives β=(z−x)/(y−x)=(.40−.25)/(.75−.25)=.30, using the supplied equilibrium compositions."
    },
    {
      "question": "A10 mol feed in that two-phase model contains how much A in the liquid?",
      "options": [
        "4.00 mol",
        "2.25 mol",
        "1.75 mol",
        "7.00 mol"
      ],
      "answer": 2,
      "explanation": "Liquid amount is7 mol and its A fraction.25, so liquid A=7×.25=1.75 mol; vapour holds the remaining2.25 mol A."
    },
    {
      "question": "After complete neutralization of equal1.00 mmol HCl andNaOH in final.200 L, the ideal counted solute particle concentration is:",
      "options": [
        ".0200 M",
        ".00500 M",
        ".200 M",
        ".0100 M"
      ],
      "answer": 3,
      "explanation": "The remaining1 mmol Na+ and1 mmol Cl− total2 mmol particles; divide.00200 mol by.200 L. Water formed joins the solvent."
    },
    {
      "question": "Using that particle concentration,T300 K and R.082057 L atm mol−1 K−1, ideal osmotic pressure is about:",
      "options": [
        ".246 atm",
        ".492 atm",
        "2.46 atm",
        ".0246 atm"
      ],
      "answer": 0,
      "explanation": "π=.0100×.082057×300=.246171 atm in the stipulated dilute ideal model after reaction."
    },
    {
      "question": "For p=KHx with p fixed1 bar, increasing supplied KH from1000 to2000 bar changes dissolved mole fraction from.0010 to:",
      "options": [
        ".0020",
        ".00050",
        ".0010",
        ".500"
      ],
      "answer": 1,
      "explanation": "At fixed partial pressure x=p/KH, so doubling this pressure-over-mole-fraction coefficient halves x."
    },
    {
      "question": "For the reciprocal coefficient x/p, the same supplied temperature change gives:",
      "options": [
        "1000→2000 bar",
        "2000→1000 bar",
        "1/1000→1/2000 bar−1",
        "No possible conversion"
      ],
      "answer": 2,
      "explanation": "Reciprocating the specified equation gives x/p=1/KH; its coefficient trend is opposite while the physical solubility data are unchanged."
    },
    {
      "question": "With 2A⇌A2,Kc10 L/mol and analytical monomer-unit concentration.100 M, [A].050 M implies ideal particle factor:",
      "options": [
        "1.50",
        ".50",
        "1.00",
        ".75"
      ],
      "answer": 3,
      "explanation": "Dimer concentration is10×.050²=.025 M; particles=.050+.025=.075 M and i=.075/.100=.75."
    },
    {
      "question": "Under that same ideal equilibrium model, dilution to analytical.0100 M changes i approximately to:",
      "options": [
        ".9271",
        ".7500",
        ".5000",
        "1.5000"
      ],
      "answer": 0,
      "explanation": "Solve C=[A]+2Kc[A]² again. Monomer≈.008541 M,dimer≈.0007295 M and i≈.0092705/.0100=.9271; association is reduced."
    }
  ],
  "sources": [
    {
      "title": "ETH Zurich: flash-distillation balances and lever rule",
      "url": "https://ethz.ch/content/dam/ethz/special-interest/mavt/process-engineering/separation-processes-laboratory-dam/documents/education/bce_NewExercises/Solution_07.pdf"
    },
    {
      "title": "OpenStax: colligative properties and dissolved particles",
      "url": "https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties"
    },
    {
      "title": "OpenStax: gas solubility and temperature",
      "url": "https://openstax.org/books/chemistry-2e/pages/11-3-solubility"
    },
    {
      "title": "Max Planck Institute for Chemistry: Henry constant conventions",
      "url": "https://henry.mpch-mainz.gwdg.de/henry/convert.html?Htype=HscpSI&Hval=1"
    },
    {
      "title": "OpenStax: equilibrium calculations and concentration balances",
      "url": "https://openstax.org/books/chemistry-2e/pages/13-4-equilibrium-calculations"
    }
  ]
} as const;
