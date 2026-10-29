export const sixCoordinateFeIIRadii=[{spin:'High spin',radiusAngstrom:.78},{spin:'Low spin',radiusAngstrom:.61}] as const;
// Positions are north,east,south,west. Fixing A leaves three choices opposite A.
export const squarePlanarPatterns=[['A','C','B','D'],['A','B','C','D'],['A','B','D','C']] as const;
export const d6Fillings=[
 {label:'High spin',t2g:[2,1,1],eg:[1,1]},
 {label:'Low spin',t2g:[2,2,2],eg:[0,0]}
] as const;
