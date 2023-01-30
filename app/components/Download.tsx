import {HiArrowCircleDown} from 'react-icons/hi'

const Download = () => {
  return (
    <section className='flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8
    items-center sm:items-start justify-start px-[1rem] sm:px-[90px] md:px-[180px] lg:px-[240px]'>
        <div className='w-full sm:w-1/2 justify-start items-center sm:items-start flex flex-col space-y-4'>
            <h2  className='font-bold text-[36px] leading-[48px]'>Download our mobile apps</h2>
            <p className='font-300 text-[18px] sm:max-w-[450px]'>Our dedicated patient engagement app and web portal allow you to access information 
                instantaneously (no tedeous form, long calls, or administrative hassle) and securely
            </p>
            <a href=""
            className='flex flex-row space-x-4 items-center justify-center px-4 py-2 text-[#458FF6] border-[#458FF6]
            bg-transparent border-[1.46px] hover:bg-[#458FF6] hover:text-white hover:scale-[1.02] activer:scale-[0.95]
            transition-all duration-200 rounded-[55px] font-bold text-[18px] leading-[40px]'><h6>Download</h6> <HiArrowCircleDown /></a>
        </div>
        <div className='flex sm:w-1/2 sm:items-start items-center sm:justify-start w-full justify-start '>
            <img src="/foot.jpg" alt="medicine" className='object-contain rounded-2xl
            w-full sm:-w-655px sm:h-[435px]'/>
        </div>
    </section>
  )
}

export default Download