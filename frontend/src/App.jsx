import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useDispatch from 'react-redux';

function App() {

  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

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

    //toast
  }

  useEffect(()=>{
    const token = getCookieValue('token');
    if(!token){
      navigate('/login');
    }
    getUser();
  },[])

  return (
    <>
      <Navbar userName = {userName}/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
