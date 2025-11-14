import Link from 'next/link'; 
 
export default function Home() { 
  return ( 
    <div className="min-h-screen"> 
      {/* Hero Section */} 
      <section className="min-h-screen flex items-center justify-center bg-gradient-to
br from-blue-50 to-indigo-100"> 
        <div className="text-center px-4"> 
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"> 
            DOJM FOR FUTURE
          </h1> 
          <p className="text-xl md:text-2xl text-gray-600 mb-8"> 
            Full-Stack Web Developer 
          </p> 
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8"> 
            I create beautiful, functional, and scalable web applications 
          </p> 
           
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"> 
            <Link  
              href="/projects" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 
transition" 
            > 
              View My Work 
            </Link> 
            <Link  
              href="/contact" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg 
hover:bg-blue-50 transition" 
            > 
              Get In Touch 
            </Link> 
          </div> 
 
          
        </div> 
      </section> 
    </div> 
); 
}