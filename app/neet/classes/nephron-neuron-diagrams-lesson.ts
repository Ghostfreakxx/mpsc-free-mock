import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-nephron-neuron-diagrams-lecture.json';
import timings from '../../data/neet-nephron-neuron-diagrams-timings.json';
export const nephronNeuronDiagramsLesson:PlayerLecture={
 id:'neet-nephron-neuron-diagrams',subject:'Biology',unit:5,number:'B24',title:data.title,
 description:'Recorded Human Physiology diagram workshop covering nephron, renal corpuscle, neuron and synapse labels and flow.',
 scope:data.scope,progressKey:'neet.nephron-neuron-diagrams.lecture.v1',
 audio:'/lectures/neet-nephron-neuron-diagrams/narration-marin.mp3',subtitles:'/lectures/neet-nephron-neuron-diagrams/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
