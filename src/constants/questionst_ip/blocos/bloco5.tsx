import { Quiz } from "@/constants/types";

const quizBloco5: Quiz = {
  id: "ip-bloco-05",
  title: "Liquidação, Pagamento, Prazos e Garantias",
  subtitle: "Código do Imposto Predial — Lei n.º 20/20, de 9 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 19.º, 21.º, 23.º, 29.º, 31.º, 32.º e 33.º",

  questions: [
    {
      id: "5.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 19.º, quando é efectuada a liquidação anual do Imposto Predial sobre a detenção de prédios?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Até ao último dia útil de Janeiro",
        },
        {
          id: "b",
          label: "b)",
          text: "Até ao último dia útil de Março do ano seguinte",
        },
        {
          id: "c",
          label: "c)",
          text: "No dia da transmissão do imóvel",
        },
        {
          id: "d",
          label: "d)",
          text: "No prazo de 90 dias após a compra",
        },
      ],
      answer: "b",
      answerLabel: "b) Até ao último dia útil de Março do ano seguinte",
      explanation:
        "A liquidação anual do Imposto Predial sobre a detenção de prédios é efectuada até ao último dia útil de Março do ano seguinte.",
    },

    {
      id: "5.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 23.º, o imposto sobre a detenção de imóvel pode ser pago em quantas prestações, a pedido do sujeito passivo?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "3 prestações",
        },
        {
          id: "b",
          label: "b)",
          text: "4 prestações",
        },
        {
          id: "c",
          label: "c)",
          text: "6 prestações consecutivas",
        },
        {
          id: "d",
          label: "d)",
          text: "12 prestações",
        },
      ],
      answer: "c",
      answerLabel: "c) 6 prestações consecutivas",
      explanation:
        "A pedido do sujeito passivo, o imposto sobre a detenção do imóvel pode ser pago em 6 prestações consecutivas.",
    },

    {
      id: "5.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Qual é o prazo geral para a apresentação da participação de transmissões gratuitas à Repartição Fiscal, após a abertura do testamento ou verificação do óbito, sem testamento, nos termos do Art.º 21.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "10 dias",
        },
        {
          id: "b",
          label: "b)",
          text: "30 dias",
        },
        {
          id: "c",
          label: "c)",
          text: "60 dias",
        },
        {
          id: "d",
          label: "d)",
          text: "90 dias",
        },
      ],
      answer: "c",
      answerLabel: "c) 60 dias",
      explanation:
        "O prazo geral para apresentação da participação de transmissões gratuitas é de 60 dias após a abertura do testamento ou a verificação do óbito, quando não exista testamento.",
    },

    {
      id: "5.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Qual é o prazo especial de caducidade no Imposto Predial sobre as Transmissões, segundo o Art.º 31.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "5 anos",
        },
        {
          id: "b",
          label: "b)",
          text: "10 anos",
        },
        {
          id: "c",
          label: "c)",
          text: "15 anos",
        },
        {
          id: "d",
          label: "d)",
          text: "20 anos",
        },
      ],
      answer: "b",
      answerLabel: "b) 10 anos",
      explanation:
        "O Art.º 31.º estabelece um prazo especial de caducidade de 10 anos no Imposto Predial sobre as Transmissões.",
    },

    {
      id: "5.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 32.º, sobre os bens transmitidos, o Estado goza de que tipo de privilégio?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Privilégio creditório de imobiliário com preferência a quaisquer créditos",
        },
        {
          id: "b",
          label: "b)",
          text: "Direito de preferência apenas sobre bens móveis",
        },
        {
          id: "c",
          label: "c)",
          text: "Nenhum privilégio especial",
        },
        {
          id: "d",
          label: "d)",
          text: "Privilégio limitado a 5 anos após a transmissão",
        },
      ],
      answer: "a",
      answerLabel:
        "a) Privilégio creditório de imobiliário com preferência a quaisquer créditos",
      explanation:
        "Sobre os bens transmitidos, o Estado goza de privilégio creditório imobiliário com preferência a quaisquer créditos.",
    },

    {
      id: "5.6",
      number: 6,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 29.º, o que devem exigir as conservatórias e os cartórios notariais como condição prévia à lavratura de instrumentos que operem transmissão de bens sujeitos a Imposto Predial?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "A certidão de nascimento das partes",
        },
        {
          id: "b",
          label: "b)",
          text: "O comprovativo do pagamento do imposto sobre a detenção e transmissão",
        },
        {
          id: "c",
          label: "c)",
          text: "A autorização da Assembleia Nacional",
        },
        {
          id: "d",
          label: "d)",
          text: "Nada é exigido antes do registo",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O comprovativo do pagamento do imposto sobre a detenção e transmissão",
      explanation:
        "As conservatórias e os cartórios notariais devem exigir o comprovativo do pagamento do imposto sobre a detenção e transmissão como condição prévia à lavratura dos instrumentos.",
    },

    {
      id: "5.7",
      number: 7,
      type: "multiple_choice",
      question: "A presente Lei n.º 20/20 entra em vigor:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Imediatamente após a sua publicação",
        },
        {
          id: "b",
          label: "b)",
          text: "15 dias após a sua publicação",
        },
        {
          id: "c",
          label: "c)",
          text: "30 dias após a sua publicação",
        },
        {
          id: "d",
          label: "d)",
          text: "No dia 1 de Janeiro do ano seguinte",
        },
      ],
      answer: "c",
      answerLabel: "c) 30 dias após a sua publicação",
      explanation:
        "A Lei n.º 20/20 entra em vigor 30 dias após a sua publicação.",
    },
  ],
};

export default quizBloco5;
