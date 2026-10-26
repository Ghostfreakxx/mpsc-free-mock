// Hypothetical H2A: .0100 mol in .100 L, titrated with .100 M strong base.
// Ideal charge/mass balance includes both acid steps and water, at pKw=14.
export function diproticTitrationPH(baseMoles:number){
 const volume=.100+baseMoles/.100,acid=.0100/volume,sodium=baseMoles/volume;
 let low=-14,high=0;
 for(let i=0;i<90;i++){
  const logH=(low+high)/2,h=10**logH,denominator=h*h+1e-4*h+1e-13;
  const residual=h+sodium-1e-14/h-acid*(1e-4*h+2e-13)/denominator;
  if(residual>0)high=logH;else low=logH;
 }
 return -(low+high)/2;
}
