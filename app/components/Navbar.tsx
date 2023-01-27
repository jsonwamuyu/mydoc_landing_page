import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-[192px] py-[70px]">
        <h4 className='text-[#233348] font-bold text-[24px] leading-[30px]'>myDoc</h4>
        <ul className='flex flex-row justify-between items-center space-x-4'>
            <li><a href="" className='text-[#1F1534] font-bold text-[18px] leading-[23px]'>Home</a></li>
            <li><a href="">Find a doctor</a></li>
            <li><a href="">Apps</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">About Us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar