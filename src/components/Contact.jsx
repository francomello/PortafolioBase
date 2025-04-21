import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useLanguage, languages } from '../context/LanguageContext';

const ContactSection = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--gold-accent);
`;

const ContactForm = styled(motion.form)`
  padding: 2rem;
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

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--gold-accent);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 5px;
  color: #fff;
  font-family: 'Orbitron', sans-serif;

  &:focus {
    outline: none;
    border-color: var(--gold-accent);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 5px;
  color: #fff;
  min-height: 150px;
  font-family: 'Orbitron', sans-serif;

  &:focus {
    outline: none;
    border-color: var(--gold-accent);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--gold-accent);
  color: var(--primary-dark);
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Orbitron', sans-serif;
  width: 100%;
  margin-top: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  color: var(--gold-accent);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const Contact = () => {
  const { language } = useLanguage();
  const content = languages[language].contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ContactSection>
      <Container>
        <Title>{content.title}</Title>
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <InputGroup>
            <Label>{content.name}</Label>
            <Input type="text" required />
          </InputGroup>
          <InputGroup>
            <Label>{content.email}</Label>
            <Input type="email" required />
          </InputGroup>
          <InputGroup>
            <Label>{content.message}</Label>
            <TextArea required />
          </InputGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {content.submit}
          </SubmitButton>
        </ContactForm>
        <SocialLinks>
          <SocialLink
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <FaTwitter />
          </SocialLink>
          <SocialLink
            href="mailto:your.email@example.com"
            whileHover={{ y: -5 }}
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </Container>
    </ContactSection>
  );
};

export default Contact;
