import { Quiz } from "@/constants/types";

const quizBloco5: Quiz = {
  id: "rjfde-bloco-05",
  title: "Arquivamento e Penalidades",
  subtitle:
    "Regime Jurídico das Facturas e Documentos Equivalentes — Decreto Presidencial n.º 292/18, de 3 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 15.º e 16.º",

  questions: [
    {
      id: "5.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 15.º, quem estabelece os prazos de arquivamento das facturas e documentos equivalentes?",
      options: [
        { id: "a", label: "a)", text: "O Código Geral Tributário" },
        { id: "b", label: "b)", text: "A Administração Geral Tributária, livremente" },
        { id: "c", label: "c)", text: "O Banco Nacional de Angola" },
        { id: "d", label: "d)", text: "O Tribunal de Contas" },
      ],
      answer: "a",
      answerLabel: "a) O Código Geral Tributário",
      explanation:
        "O Art.º 15.º, n.º 1, obriga os contribuintes a arquivar e conservar as facturas e documentos equivalentes nos prazos estabelecidos pelo Código Geral Tributário.",
    },

    {
      id: "5.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 16.º, n.º 4, alínea a), qual é a multa aplicável quando a factura for emitida com omissão de elementos como o preço, o número de identificação fiscal, o endereço ou o nome da entidade emitente?",
      options: [
        { id: "a", label: "a)", text: "1% do valor da factura emitida" },
        { id: "b", label: "b)", text: "5% do valor da factura emitida" },
        { id: "c", label: "c)", text: "7% do valor da factura não emitida" },
        { id: "d", label: "d)", text: "15% do valor da factura não emitida" },
      ],
      answer: "b",
      answerLabel: "b) 5% do valor da factura emitida",
      explanation:
        "O Art.º 16.º, n.º 4, alínea a), aplica uma multa de 5% do valor da factura quando os elementos omitidos, ou erradamente indicados, forem o preço, o número de identificação fiscal, o endereço ou o nome da entidade emitente.",
    },

    {
      id: "5.3",
      number: 3,
      type: "multiple_choice",
      question:
        "A multa pela não emissão de factura é de 7% do valor da factura não emitida, subindo para 15% em caso de incumprimento reiterado. Esta afirmação é:",
      options: [
        { id: "a", label: "a)", text: "Verdadeira" },
        { id: "b", label: "b)", text: "Falsa" },
      ],
      answer: "a",
      answerLabel: "a) Verdadeira",
      explanation:
        "O Art.º 16.º, n.º 1, alíneas a) e b), fixa a multa em 7% do valor da factura não emitida, elevando-a para 15% em caso de incumprimento reiterado.",
    },

    {
      id: "5.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 16.º, n.º 5, qual é a multa pelo incumprimento do disposto no Art.º 15.º, relativo ao arquivamento?",
      options: [
        { id: "a", label: "a)", text: "5% do valor de cada factura" },
        { id: "b", label: "b)", text: "1% do valor de cada factura ou documento equivalente" },
        { id: "c", label: "c)", text: "Isenção de multa" },
        { id: "d", label: "d)", text: "10% do valor de cada factura" },
      ],
      answer: "b",
      answerLabel: "b) 1% do valor de cada factura ou documento equivalente",
      explanation:
        "O Art.º 16.º, n.º 5, pune o incumprimento da obrigação de arquivamento prevista no Art.º 15.º, n.º 1, com multa correspondente a 1% do valor de cada factura ou documento equivalente.",
    },
  ],
};

export default quizBloco5;
