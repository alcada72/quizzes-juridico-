import { Quiz } from "@/constants/types";

const quizBloco4: Quiz = {
  id: "ip-bloco-04",
  title: "Tributação sobre Transmissões",
  subtitle: "Código do Imposto Predial — Lei n.º 20/20, de 9 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 12.º, 13.º, 14.º e 15.º",

  questions: [
    {
      id: "4.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 13.º, quem são os sujeitos passivos do imposto nas transmissões onerosas?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Os vendedores dos bens imóveis",
        },
        {
          id: "b",
          label: "b)",
          text: "Os adquirentes dos bens imóveis",
        },
        {
          id: "c",
          label: "c)",
          text: "O Estado",
        },
        {
          id: "d",
          label: "d)",
          text: "A Repartição Fiscal",
        },
      ],
      answer: "b",
      answerLabel: "b) Os adquirentes dos bens imóveis",
      explanation:
        "Nos termos do Art.º 13.º, os adquirentes dos bens imóveis são os sujeitos passivos do imposto nas transmissões onerosas.",
    },

    {
      id: "4.2",
      number: 2,
      type: "multiple_choice",
      question:
        "De acordo com o Art.º 12.º, quais dos seguintes actos são considerados transmissões onerosas de imóveis para efeitos do Código?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas a compra e venda directa",
        },
        {
          id: "b",
          label: "b)",
          text: "Apenas a doação com encargos",
        },
        {
          id: "c",
          label: "c)",
          text: "As promessas de aquisição e alienação, arrendamentos de longo prazo e entradas de sócios com bens imóveis, entre outros",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas os contratos de arrendamento simples",
        },
      ],
      answer: "c",
      answerLabel:
        "c) As promessas de aquisição e alienação, arrendamentos de longo prazo e entradas de sócios com bens imóveis, entre outros",
      explanation:
        "O Art.º 12.º considera como transmissões onerosas diversos actos, incluindo promessas de aquisição e alienação, arrendamentos de longo prazo e entradas de sócios com bens imóveis.",
    },

    {
      id: "4.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 15.º, qual é o valor tributável na transmissão gratuita ou onerosa de um imóvel?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Sempre o valor declarado pelas partes, independentemente de outros critérios",
        },
        {
          id: "b",
          label: "b)",
          text: "O valor patrimonial constante da matriz, o determinado por avaliação (se prédio omisso) ou o valor declarado, consoante o que for maior",
        },
        {
          id: "c",
          label: "c)",
          text: "Sempre o valor mínimo entre o declarado e o patrimonial",
        },
        {
          id: "d",
          label: "d)",
          text: "O valor médio de mercado da região",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O valor patrimonial constante da matriz, o determinado por avaliação (se prédio omisso) ou o valor declarado, consoante o que for maior",
      explanation:
        "O valor tributável é determinado considerando o valor patrimonial constante da matriz, o valor determinado por avaliação quando o prédio esteja omisso, ou o valor declarado, prevalecendo o maior.",
    },

    {
      id: "4.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Como se considera constituída a obrigação tributária na sucessão por morte, nos termos do Art.º 14.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Na data do registo do imóvel",
        },
        {
          id: "b",
          label: "b)",
          text: "Na data da abertura da sucessão",
        },
        {
          id: "c",
          label: "c)",
          text: "Na data da partilha judicial",
        },
        {
          id: "d",
          label: "d)",
          text: "Na data da comunicação à Repartição Fiscal",
        },
      ],
      answer: "b",
      answerLabel: "b) Na data da abertura da sucessão",
      explanation:
        "Na sucessão por morte, a obrigação tributária considera-se constituída na data da abertura da sucessão.",
    },
  ],
};

export default quizBloco4;
