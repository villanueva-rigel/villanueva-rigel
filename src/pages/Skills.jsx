import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20 relative z-10 bg-black/20">
      
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-brand-cyan/5 blur-[150px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle subtitle="Stack Tecnológico" title="Habilidades & Herramientas" alignment="center" />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-start"
        >
          <motion.div variants={itemVariants} className="group">
            <SkillCard 
              title={portfolioData.skills.backend.title}
              icon={portfolioData.skills.backend.icon}
              items={portfolioData.skills.backend.items}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="group lg:mt-12">
            <SkillCard 
              title={portfolioData.skills.frontendMobile.title}
              icon={portfolioData.skills.frontendMobile.icon}
              items={portfolioData.skills.frontendMobile.items}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="group">
            <SkillCard 
              title={portfolioData.skills.database.title}
              icon={portfolioData.skills.database.icon}
              items={portfolioData.skills.database.items}
            />
          </motion.div>
          <motion.div variants={itemVariants} className="group lg:mt-12">
            <SkillCard 
              title={portfolioData.skills.aptitudes.title}
              icon={portfolioData.skills.aptitudes.icon}
              items={portfolioData.skills.aptitudes.items}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
