import { Quiz } from "@/constants/types";

export const quizBloco2: Quiz = {
  id: "cpt-bloco-02",
  title: "Prazos, Notificações e Nulidades Processuais",
  subtitle: "Código do Processo Tributário — Lei n.º 22/14, de 5 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 16.º a 46.º",

  questions: [
    {
      id: "2.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Como se contam os prazos processuais no Código do Processo Tributário?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Contam-se em dias úteis, suspendendo-se aos sábados, domingos e feriados",
        },
        {
          id: "b",
          label: "b)",
          text: "Contam-se de forma contínua, não se suspendendo nas férias judiciais, salvo disposição expressa",
        },
        {
          id: "c",
          label: "c)",
          text: "Suspendem-se obrigatoriamente durante todo o mês de Agosto e Dezembro",
        },
        {
          id: "d",
          label: "d)",
          text: "Iniciam no próprio dia da prática do ato ou notificação",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Contam-se de forma contínua, não se suspendendo nas férias judiciais, salvo disposição expressa",
      explanation:
        "Os prazos tributários têm natureza contínua e a regra geral é a não suspensão nas férias judiciais.",
    },
    {
      id: "2.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Quando uma notificação é enviada por carta registada com aviso de receção, em que momento se considera efetuada?",
      options: [
        { id: "a", label: "a)", text: "No dia da emissão do ofício pela Repartição Fiscal" },
        { id: "b", label: "b)", text: "Na data em que o aviso de receção é assinado" },
        { id: "c", label: "c)", text: "3 dias após a expedição, obrigatoriamente" },
        { id: "d", label: "d)", text: "15 dias após a publicação em Diário da República" },
      ],
      answer: "b",
      answerLabel: "b) Na data em que o aviso de receção é assinado",
      explanation:
        "A notificação por carta registada com AR presume-se realizada na data constante da assinatura do aviso de receção.",
    },
    {
      id: "2.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Nos termos do Art.º 45.º do CPT, qual dos seguintes factos constitui uma nulidade insanável?",
      options: [
        { id: "a", label: "a)", text: "O uso de papel não timbrado na petição inicial" },
        { id: "b", label: "b)", text: "A falta de notificação do despacho de admissão do recurso" },
        { id: "c", label: "c)", text: "A não indicação do número de telefone do mandatário" },
        { id: "d", label: "d)", text: "A entrega da petição fora do horário de expediente" },
      ],
      answer: "b",
      answerLabel: "b) A falta de notificação do despacho de admissão do recurso",
      explanation:
        "A falta de notificação do despacho de admissão do recurso impede o contraditório e é uma nulidade insanável tipificada no Art.º 45.º.",
    },
    {
      id: "2.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Qual é o prazo máximo ordenador para a conclusão dos processos normais de 1.ª instância, conforme o Art.º 23.º?",
      options: [
        { id: "a", label: "a)", text: "6 meses" },
        { id: "b", label: "b)", text: "1 ano" },
        { id: "c", label: "c)", text: "2 anos" },
        { id: "d", label: "d)", text: "3 anos" },
      ],
      answer: "b",
      answerLabel: "b) 1 ano",
      explanation:
        "O prazo ordenador global para a conclusão dos processos tributários normais em 1.ª instância não deve ultrapassar 1 ano.",
    },
    {
      id: "2.5",
      number: 5,
      type: "multiple_choice",
      question:
        "E para os processos tributários urgentes, qual é o limite de duração em 1.ª instância?",
      options: [
        { id: "a", label: "a)", text: "30 dias" },
        { id: "b", label: "b)", text: "60 dias" },
        { id: "c", label: "c)", text: "90 dias" },
        { id: "d", label: "d)", text: "180 dias" },
      ],
      answer: "c",
      answerLabel: "c) 90 dias",
      explanation:
        "Os processos urgentes têm um prazo máximo de conclusão de 90 dias no tribunal de 1.ª instância.",
    },
  ],
};