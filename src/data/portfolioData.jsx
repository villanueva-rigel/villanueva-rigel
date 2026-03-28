import { 
  Server, 
  Smartphone, 
  Database, 
  Code2, 
  Brain, 
  BookOpen, 
  Award 
} from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Rigel Alonso Villanueva Soberanis",
    age: "19 años",
    role: "Especialista en Desarrollo Web y Backend | Aplicaciones Móviles",
    email: "villanuevarigel302006@gmail.com",
    github: "https://github.com/villanueva-rigel",
    location: "Cuzamá, Yucatán",
    education: "Estudiante de Ingeniería en Tecnologías de la Información en la Universidad Tecnológica Metropolitana (UTM Mérida)"
  },
  about: {
    description: "Tengo 19 años y soy un apasionado de la tecnología. Me destaco por aprender cosas nuevas sumamente rápido y disfrutar al máximo los retos que ponen a prueba mi lógica. Me especializo en el desarrollo web creando páginas robustas y dinámicas, y de igual forma desarrollo aplicaciones móviles con gran detalle. Busco integrarme a una empresa para mis estadías profesionales; de la misma forma ofrezco mis servicios como desarrollador independiente para cualquier persona o negocio que necesite una página web, una app a medida o la digitalización de procesos.",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Pre-intermedio" }
    ]
  },
  skills: {
    backend: {
      title: "Desarrollo Backend",
      icon: <Server size={24} />,
      items: [
        { name: "Node.js & Express.js", desc: "Servidores de alto rendimiento y asíncronos." },
        { name: "Python", desc: "Algoritmos limpios y procesamiento de datos." },
        { name: "C# (.NET)", desc: "Software estructurado, tipado fuerte para prevenir errores." }
      ]
    },
    frontendMobile: {
      title: "Móvil y Frontend",
      icon: <Smartphone size={24} />,
      items: [
        { name: "Dart (Flutter)", desc: "Apps Android completas, arquitectura interna y UX." },
        { name: "React & Angular", desc: "Interfaces dinámicas (React) y corporativas (Angular)." },
        { name: "HTML5 & CSS3", desc: "Maquetación limpia, tiempos de carga mínimos." }
      ]
    },
    database: {
      title: "Bases de Datos",
      icon: <Database size={24} />,
      items: [
        { name: "PostgreSQL (Supabase)", desc: "Gestión relacional, tiempo real y autenticación." },
        { name: "SQL Server & MySQL", desc: "Arquitecturas tradicionales e integridad." },
        { name: "MongoDB", desc: "Modelos NoSQL y documentos no estructurados." }
      ]
    },
    aptitudes: {
      title: "Aptitudes Profesionales",
      icon: <Brain size={24} />,
      items: [
        { name: "Resolución de Retos Lógicos", desc: "Desgloso problemas complejos en código manejable y eficiente." },
        { name: "Aprendizaje Autodidacta", desc: "Domino nuevas tecnologías en tiempo récord y busco constantes mejoras." },
        { name: "Arquitectura Limpia", desc: "Estructuras de carpetas organizadas, código fácil de leer y escalar." },
        { name: "Liderazgo", desc: "Capacidad para tomar iniciativa, guiar el desarrollo de proyectos y aportar soluciones propositivas." }
      ]
    }
  },
  projects: [
    {
      id: "sublegados",
      title: "SubLegados Tours",
      description: "Plataforma integral para los guías de turismo en las zonas de cenotes en Cuzamá y Homún. Desarrolló digitalización de la información donde antes faltaba disponibilidad técnica.",
      problem: "Falta de digitalización para los guías en las zonas de cenotes con conectividad limitada.",
      solution: "Frontend ligero para funcionar con poco internet, Backend en Express para gestionar rutas, y Supabase para base de datos en tiempo real de los tours de la zona.",
      techStack: ["HTML5", "CSS3", "JavaScript puro", "Express.js", "Supabase"],
      githubUrl: "https://github.com/villanueva-rigel/SubLegados-Tours.git",
      demoUrl: "https://gregarious-otter-3db01b.netlify.app/",
      imageUrl: "/assets/logo.png"
    }
  ]
};
