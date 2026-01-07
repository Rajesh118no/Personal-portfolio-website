import React from 'react';
import Section from './Section';
import { TOOLS } from '../constants';

const Tools: React.FC = () => {
  return (
    <Section id="tools" className="py-10">
      <div className="border-y border-white/5 py-10 bg-white/[0.02]">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Powered By</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {TOOLS.map((tool) => (
            <span 
              key={tool} 
              className="text-xl md:text-2xl font-display font-bold text-zinc-400 hover:text-white transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Tools;