import { Questions } from "..";

export type QuizBlocoTypes = keyof typeof Questions;

export type QuizQuestionType = "true_false" | "multiple_choice" | "open";

export type QuizOption = {
  id: string;
  label: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  number: number;
  type: QuizQuestionType;
  question: string;
  options?: QuizOption[];
  answer: boolean | string;
  answerLabel: string;
  explanation?: string;
};

export type Quiz = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendation: string;
  articles: string;
  questions: QuizQuestion[];
};
