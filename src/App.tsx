import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { LifeOutsideWork } from './components/LifeOutsideWork';
import { YearlyRecaps } from './components/YearlyRecaps';
import { Contact } from './components/Contact';
import { useLanguage } from './hooks/useLanguage';

export function App() {
  const { currentLang, t, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header currentLang={currentLang} onToggleLanguage={toggleLanguage} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <LifeOutsideWork t={t} />
        <YearlyRecaps t={t} />
        <Contact t={t} />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Canzhen Zhou. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}