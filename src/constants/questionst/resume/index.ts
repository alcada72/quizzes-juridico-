import type { QuizSummary } from "./types";

export const resumoCGT: QuizSummary = {
  id: "resumo-cgt",
  title: "Resumo Rápido",
  subtitle: "Prazos, juros, percentagens e valores do CGT",

  items: [
    // ─────────────────────────────
    // PRAZOS
    // ─────────────────────────────

    {
      id: "caducidade",
      label: "Caducidade do direito à liquidação",
      value: "5 anos",
      description:
        "Pode ampliar para 10 anos quando o retardamento resultar de infracção.",
      article: "Art. 62.º",
      category: "prazos",
    },

    {
      id: "prescricao-divida",
      label: "Prescrição da dívida tributária",
      value: "10 anos",
      description: "Prazo geral para a prescrição do direito de cobrança.",
      article: "Art. 63.º",
      category: "prazos",
    },

    {
      id: "direito-audicao",
      label: "Direito de audição",
      value: "15 dias",
      article: "Art. 85.º",
      category: "prazos",
    },

    {
      id: "procedimento",
      label: "Conclusão do procedimento tributário",
      value: "90 dias",
      article: "Art. 90.º",
      category: "prazos",
    },

    {
      id: "actos-interlocutorios",
      label: "Actos interlocutórios",
      value: "10 dias",
      article: "Art. 90.º",
      category: "prazos",
    },

    {
      id: "reclamacao",
      label: "Reclamação administrativa",
      value: "15 dias",
      description: "A Administração deve decidir em 45 dias.",
      article: "Art. 129.º",
      category: "prazos",
    },

    {
      id: "recurso-hierarquico",
      label: "Recurso hierárquico",
      value: "15 dias",
      description: "Deve ser decidido em 45 dias.",
      article: "Art. 133.º",
      category: "prazos",
    },

    {
      id: "prestacoes",
      label: "Pagamento em prestações",
      value: "6 a 18 prestações",
      description: "Cada prestação deve ter o valor mínimo de Kz 10.000,00.",
      article: "Art. 136.º",
      category: "prazos",
    },

    // ─────────────────────────────
    // JUROS
    // ─────────────────────────────

    {
      id: "juros-compensatorios",
      label: "Juros compensatórios",
      value: "1% ao mês",
      article: "Art. 51.º",
      category: "juros",
    },

    {
      id: "juros-mora",
      label: "Juros de mora",
      value: "1% ao mês",
      description:
        "Podem ser reduzidos para 50% quando o pagamento ocorrer nos primeiros 5 dias úteis.",
      article: "Art. 52.º",
      category: "juros",
    },

    {
      id: "juros-indemnizatorios",
      label: "Juros indemnizatórios",
      value: "4% ao ano",
      article: "Art. 53.º",
      category: "juros",
    },

    // ─────────────────────────────
    // PERCENTAGENS
    // ─────────────────────────────

    {
      id: "pagamento-espontaneo",
      label: "Pagamento espontâneo da multa",
      value: "30% do mínimo",
      article: "Art. 165.º",
      category: "percentagens",
    },

    {
      id: "pagamento-inspeccao",
      label: "Pagamento em acção inspectiva",
      value: "20% do mínimo",
      article: "Art. 166.º",
      category: "percentagens",
    },

    {
      id: "multa-nao-pagamento",
      label: "Multa por não pagamento de prestação/tributo",
      value: "35% do tributo em falta",
      description: "Valor mínimo: Kz 5.000,00.",
      article: "Art. 155.º",
      category: "percentagens",
    },

    {
      id: "nao-entrega-negligente",
      label: "Não entrega negligente de prestação",
      value: "10% a 30%",
      article: "Art. 197.º",
      category: "percentagens",
    },

    // ─────────────────────────────
    // VALORES
    // ─────────────────────────────

    {
      id: "prestacao-minima",
      label: "Valor mínimo de cada prestação",
      value: "Kz 10.000,00",
      article: "Art. 136.º",
      category: "valores",
    },

    {
      id: "abuso-confianca",
      label: "Abuso de confiança fiscal — limiar",
      value: "Kz 500.000,00",
      article: "Art. 179.º",
      category: "valores",
    },

    {
      id: "fraude-fiscal",
      label: "Fraude fiscal — limiar de punibilidade",
      value: "Kz 1.500.000,00",
      article: "Art. 172.º",
      category: "valores",
    },

    {
      id: "multa-minima",
      label: "Multa por não pagamento — mínimo",
      value: "Kz 5.000,00",
      article: "Art. 155.º",
      category: "valores",
    },
  ],
};
