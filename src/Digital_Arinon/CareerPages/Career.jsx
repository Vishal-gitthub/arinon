import PortfolioNavbar from '../Portfolio/PortfolioNavbar';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import videoBg from '../CareerPages/CareerPageImages/careerBGVideo.mp4';
import careerBgMobile from '../CareerPages/CareerPageImages/careerBgMobile.mp4';
const cards = [
    // Design Roles
    {
        id: 1,
        title: 'Graphic Designer',
    },
    {
        id: 2,
        title: '2D Designer',
    },

    // Video Production Roles
    {
        id: 3,
        title: 'Video Editor',
    },

    // Digital Marketing Roles
    {
        id: 4,
        title: 'Ads Manager',
    },
    {
        id: 5,
        title: 'SEO Executive',
    },
    {
        id: 6,
        title: 'Social Media Manager',
    },
    {
        id: 7,
        title: 'Google Ads Expert',
    },

    // Business Development Roles
    {
        id: 8,
        title: 'Business Development Executive',
    },

    // Development Roles
    {
        id: 9,
        title: 'Frontend Web Developer',
    },
    {
        id: 10,
        title: 'Backend Web Developer',
    },
    {
        id: 11,
        title: 'Database Developer',
    },
];

export default function Career() {
    const containerRef = useRef(null);
    const widthState = window.innerWidth < 540;
    return (
        <div>
            <PortfolioNavbar />
            <div
                // style={{ backgroundImage: `url(${careerBg})` }}
                className='relative bg-cover bg-no-repeat bg-center bg-fixed w-full h-[95.37vh] text-black overflow-hidden'
            >
                <video
                    autoPlay
                    muted
                    loop
                    className='top-0 left-0 z-[-1] absolute w-full h-full object-cover'
                >
                    <source src={widthState ? careerBgMobile : videoBg} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>

                <div className='bg-black/40 backdrop-blur-sm w-full h-full'>
                    <div className='top-2/4 max-md:top-[85%] max-sm:right-0 left-[38%] max-sm:left-1/3 max-md:left-1/4 z-[1] absolute -translate-x-2/4 -translate-y-2/4'>
                        <div className='w-[70%]'>
                            <h1 className='max-md:hidden py-4 font-semibold text-5xl text-white uppercase'>
                                <span
                                    className='text-transparent'
                                    style={{ WebkitTextStroke: '1px white' }}
                                >
                                    Join&nbsp;
                                </span>
                                our team
                                <br />
                                and&nbsp;
                                <span
                                    className='text-transparent'
                                    style={{ WebkitTextStroke: '1px white' }}
                                >
                                    grow &nbsp;
                                </span>
                                with us.
                                <span
                                    className='text-transparent'
                                    style={{ WebkitTextStroke: '1px white' }}
                                >
                                    &nbsp; Discover
                                </span>
                                &nbsp; roles that
                                <br />
                                fit your
                                <span
                                    className='text-transparent'
                                    style={{ WebkitTextStroke: '1px white' }}
                                >
                                    &nbsp; aspirations.
                                </span>
                            </h1>

                            <Link to='/arinon-digital/department'>
                                <button className='flex flex-shrink-0 justify-center items-center bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 rounded-3xl w-auto font-medium text-white max-sm:text-sm transition-all'>
                                    Explore All Jobs
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='right-[1%] max-sm:right-1 z-10 absolute mx-auto w-full max-w-xl'>
                        <div className='relative h-max overflow-hidden' ref={containerRef}>
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: '-30%' }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 30,
                                    ease: 'linear',
                                    repeatType: 'loop',
                                    repeatDelay: 0,
                                }}
                                style={{ willChange: 'transform' }}
                                className='flex flex-col items-center max-sm:items-end gap-5 /'
                            >
                                {[...cards].map((card, index) => (
                                    <motion.div
                                        key={`${card.id}-${index}`}
                                        className='md:even:mr-1 odd:mr-14 mb-24 max-sm:ml-0 sm:odd:ml-36 transform-gpu overflow-hidden'
                                        style={{ willChange: 'transform' }}
                                    >
                                        <div className='inline-flex bg-purple-custom px-9 py-6 rounded-[3rem] w-auto max-w-2xl'>
                                            <span className='mb-1 font-semibold text-lg text-white'>
                                                {card.title}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
