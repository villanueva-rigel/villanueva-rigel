import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionTitle from '../components/SectionTitle';
import { School, MapPin, Languages, UserCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle subtitle="Conoce más" title="Sobre Mí" />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch"
        >
          
          {/* Mi descripción detallada */}
          <div className="flex-1 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-3xl rounded-full"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Un Vistazo a mi Perfil</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {portfolioData.about.description}
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center transform transition-transform duration-300 hover:-translate-y-1">
              <div className="p-4 bg-brand-blue/20 text-brand-blue rounded-xl">
                <School size={28} />
              </div>
              <div>
                <h4 className="font-semibold text-white">Educación Académica</h4>
                <p className="text-gray-400">{portfolioData.personal.education}</p>
              </div>
            </div>
          </div>

          {/* Barra lateral con mis detalles */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            
            {/* Edad */}
            <div className="glass-card rounded-3xl p-6 flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]">
              <div className="p-4 bg-purple-500/20 text-purple-400 rounded-xl">
                <UserCircle size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 font-medium">Edad</h4>
                <p className="text-lg font-bold text-white">{portfolioData.personal.age}</p>
              </div>
            </div>

            {/* Donde vivo */}
            <div className="glass-card rounded-3xl p-6 flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]">
              <div className="p-4 bg-brand-cyan/20 text-brand-cyan rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400 font-medium">Ubicación</h4>
                <p className="text-lg font-bold text-white">{portfolioData.personal.location}</p>
              </div>
            </div>

            {/* Mis idiomas dominados */}
            <div className="glass-card rounded-3xl p-6 flex-1 flex flex-col justify-center transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 text-white rounded-xl">
                  <Languages size={20} />
                </div>
                <h4 className="text-lg font-bold text-white">Idiomas</h4>
              </div>
              
              <div className="space-y-4">
                {portfolioData.about.languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-gray-300 font-medium">{lang.name}</span>
                    <span className="px-3 py-1 bg-brand-blue/20 text-brand-blue text-xs rounded-full font-semibold tracking-wider">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
