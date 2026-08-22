import { Questions_cgt } from "./questionst_cgt";
import { Questions_Iia } from "./questionst_iia";

import type { Quiz } from "./types";

type QuestionsQuiz = Record<string, Quiz>;

type Menu = Record<
  string,
  {
    name: string;
    questions_quis: QuestionsQuiz;
  }
>;

export const Quiz_Menu: Menu = {
  Questions_cgt: {
    name: "Código Geral Tributário",
    questions_quis: Questions_cgt,
  },

  Questions_Iia: {
    name: "Imposto Industrial em Angola",
    questions_quis: Questions_Iia,
  },
};

export type QuizMenuKey = keyof typeof Quiz_Menu;