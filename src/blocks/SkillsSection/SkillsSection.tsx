import React, { useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaGithub, FaJava } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiFigma, SiVite, SiGit, SiThreedotjs, SiBootstrap, SiWebgl, SiPython, SiCplusplus, SiWebflow } from 'react-icons/si';

interface Position {
  x: number;
  y: number;
}

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(0.8);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center aspect-square p-4 bg-black border-[0.5px] border-red-600/80 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-red-600"
    >
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(225, 0, 0), transparent 80%)`,
        }}
      />
      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-2 relative z-10">
        <span className="text-3xl md:text-4xl text-red-600 group-hover:text-black transition-colors duration-300">
          {icon}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-center text-red-600 group-hover:text-black font-mono transition-colors duration-300 line-clamp-2 relative z-10">
        {name}
      </span>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Three.js', icon: <SiThreedotjs /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'WebGL', icon: <SiWebgl /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Webflow', icon: <SiWebflow /> }
  ];

  return (
    <section id="skills-section" className="w-full min-h-screen bg-black py-16 relative z-10">
      <div className="mb-16">
        <h2 
          className="text-4xl md:text-6xl font-normal tracking-wider ml-[87px] text-red-600 mb-4" 
          style={{ 
            fontFamily: '"Diplomata SC"',
            letterSpacing: '0.1em'
          }}
        >
          SKILLS
        </h2>
        <hr className="w-full border-red-600" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
