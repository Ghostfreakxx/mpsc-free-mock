export const xyleneSiteClasses=[
 {label:'o-Xylene',methyl:[0,1],classes:[[2,5],[3,4]]},
 {label:'m-Xylene',methyl:[0,2],classes:[[1],[3,5],[4]]},
 {label:'p-Xylene',methyl:[0,3],classes:[[1,2,4,5]]}
] as const;
export const aminoFischerPatterns=[
 {label:'L-Alanine: S',sideChain:'CH3',carboxylPriority:2,sidePriority:3},
 {label:'L-Cysteine: R',sideChain:'CH2SH',carboxylPriority:3,sidePriority:2}
] as const;
export const enzymeSaturationModel={kmMillimolar:2,vmaxMicromolarPerMinute:100} as const;
export function initialEnzymeRate(substrateMillimolar:number){const m=enzymeSaturationModel;return m.vmaxMicromolarPerMinute*substrateMillimolar/(m.kmMillimolar+substrateMillimolar);}
