import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Assets/Logo/Arinon_Logo_Final-02.png';
import listIcon from '../Image_Files/Icons_File/hamburgerwhite.svg';
import arrowRight from '../Image_Files/Icons_File/cross-svgrepo.svg';

const Navbar = () => {
    const [widthState, setWidthState] = useState(false);

    const menuItems = [
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Services', href: '#services' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'About Us', href: '#about-us' },
        { routeLabel: 'Careers', to: '/arinon-digital/career' },
        { label: 'Contact Us', href: '#contact' },
    ];

    const toggleMenu = () => setWidthState(!widthState);

    return (
        <header className='top-0 z-40 sticky'>
            {/* NAVBAR */}
            <nav className='flex justify-between items-center bg-[#1d3962] backdrop-blur-sm px-8 py-3'>
                <NavLink to='/' aria-label='LOGO'>
                    <div className='w-24'>
                        <img src={logo} alt='Logo' className='w-full' />
                    </div>
                </NavLink>
                {/* Desktop Menu */}
                <div className='flex gap-4 max-md:hidden text-white'>
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            {item.href && (
                                <a
                                    href={item.href}
                                    className='hover:text-gray-300 hover:underline transition duration-200 ease-in-out'
                                >
                                    {item.label}
                                </a>
                            )}
                            {item.to && (
                                <Link
                                    to={item.to}
                                    className='hover:text-gray-300 hover:underline transition duration-200 ease-in-out'
                                >
                                    {item.routeLabel}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className='max-md:block hidden'>
                    <button
                        onClick={toggleMenu}
                        aria-label='Menu Bar'
                        className='transform transition-transform duration-300 ease-in-out hover:scale-110'
                    >
                        <img src={listIcon} alt='Menu Icon' />
                    </button>
                </div>
            </nav>

            {/* Sidebar */}
            <div
                id='sidebar'
                className={`flex gap-5 w-full flex-col fixed h-full top-0 right-0 transition-transform duration-500 ease-in-out z-50 ${
                    widthState ? 'translate-x-0' : 'translate-x-full'
                } text-black max-md:w-64 bg-slate-50`}
            >
                <button
                    onClick={toggleMenu}
                    aria-label='Close Menu'
                    className='place-items-center grid p-4 transform transition-transform duration-300 ease-in-out hover:rotate-90'
                >
                    <img src={arrowRight} alt='Close Icon' />
                </button>
                <hr />

                {menuItems.map((item, index) => (
                    <div key={index} className='flex flex-col'>
                        {item.href && (
                            <a
                                href={item.href}
                                className='hover:bg-[#1d3962] mx-2 px-4 py-3 rounded-2xl text-xl hover:text-white transition duration-300 ease-in-out'
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </a>
                        )}
                        {item.to && (
                            <Link
                                to={item.to}
                                className='hover:bg-[#1d3962] mx-2 px-4 py-3 rounded-2xl text-xl hover:text-white transition duration-300 ease-in-out'
                                onClick={toggleMenu}
                            >
                                {item.routeLabel}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Navbar;
