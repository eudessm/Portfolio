import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialSidebar from './components/SocialSidebar';
import Experience from './components/Experience';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a3c20] via-[#2e5c35] to-[#122e16] text-white font-poppins relative overflow-x-hidden selection:bg-white selection:text-coc-green">
      <Navbar />
      <SocialSidebar />
      <main className="relative w-full h-full">
        <Hero />
        <Experience />
        <Skills />
        <footer className="w-full py-8 text-center text-white/40 text-sm">
           © {new Date().getFullYear()} Eudes S. Machado. Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
};

export default App;