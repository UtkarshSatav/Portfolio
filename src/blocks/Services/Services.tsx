const Services = () => {
  const categories = [
    {
      title: 'SERVICES',
      items: [
        'Web Development',
        'UI/UX Design',
        'Branding',
        'Digital Marketing',
        'E-commerce Solutions',
        'Mobile App Development',
        'SEO & Analytics',
        'Content Creation',
        'Social Media Management',
        'Video Production',
        '3D Modeling',
        'Motion Graphics'
      ]
    },
    {
      title: 'TECHNOLOGIES',
      items: [
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'Three.js',
        'GSAP',
        'Figma',
        'Adobe Creative Suite',
        'Blender',
        'After Effects',
        'WebGL',
        'GraphQL'
      ]
    }
  ];

  return (
    <section className="py-24 bg-black relative z-10 w-full">
      <div className="w-full ">
        <div className="w-full mb-12">
          <h2 className="text-red-600 text-5xl font-normal tracking-tight mb-8 max-w-7xl mx-auto" style={{ fontFamily: '"Diplomata SC"' }}>
            I craft digital experiences that inspire and engage.
          </h2>
          <hr className="w-full h-0.5 bg-red-600 mt-2" />
          <div className="w-full">
            <p className="text-red-600 text-lg max-w-2xl ml-[87px] text-left my-12" style={{ 
              fontFamily: 'monospace',
              letterSpacing: '0.15em',
              fontSize: '0.85rem'
            }}>
              I build for clients who care about craft. If you want a developer who speaks design fluently and isn't afraid to suggest improvements that make the work better, we should probably talk.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl mx-auto pt-8">
          {categories.map((category, index) => (
            <div key={index} className="text-left">
              <h3 className="text-sm font-normal mb-6 text-red-600 tracking-wider uppercase" style={{ 
                fontFamily: 'monospace',
                letterSpacing: '0.15em',
                fontSize: '0.85rem'
              }}>
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="text-red-600 text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-default"
                    style={{ 
                      fontFamily: 'monospace'
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
