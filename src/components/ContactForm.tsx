import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Building, User, HelpCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    sector: 'Indústria',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.company) {
      alert('Por favor, preencha os campos obrigatórios (Nome, E-mail e Empresa).');
      return;
    }
    // Simulate API call
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-brand-bg scroll-mt-16">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-[32px] border border-brand-accent shadow-xl text-center space-y-6">
            <div className="w-16 h-16 bg-brand-accent-light text-brand-secondary rounded-full flex items-center justify-center mx-auto border border-brand-accent">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-normal italic text-brand-primary">Obrigado pela Solicitação!</h3>
              <p className="font-sans text-sm text-brand-gray leading-relaxed">
                Olá <strong className="text-brand-secondary">{formData.fullName}</strong>. Recebemos seu contato com foco na empresa <strong>{formData.company}</strong>. Um de nossos cientistas de simbiose industrial entrará em contato em menos de 24 horas úteis no e-mail <strong>{formData.email}</strong>.
              </p>
            </div>
            
            <div className="p-4 bg-brand-bg rounded-xl border border-brand-accent-light text-left text-xs text-brand-gray flex items-start space-x-2.5">
              <ShieldCheck className="w-5 h-5 text-brand-secondary flex-shrink-0" />
              <span>Sua empresa está qualificada para participar do mapeamento prévio de Distritos Circulares locais de acordo com a norma <strong>ISO 59010</strong>.</span>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: '', email: '', company: '', sector: 'Indústria', message: '' });
              }}
              className="w-full py-3.5 bg-brand-primary text-white hover:bg-brand-secondary font-display text-xs font-bold rounded-full transition-all cursor-pointer"
            >
              Enviar Outra Mensagem
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-brand-bg scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-md p-8 md:p-16 rounded-[40px] shadow-2xl border border-brand-accent-light/70 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-48 h-48 bg-radial from-brand-accent/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Form titles */}
          <div className="text-center mb-10 max-w-xl mx-auto space-y-3 relative z-10">
            <h3 className="font-display text-3xl sm:text-4xl font-normal italic text-brand-primary">
              Transforme sua Empresa Hoje
            </h3>
            <p className="font-sans text-sm text-brand-gray select-none">
              Agende uma demonstração personalizada com nossos consultores técnicos e descubra como integrar sua planta a um Distrito Circular local.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            {/* Grid 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-brand-primary uppercase tracking-wide flex items-center">
                  <User className="w-3.5 h-3.5 mr-1.5 text-brand-secondary" />
                  Nome Completo
                </label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Seu nome"
                  className="rounded-xl border border-brand-accent bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-secondary px-4 py-3 text-xs font-medium outline-none transition-all"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-brand-primary uppercase tracking-wide flex items-center">
                  <Mail className="w-3.5 h-3.5 mr-1.5 text-brand-secondary" />
                  E-mail Corporativo
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@empresa.com"
                  className="rounded-xl border border-brand-accent bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-secondary px-4 py-3 text-xs font-medium outline-none transition-all"
                />
              </div>
            </div>

            {/* Grid 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-brand-primary uppercase tracking-wide flex items-center">
                  <Building className="w-3.5 h-3.5 mr-1.5 text-brand-secondary" />
                  Empresa de Origem
                </label>
                <input
                  required
                  type="text"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Nome da corporação"
                  className="rounded-xl border border-brand-accent bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-secondary px-4 py-3 text-xs font-medium outline-none transition-all"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-brand-primary uppercase tracking-wide flex items-center">
                  <HelpCircle className="w-3.5 h-3.5 mr-1.5 text-brand-secondary" />
                  Setor Principal
                </label>
                <select
                  value={formData.sector}
                  onChange={e => setFormData({ ...formData, sector: e.target.value })}
                  className="rounded-xl border border-brand-accent bg-white focus:ring-2 focus:ring-brand-secondary px-4 py-3.5 text-xs font-semibold outline-none transition-all"
                >
                  <option value="Indústria">Indústria Geral</option>
                  <option value="Construção Civil">Construção Civil</option>
                  <option value="Gestão Pública">Gestão Pública / Territorial</option>
                  <option value="Consultoria">Consultoria e Normatização</option>
                </select>
              </div>
            </div>

            {/* Optional message */}
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold text-brand-primary uppercase tracking-wide">Mensagem (Opcional)</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Descreva brevemente como podemos ajudar sua organização na transição para a economia circular..."
                className="rounded-xl border border-brand-accent bg-white/70 focus:bg-white focus:ring-2 focus:ring-brand-secondary px-4 py-3 text-xs font-medium outline-none transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-brand-primary text-white hover:bg-brand-secondary rounded-full font-display text-sm font-bold shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Send className="w-4 h-4 fill-current text-brand-accent" />
              <span>Enviar Solicitação de Demonstração</span>
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
