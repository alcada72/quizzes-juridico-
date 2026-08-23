import { Quiz } from "@/constants/types";

const quizBloco10: Quiz = {
  id: "irt-bloco-10",
  title: "Tabela dos Lucros Mínimos",
  subtitle: "Imposto sobre os Rendimentos do Trabalho — Lei n.º 28/20",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Tabela dos Lucros Mínimos",

  questions: [
    {
      id: "10.1",
      number: 46,
      type: "multiple_choice",
      question:
        "A Tabela dos Lucros Mínimos anexa à Lei n.º 28/20 diferencia os valores de rendimento colectável presumido, do Grupo C, sobretudo em função de quê?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas da idade do contribuinte",
        },
        {
          id: "b",
          label: "b)",
          text: "Do tipo de actividade económica (classificação CAE) e da localização geográfica do estabelecimento",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas do género do titular da actividade",
        },
        {
          id: "d",
          label: "d)",
          text: "Do número de sócios da empresa",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Do tipo de actividade económica (classificação CAE) e da localização geográfica do estabelecimento",
      explanation:
        "A tabela organiza-se por secções/divisões/classes de actividade económica e distingue valores para Luanda/Benguela/Lobito/Huambo/Lubango/Cabinda, restantes sedes de província e outras localidades.",
    },

    {
      id: "10.2",
      number: 47,
      type: "multiple_choice",
      question:
        "Segundo a Tabela dos Lucros Mínimos, os valores presumidos de rendimento colectável são, em geral, mais elevados em:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Outras localidades, por serem mais isoladas",
        },
        {
          id: "b",
          label: "b)",
          text: "Restantes sedes de província",
        },
        {
          id: "c",
          label: "c)",
          text: "Luanda, Benguela, Lobito, Huambo, Lubango e Cabinda",
        },
        {
          id: "d",
          label: "d)",
          text: "São sempre iguais em todo o território",
        },
      ],
      answer: "c",
      answerLabel: "c) Luanda, Benguela, Lobito, Huambo, Lubango e Cabinda",
      explanation:
        "A tabela atribui valores mais altos aos grandes centros urbanos e económicos listados.",
    },
  ],
};

export default quizBloco10;
