import React, { useState } from 'react';
import { BookOpen, RefreshCw, BarChart3, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function StrategyISO() {
  const [activeIso, setActiveIso] = useState<number | null>(null);

  const isos = [
    {
      id: 59004,
      title: 'ISO 59004',
      subtitle: 'Princípios e Diretrizes',
      desc: 'Terminologia, princípios de economia circular e diretrizes gerais para implementação prática em larga escala tanto corporativa quanto regional.',
      icon: BookOpen,
      color: 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary',
      detailsList: [
        'Definição clara de objetivos estratégicos de circularidade',
        'Alinhamento com modelos globais de comércio e sustentabilidade',
        'Princípios de gestão e governança corporativa regenerativa'
      ],
      practicalAdvise: 'Focado em estabelecer as bases estratégicas (visão, acordos, termos) de economia circular antes de qualquer investimento material.'
    },
    {
      id: 59010,
      title: 'ISO 59010',
      subtitle: 'Modelos de Negócio & Cadeia',
      desc: 'Orientação completa sobre como reconfigurar modelos de negócios lineares em sistemas de valor circulares resilientes e maximizar a regeneração de recursos.',
      icon: RefreshCw,
      color: 'bg-brand-secondary/10 border-brand-secondary/30 text-brand-secondary',
      detailsList: [
        'Transição de venda de produtos para Product-as-a-Service (PaaS)',
        'Estratégias de extensão de vida útil (manutenção, remanufatura)',
        'Sistemas colaborativos de logística reversa integrados'
      ],
      practicalAdvise: 'Recomendada para alteração da forma como a empresa gera receita, preferindo fluxos contínuos a vendas transacionais únicas.'
    },
    {
      id: 59020,
      title: 'ISO 59020',
      subtitle: 'Medição & Avaliação',
      desc: 'Estrutura técnica rigorosa para medição, auditoria e avaliação do desempenho real da circularidade em múltiplos níveis (produto, empresa, território).',
      icon: BarChart3,
      color: 'bg-brand-accent/10 border-brand-accent/30 text-brand-accent',
      detailsList: [
        'Desenvolvimento de indicadores de insumo circulante vs residual',
        'Contabilidade física de massas e materiais por ciclo produtivo',
        'Cálculo integrado do índice de circularidade agregada territorial'
      ],
      practicalAdvise: 'Rigor científico indispensável para certificar sua marca e emitir relatórios confiáveis para bancos, investidores e órgãos públicos.'
    }
  ];

  return (
    <section id="strategy" className="py-20 bg-[#F2F1EB]/50 border-t border-brand-accent-light scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
            Nível 01 — Estratégia
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal italic text-brand-primary mt-2">
            Circularidade Empresarial e Territorial
          </h2>
          <div className="h-0.5 w-16 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-base md:text-lg text-brand-gray mt-6 leading-relaxed">
            Fundamentamos a jornada circular da sua organização na conformidade técnica das normas mais rigorosas do mercado global, mitigando riscos de regulação e desbloqueando novos e contínuos canais de receita.
          </p>
        </div>

        {/* ISO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isos.map((iso, idx) => {
            const IconComponent = iso.icon;
            const isSelected = activeIso === iso.id;

            return (
              <div
                key={iso.id}
                onClick={() => setActiveIso(isSelected ? null : iso.id)}
                className={`p-6 bg-white rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-brand-primary ring-2 ring-brand-secondary shadow-lg scale-102 bg-white'
                    : 'border-brand-accent-light hover:border-brand-secondary hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iso.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl font-bold text-brand-primary">{iso.title}</h3>
                    <span className="text-[11px] font-mono font-semibold bg-white px-2 py-0.5 rounded border border-brand-accent text-brand-secondary">
                      ISO/TC 323
                    </span>
                  </div>

                  <p className="font-sans text-sm font-semibold text-brand-secondary">{iso.subtitle}</p>
                  <p className="font-sans text-xs text-brand-gray leading-relaxed">{iso.desc}</p>

                  {/* Expandable Details on Click */}
                  {isSelected && (
                    <div className="pt-4 border-t border-brand-accent-light space-y-3 animate-fadeIn">
                      <p className="text-xs font-semibold text-brand-primary flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-brand-secondary" />
                        Requisitos de Implementação:
                      </p>
                      <ul className="space-y-1.5">
                        {iso.detailsList.map((detail, dIdx) => (
                          <li key={dIdx} className="text-[11px] text-brand-gray/95 flex items-start">
                            <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 p-2.5 bg-brand-bg rounded-lg border border-brand-accent/25">
                        <p className="text-[10px] font-mono text-brand-primary font-semibold">Conselho Estratégico:</p>
                        <p className="text-[10px] text-brand-gray italic mt-0.5">{iso.practicalAdvise}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 flex justify-end">
                  <span className="text-xs font-semibold text-brand-primary flex items-center group-hover:text-brand-secondary">
                    {isSelected ? 'Ocultar detalhes' : 'Clique para ver conformagem'}
                    <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative block */}
        <div className="mt-12 p-6 bg-brand-bg rounded-2xl border border-brand-accent/40 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 max-w-4xl mx-auto">
          <HelpCircle className="w-8 h-8 text-brand-secondary flex-shrink-0" />
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-sans text-sm font-bold text-brand-primary">O que é a família de normas ISO 59000?</h4>
            <p className="font-sans text-xs text-brand-gray leading-relaxed">
              Trata-se de um conjunto unificado de normas globais para regulamentar a transição ecológica e mitigar o risco de greenwashing. Ao certificar sua empresa nos requisitos destas normas, você atesta internacionalmente a seriedade técnica de sua transição para economia circular.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
