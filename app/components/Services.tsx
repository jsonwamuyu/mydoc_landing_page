import React from 'react'
import {HiSearchCircle} from 'react-icons/hi'

const services = () => {
  return (
    <section className='w-full px-[1rem] sm:px-[90px] lg:px-[240px] flex flex-col
     md:px-[180px] items-center justify-start space-y-6 py-[120px]'>
      <h3 className='font-bold text-[36px] leading-[56px] text-center'>Our Services</h3>
      <div className='h-[2px] w-[56px] bg-black rounded-[5px]'/>
      <p className='text-center sm:max-w-[952px]'>We provide to you the best choiches for you. Adjust it to your health needs and make 
        sure your undergo treatment with our highly qualified doctors you can consult with us
         which type of service is suitable for your health
      </p>
      <div className='flex flex-col space-y-4 items-center sm:flex-row sm:space-y-0 justify-start sm:space-x-4'>
        <article className='bg-white shadow-sm h-[354px] w-[350px] flex flex-col space-y-4 px-[39px] rounded-[20px] py-[60px] 
         hover:border-[#458FF6] hover:border-2'>
          <HiSearchCircle className='text-[#458ff6] h-20 w-20 pb-5'/>
          <h5 className='font-bold text-[24px] leading-[56px]'>Search doctor</h5>
          <p className='text-[16px] leading-[28px] font-[300]'>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
         </article>
         <article className='bg-white shadow-sm h-[354px] w-[350px] flex flex-col space-y-4 p-5
         hover:border-[#458FF6]'>
          <HiSearchCircle className='text-[#458ff6] h-20 w-20 pb-5'/>
          <h5 className='font-bold text-[24px] leading-[56px]'>Online pharmacy</h5>
          <p className='text-[16px] leading-[28px] font-[300]'>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
         </article>
         <article className='bg-white shadow-sm h-[354px] w-[350px] flex flex-col space-y-4 p-5
         hover:border-[#458FF6]'>
          <HiSearchCircle className='text-[#458ff6] h-20 w-20 pb-5'/>
          <h5 className='font-bold text-[24px] leading-[56px]'>Consultation</h5>
          <p className='text-[16px] leading-[28px] font-[300]'>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
         </article>
      </div>
    </section>
  )
}

export default services