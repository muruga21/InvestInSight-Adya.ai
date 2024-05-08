import React, {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {Link,useNavigate} from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { SiWebmoney } from "react-icons/si";
import './components.css'

const Navbar = (props) => {
  const navigate = useNavigate()

   const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
        <header className='flex items-center justify-between border-b roboto-regular pb-2 border-[#C0C0C0] m-2 mx-4'>
            <div className='flex items-center gap-x-[0.6rem]'>
               <SiWebmoney className='text-2xl'/>
               <span className='text-2xl'>InvestInsight</span>
            </div>
             <div className='flex flex-row gap-x-2 justify-center items-center'>
                <div className='block relative'>
                    <div className={`
                    md:flex flex-col md:flex-row absolute w-[300px] sm:w-auto md:static gap-x-12 text-xl
                    top-8  ${(isMenuOpen)?'-left-[250px]':'hidden'} px-5 md:p-0 shadow-lg md:shadow-none md:overflow-hidden 
                    `}>
                        <Link to='/' className='nav-items'>
                            <div className='p-4 md:p-0 shadow-sm md:shadow-none'>Home</div>
                        </Link>
                        <Link to='/stocks' className='nav-items'>
                            <div className='p-4 md:p-0 shadow-sm md:shadow-none'>Stocks</div>
                        </Link>
                        <Link to='/profile' className='nav-items'>
                            <div className='p-4 md:p-0 shadow-sm md:shadow-none'>Profile</div>
                        </Link> 
                    </div>
                </div>
                <button onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                {
                    (isMenuOpen)?
                    <CloseIcon style={{ fontSize: 40 }}/>
                    :
                    <div className='block md:hidden'>
                        <DehazeIcon style={{ fontSize: 40 }}/>
                    </div>
                }
                </button>
             </div>
             <div className='hidden md:block'>
                <Link to='/profile' className='flex gap-5 pr-4 justify-center items-center'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2a4inioS7A9kKogLPOsEYLwekKcphbnzfcfC7BeKTAA&s' alt='profile' className='h-[40px]'/>
                    <div className='text-2xl roboto-regular'>{props.userName}</div>
                </Link>
             </div>
        </header> 
    </>
  )
}

export default Navbar