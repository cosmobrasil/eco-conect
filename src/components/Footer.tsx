import { Recycle, Mail, Phone, MapPin, Globe2, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-zinc-500 font-sans text-xs border-t border-white/5 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        
        {/* Brand identity column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Recycle className="w-4 h-4 text-slate-950 font-bold" />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              ECO <span className="text-emerald-400">CONECT</span>
            </span>
          </div>

          <p className="text-zinc-500 leading-relaxed max-w-sm">
            Website oficial e institucional da ECO CONECT. Tecnologia proprietária baseada em Inteligência Artificial para planejamento, implantação e auditoria em tempo real de Distritos Circulares Regionais.
          </p>

          <p className="text-[10px] text-zinc-600 font-mono">
            Chancela e cooperação internacional com COSMOB Itália, polo europeu de manufatura avançada e design ecológico de cadeias de suprimentos secundários.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Plataforma</h4>
          <ul className="space-y-2">
            <li><a href="#distritos-pilares" className="hover:text-emerald-400 transition">Distritos Circulares</a></li>
            <li><a href="#solucoes-setoriais" className="hover:text-emerald-400 transition">Soluções Verticais</a></li>
            <li><a href="#dashboards" className="hover:text-emerald-400 transition">Dashboards SaaS</a></li>
            <li><a href="#knowledge-center" className="hover:text-emerald-400 transition">Central de Artigos</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Legislação e Certificados</h4>
          <ul className="space-y-2 text-zinc-600">
            <li><span>Política de Privacidade</span></li>
            <li><span>Termos de Uso</span></li>
            <li><span>COSMOB-EN 1398</span></li>
            <li><span>Normas ESG Brasil</span></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display font-bold text-white text-xs tracking-wider uppercase">Fale Conosco</h4>
          <ul className="space-y-3 font-mono text-[11px]">
            <li className="flex items-start gap-2 text-zinc-400">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>contato@ecoconect.com.br</span>
            </li>
            <li className="flex items-start gap-2 text-zinc-400">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+55 (11) 3280-4590</span>
            </li>
            <li className="flex items-start gap-2 text-zinc-500">
              <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
              <span>Av. Paulista, 1000 — Bela Vista, São Paulo/SP</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Extreme border and credit lines */}
      <div className="mt-12 pt-8 border-t border-white/5 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[10px] text-zinc-600 font-mono">
          © {new Date().getFullYear()} ECO CONECT S/A. CNPJ 34.908.112/0001-09. Todos os direitos reservados.
        </span>

        {/* Scroll back up click */}
        <button 
          onClick={scrollToTop}
          className="p-2 border border-white/10 hover:border-emerald-500 hover:text-emerald-400 text-zinc-500 transition rounded-full flex items-center justify-center cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
