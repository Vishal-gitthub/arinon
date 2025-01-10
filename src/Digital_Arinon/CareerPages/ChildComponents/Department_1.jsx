import React, { useContext, useState } from 'react';
import PortfolioNavbar from '../../Portfolio/PortfolioNavbar';
import CareerForm from '../CareerForm';
import { PortfolioContext } from '../../Portfolio/Context';

export default function Department_1() {
    const { ToggleForm } = useContext(PortfolioContext);
    return (
        <div>
            <PortfolioNavbar />
            <div className='flex max-md:flex-col bg-purple-custom w-full'>
                <div className='max-md:static fixed flex flex-col items-start bg-purple-custom p-8 w-1/2 max-md:w-full h-screen max-md:h-auto'>
                    <div>
                        <h1 className='font-semibold text-5xl text-left text-white max-sm:text-2xl max-md:text-3xl leading-tight'>
                            Video Editor - Creative Content Production
                            <br />
                            <span className='text-white/50'> Onsite / Full-time</span>
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
                                <ul className='text-base marker:text-blue-custom tracking-widest list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam reprehenderit voluptas sint veritatis possimus optio
                                        aliquam dignissimos? Cumque, fugit. Nesciunt.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam reprehenderit voluptas sint veritatis possimus optio
                                        aliquam dignissimos? Cumque, fugit. Nesciunt.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam reprehenderit voluptas sint veritatis possimus optio
                                        aliquam dignissimos? Cumque, fugit. Nesciunt.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam reprehenderit voluptas sint veritatis possimus optio
                                        aliquam dignissimos? Cumque, fugit. Nesciunt.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam reprehenderit voluptas sint veritatis possimus optio
                                        aliquam dignissimos? Cumque, fugit. Nesciunt.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Where You'll Be</h3>
                            <div>
                                <ul className='text-base marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Onsite: You’ll be based out of our Ghitorni, Delhi office.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Experience *</h3>
                            <div>
                                <ul className='text-base marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Experience: <strong>1+ Years</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Skills</h3>
                            <div>
                                <ul className='text-base marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Video Editing:
                                        <strong>
                                            Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, Avid
                                            Media Composer,Lightworks, Adobe After Effects
                                        </strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Audio Editing:
                                        <strong>Audacity, Adobe Audition, Logic Pro X</strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Adaptability:
                                        <strong>
                                            Comfortable working with different genres (corporate
                                            videos, ads, documentaries, etc.).
                                        </strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Creativity:
                                        <strong>
                                            Ability to think outside the box and come up with
                                            unique, engaging ideas for videos.
                                        </strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-evenly items-center'>
                            <div>
                                <span className='text-base text-black/60'>Location</span>
                                <p>Ghitorni, Delhi</p>
                            </div>
                            <div>
                                <span className='text-base text-black/60'>Job Type</span>
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
