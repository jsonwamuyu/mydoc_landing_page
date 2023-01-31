import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col sm:flex-row sm:justify-between space-y-8 sm:space-y-0 text-white items-center sm:items-start justify-start
     sm:space-x-8 px-[1rem] sm:px-[90px] py-[50px]'>
      <div className='flex flex-col space-y-4 items-start justify-start'>
        <div className='flex space-x-2 items-start justify-start'>
          <div className='h-[36px] w-[36px] bg-white rounded-full flex items-center justify-center p-2'>
            <h2 className='p-1 text-[#459FF6] text-[28px] font-bold'>D</h2>
          </div>
          <h2 className='font-bold text-[24px] leading-[30px]'>Doctor</h2>
        </div>
        <p className='text-[18px] leading-[28px] font-300 sm:max-w-sm text-white'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
            for everyone
        </p>
        <p className='text-[18px] leading-[28px] font-300 pt-[12px] text-white'>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <div className='flex flex-col space-y-4'>
        <h3 className='font-bold text-[20px] leading-[60px] pb-2'>Company</h3>
        <ul className='flex flex-col space-y-2 '>
          <li><a href="" className="text-white">About</a></li>
          <li><a href="" className="text-white">Testimonials</a></li>
          <li><a href="" className="text-white">Find a doctor</a></li>
          <li><a href="" className="text-white">Apps</a></li>
        </ul>
      </div>

      <div className='flex flex-col space-y-4'>
        <h3 className='font-bold text-[20px] leading-[60px] pb-2'>Region</h3>
        <ul className='flex flex-col space-y-2 '>
          <li><a href="" className="text-white">Indonesia</a></li>
          <li><a href="" className="text-white">Singapore</a></li>
          <li><a href="" className="text-white">Hongkong</a></li>
          <li><a href="" className="text-white">Canada</a></li>
        </ul>
      </div>

      <div className='flex flex-col space-y-4'>
        <h3 className='font-bold text-[20px] leading-[60px] pb-2'>Help</h3>
        <ul className='flex flex-col space-y-2 '>
          <li><a href="" className="text-white">Help center</a></li>
          <li><a href="" className="text-white">Contact support</a></li>
          <li><a href="" className="text-white">Instructions</a></li>
          <li><a href="" className="text-white">How it works</a></li>
        </ul>
      </div>
    
     </footer>
  )
}

export default Footer