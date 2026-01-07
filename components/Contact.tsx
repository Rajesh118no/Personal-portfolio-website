import React from 'react';
import Section from './Section';
import { Mail, Instagram, Send } from 'lucide-react';

interface ContactProps {
  onOpenModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenModal }) => {
  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl text-center">
        
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Let's Create <br /> Something <span className="text-violet-400">Epic</span>.
        </h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto text-lg">
          Ready to take your content strategy to the next level? Connect with me directly or send a message to get started.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <a href="mailto:hello@creator.io" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-violet-500/10 border border-white/5 hover:border-violet-500/30 transition-all group w-full md:w-auto justify-center">
            <Mail size={20} className="text-zinc-400 group-hover:text-violet-400" />
            <span className="text-white font-medium">hello@creator.io</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-violet-500/10 border border-white/5 hover:border-violet-500/30 transition-all group w-full md:w-auto justify-center">
            <Instagram size={20} className="text-zinc-400 group-hover:text-violet-400" />
            <span className="text-white font-medium">@creator_studio</span>
          </a>
        </div>

        <button 
          onClick={onOpenModal}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-violet-200 transition-colors shadow-lg shadow-violet-900/20"
        >
          Send Me a Message <Send size={18} />
        </button>

      </div>
    </Section>
  );
};

export default Contact;