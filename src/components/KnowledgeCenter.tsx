import { useState } from "react";
import { BookOpen, Calendar, ArrowUpRight, CheckCircle, Download, FileText } from "lucide-react";
import { ContentCard } from "../types";

export default function KnowledgeCenter() {
  const [downloadingId, setDownloadingId] = useState<number | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [downloadedIds, setDownloadedIds] = useState<number[]>([]);

  const articles: ContentCard[] = [
    {
      id: 1,
      type: "REPORT",
      yearOrType: "Artigo Técnico • 2026",
      title: "O Futuro dos Distritos Industriais na Era da Inteligência Artificial",
      excerpt: "Como algoritmos cognitivos analisam e mapeiam rotas simbióticas viáveis entre indústrias locais, reduzindo custos de descarte e compras de recursos virgens.",
      image: "https://picsum.photos/seed/artigo-circular/600/375"
    },
    {
      id: 2,
      type: "FORESIGHT",
      yearOrType: "Foresight Report • 2026",
      title: "Mapeamento de Resíduos Sólidos Urbanos e Industriais por IA",
      excerpt: "Sistemas analíticos integrados calculando rotas logísticas dinâmicas e o IGC (Índice Geral de Circularidade) para prefeituras e associações empresariais.",
      image: "https://picsum.photos/seed/mapeamento-ia/600/375"
    },
    {
      id: 3,
      type: "TRENDS",
      yearOrType: "Trends Insight • 2026",
      title: "Economia Circular Integrada na Cadeia Náutica Europeia",
      excerpt: "Resultados práticos de remanufatura de cascos de fibra de vidro e compósitos catalisados em cimenteiras, operados em modelo experimental em parceria com a Itália.",
      image: "https://picsum.photos/seed/economia-nautica/600/375"
    }
  ];

  const handleSimulateDownload = (id: number) => {
    if (downloadingId !== null) return;
    setDownloadingId(id);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadingId(null);
          setDownloadedIds(curr => [...curr, id]);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <section id="knowledge-center" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(103,116,139,0.025)_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-xl space-y-2">
            <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#00F5A0] bg-emerald-950/60 border border-emerald-500/20 px-2.5 py-1 rounded">
              Biblioteca de Ciência de Fluxos
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
              Plataforma de Conhecimento
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
              Explore nossos insights científicos acumulados em projetos de simbiose industrial e regulamentação tecnológica territorial.
            </p>
          </div>
          <div className="flex items-center gap-1.5 h-1 md:mb-2 bg-gradient-to-r from-emerald-500 to-teal-400 w-24 rounded-full shrink-0" />
        </div>

        {/* 3 cards grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {articles.map((item) => {
            const isDownloading = downloadingId === item.id;
            const isDownloaded = downloadedIds.includes(item.id);

            return (
              <div 
                key={item.id} 
                className="bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer hover:border-emerald-500/50 card-glass"
              >
                <div>
                  
                  {/* Card Header Image with referrerPolicy */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale contrast-115 opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Badge category tag overlay */}
                    <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur text-[10px] text-white font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-white/10">
                      {item.type}
                    </span>
                  </div>

                  {/* Card text content */}
                  <div className="p-6 text-left space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{item.yearOrType}</span>
                    </div>

                    <h3 className="font-display font-extrabold text-white text-base leading-snug group-hover:text-emerald-400 transition">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card footer CTA simulator button */}
                <div className="p-6 pt-0 mt-2 border-t border-white/10 flex flex-col gap-3">
                  {isDownloading ? (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
                        <span>Baixando PDF...</span>
                        <span>{downloadProgress}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-950 border border-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 transition-all duration-150"
                          style={{ width: `${downloadProgress}%` }}
                        />
                      </div>
                    </div>
                  ) : isDownloaded ? (
                    <div className="flex h-10 items-center justify-center gap-1.5 text-xs text-emerald-300 bg-emerald-950/30 border border-emerald-500/20 rounded font-semibold w-full">
                      <CheckCircle className="w-4 h-4 text-emerald-400 animate-pulse" />
                      <span>Artigo Salvo com Sucesso!</span>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleSimulateDownload(item.id)}
                      className="inline-flex h-10 items-center justify-center gap-1.5 text-xs text-zinc-300 hover:text-[#00F5A0] bg-slate-950 hover:bg-slate-900 border border-white/5 hover:border-[#00F5A0]/20 transition-all rounded font-bold w-full uppercase tracking-wider cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      Acessar PDF Integrado
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
