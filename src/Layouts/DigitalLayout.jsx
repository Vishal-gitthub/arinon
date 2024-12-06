import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Digital_Arinon/Navbar'
const DigitalLayout = () => {
      return (
            <div className='h-full'>
                  <Navbar />
                  <Outlet />
            </div>
      )
}

export default DigitalLayout
