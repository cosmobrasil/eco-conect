import React, { useState } from "react";
import { 
  CheckCircle, 
  Recycle, 
  Layers, 
  Settings, 
  Sparkles, 
  Smartphone, 
  BarChart3, 
  Globe2, 
  Cpu,
  ChevronDown,
  X,
  Zap,
  Check
} from "lucide-react";

interface PitchItem {
  id: number;
  label: string;
  detail: string;
  badge: string;
  targetId: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function QuickPitch() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [completedList, setCompletedList] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);

  const pitchItems: PitchItem[] = [
    {
      id: 1,
      label: "Economia Circular",
      detail: "Restauração de recursos e eliminação de resíduos industriais através de inteligência territorial.",
      badge: "Inovação",
      targetId: "hero",
      icon: Recycle,
    },
    {
      id: 2,
      label: "Distritos Circulares",
      detail: "Implementação de ecossistemas industriais integrados e governança compartilhada entre empresas.",
      badge: "Territórios",
      targetId: "distritos-pilares",
      icon: Layers,
    },
    {
      id: 3,
      label: "Tecnologia Própria",
      detail: "Plataforma proprietária contínua, escalável, livre de dependências de softwares terceiros.",
      badge: "Proprietária",
      targetId: "what-we-do",
      icon: Settings,
    },
    {
      id: 4,
      label: "Agentes de Inteligência Artificial",
      detail: "Agentes cognitivos autônomos que analisam dados, formulam diagnósticos e auxiliam no supply chain.",
      badge: "Agentes IA",
      targetId: "ia-first",
      icon: Sparkles,
    },
    {
      id: 5,
      label: "Aplicativos Setoriais",
      detail: "Ferramentas modulares sob medida para as maiores cadeias produtivas (Construção, Têxtil, etc).",
      badge: "Apps Mobile/Web",
      targetId: "solucoes-setoriais",
      icon: Smartphone,
    },
    {
      id: 6,
      label: "Dashboards de Inteligência",
      detail: "Métricas globais precisas em tempo real como o IGC (Índice Geral de Circularidade) e IME.",
      badge: "SaaS Monitor",
      targetId: "dashboards",
      icon: BarChart3,
    },
    {
      id: 7,
      label: "Conectada à COSMOB Itália",
      detail: "Transferência tecnológica direta com o maior polo de manufatura avançada e design circular da Itália.",
      badge: "Parceria Global",
      targetId: "parceria-cosmob",
      icon: Globe2,
    },
    {
      id: 8,
      label: "IA First & Data Driven",
      detail: "Decisões e otimizações orientadas puramente a dados de massa, energia e materiais territoriais.",
      badge: "IA First",
      targetId: "ia-first",
      icon: Cpu,
    },
  ];

  const handleScroll = (id: string, index: number) => {
    setActiveItem(index === activeItem ? null : index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-950 border border-emerald-500/30 text-white font-sans text-xs font-semibold px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-all text-left group cursor-pointer"
        id="quick-pitch-trigger"
      >
        <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
        <span>ECO CONECT em 15 Segundos</span>
        <span className="bg-emerald-500/20 text-[10px] px-1.5 py-0.5 rounded-full ml-1">8</span>
      </button>
    );
  }

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 w-full max-w-sm glass-card-dark border border-white/10 rounded-xl shadow-2xl p-4 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto card-glass"
      id="quick-pitch-modal"
    >
      <div className="flex justify-between items-center pb-2 border-b border-white/5 flex-nowrap">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <h4 className="font-display text-sm font-bold tracking-tight text-white flex items-center gap-1">
            ECO CONECT <span className="text-[10px] uppercase font-bold text-[#00F5A0] bg-emerald-950/60 border border-emerald-500/20 px-1.5 py-0.5">Flash 15s</span>
          </h4>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/5 transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-[11px] text-zinc-400 mt-1 mb-3">
        Fatos rápidos da ECO CONECT. Clique em qualquer pilar para localizar no mapa em tempo real:
      </p>

      <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
        {pitchItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <div 
              key={item.id}
              className={`rounded-lg border text-left p-2.5 transition-all cursor-pointer ${
                isActive 
                  ? "bg-slate-900 text-white border-emerald-500/50 shadow-md" 
                  : "bg-slate-950/60 hover:bg-slate-900 border-white/5 text-zinc-300"
              }`}
              onClick={() => handleScroll(item.targetId, item.id)}
            >
              <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1 rounded ${isActive ? "bg-emerald-500 text-slate-950" : "bg-slate-950 text-emerald-400 border border-white/5"}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold tracking-tight leading-none">
                    {item.id}. {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-1 flex-nowrap shrink-0">
                  <span className={`text-[9px] px-1 py-0.2 rounded font-medium ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-900 text-zinc-400 border border-white/5"
                  }`}>
                    {item.badge}
                  </span>
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                </div>
              </div>
              
              {isActive && (
                <div className="mt-1.5 text-[11px] text-zinc-300 border-t border-white/10 pt-1.5 animate-in slide-in-from-top-1 duration-200">
                  {item.detail}
                  <div className="mt-1 text-[9px] text-[#00F5A0] font-mono font-bold flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5" /> Foco Ativo no Site
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-zinc-500">
          Checklist: 8/8 Verificados
        </span>
        <span className="text-[10px] text-[#00F5A0] font-bold bg-emerald-950/60 border border-emerald-500/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
          IA First &amp; Data Driven ⚡
        </span>
      </div>
    </div>
  );
}
