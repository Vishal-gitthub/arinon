import React, { useContext, useState } from 'react';
import PortfolioNavbar from '../../Portfolio/PortfolioNavbar';
import { PortfolioContext } from '../../Portfolio/Context';
import CareerForm from '../CareerForm';

export default function Department_2() {
    const { ToggleForm } = useContext(PortfolioContext);
    return (
        <div>
            <PortfolioNavbar />
            <div className='flex max-md:flex-col bg-purple-custom w-full'>
                <div className='max-md:static fixed flex flex-col items-start bg-purple-custom p-8 w-1/2 max-md:w-full h-screen max-md:h-auto'>
                    <div>
                        <h1 className='font-semibold text-5xl text-left text-white max-sm:text-2xl max-md:text-3xl leading-tight'>
                            Software & Web Developer - Innovating Digital Solutions
                            <br />
                            <span className='text-white/50'>  Onsite / Full-time</span>
                        </h1>
                    </div>
                    <div className='bottom-20 left-5 absolute'>
                        <button
                            onClick={ToggleForm}
                            className='inline-flex bottom-12 fixed justify-center items-center hover:border-white bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 border border-transparent rounded-full font-medium text-white transition-all'
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
                <div className='max-md:m-0 ml-[50%] w-1/2 max-md:w-full min-h-full'>
                    <div className='bg-white p-8 max-md:rounded-t-md'>
                        <div className='space-y-3 rounded-tl-3xl'>
                            <h3 className='text-2xl text-black'>What You'll Do</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom tracking-widest list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Develop and maintain dynamic web applications using modern
                                        technologies like React, Node.js, and more.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Write clean, efficient, and scalable code to create seamless
                                        user experiences.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Collaborate with designers and project managers to deliver
                                        high-quality solutions on time.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Perform troubleshooting and debugging to optimize web
                                        applications.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Stay up-to-date with emerging trends in web development
                                        technologies.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Where You'll Be</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Onsite: You’ll be based out of our Ghitorni, Delhi office.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Experience *</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Experience: <strong>1+ Years</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Skills</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Web Development:
                                        <strong>
                                            React, Node.js, HTML, CSS, JavaScript, Tailwind CSS,
                                            MongoDB
                                        </strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Backend Development:
                                        <strong>
                                            Express.js, MySQL, PostgreSQL, API development
                                        </strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Problem Solving:
                                        <strong>
                                            Strong understanding of data structures, algorithms, and
                                            system design
                                        </strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Collaboration:
                                        <strong>
                                            Experience working in agile environments with
                                            cross-functional teams
                                        </strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-evenly items-center'>
                            <div>
                                <span className='text-black/60 text-sm'>Location</span>
                                <p>Ghitorni, Delhi</p>
                            </div>
                            <div>
                                <span className='text-black/60 text-sm'>Job Type</span>
                                <p>Permanent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <CareerForm />
            </div>
        </div>
    );
}
