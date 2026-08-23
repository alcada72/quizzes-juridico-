import { Quiz } from "@/constants/types";

const quizBloco6: Quiz = {
  id: "ivm-bloco-06",
  title: "Fiscalização e Disposições Finais",
  subtitle:
    "Imposto sobre os Veículos Motorizados — Lei n.º 24/20, de 13 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 10.º a 15.º",

  questions: [
    {
      id: "6.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o art. 10.º, n.º 1, além da generalidade das autoridades, que entidades têm competência especial de fiscalização do IVM?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas os Governos Provinciais",
        },
        {
          id: "b",
          label: "b)",
          text:
            "O Serviço competente da Polícia Nacional, a Administração Marítima Nacional e a Autoridade Aeronáutica",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas as seguradoras de veículos",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas os municípios costeiros",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O Serviço competente da Polícia Nacional, a Administração Marítima Nacional e a Autoridade Aeronáutica",
      explanation:
        "Art. 10.º, n.º 1: a fiscalização especial é partilhada entre a Polícia Nacional, a autoridade marítima e a autoridade aeronáutica.",
    },

    {
      id: "6.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o art. 10.º, n.º 2, o que não pode ser praticado sem prova do pagamento do imposto devido?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "A venda de combustível ao veículo",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Nenhum acto de registo ou licenciamento sobre veículos motorizados",
        },
        {
          id: "c",
          label: "c)",
          text: "A contratação de seguro automóvel",
        },
        {
          id: "d",
          label: "d)",
          text: "A circulação em vias municipais",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Nenhum acto de registo ou licenciamento sobre veículos motorizados",
      explanation:
        "Art. 10.º, n.º 2: o registo ou licenciamento fica condicionado à prova do pagamento do imposto.",
    },

    {
      id: "6.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo o art. 11.º, quem deve cooperar com a Administração Tributária no cumprimento da Lei do IVM?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas as seguradoras",
        },
        {
          id: "b",
          label: "b)",
          text: "As Administrações Municipais ou Autarquias Locais",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas os concessionários automóveis",
        },
        {
          id: "d",
          label: "d)",
          text: "Os bancos comerciais",
        },
      ],
      answer: "b",
      answerLabel:
        "b) As Administrações Municipais ou Autarquias Locais",
      explanation:
        "Art. 11.º: o dever de cooperação com a Administração Tributária é atribuído às Administrações Municipais e Autarquias Locais.",
    },

    {
      id: "6.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo o art. 12.º, em que casos os serviços competentes exigem prova do pagamento do imposto do último ano?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas nas fronteiras terrestres",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Nos casos de reemissão de documentos do veículo (Título de Propriedade, Livrete, Licença de Embarcação, Certificado de Navegabilidade)",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas na primeira matrícula do veículo",
        },
        {
          id: "d",
          label: "d)",
          text: "Nunca é exigida qualquer prova",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Nos casos de reemissão de documentos do veículo (Título de Propriedade, Livrete, Licença de Embarcação, Certificado de Navegabilidade)",
      explanation:
        "Art. 12.º: a prova do pagamento do último ano é exigida nos casos de reemissão dos documentos do veículo.",
    },

    {
      id: "6.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Segundo o art. 13.º, qual diploma de 1968 foi expressamente revogado pela Lei n.º 24/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "O Decreto Executivo n.º 7/98",
        },
        {
          id: "b",
          label: "b)",
          text:
            "O Diploma Legislativo n.º 3837, de 30 de Julho de 1968",
        },
        {
          id: "c",
          label: "c)",
          text: "O Decreto n.º 72/05",
        },
        {
          id: "d",
          label: "d)",
          text: "O Decreto Executivo n.º 519/18",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O Diploma Legislativo n.º 3837, de 30 de Julho de 1968",
      explanation:
        "Art. 13.º: a Lei n.º 24/20 revogou expressamente o Diploma Legislativo n.º 3837, de 30 de Julho de 1968, entre outros diplomas.",
    },

    {
      id: "6.6",
      number: 6,
      type: "multiple_choice",
      question:
        "Segundo o art. 14.º, a quem compete resolver as dúvidas e omissões resultantes da aplicação da Lei n.º 24/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Ao Ministério das Finanças",
        },
        {
          id: "b",
          label: "b)",
          text: "À Assembleia Nacional",
        },
        {
          id: "c",
          label: "c)",
          text: "Ao Tribunal Constitucional",
        },
        {
          id: "d",
          label: "d)",
          text: "À Administração Geral Tributária",
        },
      ],
      answer: "b",
      answerLabel:
        "b) À Assembleia Nacional",
      explanation:
        "Art. 14.º: compete à Assembleia Nacional resolver as dúvidas e omissões resultantes da aplicação da Lei.",
    },

    {
      id: "6.7",
      number: 7,
      type: "multiple_choice",
      question:
        "Segundo o art. 15.º, quando entrou em vigor a Lei n.º 24/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Na data da sua publicação",
        },
        {
          id: "b",
          label: "b)",
          text: "15 dias após a publicação",
        },
        {
          id: "c",
          label: "c)",
          text: "30 dias após a sua publicação",
        },
        {
          id: "d",
          label: "d)",
          text: "No ano fiscal seguinte",
        },
      ],
      answer: "c",
      answerLabel:
        "c) 30 dias após a sua publicação",
      explanation:
        "Art. 15.º: a Lei entrou em vigor 30 dias após a sua publicação, ocorrida em 13 de Julho de 2020.",
    },

    {
      id: "6.8",
      number: 8,
      type: "multiple_choice",
      question: "Quem promulgou a Lei n.º 24/20?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "José Eduardo dos Santos",
        },
        {
          id: "b",
          label: "b)",
          text: "Fernando da Piedade Dias dos Santos",
        },
        {
          id: "c",
          label: "c)",
          text: "João Manuel Gonçalves Lourenço",
        },
        {
          id: "d",
          label: "d)",
          text: "Agostinho Neto",
        },
      ],
      answer: "c",
      answerLabel:
        "c) João Manuel Gonçalves Lourenço",
      explanation:
        "A Lei n.º 24/20 foi promulgada pelo Presidente João Manuel Gonçalves Lourenço, em 30 de Junho de 2020.",
    },
  ],
};

export default quizBloco6;