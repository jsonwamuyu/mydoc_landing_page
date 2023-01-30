import React from 'react'

const Hero = () => {
  return (
    <main className='flex flex-col sm:flex-row items-center px-[1rem] sm:px-[90px] lg:px-[240px] 
     justify-center sm:space-x-8 md:px-[180px]'>
      <div className='flex flex-col sm:w-1/2 space-y-8 items-center sm:items-start w-full text-center sm:text-start'>
        <h2 className='font-bold text-[48px] leading-[56px] text-black sm:max-w-[427px]'>Virtual healthcare for you</h2>
        <p className='text-[21px] leading-[32px] font-[300] text-[#7D7987] sm:max-w-[445px]'>Trafalgar provides progressive, and affordable 
          healthcare, accessible on mobile and online 
          for everyone
        </p>
        <a href="" className='bg-[#458FF6] rounded-[55px] leading-[40px] text-white font-bold text-[18px] py-2 px-4 text-center
        flex items-center justify-center hover:bg-transparent hover: border hover:border-[#458FF6] hover:scale-[1.02]
        transition-all duration-200 hover:text-[#458FF6]
        '>
          Consult today</a>
      </div>
      <div className="sm:w-1/2 flex">
        <img src="/med.jpg" alt="medicine" className='h-[598px] w-[693px] object-contain rounded-[1rem]'/>
      </div>
    </main>
  )
}

export default Hero