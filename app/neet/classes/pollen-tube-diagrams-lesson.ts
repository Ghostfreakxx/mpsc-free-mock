import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-pollen-tube-diagrams-lecture.json';
import timings from '../../data/neet-pollen-tube-diagrams-timings.json';
export const pollenTubeDiagramsLesson:PlayerLecture={
 id:'neet-pollen-tube-diagrams',subject:'Biology',unit:6,number:'B30',title:data.title,
 description:'Recorded Reproduction diagram workshop: pollen walls and cells, germination, pistil pathway, synergid entry and double-fertilisation destinations.',
 scope:data.scope,progressKey:'neet.pollen-tube-diagrams.lecture.v1',
 audio:'/lectures/neet-pollen-tube-diagrams/narration-marin.mp3',subtitles:'/lectures/neet-pollen-tube-diagrams/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
