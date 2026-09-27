import { getReviewedQuestions } from "./reviewed-content";
export type CuetPgQuestion = {
  subject: string;
  category: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  wrongExplanations?: Record<string, string>;
  hint?: string;
};

export const cuetPgQuestions = getReviewedQuestions("cuet-pg");
