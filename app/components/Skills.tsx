export default function Skills() { 
    const skills = [ 
      { name: 'HTML/CSS', level: 90 }, 
      { name: 'JavaScript', level: 85 }, 
      { name: 'React', level: 80 }, 
      { name: 'Next.js', level: 75 }, 
      { name: 'TypeScript', level: 70 }, 
      { name: 'Node.js', level: 65 } 
    ]; 
   
    return ( 
      <section id="skills" className="py-20 bg-gray-50"> 
        <div className="container mx-auto px-4 max-w-4xl"> 
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"> 
            Skills 
          </h2> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
            {skills.map((skill, index) => ( 
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm"> 
                <div className="flex justify-between mb-2"> 
                  <span className="font-semibold text-gray-700">{skill.name}</span> 
                  <span className="text-blue-600">{skill.level}%</span> 
                </div> 
                <div className="w-full bg-gray-200 rounded-full h-2"> 
                  <div  
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${skill.level}%` }} 
                  ></div> 
                </div> 
              </div> 
            ))} 
          </div> 
        </div> 
      </section> 
    ); 
  }