import { getReviewedQuestions } from "./reviewed-content";
export type JeeQuestion = {
  subject: string;
  category: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  wrongExplanations?: Record<string, string>;
  hint?: string;
};

export const jeeQuestions = getReviewedQuestions("jee");
