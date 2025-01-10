import React, { useContext } from 'react';
import PortfolioNavbar from '../../Portfolio/PortfolioNavbar';
import { PortfolioContext } from '../../Portfolio/Context';
import CareerForm from '../CareerForm';

export default function Department_3() {
    const { ToggleForm } = useContext(PortfolioContext);
    return (
        <div>
            <PortfolioNavbar />
            <div className='flex max-md:flex-col bg-purple-custom w-full'>
                <div className='max-md:static fixed flex flex-col items-start bg-purple-custom p-8 w-1/2 max-md:w-full h-screen max-md:h-auto'>
                    <div>
                        <h1 className='font-semibold text-5xl text-left text-white max-sm:text-2xl max-md:text-3xl leading-tight'>
                            Business Development Executive - Expanding Horizons
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
                                <ul className='text-sm marker:text-blue-custom tracking-widest list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Identify and develop new business opportunities through
                                        market research, networking, and outreach.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Build strong relationships with clients and stakeholders to
                                        understand their needs and deliver value.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Collaborate with internal teams to create tailored
                                        proposals, presentations, and strategies for client
                                        acquisition.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Meet and exceed sales targets and KPIs by closing deals and
                                        generating revenue growth.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Stay updated with market trends and competitor activities to
                                        identify new opportunities.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Where You'll Be</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Hybrid: You’ll work partly from our Ghitorni, Delhi office
                                        and partly remotely.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Experience *</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Experience:{' '}
                                        <strong>
                                            1+ Years in Business Development, Sales, or related
                                            fields
                                        </strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Skills</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Business Development:
                                        <strong>
                                            Lead generation, market research, and sales strategy
                                        </strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Communication:
                                        <strong>
                                            Excellent verbal and written communication skills,
                                            client relationship management
                                        </strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Tools:
                                        <strong>
                                            CRM platforms (e.g., Salesforce, HubSpot), MS Office,
                                            and Google Workspace
                                        </strong>
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Problem Solving:
                                        <strong>
                                            Strong negotiation and analytical skills to handle
                                            client challenges
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
