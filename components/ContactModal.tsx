import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-zinc-900 border border-white/10 w-full max-w-lg rounded-2xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <h3 className="text-xl font-display font-bold text-white">Get in Touch</h3>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <div className="p-6 overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="modal-name"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-white/10 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="modal-email"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-white/10 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-message" className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                    <textarea 
                      id="modal-message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-white/10 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 rounded-lg bg-white text-black font-bold hover:bg-violet-200 transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;