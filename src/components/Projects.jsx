import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage, languages } from '../context/LanguageContext';

const ProjectsSection = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--gold-accent);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const ProjectCard = styled(motion.div)`
  padding: 2rem;
  min-height: 450px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 15px;
    border: 1px solid rgba(255, 215, 0, 0.1);
    background: linear-gradient(
      135deg,
      rgba(255, 215, 0, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(10px);
    z-index: -1;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3)
    );
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: var(--gold-accent);
    }
  }
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  background: rgba(255, 215, 0, 0.1);
  color: var(--gold-accent);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: auto;
  
  li {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    
    &:before {
      content: '▹';
      color: var(--gold-accent);
    }
  }
`;

const Projects = () => {
  const { language } = useLanguage();
  const content = languages[language].projects;

  return (
    <ProjectsSection id="projects">
      <SectionTitle>{content.title}</SectionTitle>
      <ProjectsGrid>
        {content.projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <ProjectImage>
              <img 
                src={index === 0 ? '/marketdigital.png' : 
                    index === 1 ? '/revesta.png' : 
                    '/argentpost.png'} 
                alt={project.title}
              />
            </ProjectImage>
            <ProjectTitle>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTech>
              {project.tech.map((tech, i) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </ProjectTech>
            <FeaturesList>
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </FeaturesList>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
