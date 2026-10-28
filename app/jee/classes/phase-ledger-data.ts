export const phaseEnthalpyModel={initial:20,transition:350,finalTemperature:400,fusion:5,cpSolidA:30,cpLiquidA:50,cpSolidB:40} as const;
export const idealDewModel={pureA:100,pureB:40,vaporA:.5} as const;
export function idealDewPressure(yA:number,pA:number,pB:number){return 1/(yA/pA+(1-yA)/pB);}
