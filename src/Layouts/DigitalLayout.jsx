import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Digital_Arinon/Navbar';
import Footer from '../Digital_Arinon/Footer';
const DigitalLayout = () => {
    return (
        <div className='h-full'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default DigitalLayout;
