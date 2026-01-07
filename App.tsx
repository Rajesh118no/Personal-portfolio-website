import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-brand-dark text-zinc-100 selection:bg-violet-500/30 font-sans">
      <Navbar onContactClick={openContact} />
      <main>
        <Hero onContactClick={openContact} />
        <About />
        <Services />
        <Tools />
        <Testimonials />
        <Contact onOpenModal={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}

export default App;