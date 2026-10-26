// Neutral HA partitions with P; A− remains aqueous at a maintained pH.
export function acidDistributionRatio(P:number,pH:number,pKa:number){return P/(1+10**(pH-pKa));}
export function organicInventoryFraction(D:number,aqueousVolume:number,organicVolume:number){return D*organicVolume/(aqueousVolume+D*organicVolume);}
