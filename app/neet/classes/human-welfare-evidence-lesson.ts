import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-human-welfare-evidence-lecture.json';
import timings from '../../data/neet-human-welfare-evidence-timings.json';
export const humanWelfareEvidenceLesson:PlayerLecture={
 id:'neet-human-welfare-evidence',subject:'Biology',unit:8,number:'B19',title:data.title,
 description:'Recorded Human Welfare workshop covering immunity, malaria stages, beneficial microbes, oxygen demand and data interpretation.',
 scope:data.scope,progressKey:'neet.human-welfare-evidence.lecture.v1',
 audio:'/lectures/neet-human-welfare-evidence/narration-marin.mp3',subtitles:'/lectures/neet-human-welfare-evidence/english.vtt',timings,
 segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources,
};
