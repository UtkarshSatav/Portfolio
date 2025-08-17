import React from 'react';

const Showcase: React.FC = () => {
  const projects = [
    {
      title: 'KT',
      description: 'E-commerce Platform',
      subtitle: 'Seamless online shopping experience',
      videoUrl: '/src/assets/REC-20250811201118.mp4',
      thumbnail: '/images/project3-thumb.jpg',
      year: '2024',
      role: 'UI/UX Designer & Developer'
    },
    {
      title: 'Doctors Portfolio',
      description: 'Portfolio Website',
      subtitle: 'A professional portfolio for medical professionals',
      videoUrl: '/src/assets/REC-20250811200812.mp4',
      thumbnail: '/images/project2-thumb.jpg',
      year: '2024',
      role: 'Frontend Developer'
    },
    {
      title: 'AXM',
      description: 'Full Stack Web Application',
      subtitle: 'A modern web application built with cutting-edge technologies',
      videoUrl: '/src/assets/REC-20250727000637.mp4',
      thumbnail: '/images/project1-thumb.jpg',
      year: '2023',
      role: 'Full Stack Developer'
    }
  ];

  return (
    <section className="relative w-full bg-black">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="relative h-screen w-full flex items-center justify-center overflow-hidden"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: index + 1
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ opacity: 1 }}
              poster={project.thumbnail}
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative z-10 text-left w-full px-8">
            <h2 className="text-6xl font-bold text-black" style={{ fontFamily: '"Diplomata SC"', textShadow: '0 0 10px rgba(252, 6, 6, 0.7)' }}>{project.title}</h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Showcase;
