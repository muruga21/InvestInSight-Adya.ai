import React, { useState } from 'react'
import { LineChart } from '@mui/x-charts';
import { useDispatch } from 'react-redux';
import { setStock } from '../redux/stockSlice';
import { useNavigate } from 'react-router-dom';
import './components.css'

const StockPopup = (props) => {

    const [stockQuantity, setStockQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Increment = () => {
        setStockQuantity(stockQuantity + 1);
    }

    const Decrement = () => {
        if(stockQuantity > 1){
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

    const hanleBuy = () => {
        dispatch(setStock({
            stockId: stockDetails.stockId,
            stockCount: stockQuantity,
            stockPrice: stockDetails.stockPrice,
            stockName: stockDetails.stockName,
            stockImg: stockDetails.imgUrl,
            lastWeekData: stockDetails.lastWeekData
        }))
        navigate('/payment')
    }
    
  return (
    <div className='sm:mx-4 m-2'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-5 justify-center items-center'>
                <img src={stockDetails.imgUrl} alt='stock' className=' w-14 h-14 rounded-lg'/>
                <div>
                    <div className='text-4xl roboto-regular'>
                        {stockDetails.stockName}
                    </div>
                    <div>
                        Stock id :  {stockDetails.stockId}
                    </div>
                </div>
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
            <div className='flex flex-col justify-around text-lg roboto-regular'>
                <div>Price : <b>${stockDetails.stockPrice}</b></div>
                <div>Hike Rate : <b>{stockDetails.hikeRate}%</b></div>
            </div>
            <div>
                <div className='flex flex-col items-center gap-2'>
                    <div className='text-lg roboto-regular'>Stock Quantity</div>
                    <div className='flex gap-5 bg-[#f3f3f3] border border-[#c0c0c0] p-2'>
                        <button className='border-r px-2 border-[#c0c0c0]'
                            onClick={()=>Decrement()}
                        >-</button>
                        <b>
                            {stockQuantity}
                        </b>
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
            <button 
                className='button-imp w-full text-2xl roboto-medium'
                onClick={()=>hanleBuy()}
            >
                Buy
            </button>
        </div>
    </div>
  )
}

export default StockPopup