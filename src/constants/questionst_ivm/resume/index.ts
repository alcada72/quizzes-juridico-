import { QuizSummary } from "@/constants/questionst_cgt/resume/types";

export const resumoIVM: QuizSummary = {
  id: "resumo-ivm",
  title: "Imposto sobre os Veículos Motorizados",
  subtitle:
    "Lei n.º 24/20, de 13 de Julho — incidência, sujeitos passivos, isenções, matéria colectável, taxas, pagamento, fiscalização e tabelas",

  items: [
    // ═══════════════════════════════════════
    // DISPOSIÇÕES GERAIS
    // ═══════════════════════════════════════

    {
      id: "aplicacao-ivm",
      label: "Aplicação do IVM",
      value: "Veículos motorizados registados em Angola",
      description:
        "O Imposto sobre os Veículos Motorizados aplica-se aos veículos motorizados registados na República de Angola.",
      article: "Art. 1.º — Lei n.º 24/20",
      category: "disposicoes-gerais",
    },

    {
      id: "conceito-veiculos-motorizados",
      label: "Veículos motorizados",
      value: "Tracção mecânica ou eléctrica",
      description:
        "Consideram-se veículos motorizados todos os veículos de tracção mecânica ou eléctrica destinados a transitar pelos seus próprios meios.",
      article: "Art. 2.º, n.º 1 — Lei n.º 24/20",
      category: "disposicoes-gerais",
    },

    {
      id: "legislacao-subsidiaria",
      label: "Legislação subsidiária",
      value: "Código de Estrada",
      description:
        "Para as definições que não estejam previstas na Lei n.º 24/20, aplicam-se o Código de Estrada e demais legislação, desde que não contrariem a presente Lei.",
      article: "Art. 2.º, n.º 2 — Lei n.º 24/20",
      category: "disposicoes-gerais",
    },

    // ═══════════════════════════════════════
    // INCIDÊNCIA
    // ═══════════════════════════════════════

    {
      id: "incidencia-objectiva",
      label: "Incidência objectiva",
      value: "Quatro categorias de veículos",
      description:
        "O IVM incide sobre Automóveis Ligeiros e Pesados; Motociclos, Ciclomotores, Triciclos e Quadriciclos; Aeronaves; e Embarcações.",
      article: "Art. 3.º — Lei n.º 24/20",
      category: "incidencia",
    },

    {
      id: "automoveis",
      label: "Automóveis",
      value: "Ligeiros e Pesados",
      description:
        "Os automóveis ligeiros e pesados registados em Angola estão abrangidos pelo IVM.",
      article: "Art. 3.º, alínea a) — Lei n.º 24/20",
      category: "incidencia",
    },

    {
      id: "motociclos",
      label: "Motociclos e similares",
      value: "Motociclos, ciclomotores, triciclos e quadriciclos",
      description:
        "Motociclos, ciclomotores, triciclos e quadriciclos constituem uma das categorias sujeitas ao IVM.",
      article: "Art. 3.º, alínea b) — Lei n.º 24/20",
      category: "incidencia",
    },

    {
      id: "aeronaves",
      label: "Aeronaves",
      value: "Sujeitas ao IVM",
      description:
        "As aeronaves registadas ou matriculadas nos termos previstos na Lei estão sujeitas ao Imposto sobre os Veículos Motorizados.",
      article: "Art. 3.º, alínea c) — Lei n.º 24/20",
      category: "incidencia",
    },

    {
      id: "embarcacoes",
      label: "Embarcações",
      value: "Sujeitas ao IVM",
      description:
        "As embarcações abrangidas pelo artigo 3.º estão sujeitas ao IVM.",
      article: "Art. 3.º, alínea d) — Lei n.º 24/20",
      category: "incidencia",
    },

    // ═══════════════════════════════════════
    // SUJEITOS PASSIVOS
    // ═══════════════════════════════════════

    {
      id: "sujeito-passivo",
      label: "Sujeito passivo",
      value: "Proprietário ou possuidor registado",
      description:
        "São sujeitos passivos do IVM os proprietários ou possuidores em cujo nome os veículos se encontram registados ou matriculados.",
      article: "Art. 4.º, n.º 1 — Lei n.º 24/20",
      category: "sujeitos-passivos",
    },

    {
      id: "posse-efectiva",
      label: "Posse efectiva",
      value: "Responsabilidade solidária",
      description:
        "A pessoa que se encontre na posse efectiva do veículo presume-se sujeito passivo solidário, respondendo pelo pagamento do imposto, com direito de regresso sobre o titular.",
      article: "Art. 4.º, n.º 2, alínea a) — Lei n.º 24/20",
      category: "sujeitos-passivos",
    },

    {
      id: "adquirente-divida",
      label: "Adquirente do veículo",
      value: "Responsabilidade por imposto anterior",
      description:
        "O adquirente do veículo responde solidariamente pelo imposto que não tenha sido pago em exercícios anteriores.",
      article: "Art. 4.º, n.º 2, alínea b) — Lei n.º 24/20",
      category: "sujeitos-passivos",
    },

    {
      id: "equiparados-proprietarios",
      label: "Equiparados aos proprietários",
      value: "Locatários e adquirentes",
      description:
        "São equiparados aos proprietários os locatários financeiros, os adquirentes com reserva de propriedade e os titulares de direitos de opção de compra por efeito do contrato de locação.",
      article: "Art. 4.º, n.º 3 — Lei n.º 24/20",
      category: "sujeitos-passivos",
    },

    // ═══════════════════════════════════════
    // ISENÇÕES
    // ═══════════════════════════════════════

    {
      id: "entidades-isentas",
      label: "Entidades isentas",
      value: "Estado e outras entidades",
      description:
        "Estão isentos o Estado, as Autarquias Locais, os Institutos Públicos, os Partidos Políticos, as Missões Diplomáticas e Consulares, mediante reciprocidade, e as Organizações Internacionais.",
      article: "Art. 5.º, n.º 1 — Lei n.º 24/20",
      category: "isencoes",
    },

    {
      id: "tractores-agricultura",
      label: "Tractores agrícolas",
      value: "Uso exclusivamente agrícola",
      description:
        "Estão isentos do IVM os tractores utilizados exclusivamente para a agricultura.",
      article: "Art. 5.º, n.º 2 — Lei n.º 24/20",
      category: "isencoes",
    },

    {
      id: "veiculos-deficiencia",
      label: "Veículos adaptados para pessoas com deficiência",
      value: "Reconhecimento da Administração Tributária",
      description:
        "Os veículos adaptados para uso de pessoas com deficiência beneficiam de isenção mediante reconhecimento da Administração Tributária.",
      article: "Art. 5.º, n.º 2 — Lei n.º 24/20",
      category: "isencoes",
    },

    // ═══════════════════════════════════════
    // MATÉRIA COLECTÁVEL
    // ═══════════════════════════════════════

    {
      id: "materia-automoveis",
      label: "Matéria colectável — automóveis",
      value: "Cilindrada e tonelagem",
      description:
        "Para automóveis ligeiros, ciclomotores, motociclos, triciclos e quadriciclos, considera-se a cilindrada do motor. Para os automóveis pesados, considera-se também a tonelagem.",
      article: "Art. 6.º, n.º 1, alínea a) — Lei n.º 24/20",
      category: "materia-colectavel",
    },

    {
      id: "materia-aeronaves",
      label: "Matéria colectável — aeronaves",
      value: "Peso máximo autorizado à descolagem",
      description:
        "Para as aeronaves, a matéria colectável é determinada pelo peso máximo autorizado à descolagem.",
      article: "Art. 6.º, n.º 1, alínea b) — Lei n.º 24/20",
      category: "materia-colectavel",
    },

    {
      id: "materia-embarcacoes",
      label: "Matéria colectável — embarcações",
      value: "Tonelagem de arqueação bruta",
      description:
        "Para as embarcações, considera-se a tonelagem de arqueação bruta.",
      article: "Art. 6.º, n.º 1, alínea c) — Lei n.º 24/20",
      category: "materia-colectavel",
    },

    {
      id: "ano-fabrico",
      label: "Ano de fabrico",
      value: "Critério adicional",
      description:
        "O ano de fabrico do veículo também é considerado na determinação da matéria colectável.",
      article: "Art. 6.º, n.º 1, alínea d) — Lei n.º 24/20",
      category: "materia-colectavel",
    },

    {
      id: "alteracao-veiculo",
      label: "Alteração das características",
      value: "Sem correcção do imposto já pago no ano",
      description:
        "A alteração da cilindrada, potência, propulsão ou peso máximo do veículo não implica correcção do imposto já pago relativamente ao ano em que a alteração ocorreu.",
      article: "Art. 6.º, n.º 2 — Lei n.º 24/20",
      category: "materia-colectavel",
    },

    // ═══════════════════════════════════════
    // TAXAS
    // ═══════════════════════════════════════

    {
      id: "taxa-ivm",
      label: "Taxa do IVM",
      value: "Valor fixo",
      description:
        "A taxa do IVM é expressa em valor fixo, conforme as tabelas anexas à Lei.",
      article: "Art. 7.º, n.º 1 — Lei n.º 24/20",
      category: "taxas",
    },

    {
      id: "valor-mais-alto",
      label: "Características com valores diferentes",
      value: "Prevalece o valor mais alto",
      description:
        "Quando forem aplicáveis valores diferentes de imposto ao mesmo veículo em função das suas características, prevalece o valor mais alto.",
      article: "Art. 7.º, n.º 2 — Lei n.º 24/20",
      category: "taxas",
    },

    {
      id: "taxa-agricultura-pesca-electrico",
      label: "Agricultura, Pesca Artesanal e veículos eléctricos",
      value: "50% do valor tabelado",
      description:
        "Os veículos destinados exclusivamente à Agricultura e à Pesca Artesanal, bem como os veículos eléctricos, são tributados a 50% do valor constante das tabelas.",
      article: "Art. 7.º, n.º 3 — Lei n.º 24/20",
      category: "taxas",
    },

    {
      id: "ajuste-imposto",
      label: "Ajuste do valor do imposto",
      value: "Orçamento Geral do Estado",
      description:
        "O valor do imposto previsto na Lei pode ser ajustado através da Lei que aprova o Orçamento Geral do Estado.",
      article: "Art. 7.º, n.º 4 — Lei n.º 24/20",
      category: "taxas",
    },

    // ═══════════════════════════════════════
    // LIQUIDAÇÃO E PAGAMENTO
    // ═══════════════════════════════════════

    {
      id: "periodo-pagamento",
      label: "Período de liquidação e pagamento",
      value: "Janeiro a Junho",
      description:
        "O IVM é liquidado e pago entre Janeiro e Junho de cada ano.",
      article: "Art. 8.º — Lei n.º 24/20",
      category: "pagamento",
    },

    {
      id: "exercicio-ivm",
      label: "Exercício a que se refere o pagamento",
      value: "Exercício anterior",
      description:
        "O IVM pago entre Janeiro e Junho reporta-se ao exercício anterior.",
      article: "Art. 8.º — Lei n.º 24/20",
      category: "pagamento",
    },

    {
      id: "prova-pagamento",
      label: "Prova do pagamento",
      value: "Selo aprovado por diploma próprio",
      description:
        "A prova do pagamento do IVM é feita mediante a exibição de selo aprovado por diploma próprio.",
      article: "Art. 9.º, n.º 1 — Lei n.º 24/20",
      category: "pagamento",
    },

    {
      id: "primeira-transmissao",
      label: "Primeira transmissão",
      value: "Pagamento por duodécimos",
      description:
        "No caso de primeira transmissão do veículo, há lugar ao pagamento do imposto por duodécimos.",
      article: "Art. 9.º, n.º 2 — Lei n.º 24/20",
      category: "pagamento",
    },

    // ═══════════════════════════════════════
    // FISCALIZAÇÃO
    // ═══════════════════════════════════════

    {
      id: "entidades-fiscalizacao",
      label: "Fiscalização especial",
      value: "Polícia, autoridade marítima e aeronáutica",
      description:
        "Além da generalidade das autoridades, possuem competência especial de fiscalização o serviço competente da Polícia Nacional, a Administração Marítima Nacional e a Autoridade Aeronáutica.",
      article: "Art. 10.º, n.º 1 — Lei n.º 24/20",
      category: "fiscalizacao",
    },

    {
      id: "registo-licenciamento",
      label: "Registo e licenciamento",
      value: "Dependem da prova de pagamento",
      description:
        "Não pode ser praticado qualquer acto de registo ou licenciamento sobre veículos motorizados sem prova do pagamento do imposto devido.",
      article: "Art. 10.º, n.º 2 — Lei n.º 24/20",
      category: "fiscalizacao",
    },

    {
      id: "cooperacao-autarquias",
      label: "Cooperação com a Administração Tributária",
      value: "Administrações Municipais e Autarquias Locais",
      description:
        "As Administrações Municipais ou Autarquias Locais devem cooperar com a Administração Tributária no cumprimento da Lei do IVM.",
      article: "Art. 11.º — Lei n.º 24/20",
      category: "fiscalizacao",
    },

    {
      id: "reemissao-documentos",
      label: "Reemissão de documentos",
      value: "Exige prova do pagamento do último ano",
      description:
        "Nos casos de reemissão de documentos do veículo, é exigida prova do pagamento do imposto do último ano.",
      article: "Art. 12.º — Lei n.º 24/20",
      category: "fiscalizacao",
    },

    // ═══════════════════════════════════════
    // DISPOSIÇÕES FINAIS
    // ═══════════════════════════════════════

    {
      id: "diploma-revogado",
      label: "Diploma revogado",
      value: "Diploma Legislativo n.º 3837/1968",
      description:
        "A Lei n.º 24/20 revogou expressamente o Diploma Legislativo n.º 3837, de 30 de Julho de 1968, entre outros diplomas.",
      article: "Art. 13.º — Lei n.º 24/20",
      category: "disposicoes-finais",
    },

    {
      id: "duvidas-omissoes",
      label: "Dúvidas e omissões",
      value: "Assembleia Nacional",
      description:
        "Compete à Assembleia Nacional resolver as dúvidas e omissões resultantes da aplicação da Lei n.º 24/20.",
      article: "Art. 14.º — Lei n.º 24/20",
      category: "disposicoes-finais",
    },

    {
      id: "entrada-vigor",
      label: "Entrada em vigor",
      value: "30 dias após a publicação",
      description:
        "A Lei n.º 24/20 entrou em vigor 30 dias após a sua publicação.",
      article: "Art. 15.º — Lei n.º 24/20",
      category: "disposicoes-finais",
    },

    {
      id: "promulgacao",
      label: "Promulgação",
      value: "João Manuel Gonçalves Lourenço",
      description:
        "A Lei n.º 24/20 foi promulgada pelo Presidente João Manuel Gonçalves Lourenço em 30 de Junho de 2020.",
      article: "Lei n.º 24/20",
      category: "disposicoes-finais",
    },

    // ═══════════════════════════════════════
    // TABELA N.º 1 — VEÍCULOS TERRESTRES
    // ═══════════════════════════════════════

    {
      id: "ligeiros-i",
      label: "Ligeiros I",
      value: "Kz 4.300,00",
      description:
        "Para automóveis da categoria Ligeiros I, com cilindrada até 1500 cc, o valor do imposto é de Kz 4.300,00.",
      article: "Tabela n.º 1 — Lei n.º 24/20",
      category: "tabelas",
    },

    {
      id: "motociclos-iii",
      label: "Motociclos III",
      value: "Kz 3.050,00",
      description:
        "Para Motociclos, Ciclomotores, Triciclos e Quadriciclos III, a partir de 451 cc, o valor do imposto é de Kz 3.050,00.",
      article: "Tabela n.º 1 — Lei n.º 24/20",
      category: "tabelas",
    },

    {
      id: "pesados-ii",
      label: "Pesados II",
      value: "Kz 15.350,00",
      description:
        "Para veículos Pesados II, com mais de 10 toneladas, o valor do imposto é de Kz 15.350,00.",
      article: "Tabela n.º 1 — Lei n.º 24/20",
      category: "tabelas",
    },

    // ═══════════════════════════════════════
    // TABELA N.º 2 — EMBARCAÇÕES
    // ═══════════════════════════════════════

    {
      id: "tabela-embarcacoes",
      label: "Tabela das embarcações",
      value: "Arqueação bruta + potência",
      description:
        "O grupo e o valor do imposto das embarcações são determinados pela combinação da tonelagem de arqueação bruta com a potência de propulsão em HP.",
      article: "Tabela n.º 2 — Lei n.º 24/20",
      category: "tabelas",
    },

    {
      id: "potencia-embarcacoes",
      label: "Potência das embarcações",
      value: "Até 100 HP ou mais de 100 HP",
      description:
        "A Tabela n.º 2 distingue as embarcações de acordo com a potência de propulsão, considerando os escalões até 100 HP e mais de 100 HP.",
      article: "Tabela n.º 2 — Lei n.º 24/20",
      category: "tabelas",
    },

    // ═══════════════════════════════════════
    // TABELA N.º 3 — AERONAVES
    // ═══════════════════════════════════════

    {
      id: "tabela-aeronaves",
      label: "Tabela das aeronaves",
      value: "Peso máximo autorizado à descolagem",
      description:
        "O valor do imposto das aeronaves é determinado com base no peso máximo autorizado à descolagem, expresso em quilogramas.",
      article: "Tabela n.º 3 — Lei n.º 24/20",
      category: "tabelas",
    },

    {
      id: "aeronave-600kg",
      label: "Aeronave até 600 kg",
      value: "Kz 500.000,00",
      description:
        "Para uma aeronave com peso máximo autorizado à descolagem até 600 kg, o valor do imposto é de Kz 500.000,00.",
      article: "Tabela n.º 3 — Lei n.º 24/20",
      category: "tabelas",
    },
  ],
};
