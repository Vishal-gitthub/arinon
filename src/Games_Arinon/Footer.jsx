import React from 'react'
import logo from "../Assets/Logo/Arinon_Games-02.png";
import { Link } from 'react-router-dom';
const Footer = () => {
      return (
            <footer id='contact' className='bg-white' >
                  <div className='px-10 py-6 '>
                        <div className='flex justify-between items-center text-black max-md:flex-col max-md:gap-6'>
                              <div>

                                    <div className="w-32">
                                          <img src={logo} title='A UNIT OF MANISI' alt="" className="w-full" />
                                    </div>
                              </div>


                              <p>info@arinon.com</p>

                              <p>+91-1234567890</p>


                        </div>




                  </div>
                  <hr className='border-t-2 border-gray-900' />

                  <div className="text-gray-900 px-10 bg-white text-left flex items-center gap-10">
                        <p className="py-1 text-xs">
                              © {new Date().getFullYear()} Arinon Games (A Unit Of Manisi). All Rights Reserved.
                        </p>
                        <Link to="/arinon-games/privacy-policy" className={`({ isActive }) => isActive ? "text-orange-custom" : "text-blue-custom" hover:text-orange-custom font-semibold text-xs underline transition-all duration-300`}>
                              Privacy Policy
                        </Link>
                  </div>

                  <div className={`fixed right-0 top-1/2  inline-flex -translate-y-1/2 flex-col gap-2 pr-1 z-[999]`}>
                        <a href="https://www.facebook.com/arinondigital" aria-label="Visit our Facebook page" target="_blank">
                              <i className="fa fa-facebook text-xl  border py-[10px] bg-blue-custom px-[13px] rounded-[50%] hover:bg-[#a62d7a] text-white transition-all duration-300"></i>
                        </a>
                        <a href="https://www.instagram.com/arinondigital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Visit our Instagram page">
                              <i className="fa fa-instagram text-xl border py-[10px] px-[12px] bg-blue-custom rounded-[50%] hover:bg-[#a62d7a] text-white transition-all duration-300"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/arinon/" aria-label="Visit our Linked-in page">
                              <i className="fa fa-linkedin text-xl  border py-[10px] px-[12px] bg-blue-custom rounded-[50%] hover:bg-[#a62d7a] text-white transition-all duration-300"></i>
                        </a>
                  </div>

            </footer >
      )
}

export default Footer
