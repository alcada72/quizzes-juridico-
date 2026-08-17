import { Quiz } from "../types";

const quizBloco3: Quiz = {
  id: "cgt-bloco-03",
  title: "Obrigação Tributária, Sujeitos e Domicílio Fiscal",
  subtitle: "Código Geral Tributário — Lei n.º 21/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 24.º a 41.º",

  questions: [
    {
      id: "3.1",
      number: 1,
      type: "true_false",
      question:
        "A obrigação tributária constitui-se com a verificação dos factos que definem a incidência do respectivo tributo.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 24.º.",
    },

    {
      id: "3.2",
      number: 2,
      type: "open",
      question:
        "O que é a 'simulação' em matéria tributária e qual a regra em caso de divergência entre o preço real e o preço declarado no contrato (Art. 27.º)?",
      answer:
        "A simulação de acto ou negócio jurídico não impede a tributação do acto dissimulado. Havendo divergência entre o preço real e o preço declarado, a tributação recai sobre o preço mais alto.",
      answerLabel: "Resposta esperada",
      explanation:
        "A simulação não impede a tributação do acto dissimulado. Quando existe divergência entre o preço real e o preço declarado, considera-se o preço mais alto para efeitos de tributação.",
    },

    {
      id: "3.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Quem NÃO é sujeito passivo da relação tributária, segundo o Art. 28.º/5?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Quem procede à retenção na fonte",
        },
        {
          id: "b",
          label: "b)",
          text: "O contribuinte directo",
        },
        {
          id: "c",
          label: "c)",
          text: "O responsável tributário",
        },
        {
          id: "d",
          label: "d)",
          text: "O substituto tributário",
        },
      ],
      answer: "a",
      answerLabel: "a) Quem procede à retenção na fonte",
      explanation:
        "Segundo o material fornecido, quem procede à retenção na fonte não é considerado sujeito passivo da relação tributária, nos termos indicados no Art. 28.º/5.",
    },

    {
      id: "3.4",
      number: 4,
      type: "true_false",
      question:
        "Nas sociedades civis não constituídas sob forma comercial, a obrigação do imposto recai directamente sobre cada sócio, na medida da sua participação nos lucros.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 29.º/1.",
    },

    {
      id: "3.5",
      number: 5,
      type: "open",
      question:
        "Qual o prazo, em dias, que um contribuinte residente tem de estar ausente do País para se tornar obrigatória a nomeação de representante fiscal?",
      answer: "Mais de 180 dias corridos.",
      answerLabel: "Mais de 180 dias corridos",
      explanation: "Art. 33.º/3.",
    },

    {
      id: "3.6",
      number: 6,
      type: "open",
      question:
        "Quantos dias de permanência em Angola, num ano civil, tornam uma pessoa singular residente para efeitos fiscais?",
      answer: "Mais de 183 dias, seguidos ou interpolados.",
      answerLabel: "Mais de 183 dias",
      explanation:
        "A permanência em Angola por mais de 183 dias, seguidos ou interpolados, num ano civil, determina a residência fiscal da pessoa singular, segundo o material fornecido.",
    },

    {
      id: "3.7",
      number: 7,
      type: "multiple_choice",
      question:
        "O prazo para comunicar a alteração de residência ou domicílio à Administração Tributária é de:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "15 dias",
        },
        {
          id: "b",
          label: "b)",
          text: "30 dias",
        },
        {
          id: "c",
          label: "c)",
          text: "45 dias",
        },
        {
          id: "d",
          label: "d)",
          text: "60 dias",
        },
      ],
      answer: "b",
      answerLabel: "b) 30 dias",
      explanation: "O prazo indicado é de 30 dias.",
    },

    {
      id: "3.8",
      number: 8,
      type: "open",
      question:
        "Define 'estabelecimento estável' segundo o Art. 39.º e dá três exemplos das instalações fixas mencionadas.",
      answer:
        "É uma instalação fixa através da qual a empresa exerce toda ou parte da sua actividade. Exemplos: local de direcção, sucursal, escritório, fábrica, oficina, mina, poço de petróleo ou gás.",
      answerLabel: "Resposta esperada",
      explanation:
        "O estabelecimento estável corresponde a uma instalação fixa através da qual uma empresa exerce toda ou parte da sua actividade. Exemplos incluem local de direcção, sucursal, escritório, fábrica, oficina e instalações de extracção de recursos naturais.",
    },

    {
      id: "3.9",
      number: 9,
      type: "true_false",
      question:
        "Uma obra de construção só é considerada estabelecimento estável se a sua duração ultrapassar 90 dias num período de 12 meses.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 39.º/2 a).",
    },

    {
      id: "3.10",
      number: 10,
      type: "open",
      question:
        "O que é a 'substituição tributária' (Art. 45.º) e qual o mecanismo mais comum pelo qual se efectiva?",
      answer:
        "É a situação em que o imposto é exigido a pessoa diversa do contribuinte efectivo. Em regra, efectiva-se por retenção na fonte.",
      answerLabel: "Resposta esperada",
      explanation:
        "Na substituição tributária, o imposto é exigido a uma pessoa diferente do contribuinte efectivo. O mecanismo mais comum de efectivação é a retenção na fonte.",
    },
  ],
};

export default quizBloco3;
