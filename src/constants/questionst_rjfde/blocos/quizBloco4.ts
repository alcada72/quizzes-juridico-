import { Quiz } from "@/constants/types";

const quizBloco4: Quiz = {
  id: "rjfde-bloco-04",
  title: "Requisitos e Facturação Electrónica",
  subtitle:
    "Regime Jurídico das Facturas e Documentos Equivalentes — Decreto Presidencial n.º 292/18, de 3 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 11.º a 14.º",

  questions: [
    {
      id: "4.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 11.º, n.º 1, qual dos seguintes elementos é obrigatório nas facturas ou documentos equivalentes, com excepção dos talões de venda?",
      options: [
        { id: "a", label: "a)", text: "Apenas o preço" },
        {
          id: "b",
          label: "b)",
          text: "O nome/firma, Número de Identificação Fiscal, sede ou domicílio do fornecedor e do adquirente, entre outros elementos exigidos",
        },
        { id: "c", label: "c)", text: "Apenas a data de emissão" },
        { id: "d", label: "d)", text: "Apenas a assinatura do emitente" },
      ],
      answer: "b",
      answerLabel:
        "b) O nome/firma, Número de Identificação Fiscal, sede ou domicílio do fornecedor e do adquirente, entre outros elementos exigidos",
      explanation:
        "O Art.º 11.º, n.º 1, exige que as facturas ou documentos equivalentes contenham vários elementos obrigatórios, incluindo o nome/firma, o NIF e a sede ou domicílio do fornecedor e, quando aplicável, do adquirente.",
    },

    {
      id: "4.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 13.º, n.º 1, as facturas em formato electrónico têm efeitos jurídicos:",
      options: [
        { id: "a", label: "a)", text: "Inferiores às facturas em papel" },
        { id: "b", label: "b)", text: "Equiparados às facturas e aos documentos equivalentes" },
        { id: "c", label: "c)", text: "Apenas válidos para operações de exportação" },
        { id: "d", label: "d)", text: "Nenhum efeito jurídico" },
      ],
      answer: "b",
      answerLabel: "b) Equiparados às facturas e aos documentos equivalentes",
      explanation:
        "O Art.º 13.º, n.º 1, atribui às facturas em formato electrónico efeitos jurídicos equiparados aos das facturas e documentos equivalentes em papel.",
    },

    {
      id: "4.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 14.º, o que é estabelecido em diploma próprio quanto à facturação electrónica?",
      options: [
        { id: "a", label: "a)", text: "Apenas a taxa de imposto aplicável" },
        {
          id: "b",
          label: "b)",
          text: "A disciplina jurídica sobre facturação electrónica, incluindo sistemas de facturação, contabilidade, inventariação e certificação",
        },
        { id: "c", label: "c)", text: "O calendário fiscal anual" },
        { id: "d", label: "d)", text: "O Número de Identificação Fiscal dos contribuintes" },
      ],
      answer: "b",
      answerLabel:
        "b) A disciplina jurídica sobre facturação electrónica, incluindo sistemas de facturação, contabilidade, inventariação e certificação",
      explanation:
        "O Art.º 14.º remete para diploma próprio a disciplina jurídica sobre facturação electrónica, abrangendo os sistemas de facturação, contabilidade, inventariação e a respectiva certificação.",
    },
  ],
};

export default quizBloco4;
