import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Cpu, CheckCircle2, ChevronDown } from "lucide-react";

export default function InteractiveHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeDiagnosticResult, setActiveDiagnosticResult] = useState<string | null>(null);
  const [selectedIndustrialPillar, setSelectedIndustrialPillar] = useState<string>("Saneamento");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(45, Math.floor((width * height) / 18000));

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1.5;
        this.color = Math.random() > 0.4 ? "#10b981" : "#3b82f6"; // Green or Blue
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();

        // Draw dynamic outer ring glow
        c.beginPath();
        c.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
        c.fillStyle = this.color === "#10b981" ? "rgba(16, 185, 129, 0.05)" : "rgba(59, 130, 246, 0.05)";
        c.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle circular target waves in center
      ctx.strokeStyle = "rgba(16, 185, 129, 0.04)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.35, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(59, 130, 246, 0.03)";
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.2, 0, Math.PI * 2);
      ctx.stroke();

      // Inter-particle links
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = dist < 70 ? 1.2 : 0.6;
            ctx.stroke();
          }
        }

        // Mouse link
        const mDist = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
        if (mDist < 180) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(52, 211, 153, ${0.35 * (1 - mDist / 180)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      if (canvas) canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-slate-950 pt-28 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Interactive Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80" 
      />

      {/* Decorative Radial Grid Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none animated-glow-bg" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none animated-glow-bg" />

      {/* Hero Content Frame */}
      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left text column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/80 border border-emerald-500/30 rounded-full">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="font-sans text-[11px] uppercase font-bold tracking-widest text-emerald-300">
              Arquitetura de IA para Transparência de Recursos
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display font-extrabold text-[#fcfcfc] text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none">
              ECO <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">CONECT</span>
            </h1>
            <h2 className="font-display font-semibold text-zinc-100 text-xl sm:text-2xl md:text-3xl tracking-tight">
              Inteligência Estratégica para Empresas Circulares
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Conectamos empresas, cadeias produtivas e territórios através de plataformas de inteligência capazes de identificar oportunidades de circularidade, monitorar indicadores e apoiar decisões estratégicas.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => handleScrollTo("distritos-pilares")} 
              className="px-6 py-3.5 bg-emerald-500 text-slate-950 font-sans text-xs font-bold uppercase tracking-wider rounded shadow-md hover:bg-emerald-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
            >
              Conheça os Distritos Circulares
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => handleScrollTo("solucoes-setoriais")} 
              className="px-6 py-3.5 border border-white/20 text-white font-sans text-xs font-bold uppercase tracking-wider rounded hover:bg-white/5 transition flex items-center gap-2 cursor-pointer"
            >
              Explorar Soluções
            </button>
          </div>

          {/* Quick Stats Grid under Hero */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <span className="block font-display text-2xl font-bold text-white">450+</span>
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono font-bold">Empresas Conectadas</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-bold text-emerald-400">12</span>
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono font-bold">Distritos Ativos</span>
            </div>
            <div>
              <span className="block font-display text-2xl font-bold text-white">24/7</span>
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono font-bold">Diagnóstico em Tempo Real</span>
            </div>
          </div>
        </div>

        {/* Right column: Beautiful active AI diagnostic console widget */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="glass-card-dark rounded-xl border border-white/10 p-5 w-full max-w-sm relative text-left shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">ECO-AGENTE IA / DIAGNÓSTICO</span>
              </div>
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="my-4 space-y-3">
              <span className="text-[11px] text-zinc-400 block font-mono">
                Selecione um fluxo de resíduo para análise instantânea de circularidade:
              </span>

              <div className="grid grid-cols-2 gap-2">
                {["Saneamento", "Têxtil", "Construção", "Metalúrgica"].map((pillar) => (
                  <button
                    key={pillar}
                    onClick={() => setSelectedIndustrialPillar(pillar)}
                    className={`py-1.5 px-2 text-left rounded text-[11px] font-mono font-semibold transition border ${
                      selectedIndustrialPillar === pillar 
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/80" 
                        : "bg-slate-900 text-zinc-300 border-white/5 hover:border-white/15"
                    }`}
                  >
                    ⚡ {pillar}
                  </button>
                ))}
              </div>

              <div className="bg-slate-900/90 rounded border border-white/5 p-3 font-mono text-xs text-zinc-300 space-y-2 h-44 overflow-y-auto">
                <p className="text-emerald-400 text-[10px] tracking-wide font-bold uppercase">// ECO CONECT COGNITIVE ASSISTANT</p>
                {selectedIndustrialPillar === "Saneamento" && (
                  <div className="space-y-1.5">
                    <p className="text-[11px] text-zinc-400">Encontrado fluxo secundário abundante de Lodo de ETE desidratado em polo industrial.</p>
                    <p className="text-[11px] text-zinc-100 font-semibold text-teal-300">✓ Oportunidade: Reaproveitamento em cerâmica vermelha estrutural.</p>
                    <p className="text-[11px] text-zinc-400">Viabilidade técnica: 92% (COSMOB standard). Redução de CO2 estimada em 14.5 tons/mês.</p>
                  </div>
                )}
                {selectedIndustrialPillar === "Têxtil" && (
                  <div className="space-y-1.5">
                    <p className="text-[11px] text-zinc-400">Identificado descarte de sobras de retalhos compostos por algodão/poliéster.</p>
                    <p className="text-[11px] text-zinc-100 font-semibold text-teal-300">✓ Oportunidade: Desfibramento mecânico para novas mantas acústicas.</p>
                    <p className="text-[11px] text-zinc-400">Eficiência logística: Mapeado centro de processamento a 14km do polo principal.</p>
                  </div>
                )}
                {selectedIndustrialPillar === "Construção" && (
                  <div className="space-y-1.5">
                    <p className="text-[11px] text-zinc-400">Sinalizado entulho classe A triturado sem destinação comercial ativa.</p>
                    <p className="text-[11px] text-zinc-100 font-semibold text-teal-300">✓ Oportunidade: Agregado reciclado em argamassa não-estrutural.</p>
                    <p className="text-[11px] text-zinc-400">Fator de Circularidade Local: 89% com economia hídrica de 15% na cura.</p>
                  </div>
                )}
                {selectedIndustrialPillar === "Metalúrgica" && (
                  <div className="space-y-1.5">
                    <p className="text-[11px] text-zinc-400">Detecção de carepa de laminação com elevado teor de óxido de ferro.</p>
                    <p className="text-[11px] text-zinc-100 font-semibold text-teal-300">✓ Oportunidade: Aditivo densificador em concreto pesado.</p>
                    <p className="text-[11px] text-zinc-400">Destinação otimizada: Conexão automática via Smart Contract com cimenteiras locais.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
              <span>Status: Ativo</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                Data-driven AI
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Bounce Down Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500 text-[10px] tracking-wider uppercase font-mono">
        <span>Role para Explorar</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-emerald-400" />
      </div>
    </section>
  );
}
