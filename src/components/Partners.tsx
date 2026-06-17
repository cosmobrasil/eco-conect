import React from 'react';
import { ShieldAlert, Award, FileSpreadsheet, Globe2, Cpu } from 'lucide-react';

export default function Partners() {
  const partners = [
    { name: 'INDUSTRY_A', icon: Cpu, label: 'Parcerias Manufatura' },
    { name: 'CIRCULAR_CO', icon: Globe2, label: 'Líderes de Alianças' },
    { name: 'ISO_CERTIFIED', icon: Award, label: 'Conselho de Normas' },
    { name: 'ECO_GLOBAL', icon: ShieldAlert, label: 'Certificação Verde' },
    { name: 'TECH_METRICS', icon: FileSpreadsheet, label: 'Auditoria de Dados' },
  ];

  return (
    <section className="py-12 bg-white border-y border-brand-accent-light/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray/80 mb-8">
          Confiado por Líderes Industriais, Órgãos de Regulação e Auditores Globais
        </p>
        <div className="flex flex-wrap justify-around items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center space-x-2.5 transition-all duration-300 transform hover:scale-105 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 group"
              title={partner.label}
            >
              <partner.icon className="w-5 h-5 text-brand-secondary group-hover:text-brand-primary transition-colors" />
              <span className="font-display text-sm md:text-base font-bold text-brand-primary tracking-wider">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
