import React, { Children } from 'react'
import {
  createBrowserRouter,
  RouterProvider,Outlet
  
} from "react-router-dom";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import "./app.scss"
import Register from './pages/Login/Register';
import Login from './pages/Login/Login';


const Layout = ()=>{
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
      path:"/accounts/register",
      element:<Register/>

    },
    {
      path:"/account/login" ,
      element:<Login/>
    }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;