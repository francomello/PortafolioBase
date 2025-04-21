import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Components
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--primary-dark);
`;

const MainContent = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LanguageButton = styled(motion.button)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid var(--gold-accent);
  color: var(--gold-accent);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Orbitron', sans-serif;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: var(--gold-accent);
    color: var(--primary-dark);
  }
`;

const AppContent = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <AppContainer>
      <GlobalStyles />
      <LanguageButton
        onClick={toggleLanguage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {language === 'en' ? 'ES' : 'EN'}
      </LanguageButton>
      <MainContent>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
      </MainContent>
    </AppContainer>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
