import React, { useState } from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

const Signup = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayLoading, setDisplayLoading] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(userName, password, confirmPassword);
    
    setDisplayLoading(true);
  }

  return (
    <div className='form-container'>
      <form className="form">
        <div className='title'>Sign Up</div>
        <div>
          <label>
            User Name
          </label>
        </div>  
          <TextField 
            id="outlined-basic" 
            variant="outlined" 
            onChange={(e)=>{setUserName(e.target.value)}}
          />
        <div>
          <label>
            Password 
          </label>
        </div>
          <TextField 
            id="outlined-basic" 
            variant="outlined"  
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        <div>
          <label>
            Confirm Password 
          </label>
        </div>
          <TextField 
            id="outlined-basic" 
            variant="outlined"  
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
          />
        <button className="button" onClick={(e)=>{handleSubmit(e)}} >
          {
            (!displayLoading)?'Signup':<CircularProgress style={{ height: 30, width: 30}}/>
          }
        </button>
        <Link className="text-center" to={'/login'}>
            have an account? <span className=" text-sm text-[#2d79f3] cursor-pointer">
          Login</span>
        </Link>
      </form>
    </div>
  )
}

export default Signup