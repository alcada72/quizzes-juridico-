import type { Quiz } from "../../types";

const quizBloco7: Quiz = {
  id: "cgt-bloco-07",
  title: "Cobrança, Pagamento e Execução Fiscal",
  subtitle: "Código Geral Tributário — Lei n.º 21/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 135.º a 143.º",

  questions: [
    {
      id: "7.1",
      number: 1,
      type: "true_false",
      question:
        "A cobrança das obrigações tributárias pode ser voluntária ou coerciva, sendo esta última efectuada através do processo de execução fiscal.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 135.º.",
    },

    {
      id: "7.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o Art. 136.º/6, dentro de que limites uma dívida tributária pode ser paga em prestações mensais?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Mínimo de 3 e máximo de 12 prestações",
        },
        {
          id: "b",
          label: "b)",
          text: "Mínimo de 6 e máximo de 18 prestações",
        },
        {
          id: "c",
          label: "c)",
          text: "Mínimo de 6 e máximo de 24 prestações",
        },
        {
          id: "d",
          label: "d)",
          text: "Mínimo de 12 e máximo de 24 prestações",
        },
      ],
      answer: "b",
      answerLabel: "b) Mínimo de 6 e máximo de 18 prestações",
      explanation:
        "A dívida tributária pode ser paga em um mínimo de 6 e um máximo de 18 prestações mensais.",
    },

    {
      id: "7.3",
      number: 3,
      type: "multiple_choice",
      question:
        "O valor mínimo de cada prestação, segundo o Art. 136.º/6, não pode ser inferior a:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 5.000,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 10.000,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 15.000,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 20.000,00",
        },
      ],
      answer: "b",
      answerLabel: "b) Kz 10.000,00",
      explanation: "Art. 136.º/6.",
    },

    {
      id: "7.4",
      number: 4,
      type: "true_false",
      question:
        "A falta de pagamento de prestações por período superior a 3 meses consecutivos, ou 6 meses alternados, implica o vencimento imediato de todas as restantes prestações.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 136.º/8.",
    },

    {
      id: "7.5",
      number: 5,
      type: "multiple_choice",
      question:
        "O que constitui título de cobrança das dívidas tributárias?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "A declaração anual de rendimentos",
        },
        {
          id: "b",
          label: "b)",
          text: "O documento de arrecadação das receitas",
        },
        {
          id: "c",
          label: "c)",
          text: "O contrato celebrado entre o contribuinte e a Administração Tributária",
        },
        {
          id: "d",
          label: "d)",
          text: "O relatório da inspecção tributária",
        },
      ],
      answer: "b",
      answerLabel: "b) O documento de arrecadação das receitas",
      explanation:
        "O documento de arrecadação das receitas constitui o título de cobrança das dívidas tributárias.",
    },

    {
      id: "7.6",
      number: 6,
      type: "true_false",
      question:
        "O processo de execução fiscal tem natureza judicial, cabendo à Repartição Fiscal proceder, sob controlo do juiz, às diligências não reservadas ao Tribunal.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 140.º.",
    },

    {
      id: "7.7",
      number: 7,
      type: "multiple_choice",
      question:
        "Qual é a finalidade da inspecção tributária, segundo o Art. 141.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas aplicar multas aos contribuintes que não paguem os seus impostos.",
        },
        {
          id: "b",
          label: "b)",
          text: "Apenas cobrar coercivamente as dívidas tributárias vencidas.",
        },
        {
          id: "c",
          label: "c)",
          text: "Averiguar a situação tributária dos contribuintes, substitutos, responsáveis solidários e subsidiários, bem como o cumprimento dos deveres acessórios.",
        },
        {
          id: "d",
          label: "d)",
          text: "Determinar exclusivamente o valor dos bens penhoráveis do contribuinte.",
        },
      ],
      answer: "c",
      answerLabel:
        "c) Averiguar a situação tributária dos contribuintes, substitutos, responsáveis solidários e subsidiários, bem como o cumprimento dos deveres acessórios.",
      explanation:
        "A inspecção tributária visa averiguar a situação tributária dos contribuintes, substitutos e responsáveis solidários e subsidiários, bem como verificar o cumprimento dos deveres acessórios.",
    },
  ],
};

export default quizBloco7;