import { Quiz } from "@/constants/types";

const quizBloco5: Quiz = {
  id: "irt-bloco-05",
  title: "Entrada em Vigor e Taxas Originais",
  subtitle: "Imposto sobre os Rendimentos do Trabalho — Lei n.º 18/14",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 6.º e 16.º e Tabela de Taxas de 2014",

  questions: [
    {
      id: "5.1",
      number: 21,
      type: "multiple_choice",
      question:
        "Segundo o art. 6.º da própria Lei n.º 18/14 (Entrada em vigor), quando começou a vigorar o novo Código do IRT?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "22 de Outubro de 2014",
        },
        {
          id: "b",
          label: "b)",
          text: "7 de Outubro de 2014",
        },
        {
          id: "c",
          label: "c)",
          text: "1 de Janeiro de 2015",
        },
        {
          id: "d",
          label: "d)",
          text: "26 de Junho de 2014",
        },
      ],
      answer: "c",
      answerLabel: "c) 1 de Janeiro de 2015",
      explanation:
        "Art. 6.º: entrada em vigor a partir de 1 de Janeiro de 2015.",
    },

    {
      id: "5.2",
      number: 22,
      type: "multiple_choice",
      question: "Quem promulgou a Lei n.º 18/14?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "João Manuel Gonçalves Lourenço",
        },
        {
          id: "b",
          label: "b)",
          text: "José Eduardo dos Santos",
        },
        {
          id: "c",
          label: "c)",
          text: "Fernando da Piedade Dias dos Santos",
        },
        {
          id: "d",
          label: "d)",
          text: "Agostinho Neto",
        },
      ],
      answer: "b",
      answerLabel: "b) José Eduardo dos Santos",
      explanation:
        "A Lei n.º 18/14 foi promulgada por José Eduardo dos Santos, então Presidente da República.",
    },

    {
      id: "5.3",
      number: 23,
      type: "multiple_choice",
      question:
        "Qual a taxa única aplicável à matéria colectável do Grupo B, segundo o art. 16.º, n.º 2 (redacção original)?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "6,5%",
        },
        {
          id: "b",
          label: "b)",
          text: "15%",
        },
        {
          id: "c",
          label: "c)",
          text: "25%",
        },
        {
          id: "d",
          label: "d)",
          text: "30%",
        },
      ],
      answer: "b",
      answerLabel: "b) 15%",
      explanation: "Art. 16.º, n.º 2 (original): taxa única de 15%.",
    },

    {
      id: "5.4",
      number: 24,
      type: "multiple_choice",
      question:
        "Qual a taxa aplicável à matéria colectável do Grupo C, segundo o art. 16.º, n.º 3 (redacção original)?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "15%",
        },
        {
          id: "b",
          label: "b)",
          text: "25%",
        },
        {
          id: "c",
          label: "c)",
          text: "30%",
        },
        {
          id: "d",
          label: "d)",
          text: "35%",
        },
      ],
      answer: "c",
      answerLabel: "c) 30%",
      explanation:
        "Art. 16.º, n.º 3 (original): taxa de 30% sobre os rendimentos do n.º 1 do art. 9.º.",
    },

    {
      id: "5.5",
      number: 25,
      type: "multiple_choice",
      question:
        "Na tabela de taxas original (anexa à Lei n.º 18/14) para o Grupo A, até que valor mensal o rendimento era isento?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 30.000,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 34.450,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 50.000,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 70.000,00",
        },
      ],
      answer: "b",
      answerLabel: "b) Kz 34.450,00",
      explanation: "Tabela de Taxas de 2014: isenção até Kz 34.450,00.",
    },
  ],
};

export default quizBloco5;
