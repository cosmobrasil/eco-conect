import React from 'react';
import { Leaf, Globe, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-bg border-t border-brand-accent-light py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Branding */}
        <div className="space-y-4">
          <a className="flex items-center space-x-2" href="#">
            <div className="bg-brand-primary p-2 rounded-lg">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-display font-bold text-brand-primary tracking-tight">
              Eco <span className="text-brand-secondary">Conect</span>
            </span>
          </a>
          <p className="font-sans text-xs text-brand-gray/80 leading-relaxed">
            Escalonando a circularidade territorial de recursos e impulsionando a eficiência produtiva global.
          </p>
          <p className="font-sans text-[11px] text-brand-gray/60">
            © {currentYear} Eco Conect. Todos os direitos reservados.
          </p>
        </div>

        {/* Column 1 - Services */}
        <div className="space-y-4">
          <h4 className="font-display text-sm font-bold text-brand-primary">Serviços</h4>
          <ul className="space-y-2.5">
            <li>
              <a href="#strategy" className="font-sans text-xs text-brand-gray hover:text-brand-primary transition-colors inline-flex items-center">
                Consultoria Estratégica ISO
              </a>
            </li>
            <li>
              <a href="#operations" className="font-sans text-xs text-brand-gray hover:text-brand-primary transition-colors inline-flex items-center">
                Captura e Gestão de Dados
              </a>
            </li>
            <li>
              <a href="#intelligence" className="font-sans text-xs text-brand-gray hover:text-brand-primary transition-colors inline-flex items-center">
                Mapeamento de Distritos
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 - Standards */}
        <div className="space-y-4">
          <h4 className="font-display text-sm font-bold text-brand-primary">Padrões Globais</h4>
          <ul className="space-y-2.5">
            <li>
              <span className="font-sans text-xs text-brand-gray flex items-center">
                ISO 59004 • Princípios
              </span>
            </li>
            <li>
              <span className="font-sans text-xs text-brand-gray flex items-center">
                ISO 59010 • Modelos
              </span>
            </li>
            <li>
              <span className="font-sans text-xs text-brand-gray flex items-center">
                ISO 59020 • Mensuração
              </span>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact info */}
        <div className="space-y-4">
          <h4 className="font-display text-sm font-bold text-brand-primary">Contato</h4>
          <ul className="space-y-2.5">
            <li className="font-sans text-xs text-brand-gray flex items-center space-x-2">
              <Mail className="w-4 h-4 text-brand-secondary flex-shrink-0" />
              <span>suporte@ecoconect.com</span>
            </li>
            <li className="font-sans text-xs text-brand-gray flex items-center space-x-2">
              <Globe className="w-4 h-4 text-brand-secondary flex-shrink-0" />
              <span className="font-bold flex items-center">
                Brasil • Operações Globais
                <ExternalLink className="w-3 h-3 ml-1" />
              </span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
