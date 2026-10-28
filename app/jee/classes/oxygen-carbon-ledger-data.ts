export const oxygenCarbonLedgers=[
 {label:'Ester + two Grignard carbon groups',inputs:[{name:'Ethyl ethanoate',carbons:4},{name:'Two methyl groups',carbons:2}],outputs:[{name:'tert-Butanol',carbons:4},{name:'Ethanol',carbons:2}],note:'Acyl carbon accepts both methyl groups.'},
 {label:'Strong hydride ester reduction',inputs:[{name:'Methyl propanoate',carbons:4},{name:'Hydride carbon',carbons:0}],outputs:[{name:'Propan-1-ol',carbons:3},{name:'Methanol',carbons:1}],note:'No new carbon–carbon bond joins the fragments.'}
] as const;
