export const peptideCandidates=[['A','A','G'],['A','G','A'],['G','A','A']] as const;
export const aminoAcidChargeModels=[
 {label:'Asp model',pka:[2.1,3.9,9.8],charges:[1,0,-1,-2],bracket:[0,1],pi:3},
 {label:'Lys model',pka:[2.2,9,10.5],charges:[2,1,0,-1],bracket:[1,2],pi:9.75}
] as const;
