import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { User, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-zinc-900/30 rounded-3xl border border-white/5 my-10">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
        
        {/* Decorative Graphic */}
        <div className="w-full md:w-1/3 relative group">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 overflow-hidden relative shadow-2xl">
             {/* Placeholder for a portrait */}
            <img 
              src="https://picsum.photos/400/400?grayscale" 
              alt="Creator Portrait" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-2 text-white font-display font-bold text-xl">
                 <User size={20} className="text-violet-400" />
                 About Me
              </div>
            </div>
          </div>
          {/* Accent decoration */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-violet-500/20" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            More Than Just <span className="text-violet-400">Trends</span>.
          </h2>
          <div className="prose prose-invert prose-lg text-zinc-400 mb-8">
            <p className="border-l-4 border-violet-500 pl-4 italic bg-white/5 py-4 pr-4 rounded-r-lg">
              “I’m a content creator specializing in short-form videos, storytelling scripts, and social media strategy. I help brands and creators grow through emotion-driven content.”
            </p>
            <p className="mt-4 text-base">
              My approach combines data-driven insights with the art of storytelling. Whether it's a 15-second Reel or a brand documentary, the goal is always the same: make them feel something, then make them do something.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-zinc-500 font-semibold mb-4 flex items-center gap-2">
              <Sparkles size={16} /> Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-violet-900/30 border border-zinc-700 hover:border-violet-500/50 text-zinc-300 hover:text-violet-200 text-sm transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;