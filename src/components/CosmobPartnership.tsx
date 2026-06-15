import { ArrowLeftRight, Landmark, ExternalLink, ShieldCheck } from "lucide-react";

export default function CosmobPartnership() {
  return (
    <section id="parceria-cosmob" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.015)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Brazil <-> Italy overlay */}
          <div className="lg:col-span-6 relative w-full flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/5 blur-2xl pointer-events-none rounded-full" />
            
            <div className="relative aspect-[4/3] w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src="https://picsum.photos/seed/cosmob-lab/800/600"
                alt="COSMOB advanced Italian testing facility and materials analytics lab"
                className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Overlay badge: BR <-> IT */}
              <div className="absolute top-4 left-4 bg-slate-950/90 border border-white/15 rounded-lg px-4 py-2 flex items-center gap-3 backdrop-blur shadow-xl">
                <span className="text-xs font-bold font-sans tracking-wide">BR</span>
                <ArrowLeftRight className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-xs font-bold font-sans tracking-wide flex items-center gap-1.5">
                  IT
                </span>
              </div>

              {/* Lab label */}
              <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur border border-white/10 px-3 py-1.5 rounded text-[10px] font-mono text-zinc-400">
                Polo Tecnológico COSMOB — Pesaro, Itália
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950 border border-emerald-500/30 px-2.5 py-1 rounded">
                Chancela de Inovação Europeia
              </span>
              <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight leading-none">
                Parceria Estratégica com a COSMOB Itália
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
                A ECO CONECT opera em conexão com a experiência internacional da COSMOB, referência em inovação industrial, design, manufatura avançada e transformação de cadeias produtivas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-950 border border-white/5 rounded-xl p-4 space-y-2 text-left">
                <div className="p-2 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded w-fit">
                  <Landmark className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-white tracking-tight">Referência Europeia</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">Mais de 40 anos de chancela científica auxiliando na transição das cadeias na Itália e continente europeu.</p>
              </div>

              <div className="bg-slate-950 border border-white/5 rounded-xl p-4 space-y-2 text-left">
                <div className="p-2 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded w-fit">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-white tracking-tight">Conformidade Certificada</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">Mapeamento de subprodutos em conformidade direta às exigentes normas da Comunidade Europeia (Green Deal).</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5 text-left">
                <span className="text-[10px] uppercase font-mono text-zinc-500 block">TRANFERÊNCIA DE TECNOLOGIA ATIVA</span>
                <span className="text-xs text-zinc-300 font-semibold">Distritos Circulares Homologados COSMOB</span>
              </div>
              <button 
                onClick={() => window.open("https://www.cosmob.it", "_blank")}
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold font-sans hover:text-emerald-300 transition shrink-0 border border-emerald-500/20 hover:border-emerald-500/40 px-4 py-2 rounded"
              >
                Visitar COSMOB Itália
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
