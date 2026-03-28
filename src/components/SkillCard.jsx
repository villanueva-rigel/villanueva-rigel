import React from 'react';

const SkillCard = ({ title, icon, items }) => {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col items-start relative overflow-hidden group">
      
      {/* Brillo decorativo de mi card */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-blue/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex items-center space-x-4 mb-6 relative z-10 w-full">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-brand-cyan group-hover:text-brand-blue transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
      </div>
      
      <div className="flex-1 w-full space-y-4 relative z-10">
        {items.map((item, idx) => (
          <div key={idx} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
            <h4 className="font-semibold text-gray-200 text-sm">{item.name}</h4>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
