import { QuizSummary } from "@/constants/questionst_cgt/resume/types";

export const resumoII: QuizSummary = {
  id: "resumo-ii",
  title: "Resumo Rápido",
  subtitle: "Taxas, prazos, regimes e valores do Imposto Industrial",

  items: [
    {
      id: "regime-geral",
      label: "Regime Geral de Tributação",
      value: "Antigo Grupo A",
      description:
        "Com a Lei n.º 26/20, o antigo Grupo A passou a designar-se Regime Geral de Tributação.",
      article: "Lei n.º 26/20",
      category: "regimes",
    },

    {
      id: "regime-simplificado",
      label: "Regime Simplificado de Tributação",
      value: "Antigo Grupo B",
      description:
        "Com a Lei n.º 26/20, o antigo Grupo B passou a designar-se Regime Simplificado de Tributação.",
      article: "Lei n.º 26/20",
      category: "regimes",
    },

    {
      id: "grupo-a-limite",
      label: "Enquadramento obrigatório no antigo Grupo A",
      value: "Kz 500.000.000,00",
      description:
        "Na redacção original da Lei n.º 19/14, as sociedades com proveitos totais anuais iguais ou superiores a este valor eram obrigatoriamente tributadas pelo Grupo A.",
      article: "Lei n.º 19/14",
      category: "valores",
    },

    {
      id: "taxa-geral-original",
      label: "Taxa geral — Lei n.º 19/14",
      value: "30%",
      description: "Taxa geral do Imposto Industrial na redacção original.",
      article: "Art. 64.º — Lei n.º 19/14",
      category: "taxas",
    },

    {
      id: "taxa-geral-atual",
      label: "Taxa geral — Lei n.º 26/20",
      value: "25%",
      description: "Taxa geral actualmente aplicável segundo a alteração introduzida pela Lei n.º 26/20.",
      article: "Art. 64.º",
      category: "taxas",
    },

    {
      id: "taxa-agricola-original",
      label: "Actividades agrícolas e similares — taxa original",
      value: "15%",
      description:
        "Aplicável aos rendimentos provenientes exclusivamente de actividades agrícolas, aquícolas, avícolas, pecuárias, piscatórias e silvícolas.",
      article: "Art. 64.º — Lei n.º 19/14",
      category: "taxas",
    },

    {
      id: "taxa-agricola-atual",
      label: "Actividades agrícolas e similares — taxa actual",
      value: "10%",
      description:
        "Abrange actividades agrícolas, aquícolas, apícolas, avícolas, pecuárias, piscatórias e silvícolas, excepto exploração da madeira.",
      article: "Art. 64.º",
      category: "taxas",
    },

    {
      id: "taxa-setores-especiais",
      label: "Bancos, seguros, telecomunicações e petrolíferas angolanas",
      value: "35%",
      description:
        "Taxa única introduzida pela Lei n.º 26/20 para os sectores indicados.",
      article: "Art. 64.º",
      category: "taxas",
    },

    {
      id: "taxa-vendas",
      label: "Liquidação provisória sobre vendas",
      value: "2%",
      description:
        "Taxa aplicável à liquidação provisória de imposto sobre as vendas do primeiro semestre.",
      article: "Art. 66.º",
      category: "taxas",
    },

    {
      id: "retencao-servicos",
      label: "Retenção na fonte sobre prestações de serviços",
      value: "6,5%",
      description:
        "Taxa aplicável à retenção na fonte sobre prestações de serviços.",
      article: "Art. 67.º",
      category: "taxas",
    },

    {
      id: "servicos-acidentais-original",
      label: "Serviços acidentais — taxa original",
      value: "6,5%",
      description:
        "Taxa de tributação liberatória na redacção original da Lei n.º 19/14.",
      article: "Art. 73.º — Lei n.º 19/14",
      category: "taxas",
    },

    {
      id: "servicos-acidentais-atual",
      label: "Serviços acidentais — taxa actual",
      value: "15%",
      description:
        "Taxa aplicável no regime especial de tributação de serviços acidentais após a Lei n.º 26/20.",
      article: "Arts. 64.º e 73.º",
      category: "taxas",
    },

    // ─────────────────────────────
    // PRAZOS
    // ─────────────────────────────

    {
      id: "liquidacao-grupo-b",
      label: "Liquidação definitiva — antigo Grupo B",
      value: "30 de Abril",
      description:
        "Prazo previsto na redacção original da Lei n.º 19/14.",
      article: "Art. 69.º — Lei n.º 19/14",
      category: "prazos",
    },

    {
      id: "liquidacao-grupo-a",
      label: "Liquidação definitiva — antigo Grupo A",
      value: "31 de Maio",
      description:
        "Prazo previsto na redacção original da Lei n.º 19/14.",
      article: "Art. 69.º — Lei n.º 19/14",
      category: "prazos",
    },

    {
      id: "modelo-1-regime-geral",
      label: "Declaração Modelo 1 — Regime Geral",
      value: "Último dia útil de Maio",
      description:
        "Prazo de apresentação da declaração após a alteração introduzida pela Lei n.º 26/20.",
      article: "Lei n.º 26/20",
      category: "prazos",
    },

    {
      id: "pagamento-autoliquidacao",
      label: "Autoliquidação provisória — Grupos A e B",
      value: "Até Agosto",
      description:
        "Na redacção original da Lei n.º 19/14, o imposto era objecto de autoliquidação provisória e pagamento até ao final de Agosto.",
      article: "Lei n.º 19/14",
      category: "prazos",
    },

    {
      id: "prejuizos-fiscais-original",
      label: "Reporte de prejuízos fiscais — prazo original",
      value: "3 anos",
      description:
        "Prazo geral previsto originalmente para dedução dos prejuízos fiscais a exercícios posteriores.",
      article: "Art. 48.º — Lei n.º 19/14",
      category: "prazos",
    },

    {
      id: "prejuizos-fiscais-atual",
      label: "Reporte de prejuízos fiscais — Lei n.º 26/20",
      value: "5 anos",
      description:
        "A Lei n.º 26/20 alterou o prazo de reporte previsto no artigo 48.º.",
      article: "Art. 48.º",
      category: "prazos",
    },

    // ─────────────────────────────
    // DEDUÇÕES E MATÉRIA COLECTÁVEL
    // ─────────────────────────────

    {
      id: "metodos-indiretos",
      label: "Apuramento indirecto da matéria colectável",
      value: "Métodos indirectos",
      description:
        "Pode ser utilizado quando exista ausência, insuficiência ou falta de idoneidade dos elementos necessários à determinação do imposto.",
      article: "Art. 12.º",
      category: "materia-colectavel",
    },

    {
      id: "rendas-imposto-predial",
      label: "Rendas sujeitas a Imposto Predial",
      value: "Não são proveitos do II",
      description:
        "As rendas recebidas pelo exercício de actividade sujeita a Imposto Predial Urbano não são consideradas proveitos ou ganhos para efeitos de Imposto Industrial.",
      article: "Código do Imposto Industrial",
      category: "materia-colectavel",
    },

    {
      id: "deducao-investimento",
      label: "Dedução por reinvestimento",
      value: "Até 80%",
      description:
        "A dedução à matéria colectável pode chegar a 80% do valor reinvestido quando o investimento seja realizado fora das capitais de província.",
      article: "Lei n.º 26/20",
      category: "deducoes",
    },

    {
      id: "amortizacoes",
      label: "Método geral de amortização",
      value: "Quotas constantes",
      description:
        "É o método de cálculo das amortizações previsto como regra geral.",
      article: "Art. 27.º",
      category: "materia-colectavel",
    },

    {
      id: "terrenos",
      label: "Amortização de terrenos",
      value: "Regra geral: não amortizáveis",
      description:
        "Exceptuam-se os terrenos exclusivamente afectos à actividade de exploração, apenas na parte sujeita a deperecimento.",
      article: "Código do Imposto Industrial",
      category: "materia-colectavel",
    },


    {
      id: "autofacturacao",
      label: "Retenção na autofacturação — Regime Simplificado",
      value: "6,5%",
      description:
        "Retenção na fonte não liberatória sobre o valor global da autofactura.",
      article: "Lei n.º 26/20",
      category: "retencoes",
    },

    {
      id: "multa-nao-pagamento-ii",
      label: "Não pagamento do Imposto Industrial",
      value: "25% do imposto em falta",
      description:
        "O não pagamento do imposto dentro do prazo legal sujeita o infractor a multa de 25% do imposto em falta.",
      article: "Art. 73.º",
      category: "penalidades",
    },

    {
      id: "multa-declaracao-regime-geral",
      label: "Falta de declaração fiscal — Regime Geral",
      value: "Kz 600.000,00",
      description:
        "Multa aplicável pela falta de apresentação de declaração fiscal aos contribuintes do regime geral.",
      article: "Art. 75.º",
      category: "penalidades",
    },

    {
      id: "lei-19-14",
      label: "Código do Imposto Industrial",
      value: "Lei n.º 19/14",
      description:
        "Lei de 22 de Outubro de 2014 que aprovou o Código do Imposto Industrial.",
      article: "22 de Outubro de 2014",
      category: "legislacao",
    },

    {
      id: "entrada-vigor-19-14",
      label: "Entrada em vigor da Lei n.º 19/14",
      value: "1 de Janeiro de 2015",
      article: "Art. 7.º — Lei n.º 19/14",
      category: "legislacao",
    },

    {
      id: "lei-26-20",
      label: "Alteração ao Código do Imposto Industrial",
      value: "Lei n.º 26/20",
      description:
        "Lei de 20 de Julho de 2020 que introduziu alterações relevantes ao Código do Imposto Industrial.",
      article: "20 de Julho de 2020",
      category: "legislacao",
    },

    {
      id: "entrada-vigor-26-20",
      label: "Entrada em vigor da Lei n.º 26/20",
      value: "30 dias após publicação",
      description:
        "A Lei n.º 26/20 entra em vigor 30 dias após a sua publicação.",
      article: "Art. 4.º — Lei n.º 26/20",
      category: "legislacao",
    },

    {
      id: "revogacoes-26-20",
      label: "Revogações da Lei n.º 26/20",
      value: "Arts. 8.º, 9.º e 10.º + Lei n.º 4/19",
      description:
        "A Lei n.º 26/20 revoga expressamente os artigos 8.º, 9.º e 10.º do Código e a Lei n.º 4/19, de 18 de Abril.",
      article: "Lei n.º 26/20",
      category: "legislacao",
    },
  ],
};