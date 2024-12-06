import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import logo from "../Assets/Logo/Arinon_Logo_Final-02.png"
import listIcon from "../Image_Files/Icons_File/hamburgerwhite.svg";
import arrowRight from "../Image_Files/Icons_File/cross-svgrepo.svg";

const Navbar = () => {

      let [widthState, setWidthState] = useState(false);
      function menuBtn() {
            setWidthState(!widthState);
      }
      function menuCloseBtn() {
            setWidthState(!widthState);
      }

      return (

            <header className="sticky top-0  z-40 ">
                  {/* -------------------------------NAVBAR------------------------------- */}
                  {/* Navbar   */}
                  <nav
                        className="backdrop-blur-sm py-3 px-8 flex items-center justify-between bg-[#1d3962]"
                  >
                        <a href="#home" aria-label="LOGO">
                              <div className="w-24">
                                    <img src={logo} alt="" className="w-full" />
                              </div>
                        </a>

                        <div className="flex gap-4 max-md:hidden text-white">

                              <a href="#services">
                                    Services
                              </a>
                              <a href="#pricing">
                                    Pricing
                              </a>

                              <a href="#about-us">
                                    About Us
                              </a>
                              {/* <a href="#faqs">FAQs</a> */}

                              <a href="#contact">
                                    Contact Us
                              </a>
                              <NavLink to="/arinon-digital/privacy-policy">
                                    Privacy Policy
                              </NavLink>


                        </div>
                        <div className=" hidden max-md:block">
                              <button onClick={menuBtn} aria-label="Menu Bar">
                                    <img src={listIcon} alt="" />
                              </button>
                        </div>
                  </nav>

                  <div
                        id="sidebar"
                        className={`flex flex-col fixed h-full top-0 right-0 transition-transform duration-300 z-50 ${widthState ? "translate-x-0" : "translate-x-full"
                              } text-black max-md:w-64 bg-slate-50`}

                  >
                        <button onClick={menuCloseBtn} aria-label="Close Menu" className="p-4 grid place-items-center">
                              <img src={arrowRight} alt="" />
                        </button>

                        <a href="#services"

                              className="py-3 hover:bg-[#1d3962] hover:text-white rounded-2xl mx-2 px-4 text-xl"
                        >
                              Services
                        </a>
                        <a href="#pricing"
                              className="py-3 hover:bg-[#1d3962] hover:text-white rounded-2xl mx-2 px-4 text-xl"

                        >
                              Pricing
                        </a>

                        <a href="#about-us"
                              className="py-3 hover:bg-[#1d3962] hover:text-white rounded-2xl mx-2 px-4 text-xl"
                        >
                              About Us
                        </a>
                        {/* <a href="#faqs"
            className="py-3 hover:bg-[#1d3962] hover:text-white rounded-2xl mx-2 px-4 text-xl"
          >FAQs
          </a> */}

                        <a href="#contact"
                              className="py-3 hover:bg-[#1d3962] hover:text-white rounded-2xl mx-2 px-4 text-xl"
                        >
                              Contact Us
                        </a>
                  </div>
            </header>
      )
}

export default Navbar
