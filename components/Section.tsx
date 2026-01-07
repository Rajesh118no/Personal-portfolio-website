import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`relative w-full ${noPadding ? '' : 'py-20 md:py-32'} px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;