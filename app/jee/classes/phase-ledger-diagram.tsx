import styles from './lecture.module.css';
import {phaseEnthalpyModel as m,idealDewModel as d,idealDewPressure} from './phase-ledger-data';
export default function PhaseLedgerDiagram({kind}:{kind:'enthalpy'|'dew'}){
 const before=m.initial+(m.cpSolidB-m.cpSolidA)*50/1000,after=before-m.fusion,final=after+(m.cpSolidB-m.cpLiquidA)*50/1000;
 const dew=idealDewPressure(d.vaporA,d.pureA,d.pureB),xA=d.vaporA*dew/d.pureA;
 return <svg className={styles.diagram} viewBox="0 0 460 320" role="img" aria-label={kind==='enthalpy'?'Reaction enthalpy correction across reactant melting':'Equal liquid and equal vapor are different equilibrium inputs'}>
  <title>{kind==='enthalpy'?'Reactant fusion lowers products-minus-reactants enthalpy':'Ideal binary bubble and dew comparison'}</title><rect width="460" height="320" rx="12" fill="#f5faf7"/>
  <g fontFamily="Arial, sans-serif" textAnchor="middle" fill="#20483e">
   {kind==='enthalpy'?<>
    <text x="230" y="28" fontSize="16" fontWeight="bold">Follow the phases through 350 K</text>
    <text x="230" y="49" fontSize="12">Reaction ΔH in kJ/mol; B remains solid</text>
    <path d="M65 83V242H412" stroke="#71948a" fill="none"/>
    <path d="M90 103L230 91M230 91V215M230 215L380 227" stroke="#207c65" strokeWidth="3" fill="none"/>
    <text x="97" y="86" fontSize="13">{m.initial}</text><text x="208" y="76" fontSize="13">{before}</text>
    <text x="260" y="212" fontSize="13">{after}</text><text x="389" y="214" fontSize="13">{final}</text>
    <text x="132" y="136" fontSize="11">ΔCp = +10</text><text x="325" y="254" fontSize="11">ΔCp = −10 J/mol K</text>
    <text x="312" y="157" fontSize="12">A melts: subtract 5</text>
    {[90,230,380].map((x,i)=><text key={x} x={x} y="275" fontSize="12">{[300,350,400][i]} K</text>)}
    <text x="230" y="301" fontSize="11">20 + .5 − 5 − .5 = 15; illustrative constant-Cp model</text>
   </>:<>
    <text x="230" y="28" fontSize="16" fontWeight="bold">Equal liquid ≠ equal vapour</text>
    <text x="230" y="51" fontSize="12">Same T: PA* = 100; PB* = 40 kPa; ideal phases</text>
    {[{title:'Start with liquid xA = .5',p:70,other:'First vapour yA = 5/7',fraction:5/7},{title:'Start with vapour yA = .5',p:dew,other:'First liquid xA = 2/7',fraction:xA}].map((v,i)=><g key={v.title} transform={`translate(0 ${i*108})`}>
     <text x="230" y="82" fontSize="13" fontWeight="bold">{v.title}</text><text x="230" y="103" fontSize="12">{i===0?'Bubble':'Dew'} pressure = {v.p.toFixed(2)} kPa</text>
     <rect x="80" y="116" width="300" height="17" fill="#dfac73"/><rect x="80" y="116" width={300*v.fraction} height="17" fill="#2d8770"/>
     <text x="230" y="151" fontSize="12">{v.other}</text>
    </g>)}
    <text x="230" y="284" fontSize="11">Green: A; tan: B in the first newly formed phase</text>
    <text x="230" y="304" fontSize="11">1/Pdew = yA/PA* + (1−yA)/PB*</text>
   </>}
  </g>
 </svg>;
}
