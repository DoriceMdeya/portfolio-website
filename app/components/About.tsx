export default function About() { 
    return ( 
      <section id="about" className="py-20 bg-white"> 
        <div className="container mx-auto px-4 max-w-4xl"> 
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"> 
            About Me 
          </h2> 
          <div className="flex flex-col md:flex-row items-center gap-8"> 
            <div className="md:w-1/3"> 
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 
  rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold"> 
                DG 
              </div> 
            </div> 
            <div className="md:w-2/3"> 
              <p className="text-lg text-gray-600 mb-4"> 
                Hello! I'm Dorice George, a passionate web developer with expertise in  
                modern web technologies. I love creating responsive, user-friendly websites  
                and applications that solve real-world problems. 
              </p> 
              <p className="text-lg text-gray-600"> 
                With a keen eye for detail and a commitment to excellence, I strive to  
                deliver high-quality solutions that exceed expectations. 
              </p> 
            </div> 
          </div> 
        </div> 
      </section> 
    ); 
  }