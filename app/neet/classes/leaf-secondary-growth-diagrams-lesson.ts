import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-leaf-secondary-growth-diagrams-lecture.json';
import timings from '../../data/neet-leaf-secondary-growth-diagrams-timings.json';
export const leafSecondaryGrowthDiagramsLesson:PlayerLecture={
 id:'neet-leaf-secondary-growth-diagrams',subject:'Biology',unit:2,number:'B27',title:data.title,
 description:'Recorded leaf anatomy workshop with secondary-growth extension: leaf tissues, bulliform cells, cambium, periderm and wood increments.',
 scope:data.scope,progressKey:'neet.leaf-secondary-growth-diagrams.lecture.v1',
 audio:'/lectures/neet-leaf-secondary-growth-diagrams/narration-marin.mp3',subtitles:'/lectures/neet-leaf-secondary-growth-diagrams/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
