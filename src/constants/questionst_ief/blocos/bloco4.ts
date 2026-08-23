import { Quiz } from "@/constants/types";

const quizBloco4: Quiz = {
  id: "ef-bloco-04",
  title: "Prazos e Tramitação Processual",
  subtitle: "Código das Execuções Fiscais — Lei n.º 20/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 16.º, 18.º, 19.º e 22.º",

  questions: [
    {
      id: "4.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 16.º, n.º 1, em que prazo o órgão administrativo de execução fiscal deve concluir o processo, após a sua instauração?",
      options: [
        { id: "a", label: "a)", text: "6 meses" },
        { id: "b", label: "b)", text: "1 ano" },
        { id: "c", label: "c)", text: "2 anos" },
        { id: "d", label: "d)", text: "90 dias" },
      ],
      answer: "b",
      answerLabel: "b) 1 ano",
      explanation:
        "O Art.º 16.º, n.º 1, determina que o órgão administrativo de execução fiscal conclui o processo no prazo de um ano após a sua instauração, salvo manifesta impossibilidade.",
    },

    {
      id: "4.2",
      number: 2,
      type: "multiple_choice",
      question: "Nos termos do Art.º 19.º, qual é o prazo para a prática de actos de mero expediente?",
      options: [
        { id: "a", label: "a)", text: "5 dias" },
        { id: "b", label: "b)", text: "10 dias" },
        { id: "c", label: "c)", text: "15 dias" },
        { id: "d", label: "d)", text: "30 dias" },
      ],
      answer: "a",
      answerLabel: "a) 5 dias",
      explanation:
        "O Art.º 19.º, n.º 1, fixa em 5 dias o prazo para a prática dos actos de mero expediente.",
    },

    {
      id: "4.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 19.º, n.º 2, qual é o prazo para actos que não sejam de mero expediente e não ponham termo ao processo, em processos não urgentes?",
      options: [
        { id: "a", label: "a)", text: "5 dias" },
        { id: "b", label: "b)", text: "10 dias" },
        { id: "c", label: "c)", text: "15 dias" },
        { id: "d", label: "d)", text: "20 dias" },
      ],
      answer: "c",
      answerLabel: "c) 15 dias",
      explanation:
        "O Art.º 19.º, n.º 2, fixa o prazo de 15 dias para os actos que não sejam de mero expediente nem ponham termo ao processo, reduzido a 10 dias nos processos urgentes.",
    },

    {
      id: "4.4",
      number: 4,
      type: "multiple_choice",
      question: "Nos termos do Art.º 18.º, quais destas diligências são consideradas urgentes?",
      options: [
        { id: "a", label: "a)", text: "A citação edital apenas" },
        {
          id: "b",
          label: "b)",
          text: "A penhora, a oposição à penhora e a reclamação dos actos do processo com fundamento em causa de suspensão",
        },
        { id: "c", label: "c)", text: "Apenas os recursos ordinários" },
        { id: "d", label: "d)", text: "Apenas a venda de bens" },
      ],
      answer: "b",
      answerLabel:
        "b) A penhora, a oposição à penhora e a reclamação dos actos do processo com fundamento em causa de suspensão",
      explanation:
        "O Art.º 18.º, n.º 2, considera urgentes a penhora, a oposição à penhora e a reclamação dos actos do processo de execução fiscal com fundamento em causa de suspensão.",
    },

    {
      id: "4.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Segundo o Art.º 22.º, quando os elementos são enviados por correio, considera-se a remessa efectuada em que data?",
      options: [
        { id: "a", label: "a)", text: "Na data de recepção pelo destinatário" },
        { id: "b", label: "b)", text: "Na data do registo postal" },
        { id: "c", label: "c)", text: "Na data de abertura da correspondência" },
        { id: "d", label: "d)", text: "5 dias após o envio" },
      ],
      answer: "b",
      answerLabel: "b) Na data do registo postal",
      explanation:
        "O Art.º 22.º, n.º 2, determina que, quando enviados por correio, os elementos se consideram remetidos na data do respectivo registo postal.",
    },
  ],
};

export default quizBloco4;