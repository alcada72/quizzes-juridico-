import { Quiz } from "../types";

const quizBloco1: Quiz = {
  id: "cgt-bloco-01",
  title: "Disposições Gerais e Definições",
  subtitle: "Código Geral Tributário — Lei n.º 21/14, de 22 de Outubro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 1.º a 15.º",

  questions: [
    {
      id: "1.1",
      number: 1,
      type: "true_false",
      question:
        "O CGT aplica-se às relações tributárias em geral, sem prejuízo do direito internacional a que Angola esteja vinculada.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 1.º/1.",
    },

    {
      id: "1.2",
      number: 2,
      type: "multiple_choice",
      question: "Qual das seguintes NÃO é uma definição do Art. 2.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Auto de notícia",
        },
        {
          id: "b",
          label: "b)",
          text: "Caducidade do direito à liquidação",
        },
        {
          id: "c",
          label: "c)",
          text: "Domicílio fiscal",
        },
        {
          id: "d",
          label: "d)",
          text: "Relação jurídica tributária",
        },
      ],
      answer: "c",
      answerLabel: "c) Domicílio fiscal",
      explanation:
        "O domicílio fiscal está previsto no Art. 36.º, e não no Art. 2.º.",
    },

    {
      id: "1.3",
      number: 3,
      type: "open",
      question:
        "Distingue, por palavras tuas, juros compensatórios, juros de mora e juros indemnizatórios, indicando a quem beneficia cada um.",
      answer:
        "Juros compensatórios: compensam o Estado por atraso imputável ao contribuinte. Juros de mora: compensam o atraso no pagamento após o vencimento. Juros indemnizatórios: compensam o contribuinte por erro da Administração Tributária.",
      answerLabel: "Resposta esperada",
      explanation:
        "Os juros compensatórios e de mora estão relacionados com o atraso imputável ao contribuinte, enquanto os juros indemnizatórios visam compensar o contribuinte por erro da Administração Tributária.",
    },

    {
      id: "1.4",
      number: 4,
      type: "true_false",
      question:
        "Os impostos são tributos unilaterais, cuja obrigação não constitui contrapartida de qualquer prestação individualizada do Estado.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation:
        "Os impostos têm natureza unilateral e não constituem contrapartida de uma prestação individualizada do Estado.",
    },

    {
      id: "1.5",
      number: 5,
      type: "true_false",
      question:
        "As taxas são tributos exigidos em regime de direito público em razão da prestação individualizada e concreta de um serviço público, utilização de bem do domínio público ou remoção de um obstáculo jurídico.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation:
        "As taxas estão associadas a uma prestação individualizada, utilização de bem do domínio público ou remoção de um obstáculo jurídico.",
    },

    {
      id: "1.6",
      number: 6,
      type: "open",
      question:
        "Enumera as duas categorias de contribuições especiais previstas no Art. 3.º e dá um exemplo de cada.",
      answer:
        "Contribuições de melhoria ou de maior desgaste, relacionadas com obras públicas, e contribuições financeiras ou parafiscais.",
      answerLabel: "Resposta esperada",
      explanation:
        "As duas categorias são as contribuições de melhoria/maior desgaste e as contribuições financeiras/parafiscais.",
    },

    {
      id: "1.7",
      number: 7,
      type: "multiple_choice",
      question: "Consideram-se tributos estaduais os que:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "São cobrados pelos municípios",
        },
        {
          id: "b",
          label: "b)",
          text: "Têm como sujeito activo a administração directa do Estado ou órgão de administração indirecta",
        },
        {
          id: "c",
          label: "c)",
          text: "Resultam de contribuições para a segurança social",
        },
        {
          id: "d",
          label: "d)",
          text: "São instituídos por diploma legislativo presidencial",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Têm como sujeito activo a administração directa do Estado ou órgão de administração indirecta",
      explanation:
        "A alternativa b) corresponde à definição apresentada no material.",
    },

    {
      id: "1.8",
      number: 8,
      type: "open",
      question:
        "Segundo o Art. 4.º, quais são os quatro princípios da tributação?",
      answer: "Igualdade, legalidade fiscal, equivalência e justiça material.",
      answerLabel:
        "Igualdade, legalidade fiscal, equivalência e justiça material.",
      explanation:
        "Os quatro princípios indicados são igualdade, legalidade fiscal, equivalência e justiça material.",
    },

    {
      id: "1.9",
      number: 9,
      type: "true_false",
      question:
        "As normas tributárias sancionatórias podem ser retroactivas quando mais favoráveis aos contribuintes.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 8.º/3.",
    },

    {
      id: "1.10",
      number: 10,
      type: "open",
      question:
        "Segundo o Art. 8.º, o que não pode ser feito retroactivamente em matéria de incidência tributária?",
      answer:
        "Criar impostos, ampliar normas de incidência, agravar taxas ou revogar benefícios fiscais concedidos, salvo em caso de ilegalidade.",
      answerLabel: "Resposta esperada",
      explanation:
        "Não podem ser criados impostos, ampliadas normas de incidência, agravadas taxas ou revogados benefícios fiscais concedidos, salvo quando exista ilegalidade.",
    },

    {
      id: "1.11",
      number: 11,
      type: "true_false",
      question:
        "É proibida a integração analógica das normas de incidência, benefícios fiscais, taxas de impostos e das normas que definem infracções tributárias.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 6.º/2.",
    },

    {
      id: "1.12",
      number: 12,
      type: "open",
      question:
        "Como se determina o 'território nacional' para efeitos tributários, nos termos do Art. 9.º?",
      answer:
        "Inclui o território terrestre, águas interiores, mar territorial, zona contígua, zona económica exclusiva e plataforma continental.",
      answerLabel: "Resposta esperada",
      explanation:
        "Para efeitos tributários, o território nacional abrange o território terrestre, águas interiores, mar territorial, zona contígua, zona económica exclusiva e plataforma continental.",
    },

    {
      id: "1.13",
      number: 13,
      type: "multiple_choice",
      question: "A tributação indirecta prevista no Art. 12.º deve:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Onerar igualmente todos os bens de consumo",
        },
        {
          id: "b",
          label: "b)",
          text: "Desagravar os bens de primeira necessidade e onerar os de luxo, supérfluos e nocivos à saúde",
        },
        {
          id: "c",
          label: "c)",
          text: "Incidir apenas sobre o património",
        },
        {
          id: "d",
          label: "d)",
          text: "Ser eliminada progressivamente",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Desagravar os bens de primeira necessidade e onerar os de luxo, supérfluos e nocivos à saúde",
      explanation:
        "A tributação indirecta deve favorecer os bens de primeira necessidade e onerar os bens de luxo, supérfluos e nocivos à saúde.",
    },

    {
      id: "1.14",
      number: 14,
      type: "true_false",
      question:
        "A ilicitude na obtenção de rendimentos não obsta à aplicação das normas de incidência tributária.",
      answer: true,
      answerLabel: "Verdadeiro",
      explanation: "Art. 15.º.",
    },
  ],
};

export default quizBloco1;
