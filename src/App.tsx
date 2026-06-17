import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import StrategyISO from './components/StrategyISO';
import OperationsCapture from './components/OperationsCapture';
import DistrictSimulation from './components/DistrictSimulation';
import AIDiagnosticsView from './components/AIDiagnosticsView';
import SuiteApps from './components/SuiteApps';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { CircularAssessmentInput, AIDiagnostic } from './types';
import { AlertCircle, Loader2, Sparkles, HelpCircle } from 'lucide-react';

export default function App() {
  const [diagnostic, setDiagnostic] = useState<AIDiagnostic | null>(null);
  const [selectedInput, setSelectedInput] = useState<CircularAssessmentInput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Loading sub-status messages to keep user engaged with industrial data contexts
  const [loadingStep, setLoadingStep] = useState(0);
  const loadingMessages = [
    'Verificando parâmetros industriais inseridos...',
    'Consultando diretrizes estratégicas da norma ISO 59004...',
    'Avaliando modelos de negócios circulares segundo a ISO 59010...',
    'Construindo plano de mensuração de massa física segundo a ISO 59020...',
    'Mapeando simbiose industrial e rotas de upcycling no Distrito Circular...',
    'Finalizando diagnóstico por IA...'
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleDiagnoseSubmit = async (input: CircularAssessmentInput) => {
    setLoading(true);
    setError(null);
    setDiagnostic(null);
    setSelectedInput(input);

    try {
      const response = await fetch('/api/diagnose', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Ocorreu um erro ao comunicar-se com o servidor do Eco Conect.');
      }

      const rawData = await response.json();
      setDiagnostic(rawData);

      // Scroll smoothly to report section
      setTimeout(() => {
        const reportSection = document.getElementById('diagnosed-report');
        if (reportSection) {
          reportSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);

    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Houve uma falha inesperada no processador de IA.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetDiagnostic = () => {
    setDiagnostic(null);
    setSelectedInput(null);
    setError(null);
    
    // Scroll back to simulation input
    const inputSection = document.getElementById('operations');
    if (inputSection) {
      inputSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStrategy = () => {
    const strategySection = document.getElementById('strategy');
    if (strategySection) {
      strategySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-brand-primary">
      
      {/* Structural Header */}
      <Navbar onOpenDemo={scrollToDemo} onOpenConsult={scrollToStrategy} />

      {/* Main Container */}
      <main className="pt-16">
        
        {/* Presentation Hero Block */}
        <Hero onLearnMore={scrollToStrategy} onOpenDemo={scrollToDemo} />

        {/* Corporate Trust Banner */}
        <Partners />

        {/* Level 01: Strategic Standards */}
        <StrategyISO />

        {/* Level 02: Ecossistema de Aplicativos CosmoBrasil 2026 */}
        <SuiteApps />

        {/* Level 03: Operational Simulator & Data Input form */}
        <OperationsCapture onDiagnoseSubmit={handleDiagnoseSubmit} loading={loading} />

        {/* Loading Overlay */}
        {loading && (
          <div className="py-16 flex flex-col items-center justify-center bg-white border-t border-brand-accent-light space-y-6 animate-pulse">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full border-4 border-brand-accent-light animate-spin border-t-brand-secondary" />
              <Loader2 className="w-8 h-8 text-brand-primary animate-spin" />
            </div>
            <div className="text-center space-y-2 max-w-md px-6">
              <p className="font-display text-lg font-bold text-brand-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 mr-2 text-brand-secondary animate-bounce" />
                Inteligência Eco Conect Ativa
              </p>
              <p className="font-mono text-xs text-brand-secondary font-semibold">
                {loadingMessages[loadingStep]}
              </p>
              <p className="font-sans text-[10px] text-brand-gray">
                Aguarde. Nossa IA está processando um diagnóstico estrutural profundo com base nas diretrizes ISO de economia circular.
              </p>
            </div>
          </div>
        )}

        {/* Error Notification Block */}
        {error && (
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-2xl flex items-start space-x-3 shadow-sm">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-display text-sm font-bold text-red-900">Falha ao processar dados de circularidade</h4>
                <p className="text-xs text-red-700 leading-relaxed">
                  {error}
                </p>
                <p className="text-[10px] text-brand-gray pt-1">
                  Certifique-se de configurar sua chave de API nas configurações ou tente outra simulação simplificada ajustando os sliders.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Level 03: AI Analytical Diagnostic View Report */}
        {diagnostic && selectedInput && (
          <AIDiagnosticsView
            diagnostic={diagnostic}
            input={selectedInput}
            onReset={handleResetDiagnostic}
          />
        )}

        {/* Level 03: Território view / District Symbiosis Graph */}
        <DistrictSimulation />

        {/* Lead Capture form */}
        <ContactForm />

      </main>

      {/* Corporate footer info */}
      <Footer />
      
    </div>
  );
}
