import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read=id=>JSON.parse(fs.readFileSync(`app/data/jee-${id}-lecture.json`));
const t=read('chemical-thermodynamics'),s=read('solutions');
const answer=(l,i)=>l.quiz[i].options[l.quiz[i].answer];
const near=(a,b,tol=1e-9)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);
test('free-expansion entropy follows a reference integral despite zero actual heat and work',()=>{
 const R=8.314,n=1,T=300;let entropy=0;const steps=10000,dV=1/steps;
 for(let i=0;i<steps;i++){const V=1+(i+.5)*dV;entropy+=(n*R*T/V)*dV/T;}
 near(entropy,n*R*Math.log(2),1e-8);assert.equal(answer(t,35),'+'+entropy.toFixed(2)+' J/K');
 assert.match(answer(t,34),/q=0, w=0, ΔU=0, ΔT=0, ΔS>0/);
});
test('two-state entropy is additive, reversible under endpoint reversal and consistent at equal pressure',()=>{
 const R=8.314,Cv=1.5*R,delta=Cv*Math.log(600/300)+R*Math.log(20/10);
 near(delta+Cv*Math.log(300/600)+R*Math.log(10/20),0);
 near(R*300/10,R*600/20);assert.equal(answer(t,36),'(5R/2) ln2');assert.equal(answer(t,37),delta.toFixed(2)+' J/K');
});
test('integrated van’t Hoff prediction agrees with numerical integration and changes sign on reversal',()=>{
 const enthalpy=30000,R=8.314;let logRatio=0;const dT=30/10000;
 for(let i=0;i<10000;i++){const T=300+(i+.5)*dT;logRatio+=enthalpy/(R*T*T)*dT;}
 near(logRatio,-enthalpy/R*(1/330-1/300),1e-10);const K2=2*Math.exp(logRatio);
 assert.equal(answer(t,38),K2.toFixed(2));assert.match(answer(t,39),/decreases/);
 near(K2*Math.exp(-logRatio),2);
});
test('neutralization Hess addition cancels the intermediate and retains signed reaction energies',()=>{
 // Columns HA, H+, A−, OH−, H2O. Add ionization and water-formation reactions.
 const ion=[-1,1,1,0,0],water=[0,-1,0,-1,1],net=[-1,0,1,-1,1];
 assert.deepEqual(ion.map((n,i)=>n+water[i]),net);near(-55-(-57),2);assert.equal(answer(t,40),'+2 kJ/mol');assert.match(answer(t,41),/specified reactions/);
});
test('osmotic height uses final SI concentration and closes the mechanical pressure balance',()=>{
 const c=.002*1000,pressure=c*8.314*300,height=pressure/(1000*9.8);
 near(pressure,4988.4);near(1000*9.8*height,pressure);assert.equal(answer(s,34),pressure+' Pa');near(parseFloat(answer(s,35)),height,.0005);
});
test('two Henry balances preserve gas partial pressures and distinguish liquid from gas-only fractions',()=>{
 const y=[.8,.2],constants=[1000,100],partial=y.map(v=>v*1),x=partial.map((p,i)=>p/constants[i]),sum=x.reduce((a,b)=>a+b);
 near(partial.reduce((a,b)=>a+b),1);near(x[0]/sum,2/7);near((1-sum)+sum,1);assert.ok(x[1]>x[0]);assert.equal(answer(s,36),'2/7');assert.match(answer(s,37),/Larger dissolved mole fraction/);
});
test('azeotropic composition equality and positive pressure deviation are separate measured comparisons',()=>{
 const x=.4,partial=[32,48],P=partial.reduce((a,b)=>a+b),y=partial[0]/P,ideal=x*60+(1-x)*50;
 near(y,x);near(ideal,54);near(P-ideal,26);assert.match(answer(s,38),/yA=.400/);assert.equal(answer(s,39),ideal+' kPa; positive deviation');
});
test('partial freezing preserves solute and total water while changing only liquid molality',()=>{
 const n=18/60,initial=1,ice=.4,liquid=initial-ice,m=n/liquid,shift=1.86*m;
 near(liquid+ice,initial);near(m*liquid,n);near(1.86*n/initial,.558);near(shift,.930);assert.ok(shift>.558);
 assert.equal(answer(s,40),m.toFixed(3).replace(/^0/,'')+' mol/kg');assert.equal(answer(s,41),shift.toFixed(3).replace(/^0/,'')+' K');
});
