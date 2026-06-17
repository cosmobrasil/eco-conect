import React from 'react';
import { ArrowRight, Leaf, Shield, Heart } from 'lucide-react';

interface HeroProps {
  onLearnMore: () => void;
  onOpenDemo: () => void;
}

export default function Hero({ onLearnMore, onOpenDemo }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-brand-bg py-16 md:py-24">
      {/* Decorative ambient circular grids */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial from-brand-accent/20 to-transparent rounded-full blur-[80px]" />
      <div className="absolute -bottom-20 left-0 w-[300px] h-[300px] bg-radial from-brand-primary/10 to-transparent rounded-full blur-[60px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Copy block */}
        <div className="space-y-8 animate-fadeIn">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-brand-accent-light text-brand-secondary rounded-full border border-[#DCDFD0] font-sans text-xs font-bold uppercase tracking-widest">
            <Leaf className="w-4 h-4 text-brand-secondary" />
            <span>Liderando a Transição Circular</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] font-normal text-brand-primary tracking-tight">
            Eco Conect: <br />
            <span className="italic text-brand-secondary font-medium">
              Escalonando a Circularidade
            </span> <br />
            através de Inteligência Estratégica
          </h1>

          <p className="font-sans text-lg text-brand-gray/95 max-w-xl leading-relaxed">
            Transformamos modelos de negócios lineares em ecossistemas circulares altamente lucrativos e sustentáveis, orientados por dados de alta precisão e conformidade internacional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onOpenDemo}
              className="px-8 py-4 bg-brand-primary text-white hover:bg-brand-secondary hover:translate-y-[-2px] hover:shadow-lg active:scale-95 text-base font-bold rounded-full flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>Solicitar Demonstração</span>
              <ArrowRight className="w-5 h-5 text-brand-accent" />
            </button>
            <button
              onClick={onLearnMore}
              className="px-8 py-4 bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-accent-light hover:translate-y-[-2px] text-base font-bold rounded-full flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>Conhecer Estratégia</span>
            </button>
          </div>
        </div>

        {/* Right Graphic/Image block with Floating Badge */}
        <div className="relative flex justify-center lg:justify-end animate-fadeIn">
          {/* Subtle design grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#bec9c2_1px,transparent_1px),linear-gradient(to_bottom,#bec9c2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />

          <div className="relative max-w-lg w-full">
            <img
              alt="Industrial Intelligence Mockup"
              referrerPolicy="no-referrer"
              className="relative z-10 rounded-[32px] border-4 border-white/60 shadow-2xl object-cover w-full h-[480px] md:h-[520px]"
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=900&fit=crop&crop=center"
            />

            {/* floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl z-20 border border-brand-accent-light flex items-center space-x-4 animate-bounceSubtle hover:scale-105 transition-all">
              <div className="w-12 h-12 rounded-full bg-brand-accent-light flex items-center justify-center border border-brand-accent/50 text-brand-secondary">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-brand-gray">Gestão de Perdas</p>
                <p className="font-display text-lg font-bold text-brand-primary">+34% Eficiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
