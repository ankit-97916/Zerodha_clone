import './App.css'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' // react-router-dom setup

import HomePage from './Landing_page/homeAuth/Homes'
import Signup from './Landing_page/homeAuth/SignUp'
import AboutPage from './Landing_page/about/AboutPage'
import ProductPage from './Landing_page/products/ProductPage'
import PricingPage from './Landing_page/pricing/PricingPage'
import SupportPage from './Landing_page/support/SupportPage'
import Navbar from './Landing_page/Navbar'
import Footer from './Landing_page/Footer'
import NotFound from './Landing_page/NotFound'
import Login from './Landing_page/homeAuth/Login'


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>

      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}> </Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
