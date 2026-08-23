import { Quiz } from "@/constants/types";

/**
 * ═══════════════════════════════════════════════════════════════
 * BLOCO 1 — DISPOSIÇÕES GERAIS
 * ═══════════════════════════════════════════════════════════════
 */

const quizBloco1: Quiz = {
  id: "ivm-bloco-01",
  title: "Disposições Gerais",
  subtitle:
    "Imposto sobre os Veículos Motorizados — Lei n.º 24/20, de 13 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 1.º e 2.º",

  questions: [
    {
      id: "1.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o art. 1.º da Lei n.º 24/20, a que veículos se aplica o Imposto sobre os Veículos Motorizados (IVM)?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas aos veículos importados no próprio ano",
        },
        {
          id: "b",
          label: "b)",
          text: "Aos veículos motorizados registados na República de Angola",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas aos veículos pertencentes a empresas",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas aos veículos com mais de 10 anos de uso",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Aos veículos motorizados registados na República de Angola",
      explanation:
        "Art. 1.º: a Lei aprova o IVM, aplicável aos veículos motorizados registados na República de Angola.",
    },

    {
      id: "1.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o art. 2.º, n.º 1, o que se consideram \"veículos motorizados\" para efeitos da Lei?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas veículos com motor a combustão interna",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Todos os veículos de tracção mecânica ou eléctrica, destinados a transitar pelos seus próprios meios",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas veículos com mais de quatro rodas",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas veículos registados há mais de um ano",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Todos os veículos de tracção mecânica ou eléctrica, destinados a transitar pelos seus próprios meios",
      explanation:
        "Art. 2.º, n.º 1: inclui tracção mecânica ou eléctrica, com capacidade de se deslocar por meios próprios.",
    },

    {
      id: "1.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo o art. 2.º, n.º 2, que legislação subsidiária se aplica para as definições não previstas na Lei?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "O Código Geral Tributário",
        },
        {
          id: "b",
          label: "b)",
          text:
            "O Código de Estrada e demais legislação, desde que não contrariem a presente Lei",
        },
        {
          id: "c",
          label: "c)",
          text: "O Código do Imposto Industrial",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas regulamentos internos da Polícia Nacional",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O Código de Estrada e demais legislação, desde que não contrariem a presente Lei",
      explanation:
        "Art. 2.º, n.º 2: aplicam-se as definições do Código de Estrada e legislação afim, quando compatíveis.",
    },
  ],
};

export default quizBloco1;