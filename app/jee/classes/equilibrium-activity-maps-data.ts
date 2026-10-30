export function diproticFractions(pH:number){const h=10**(-pH),k1=1e-4,k2=1e-6,denominator=h*h+k1*h+k1*k2;return{acid:h*h/denominator,middle:k1*h/denominator,base:k1*k2/denominator};}
export function waterReductionLines(pH:number){const hydrogen=-.05916*pH;return{hydrogen,oxygen:1.229+hydrogen};}
