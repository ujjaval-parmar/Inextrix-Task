import React from 'react'
import BannerProduct from './components/BannerProduct'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   
   <Navbar />
   
   <Outlet />


   <Footer />
   
   
   </>
  )
}

export default App