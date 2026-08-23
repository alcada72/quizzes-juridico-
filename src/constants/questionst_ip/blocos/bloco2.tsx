import { Quiz } from "@/constants/types";

const quizBloco2: Quiz = {
  id: "ip-bloco-02",
  title: "Isenções",
  subtitle: "Código do Imposto Predial — Lei n.º 20/20, de 9 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 4.º e 5.º",

  questions: [
    {
      id: "2.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Qual das seguintes entidades está isenta de Imposto Predial, nos termos do Art.º 4.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Qualquer empresa privada com sede em Angola",
        },
        {
          id: "b",
          label: "b)",
          text: "O Estado e as Autarquias Locais",
        },
        {
          id: "c",
          label: "c)",
          text: "Qualquer cidadão nacional proprietário de um único imóvel",
        },
        {
          id: "d",
          label: "d)",
          text: "Bancos comerciais licenciados no País",
        },
      ],
      answer: "b",
      answerLabel: "b) O Estado e as Autarquias Locais",
      explanation:
        "O Estado e as Autarquias Locais encontram-se entre as entidades isentas de Imposto Predial previstas no Art.º 4.º.",
    },

    {
      id: "2.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 4.º, n.º 1, alínea e), está isenta de Imposto Predial a primeira transmissão onerosa de imóveis afectos à habitação própria e permanente, desde que o valor seja:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Igual ou inferior a Akz 1.000.000,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Igual ou inferior a Akz 3.000.000,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Igual ou inferior a Akz 5.000.000,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Sem qualquer limite de valor",
        },
      ],
      answer: "b",
      answerLabel: "b) Igual ou inferior a Akz 3.000.000,00",
      explanation:
        "A primeira transmissão onerosa de imóveis afectos à habitação própria e permanente beneficia da isenção quando o valor seja igual ou inferior a Akz 3.000.000,00.",
    },

    {
      id: "2.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Quais imóveis podem beneficiar de isenção específica mediante prova da situação jurídica, nos termos do Art.º 5.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Imóveis de construção precária e habitações sociais destinadas à habitação própria",
        },
        {
          id: "b",
          label: "b)",
          text: "Qualquer imóvel arrendado a terceiros",
        },
        {
          id: "c",
          label: "c)",
          text: "Imóveis pertencentes a sociedades comerciais",
        },
        {
          id: "d",
          label: "d)",
          text: "Terrenos para construção em zonas urbanas",
        },
      ],
      answer: "a",
      answerLabel:
        "a) Imóveis de construção precária e habitações sociais destinadas à habitação própria",
      explanation:
        "O Art.º 5.º prevê isenção específica para imóveis de construção precária e habitações sociais destinadas à habitação própria, mediante prova da situação jurídica.",
    },

    {
      id: "2.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Nos casos em que uma pessoa possua mais de um prédio rústico, como se aplica a isenção prevista na alínea f) do n.º 1 do Art.º 4.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Aplica-se a todos os prédios rústicos da pessoa",
        },
        {
          id: "b",
          label: "b)",
          text: "Aplica-se apenas a um dos imóveis",
        },
        {
          id: "c",
          label: "c)",
          text: "Não se aplica em caso algum",
        },
        {
          id: "d",
          label: "d)",
          text: "Aplica-se apenas ao imóvel de menor valor",
        },
      ],
      answer: "b",
      answerLabel: "b) Aplica-se apenas a um dos imóveis",
      explanation:
        "Quando uma pessoa possui mais de um prédio rústico, a isenção prevista aplica-se apenas a um dos imóveis.",
    },
  ],
};

export default quizBloco2;
