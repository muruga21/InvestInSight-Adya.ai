import React, {useState} from 'react'
// import { FaFile } from "react-icons/fa";
import CloseIcon from '@mui/icons-material/Close';
import {Link,useNavigate} from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';
import './components.css'


const Navbar = () => {
  const navigate = useNavigate()

   const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
        <header className='flex items-center justify-between border-b-2 pb-2 border-[#C0C0C0] m-2 mx-4'>
             <span className='text-5xl'>J<span className='text-4xl absolute'>F</span></span>
             <div className='flex flex-row gap-x-2 justify-center items-center'>
                <div className='block relative'>
                    <div className={`
                    md:flex flex-col md:flex-row absolute w-[300px] sm:w-auto md:static gap-x-12 text-xl
                    top-8  ${(isMenuOpen)?'-left-[250px]':'hidden'} px-5 md:p-0 shadow-lg md:shadow-none md:overflow-hidden 
                    `}>
                        <Link to='/home' className='nav-items'>
                            <div className='p-4 md:p-0 shadow-sm md:shadow-none'>Home</div>
                        </Link>
                        <Link to='/journals' className='nav-items'>
                            <div className='p-4 md:p-0 shadow-sm md:shadow-none'>Journals</div>
                        </Link>
                        <Link to='/contactus' className='nav-items'>
                            <div className='p-4 md:p-0 shadow-sm md:shadow-none'>Contact us</div>
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
                <Link to='/profile'>
                    <div className='py-3 px-4 bg-primary hover:bg-opacity-80 text-[#f3f3f3] rounded-lg roboto-regular'>Profile</div>
                </Link>
             </div>
        </header> 
    </>
  )
}

export default Navbar