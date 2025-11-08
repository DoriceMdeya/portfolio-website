export default function Projects() { 
    const projects = [ 
      { 
        title: 'E-Commerce Website', 
        description: 'A full-featured online store with shopping cart and payment integration.', 
        tech: ['React', 'Node.js', 'MongoDB'], 
      }, 
      { 
        title: 'Portfolio Website', 
        description: 'A responsive portfolio website showcasing various web projects.', 
        tech: ['Next.js', 'Tailwind CSS', 'TypeScript'], 
      }, 
      { 
        title: 'Task Management App', 
        description: 'A productivity app for managing daily tasks and projects.', 
        tech: ['React', 'Firebase', 'Material UI'], 
      }, 
    ]; 
   
    return ( 
      <section id="projects" className="py-20 bg-white"> 
        <div className="container mx-auto px-4 max-w-6xl"> 
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"> 
            Projects 
          </h2> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {projects.map((project, index) => ( 
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden 
  border border-gray-100 hover:shadow-lg transition"> 
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items
  center justify-center"> 
                  <div className="text-4xl text-blue-600 font-bold">DG</div> 
                </div> 
                <div className="p-6"> 
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3> 
                  <p className="text-gray-600 mb-4">{project.description}</p> 
                  <div className="flex flex-wrap gap-2"> 
                    {project.tech.map((tech, techIndex) => ( 
                      <span  
                        key={techIndex} 
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full" 
                      > 
                        {tech} 
                      </span> 
                    ))} 
                  </div> 
                </div> 
              </div> 
            ))} 
          </div> 
        </div> 
      </section> 
    ); 
  }