import fs from 'node:fs/promises';
import path from 'node:path';
import { splitLongCues } from './caption-layout.mjs';
import { reserveAudioBudget, alignmentReservationUsd } from './physics-audio-budget.mjs';

const root = path.resolve(import.meta.dirname, '..');
const selected = process.argv[2] ?? 'straight-line-motion';
const targets = { 'straight-line-motion': 'straight-line', 'newtons-laws': 'newtons', 'work-energy': 'work-energy', rotation: 'rotation', gravity: 'gravity', elasticity: 'elasticity', 'fluid-statics': 'fluid-statics', 'fluid-flow': 'fluid-flow', 'viscosity-surface-tension': 'viscosity-surface-tension', 'thermal-expansion': 'thermal-expansion', calorimetry: 'calorimetry', 'heat-transfer': 'heat-transfer', thermodynamics: 'thermodynamics', 'kinetic-theory': 'kinetic-theory' };
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
for (const id of ['refraction','lenses','prisms','optical-instruments','interference','diffraction-polarization','photoelectric','matter-waves','atoms','nuclei','semiconductor-diodes','special-diodes','logic-gates','lab-measurements','lab-materials','lab-electricity','lab-optics','lab-devices']) targets[id] = id;
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
const folder = path.join(root, 'public/lectures', selected);
const { loadEnvConfig } = (await import('@next/env')).default;
loadEnvConfig(root, false, { info() {}, error() {} });
const key = process.env.OPENAI_API_KEY;
if (!key?.trim()) throw new Error('Missing API credential');
const original = JSON.parse(await fs.readFile(path.join(root, `app/data/jee-${dataName}-timings.json`), 'utf8'));
const chapters = original.chapters ?? original.cues.map(cue => ({ start: cue.start, end: cue.end }));
const cues = [];
const lesson = JSON.parse(await fs.readFile(path.join(root, `app/data/jee-${dataName}-lecture.json`), 'utf8'));
const numbers = { '0':'zero', '1':'one', '2':'two', '3':'three', '4':'four', '5':'five', '6':'six', '7':'seven', '8':'eight', '9':'nine', '10':'ten', '11':'eleven', '28':'twenty eight', '30':'thirty', '50':'fifty', '80':'eighty', '110':'one hundred and ten', '9.8':'nine point eight' };
const normalize = word => word.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/^metres?$/, 'meter').replace(/^meters$/, 'meter').replace('memorising', 'memorizing');
function alignScript(script, observed, duration) {
  const tokens = script.replace(/-/g, ' ').split(/\s+/);
  const heard = observed.flatMap(word => {
    const parts = (numbers[word.word] ?? word.word).replace(/-/g, ' ').split(/\s+/);
    return parts.map((text, i) => ({ word:text, start:word.start + (word.end-word.start)*i/parts.length, end:word.start + (word.end-word.start)*(i+1)/parts.length }));
  });
  const dp = Array.from({length:tokens.length+1}, () => new Uint16Array(heard.length+1));
  for (let i=tokens.length-1;i>=0;i--) for(let j=heard.length-1;j>=0;j--) dp[i][j] = normalize(tokens[i])===normalize(heard[j].word) ? dp[i+1][j+1]+1 : Math.max(dp[i+1][j],dp[i][j+1]);
  const aligned = tokens.map(word => ({word, start:null, end:null}));
  let i=0,j=0;
  while(i<tokens.length && j<heard.length) {
    if(normalize(tokens[i])===normalize(heard[j].word)) { aligned[i]={word:tokens[i],start:heard[j].start,end:heard[j].end};i++;j++; }
    else if(dp[i+1][j]>=dp[i][j+1]) i++; else j++;
  }
  for(i=0;i<aligned.length;) {
    if(aligned[i].start!==null) {i++;continue;}
    const begin=i;
    while(i<aligned.length && aligned[i].start===null)i++;
    const start=begin ? aligned[begin-1].end : 0;
    const end=i<aligned.length ? aligned[i].start : duration;
    for(let k=begin;k<i;k++) { aligned[k].start=start+(end-start)*(k-begin)/(i-begin);aligned[k].end=start+(end-start)*(k-begin+1)/(i-begin); }
  }
  return aligned;
}
const stamp = seconds => {
  const n = Math.round(seconds * 1000);
  return `${String(Math.floor(n / 3600000)).padStart(2, '0')}:${String(Math.floor(n / 60000) % 60).padStart(2, '0')}:${String(Math.floor(n / 1000) % 60).padStart(2, '0')}.${String(n % 1000).padStart(3, '0')}`;
};
for (let chapter = 0; chapter < chapters.length; chapter++) {
  const stem = `chapter-${String(chapter + 1).padStart(2, '0')}`;
  const cache = path.join(folder, `${stem}-alignment.json`);
  let alignment;
  try { alignment = JSON.parse(await fs.readFile(cache, 'utf8')); } catch (error) {
    if (error.code !== 'ENOENT') throw new Error('Invalid alignment cache; generation stopped');
    await reserveAudioBudget(root, { lesson: selected, chapter: chapter + 1, kind: 'alignment', amount: alignmentReservationUsd(chapters[chapter].end - chapters[chapter].start) });
    const form = new FormData();
    form.append('file', new Blob([await fs.readFile(path.join(folder, `${stem}.mp3`))], { type: 'audio/mpeg' }), `${stem}.mp3`);
    form.append('model', 'whisper-1');
    form.append('response_format', 'verbose_json');
    form.append('timestamp_granularities[]', 'word');
    form.append('language', 'en');
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', { method: 'POST', headers: { Authorization: `Bearer ${key}` }, body: form });
    if (!response.ok) throw new Error(`Alignment failed: HTTP ${response.status}`);
    alignment = await response.json();
    await fs.writeFile(cache, JSON.stringify(alignment, null, 2));
  }
  if (!alignment.words?.length) throw new Error('Missing word timestamps');
  let group = [];
  const flush = () => {
    if (!group.length) return;
    cues.push({ start: chapters[chapter].start + group[0].start, end: Math.min(chapters[chapter].end, chapters[chapter].start + group.at(-1).end), text: group.map(w => w.word).join(' '), chapter });
    group = [];
  };
  for (const word of alignScript(lesson.chapters[chapter].script, alignment.words, chapters[chapter].end-chapters[chapter].start)) {
    if (group.length && (group.map(w => w.word).join(' ').length + word.word.length > 78 || word.end - group[0].start > 6)) flush();
    group.push(word);
    if (/[.!?]$/.test(word.word)) flush();
  }
  flush();
  console.log(`Chapter ${chapter + 1}: ${alignment.words.length} timed words`);
}
for (let i = 0; i < cues.length; i++) {
  if (i && cues[i].chapter === cues[i-1].chapter && (cues[i].end <= cues[i].start || cues[i].start < cues[i-1].end - 0.02)) {
    cues[i-1].text += ' ' + cues[i].text;
    cues[i-1].end = Math.max(cues[i-1].end, cues[i].end);
    cues.splice(i, 1);
    i--;
    continue;
  }
  if (!(cues[i].end > cues[i].start) || (i && cues[i].start < cues[i-1].end - 0.02)) throw new Error('Invalid subtitle timing');
}
// Timestamp repairs can merge text; restore readable cue lengths afterward.
const readableCues = splitLongCues(cues);
await fs.writeFile(path.join(folder, 'english.vtt'), 'WEBVTT\n\n' + readableCues.map(c => `${stamp(c.start)} --> ${stamp(c.end)}\n${c.text}`).join('\n\n') + '\n');
await fs.writeFile(path.join(root, `app/data/jee-${dataName}-timings.json`), JSON.stringify({ duration: original.duration, chapters, cues: readableCues }, null, 2) + '\n');
console.log(`Validated ${readableCues.length} captions across ${chapters.length} chapters`);
