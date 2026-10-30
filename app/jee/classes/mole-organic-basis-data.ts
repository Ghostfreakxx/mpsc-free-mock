export const dilutionModel={volume:.100,withdrawal:.025,initialConcentration:.400,cycles:2} as const;
export const methylShiftNodes=[{id:'A',x:80,y:140,h:0},{id:'B',x:160,y:140,h:1},{id:'M1',x:30,y:75,h:3},{id:'M2',x:30,y:205,h:3},{id:'M3',x:105,y:75,h:3},{id:'M4',x:190,y:205,h:3}] as const;
export const methylShiftBefore=[['A','B'],['A','M1'],['A','M2'],['A','M3'],['B','M4']] as const;
export const methylShiftAfter=[['A','B'],['A','M1'],['A','M2'],['B','M3'],['B','M4']] as const;
export const methylShiftCharges={before:{A:0,B:1,M1:0,M2:0,M3:0,M4:0},after:{A:1,B:0,M1:0,M2:0,M3:0,M4:0}} as const;
