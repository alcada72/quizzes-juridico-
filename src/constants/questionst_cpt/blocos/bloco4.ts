import { Quiz } from "@/constants/types";



// BLOCO 4: RECURSOS JUDICIAIS
export const quizBloco4: Quiz = {
  id: "cpt-bloco-04",
  title: "Processo de Execução Fiscal e Medidas Cautelares",
  subtitle: "Código do Processo Tributário — Lei n.º 22/14, de 5 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 81.º a 105.º",

  questions: [
    {
      id: "4.1",
      number: 1,
      type: "multiple_choice",
      question:
        "Qual é o título executivo por excelência que serve de base ao processo de execução fiscal?",
      options: [
        { id: "a", label: "a)", text: "O contrato individual de trabalho do devedor" },
        { id: "b", label: "b)", text: "A certidão de dívida emitida pelo serviço competente da Administração Tributária" },
        { id: "c", label: "c)", text: "A fatura emitida pelo fornecedor" },
        { id: "d", label: "d)", text: "O extrato bancário do contribuinte" },
      ],
      answer: "b",
      answerLabel: "b) A certidão de dívida emitida pelo serviço competente da Administração Tributária",
      explanation:
        "A certidão de dívida (ou certidão do título executivo) extraída dos livros de liquidação constitui o título bastante para mover a execução.",
    },
    {
      id: "4.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Citado o executado no processo de execução fiscal, qual é o prazo legal para pagar a dívida ou opondo-se à execução?",
      options: [
        { id: "a", label: "a)", text: "10 dias" },
        { id: "b", label: "b)", text: "20 dias" },
        { id: "c", label: "c)", text: "30 dias" },
        { id: "d", label: "d)", text: "60 dias" },
      ],
      answer: "c",
      answerLabel: "c) 30 dias",
      explanation:
        "O devedor executado dispõe de 30 dias após a citação para efetuar o pagamento voluntário da dívida exequenda ou deduzir oposição.",
    },
    {
      id: "4.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Quais são as providências cautelares nominadas que a Administração Tributária pode requerer ao tribunal para garantia dos seus créditos (Art.º 99.º)?",
      options: [
        { id: "a", label: "a)", text: "Apenas a busca e apreensão de veículos" },
        { id: "b", label: "b)", text: "O Arresto e o Arrolamento" },
        { id: "c", label: "c)", text: "O fecho coercivo do estabelecimento comercial" },
        { id: "d", label: "d)", text: "A retenção do passaporte do devedor" },
      ],
      answer: "b",
      answerLabel: "b) O Arresto e o Arrolamento",
      explanation:
        "Nos termos expressos do Art.º 99.º do CPT, as providências cautelares legalmente tipificadas são o Arresto de bens e o Arrolamento.",
    },
    {
      id: "4.4",
      number: 4,
      type: "multiple_choice",
      question:
        "Qual é a consequência se o devedor não pagar nem prestar garantia no prazo legal após a citação executiva?",
      options: [
        { id: "a", label: "a)", text: "O processo é imediatamente arquivado" },
        { id: "b", label: "b)", text: "Procede-se de imediato à penhora de bens suficientes para o pagamento da dívida e custas" },
        { id: "c", label: "c)", text: "É emitida ordem de prisão preventiva do devedor" },
        { id: "d", label: "d)", text: "A dívida é perdoada por insuficiência de cobrança" },
      ],
      answer: "b",
      answerLabel: "b) Procede-se de imediato à penhora de bens suficientes para o pagamento da dívida e custas",
      explanation:
        "Não ocorrendo pagamento nem suspensão legal, a fase seguinte da execução fiscal é a penhora dos bens do património do devedor.",
    },
  ],
};
