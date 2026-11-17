import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-anther-ovule-diagrams-lecture.json';
import timings from '../../data/neet-anther-ovule-diagrams-timings.json';
export const antherOvuleDiagramsLesson:PlayerLecture={
 id:'neet-anther-ovule-diagrams',subject:'Biology',unit:6,number:'B29',title:data.title,
 description:'Recorded Reproduction diagram workshop: young anther, wall layers, ovule labels and typical embryo-sac organisation.',
 scope:data.scope,progressKey:'neet.anther-ovule-diagrams.lecture.v1',
 audio:'/lectures/neet-anther-ovule-diagrams/narration-marin.mp3',subtitles:'/lectures/neet-anther-ovule-diagrams/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
