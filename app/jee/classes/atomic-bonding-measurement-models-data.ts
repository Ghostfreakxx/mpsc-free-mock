export const argonChargeInventory=[0,0,1,1,1,1,1,2,2,2] as const;
export const hydrogenBondNodes=Array.from({length:20},(_,i)=>i);
export const hydrogenBondEdges=hydrogenBondNodes.flatMap(i=>[[i,(i+1)%20],[i,(i+3)%20]]);
