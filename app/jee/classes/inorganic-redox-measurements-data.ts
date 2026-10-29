export const peroxideRedoxPaths=[
 {product:'Water',oxygenState:-2,electronsAccepted:2,role:'Oxidizing agent'},
 {product:'Oxygen gas',oxygenState:0,electronsAccepted:-2,role:'Reducing agent'}
] as const;
export const magneticMixtureModel={feIIUnpaired:4,feIIIUnpaired:5,observedSquare:30.6} as const;
export function spinOnlySquare(unpaired:number){return unpaired*(unpaired+2);}
export function mixtureMomentSquare(feIIIFraction:number){return (1-feIIIFraction)*spinOnlySquare(magneticMixtureModel.feIIUnpaired)+feIIIFraction*spinOnlySquare(magneticMixtureModel.feIIIUnpaired);}
