import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="py-24 md:py-32 flex items-center relative overflow-hidden">
      {/* Mi fondo difuminado de colores */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-cyan/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Mis textos de presentación */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10"
        >
          <span className="px-4 py-2 rounded-full glass border border-white/10 text-brand-cyan text-sm sm:text-base font-medium tracking-wide mb-6 inline-block">
            Hola, soy {portfolioData.personal.name} 👋
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6">
            Construyendo <br className="hidden md:block"/>
            <span className="text-gradient">Software Robusto</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-light">
            Especialista Web & Desarrollador de Apps. Transformando algoritmos complejos en soluciones técnicas eficientes.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-blue/90 hover:to-brand-cyan/90 text-white rounded-xl shadow-lg shadow-brand-blue/20 font-bold transition-all duration-300 transform hover:-translate-y-1"
            >
              Ver Proyectos
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 glass hover:bg-white/10 text-white rounded-xl border border-white/10 font-bold transition-all duration-300 transform hover:-translate-y-1"
            >
              Contáctame
            </a>
          </div>
        </motion.div>

        {/* Mi foto de perfil principal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center lg:justify-end z-10 relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            {/* Borde animado de mi foto */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-blue via-brand-cyan to-transparent opacity-50 animate-[spin_4s_linear_infinite]"></div>
            
            {/* Marco interior negro */}
            <div className="absolute inset-2 md:inset-3 rounded-full bg-black">
              {/* Renderizado de mi imagen */}
              <img 
                src="/assets/profile.jpeg" 
                alt="Rigel Villanueva" 
                className="w-full h-full object-cover rounded-full p-2"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
