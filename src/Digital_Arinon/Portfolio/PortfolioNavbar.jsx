import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/Logo/Arinon_Logo_Final-02.png';
import listIcon from '../../Image_Files/Icons_File/hamburgerwhite.svg';
import arrowRight from '../../Image_Files/Icons_File/cross-svgrepo.svg';
import { Link } from 'react-router-dom';
const PortfolioNavbar = () => {
    return (
        <header className='top-0 z-40 sticky'>
            {/* -------------------------------NAVBAR------------------------------- */}
            {/* Navbar   */}
            <nav className='flex justify-between items-center bg-[#1d3962] backdrop-blur-sm px-8 py-3'>
                <NavLink to='/' aria-label='LOGO'>
                    <div className='w-24'>
                        <img src={logo} alt='' className='w-full' />
                    </div>
                </NavLink>

                <Link
                    to='/arinon-digital'
                    className='flex items-center gap-4 text-white transition-all duration-300'
                >
                    <i className='fa-arrow-left fa'></i>
                    <p>Home</p>
                </Link>
            </nav>
        </header>
    );
};

export default PortfolioNavbar;
