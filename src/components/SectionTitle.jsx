import React from 'react';

const SectionTitle = ({ subtitle, title, alignment = 'left' }) => {
  return (
    <div className={`flex flex-col mb-12 relative z-10 ${alignment === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <span className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-2">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
}

export default SectionTitle;
