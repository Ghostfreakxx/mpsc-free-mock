// Authored by scripts/create-neet-ecology.mjs.
export const ecologyBoards = [
  {
    "title": "Ecological levels and the Unit 10 map",
    "kind": "flow",
    "lines": [
      "A population contains members of one species",
      "A community contains interacting populations",
      "An ecosystem includes biotic and abiotic components",
      "Scale and boundaries affect every ecological claim"
    ],
    "flow": [
      "Organism → population",
      "Interacting populations → community",
      "Community + physical setting → ecosystem",
      "Specify the place, period and measured variable"
    ]
  },
  {
    "title": "Population density, natality and mortality",
    "kind": "flow",
    "lines": [
      "Density is population amount per defined space",
      "Birth and death rates require a time interval",
      "Per-capita rates differ from total event counts",
      "Biomass or cover may suit some populations"
    ],
    "flow": [
      "Define the population and sampling boundary",
      "Measure numbers, cover or relevant biomass",
      "Record births and deaths over a stated interval",
      "Distinguish totals from per-capita rates"
    ]
  },
  {
    "title": "Population balance: births, deaths and migration",
    "kind": "flow",
    "lines": [
      "Births and immigration add individuals locally",
      "Deaths and emigration remove individuals locally",
      "Nnext = N + births + immigrants − deaths − emigrants",
      "An open population can grow despite more deaths than births"
    ],
    "flow": [
      "Starting N = 100",
      "Births 20 + immigrants 10",
      "Deaths 15 + emigrants 5",
      "Next count = 110, given the stated events"
    ]
  },
  {
    "title": "Age distribution and age-pyramid interpretation",
    "kind": "flow",
    "lines": [
      "Age structure distinguishes life-stage proportions",
      "Pre-reproductive, reproductive, post-reproductive",
      "A broad young base can imply growth potential",
      "Age structure alone does not fix the exact future"
    ],
    "flow": [
      "Broad young base: possible expansion potential",
      "Similar age-group widths: relative stability comparison",
      "Narrow young base: reduced recruitment comparison",
      "Interpret with survival, fertility and migration"
    ]
  },
  {
    "title": "Exponential growth: per-capita versus total change",
    "kind": "flow",
    "lines": [
      "The simple continuous model is dN/dt = rN",
      "r is a per-capita net growth parameter",
      "Constant positive r gives a J-shaped trajectory",
      "Nt = N₀eʳᵗ under the model assumptions"
    ],
    "flow": [
      "Constant positive per-capita r",
      "Larger N → larger total increment",
      "Continuous model: Nt = N₀eʳᵗ",
      "Unlimited growth is an idealization"
    ]
  },
  {
    "title": "Logistic growth and carrying capacity",
    "kind": "flow",
    "lines": [
      "dN/dt = rN(1 − N/K) in the simple model",
      "K represents carrying capacity in the stated setting",
      "The growth-limiting factor falls as N approaches K",
      "Total logistic growth peaks at K/2 for fixed r and K"
    ],
    "flow": [
      "Small N: limited crowding effect",
      "Intermediate N: rapid total increase",
      "N approaches K: net model growth slows",
      "K can change when conditions change"
    ]
  },
  {
    "title": "Life histories and the limits of simple population labels",
    "kind": "flow",
    "lines": [
      "Life histories include timing, offspring and survival",
      "Offspring size and number can involve trade-offs",
      "Parental investment varies among organisms",
      "Simple r/K labels do not replace measured biology"
    ],
    "flow": [
      "Reproductive timing and frequency",
      "Offspring number and size",
      "Survival and parental investment",
      "Interpret traits in their environmental context"
    ]
  },
  {
    "title": "Population interactions: reading benefit and cost signs",
    "kind": "flow",
    "lines": [
      "Interaction signs compare effects on each participant",
      "Mutualism is conventionally +/+",
      "Competition is conventionally −/−",
      "Predation and parasitism are conventionally +/−"
    ],
    "flow": [
      "+/+: both participants benefit",
      "−/−: both bear a competitive cost",
      "+/−: one benefits, the other is harmed",
      "+/0 and −/0: one effect treated as negligible"
    ]
  },
  {
    "title": "Mutualism: lichens, mycorrhiza and pollination",
    "kind": "flow",
    "lines": [
      "Mutualism involves benefits to both partners",
      "Lichens contain fungal and photosynthetic partners",
      "Mycorrhiza involves a fungus and plant roots",
      "Pollination comparisons connect food rewards and reproduction"
    ],
    "flow": [
      "Partner A supplies a relevant resource or service",
      "Partner B supplies a relevant resource or service",
      "Both gain in the defined comparison",
      "Dependence and specificity vary among associations"
    ]
  },
  {
    "title": "Competition, exclusion and resource partitioning",
    "kind": "flow",
    "lines": [
      "Competition can occur without direct fighting",
      "A resource must be limiting for the stated mechanism",
      "Exclusion depends on assumptions and conditions",
      "Partitioning can reduce overlap in resource use"
    ],
    "flow": [
      "Overlapping use of a limiting resource",
      "Reduced performance relative to no competitor",
      "Possible exclusion under restrictive conditions",
      "Partitioning or other differences can support coexistence"
    ]
  },
  {
    "title": "Predation, herbivory and population effects",
    "kind": "flow",
    "lines": [
      "A predator consumes prey in the basic comparison",
      "Herbivory is an important consumer–plant interaction",
      "Defenses can alter capture or feeding success",
      "Predators can influence community structure"
    ],
    "flow": [
      "Consumer encounters a potential food organism",
      "Capture / feeding depends on traits and conditions",
      "Consumer gains; prey or plant incurs a cost",
      "Population and community effects require evidence"
    ]
  },
  {
    "title": "Parasitism, Cuscuta and brood parasitism",
    "kind": "flow",
    "lines": [
      "A parasite benefits while a host bears a cost",
      "Parasites can live inside or outside a host",
      "Cuscuta is a familiar parasitic-plant example",
      "Brood parasitism concerns exploitation of parental care"
    ],
    "flow": [
      "Parasite or brood-parasitic participant",
      "Host resources or care are exploited",
      "Parasite benefits / host incurs a cost",
      "Mechanism differs from ordinary predation"
    ]
  },
  {
    "title": "Commensalism, amensalism and contextual zeros",
    "kind": "flow",
    "lines": [
      "Commensalism is conventionally +/0",
      "Amensalism is conventionally −/0",
      "An epiphyte can use a tree for support",
      "Zero describes a negligible effect in the chosen comparison"
    ],
    "flow": [
      "Epiphyte obtains a place to grow",
      "Host tree supplies support in the comparison",
      "No substantial host effect is assumed in the model",
      "Check actual costs before applying the label"
    ]
  },
  {
    "title": "Ecosystem components, patterns and stratification",
    "kind": "flow",
    "lines": [
      "Biotic components include producers and consumers",
      "Abiotic components include light, water and nutrients",
      "Vertical stratification is a spatial pattern",
      "An ecosystem boundary is useful but not perfectly closed"
    ],
    "flow": [
      "Physical conditions and material resources",
      "Producers, consumers and decomposers",
      "Spatial patterns such as vertical layers",
      "Linked transformations and exchanges"
    ]
  },
  {
    "title": "Primary productivity: GPP, respiration and NPP",
    "kind": "flow",
    "lines": [
      "GPP measures total primary production rate",
      "NPP = GPP − producer respiration",
      "Rates require area or volume and a time basis",
      "NPP contributes new producer biomass available to other pathways"
    ],
    "flow": [
      "Gross primary productivity = 1200",
      "Producer respiration = 400",
      "Net primary productivity = 800",
      "Use the same energy, space and time units"
    ]
  },
  {
    "title": "Secondary productivity, biomass and turnover",
    "kind": "flow",
    "lines": [
      "Secondary productivity concerns new consumer biomass",
      "Assimilated energy can support respiration or production",
      "Standing biomass differs from production rate",
      "Rapid turnover can support a larger consumer stock"
    ],
    "flow": [
      "Ingested material",
      "Assimilated fraction after unabsorbed losses",
      "Respiration + new consumer biomass",
      "Compare production over time with standing stock"
    ]
  },
  {
    "title": "Decomposition: fragmentation through mineralisation",
    "kind": "flow",
    "lines": [
      "Detritus includes dead remains and organic wastes",
      "Fragmentation breaks material into smaller pieces",
      "Microbial enzymes contribute catabolic breakdown",
      "Mineralisation releases inorganic nutrients"
    ],
    "flow": [
      "Detritus → fragmentation and leaching",
      "Microbial enzymatic catabolism",
      "Humification: relatively resistant humus forms",
      "Mineralisation: inorganic nutrients released"
    ]
  },
  {
    "title": "Decomposition controls: substrate, water and oxygen",
    "kind": "flow",
    "lines": [
      "Litter chemistry affects decomposition rate",
      "Lignin-rich material can resist rapid breakdown",
      "Moisture and temperature have context-dependent effects",
      "Waterlogging can reduce oxygen supply"
    ],
    "flow": [
      "Litter quality and decomposer community",
      "Suitable temperature and moisture",
      "Oxygen availability and other constraints",
      "Observed breakdown rate over a stated interval"
    ]
  },
  {
    "title": "Food chains, food webs and detrital pathways",
    "kind": "flow",
    "lines": [
      "A food chain traces one feeding pathway",
      "A food web connects multiple feeding pathways",
      "Grazing pathways begin with living producers",
      "Detrital pathways begin with dead organic material"
    ],
    "flow": [
      "Living producer → herbivore → carnivore",
      "Dead material → detrital consumers / microbes",
      "Multiple feeding links form a web",
      "Arrow direction should match the stated convention"
    ]
  },
  {
    "title": "Energy flow and the ten-percent model",
    "kind": "flow",
    "lines": [
      "Energy flow is directional rather than cyclic",
      "Respiration dissipates energy as heat",
      "Ten percent is a simplified transfer model",
      "Compare equal area and time bases"
    ],
    "flow": [
      "Producer production: 10,000 energy units",
      "Primary consumer production: 1,000",
      "Secondary consumer production: 100",
      "Two assumed 10% transfers, not one"
    ]
  },
  {
    "title": "Pyramids of numbers: counts are not biomass",
    "kind": "flow",
    "lines": [
      "A numbers pyramid counts organisms per trophic level",
      "Its shape depends on the organisms and system",
      "One tree can support many consumers",
      "Count and organism size answer different questions"
    ],
    "flow": [
      "Many grasses → fewer herbivores → fewer predators",
      "One tree → many insect consumers",
      "Counts can give an inverted or irregular shape",
      "This does not define the energy pyramid shape"
    ]
  },
  {
    "title": "Biomass and energy pyramids: stock versus flow",
    "kind": "flow",
    "lines": [
      "A biomass pyramid shows standing mass",
      "Aquatic producer biomass can be smaller than consumer biomass",
      "Fast producer turnover can explain an inverted biomass stock",
      "An energy pyramid is upright on a common time basis"
    ],
    "flow": [
      "Biomass: snapshot of standing material",
      "Fast turnover can support an inverted stock pattern",
      "Energy: production transferred over time",
      "Losses constrain the energy-flow pyramid"
    ]
  },
  {
    "title": "Biodiversity: genetic, species and ecosystem levels",
    "kind": "flow",
    "lines": [
      "Genetic diversity occurs within species",
      "Species diversity includes richness and representation",
      "Ecological diversity concerns different ecosystems",
      "Richness and evenness describe different features"
    ],
    "flow": [
      "Variation within a species",
      "Different species in a community",
      "Different ecosystem types across a region",
      "State the level before comparing diversity"
    ]
  },
  {
    "title": "Biodiversity patterns: latitude and sampling context",
    "kind": "flow",
    "lines": [
      "Many groups show greater richness toward the tropics",
      "The broad gradient has exceptions",
      "History, climate and productivity can contribute",
      "Sampling and taxonomic group affect comparisons"
    ],
    "flow": [
      "Specify taxonomic group and sampling method",
      "Compare regions on a suitable area basis",
      "Recognize the broad latitudinal richness pattern",
      "Evaluate mechanisms rather than one universal cause"
    ]
  },
  {
    "title": "Species–area relationship and logarithmic slope",
    "kind": "flow",
    "lines": [
      "A simple model is S = C × Aᶻ",
      "S is richness and A is the sampled area",
      "log S = log C + z log A",
      "z is a slope on the stated log–log graph"
    ],
    "flow": [
      "Ordinary axes: richness rises with area",
      "Model: S = C × Aᶻ",
      "Log–log axes: straight-line approximation",
      "Slope z depends on the comparison and scale"
    ]
  },
  {
    "title": "Why biodiversity matters: function, options and ethics",
    "kind": "flow",
    "lines": [
      "Biodiversity supports multiple ecological functions",
      "Species can differ in their functional contributions",
      "Diversity–stability relationships need a defined measure",
      "Conservation reasons include utility, options and ethics"
    ],
    "flow": [
      "Ecological functions and interactions",
      "Food, materials and possible future uses",
      "Responses to disturbance and changing conditions",
      "Ethical responsibility beyond immediate commercial value"
    ]
  },
  {
    "title": "Biodiversity loss: habitat, exploitation, invasions and coextinction",
    "kind": "flow",
    "lines": [
      "Habitat loss and fragmentation can reduce persistence",
      "Overexploitation can exceed population replacement",
      "Invasive alien species can disrupt interactions",
      "Coextinction links losses among dependent species"
    ],
    "flow": [
      "Habitat loss / fragmentation",
      "Exploitation beyond replacement",
      "Harmful invasions in a new setting",
      "Loss of a required partner → coextinction risk"
    ]
  },
  {
    "title": "Extinction, threatened categories and the Red Data Book",
    "kind": "flow",
    "lines": [
      "Global extinction differs from local disappearance",
      "Extinct in the Wild differs from Extinct",
      "VU, EN and CR form the threatened grouping",
      "Data Deficient does not mean proven safe"
    ],
    "flow": [
      "Assess population, range and other risk evidence",
      "Vulnerable / Endangered / Critically Endangered",
      "Separate extinct status from threatened risk",
      "Check the assessment date and geographic scope"
    ]
  },
  {
    "title": "Biodiversity hotspots: endemism plus habitat loss",
    "kind": "flow",
    "lines": [
      "A hotspot combines endemism and severe habitat loss",
      "The familiar threshold is 1500 endemic vascular plants",
      "At least 70% original natural vegetation is lost",
      "A hotspot is not automatically a legal protected-area category"
    ],
    "flow": [
      "High endemic vascular-plant richness",
      "Severe loss of original natural vegetation",
      "Priority region can cross political boundaries",
      "Conservation action still requires local evidence"
    ]
  },
  {
    "title": "In situ conservation: reserves, parks and sacred groves",
    "kind": "flow",
    "lines": [
      "In situ conservation protects organisms in their habitat",
      "Biosphere reserves integrate conservation and human contexts",
      "National parks and sanctuaries are distinct categories",
      "Sacred groves illustrate community-linked habitat protection"
    ],
    "flow": [
      "Protect habitats and interacting populations",
      "Maintain core conservation priorities",
      "Consider buffers, connectivity and surrounding livelihoods",
      "Support management, monitoring and community relationships"
    ]
  },
  {
    "title": "Ex situ conservation and complementary strategies",
    "kind": "flow",
    "lines": [
      "Ex situ conservation operates outside natural habitats",
      "Seed banks and living collections preserve different material",
      "Cryopreservation requires suitable biological material",
      "Collections complement rather than replace habitat protection"
    ],
    "flow": [
      "Defined conservation target",
      "Seed bank / living collection / managed breeding",
      "Preserve identity, viability and genetic representation",
      "Link with habitat and recovery plans where appropriate"
    ]
  },
  {
    "title": "Integrated ecology reasoning and the Biology handoff",
    "kind": "flow",
    "lines": [
      "Identify the level and measured quantity",
      "Separate stock, rate and per-capita rate",
      "Match interaction mechanisms and conservation objectives",
      "All ten Biology units now have foundation recordings"
    ],
    "flow": [
      "Define organism / population / ecosystem / diversity level",
      "Check axes, units, interval and model assumptions",
      "Calculate or identify the mechanism",
      "State the justified conclusion and remaining uncertainty"
    ]
  }
] as const;
