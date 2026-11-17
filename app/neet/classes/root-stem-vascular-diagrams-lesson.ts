import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-root-stem-vascular-diagrams-lecture.json';
import timings from '../../data/neet-root-stem-vascular-diagrams-timings.json';
export const rootStemVascularDiagramsLesson:PlayerLecture={
 id:'neet-root-stem-vascular-diagrams',subject:'Biology',unit:2,number:'B26',title:data.title,
 description:'Recorded root, stem and vascular tissue workshop covering primary anatomy, bundle patterns and selected conducting cells.',
 scope:data.scope,progressKey:'neet.root-stem-vascular-diagrams.lecture.v1',
 audio:'/lectures/neet-root-stem-vascular-diagrams/narration-marin.mp3',subtitles:'/lectures/neet-root-stem-vascular-diagrams/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
