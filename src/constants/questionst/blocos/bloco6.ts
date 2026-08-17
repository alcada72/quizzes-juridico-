import type { Quiz } from "../types";

const quizBloco6: Quiz = {
  id: "cgt-bloco-06",
  title: "Matéria Colectável, Liquidação, Reclamação e Recursos",
  subtitle: "Código Geral Tributário — Lei n.º 21/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 103.º a 134.º",

  questions: [
    {
      id: "6.1",
      number: 1,
      type: "true_false",
      question:
        "Nos impostos de autoliquidação, cabe ao contribuinte o apuramento da matéria colectável.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 104.º/1.",
    },

    {
      id: "6.2",
      number: 2,
      type: "open",
      question:
        "Em que casos é permitido o apuramento indirecto da matéria colectável, segundo o Art. 106.º?",
      answer:
        "Fora dos casos em que a matéria colectável deva ser colectivamente determinada, ou com fundamento em falta, insuficiência ou ausência de elementos comprovativos dos dados declarados pelo contribuinte.",
      answerLabel: "Resposta esperada",
      explanation:
        "O apuramento indirecto é permitido nos casos previstos no Art. 106.º, designadamente quando existam falta, insuficiência ou ausência de elementos comprovativos dos dados declarados pelo contribuinte.",
    },

    {
      id: "6.3",
      number: 3,
      type: "multiple_choice",
      question:
        "A reclamação do apuramento da matéria colectável deve ser apresentada dentro de quantos dias posteriores à notificação?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "10 dias",
        },
        {
          id: "b",
          label: "b)",
          text: "15 dias",
        },
        {
          id: "c",
          label: "c)",
          text: "30 dias",
        },
        {
          id: "d",
          label: "d)",
          text: "45 dias",
        },
      ],
      answer: "b",
      answerLabel: "b) 15 dias",
      explanation: "Art. 109.º/1.",
    },

    {
      id: "6.4",
      number: 4,
      type: "true_false",
      question:
        "A reclamação da matéria colectável tem efeito suspensivo do direito de liquidação.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 109.º/2.",
    },

    {
      id: "6.5",
      number: 5,
      type: "open",
      question:
        "A partir de que montante a decisão de deferimento, favorável ao contribuinte, de uma reclamação carece de confirmação superior obrigatória, sob pena de nulidade?",
      answer: "Kz 1.000.000,00.",
      answerLabel: "Kz 1.000.000,00",
      explanation: "Art. 117.º.",
    },

    {
      id: "6.6",
      number: 6,
      type: "multiple_choice",
      question:
        "O prazo de reclamação administrativa contra um acto tributário é de:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "10 dias",
        },
        {
          id: "b",
          label: "b)",
          text: "15 dias",
        },
        {
          id: "c",
          label: "c)",
          text: "30 dias",
        },
        {
          id: "d",
          label: "d)",
          text: "90 dias",
        },
      ],
      answer: "b",
      answerLabel: "b) 15 dias",
      explanation: "Art. 129.º/1.",
    },

    {
      id: "6.7",
      number: 7,
      type: "open",
      question:
        "Em quanto tempo deve ser decidida a reclamação administrativa?",
      answer: "45 dias.",
      answerLabel: "45 dias",
      explanation: "Art. 129.º/3.",
    },

    {
      id: "6.8",
      number: 8,
      type: "true_false",
      question:
        "O recurso hierárquico tem natureza facultativa e efeito meramente devolutivo.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 134.º.",
    },

    {
      id: "6.9",
      number: 9,
      type: "open",
      question:
        "Em quantos dias deve ser interposto o recurso hierárquico e em quanto tempo deve ser decidido?",
      answer:
        "O recurso hierárquico deve ser interposto no prazo de 15 dias e decidido no prazo de 45 dias.",
      answerLabel: "15 dias para interpor e 45 dias para decidir",
      explanation:
        "O prazo de interposição é de 15 dias e o prazo para decisão é de 45 dias, nos termos do Art. 133.º.",
    },

    {
      id: "6.10",
      number: 10,
      type: "true_false",
      question:
        "A revisão oficiosa da liquidação a favor do contribuinte pode ocorrer a todo o tempo se ainda estiver pendente processo de execução fiscal.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 125.º/1.",
    },
  ],
};

export default quizBloco6;
