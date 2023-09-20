import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../UnchangeComponent/Navbar'
import Footer from '../UnchangeComponent/Footer'

const Home = () => {
  return (
    <div className='space-y-10'>
      <div className='py-6'>
        <Navbar />
      </div>

      <Outlet></Outlet>
      
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default Home