/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import InteractiveHero from "./components/InteractiveHero";
import StrategicFrentes from "./components/StrategicFrentes";
import IaFirstArchitecture from "./components/IaFirstArchitecture";
import DistritosCircularPilares from "./components/DistritosCircularPilares";
import SectorSolutions from "./components/SectorSolutions";
import InteligenciaDashboard from "./components/InteligenciaDashboard";
import EcosystemMap from "./components/EcosystemMap";
import CosmobPartnership from "./components/CosmobPartnership";
import KnowledgeCenter from "./components/KnowledgeCenter";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import QuickPitch from "./components/QuickPitch";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-emerald-500 selection:text-slate-950 tech-gradient">
      
      {/* Dynamic 15-Second Quick Pitch overlay addressing criteria */}
      <QuickPitch />

      {/* Primary header navbar controls */}
      <Navbar />

      {/* Main Layout sequence */}
      <main>
        
        {/* HERO: Headline + Subheadline + Dynamic Canvas connection background */}
        <InteractiveHero />

        {/* SECTION 1: O Que Fazemos (frentes de atuações) */}
        <StrategicFrentes />

        {/* SECTION 2: Arquitetura IA First (Diagrama dinâmico Usuário->IA->COSMOB) */}
        <IaFirstArchitecture />

        {/* SECTION 3: 5 Pilares dos Distritos Circulares + Hotspots over aerial photo */}
        <DistritosCircularPilares />

        {/* SECTION 4: Soluções Setoriais (Grid interativo + Simulador Eco-Audit) */}
        <SectorSolutions />

        {/* SECTION 5: Dashboards de Inteligência (Saas simulador com gráficos e IGC) */}
        <InteligenciaDashboard />

        {/* SECTION 6: Ecossistema Tecnológico (Conectividade Empresas-Apps-IA) */}
        <EcosystemMap />

        {/* SECTION 7: Parceria Internacional COSMOB Itália */}
        <CosmobPartnership />

        {/* SECTION 8: Plataforma de Conhecimento (Artigos técnicos download e PDF) */}
        <KnowledgeCenter />

        {/* SECTION 9: Posicionamento estratégico institucional */}
        <AboutSection />

        {/* CTA SECTION: Chamada Final, Solicitar Demo + Assistente de chat ao vivo */}
        <CTASection />

      </main>

      {/* Footer controls standard */}
      <Footer />

    </div>
  );
}
