import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Server, Wrench, GraduationCap, Mail, MessageCircle } from 'lucide-react';

const skillsData = [
  {
    category: "Programação",
    icon: Code,
    items: ["Java (Polimorfismo, Classes)", "Spring Boot (Lombok, MapStruct)", "HTML, CSS e JS", "Apex & Aura Components"]
  },
  {
    category: "Banco de Dados",
    icon: Database,
    items: ["PostgreSQL", "MySQL Workbench", "SQL Workbench/J", "Modelo Relacional"]
  },
  {
    category: "Sistemas & ERP",
    icon: Server,
    items: ["SAP (SD, MM, Basis)", "Salesforce (Lightning, Apex)", "OutSystems", "SAP S/4HANA"]
  },
  {
    category: "Infra & Ferramentas",
    icon: Wrench,
    items: ["Git/GitHub", "Intellij/Eclipse/VS Code", "Windows/macOS Server", "Redes & Wi-Fi"]
  }
];

const educationData = [
  "NTT Data - Formação SAP SD (11/2025)",
  "UNINABUCO – Bacharelado em Sistema da Informação (12/2019)",
  "Start Capgemini – Salesforce Adm (10/2023)",
  "CeV – Git, SQL, HTML, CSS e JS (06/2022)",
  "Trainning Education - Analista SAP (04/2022)",
  "DIO, BE PRO - OutSystems (06/2024)",
  "SENAC - Técnico em Manutenção (10/2009)"
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Skills Column */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-marker mb-10 text-white drop-shadow-md flex items-center gap-3"
          >
             Conhecimentos
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillsData.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(91, 165, 104, 0.3)",
                  borderColor: "rgba(91, 165, 104, 0.5)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                className="bg-white/10 p-5 rounded-xl border border-white/5 backdrop-blur-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 text-green-300">
                  <skill.icon size={24} />
                  <h3 className="font-bold text-lg">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 5, color: "#86efac" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-sm text-gray-200 flex items-center gap-2 cursor-default"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <motion.div
          id="education"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-marker mb-10 text-white drop-shadow-md flex items-center gap-3">
            <GraduationCap size={36} /> Formação
          </h2>
          <div className="space-y-4">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-white/10 to-transparent p-4 rounded-lg border-l-4 border-green-400 hover:bg-white/20 transition-colors"
              >
                <p className="font-medium text-white">{edu}</p>
              </motion.div>
            ))}
          </div>

          <div id="contact" className="mt-16 bg-black/20 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Vamos conversar?</h3>
            <p className="text-gray-300 mb-6">
              Estou disponível para novos projetos e oportunidades em presencial ou remoto.
            </p>
            <div className="flex flex-col gap-4">
               <a href="mailto:eudesmare@gmail.com" className="flex items-center gap-3 text-green-300 hover:text-white transition-colors font-mono group">
                 <div className="p-2 bg-white/10 rounded-full group-hover:bg-green-500/20 transition-colors">
                    <Mail size={18} />
                 </div>
                 eudesmare@gmail.com
               </a>
               <a href="https://wa.me/5581999950376" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-300 hover:text-white transition-colors font-mono group">
                 <div className="p-2 bg-white/10 rounded-full group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={18} />
                 </div>
                 WhatsApp: (81) 99995-0376
               </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;