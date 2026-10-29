export const idealRecycleModel={fresh:100,singlePassConversion:.40} as const;
export function idealRecycleFlows(){const m=idealRecycleModel,reactor=m.fresh/m.singlePassConversion;return {fresh:m.fresh,reactor,recycle:reactor*(1-m.singlePassConversion),product:reactor*m.singlePassConversion};}
export type RingFace='up'|'down';
export function axialFace(carbon:number,flipped:boolean):RingFace {const up=carbon%2===1;return up!==flipped?'up':'down';}
export function chairPosition(carbon:number,face:RingFace,flipped:boolean){return face===axialFace(carbon,flipped)?'axial':'equatorial';}
export const chairPairs=[{label:'cis-1,2: up / up',faces:['up','up']},{label:'trans-1,2: up / down',faces:['up','down']}] as const;
