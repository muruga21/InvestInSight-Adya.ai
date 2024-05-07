import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Topfive = () => {

    const [topFiveStocks, setTopFiveStocks] = useState([]);

    const fetchTopFiveStocks = async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + '/stock/getTopStocks', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authToken')
                }
            });
            if(response.status === 200){
                setTopFiveStocks(response.data.message)
            }
        }
        catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchTopFiveStocks();
    }, []);



  return (
    <div className='sm:mx-8 mx-4 flex flex-col gap-10 py-10'>
        <div className='text-4xl roboto-bold'>
            Top 5 Stocks avaliable
        </div>
        <div className='flex flex-wrap gap-6 justify-around'>
            {
                topFiveStocks.map((stock, index)=>{
                    return(
                        <div className='flex border-[#c0c0c0] border w-[330px] md:w-[270px] h-[100px] rounded-lg'>
                            <div className='w-[30%] flex justify-center items-center'>
                                <img src={stock.imgUrl} alt='stock' className='w-[70%]' />
                            </div>
                            <div className='w-[70%] p-2 flex flex-col justify-center'>
                                <div className='text-3xl'>{stock.stockName}</div>
                                <div className='flex'>
                                    <div className='w-[50%]'>${stock.stockPrice}</div>
                                    <div className='w-[50%]'>{stock.hikeRate}%</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
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