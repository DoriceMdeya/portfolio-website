export default function Contact() { 
    return ( 
      <section id="contact" className="py-20 bg-gray-50"> 
        <div className="container mx-auto px-4 max-w-4xl"> 
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"> 
            Get In Touch 
          </h2> 
          <div className="bg-white rounded-lg shadow-sm p-8"> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
              <div> 
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact 
  Information</h3> 
                <div className="space-y-3"> 
                  <p className="flex items-center text-gray-600"> 
                    <span className="font-medium mr-2">Email:</span> 
                    doricegeorge2002@gmail.com 
                  </p> 
                  <p className="flex items-center text-gray-600"> 
                    <span className="font-medium mr-2">Phone:</span> 
                    +255712442916 
                  </p> 
                  <p className="flex items-center text-gray-600"> 
                    <span className="font-medium mr-2">Location:</span> 
                    Iringa, Tanzania 
                  </p> 
                </div> 
              </div> 
              <div> 
                <form className="space-y-4"> 
                  <div> 
                    <input  
                      type="text"  
                      placeholder="Your Name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg 
  focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    /> 
                  </div> 
                  <div> 
                    <input  
                      type="email"  
                      placeholder="Your Email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg 
  focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    /> 
                  </div> 
                  <div> 
                    <textarea  
                      placeholder="Your Message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg 
  focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    ></textarea> 
                  </div> 
                  <button  
                    type="submit" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 
  transition w-full" 
                  > 
                    Send Message 
                  </button> 
                </form> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 
    ); 
  }