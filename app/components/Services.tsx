import React from 'react'
import {HiSearchCircle, HiDocument, HiUserGroup} from 'react-icons/hi'

const Card = ({title, desc, icon}:{title:string, desc:string, icon?:string})=>{
  return(
      <article className='bg-white shadow-md h-full w-full sm:h-[304px] sm:w-[300px] flex flex-col space-y-4 px-[15px] 
      rounded-[20px] py-[40px] mb-2 sm:mr-[7rem] space-x-2
         hover:border-[#458FF6] hover:border-2 hover:scale-[1.02] transition-all duration-200'>
        <div className='text-[#458ff6] h-20 w-20 pb-5 object-cover'>{icon}</div>
        <h5 className='font-bold text-[24px] leading-[56px]'>{title}</h5>
        <p className='text-[16px] leading-[28px] font-[300]'>{desc}</p>
      </article>
  );
}

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
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-start'>
        <Card icon={<HiSearchCircle className=' h-[6rem] w-[6rem]'/>}
          title="Search Doctor"
          desc="Choose your doctor from thousands of specialist, general, and trusted hospitals"
        />
        <Card icon={<HiDocument className='h-[6rem] w-[6rem]'/>}
          title="Online pharmacy"
          desc="Buy  your medicines with our mobile application with a simple delivery system"
        />
        <Card icon={<HiSearchCircle/>}
          title="Details info"
          desc="Free consultation with our trusted doctors and get the best recomendations"
        />
        <Card icon={<HiUserGroup className='h-[6rem] w-[rem]'/>}
          title="Cunsultation"
          desc="Free consultation with our trusted doctors and get the best recomendations"
        />
        <Card icon={<HiSearchCircle/>}
          title="Emergency Care"
          desc="You can get 24/7 urgent care for yourself or your children and your
            lovely family"
        />
        <Card icon={<HiSearchCircle/>}
          title="Tracking"
          desc="Track and save your medical history and health data "
        />
      </div>
      <a href="" className='px-4 py-2 text-[#458FF6] rounded-[55px] font-bold hover:bg-[#458FF6] hover:text-white hover:scale-[1.02] transition-all 
       border-[1.4px] border-[#458FF6] bg-transparent text-bold text-[18px] leading-[40px] text-center duration-200'>Learn More</a>
    </section>
  )
}

export default services