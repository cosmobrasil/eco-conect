import React, { useState } from "react";
import { Building2, Smartphone, Cpu, LayoutDashboard, Layers, ArrowLeftRight, HelpCircle } from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  role: string;
  flowText: string;
}

export default function EcosystemMap() {
  const [activeNode, setActiveNode] = useState<string>("agentes");

  const nodes: NodeItem[] = [
    {
      id: "empresas",
      name: "Empresas",
      icon: Building2,
      role: "Geradores e Reutilizadores de Recursos",
      flowText: "As indústrias locais inserem dados elementares e coletam frações residuais de subprodutos, realocando custos operacionais em ativos negociáveis."
    },
    {
      id: "aplicativos",
      name: "Aplicativos",
      icon: Smartphone,
      role: "Capturadores e Agendadores Físicos",
      flowText: "Modulos web/mobile de adoção simplificada para controle de transbordo, romaneios ecológicos e rotas de rastreamento de veículos em trânsito."
    },
    {
      id: "agentes",
      name: "Agentes IA",
      icon: Cpu,
      role: "Mecanismo Cognitivo Core Proprietário",
      flowText: "Nossos agentes tomam os dados elementares coletados, cruzam algoritmicamente com normas regulatórias e indicam as melhores rotas circulares territoriais."
    },
    {
      id: "dashboards",
      name: "Dashboards",
      icon: LayoutDashboard,
      role: "Visualizadores de Indicadores em Tempo Real",
      flowText: "Painéis de Business Intelligence que transformam fluxos complexos em métricas auditáveis unificadas como o Índice de Circularidade."
    },
    {
      id: "distritos",
      name: "Distrito Circular",
      icon: Layers,
      role: "Governança Territorial e Cadeias unificadas",
      flowText: "O agrupamento consolidado das indústrias em modelo simbiótico guiado por regras comuns de incentivo tributário e preservação de solo comum."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(103,116,139,0.02)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#00F5A0] bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded">
            Interconectividade de Dados e Matéria
          </span>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
            Ecossistema Tecnológico
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
            Nossa arquitetura integra múltiplos nós independentes em uma rede contínua e auto-otimizada. Veja como cada elemento se interliga no Distrito Circular:
          </p>
        </div>

        {/* Visual Map Connecting Circles Row */}
        <div className="relative border border-white/5 rounded-2xl bg-slate-900/40 p-6 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-hidden shadow-sm card-glass">
          
          {/* Loop paths visualization for backdrop (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-12 right-12 top-1/2 -translate-y-8 h-1 bg-gradient-to-r from-emerald-500/10 via-[#00F5A0]/20 to-emerald-500/10 rounded-full z-0 pointer-events-none" />

          {nodes.map((node, i) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;
            return (
              <div 
                key={node.id} 
                className="flex-1 flex flex-col items-center text-center z-10 w-full md:w-36 relative"
              >
                {/* Arrow connectors for column stacking representation inside container */}
                {i > 0 && (
                  <div className="md:hidden flex items-center justify-center my-3 text-zinc-700">
                    <ArrowLeftRight className="w-5 h-5 rotate-90" />
                  </div>
                )}

                <button 
                  onClick={() => setActiveNode(node.id)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    isActive 
                      ? "bg-slate-900 text-[#00F5A0] scale-110 shadow-lg border border-emerald-500/50 animate-pulse" 
                      : "bg-slate-950 text-zinc-400 border border-white/5 hover:bg-slate-900"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </button>

                <h4 className="font-display font-extrabold text-xs text-zinc-200 tracking-tight mt-3 mb-1">
                  {node.name}
                </h4>

                <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase bg-emerald-950/40 border border-emerald-500/10 px-1.5 py-0.2 rounded mt-1 opacity-70">
                  Etapa 0{i + 1}
                </span>
                
                {/* Visual glow stream indicating data flow direction */}
                {isActive && (
                  <span className="absolute -bottom-1 w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_8px_#00F5A0] animate-bounce" />
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Node explanations active frame */}
        {activeNode !== null && (
          <div className="bg-slate-950 text-white rounded-xl border border-white/10 p-6 text-left max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-in fade-in duration-300">
            {(() => {
              const current = nodes.find(n => n.id === activeNode) || nodes[0];
              const Icon = current.icon;
              return (
                <>
                  <div className="md:col-span-4 flex items-center gap-3">
                    <div className="p-3 bg-emerald-500/20 text-[#00F5A0] rounded-lg border border-white/5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase font-bold block">ELEMENTO PARTICIPANTE</span>
                      <h4 className="font-display font-extrabold text-sm text-white tracking-tight">{current.name}</h4>
                    </div>
                  </div>

                  <div className="md:col-span-8 space-y-1.5 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                    <p className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">{current.role}</p>
                    <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">{current.flowText}</p>
                  </div>
                </>
              );
            })()}
          </div>
        )}

      </div>
    </section>
  );
}
