import React, { useState } from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [displayLoading, setDisplayLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setDisplayLoading(true);
    console.log(username, password);
    console.log(process.env.REACT_APP_BACKEND_URL)
    try{
      const response = await axios.post(process.env.REACT_APP_BACKEND_URL+'/user/login', 
      {
        username, password
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if(response.status === 200){
        document.cookie = `token=${response.data.message.token}`;
        navigate('/');
      }
    }
    catch(err){
      console.log(err);
      setErrorMessage(err.response.data.message);
      setDisplayLoading(false);
    }
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
            type='password'
          />
          <div className='text-[#FF0000]'>{errorMessage}</div>
        <button className="button bg-primary" onClick={(e)=>{handleSubmit(e)}} >
          {
            (!displayLoading)?'Login':<CircularProgress style={{ height: 30, width: 30}}/>
          }
        </button>
        <Link className="text-center" to={'/signup'}>
          Don`t have an account? <span className=" text-sm text-white cursor-pointer">
          Sign Up</span>
        </Link>
      </form>
    </div>
  )
}

export default Login