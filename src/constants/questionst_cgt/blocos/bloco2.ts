import { Quiz } from "../../types";

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
      type: "multiple_choice",
      question:
        "Qual das seguintes opções distingue correctamente os benefícios fiscais automáticos dos não automáticos?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Os benefícios fiscais automáticos dependem de acto administrativo, enquanto os não automáticos resultam directamente da Lei.",
        },
        {
          id: "b",
          label: "b)",
          text: "Os benefícios fiscais automáticos dependem directa e imediatamente da Lei, enquanto os não automáticos dependem de acto ou actos administrativos de aplicação.",
        },
        {
          id: "c",
          label: "c)",
          text: "Os benefícios fiscais automáticos e não automáticos dependem sempre de autorização judicial.",
        },
        {
          id: "d",
          label: "d)",
          text: "Os benefícios fiscais automáticos são concedidos apenas por despacho, enquanto os não automáticos são sempre transmissíveis.",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Os benefícios fiscais automáticos dependem directa e imediatamente da Lei, enquanto os não automáticos dependem de acto ou actos administrativos de aplicação.",
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
      type: "multiple_choice",
      question:
        "Quando um benefício fiscal está sujeito a condição de afectação de bens adquiridos, em quantos anos posteriores à aquisição a alienação dos bens faz caducar a isenção?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Três anos",
        },
        {
          id: "b",
          label: "b)",
          text: "Cinco anos",
        },
        {
          id: "c",
          label: "c)",
          text: "Oito anos",
        },
        {
          id: "d",
          label: "d)",
          text: "Dez anos",
        },
      ],
      answer: "c",
      answerLabel: "c) Oito anos",
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
      type: "multiple_choice",
      question:
        "Qual das seguintes opções apresenta apenas garantias gerais do contribuinte previstas no Art. 23.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Não pagar impostos não estabelecidos por Lei; não ter a mesma matéria colectável tributada duas vezes; reclamar administrativamente; recorrer hierarquicamente.",
        },
        {
          id: "b",
          label: "b)",
          text: "Pagar sempre os impostos em prestações; escolher livremente a taxa aplicável; dispensar a notificação dos actos tributários.",
        },
        {
          id: "c",
          label: "c)",
          text: "Exigir a eliminação de qualquer imposto; impedir qualquer fiscalização; escolher a Administração Tributária competente.",
        },
        {
          id: "d",
          label: "d)",
          text: "Recusar qualquer acto de liquidação; não apresentar declarações fiscais; impedir a cobrança coerciva.",
        },
      ],
      answer: "a",
      answerLabel:
        "a) Não pagar impostos não estabelecidos por Lei; não ter a mesma matéria colectável tributada duas vezes; reclamar administrativamente; recorrer hierarquicamente.",
      explanation:
        "Entre as garantias gerais do contribuinte estão o direito de não pagar impostos não estabelecidos por Lei, não ser tributado duas vezes pela mesma matéria colectável, reclamar administrativamente e recorrer hierarquicamente, entre outras.",
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