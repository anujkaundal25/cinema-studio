import React from 'react';

function ShowCase() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start justify-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Shop & Save More
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor sit amet.
            </p>
          </div>
          
          <div className="flex items-center gap-6 w-full">
            <button className="border border-gray-900 text-gray-900 font-semibold px-8 py-3 tracking-widest text-xs uppercase hover:bg-gray-900 hover:text-white transition-colors duration-200">
              READ MORE
            </button>
            <div className="w-40 h-48 md:w-56 md:h-64 flex items-center justify-center">
              <img 
                src="/home/show1.png" 
                alt="Camera on tripod" 
                className="max-h-full max-w-full object-contain drop-shadow-md" 
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start justify-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Shop Now!
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing.
            </p>
          </div>

          <div className="flex items-center gap-6 w-full">
            <button className="border border-gray-900 text-gray-900 font-semibold px-8 py-3 tracking-widest text-xs uppercase hover:bg-gray-900 hover:text-white transition-colors duration-200">
              READ MORE
            </button>
            <div className="w-40 h-48 md:w-56 md:h-64 flex items-center justify-center">
              <img 
                src="/home/show2.png" 
                alt="Professional DSLR camera" 
                className="max-h-full max-w-full object-contain drop-shadow-md" 
              />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default ShowCase;