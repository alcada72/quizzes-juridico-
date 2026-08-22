import { Quiz } from "@/constants/types";

const quizBloco4: Quiz = {
  id: "ii-bloco-04",
  title: "Taxas do Imposto Industrial",
  subtitle:
    "Imposto Industrial — Lei n.º 19/14, de 22 de Outubro, alterada pela Lei n.º 26/20, de 20 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 64.º, 66.º, 67.º e 73.º",

  questions: [
    {
      id: "4.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo a redacção original da Lei n.º 19/14 (artigo 64.º), qual era a taxa geral do Imposto Industrial?",
      options: [
        { id: "a", label: "a)", text: "25%" },
        { id: "b", label: "b)", text: "30%" },
        { id: "c", label: "c)", text: "35%" },
        { id: "d", label: "d)", text: "15%" },
      ],
      answer: "b",
      answerLabel: "b) 30%",
      explanation: "A taxa geral original era de 30%.",
    },

    {
      id: "4.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Com a Lei n.º 26/20, a taxa geral do Imposto Industrial passou a ser:",
      options: [
        { id: "a", label: "a)", text: "35%" },
        { id: "b", label: "b)", text: "30%" },
        { id: "c", label: "c)", text: "25%" },
        { id: "d", label: "d)", text: "20%" },
      ],
      answer: "c",
      answerLabel: "c) 25%",
      explanation:
        "A Lei n.º 26/20 reduziu a taxa geral do Imposto Industrial para 25%.",
    },

    {
      id: "4.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Na redacção original da Lei n.º 19/14, os rendimentos provenientes exclusivamente da actividade das explorações agrícolas, aquícolas, avícolas, pecuárias, piscatórias e silvícolas eram tributados à taxa única de:",
      options: [
        { id: "a", label: "a)", text: "6,5%" },
        { id: "b", label: "b)", text: "10%" },
        { id: "c", label: "c)", text: "15%" },
        { id: "d", label: "d)", text: "2%" },
      ],
      answer: "c",
      answerLabel: "c) 15%",
      explanation:
        "Na redacção original, a taxa reduzida para estas actividades era de 15%.",
    },

    {
      id: "4.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Com a Lei n.º 26/20, essa taxa reduzida para actividades agrícolas, aquícolas, apícolas, avícolas, pecuárias, piscatórias e silvícolas, excepto exploração da madeira, passou a ser de:",
      options: [
        { id: "a", label: "a)", text: "15%" },
        { id: "b", label: "b)", text: "10%" },
        { id: "c", label: "c)", text: "5%" },
        { id: "d", label: "d)", text: "12,5%" },
      ],
      answer: "b",
      answerLabel: "b) 10%",
      explanation:
        "A Lei n.º 26/20 reduziu esta taxa para 10%, nos termos indicados na questão.",
    },

    {
      id: "4.5",
      number: 5,
      type: "multiple_choice",
      question:
        "A Lei n.º 26/20 introduziu uma taxa única de 35% aplicável aos rendimentos de que sectores?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Agrícola e pecuário",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Bancário, seguros, telecomunicações e empresas petrolíferas angolanas",
        },
        {
          id: "c",
          label: "c)",
          text: "Comércio a retalho em geral",
        },
        {
          id: "d",
          label: "d)",
          text: "Ensino e saúde",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Bancário, seguros, telecomunicações e empresas petrolíferas angolanas",
      explanation:
        "A Lei n.º 26/20 estabeleceu uma taxa única de 35% para os sectores indicados.",
    },

    {
      id: "4.6",
      number: 6,
      type: "multiple_choice",
      question:
        "Qual é a taxa de liquidação provisória de imposto sobre as vendas do 1.º semestre do exercício?",
      options: [
        { id: "a", label: "a)", text: "6,5%" },
        { id: "b", label: "b)", text: "15%" },
        { id: "c", label: "c)", text: "2%" },
        { id: "d", label: "d)", text: "25%" },
      ],
      answer: "c",
      answerLabel: "c) 2%",
      explanation:
        "A liquidação provisória sobre as vendas do primeiro semestre é calculada à taxa de 2%.",
    },

    {
      id: "4.7",
      number: 7,
      type: "multiple_choice",
      question:
        "Qual é a taxa aplicável à liquidação provisória (retenção na fonte) sobre prestações de serviços?",
      options: [
        { id: "a", label: "a)", text: "2%" },
        { id: "b", label: "b)", text: "6,5%" },
        { id: "c", label: "c)", text: "10%" },
        { id: "d", label: "d)", text: "30%" },
      ],
      answer: "b",
      answerLabel: "b) 6,5%",
      explanation:
        "A taxa de retenção na fonte sobre prestações de serviços é de 6,5%.",
    },

    {
      id: "4.8",
      number: 8,
      type: "multiple_choice",
      question:
        "Segundo a Lei n.º 19/14, qual era a taxa de tributação liberatória incidente sobre serviços acidentais prestados por pessoas colectivas sem sede, estabelecimento estável ou direcção efectiva em Angola?",
      options: [
        { id: "a", label: "a)", text: "2%" },
        { id: "b", label: "b)", text: "6,5%" },
        { id: "c", label: "c)", text: "15%" },
        { id: "d", label: "d)", text: "30%" },
      ],
      answer: "b",
      answerLabel: "b) 6,5%",
      explanation:
        "Na redacção original da Lei n.º 19/14, a taxa indicada para serviços acidentais era de 6,5%.",
    },

    {
      id: "4.9",
      number: 9,
      type: "multiple_choice",
      question:
        "Com a Lei n.º 26/20, a taxa sobre a matéria colectável no regime especial de tributação de serviços acidentais passou a ser de:",
      options: [
        { id: "a", label: "a)", text: "6,5%" },
        { id: "b", label: "b)", text: "10%" },
        { id: "c", label: "c)", text: "15%" },
        { id: "d", label: "d)", text: "25%" },
      ],
      answer: "c",
      answerLabel: "c) 15%",
      explanation:
        "A Lei n.º 26/20 alterou a taxa dos serviços acidentais para 15%.",
    },
  ],
};

export default quizBloco4;