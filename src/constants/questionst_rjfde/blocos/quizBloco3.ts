import { Quiz } from "@/constants/types";

const quizBloco3: Quiz = {
  id: "rjfde-bloco-03",
  title: "Processamento e Autofacturação",
  subtitle:
    "Regime Jurídico das Facturas e Documentos Equivalentes — Decreto Presidencial n.º 292/18, de 3 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 8.º a 10.º",

  questions: [
    {
      id: "3.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 8.º, n.º 1, a partir de que volume de negócios os agentes económicos devem emitir facturas através de programas informáticos certificados?",
      options: [
        { id: "a", label: "a)", text: "USD 100.000,00" },
        { id: "b", label: "b)", text: "USD 250.000,00" },
        { id: "c", label: "c)", text: "USD 500.000,00" },
        { id: "d", label: "d)", text: "USD 1.000.000,00" },
      ],
      answer: "b",
      answerLabel: "b) USD 250.000,00",
      explanation:
        "O Art.º 8.º, n.º 1, exige a emissão através de programas informáticos certificados aos agentes económicos com volume de negócios igual ou superior ao equivalente em AKz a USD 250.000,00.",
    },

    {
      id: "3.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 8.º, n.º 3, as Facturas/Recibos emitidas por autofacturação não devem corresponder a mais do que que percentagem do total de custos das mercadorias vendidas e matérias consumidas?",
      options: [
        { id: "a", label: "a)", text: "5%" },
        { id: "b", label: "b)", text: "10%" },
        { id: "c", label: "c)", text: "15%" },
        { id: "d", label: "d)", text: "20%" },
      ],
      answer: "b",
      answerLabel: "b) 10%",
      explanation:
        "O Art.º 8.º, n.º 3, limita as Facturas/Recibos emitidas por autofacturação a, no máximo, 10% do total de custos das mercadorias vendidas e matérias consumidas da entidade emitente.",
    },

    {
      id: "3.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 9.º, n.º 1, até quando deve ser emitida a factura ou documento equivalente, relativamente à operação que lhe deu causa?",
      options: [
        { id: "a", label: "a)", text: "Até ao quinto dia útil seguinte" },
        { id: "b", label: "b)", text: "Até ao décimo dia útil seguinte" },
        { id: "c", label: "c)", text: "No próprio dia da operação, obrigatoriamente" },
        { id: "d", label: "d)", text: "Até ao final do mês seguinte" },
      ],
      answer: "a",
      answerLabel: "a) Até ao quinto dia útil seguinte",
      explanation:
        "O Art.º 9.º, n.º 1, determina que a factura ou documento equivalente deve ser emitida até ao quinto dia útil seguinte ao da operação que lhe deu causa.",
    },

    {
      id: "3.4",
      number: 4,
      type: "multiple_choice",
      question:
        "A autofacturação é permitida às entidades do sector da hotelaria, restauração e similares, apenas para aquisições de produtos dos sectores agricultura, silvicultura, aquicultura, apicultura, avicultura, pescas e pecuária. Esta afirmação é:",
      options: [
        { id: "a", label: "a)", text: "Verdadeira" },
        { id: "b", label: "b)", text: "Falsa" },
      ],
      answer: "a",
      answerLabel: "a) Verdadeira",
      explanation:
        "O Art.º 10.º, n.º 1, permite às entidades do sector da hotelaria, restauração e similares, com contabilidade organizada, substituir-se aos fornecedores na emissão de Facturas/Recibos, desde que exclusivamente relativas a aquisições daqueles sectores.",
    },
  ],
};

export default quizBloco3;
