import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Home from './pages/Home/Home.jsx';
import BrowseStocks from './pages/Stocks/BrowseStocks.jsx';
import store from './redux/store.js'
import { Provider } from 'react-redux'
import Payment from './pages/Payment/Payment.jsx';
import Profile from './pages/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/stocks",
        element:<BrowseStocks/>
      },
      {
        path:"/payment",
        element:<Payment/>
      },
      {
        path:'/profile',
        element:<Profile/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
