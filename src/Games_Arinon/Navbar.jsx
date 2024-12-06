import React, { useState } from 'react'
import listIcon from "../Image_Files/Icons_File/hamburger.svg"
import cross from "../Image_Files/Icons_File/cross-2-white.svg"
import logo from "../Assets/Logo/Arinon_Games-02.png"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
      let [widthState, setWidthState] = useState(false);
      function menuBtn() {
            setWidthState(!widthState);
      }

      function menuCloseBtn() {
            setWidthState(!widthState);
      }
      return (
            <header className="sticky top-0 z-40">
                  <nav
                        className="backdrop-blur-sm py-1 px-8 flex items-center justify-between bg-[#fdfdfdc2]"
                  >
                        <Link to="/arinon-games">
                              <div className="w-32" >
                                    <img src={logo} alt="" className="w-full" />
                              </div>
                        </Link>

                        <div className="flex gap-4 max-md:hidden text-blue-custom">

                              <a href="#ourGames" className='hover:text-orange-custom  font-semibold'>
                                    Our Games
                              </a>
                              <NavLink to="/games~about-us" className={`({ isActive }) => isActive ? "text-orange-custom" : "text-blue-custom" hover:text-orange-custom font-semibold`}>
                                    <p>
                                          About Us
                                    </p>
                              </NavLink>

                              <a href="#contact" className='hover:text-orange-custom font-semibold'>
                                    Support
                              </a>

                              <NavLink to="/arinon-games/privacy-policy" className={`({ isActive }) => isActive ? "text-orange-custom" : "text-blue-custom" hover:text-orange-custom font-semibold`}>
                                    Privacy Policy
                              </NavLink>
                        </div>

                        <div className="hidden max-md:block">
                              <button onClick={menuBtn}>
                                    <img src={listIcon} alt="" />
                              </button>
                        </div>

                  </nav>

                  <div
                        id="sidebar"
                        className={`flex flex-col fixed h-full top-0 right-0 transition-transform duration-300 z-50 ${widthState ? "translate-x-0" : "translate-x-full"
                              } text-blue-custom max-md:w-64 bg-[#fdfdfdc2] backdrop-blur-sm `}
                  >
                        <button onClick={menuCloseBtn} className="p-4 grid place-items-center">
                              <img src={cross} alt="" />
                        </button>

                        <a href="#home" className="py-3 hover:bg-[#00000038]  hover:backdrop-blur-md hover:text-orange-custom rounded-2xl mx-2 px-4 text-xl"
                        >
                              Home
                        </a>

                        <a href="#our-games"
                              className="py-3 hover:bg-[#00000038]  hover:backdrop-blur-md hover:text-orange-custom rounded-2xl mx-2 px-4 text-xl"
                        >
                              Our Games                              </a>

                        <a href="#about-us"
                              className="py-3 hover:bg-[#00000038]  hover:backdrop-blur-md hover:text-orange-custom rounded-2xl mx-2 px-4 text-xl"
                        >
                              About Us
                        </a>
                        <a href="#contact"
                              className="py-3 hover:bg-[#00000038]  hover:backdrop-blur-md hover:text-orange-custom rounded-2xl mx-2 px-4 text-xl"
                        >

                              Support
                        </a>

                  </div>

            </header>
      )
}

export default Navbar
