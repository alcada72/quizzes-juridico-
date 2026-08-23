import { Quiz } from "@/constants/types";

const quizBloco2: Quiz = {
  id: "irt-bloco-02",
  title: "Isenções do IRT",
  subtitle: "Imposto sobre os Rendimentos do Trabalho — Lei n.º 18/14",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 2.º e 5.º",

  questions: [
    {
      id: "2.1",
      number: 6,
      type: "multiple_choice",
      question:
        "Segundo a redacção original do art. 2.º, até que limite o abono de família pago pela entidade empregadora não constitui matéria colectável?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "3% do ordenado base",
        },
        {
          id: "b",
          label: "b)",
          text: "5% do ordenado base mensal do trabalhador",
        },
        {
          id: "c",
          label: "c)",
          text: "10% do ordenado base",
        },
        {
          id: "d",
          label: "d)",
          text: "50% do ordenado base",
        },
      ],
      answer: "b",
      answerLabel: "b) 5% do ordenado base mensal do trabalhador",
      explanation:
        "Art. 2.º, n.º 1, alínea d): limite de 5% do ordenado base mensal.",
    },

    {
      id: "2.2",
      number: 7,
      type: "multiple_choice",
      question:
        "Até que limite os subsídios de renda de casa não constituíam matéria colectável, segundo a alínea f) do art. 2.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "30% do valor do contrato de arrendamento",
        },
        {
          id: "b",
          label: "b)",
          text: "50% do valor do contrato de arrendamento",
        },
        {
          id: "c",
          label: "c)",
          text: "70% do valor do contrato de arrendamento",
        },
        {
          id: "d",
          label: "d)",
          text: "100% do valor do contrato de arrendamento",
        },
      ],
      answer: "b",
      answerLabel: "b) 50% do valor do contrato de arrendamento",
      explanation:
        "Art. 2.º, n.º 1, alínea f): limite de 50%, excluídos os trabalhadores da função pública.",
    },

    {
      id: "2.3",
      number: 8,
      type: "multiple_choice",
      question:
        "Segundo a alínea m) do art. 2.º, até que limite as gratificações de férias e o subsídio de Natal não constituem matéria colectável?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "50% do salário base",
        },
        {
          id: "b",
          label: "b)",
          text: "70% do salário base",
        },
        {
          id: "c",
          label: "c)",
          text: "100% do salário base",
        },
        {
          id: "d",
          label: "d)",
          text: "150% do salário base",
        },
      ],
      answer: "c",
      answerLabel: "c) 100% do salário base",
      explanation:
        "Art. 2.º, n.º 1, alínea m): limite de 100% do salário base do trabalhador.",
    },

    {
      id: "2.4",
      number: 9,
      type: "multiple_choice",
      question:
        "Qual o limite mensal global (na redacção original) dos subsídios diários de alimentação e transporte a trabalhadores dependentes, segundo a alínea k)?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 15.000,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 30.000,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 50.000,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 100.000,00",
        },
      ],
      answer: "b",
      answerLabel: "b) Kz 30.000,00",
      explanation:
        "Art. 2.º, n.º 1, alínea k): limite de Kz 30.000,00 mensais.",
    },

    {
      id: "2.5",
      number: 10,
      type: "multiple_choice",
      question:
        "Segundo o art. 5.º, os rendimentos dos agentes de missões diplomáticas e consulares estrangeiras são isentos em que condição?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Em qualquer circunstância, sem condições",
        },
        {
          id: "b",
          label: "b)",
          text: "Havendo reciprocidade de tratamento",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas se o agente for angolano",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas durante o primeiro ano de missão",
        },
      ],
      answer: "b",
      answerLabel: "b) Havendo reciprocidade de tratamento",
      explanation:
        "Art. 5.º, n.º 1, alínea a): a isenção depende de reciprocidade de tratamento.",
    },
  ],
};

export default quizBloco2;
