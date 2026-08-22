import { Quiz } from "@/constants/types";

const quizBloco5: Quiz = {
  id: "ii-bloco-05",
  title: "Liquidação, Pagamento e Prazos",
  subtitle:
    "Imposto Industrial — Lei n.º 19/14, de 22 de Outubro, alterada pela Lei n.º 26/20, de 20 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 68.º a 70.º",

  questions: [
    {
      id: "5.1",
      number: 1,
      type: "multiple_choice",
      question:
        "O imposto relativo aos contribuintes dos Grupos A e B, na redacção original da Lei 19/14, era objecto de autoliquidação provisória e pagamento até ao final de que mês?",
      options: [
        { id: "a", label: "a)", text: "Junho" },
        { id: "b", label: "b)", text: "Julho" },
        { id: "c", label: "c)", text: "Agosto" },
        { id: "d", label: "d)", text: "Setembro" },
      ],
      answer: "c",
      answerLabel: "c) Agosto",
      explanation:
        "Na redacção original, a autoliquidação provisória e o pagamento tinham como prazo o final de Agosto.",
    },

    {
      id: "5.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o artigo 69.º da Lei n.º 19/14, a liquidação definitiva do Imposto Industrial devia efectuar-se, para os contribuintes do Grupo B, até:",
      options: [
        { id: "a", label: "a)", text: "30 de Abril de cada ano" },
        { id: "b", label: "b)", text: "31 de Maio de cada ano" },
        { id: "c", label: "c)", text: "31 de Março de cada ano" },
        { id: "d", label: "d)", text: "31 de Dezembro de cada ano" },
      ],
      answer: "a",
      answerLabel: "a) 30 de Abril de cada ano",
      explanation:
        "Para os contribuintes do Grupo B, a liquidação definitiva devia efectuar-se até 30 de Abril de cada ano.",
    },

    {
      id: "5.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Para os contribuintes do Grupo A, o prazo de liquidação definitiva era até:",
      options: [
        { id: "a", label: "a)", text: "30 de Abril de cada ano" },
        { id: "b", label: "b)", text: "31 de Maio de cada ano" },
        { id: "c", label: "c)", text: "30 de Junho de cada ano" },
        { id: "d", label: "d)", text: "15 de Fevereiro de cada ano" },
      ],
      answer: "b",
      answerLabel: "b) 31 de Maio de cada ano",
      explanation:
        "Na redacção original, o Grupo A tinha como prazo de liquidação definitiva o dia 31 de Maio.",
    },

    {
      id: "5.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Com a Lei n.º 26/20, o prazo de apresentação da Declaração Modelo 1 pelos contribuintes do regime geral passou a ser até ao último dia útil de:",
      options: [
        { id: "a", label: "a)", text: "Abril" },
        { id: "b", label: "b)", text: "Maio" },
        { id: "c", label: "c)", text: "Junho" },
        { id: "d", label: "d)", text: "Julho" },
      ],
      answer: "b",
      answerLabel: "b) Maio",
      explanation:
        "Com a Lei n.º 26/20, a Declaração Modelo 1 do regime geral deve ser apresentada até ao último dia útil de Maio.",
    },

    {
      id: "5.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Os contribuintes do regime simplificado de tributação que se substituam na emissão de facturas aos seus fornecedores, através de autofacturação, devem efectuar retenção na fonte não liberatória sobre o valor global da autofactura à taxa de:",
      options: [
        { id: "a", label: "a)", text: "6,5%" },
        { id: "b", label: "b)", text: "2%" },
        { id: "c", label: "c)", text: "15%" },
        { id: "d", label: "d)", text: "25%" },
      ],
      answer: "b",
      answerLabel: "b) 2%",
      explanation:
        "A taxa de retenção na fonte não liberatória aplicável à autofacturação é de 2%.",
    },
  ],
};

export default quizBloco5;