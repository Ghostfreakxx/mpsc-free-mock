export const binaryPhaseExample={feed:10,z:.40,x:.25,y:.75} as const;
export function binaryPhaseAmounts(feed:number,z:number,x:number,y:number){const beta=(z-x)/(y-x);return{beta,liquid:feed*(1-beta),vapour:feed*beta};}
