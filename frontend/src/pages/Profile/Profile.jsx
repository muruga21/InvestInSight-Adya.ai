import React ,{useState} from 'react'
import axios from 'axios';

const Profile = () => {

    const [stocks, setStocks] = useState([]);
    
    const fetchStocks = async () => {
        try{
            const token = document.cookie.split('=')[1];
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL+'/stock/getStocks', {
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

  return (
    <div className='m-4 flex items-center flex-col'>
        <div className='md:w-[80%] w-full border border-[#c0c0c0] p-8 rounded-lg bg-[#eafcfc]'>
            <div className='flex items-center gap-10'>
                <img 
                    src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg'
                    alt='profile'
                    className='sm:w-[150px] w-[100px] rounded-full'
                />
                <div className='sm:text-6xl text-3xl roboto-regular'>
                    Name
                </div>
            </div>
        </div>
        <div className='md:w-[80%] w-full'>
            <div className="stock-row">
                <div></div>
                <div className="text-center py-4">Stock Name</div>
                <div className="text-center py-4 hidden sm:block">Stock Id</div>
                <div className="text-center py-4">Stock Price</div>
                <div className="text-center py-4">Hike Rate</div>
            </div>
            {
                stocks.map((stock, index)=>{
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
                                <button 
                                    className='buy-button roboto-regular'
                                    onClick={()=>{}}
                                >
                                    <div>Sell</div>
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

export default Profile