import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const languages = {
  en: {
    hero: {
      title: "Crafting Digital",
      highlight: "Experiences",
      subtitle: "Full-Stack Developer | UI/UX Designer | Tech Innovator",
      cta: "Explore My Work"
    },
    projects: {
      title: "Featured Projects",
      projects: [
        {
          title: "MarketDigital Landing",
          description: "A futuristic landing page with stunning 3D animations and interactive elements",
          url: "https://marketdigital.netlify.app",
          tech: ["React", "TailwindCSS", "Framer Motion", "3D CSS"],
          features: [
            "3D Interactive Header",
            "Facial Scan Animation",
            "Smooth Scroll",
            "Glassmorphism UI"
          ]
        },
        {
          title: "Revesta Mobile App",
          description: "Full-featured e-commerce mobile application for a coating company",
          tech: ["React Native", "NativeWind", "Firebase"],
          features: [
            "Authentication",
            "Shopping Cart",
            "Dark Mode",
            "Order History"
          ]
        },
        {
          title: "ArgentPost Website",
          description: "Professional website for an international courier service connecting US and Argentina",
          url: "https://argentpost.com",
          tech: ["HTML5", "CSS3", "JavaScript", "Mobile First"],
          features: [
            "Responsive Design",
            "WhatsApp Integration",
            "Clear Navigation",
            "Professional UI"
          ]
        }
      ]
    },
    about: {
      title: "About Me",
      description: "I'm a passionate full-stack developer with a keen eye for design and a drive for creating innovative digital solutions. With years of experience in web development, I specialize in building modern, scalable applications that combine cutting-edge technology with exceptional user experience.",
      skills: [
        { title: 'Frontend', description: 'React, Vue, Angular' },
        { title: 'Backend', description: 'Node.js, Python, Java' },
        { title: 'Database', description: 'MongoDB, PostgreSQL' },
        { title: 'DevOps', description: 'Docker, AWS, CI/CD' },
        { title: 'UI/UX', description: 'Figma, Adobe XD' },
        { title: 'Mobile', description: 'React Native, Flutter' }
      ]
    },
    services: {
      title: "My Services",
      services: [
        {
          title: "Web Development",
          description: "Creating responsive and dynamic web applications using modern frameworks and technologies."
        },
        {
          title: "Mobile Development",
          description: "Building cross-platform mobile applications that provide seamless user experiences."
        },
        {
          title: "UI/UX Design",
          description: "Designing intuitive and beautiful interfaces that enhance user engagement and satisfaction."
        },
        {
          title: "Backend Development",
          description: "Developing robust server-side solutions and APIs to power your applications."
        }
      ]
    },
    testimonials: {
      title: "What Clients Say",
      testimonials: [
        {
          quote: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded all expectations.",
          author: "Sarah Johnson",
          title: "CEO, TechStart"
        },
        {
          quote: "Incredible attention to detail and technical expertise. Our web application performance improved significantly.",
          author: "Michael Chen",
          title: "CTO, InnovateCorp"
        },
        {
          quote: "A true professional who brings both technical skills and creative solutions to every project.",
          author: "Emily Rodriguez",
          title: "Product Manager, DesignHub"
        }
      ],
      prev: "Previous",
      next: "Next"
    },
    contact: {
      title: "Get In Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message"
    }
  },
  es: {
    hero: {
      title: "Creando Experiencias",
      highlight: "Digitales",
      subtitle: "Desarrollador Full-Stack | Diseñador UI/UX | Innovador Tech",
      cta: "Explora Mi Trabajo"
    },
    projects: {
      title: "Proyectos Destacados",
      projects: [
        {
          title: "MarketDigital Landing",
          description: "Landing page futurista con animaciones 3D e interactividad",
          url: "https://marketdigital.netlify.app",
          tech: ["React", "TailwindCSS", "Framer Motion", "CSS 3D"],
          features: [
            "Header 3D Interactivo",
            "Animación de Escaneo Facial",
            "Scroll Suave",
            "UI con Glassmorphism"
          ]
        },
        {
          title: "App Revesta",
          description: "Aplicación móvil completa de e-commerce para empresa de revestimientos",
          tech: ["React Native", "NativeWind", "Firebase"],
          features: [
            "Autenticación",
            "Carrito de Compras",
            "Modo Oscuro",
            "Historial de Pedidos"
          ]
        },
        {
          title: "Sitio ArgentPost",
          description: "Sitio web profesional para servicio de courier internacional entre EE.UU. y Argentina",
          url: "https://argentpost.com",
          tech: ["HTML5", "CSS3", "JavaScript", "Mobile First"],
          features: [
            "Diseño Responsivo",
            "Integración WhatsApp",
            "Navegación Clara",
            "UI Profesional"
          ]
        }
      ]
    },
    about: {
      title: "Sobre Mí",
      description: "Soy un desarrollador full-stack apasionado con un ojo agudo para el diseño y un impulso por crear soluciones digitales innovadoras. Con años de experiencia en desarrollo web, me especializo en construir aplicaciones modernas y escalables que combinan tecnología de vanguardia con una experiencia de usuario excepcional.",
      skills: [
        { title: 'Frontend', description: 'React, Vue, Angular' },
        { title: 'Backend', description: 'Node.js, Python, Java' },
        { title: 'Base de Datos', description: 'MongoDB, PostgreSQL' },
        { title: 'DevOps', description: 'Docker, AWS, CI/CD' },
        { title: 'UI/UX', description: 'Figma, Adobe XD' },
        { title: 'Móvil', description: 'React Native, Flutter' }
      ]
    },
    services: {
      title: "Mis Servicios",
      services: [
        {
          title: "Desarrollo Web",
          description: "Creación de aplicaciones web responsivas y dinámicas utilizando frameworks y tecnologías modernas."
        },
        {
          title: "Desarrollo Móvil",
          description: "Construcción de aplicaciones móviles multiplataforma que proporcionan experiencias de usuario fluidas."
        },
        {
          title: "Diseño UI/UX",
          description: "Diseño de interfaces intuitivas y hermosas que mejoran la participación y satisfacción del usuario."
        },
        {
          title: "Desarrollo Backend",
          description: "Desarrollo de soluciones robustas del lado del servidor y APIs para potenciar tus aplicaciones."
        }
      ]
    },
    testimonials: {
      title: "Lo Que Dicen los Clientes",
      testimonials: [
        {
          quote: "Trabajar con este desarrollador fue un placer absoluto. Entregaron nuestro proyecto a tiempo y superaron todas las expectativas.",
          author: "Sara Jiménez",
          title: "CEO, TechStart"
        },
        {
          quote: "Increíble atención al detalle y experiencia técnica. El rendimiento de nuestra aplicación web mejoró significativamente.",
          author: "Miguel Chen",
          title: "CTO, InnovateCorp"
        },
        {
          quote: "Un verdadero profesional que aporta tanto habilidades técnicas como soluciones creativas a cada proyecto.",
          author: "Emma Rodríguez",
          title: "Product Manager, DesignHub"
        }
      ],
      prev: "Anterior",
      next: "Siguiente"
    },
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      submit: "Enviar Mensaje"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
