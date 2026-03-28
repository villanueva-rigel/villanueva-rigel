import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <SectionTitle subtitle="Portafolio" title="Proyectos Destacados" />
        
        <div className="mt-12 space-y-16">
          {portfolioData.projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Projects;
