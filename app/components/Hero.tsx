export default function Hero() { 
    return ( 
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br 
  from-blue-50 to-indigo-100"> 
        <div className="text-center px-4"> 
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"> 
            Dorice George 
          </h1> 
          <p className="text-xl md:text-2xl text-gray-600 mb-8"> 
            Web Developer 
          </p> 
          <p className="text-lg text-gray-500 max-w-2xl mx-auto"> 
            I create beautiful and functional web experiences 
          </p> 
          <div className="mt-8"> 
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg mr-4 hover:bg
  blue-700 transition"> 
              View My Work 
            </button> 
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg 
  hover:bg-blue-50 transition"> 
              Contact Me 
            </button> 
          </div> 
        </div> 
      </section> 
    ); 
  } 