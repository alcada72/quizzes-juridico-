import type { Quiz } from "@/constants/types";

const quizBloco6: Quiz = {
  id: "ii-bloco-06",
  title: "Penalidades e Garantias do Contribuinte",
  subtitle:
    "Imposto Industrial — Lei n.º 19/14, de 22 de Outubro, alterada pela Lei n.º 26/20, de 20 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 6.º, 73.º, 75.º e garantias tributárias",

  questions: [
    {
      id: "6.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo a Lei n.º 26/20 (artigo 75.º), a falta de apresentação de qualquer declaração fiscal sujeita o infractor, no caso dos contribuintes do regime geral, a uma multa de:",
      options: [
        { id: "a", label: "a)", text: "Kz: 200.000,00" },
        { id: "b", label: "b)", text: "Kz: 300.000,00" },
        { id: "c", label: "c)", text: "Kz: 600.000,00" },
        { id: "d", label: "d)", text: "Kz: 1.000.000,00" },
      ],
      answer: "c",
      answerLabel: "c) Kz: 600.000,00",
      explanation:
        "Para os contribuintes do regime geral, a falta de apresentação de declaração fiscal é sancionada com multa de Kz 600.000,00, segundo o material fornecido.",
    },

    {
      id: "6.2",
      number: 2,
      type: "multiple_choice",
      question:
        "O não pagamento do imposto dentro do prazo legal, segundo o artigo 73.º alterado pela Lei n.º 26/20, sujeita o infractor a uma multa igual a:",
      options: [
        { id: "a", label: "a)", text: "10% do imposto em falta" },
        { id: "b", label: "b)", text: "15% do imposto em falta" },
        { id: "c", label: "c)", text: "25% do imposto em falta" },
        { id: "d", label: "d)", text: "50% do imposto em falta" },
      ],
      answer: "c",
      answerLabel: "c) 25% do imposto em falta",
      explanation:
        "O não pagamento dentro do prazo legal é sancionado com multa correspondente a 25% do imposto em falta.",
    },

    {
      id: "6.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Quem resolve as dúvidas e omissões resultantes da interpretação e aplicação do Código do Imposto Industrial, segundo o artigo 6.º da Lei n.º 19/14?",
      options: [
        { id: "a", label: "a)", text: "O Tribunal Constitucional" },
        { id: "b", label: "b)", text: "O Presidente da República" },
        { id: "c", label: "c)", text: "A Assembleia Nacional" },
        { id: "d", label: "d)", text: "A Direcção Nacional de Impostos" },
      ],
      answer: "d",
      answerLabel: "d) A Direcção Nacional de Impostos",
      explanation:
        "Segundo o material fornecido, compete à Direcção Nacional de Impostos resolver as dúvidas e omissões resultantes da interpretação e aplicação do Código.",
    },

    {
      id: "6.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Os sujeitos passivos de Imposto Industrial podem reclamar ou impugnar a respectiva liquidação com fundamento e nos termos estabelecidos:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas no próprio Código do Imposto Industrial",
        },
        {
          id: "b",
          label: "b)",
          text: "No Código Geral Tributário e no Código do Processo Tributário",
        },
        {
          id: "c",
          label: "c)",
          text: "No Código Civil",
        },
        {
          id: "d",
          label: "d)",
          text: "Na Constituição, exclusivamente",
        },
      ],
      answer: "b",
      answerLabel:
        "b) No Código Geral Tributário e no Código do Processo Tributário",
      explanation:
        "As reclamações e impugnações seguem os fundamentos e procedimentos estabelecidos na legislação tributária processual aplicável, designadamente no Código Geral Tributário e no Código do Processo Tributário.",
    },
  ],
};

export default quizBloco6;