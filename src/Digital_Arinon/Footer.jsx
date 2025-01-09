import React from 'react';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div>
            {' '}
            <footer className='bg-blue-custom px-14 pt-10 pb-4 text-white' id='contact'>
                <ContactForm />

                <hr />
                {/* LOCATION  */}

                <div className='flex max-md:flex-col-reverse max-md:flex-wrap justify-between max-md:justify-center items-center gap-20 max-md:gap-2 pt-2'>
                    <div className='flex max-md:flex-col items-center gap-1 text-[12px]'>
                        <i className='fa-copyright text-white fa'></i>
                        <p className=''>
                            {new Date().getFullYear()} Arinon Digital, (a unit of Manisi) All rights
                            reserved.
                        </p>
                    </div>

                    <div className='flex max-md:flex-col items-center gap-3 text-sm underline'>
                        <Link to='/arinon-digital/privacy-policy'>Privacy Policy</Link>
                    </div>

                    <div className='flex max-md:flex-col flex-shrink-0 items-center gap-3 text-[12px]'>
                        <i className='text-white fa fa-phone'></i>
                        <p className='tracking-wide'>+91 97738 36032</p>
                    </div>

                    <div className='flex max-md:flex-col items-center gap-3 text-sm'>
                        <i className='text-white fa fa-envelope'></i>
                        <p className=''>info@arinon.com</p>
                    </div>
                </div>

                <div
                    className={`fixed right-0 top-1/2  inline-flex -translate-y-1/2 flex-col gap-2 pr-1 z-30`}
                >
                    <a
                        href='https://www.facebook.com/arinondigital'
                        aria-label='Visit our Facebook page'
                        target='_blank'
                    >
                        <i className='bg-blue-custom hover:bg-[#a62d7a] px-[18px] py-[15px] border rounded-[50%] text-xl hover:text-white transition-all duration-300 fa fa-facebook'></i>
                    </a>
                    <a
                        href='https://www.instagram.com/arinondigital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                        aria-label='Visit our Instagram page'
                    >
                        <i className='bg-blue-custom hover:bg-[#a62d7a] px-[17px] py-[15px] border rounded-[50%] text-xl hover:text-white transition-all duration-300 fa fa-instagram'></i>
                    </a>
                    <a
                        href='https://www.linkedin.com/company/arinon/'
                        aria-label='Visit our Linked-in page'
                    >
                        <i className='bg-blue-custom hover:bg-[#a62d7a] px-[17px] py-[15px] border rounded-[50%] text-xl hover:text-white transition-all duration-300 fa fa-linkedin'></i>
                    </a>
                </div>
            </footer>
           
        </div>
    );
}
