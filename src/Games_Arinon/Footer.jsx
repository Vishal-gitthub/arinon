import React from 'react';
import logo from '../Assets/Logo/Arinon_Games-02.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer id='contact' className='bg-white'>
            <div className='px-10 py-6'>
                <div className='flex max-md:flex-col justify-between items-center max-md:gap-6 text-black'>
                    <div>
                        <div className='w-32'>
                            <img src={logo} title='A UNIT OF MANISI' alt='' className='w-full' />
                        </div>
                    </div>

                    <p>info@arinon.com</p>

                    <p>+91 97738 36032</p>
                </div>
            </div>
            <hr className='border-gray-900 border-t-2' />

            <div className='flex flex-shrink-0 items-center gap-10 bg-white px-10 text-gray-900 text-left'>
                <p className='py-1 text-xs'>
                    © {new Date().getFullYear()} Arinon Games (A Unit Of Manisi). All Rights
                    Reserved.
                </p>
                <Link
                    to='/arinon-games/privacy-policy'
                    className={`({ isActive }) => isActive ? "text-orange-custom" : "text-blue-custom" hover:text-orange-custom font-semibold text-xs underline transition-all duration-300`}
                >
                    Privacy Policy
                </Link>
            </div>

            <div
                className={`fixed right-0 top-1/2  inline-flex -translate-y-1/2 flex-col gap-2 pr-1 z-[999]`}
            >
                <a
                    href='https://www.facebook.com/profile.php?id=61568625622800'
                    aria-label='Visit our Facebook page'
                    target='_blank'
                >
                    <i className='bg-blue-custom hover:bg-[#a62d7a] px-[13px] py-[10px] border rounded-[50%] text-white text-xl transition-all duration-300 fa fa-facebook'></i>
                </a>
                <a
                    href='https://www.instagram.com/arinongames?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==
'
                    aria-label='Visit our Instagram page'
                >
                    <i className='bg-blue-custom hover:bg-[#a62d7a] px-[12px] py-[10px] border rounded-[50%] text-white text-xl transition-all duration-300 fa fa-instagram'></i>
                </a>
                <a
                    href='https://www.linkedin.com/company/arinon-games'
                    aria-label='Visit our Linked-in page'
                >
                    <i className='bg-blue-custom hover:bg-[#a62d7a] px-[12px] py-[10px] border rounded-[50%] text-white text-xl transition-all duration-300 fa fa-linkedin'></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
