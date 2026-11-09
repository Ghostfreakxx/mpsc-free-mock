import ExamSimulator from '../../exam-simulator/exam-simulator';
import { QuestionBankPreload } from '../../lib/question-bank-preload';
import blueprint from '../../data/neet-mock-blueprint.json';

export const metadata = {
  title: 'NEET full-syllabus timed mock | 180 questions',
  description: 'A 180-minute mock with Foundation and Challenge mix options spanning all 50 mapped NEET units, with 45 Physics, 45 Chemistry and 90 Biology questions, saved progress and worked review.',
};

export default function NeetMock() {
  return <><QuestionBankPreload names={['neet-full-mock-v10']} /><ExamSimulator neetFullMock poolSizes={{ neet: blueprint.reduce((n, u) => n + u.count, 250), jee: 0, mpsc: 0, 'cuet-pg': 0 }} /></>;
}
