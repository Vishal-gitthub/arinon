import React, { useContext } from 'react';
import PortfolioNavbar from '../../Portfolio/PortfolioNavbar';
import { PortfolioContext } from '../../Portfolio/Context';
import CareerForm from '../CareerForm';

export default function JuniorSalesIntern() {
    const { ToggleForm } = useContext(PortfolioContext);
    return (
        <div>
            <PortfolioNavbar />
            <div className='flex max-md:flex-col bg-purple-custom w-full'>
                <div className='max-md:static fixed flex flex-col items-start bg-purple-custom p-8 w-1/2 max-md:w-full h-screen max-md:h-auto'>
                    <div>
                        <h1 className='font-semibold text-5xl text-left text-white max-sm:text-2xl max-md:text-3xl leading-tight'>
                            Junior Sales Executive Intern - Building Client Relationships
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
                                        Support the sales team in lead generation, outreach, and follow-up activities.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Assist in preparing sales presentations, proposals, and reports.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Build and maintain positive relationships with potential clients and partners.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Conduct market research to identify potential business opportunities.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Collaborate with the team to brainstorm strategies for achieving sales targets.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Where You'll Be</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Onsite: You’ll work from our Ghitorni, Delhi office.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Experience *</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Preferred: Prior internship or coursework in sales, marketing, or related fields.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h3 className='text-2xl text-black'>Skills</h3>
                            <div>
                                <ul className='text-sm marker:text-blue-custom list-disc'>
                                    <li className='py-4 text-black/60'>
                                        Communication: Strong verbal and written communication skills.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Customer Relations: Ability to build rapport and understand client needs.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Tools: Basic knowledge of CRM tools (e.g., Salesforce, HubSpot) and MS Office Suite.
                                    </li>
                                    <li className='py-4 text-black/60'>
                                        Teamwork: Collaborative mindset with a willingness to learn and adapt.
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
