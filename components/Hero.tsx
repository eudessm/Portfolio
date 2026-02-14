import React from 'react';
import { Linkedin, FileText, MousePointer2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Text Parallax: Fades out and moves up slightly faster (foreground feel)
  const yText = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  // Image Parallax: Moves down (resists scroll) creating depth (midground)
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 0.9]);

  // Blob Parallax: Moves down more (background)
  const yBlob = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 pt-24 md:pt-0 overflow-hidden relative">
      
      {/* Left Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="w-full md:w-1/2 flex flex-col justify-center items-start z-10 space-y-6 md:pl-16 relative"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-green-200 mb-2 block">
            Analista e Desenvolvedor
          </span>
          <h4 className="text-xl md:text-2xl font-medium mb-0">Eudes S. Machado</h4>
          <h1 className="text-[5rem] sm:text-[7rem] md:text-[6rem] lg:text-[8rem] leading-none font-marker text-white drop-shadow-lg">
            SYSTEMS
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg max-w-xl leading-relaxed text-gray-100"
        >
          Atuando na área de Tecnologia, desenvolve ou prestando manutenção de software, e realizando processos a fim de encontrar o melhor caminho racional para que a informação possa ser processada.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a href="https://linkedin.com/in/eudessmachado" target="_blank" rel="noopener noreferrer" className="px-8 py-3 flex items-center justify-center gap-2 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-[#38703d] transition-all duration-300 uppercase tracking-wider text-sm">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <button className="px-8 py-3 flex items-center justify-center gap-3 font-semibold hover:text-green-200 transition-colors duration-300 uppercase tracking-wider text-sm group">
            <div className="w-8 h-8 bg-white text-[#38703d] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText size={14} fill="currentColor" />
            </div>
            Baixar CV
          </button>
        </motion.div>
      </motion.div>

      {/* Right Content - Image Area */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative h-[50vh] md:h-screen mt-8 md:mt-0">
        
        {/* Animated Blob Background - Separate Layer */}
        <motion.div 
          style={{ y: yBlob }}
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" 
        />
        
        {/* Professional Avatar Container - Separate Layer */}
        <motion.div
          style={{ y: yImage, scale: scaleImage }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 flex justify-center items-center"
        >
          <motion.img 
            src="https://github.com/eudessm.png" 
            alt="Eudes S. Machado"
            className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-cover rounded-full border-4 border-white/20 shadow-2xl"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity: opacityText }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <MousePointer2 size={24} className="animate-bounce" />
      </motion.div>

    </section>
  );
};

export default Hero;