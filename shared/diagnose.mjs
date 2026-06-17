// ─── OpenRouter API (compatível com OpenAI) ─────────────────────────────────
const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function callOpenRouterDiagnose(apiKey, model, companyName, sector, customDetails, metrics) {
  const systemPrompt = `Você é um especialista em Economia Circular certificado nas normas ISO 59004, ISO 59010 e ISO 59020.
Analise dados industriais e de fluxo de materiais de forma realista e analítica. Forneça feedbacks específicos para o setor selecionado.
Responda estritamente em JSON sem markdown, seguindo exatamente este schema:
{
  "maturityLevel": "Iniciante | Em Transição | Avançado | Líder Circular",
  "scores": { "strategy": 0-100, "operations": 0-100, "intelligence": 0-100, "overall": 0-100 },
  "diagnosisSummary": "string com parágrafos detalhados",
  "isoCompliance": { "iso59004": "string", "iso59010": "string", "iso59020": "string" },
  "actionPlan": [{ "step": "string", "priority": "Alta | Média | Baixa", "description": "string", "expectedImpact": "string" }],
  "circularOpportunities": [{ "name": "string", "type": "Simbiose Industrial | Upcycling Industrial | Logística Reversa | Modelos de Negócio", "description": "string", "potentialBenefit": "string", "partnersType": "string" }]
}`;

  const userPrompt = `Gere um diagnóstico de economia circular para:
- Empresa: ${companyName}
- Setor: ${sector}
- Detalhes adicionais: ${customDetails || 'Não informado'}
- Indicadores:
  - Energia Renovável: ${metrics.energyRenewable}%
  - Recirculação de Água: ${metrics.waterRecirculation}%
  - Resíduos Desviados de Aterros: ${metrics.wasteDiverted}%
  - Matéria-Prima Circular: ${metrics.rawMaterialCircular}%
  - Logística Reversa: ${metrics.logisticsReversible}%

Realize análise contextualizada, avalie maturidade ISO 59000, crie plano de ação de 4 passos e aponte oportunidades de simbiose industrial.`;

  const response = await fetch(OPENROUTER_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      'HTTP-Referer': 'https://eco-conect.netlify.app',
      'X-Title': 'Eco Conect',
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.3,
      max_tokens: 4096,
      response_format: { type: 'json_object' },
    }),
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`OpenRouter API error ${response.status}: ${errBody}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error('Resposta vazia da OpenRouter');
  return JSON.parse(content);
}

// ─── Motor de diagnóstico local (fallback setorial) ────────────────────────

export function generateMockDiagnostic(companyName, sector, customDetails, metrics) {
  const strategy = Math.round((Number(metrics.energyRenewable) * 0.4) + (Number(metrics.logisticsReversible) * 0.6));
  const operations = Math.round((Number(metrics.waterRecirculation) * 0.5) + (Number(metrics.wasteDiverted) * 0.5));
  const intelligence = Math.round((Number(metrics.rawMaterialCircular) * 0.7) + (customDetails ? 30 : 15));
  const overall = Math.min(100, Math.max(0, Math.round((strategy + operations + intelligence) / 3)));

  let maturityLevel = 'Iniciante';
  if (overall >= 85) maturityLevel = 'Líder Circular';
  else if (overall >= 60) maturityLevel = 'Avançado';
  else if (overall >= 30) maturityLevel = 'Em Transição';

  let diagnosisSummary = '';
  let iso59004 = '';
  let iso59010 = '';
  let iso59020 = '';
  let actionPlan = [];
  let circularOpportunities = [];

  if (sector === 'Laticínios & Alimentos') {
    diagnosisSummary = `A empresa ${companyName} atua no setor de Laticínios & Alimentos e apresenta um índice de circularidade geral de ${overall}%. O diagnóstico aponta que há um consumo expressivo de água nos processos de higienização (CIP) e geração de efluentes com alta carga orgânica (soro de leite e águas de lavagem). Para avançar na maturidade circular, é essencial otimizar a recirculação de água (atualmente em ${metrics.waterRecirculation}%) e direcionar subprodutos para novos ciclos de valor, evitando desperdícios e multas regulatórias.`;

    iso59004 = `Com base na ISO 59004, recomenda-se adotar o princípio de regeneração de sistemas naturais, tratando e valorizando os efluentes orgânicos do laticínio antes do descarte ou promovendo fertirrigação controlada.`;
    iso59010 = `Para conformidade com a ISO 59010, sugere-se a reconfiguração do modelo de negócios, transformando o soro de leite (subproduto rico em proteínas) em ingredientes de alto valor para nutrição esportiva (WPC/Whey) ou alimentação animal.`;
    iso59020 = `Sob a ótica da ISO 59020, deve-se estabelecer uma matriz de medição de balanço de massa física nas entradas (leite cru, insumos químicos) e saídas (produtos finais, soro descartado, perdas em lavagem), garantindo rastreabilidade quantitativa.`;

    actionPlan = [
      { step: 'Inventariamento de Efluentes Orgânicos', priority: 'Alta', description: 'Mapear quantitativamente e qualitativamente todos os fluxos de soro de leite e efluentes de lavagem das linhas de produção.', expectedImpact: 'Redução imediata de 15% na perda de matéria-prima e conformidade ambiental.' },
      { step: 'Recuperação de Água de Condensado (CIP)', priority: 'Média', description: 'Instalar sistema de filtração por membrana (osmose reversa) para reutilizar a água de condensação dos evaporadores no sistema de limpeza CIP.', expectedImpact: 'Aumento de 25% na taxa de recirculação de água e economia de até R$ 50.000 anuais.' },
      { step: 'Parceria de Simbiose de Soro', priority: 'Média', description: 'Conectar com indústrias de biogás ou fábricas de ração locais para destinar o soro de leite excedente.', expectedImpact: 'Desvio de 100% do soro de aterros ou redes de esgoto, gerando receita adicional.' },
      { step: 'Certificação de Embalagem Circular', priority: 'Baixa', description: 'Substituir as embalagens plásticas tradicionais de iogurte e queijo por polímeros reciclados pós-consumo (PCR) ou biodegradáveis.', expectedImpact: 'Melhoria de 20% no índice de logística reversa e maior aceitação da marca.' },
    ];

    circularOpportunities = [
      { name: 'Soro de Leite como Biocombustível', type: 'Simbiose Industrial', description: 'Destinação do soro excedente para biodigestores locais para produção de biogás e biofertilizante.', potentialBenefit: 'Redução de custos de descarte e geração de créditos de carbono.', partnersType: 'Usinas de Bioenergia e Cooperativas Agrícolas' },
      { name: 'Whey Protein Concentrado Local', type: 'Upcycling Industrial', description: 'Implementação de ultrafiltração interna para concentrar proteínas do soro e vendê-las para a indústria de suplementação.', potentialBenefit: 'Margem de lucro 30% maior sobre o subproduto anteriormente descartado.', partnersType: 'Distribuidores de Alimentos e Nutracêuticos' },
    ];
  } else if (sector === 'Construção Civil') {
    diagnosisSummary = `A empresa ${companyName} no setor de Construção Civil demonstra um nível de maturidade classificado como ${maturityLevel}. O setor de construção é um dos maiores consumidores de recursos naturais e geradores de resíduos sólidos (RCC). A análise mostra que a otimização da desmontabilidade dos projetos e a logística reversa de insumos excedentes (atualmente em ${metrics.logisticsReversible}%) podem trazer grandes ganhos econômicos e mitigar perdas significativas de concreto, aço e agregados.`;

    iso59004 = `Na ISO 59004, o foco deve ser o design para longevidade e desmontabilidade, garantindo que as estruturas possam ser facilmente adaptadas ou desconstruídas sem perda de valor dos materiais.`;
    iso59010 = `De acordo com a ISO 59010, recomenda-se explorar o modelo de "Construção como Serviço" ou parcerias de logística reversa com fabricantes de cimento e aço para reutilização de resíduos triturados como agregados secundários.`;
    iso59020 = `Em relação à ISO 59020, sugere-se a implantação de indicadores de intensidade de materiais por metro quadrado (kg/m²) e rastreabilidade digital (BIM) para quantificar as taxas de reciclagem de resíduos no canteiro de obras.`;

    actionPlan = [
      { step: 'Segregação de Resíduos na Fonte', priority: 'Alta', description: 'Implantar baias específicas e treinamento de operários para separar agregados, gesso, madeira e metais no próprio canteiro de obras.', expectedImpact: 'Redução de 40% no custo de caçambas e aumento na pureza do resíduo para reciclagem.' },
      { step: 'Uso de Agregados Reciclados', priority: 'Alta', description: 'Substituir brita e areia natural por agregados reciclados provenientes de plantas de britagem de RCC local para pavimentação e concreto não-estrutural.', expectedImpact: 'Redução de 15% nos custos de matéria-prima e preservação de recursos naturais.' },
      { step: 'Design para Desconstrução (DfD)', priority: 'Média', description: 'Adotar conexões parafusadas ao invés de soldadas e materiais modulares nos novos projetos arquitetônicos.', expectedImpact: 'Facilidade de 80% na desmontabilidade futura e recuperação de insumos ao final do ciclo de vida.' },
      { step: 'Passaporte Digital de Materiais', priority: 'Baixa', description: 'Criar um inventário digital com a procedência e composição química de todas as estruturas metálicas e de concreto aplicadas.', expectedImpact: 'Garantia de conformidade regulatória avançada e aumento do valor residual do ativo imobiliário.' },
    ];

    circularOpportunities = [
      { name: 'Simbiose de Gesso e Cimento', type: 'Simbiose Industrial', description: 'Envio de gesso acartonado excedente do canteiro para cimenteiras locais para ser usado como regulador de pega.', potentialBenefit: 'Eliminação completa de taxas de aterro sanitário para gesso.', partnersType: 'Indústrias de Cimento e Gesso local' },
      { name: 'Logística Reversa de Paletes e Plásticos', type: 'Logística Reversa', description: 'Acordo de devolução sistemática de paletes de madeira e sacos plásticos de cimento vazios para os fornecedores de insumos.', potentialBenefit: 'Redução do passivo de resíduos e bonificações comerciais.', partnersType: 'Fabricantes de Argamassa, Cimento e Tijolos' },
    ];
  } else if (sector === 'Indústria de Metais') {
    diagnosisSummary = `A empresa ${companyName} opera no setor de Indústria de Metais e apresenta uma circularidade de ${overall}%. O setor metal-mecânico possui alto potencial de circularidade devido à reciclabilidade infinita dos metais, mas sofre com alto consumo de energia em fornos e desperdício de cavacos, carepas e sucatas de processo. Incrementar a taxa de energia renovável (atualmente ${metrics.energyRenewable}%) e integrar cavacos em fundições parceiras locais pode acelerar drasticamente a eficiência operacional.`;

    iso59004 = `A ISO 59004 foca no fechamento de loops de materiais. A preservação do valor do metal através da separação rigorosa de ligas (alumínio, cobre, aço) é fundamental.`;
    iso59010 = `Segundo a ISO 59010, recomenda-se reconfigurar parcerias comerciais oferecendo sistemas de locação de ligas ou fornecimento garantido (buy-back) de sucatas limpas de clientes industriais.`;
    iso59020 = `Conforme a ISO 59020, deve-se auditar o fluxo de entrada e refugo de metal por tonelada produzida, monitorando perdas por oxidação e dispersão física de cavacos nas máquinas.`;

    actionPlan = [
      { step: 'Triagem de Sucata por Liga', priority: 'Alta', description: 'Implantar analisadores portáteis XRF no recebimento e descarte para evitar a contaminação de ligas metálicas valiosas no armazenamento.', expectedImpact: 'Valorização de até 30% na sucata vendida ou reutilizada internamente.' },
      { step: 'Briquetagem de Cavacos Metálicos', priority: 'Média', description: 'Instalar prensa briquetadora para compactar cavacos impregnados de óleo de corte, recuperando o lubrificante e facilitando a refusão direta.', expectedImpact: 'Recuperação de 90% do óleo de corte e redução de perdas na refusão do metal.' },
      { step: 'Eletrificação com Renovável', priority: 'Média', description: 'Migrar fornos de refusão a gás/óleo para fornos de indução elétrica alimentados por contratos PPA de energia solar ou eólica.', expectedImpact: 'Redução de até 60% nas emissões de escopo 1 e 2 da fábrica.' },
      { step: 'Servitização de Ferramental', priority: 'Baixa', description: 'Substituir a compra de ferramentas de desgaste por contratos de leasing/serviço com fabricantes de pastilhas de metal duro.', expectedImpact: 'Garantia de reciclagem do tungstênio e cobalto sem custo logístico.' },
    ];

    circularOpportunities = [
      { name: 'Simbiose de Carepa de Laminação', type: 'Simbiose Industrial', description: 'Destinação de carepas de ferro ricas em óxido para indústrias químicas de pigmentos ou cerâmica local.', potentialBenefit: 'Transformação de passivo ambiental em insumo comercial faturável.', partnersType: 'Indústrias Químicas e Fabricantes de Telhas/Tijolos' },
      { name: 'Recuperação de Metais Nobres de Banho', type: 'Upcycling Industrial', description: 'Parceria com startups de química fina para extrair cromo, níquel ou zinco dos efluentes galvânicos por eletrólise.', potentialBenefit: 'Redução do custo de tratamento de efluentes perigosos Classe I.', partnersType: 'Startups de Tecnologia Química e Galvanoplastias' },
    ];
  } else if (sector === 'Tecnologia & Eletrônicos') {
    diagnosisSummary = `A empresa ${companyName} no ramo de Tecnologia & Eletrônicos possui um índice geral de ${overall}%. O lixo eletrônico (e-waste) é uma das correntes de resíduos de mais rápido crescimento no mundo. A reciclagem de placas de circuito impresso, plásticos de engenharia e a recuperação de metais preciosos são essenciais. Implementar logística reversa robusta e design modular para fácil reparabilidade elevará substancialmente os ganhos de conformidade.`;

    iso59004 = `A ISO 59004 propõe a extensão do ciclo de vida dos produtos. Criar eletrônicos facilmente atualizáveis e reparáveis combate diretamente a obsolescência programada.`;
    iso59010 = `Com base na ISO 59010, deve-se adotar o modelo de "Produto como Serviço" (PaaS), locando hardwares corporativos com garantia de manutenção e logística reversa total de fim de vida.`;
    iso59020 = `A ISO 59020 exige a medição quantitativa da taxa de materiais reciclados ou biobaseados integrados na carcaça e componentes internos do hardware.`;

    actionPlan = [
      { step: 'Programa de Retomada de Eletrônicos', priority: 'Alta', description: 'Estruturar pontos de coleta e canais digitais para incentivar clientes a devolverem aparelhos antigos em troca de descontos em novos modelos.', expectedImpact: 'Aumento de 50% na taxa de logística reversa e captação de clientes recorrentes.' },
      { step: 'Triagem e Remanufatura Interna', priority: 'Média', description: 'Criar uma linha técnica focada em desmontar, limpar, testar e remontar aparelhos retornados para venda no mercado de seminovos/refurbished.', expectedImpact: 'Geração de nova linha de receita com margem de lucro operacional superior a 40%.' },
      { step: 'Substituição de Polímeros Virgens', priority: 'Média', description: 'Especificar plásticos reciclados pós-consumo (PCR) retardantes de chama para as molduras e carcaças dos dispositivos.', expectedImpact: 'Redução de 30% na pegada de carbono da resina plástica utilizada.' },
      { step: 'Desmontagem sem Cola', priority: 'Baixa', description: 'Redesenhar conexões internas utilizando parafusos padronizados ou travas mecânicas em vez de adesivos permanentes.', expectedImpact: 'Redução de 75% no tempo gasto em manutenção técnica de tela e bateria.' },
    ];

    circularOpportunities = [
      { name: 'Upcycling de Placas de Circuito', type: 'Upcycling Industrial', description: 'Extração e refino de ouro, prata e cobre de placas obsoletas em parceria com refinarias especializadas.', potentialBenefit: 'Acesso a metais nobres certificados livres de conflito e mineração primária.', partnersType: 'Refinarias de Metais Preciosos e Recicladoras Licenciadas' },
      { name: 'Hardware as a Service (HaaS)', type: 'Modelos de Negócio', description: 'Locação corporativa de computadores e periféricos com reciclagem contratual mandatória de peças obsoletas.', potentialBenefit: 'Estabilização de receita recorrente anual e retenção do patrimônio material.', partnersType: 'Grandes Empresas Clientes e Fintechs de Crédito' },
    ];
  } else if (sector === 'Varejo & Embalagens') {
    diagnosisSummary = `A empresa ${companyName} no setor de Varejo & Embalagens alcançou uma pontuação de circularidade de ${overall}%. O grande gargalo deste setor é o volume de embalagens de uso único de plástico e papelão descartadas após o primeiro uso. Otimizar o design para reutilização (looping) e reconfigurar a cadeia com parceiros locais pode mitigar perdas e custos logísticos, além de fortalecer o ESG para o consumidor final.`;

    iso59004 = `A ISO 59004 incentiva a eliminação de resíduos desde o design. Substituir plásticos multicamadas não recicláveis por soluções mono-material ou biodegradáveis é prioritário.`;
    iso59010 = `Pela ISO 59010, recomenda-se introduzir sistemas de embalagens retornáveis e sistemas de recarga em parceria com redes de varejo de alimentos e cosméticos.`;
    iso59020 = `Sob a ISO 59020, deve-se acompanhar o indicador de 'Circularidade de Embalagem' (PCM) medindo o percentual de insumos reciclados/reutilizados e a taxa de recuperação efetiva pós-uso.`;

    actionPlan = [
      { step: 'Monodesign de Embalagens Flexíveis', priority: 'Alta', description: 'Substituir filmes laminados multicamadas (ex: plástico + alumínio) por PE ou PP monomaterial, totalmente compatíveis com a reciclagem mecânica tradicional.', expectedImpact: 'Tornar 100% das embalagens produzidas tecnicamente recicláveis no mercado.' },
      { step: 'Hub de Logística Reversa de Papelão', priority: 'Alta', description: 'Implementar cooperativas de triagem integradas aos centros de distribuição para coletar, enfardar e retornar caixas de papelão limpas dos PDVs.', expectedImpact: 'Reutilização direta de caixas até 5 vezes e economia de 30% em embalagens secundárias.' },
      { step: 'Sistemas de Embalagem Inteligente', priority: 'Média', description: 'Implantar códigos QR dinâmicos nas embalagens para instruir o consumidor final sobre o ponto de descarte correto mais próximo.', expectedImpact: 'Aumento de 15% na taxa de retorno voluntário de embalagens pós-consumo.' },
      { step: 'Embalagens Refiláveis e Concentradas', priority: 'Baixa', description: 'Criar uma linha de produtos focada em refis concentrados que utilizam até 80% menos plástico do que as garrafas principais.', expectedImpact: 'Redução substancial do volume de transporte e economia de plástico de uso único.' },
    ];

    circularOpportunities = [
      { name: 'Simbiose de Plástico de Filme Estirável', type: 'Simbiose Industrial', description: 'Venda de resíduos de filme stretch de PEBD limpo dos CDs para extrusores locais que fabricam novos filmes plásticos.', potentialBenefit: 'Receita recorrente e desvio de aterro industrial.', partnersType: 'Recicladoras de Plástico e Fabricantes de Embalagens Industriais' },
      { name: 'Pool de Paletes Circulares', type: 'Modelos de Negócio', description: 'Compartilhamento padronizado de paletes e caixas plásticas de transporte com outros varejistas do mesmo distrito circular.', potentialBenefit: 'Redução drástica no investimento de ativos logísticos novos.', partnersType: 'Operadores Logísticos e Varejistas parceiros' },
    ];
  } else {
    diagnosisSummary = `A empresa ${companyName} atua em setor industrial geral e apresenta pontuação de circularidade de ${overall}%. O diagnóstico aponta oportunidades substanciais para a conservação de valor e retenção física de recursos por meio de otimização de fluxos, transição para energias renováveis (hoje em ${metrics.energyRenewable}%) e tratamento de resíduos operacionais para evitar aterros (hoje em ${metrics.wasteDiverted}%).`;

    iso59004 = `A ISO 59004 sugere a aplicação sistemática de princípios circulares: preservação de valor, gestão responsável e abordagem sistêmica nas operações diárias.`;
    iso59010 = `Pela ISO 59010, recomenda-se explorar parcerias locais de simbiose de calor residual, vapor ou logística de entrega partilhada.`;
    iso59020 = `Pela ISO 59020, recomenda-se a criação de um inventário detalhado de fluxos físico-químicos e cálculo do Balanço de Massa anual.`;

    actionPlan = [
      { step: 'Diagnóstico e Balanço de Massa', priority: 'Alta', description: 'Documentar todas as entradas e saídas materiais da planta produtiva detalhando perdas invisíveis e desperdícios de energia.', expectedImpact: 'Mapeamento de 100% das ineficiências físicas nos processos operacionais.' },
      { step: 'Otimização de Resíduos Industriais', priority: 'Média', description: 'Estabelecer parcerias com cooperativas e operadores licenciados para reciclagem de sucata, papéis e plásticos industriais.', expectedImpact: 'Redução de 30% nas despesas de descarte e envio para aterro sanitário.' },
      { step: 'Auditoria de Utilidades (Água/Calor)', priority: 'Média', description: 'Identificar fugas de vapor e vazamentos de água na rede, implantando isolamento térmico e medidores adicionais.', expectedImpact: 'Redução imediata de 10% nas contas de energia térmica e consumo de água.' },
      { step: 'Comitê de Governança ESG e Circular', priority: 'Baixa', description: 'Capacitar a equipe de engenharia e gestão de compras nas melhores práticas internacionais e normas ISO 59000.', expectedImpact: 'Engajamento da liderança e alinhamento com exigências de investidores.' },
    ];

    circularOpportunities = [
      { name: 'Simbiose de Energia ou Vapor residual', type: 'Simbiose Industrial', description: 'Aproveitamento de fluxos térmicos residuais para alimentar processos de baixa temperatura em indústrias vizinhas.', potentialBenefit: 'Eficiência de combustível e redução na pegada climática total.', partnersType: 'Indústrias Químicas, Alimentícias ou de Papel' },
      { name: 'Upcycling de Resíduos Não-Perigosos', type: 'Upcycling Industrial', description: 'Mapeamento de novos destinos comerciais para sobras limpas de processo como polímeros ou fibras.', potentialBenefit: 'Redução de custos operacionais e receitas comerciais marginais.', partnersType: 'Startups de Design e Recicladoras' },
    ];
  }

  return {
    maturityLevel,
    scores: { strategy, operations, intelligence, overall },
    diagnosisSummary,
    isoCompliance: { iso59004, iso59010, iso59020 },
    actionPlan,
    circularOpportunities,
  };
}
