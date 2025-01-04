import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Logo/Arinon_Logo_Final-02.png';
import listIcon from '../Image_Files/Icons_File/hamburgerwhite.svg';
import arrowRight from '../Image_Files/Icons_File/cross-svgrepo.svg';

const Navbar = () => {
    let [widthState, setWidthState] = useState(false);
    function menuBtn() {
        setWidthState(!widthState);
    }
    function menuCloseBtn() {
        setWidthState(!widthState);
    }

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

                <div className='flex gap-4 max-md:hidden text-white'>
                    <a href='#services'>Services</a>
                    <a href='#pricing'>Pricing</a>

                    <a href='#about-us'>About Us</a>
                    {/* <a href="#faqs">FAQs</a> */}

                    <a href='#contact'>Contact Us</a>
                </div>
                <div className='max-md:block hidden'>
                    <button onClick={menuBtn} aria-label='Menu Bar'>
                        <img src={listIcon} alt='' />
                    </button>
                </div>
            </nav>

            <div
                id='sidebar'
                className={`flex flex-col fixed h-full top-0 right-0 transition-transform duration-300 z-50 ${
                    widthState ? 'translate-x-0' : 'translate-x-full'
                } text-black max-md:w-64 bg-slate-50`}
            >
                <button
                    onClick={menuCloseBtn}
                    aria-label='Close Menu'
                    className='place-items-center grid p-4'
                >
                    <img src={arrowRight} alt='' />
                </button>

                <a
                    href='#services'
                    className='hover:bg-[#1d3962] mx-2 px-4 py-3 rounded-2xl text-xl hover:text-white'
                >
                    Services
                </a>
                <a
                    href='#pricing'
                    className='hover:bg-[#1d3962] mx-2 px-4 py-3 rounded-2xl text-xl hover:text-white'
                >
                    Pricing
                </a>

                <a
                    href='#about-us'
                    className='hover:bg-[#1d3962] mx-2 px-4 py-3 rounded-2xl text-xl hover:text-white'
                >
                    About Us
                </a>
                {/* <a href="#faqs"
            className="hover:bg-[#1d3962] mx-2 px-4 py-3 rounded-2xl text-xl hover:text-white"
          >FAQs
          </a> */}

                <a
                    href='#contact'
                    className='hover:bg-[#1d3962] mx-2 px-4 py-3 rounded-2xl text-xl hover:text-white'
                >
                    Contact Us
                </a>
            </div>
        </header>
    );
};

export default Navbar;
