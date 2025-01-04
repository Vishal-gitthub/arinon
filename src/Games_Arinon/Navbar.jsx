import React, { useState } from 'react';
import listIcon from '../Image_Files/Icons_File/hamburger.svg';
import cross from '../Image_Files/Icons_File/cross-2-white.svg';
import logo from '../Assets/Logo/Arinon_Games-02.png';
import { Link, NavLink } from 'react-router-dom';

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
            <nav className='flex justify-between items-center bg-[#fdfdfdc2] backdrop-blur-sm px-8 py-1'>
                <Link to='/'>
                    <div className='w-32'>
                        <img src={logo} alt='' className='w-full' />
                    </div>
                </Link>

                <div className='flex gap-4 max-md:hidden text-blue-custom'>
                    {/* <a href="#ourGames" className='font-semibold hover:text-orange-custom'>
                                    Our Games
                              </a> */}
                    <NavLink
                        to='/arinon-games/about-us'
                        className={`({ isActive }) => isActive ? "text-orange-custom" : "text-blue-custom" hover:text-orange-custom font-semibold`}
                    >
                        <p>About Us</p>
                    </NavLink>

                    <NavLink
                        to='/arinon-games/support'
                        className={`({ isActive }) => isActive ? "text-orange-custom" : "text-blue-custom" hover:text-orange-custom font-semibold`}
                    >
                        Support
                    </NavLink>

                    <NavLink
                        to='/arinon-games/early-access'
                        className={`({ isActive }) => isActive ? "text-orange-custom" : "text-blue-custom" hover:text-orange-custom font-semibold`}
                    >
                        Early Access
                    </NavLink>
                </div>

                <div className='max-md:block hidden'>
                    <button onClick={menuBtn}>
                        <img src={listIcon} alt='' />
                    </button>
                </div>
            </nav>

            <div
                id='sidebar'
                className={`flex flex-col fixed h-full top-0 right-0 transition-transform duration-300 z-50 ${
                    widthState ? 'translate-x-0' : 'translate-x-full'
                } text-blue-custom max-md:w-64 bg-[#fdfdfdc2] backdrop-blur-sm `}
            >
                <button onClick={menuCloseBtn} className='place-items-center grid p-4'>
                    <img src={cross} alt='' />
                </button>

                <NavLink
                    to='/arinon-games/about-us'
                    className='hover:bg-[#00000038] hover:backdrop-blur-md mx-2 px-4 py-3 rounded-2xl text-xl hover:text-orange-custom'
                >
                    About Us
                </NavLink>
                <NavLink
                    to='/arinon-games/support'
                    className='hover:bg-[#00000038] hover:backdrop-blur-md mx-2 px-4 py-3 rounded-2xl text-xl hover:text-orange-custom'
                >
                    Support
                </NavLink>
            </div>
        </header>
    );
};

export default Navbar;
