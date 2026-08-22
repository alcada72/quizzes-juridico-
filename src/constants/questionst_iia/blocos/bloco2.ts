import { Quiz } from "@/constants/types";


const quizBloco2: Quiz = {
  id: "ii-bloco-02",
  title: "Regime Geral e Regime Simplificado",
  subtitle:
    "Imposto Industrial — Lei n.º 19/14, de 22 de Outubro, alterada pela Lei n.º 26/20, de 20 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 8.º a 10.º",

  questions: [
    {
      id: "2.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Na redacção original da Lei n.º 19/14, quantos grupos de tributação existiam no Imposto Industrial?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Um único grupo",
        },
        {
          id: "b",
          label: "b)",
          text: "Dois grupos: Grupo A e Grupo B",
        },
        {
          id: "c",
          label: "c)",
          text: "Três grupos: A, B e C",
        },
        {
          id: "d",
          label: "d)",
          text: "Quatro regimes, consoante o sector",
        },
      ],
      answer: "b",
      answerLabel: "b) Dois grupos: Grupo A e Grupo B",
      explanation:
        "Na redacção original da Lei n.º 19/14, o Imposto Industrial estava organizado em Grupo A e Grupo B.",
    },

    {
      id: "2.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Com as alterações da Lei n.º 26/20, os antigos Grupo A e Grupo B passaram a designar-se, respectivamente:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Regime Simplificado e Regime Geral",
        },
        {
          id: "b",
          label: "b)",
          text: "Regime Geral e Regime Simplificado de Tributação",
        },
        {
          id: "c",
          label: "c)",
          text: "Regime Especial e Regime Ordinário",
        },
        {
          id: "d",
          label: "d)",
          text: "Regime A2 e Regime B2",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Regime Geral e Regime Simplificado de Tributação",
      explanation:
        "A Lei n.º 26/20 reformulou a designação dos antigos grupos, passando o Grupo A a corresponder ao Regime Geral e o Grupo B ao Regime Simplificado de Tributação.",
    },

    {
      id: "2.3",
      number: 3,
      type: "multiple_choice",
      question:
        "De acordo com a Lei n.º 19/14, são obrigatoriamente tributadas pelo Grupo A as sociedades constituídas nos termos da Lei das Sociedades Comerciais com proveitos totais anuais de valor igual ou superior a:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz: 500.000.000,00 (quinhentos milhões de kwanzas)",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz: 2.000.000,00 (dois milhões de kwanzas)",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz: 50.000.000,00 (cinquenta milhões de kwanzas)",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz: 200.000.000,00 (duzentos milhões de kwanzas)",
        },
      ],
      answer: "a",
      answerLabel:
        "a) Kz: 500.000.000,00 (quinhentos milhões de kwanzas)",
      explanation:
        "Na redacção original da Lei n.º 19/14, o limite indicado para enquadramento obrigatório no Grupo A era de Kz 500.000.000,00 de proveitos totais anuais.",
    },

    {
      id: "2.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo a Lei n.º 26/20, uma das condições de exclusão do Regime Simplificado de Tributação é:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Ser uma empresa pública ou entidade equiparada",
        },
        {
          id: "b",
          label: "b)",
          text: "Ter menos de 10 trabalhadores",
        },
        {
          id: "c",
          label: "c)",
          text: "Estar sediada em Luanda",
        },
        {
          id: "d",
          label: "d)",
          text: "Ter mais de 3 anos de actividade",
        },
      ],
      answer: "a",
      answerLabel: "a) Ser uma empresa pública ou entidade equiparada",
      explanation:
        "A Lei n.º 26/20 estabelece determinadas entidades que ficam excluídas do Regime Simplificado, incluindo empresas públicas ou entidades equiparadas.",
    },

    {
      id: "2.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Com a entrada em vigor da Lei n.º 26/20, o que aconteceu aos artigos 8.º, 9.º e 10.º do Código do Imposto Industrial?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Foram mantidos sem alteração",
        },
        {
          id: "b",
          label: "b)",
          text: "Foram revogados",
        },
        {
          id: "c",
          label: "c)",
          text: "Passaram a aplicar-se apenas às seguradoras",
        },
        {
          id: "d",
          label: "d)",
          text: "Foram suspensos por 3 anos",
        },
      ],
      answer: "b",
      answerLabel: "b) Foram revogados",
      explanation:
        "A Lei n.º 26/20 revogou os artigos 8.º, 9.º e 10.º, que regulavam o enquadramento nos antigos Grupos A e B.",
    },
  ],
};

export default quizBloco2;