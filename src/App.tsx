import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Platform from './components/Platform';
import Features from './components/Features';
import CtaPanel from './components/CtaPanel';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Platform />
        <Features />
        <CtaPanel />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}

export default App;