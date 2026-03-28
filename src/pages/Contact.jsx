import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowRight, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 relative z-10 bg-gradient-to-t from-black/80 to-transparent">
      
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-16 border border-white/10 relative overflow-hidden text-center z-10">
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-cyan/20 blur-3xl rounded-full"></div>
          
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block">
            Ponte en Contacto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            ¿Listo para construir <br className="hidden md:block" /> algo increíble? 🚀
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Ya sea que busques talento técnico para integrar a tu equipo de desarrollo o necesites digitalizar tu negocio con software a medida, estoy listo para aportar soluciones lógicas y eficientes. Si tienes un desafío en mente, hablemos; mi enfoque está en convertir ideas en código sólido.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] group relative z-20"
            >
              <Mail size={22} className="text-brand-blue" />
              <span>Envíame un Correo</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="https://wa.me/529999062620?text=Hola%20Rigel%20Alonso%20Villanueva%20Soberanis,%20vengo%20de%20tu%20portafolio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] group relative z-20"
            >
              <Smartphone size={22} className="text-white" />
              <span>WhatsApp</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
