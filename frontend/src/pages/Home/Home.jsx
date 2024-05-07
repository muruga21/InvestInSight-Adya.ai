import React from 'react'
import home from '../../assets/home.jpg'

const Home = () => {
  return (
    <div className='flex mx-8 items-center'>
        <div className='md:w-[50%] h-[80vh] flex justify-center flex-col gap-10'>
            <div className='text-6xl roboto-medium'>
                The next-gen <span className='text-[#470ff4]'>Invest </span>
                wallet & <span className='text-[#470ff4]'>Trading </span> platform
            </div>
            <div className='text-xl'>
                Easily invest in stocks and crypto in one platform - All stocks in one place
            </div>
            <div>
                 <button className='bg-primary py-3 px-4 rounded-lg text-[#f3f3f3] roboto-regular text-xl hover:bg-opacity-80'>
                    Get Started
                 </button>
            </div>
        </div>
        <div className='hidden md:block w-[50%]'>
            <img src={home} alt="home"/>
        </div>
    </div>
  )
}

export default Home