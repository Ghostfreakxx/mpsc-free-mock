// Supplied three-state practice model, not an experimental butane fit.
export function conformerPopulations(temperature=300,gap=3000){const w=Math.exp(-gap/(8.314*temperature)),z=1+2*w;return{anti:1/z,gauchePlus:w/z,gaucheMinus:w/z};}
