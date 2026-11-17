import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-stomata-guard-cell-diagrams-lecture.json';
import timings from '../../data/neet-stomata-guard-cell-diagrams-timings.json';
export const stomataGuardCellDiagramsLesson:PlayerLecture={
 id:'neet-stomata-guard-cell-diagrams',subject:'Biology',unit:2,number:'B28',title:data.title,
 description:'Recorded stomatal diagram workshop: labels, wall properties, grass-type cells, turgor states and gas-exchange pathways.',
 scope:data.scope,progressKey:'neet.stomata-guard-cell-diagrams.lecture.v1',
 audio:'/lectures/neet-stomata-guard-cell-diagrams/narration-marin.mp3',subtitles:'/lectures/neet-stomata-guard-cell-diagrams/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
