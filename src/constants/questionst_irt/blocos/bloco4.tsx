import { Quiz } from "@/constants/types";

const quizBloco4: Quiz = {
  id: "irt-bloco-04",
  title: "Obrigações, Penalidades e Disposições Finais",
  subtitle: "Imposto sobre os Rendimentos do Trabalho — Lei n.º 18/14",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 12.º, 22.º, 28.º, 34.º e Lei n.º 18/14",

  questions: [
    {
      id: "4.1",
      number: 16,
      type: "multiple_choice",
      question:
        "Segundo o art. 12.º, em que mês devem as entidades responsáveis entregar a declaração anual Modelo 2, relativa ao exercício anterior?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Janeiro",
        },
        {
          id: "b",
          label: "b)",
          text: "Fevereiro",
        },
        {
          id: "c",
          label: "c)",
          text: "Março",
        },
        {
          id: "d",
          label: "d)",
          text: "Abril",
        },
      ],
      answer: "b",
      answerLabel: "b) Fevereiro",
      explanation:
        "Art. 12.º, n.º 1: declaração anual Modelo 2 a entregar no mês de Fevereiro.",
    },

    {
      id: "4.2",
      number: 17,
      type: "multiple_choice",
      question:
        "Segundo o art. 22.º, por quanto tempo devem os sujeitos passivos conservar a documentação contabilística relevante?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "3 anos",
        },
        {
          id: "b",
          label: "b)",
          text: "5 anos",
        },
        {
          id: "c",
          label: "c)",
          text: "7 anos",
        },
        {
          id: "d",
          label: "d)",
          text: "10 anos",
        },
      ],
      answer: "b",
      answerLabel: "b) 5 anos",
      explanation: "Art. 22.º, n.º 1: prazo de conservação de 5 anos.",
    },

    {
      id: "4.3",
      number: 18,
      type: "multiple_choice",
      question:
        "Segundo o art. 28.º, qual o valor mínimo da multa por atraso superior a 30 dias na escrituração e declaração dos contribuintes dos Grupos B e C?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 10.000,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 50.000,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 100.000,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 300.000,00",
        },
      ],
      answer: "b",
      answerLabel: "b) Kz 50.000,00",
      explanation: "Art. 28.º, n.º 1: multa mínima de Kz 50.000,00.",
    },

    {
      id: "4.4",
      number: 19,
      type: "multiple_choice",
      question:
        "Segundo o art. 34.º, quando são as penas de multa reduzidas a metade?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Quando o contribuinte tiver mais de 60 anos",
        },
        {
          id: "b",
          label: "b)",
          text: "Quando o cumprimento da obrigação fiscal se efectuar voluntariamente dentro dos 30 dias subsequentes",
        },
        {
          id: "c",
          label: "c)",
          text: "Nunca são reduzidas",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas por decisão judicial",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Quando o cumprimento da obrigação fiscal se efectuar voluntariamente dentro dos 30 dias subsequentes",
      explanation:
        "Art. 34.º: redução a metade em caso de cumprimento voluntário dentro do prazo de 30 dias.",
    },

    {
      id: "4.5",
      number: 20,
      type: "multiple_choice",
      question: "Que diploma foi revogado pelo art. 4.º da Lei n.º 18/14?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "O Código do Imposto Industrial",
        },
        {
          id: "b",
          label: "b)",
          text: "O Código do Imposto sobre os Rendimentos do Trabalho aprovado pela Lei n.º 10/99, de 29 de Outubro",
        },
        {
          id: "c",
          label: "c)",
          text: "A Lei Geral do Trabalho",
        },
        {
          id: "d",
          label: "d)",
          text: "O Código Geral Tributário",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O Código do Imposto sobre os Rendimentos do Trabalho aprovado pela Lei n.º 10/99, de 29 de Outubro",
      explanation:
        "Art. 4.º: revogação da Lei n.º 10/99 e do Decreto Executivo n.º 80/09.",
    },
  ],
};

export default quizBloco4;
