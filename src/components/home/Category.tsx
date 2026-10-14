import React from 'react'

function Category() {
  return (
    <div className='bg-white'>
        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-20'>
            {/* Added overflow-hidden here */}
            <div className='bg-[#efeeeb] relative h-80 w-[70%] overflow-hidden'>
                <h1 className='p-6 font-semibold text-lg'>Cameras</h1>
                <div className='bg-[#FF0000] h-50 w-50 rounded-full absolute -bottom-9 -left-9'></div>
                <img
  src="/camera-icons/3.png"
  alt="Camera"
  className="absolute z-10 w-40 h-40 object-contain bottom-4 right-4"
/>
            </div>
            <div className='bg-[#efeeeb] h-80 w-[70%] overflow-hidden'></div>
            <div className='bg-[#efeeeb] h-80 w-[70%] overflow-hidden'></div>
        </section>
    </div>
  )
}

export default Category