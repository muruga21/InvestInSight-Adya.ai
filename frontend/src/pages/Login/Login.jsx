import React, { useState } from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [displayLoading, setDisplayLoading] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(userName, password);
    setDisplayLoading(true);
  }

  return (
    <div className='form-container'>
      <form className="form">
        <div className='title'>Login</div>
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
        <button className="button" onClick={(e)=>{handleSubmit(e)}} >
          {
            (!displayLoading)?'Login':<CircularProgress style={{ height: 30, width: 30}}/>
          }
        </button>
        <Link className="text-center" to={'/signup'}>
          Don`t have an account? <span className=" text-sm text-[#2d79f3] cursor-pointer">
          Sign Up</span>
        </Link>
      </form>
    </div>
  )
}

export default Login