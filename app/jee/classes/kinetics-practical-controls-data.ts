export const mixedFirstOrderFractions=(minutes:number)=>({fast:Math.pow(2,-minutes/10),slow:Math.pow(2,-minutes/20),total:.5*Math.pow(2,-minutes/10)+.5*Math.pow(2,-minutes/20)});
export const collisionFilters={collisionsPerSecond:1_000_000,energeticFraction:.020,suitableAmongEnergetic:.10};
export const nickelChelateLedger={metalCharge:2,ligandCharge:-1,ligandsPerMetal:2,donorsPerLigand:2};
