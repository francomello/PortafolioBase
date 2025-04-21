import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage, languages } from '../context/LanguageContext';
import imagenAbout from '../assets/img-about.png';

const AboutSection = styled.section`
  padding: 5rem 0;
  position: relative;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Content = styled(motion.div)`
  .glass-effect {
    padding: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--gold-accent);
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled(motion.div)`
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);

  h4 {
    color: var(--gold-accent);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  height: 400px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, var(--gold-accent) 0%, var(--neon-blue) 100%);
    opacity: 0.1;
    border-radius: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

const About = () => {
  const { language } = useLanguage();
  const content = languages[language].about;

  return (
    <AboutSection>
      <Container>
        <Content
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-effect">
            <Title>{content.title}</Title>
            <Description>{content.description}</Description>
            <SkillsGrid>
              {content.skills.map((skill, index) => (
                <SkillItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </SkillItem>
              ))}
            </SkillsGrid>
          </div>
        </Content>
        <ImageContainer
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={imagenAbout} 
            alt="Developer Profile"
          />
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default About;
