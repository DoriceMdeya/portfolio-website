import Hero from './components/Hero'; 
import About from './components/About'; 
import Skills from './components/Skills'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Link from 'next/link'; 
export default function Home() { 
return ( 
<main className="min-h-screen bg-white"> 
{/* Add Auth Header */} 
<header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow
sm"> 
<div className="container mx-auto px-4 py-4 flex justify-between items-center"> 
<div className="text-xl font-bold text-gray-800">Dorice George</div> 
          <div className="flex space-x-4"> 
            <Link  
              href="/login"  
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 
transition text-sm" 
            > 
              Login 
            </Link> 
            <Link  
              href="/register"  
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg 
hover:bg-blue-50 transition text-sm" 
            > 
              Register 
            </Link> 
          </div> 
        </div> 
      </header> 
 
      {/* Your existing portfolio sections with padding for header */} 
      <div className="pt-20"> 
        <Hero /> 
        <About /> 
        <Skills /> 
        <Projects /> 
        <Contact /> 
      </div> 
    </main> 
  ); 
}