import { Quiz } from "@/constants/types";

const quizBloco2: Quiz = {
  id: "rjfde-bloco-02",
  title: "Emissão de Facturas e Dispensa",
  subtitle:
    "Regime Jurídico das Facturas e Documentos Equivalentes — Decreto Presidencial n.º 292/18, de 3 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 5.º a 7.º",

  questions: [
    {
      id: "2.1",
      number: 1,
      type: "multiple_choice",
      question:
        "É obrigatória a emissão de facturas ou documentos equivalentes em todas as transmissões de bens e prestações de serviços consideradas localizadas em território nacional. Esta afirmação é:",
      options: [
        { id: "a", label: "a)", text: "Verdadeira" },
        { id: "b", label: "b)", text: "Falsa" },
      ],
      answer: "a",
      answerLabel: "a) Verdadeira",
      explanation:
        "O Art.º 5.º, n.º 1, torna obrigatória a emissão de facturas ou documentos equivalentes em todas as transmissões de bens, prestações de serviços, adiantamentos ou pagamentos antecipados considerados localizados em território nacional.",
    },

    {
      id: "2.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 6.º, n.º 1, a dispensa de emissão de factura aplica-se, entre outras condições, quando:",
      options: [
        { id: "a", label: "a)", text: "O adquirente for uma pessoa colectiva" },
        {
          id: "b",
          label: "b)",
          text: "A aquisição dos bens ou serviços não esteja relacionada com actividade comercial, industrial ou prestação de serviços, e o adquirente seja necessariamente pessoa singular",
        },
        { id: "c", label: "c)", text: "O valor da transacção for superior a Kz 100.000,00" },
        { id: "d", label: "d)", text: "A transacção ocorra fora de Angola" },
      ],
      answer: "b",
      answerLabel:
        "b) A aquisição dos bens ou serviços não esteja relacionada com actividade comercial, industrial ou prestação de serviços, e o adquirente seja necessariamente pessoa singular",
      explanation:
        "O Art.º 6.º, n.º 1, dispensa a emissão de factura quando, cumulativamente, a aquisição não esteja relacionada com actividade comercial, industrial ou prestação de serviços, sendo o adquirente necessariamente uma pessoa singular, em certas operações especificadas.",
    },

    {
      id: "2.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 7.º, n.º 1, quais documentos se equiparam ao Recibo, para efeitos do Diploma?",
      options: [
        { id: "a", label: "a)", text: "Apenas a Nota de Crédito" },
        { id: "b", label: "b)", text: "A Factura/Recibo e o aviso de cobrança/recibo" },
        { id: "c", label: "c)", text: "Apenas a factura pró-forma" },
        { id: "d", label: "d)", text: "A guia de remessa ou transporte" },
      ],
      answer: "b",
      answerLabel: "b) A Factura/Recibo e o aviso de cobrança/recibo",
      explanation:
        "O Art.º 7.º, n.º 1, equipara ao Recibo a Factura/Recibo e o aviso de cobrança/recibo, para efeitos do presente Diploma.",
    },
  ],
};

export default quizBloco2;
