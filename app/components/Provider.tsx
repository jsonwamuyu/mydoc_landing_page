import React from 'react'

const Provider = () => {
  return (
    <section className='flex sm:space-x-12 space-y-4 sm:space-y-0 w-full px-[1rem] sm:px-[90px] items-center
     justify-center flex-col sm:flex-row py-[100px]'>
        <div className='flex w-full sm:w-1/2 sm:justify-start items-center sm:items-start'>
            <img src="/med.jpg" alt="tabs" className='w-full h-[477px] sm:w-[650px] object-contain rounded-2xl'/>
        </div>
        <div className='flex flex-col space-y-4 w-full sm:w-1/2 text-center sm:text-start items-center sm:items-start justify-start'>
            <h3 className='font-bold text-[36px] leading-[48px]'>Leading healthcare providers</h3>
            <div className='bg-gray-600 w-[70px] h-[2px]'/>
            <p className="sm:max-w-[450px] text-[18px] font-300">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and 
                online for everyone. To us, it’s not just work. We take pride in the solutions we deliver
            </p>
            <a href="" className='px-6 py-2 rounded-[55px] text-[#458FF6] border-[1.46px] bg-transparent
             hover:bg-[#458FF6] hover:text-white hover:scale-[1.02] transition-all duration-200
             font-bold leading-[30px] text-[18px] border-[#458FF6] flex justify-center items-center'>Learn More</a>
        </div>
    </section>
  )
}

export default Provider 