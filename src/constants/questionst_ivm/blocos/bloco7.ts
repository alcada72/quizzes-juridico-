import { Quiz } from "@/constants/types";

const quizBloco7: Quiz = {
  id: "ivm-bloco-07",
  title: "Tabelas Anexas",
  subtitle:
    "Imposto sobre os Veículos Motorizados — Lei n.º 24/20, de 13 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Art. 7.º e Tabelas n.º 1, 2 e 3",

  questions: [
    {
      id: "7.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo a Tabela n.º 1 anexa (art. 7.º), qual o valor do imposto para a categoria \"Ligeiros I\" (até 1500 cc)?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 1.850,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 3.050,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 4.300,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 6.750,00",
        },
      ],
      answer: "c",
      answerLabel: "c) Kz 4.300,00",
      explanation:
        "Tabela n.º 1, item 4: Ligeiros I, até 1500 cc, corresponde ao valor de Kz 4.300,00.",
    },

    {
      id: "7.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Segundo a Tabela n.º 1, qual o valor do imposto para Motociclos/Ciclomotores/Triciclos/Quadriciclos III (a partir de 451 cc)?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 1.850,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 2.450,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 3.050,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 4.300,00",
        },
      ],
      answer: "c",
      answerLabel: "c) Kz 3.050,00",
      explanation:
        "Tabela n.º 1, item 3: Motociclos/Ciclomotores/Triciclos/Quadriciclos III, a partir de 451 cc, corresponde ao valor de Kz 3.050,00.",
    },

    {
      id: "7.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Segundo a Tabela n.º 1, qual o valor do imposto para a categoria \"Pesados II\" (mais de 10 toneladas)?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 9.200,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 10.450,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 15.350,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 20.000,00",
        },
      ],
      answer: "c",
      answerLabel: "c) Kz 15.350,00",
      explanation:
        "Tabela n.º 1, item 9: Pesados II, com mais de 10 toneladas, corresponde ao valor de Kz 15.350,00.",
    },

    {
      id: "7.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Segundo a Tabela n.º 2 (Embarcações), que dois critérios combinados definem o grupo e o valor do imposto?",
      options: [
        {
          id: "a",
          label: "a)",
          text:
            "A tonelagem de arqueação bruta e a potência de propulsão em HP",
        },
        {
          id: "b",
          label: "b)",
          text: "O comprimento do casco e o número de motores",
        },
        {
          id: "c",
          label: "c)",
          text: "O ano de fabrico e o país de registo",
        },
        {
          id: "d",
          label: "d)",
          text: "O tipo de casco e a cor da embarcação",
        },
      ],
      answer: "a",
      answerLabel:
        "a) A tonelagem de arqueação bruta e a potência de propulsão em HP",
      explanation:
        "Tabela n.º 2: cruza a tonelagem de arqueação bruta com a potência de propulsão, distinguindo até 100 HP e mais de 100 HP.",
    },

    {
      id: "7.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Segundo a Tabela n.º 3 (Aeronaves), com base em que grandeza é determinado o valor do imposto?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "No número de passageiros",
        },
        {
          id: "b",
          label: "b)",
          text: "No peso máximo autorizado à descolagem (em kg)",
        },
        {
          id: "c",
          label: "c)",
          text: "Na autonomia de voo em quilómetros",
        },
        {
          id: "d",
          label: "d)",
          text: "No número de motores",
        },
      ],
      answer: "b",
      answerLabel:
        "b) No peso máximo autorizado à descolagem (em kg)",
      explanation:
        "Tabela n.º 3: os grupos das aeronaves são definidos pelo peso máximo autorizado à descolagem, em quilogramas.",
    },

    {
      id: "7.6",
      number: 6,
      type: "multiple_choice",
      question:
        "Segundo a Tabela n.º 3, qual o valor do imposto para uma aeronave com peso máximo autorizado à descolagem até 600 kg?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Kz 250.000,00",
        },
        {
          id: "b",
          label: "b)",
          text: "Kz 500.000,00",
        },
        {
          id: "c",
          label: "c)",
          text: "Kz 688.680,00",
        },
        {
          id: "d",
          label: "d)",
          text: "Kz 938.650,00",
        },
      ],
      answer: "b",
      answerLabel: "b) Kz 500.000,00",
      explanation:
        "Tabela n.º 3, Grupo 1: uma aeronave com peso máximo autorizado à descolagem até 600 kg está sujeita ao imposto de Kz 500.000,00.",
    },
  ],
};

export default quizBloco7;