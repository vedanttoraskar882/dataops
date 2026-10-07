import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Platform } from './components/Platform';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';

export const App: React.FC = () => {
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const [pilotTriggerElement, setPilotTriggerElement] = useState<HTMLElement | null>(null);

  const handleOpenPilot = (triggerElement?: HTMLElement) => {
    setPilotTriggerElement(triggerElement || null);
    setPilotModalOpen(true);
  };

  const handleClosePilot = () => {
    setPilotModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-navy-900 flex flex-col selection:bg-brand-teal/20 selection:text-navy-950">
      {/* Sticky Navigation */}
      <Navbar onRequestPilot={handleOpenPilot} />

      {/* Main Page Content - exact order: Home, About, Platform, How It Works, Market & Pricing, FAQ, Footer */}
      <main id="main-content" className="flex-grow">
        <Hero onRequestPilot={handleOpenPilot} />
        <About />
        <Platform />
        <HowItWorks />
        <Pricing onRequestPilot={handleOpenPilot} />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onRequestPilot={handleOpenPilot} />

      {/* Request a Pilot Accessible Modal */}
      <PilotModal
        isOpen={pilotModalOpen}
        onClose={handleClosePilot}
        triggerElement={pilotTriggerElement}
      />
    </div>
  );
};

export default App;
