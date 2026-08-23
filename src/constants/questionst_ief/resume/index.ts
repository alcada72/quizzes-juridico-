import { QuizSummary } from "@/constants/questionst_cgt/resume/types";

export const resumoIRT: QuizSummary = {
  id: "resumo-irt",
  title: "Imposto sobre os Rendimentos do Trabalho",
  subtitle:
    "Grupos de tributação, isenções, matéria colectável, taxas, obrigações e alterações introduzidas pela Lei n.º 28/20",

  items: [

    {
      id: "incidencia-irt",
      label: "Incidência do IRT",
      value: "Rendimentos do trabalho",
      description:
        "O IRT incide sobre rendimentos por conta própria ou por conta de outrem, expressos em dinheiro ou em espécie, contratuais ou não, periódicos ou ocasionais, fixos ou variáveis.",
      article: "Art. 1.º — Lei n.º 18/14",
      category: "incidencia",
    },

    {
      id: "grupos-irt",
      label: "Grupos de tributação",
      value: "A, B e C",
      description:
        "Na redacção original da Lei n.º 18/14, os rendimentos sujeitos ao IRT encontravam-se divididos em três grupos: A, B e C.",
      article: "Art. 3.º — Lei n.º 18/14",
      category: "grupos",
    },

    // ─────────────────────────────
    // GRUPO A
    // ─────────────────────────────

    {
      id: "grupo-a",
      label: "Grupo A",
      value: "Trabalho por conta de outrem",
      description:
        "Abrange as remunerações dos trabalhadores por conta de outrem pagas por entidades patronais em virtude de vínculo laboral, bem como os rendimentos da função pública.",
      article: "Art. 3.º — Lei n.º 18/14",
      category: "grupos",
    },

    {
      id: "grupo-a-lei-28-20",
      label: "Grupo A — Lei n.º 28/20",
      value: "Inclui titulares de órgãos sociais",
      description:
        "Com a Lei n.º 28/20, passaram a integrar expressamente o Grupo A os rendimentos auferidos pelos titulares dos órgãos sociais das pessoas colectivas.",
      article: "Art. 3.º — Lei n.º 28/20",
      category: "grupos",
    },

    // ─────────────────────────────
    // GRUPO B
    // ─────────────────────────────

    {
      id: "grupo-b",
      label: "Grupo B",
      value: "Trabalho por conta própria",
      description:
        "Abrange os rendimentos de trabalhadores por conta própria que exerçam profissões constantes da lista anexa, bem como determinados rendimentos de gerentes e titulares de órgãos sociais na redacção original.",
      article: "Art. 3.º — Lei n.º 18/14",
      category: "grupos",
    },

    {
      id: "grupo-b-profissoes",
      label: "Profissões do Grupo B",
      value: "Lista anexa ao Código",
      description:
        "A lista das profissões do Grupo B inclui diversas actividades profissionais exercidas por conta própria. A Lei n.º 28/20 acrescentou novas categorias profissionais.",
      article: "Art. 3.º e lista anexa",
      category: "grupos",
    },

    {
      id: "novas-profissoes-grupo-b",
      label: "Novas profissões — Lei n.º 28/20",
      value: "Cabeleireiros, massagistas, DJ, árbitros e treinadores",
      description:
        "A Lei n.º 28/20 acrescentou novas categorias à lista de profissões do Grupo B, incluindo cabeleireiros, massagistas, DJ, corretores e mediadores, árbitros e treinadores desportivos, entre outras.",
      article: "Lei n.º 28/20",
      category: "grupos",
    },

    // ─────────────────────────────
    // GRUPO C
    // ─────────────────────────────

    {
      id: "grupo-c",
      label: "Grupo C",
      value: "Actividades industriais e comerciais",
      description:
        "Na versão original da Lei n.º 18/14, abrangia remunerações provenientes de actividades industriais e comerciais, presumidas de acordo com a Tabela dos Lucros Mínimos.",
      article: "Art. 3.º — Lei n.º 18/14",
      category: "grupos",
    },

    {
      id: "tabela-lucros-minimos",
      label: "Tabela dos Lucros Mínimos",
      value: "Rendimento colectável presumido",
      description:
        "A Tabela dos Lucros Mínimos estabelece valores presumidos de rendimento colectável para determinadas actividades do Grupo C.",
      article: "Tabela dos Lucros Mínimos",
      category: "grupo-c",
    },

    {
      id: "multa-grupo-c-original",
      label: "Incumprimento da Tabela — regime original",
      value: "Dobro do imposto apurado",
      description:
        "Na redacção original, o incumprimento da Tabela dos Lucros Mínimos sujeitava o contribuinte a multa correspondente ao dobro do imposto apurado com base na tabela.",
      article: "Art. 9.º — Lei n.º 18/14",
      category: "penalidades",
    },

    {
      id: "multa-grupo-c-atual",
      label: "Incumprimento da Tabela — Lei n.º 28/20",
      value: "25% do imposto apurado",
      description:
        "Com a alteração introduzida pela Lei n.º 28/20, a multa passou a corresponder a 25% do imposto apurado com base na Tabela dos Lucros Mínimos.",
      article: "Art. 9.º — Lei n.º 28/20",
      category: "penalidades",
    },

    // ─────────────────────────────
    // ISENÇÕES
    // ─────────────────────────────

    {
      id: "abono-familia",
      label: "Abono de família",
      value: "Até 5% do ordenado base",
      description:
        "Na redacção original, o abono de família pago pela entidade empregadora não constituía matéria colectável até ao limite de 5% do ordenado base mensal.",
      article: "Art. 2.º — Lei n.º 18/14",
      category: "isencoes",
    },

    {
      id: "subsidio-renda",
      label: "Subsídio de renda de casa",
      value: "Até 50%",
      description:
        "Na redacção original, os subsídios de renda de casa não constituíam matéria colectável até ao limite de 50% do valor do contrato de arrendamento, nas condições previstas na lei.",
      article: "Art. 2.º — Lei n.º 18/14",
      category: "isencoes",
    },

    {
      id: "gratificacao-ferias",
      label: "Gratificação de férias e subsídio de Natal",
      value: "Até 100% do salário base",
      description:
        "Na redacção original, as gratificações de férias e o subsídio de Natal não constituíam matéria colectável até ao limite de 100% do salário base.",
      article: "Art. 2.º — Lei n.º 18/14",
      category: "isencoes",
    },

    {
      id: "alimentacao-transporte-original",
      label: "Subsídios de alimentação e transporte",
      value: "Kz 30.000,00",
      description:
        "Na redacção original, os subsídios diários de alimentação e transporte tinham um limite mensal global de Kz 30.000,00 para efeitos de não sujeição.",
      article: "Art. 2.º — Lei n.º 18/14",
      category: "isencoes",
    },

    {
      id: "alimentacao-lei-28-20",
      label: "Subsídio de alimentação — Lei n.º 28/20",
      value: "Kz 30.000,00",
      description:
        "A Lei n.º 28/20 manteve o limite mensal de Kz 30.000,00 para o subsídio de alimentação.",
      article: "Art. 2.º — Lei n.º 28/20",
      category: "isencoes",
    },

    {
      id: "transporte-lei-28-20",
      label: "Subsídio de transporte — Lei n.º 28/20",
      value: "Kz 30.000,00",
      description:
        "A Lei n.º 28/20 introduziu uma alínea específica para os subsídios de transporte, estabelecendo o limite mensal de Kz 30.000,00.",
      article: "Art. 2.º — Lei n.º 28/20",
      category: "isencoes",
    },

    {
      id: "trabalhadores-agricolas-domesticos",
      label: "Trabalhadores eventuais agrícolas e domésticos",
      value: "Até Kz 100.000,00",
      description:
        "Os salários dos trabalhadores eventuais agrícolas e domésticos angolanos deixam de constituir matéria colectável até Kz 100.000,00, nas condições previstas na lei, incluindo inscrição na Segurança Social.",
      article: "Art. 2.º — Lei n.º 28/20",
      category: "isencoes",
    },

    {
      id: "deficientes-fisicos",
      label: "Deficientes físicos e mutilados de guerra",
      value: "Invalidez ≥ 50%",
      description:
        "Os rendimentos dos deficientes físicos e mutilados de guerra são isentos quando o grau de invalidez ou incapacidade seja igual ou superior a 50%, devidamente comprovado.",
      article: "Art. 5.º — Lei n.º 18/14",
      category: "isencoes",
    },

    {
      id: "missoes-diplomaticas",
      label: "Missões diplomáticas e consulares",
      value: "Reciprocidade",
      description:
        "Os rendimentos dos agentes de missões diplomáticas e consulares estrangeiras beneficiam de isenção quando exista reciprocidade de tratamento.",
      article: "Art. 5.º — Lei n.º 18/14",
      category: "isencoes",
    },

    {
      id: "servico-militar",
      label: "Serviço militar e paramilitar",
      value: "Isenção específica",
      description:
        "Na versão original, os rendimentos de pessoas que prestassem serviço militar e paramilitar nos órgãos de Defesa e Ordem Interna estavam isentos relativamente a essa prestação.",
      article: "Art. 6.º — Lei n.º 18/14",
      category: "isencoes",
    },

    {
      id: "artigo-6-revogado",
      label: "Artigo 6.º — Lei n.º 28/20",
      value: "Revogado",
      description:
        "A Lei n.º 28/20 revogou o artigo 6.º relativo às isenções específicas.",
      article: "Lei n.º 28/20",
      category: "alteracoes",
    },

    // ─────────────────────────────
    // MATÉRIA COLECTÁVEL
    // ─────────────────────────────

    {
      id: "materia-colectavel-grupo-a",
      label: "Matéria colectável — Grupo A",
      value: "Rendimento bruto menos deduções legais",
      description:
        "Para apurar a matéria colectável do Grupo A aplicam-se as deduções previstas na lei, incluindo as contribuições obrigatórias para a Segurança Social e componentes remuneratórias não sujeitas ou isentas.",
      article: "Art. 7.º — Lei n.º 18/14",
      category: "materia-colectavel",
    },

    {
      id: "materia-colectavel-grupo-b",
      label: "Matéria colectável — Grupo B",
      value: "70% do valor pago",
      description:
        "Na redacção original, quando os rendimentos do Grupo B eram pagos por entidades com contabilidade organizada, a matéria colectável correspondia a 70% do valor pago.",
      article: "Art. 8.º — Lei n.º 18/14",
      category: "materia-colectavel",
    },

    {
      id: "custos-contabilidade-simplificada",
      label: "Dedução de custos — contabilidade simplificada",
      value: "Até 30%",
      description:
        "Os contribuintes abrangidos pelo modelo de contabilidade simplificada ou livro de registo podem deduzir até 30% dos custos incorridos, nos termos previstos na legislação.",
      article: "Lei n.º 28/20",
      category: "deducoes",
    },

    // ─────────────────────────────
    // TAXAS
    // ─────────────────────────────

    {
      id: "taxa-grupo-b-original",
      label: "Grupo B — taxa original",
      value: "15%",
      description:
        "Na redacção original da Lei n.º 18/14, a matéria colectável do Grupo B estava sujeita à taxa única de 15%.",
      article: "Art. 16.º — Lei n.º 18/14",
      category: "taxas",
    },

    {
      id: "taxa-grupo-c-original",
      label: "Grupo C — taxa original",
      value: "30%",
      description:
        "Na redacção original da Lei n.º 18/14, os rendimentos do Grupo C estavam sujeitos à taxa de 30%.",
      article: "Art. 16.º — Lei n.º 18/14",
      category: "taxas",
    },

    {
      id: "retencao-grupos-b-c",
      label: "Retenção na fonte — Grupos B e C",
      value: "6,5%",
      description:
        "A Lei n.º 28/20 estabeleceu a taxa de 6,5% para os rendimentos dos Grupos B e C sujeitos a retenção na fonte.",
      article: "Art. 16.º — Lei n.º 28/20",
      category: "taxas",
    },

    {
      id: "grupos-b-c-sem-retencao",
      label: "Grupos B e C sem retenção na fonte",
      value: "25%",
      description:
        "Para a matéria colectável dos Grupos B e C não sujeita a retenção na fonte, a Lei n.º 28/20 estabeleceu a taxa de 25%.",
      article: "Art. 16.º — Lei n.º 28/20",
      category: "taxas",
    },

    // ─────────────────────────────
    // TABELA DO GRUPO A
    // ─────────────────────────────

    {
      id: "tabela-2014-isencao",
      label: "Tabela do IRT — 2014",
      value: "Até Kz 34.450,00",
      description:
        "Na tabela original de 2014, os rendimentos mensais até Kz 34.450,00 estavam isentos.",
      article: "Tabela de Taxas — Lei n.º 18/14",
      category: "taxas",
    },

    {
      id: "tabela-2014-taxa-maxima",
      label: "Taxa máxima — tabela de 2014",
      value: "17%",
      description:
        "Na tabela original de 2014, a taxa marginal máxima era de 17% sobre o excesso acima de Kz 230.000,00.",
      article: "Tabela de Taxas — Lei n.º 18/14",
      category: "taxas",
    },

    {
      id: "tabela-2020-isencao",
      label: "Nova Tabela do IRT",
      value: "Até Kz 70.000,00",
      description:
        "Com a Lei n.º 28/20, o primeiro escalão da tabela passou a isentar rendimentos mensais até Kz 70.000,00.",
      article: "Tabela do IRT — Lei n.º 28/20",
      category: "taxas",
    },

    {
      id: "tabela-2020-escaloes",
      label: "Escalões da nova tabela",
      value: "13 escalões",
      description:
        "A nova tabela progressiva do Grupo A introduzida pela Lei n.º 28/20 passou a ter 13 escalões.",
      article: "Tabela do IRT — Lei n.º 28/20",
      category: "taxas",
    },

    {
      id: "tabela-2020-taxa-maxima",
      label: "Taxa máxima — nova tabela",
      value: "25%",
      description:
        "No 13.º escalão, aplica-se a taxa de 25% sobre o excesso acima de Kz 10.000.000,00.",
      article: "Tabela do IRT — Lei n.º 28/20",
      category: "taxas",
    },

    // ─────────────────────────────
    // OBRIGAÇÕES
    // ─────────────────────────────

    {
      id: "modelo-2",
      label: "Declaração anual Modelo 2",
      value: "Fevereiro",
      description:
        "As entidades responsáveis devem entregar a declaração anual Modelo 2 relativa ao exercício anterior durante o mês de Fevereiro.",
      article: "Art. 12.º — Lei n.º 18/14",
      category: "obrigacoes",
    },

    {
      id: "conservacao-documentos",
      label: "Conservação da documentação",
      value: "5 anos",
      description:
        "Os sujeitos passivos devem conservar a documentação contabilística relevante pelo prazo legalmente previsto.",
      article: "Art. 22.º — Lei n.º 18/14",
      category: "obrigacoes",
    },

    // ─────────────────────────────
    // PENALIDADES
    // ─────────────────────────────

    {
      id: "multa-atraso-grupos-b-c",
      label: "Atraso superior a 30 dias — Grupos B e C",
      value: "Mínimo Kz 50.000,00",
      description:
        "Na redacção original, o atraso superior a 30 dias na escrituração e declaração dos contribuintes dos Grupos B e C estava sujeito a multa mínima de Kz 50.000,00.",
      article: "Art. 28.º — Lei n.º 18/14",
      category: "penalidades",
    },

    {
      id: "reducao-multa",
      label: "Redução das multas",
      value: "50%",
      description:
        "As penas de multa podem ser reduzidas a metade quando a obrigação fiscal seja cumprida voluntariamente dentro dos 30 dias subsequentes, nos termos previstos na lei.",
      article: "Art. 34.º — Lei n.º 18/14",
      category: "penalidades",
    },

    // ─────────────────────────────
    // LEGISLAÇÃO
    // ─────────────────────────────

    {
      id: "lei-18-14",
      label: "Código do IRT",
      value: "Lei n.º 18/14",
      description:
        "Lei que aprovou o Código do Imposto sobre os Rendimentos do Trabalho.",
      article: "22 de Outubro de 2014",
      category: "legislacao",
    },

    {
      id: "entrada-vigor-18-14",
      label: "Entrada em vigor — Lei n.º 18/14",
      value: "1 de Janeiro de 2015",
      description:
        "O novo Código do IRT aprovado pela Lei n.º 18/14 entrou em vigor a partir de 1 de Janeiro de 2015.",
      article: "Art. 6.º — Lei n.º 18/14",
      category: "legislacao",
    },

    {
      id: "revogacao-lei-10-99",
      label: "Revogação do antigo Código",
      value: "Lei n.º 10/99",
      description:
        "A Lei n.º 18/14 revogou o Código do Imposto sobre os Rendimentos do Trabalho aprovado pela Lei n.º 10/99, de 29 de Outubro.",
      article: "Art. 4.º — Lei n.º 18/14",
      category: "legislacao",
    },

    {
      id: "lei-28-20",
      label: "Alteração do Código do IRT",
      value: "Lei n.º 28/20",
      description:
        "A Lei n.º 28/20 introduziu alterações relevantes ao Código do Imposto sobre os Rendimentos do Trabalho, incluindo alterações aos grupos, isenções e taxas.",
      article: "Lei n.º 28/20",
      category: "legislacao",
    },

    {
      id: "entrada-vigor-28-20",
      label: "Entrada em vigor — Lei n.º 28/20",
      value: "30 dias após publicação",
      description:
        "A Lei n.º 28/20 entrou em vigor 30 dias após a sua publicação.",
      article: "Art. 6.º — Lei n.º 28/20",
      category: "legislacao",
    },

    {
      id: "revogacoes-28-20",
      label: "Revogações — Lei n.º 28/20",
      value: "Leis n.º 9/19 e 28/19",
      description:
        "A Lei n.º 28/20 revogou expressamente os diplomas anteriores indicados no seu artigo 4.º.",
      article: "Art. 4.º — Lei n.º 28/20",
      category: "legislacao",
    },
  ],
};