import { Quiz } from "@/constants/types";

const quizBloco3: Quiz = {
  id: "ii-bloco-03",
  title: "Determinação da Matéria Colectável",
  subtitle:
    "Imposto Industrial — Lei n.º 19/14, de 22 de Outubro, alterada pela Lei n.º 26/20, de 20 de Julho",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 12.º, 27.º e 48.º",

  questions: [
    {
      id: "3.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Segundo o artigo 12.º, na ausência, insuficiência ou falta de idoneidade dos elementos necessários à determinação do imposto devido, a administração tributária pode:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Extinguir automaticamente a dívida do contribuinte",
        },
        {
          id: "b",
          label: "b)",
          text: "Utilizar métodos indirectos de apuramento da matéria colectável",
        },
        {
          id: "c",
          label: "c)",
          text:
            "Multiplicar por dois o imposto do ano anterior, sem mais formalidades",
        },
        {
          id: "d",
          label: "d)",
          text:
            "Recorrer directamente aos tribunais, sem outra alternativa",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Utilizar métodos indirectos de apuramento da matéria colectável",
      explanation:
        "Quando não existam elementos suficientes ou idóneos para a determinação directa, podem ser utilizados métodos indirectos de apuramento da matéria colectável.",
    },

    {
      id: "3.2",
      number: 2,
      type: "multiple_choice",
      question:
        "As rendas recebidas pelo exercício de actividade sujeita a imposto predial urbano:",
      options: [
        {
          id: "a",
          label: "a)",
          text:
            "São sempre consideradas proveitos ou ganhos para efeitos de Imposto Industrial",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Não se consideram proveitos ou ganhos para efeitos de Imposto Industrial",
        },
        {
          id: "c",
          label: "c)",
          text: "São tributadas em dobro no Imposto Industrial",
        },
        {
          id: "d",
          label: "d)",
          text:
            "Só contam se o imóvel for arrendado a uma empresa pública",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Não se consideram proveitos ou ganhos para efeitos de Imposto Industrial",
      explanation:
        "As rendas provenientes de actividade sujeita a imposto predial urbano não são consideradas proveitos ou ganhos para efeitos de Imposto Industrial.",
    },

    {
      id: "3.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Para a determinação da matéria tributável, é possível deduzir ao lucro líquido apurado, entre outros:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Os proveitos ou ganhos sujeitos a imposto predial urbano",
        },
        {
          id: "b",
          label: "b)",
          text: "As despesas pessoais dos sócios",
        },
        {
          id: "c",
          label: "c)",
          text: "O imposto sobre veículos",
        },
        {
          id: "d",
          label: "d)",
          text: "As multas fiscais pagas no exercício",
        },
      ],
      answer: "a",
      answerLabel:
        "a) Os proveitos ou ganhos sujeitos a imposto predial urbano",
      explanation:
        "Entre as deduções previstas encontram-se os proveitos ou ganhos sujeitos a imposto predial urbano, nas condições estabelecidas pelo Código.",
    },

    {
      id: "3.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Qual é o prazo geral, segundo a Lei 19/14, para reporte dos prejuízos fiscais verificados num exercício?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "1 ano",
        },
        {
          id: "b",
          label: "b)",
          text: "3 anos",
        },
        {
          id: "c",
          label: "c)",
          text: "5 anos",
        },
        {
          id: "d",
          label: "d)",
          text: "10 anos",
        },
      ],
      answer: "c",
      answerLabel: "c) 5 anos",
      explanation:
        "Segundo a redacção original da Lei n.º 19/14, o prazo geral de reporte dos prejuízos fiscais era de 5 anos.",
    },

    {
      id: "3.5",
      number: 5,
      type: "multiple_choice",
      question:
        "A Lei n.º 26/20 alterou o prazo de reporte de prejuízos fiscais previsto no artigo 48.º para:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "1 ano",
        },
        {
          id: "b",
          label: "b)",
          text: "3 anos",
        },
        {
          id: "c",
          label: "c)",
          text: "5 anos",
        },
        {
          id: "d",
          label: "d)",
          text: "Manteve em 3 anos",
        },
      ],
      answer: "b",
      answerLabel: "b) 3 anos",
      explanation:
        "A Lei n.º 26/20 alterou o prazo de reporte de prejuízos fiscais para 3 anos.",
    },

    {
      id: "3.6",
      number: 6,
      type: "multiple_choice",
      question:
        "Quanto ao investimento de reservas voluntárias/de investimento reinvestidas em instalações ou equipamentos novos, a Lei n.º 26/20 prevê uma dedução à matéria colectável que pode chegar a:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "40% do valor reinvestido, sempre",
        },
        {
          id: "b",
          label: "b)",
          text:
            "80% do valor reinvestido, quando o investimento for feito fora das capitais de província",
        },
        {
          id: "c",
          label: "c)",
          text: "100% do valor reinvestido, em qualquer província",
        },
        {
          id: "d",
          label: "d)",
          text: "20% do valor reinvestido, apenas em Luanda",
        },
      ],
      answer: "b",
      answerLabel:
        "b) 80% do valor reinvestido, quando o investimento for feito fora das capitais de província",
      explanation:
        "A Lei n.º 26/20 prevê uma dedução que pode atingir 80% do valor reinvestido quando se verifiquem as condições legais relativas à localização do investimento.",
    },

    {
      id: "3.7",
      number: 7,
      type: "multiple_choice",
      question:
        "Qual o método de cálculo das amortizações do exercício, previsto como regra geral no artigo 27.º?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "Método das quotas decrescentes",
        },
        {
          id: "b",
          label: "b)",
          text: "Método das quotas constantes",
        },
        {
          id: "c",
          label: "c)",
          text: "Método do valor de mercado",
        },
        {
          id: "d",
          label: "d)",
          text: "Método do custo de reposição",
        },
      ],
      answer: "b",
      answerLabel: "b) Método das quotas constantes",
      explanation:
        "O método das quotas constantes constitui a regra geral para o cálculo das amortizações do exercício.",
    },

    {
      id: "3.8",
      number: 8,
      type: "multiple_choice",
      question:
        "Os terrenos, como regra geral, no âmbito da amortização de imóveis:",
      options: [
        {
          id: "a",
          label: "a)",
          text: "São sempre amortizáveis à taxa de 20%",
        },
        {
          id: "b",
          label: "b)",
          text:
            "Não são amortizáveis, excepto se estiverem exclusivamente afectos à actividade de exploração e apenas na parte sujeita a deperecimento",
        },
        {
          id: "c",
          label: "c)",
          text: "São amortizáveis em 10 anos",
        },
        {
          id: "d",
          label: "d)",
          text: "São amortizáveis apenas se pertencerem ao Estado",
        },
      ],
      answer: "b",
      answerLabel:
        "b) Não são amortizáveis, excepto se estiverem exclusivamente afectos à actividade de exploração e apenas na parte sujeita a deperecimento",
      explanation:
        "Os terrenos, em regra, não são amortizáveis. A lei prevê uma excepção para terrenos exclusivamente afectos à actividade de exploração e apenas relativamente à parte sujeita a deperecimento.",
    },
  ],
};

export default quizBloco3;