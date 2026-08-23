import { Quiz } from "@/constants/types";

const quizBloco1: Quiz = {
  id: "irt-bloco-01",
  title: "Fundamentos do IRT",
  subtitle:
    "Imposto sobre os Rendimentos do Trabalho — Lei n.º 18/14 e Lei n.º 28/20",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 1.º e 3.º",

  questions: [
    {
      id: "1.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o artigo 1.º do Código (Lei n.º 18/14), sobre que rendimentos incide o IRT?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas sobre salários pagos por entidades com contabilidade organizada",
        },
        {
          id: "b",
          label: "b)",
          text: "Sobre rendimentos por conta própria ou por conta de outrem, expressos em dinheiro (ainda que auferidos em espécie), contratuais ou não, periódicos ou ocasionais, fixos ou variáveis",
        },
        {
          id: "c",
          label: "c)",
          text: "Somente sobre rendimentos superiores ao salário mínimo nacional",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas sobre rendimentos de cidadãos nacionais residentes no País",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Sobre rendimentos por conta própria ou por conta de outrem, expressos em dinheiro (ainda que auferidos em espécie), contratuais ou não, periódicos ou ocasionais, fixos ou variáveis",
      explanation:
        "Art. 1.º, n.º 1 da Lei n.º 18/14: a base do imposto é ampla e independe da proveniência, local, moeda ou forma de pagamento.",
    },

    {
      id: "1.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Em quantos Grupos de tributação se dividem os rendimentos do IRT?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "2 (A e B)",
        },
        {
          id: "b",
          label: "b)",
          text: "3 (A, B e C)",
        },
        {
          id: "c",
          label: "c)",
          text: "4 (A, B, C e D)",
        },
        {
          id: "d",
          label: "d)",
          text: "5",
        },
      ],
      answer: "b",
      answerLabel: "b) 3 (A, B e C)",
      explanation:
        "Art. 3.º, n.º 1: os rendimentos dividem-se em três Grupos — A, B e C.",
    },

    {
      id: "1.3",
      number: 3,
      type: "multiple_choice",
      question: "O que caracteriza os rendimentos do Grupo A?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Rendimentos de actividades industriais e comerciais",
        },
        {
          id: "b",
          label: "b)",
          text: "Rendimentos de profissões liberais exercidas de forma independente",
        },
        {
          id: "c",
          label: "c)",
          text: "Remunerações de trabalhadores por conta de outrem, pagas por entidade patronal por vínculo laboral, e rendimentos da função pública",
        },
        {
          id: "d",
          label: "d)",
          text: "Rendimentos de capitais e mais-valias",
        },
      ],
      answer: "c",
      answerLabel:
        "c) Remunerações de trabalhadores por conta de outrem, pagas por entidade patronal por vínculo laboral, e rendimentos da função pública",
      explanation:
        "Art. 3.º, n.º 2: o Grupo A abrange trabalhadores por conta de outrem e a função pública.",
    },

    {
      id: "1.4",
      number: 4,
      type: "multiple_choice",
      question: "O que caracteriza os rendimentos do Grupo B?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Remunerações de trabalhadores por conta própria em profissões constantes de lista anexa, gerentes e titulares de órgãos sociais",
        },
        {
          id: "b",
          label: "b)",
          text: "Apenas pensões de reforma",
        },
        {
          id: "c",
          label: "c)",
          text: "Rendimentos prediais",
        },
        {
          id: "d",
          label: "d)",
          text: "Rendimentos de trabalhadores domésticos",
        },
      ],
      answer: "a",
      answerLabel:
        "a) Remunerações de trabalhadores por conta própria em profissões constantes de lista anexa, gerentes e titulares de órgãos sociais",
      explanation:
        "Art. 3.º, n.º 3: inclui profissionais independentes da lista anexa e titulares de cargos de gerência/administração.",
    },

    {
      id: "1.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Na versão original da Lei n.º 18/14, o que caracterizava o Grupo C?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Rendimentos do trabalho doméstico",
        },
        {
          id: "b",
          label: "b)",
          text: "Remunerações percebidas pelo desempenho de actividades industriais e comerciais, presumidas pela Tabela dos Lucros Mínimos",
        },
        {
          id: "c",
          label: "c)",
          text: "Rendimentos de missões diplomáticas",
        },
        {
          id: "d",
          label: "d)",
          text: "Subsídios de renda de casa",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Remunerações percebidas pelo desempenho de actividades industriais e comerciais, presumidas pela Tabela dos Lucros Mínimos",
      explanation:
        "Art. 3.º, n.º 4: o Grupo C presume o rendimento pela Tabela dos Lucros Mínimos em vigor.",
    },
  ],
};

export default quizBloco1;
