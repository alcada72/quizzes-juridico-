import type { Quiz } from "@/constants/types";

const quizBloco7: Quiz = {
  id: "ii-bloco-07",
  title: "Enquadramento Geral das Leis",
  subtitle:
    "Imposto Industrial — Lei n.º 19/14, de 22 de Outubro, e Lei n.º 26/20, de 20 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Lei n.º 19/14 e Lei n.º 26/20",

  questions: [
    {
      id: "7.1",
      number: 1,
      type: "multiple_choice",
      question:
        "A Lei n.º 19/14 que aprova o Código do Imposto Industrial foi publicada em:",
      options: [
        { id: "a", label: "a)", text: "22 de Outubro de 2014" },
        { id: "b", label: "b)", text: "20 de Julho de 2014" },
        { id: "c", label: "c)", text: "1 de Janeiro de 2015" },
        { id: "d", label: "d)", text: "26 de Junho de 2014" },
      ],
      answer: "a",
      answerLabel: "a) 22 de Outubro de 2014",
      explanation:
        "A Lei n.º 19/14, que aprova o Código do Imposto Industrial, foi publicada em 22 de Outubro de 2014.",
    },

    {
      id: "7.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o artigo 7.º da Lei n.º 19/14, o Código do Imposto Industrial entrou em vigor em:",
      options: [
        { id: "a", label: "a)", text: "22 de Outubro de 2014" },
        { id: "b", label: "b)", text: "1 de Janeiro de 2015" },
        { id: "c", label: "c)", text: "26 de Junho de 2014" },
        { id: "d", label: "d)", text: "7 de Outubro de 2014" },
      ],
      answer: "b",
      answerLabel: "b) 1 de Janeiro de 2015",
      explanation:
        "O Código do Imposto Industrial entrou em vigor em 1 de Janeiro de 2015.",
    },

    {
      id: "7.3",
      number: 3,
      type: "multiple_choice",
      question:
        "A Lei n.º 26/20, que altera o Código do Imposto Industrial, foi publicada no Diário da República em:",
      options: [
        { id: "a", label: "a)", text: "20 de Julho de 2020" },
        { id: "b", label: "b)", text: "30 de Junho de 2020" },
        { id: "c", label: "c)", text: "20 de Maio de 2020" },
        { id: "d", label: "d)", text: "1 de Janeiro de 2020" },
      ],
      answer: "a",
      answerLabel: "a) 20 de Julho de 2020",
      explanation:
        "A Lei n.º 26/20 foi publicada em 20 de Julho de 2020.",
    },

    {
      id: "7.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo o artigo 4.º da Lei n.º 26/20, esta lei entra em vigor:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Na data da sua publicação",
        },
        {
          id: "b",
          label: "b)",
          text: "30 dias após a sua publicação",
        },
        {
          id: "c",
          label: "c)",
          text: "90 dias após a sua publicação",
        },
        {
          id: "d",
          label: "d)",
          text: "No início do exercício fiscal seguinte",
        },
      ],
      answer: "b",
      answerLabel: "b) 30 dias após a sua publicação",
      explanation:
        "Nos termos do artigo 4.º da Lei n.º 26/20, a lei entra em vigor 30 dias após a sua publicação.",
    },

    {
      id: "7.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Além de alterar vários artigos do Código, a Lei n.º 26/20 revoga expressamente:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas o artigo 64.º",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Os artigos 8.º, 9.º e 10.º do Código, e a Lei n.º 4/19, de 18 de Abril",
        },
        {
          id: "c",
          label: "c)",
          text: "Toda a Lei n.º 19/14",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas os regimes de isenção anteriores a 1990",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Os artigos 8.º, 9.º e 10.º do Código, e a Lei n.º 4/19, de 18 de Abril",
      explanation:
        "A Lei n.º 26/20 revoga expressamente os artigos 8.º, 9.º e 10.º do Código do Imposto Industrial e a Lei n.º 4/19, de 18 de Abril.",
    },
  ],
};

export default quizBloco7;