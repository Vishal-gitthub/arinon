import React, { useEffect } from 'react';
import frontPageLeftVideo from '../Video_Files/frontPage_leftSide_Video.mp4';
import gsap from 'gsap';
import '../SecondaryStyle.css';
import { Link } from 'react-router-dom';
import web2 from '../Video_Files/Arinon (1920 x 1080 px).mp4';
import tabImg from '../Image_Files/tabImgTest.jpg';
import arinonLogo from '../Assets/Logo/Arinon_Logo_Icon-diffrentSize.svg';
import arinonGames from '../Assets/Logo/Arinon_Games-White-Logo.png';
const FrontPage = () => {
    useEffect(() => {
        gsap.fromTo(
            '.left',
            {
                x: '-100%',
                opacity: 0,
            },
            {
                x: '0%',
                opacity: 1,
                duration: 1,
                ease: 'ease.out',
            },
        );
        gsap.fromTo(
            '.right',
            { x: '100%', opacity: 0 },
            { x: '0%', duration: 1, opacity: 1, ease: 'ease.out' },
        );
    }, []);
    return (
        <>
            {/* -------------------------------SECTION 1------------------------------- */}
            <header className='overflow-hidden'>
                <div>
                    <div className='flex max-sm:flex-col w-full h-screen max-sm:h-full'>
                        {/* -------------------------------CHILD SECTION A------------------------------- */}
                        <div className='left flex justify-center items-center bg-black w-[60%] max-sm:w-full text-white'>
                            {/* for mobile */}
                            <video
                                className='max-sm:block hidden max-md:hidden w-full h-full object-cover'
                                autoPlay
                                muted
                                loop
                            >
                                <source src={web2} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>

                            {/* for tablet */}
                            <video
                                className='max-md:block hidden max-sm:hidden bg-center w-full h-full object-cover'
                                autoPlay
                                loop
                            >
                                <source src={web2} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>

                            {/* for desktop */}
                            <video
                                className='block max-sm:hidden max-md:hidden w-full h-full object-cover'
                                autoPlay
                                loop
                                muted
                                preload='auto'
                            >
                                <source src={web2} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* -------------------------------CHILD SECTION B------------------------------- */}
                        <div className='right w-[40%] max-sm:w-full'>
                            <Link to='/arinon-digital'>
                                <div className='flex justify-center items-center bg-[#1d3962] px-4 max-sm:py-7 w-full h-2/4 text-white'>
                                    <div className='flex flex-col justify-center items-center py-14'>
                                        <img src={arinonLogo} className='w-[20rem]' alt='' />
                                        <h1 className='-mt-[3.9rem] ml-52 font-bold text-[2rem]'>
                                            Digital
                                        </h1>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/arinon-games'>
                                <div className='flex justify-center items-center bg-orange-custom px-4 max-sm:py-7 w-full h-2/4 text-white'>
                                    <div className='flex flex-col justify-center items-center py-14'>
                                        <img src={arinonGames} className='w-[20rem]' alt='' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default FrontPage;
