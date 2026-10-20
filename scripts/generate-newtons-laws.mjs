import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import envPackage from '@next/env';
import { reserveAudioBudget, ttsReservationUsd } from './physics-audio-budget.mjs';

const root = path.resolve(import.meta.dirname, '..');
envPackage.loadEnvConfig(root, false, { info() {}, error() {} });
const key = process.env.OPENAI_API_KEY;
if (!key?.trim()) throw new Error('Missing API credential');
const selected = process.argv[2] ?? 'newtons-laws';
const requestTimeoutMs = Number(process.env.RECORDING_TTS_TIMEOUT_MS ?? 600000);
if (!Number.isInteger(requestTimeoutMs) || requestTimeoutMs < 30000 || requestTimeoutMs > 600000) throw new Error('Recording timeout must be between 30000 and 600000 milliseconds');
const targets = { 'newtons-laws': 'newtons', 'work-energy': 'work-energy', rotation: 'rotation', gravity: 'gravity', elasticity: 'elasticity', 'fluid-statics': 'fluid-statics', 'fluid-flow': 'fluid-flow', 'viscosity-surface-tension': 'viscosity-surface-tension', 'thermal-expansion': 'thermal-expansion', calorimetry: 'calorimetry', 'heat-transfer': 'heat-transfer', thermodynamics: 'thermodynamics', 'kinetic-theory': 'kinetic-theory' };
targets.oscillations = 'oscillations';
targets.waves = 'waves';
targets['electric-fields'] = 'electric-fields';
targets['gauss-law'] = 'gauss-law';
targets['electric-potential'] = 'electric-potential';
targets.capacitors = 'capacitors';
targets['current-electricity'] = 'current-electricity';
targets['resistor-networks'] = 'resistor-networks';
targets['cells-emf'] = 'cells-emf';
targets['kirchhoff-laws'] = 'kirchhoff-laws';
targets.bridges = 'bridges';
targets['magnetic-fields'] = 'magnetic-fields';
targets['ampere-solenoids'] = 'ampere-solenoids';
targets['magnetic-forces'] = 'magnetic-forces';
targets['wire-forces'] = 'wire-forces';
targets['loop-torque'] = 'loop-torque';
targets['galvanometers'] = 'galvanometers';
targets['dipole-fields'] = 'dipole-fields';
targets['magnetic-materials'] = 'magnetic-materials';
targets['faraday-lenz'] = 'faraday-lenz';
targets['motional-emf'] = 'motional-emf';
targets['self-inductance'] = 'self-inductance';
targets['ac-basics'] = 'ac-basics';
targets['lcr-resonance'] = 'lcr-resonance';
targets['generators-transformers'] = 'generators-transformers';
targets['em-waves'] = 'em-waves';
targets.mirrors = 'mirrors';
for (const id of ['refraction','lenses','prisms','optical-instruments','interference','diffraction-polarization','photoelectric','matter-waves','atoms','nuclei','semiconductor-diodes','special-diodes','logic-gates','lab-measurements','lab-materials']) targets[id] = id;
targets['lab-electricity'] = 'lab-electricity';
targets['lab-optics'] = 'lab-optics';
targets['lab-devices'] = 'lab-devices';
targets['kinematics-applications'] = 'kinematics-applications';
targets['laws-motion-applications'] = 'laws-motion-applications';
targets['energy-applications'] = 'energy-applications';
targets['gravity-applications'] = 'gravity-applications';
for (const id of ['rotation-applications', 'materials-applications', 'thermodynamics-applications', 'kinetic-theory-applications']) targets[id] = id;
targets['lab-convex-mirror'] = 'lab-convex-mirror';
targets['waves-applications'] = 'waves-applications';
targets['induction-applications'] = 'induction-applications';
targets['magnetic-applications'] = 'magnetic-applications';
targets['circuit-applications'] = 'circuit-applications';
targets['capacitor-applications'] = 'capacitor-applications';
targets['electrostatics-applications'] = 'electrostatics-applications';
targets['em-wave-applications'] = 'em-wave-applications';
targets['optics-applications'] = 'optics-applications';
targets['wave-optics-applications'] = 'wave-optics-applications';
for (const id of ['dual-nature-applications', 'atomic-nuclear-applications', 'electronics-applications', 'experimental-applications']) targets[id] = id;
for (const id of ['banked-road-limits', 'optics-derivations', 'lab-liquid-mixtures']) targets[id] = id;
targets['organic-principles'] = 'organic-principles';
targets['coordination-compounds'] = 'coordination-compounds';
targets['chemical-kinetics'] = 'chemical-kinetics';
targets['chemical-thermodynamics'] = 'chemical-thermodynamics';
targets.solutions = 'solutions';
targets.equilibrium = 'equilibrium';
targets['redox-electrochemistry'] = 'redox-electrochemistry';
targets['biomolecules'] = 'biomolecules';
targets['purification-analysis'] = 'purification-analysis';
targets['practical-chemistry'] = 'practical-chemistry';
targets['organic-oxygen'] = 'organic-oxygen';
targets['organic-nitrogen'] = 'organic-nitrogen';
targets['hydrocarbons'] = 'hydrocarbons';
targets['organic-halogens'] = 'organic-halogens';
targets['mole-concept'] = 'mole-concept';
targets['periodic-trends'] = 'periodic-trends';
targets['atomic-structure'] = 'atomic-structure';
targets['chemical-bonding'] = 'chemical-bonding';
if (!targets[selected]) throw new Error('Unknown lesson');
const dataName = targets[selected];
const lesson = JSON.parse(await fs.readFile(path.join(root, `app/data/jee-${dataName}-lecture.json`), 'utf8'));
const onlyChapter = process.argv[3] === undefined ? null : Number(process.argv[3]);
if (onlyChapter !== null && (!Number.isInteger(onlyChapter) || onlyChapter < 1 || onlyChapter > lesson.chapters.length)) throw new Error('Invalid chapter number');
const folder = path.join(root, 'public/lectures', selected);
await fs.mkdir(folder, { recursive: true });
const instructions = lesson.voiceInstructions ?? 'Warm, natural female American-English teacher. Conversational and encouraging, clear pronunciation, natural pauses, gentle emphasis on key contrasts, slightly slower for equations and numbers. Use a short thinking pause when inviting the student to predict an answer. Speak like an attentive JEE classroom teacher, never robotic or overly dramatic.';
function inspectMp3(buffer) {
  let offset = 0;
  if (buffer.subarray(0,3).toString() === 'ID3') offset = 10 + ((buffer[6]<<21)|(buffer[7]<<14)|(buffer[8]<<7)|buffer[9]);
  const start = offset;
  let seconds = 0;
  let frames = 0;
  while (offset+4<=buffer.length) {
    const h=buffer.readUInt32BE(offset), version=(h>>>19)&3, layer=(h>>>17)&3, bi=(h>>>12)&15, si=(h>>>10)&3;
    if ((h>>>21)!==2047 || version===1 || layer!==1 || !bi || bi===15 || si===3) throw new Error('Invalid MP3 frame');
    const rate=[44100,48000,32000][si]/(version===3?1:version===2?2:4);
    const rates=version===3?[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320]:[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160];
    const size=Math.floor((version===3?144:72)*rates[bi]*1000/rate)+((h>>>9)&1);
    if(offset+size>buffer.length) throw new Error('Truncated MP3 frame');
    seconds+=(version===3?1152:576)/rate; offset+=size;frames++;
  }
  if(!frames || offset!==buffer.length) throw new Error('Incomplete MP3');
  return {seconds, audio:buffer.subarray(start)};
}
const parts=[], chapters=[];
let duration=0;
for (const [i,chapter] of lesson.chapters.entries()) {
  if (onlyChapter !== null && i + 1 !== onlyChapter) continue;
  // Preserve the exact requested input when a reviewed transcript corrects a TTS omission.
  const speechInput = chapter.speechInput ?? chapter.script;
  const stem=`chapter-${String(i+1).padStart(2,'0')}`;
  const file=path.join(folder,`${stem}.mp3`);
  const fingerprint=createHash('sha256').update(JSON.stringify({script:speechInput,instructions,voice:'marin',model:'gpt-4o-mini-tts'})).digest('hex');
  let buffer;
  try {
    buffer=await fs.readFile(file);
    if((await fs.readFile(path.join(folder,`${stem}.sha256`),'utf8'))!==fingerprint) throw new Error('Existing chapter differs; preserve it and explicitly select a new output version');
  } catch(error) {
    if(error.code!=='ENOENT') throw error;
    if (buffer) throw new Error('Audio exists without a valid fingerprint; preserve it and repair its cache');
    if (speechInput.length > 4096) throw new Error('Chapter exceeds the speech input limit');
    await reserveAudioBudget(root, { lesson: selected, chapter: i + 1, kind: 'tts', amount: ttsReservationUsd });
    const response=await fetch('https://api.openai.com/v1/audio/speech',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({model:'gpt-4o-mini-tts',voice:'marin',instructions,input:speechInput,response_format:'mp3'}),signal:AbortSignal.timeout(requestTimeoutMs)});
    if(!response.ok) throw new Error(`TTS HTTP ${response.status}`);
    const chunks=[];let bytes=0,lastReport=Date.now();
    for await(const chunk of response.body){
      chunks.push(chunk);bytes+=chunk.length;
      if(Date.now()-lastReport>30000){console.log(`${selected} chapter ${i+1}: received ${Math.round(bytes/1024)} KB`);lastReport=Date.now();}
    }
    buffer=Buffer.concat(chunks);
    const generated = inspectMp3(buffer);
    if(generated.seconds<20 || generated.seconds>240) throw new Error('Unexpected generated chapter duration; audio was not cached');
    await fs.writeFile(file,buffer,{flag:'wx'});
    await fs.writeFile(path.join(folder,`${stem}.sha256`),fingerprint);
  }
  const part=inspectMp3(buffer);
  if(part.seconds<20 || part.seconds>240) throw new Error('Unexpected chapter duration');
  parts.push(part.audio);
  chapters.push({start:duration,end:duration+part.seconds});
  duration+=part.seconds;
  console.log(`Chapter ${i+1}: ${part.seconds.toFixed(3)} seconds, validated`);
}
if (onlyChapter !== null) process.exit(0);
await fs.writeFile(path.join(folder,'narration-marin.mp3'),Buffer.concat(parts));
const timingsPath=path.join(root,`app/data/jee-${dataName}-timings.json`);
let existing;
try {existing=JSON.parse(await fs.readFile(timingsPath,'utf8'));} catch(error) {if(error.code!=='ENOENT')throw error;}
await fs.writeFile(timingsPath,JSON.stringify({duration,chapters,cues:existing?.duration===duration?existing.cues:[]},null,2)+'\n');
console.log(`Total: ${duration.toFixed(3)} seconds`);
