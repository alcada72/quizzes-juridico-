import { Quiz } from "@/constants/types";

export const quizBloco5: Quiz = {
  id: "cpt-bloco-05",
  title: "Recursos Judiciais e Meios Extraordinários",
  subtitle: "Código do Processo Tributário — Lei n.º 22/14, de 5 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 106.º a 125.º",

  questions: [
    {
      id: "5.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Qual é o prazo legal para interpor recurso ordinário da sentença final proferida pelo Tribunal Fiscal de 1.ª instância?",
      options: [
        { id: "a", label: "a)", text: "8 dias" },
        { id: "b", label: "b)", text: "15 dias" },
        { id: "c", label: "c)", text: "20 dias" },
        { id: "d", label: "d)", text: "30 dias" },
      ],
      answer: "b",
      answerLabel: "b) 15 dias",
      explanation:
        "O prazo de interposição de recurso ordinário quanto à sentença proferida é de 15 dias (Art.º 109.º, alínea a)).",
    },
    {
      id: "5.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Para os despachos interlocutórios e demais decisões que não a sentença final, qual é o prazo de interposição de recurso?",
      options: [
        { id: "a", label: "a)", text: "8 dias" },
        { id: "b", label: "b)", text: "10 dias" },
        { id: "c", label: "c)", text: "15 dias" },
        { id: "d", label: "d)", text: "30 dias" },
      ],
      answer: "a",
      answerLabel: "a) 8 dias",
      explanation:
        "O Art.º 109.º estabelece o prazo reduzido de 8 dias para recorrer de despachos no decurso do processo.",
    },
    {
      id: "5.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Qual é o prazo limite caducitário para a dedução do Recurso Extraordinário de Revisão (Art.º 122.º) contados do trânsito em julgado?",
      options: [
        { id: "a", label: "a)", text: "1 ano" },
        { id: "b", label: "b)", text: "2 anos" },
        { id: "c", label: "c)", text: "3 anos" },
        { id: "d", label: "d)", text: "5 anos" },
      ],
      answer: "c",
      answerLabel: "c) 3 anos",
      explanation:
        "A revisão extraordinária da decisão transitada em julgado não pode ser requerida decorridos mais de 3 anos sobre a sua consolidação.",
    },
    {
      id: "5.4",
      number: 4,
      type: "multiple_choice",
      question:
        "O recurso de decisão proferida em 1.ª instância sobe para que órgão jurisdicional competente?",
      options: [
        { id: "a", label: "a)", text: "Tribunal Constitucional" },
        { id: "b", label: "b)", text: "Câmara do Cível, Administrativo, Fiscal e Aduaneiro do Tribunal Supremo (ou Tribunal da Relação competente)" },
        { id: "c", label: "c)", text: "Conselho Superior da Magistratura Judicial" },
        { id: "d", label: "d)", text: "Direção Geral da Administração Tributária" },
      ],
      answer: "b",
      answerLabel: "b) Câmara do Cível, Administrativo, Fiscal e Aduaneiro do Tribunal Supremo (ou Tribunal da Relação competente)",
      explanation:
        "As decisões proferidas em matéria tributária são suscetíveis de reapreciação pelas instâncias superiores do foro judicial competente.",
    },
  ],
};
