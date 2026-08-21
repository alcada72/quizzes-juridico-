import type { Quiz } from "../types";

const quizBloco8: Quiz = {
  id: "cgt-bloco-08",
  title: "Infracções Tributárias: Noção, Responsabilidade e Penas",
  subtitle: "Código Geral Tributário — Lei n.º 21/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 144.º a 171.º",

  questions: [
    {
      id: "8.1",
      number: 1,
      type: "open",
      question:
        "Distingue crime tributário de transgressão tributária quanto à punibilidade da negligência.",
      answer:
        "No crime tributário, só é punível a conduta praticada com dolo. Na transgressão tributária, a negligência é sempre punível, salvo disposição legal em contrário.",
      answerLabel: "Resposta esperada",
      explanation:
        "Nos termos do Art. 144.º/2 e 3, os crimes tributários exigem dolo, enquanto a negligência é punível nas transgressões tributárias, salvo disposição em contrário.",
    },

    {
      id: "8.2",
      number: 2,
      type: "true_false",
      question:
        "Nos crimes tributários só é punível o dolo; nas transgressões, a negligência é sempre punível, salvo disposição em contrário.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 144.º/2 e 3.",
    },

    {
      id: "8.3",
      number: 3,
      type: "multiple_choice",
      question:
        "O prazo de prescrição do procedimento para aplicação da pena é, em regra, de:",
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
          text: "10 anos",
        },
        {
          id: "d",
          label: "d)",
          text: "15 anos",
        },
      ],
      answer: "b",
      answerLabel: "b) 5 anos",
      explanation: "Art. 151.º/1.",
    },

    {
      id: "8.4",
      number: 4,
      type: "open",
      question:
        "Este prazo amplia-se para quantos anos quando a infracção constitui crime tributário?",
      answer: "10 anos.",
      answerLabel: "10 anos",
      explanation: "Art. 151.º/2.",
    },

    {
      id: "8.5",
      number: 5,
      type: "multiple_choice",
      question:
        "As multas prescrevem, após o trânsito em julgado ou decisão definitiva, no prazo de:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "5 anos",
        },
        {
          id: "b",
          label: "b)",
          text: "8 anos",
        },
        {
          id: "c",
          label: "c)",
          text: "10 anos",
        },
        {
          id: "d",
          label: "d)",
          text: "15 anos",
        },
      ],
      answer: "c",
      answerLabel: "c) 10 anos",
      explanation: "Art. 152.º.",
    },

    {
      id: "8.6",
      number: 6,
      type: "true_false",
      question:
        "A extinção da responsabilidade penal tributária exonera automaticamente o pagamento da prestação tributária em falta.",
      answer: false,
      answerLabel: "Falso",
      explanation:
        "A extinção da responsabilidade penal não exonera o pagamento da prestação tributária em falta, nos termos do Art. 153.º.",
    },

    {
      id: "8.7",
      number: 7,
      type: "open",
      question:
        "Segundo o Art. 155.º/4, qual a percentagem de multa aplicável pelo não pagamento de qualquer prestação ou totalidade do tributo dentro do prazo legal, e qual o seu valor mínimo?",
      answer: "35% do tributo em falta, com valor mínimo de Kz 5.000,00.",
      answerLabel: "35% do tributo em falta; mínimo de Kz 5.000,00",
      explanation:
        "A multa corresponde a 35% do tributo em falta, com um valor mínimo de Kz 5.000,00.",
    },

    {
      id: "8.8",
      number: 8,
      type: "multiple_choice",
      question:
        "O pagamento espontâneo da multa pelo infractor, antes de qualquer acção inspectiva, reduz-a para:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "10% do montante mínimo",
        },
        {
          id: "b",
          label: "b)",
          text: "20% do montante mínimo",
        },
        {
          id: "c",
          label: "c)",
          text: "30% do montante mínimo",
        },
        {
          id: "d",
          label: "d)",
          text: "50% do montante mínimo",
        },
      ],
      answer: "c",
      answerLabel: "c) 30% do montante mínimo",
      explanation: "Art. 165.º/1.",
    },

    {
      id: "8.9",
      number: 9,
      type: "open",
      question:
        "E se o pagamento ocorrer em resultado de uma acção inspectiva (Art. 166.º), qual a percentagem de redução?",
      answer: "20% do montante mínimo aplicável.",
      answerLabel: "20% do montante mínimo aplicável",
      explanation: "Art. 166.º/1.",
    },

    {
      id: "8.10",
      number: 10,
      type: "true_false",
      question:
        "A reincidência constitui factor de agravamento da pena nos crimes tributários e nas transgressões tributárias.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 163.º/1.",
    },
  ],
};

export default quizBloco8;
