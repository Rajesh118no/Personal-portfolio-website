import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6 backdrop-blur-sm">
            Storytelling + Strategy Focused
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8 text-white">
            I Create Content That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">
              Connects & Inspires.
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Helping brands and creators turn passive viewers into loyal communities through emotion-driven short-form video and strategic narratives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-medium transition-all backdrop-blur-sm"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 animate-bounce"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;