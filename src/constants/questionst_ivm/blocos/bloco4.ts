import { Quiz } from "@/constants/types";

const quizBloco4: Quiz = {
  id: "ivm-bloco-04",
  title: "Matéria Colectável e Taxas",
  subtitle:
    "Imposto sobre os Veículos Motorizados — Lei n.º 24/20, de 13 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 6.º e 7.º",

  questions: [
    {
      id: "4.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o art. 6.º, n.º 1, alínea a), qual o critério que determina a matéria colectável para automóveis ligeiros, ciclomotores, motociclos, triciclos e quadriciclos?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "O valor comercial do veículo",
        },
        {
          id: "b",
          label: "b)",
          text:
            "A cilindrada do motor (e a tonelagem, no caso dos pesados)",
        },
        {
          id: "c",
          label: "c)",
          text: "A cor do veículo",
        },
        {
          id: "d",
          label: "d)",
          text: "O número de proprietários anteriores",
        },
      ],
      answer: "b",
      answerLabel:
        "b) A cilindrada do motor (e a tonelagem, no caso dos pesados)",
      explanation:
        "Art. 6.º, n.º 1, alínea a): a cilindrada do motor é considerada para ligeiros e motociclos, enquanto a tonelagem é considerada para pesados.",
    },

    {
      id: "4.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo o art. 6.º, n.º 1, alínea b), qual o critério de tributação para as aeronaves?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "O número de assentos",
        },
        {
          id: "b",
          label: "b)",
          text: "O peso máximo autorizado à descolagem",
        },
        {
          id: "c",
          label: "c)",
          text: "A velocidade máxima de cruzeiro",
        },
        {
          id: "d",
          label: "d)",
          text: "O país de fabrico",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O peso máximo autorizado à descolagem",
      explanation:
        "Art. 6.º, n.º 1, alínea b): o critério de tributação das aeronaves é o peso máximo autorizado à descolagem.",
    },

    {
      id: "4.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo o art. 6.º, n.º 1, alínea c), qual o critério de tributação para as embarcações?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "A tonelagem de arqueação bruta",
        },
        {
          id: "b",
          label: "b)",
          text: "O comprimento total do casco",
        },
        {
          id: "c",
          label: "c)",
          text: "O número de tripulantes",
        },
        {
          id: "d",
          label: "d)",
          text: "O tipo de combustível utilizado",
        },
      ],
      answer: "a",
      answerLabel:
        "a) A tonelagem de arqueação bruta",
      explanation:
        "Art. 6.º, n.º 1, alínea c): para as embarcações é considerada a tonelagem de arqueação bruta.",
    },

    {
      id: "4.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo o art. 6.º, n.º 1, alínea d), que outro critério geral é considerado na determinação da matéria colectável?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "O ano de fabrico do veículo",
        },
        {
          id: "b",
          label: "b)",
          text: "O número de portas",
        },
        {
          id: "c",
          label: "c)",
          text: "A marca do veículo",
        },
        {
          id: "d",
          label: "d)",
          text: "O local de residência do proprietário",
        },
      ],
      answer: "a",
      answerLabel:
        "a) O ano de fabrico do veículo",
      explanation:
        "Art. 6.º, n.º 1, alínea d): o ano de fabrico é também considerado na determinação da matéria colectável.",
    },

    {
      id: "4.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Segundo o art. 6.º, n.º 2, a alteração da cilindrada, potência, propulsão ou peso máximo de um veículo implica a correcção do imposto já pago nesse ano?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Sim, sempre com efeitos retroactivos",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Não implica correcção do imposto já pago respeitante ao ano da alteração",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas se a alteração for superior a 50%",
        },
        {
          id: "d",
          label: "d)",
          text: "Apenas mediante decisão judicial",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Não implica correcção do imposto já pago respeitante ao ano da alteração",
      explanation:
        "Art. 6.º, n.º 2: não há correcção do imposto já pago no ano em que a alteração se verificar.",
    },

    {
      id: "4.6",
      number: 6,
      type: "multiple_choice",
      question:
        "Segundo o art. 7.º, n.º 1, como é expressa a taxa do imposto?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Em percentagem sobre o valor comercial do veículo",
        },
        {
          id: "b",
          label: "b)",
          text: "Em valor fixo, constante das tabelas anexas à Lei",
        },
        {
          id: "c",
          label: "c)",
          text: "Em múltiplos do salário mínimo nacional",
        },
        {
          id: "d",
          label: "d)",
          text: "Livremente negociada com a Administração Tributária",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Em valor fixo, constante das tabelas anexas à Lei",
      explanation:
        "Art. 7.º, n.º 1: a taxa é expressa em valor fixo constante das tabelas anexas.",
    },

    {
      id: "4.7",
      number: 7,
      type: "multiple_choice",
      question:
        "Segundo o art. 7.º, n.º 2, quando são aplicáveis valores diferentes de imposto a um mesmo veículo em função das suas características, qual prevalece?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "O valor mais baixo",
        },
        {
          id: "b",
          label: "b)",
          text: "A média dos valores aplicáveis",
        },
        {
          id: "c",
          label: "c)",
          text: "O valor mais alto",
        },
        {
          id: "d",
          label: "d)",
          text: "Cabe ao proprietário escolher",
        },
      ],
      answer: "c",
      answerLabel: "c) O valor mais alto",
      explanation:
        "Art. 7.º, n.º 2: prevalece sempre o valor mais alto entre os valores aplicáveis.",
    },

    {
      id: "4.8",
      number: 8,
      type: "multiple_choice",
      question:
        "Segundo o art. 7.º, n.º 3, a que taxa são tributados os veículos destinados exclusivamente à Agricultura e à Pesca Artesanal, bem como os veículos eléctricos?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Estão totalmente isentos",
        },
        {
          id: "b",
          label: "b)",
          text: "25% do valor constante das tabelas",
        },
        {
          id: "c",
          label: "c)",
          text: "50% do valor constante das tabelas",
        },
        {
          id: "d",
          label: "d)",
          text: "75% do valor constante das tabelas",
        },
      ],
      answer: "c",
      answerLabel:
        "c) 50% do valor constante das tabelas",
      explanation:
        "Art. 7.º, n.º 3: estes veículos beneficiam de tributação reduzida a 50% do valor tabelado.",
    },

    {
      id: "4.9",
      number: 9,
      type: "multiple_choice",
      question:
        "Segundo o art. 7.º, n.º 4, através de que diploma pode ser ajustado o valor do imposto previsto na Lei?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Decreto Presidencial avulso",
        },
        {
          id: "b",
          label: "b)",
          text: "Despacho do Ministro das Finanças",
        },
        {
          id: "c",
          label: "c)",
          text: "A Lei que aprova o Orçamento Geral do Estado",
        },
        {
          id: "d",
          label: "d)",
          text: "Regulamento interno da Administração Tributária",
        },
      ],
      answer: "c",
      answerLabel:
        "c) A Lei que aprova o Orçamento Geral do Estado",
      explanation:
        "Art. 7.º, n.º 4: o ajuste do valor do imposto pode ser feito pela Lei que aprova o Orçamento Geral do Estado.",
    },
  ],
};

export default quizBloco4;