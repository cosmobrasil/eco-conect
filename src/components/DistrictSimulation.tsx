import React, { useState } from 'react';
import { Share2, Factory, Zap, Shield, HelpCircle, ArrowRight, RefreshCw, Layers } from 'lucide-react';

interface CircularNode {
  id: string;
  name: string;
  type: string;
  inputs: string[];
  outputs: string[];
  sharedFlow: string;
  ecoImpact: string;
  x: number;
  y: number;
}

export default function DistrictSimulation() {
  const [selectedNode, setSelectedNode] = useState<string | null>('laticinio');

  const nodes: Record<string, CircularNode> = {
    laticinio: {
      id: 'laticinio',
      name: 'Laticínios Guterres',
      type: 'Alimentos & Bebidas',
      inputs: ['Calor residual (Metalúrgica)', 'Biogás (Usina Bio)'],
      outputs: ['Lodo orgânico de efluente', 'Soro residual', 'Água aquecida'],
      sharedFlow: 'Envia Lodo Orgânico e Soro de alto teor energético para a Usina de Biogás local, substituindo combustíveis fósseis.',
      ecoImpact: 'Redução de 45% nas taxas de descarte local e 30% em combustível de caldeira.',
      x: 15,
      y: 20
    },
    metalurgica: {
      id: 'metalurgica',
      name: 'Metalúrgica FerroNorte',
      type: 'Indústria Pesada',
      inputs: ['Biogás (Usina Bio)', 'Sucata metálica (Distrito)'],
      outputs: ['Vapor/Calor residual', 'Escória de fundição', 'Emissões mitigaiveis'],
      sharedFlow: 'Transfere calor residual em ciclo fechado para pasteurização no Laticínio, eliminando caldeiras redundantes. Envia escória mineral para cimenteiras locais.',
      ecoImpact: 'Recuperação térmica de 250 kW/h e eliminação de 15 toneladas de resíduos aterrados por semana.',
      x: 80,
      y: 20
    },
    embalagens: {
      id: 'embalagens',
      name: 'Polímeros EcoPack',
      type: 'Embalagens & Plásticos',
      inputs: ['Resíduos celulósicos reprocessados', 'Energia limpa'],
      outputs: ['Aparas de plásticos', 'Resina reutilizável', 'Embalagens circulares'],
      sharedFlow: 'Reprocessa aparas internas instalando um modelo Upcycling. Fornece pallets plásticos reversivos para todo o Distrito Circular.',
      ecoImpact: 'Zero desperdício de aparas plásticas e 100% de circulação de embalagens no distrito.',
      x: 80,
      y: 80
    },
    usinaBio: {
      id: 'usinaBio',
      name: 'Usina BioEletra',
      type: 'Bioenergia & Fertilizantes',
      inputs: ['Lodo orgânico (Laticínio)', 'Resíduos agroindustriais'],
      outputs: ['Biogás refinado', 'Biofertilizante rico', 'Eletricidade gerável'],
      sharedFlow: 'Digere anaerobiamente resíduos biológicos do Laticínio. Produz biogás encanado para alimentar os fornos da Metalúrgica e do Laticínio.',
      ecoImpact: 'Geração de 820 MWh/ano de eletricidade ecológica e 250 toneladas de biofertilizante agrícola.',
      x: 15,
      y: 80
    }
  };

  const activeNode = selectedNode ? nodes[selectedNode] : null;

  return (
    <section id="district" className="py-20 bg-white border-b border-brand-accent-light scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
            Nível 03 — Simbiose Territorial
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal italic text-brand-primary mt-2">
            O Distrito Circular Interativo
          </h2>
          <div className="h-0.5 w-16 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-base text-brand-gray mt-6 leading-relaxed">
            A circularidade ganha escala verdadeira no âmbito territorial. Conecte sua cadeia de suprimentos local para formar um ecossistema integrado que compartilha materiais, água e energia de alto rendimento econômico.
          </p>
        </div>

        {/* Map grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Territorial Graph Map (Left 7 Columns) */}
          <div className="lg:col-span-7 bg-brand-bg rounded-3xl border border-brand-accent p-6 flex flex-col justify-between relative overflow-hidden min-h-[440px]">
            {/* Background design elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#5D6D53_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />

            <div className="relative z-10 flex justify-between items-center pb-4 border-b border-brand-accent/20">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wide flex items-center">
                <Share2 className="w-4 h-4 mr-1.5 text-brand-secondary" />
                Território Industrial Integrado (Simulação Simbiótica)
              </span>
              <span className="text-[10px] font-mono text-brand-gray bg-white rounded px-2 py-0.5 border border-brand-accent">
                Clique nas empresas para ver os fluxos
              </span>
            </div>

            {/* Simulated interactive map schema */}
            <div className="relative h-72 my-6 flex items-center justify-center">
              
              {/* Central hub indicator */}
              <div className="absolute bg-white/90 border border-brand-accent rounded-full p-4 shadow-md text-center max-w-[120px] z-15">
                <p className="text-[9px] font-bold text-brand-primary">DISTRITO LOCAL</p>
                <p className="text-[8px] text-brand-gray font-mono">ECO CONECT HUB</p>
              </div>

              {/* Intersecting flow lines */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                {/* Laticínio to UsinaBio flow */}
                <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="#5D6D53" strokeWidth="2.5" strokeDasharray="5,5" className="animate-pulse" />
                {/* UsinaBio to Metalúrgica flow */}
                <line x1="20%" y1="80%" x2="80%" y2="20%" stroke="#5D6D53" strokeWidth="2" strokeDasharray="4,4" />
                {/* Metalúrgica to Laticínio heat flow */}
                <path d="M 80% 20% C 50% 10%, 50% 20%, 20% 20%" fill="none" stroke="#D97757" strokeWidth="2" strokeDasharray="4,4" />
                {/* Metalúrgica to Embalagens */}
                <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="#1F2922" strokeWidth="2.5" />
              </svg>

              {/* Node buttons */}
              {Object.values(nodes).map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl shadow-md border transition-all cursor-pointer z-20 hover:scale-115 flex flex-col items-center max-w-[160px] ${
                      isSelected
                        ? 'bg-brand-primary text-white border-brand-accent scale-110'
                        : 'bg-white text-brand-primary border-brand-accent-light hover:border-brand-secondary'
                    }`}
                  >
                    <Factory className={`w-5 h-5 mb-1 ${isSelected ? 'text-brand-accent' : 'text-brand-secondary'}`} />
                    <span className="text-[10px] font-bold text-center leading-tight">{node.name}</span>
                    <span className="text-[8px] opacity-80 uppercase font-mono tracking-wider mt-0.5">{node.type}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick stats feed from district diagram */}
            <div className="bg-white/80 border border-brand-accent-light rounded-xl p-3 flex justify-between items-center text-xs text-brand-primary font-sans relative z-10">
              <span className="flex items-center">
                <Zap className="w-4 h-4 text-amber-500 mr-1.5" />
                Circularidade Coletiva: <strong className="ml-1 text-brand-secondary">78.5%</strong>
              </span>
              <span>Emissões Evitadas: <strong className="text-brand-primary">12.4t CO2eq/mês</strong></span>
            </div>
          </div>

          {/* District details panel (Right 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {activeNode ? (
              <div className="p-6 bg-brand-bg rounded-3xl border border-brand-accent flex flex-col h-full justify-between animate-fadeIn">
                <div className="space-y-6">
                  {/* Title & Type badge */}
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-brand-accent-light text-brand-primary border border-brand-accent">
                      {activeNode.type}
                    </span>
                    <h3 className="font-display text-xl font-bold text-brand-primary mt-2">
                      {activeNode.name}
                    </h3>
                  </div>

                  {/* Flow Details */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-wider flex items-center">
                      <Layers className="w-4 h-4 mr-1.5 text-brand-secondary" />
                      Fluxo de Simbiose Territorial:
                    </p>
                    <p className="text-xs text-brand-gray leading-relaxed bg-white p-3.5 rounded-xl border border-brand-accent-light">
                      {activeNode.sharedFlow}
                    </p>
                  </div>

                  {/* Inputs / Outputs Lists */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">Insumos Absorvidos</p>
                      <ul className="space-y-1">
                        {activeNode.inputs.map((inp, idx) => (
                          <li key={idx} className="text-[10px] text-brand-gray flex items-center bg-white py-1 px-2.5 rounded border border-brand-accent-light">
                            <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mr-2-shrink-0" />
                            <span>{inp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">Subprodutos / Perdas</p>
                      <ul className="space-y-1">
                        {activeNode.outputs.map((out, idx) => (
                          <li key={idx} className="text-[10px] text-brand-gray flex items-center bg-white py-1 px-2.5 rounded border border-brand-accent-light">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2-shrink-0" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Economic impact badge */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-brand-primary to-emerald-800 text-white border border-brand-primary/30">
                  <p className="text-[9px] uppercase font-mono font-bold tracking-widest text-brand-accent">Retorno e Impacto Ecológico:</p>
                  <p className="text-xs font-medium mt-1 leading-relaxed">{activeNode.ecoImpact}</p>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-brand-bg rounded-3xl border border-brand-accent-light flex items-center justify-center text-center h-full">
                <p className="text-sm text-brand-gray">Selecione uma empresa no distrito interativo à esquerda para analisar seus fluxos circulares compartilhados.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
