import React from 'react';
import { Github, ExternalLink, Info } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row group w-full">
      
      {/* Sección donde muestro la imagen de mi proyecto */}
      <div className="w-full lg:w-5/12 h-64 lg:h-auto relative overflow-hidden bg-white/5 flex items-center justify-center p-8">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full max-w-sm object-contain rounded-xl relative z-10 transform group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-2xl" 
        />
      </div>

      {/* Mi explicación del proyecto */}
      <div className="w-full lg:w-7/12 p-8 lg:p-10 flex flex-col justify-center relative">
        <h3 className="text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-brand-cyan transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="space-y-4 mb-8">
          <div>
            <h4 className="text-brand-blue text-xs font-bold uppercase tracking-wider mb-1">El Problema</h4>
            <p className="text-gray-400 text-sm">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-brand-cyan text-xs font-bold uppercase tracking-wider mb-1">La Solución</h4>
            <p className="text-gray-400 text-sm">{project.solution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Mis enlaces al código y demo */}
        <div className="mt-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
          >
            <Github size={18} />
            <span>Ver Código</span>
          </a>
          
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-blue/90 hover:to-brand-cyan/90 text-white rounded-xl shadow-lg shadow-brand-blue/20 font-medium transition-all duration-300 transform hover:-translate-y-1"
          >
            <ExternalLink size={18} />
            <span>Ver Web</span>
          </a>
        </div>

        {/* Mi nota sobre el servidor gratuito de Render */}
        <div className="mt-6 flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200">
          <Info size={16} className="mt-0.5 flex-shrink-0" />
          <p>
            <strong className="block text-blue-300 font-semibold mb-0.5">Aviso de Render (Plan Gratuito)</strong>
            El backend de esta demo está alojado en un servicio gratuito. La primera llamada puede tardar hasta 50 segundos en responder mientras el servidor "despierta".
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
