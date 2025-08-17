import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.9, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/UtkarshSatav' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/utkarsh-satav-808432313/' },
    { icon: <FaTwitter />, url: 'https://x.com/UtkarshSatav' },
    { icon: <FaEnvelope />, url: 'mailto:ianutkarsh@gmail.com' },
  ];

  return (
    <motion.footer 
      ref={ref}
      className="relative w-full bg-black text-red-600 py-6 overflow-hidden bottom-0 border-t border-red-600 z-0"
      style={{
        opacity,
        y,
        scale,
        willChange: 'transform, opacity',
        transformStyle: 'preserve-3d',
        transformOrigin: 'top center'
      }}
    >
      <div className="container bg-black mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'monospace' }}>Navigation</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm hover:opacity-80 transition-opacity">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'monospace' }}>Connect</h3>
              <ul className="space-y-2">
                {['Email', 'LinkedIn', 'GitHub', 'Twitter'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:opacity-80 transition-opacity">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'monospace' }}>Legal</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:opacity-80 transition-opacity">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'monospace' }}>Social</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl hover:opacity-80 transition-opacity"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-red-600/20 pt-8">
            <p className="text-sm text-center">
              © {new Date().getFullYear()} Utkarsh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-red-500/10 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"
          style={{ y }}
        ></motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
