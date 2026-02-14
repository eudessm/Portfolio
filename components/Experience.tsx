import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Play, X, Film } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  videoTitle?: string;
  videoSrc?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "ICL América do Sul",
    role: "Analista de Sistema",
    period: "2 Anos",
    description: "Analista SAP (PP, MM, SD, BASIS). Atendimento a incidentes, reportando problemas, planejamento e coordenação de requisições de serviço junto ao time de desenvolvimento. Realização de testes unitários e integrados. Melhorias de processos e mitigação de riscos.",
    videoTitle: "Apresentação Eudes - SAP",
    videoSrc: "/videos/sap-presentation.mp4" // Replace with actual video path
  },
  {
    company: "Compass Minerals América do Sul S/A",
    role: "Analista de Suporte",
    period: "6 Anos",
    description: "Coordenação da equipe de campo, gestão de acessos, Reports, manutenção e implementação de projetos de software. Monitoramento de servidores, Backup, Contratos Leasing, Desenvolvedor Jr (Web).",
    videoTitle: "Apresentação Eudes - Analista de Suporte",
    videoSrc: "/videos/support-presentation.mp4" // Replace with actual video path
  },
  {
    company: "Silma Eletrônica",
    role: "Técnico em manutenção",
    period: "4 Anos",
    description: "Montagem, instalação e configuração de equipamentos de informática. Manutenção preventiva e corretiva de hardware e software. Atendimento help-desk."
  }
];

const Experience: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="w-full py-20 px-6 md:px-12 lg:px-24 bg-black/10 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-marker mb-12 text-center text-white drop-shadow-md">
          Experiência Profissional
        </h2>

        <div className="relative border-l-4 border-white/20 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-1 w-6 h-6 bg-[#5ba568] border-4 border-[#2e5c35] rounded-full shadow-lg z-10"></div>
              
              <motion.div 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => exp.videoSrc && setSelectedVideo(exp)}
                className={`bg-white/10 p-6 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group transition-all ${exp.videoSrc ? 'cursor-pointer' : ''}`}
              >
                {/* Play Overlay Hint */}
                {exp.videoSrc && (
                  <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <Play size={20} className="text-white fill-white" />
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Briefcase size={20} className="text-green-300" />
                      {exp.company}
                    </h3>
                    <span className="text-lg text-green-200 font-medium">{exp.role}</span>
                  </div>
                  <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base relative z-10">
                  {exp.description}
                </p>
                
                {exp.videoSrc && (
                   <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-green-300 opacity-70 group-hover:opacity-100 transition-opacity">
                      <Film size={14} />
                      Clique para ver apresentação
                   </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a3c20] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#2e5c35]">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                   <Play size={20} className="fill-white" />
                   {selectedVideo.videoTitle}
                </h3>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="relative pt-[56.25%] bg-black">
                <video 
                  src={selectedVideo.videoSrc} 
                  controls 
                  className="absolute top-0 left-0 w-full h-full"
                  autoPlay
                >
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;