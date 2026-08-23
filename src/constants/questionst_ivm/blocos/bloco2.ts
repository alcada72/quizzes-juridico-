import { Quiz } from "@/constants/types";

const quizBloco2: Quiz = {
  id: "ivm-bloco-02",
  title: "Incidência e Sujeitos Passivos",
  subtitle:
    "Imposto sobre os Veículos Motorizados — Lei n.º 24/20, de 13 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 3.º e 4.º",

  questions: [
    {
      id: "2.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o art. 3.º, quais categorias de veículos estão sujeitas à incidência objectiva do IVM?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas automóveis ligeiros",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Automóveis Ligeiros e Pesados; Motociclos, Ciclomotores, Triciclos e Quadriciclos; Aeronaves; e Embarcações",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas veículos terrestres com matrícula comercial",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas embarcações e aeronaves",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Automóveis Ligeiros e Pesados; Motociclos, Ciclomotores, Triciclos e Quadriciclos; Aeronaves; e Embarcações",
      explanation:
        "Art. 3.º, alíneas a) a d): abrange veículos terrestres, aeronaves e embarcações registados ou matriculados.",
    },

    {
      id: "2.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o art. 4.º, n.º 1, quem são os sujeitos passivos do IVM?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Os condutores habituais do veículo",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Os proprietários ou possuidores em cujo nome os veículos se encontram registados ou matriculados",
        },
        {
          id: "c",
          label: "c)",
          text: "As oficinas responsáveis pela manutenção do veículo",
        },
        {
          id: "d",
          label: "d)",
          text: "As seguradoras que cobrem o veículo",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Os proprietários ou possuidores em cujo nome os veículos se encontram registados ou matriculados",
      explanation:
        "Art. 4.º, n.º 1: sujeito passivo é o proprietário ou possuidor registado/matriculado.",
    },

    {
      id: "2.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo o art. 4.º, n.º 2, alínea a), quem se presume sujeito passivo solidário, respondendo pelo pagamento com direito de regresso sobre o titular?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "A pessoa que se encontre na posse efectiva do veículo",
        },
        {
          id: "b",
          label: "b)",
          text: "O fabricante do veículo",
        },
        {
          id: "c",
          label: "c)",
          text: "O agente das Finanças da área",
        },
        {
          id: "d",
          label: "d)",
          text: "O anterior proprietário, mesmo após a venda",
        },
      ],
      answer: "a",
      answerLabel:
        "a) A pessoa que se encontre na posse efectiva do veículo",
      explanation:
        "Art. 4.º, n.º 2, alínea a): responsabilidade solidária de quem detém a posse efectiva do veículo.",
    },

    {
      id: "2.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo o art. 4.º, n.º 2, alínea b), quem mais responde solidariamente pelo pagamento do imposto?",
      options: [
        {
          id: "a",
          label: "a)",
          text:
            "O adquirente do veículo cujo imposto não tenha sido pago em exercícios anteriores",
        },
        {
          id: "b",
          label: "b)",
          text: "Qualquer passageiro do veículo",
        },
        {
          id: "c",
          label: "c)",
          text: "O despachante aduaneiro",
        },
        {
          id: "d",
          label: "d)",
          text: "O anterior condutor autorizado",
        },
      ],
      answer: "a",
      answerLabel:
        "a) O adquirente do veículo cujo imposto não tenha sido pago em exercícios anteriores",
      explanation:
        "Art. 4.º, n.º 2, alínea b): o adquirente responde por imposto em dívida de exercícios anteriores.",
    },

    {
      id: "2.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Segundo o art. 4.º, n.º 3, quem é equiparado aos proprietários para efeitos do IVM?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas os herdeiros legítimos",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Locatários financeiros, adquirentes com reserva de propriedade e titulares de direitos de opção de compra por efeito do contrato de locação",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas as seguradoras do veículo",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas os concessionários de venda automóvel",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Locatários financeiros, adquirentes com reserva de propriedade e titulares de direitos de opção de compra por efeito do contrato de locação",
      explanation:
        "Art. 4.º, n.º 3: a equiparação inclui locação financeira, reserva de propriedade e opção de compra.",
    },
  ],
};

export default quizBloco2;