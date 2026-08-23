import { Quiz } from "@/constants/types";

const quizBloco5: Quiz = {
  id: "ivm-bloco-05",
  title: "Liquidação e Pagamento",
  subtitle:
    "Imposto sobre os Veículos Motorizados — Lei n.º 24/20, de 13 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 8.º e 9.º",

  questions: [
    {
      id: "5.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o art. 8.º, em que período do ano é liquidado e pago o IVM?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "De Janeiro a Junho de cada ano",
        },
        {
          id: "b",
          label: "b)",
          text: "De Julho a Dezembro de cada ano",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas no mês de Janeiro",
        },
        {
          id: "d",
          label: "d)",
          text: "A qualquer momento do ano, à escolha do contribuinte",
        },
      ],
      answer: "a",
      answerLabel:
        "a) De Janeiro a Junho de cada ano",
      explanation:
        "Art. 8.º: a liquidação e o pagamento do IVM são realizados entre Janeiro e Junho de cada ano.",
    },

    {
      id: "5.2",
      number: 2,
      type: "multiple_choice",
      question:
        "O IVM pago entre Janeiro e Junho reporta-se a que exercício, segundo o art. 8.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Ao exercício seguinte",
        },
        {
          id: "b",
          label: "b)",
          text: "Ao exercício em curso",
        },
        {
          id: "c",
          label: "c)",
          text: "Ao exercício anterior",
        },
        {
          id: "d",
          label: "d)",
          text: "Aos últimos três exercícios",
        },
      ],
      answer: "c",
      answerLabel: "c) Ao exercício anterior",
      explanation:
        "Art. 8.º: o pagamento efectuado entre Janeiro e Junho reporta-se ao exercício anterior.",
    },

    {
      id: "5.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo o art. 9.º, n.º 1, como é feita a prova do pagamento do imposto?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Mediante recibo bancário simples",
        },
        {
          id: "b",
          label: "b)",
          text: "Mediante exibição de selo aprovado por diploma próprio",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas por declaração escrita do proprietário",
        },
        {
          id: "d",
          label: "d)",
          text: "Não é exigida qualquer prova",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Mediante exibição de selo aprovado por diploma próprio",
      explanation:
        "Art. 9.º, n.º 1: a prova do pagamento é feita através da exibição de selo aprovado por diploma próprio.",
    },

    {
      id: "5.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo o art. 9.º, n.º 2, como é efectuado o pagamento do imposto no caso de primeira transmissão do veículo?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "De uma só vez, obrigatoriamente",
        },
        {
          id: "b",
          label: "b)",
          text: "Há lugar ao pagamento por duodécimos",
        },
        {
          id: "c",
          label: "c)",
          text: "Fica isento no ano da transmissão",
        },
        {
          id: "d",
          label: "d)",
          text: "É pago em dobro no ano seguinte",
        },
      ],
      answer: "b",
      answerLabel: "b) Há lugar ao pagamento por duodécimos",
      explanation:
        "Art. 9.º, n.º 2: na primeira transmissão do veículo há lugar ao pagamento fraccionado por duodécimos.",
    },
  ],
};

export default quizBloco5;