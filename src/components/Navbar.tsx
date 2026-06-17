import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenConsult: () => void;
}

export default function Navbar({ onOpenDemo, onOpenConsult }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Estratégia', href: '#strategy' },
    { name: 'Operações & Dados', href: '#operations' },
    { name: 'Inteligência', href: '#intelligence' },
    { name: 'Distrito Circular', href: '#district' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-brand-accent-light shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a className="flex items-center space-x-2 group" href="#">
          <div className="bg-brand-primary p-2 rounded-lg group-hover:bg-brand-secondary transition-all">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-display font-bold text-brand-primary tracking-tight">
            Eco <span className="text-brand-secondary">Conect</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              className="font-sans text-sm font-medium text-brand-gray hover:text-brand-primary transition-colors duration-200"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onOpenConsult}
            className="px-5 py-2 rounded-lg border border-brand-secondary text-brand-secondary font-sans text-sm font-medium hover:bg-brand-accent-light hover:text-brand-primary transition-all cursor-pointer"
          >
            Consultoria ISO
          </button>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2 rounded-lg bg-brand-primary text-white font-sans text-sm font-medium hover:bg-brand-secondary active:scale-95 transition-all cursor-pointer"
          >
            Solicitar Demo
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-brand-primary hover:bg-brand-accent-light transition-all"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-brand-accent-light px-6 py-4 space-y-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                onClick={() => setIsOpen(false)}
                className="font-sans text-base font-semibold text-brand-gray hover:text-brand-primary py-1 transition-colors"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-brand-accent-light flex flex-col space-y-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsult();
              }}
              className="w-full py-2.5 rounded-lg border border-brand-secondary text-brand-secondary font-sans font-medium text-sm text-center hover:bg-brand-accent-light transition-all"
            >
              Consultoria ISO
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 rounded-lg bg-brand-primary text-white font-sans font-medium text-sm text-center hover:bg-brand-secondary transition-all"
            >
              Solicitar Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
