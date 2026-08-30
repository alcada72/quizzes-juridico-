import { Quiz } from "@/constants/types";

export const quizBloco1: Quiz = {
  id: "cpt-bloco-01",
  title: "Princípios Fundamentais e Direitos Processuais",
  subtitle: "Código do Processo Tributário — Lei n.º 22/14, de 5 de Dezembro",
  description:
    "Responde primeiro sem consultar a lei. No final do bloco, consulta as respostas.",
  recommendation: "Recomenda-se fazer um bloco por dia de estudo.",
  articles: "Arts. 1.º a 15.º",

  questions: [
    {
      id: "1.1",
      number: 1,
      type: "multiple_choice",
      question:
        'Nos termos do Art.º 5.º, o que se entende por "acto tributário lesivo" suscetível de impugnação autónoma?',
      options: [
        {
          id: "a",
          label: "a)",
          text: "Qualquer despacho interno emitido pela chefia da Repartição Fiscal",
        },
        {
          id: "b",
          label: "b)",
          text: "O acto administrativo que defina direitos ou deveres tributários e afete negativamente a esfera jurídica do contribuinte",
        },
        {
          id: "c",
          label: "c)",
          text: "Exclusivamente a certidão de dívida emitida para execução fiscal",
        },
        {
          id: "d",
          label: "d)",
          text: "As informações prestadas oralmente pelos funcionários das Finanças",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O acto administrativo que defina direitos ou deveres tributários e afete negativamente a esfera jurídica do contribuinte",
      explanation:
        "Considera-se acto lesivo impugnável aquele que afeta diretamente os direitos e interesses legalmente protegidos do sujeito passivo.",
    },
    {
      id: "1.2",
      number: 2,
      type: "multiple_choice",
      question:
        "Os actos internos e os actos confirmativos praticados pela Administração Tributária consideram-se lesivos e são directamente impugnáveis de forma autónoma?",
      options: [
        { id: "a", label: "a)", text: "Sim, podem ser impugnados autonomamente" },
        { id: "b", label: "b)", text: "Não, pois não alteram nem definem de novo a situação jurídica do contribuinte" },
      ],
      answer: "b",
      answerLabel: "b) Não, pois não alteram nem definem de novo a situação jurídica do contribuinte",
      explanation:
        "Os actos meramente internos, de mero expediente ou confirmativos de actos anteriores não são autónomamente impugnáveis.",
    },
    {
      id: "1.3",
      number: 3,
      type: "multiple_choice",
      question:
        "Como se carateriza o Princípio do Inquisitório previsto no Art.º 9.º do CPT?",
      options: [
        {
          id: "a",
          label: "a)",
          text: "O juiz está rigorosamente limitado às provas que as partes juntarem aos autos",
        },
        {
          id: "b",
          label: "b)",
          text: "O tribunal deve realizar ou ordenar oficiosamente todas as diligências úteis para a descoberta da verdade material",
        },
        {
          id: "c",
          label: "c)",
          text: "Apenas a Administração Tributária pode requerer novas diligências probatórias",
        },
        {
          id: "d",
          label: "d)",
          text: "É proibido ao juiz indeferir diligências requeridas pelo sujeito passivo",
        },
      ],
      answer: "b",
      answerLabel:
        "b) O tribunal deve realizar ou ordenar oficiosamente todas as diligências úteis para a descoberta da verdade material",
      explanation:
        "Pelo princípio do inquisitório, o julgador tem o dever de investigar a verdade material independentemente da iniciativa das partes.",
    },
    {
      id: "1.4",
      number: 4,
      type: "multiple_choice",
      question:
        "A constituição de advogado é obrigatória em TODOS os processos e actos no foro tributário?",
      options: [
        { id: "a", label: "a)", text: "Verdadeiro" },
        { id: "b", label: "b)", text: "Falso" },
      ],
      answer: "b",
      answerLabel: "b) Falso",
      explanation:
        "Existem exceções no Art.º 15.º, tais como causas de valor até metade da alçada do tribunal de 1.ª instância e certos meios urgentes.",
    },
    {
      id: "1.5",
      number: 5,
      type: "multiple_choice",
      question:
        "Qual é o prazo regra para o exercício do direito de petição, reclamação ou recurso hierárquico, quando a lei não fixar prazo especial?",
      options: [
        { id: "a", label: "a)", text: "8 dias" },
        { id: "b", label: "b)", text: "15 dias" },
        { id: "c", label: "c)", text: "30 dias" },
        { id: "d", label: "d)", text: "60 dias" },
      ],
      answer: "c",
      answerLabel: "c) 30 dias",
      explanation:
        "Salvo disposição em contrário, o prazo geral de resposta ou impugnação administrativa é de 30 dias.",
    },
  ],
};


