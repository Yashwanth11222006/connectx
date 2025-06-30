import React from 'react';
import HeroSection from './components/HeroSection';
import PartnersScrollSection from './components/PartnersScrollSection';
import PillarsSection from './components/PillarsSection';
import StorySection from './components/StorySection';
import AgendaSection from './components/AgendaSection';
import ChiefGuestsSection from './components/ChiefGuestsSection';
import SpeakersSection from './components/SpeakersSection';
import JoinSection from './components/JoinSection';
import ContactSection from './components/ContactSection';
import PreFooterCTA from './components/PreFooterCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sora">
      <HeroSection />
      <PartnersScrollSection />
      <div id="chief-guests">
        <ChiefGuestsSection />
      </div>
      <SpeakersSection />
      <PillarsSection />
      <StorySection />
      <AgendaSection />
      <JoinSection />
      <ContactSection />
      <PreFooterCTA />
      <Footer />
    </div>
  );
}

export default App;