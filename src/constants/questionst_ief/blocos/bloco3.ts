import { Quiz } from "@/constants/types";

const quizBloco3: Quiz = {
  id: "ef-bloco-03",
  title: "Partes, Legitimidade e Competência",
  subtitle: "Código das Execuções Fiscais — Lei n.º 20/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 6.º, 9.º, 10.º, 12.º e 15.º",

  questions: [
    {
      id: "3.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 6.º do Código, quando é obrigatória a constituição de advogado, independentemente do valor?",
      options: [
        { id: "a", label: "a)", text: "Apenas na oposição por embargos" },
        {
          id: "b",
          label: "b)",
          text: "Na acção subordinada de anulação de venda e nos recursos ordinários e extraordinários",
        },
        { id: "c", label: "c)", text: "Nunca é obrigatória" },
        { id: "d", label: "d)", text: "Apenas na penhora de imóveis" },
      ],
      answer: "b",
      answerLabel: "b) Na acção subordinada de anulação de venda e nos recursos ordinários e extraordinários",
      explanation:
        "O Art.º 6.º, n.º 2, torna sempre obrigatória a constituição de advogado, independentemente do valor, na acção subordinada de anulação de venda e nos recursos ordinários e extraordinários.",
    },

    {
      id: "3.2",
      number: 2,
      type: "multiple_choice",
      question: "Nos termos do Art.º 9.º, a quem cabe a direcção e gestão do processo de execução fiscal?",
      options: [
        { id: "a", label: "a)", text: "Exclusivamente ao Tribunal" },
        { id: "b", label: "b)", text: "Ao órgão administrativo de execução fiscal territorialmente competente" },
        { id: "c", label: "c)", text: "Ao Ministério Público" },
        { id: "d", label: "d)", text: "À Assembleia Nacional" },
      ],
      answer: "b",
      answerLabel: "b) Ao órgão administrativo de execução fiscal territorialmente competente",
      explanation:
        "O Art.º 9.º, n.º 1, atribui a direcção e gestão do processo de execução fiscal ao órgão administrativo de execução fiscal territorialmente competente.",
    },

    {
      id: "3.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 12.º, quando o executado não estiver domiciliado no território nacional, qual repartição fiscal é competente na impossibilidade de determinação de bens penhoráveis?",
      options: [
        { id: "a", label: "a)", text: "A 1.ª Repartição Fiscal de Luanda" },
        { id: "b", label: "b)", text: "A Repartição Fiscal do Huambo" },
        { id: "c", label: "c)", text: "Qualquer repartição fiscal do país" },
        { id: "d", label: "d)", text: "A Repartição Fiscal do Namibe" },
      ],
      answer: "a",
      answerLabel: "a) A 1.ª Repartição Fiscal de Luanda",
      explanation:
        "O Art.º 12.º, n.º 2, alínea c), determina que, na impossibilidade de determinar os bens penhoráveis de maior valor e na inexistência de representante fiscal, é competente a 1.ª Repartição Fiscal de Luanda.",
    },

    {
      id: "3.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 15.º, em que prazo o processo é remetido oficiosamente para o órgão competente em caso de incompetência territorial?",
      options: [
        { id: "a", label: "a)", text: "24 horas" },
        { id: "b", label: "b)", text: "48 horas" },
        { id: "c", label: "c)", text: "5 dias" },
        { id: "d", label: "d)", text: "10 dias" },
      ],
      answer: "b",
      answerLabel: "b) 48 horas",
      explanation:
        "O Art.º 15.º estabelece que o processo é sempre remetido oficiosamente para o órgão competente no prazo de 48 horas após a declaração de incompetência territorial.",
    },

    {
      id: "3.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 10.º, quem resolve os conflitos de competência entre tribunais e repartições fiscais, incluindo estâncias aduaneiras?",
      options: [
        { id: "a", label: "a)", text: "O Presidente da República" },
        { id: "b", label: "b)", text: "A Câmara do Cível e Administrativo Fiscal e Aduaneira do Tribunal Supremo" },
        { id: "c", label: "c)", text: "O Ministério Público, isoladamente" },
        { id: "d", label: "d)", text: "A Assembleia Nacional" },
      ],
      answer: "b",
      answerLabel: "b) A Câmara do Cível e Administrativo Fiscal e Aduaneira do Tribunal Supremo",
      explanation:
        "O Art.º 10.º, n.º 3, atribui à Câmara do Cível e Administrativo Fiscal e Aduaneira do Tribunal Supremo a resolução dos conflitos de competência entre tribunais e repartições fiscais ou outros órgãos de execução fiscal.",
    },
  ],
};

export default quizBloco3;