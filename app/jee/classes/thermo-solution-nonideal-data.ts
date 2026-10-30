export const cycleCorners=[{volume:1,pressure:2},{volume:3,pressure:2},{volume:3,pressure:1},{volume:1,pressure:1}]as const;
export function vapourContributions(nonideal:boolean){return{a:.4*(nonideal?1.5:1)*100,b:.6*(nonideal?1.2:1)*50};}
