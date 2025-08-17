import Cubes from '../Cubes/Cubes';

const AboutSection = () => {
  return (
    <section id="about-section" className="relative w-full min-h-screen bg-black text-red-600 py-16 overflow-hidden">
        <div className="mb-16 ">
          <h2 
            className="text-4xl md:text-6xl font-normal tracking-wider mb-8 text-red-600 ml-[87px]" 
            style={{ 
              fontFamily: '"Diplomata SC"',
              letterSpacing: '0.1em'
            }}
          >
            ABOUT ME
          </h2>
          <hr className="w-full border-red-600 mt-2"/>
        </div>
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 order-2 lg:order-1">
            
            <div className="space-y-6 text-base leading-relaxed">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-red-600" style={{ fontFamily: 'monospace' }}>WHO AM I?</h3>
                <p className="text-red-600" style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
                  I'm a passionate Full Stack Developer based in India, with a deep love for creating beautiful, functional, and user-centered digital experiences. With a background in Computer Science, I bring both technical expertise and creative problem-solving to every project.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-red-600" style={{ fontFamily: 'monospace' }}>MY JOURNEY</h3>
                <div className="space-y-1" style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
                  <p>• Started coding in 2022 with Python and Java</p>
                  <p>• Transitioned to web development in 2024</p>
                  <p>• Built 50+ projects across various domains</p>
                  <p>• Worked with startups and established companies</p>
                  <p>• Contributed to open-source projects</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-red-600" style={{ fontFamily: 'monospace' }}>TECH STACK</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs" style={{ fontFamily: 'monospace' }}>
                  {[
                    'React.js', 'Next.js', 'Node.js', 'TypeScript',
                    'MongoDB', 'PostgreSQL', 'GraphQL', 'Tailwind CSS',
                    'Redux', 'Express', 'Docker', 'AWS'
                  ].map((tech) => (
                    <div key={tech} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-600 mr-2"></span>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <button className="px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-black transition-colors duration-300 text-xs tracking-wider" style={{ fontFamily: 'monospace' }}>
                  DOWNLOAD RESUME
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Cubes Animation */}
          <div className="h-[600px] lg:h-[700px] w-full relative order-1 lg:order-2">
            <div style={{ height: '800px', width: '1000px', position: 'relative', paddingTop: '100px', paddingLeft: '100px', overflow: 'hidden' }}>
              <Cubes 
                gridSize={9}
                maxAngle={60}
                radius={3}
                borderStyle="2px dashed #FC0606"
                faceColor="#000"
                rippleColor="#FC0606"
                rippleSpeed={1.5}
                autoAnimate={true}
                rippleOnClick={true}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-red-600/5 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      </div>
    </section>
  );
};

export default AboutSection;
