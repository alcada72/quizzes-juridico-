import { Quiz } from "@/constants/types";

const quizBloco2: Quiz = {
  id: "ef-bloco-02",
  title: "Regime Excepcional de Perdão de Dívidas Fiscais",
  subtitle: "Código das Execuções Fiscais — Lei n.º 20/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 7.º a 10.º da Lei",

  questions: [
    {
      id: "2.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 7.º, os contribuintes com dívidas de que impostos gozam de perdão, relativamente a factos tributários até 31 de Dezembro de 2012?",
      options: [
        { id: "a", label: "a)", text: "Apenas Imposto Predial Urbano" },
        {
          id: "b",
          label: "b)",
          text: "Imposto Industrial, IRT, Imposto de Selo, Imposto sobre Aplicação de Capitais e Imposto Predial Urbano",
        },
        { id: "c", label: "c)", text: "Apenas Imposto Industrial e IVA" },
        { id: "d", label: "d)", text: "Todos os impostos sem excepção" },
      ],
      answer: "b",
      answerLabel:
        "b) Imposto Industrial, IRT, Imposto de Selo, Imposto sobre Aplicação de Capitais e Imposto Predial Urbano",
      explanation:
        "O Art.º 7.º, n.º 1, concede perdão aos contribuintes com dívidas de Imposto Industrial, IRT, Imposto de Selo, Imposto sobre Aplicação de Capitais e Imposto Predial Urbano, relativas a factos tributários até 31 de Dezembro de 2012.",
    },

    {
      id: "2.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 7.º, n.º 3, a quais destas entidades NÃO se aplica o regime de perdão?",
      options: [
        { id: "a", label: "a)", text: "Pessoas singulares com dívidas de IRT" },
        { id: "b", label: "b)", text: "Empresas públicas e empresas privadas de capital maioritariamente público" },
        { id: "c", label: "c)", text: "Pequenas empresas de comércio a retalho" },
        { id: "d", label: "d)", text: "Contribuintes com dívidas de Imposto Predial Urbano" },
      ],
      answer: "b",
      answerLabel: "b) Empresas públicas e empresas privadas de capital maioritariamente público",
      explanation:
        "O Art.º 7.º, n.º 3, alínea b), exclui do regime de perdão as empresas públicas e as empresas privadas cujo capital seja maioritariamente público.",
    },

    {
      id: "2.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 8.º, alínea c), para beneficiar do perdão, o contribuinte deve apresentar comprovativo do pagamento dos impostos devidos a partir de que data?",
      options: [
        { id: "a", label: "a)", text: "1 de Janeiro de 2011" },
        { id: "b", label: "b)", text: "1 de Janeiro de 2012" },
        { id: "c", label: "c)", text: "1 de Janeiro de 2013" },
        { id: "d", label: "d)", text: "1 de Janeiro de 2014" },
      ],
      answer: "c",
      answerLabel: "c) 1 de Janeiro de 2013",
      explanation:
        "O Art.º 8.º, alínea c), exige a apresentação do comprovativo do pagamento dos impostos devidos a partir de 1 de Janeiro de 2013.",
    },

    {
      id: "2.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 10.º, qual é o carácter do regime excepcional de regularização tributária previsto na Lei?",
      options: [
        { id: "a", label: "a)", text: "Permanente e geral" },
        {
          id: "b",
          label: "b)",
          text: "Temporário e excepcional, limitado aos exercícios até 31 de Dezembro de 2012",
        },
        { id: "c", label: "c)", text: "Aplicável apenas a partir de 2015" },
        { id: "d", label: "d)", text: "Renovável anualmente" },
      ],
      answer: "b",
      answerLabel: "b) Temporário e excepcional, limitado aos exercícios até 31 de Dezembro de 2012",
      explanation:
        "O Art.º 10.º, n.º 1, qualifica o regime excepcional de regularização tributária como temporário e excepcional, limitado aos exercícios económicos até 31 de Dezembro de 2012.",
    },

    {
      id: "2.5",
      number: 5,
      type: "multiple_choice",
      question: "Nos termos do Art.º 9.º, o perdão previsto no Art.º 7.º abrange:",
      options: [
        { id: "a", label: "a)", text: "Apenas o capital da dívida" },
        {
          id: "b",
          label: "b)",
          text: "Os impostos devidos, incluindo juros de mora e compensatórios, custas administrativas e multas",
        },
        { id: "c", label: "c)", text: "Apenas as multas" },
        { id: "d", label: "d)", text: "Apenas os juros de mora" },
      ],
      answer: "b",
      answerLabel:
        "b) Os impostos devidos, incluindo juros de mora e compensatórios, custas administrativas e multas",
      explanation:
        "O Art.º 9.º, n.º 1, esclarece que o perdão dá lugar à dispensa dos impostos devidos, incluindo juros de mora e compensatórios, custas administrativas e multas.",
    },
  ],
};

export default quizBloco2;