import type { Quiz } from "../../types";

const quizBloco11: Quiz = {
  id: "cgt-bloco-11",
  title: "Actividades Práticas: Casos e Cálculos",
  subtitle: "Código Geral Tributário — Lei n.º 21/14, de 22 de Outubro",
  description:
    "Aplica os conhecimentos adquiridos nos blocos anteriores através de cálculos, casos práticos e reflexão.",
  recommendation:
    "Tenta resolver cada caso sem consultar as respostas dos blocos anteriores.",
  articles: "Revisão dos Arts. 51.º, 52.º, 62.º, 129.º, 166.º e 179.º",

  questions: [
    {
      id: "11.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Um contribuinte deveria ter pago um imposto de Kz 2.000.000,00 até 30 de Abril, mas o Estado só detectou e liquidou o atraso 3 meses depois. Considerando uma taxa de juros compensatórios de 1% ao mês, qual é o valor aproximado dos juros compensatórios devidos?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 20.000,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 40.000,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 60.000,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 80.000,00",
        },
      ],
      answer: "c",
      answerLabel: "c) Kz 60.000,00",
      explanation:
        "Cálculo simplificado: 1% × 3 meses = 3%. Assim, 3% de Kz 2.000.000,00 corresponde a Kz 60.000,00. O cálculo efectivo pode considerar a contagem exacta dos dias, conforme o Art. 51.º.",
    },

    {
      id: "11.2",
      number: 2,
      type: "true_false",
      question:
        "Quando o pagamento voluntário é realizado nos primeiros cinco dias úteis posteriores ao vencimento, a taxa de juros de mora aplicável é reduzida para 50% do montante que seria normalmente devido.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation:
        "Nos termos do Art. 52.º/6, o pagamento voluntário realizado nos primeiros cinco dias úteis posteriores ao vencimento beneficia da redução indicada.",
    },

    {
      id: "11.3",
      number: 3,
      type: "multiple_choice",
      question:
        "A Empresa X não entregou ao Estado, no prazo de 90 dias após o termo do prazo legal, uma retenção na fonte de IRT de Kz 800.000,00 que havia efectivamente retido aos seus trabalhadores. Que crime tributário poderá estar em causa e qual a moldura penal aplicável?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Fraude fiscal — prisão até 6 meses ou multa",
        },
        {
          id: "b",
          label: "b)",
          text: "Abuso de confiança fiscal — prisão de 6 meses a 3 anos ou multa criminal correspondente",
        },
        {
          id: "c",
          label: "c)",
          text: "Desobediência fiscal — prisão de 1 a 2 anos, sem possibilidade de multa",
        },
        {
          id: "d",
          label: "d)",
          text: "Não existe qualquer crime, tratando-se apenas de uma infracção administrativa",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Abuso de confiança fiscal — prisão de 6 meses a 3 anos ou multa criminal correspondente",
      explanation:
        "A retenção foi efectivamente realizada, mas não foi entregue ao Estado dentro do prazo indicado. Segundo o material fornecido, o valor também ultrapassa o limiar indicado para o crime.",
    },

    {
      id: "11.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Um contribuinte pretende reclamar administrativamente da liquidação adicional de imposto que lhe foi notificada há 10 dias. Ainda pode apresentar a reclamação e qual é o prazo para a Administração decidir?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Não. O prazo já terminou aos 5 dias e a Administração não tem prazo para decidir.",
        },
        {
          id: "b",
          label: "b)",
          text: "Sim. Tem 15 dias para reclamar e a Administração deve decidir no prazo de 45 dias.",
        },
        {
          id: "c",
          label: "c)",
          text: "Sim. Tem 30 dias para reclamar e a Administração deve decidir no prazo de 60 dias.",
        },
        {
          id: "d",
          label: "d)",
          text: "Não. O prazo para reclamar é de 10 dias e a Administração dispõe de 90 dias para decidir.",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Sim. Tem 15 dias para reclamar e a Administração deve decidir no prazo de 45 dias.",
      explanation:
        "Nos termos do Art. 129.º, o prazo para reclamação é de 15 dias e o prazo para decisão é de 45 dias. Como decorreram apenas 10 dias, ainda está dentro do prazo.",
    },

    {
      id: "11.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Uma empresa foi alvo de uma acção de inspecção. O inspector lavrou auto de notícia por falta de entrega de IVA no valor de Kz 3.000.000,00. Se a empresa pagar a multa mínima aplicável dentro de 15 dias da notificação, que percentagem da multa mínima irá pagar?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "10%",
        },
        {
          id: "b",
          label: "b)",
          text: "20%",
        },
        {
          id: "c",
          label: "c)",
          text: "50%",
        },
        {
          id: "d",
          label: "d)",
          text: "75%",
        },
      ],
      answer: "b",
      answerLabel: "b) 20% do montante mínimo",
      explanation:
        "Segundo o Art. 166.º/1, o pagamento decorrente de acção inspectiva dentro do prazo indicado permite a redução para 20% do montante mínimo aplicável.",
    },

    {
      id: "11.6",
      number: 6,
      type: "true_false",
      question:
        "Se uma pessoa colectiva não fizer a declaração de rendimentos durante 6 anos, o direito da Administração Tributária de liquidar o imposto estará sempre caducado, porque o prazo geral de caducidade é de 5 anos e nunca pode ser ampliado.",
      answer: false,
      answerLabel: "Falso",
      explanation:
        "O Art. 62.º estabelece o prazo geral de caducidade de 5 anos, mas este pode ser ampliado para 10 anos quando o retardamento da liquidação resultar de infracção. Assim, é necessário verificar se existe infracção que justifique a ampliação.",
    },

    {
      id: "11.7",
      number: 7,
      type: "multiple_choice",
      question:
        "Qual das seguintes opções explica correctamente a diferença entre caducidade e prescrição no âmbito tributário?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "A caducidade limita o prazo para cobrar uma dívida já liquidada, enquanto a prescrição limita o prazo para criar novos impostos.",
        },
        {
          id: "b",
          label: "b)",
          text: "A caducidade limita o período para a Administração liquidar ou fixar a dívida tributária, enquanto a prescrição limita o período para cobrar uma dívida já liquidada.",
        },
        {
          id: "c",
          label: "c)",
          text: "Caducidade e prescrição são exactamente a mesma coisa e têm sempre o mesmo prazo.",
        },
        {
          id: "d",
          label: "d)",
          text: "A prescrição aplica-se apenas às infracções tributárias, enquanto a caducidade se aplica exclusivamente às multas.",
        },
      ],
      answer: "b",
      answerLabel:
        "b) A caducidade limita o período para a Administração liquidar ou fixar a dívida tributária, enquanto a prescrição limita o período para cobrar uma dívida já liquidada.",
      explanation:
        "A caducidade está relacionada com o direito de liquidar; a prescrição está relacionada com o direito de cobrar uma dívida já liquidada. Ambas estabelecem limites temporais à actuação da Administração Tributária e promovem segurança e certeza jurídica.",
    },
  ],
};

export default quizBloco11;