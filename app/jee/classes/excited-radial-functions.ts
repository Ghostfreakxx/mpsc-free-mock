// Hydrogen distributions with respect to x=r/a0, each integrating to one.
export const hydrogen2sRadial=(x:number)=>x*x*(2-x)**2*Math.exp(-x)/8;
export const hydrogen2pRadial=(x:number)=>x**4*Math.exp(-x)/24;
