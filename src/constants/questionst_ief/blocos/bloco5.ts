import { Quiz } from "@/constants/types";

const quizBloco5: Quiz = {
  id: "ef-bloco-05",
  title: "Títulos Executivos e Nulidades",
  subtitle: "Código das Execuções Fiscais — Lei n.º 20/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 34.º, 35.º, 37.º, 38.º e 39.º",

  questions: [
    {
      id: "5.1",
      number: 1,
      type: "multiple_choice",
      question: "Segundo o Art.º 35.º, quais destes documentos podem servir de base à execução fiscal?",
      options: [
        { id: "a", label: "a)", text: "Facturas comerciais" },
        {
          id: "b",
          label: "b)",
          text: "Certidões de dívidas tributárias e certidões de decisões exequíveis de aplicação de multas",
        },
        { id: "c", label: "c)", text: "Contratos de arrendamento" },
        { id: "d", label: "d)", text: "Declarações de rendimento" },
      ],
      answer: "b",
      answerLabel:
        "b) Certidões de dívidas tributárias e certidões de decisões exequíveis de aplicação de multas",
      explanation:
        "O Art.º 35.º, n.º 1, elenca como títulos executivos as certidões de dívidas tributárias, as certidões de decisões exequíveis de aplicação de multas e outros títulos com força executiva atribuída por lei especial.",
    },

    {
      id: "5.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 37.º, n.º 2, qual das seguintes insuficiências do título executivo é insuprível?",
      options: [
        { id: "a", label: "a)", text: "A falta de menção da entidade emissora" },
        { id: "b", label: "b)", text: "A falta de assinatura da entidade emissora" },
        { id: "c", label: "c)", text: "A falta do domicílio do devedor" },
        { id: "d", label: "d)", text: "A falta do número de contribuinte" },
      ],
      answer: "b",
      answerLabel: "b) A falta de assinatura da entidade emissora",
      explanation:
        "O Art.º 37.º, n.º 2, alínea a), qualifica como insuprível a falta de assinatura da entidade emissora do título executivo, ao contrário das demais insuficiências, que podem ser corrigidas.",
    },

    {
      id: "5.3",
      number: 3,
      type: "multiple_choice",
      question: "Segundo o Art.º 38.º, qual das seguintes situações constitui nulidade insanável?",
      options: [
        { id: "a", label: "a)", text: "Pequenos erros ortográficos no processo" },
        { id: "b", label: "b)", text: "A falta de citação, quando possa prejudicar os direitos do executado" },
        { id: "c", label: "c)", text: "Atraso na entrega de documentos pelo exequente" },
        { id: "d", label: "d)", text: "O não pagamento de custas" },
      ],
      answer: "b",
      answerLabel: "b) A falta de citação, quando possa prejudicar os direitos do executado",
      explanation:
        "O Art.º 38.º, n.º 1, alínea a), qualifica como nulidade insanável a falta de citação sempre que possa prejudicar os direitos do executado ou de outros intervenientes processuais.",
    },

    {
      id: "5.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 34.º, n.º 2, as certidões de dívidas tributárias valem, para efeitos de cobrança coerciva, como:",
      options: [
        { id: "a", label: "a)", text: "Meros indícios de dívida" },
        { id: "b", label: "b)", text: "Sentença transitada em julgado" },
        { id: "c", label: "c)", text: "Presunção ilidível apenas" },
        { id: "d", label: "d)", text: "Prova documental sem força executiva" },
      ],
      answer: "b",
      answerLabel: "b) Sentença transitada em julgado",
      explanation:
        "O Art.º 34.º, n.º 2, atribui às certidões de dívidas tributárias força de título executivo, valendo, para efeitos de cobrança coerciva, como sentença transitada em julgado.",
    },

    {
      id: "5.5",
      number: 5,
      type: "multiple_choice",
      question: "Segundo o Art.º 39.º, quando se considera haver falta de citação?",
      options: [
        { id: "a", label: "a)", text: "Apenas quando o acto tiver sido omitido" },
        {
          id: "b",
          label: "b)",
          text: "Quando o acto tiver sido omitido, houver erro sobre a identidade do citado, ou a citação edital tenha sido indevidamente efectuada, entre outros",
        },
        { id: "c", label: "c)", text: "Nunca, salvo decisão judicial expressa" },
        { id: "d", label: "d)", text: "Apenas em processos de valor superior a Kz 5.000.000,00" },
      ],
      answer: "b",
      answerLabel:
        "b) Quando o acto tiver sido omitido, houver erro sobre a identidade do citado, ou a citação edital tenha sido indevidamente efectuada, entre outros",
      explanation:
        "O Art.º 39.º, n.º 1, elenca várias situações em que se considera haver falta de citação, incluindo a omissão do acto, o erro sobre a identidade do citado e a indevida citação edital.",
    },
  ],
};

export default quizBloco5;