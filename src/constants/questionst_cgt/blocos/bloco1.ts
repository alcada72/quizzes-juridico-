import { Quiz } from "../../types";

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
        { id: "a", label: "a)", text: "Auto de notícia" },
        { id: "b", label: "b)", text: "Caducidade do direito à liquidação" },
        { id: "c", label: "c)", text: "Domicílio fiscal" },
        { id: "d", label: "d)", text: "Relação jurídica tributária" },
      ],
      answer: "c",
      answerLabel: "c) Domicílio fiscal",
      explanation:
        "O domicílio fiscal está previsto no Art. 36.º, e não no Art. 2.º.",
    },

    {
      id: "1.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Qual das seguintes opções distingue correctamente os juros compensatórios, os juros de mora e os juros indemnizatórios?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Os juros compensatórios compensam o Estado por atraso imputável ao contribuinte; os juros de mora incidem pelo atraso no pagamento após o vencimento; e os juros indemnizatórios compensam o contribuinte por erro da Administração Tributária.",
        },
        {
          id: "b",
          label: "b)",
          text: "Os juros compensatórios compensam o contribuinte; os juros de mora compensam a Administração Tributária por erro; e os juros indemnizatórios são aplicados apenas às infracções tributárias.",
        },
        {
          id: "c",
          label: "c)",
          text: "Os três tipos de juros destinam-se exclusivamente a compensar o Estado pelo atraso do contribuinte.",
        },
        {
          id: "d",
          label: "d)",
          text: "Os juros compensatórios e indemnizatórios são sempre pagos pelo Estado, enquanto os juros de mora são pagos pelo contribuinte.",
        },
      ],
      answer: "a",
      answerLabel:
        "a) Os juros compensatórios compensam o Estado por atraso imputável ao contribuinte; os juros de mora incidem pelo atraso no pagamento após o vencimento; e os juros indemnizatórios compensam o contribuinte por erro da Administração Tributária.",
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
      type: "multiple_choice",
      question:
        "Quais são as duas categorias de contribuições especiais previstas no Art. 3.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Contribuições de melhoria ou de maior desgaste e contribuições financeiras ou parafiscais.",
        },
        {
          id: "b",
          label: "b)",
          text: "Contribuições municipais e contribuições estaduais.",
        },
        {
          id: "c",
          label: "c)",
          text: "Contribuições directas e contribuições indirectas.",
        },
        {
          id: "d",
          label: "d)",
          text: "Contribuições patrimoniais e contribuições sobre o rendimento.",
        },
      ],
      answer: "a",
      answerLabel:
        "a) Contribuições de melhoria ou de maior desgaste e contribuições financeiras ou parafiscais.",
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
      type: "multiple_choice",
      question:
        "Segundo o Art. 4.º, quais são os quatro princípios da tributação?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Igualdade, legalidade fiscal, equivalência e justiça material.",
        },
        {
          id: "b",
          label: "b)",
          text: "Legalidade, proporcionalidade, capacidade contributiva e neutralidade.",
        },
        {
          id: "c",
          label: "c)",
          text: "Igualdade, solidariedade, capacidade contributiva e eficiência.",
        },
        {
          id: "d",
          label: "d)",
          text: "Legalidade, igualdade, universalidade e progressividade.",
        },
      ],
      answer: "a",
      answerLabel:
        "a) Igualdade, legalidade fiscal, equivalência e justiça material.",
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
      type: "true_false",
      question:
        "Em matéria de incidência tributária, podem ser criados retroactivamente novos impostos, ampliadas normas de incidência, agravadas taxas ou revogados benefícios fiscais concedidos, ainda que não exista qualquer situação de ilegalidade.",
      answer: false,
      answerLabel: "Falso",
      explanation:
        "O Art. 8.º impede a retroactividade na criação de impostos, ampliação das normas de incidência, agravamento de taxas e revogação de benefícios fiscais concedidos, salvo em caso de ilegalidade.",
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
      type: "multiple_choice",
      question:
        "Para efeitos tributários, o que está incluído no conceito de território nacional, nos termos do Art. 9.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Apenas o território terrestre de Angola.",
        },
        {
          id: "b",
          label: "b)",
          text: "O território terrestre e as águas interiores, excluindo as zonas marítimas.",
        },
        {
          id: "c",
          label: "c)",
          text: "O território terrestre, águas interiores, mar territorial, zona contígua, zona económica exclusiva e plataforma continental.",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas o território terrestre e o mar territorial.",
        },
      ],
      answer: "c",
      answerLabel:
        "c) O território terrestre, águas interiores, mar territorial, zona contígua, zona económica exclusiva e plataforma continental.",
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