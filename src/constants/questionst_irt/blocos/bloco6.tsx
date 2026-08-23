import { Quiz } from "@/constants/types";

const quizBloco6: Quiz = {
  id: "irt-bloco-06",
  title: "Lei n.º 28/20 — Contexto e Reforma",
  subtitle:
    "Imposto sobre os Rendimentos do Trabalho — Lei n.º 18/14 e Lei n.º 28/20",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Lei n.º 18/14 e Lei n.º 28/20",

  questions: [
    {
      id: "6.1",
      number: 26,
      type: "multiple_choice",
      question:
        "Qual a taxa marginal mais alta da tabela de taxas original de 2014, aplicável ao excesso acima de Kz 230.000,00?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "15%",
        },
        {
          id: "b",
          label: "b)",
          text: "17%",
        },
        {
          id: "c",
          label: "c)",
          text: "20%",
        },
        {
          id: "d",
          label: "d)",
          text: "25%",
        },
      ],
      answer: "b",
      answerLabel: "b) 17%",
      explanation:
        "Tabela de Taxas de 2014: taxa de 17% sobre o excesso de Kz 230.000,00.",
    },

    {
      id: "6.2",
      number: 27,
      type: "multiple_choice",
      question:
        "Segundo o preâmbulo da Lei n.º 28/20, qual era um dos principais objectivos da reforma?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Aumentar o número de grupos de tributação de 3 para 5",
        },
        {
          id: "b",
          label: "b)",
          text: "Eliminar o sistema de tributação cedular, unificando e simplificando a tributação do rendimento das pessoas singulares",
        },
        {
          id: "c",
          label: "c)",
          text: "Extinguir totalmente o IRT",
        },
        {
          id: "d",
          label: "d)",
          text: "Transferir a cobrança do imposto para os municípios",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Eliminar o sistema de tributação cedular, unificando e simplificando a tributação do rendimento das pessoas singulares",
      explanation:
        "Preâmbulo da Lei n.º 28/20: unificação e simplificação, eliminando o modelo cedular.",
    },

    {
      id: "6.3",
      number: 28,
      type: "multiple_choice",
      question:
        "Que leis foram expressamente revogadas pelo art. 4.º da Lei n.º 28/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Lei n.º 10/99 e Lei n.º 18/14",
        },
        {
          id: "b",
          label: "b)",
          text: "Lei n.º 9/19, de 24 de Abril, e Lei n.º 28/19, de 25 de Setembro",
        },
        {
          id: "c",
          label: "c)",
          text: "Lei n.º 7/97 e Lei n.º 5/99",
        },
        {
          id: "d",
          label: "d)",
          text: "Decreto Executivo n.º 80/09",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Lei n.º 9/19, de 24 de Abril, e Lei n.º 28/19, de 25 de Setembro",
      explanation:
        "Art. 4.º da Lei n.º 28/20: revoga as Leis n.º 9/19 e n.º 28/19, que também alteravam o Código do IRT.",
    },

    {
      id: "6.4",
      number: 29,
      type: "multiple_choice",
      question: "Quando entrou em vigor a Lei n.º 28/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Na data da sua publicação",
        },
        {
          id: "b",
          label: "b)",
          text: "15 dias após a publicação",
        },
        {
          id: "c",
          label: "c)",
          text: "30 dias após a sua publicação",
        },
        {
          id: "d",
          label: "d)",
          text: "90 dias após a sua publicação",
        },
      ],
      answer: "c",
      answerLabel: "c) 30 dias após a sua publicação",
      explanation:
        "Art. 6.º da Lei n.º 28/20: entrada em vigor 30 dias após a publicação (22 de Julho de 2020).",
    },

    {
      id: "6.5",
      number: 30,
      type: "multiple_choice",
      question: "Quem promulgou a Lei n.º 28/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "José Eduardo dos Santos",
        },
        {
          id: "b",
          label: "b)",
          text: "Fernando da Piedade Dias dos Santos",
        },
        {
          id: "c",
          label: "c)",
          text: "João Manuel Gonçalves Lourenço",
        },
        {
          id: "d",
          label: "d)",
          text: "Agostinho Neto",
        },
      ],
      answer: "c",
      answerLabel: "c) João Manuel Gonçalves Lourenço",
      explanation:
        "A Lei n.º 28/20 foi promulgada pelo Presidente João Manuel Gonçalves Lourenço.",
    },
  ],
};

export default quizBloco6;
