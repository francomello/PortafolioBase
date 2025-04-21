import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useLanguage, languages } from '../context/LanguageContext';
import { Link } from 'react-scroll';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`;

const HeroContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextContent = styled(motion.div)`
  z-index: 1;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  line-height: 1.2;
  letter-spacing: -0.02em;
  
  .highlight {
    color: var(--gold-accent);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--gold-accent);
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    justify-content: center;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.05em;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CanvasContainer = styled.div`
  height: 500px;
  width: 100%;
`;

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#ffd700"
        roughness={0.1}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  );
};

const Hero = () => {
  const { language } = useLanguage();
  const content = languages[language].hero;

  return (
    <HeroSection>
      <HeroContent>
        <TextContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>
            {content.title} <span className="highlight">{content.highlight}</span>
          </Title>
          <Subtitle className="neon-text">
            {content.subtitle}
          </Subtitle>
          <Link to="projects" smooth={true} duration={800} offset={-50}>
            <motion.button
              className="glass-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              {content.cta}
            </motion.button>
          </Link>
        </TextContent>
        <CanvasContainer>
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <AnimatedSphere />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </CanvasContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
