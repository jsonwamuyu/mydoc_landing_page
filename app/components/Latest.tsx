import React from 'react'
import {HiArrowCircleRight} from 'react-icons/hi'

const Latest = () => {
  return (
<section className='flex flex-col items-center justify-start space-y-8 px-[1rem] sm:px-[90px] w-full py-[50px]'>
    <h2 className='font-bold text-[36px] leading-[40px] text-center '>Check out our latest article</h2>
    <div className='bg-gray-600 w-[70px] h-[2px]'/>
    <div className='flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0 items-center'>
        <article className='flex flex-col rounded-2xl shadow-sm sm:items-start items-center justify-start pb-4 space-y-4 bg-white w-[300px] h-auto'>
            <div className="flex items-center justify-start">
                <img src="/survery.jpg" alt="lab" className='object-cover rounded-t-2xl rounded-b-none w-full h-[220px]' />
            </div>
            <h4 className='font-bold tetx-[21px] leading-[32px] sm:max-w-[250px] px-4'>Disease detection, check up in the laboratory</h4>
            <p className='font-300 text-[1rem] leading-[28px] sm:max-w-[270px] px-4'>
                In this case, the role of the health laboratory is very important to do a disease detection...
            </p>
            <a href="" className='text-[#458FF8] underline flex items-center justify-center font-semibold
            text-[17px] leading-[2-8px] space-x-3 pl-4'>
                <h6>Read More</h6>
                <HiArrowCircleRight />
            </a>
        </article>
        <article className='flex flex-col rounded-2xl shadow-sm sm:items-start items-center justify-start pb-4 space-y-4 bg-white w-[300px] h-auto'>
            <div className="flex items-center justify-start">
                <img src="/tabs.jpg" alt="lab" className='object-cover rounded-t-2xl rounded-b-none w-full h-[220px]' />
            </div>
            <h4 className='font-bold tetx-[21px] leading-[32px] sm:max-w-[250px] px-4'>
                Herbal medicines that are 
safe for consumption</h4>
            <p className='font-300 text-[1rem] leading-[28px] sm:max-w-[270px] px-4'>
                Herbal medicine is very widely used at this time because of its very good for your health...
            </p>
            <a href="" className='text-[#458FF8] underline flex items-center justify-center font-semibold
            text-[17px] leading-[2-8px] space-x-3 pl-4'>
                <h6>Read More</h6>
                <HiArrowCircleRight />
            </a>
        </article>

        <article className='flex flex-col rounded-2xl shadow-sm sm:items-start items-center justify-start pb-4 space-y-4 bg-white w-[300px] h-auto'>
            <div className="flex items-center justify-start">
                <img src="/foot.jpg" alt="lab" className='object-cover rounded-t-2xl rounded-b-none w-full h-[220px]' />
            </div>
            <h4 className='font-bold tetx-[21px] leading-[32px] sm:max-w-[250px] px-4'>
                Natural care for healthy facial skin</h4>
            <p className='font-300 text-[1rem] leading-[28px] sm:max-w-[270px] px-4'>
                A healthy lifestyle should start from now and also for your skin health.There are some...
            </p>
            <a href="" className='text-[#458FF8] underline flex items-center justify-center font-semibold
            text-[17px] leading-[2-8px] space-x-3 pl-4'>
                <h6>Read More</h6>
                <HiArrowCircleRight />
            </a>
        </article>
        
    </div>
    <a href=""
    className='flex flex-row space-x-4 items-center justify-center px-6 py-2 text-[#458FF6] border-[#458FF6]
            bg-transparent border-[1.46px] hover:bg-[#458FF6] hover:text-white hover:scale-[1.02] activer:scale-[0.95]
            transition-all duration-200 rounded-[55px] font-bold text-[18px] leading-[40px]'>
    View All</a>
    
</section>
  )
}

export default Latest;