import { Quiz } from "@/constants/types";

const quizBloco3: Quiz = {
  id: "irt-bloco-03",
  title: "Isenções e Matéria Colectável",
  subtitle: "Imposto sobre os Rendimentos do Trabalho — Lei n.º 18/14",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 5.º a 9.º",

  questions: [
    {
      id: "3.1",
      number: 11,
      type: "multiple_choice",
      question:
        "Segundo o art. 5.º, os rendimentos dos deficientes físicos e mutilados de guerra são isentos quando o grau de invalidez ou incapacidade for igual ou superior a quê?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "30%",
        },
        {
          id: "b",
          label: "b)",
          text: "50%",
        },
        {
          id: "c",
          label: "c)",
          text: "66%",
        },
        {
          id: "d",
          label: "d)",
          text: "80%",
        },
      ],
      answer: "b",
      answerLabel: "b) 50%",
      explanation:
        "Art. 5.º, n.º 1, alínea d): grau de invalidez igual ou superior a 50%, devidamente comprovado.",
    },

    {
      id: "3.2",
      number: 12,
      type: "multiple_choice",
      question:
        "O art. 6.º (Isenções específicas, versão original) isentava os rendimentos de que grupo de pessoas?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Funcionários públicos em geral",
        },
        {
          id: "b",
          label: "b)",
          text: "Pessoas que prestem serviço militar e paramilitar nos órgãos de Defesa e Ordem Interna, apenas quanto a essa prestação",
        },
        {
          id: "c",
          label: "c)",
          text: "Trabalhadores domésticos",
        },
        {
          id: "d",
          label: "d)",
          text: "Membros de partidos políticos",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Pessoas que prestem serviço militar e paramilitar nos órgãos de Defesa e Ordem Interna, apenas quanto a essa prestação",
      explanation:
        "Art. 6.º: isenção específica e limitada aos rendimentos dessa prestação de serviço.",
    },

    {
      id: "3.3",
      number: 13,
      type: "multiple_choice",
      question:
        "Segundo o art. 7.º, n.º 2, que deduções se aplicam para apurar a matéria colectável do Grupo A?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Nenhuma dedução é permitida",
        },
        {
          id: "b",
          label: "b)",
          text: "Dedução das contribuições obrigatórias para a Segurança Social e das componentes remuneratórias não sujeitas ou isentas",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas despesas de saúde",
        },
        {
          id: "d",
          label: "d)",
          text: "Dedução de 50% do rendimento bruto",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Dedução das contribuições obrigatórias para a Segurança Social e das componentes remuneratórias não sujeitas ou isentas",
      explanation: "Art. 7.º, n.º 2, alíneas a) e b).",
    },

    {
      id: "3.4",
      number: 14,
      type: "multiple_choice",
      question:
        "Segundo o art. 8.º, n.º 1, alínea a), qual a percentagem do valor pago que corresponde à matéria colectável do Grupo B quando pago por entidades com contabilidade organizada?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "50%",
        },
        {
          id: "b",
          label: "b)",
          text: "60%",
        },
        {
          id: "c",
          label: "c)",
          text: "70%",
        },
        {
          id: "d",
          label: "d)",
          text: "100%",
        },
      ],
      answer: "c",
      answerLabel: "c) 70%",
      explanation:
        "Art. 8.º, n.º 1, alínea a): matéria colectável de 70% do valor pago.",
    },

    {
      id: "3.5",
      number: 15,
      type: "multiple_choice",
      question:
        "Segundo o art. 9.º, n.º 3 (redacção original), qual a consequência de incumprimento da Tabela dos Lucros Mínimos pelo contribuinte do Grupo C?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Isenção do imposto nesse exercício",
        },
        {
          id: "b",
          label: "b)",
          text: "Multa igual ao imposto apurado",
        },
        {
          id: "c",
          label: "c)",
          text: "Multa correspondente ao dobro do imposto apurado com base na Tabela",
        },
        {
          id: "d",
          label: "d)",
          text: "Suspensão da actividade",
        },
      ],
      answer: "c",
      answerLabel:
        "c) Multa correspondente ao dobro do imposto apurado com base na Tabela",
      explanation:
        "Art. 9.º, n.º 3: multa correspondente ao dobro do imposto apurado.",
    },
  ],
};

export default quizBloco3;
