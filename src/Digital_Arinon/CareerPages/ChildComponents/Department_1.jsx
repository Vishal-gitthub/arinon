import React, { useContext } from 'react';
import PortfolioNavbar from '../../Portfolio/PortfolioNavbar';
import CareerForm from '../CareerForm';
import { PortfolioContext } from '../../Portfolio/Context';

export default function VideoEditorInternJob() {
    const { ToggleForm } = useContext(PortfolioContext);
    return (
        <div>
            <PortfolioNavbar />
            <div className='flex max-md:flex-col bg-purple-custom w-full'>
                <div className='max-md:static fixed flex flex-col items-start bg-purple-custom p-8 w-1/2 max-md:w-full h-screen max-md:h-auto'>
                    <div>
                        <h1 className='font-semibold text-5xl text-left text-white max-sm:text-2xl max-md:text-3xl leading-tight'>
                            Video Editor Intern - Creative Content Production
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
                            <ul className='text-base marker:text-blue-custom tracking-widest list-disc'>
                                <li className='py-4 text-black/60'>
                                    Assist in editing and assembling raw footage into engaging video content.
                                </li>
                                <li className='py-4 text-black/60'>
                                    Collaborate with the creative team to support project goals and deliverables.
                                </li>
                                <li className='py-4 text-black/60'>
                                    Learn and apply basic color grading, sound design, and motion graphics techniques.
                                </li>
                                <li className='py-4 text-black/60'>
                                    Help maintain consistency in visual storytelling and brand aesthetics.
                                </li>
                                <li className='py-4 text-black/60'>
                                    Stay curious and eager to learn new video editing trends and tools.
                                </li>
                            </ul>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Where You'll Be</h3>
                            <ul className='text-base marker:text-blue-custom list-disc'>
                                <li className='py-4 text-black/60'>
                                    Onsite: You’ll be based out of our Ghitorni, Delhi office.
                                </li>
                            </ul>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Experience *</h3>
                            <ul className='text-base marker:text-blue-custom list-disc'>
                                <li className='py-4 text-black/60'>
                                    <strong>Preferred:</strong> Some experience or coursework in video editing.
                                </li>
                                <li className='py-4 text-black/60'>
                                    Enthusiasm for video editing and storytelling is a must!
                                </li>
                            </ul>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Skills</h3>
                            <ul className='text-base marker:text-blue-custom list-disc'>
                                <li className='py-4 text-black/60'>
                                    <strong>Video Editing:</strong> Basic knowledge of tools like Adobe Premiere Pro, Final Cut Pro, or similar.
                                </li>
                                <li className='py-4 text-black/60'>
                                    <strong>Adaptability:</strong> Willingness to learn and explore different video genres and styles.
                                </li>
                                <li className='py-4 text-black/60'>
                                    <strong>Creativity:</strong> Passion for developing unique, engaging ideas for video content.
                                </li>
                            </ul>
                        </div>

                        <hr />
                        <div className='flex justify-evenly items-center mt-8'>
                            <div>
                                <span className='text-base text-black/60'>Location</span>
                                <p>Ghitorni, Delhi</p>
                            </div>
                            <div>
                                <span className='text-base text-black/60'>Job Type</span>
                                <p>Internship</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CareerForm />
        </div>
    );
}
