import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './BrowseStocks.css'

const BrowseStocks = () => {
    const [stocks, setStocks] = useState([]);
    const [filteredStocks, setFilteredStocks] = useState([stocks]);
    const [search, setSearch] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [stockId, setStockId] = useState('');

    const fetchStocks = async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL+'/stock/getStocks', {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if(response.data.error){
                console.log(response.data.message)
            }
            else{
                setStocks(response.data.message)
            }
        }
        catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        fetchStocks();
    },[])

    useEffect(()=>{
        setFilteredStocks(
            stocks.filter((stock)=>{
                return stock.stockName.toLowerCase().includes(search.toLowerCase())
            })
        )
    }
    ,[search, stocks])

  return (
    <div className='sm:m-8 m-4 flex flex-col items-center'>
        <div className='flex flex-col gap-5'>
            <div className='text-4xl text-center roboto-regular'>Find the most suitable stock for you to buy now</div>
            <div className='flex justify-center gap-5'>
                <TextField 
                    id="outlined-search" 
                    label="Search field" 
                    type="search" 
                    style={{ width: '300px' }} 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button className='bg-primary py-3 px-4 rounded-lg text-[#f3f3f3] roboto-regular text-xl hover:bg-opacity-80'>search</button>
            </div>
        </div>
        <div className='stock-container'>
            <div className="stock-row">
                <div></div>
                <div className="text-center py-4">Stock Name</div>
                <div className="text-center py-4 hidden sm:block">Stock Id</div>
                <div className="text-center py-4">Stock Price</div>
                <div className="text-center py-4">Hike Rate</div>
            </div>
            {
                filteredStocks.map((stock, index)=>{
                    return(
                        <div className="stock-row">
                            <div className='flex items-center justify-center'>
                                <img 
                                    src={stock.imgUrl} 
                                    alt='stocklogo' 
                                    className="text-center py-4 h-[80px]"
                                />
                            </div>
                            <div className="text-center py-4">{stock.stockName}</div>
                            <div className="text-center py-4 hidden sm:block">{stock.stockId}</div>
                            <div className="text-center py-4">{stock.stockPrice}</div>
                            <div className="text-center py-4">{stock.hikeRate}</div>
                            <div>
                                <button className='buy-button roboto-regular'>
                                    <div>View</div>
                                    <div><ArrowForwardIosIcon/></div>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BrowseStocks