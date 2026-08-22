import { Quiz } from "@/constants/types";


const quizBloco1: Quiz = {
  id: "ii-bloco-01",
  title: "Incidência, Sujeitos Passivos e Isenções",
  subtitle:
    "Imposto Industrial — Lei n.º 19/14, de 22 de Outubro, alterada pela Lei n.º 26/20, de 20 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 1.º a 7.º",

  questions: [
    {
      id: "1.1",
      number: 1,
      type: "multiple_choice",
      question: "Sobre que incide, em geral, o Imposto Industrial?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Sobre o património imobiliário das empresas",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Sobre os lucros imputáveis ao exercício de actividade de natureza comercial ou industrial, ainda que acidentais",
        },
        {
          id: "c",
          label: "c)",
          text: "Sobre o volume de vendas, independentemente do lucro",
        },
        {
          id: "d",
          label: "d)",
          text: "Sobre os rendimentos do trabalho dependente",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Sobre os lucros imputáveis ao exercício de actividade de natureza comercial ou industrial, ainda que acidentais",
      explanation:
        "O Imposto Industrial incide, em geral, sobre os lucros imputáveis ao exercício de actividade de natureza comercial ou industrial, ainda que acidentais.",
    },

    {
      id: "1.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Qual das seguintes actividades é expressamente considerada de natureza comercial ou industrial para efeitos do Código?",
      options: [
        {
          id: "a",
          label: "a)",
          text:
            "A actividade de mediação, agência ou representação na realização de contratos de qualquer natureza",
        },
        {
          id: "b",
          label: "b)",
          text: "A prestação de serviço doméstico",
        },
        {
          id: "c",
          label: "c)",
          text: "O arrendamento de habitação própria",
        },
        {
          id: "d",
          label: "d)",
          text: "A actividade sindical",
        },
      ],
      answer: "a",
      answerLabel:
        "a) A actividade de mediação, agência ou representação na realização de contratos de qualquer natureza",
      explanation:
        "A actividade de mediação, agência ou representação na realização de contratos de qualquer natureza é considerada actividade de natureza comercial ou industrial para efeitos do Código.",
    },

    {
      id: "1.3",
      number: 3,
      type: "multiple_choice",
      question:
        "As pessoas colectivas com sede ou direcção efectiva no estrangeiro, mas com estabelecimento estável em Angola, são tributadas em Imposto Industrial:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas pelos lucros obtidos fora de Angola",
        },
        {
          id: "b",
          label: "b)",
          text: "Pelos lucros imputáveis ao estabelecimento estável situado em Angola",
        },
        {
          id: "c",
          label: "c)",
          text: "Nunca, por não terem sede em Angola",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas se forem sociedades anónimas",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Pelos lucros imputáveis ao estabelecimento estável situado em Angola",
      explanation:
        "As pessoas colectivas com sede ou direcção efectiva no estrangeiro são tributadas pelos lucros imputáveis ao estabelecimento estável situado em Angola.",
    },

    {
      id: "1.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo o Código (Lei 19/14), quem pode conceder isenção do pagamento de Imposto Industrial, até 5 anos, a fundações, associações e cooperativas legalizadas e de utilidade pública?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "O Presidente da República, por decreto",
        },
        {
          id: "b",
          label: "b)",
          text:
            "O Titular do Departamento Ministerial que responde pelas Finanças Públicas, mediante parecer da Direcção Nacional de Impostos",
        },
        {
          id: "c",
          label: "c)",
          text: "A Assembleia Nacional, por lei",
        },
        {
          id: "d",
          label: "d)",
          text: "O Tribunal de Contas",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O Titular do Departamento Ministerial que responde pelas Finanças Públicas, mediante parecer da Direcção Nacional de Impostos",
      explanation:
        "A isenção pode ser concedida pelo Titular do Departamento Ministerial que responde pelas Finanças Públicas, mediante parecer da Direcção Nacional de Impostos, pelo período máximo previsto na lei.",
    },

    {
      id: "1.5",
      number: 5,
      type: "multiple_choice",
      question:
        "As companhias de navegação marítima ou aérea ficam isentas de Imposto Industrial em Angola:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Sempre, sem qualquer condição",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Se, no país da sua nacionalidade, as companhias angolanas de igual objecto social gozarem da mesma prerrogativa (reciprocidade)",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas se forem angolanas",
        },
        {
          id: "d",
          label: "d)",
          text: "Nunca, este imposto é sempre devido",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Se, no país da sua nacionalidade, as companhias angolanas de igual objecto social gozarem da mesma prerrogativa (reciprocidade)",
      explanation:
        "A isenção depende da existência de reciprocidade no país da nacionalidade da companhia.",
    },
  ],
};

export default quizBloco1;