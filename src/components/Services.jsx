import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaPaintBrush, FaServer } from 'react-icons/fa';
import { useLanguage, languages } from '../context/LanguageContext';

const ServicesSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(
    to bottom,
    var(--primary-dark),
    var(--secondary-dark)
  );
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--gold-accent);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const ServiceCard = styled(motion.div)`
  padding: 2rem;
  text-align: center;
  position: relative;
  
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

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: var(--gold-accent);
  margin-bottom: 1.5rem;
  
  svg {
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const Services = () => {
  const { language } = useLanguage();
  const content = languages[language].services;

  const icons = {
    0: <FaCode />,
    1: <FaMobile />,
    2: <FaPaintBrush />,
    3: <FaServer />
  };

  return (
    <ServicesSection>
      <Title>{content.title}</Title>
      <ServicesGrid>
        {content.services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ 
              transform: 'translateY(-10px)',
              transition: { duration: 0.3 }
            }}
          >
            <IconWrapper>{icons[index]}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;
