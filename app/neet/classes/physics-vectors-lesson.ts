import type {PlayerLecture} from '../../jee/classes/lecture-player';
import data from '../../data/neet-physics-vectors-lecture.json';
import timings from '../../data/neet-physics-vectors-timings.json';
export const physicsVectorsLesson:PlayerLecture={id:'neet-physics-vectors',subject:'Physics',unit:2,number:'NP01',title:data.title,description:data.scope,scope:data.scope,progressKey:'neet.physics-vectors.lecture.v1',audio:'/lectures/neet-physics-vectors/narration-marin.mp3',subtitles:'/lectures/neet-physics-vectors/english.vtt',timings,segments:data.chapters.map(c=>({title:c.title,formula:c.formula,steps:c.points,english:c.script})),quiz:data.quiz,sources:data.sources};
