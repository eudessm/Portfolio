import React from 'react';
import { Linkedin, Mail, Github, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSidebar: React.FC = () => {
  const socialLinks = [
    { Icon: Linkedin, href: 'https://linkedin.com/in/eudessmachado', label: 'LinkedIn' },
    { Icon: Github, href: 'https://github.com/eudessm', label: 'GitHub' },
    { Icon: Mail, href: 'mailto:eudesmare@gmail.com', label: 'Email' },
    { Icon: MessageCircle, href: 'https://wa.me/5581999950376', label: 'WhatsApp' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="hidden md:flex fixed left-6 top-1/2 transform -translate-y-1/2 flex-col gap-6 z-40"
    >
      <div className="w-[1px] h-20 bg-white/30 mx-auto mb-2"></div>
      {socialLinks.map(({ Icon, href, label }, index) => (
        <a 
          key={index} 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300 bg-black/10 p-2 rounded-full backdrop-blur-sm"
        >
          <Icon size={20} />
        </a>
      ))}
      <div className="w-[1px] h-20 bg-white/30 mx-auto mt-2"></div>
    </motion.div>
  );
};

export default SocialSidebar;