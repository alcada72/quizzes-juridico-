import { Quiz } from "@/constants/types";

const quizBloco7: Quiz = {
  id: "irt-bloco-07",
  title: "Lei n.º 28/20 — Grupos e Isenções",
  subtitle: "Imposto sobre os Rendimentos do Trabalho — Lei n.º 28/20",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 2.º, 3.º, 5.º e 6.º",

  questions: [
    {
      id: "7.1",
      number: 31,
      type: "multiple_choice",
      question:
        "Com a nova redacção do art. 3.º pela Lei n.º 28/20, o que passou a integrar expressamente o Grupo A?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas trabalhadores domésticos",
        },
        {
          id: "b",
          label: "b)",
          text: "Também os rendimentos auferidos pelos titulares dos órgãos sociais das pessoas colectivas",
        },
        {
          id: "c",
          label: "c)",
          text: "Rendimentos de missões diplomáticas",
        },
        {
          id: "d",
          label: "d)",
          text: "Rendimentos prediais",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Também os rendimentos auferidos pelos titulares dos órgãos sociais das pessoas colectivas",
      explanation:
        "Art. 3.º, n.º 2, alínea c) (nova redacção): inclui titulares de órgãos sociais das pessoas colectivas.",
    },

    {
      id: "7.2",
      number: 32,
      type: "multiple_choice",
      question:
        "Segundo a nova alínea h) do art. 2.º, até que limite os salários dos trabalhadores eventuais agrícolas e domésticos angolanos deixam de constituir matéria colectável?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 30.000,00",
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
          text: "Kz 150.000,00",
        },
      ],
      answer: "c",
      answerLabel: "c) Kz 100.000,00",
      explanation:
        "Art. 2.º, n.º 1, alínea h) (Lei n.º 28/20): limite de Kz 100.000,00, exigindo inscrição na Segurança Social.",
    },

    {
      id: "7.3",
      number: 33,
      type: "multiple_choice",
      question:
        "Segundo a nova alínea k) do art. 2.º, qual o limite mensal dos subsídios de alimentação a trabalhadores dependentes?",
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
        "Art. 2.º, n.º 1, alínea k) (Lei n.º 28/20): limite mensal de Kz 30.000,00.",
    },

    {
      id: "7.4",
      number: 34,
      type: "multiple_choice",
      question:
        "A Lei n.º 28/20 introduziu uma nova alínea n) ao art. 2.º sobre subsídios de transporte. Qual o respectivo limite mensal?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 20.000,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 30.000,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 40.000,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 60.000,00",
        },
      ],
      answer: "b",
      answerLabel: "b) Kz 30.000,00",
      explanation:
        "Art. 2.º, n.º 1, alínea n) (nova): limite mensal de Kz 30.000,00.",
    },

    {
      id: "7.5",
      number: 35,
      type: "multiple_choice",
      question:
        "O que aconteceu ao art. 6.º (Isenções específicas) com a Lei n.º 28/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Foi ampliado para novos grupos profissionais",
        },
        {
          id: "b",
          label: "b)",
          text: "Manteve-se inalterado",
        },
        {
          id: "c",
          label: "c)",
          text: "Foi revogado",
        },
        {
          id: "d",
          label: "d)",
          text: "Passou a exigir aprovação anual pelo Presidente da República",
        },
      ],
      answer: "c",
      answerLabel: "c) Foi revogado",
      explanation: "O art. 6.º foi expressamente revogado pela Lei n.º 28/20.",
    },
  ],
};

export default quizBloco7;
