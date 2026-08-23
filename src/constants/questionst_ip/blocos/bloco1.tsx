import { Quiz } from "@/constants/types";

const quizBloco1: Quiz = {
  id: "ip-bloco-01",
  title: "Fundamentos do Imposto Predial",
  subtitle: "Código do Imposto Predial — Lei n.º 20/20, de 9 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 2.º e 3.º",

  questions: [
    {
      id: "1.1",
      number: 1,
      type: "multiple_choice",
      question:
        'Segundo o Art.º 2.º do Código, o que se entende por "Matriz predial"?',
      options: [
        {
          id: "a",
          label: "a)",
          text: "O documento que comprova a propriedade de um imóvel",
        },
        {
          id: "b",
          label: "b)",
          text: "O tombo de todos os prédios de um município ou circunscrição administrativa",
        },
        {
          id: "c",
          label: "c)",
          text: "O valor do imóvel resultante da avaliação fiscal",
        },
        {
          id: "d",
          label: "d)",
          text: "O contrato de arrendamento registado na Repartição Fiscal",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O tombo de todos os prédios de um município ou circunscrição administrativa",
      explanation:
        "A matriz predial corresponde ao tombo de todos os prédios de um município ou circunscrição administrativa.",
    },

    {
      id: "1.2",
      number: 2,
      type: "multiple_choice",
      question: "Sobre que incide o Imposto Predial, nos termos do Art.º 3.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas sobre o valor patrimonial dos prédios urbanos",
        },
        {
          id: "b",
          label: "b)",
          text: "Apenas sobre as rendas de imóveis arrendados",
        },
        {
          id: "c",
          label: "c)",
          text: "Sobre o valor patrimonial ou da renda dos prédios urbanos e rústicos, e sobre as transmissões gratuitas ou onerosas de bens imóveis",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas sobre as transmissões onerosas de imóveis rústicos",
        },
      ],
      answer: "c",
      answerLabel:
        "c) Sobre o valor patrimonial ou da renda dos prédios urbanos e rústicos, e sobre as transmissões gratuitas ou onerosas de bens imóveis",
      explanation:
        "O Imposto Predial incide sobre o valor patrimonial ou da renda dos prédios urbanos e rústicos, bem como sobre as transmissões gratuitas ou onerosas de bens imóveis.",
    },

    {
      id: "1.3",
      number: 3,
      type: "multiple_choice",
      question:
        "A quem compete estabelecer, por diploma próprio, a regulamentação do Código do Imposto Predial?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "À Assembleia Nacional",
        },
        {
          id: "b",
          label: "b)",
          text: "Ao Titular do Poder Executivo",
        },
        {
          id: "c",
          label: "c)",
          text: "Às Autarquias Locais",
        },
        {
          id: "d",
          label: "d)",
          text: "Ao Tribunal Constitucional",
        },
      ],
      answer: "b",
      answerLabel: "b) Ao Titular do Poder Executivo",
      explanation:
        "Nos termos da Lei n.º 20/20, compete ao Titular do Poder Executivo estabelecer, por diploma próprio, a regulamentação do Código do Imposto Predial.",
    },

    {
      id: "1.4",
      number: 4,
      type: "multiple_choice",
      question:
        "O Imposto Predial constitui receita própria de quem, nos termos do Art.º 3.º, n.º 2?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Do Estado central, exclusivamente",
        },
        {
          id: "b",
          label: "b)",
          text: "Das Autarquias Locais ou dos Municípios em cujas circunscrições os prédios estejam situados",
        },
        {
          id: "c",
          label: "c)",
          text: "Do Instituto Geográfico e Cadastral de Angola",
        },
        {
          id: "d",
          label: "d)",
          text: "Da Administração Geral Tributária, a título de fundo próprio",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Das Autarquias Locais ou dos Municípios em cujas circunscrições os prédios estejam situados",
      explanation:
        "A receita do Imposto Predial pertence às Autarquias Locais ou aos Municípios em cujas circunscrições os prédios estejam situados.",
    },
  ],
};

export default quizBloco1;
