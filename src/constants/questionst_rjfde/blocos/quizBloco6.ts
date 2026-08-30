import { Quiz } from "@/constants/types";

const quizBloco6: Quiz = {
  id: "rjfde-bloco-06",
  title: "Fiscalização e Disposições Finais",
  subtitle:
    "Regime Jurídico das Facturas e Documentos Equivalentes — Decreto Presidencial n.º 292/18, de 3 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 17.º a 20.º",

  questions: [
    {
      id: "6.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 17.º, a quem compete a fiscalização das obrigações decorrentes da aplicação deste Diploma?",
      options: [
        { id: "a", label: "a)", text: "Ao Tribunal de Contas" },
        { id: "b", label: "b)", text: "À Administração Geral Tributária" },
        { id: "c", label: "c)", text: "Ao Banco Nacional de Angola" },
        { id: "d", label: "d)", text: "Ao Ministério Público" },
      ],
      answer: "b",
      answerLabel: "b) À Administração Geral Tributária",
      explanation:
        "O Art.º 17.º, n.º 1, atribui à Administração Geral Tributária a competência para a fiscalização das obrigações decorrentes da aplicação do Diploma.",
    },

    {
      id: "6.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 18.º, o que é revogado com a entrada em vigor deste Diploma?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Toda a legislação que contrarie o disposto no Diploma, nomeadamente o Decreto Presidencial n.º 149/13",
        },
        { id: "b", label: "b)", text: "Apenas o Código Geral Tributário" },
        { id: "c", label: "c)", text: "Nenhuma legislação anterior" },
        { id: "d", label: "d)", text: "O Regime Jurídico do IVA" },
      ],
      answer: "a",
      answerLabel:
        "a) Toda a legislação que contrarie o disposto no Diploma, nomeadamente o Decreto Presidencial n.º 149/13",
      explanation:
        "O Art.º 18.º revoga toda a legislação que contrarie o disposto no Diploma, nomeadamente o Decreto Presidencial n.º 149/13, de 1 de Outubro.",
    },

    {
      id: "6.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 19.º, quem resolve as dúvidas e omissões resultantes da interpretação e aplicação deste Diploma?",
      options: [
        { id: "a", label: "a)", text: "O Tribunal Constitucional" },
        { id: "b", label: "b)", text: "O Presidente da República" },
        { id: "c", label: "c)", text: "A Assembleia Nacional" },
        { id: "d", label: "d)", text: "A Administração Geral Tributária" },
      ],
      answer: "b",
      answerLabel: "b) O Presidente da República",
      explanation:
        "O Art.º 19.º atribui ao Presidente da República a resolução das dúvidas e omissões suscitadas pela interpretação e aplicação do Diploma.",
    },

    {
      id: "6.4",
      number: 4,
      type: "multiple_choice",
      question: "Segundo o Art.º 20.º, quando entra em vigor o Decreto Presidencial n.º 292/18?",
      options: [
        { id: "a", label: "a)", text: "Na data da sua publicação" },
        { id: "b", label: "b)", text: "30 dias após a sua publicação" },
        { id: "c", label: "c)", text: "60 dias após a sua publicação" },
        { id: "d", label: "d)", text: "120 dias após a sua publicação" },
      ],
      answer: "d",
      answerLabel: "d) 120 dias após a sua publicação",
      explanation:
        "O Art.º 20.º determina que o Decreto Presidencial entra em vigor 120 dias após a data da sua publicação.",
    },
  ],
};

export default quizBloco6;
