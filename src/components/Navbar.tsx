import { useState, useEffect } from "react";
import { Recycle, Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/90 backdrop-blur-md shadow-lg py-3 border-b border-white/5" 
          : "bg-transparent py-5"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto">
        <div 
          onClick={() => scrollTo("hero")} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Recycle className="w-5 h-5 text-slate-950 font-bold" />
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-white">
            ECO <span className="text-emerald-400">CONECT</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollTo("distritos-pilares")} 
            className="font-sans text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-emerald-400 cursor-pointer transition"
          >
            Distritos Circulares
          </button>
          <button 
            onClick={() => scrollTo("solucoes-setoriais")} 
            className="font-sans text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-emerald-400 cursor-pointer transition"
          >
            Soluções
          </button>
          <button 
            onClick={() => scrollTo("app-simulator")} 
            className="font-sans text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-emerald-400 cursor-pointer transition"
          >
            Apps Modulares
          </button>
          <button 
            onClick={() => scrollTo("dashboards")} 
            className="font-sans text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-emerald-400 cursor-pointer transition"
          >
            Dashboards
          </button>
          <button 
            onClick={() => scrollTo("knowledge-center")} 
            className="font-sans text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-emerald-400 cursor-pointer transition"
          >
            Conteúdo
          </button>
          <button 
            onClick={() => scrollTo("parceria-cosmob")} 
            className="font-sans text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-emerald-400 cursor-pointer transition"
          >
            COSMOB Itália
          </button>
        </div>

        {/* Call to Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => scrollTo("about-section")} 
            className="px-4 py-2 text-xs font-bold font-sans tracking-wide uppercase border border-white/20 text-white rounded hover:bg-white/10 transition"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollTo("chamada-final")} 
            className="px-4 py-2 text-xs font-bold font-sans tracking-wide uppercase bg-emerald-500 text-slate-950 rounded hover:bg-emerald-400 transition flex items-center gap-1 group"
          >
            Falar Conosco
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile menu controls */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-emerald-400 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 py-6 px-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-4 duration-250 z-50">
          <button 
            onClick={() => scrollTo("distritos-pilares")} 
            className="text-left py-2 font-display text-sm font-semibold text-zinc-300 hover:text-emerald-400"
          >
            Distritos Circulares
          </button>
          <button 
            onClick={() => scrollTo("solucoes-setoriais")} 
            className="text-left py-2 font-display text-sm font-semibold text-zinc-300 hover:text-emerald-400"
          >
            Soluções Setoriais
          </button>
          <button 
            onClick={() => scrollTo("app-simulator")} 
            className="text-left py-2 font-display text-sm font-semibold text-zinc-300 hover:text-emerald-400"
          >
            Apps de Cadeia
          </button>
          <button 
            onClick={() => scrollTo("dashboards")} 
            className="text-left py-2 font-display text-sm font-semibold text-zinc-300 hover:text-emerald-400"
          >
            Dashboards
          </button>
          <button 
            onClick={() => scrollTo("knowledge-center")} 
            className="text-left py-2 font-display text-sm font-semibold text-zinc-300 hover:text-emerald-400"
          >
            Central de Conhecimento
          </button>
          <button 
            onClick={() => scrollTo("parceria-cosmob")} 
            className="text-left py-2 font-display text-sm font-semibold text-zinc-300 hover:text-emerald-400"
          >
            Parceria COSMOB Itália
          </button>
          <div className="h-px bg-white/10 my-1"></div>
          <div className="flex gap-4">
            <button 
              onClick={() => scrollTo("about-section")} 
              className="flex-1 text-center py-2.5 text-xs font-bold uppercase tracking-wider border border-white/20 text-white rounded"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollTo("chamada-final")} 
              className="flex-1 text-center py-2.5 text-xs font-bold uppercase tracking-wider bg-emerald-500 text-slate-950 rounded"
            >
              Falar Conosco
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
