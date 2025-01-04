import React from 'react';
import Navbar from '../Games_Arinon/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Games_Arinon/Footer';

const GamesLayout = () => {
    return (
        <div className='h-full'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default GamesLayout;
