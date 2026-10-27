// Substituents in top, right, bottom, left order. Every cross is interpreted
// with horizontal bonds toward the viewer and vertical bonds away.
export const fischerTransformFrames=[
 {label:'Original',groups:['CHO','OH','CH₂OH','H'],configuration:'R'},
 {label:'180° page turn',groups:['CH₂OH','H','CHO','OH'],configuration:'R'},
 {label:'90° reinterpreted',groups:['H','CHO','OH','CH₂OH'],configuration:'S'}
] as const;
