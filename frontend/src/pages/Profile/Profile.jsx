import React ,{useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const [stocks, setStocks] = useState([]);
    const [isSell, setIsSell] = useState(false);
    const [stockId, setStockId] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

  const getUser = async() => {
    try{
      const token = getCookieValue('token');
      const response = await axios.get(process.env.REACT_APP_BACKEND_URL+'/user/getUser', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token,
        }
      });
      if(response.data.error){
        console.log(response.data.message)
      }
      else{
        setUserName(response.data.message.username)
      }
    }
    catch(err){
      console.log(err.message)
    }
  }

  const logout = () =>{
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    navigate('/login');
  }

  useEffect(()=>{
    getUser();
  },[])
  function getCookieValue(name) {
    // Split document.cookie string into individual cookies
    const cookies = document.cookie.split(';');
    
    // Iterate over each cookie
    for (let cookie of cookies) {
        // Trim any leading whitespace
        cookie = cookie.trim();
        
        // Check if the cookie starts with the name we're looking for
        if (cookie.startsWith(name + '=')) {
            // Return the value part after the '='
            return cookie.substring(name.length + 1);
        }
    }
    
    // Return null if the cookie was not found
    return null;
}
    
    const fetchStocks = async () => {
        try{
            const token = getCookieValue('token');
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL+'/stock/getUserStocks', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token,
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

    const sellStock = async () => {
        try{
            const token = getCookieValue('token');
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL+'/stock/sellStocks', {
                stockId: stockId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token,
                }
            });
            if(response.data.error){
                console.log(response.data.message)
            }
            else{
                fetchStocks();
                setIsSell(false);
            }
        }
        catch(err){
            console.log(err.message)
        }
    }


    const handleSell = (stockId) => {
        setIsSell(true);
        setStockId(stockId)
    }

    useEffect(()=>{
        fetchStocks();
    },[])

  return (
    <div className='m-4 flex items-center flex-col min-h-[80vh]'>
        <div className='md:w-[80%] w-full flex justify-between items-center border border-[#c0c0c0] p-8 rounded-lg bg-[#eafcfc]'>
            <div className='flex items-center gap-10'>
                <img 
                    src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg'
                    alt='profile'
                    className='sm:w-[150px] w-[100px] rounded-full'
                />
                <div className='sm:text-6xl text-3xl roboto-regular'>
                    {userName}
                </div>
            </div>
            <button className='bg-[#FF0000] py-2 px-4 rounded-lg text-[#f3f3f3] hover:bg-opacity-80 flex gap-3 items-center roboto-regular text-xl' onClick={()=>logout()}>logout</button>
        </div>
        <div className='md:w-[80%] w-full'>
            <div className="grid grid-cols-5 gap-2 border-b border-[#c0c0c0] w-full text-xl items-center">
                <div></div>
                <div className="text-center py-4">Stock Name</div>
                <div className="text-center py-4 hidden sm:block">Stock Id</div>
                <div className="text-center py-4">Stock Quantity</div>
            </div>
            {
                stocks.map((stock, index)=>{
                    return(
                        <div className="grid grid-cols-5 gap-2 border-b border-[#c0c0c0] w-full text-xl items-center hover:bg-[#f4f5f6]">
                            <div className='flex items-center justify-center'>
                                <img 
                                    src={stock.imgUrl} 
                                    alt='stocklogo' 
                                    className="text-center py-4 h-[80px]"
                                />
                            </div>
                            <div className="text-center py-4">{stock.stockName}</div>
                            <div className="text-center py-4 hidden sm:block">{stock.stockId}</div>
                            <div className="text-center py-4">{stock.stockQuantity}</div>
                            <div>
                                <button 
                                    className=' bg-[#FF0000] py-2 px-4 rounded-lg text-[#f3f3f3] hover:bg-opacity-80 flex gap-3 items-center roboto-regular'
                                    onClick={()=>{handleSell(stock.stockId)}}
                                >
                                    <div>Sell</div>
                                </button>
                            </div>
                            { (isSell) && <div>
                                <div>
                                    <div className='fixed top-0 left-0 w-full h-full  ease-in-out duration-500 bg-[#000000] bg-opacity-50 flex items-center justify-center'>
                                        <div className='bg-[#eafcfc] p-8 rounded-lg'>
                                            <div className='text-2xl roboto-regular'>Are you sure you want to sell this stock?</div>
                                            <div className='flex gap-4 py-3 justify-around mt-4'>
                                                <button 
                                                    className='bg-[#FF0000] py-2 w-[100px] rounded-lg text-[#f3f3f3] hover:bg-opacity-80 flex justify-center gap-3 items-center roboto-regular'
                                                    onClick={()=>{sellStock()}}
                                                >
                                                    <div>Yes</div>
                                                </button>
                                                <button 
                                                    className='bg-[#FF0000] py-2 w-[100px] rounded-lg text-[#f3f3f3] hover:bg-opacity-80 flex gap-3 items-center roboto-regular justify-center'
                                                    onClick={()=>{setIsSell(false)}}
                                                >
                                                    <div>No</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    )
                })
            }
            {
                (stocks.length === 0) && (
                    <div>
                        <div className='text-4xl roboto-regular text-center h-[200px] flex items-center justify-center text-[#33333361]'>
                            <div>No stocks bought yet</div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>  
  )
}

export default Profile