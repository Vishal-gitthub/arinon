import React from 'react'
import logo from "../Assets/Logo/Arinon_Games-02.png";

const Footer = () => {
      return (
            <footer id='contact' >
                  <div className='px-10 py-6 '>
                        <div className='flex justify-between items-center text-white max-md:flex-col max-md:gap-6'>
                              <div>

                                    <div className="w-32">
                                          <img src={logo} title='A UNIT OF MANISI' alt="" className="w-full" />
                                    </div>
                              </div>
                              <div>
                                    <p className='pb-3'>LOCATION</p>
                                    <p>GHITORNI, DELHI NCR</p>
                              </div>
                              <div className='pr-5'>
                                    <p className=' pb-3'>INQUIRY</p>
                                    <p>info@arinon.com</p>
                                    <p>+91-1234567890</p>
                              </div>

                        </div>

                        <div className='flex items-center gap-4 pt-7 flex-wrap justify-center'>
                              <i className="fa fa-facebook text-3xl  border py-[0.7rem] px-[15px] rounded-[50%] bg-white hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i>
                              <i className="fa fa-instagram text-3xl border py-[0.7rem] px-3 rounded-[50%] bg-white hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i>
                              {/* <i className="fa fa-whatsapp text-3xl  border py-2 px-3 rounded-[50%] bg-white hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i> */}
                              <i className="fa fa-linkedin text-3xl  border py-[0.7rem] px-3 rounded-[50%] bg-white hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i>

                        </div>


                  </div> <hr className='border-t-2 border-gray-900' />
                  <div className="text-gray-400 px-10 bg-black text-left">
                        <p className="py-1 text-xs">
                              © {new Date().getFullYear()} Arinon Games (A Unit Of Manisi). All Rights Reserved.
                        </p>
                  </div>


            </footer >
      )
}

export default Footer
