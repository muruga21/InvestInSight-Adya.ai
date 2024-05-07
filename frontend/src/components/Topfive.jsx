import React from 'react'

const Topfive = () => {
  return (
    <div className='mx-8 flex flex-col gap-10 py-10'>
        <div className='text-4xl roboto-bold'>
            Top 5 Stocks avaliable
        </div>
        <div className='flex flex-wrap gap-6 justify-around'>
            <div className='flex border-[#c0c0c0] border w-[330px] md:w-[270px] h-[100px] rounded-lg'>
                <div className='w-[30%] flex justify-center items-center'>
                    img
                </div>
                <div className='w-[70%] p-2 flex flex-col justify-center'>
                    <div className='text-3xl'>Stock-Name</div>
                    <div className='flex'>
                        <div className='w-[50%]'>$12345</div>
                        <div className='w-[50%]'>20%</div>
                    </div>
                </div>
            </div>
            <div className='flex border-[#c0c0c0] border w-[330px] md:w-[270px] h-[100px] rounded-lg'>
                <div className='w-[30%] flex justify-center items-center'>
                    img
                </div>
                <div className='w-[70%] p-2 flex flex-col justify-center'>
                    <div className='text-3xl'>Stock-Name</div>
                    <div className='flex'>
                        <div className='w-[50%]'>$12345</div>
                        <div className='w-[50%]'>20%</div>
                    </div>
                </div>
            </div>
            <div className='flex border-[#c0c0c0] border w-[330px] md:w-[270px] h-[100px] rounded-lg'>
                <div className='w-[30%] flex justify-center items-center'>
                    img
                </div>
                <div className='w-[70%] p-2 flex flex-col justify-center'>
                    <div className='text-3xl'>Stock-Name</div>
                    <div className='flex'>
                        <div className='w-[50%]'>$12345</div>
                        <div className='w-[50%]'>20%</div>
                    </div>
                </div>
            </div>
            <div className='flex border-[#c0c0c0] border w-[330px] md:w-[270px] h-[100px] rounded-lg'>
                <div className='w-[30%] flex justify-center items-center'>
                    img
                </div>
                <div className='w-[70%] p-2 flex flex-col justify-center'>
                    <div className='text-3xl'>Stock-Name</div>
                    <div className='flex'>
                        <div className='w-[50%]'>$12345</div>
                        <div className='w-[50%]'>20%</div>
                    </div>
                </div>
            </div>
            <div className='flex border-[#c0c0c0] border w-[330px] md:w-[270px] h-[100px] rounded-lg'>
                <div className='w-[30%] flex justify-center items-center'>
                    img
                </div>
                <div className='w-[70%] p-2 flex flex-col justify-center'>
                    <div className='text-3xl'>Stock-Name</div>
                    <div className='flex'>
                        <div className='w-[50%]'>$12345</div>
                        <div className='w-[50%]'>20%</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row-reverse'>
            <button className='bg-primary py-3 px-4 rounded-lg text-[#f3f3f3] roboto-regular text-xl hover:bg-opacity-80'>
                View More
            </button>
        </div>
    </div>
  )
}

export default Topfive