import React, { useState } from 'react'
import { LineChart } from '@mui/x-charts';


const StockPopup = (props) => {

    const [stockQuantity, setStockQuantity] = useState(0);

    const Increment = () => {
        setStockQuantity(stockQuantity + 1);
    }

    const Decrement = () => {
        if(stockQuantity > 0){
            setStockQuantity(stockQuantity - 1);
        }
    }

    const {stockDetails} = props;
    console.log(stockDetails)

    const uData = stockDetails.lastWeekData;
    const xLabels = [
    'Day 1',
    'Day 2',
    'Day 3',
    'Day 4',
    'Day 5',
    ];
    
  return (
    <div className='sm:mx-4 m-2'>
        <div className='flex justify-between'>
            <div className='flex gap-5'>
                <div>
                    <img src={stockDetails.imgUrl} alt='stock' className='w-12 h-12 rounded-lg'/>
                </div>
                <div className='text-4xl roboto-regular'>{stockDetails.stockName}</div>
            </div>
            <div className='roboto-regular'>
                <div className='text-xl'>Stock Id</div>
                <text>{stockDetails.stockId}</text>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <LineChart
                width={400}
                height={300}
                series={[{ data: uData, area: true, showMark: false }]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
        </div>
        <div className='mx-4 flex justify-between'>
            <div className='flex flex-col justify-around text-xl roboto-regular'>
                <div>Price : ${stockDetails.stockPrice}</div>
                <div>Hike Rate : {stockDetails.hikeRate}%</div>
            </div>
            <div>
                <div className='flex flex-col items-center gap-2'>
                    <div className='text-lg roboto-regular'>Stock Quantity</div>
                    <div className='flex gap-5 bg-[#f3f3f3] border border-[#c0c0c0] p-2'>
                        <button className='border-r px-2 border-[#c0c0c0]'
                            onClick={()=>Decrement()}
                        >-</button>
                        <div>
                            {stockQuantity}
                        </div>
                        <button className='border-l px-2 border-[#c0c0c0]' 
                            onClick={()=>Increment()}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full mt-4 flex justify-center'>
            <button className='py-3 px-8 bg-primary hover:bg-opacity-80 text-[#f3f3f3] rounded-lg roboto-medium text-xl'>
                Buy
            </button>
        </div>
    </div>
  )
}

export default StockPopup