import { useState } from "react";
import { 
  BarChart3, 
  Settings, 
  MapPin, 
  TrendingUp, 
  CheckCircle, 
  Database, 
  ChevronRight, 
  Zap, 
  Activity, 
  Globe
} from "lucide-react";

interface DistrictData {
  id: string;
  name: string;
  igc: number; // Índice Geral de Circularidade
  ime: number; // Índice de Maturidade Empresarial
  materialsTracked: number; // tons
  resourceEfficiency: number; // percent
  opportunitiesIdentified: number;
  sectorName: string;
  fluxos: { label: string; value: number }[];
}

export default function InteligenciaDashboard() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("nordeste");

  const districts: Record<string, DistrictData> = {
    nordeste: {
      id: "nordeste",
      name: "Distrito Nordeste - Confecções",
      igc: 84.2,
      ime: 76.5,
      materialsTracked: 1250,
      resourceEfficiency: 68.2,
      opportunitiesIdentified: 14,
      sectorName: "Têxtil & Moda",
      fluxos: [
        { label: "Jan", value: 40 },
        { label: "Fev", value: 60 },
        { label: "Mar", value: 85 },
        { label: "Abr", value: 45 },
        { label: "Mai", value: 90 },
        { label: "Jun", value: 70 }
      ]
    },
    sul: {
      id: "sul",
      name: "Distrito Sul - Polo Moveleiro & Construção",
      igc: 72.8,
      ime: 63.4,
      materialsTracked: 2480,
      resourceEfficiency: 54.1,
      opportunitiesIdentified: 9,
      sectorName: "Madeira & MDF",
      fluxos: [
        { label: "Jan", value: 65 },
        { label: "Fev", value: 48 },
        { label: "Mar", value: 55 },
        { label: "Abr", value: 72 },
        { label: "Mai", value: 85 },
        { label: "Jun", value: 95 }
      ]
    },
    metalurgico: {
      id: "metalurgico",
      name: "Distrito Metalúrgico Centro-Oeste",
      igc: 89.1,
      ime: 81.3,
      materialsTracked: 4120,
      resourceEfficiency: 79.8,
      opportunitiesIdentified: 21,
      sectorName: "Siderurgia & Fundição",
      fluxos: [
        { label: "Jan", value: 80 },
        { label: "Fev", value: 85 },
        { label: "Mar", value: 92 },
        { label: "Abr", value: 88 },
        { label: "Mai", value: 94 },
        { label: "Jun", value: 96 }
      ]
    }
  };

  const activeData = districts[selectedDistrict] || districts.nordeste;

  return (
    <section id="dashboards" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background design accents similar to SaaS */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_90%,rgba(16,185,129,0.01))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Intro */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div className="text-left space-y-4 max-w-2xl">
            <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#00F5A0] bg-emerald-950/80 border border-emerald-500/20 px-2.5 py-1 rounded">
              Auditoria em Tempo Real e Indicadores
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight leading-none">
              Dashboards de Inteligência
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
              Monitore indicadores de circularidade em tempo real. Nossa plataforma SaaS oferece visibilidade total sobre o IGC (Índice Geral de Circularidade) e o IME (Indicador de Maturidade Empresarial) por distritos industriais.
            </p>
          </div>

          {/* District selector buttons */}
          <div className="flex flex-wrap gap-2 bg-slate-900/50 p-1 rounded-lg border border-white/5 shrink-0">
            {Object.values(districts).map((dist) => (
              <button
                key={dist.id}
                onClick={() => setSelectedDistrict(dist.id)}
                className={`px-3 py-1.5 rounded font-sans text-[11px] font-bold uppercase tracking-wider transition ${
                  selectedDistrict === dist.id 
                    ? "bg-emerald-500 text-slate-950" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {dist.id === "nordeste" ? "Nordeste Têxtil" : dist.id === "sul" ? "Sul Moveleiro" : "Centro Metalúrgico"}
              </button>
            ))}
          </div>
        </div>

        {/* Unified Dashboard Grid frame mimicking real high-end UI */}
        <div className="bg-[#0b1329] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
          
          {/* Top header status bar of the software */}
          <div className="bg-slate-900 border-b border-white/5 py-3.5 px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-3 text-left">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <h4 className="text-xs font-mono font-bold tracking-tight text-white flex items-center gap-1.5 leading-none">
                  SaaS CONTROL: <span className="text-emerald-400">{activeData.name}</span>
                </h4>
                <p className="text-[9px] font-mono text-zinc-500 leading-none mt-1">Conectores ativos: 124 sensors • Segmento principal: {activeData.sectorName}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-zinc-500 animate-spin" style={{ animationDuration: "12s" }} />
                Região Ativa: Brasil-COSMOB
              </span>
              <span className="hidden sm:inline bg-slate-950 border border-white/5 px-2 py-0.5 rounded text-[10px] text-emerald-400">
                Sincronizado: OK
              </span>
            </div>
          </div>

          {/* Core metrics dashboard columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5">
            
            {/* Column Left: IGC and IME Ring progress indicators */}
            <div className="lg:col-span-4 p-6 sm:p-8 space-y-8 flex flex-col justify-center text-left">
              
              {/* Metric 1: IGC */}
              <div className="flex items-center gap-6">
                {/* SVG Ring Progress indicator */}
                <div className="relative w-20 h-20 shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="34" className="stroke-slate-800" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="40" 
                      cy="40" 
                      r="34" 
                      className="stroke-emerald-500 transition-all duration-1000 ease-out" 
                      strokeWidth="6" 
                      fill="transparent" 
                      strokeDasharray="213.6"
                      strokeDashoffset={213.6 - (213.6 * activeData.igc) / 100}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-display font-bold text-white">{activeData.igc}%</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h5 className="text-[10px] font-mono uppercase font-semibold text-zinc-500 tracking-wider">Métrica de Sustentabilidade</h5>
                  <h4 className="text-sm font-display font-extrabold text-white">Índice Geral de Circularidade (IGC)</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">Percentual total de resíduos convertidos com desvios úteis de aterro.</p>
                </div>
              </div>

              {/* Metric 2: IME */}
              <div className="flex items-center gap-6">
                {/* SVG Ring Progress indicator */}
                <div className="relative w-20 h-20 shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="34" className="stroke-slate-800" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="40" 
                      cy="40" 
                      r="34" 
                      className="stroke-teal-400 transition-all duration-1000 ease-out" 
                      strokeWidth="6" 
                      fill="transparent" 
                      strokeDasharray="213.6"
                      strokeDashoffset={213.6 - (213.6 * activeData.ime) / 100}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-display font-bold text-white">{activeData.ime}%</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h5 className="text-[10px] font-mono uppercase font-semibold text-zinc-500 tracking-wider">Maturidade Corporativa</h5>
                  <h4 className="text-sm font-display font-extrabold text-white">Índice de Maturidade Empresarial (IME)</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">Mapeamento da governança interna e conformidade de práticas de reutilização.</p>
                </div>
              </div>

            </div>

            {/* Column Center: Chart visualizing materials volume flow */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 flex flex-col justify-between text-left border-y lg:border-y-0 lg:border-x border-white/5">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-zinc-400">// REDE DE TRANSBORDO DE FLUXOS</h4>
                  <p className="text-sm font-display font-bold text-white">Materiais Reintegrados Mensais (toneladas)</p>
                </div>
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              </div>

              {/* Clean custom pure SVG bar-chart representation representing dynamic state */}
              <div className="h-56 w-full flex items-end justify-between gap-4 pt-6">
                {activeData.fluxos.map((item, idx) => {
                  const barHeightPercent = item.value;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative">
                      
                      {/* Hover Tooltip showing values */}
                      <div className="absolute -top-3 scale-0 group-hover:scale-100 bg-slate-900 border border-emerald-400 text-emerald-300 font-mono text-[9px] px-1.5 py-0.5 rounded shadow-lg transition duration-250 shrink-0 whitespace-nowrap z-10 font-bold">
                        {Math.round((activeData.materialsTracked * item.value) / 300)}t
                      </div>

                      {/* Interactive Bar graphic */}
                      <div 
                        className="w-full bg-gradient-to-t from-emerald-600/60 to-emerald-400 rounded-t transition-all duration-700 ease-out relative group-hover:from-emerald-400 group-hover:to-teal-300 shadow-md shadow-emerald-500/10 hover:shadow-emerald-400/20"
                        style={{ height: `${barHeightPercent}%` }}
                      >
                        {/* Dynamic glow overlay line */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-200" />
                      </div>

                      <span className="text-[10px] font-mono text-zinc-500 mt-2 tracking-tight">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between text-[10px] font-mono text-zinc-500">
                <span>Total anualizado acumulado: 14.2k tons</span>
                <span className="text-emerald-400">99.8% Integridade de dados</span>
              </div>
            </div>

            {/* Column Right: Action checklist summaries & resolved cases */}
            <div className="lg:col-span-3 p-6 sm:p-8 space-y-6 flex flex-col justify-center text-left">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-zinc-400">// AUDITORIA DE ECOSSISTEMA</h4>
                <p className="text-sm font-display font-bold text-white">Mapeados neste Distrito</p>
              </div>

              <div className="space-y-4">
                {/* Metric list blocks */}
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-xs text-zinc-400">Eficiência de Recursos</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">{activeData.resourceEfficiency}%</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-xs text-zinc-400">Oportunidades de Simbiose</span>
                  <span className="text-xs font-bold text-sky-400 font-mono">{activeData.opportunitiesIdentified} Ativas</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-xs text-zinc-400">Material Monitorado Total</span>
                  <span className="text-xs font-bold text-white font-mono">{activeData.materialsTracked.toLocaleString()}t</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Redução CO² Equivalente</span>
                  <span className="text-xs font-bold text-teal-400 font-mono">
                    {-Math.round(activeData.materialsTracked * 0.85)} tCO²
                  </span>
                </div>
              </div>

              {/* Action alert box simulation */}
              <div className="bg-slate-900 border border-white/10 rounded-lg p-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  Alerta Simbiótico Ativo
                </div>
                <p className="text-[10px] text-zinc-300 font-sans leading-relaxed">
                  {selectedDistrict === "nordeste" 
                    ? "Encontrada similaridade de polímero com o Distrito de Embalagens Sul para cooperação."
                    : selectedDistrict === "sul"
                      ? "Identificada queima secundária eficiente para cinzas residuais no polo cerâmico adjacente."
                      : "Contrato inteligente de carepa de laminação assinado automaticamente por 4 cimenteiras."
                  }
                </p>
              </div>

            </div>

          </div>

          {/* Bottom stats summary highlights row of Saas screen */}
          <div className="bg-slate-900/50 border-t border-white/5 p-4 px-6 flex flex-wrap gap-6 text-xs text-zinc-500 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              Sincronia IoT: 100% calibrada
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              Regime de Governança: Distrito Homologado
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              Patentes COSMOB integradas: 18 ativas
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
