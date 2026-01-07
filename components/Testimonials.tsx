import React from 'react';
import Section from './Section';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 flex flex-col relative hover:bg-zinc-900/50 transition-colors">
            <Quote size={24} className="text-violet-500/30 absolute top-6 right-6" />
            
            {/* Content */}
            <div className="flex-1 mb-6">
              <p className="text-zinc-300 text-lg leading-relaxed italic">
                "{t.text}"
              </p>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                <img 
                  src={t.avatarUrl} 
                  alt={t.author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{t.author}</p>
                <p className="text-zinc-500 text-xs uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;