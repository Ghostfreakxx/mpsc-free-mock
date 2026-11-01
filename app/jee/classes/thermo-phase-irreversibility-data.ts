export const fusionPracticeModel={enthalpy:6000,meltingTemperature:300,entropy:20} as const;
export function fusionFreeEnergy(temperature:number){return fusionPracticeModel.enthalpy-temperature*fusionPracticeModel.entropy;}
