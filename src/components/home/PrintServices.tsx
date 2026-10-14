import React from 'react';

function PrintServices() {
  const printingServices = [
    {
      id: 1,
      title: "Premium Color Printing",
      description: "High-quality digital printing services for various materials and formats.",
    },
    {
      id: 2,
      title: "Photo Enlargements",
      description: "Professional offset printing for large-scale projects and marketing materials.",
    },
    {
      id: 3,
      title: "Canvas Printing",
      description: "High-quality digital printing services for various materials and formats.",
    },
    {
      id: 4,
      title: "Customised Photo Printing",
      description: "Professional offset printing for large-scale projects and marketing materials.",
    }
  ];

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column - Printing Services Cards */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className='flex'>
            <h1 className="text-3xl md:text-4xl font-bold text-[#FF0000] mb-6">Our Printing Services</h1>
            <img src="/home/design.png" alt="" className='block lg:hidden h-42' />
          </div>
          <div className='absolute'>
            <img src="/home/design.png" alt="" className='hidden lg:block relative z-10 -left-55 -bottom-43 h-42' />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[url('/home/print-bg.svg')] bg-center">
            {printingServices.map((service) => (
              <div 
                key={service.id} 
                data-printing-service-card
                data-service-id={service.id}
                className="bg-white rounded-xl p-6 flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-sm shadow-[#FF0000]/40"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Images Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center gap-4 bg-[url('/home/print-bg.svg')] bg-[length:100%_100%] bg-center bg-no-repeat p-4">
          {/* First Image */}
          <div className="w-1/2 relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/home/print1.webp" 
              alt="Printing service worker" 
              className="w-full h-80 md:h-96 object-cover rounded-2xl"
            />
          </div>

          {/* Second Image & Overlapping Badge Container */}
          <div className="w-1/2 relative flex flex-col items-center">
            <img 
              src="/home/print2.jpg" 
              alt="Printing machine" 
              className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl mb-[-40px] z-0"
            />
            
            {/* Experience Badge Overlay */}
            <div className="relative z-10 bg-[#001a0e] text-white p-5 rounded-xl shadow-2xl border-4 border-white w-11/12 max-w-[220px] text-center">
              <h3 className="text-3xl font-bold text-white mb-1">5+ <span className="text-sm font-normal block text-gray-300 inline">Years</span></h3>
              <p className="text-xs text-gray-300 leading-tight">
                Of experience in printing service
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PrintServices;