import { useState } from "react";
import { 
  Building, 
  Shirt, 
  Droplet, 
  Layers, 
  Anchor, 
  Check, 
  ChevronRight, 
  Info,
  X,
  PlayCircle,
  TrendingUp,
  Sliders,
  Sparkles,
  Zap
} from "lucide-react";
import { Sector } from "../types";

export default function SectorSolutions() {
  const [selectedSectorId, setSelectedSectorId] = useState<string>("construcao");
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  
  // Simulation states
  const [wasteVolume, setWasteVolume] = useState<number>(150);
  const [efficiencyRate, setEfficiencyRate] = useState<number>(35);

  const sectors: Sector[] = [
    {
      id: "construcao",
      name: "Construção Civil",
      description: "Diagnóstico circular. Mapeamento de resíduos. Painéis analíticos.",
      icon: "Building",
      diagnostico: "Mapeamento reverso de agregados cimentícios, gesso acartonado e entulho refratário.",
      residuos: "Sobras de brita, concreto, ferragens e gesso pós-obra.",
      paineis: "Painel de logística de transbordo e certificação de destinação.",
      potentialReduction: "58%",
      currentWasteVolume: 240,
      reusedQuantity: 84,
      aiRecommendations: [
        "Reincorporação direta de agregados reciclados na produção de argamassas não estruturais.",
        "Roteamento logístico dinâmico integrado com cooperativas regionais para britagem móvel.",
        "Moagem e refino físico do gesso para fornecimento à indústria de cimento portland local."
      ]
    },
    {
      id: "moda",
      name: "Moda e Confecção",
      description: "Circularidade têxtil. Reaproveitamento. Rastreabilidade.",
      icon: "Shirt",
      diagnostico: "Desfibração de retalhos polares, algodão, liocel e poliéster reciclável pré-consumo.",
      residuos: "Retalhos de confecção de malharia fina, jeans e fios excedentes.",
      paineis: "Rastreabilidade de lotes via QR Code e passaporte físico-digital.",
      potentialReduction: "42%",
      currentWasteVolume: 80,
      reusedQuantity: 24,
      aiRecommendations: [
        "Incentivo de desfibramento para produção de feltro automotivo e acústico.",
        "Parceria de triagem reversa dedicada de fibras puras com fiadoras estaduais.",
        "Upcycling automatizado de saldos têxteis de alto padrão integrando pequenos ateliês."
      ]
    },
    {
      id: "laticinios",
      name: "Laticínios",
      description: "Eficiência produtiva. Indicadores ambientais. Oportunidades de circularidade.",
      icon: "Droplet",
      diagnostico: "Aproveitamento biotecnológico e concentração térmica de permeado do soro de leite.",
      residuos: "Soro de leite residual de queijaria e efluente lipídico de CIP.",
      paineis: "Índice de perda em processo e reuso de água condensada de evaporação.",
      potentialReduction: "65%",
      currentWasteVolume: 450,
      reusedQuantity: 180,
      aiRecommendations: [
        "Ultrafiltração fracionada para concentração proteica de WPC com cotação dinâmica de mercado.",
        "Secagem de permeado para biofertilizantes estruturados com nitrogênio orgânico municipal.",
        "Recuperação hídrica ativa de 'Água de Vaca' visando reuso completo na higienização industrial."
      ]
    },
    {
      id: "madeira",
      name: "Madeira e Móveis",
      description: "Design circular. Materiais. Monitoramento de indicadores.",
      icon: "Layers",
      diagnostico: "Otimização de plano de corte informatizado e modelagem de painel termofixo secundário.",
      residuos: "Serragem, pó de serra de MDF/MDP, e sobras estruturais de chapa.",
      paineis: "Rastreabilidade florestal inteligente e controle de resina formaldeído.",
      potentialReduction: "50%",
      currentWasteVolume: 120,
      reusedQuantity: 42,
      aiRecommendations: [
        "Aglomeramento de serragem resinada para fabricação ecológica de paletes e enchimentos.",
        "Sinergia de biomassa: briquetagem densificada de serragem para aquecimento de caldeiras locais.",
        "Reformulação de design modular visando montagem e desmontagem inteligente sem parafusos fixados."
      ]
    },
    {
      id: "nautica",
      name: "Náutica",
      description: "Circularidade industrial. Materiais compostos. Cadeias produtivas.",
      icon: "Anchor",
      diagnostico: "Descomissionamento ecológico de cascos em fibra de vidro e matriz polimérica reforçada.",
      residuos: "Retalhos de mantas de vidro, resina insaturada cura fria e cascos descartados.",
      paineis: "Pegada de polímeros avançados de casco e ciclo de fim de vida do compósito.",
      potentialReduction: "38%",
      currentWasteVolume: 65,
      reusedQuantity: 15,
      aiRecommendations: [
        "Fracionamento criogênico de fibra de vidro secundária para reforço termoplástico estrutural.",
        "Copoprocessamento energético de resinas catalisadas moídas na indústria de clínquer.",
        "Substituição parcial de reforço sintético por fibras de juta ou linho em acessórios internos."
      ]
    }
  ];

  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "Building": return <Building className={className} />;
      case "Shirt": return <Shirt className={className} />;
      case "Droplet": return <Droplet className={className} />;
      case "Layers": return <Layers className={className} />;
      default: return <Anchor className={className} />;
    }
  };

  const handleOpenSimulator = (id: string) => {
    setSelectedSectorId(id);
    const sector = sectors.find(s => s.id === id) || sectors[0];
    setWasteVolume(sector.currentWasteVolume);
    setEfficiencyRate(Math.round((sector.reusedQuantity / sector.currentWasteVolume) * 100));
    setIsSimulatorOpen(true);
  };

  const selectedSector = sectors.find(s => s.id === selectedSectorId) || sectors[0];

  // Simple math simulation formula based on actual materials values
  const multiplierPerTon = selectedSectorId === "construcao" ? 220 : selectedSectorId === "moda" ? 540 : selectedSectorId === "laticinios" ? 180 : selectedSectorId === "madeira" ? 310 : 750;
  const co2OffsetPerTon = selectedSectorId === "construcao" ? 0.45 : selectedSectorId === "moda" ? 1.8 : selectedSectorId === "laticinios" ? 0.32 : selectedSectorId === "madeira" ? 0.65 : 2.4;

  const currentReclaimedTons = Math.round((efficiencyRate / 100) * wasteVolume);
  const estimatedSavings = Math.round(currentReclaimedTons * multiplierPerTon);
  const estimatedCo2Offset = (currentReclaimedTons * co2OffsetPerTon).toFixed(1);

  return (
    <section id="solucoes-setoriais" className="py-24 bg-slate-900 border-y border-slate-800 relative">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.015)_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#00F5A0] bg-emerald-950/60 border border-emerald-500/20 px-3 py-1 rounded">
            Verticalização por Indústrias Células
          </span>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
            Soluções Setoriais
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
            Desenvolvemos aplicativos setoriais específicos para as principais verticais industriais do país, guiando a transição do desperdício para a competitividade baseada em dados.
          </p>
        </div>

        {/* 5 columns interactive cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          {sectors.map((s) => {
            return (
              <div 
                key={s.id}
                className="bg-slate-950/60 border border-white/5 rounded-xl p-5 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:shadow-lg relative card-glass"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-slate-900 text-zinc-300 border border-white/5 rounded-lg w-fit group-hover:bg-emerald-950 group-hover:text-emerald-400 transition animate-pulse">
                    {getIcon(s.icon, "w-6 h-6")}
                  </div>
                  <div className="space-y-1 text-left">
                    <h3 className="font-display font-extrabold text-sm text-white tracking-tight">
                      {s.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#00F5A0] font-bold bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
                    Redução: {s.potentialReduction}
                  </span>
                  
                  <button 
                    onClick={() => handleOpenSimulator(s.id)}
                    className="text-xs text-zinc-200 font-bold hover:text-emerald-400 flex items-center gap-0.5 group/btn cursor-pointer"
                  >
                    Conhecer Aplicativo
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational warning banner link */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => handleOpenSimulator("construcao")}
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 hover:text-emerald-100 bg-emerald-950/45 border border-emerald-500/20 px-4 py-2 rounded-lg cursor-pointer"
          >
            <PlayCircle className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Deseja testar na hora? Clique para abrir o Simulador de Economia Circular (Audit App)</span>
          </button>
        </div>

        {/* ---------------------------------------------------- */}
        {/* INTERACTIVE MINI APP SIMULATOR MODAL OVERLAY */}
        {/* ---------------------------------------------------- */}
        {isSimulatorOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-950 text-white rounded-2xl border border-white/15 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative grid grid-cols-1 md:grid-cols-12">
              
              {/* Close Button */}
              <button 
                onClick={() => setIsSimulatorOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: UI Controls & Variables input */}
              <div id="app-simulator" className="md:col-span-7 p-6 sm:p-8 space-y-6 text-left border-b md:border-b-0 md:border-r border-white/15">
                
                {/* Sector header logo */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg">
                    {getIcon(selectedSector.icon, "w-6 h-6")}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950 border border-emerald-500/30 px-2 py-0.5 rounded">
                      APLICATIVO SETORIAL SIMULADOR
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                      Eco-Audit v3.1: {selectedSector.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-900 border border-white/5 rounded-lg p-3 space-y-1">
                    <p className="text-[10px] font-mono text-zinc-400 uppercase font-bold tracking-wider">COMPOSIÇÃO E DIAGNÓSTICO ATIVO</p>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">{selectedSector.diagnostico}</p>
                  </div>
                </div>

                {/* SLIDER 1: Waste volume generator per month */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-zinc-300 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-zinc-400" />
                      Geração Mensal de Resíduos Industriais
                    </span>
                    <span className="font-mono text-emerald-400 text-sm font-bold">
                      {wasteVolume} TONS / MÊS
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={wasteVolume}
                    onChange={(e) => setWasteVolume(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" 
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                    <span>10 tons</span>
                    <span>250 tons</span>
                    <span>500 tons</span>
                  </div>
                </div>

                {/* SLIDER 2: Circular reuse efficiency percent */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-zinc-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-zinc-400" />
                      Margem Reversível Identificada via IA
                    </span>
                    <span className="font-mono text-teal-300 text-sm font-bold">
                      {efficiencyRate}% EFICIÊNCIA
                    </span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={efficiencyRate}
                    onChange={(e) => setEfficiencyRate(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-teal-400" 
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                    <span>0% (Sem simbiose)</span>
                    <span>50% (Média brasileira)</span>
                    <span>100% (COSMOB Target)</span>
                  </div>
                </div>

                {/* AI Recommendations derived on the fly */}
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-300 block flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" /> Recomendações Automáticas de IA para o Caso:
                  </span>
                  
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {selectedSector.aiRecommendations.map((rec, i) => (
                      <div key={i} className="bg-slate-900 rounded p-3 text-xs text-zinc-400 flex items-start gap-2.5 border-l-2 border-emerald-500">
                        <span className="text-emerald-400 text-[10px] font-mono select-none">#{i+1}</span>
                        <p>{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Calculated Scientific Outputs */}
              <div className="md:col-span-5 p-6 sm:p-8 bg-slate-900 flex flex-col justify-between relative text-left">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#00F5A0] block uppercase">// DADOS E MATURIDADE ESTIMADA</span>
                    <h4 className="font-display font-extrabold text-[#fcfcfc] text-lg">Retornos Estimados</h4>
                  </div>

                  <div className="space-y-4">
                    {/* Reclaimed tonnage */}
                    <div className="bg-slate-950 rounded-lg p-4 border border-white/5 space-y-1">
                      <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono font-bold">Massa Reintegrada Territorial (Circular)</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-display font-extrabold text-white">{currentReclaimedTons}</span>
                        <span className="text-xs text-zinc-400">tons / mês</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 font-mono">Resíduo reclassificado de descarte para insumo secundário.</p>
                    </div>

                    {/* COQS Offset */}
                    <div className="bg-slate-950 rounded-lg p-4 border border-white/5 space-y-1">
                      <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono font-bold">Crédito Estimado de CO2 Equivalente</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-display font-extrabold text-emerald-400">{estimatedCo2Offset}</span>
                        <span className="text-xs text-zinc-400">tCO2eq / mês</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 font-mono">Mitigação de escopo 3 de emissão de insumos.</p>
                    </div>

                    {/* Monetary savings */}
                    <div className="bg-slate-950 rounded-lg p-4 border border-white/5 space-y-1">
                      <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono font-bold">AtivosFinanceiros Recapturados Estimados</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-zinc-400">R$</span>
                        <span className="text-3xl font-display font-extrabold text-teal-300">{estimatedSavings.toLocaleString()}</span>
                        <span className="text-xs text-zinc-400">/ mês</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 font-mono">Economia na aquisição de insumos virgens substitutos.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex flex-col justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                    <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Metodologia validada com ref. COSMOB Itália.</span>
                  </div>
                  <button 
                    onClick={() => {
                      setIsSimulatorOpen(false);
                      const el = document.getElementById("chamada-final");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full text-center py-2.5 bg-emerald-500 text-slate-950 font-sans text-xs font-bold uppercase tracking-widest rounded hover:bg-emerald-400 transition"
                  >
                    Obter Relatório de Viabilidade Detalhado
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
