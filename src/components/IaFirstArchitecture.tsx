import React, { useState, useEffect } from "react";
import { User, Cpu, Database, LayoutDashboard, Rocket, Send, ArrowRight, CheckCircle } from "lucide-react";

interface Step {
  id: number;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  activeSnippet: string;
}

export default function IaFirstArchitecture() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [dataPacketPosition, setDataPacketPosition] = useState<number>(-1); // -1: inactive, 0 to 4: steps
  const [packetText, setPacketText] = useState("");

  const steps: Step[] = [
    {
      id: 0,
      label: "Usuário/Empresa",
      sublabel: "Captação de Input",
      icon: User,
      description: "A empresa reporta volumes brutos de matéria prima, desperdícios, cinzas ou efluentes na plataforma ou via coletores automáticos de telemetria.",
      activeSnippet: "Sinalizado: Entrada de 42.5 tons de cinza cerâmica no município sede."
    },
    {
      id: 1,
      label: "Agentes Especializados",
      sublabel: "Processamento IA",
      icon: Cpu,
      description: "Agentes de IA processam e refinam os dados reportados, classificando a composição elementar e cruzando dados com potenciais processos de simbiose.",
      activeSnippet: "IA: Identificação de óxidos residuais. Viabilidade de calcinação estimada em 94.6%."
    },
    {
      id: 2,
      label: "Base de Conhecimento",
      sublabel: "Validação Industrial",
      icon: Database,
      description: "Nossos modelos conferem com rigor as patentes de economia circular e normas regulatórias de transição industrial do repositório normativo COSMOB Itália.",
      activeSnippet: "Validador: Conforme norma DIN-1988 sobre materiais aglutinantes secundários."
    },
    {
      id: 3,
      label: "Dashboards",
      sublabel: "Sincronização em Tempo Real",
      icon: LayoutDashboard,
      description: "Os dados validados são convertidos em indicadores ativos, atualizando dinamicamente o Índice Geral de Circularidade (IGC) e as previsões de suprimentos.",
      activeSnippet: "Mapeado: Acréscimo imediato de +1.2% no IGC do Distrito Nordeste."
    },
    {
      id: 4,
      label: "Tomada de Decisão",
      sublabel: "Ação Prática Realizável",
      icon: Rocket,
      description: "Os tomadores de decisão ou gerentes logísticos autorizam o Smart Contract, despachando automaticamente as ordens de coleta e faturamento.",
      activeSnippet: "Despachado: Ordem de destinação emitida para cimenteira local. Redução de faturamento em 18%."
    }
  ];

  // Auto animation loop to showcase packet flow if user does not interact, or slow step-throughs
  useEffect(() => {
    if (dataPacketPosition !== -1) {
      const timer = setTimeout(() => {
        if (dataPacketPosition < 4) {
          setDataPacketPosition(prev => prev + 1);
          setActiveStep(dataPacketPosition + 1);
        } else {
          // finished packet trip
          setDataPacketPosition(-1);
        }
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [dataPacketPosition]);

  const triggerSimulation = (type: string) => {
    setPacketText(type);
    setDataPacketPosition(0);
    setActiveStep(0);
  };

  return (
    <section id="ia-first" className="py-24 bg-slate-900 border-y border-slate-800 text-white relative overflow-hidden">
      {/* Decorative Matrix Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.025)_1.2px,transparent_1.2px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -top-32 left-1/3 w-[500px] h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950 border border-emerald-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#00F5A0]">
              Infraestrutura de Processamento Cognitivo
            </span>
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
            Arquitetura IA First
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
            Toda a plataforma ECO CONECT é construída sobre agentes especializados capazes de interpretar dados, apoiar diagnósticos, identificar oportunidades e gerar recomendações para empresas e territórios.
          </p>
        </div>

        {/* Dynamic Simulator Interactive Controller */}
        <div className="bg-slate-950 rounded-xl border border-white/5 p-4 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block">// SIMULADOR DE FLUXOS</span>
            <span className="text-xs sm:text-sm text-zinc-400">Tente simular o percurso de um lote de resíduos em nossa arquitetura inteligente:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => triggerSimulation("Massa Cimentícia")}
              disabled={dataPacketPosition !== -1}
              className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded font-sans text-[11px] font-bold uppercase tracking-wider transition disabled:opacity-30 flex items-center gap-1"
            >
              <Send className="w-3 h-3 text-slate-950 font-bold" /> Massa Cimentícia
            </button>
            <button
              onClick={() => triggerSimulation("Resíduo Têxtil")}
              disabled={dataPacketPosition !== -1}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded font-sans text-[11px] font-bold uppercase tracking-wider transition disabled:opacity-30 flex items-center gap-1"
            >
              <Send className="w-3 h-3 text-white font-bold" /> Sobra Têxtil
            </button>
            <button
              onClick={() => triggerSimulation("Soro Lácteo")}
              disabled={dataPacketPosition !== -1}
              className="px-3.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-[#00F5A0] border border-white/5 rounded font-sans text-[11px] font-bold uppercase tracking-wider transition disabled:opacity-30 flex items-center gap-1"
            >
              <Send className="w-3 h-3 text-[#00F5A0] font-bold" /> Soro de Leite
            </button>
          </div>
        </div>

        {/* Interactive Step Nodes Flow Diagram */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-4 border border-white/5 rounded-2xl bg-slate-950/40">
          
          {/* Connector Paths (For Desktop ONLY) */}
          <div className="hidden md:block absolute left-8 right-8 top-1/2 -translate-y-7 h-0.5 bg-zinc-800 pointer-events-none z-0">
            {/* Pulsing Glowing line showing packet traveling progress */}
            {dataPacketPosition !== -1 && (
              <div 
                className="h-full bg-emerald-400 glow-green transition-all duration-[1600ms] ease-linear"
                style={{
                  width: `${(dataPacketPosition / 4) * 100}%`
                }}
              />
            )}
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCompleted = idx < activeStep;
            const isCurrent = idx === activeStep;
            const hasPacket = dataPacketPosition === idx;

            return (
              <div 
                key={step.id}
                onClick={() => {
                  if (dataPacketPosition === -1) {
                    setActiveStep(idx);
                  }
                }}
                className="flex flex-col items-center text-center z-10 w-full md:w-36 group cursor-pointer"
              >
                {/* Node Orb with packet jump */}
                <div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-all relative ${
                    isCurrent 
                      ? "bg-emerald-500 text-slate-950 scale-110 shadow-lg glow-green border border-emerald-300/50" 
                      : isCompleted
                        ? "bg-emerald-950 text-emerald-400 border-2 border-emerald-500/40"
                        : "bg-slate-900 text-zinc-500 border border-white/5 group-hover:border-white/20"
                  }`}
                >
                  <Icon className="w-5 h-5" />

                  {/* Packet visual element indicator jumping */}
                  {hasPacket && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[8px] text-slate-950 font-bold items-center justify-center">
                        ★
                      </span>
                    </span>
                  )}
                </div>

                <span className="font-display font-bold text-xs tracking-tight text-zinc-100 block group-hover:text-emerald-400 transition">
                  {step.label}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 mt-0.5 uppercase tracking-wide">
                  {step.sublabel}
                </span>
              </div>
            );
          })}
        </div>

        {/* Active Node Detail Frame */}
        {activeStep !== null && (
          <div className="mt-10 bg-slate-950/80 rounded-xl border border-white/10 p-6 text-left grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950 border border-emerald-500/30 px-2 py-0.5 rounded">
                  ETAPA {activeStep + 1}: {steps[activeStep].sublabel}
                </span>
                <span className="text-xs text-zinc-500 font-mono">Arquitetura de Dados IA</span>
              </div>
              <h4 className="font-display font-extrabold text-lg text-white">
                {steps[activeStep].label}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>

            <div className="md:col-span-4 bg-slate-900 rounded border border-white/5 p-4 space-y-1.5 font-mono text-[11px] text-zinc-300 relative">
              <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest">// LOG DE PROCESSO EM TEMPO REAL</p>
              
              {dataPacketPosition !== -1 ? (
                <>
                  <p className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                    Rastreando: Lote de {packetText}
                  </p>
                  <p className="border-t border-white/10 pt-1 text-zinc-400 italic">
                    {steps[activeStep].activeSnippet}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-zinc-500 italic">Nenhum lote de resíduo em movimento.</p>
                  <p className="text-xs text-zinc-400 border-t border-white/5 pt-1">
                    {steps[activeStep].activeSnippet}
                  </p>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
