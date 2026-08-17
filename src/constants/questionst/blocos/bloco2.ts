import { Quiz } from "../types";

const quizBloco2: Quiz = {
  id: "cgt-bloco-02",
  title: "Benefícios Fiscais e Garantias do Contribuinte",
  subtitle: "Código Geral Tributário — Lei n.º 21/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 16.º a 23.º",

  questions: [
    {
      id: "2.1",
      number: 1,
      type: "true_false",
      question:
        "Os benefícios fiscais só podem ser criados por Lei, a título transitório e excepcional.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 16.º/1.",
    },

    {
      id: "2.2",
      number: 2,
      type: "open",
      question: "Distingue benefícios fiscais automáticos de não automáticos.",
      answer:
        "Os benefícios fiscais automáticos dependem directa e imediatamente da Lei; os benefícios fiscais não automáticos dependem de acto ou actos administrativos de aplicação.",
      answerLabel: "Resposta esperada",
      explanation:
        "Os benefícios automáticos resultam directamente da Lei. Os não automáticos necessitam de acto ou actos administrativos para a sua aplicação.",
    },
    {
      id: "2.3",
      number: 3,
      type: "true_false",
      question:
        "O reconhecimento dos benefícios fiscais por acto administrativo tem efeito constitutivo.",
      answer: false,
      answerLabel: "Falso",
      explanation:
        "O reconhecimento por acto administrativo tem efeito meramente declarativo, nos termos do Art. 18.º/2.",
    },

    {
      id: "2.4",
      number: 4,
      type: "open",
      question:
        "Quando um benefício fiscal está sujeito a condição de afectação de bens adquiridos, em quantos anos posteriores à aquisição a alienação dos bens faz caducar a isenção?",
      answer: "Oito anos.",
      answerLabel: "8 anos",
      explanation:
        "A alienação dos bens dentro dos oito anos posteriores à aquisição faz caducar a isenção, nos termos do Art. 21.º/3.",
    },

    {
      id: "2.5",
      number: 5,
      type: "multiple_choice",
      question: "Os benefícios fiscais pessoais são:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Transmissíveis por morte",
        },
        {
          id: "b",
          label: "b)",
          text: "Transmissíveis entre vivos",
        },
        {
          id: "c",
          label: "c)",
          text: "Não transmissíveis",
        },
        {
          id: "d",
          label: "d)",
          text: "Sempre automáticos",
        },
      ],
      answer: "c",
      answerLabel: "c) Não transmissíveis",
      explanation: "Os benefícios fiscais pessoais são não transmissíveis.",
    },

    {
      id: "2.6",
      number: 6,
      type: "true_false",
      question:
        "As instituições públicas de previdência e segurança social estão isentas de tributação sobre o rendimento e património quanto ao seu património afecto aos fins estatutários.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 22.º/3.",
    },

    {
      id: "2.7",
      number: 7,
      type: "open",
      question:
        "Enumera pelo menos 5 garantias gerais do contribuinte previstas no Art. 23.º.",
      answer:
        "Entre outras: não pagar impostos não estabelecidos por Lei; não ter a mesma matéria colectável tributada duas vezes; reclamar administrativamente; recorrer hierarquicamente; impugnar judicialmente; exercer o direito de audição; ter direito à fundamentação e notificação.",
      answerLabel: "Resposta esperada",
      explanation:
        "São exemplos de garantias: não pagar impostos não estabelecidos por Lei, não ter a mesma matéria colectável tributada duas vezes, reclamar administrativamente, recorrer hierarquicamente, impugnar judicialmente, exercer o direito de audição e receber actos devidamente fundamentados e notificados.",
    },

    {
      id: "2.8",
      number: 8,
      type: "true_false",
      question:
        "O exercício das garantias do contribuinte pode, em caso de decisão desfavorável ao interessado, dar origem a agravamento da matéria colectável ou da colecta.",
      answer: false,
      answerLabel: "Falso",
      explanation:
        "O exercício das garantias do contribuinte não pode resultar em agravamento da matéria colectável ou da colecta, nos termos do Art. 23.º/2.",
    },
  ],
};

export default quizBloco2;
