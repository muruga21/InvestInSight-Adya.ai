import React from 'react'
import { useSelector } from 'react-redux';
import payment from '../../assets/payment.svg'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Payment = () => {

    const { stockName, stockCount, stockPrice, stockId, stockImg} = useSelector((state) => state.stockSlice);
    console.log({ stockName, stockCount, stockPrice, stockId, stockImg})
    const navigate = useNavigate();

    const handlePurchase = async () => {
        try{
            const token = document.cookie.split('=')[1]
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL+'/stock/buyStock',
            {
                stockId,
                stockName,
                stockQuantity: stockCount,
                imgUrl: stockImg
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token,
                }
            })
            if(response.data.error){
                console.log(response.data.message)
            }
            else{
                navigate('/')
            }
        }
        catch(err){
            console.log(err.message)
        }
    }

  return (
    <div className='flex sm:mx-4 m-2 min-h-[80vh] roboto-regular'>
        <div className='w-[50%] hidden md:block'>
            <img src={payment} alt='stock' className='w-full rounded-lg'/>
        </div>
        <div className='sm:w-[50%] w-full rounded-lg px-8 sm:px-14 p-8'>
            <div className='text-4xl mb-2'>
                Payment Details
            </div>
            <div className='mb-2'>
                complete your payment by providing the details below
            </div>
            <div className='my-8 flex flex-col gap-4'>
                <div>
                    <div className='text-2xl mb-2'>
                        Email Address
                    </div>
                    <input className=' outline-none border border-[#c0c0c0] p-2 w-full'/>
                </div>
                <div>
                    <div className='text-2xl mb-2'>
                        Card Details
                    </div>
                    <input className=' outline-none border border-[#c0c0c0] p-2 w-full'/>
                </div>
                <div>
                    <div className='text-2xl mb-2'>
                        Cardholder Name
                    </div>
                    <input className=' outline-none border border-[#c0c0c0] p-2 w-full'/>
                </div>
                <div>
                    <div className='text-2xl mb-2'>
                        Billing Address
                    </div>
                    <input className=' outline-none border border-[#c0c0c0] p-2 w-full'/>
                </div>
                <div className='w-full mt-4 border border-[#c0c0c0] flex flex-row gap-5 text-xl justify-around rounded-lg bg-[#eafcfc]'>
                    <div className='flex flex-col gap-5 p-5'>
                        <div>Stock name : <b>{stockName}</b></div>
                        <div>Stock Price : <b>{stockPrice}</b></div>
                    </div>
                    <div  className='flex flex-col gap-5 p-5'>
                        <div>Stock count : <b>{stockCount}</b></div>
                        <div>Total Price : <b>{stockCount*stockPrice}</b></div>
                    </div>
                </div>
            </div>
            <button className='py-3 w-full px-4 bg-primary hover:bg-opacity-80 text-xl text-[#f3f3f3] rounded-lg roboto-medium' onClick={()=>{handlePurchase()}}>Purchase</button>
        </div>
    </div>
  )
}

export default Payment