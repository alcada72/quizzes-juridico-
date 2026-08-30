import { Quiz } from "@/constants/types";

const quizBloco1: Quiz = {
  id: "rjfde-bloco-01",
  title: "Fundamentos e Âmbito do Regime",
  subtitle:
    "Regime Jurídico das Facturas e Documentos Equivalentes — Decreto Presidencial n.º 292/18, de 3 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 1.º a 4.º",

  questions: [
    {
      id: "1.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 2.º, o que estabelece o Regime Jurídico das Facturas e Documentos Equivalentes?",
      options: [
        { id: "a", label: "a)", text: "Apenas as regras de emissão de facturas em formato electrónico" },
        {
          id: "b",
          label: "b)",
          text: "As regras aplicáveis à emissão, conservação e arquivamento das facturas e documentos equivalentes",
        },
        { id: "c", label: "c)", text: "As taxas do Imposto sobre o Valor Acrescentado" },
        { id: "d", label: "d)", text: "O regime de fiscalização aduaneira" },
      ],
      answer: "b",
      answerLabel:
        "b) As regras aplicáveis à emissão, conservação e arquivamento das facturas e documentos equivalentes",
      explanation:
        "O Art.º 2.º estabelece que o Regime Jurídico das Facturas e Documentos Equivalentes fixa as regras aplicáveis à emissão, conservação e arquivamento das facturas e documentos equivalentes.",
    },

    {
      id: "1.2",
      number: 2,
      type: "multiple_choice",
      question:
        'Nos termos do Art.º 4.º, alínea a), o que se entende por "Auto-facturação"?',
      options: [
        { id: "a", label: "a)", text: "A emissão de facturas por entidades estrangeiras" },
        {
          id: "b",
          label: "b)",
          text: "A emissão de Facturas/Recibos pelos adquirentes de bens ou serviços em substituição dos seus fornecedores",
        },
        { id: "c", label: "c)", text: "A emissão automática de facturas por sistemas electrónicos" },
        { id: "d", label: "d)", text: "A anulação de facturas emitidas por erro" },
      ],
      answer: "b",
      answerLabel:
        "b) A emissão de Facturas/Recibos pelos adquirentes de bens ou serviços em substituição dos seus fornecedores",
      explanation:
        "O Art.º 4.º, alínea a), define «Auto-facturação» como a emissão de Facturas/Recibos pelos adquirentes de bens ou serviços, em substituição dos seus fornecedores.",
    },

    {
      id: "1.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Qual das seguintes opções NÃO é considerada factura ou documento equivalente, segundo o Art.º 3.º, n.º 4?",
      options: [
        { id: "a", label: "a)", text: "A Factura/Recibo" },
        { id: "b", label: "b)", text: "O Recibo" },
        { id: "c", label: "c)", text: "A nota de encomenda" },
        { id: "d", label: "d)", text: "A Nota de Débito" },
      ],
      answer: "c",
      answerLabel: "c) A nota de encomenda",
      explanation:
        "O Art.º 3.º, n.º 4, alínea c), exclui expressamente a nota de encomenda do conceito de factura ou documento equivalente.",
    },

    {
      id: "1.4",
      number: 4,
      type: "multiple_choice",
      question:
        "O presente Diploma aplica-se aos contribuintes com residência fiscal em Angola. Esta afirmação é:",
      options: [
        { id: "a", label: "a)", text: "Verdadeira" },
        { id: "b", label: "b)", text: "Falsa" },
      ],
      answer: "a",
      answerLabel: "a) Verdadeira",
      explanation:
        "O Art.º 3.º, n.º 1, determina que o Diploma se aplica aos contribuintes com residência fiscal em Angola, em todas as transmissões de bens, prestações de serviços, adiantamentos ou pagamentos antecipados que realizem.",
    },
  ],
};

export default quizBloco1;
