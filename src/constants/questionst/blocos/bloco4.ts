import type { Quiz } from "../types";

const quizBloco5: Quiz = {
  id: "cgt-bloco-05",
  title: "Garantias, Procedimento Tributário e Notificações",
  subtitle: "Código Geral Tributário — Lei n.º 21/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 64.º a 100.º",

  questions: [
    {
      id: "5.1",
      number: 1,
      type: "true_false",
      question:
        "O património do devedor principal constitui a garantia geral dos créditos tributários.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 64.º/1.",
    },

    {
      id: "5.2",
      number: 2,
      type: "open",
      question:
        "O que é o 'penhor ou hipoteca legal' e quem tem competência para o constituir?",
      answer:
        "É uma garantia real que a Repartição Fiscal pode constituir sobre bens do devedor em caso de pagamento a prestações ou suspensão de execução fiscal, quando as garantias iniciais forem insuficientes. A competência é da Repartição Fiscal ou serviço local equiparado.",
      answerLabel: "Resposta esperada",
      explanation:
        "Trata-se de uma garantia real constituída sobre bens do devedor quando as garantias existentes sejam insuficientes, designadamente em situações de pagamento a prestações ou suspensão da execução fiscal. A competência pertence à Repartição Fiscal ou serviço local equiparado.",
    },

    {
      id: "5.3",
      number: 3,
      type: "multiple_choice",
      question:
        "O procedimento tributário deve, em regra, concluir-se no prazo de:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "30 dias",
        },
        {
          id: "b",
          label: "b)",
          text: "45 dias",
        },
        {
          id: "c",
          label: "c)",
          text: "90 dias",
        },
        {
          id: "d",
          label: "d)",
          text: "180 dias",
        },
      ],
      answer: "c",
      answerLabel: "c) 90 dias",
      explanation: "Art. 90.º/2.",
    },

    {
      id: "5.4",
      number: 4,
      type: "true_false",
      question:
        "Salvo disposição legal em contrário, os actos interlocutórios do procedimento tributário devem ser praticados no prazo de 10 dias.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 90.º/5.",
    },

    {
      id: "5.5",
      number: 5,
      type: "open",
      question:
        "Qual o prazo para o contribuinte exercer o direito de audição, após notificação regularmente efectuada?",
      answer: "15 dias.",
      answerLabel: "15 dias",
      explanation: "Art. 85.º/2.",
    },

    {
      id: "5.6",
      number: 6,
      type: "multiple_choice",
      question:
        "Quando o aviso de recepção da notificação não for levantado, a notificação presume-se feita:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "No próprio dia do registo",
        },
        {
          id: "b",
          label: "b)",
          text: "No dia seguinte ao registo",
        },
        {
          id: "c",
          label: "c)",
          text: "No terceiro dia útil posterior ao registo",
        },
        {
          id: "d",
          label: "d)",
          text: "Nunca se presume feita",
        },
      ],
      answer: "c",
      answerLabel: "c) No terceiro dia útil posterior ao registo",
      explanation: "Art. 93.º/4.",
    },

    {
      id: "5.7",
      number: 7,
      type: "true_false",
      question:
        "O dever de confidencialidade e sigilo dos funcionários da Administração Tributária cessa com a cessação das suas funções.",
      answer: false,
      answerLabel: "Falso",
      explanation:
        "O dever de confidencialidade e sigilo mantém-se mesmo após a cessação das funções, nos termos do Art. 86.º/2.",
    },

    {
      id: "5.8",
      number: 8,
      type: "open",
      question:
        "Qual o prazo geral de resposta da Administração Tributária a um pedido de informação vinculativa?",
      answer: "30 dias, prorrogáveis por igual período.",
      answerLabel: "30 dias, prorrogáveis por igual período",
      explanation: "Art. 102.º/5.",
    },
  ],
};

export default quizBloco5;
