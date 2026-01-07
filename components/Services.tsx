import React from 'react';
import Section from './Section';
import { SERVICES } from '../constants';
import { Video, PenTool, TrendingUp, Bot, Smartphone } from 'lucide-react';

const iconMap = {
  Video: Video,
  PenTool: PenTool,
  TrendingUp: TrendingUp,
  Bot: Bot,
  Smartphone: Smartphone
};

const Services: React.FC = () => {
  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">How I Can Help</h2>
        <p className="text-zinc-400 max-w-xl mx-auto">Scalable content solutions tailored for growth and engagement.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.iconName];
          return (
            <div 
              key={service.id}
              className={`group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-violet-500/30 hover:bg-zinc-800/50 transition-all duration-300 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 group-hover:bg-violet-600/20 flex items-center justify-center text-white group-hover:text-violet-400 mb-6 transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;