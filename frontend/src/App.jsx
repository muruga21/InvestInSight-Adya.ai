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

  const getUser = async() => {
    try{
      const token = document.cookie.split('=')[1];
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

  useEffect(()=>{
    const token = document.cookie.split('=')[1];
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
