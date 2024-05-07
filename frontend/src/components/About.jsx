import React from 'react'
import about from '../assets/about.svg'

const About = () => {
  return (
    <div className='m-8'>
      <div className='flex'>
        <div className='w-[50%] hidden justify-center items-center sm:flex '>
          <img src={about} alt='about' className='h-[500px]'/>
        </div>
        <div className='w-full sm:w-[50%] flex flex-col gap-10 justify-center'>
          <div className='text-4xl roboto-bold'>About Us</div>
          <div className='text-lg roboto-regular'>
            <p>we understand the importance of smart investment decisions in achieving your financial goals. Whether you're a seasoned investor or just starting out, our platform provides the tools and resources you need to make informed investment choices and build a secure financial future</p><br/>
            <p>Ready to take control of your financial future? Sign up for a free account today and start investing with confidence. With InvestInSight, you're one step closer to achieving your financial goals.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About