import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, languages } from '../context/LanguageContext';

const TestimonialsSection = styled.section`
  padding: 5rem 0;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--gold-accent);
`;

const TestimonialsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const TestimonialCard = styled(motion.div)`
  padding: 2rem;
  text-align: center;
  position: absolute;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 15px;
    background: linear-gradient(
      135deg,
      rgba(255, 215, 0, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(10px);
    z-index: -1;
  }
`;

const Quote = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const Author = styled.div`
  margin-top: 2rem;
`;

const AuthorName = styled.h4`
  color: var(--gold-accent);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const AuthorTitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  background: none;
  border: 2px solid var(--gold-accent);
  color: var(--gold-accent);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--gold-accent);
    color: var(--primary-dark);
  }
`;

const Testimonials = () => {
  const { language } = useLanguage();
  const content = languages[language].testimonials;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % content.testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + content.testimonials.length) % content.testimonials.length);
  };

  return (
    <TestimonialsSection>
      <Title>{content.title}</Title>
      <TestimonialsContainer>
        <AnimatePresence mode="wait">
          <TestimonialCard
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Quote>"{content.testimonials[currentIndex].quote}"</Quote>
            <Author>
              <AuthorName>{content.testimonials[currentIndex].author}</AuthorName>
              <AuthorTitle>{content.testimonials[currentIndex].title}</AuthorTitle>
            </Author>
          </TestimonialCard>
        </AnimatePresence>
        <Navigation>
          <NavButton onClick={handlePrev}>{content.prev}</NavButton>
          <NavButton onClick={handleNext}>{content.next}</NavButton>
        </Navigation>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
