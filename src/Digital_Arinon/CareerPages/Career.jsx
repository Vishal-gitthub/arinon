import careerBg from '../CareerPages/CareerPageImages/careerBg1.jpg';
import PortfolioNavbar from '../Portfolio/PortfolioNavbar';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const cards = [
    // Design Roles
    {
        id: 1,
        title: 'Graphic Designer',
        description: 'Designs visual content using tools like Photoshop and Illustrator.',
    },
    {
        id: 2,
        title: '2D Designer',
        description:
            'Specializes in creating 2D artwork for various projects like games, media, and advertising.',
    },

    // Video Production Roles
    {
        id: 3,
        title: 'Video Editor',
        description: 'Edits video content for projects like films, ads, or social media.',
    },

    // Digital Marketing Roles
    {
        id: 4,
        title: 'Ads Manager',
        description:
            'Oversees and optimizes paid advertising campaigns on platforms like Google and Facebook.',
    },
    {
        id: 5,
        title: 'SEO Executive',
        description:
            'Implements strategies to improve website rankings and visibility on search engines.',
    },
    {
        id: 6,
        title: 'Social Media Manager',
        description:
            'Manages social media accounts, creating strategies to build brand awareness and engagement.',
    },
    {
        id: 7,
        title: 'Google Ads Expert',
        description:
            'Specializes in creating and optimizing campaigns on Google Ads to maximize ROI.',
    },

    // Business Development Roles
    {
        id: 8,
        title: 'Business Development Executive',
        description:
            'Identifies growth opportunities, builds partnerships, and drives business expansion.',
    },

    // Development Roles
    {
        id: 9,
        title: 'Frontend Web Developer',
        description:
            'Focuses on creating user-facing interfaces and ensuring optimal user experiences.',
    },
    {
        id: 10,
        title: 'Backend Web Developer',
        description: 'Responsible for server-side development and database management.',
    },
    {
        id: 11,
        title: 'Database Developer',
        description:
            'Designs, implements, and manages databases to ensure data integrity and performance.',
    },
];

export default function Career() {
    const containerRef = useRef(null);
    return (
        <div>
            <PortfolioNavbar />
            <div
                style={{ backgroundImage: `url(${careerBg})` }}
                className='relative bg-cover bg-no-repeat bg-center bg-fixed w-full h-[95.37vh] text-white overflow-hidden'
            >
                <div className='top-2/4 max-sm:top-[90%] max-sm:right-20 left-1/4 max-md:left-1/3 max-md:z-[1] absolute -translate-x-2/4 -translate-y-2/4'>
                    <h1 className='max-sm:hidden -ml-10 py-4 font-medium text-5xl uppercase'>
                        Join Us
                    </h1>
                    <Link to='/arinon-digital/department'>
                        <button className='flex flex-shrink-0 justify-center items-center bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 rounded-3xl w-auto font-medium text-white max-sm:text-sm transition-all'>
                            Explore All Jobs
                        </button>
                    </Link>
                </div>
                <div className='right-[10%] absolute'>
                    <div className='relative w-full h-screen overflow-hidden' ref={containerRef}>
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{
                                y: '-30%',
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 30,
                                ease: 'linear',
                                repeatType: 'loop',
                                repeatDelay: 0,
                            }}
                            style={{
                                willChange: 'transform',
                            }}
                            className='flex flex-col gap-5'
                        >
                            {[...cards].map((card, index) => (
                                <motion.div
                                    key={`${card.id}-${index}`}
                                    className='bg-blue-custom/40 shadow-lg backdrop-blur-lg sm:even:mr-10 mb-24 max-sm:ml-0 sm:odd:ml-10 rounded-xl transform-gpu overflow-hidden'
                                    style={{
                                        willChange: 'transform',
                                    }}
                                >
                                    <div className='p-4'>
                                        <h3 className='mb-1 font-semibold text-lg text-white'>
                                            {card.title}
                                        </h3>
                                        {/* <p className='text-sm text-white'>{card.description}</p> */}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* ------------------------- */}
        </div>
    );
}
