import React, { useState, useEffect } from 'react';
import { CircularAssessmentInput, SectorType, CompanyMetrics } from '../types';
import { FileText, Database, ShieldCheck, Settings, Play, CheckCircle2, Sliders, Info, Zap, Droplet, Trash2, ArrowLeftRight, RotateCcw } from 'lucide-react';

interface OperationsCaptureProps {
  onDiagnoseSubmit: (input: CircularAssessmentInput) => void;
  loading: boolean;
}

const SECTOR_PRESETS: Record<SectorType, CompanyMetrics & { desc: string }> = {
  'Construção Civil': {
    energyRenewable: 15,
    waterRecirculation: 30,
    wasteDiverted: 45,
    rawMaterialCircular: 10,
    logisticsReversible: 5,
    desc: 'Obras de engenharia civil, infraestrutura e edifícios comerciais. Alta geração de resíduos minerais inertes.'
  },
  'Laticínios & Alimentos': {
    energyRenewable: 40,
    waterRecirculation: 50,
    wasteDiverted: 60,
    rawMaterialCircular: 35,
    logisticsReversible: 15,
    desc: 'Processamento de leite e produção de alimentos. Grande volume de efluentes líquidos e soro.'
  },
  'Indústria de Metais': {
    energyRenewable: 10,
    waterRecirculation: 75,
    wasteDiverted: 85,
    rawMaterialCircular: 60,
    logisticsReversible: 40,
    desc: 'Fundição e usinagem de metais. Uso de calor recuperável e alta taxa de reciclagem de sucatas.'
  },
  'Tecnologia & Eletrônicos': {
    energyRenewable: 60,
    waterRecirculation: 20,
    wasteDiverted: 40,
    rawMaterialCircular: 25,
    logisticsReversible: 30,
    desc: 'Equipamentos elétricos e eletrônicos. Foco em logística reversa de lixo eletrônico (REEE).'
  },
  'Varejo & Embalagens': {
    energyRenewable: 35,
    waterRecirculation: 10,
    wasteDiverted: 50,
    rawMaterialCircular: 40,
    logisticsReversible: 25,
    desc: 'Embalagens e suprimentos descartáveis. Grande escala e necessidade de materiais biodegradáveis.'
  },
  'Outro': {
    energyRenewable: 20,
    waterRecirculation: 20,
    wasteDiverted: 20,
    rawMaterialCircular: 20,
    logisticsReversible: 10,
    desc: 'Sua empresa ou outro segmento não catalogado acima. Defina os sliders livremente.'
  }
};

