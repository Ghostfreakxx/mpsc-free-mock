export const selectivePrecipitationModel={chloride:.010,bromide:.010,kspChloride:1e-10,kspBromide:5e-13} as const;
export const conductometricModel={acidVolumeML:50,acidMolarity:.100,baseMolarity:.100,lambdaH:350,lambdaNa:50,lambdaCl:76,lambdaOH:198} as const;
export function titrationConductivity(addedML:number){
 const m=conductometricModel,acid=m.acidVolumeML*m.acidMolarity/1000,base=addedML*m.baseMolarity/1000,volume=(m.acidVolumeML+addedML)/1000;
 return (m.lambdaH*Math.max(acid-base,0)+m.lambdaOH*Math.max(base-acid,0)+m.lambdaNa*base+m.lambdaCl*acid)/volume/1000;
}
