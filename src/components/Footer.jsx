import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-black/40 py-10 mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-gradient mb-2">
            {portfolioData.personal.name}
          </span>
          <p className="text-gray-400 text-sm max-w-sm">
            Transformando algoritmos complejos en soluciones técnicas eficientes.
          </p>
        </div>

        <div className="flex space-x-5">
          <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
            <Github size={20} />
          </a>
          {/* Guardé el logo de LinkedIn por si me lo creo más adelante */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-brand-blue transition-colors p-2 rounded-full hover:bg-white/10">
            <Linkedin size={20} />
          </a> */}
          <a href={`mailto:${portfolioData.personal.email}`}
             className="text-gray-400 hover:text-brand-cyan transition-colors p-2 rounded-full hover:bg-white/10">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-8 text-center text-xs text-gray-500">
        &copy; {currentYear} Rigel Alonso Villanueva Soberanis. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
