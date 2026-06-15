import { Cpu, Recycle, ShieldCheck, TreePine, Sparkles, Building2 } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Cpu,
      title: "IA Real",
      desc: "Nossos modelos não simulam raciocínio político; decifram o balanço de energia física territorial da cadeia de forma direta."
    },
    {
      icon: Recycle,
      title: "Especialização Circular",
      desc: "Anos de catalogação e auditorias industriais em simbiose química e revalidação física de matéria sobressalente."
    },
    {
      icon: Building2,
      title: "Modelagem Territorial",
      desc: "Aproximação direta com agentes produtores locais, prefeituras, e infraestrutura de fomento associativo regional."
    }
  ];

  return (
    <section id="about-section" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#006c44]/[0.015] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive texts */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#00F5A0] bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded">
              Quem Somos e Propósito
            </span>

            <div className="space-y-4">
              <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight leading-none">
                Posicionamento Estratégico ECO CONECT
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
                A ECO CONECT é uma empresa de tecnologia para Economia Circular baseada em Inteligência Artificial. Nós desenvolvemos, implementamos e monitoramos Distritos Circulares dinâmicos fundamentados em auditorias rigorosas e tecnologia proprietária de ponta.
              </p>
              <p className="font-sans text-sm text-zinc-500 leading-relaxed">
                Nossos ecossistemas substituem o modelo linear desatualizado através de algoritmos integrados capazes de cruzar os saldos de inputs e desperdícios das indústrias, viabilizando novos matches comerciais locais totalmente rastreados e certificados. Operamos com tecnologia transferida da COSMOB Itália.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {pillars.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="space-y-2">
                    <div className="p-2 bg-slate-950 text-[#00F5A0] border border-white/5 rounded-lg w-fit">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-white tracking-tight">{item.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic summary card mimicking scientific labs */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="bg-gradient-to-tr from-emerald-500/10 to-teal-500/5 absolute inset-0 blur-3xl pointer-events-none rounded-full" />
            
            <div className="bg-slate-950 rounded-2xl border border-white/10 p-6 w-full max-w-sm shadow-xl text-left relative overflow-hidden card-glass">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-900/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">DNA INDUSTRIAL</span>
                </div>
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="my-5 space-y-4">
                <span className="text-xs text-zinc-300 block leading-relaxed font-sans italic">
                  "Unimos o que há de mais moderno em engenharia de dados à ciência de matérias secundárias para dar utilidade industrial a subprodutos, restabelecendo o ciclo."
                </span>

                <div className="space-y-2 pt-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span>Mosaico Regional:</span>
                    <span className="font-bold text-white">12 territórios ativos</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span>Certificação Reguladora:</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1">COSMOB Standard ✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Taxa Média de Sucesso:</span>
                    <span className="font-bold text-white">89.4% Simbiose</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-lg p-3 text-[11px] text-emerald-300 font-sans flex items-start gap-1.5 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Todos os matches simbióticos passam por ensaios físicos e validação regulatória antes do faturamento.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
