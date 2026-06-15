import React, { useState } from "react";
import { Network, TrendingUp, Bot, LayoutGrid, CheckCircle2 } from "lucide-react";

interface Frente {
  id: string;
  title: string;
  description: string;
  longText: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

export default function StrategicFrentes() {
  const [activeFrente, setActiveFrente] = useState<string>("distritos");

  const frentes: Frente[] = [
    {
      id: "distritos",
      title: "Distritos Circulares",
      description: "Planejamento, implementação e monitoramento de ecossistemas produtivos circulares.",
      longText: "Nossos Distritos Circulares integram territorialmente indústrias, cooperativas e parceiros tecnológicos para estabelecer um fluxo contínuo de recursos secundários de base local, reduzindo a pegada ecológica global de toda a região.",
      icon: Network,
      features: [
        "Governança Digital Compartilhada",
        "Arranjos Produtivos Locais (APL)",
        "Logística Reversa Regional",
        "Sinergia Multinsetorial"
      ]
    },
    {
      id: "inteligencia",
      title: "Inteligência Circular",
      description: "Dashboards, indicadores e sistemas analíticos.",
      longText: "Utilizamos inteligência de dados avançada e algoritmos preditivos proprietários para modelar fluxos físicos de massa e energia na escala territorial, identificando oportunidades de simbiose industrial e mitigação de perdas.",
      icon: TrendingUp,
      features: [
        "Mapeamento Térmico de Resíduos",
        "Pegada de Carbono em Tempo Real",
        "Previsão de Matéria Prima Secundária",
        "Auditoria de Rastreabilidade"
      ]
    },
    {
      id: "agentes",
      title: "Agentes de IA",
      description: "Agentes especializados em circularidade, diagnóstico e tomada de decisão.",
      longText: "Nossos Agentes de IA são assistentes cognitivos dedicados, configurados especificamente sob dados das operações industriais. Eles emitem lembretes proativos e geram simulações instantâneas de rotas alternativas de valor.",
      icon: Bot,
      features: [
        "Auxílio ao Planejamento Integrado",
        "Diagnósticos Automatizados de Circularidade",
        "Análise de Regulamentação e Patentes",
        "Recomendações e Escoragem Automática"
      ]
    },
    {
      id: "apps",
      title: "Aplicativos Setoriais",
      description: "Ferramentas digitais voltadas para diferentes cadeias produtivas.",
      longText: "Desenvolvemos suítes de ferramentas móveis e painéis SaaS sob medida para necessidades críticas de nichos industriais, habilitando coletores, transportadoras e fábricas a interagir de modo imediato de ponta a ponta.",
      icon: LayoutGrid,
      features: [
        "Interfaces Simplificadas Úteis",
        "Registro Instantâneo em Campo",
        "Conexão de Marketplaces Locais",
        "Certificação de Transação Ecológica"
      ]
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.03)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-xl space-y-2">
            <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded">
              Tecnologia Integrada Proprietária
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
              O Que Fazemos
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
              Atuamos na intersecção entre inovação tecnológica e ciência industrial para prover soluções reais na transição das cadeias produtivas.
            </p>
          </div>
          <div className="flex items-center gap-1.5 h-1 md:mb-2 bg-gradient-to-r from-emerald-500 to-teal-400 w-24 rounded-full shrink-0" />
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Clickable Stack */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {frentes.map((item) => {
              const Icon = item.icon;
              const isActive = activeFrente === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFrente(item.id)}
                  className={`w-full text-left p-5 rounded-lg border transition-all cursor-pointer ${
                    isActive 
                      ? "bg-slate-900 border-emerald-500/50 text-white shadow-lg scale-[1.02] accent-border" 
                      : "bg-slate-900/40 hover:bg-slate-900/80 border-white/5 text-zinc-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg shrink-0 ${
                      isActive ? "bg-emerald-500 text-slate-950" : "bg-slate-950 border border-white/5 text-emerald-400"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-sm tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className={`text-xs ${isActive ? "text-zinc-300" : "text-zinc-500"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Display Console Detail Panel */}
          <div className="lg:col-span-7 bg-slate-900/60 rounded-xl border border-white/10 p-8 text-left flex flex-col justify-between relative overflow-hidden card-glass">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            {(() => {
              const current = frentes.find(f => f.id === activeFrente) || frentes[0];
              const Icon = current.icon;
              return (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-emerald-500">CONCEITO E ATUAÇÃO</span>
                      <h4 className="font-display font-bold text-xl text-white tracking-tight">{current.title}</h4>
                    </div>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {current.longText}
                  </p>

                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 block border-b border-white/10 pb-2">
                      Capacidade e Recursos
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {current.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-zinc-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="font-sans text-xs sm:text-sm">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
              <span className="text-emerald-500 font-bold">ECO CONECT Architecture</span>
              <span>100% de Conformidade de dados</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
