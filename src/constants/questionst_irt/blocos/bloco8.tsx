import { Quiz } from "@/constants/types";

const quizBloco8: Quiz = {
  id: "irt-bloco-08",
  title: "Lei n.º 28/20 — Isenções e Taxas",
  subtitle: "Imposto sobre os Rendimentos do Trabalho — Lei n.º 28/20",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 5.º e 16.º e Tabela do IRT",

  questions: [
    {
      id: "8.1",
      number: 36,
      type: "multiple_choice",
      question:
        "Segundo a nova redacção do art. 5.º, o reconhecimento prévio para isenção do pessoal estrangeiro ao serviço de ONG passou a ser feito por qual entidade?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Director Nacional de Impostos",
        },
        {
          id: "b",
          label: "b)",
          text: "Administração Geral Tributária",
        },
        {
          id: "c",
          label: "c)",
          text: "Ministério das Relações Exteriores",
        },
        {
          id: "d",
          label: "d)",
          text: "Assembleia Nacional",
        },
      ],
      answer: "b",
      answerLabel: "b) Administração Geral Tributária",
      explanation:
        "Art. 5.º, n.º 1, alínea c) (nova redacção): reconhecimento prévio por escrito da Administração Geral Tributária.",
    },

    {
      id: "8.2",
      number: 37,
      type: "multiple_choice",
      question:
        "Segundo o novo art. 16.º, n.º 2, qual a taxa aplicável ao rendimento sujeito a retenção na fonte nos Grupos B e C?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "5%",
        },
        {
          id: "b",
          label: "b)",
          text: "6,5%",
        },
        {
          id: "c",
          label: "c)",
          text: "10%",
        },
        {
          id: "d",
          label: "d)",
          text: "15%",
        },
      ],
      answer: "b",
      answerLabel: "b) 6,5%",
      explanation:
        "Art. 16.º, n.º 2 (Lei n.º 28/20): taxa de 6,5% para rendimentos sujeitos a retenção na fonte.",
    },

    {
      id: "8.3",
      number: 38,
      type: "multiple_choice",
      question:
        "Segundo o novo art. 16.º, n.º 3, qual a taxa aplicável à matéria colectável dos Grupos B e C não sujeita a retenção na fonte?",
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
          text: "25%",
        },
        {
          id: "d",
          label: "d)",
          text: "30%",
        },
      ],
      answer: "c",
      answerLabel: "c) 25%",
      explanation: "Art. 16.º, n.º 3 (Lei n.º 28/20): taxa de 25%.",
    },

    {
      id: "8.4",
      number: 39,
      type: "multiple_choice",
      question:
        "Na nova Tabela do IRT (Grupo A, anexa à Lei n.º 28/20), até que valor mensal o rendimento passou a ser isento?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 34.450,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 50.000,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 70.000,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 100.000,00",
        },
      ],
      answer: "c",
      answerLabel: "c) Kz 70.000,00",
      explanation:
        "Nova Tabela do IRT: isenção até Kz 70.000,00 (1.º Escalão).",
    },

    {
      id: "8.5",
      number: 40,
      type: "multiple_choice",
      question:
        "Quantos escalões passou a ter a nova tabela progressiva de taxas do Grupo A introduzida pela Lei n.º 28/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "9",
        },
        {
          id: "b",
          label: "b)",
          text: "11",
        },
        {
          id: "c",
          label: "c)",
          text: "13",
        },
        {
          id: "d",
          label: "d)",
          text: "15",
        },
      ],
      answer: "c",
      answerLabel: "c) 13",
      explanation: "A nova Tabela do IRT tem 13 escalões, do 1.º ao 13.º.",
    },
  ],
};

export default quizBloco8;
