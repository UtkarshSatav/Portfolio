// Import custom font
import '../../assets/Font/fonts.css';

// Project data with links, categories and technologies
const projects = [
  {
    id: 1,
    title: 'AXM',
    year: '2024',
    link: 'https://axmv0.netlify.app/',
    description: 'A modern E-commerce platform',
    category: 'E-commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Locus.sh',
    year: '2023',
    link: 'https://utkarshsatav.github.io/Locus.sh_Clone/',
    description: 'A modern Logistics and supply chain',
    category: 'Logistics',
    technologies: ['React', 'TypeScript', 'Mapbox', 'Firebase']
  },
  {
    id: 3,
    title: 'Doctors Portfolio',
    year: '2023',
    link: 'https://utkarshsatav.github.io/Doctors-Portfolio/',
    description: 'A modern Professional portfolio',
    category: 'Portfolio',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP']
  },
  {
    id: 4,
    title: 'KT',
    year: '2022',
    link: '#',
    description: 'A Modern Student Reward System',
    category: 'Education',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT']
  },
  {
    id: 5,
    title: 'Business Model',
    year: '2022',
    link: 'https://utkarshsatav.github.io/Business-Model/',
    description: 'Interactive business model canvas ',
    category: 'Productivity',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3']
  },
];

const WorkSection = () => {
  return (
    <section id="work-section" className="w-full min-h-screen bg-black py-16  relative z-10">
      {/* Work Heading */}
      <div className="mb-16">
        <h2 
          className="text-4xl md:text-6xl font-normal tracking-wider ml-[87px] text-red-600 mb-4" 
          style={{ 
            fontFamily: '"Diplomata SC"',
            letterSpacing: '0.1em'
          }}
        >
          WORK
        </h2>
        <hr className="w-full border-red-600"/>
        <p className="text-base w-[80%] text-red-600 mb-[100px] ml-[87px] mt-[100px] tracking-wider font-mono">
        A curated selection of projects I’ve brought to life — from launched websites and innovative digital tools to creative collaborations with talented teams. Each piece reflects a mix of design, functionality, and problem-solving, with links to explore deeper stories, behind-the-scenes details, and the impact they’ve made.
        </p>
      </div>


      {/* Projects List */}
      <div className="w-full">
        {projects.map((project, index) => (
          <a 
            key={project.id} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block w-full h-10 px-6 bg-black text-red-600 hover:bg-red-600 hover:text-black transition-colors duration-300 font-mono border-t border-red-900/30 ${
              index === projects.length - 1 ? 'border-b border-red-900/30' : ''
            }`}
          >
            <div className="w-full h-full grid grid-cols-4 items-center">
              <h3 className="text-base font-medium whitespace-nowrap group-hover:text-black">{project.title}</h3>
              <span className="text-xs text-red-600 whitespace-nowrap group-hover:text-black">
                {project.category}
              </span>
              <p className="text-xs text-red-600 opacity-0 group-hover:opacity-100 group-hover:text-black transition-opacity duration-300 whitespace-nowrap">
                {project.description}
              </p>
              <div className="flex items-center">
                <div className="flex items-center space-x-3 mr-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-[11px] text-red-600 whitespace-nowrap group-hover:text-black">
                      {tech}{i < project.technologies.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="text-xs mr-4">{project.year}</span>
                  <span className="group-hover:text-black">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default WorkSection;
