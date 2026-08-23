import { Quiz } from "@/constants/types";

const quizBloco3: Quiz = {
  id: "ivm-bloco-03",
  title: "Isenções",
  subtitle:
    "Imposto sobre os Veículos Motorizados — Lei n.º 24/20, de 13 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Art. 5.º",

  questions: [
    {
      id: "3.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o art. 5.º, n.º 1, quais entidades estão isentas do IVM?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas empresas públicas",
        },
        {
          id: "b",
          label: "b)",
          text:
            "O Estado, as Autarquias Locais, os Institutos Públicos, os Partidos Políticos, as Missões Diplomáticas e Consulares (com reciprocidade) e as Organizações Internacionais",
        },
        {
          id: "c",
          label: "c)",
          text: "Todas as empresas com mais de 100 trabalhadores",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas veículos com mais de 20 anos de fabrico",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O Estado, as Autarquias Locais, os Institutos Públicos, os Partidos Políticos, as Missões Diplomáticas e Consulares (com reciprocidade) e as Organizações Internacionais",
      explanation:
        "Art. 5.º, n.º 1, alíneas a) a c): estabelece isenções subjectivas para entidades públicas, diplomáticas e internacionais.",
    },

    {
      id: "3.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o art. 5.º, n.º 2, que tractores estão isentos do IVM?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Todos os tractores, independentemente do uso",
        },
        {
          id: "b",
          label: "b)",
          text: "Os tractores utilizados exclusivamente para a agricultura",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas tractores com menos de 5 anos",
        },
        {
          id: "d",
          label: "d)",
          text: "Nenhum tractor está isento",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Os tractores utilizados exclusivamente para a agricultura",
      explanation:
        "Art. 5.º, n.º 2: a isenção aplica-se aos tractores utilizados exclusivamente para a agricultura.",
    },

    {
      id: "3.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo o art. 5.º, n.º 2, os veículos adaptados para uso de pessoas com deficiência são isentos mediante que condição?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Autorização do Ministério da Saúde",
        },
        {
          id: "b",
          label: "b)",
          text: "Reconhecimento da Administração Tributária",
        },
        {
          id: "c",
          label: "c)",
          text: "Aprovação da Polícia Nacional de Trânsito",
        },
        {
          id: "d",
          label: "d)",
          text: "Não há isenção para estes veículos",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Reconhecimento da Administração Tributária",
      explanation:
        "Art. 5.º, n.º 2: a isenção dos veículos adaptados para uso de pessoas com deficiência depende do reconhecimento da Administração Tributária.",
    },
  ],
};

export default quizBloco3;