import { Questions_cgt } from "./questionst_cgt";
import { Questions_Ief } from "./questionst_ief";
import { Questions_Iia } from "./questionst_iia";
import { Questions_Ip } from "./questionst_ip";
import { Questions_Irt } from "./questionst_irt";
import { Questions_Ivm } from "./questionst_ivm";
import { Questions_Rjfde } from "./questionst_rjfde";

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

  Questions_Irt: {
    name: "Imposto sobre os Rendimentos do Trabalho",
    questions_quis: Questions_Irt,
  },

  Questions_Ivm: {
    name: "Imposto sobre os Veículos Motorizados",
    questions_quis: Questions_Ivm,
  },

  Questions_Ip: {
    name: "Imposto Predial",
    questions_quis: Questions_Ip,
  },
  Questions_Ief: {
    name: "Código das Execuções Fiscais",
    questions_quis: Questions_Ief,
  },
  Questions_Rjfde: {
    name: "Regime Jurídico das Facturas e Documentos Equivalentes",
    questions_quis: Questions_Rjfde,
  },
};

export type QuizMenuKey = keyof typeof Quiz_Menu;