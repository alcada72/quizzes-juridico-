import { Quiz } from "@/constants/types";

const quizBloco1: Quiz = {
  id: "ef-bloco-01",
  title: "Fundamentos e Objecto do Código",
  subtitle: "Código das Execuções Fiscais — Lei n.º 20/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 1.º, 2.º e 14.º do Código; Art.º 16.º da Lei",

  questions: [
    {
      id: "1.1",
      number: 1,
      type: "multiple_choice",
      question: "O que aprova a Lei n.º 20/14, de 22 de Outubro?",
      options: [
        { id: "a", label: "a)", text: "O Código Geral Tributário" },
        { id: "b", label: "b)", text: "O Código das Execuções Fiscais" },
        { id: "c", label: "c)", text: "O Código de Processo Tributário" },
        { id: "d", label: "d)", text: "O Regime Simplificado de Execuções Fiscais" },
      ],
      answer: "b",
      answerLabel: "b) O Código das Execuções Fiscais",
      explanation:
        "O Art.º 1.º da Lei n.º 20/14 aprova o Código das Execuções Fiscais, que é parte integrante da Lei.",
    },

    {
      id: "1.2",
      number: 2,
      type: "multiple_choice",
      question: "Segundo o Art.º 1.º do Código, o processo de execução fiscal visa:",
      options: [
        { id: "a", label: "a)", text: "A discussão da legalidade da dívida tributária" },
        {
          id: "b",
          label: "b)",
          text: "A cobrança coerciva de uma quantia certa, líquida e exigível, com base em título executivo",
        },
        { id: "c", label: "c)", text: "A anulação de actos administrativos tributários" },
        { id: "d", label: "d)", text: "A fiscalização de contribuintes" },
      ],
      answer: "b",
      answerLabel:
        "b) A cobrança coerciva de uma quantia certa, líquida e exigível, com base em título executivo",
      explanation:
        "O Art.º 1.º, n.º 2, do Código define que o processo de execução fiscal visa a cobrança coerciva, com base em título executivo, de uma quantia certa, líquida e exigível decorrente de obrigações tributárias.",
    },

    {
      id: "1.3",
      number: 3,
      type: "multiple_choice",
      question: "Nos termos do Art.º 2.º, qual é a natureza do processo de execução fiscal?",
      options: [
        { id: "a", label: "a)", text: "Exclusivamente administrativa" },
        {
          id: "b",
          label: "b)",
          text: "Judicial, sem prejuízo da competência do Chefe da Repartição Fiscal para actos materialmente administrativos",
        },
        { id: "c", label: "c)", text: "Exclusivamente arbitral" },
        { id: "d", label: "d)", text: "Puramente disciplinar" },
      ],
      answer: "b",
      answerLabel:
        "b) Judicial, sem prejuízo da competência do Chefe da Repartição Fiscal para actos materialmente administrativos",
      explanation:
        "O Art.º 2.º atribui ao processo de execução fiscal natureza judicial, admitindo que o Chefe da Repartição Fiscal ou outras entidades pratiquem, sob controlo do juiz, actos materialmente administrativos.",
    },

    {
      id: "1.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 16.º da Lei, quando entra em vigor o Código das Execuções Fiscais?",
      options: [
        { id: "a", label: "a)", text: "No dia seguinte à publicação da Lei" },
        { id: "b", label: "b)", text: "Em 1 de Janeiro de 2015" },
        { id: "c", label: "c)", text: "Imediatamente após a promulgação" },
        { id: "d", label: "d)", text: "30 dias após a publicação" },
      ],
      answer: "b",
      answerLabel: "b) Em 1 de Janeiro de 2015",
      explanation:
        "O Art.º 16.º, n.º 2, da Lei estabelece que, embora a Lei entre em vigor no dia seguinte à publicação, o Código das Execuções Fiscais só entra em vigor em 1 de Janeiro de 2015.",
    },

    {
      id: "1.5",
      number: 5,
      type: "multiple_choice",
      question: "O que revoga o Art.º 14.º da Lei n.º 20/14?",
      options: [
        { id: "a", label: "a)", text: "O Código Geral Tributário" },
        {
          id: "b",
          label: "b)",
          text: "O Regime Simplificado de Execuções Fiscais, aprovado pelo Decreto Legislativo Presidencial n.º 2/11",
        },
        { id: "c", label: "c)", text: "A Lei n.º 21/14" },
        { id: "d", label: "d)", text: "O Código Aduaneiro" },
      ],
      answer: "b",
      answerLabel:
        "b) O Regime Simplificado de Execuções Fiscais, aprovado pelo Decreto Legislativo Presidencial n.º 2/11",
      explanation:
        "O Art.º 14.º revoga o Regime Simplificado de Execuções Fiscais, aprovado pelo Decreto Legislativo Presidencial n.º 2/11, de 9 de Junho, com a entrada em vigor do novo Código.",
    },
  ],
};

export default quizBloco1;