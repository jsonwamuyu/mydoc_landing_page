import React from 'react'

const Provider = () => {
  return (
    <section>
        <div className='flex sm:w-1/2'>
            <img src="/tabs.jpg" alt="tabs" className='h-[300px] w-[320px] object-contain'/>
        </div>
        <div className='flex flex-col space-y-4'>
            <h3>Leading healthcare providers</h3>
            <div className='bg-gray-600 w-[70px] h-[2px]'/>
            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and 
                online for everyone. To us, it’s not just work. We take pride in the solutions we deliver
            </p>
            <a href="" className='px-4 py-2 rounded-[55px] text-[#458FF6] border-[1.46px] bg-transparent
            font-bold leading-[40px] text-[18px]'>Lean More</a>
        </div>
    </section>
  )
}

export default Provider