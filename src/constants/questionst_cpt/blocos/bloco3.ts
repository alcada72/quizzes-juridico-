import { Quiz } from "@/constants/types";

export const quizBloco3: Quiz = {
  id: "cpt-bloco-03",
  title: "Processo de Impugnação Judicial",
  subtitle: "Código do Processo Tributário — Lei n.º 22/14, de 5 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 60.º a 80.º",

  questions: [
    {
      id: "3.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Qual é o prazo geral para intentar a ação de Impugnação Judicial contra actos anuláveis?",
      options: [
        { id: "a", label: "a)", text: "15 dias" },
        { id: "b", label: "b)", text: "30 dias" },
        { id: "c", label: "c)", text: "60 dias" },
        { id: "d", label: "d)", text: "90 dias" },
      ],
      answer: "c",
      answerLabel: "c) 60 dias",
      explanation:
        "A impugnação judicial deduz-se, em regra, no prazo de 60 dias contados a partir da notificação ou do fim do prazo de pagamento voluntário.",
    },
    {
      id: "3.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Qual é o prazo legal para a impugnação baseada em fundamentos de NULIDADE do acto tributário?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Rigorosamente 60 dias, tal como nos actos anuláveis",
        },
        {
          id: "b",
          label: "b)",
          text: "Pode ser deduzida a todo o tempo, até ao termo do processo de execução fiscal",
        },
        {
          id: "c",
          label: "c)",
          text: "1 ano após a ocorrência da liquidação",
        },
        {
          id: "d",
          label: "d)",
          text: "5 anos contados do início do ano civil seguinte",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Pode ser deduzida a todo o tempo, até ao termo do processo de execução fiscal",
      explanation:
        "Sendo o acto nulo, a invocação da nulidade não caduca no prazo ordinário de 60 dias, podendo ocorrer a todo o tempo.",
    },
    {
      id: "3.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Na petição inicial de Impugnação Judicial, qual é o número máximo de testemunhas que o impugnante pode arrolar?",
      options: [
        { id: "a", label: "a)", text: "Até 3 por cada facto, num máximo global de 8" },
        { id: "b", label: "b)", text: "Até 5 por cada facto, num máximo global de 10" },
        { id: "c", label: "c)", text: "Até 2 por cada facto, num máximo global de 5" },
        { id: "d", label: "d)", text: "Sem limite estabelecido na lei" },
      ],
      answer: "a",
      answerLabel: "a) Até 3 por cada facto, num máximo global de 8",
      explanation:
        "Conforme estabelecido no Art.º 64.º, n.º 1, alínea e), o limite é de 3 por facto com limite máximo global de 8.",
    },
    {
      id: "3.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Onde deve ser apresentada a petição inicial de Impugnação Judicial?",
      options: [
        { id: "a", label: "a)", text: "Exclusivamente no Tribunal Supremo" },
        { id: "b", label: "b)", text: "No Tribunal Fiscal competente ou na Repartição Fiscal que praticou o acto" },
        { id: "c", label: "c)", text: "Na Conservatória do Registo Comercial" },
        { id: "d", label: "d)", text: "No Ministério das Finanças" },
      ],
      answer: "b",
      answerLabel: "b) No Tribunal Fiscal competente ou na Repartição Fiscal que praticou o acto",
      explanation:
        "A petição pode ser apresentada diretamente na secretaria do tribunal ou no serviço da Administração Tributária que emitiu o ato.",
    },
    {
      id: "3.5",
      number: 5,
      type: "multiple_choice",
      question:
        "A apresentação de impugnação judicial suspende automaticamente a execução do acto tributário (cobrança coativa)?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Sim, suspende sempre automaticamente de imediato",
        },
        {
          id: "b",
          label: "b)",
          text: "Não, salvo se for prestada garantia idónea ou requerida e concedida a sua dispensa",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Não, salvo se for prestada garantia idónea ou requerida e concedida a sua dispensa",
      explanation:
        "A suspensão da eficácia do ato liquidador exige a prestação de garantia bancária, caução ou hipoteca nos termos legais.",
    },
  ],
};
