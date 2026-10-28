export const pSpinOrbitals=[-1,0,1].flatMap(ml=>[-.5,.5].map(ms=>({ml,ms})));
export const p2Occupations=pSpinOrbitals.flatMap((first,i)=>pSpinOrbitals.slice(i+1).map(second=>({first,second,sameSpatial:first.ml===second.ml})));
export const multicentreFillings=[
 {label:'One B–H–B bridge',electrons:2,occupancies:[2,0,0]},
 {label:'XeF₂ axial subset',electrons:4,occupancies:[2,2,0]}
] as const;
