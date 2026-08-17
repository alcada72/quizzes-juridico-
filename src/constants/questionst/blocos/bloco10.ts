import type { Quiz } from "../types";

const quizBloco10: Quiz = {
  id: "cgt-bloco-10",
  title: "Transgressões Tributárias e Processo",
  subtitle: "Código Geral Tributário — Lei n.º 21/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 197.º a 229.º",

  questions: [
    {
      id: "10.1",
      number: 1,
      type: "multiple_choice",
      question:
        "A não entrega negligente de prestação tributária deduzida ou liquidada a terceiros é punida com multa entre:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "5% e 15%",
        },
        {
          id: "b",
          label: "b)",
          text: "10% e 30%",
        },
        {
          id: "c",
          label: "c)",
          text: "20% e 40%",
        },
        {
          id: "d",
          label: "d)",
          text: "30% e 50%",
        },
      ],
      answer: "b",
      answerLabel: "b) 10% e 30%",
      explanation: "Art. 197.º.",
    },

    {
      id: "10.2",
      number: 2,
      type: "true_false",
      question:
        "Em caso de dolo, os limites da multa por não entrega negligente de prestação elevam-se para o dobro.",
      answer: false,
      answerLabel: "Falso",
      explanation:
        "Segundo o material fornecido, a elevação para o dobro está prevista para o incumprimento doloso de determinados deveres acessórios, nos termos do Art. 202.º, e não especificamente para a situação descrita no Art. 197.º.",
    },

    {
      id: "10.3",
      number: 3,
      type: "open",
      question:
        "Qual o prazo, em dias, para o arguido deduzir defesa em processo de transgressão (Art. 211.º)?",
      answer: "20 dias.",
      answerLabel: "20 dias",
      explanation: "O arguido dispõe de 20 dias para deduzir defesa.",
    },

    {
      id: "10.4",
      number: 4,
      type: "true_false",
      question:
        "Podem ser arroladas até 3 testemunhas por cada infracção, não podendo o total ultrapassar 10, salvo se o número de infracções constantes da acusação for superior.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 212.º.",
    },

    {
      id: "10.5",
      number: 5,
      type: "open",
      question:
        "Qual o prazo para a instrução do processo de transgressão ser concluída?",
      answer: "30 dias, salvo motivo justificado.",
      answerLabel: "30 dias, salvo motivo justificado",
      explanation: "Art. 209.º.",
    },

    {
      id: "10.6",
      number: 6,
      type: "true_false",
      question:
        "O período de cobrança de tributos coincide sempre com o ano civil.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 219.º.",
    },

    {
      id: "10.7",
      number: 7,
      type: "open",
      question:
        "Em que língua devem ser escritas as declarações apresentadas pelos contribuintes?",
      answer: "Na língua oficial da República de Angola, ou seja, português.",
      answerLabel: "Língua oficial da República de Angola (português)",
      explanation: "As declarações devem ser apresentadas em português.",
    },

    {
      id: "10.8",
      number: 8,
      type: "open",
      question:
        "Segundo o Art. 229.º, em caso de lacuna nas relações tributárias, que normas se aplicam subsidiariamente?",
      answer:
        "Aplicam-se subsidiariamente as normas dos Códigos e demais legislação afim em vigor em Angola.",
      answerLabel: "Códigos e demais legislação afim em vigor em Angola",
      explanation: "Art. 229.º.",
    },
  ],
};

export default quizBloco10;
