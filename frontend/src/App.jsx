import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from 'react';
import axios from 'axios';
import useDispatch from 'react-redux';

function App() {

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
        console.log(response.data.message)
      }
    }
    catch(err){
      console.log(err.message)
    }
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
