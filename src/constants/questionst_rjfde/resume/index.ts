import { QuizSummary } from "@/constants/questionst_cgt/resume/types";

export const resumoRJFDE: QuizSummary = {
  id: "resumo-rjfde",
  title: "Regime Jurídico das Facturas e Documentos Equivalentes",
  subtitle:
    "Decreto Presidencial n.º 292/18, de 3 de Dezembro — objecto, âmbito, definições, emissão, requisitos, facturação electrónica, arquivamento, penalidades e fiscalização",

  items: [
    // ═══════════════════════════════════════
    // DISPOSIÇÕES GERAIS
    // ═══════════════════════════════════════

    {
      id: "aprovacao-rjfde",
      label: "Aprovação",
      value: "Regime Jurídico das Facturas e Documentos Equivalentes",
      description:
        "É aprovado, pelo Decreto Presidencial n.º 292/18, o Regime Jurídico das Facturas e dos Documentos Equivalentes.",
      article: "Art. 1.º — Decreto Presidencial n.º 292/18",
      category: "disposicoes-gerais",
    },

    {
      id: "objecto-rjfde",
      label: "Objecto",
      value: "Emissão, conservação e arquivamento",
      description:
        "O Regime estabelece as regras aplicáveis à emissão, conservação e arquivamento das facturas e documentos equivalentes.",
      article: "Art. 2.º — Decreto Presidencial n.º 292/18",
      category: "disposicoes-gerais",
    },

    {
      id: "ambito-aplicacao",
      label: "Âmbito de aplicação",
      value: "Contribuintes com residência fiscal em Angola",
      description:
        "O Diploma aplica-se aos contribuintes com residência fiscal em Angola, em todas as transmissões de bens, prestações de serviços, adiantamentos ou pagamentos antecipados que realizem.",
      article: "Art. 3.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "disposicoes-gerais",
    },

    {
      id: "equiparacao-bens",
      label: "Fornecimento equiparado a bens",
      value: "Energia eléctrica, gás, calor, frio e água",
      description:
        "Para efeitos do Diploma, o fornecimento de energia eléctrica, gás, calor, frio, água e similares é equiparado a bens.",
      article: "Art. 5.º, n.º 2 — Decreto Presidencial n.º 292/18",
      category: "disposicoes-gerais",
    },

    {
      id: "documentos-nao-facturas",
      label: "Documentos não considerados factura",
      value: "Factura pró-forma, nota de preço, nota de encomenda, entre outros",
      description:
        "Não são consideradas facturas nem documentos equivalentes a factura pró-forma, a nota de preço, a nota de encomenda, a nota de remessa, o orçamento, o bordereaux bancário e a guia de remessa ou transporte, entre outros.",
      article: "Art. 3.º, n.º 4 — Decreto Presidencial n.º 292/18",
      category: "disposicoes-gerais",
    },

    // ═══════════════════════════════════════
    // DEFINIÇÕES
    // ═══════════════════════════════════════

    {
      id: "auto-facturacao-def",
      label: "Auto-facturação",
      value: "Emissão pelos adquirentes em substituição dos fornecedores",
      description:
        "Auto-facturação é a emissão de Facturas/Recibos pelos adquirentes de bens ou serviços, em substituição dos seus fornecedores.",
      article: "Art. 4.º, alínea a) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "factura-def",
      label: "Factura",
      value: "Comprova a transmissão de bens ou a prestação de serviços",
      description:
        "Factura é o documento comercial que formaliza e comprova a transmissão de bens, a prestação de serviços e quaisquer adiantamentos ou pagamentos antecipados.",
      article: "Art. 4.º, alínea e) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "documento-equivalente-def",
      label: "Documento Equivalente",
      value: "Recibos, nota de débito, nota de crédito, despacho aduaneiro, entre outros",
      description:
        "São documentos equivalentes os recibos, a nota de débito, a nota de crédito, o despacho aduaneiro, o talão de venda ou de serviços, entre outros documentos equiparados à factura.",
      article: "Art. 4.º, alínea d) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "factura-recibo-def",
      label: "Factura/Recibo",
      value: "Comprova a transmissão e o pagamento total do bem ou serviço",
      description:
        "A Factura/Recibo é o documento comercial que, além de documentar a transmissão de bens ou a prestação de serviços, comprova igualmente o pagamento total do bem ou serviço facturado.",
      article: "Art. 4.º, alínea h) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "factura-electronica-def",
      label: "Factura em Formato Electrónico",
      value: "Emitida electronicamente por software de facturação",
      description:
        "A Factura em Formato Electrónico é o documento comercial emitido electronicamente por software de facturação, que formaliza e comprova a transmissão de bens ou a prestação de serviços.",
      article: "Art. 4.º, alínea i) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "nota-debito-def",
      label: "Nota de Débito",
      value: "Suporta situações de débito, sem obrigação de emissão de factura",
      description:
        "A Nota de Débito é o documento comercial equivalente a factura que suporta situações de débito, quando não haja obrigação de emissão de factura nos termos do Diploma.",
      article: "Art. 4.º, alínea j) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "nota-credito-def",
      label: "Nota de Crédito",
      value: "Rectifica factura, reduzindo o valor",
      description:
        "A Nota de Crédito é o documento comercial rectificativo emitido sempre que, por qualquer motivo, o valor de uma factura ou documento equivalente seja reduzido, nomeadamente em devoluções ou descontos.",
      article: "Art. 4.º, alínea k) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "programa-informatico-def",
      label: "Programa Informático de Facturação",
      value: "Certificado, com numeração sequencial e cronológica",
      description:
        "É o programa informático de emissão de facturas e documentos equivalentes, devidamente certificado, que garante a numeração sequencial e cronológica dos documentos e não permite a sua eliminação após emissão.",
      article: "Art. 4.º, alínea l) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "recibo-def",
      label: "Recibo",
      value: "Comprova o pagamento parcial ou total",
      description:
        "Recibo é o documento comercial que comprova o pagamento parcial ou total do bem ou serviço facturado.",
      article: "Art. 4.º, alínea m) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "volume-negocios-def",
      label: "Volume de Negócios",
      value: "Total dos proveitos de um exercício económico",
      description:
        "Volume de Negócios corresponde ao total dos proveitos de um determinado exercício económico.",
      article: "Art. 4.º, alínea n) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "factura-generica-def",
      label: "Factura Genérica",
      value: "Emitida mensalmente por Instituição Financeira",
      description:
        "A Factura Genérica é a factura única, com periodicidade mensal, emitida por Instituição Financeira, que compreende todos os serviços cobrados aos seus clientes naquele período.",
      article: "Art. 4.º, alínea f) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    {
      id: "factura-global-def",
      label: "Factura Global",
      value: "Engloba transmissões e prestações do período, periodicidade mensal",
      description:
        "A Factura Global é o documento comercial, com periodicidade máxima mensal, que engloba todas as transmissões de bens e prestações de serviços efectuadas durante o período de referência.",
      article: "Art. 4.º, alínea g) — Decreto Presidencial n.º 292/18",
      category: "definicoes",
    },

    // ═══════════════════════════════════════
    // EMISSÃO DE FACTURAS
    // ═══════════════════════════════════════

    {
      id: "obrigatoriedade-emissao",
      label: "Obrigatoriedade de emissão",
      value: "Em todas as transmissões de bens e prestações de serviços localizadas em Angola",
      description:
        "É obrigatória a emissão de facturas ou documentos equivalentes em todas as transmissões de bens, prestações de serviços, adiantamentos ou pagamentos antecipados considerados localizados em território nacional.",
      article: "Art. 5.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "emissao-facturas",
    },

    {
      id: "dispensa-emissao",
      label: "Dispensa de emissão",
      value: "Distribuição automática, bilhetes/senhas, vendedores ambulantes",
      description:
        "A obrigação de emissão de factura é dispensada em operações como transmissão de bens por aparelhos de distribuição automática, prestações de serviços com emissão de bilhete/senha/portagem e transmissões por vendedores ambulantes e feirantes autorizados, desde que a aquisição não esteja relacionada com actividade comercial, industrial ou de profissão liberal.",
      article: "Art. 6.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "emissao-facturas",
    },

    {
      id: "taloes-obrigatorios",
      label: "Talões de venda",
      value: "Obrigatórios mesmo com dispensa de factura",
      description:
        "A dispensa de facturação nos casos de distribuição automática e de bilhetes/senhas não afasta a obrigação de emissão de talões de venda do bem ou do serviço prestado.",
      article: "Art. 6.º, n.º 2 — Decreto Presidencial n.º 292/18",
      category: "emissao-facturas",
    },

    {
      id: "recibos-equiparacao",
      label: "Equiparação ao Recibo",
      value: "Factura/Recibo e aviso de cobrança/recibo",
      description:
        "Para efeitos do Diploma, a Factura/Recibo e o aviso de cobrança/recibo equiparam-se ao Recibo.",
      article: "Art. 7.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "emissao-facturas",
    },

    // ═══════════════════════════════════════
    // PROCESSAMENTO E PRAZOS
    // ═══════════════════════════════════════

    {
      id: "limite-programas-certificados",
      label: "Limite para uso de programas certificados",
      value: "Volume de negócios igual ou superior a USD 250.000,00",
      description:
        "Os agentes económicos com volume de negócios igual ou superior ao montante equivalente em AKz a USD 250.000,00 devem emitir facturas ou documentos equivalentes através de programas informáticos certificados.",
      article: "Art. 8.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "processamento",
    },

    {
      id: "prazo-emissao-factura",
      label: "Prazo de emissão da factura",
      value: "Até ao 5.º dia útil seguinte à operação",
      description:
        "A factura ou documento equivalente deve ser emitida até ao quinto dia útil seguinte ao da operação que lhe deu causa, nomeadamente a transmissão do bem ou a prestação do serviço.",
      article: "Art. 9.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "processamento",
    },

    {
      id: "factura-global-prazo",
      label: "Prazo da factura global",
      value: "Até ao 5.º dia útil posterior ao final do período de facturação",
      description:
        "A factura global, quando a transmissão de bens ou a prestação de serviços se prolonga no tempo, deve ser emitida até ao quinto dia útil posterior ao final do período de facturação adoptado.",
      article: "Art. 9.º, n.º 3 — Decreto Presidencial n.º 292/18",
      category: "processamento",
    },

    {
      id: "limite-autofacturacao",
      label: "Limite da autofacturação",
      value: "Máximo de 10% dos custos de mercadorias e matérias consumidas",
      description:
        "As Facturas/Recibos emitidas por autofacturação não devem corresponder a mais do que 10% do total de custos das mercadorias vendidas e matérias consumidas da entidade emitente.",
      article: "Art. 8.º, n.º 3 — Decreto Presidencial n.º 292/18",
      category: "processamento",
    },

    {
      id: "autofacturacao-sectores",
      label: "Sectores elegíveis para autofacturação",
      value: "Agricultura, silvicultura, aquicultura, apicultura, avicultura, pescas e pecuária",
      description:
        "As entidades do sector da hotelaria, restauração e similares, com contabilidade organizada, podem substituir-se aos fornecedores na emissão de Facturas/Recibos, desde que sejam exclusivamente aquisições de produtos dos sectores agricultura, silvicultura, aquicultura, apicultura, avicultura, pescas e pecuária.",
      article: "Art. 10.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "processamento",
    },

    // ═══════════════════════════════════════
    // REQUISITOS DAS FACTURAS
    // ═══════════════════════════════════════

    {
      id: "elementos-obrigatorios",
      label: "Elementos obrigatórios",
      value: "Nome, NIF, endereço, preço, taxas de imposto, data, entre outros",
      description:
        "As facturas ou documentos equivalentes devem conter obrigatoriamente elementos como o nome/firma e NIF do fornecedor e do adquirente, a discriminação dos bens ou serviços, o preço unitário e total, as taxas de imposto aplicáveis e a data da emissão.",
      article: "Art. 11.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "requisitos-facturas",
    },

    {
      id: "lingua-emissao",
      label: "Língua de emissão",
      value: "Português",
      description:
        "As facturas ou documentos equivalentes devem ser redigidos em língua portuguesa, nos termos exigidos pelo Diploma.",
      article: "Art. 11.º, n.º 1, alínea h) — Decreto Presidencial n.º 292/18",
      category: "requisitos-facturas",
    },

    {
      id: "taxas-diferentes",
      label: "Bens/serviços com taxas diferentes",
      value: "Discriminação separada",
      description:
        "Quando os bens e serviços estejam sujeitos a taxas de imposto diferentes, a sua descrição na factura deve ser efectuada de forma separada.",
      article: "Art. 11.º, n.º 2 — Decreto Presidencial n.º 292/18",
      category: "requisitos-facturas",
    },

    // ═══════════════════════════════════════
    // FACTURAÇÃO ELECTRÓNICA
    // ═══════════════════════════════════════

    {
      id: "efeitos-juridicos-electronica",
      label: "Efeitos jurídicos da factura electrónica",
      value: "Equiparados às facturas e documentos equivalentes em papel",
      description:
        "As facturas em formato electrónico têm efeitos jurídicos equiparados aos das facturas e documentos equivalentes emitidos em suporte de papel.",
      article: "Art. 13.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "facturacao-electronica",
    },

    {
      id: "disponibilizacao-electronica",
      label: "Disponibilização da factura electrónica",
      value: "Aos adquirentes ou interessados legítimos, quando solicitada",
      description:
        "As facturas emitidas em formato electrónico são disponibilizadas aos adquirentes de bens e serviços, ou a outros legítimos interessados, quando solicitadas.",
      article: "Art. 13.º, n.º 2 — Decreto Presidencial n.º 292/18",
      category: "facturacao-electronica",
    },

    {
      id: "conservacao-electronica",
      label: "Conservação da factura electrónica",
      value: "Arquivo digital ou electrónico",
      description:
        "As facturas emitidas em formato electrónico são conservadas em arquivo digital ou electrónico.",
      article: "Art. 13.º, n.º 3 — Decreto Presidencial n.º 292/18",
      category: "facturacao-electronica",
    },

    {
      id: "diploma-proprio-electronica",
      label: "Diploma próprio sobre facturação electrónica",
      value: "Disciplina sistemas de facturação, contabilidade e certificação",
      description:
        "É estabelecida em diploma próprio a disciplina jurídica sobre facturação electrónica, abrangendo os sistemas de facturação, contabilidade, inventariação e a respectiva certificação e submissão à Administração Geral Tributária.",
      article: "Art. 14.º — Decreto Presidencial n.º 292/18",
      category: "facturacao-electronica",
    },

    // ═══════════════════════════════════════
    // ARQUIVAMENTO
    // ═══════════════════════════════════════

    {
      id: "prazo-arquivamento",
      label: "Prazo de arquivamento",
      value: "Nos termos do Código Geral Tributário",
      description:
        "Os contribuintes são obrigados a arquivar e conservar todas as facturas ou documentos equivalentes, bem como os registos informáticos relacionados, nos prazos estabelecidos pelo Código Geral Tributário.",
      article: "Art. 15.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "arquivamento",
    },

    {
      id: "copias-seguranca",
      label: "Cópias de segurança",
      value: "Disponíveis para consulta imediata quando exigidas",
      description:
        "As cópias de segurança das facturas ou documentos equivalentes arquivados em formato digital devem estar disponíveis para consulta imediata sempre que exigidas por uma autoridade oficial.",
      article: "Art. 15.º, n.º 2 — Decreto Presidencial n.º 292/18",
      category: "arquivamento",
    },

    // ═══════════════════════════════════════
    // PENALIDADES
    // ═══════════════════════════════════════

    {
      id: "multa-nao-emissao",
      label: "Multa por não emissão de factura",
      value: "7% (15% em caso de incumprimento reiterado)",
      description:
        "O contribuinte que proceder à transmissão de bens ou prestação de serviços sem suporte em facturas ou documentos equivalentes sujeita-se a multa de 7% do valor da factura não emitida, elevada a 15% em caso de incumprimento reiterado.",
      article: "Art. 16.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "penalidades",
    },

    {
      id: "incumprimento-reiterado-def",
      label: "Incumprimento reiterado",
      value: "Mais de quatro transmissões sem factura",
      description:
        "Considera-se incumprimento reiterado a não emissão de factura ou documento equivalente em mais de quatro transmissões de bens ou serviços.",
      article: "Art. 16.º, n.º 2 — Decreto Presidencial n.º 292/18",
      category: "penalidades",
    },

    {
      id: "multa-omissao-essencial",
      label: "Multa por omissão de elementos essenciais",
      value: "5% do valor da factura",
      description:
        "A emissão de factura com omissão ou indicação errada do preço, número de identificação fiscal, endereço ou nome da entidade emitente sujeita-se a multa de 5% do valor da factura emitida.",
      article: "Art. 16.º, n.º 4, alínea a) — Decreto Presidencial n.º 292/18",
      category: "penalidades",
    },

    {
      id: "multa-omissao-outros",
      label: "Multa por omissão de outros elementos",
      value: "1% do valor da factura",
      description:
        "A omissão ou indicação errada de quaisquer outros elementos obrigatórios da factura sujeita-se a multa de 1% do valor da factura emitida.",
      article: "Art. 16.º, n.º 4, alínea b) — Decreto Presidencial n.º 292/18",
      category: "penalidades",
    },

    {
      id: "multa-arquivamento",
      label: "Multa por incumprimento do arquivamento",
      value: "1% do valor de cada factura",
      description:
        "O incumprimento da obrigação de arquivamento prevista no Art.º 15.º, n.º 1, é punível com multa correspondente a 1% do valor de cada factura ou documento equivalente.",
      article: "Art. 16.º, n.º 5 — Decreto Presidencial n.º 292/18",
      category: "penalidades",
    },

    // ═══════════════════════════════════════
    // FISCALIZAÇÃO
    // ═══════════════════════════════════════

    {
      id: "competencia-fiscalizacao",
      label: "Competência de fiscalização",
      value: "Administração Geral Tributária",
      description:
        "A competência para a fiscalização das obrigações decorrentes da aplicação do Diploma é da Administração Geral Tributária.",
      article: "Art. 17.º, n.º 1 — Decreto Presidencial n.º 292/18",
      category: "fiscalizacao",
    },

    {
      id: "auto-noticia",
      label: "Auto de notícia",
      value: "Comunicação por outros órgãos de inspecção",
      description:
        "Caso outros órgãos de inspecção do Estado detectem incumprimento das obrigações previstas no Diploma, devem comunicar o facto à Administração Geral Tributária através de «auto de notícia».",
      article: "Art. 17.º, n.º 2 — Decreto Presidencial n.º 292/18",
      category: "fiscalizacao",
    },

    // ═══════════════════════════════════════
    // DISPOSIÇÕES FINAIS
    // ═══════════════════════════════════════

    {
      id: "revogacao-rjfde",
      label: "Revogação",
      value: "Decreto Presidencial n.º 149/13",
      description:
        "É revogada toda a legislação que contrarie o disposto no Diploma, nomeadamente o Decreto Presidencial n.º 149/13, de 1 de Outubro.",
      article: "Art. 18.º — Decreto Presidencial n.º 292/18",
      category: "disposicoes-finais",
    },

    {
      id: "duvidas-omissoes-rjfde",
      label: "Dúvidas e omissões",
      value: "Presidente da República",
      description:
        "Compete ao Presidente da República resolver as dúvidas e omissões suscitadas na interpretação e aplicação do Diploma.",
      article: "Art. 19.º — Decreto Presidencial n.º 292/18",
      category: "disposicoes-finais",
    },

    {
      id: "entrada-vigor-rjfde",
      label: "Entrada em vigor",
      value: "120 dias após a publicação",
      description:
        "O Decreto Presidencial n.º 292/18 entra em vigor 120 dias após a data da sua publicação.",
      article: "Art. 20.º — Decreto Presidencial n.º 292/18",
      category: "disposicoes-finais",
    },

    {
      id: "promulgacao-rjfde",
      label: "Promulgação",
      value: "João Manuel Gonçalves Lourenço",
      description:
        "O Decreto Presidencial n.º 292/18 foi promulgado pelo Presidente João Manuel Gonçalves Lourenço em 22 de Novembro de 2018.",
      article: "Decreto Presidencial n.º 292/18",
      category: "disposicoes-finais",
    },
  ],
};
