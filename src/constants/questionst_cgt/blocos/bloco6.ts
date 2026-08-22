import type { Quiz } from "../../types";

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
      type: "multiple_choice",
      question:
        "Em que casos é permitido o apuramento indirecto da matéria colectável, segundo o Art. 106.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Sempre que o contribuinte solicite expressamente à Administração Tributária.",
        },
        {
          id: "b",
          label: "b)",
          text: "Apenas quando o contribuinte não tenha qualquer actividade económica.",
        },
        {
          id: "c",
          label: "c)",
          text: "Quando exista falta, insuficiência ou ausência de elementos comprovativos dos dados declarados pelo contribuinte, nos casos previstos na Lei.",
        },
        {
          id: "d",
          label: "d)",
          text: "Sempre que a Administração Tributária considere a matéria colectável demasiado elevada.",
        },
      ],
      answer: "c",
      answerLabel:
        "c) Quando exista falta, insuficiência ou ausência de elementos comprovativos dos dados declarados pelo contribuinte, nos casos previstos na Lei.",
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
      type: "multiple_choice",
      question:
        "A partir de que montante a decisão de deferimento, favorável ao contribuinte, de uma reclamação carece de confirmação superior obrigatória, sob pena de nulidade?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 500.000,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 750.000,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 1.000.000,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 2.000.000,00",
        },
      ],
      answer: "c",
      answerLabel: "c) Kz 1.000.000,00",
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
      type: "multiple_choice",
      question:
        "Em quanto tempo deve ser decidida a reclamação administrativa?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "15 dias",
        },
        {
          id: "b",
          label: "b)",
          text: "30 dias",
        },
        {
          id: "c",
          label: "c)",
          text: "45 dias",
        },
        {
          id: "d",
          label: "d)",
          text: "90 dias",
        },
      ],
      answer: "c",
      answerLabel: "c) 45 dias",
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
      type: "multiple_choice",
      question:
        "Quais são os prazos para interposição e decisão do recurso hierárquico?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "10 dias para interpor e 30 dias para decidir",
        },
        {
          id: "b",
          label: "b)",
          text: "15 dias para interpor e 45 dias para decidir",
        },
        {
          id: "c",
          label: "c)",
          text: "30 dias para interpor e 45 dias para decidir",
        },
        {
          id: "d",
          label: "d)",
          text: "15 dias para interpor e 90 dias para decidir",
        },
      ],
      answer: "b",
      answerLabel: "b) 15 dias para interpor e 45 dias para decidir",
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