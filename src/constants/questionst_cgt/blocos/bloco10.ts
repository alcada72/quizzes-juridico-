import type { Quiz } from "../../types";

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
      type: "multiple_choice",
      question:
        "Qual é o prazo, em dias, para o arguido deduzir defesa em processo de transgressão, nos termos do Art. 211.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "10 dias",
        },
        {
          id: "b",
          label: "b)",
          text: "15 dias",
        },
        {
          id: "c",
          label: "c)",
          text: "20 dias",
        },
        {
          id: "d",
          label: "d)",
          text: "30 dias",
        },
      ],
      answer: "c",
      answerLabel: "c) 20 dias",
      explanation:
        "Nos termos do Art. 211.º, o arguido dispõe de 20 dias para deduzir defesa.",
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
      type: "multiple_choice",
      question:
        "Qual é o prazo para a instrução do processo de transgressão ser concluída?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "15 dias, sem qualquer possibilidade de prorrogação",
        },
        {
          id: "b",
          label: "b)",
          text: "20 dias, salvo decisão da Administração",
        },
        {
          id: "c",
          label: "c)",
          text: "30 dias, salvo motivo justificado",
        },
        {
          id: "d",
          label: "d)",
          text: "60 dias, em qualquer circunstância",
        },
      ],
      answer: "c",
      answerLabel: "c) 30 dias, salvo motivo justificado",
      explanation:
        "Nos termos do Art. 209.º, a instrução do processo de transgressão deve ser concluída no prazo de 30 dias, salvo motivo justificado.",
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
      type: "multiple_choice",
      question:
        "Em que língua devem ser escritas as declarações apresentadas pelos contribuintes?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Em qualquer língua escolhida pelo contribuinte",
        },
        {
          id: "b",
          label: "b)",
          text: "Na língua oficial da República de Angola, ou seja, português",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas em inglês ou português",
        },
        {
          id: "d",
          label: "d)",
          text: "Na língua materna do contribuinte",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Na língua oficial da República de Angola, ou seja, português",
      explanation:
        "As declarações apresentadas pelos contribuintes devem ser escritas na língua oficial da República de Angola, isto é, em português.",
    },

    {
      id: "10.8",
      number: 8,
      type: "multiple_choice",
      question:
        "Segundo o Art. 229.º, em caso de lacuna nas relações tributárias, que normas se aplicam subsidiariamente?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas as normas do Código Civil",
        },
        {
          id: "b",
          label: "b)",
          text: "Apenas os regulamentos emitidos pela Administração Tributária",
        },
        {
          id: "c",
          label: "c)",
          text: "As normas dos Códigos e demais legislação afim em vigor em Angola",
        },
        {
          id: "d",
          label: "d)",
          text: "Exclusivamente as normas internacionais de direito tributário",
        },
      ],
      answer: "c",
      answerLabel:
        "c) As normas dos Códigos e demais legislação afim em vigor em Angola",
      explanation:
        "Segundo o Art. 229.º, aplicam-se subsidiariamente as normas dos Códigos e demais legislação afim em vigor em Angola.",
    },
  ],
};

export default quizBloco10;