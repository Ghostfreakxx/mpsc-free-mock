// Dimensionless hydrogen 3s factor; the overall normalization is omitted.
export function hydrogen3sRadial(x:number){return (27-18*x+2*x*x)*Math.exp(-x/3);}
// Illustrative Morse potential: zero at separated atoms, minimum -450 at r=1.
export function illustrativeBondPotential(r:number){return 450*((1-Math.exp(-2.5*(r-1)))**2-1);}
