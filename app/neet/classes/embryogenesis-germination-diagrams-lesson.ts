import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-embryogenesis-germination-diagrams-lecture.json';
import timings from '../../data/neet-embryogenesis-germination-diagrams-timings.json';
export const embryogenesisGerminationDiagramsLesson:PlayerLecture={
 id:'neet-embryogenesis-germination-diagrams',subject:'Biology',unit:6,number:'B32',title:data.title,
 description:'Recorded embryogenesis and germination workshop: embryo stages, imbibition, radicle emergence and epigeal/hypogeal comparisons.',
 scope:data.scope,progressKey:'neet.embryogenesis-germination-diagrams.lecture.v1',
 audio:'/lectures/neet-embryogenesis-germination-diagrams/narration-marin.mp3',subtitles:'/lectures/neet-embryogenesis-germination-diagrams/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
