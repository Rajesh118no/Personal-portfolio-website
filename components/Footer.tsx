import React from 'react';
import { Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
        </div>
        <p className="text-zinc-600 font-display font-medium text-lg mb-2">
          "Stories that stay."
        </p>
        <p className="text-zinc-800 text-sm">
          &copy; 2026 Content Creator Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;