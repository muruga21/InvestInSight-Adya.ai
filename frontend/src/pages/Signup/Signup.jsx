import React, { useState } from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [displayLoading, setDisplayLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setDisplayLoading(true);
    console.log(userName, password, confirmPassword);
    if(password !== confirmPassword){
      setDisplayLoading(false);
      setErrorMessage('password didnt match');
      return;
    }
    try{
      const response = await axios.post(process.env.REACT_APP_BACKEND_URL+'/user/signup',
      {
        username: userName,
        password: password
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if(response.status === 200){
        console.log(response.data.message.token)
        document.cookie = `token=${response.data.message.token}`;
        navigate('/');
      }
    }
    catch(err){
      console.log(err);
      setErrorMessage(err.response.data.message);
    }
    setDisplayLoading(false);
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
            type='password'
          />
        <div className='text-[#FF0000]'>{errorMessage}</div>
        <button className="button bg-primary" onClick={(e)=>{handleSubmit(e)}} >
          {
            (!displayLoading)?'Signup':<CircularProgress style={{ height: 30, width: 30}}/>
          }
        </button>
        <Link className="text-center" to={'/login'}>
            have an account? <span className=" text-sm text-white cursor-pointer">
          Login</span>
        </Link>
      </form>
    </div>
  )
}

export default Signup