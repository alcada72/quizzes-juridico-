import { Quiz } from "@/constants/types";

const quizBloco3: Quiz = {
  id: "ip-bloco-03",
  title: "Taxas",
  subtitle: "Código do Imposto Predial — Lei n.º 20/20, de 9 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 16.º, 17.º e 18.º",

  questions: [
    {
      id: "3.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Qual é a taxa do Imposto Predial aplicável à transmissão de bem imóvel, nos termos do Art.º 18.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "0,1%",
        },
        {
          id: "b",
          label: "b)",
          text: "0,6%",
        },
        {
          id: "c",
          label: "c)",
          text: "2%",
        },
        {
          id: "d",
          label: "d)",
          text: "25%",
        },
      ],
      answer: "c",
      answerLabel: "c) 2%",
      explanation:
        "Nos termos do Art.º 18.º, a taxa do Imposto Predial aplicável à transmissão de bem imóvel é de 2%.",
    },

    {
      id: "3.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 16.º, qual a taxa aplicável a prédios urbanos com valor patrimonial superior a Akz 6.000.000,00, sobre o valor excedente?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "0,1%",
        },
        {
          id: "b",
          label: "b)",
          text: "0,5%",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 5.000,00 fixo",
        },
        {
          id: "d",
          label: "d)",
          text: "0,6%",
        },
      ],
      answer: "b",
      answerLabel: "b) 0,5%",
      explanation:
        "Para prédios urbanos com valor patrimonial superior a Akz 6.000.000,00, aplica-se a taxa de 0,5% sobre o valor excedente.",
    },

    {
      id: "3.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Qual é a taxa do Imposto Predial aplicável ao terreno para construção, nos termos do Art.º 16.º, n.º 2?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "0,1%",
        },
        {
          id: "b",
          label: "b)",
          text: "0,6%",
        },
        {
          id: "c",
          label: "c)",
          text: "2%",
        },
        {
          id: "d",
          label: "d)",
          text: "25%",
        },
      ],
      answer: "b",
      answerLabel: "b) 0,6%",
      explanation:
        "Nos termos do Art.º 16.º, n.º 2, a taxa aplicável ao terreno para construção é de 0,6%.",
    },

    {
      id: "3.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Qual é a taxa do Imposto Predial aplicável aos prédios arrendados, sobre o rendimento colectável, segundo o Art.º 16.º, n.º 4?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "2%",
        },
        {
          id: "b",
          label: "b)",
          text: "0,6%",
        },
        {
          id: "c",
          label: "c)",
          text: "25%",
        },
        {
          id: "d",
          label: "d)",
          text: "0,1%",
        },
      ],
      answer: "c",
      answerLabel: "c) 25%",
      explanation:
        "Aos prédios arrendados aplica-se a taxa de 25% sobre o rendimento colectável.",
    },

    {
      id: "3.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 17.º, a que tributação adicional ficam sujeitos os prédios desocupados há mais de 1 ano?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Isenção total do imposto",
        },
        {
          id: "b",
          label: "b)",
          text: "Tributação adicional de 50% do imposto resultante dos n.os 1, 2 e 3 do artigo anterior",
        },
        {
          id: "c",
          label: "c)",
          text: "Duplicação automática do valor patrimonial",
        },
        {
          id: "d",
          label: "d)",
          text: "Multa fixa de Kz 10.000,00",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Tributação adicional de 50% do imposto resultante dos n.os 1, 2 e 3 do artigo anterior",
      explanation:
        "Os prédios desocupados há mais de um ano ficam sujeitos a uma tributação adicional de 50% do imposto resultante dos n.os 1, 2 e 3 do artigo anterior.",
    },
  ],
};

export default quizBloco3;
