import { Quiz } from "../../types";

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
      type: "multiple_choice",
      question:
        "Em matéria tributária, qual das seguintes afirmações sobre a simulação e a divergência entre o preço real e o preço declarado está correcta?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "A simulação impede sempre a tributação do acto dissimulado e considera-se apenas o preço declarado.",
        },
        {
          id: "b",
          label: "b)",
          text: "A simulação de acto ou negócio jurídico não impede a tributação do acto dissimulado e, havendo divergência entre o preço real e o declarado, considera-se o preço mais alto.",
        },
        {
          id: "c",
          label: "c)",
          text: "A simulação só pode ser tributada quando autorizada pela Administração Tributária.",
        },
        {
          id: "d",
          label: "d)",
          text: "Havendo divergência, considera-se sempre o preço mais baixo para efeitos de tributação.",
        },
      ],
      answer: "b",
      answerLabel:
        "b) A simulação de acto ou negócio jurídico não impede a tributação do acto dissimulado e, havendo divergência entre o preço real e o declarado, considera-se o preço mais alto.",
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
      type: "multiple_choice",
      question:
        "Qual é o período de ausência do País que torna obrigatória a nomeação de representante fiscal por um contribuinte residente?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Mais de 30 dias corridos",
        },
        {
          id: "b",
          label: "b)",
          text: "Mais de 90 dias corridos",
        },
        {
          id: "c",
          label: "c)",
          text: "Mais de 180 dias corridos",
        },
        {
          id: "d",
          label: "d)",
          text: "Mais de 365 dias corridos",
        },
      ],
      answer: "c",
      answerLabel: "c) Mais de 180 dias corridos",
      explanation: "Art. 33.º/3.",
    },

    {
      id: "3.6",
      number: 6,
      type: "multiple_choice",
      question:
        "Quantos dias de permanência em Angola, num ano civil, tornam uma pessoa singular residente para efeitos fiscais?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Mais de 90 dias",
        },
        {
          id: "b",
          label: "b)",
          text: "Mais de 120 dias",
        },
        {
          id: "c",
          label: "c)",
          text: "Mais de 183 dias",
        },
        {
          id: "d",
          label: "d)",
          text: "Mais de 365 dias",
        },
      ],
      answer: "c",
      answerLabel: "c) Mais de 183 dias",
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
      type: "multiple_choice",
      question:
        "Qual das seguintes opções define correctamente um estabelecimento estável e apresenta exemplos de instalações fixas?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "É apenas a sede principal de uma empresa. Exemplos: residência do gerente, veículo e conta bancária.",
        },
        {
          id: "b",
          label: "b)",
          text: "É uma instalação fixa através da qual a empresa exerce toda ou parte da sua actividade. Exemplos: local de direcção, sucursal, escritório, fábrica ou oficina.",
        },
        {
          id: "c",
          label: "c)",
          text: "É qualquer actividade realizada temporariamente por uma empresa. Exemplos: reuniões, viagens e contratos.",
        },
        {
          id: "d",
          label: "d)",
          text: "É exclusivamente uma instalação destinada à extracção de petróleo ou gás.",
        },
      ],
      answer: "b",
      answerLabel:
        "b) É uma instalação fixa através da qual a empresa exerce toda ou parte da sua actividade. Exemplos: local de direcção, sucursal, escritório, fábrica ou oficina.",
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
      type: "multiple_choice",
      question:
        "O que é a substituição tributária e qual é o mecanismo mais comum pelo qual se efectiva?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "É a situação em que o imposto é eliminado para o contribuinte efectivo, sendo normalmente efectivada por isenção fiscal.",
        },
        {
          id: "b",
          label: "b)",
          text: "É a situação em que o imposto é exigido a pessoa diversa do contribuinte efectivo, sendo normalmente efectivada por retenção na fonte.",
        },
        {
          id: "c",
          label: "c)",
          text: "É a transferência de uma dívida tributária para outra Administração Tributária, sendo efectivada por compensação.",
        },
        {
          id: "d",
          label: "d)",
          text: "É a substituição de um imposto por outro, sendo efectivada por liquidação adicional.",
        },
      ],
      answer: "b",
      answerLabel:
        "b) É a situação em que o imposto é exigido a pessoa diversa do contribuinte efectivo, sendo normalmente efectivada por retenção na fonte.",
      explanation:
        "Na substituição tributária, o imposto é exigido a uma pessoa diferente do contribuinte efectivo. O mecanismo mais comum de efectivação é a retenção na fonte.",
    },
  ],
};

export default quizBloco3;