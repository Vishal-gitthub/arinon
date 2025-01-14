import React, { useContext } from 'react';
import PortfolioNavbar from '../../Portfolio/PortfolioNavbar';
import { PortfolioContext } from '../../Portfolio/Context';
import CareerForm from '../CareerForm';

export default function SocialMediaManagerIntern() {
    const { ToggleForm } = useContext(PortfolioContext);
    return (
        <div>
            <PortfolioNavbar />
            <div className='flex max-md:flex-col bg-purple-custom w-full'>
                <div className='max-md:static fixed flex flex-col items-start bg-purple-custom p-8 w-1/2 max-md:w-full h-screen max-md:h-auto'>
                    <div>
                        <h1 className='font-semibold text-5xl text-left text-white max-sm:text-2xl max-md:text-3xl leading-tight'>
                            Social Media Manager Intern - Engaging Digital Audiences
                            <br />
                            <span className='text-white/50'>Onsite / Internship</span>
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
                                        Assist in planning and creating engaging content for various social media platforms.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Monitor and respond to comments, messages, and mentions to foster community engagement.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Analyze social media performance metrics and suggest improvements for future campaigns.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Stay updated with the latest social media trends and integrate them into content strategies.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Collaborate with the marketing team to ensure brand consistency across all platforms.
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
                                        Preferred: Basic experience or coursework in social media marketing.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Passion for social media and creativity is a must!
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Skills</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Platforms: Proficiency in Instagram, Facebook, Twitter, LinkedIn, and other social platforms.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Content Creation: Basic knowledge of graphic design tools like Canva or Adobe Creative Suite.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Analytics: Familiarity with tools like Google Analytics, social media insights, or similar platforms.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Communication: Strong written and verbal communication skills.
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
                                <p>Internship</p>
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
