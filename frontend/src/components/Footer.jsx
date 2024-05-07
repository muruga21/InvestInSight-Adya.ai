import React from 'react'
import { SiWebmoney } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className="bg-[#eafcfc] w-full p-[2rem]">
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-[0.6rem]'>
               <SiWebmoney className='text-2xl'/>
               <span className='text-2xl'>InvestInsight</span>
            </div>
            <div className='flex text-[18px] gap-x-[3rem]'>
               <Link to='/' className='nav-items'>Home</Link>
               <Link to='/' className='nav-items'>About</Link>
               <Link to='/' className='nav-items'>Contact us</Link>
            </div>
          </div>
          <div className='flex justify-between pt-[1rem]'>
             <div className='text-gray-400'>
                <span className='text-[13px]'>@2024 Developed By Muruga Perumal R</span>
             </div>
          </div>
        </footer>
    </>
  )
}

export default Footer