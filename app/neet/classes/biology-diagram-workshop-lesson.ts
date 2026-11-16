import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-biology-diagram-workshop-lecture.json';
import timings from '../../data/neet-biology-diagram-workshop-timings.json';
export const biologyDiagramWorkshopLesson:PlayerLecture={
 id:'neet-biology-diagram-workshop',subject:'Biology',unit:0,number:'B23',title:data.title,
 description:'Recorded cross-unit Biology diagram workshop covering labels, blood-flow routes, embryo-sac structures and energy transfers.',
 scope:data.scope,progressKey:'neet.biology-diagram-workshop.lecture.v1',
 audio:'/lectures/neet-biology-diagram-workshop/narration-marin.mp3',subtitles:'/lectures/neet-biology-diagram-workshop/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
