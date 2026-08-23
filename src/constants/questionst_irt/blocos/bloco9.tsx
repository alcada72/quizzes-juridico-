import { Quiz } from "@/constants/types";

const quizBloco9: Quiz = {
  id: "irt-bloco-09",
  title: "Lei n.º 28/20 — Taxas e Grupo B",
  subtitle: "Imposto sobre os Rendimentos do Trabalho — Lei n.º 28/20",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 3.º, 8.º, 9.º e 16.º",

  questions: [
    {
      id: "9.1",
      number: 41,
      type: "multiple_choice",
      question:
        "Qual a taxa marginal mais alta da nova tabela, aplicável ao excesso acima de Kz 10.000.000,00?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "17%",
        },
        {
          id: "b",
          label: "b)",
          text: "20%",
        },
        {
          id: "c",
          label: "c)",
          text: "24,5%",
        },
        {
          id: "d",
          label: "d)",
          text: "25%",
        },
      ],
      answer: "d",
      answerLabel: "d) 25%",
      explanation:
        "13.º Escalão da nova Tabela do IRT: taxa de 25% sobre o excesso de Kz 10.000.000,00.",
    },

    {
      id: "9.2",
      number: 42,
      type: "multiple_choice",
      question:
        "Segundo o art. 9.º alterado, qual passou a ser a multa por incumprimento da Tabela dos Lucros Mínimos pelo Grupo C?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "O dobro do imposto apurado",
        },
        {
          id: "b",
          label: "b)",
          text: "25% do imposto apurado com base na Tabela",
        },
        {
          id: "c",
          label: "c)",
          text: "50% do imposto apurado",
        },
        {
          id: "d",
          label: "d)",
          text: "100% do imposto apurado",
        },
      ],
      answer: "b",
      answerLabel: "b) 25% do imposto apurado com base na Tabela",
      explanation:
        "Art. 9.º, n.º 3 (nova redacção): multa de 25% do imposto apurado com base na Tabela dos Lucros Mínimos.",
    },

    {
      id: "9.3",
      number: 43,
      type: "multiple_choice",
      question:
        "Segundo o novo art. 3.º, n.º 7 (ou art. 8.º, consoante o grupo), que percentagem dos custos incorridos podem deduzir os contribuintes com modelo de contabilidade simplificada?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "15%",
        },
        {
          id: "b",
          label: "b)",
          text: "20%",
        },
        {
          id: "c",
          label: "c)",
          text: "30%",
        },
        {
          id: "d",
          label: "d)",
          text: "50%",
        },
      ],
      answer: "c",
      answerLabel: "c) 30%",
      explanation:
        "Contribuintes com modelo de contabilidade simplificada ou livro de registo têm direito a deduzir até 30% dos custos incorridos.",
    },

    {
      id: "9.4",
      number: 44,
      type: "multiple_choice",
      question:
        "Qual das seguintes profissões foi expressamente acrescentada à lista de profissões do Grupo B pela Lei n.º 28/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Advogado",
        },
        {
          id: "b",
          label: "b)",
          text: "Economista",
        },
        {
          id: "c",
          label: "c)",
          text: "Cabeleireiro",
        },
        {
          id: "d",
          label: "d)",
          text: "Engenheiro",
        },
      ],
      answer: "c",
      answerLabel: "c) Cabeleireiro",
      explanation:
        "A Lei n.º 28/20 acrescentou, entre outras, Cabeleireiro, Massagista, DJ, Corretores e Mediadores, Árbitros e Treinadores Desportivos.",
    },

    {
      id: "9.5",
      number: 45,
      type: "multiple_choice",
      question:
        "Além de Cabeleireiro e Massagista, que outra categoria de profissionais foi acrescentada à lista pela Lei n.º 28/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Pilotos de avião comercial",
        },
        {
          id: "b",
          label: "b)",
          text: "Árbitros e Treinadores Desportivos",
        },
        {
          id: "c",
          label: "c)",
          text: "Funcionários bancários",
        },
        {
          id: "d",
          label: "d)",
          text: "Professores universitários",
        },
      ],
      answer: "b",
      answerLabel: "b) Árbitros e Treinadores Desportivos",
      explanation:
        "A lista passou a incluir também Árbitros Desportivos, Treinadores Desportivos e Preparadores Físicos, entre outros.",
    },
  ],
};

export default quizBloco9;
