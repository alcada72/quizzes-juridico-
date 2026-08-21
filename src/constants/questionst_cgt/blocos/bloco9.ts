import type { Quiz } from "../types";

const quizBloco9: Quiz = {
  id: "cgt-bloco-09",
  title: "Parte Especial: Crimes Tributários",
  subtitle: "Código Geral Tributário — Lei n.º 21/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 172.º a 196.º",

  questions: [
    {
      id: "9.1",
      number: 1,
      type: "open",
      question:
        "Qual a moldura penal base para o crime de fraude fiscal (Art. 172.º)?",
      answer: "Prisão de 6 meses a 3 anos ou multa até 360 dias.",
      answerLabel: "Prisão de 6 meses a 3 anos ou multa até 360 dias",
      explanation:
        "A fraude fiscal é punível com pena de prisão de 6 meses a 3 anos ou multa até 360 dias.",
    },

    {
      id: "9.2",
      number: 2,
      type: "true_false",
      question:
        "A fraude fiscal só é punível criminalmente se a vantagem patrimonial ilegítima obtida for igual ou superior a Kz 1.500.000,00.",
      answer: false,
      answerLabel: "Falso",
      explanation:
        "O limiar de punibilidade criminal é uma vantagem igual ou superior a Kz 1.500.000,00. Segundo o material fornecido, valores inferiores não são puníveis criminalmente, nos termos do Art. 172.º/3.",
    },

    {
      id: "9.3",
      number: 3,
      type: "multiple_choice",
      question:
        "O crime de abuso de confiança fiscal (Art. 179.º) pressupõe apropriação de prestação tributária de valor superior a:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 100.000,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 500.000,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 1.000.000,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 5.000.000,00",
        },
      ],
      answer: "b",
      answerLabel: "b) Kz 500.000,00",
      explanation:
        "O valor indicado para o abuso de confiança fiscal é superior a Kz 500.000,00.",
    },

    {
      id: "9.4",
      number: 4,
      type: "open",
      question:
        "Qual a moldura penal para a violação de sigilo fiscal por um funcionário (Art. 180.º)?",
      answer: "Prisão de 2 a 5 anos, ou multa criminal correspondente.",
      answerLabel: "Prisão de 2 a 5 anos ou multa criminal correspondente",
      explanation:
        "A violação de sigilo fiscal por funcionário é punível com prisão de 2 a 5 anos ou multa criminal correspondente.",
    },

    {
      id: "9.5",
      number: 5,
      type: "true_false",
      question:
        "O crime de fraude fiscal aduaneira é punível com pena de prisão de 6 meses a 3 anos ou multa de 2 a 3 vezes o valor dos direitos e imposições aduaneiras devidos.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation:
        "Segundo o material fornecido, a afirmação está de acordo com a sanção indicada para a fraude fiscal aduaneira.",
    },

    {
      id: "9.6",
      number: 6,
      type: "open",
      question:
        "O que distingue o 'contrabando qualificado' (Art. 186.º) do contrabando simples?",
      answer:
        "O contrabando qualificado ocorre quando existem circunstâncias agravantes previstas na lei, como valor elevado superior a Kz 20.000.000,00, objectos de interesse histórico ou artístico, uso de armas ou violência, conivência de funcionário ou prática nocturna, entre outras.",
      answerLabel: "Resposta esperada",
      explanation:
        "A diferença está na existência de circunstâncias agravantes que tornam a conduta mais grave, nos termos do Art. 186.º.",
    },

    {
      id: "9.7",
      number: 7,
      type: "multiple_choice",
      question:
        "As associações criminosas em matéria tributária (Art. 193.º) são puníveis com pena de prisão de:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "6 meses a 2 anos",
        },
        {
          id: "b",
          label: "b)",
          text: "1 a 5 anos",
        },
        {
          id: "c",
          label: "c)",
          text: "2 a 8 anos",
        },
        {
          id: "d",
          label: "d)",
          text: "5 a 15 anos",
        },
      ],
      answer: "c",
      answerLabel: "c) 2 a 8 anos",
      explanation: "Art. 193.º.",
    },
  ],
};

export default quizBloco9;
