import React from 'react';
import { ExternalLink, FileText, LayoutDashboard, Lock, Milk, HardHat, Sparkles } from 'lucide-react';

export default function SuiteApps() {
  const suites = [
    {
      title: 'Laticínios & Alimentos',
      subtitle: 'Indústria Agroalimentar',
      icon: Milk,
      color: 'border-emerald-500/20 bg-emerald-50/10 hover:border-emerald-500/50',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      description: 'Mapeamento de efluentes orgânicos, recirculação de água e otimização energética em processos industriais de laticínios.',
      apps: [
        {
          name: 'Pré-Diagnóstico Setorial',
          type: 'Formulário',
          url: 'https://form-laticinio.netlify.app/',
          icon: FileText,
          desc: 'Cadastro via CNPJ e coleta de dados industriais.'
        },
        {
          name: 'Dashboard de Distrito',
          type: 'BI Público',
          url: 'https://dash-laticinio.netlify.app/',
          icon: LayoutDashboard,
          desc: 'Indicadores territoriais consolidados do setor.'
        },
        {
          name: 'Painel Gerencial',
          type: 'Administração',
          url: 'https://painel-latici.netlify.app/',
          icon: Lock,
          desc: 'Gerenciamento seguro de respostas e auditorias.'
        }
      ]
    },
    {
      title: 'Moda, Madeira & Móveis',
      subtitle: 'Indústria de Transformação',
      icon: Sparkles,
      color: 'border-brand-accent/20 bg-brand-accent/5 hover:border-brand-accent/50',
      tagColor: 'bg-orange-100 text-brand-accent border-orange-200',
      description: 'Mapeamento de matérias-primas circulares, durabilidade, upcycling e logística reversa para bens de consumo e móveis.',
      apps: [
        {
          name: 'Questionário de Circularidade 2.0',
          type: 'Formulário',
          url: 'https://circularidade-form.netlify.app/',
          icon: FileText,
          desc: '12 questões de competitividade baseadas no Cosmob Itália.'
        },
        {
          name: 'Painel de Distrito Circular',
          type: 'BI Público',
          url: 'https://dash-distrito-circular.netlify.app/',
          icon: LayoutDashboard,
          desc: 'Gráficos de dispersão e radares de materiais.'
        },
        {
          name: 'Gerenciamento de Relatórios',
          type: 'Administração',
          url: 'https://pagina-gerencia.netlify.app/',
          icon: Lock,
          desc: 'Acesso seguro aos relatórios individuais gerados.'
        }
      ]
    },
    {
      title: 'Construção Civil',
      subtitle: 'Obras & Infraestrutura',
      icon: HardHat,
      color: 'border-amber-500/20 bg-amber-50/10 hover:border-amber-500/50',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
      description: 'Gestão de resíduos minerais inertes, desmontabilidade e rastreabilidade de insumos na construção regional.',
      apps: [
        {
          name: 'Assessment de Circularidade',
          type: 'Formulário',
          url: 'https://form-constru.netlify.app/',
          icon: FileText,
          desc: 'Inventário de resíduos e passaporte de produto.'
        },
        {
          name: 'Distrito Circular Divinópolis',
          type: 'BI & Cognição',
          url: 'https://painel-constru.netlify.app/',
          icon: LayoutDashboard,
          desc: 'Matriz IGC x PCM e dispersão territorial.'
        },
        {
          name: 'Painel de Respondentes',
          type: 'Administração',
          url: 'https://gerent-construc.netlify.app/',
          icon: Lock,
          desc: 'Acompanhamento operacional e download de PDFs.'
        }
      ]
    }
  ];

  return (
    <section id="intelligence" className="py-20 bg-brand-bg border-t border-brand-accent-light scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
            Ecossistema CosmoBrasil 2026
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal italic text-brand-primary mt-2">
            Aplicativos do Distrito Circular
          </h2>
          <div className="h-0.5 w-16 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-base text-brand-gray mt-6 leading-relaxed">
            Selecione o seu setor e acesse diretamente os nossos formulários de pré-diagnóstico, painéis públicos de Business Intelligence e portais gerenciais de auditoria.
          </p>
        </div>

        {/* Suites Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {suites.map((suite, idx) => {
            const SuiteIcon = suite.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between p-6 rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${suite.color}`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center space-x-3.5">
                    <div className={`p-3 rounded-2xl ${suite.tagColor} border bg-white flex items-center justify-center`}>
                      <SuiteIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gray/80">
                        {suite.subtitle}
                      </span>
                      <h3 className="font-display text-xl font-bold text-brand-primary">
                        {suite.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-brand-gray leading-relaxed">
                    {suite.description}
                  </p>

                  <div className="h-px bg-brand-accent-light/60" />

                  {/* Apps List */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-secondary">
                      Ferramentas Disponíveis
                    </p>
                    {suite.apps.map((app, appIdx) => {
                      const AppIcon = app.icon;
                      return (
                        <a
                          key={appIdx}
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/item flex items-start space-x-3 p-3 rounded-xl border border-brand-accent-light/50 bg-brand-bg/40 hover:bg-white hover:border-brand-secondary transition-all hover:shadow-xs"
                        >
                          <div className="p-2 rounded-lg bg-white border border-brand-accent-light text-brand-secondary group-hover/item:text-brand-primary group-hover/item:border-brand-secondary transition-all flex items-center justify-center mt-0.5">
                            <AppIcon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 space-y-0.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-brand-primary group-hover/item:text-brand-secondary transition-colors">
                                {app.name}
                              </span>
                              <span className="text-[8px] font-mono font-semibold bg-white px-1.5 py-0.5 rounded border border-brand-accent-light text-brand-gray group-hover/item:border-brand-secondary/30">
                                {app.type}
                              </span>
                            </div>
                            <p className="text-[10px] text-brand-gray leading-normal">
                              {app.desc}
                            </p>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-brand-gray/40 group-hover/item:text-brand-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