export default function OperationsCapture({ onDiagnoseSubmit, loading }: OperationsCaptureProps) {
  const [selectedSector, setSelectedSector] = useState<SectorType>('Construção Civil');
  const [companyName, setCompanyName] = useState('');
  const [customDetails, setCustomDetails] = useState('');

  // Sliders state
  const [metrics, setMetrics] = useState<CompanyMetrics>(SECTOR_PRESETS['Construção Civil']);

  // Reset metrics if preset changes
  useEffect(() => {
    setMetrics({ ...SECTOR_PRESETS[selectedSector] });
  }, [selectedSector]);

  const handleSliderChange = (key: keyof CompanyMetrics, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Live Score Calculator
  const [liveCircularScore, setLiveCircularScore] = useState(0);
  useEffect(() => {
    const { energyRenewable, waterRecirculation, wasteDiverted, rawMaterialCircular, logisticsReversible } = metrics;
    // Weighted logic
    const score = Math.round(
      (energyRenewable * 0.15) +
      (waterRecirculation * 0.20) +
      (wasteDiverted * 0.25) +
      (rawMaterialCircular * 0.25) +
      (logisticsReversible * 0.15)
    );
    setLiveCircularScore(score);
  }, [metrics]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim()) {
      alert('Por favor, informe o nome da sua empresa para prosseguir.');
      return;
    }
    onDiagnoseSubmit({
      companyName,
      sector: selectedSector,
      customDetails,
      metrics
    });
  };

  return (
    <section id="operations" className="py-20 bg-brand-bg scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left design panel - visual indicators mocking the Eco Conect Platform */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="relative p-6 bg-white rounded-3xl shadow-xl border border-brand-accent-light/60">
              
              {/* Digital Form Mockup */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-[11px] font-mono font-bold text-emerald-600 tracking-wider">FORMULÁRIO DIGITAL OPERACIONAL</span>
                </div>
                <span className="px-2 py-0.5 bg-brand-accent-light text-brand-primary text-[10px] rounded font-bold">ATIVO</span>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-brand-bg rounded-xl border border-brand-accent/20 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Database className="w-4 h-4 text-brand-primary" />
                    <div>
                      <p className="text-xs font-semibold text-brand-primary">Coleta Setorial Automatizada</p>
                      <p className="text-[10px] text-brand-gray">Sincronização instantânea das métricas</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded text-emerald-700 border border-brand-accent">98.2% Integridade</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[11px] font-semibold text-brand-gray">
                    <span>Estabilidade de fluxo (Território)</span>
                    <span className="text-brand-secondary">Estável</span>
                  </div>
                  <div className="w-full bg-brand-bg h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-secondary h-full rounded-full transition-all duration-300" style={{ width: '84%' }} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-semibold text-brand-gray">
                    <span>Perda Térmica Recuperada</span>
                    <span className="text-brand-primary">+22.4 kW/h</span>
                  </div>
                  <div className="w-full bg-brand-bg h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-primary h-full rounded-full transition-all duration-300" style={{ width: '62%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bento micro-cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-primary text-white p-5 rounded-2xl flex flex-col justify-between h-32 border border-brand-primary/20">
                <div className="p-2 bg-white/10 rounded-lg w-fit">
                  <Database className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold font-display">15k+</p>
                  <p className="text-[11px] font-medium text-white/80 uppercase">Coletas Mensais</p>
                </div>
              </div>

              <div className="bg-brand-accent-light p-5 rounded-2xl flex flex-col justify-between h-32 border border-brand-accent/20">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-brand-primary border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">ECO</div>
                  <div className="w-8 h-8 rounded-full bg-brand-secondary border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">ISO</div>
                  <div className="w-8 h-8 rounded-full bg-emerald-700 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">IA</div>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-primary uppercase">Diagnósticos Clínicos</p>
                  <p className="text-[10px] text-brand-gray font-sans mt-0.5">Analistas 24/7 de retração de escórias</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right layout - The assessment tool */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
                Nível 02 — Operações
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal italic text-brand-primary mt-1">
                Captura e Gerenciamento de Dados
              </h2>
              <p className="font-sans text-sm text-brand-gray mt-4 leading-relaxed">
                Nossa infraestrutura digital substitui planilhas obsoletas por formulários dinâmicos integrados às normas internacionais, simplificando radicalmente o mapeamento de insumos e perdas corporativas.
              </p>
            </div>

            {/* Simulated assessment center */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-brand-accent-light">
              <h3 className="font-display text-lg font-bold text-brand-primary mb-4 flex items-center">
                <Sliders className="w-5 h-5 mr-2 text-brand-secondary" />
                Simulador de Fluxos de Recursos
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Name & Sector */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-primary uppercase mb-1.5">Nome da Empresa</label>
                    <input
                      required
                      type="text"
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      placeholder="Ex: Mineração Soluções SA"
                      className="w-full rounded-xl border border-brand-accent bg-brand-bg px-4 py-2.5 text-xs font-medium focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-primary uppercase mb-1.5">Setor Principal</label>
                    <select
                      value={selectedSector}
                      onChange={e => setSelectedSector(e.target.value as SectorType)}
                      className="w-full rounded-xl border border-brand-accent bg-brand-bg px-4 py-3 text-xs font-semibold focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all"
                    >
                      {Object.keys(SECTOR_PRESETS).map((sector) => (
                        <option key={sector} value={sector}>{sector}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <p className="text-[11px] text-brand-gray/90 italic mt-1 bg-brand-bg px-3 py-2 rounded-lg border-l-2 border-brand-secondary">
                  {SECTOR_PRESETS[selectedSector].desc}
                </p>

                {/* 2. Interactive Sliders */}
                <div className="space-y-5 bg-brand-bg p-4 rounded-2xl border border-brand-accent/45">
                  <h4 className="text-xs font-bold text-brand-primary uppercase tracking-wide flex justify-between items-center pb-2 border-b border-brand-accent/30">
                    <span>Mapeamento Físico de Recursos</span>
                    <span className="font-sans text-[11px] text-brand-secondary lowercase italic">Ajuste os sliders para simular suas taxas atuais</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    {/* Energy */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="flex items-center text-brand-primary">
                          <Zap className="w-3.5 h-3.5 mr-1 text-amber-500" />
                          Energia Renovável
                        </span>
                        <span className="font-mono font-bold text-brand-secondary">{metrics.energyRenewable}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={metrics.energyRenewable}
                        onChange={e => handleSliderChange('energyRenewable', Number(e.target.value))}
                        className="w-full accent-brand-secondary h-1.5 rounded-full bg-white outline-none cursor-pointer"
                      />
                    </div>

                    {/* Water */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="flex items-center text-brand-primary">
                          <Droplet className="w-3.5 h-3.5 mr-1 text-blue-500" />
                          Recirculação de Água
                        </span>
                        <span className="font-mono font-bold text-brand-secondary">{metrics.waterRecirculation}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={metrics.waterRecirculation}
                        onChange={e => handleSliderChange('waterRecirculation', Number(e.target.value))}
                        className="w-full accent-brand-secondary h-1.5 rounded-full bg-white outline-none cursor-pointer"
                      />
                    </div>

                    {/* Waste Diverted */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="flex items-center text-brand-primary">
                          <Trash2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                          Desvio de Aterros (Resíduos/Composto)
                        </span>
                        <span className="font-mono font-bold text-brand-secondary">{metrics.wasteDiverted}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={metrics.wasteDiverted}
                        onChange={e => handleSliderChange('wasteDiverted', Number(e.target.value))}
                        className="w-full accent-brand-secondary h-1.5 rounded-full bg-white outline-none cursor-pointer"
                      />
                    </div>

                    {/* Raw Circular */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="flex items-center text-brand-primary">
                          <RotateCcw className="w-3.5 h-3.5 mr-1 text-indigo-500" />
                          Matéria-Prima Circular
                        </span>
                        <span className="font-mono font-bold text-brand-secondary">{metrics.rawMaterialCircular}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={metrics.rawMaterialCircular}
                        onChange={e => handleSliderChange('rawMaterialCircular', Number(e.target.value))}
                        className="w-full accent-brand-secondary h-1.5 rounded-full bg-white outline-none cursor-pointer"
                      />
                    </div>

                    {/* Reverse Logistics */}
                    <div className="space-y-1 md:col-span-2">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="flex items-center text-brand-primary">
                          <ArrowLeftRight className="w-3.5 h-3.5 mr-1 text-purple-600" />
                          Logística Reversa Implementada
                        </span>
                        <span className="font-mono font-bold text-brand-secondary">{metrics.logisticsReversible}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={metrics.logisticsReversible}
                        onChange={e => handleSliderChange('logisticsReversible', Number(e.target.value))}
                        className="w-full accent-brand-secondary h-1.5 rounded-full bg-white outline-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Text field notes */}
                <div>
                  <label className="block text-xs font-bold text-brand-primary uppercase mb-1.5">Informações Adicionais (Desafios, Principais Resíduos ou Objetivos)</label>
                  <textarea
                    rows={3}
                    value={customDetails}
                    onChange={e => setCustomDetails(e.target.value)}
                    placeholder="Ex: Produzimos cerca de 10 toneladas de escória metalúrgica por semana e queremos ver opções de upcycling..."
                    className="w-full rounded-xl border border-brand-accent bg-brand-bg px-4 py-3 text-xs font-medium focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none transition-all resize-none"
                  />
                </div>

                {/* React Live Evaluation Panel */}
                <div className="p-4 rounded-2xl bg-brand-accent-light/50 border border-brand-accent flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-brand-primary">Estatística Prévia Estimada:</p>
                    <p className="text-[11px] text-brand-gray mt-0.5">Pontuação baseada nos pesos físicos ajustados.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-3xl font-extrabold text-brand-primary">{liveCircularScore}%</p>
                    <p className="text-[9px] font-mono font-bold text-brand-secondary uppercase">ÍNDICE DE CIRCULARIDADE</p>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-brand-primary text-white hover:bg-brand-secondary rounded-full font-display text-sm font-bold shadow-lg hover:shadow-xl active:scale-[0.98] focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4 fill-current text-brand-accent" />
                  <span>{loading ? 'Analisando Fluxos por IA...' : 'Gerar Diagnóstico Avançado por IA'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
