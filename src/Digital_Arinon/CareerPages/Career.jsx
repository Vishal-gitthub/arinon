import careerBg from '../CareerPages/CareerPageImages/careerBg1.jpg';
import PortfolioNavbar from '../Portfolio/PortfolioNavbar';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
const cards = [
    // Development Roles
    {
        id: 1,
        title: 'Backend Developer',
        description: 'Responsible for server-side development and database management.',
    },
    {
        id: 2,
        title: 'Frontend Developer',
        description: 'Focuses on creating user-facing interfaces and user experiences.',
    },

    {
        id: 4,
        title: 'Game Developer',
        description: 'Develops video games for various platforms using specialized tools.',
    },
    {
        id: 5,
        title: 'Software Developer',
        description: 'Designs and builds software applications for different use cases.',
    },

    // AI Roles
    {
        id: 6,
        title: 'AI Engineer',
        description: 'Builds and trains AI models and implements machine learning solutions.',
    },

    // Creative Roles
    {
        id: 7,
        title: '3D Animator',
        description: 'Creates lifelike 3D animations for various projects.',
    },
    {
        id: 8,
        title: 'Content Creator',
        description: 'Generates engaging content for online and offline platforms.',
    },
    {
        id: 9,
        title: 'Gaming Content Creator',
        description: 'Produces gaming-related content for streaming or social platforms.',
    },
    {
        id: 10,
        title: 'Graphic Designer',
        description: 'Designs visual content using tools like Photoshop and Illustrator.',
    },
    {
        id: 11,
        title: 'Motion Graphics Designer',
        description: 'Specializes in creating animated graphics for video content.',
    },
    {
        id: 12,
        title: 'UI/UX Designer',
        description: 'Designs user interfaces and ensures optimal user experiences.',
    },
    {
        id: 13,
        title: 'Video Editor',
        description: 'Edits video content for projects like films, ads, or social media.',
    },
    {
        id: 14,
        title: 'Visual Effects (VFX) Artist',
        description: 'Creates special effects for movies, games, or other media.',
    },

    // Digital Marketing Roles
    {
        id: 15,
        title: 'Affiliate Marketing Manager',
        description: 'Oversees affiliate partnerships to drive sales and revenue.',
    },
    {
        id: 16,
        title: 'Content Marketing Manager',
        description: 'Plans and executes content strategies to engage target audiences.',
    },
    {
        id: 17,
        title: 'Digital Marketing Specialist',
        description: 'Manages digital campaigns across platforms like Google and social media.',
    },
    {
        id: 18,
        title: 'Email Marketing Specialist',
        description: 'Creates and manages email campaigns to engage users.',
    },
    {
        id: 19,
        title: 'Gaming Marketing Specialist',
        description: 'Promotes gaming content and manages marketing campaigns.',
    },
    {
        id: 20,
        title: 'Influencer Marketing Manager',
        description: 'Coordinates with influencers to promote brand visibility.',
    },
    {
        id: 21,
        title: 'SEO Specialist',
        description: 'Optimizes websites to rank higher on search engines.',
    },
    {
        id: 22,
        title: 'Social Media Manager',
        description: 'Manages social media accounts to build brand presence.',
    },

    // Management and Sales Roles
    {
        id: 23,
        title: 'Business Development Manager',
        description: 'Identifies growth opportunities and builds partnerships.',
    },
    {
        id: 24,
        title: 'HR/Admin',
        description: 'Handles human resources and administrative tasks.',
    },
    {
        id: 25,
        title: 'Marketing Specialist',
        description: 'Plans and executes marketing strategies.',
    },
    {
        id: 26,
        title: 'Sales Manager',
        description: 'Leads sales teams to achieve revenue targets.',
    },

    // Miscellaneous Roles
    {
        id: 27,
        title: 'E-commerce Specialist',
        description: 'Manages online store operations and strategies.',
    },
    {
        id: 28,
        title: 'Game Tester',
        description: 'Tests video games to identify bugs and improve quality.',
    },
    {
        id: 29,
        title: 'Technical Writer',
        description: 'Creates technical documentation and guides.',
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
                </div>
                    <button className='inline-flex relative justify-center items-center bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 rounded-full font-medium text-white transition-all'>
                        Explore All Jobs
                    </button>
                <div className='right-[10%] absolute'>
                    <div className='relative w-full h-screen overflow-hidden' ref={containerRef}>
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{
                                y: '-30%',
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 100,
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
                                        <p className='text-sm text-white'>{card.description}</p>
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
