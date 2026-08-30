import { QuizSummary } from "@/constants/questionst_cgt/resume/types";

export const resumoCPT: QuizSummary = {
  id: "resumo-cpt",
  title: "Código do Processo Tributário",
  subtitle:
    "Princípios, competências, fases processuais, impugnação, execução fiscal, garantias, custos e recursos — Lei n.º 22/14",

  items: [
    // ─────────────────────────────
    // PRINCÍPIOS E NORMAS GERAIS
    // ─────────────────────────────

    {
      id: "acto-lesivo-cpt",
      label: "Acto tributário lesivo",
      value: "Afetação de direitos do contribuinte",
      description:
        "Considera-se acto lesivo suscetível de impugnação autónoma o acto administrativo que defina direitos ou deveres tributários e afete negativamente a esfera jurídica do sujeito passivo.",
      article: "Art. 5.º — Lei n.º 22/14",
      category: "principios",
    },

    {
      id: "actos-nao-lesivos-cpt",
      label: "Actos não impugnáveis autonomamente",
      value: "Actos internos e confirmativos",
      description:
        "Os actos meramente internos, de mero expediente ou confirmativos de decisões anteriores não são considerados lesivos para efeitos de impugnação autónoma.",
      article: "Art. 5.º — Lei n.º 22/14",
      category: "principios",
    },

    {
      id: "principio-inquisitorio",
      label: "Princípio do Inquisitório",
      value: "Investigação da verdade material",
      description:
        "O tribunal não se limita às provas trazidas pelas partes, devendo realizar ou ordenar oficiosamente todas as diligências úteis para o conhecimento da verdade material.",
      article: "Art. 9.º — Lei n.º 22/14",
      category: "principios",
    },

    {
      id: "constituicao-advogado",
      label: "Constituição de advogado",
      value: "Obrigatória com exceções",
      description:
        "A patrocínio judiciário por advogado é obrigatório no processo tributário, salvo em causas de valor inferior a metade da alçada do tribunal de 1.ª instância ou em procedimentos urgentes específicos.",
      article: "Art. 15.º — Lei n.º 22/14",
      category: "principios",
    },

    // ─────────────────────────────
    // PRAZOS E NOTIFICAÇÕES
    // ─────────────────────────────

    {
      id: "contagem-prazos",
      label: "Contagem dos prazos processuais",
      value: "Natureza contínua",
      description:
        "Os prazos no processo tributário contam-se de forma contínua e não se suspendem nas férias judiciais, salvo disposição legal em contrário.",
      article: "Art. 16.º — Lei n.º 22/14",
      category: "prazos",
    },

    {
      id: "prazo-geral-peticoes",
      label: "Prazo geral para atos administrativos",
      value: "30 dias",
      description:
        "Quando a lei não fixar prazo especial, o prazo para a prática de actos ou exercício do direito de petição, reclamação ou recurso hierárquico é de 30 dias.",
      article: "Art. 18.º — Lei n.º 22/14",
      category: "prazos",
    },

    {
      id: "duracao-processos-normais",
      label: "Duração máxima de processo normal",
      value: "1 ano em 1.ª instância",
      description:
        "Os processos tributários normais não devem ter uma duração acumulada superior a 1 ano na 1.ª instância.",
      article: "Art. 23.º — Lei n.º 22/14",
      category: "prazos",
    },

    {
      id: "duracao-processos-urgentes",
      label: "Duração máxima de processo urgente",
      value: "90 dias em 1.ª instância",
      description:
        "Os processos tributários de natureza urgente têm um prazo máximo ordenador de conclusão de 90 dias na 1.ª instância.",
      article: "Art. 23.º — Lei n.º 22/14",
      category: "prazos",
    },

    // ─────────────────────────────
    // NULIDADES E CUSTAS
    // ─────────────────────────────

    {
      id: "nulidades-insanaveis",
      label: "Nulidades insanáveis",
      value: "Vícios graves do processo",
      description:
        "Constituem nulidades insanáveis a ineptidão da petição inicial, a falta de informações oficiais de conhecimento oficioso e a falta de notificação do despacho de admissão de recurso.",
      article: "Art. 45.º — Lei n.º 22/14",
      category: "nulidades",
    },

    {
      id: "isencao-custas",
      label: "Isenção de custas judiciais",
      value: "Entes e órgãos públicos",
      description:
        "Estão isentos de custas judiciais o Ministério Público, a Administração Tributária e seus funcionários no exercício de funções, e as pessoas colectivas de direito público.",
      article: "Art. 47.º — Lei n.º 22/14",
      category: "custas",
    },

    // ─────────────────────────────
    // IMPUGNAÇÃO JUDICIAL
    // ─────────────────────────────

    {
      id: "prazo-impugnacao-anulaveis",
      label: "Impugnação de actos anuláveis",
      value: "60 dias",
      description:
        "O prazo para apresentação da petição de impugnação judicial contra actos tributários anuláveis é de 60 dias a contar da notificação ou do fim do prazo de pagamento voluntário.",
      article: "Art. 62.º — Lei n.º 22/14",
      category: "impugnacao",
    },

    {
      id: "prazo-impugnacao-nulos",
      label: "Impugnação de actos nulos",
      value: "A todo o tempo",
      description:
        "A impugnação fundada na nulidade do acto tributário não caduca no prazo ordinário, podendo ser intentada a todo o tempo até ao termo da execução fiscal.",
      article: "Art. 63.º — Lei n.º 22/14",
      category: "impugnacao",
    },

    {
      id: "prova-testemunhal-impugnacao",
      label: "Limite de testemunhas na impugnação",
      value: "3 por facto (máximo 8)",
      description:
        "Na petição inicial de impugnação judicial, o impugnante pode arrolar até 3 testemunhas por cada facto alegado, com o limite global máximo de 8 testemunhas.",
      article: "Art. 64.º — Lei n.º 22/14",
      category: "impugnacao",
    },

    {
      id: "suspensao-execucao-impugnacao",
      label: "Efeito suspensivo da impugnação",
      value: "Depende de prestação de garantia",
      description:
        "A dedução de impugnação judicial não suspende a cobrança coativa do imposto, salvo se for prestada garantia idónea ou concedida a sua dispensa nos termos legais.",
      article: "Art. 67.º — Lei n.º 22/14",
      category: "impugnacao",
    },

    // ─────────────────────────────
    // EXECUÇÃO FISCAL E MEDIDAS CAUTELARES
    // ─────────────────────────────

    {
      id: "titulo-executivo-fiscal",
      label: "Título executivo na execução fiscal",
      value: "Certidão de dívida",
      description:
        "A execução fiscal tem por base a certidão de dívida emitida pelos serviços competentes da Administração Tributária com base nos registos ou liquidações.",
      article: "Art. 81.º — Lei n.º 22/14",
      category: "execucao",
    },

    {
      id: "prazo-oposicao-execucao",
      label: "Prazo de oposição ou pagamento",
      value: "30 dias após citação",
      description:
        "O devedor executado dispõe de 30 dias a contar da citação para efetuar o pagamento voluntário da dívida exequenda ou deduzir oposição à execução fiscal.",
      article: "Art. 88.º — Lei n.º 22/14",
      category: "execucao",
    },

    {
      id: "providencias-cautelares-cpt",
      label: "Providências cautelares admitidas",
      value: "Arresto e Arrolamento",
      description:
        "Para a garantia dos créditos tributários havendo fundado receio de perda da garantia patrimonial, são expressamente admitidos o Arresto de bens e o Arrolamento.",
      article: "Art. 99.º — Lei n.º 22/14",
      category: "providencias",
    },

    // ─────────────────────────────
    // RECURSOS JUDICIAIS
    // ─────────────────────────────

    {
      id: "prazo-recurso-sentenca",
      label: "Recurso de sentenças",
      value: "15 dias",
      description:
        "O prazo para interposição de recurso ordinário contra a sentença final proferida pelo tribunal de 1.ª instância é de 15 dias.",
      article: "Art. 109.º — Lei n.º 22/14",
      category: "recursos",
    },

    {
      id: "prazo-recurso-despachos",
      label: "Recurso de despachos",
      value: "8 dias",
      description:
        "O prazo de interposição de recurso ordinário relativamente a despachos interlocutórios proferidos no processo é de 8 dias.",
      article: "Art. 109.º — Lei n.º 22/14",
      category: "recursos",
    },

    {
      id: "recurso-extraordinario-revisao",
      label: "Prazo do Recurso de Revisão",
      value: "3 anos",
      description:
        "O recurso extraordinário de revisão de decisão transitada em julgado caduca decorridos 3 anos sobre a data do trânsito em julgado.",
      article: "Art. 122.º — Lei n.º 22/14",
      category: "recursos",
    },

    // ─────────────────────────────
    // LEGISLAÇÃO E ENTRADA EM VIGOR
    // ─────────────────────────────

    {
      id: "lei-22-14",
      label: "Código do Processo Tributário",
      value: "Lei n.º 22/14",
      description:
        "Lei que aprovou o Código do Processo Tributário de Angola, regulando a jurisdição e a tramitação do contencioso tributário.",
      article: "5 de Dezembro de 2014",
      category: "legislacao",
    },
  ],
};