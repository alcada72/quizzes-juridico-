import type { Quiz } from "../types";

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
      type: "open",
      question:
        "Um contribuinte deveria ter pago um imposto de Kz 2.000.000,00 até 30 de Abril, mas só o Estado detectou e liquidou o atraso 3 meses depois. Considerando uma taxa de juros compensatórios de 1% ao mês, calcula o valor aproximado dos juros compensatórios devidos.",
      answer: "3% de Kz 2.000.000,00 = Kz 60.000,00.",
      answerLabel: "Kz 60.000,00 de juros compensatórios",
      explanation:
        "Cálculo simplificado: 1% × 3 meses = 3%. Assim, 3% de Kz 2.000.000,00 corresponde a Kz 60.000,00. O cálculo efectivo pode considerar a contagem exacta dos dias, conforme o Art. 51.º.",
    },

    {
      id: "11.2",
      number: 2,
      type: "open",
      question:
        "Um contribuinte tem uma dívida tributária de Kz 500.000,00 vencida há 2 anos, mas paga voluntariamente nos primeiros 5 dias úteis após o vencimento, relativamente a cada mensalidade em atraso. O que acontece à taxa de juros de mora aplicável a esse pagamento antecipado?",
      answer:
        "A taxa de juros de mora é reduzida para 50% do montante que seria devido.",
      answerLabel: "Redução para 50%",
      explanation:
        "Nos termos do Art. 52.º/6, o pagamento voluntário realizado nos primeiros cinco dias úteis posteriores ao vencimento beneficia da redução indicada.",
    },

    {
      id: "11.3",
      number: 3,
      type: "open",
      question:
        "A Empresa X não entregou ao Estado, no prazo de 90 dias após o termo do prazo legal, uma retenção na fonte de IRT de Kz 800.000,00 que havia efectivamente retido aos seus trabalhadores. Que crime tributário poderá estar em causa e qual a moldura penal aplicável?",
      answer:
        "Pode configurar abuso de confiança fiscal, previsto no Art. 179.º. Considerando o valor indicado, superior ao limiar de Kz 500.000,00, a moldura penal é de prisão de 6 meses a 3 anos ou multa criminal correspondente.",
      answerLabel:
        "Abuso de confiança fiscal — prisão de 6 meses a 3 anos ou multa",
      explanation:
        "A retenção foi efectivamente realizada, mas não foi entregue ao Estado dentro do prazo indicado. Segundo o material fornecido, o valor também ultrapassa o limiar indicado para o crime.",
    },

    {
      id: "11.4",
      number: 4,
      type: "open",
      question:
        "Um contribuinte pretende reclamar administrativamente da liquidação adicional de imposto que lhe foi notificada há 10 dias. Tem prazo? Qual o prazo máximo para a Administração decidir?",
      answer:
        "Sim. A reclamação deve ser apresentada no prazo de 15 dias contados da notificação. Como decorreram apenas 10 dias, ainda está dentro do prazo. A Administração deve decidir no prazo de 45 dias.",
      answerLabel: "Sim — 15 dias para reclamar e 45 dias para decidir",
      explanation:
        "Nos termos do Art. 129.º, o prazo para reclamação é de 15 dias e o prazo para decisão é de 45 dias.",
    },

    {
      id: "11.5",
      number: 5,
      type: "open",
      question:
        "Uma empresa foi alvo de uma acção de inspecção. O inspector lavrou auto de notícia por falta de entrega de IVA no valor de Kz 3.000.000,00. Se a empresa pagar a multa mínima aplicável dentro de 15 dias da notificação, que percentagem da multa mínima irá pagar?",
      answer: "20% do montante mínimo da multa aplicável.",
      answerLabel: "20% do montante mínimo",
      explanation:
        "Segundo o Art. 166.º/1, o pagamento decorrente de acção inspectiva dentro do prazo indicado permite a redução para 20% do montante mínimo aplicável.",
    },

    {
      id: "11.6",
      number: 6,
      type: "open",
      question:
        "Uma pessoa colectiva não fez a declaração de rendimentos há 6 anos. A Administração Tributária ainda pode liquidar o imposto? Fundamenta com o artigo aplicável.",
      answer:
        "Depende. O prazo geral de caducidade é de 5 anos, mas pode ser ampliado para 10 anos quando o retardamento da liquidação resultar de infracção. Assim, se não existir infracção que justifique a ampliação, o direito de liquidar poderá já ter caducado.",
      answerLabel:
        "Depende — regra geral de 5 anos, podendo ampliar para 10 anos",
      explanation:
        "O Art. 62.º estabelece o prazo geral de caducidade e prevê a ampliação quando o retardamento da liquidação resultar de infracção.",
    },

    {
      id: "11.7",
      number: 7,
      type: "open",
      question:
        "Explica, com as tuas palavras, por que motivo o CGT distingue caducidade (prazo para liquidar) de prescrição (prazo para cobrar), e qual a razão prática dessa distinção para a segurança jurídica do contribuinte.",
      answer:
        "A caducidade limita o período durante o qual a Administração Tributária pode liquidar ou fixar a dívida tributária. A prescrição limita o período durante o qual pode cobrar uma dívida que já foi liquidada. A distinção impede que o contribuinte fique indefinidamente sujeito à actuação da Administração, promovendo segurança e certeza jurídica.",
      answerLabel: "Resposta livre",
      explanation:
        "Pontos essenciais: caducidade está relacionada com o direito de liquidar; prescrição está relacionada com o direito de cobrar uma dívida já liquidada. Ambas estabelecem limites temporais à actuação da Administração Tributária.",
    },
  ],
};

export default quizBloco11;
