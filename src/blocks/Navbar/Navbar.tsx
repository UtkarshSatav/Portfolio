import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < prevScrollY.current) {
        // Scrolling up
        setIsVisible(true);
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '#about', onClick: () => scrollToSection('about-section') },
    { name: 'Work', path: '#work-section', onClick: () => scrollToSection('work-section') },
    { name: 'Skills', path: '#skills-section', onClick: () => scrollToSection('skills-section') },
    { name: 'Contact', path: '#contact-section', onClick: () => scrollToSection('contact-section') },
  ];

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl rounded-full bg-white/80 backdrop-blur-md shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-32'
      }`}
    >
      <div className="px-8 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-lg font-bold" 
            style={{ 
              fontFamily: '"Diplomata SC"', 
              fontWeight: 'normal',
              textShadow: '0 0 10px #FC0606, 0 0 20px #FC0606, 0 0 30px #FC0606',
              color: '#000',
            }}
          >
            Utkarsh
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={link.onClick}
                className="text-lg font-bold hover:text-red-500 transition-colors cursor-pointer"
                style={{
                  fontFamily: '"Diplomata SC"',
                  fontWeight: 'normal',
                  textShadow: '0 0 10px #FC0606, 0 0 20px #FC0606, 0 0 30px #FC0606',
                  color: '#000',
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-px h-6  mx-2"></div>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white backdrop-blur-md border-t  mt-2 py-4 px-8 rounded-b-2xl">
          <div className="flex flex-col space-y-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-black/80 hover:text-black px-4 py-2 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;