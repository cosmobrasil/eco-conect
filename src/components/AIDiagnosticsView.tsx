import React from 'react';
import { AIDiagnostic, CircularAssessmentInput } from '../types';
import { Sparkles, Trophy, ShieldCheck, ArrowRight, CheckCircle, Download, FileText, Share2, Printer, AlertTriangle, Lightbulb, UserCheck, BarChart3, RotateCcw } from 'lucide-react';

interface AIDiagnosticsViewProps {
  diagnostic: AIDiagnostic;
  input: CircularAssessmentInput | null;
  onReset: () => void;
}

export default function AIDiagnosticsView({ diagnostic, input, onReset }: AIDiagnosticsViewProps) {
  if (!diagnostic || !input) return null;

  const handlePrint = () => {
    window.print();
  };

  const getMaturityColor = (level: string) => {
    switch (level) {
      case 'Líder Circular':
        return 'bg-emerald-500/10 border-emerald-500 text-emerald-800';
      case 'Avançado':
        return 'bg-brand-secondary/10 border-brand-secondary text-brand-primary';
      case 'Em Transição':
        return 'bg-amber-500/10 border-amber-500 text-amber-800';
      default:
        return 'bg-rose-500/10 border-rose-500 text-rose-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Média':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }
  };

  const getOpportunityIcon = (type: string) => {
    switch (type) {
      case 'Simbiose Industrial':
        return '🤝';
      case 'Upcycling Industrial':
        return '♻️';
      case 'Logística Reversa':
        return '📦';
      default:
        return '📈';
    }
  };

  return (
    <section id="diagnosed-report" className="py-20 bg-white border-t border-brand-accent-light scroll-mt-16 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Certificate Heading */}
        <div className="bg-brand-bg rounded-3xl border-2 border-brand-accent p-8 md:p-12 shadow-xl space-y-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-brand-secondary/15 to-transparent rounded-full blur-3xl" />
          
          {/* Top header lines */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-brand-accent-light/80 gap-4 relative z-10">
            <div className="flex items-center space-x-3">
              <div className="bg-brand-primary p-2.5 rounded-xl">
                <Sparkles className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-brand-secondary uppercase tracking-widest">ECO CONECT PLATINUM DIAGNOSTIC</p>
                <h3 className="font-display text-2xl font-normal italic text-brand-primary tracking-tight">
                  Relatório de Inteligência Circular
                </h3>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-full border border-brand-accent bg-white text-brand-primary hover:bg-brand-accent-light transition-all flex items-center space-x-1.5 cursor-pointer text-xs font-semibold"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Imprimir</span>
              </button>
              <button
                onClick={onReset}
                className="px-4 py-2.5 rounded-full bg-brand-primary text-white hover:bg-brand-secondary transition-all flex items-center space-x-1.5 cursor-pointer text-xs font-semibold"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Nova Simulação</span>
              </button>
            </div>
          </div>

          {/* Assessment Summary Block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left circular overall score (4 columns) */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-brand-accent-light text-center h-full">
              <p className="text-[10px] font-mono font-extrabold text-brand-secondary uppercase tracking-widest mb-4">ÍNDICE DE CIRCULARIDADE GLOBAL</p>
              
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  {/* Background track circle */}
                  <circle cx="72" cy="72" r="62" stroke="#E8EADF" strokeWidth="12" fill="transparent" />
                  {/* Dynamic circle filling */}
                  <circle
                    cx="72"
                    cy="72"
                    r="62"
                    stroke="#5D6D53"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 62}
                    strokeDashoffset={2 * Math.PI * 62 * (1 - diagnostic.scores.overall / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-display text-4xl font-extrabold text-brand-primary">{diagnostic.scores.overall}%</span>
                  <span className="text-[9px] font-mono text-brand-secondary font-bold uppercase tracking-wider">ECO SCORE</span>
                </div>
              </div>

              {/* Maturity badge label */}
              <div className={`mt-6 px-4 py-1.5 rounded-full border text-xs font-bold ${getMaturityColor(diagnostic.maturityLevel)}`}>
                Maturidade: {diagnostic.maturityLevel}
              </div>
            </div>

            {/* Right text overview summary (8 columns) */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center space-x-1.5 text-brand-primary">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="font-sans text-xs font-bold uppercase tracking-wide">RESULTADO DO CLIENTE: <strong className="text-brand-secondary">{input.companyName}</strong></span>
              </div>
              <p className="text-xl font-display font-bold text-brand-primary leading-snug">
                Nível de circularidade calculado para o segmento de <strong className="text-brand-secondary">{input.sector}</strong>.
              </p>
              <p className="font-sans text-sm text-brand-gray leading-relaxed">
                {diagnostic.diagnosisSummary}
              </p>
            </div>
          </div>

          {/* Sub-Metrics breakdown cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            <div className="bg-white p-4 rounded-xl border border-brand-accent-light">
              <p className="text-[10px] font-mono font-bold text-brand-gray uppercase">Nível 01 — Alinhamento Estratégico</p>
              <div className="flex justify-between items-baseline mt-1.5">
                <span className="font-display text-2xl font-bold text-brand-primary">{diagnostic.scores.strategy}%</span>
                <span className="text-[10px] font-semibold text-brand-secondary uppercase">Normas & Princípios</span>
              </div>
              <div className="w-full bg-brand-bg h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-brand-primary h-full rounded-full" style={{ width: `${diagnostic.scores.strategy}%` }} />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-brand-accent-light">
              <p className="text-[10px] font-mono font-bold text-brand-gray uppercase">Nível 02 — Gestor Operacional</p>
              <div className="flex justify-between items-baseline mt-1.5">
                <span className="font-display text-2xl font-bold text-brand-primary">{diagnostic.scores.operations}%</span>
                <span className="text-[10px] font-semibold text-brand-secondary uppercase">Captura de Dados</span>
              </div>
              <div className="w-full bg-brand-bg h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-brand-secondary h-full rounded-full" style={{ width: `${diagnostic.scores.operations}%` }} />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-brand-accent-light">
              <p className="text-[10px] font-mono font-bold text-brand-gray uppercase">Nível 03 — Inteligência Territorial</p>
              <div className="flex justify-between items-baseline mt-1.5">
                <span className="font-display text-2xl font-bold text-brand-primary">{diagnostic.scores.intelligence}%</span>
                <span className="text-[10px] font-semibold text-brand-secondary uppercase">Simbiose & IA</span>
              </div>
              <div className="w-full bg-brand-bg h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-teal-600 h-full rounded-full" style={{ width: `${diagnostic.scores.intelligence}%` }} />
              </div>
            </div>
          </div>

          {/* Action items checklist / Chronograma */}
          <div className="space-y-4 pt-6 border-t border-brand-accent-light/55 relative z-10">
            <h4 className="font-display text-lg font-bold text-brand-primary flex items-center">
              <BarChart3 className="w-5 h-5 mr-1.5 text-brand-secondary" />
              Cronograma Recomendado de Implementação (4 Etapas)
            </h4>
            
            <div className="space-y-4">
              {diagnostic.actionPlan.map((action, index) => (
                <div key={index} className="flex flex-col md:flex-row items-stretch bg-white rounded-xl border border-brand-accent-light p-4 gap-4 hover:border-brand-secondary transition-colors">
                  {/* Step counter / priority */}
                  <div className="flex md:flex-col items-center justify-between md:justify-center border-b md:border-b-0 md:border-r border-brand-accent-light/60 pb-3 md:pb-0 md:pr-4 md:w-32 flex-shrink-0">
                    <div className="flex items-center space-x-2 md:space-x-0 md:flex-col items-center">
                      <span className="w-7 h-7 rounded-full bg-brand-primary text-white text-xs font-bold font-mono flex items-center justify-center md:mb-1.5">
                        {index + 1}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-brand-gray uppercase">Passo {index + 1}</span>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded text-[9px] font-bold border ${getPriorityColor(action.priority)} mt-1`}>
                      {action.priority}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="flex-1 space-y-1.5">
                    <p className="text-xs font-bold text-brand-primary">{action.step}</p>
                    <p className="text-[11px] text-brand-gray leading-relaxed">{action.description}</p>
                  </div>

                  {/* Impact badge */}
                  <div className="md:w-48 bg-brand-bg/60 p-3 rounded-lg border border-brand-accent-light/50 flex flex-col justify-center">
                    <p className="text-[9px] font-mono font-bold text-brand-primary uppercase">Métricas de Retorno Est.</p>
                    <p className="text-[10px] text-emerald-800 font-medium mt-1 leading-normal italic">
                      "{action.expectedImpact}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Symbiotic & Circular Opportunities list */}
          <div className="space-y-4 pt-6 relative z-10">
            <h4 className="font-display text-lg font-bold text-brand-primary flex items-center">
              <Lightbulb className="w-5 h-5 mr-1.5 text-amber-500 fill-amber-100" />
              Oportunidades de Simbiose Industrial & Upcycling Coletivo
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {diagnostic.circularOpportunities.map((opp, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-brand-accent/40 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-2xl" role="img" aria-label="icono">{getOpportunityIcon(opp.type)}</span>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wide bg-brand-accent-light text-brand-primary px-2 py-0.5 rounded border border-brand-accent">
                        {opp.type}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-brand-primary pt-1">{opp.name}</p>
                    <p className="text-[11px] text-brand-gray leading-relaxed">{opp.description}</p>
                  </div>

                  <div className="pt-2 border-t border-brand-accent-light/50 space-y-1.5">
                    <p className="text-[9px] text-brand-secondary font-bold uppercase tracking-wide flex items-center">
                      <UserCheck className="w-3.5 h-3.5 mr-1" />
                      Parceiros ideais no Distrito Circular:
                    </p>
                    <p className="text-[10px] text-brand-primary font-semibold font-mono bg-brand-bg px-2 py-1 rounded">
                      {opp.partnersType}
                    </p>
                    <p className="text-[10px] text-emerald-800 font-bold italic pt-1">
                      Retorno: {opp.potentialBenefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ISO Family Recommendations Compliance Checklist */}
          <div className="space-y-4 pt-6 border-t border-brand-accent-light/60 relative z-10">
            <h4 className="font-display text-lg font-bold text-brand-primary flex items-center">
              <ShieldCheck className="w-5 h-5 mr-1.5 text-brand-secondary" />
              Conformidade Estrutural ISO 59000 Proposta
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-4 bg-white rounded-xl border border-brand-accent-light">
                <span className="text-[10px] font-mono font-bold text-brand-primary p-1 bg-brand-accent-light rounded border border-brand-accent">ISO 59004</span>
                <p className="text-[11px] font-bold text-brand-primary mt-3">Princípios e Diretrizes</p>
                <p className="text-[10px] text-brand-gray mt-1 leading-normal">{diagnostic.isoCompliance.iso59004}</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-brand-accent-light">
                <span className="text-[10px] font-mono font-bold text-brand-secondary p-1 bg-brand-bg rounded border border-brand-accent-light">ISO 59010</span>
                <p className="text-[11px] font-bold text-brand-primary mt-3">Modelos de Negócio</p>
                <p className="text-[10px] text-brand-gray mt-1 leading-normal">{diagnostic.isoCompliance.iso59010}</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-brand-accent-light">
                <span className="text-[10px] font-mono font-bold text-brand-accent p-1 bg-brand-accent/10 rounded border border-brand-accent/30">ISO 59020</span>
                <p className="text-[11px] font-bold text-brand-primary mt-3">Mensuração de Desempenho</p>
                <p className="text-[10px] text-brand-gray mt-1 leading-normal">{diagnostic.isoCompliance.iso59020}</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
