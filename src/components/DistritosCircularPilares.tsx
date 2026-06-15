import { useState } from "react";
import { Network, BrainCircuit, LineChart, Cpu, HardHat, Info, CheckCircle2 } from "lucide-react";
import { Pillar } from "../types";

export default function DistritosCircularPilares() {
  const [activePillarId, setActivePillarId] = useState<number>(1);

  const pillars: Pillar[] = [
    {
      id: 1,
      title: "Infraestrutura Digital Integrada",
      short: "Sensoriamento e Conectividade",
      description: "Implementamos redes de sensores IoT, telemetria e interfaces digitais universais para rastrear em tempo real a descarga, estoque e expedição de recursos industriais valiosos.",
      iconName: "Network",
      coords: { x: "48%", y: "45%" }
    },
    {
      id: 2,
      title: "Inteligência Circular",
      short: "Algoritmos e Combinações de Massa",
      description: "Modelos proprietários de IA analisam continuamente as saídas e cruzam com demandas produtivas ativas, estabelecendo novas cadeias produtivas onde antes havia descarte.",
      iconName: "BrainCircuit",
      coords: { x: "55%", y: "30%" }
    },
    {
      id: 3,
      title: "Diagnóstico e Indicadores",
      short: "Índices Glicêmicos e de Maturidade",
      description: "Sistemas analíticos estruturados que calculam o IGC (Índice Geral de Circularidade) e o IME, balizando as decisões com auditorias científicas auditáveis transparentes.",
      iconName: "LineChart",
      coords: { x: "32%", y: "40%" }
    },
    {
      id: 4,
      title: "Aplicações Setoriais",
      short: "Softwares Dedicados por Cadeia",
      description: "Fornecemos softwares Web e Mobile pré-formatados com as particularidades de cada guilda industrial (Têxtil, Concreto, Náutica) simplificando a adoção do ecossistema.",
      iconName: "Cpu",
      coords: { x: "65%", y: "55%" }
    },
    {
      id: 5,
      title: "Governança e Ecossistemas",
      short: "Arranjo Público-Privado Territorial",
      description: "Estruturamos marcos jurídicos e financeiros compartilhados entre associações de fabricantes, prefeituras municipais e centros de fomento à simbiose industrial.",
      iconName: "HardHat",
      coords: { x: "38%", y: "65%" }
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Network": return <Network className="w-5 h-5 text-emerald-400" />;
      case "BrainCircuit": return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      case "LineChart": return <LineChart className="w-5 h-5 text-emerald-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-emerald-400" />;
      default: return <HardHat className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="distritos-pilares" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(103,116,139,0.03)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#00F5A0] bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded">
                METODOLOGIA E TRANSFORMAÇÃO
              </span>
              <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
                Do Diagnóstico à Transformação Territorial
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
                Nossos distritos industriais convertem arranjos legados em polos regenerativos unificados. Descubra os 5 pilares operacionais da ECO CONECT:
              </p>
            </div>

            {/* List and description stacks */}
            <div className="space-y-3">
              {pillars.map((pillar) => {
                const isActive = activePillarId === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isActive 
                        ? "bg-slate-900 border-zinc-800 text-white shadow-xl scale-[1.01] accent-border" 
                        : "bg-slate-900/40 hover:bg-slate-900/80 border-white/5 text-zinc-300"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg shrink-0 ${
                        isActive ? "bg-emerald-500/20 text-emerald-300" : "bg-slate-950 border border-white/5 text-emerald-400"
                      }`}>
                        {getIcon(pillar.iconName)}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-mono leading-none tracking-widest text-zinc-500 font-bold">// PILAR 0{pillar.id}</span>
                          <h4 className="font-display font-extrabold text-sm tracking-tight leading-none text-white">
                            {pillar.title}
                          </h4>
                        </div>
                        <p className={`text-xs ${isActive ? "text-zinc-300" : "text-zinc-400"} leading-relaxed`}>
                          {pillar.short}
                        </p>
                        {isActive && (
                          <p className="text-xs text-zinc-400 mt-2 border-t border-white/10 pt-2 animate-in fade-in duration-200 leading-relaxed">
                            {pillar.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Image Hotspot Map Columns */}
          <div className="lg:col-span-6 relative w-full flex justify-center">
            <div className="bg-gradient-to-tr from-emerald-500/10 to-blue-500/5 absolute inset-0 blur-3xl pointer-events-none rounded-full" />
            
            <div className="relative aspect-square w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              
              {/* Aerial Picture representing smart park */}
              <img 
                src="https://picsum.photos/seed/eco-distrito/800/800"
                alt="A sophisticated top-down aerial view of a futuristic circular industrial park in a tech-driven smart city."
                className="w-full h-full object-cover grayscale contrast-[1.1] opacity-90 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic hotspot bubbles overlay */}
              {pillars.map((pillar) => {
                const isActive = activePillarId === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillarId(pillar.id)}
                    className="absolute cursor-pointer group/spot transition-all focus:outline-none"
                    style={{ left: pillar.coords.x, top: pillar.coords.y }}
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                        isActive ? "bg-emerald-400" : "bg-[#00F5A0]/50"
                      }`} />
                      <span className={`relative inline-flex rounded-full h-6 w-6 items-center justify-center font-display text-[10px] font-extrabold border ${
                        isActive 
                          ? "bg-emerald-500 text-slate-950 border-emerald-300 shadow-md" 
                          : "bg-slate-950/80 text-[#00F5A0] border-[#00F5A0] hover:bg-[#00F5A0] hover:text-slate-950"
                      }`}>
                        {pillar.id}
                      </span>
                    </span>

                    {/* Compact hovered hotspot label */}
                    <span className="absolute left-1/2 -translate-x-1/2 top-9 bg-slate-950/90 text-white border border-white/10 text-[9px] px-2 py-0.5 rounded opacity-0 group-hover/spot:opacity-100 transition duration-200 pointer-events-none whitespace-nowrap z-30 font-semibold font-mono shadow-md">
                      Pilar {pillar.id}: {pillar.short}
                    </span>
                  </button>
                );
              })}

              {/* Little info card on bottom right coordinates */}
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-mono text-zinc-300 border border-white/10 shadow-lg flex items-center gap-1.5 pointer-events-none">
                <Info className="w-3 h-3 text-emerald-400" />
                <span>ECO CONECT DISTRITO 01 - COORDMAP STATUS: ATIVO</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
