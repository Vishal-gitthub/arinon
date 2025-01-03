import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// images & Svg files import
import arinonBanner from '../Image_Files/Arinon_Digital_Banner.jpg';
import BulbSvg from '../Image_Files/Icons_File/bulb-2.svg';
import businessLogo from '../Image_Files/Icons_File/briefcase-2.svg';
import heartLogo from '../Image_Files/Icons_File/heart.svg';
import plantImg from '../Image_Files/plant.png';
import plant2 from '../Image_Files/plant_2.png';
import groupSvg from '../Image_Files/Icons_File/groupSvg.svg';
import codeSvg from '../Image_Files/Icons_File/code-svgrepo-com.svg';
import completedSvg from '../Image_Files/Icons_File/completedSvg.svg';
import ServiceMockup from '../Image_Files/MockUp1forService.png';
import downArrow from '../Image_Files/Icons_File/downArrow.png';
// brands logo
import elCafe from '../Image_Files/brandsLogos/3L-Cafe.png';
import peterCat from '../Image_Files/brandsLogos/Peter-Cat.png';
import aeikyam from '../Image_Files/brandsLogos/Aeikyam.png';
import laxya from '../Image_Files/brandsLogos/Laxya.png';
import musingOfAkansha from '../Image_Files/brandsLogos/Musings-of-Aakanksha.png';
import deeBake from "../Image_Files/brandsLogos/Dee's_Bake.png";
import bridgeHotel from '../Image_Files/brandsLogos/The-Bridge-Hotel.png';
import fillme from '../Image_Files/brandsLogos/FillMe-whiteLogo.png';
import Manch from '../Image_Files/brandsLogos/Manchh-Hindi-NewsLogo.png';
import jmdLogo from '../Image_Files/brandsLogos/jmd-logo.png';
import appKart from '../Image_Files/brandsLogos/app-kart-logo-White-png.webp';
import specify from '../Image_Files/brandsLogos/specifyLogo.png';

//gsap library import
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//slick-caraousel library import
import Slider from 'react-slick';
import 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// <<<<<<<------->>>>>>>
import WorkMockUp_1 from '../Image_Files/ArinonImages/Work MockUp-01.jpg';
import WorkMockUp_2 from '../Image_Files/ArinonImages/Work MockUp-02.jpg';
import WorkMockUp_3 from '../Image_Files/ArinonImages/Work MockUp-03.jpg';
import WorkMockUp_4 from '../Image_Files/ArinonImages/Work MockUp-04.jpg';
import WorkMockUp_5 from '../Image_Files/ArinonImages/Work MockUp-05.jpg';
import WorkMockUp_6 from '../Image_Files/ArinonImages/Work MockUp-06.jpg';
import WorkMockUp_7 from '../Image_Files/ArinonImages/Work MockUp-07.jpg';
import WorkMockUp_8 from '../Image_Files/ArinonImages/Work MockUp-08.jpg';

// Arinon Projects Thumbnail Images
const projectsClient = [
    { name: 'Laxya Production', image: WorkMockUp_3 , to: '/arinon-digital/2' },
    { name: 'The Bridge Hotel', image: WorkMockUp_8 ,'to': '/arinon-digital/4'},
    { name: 'Musings of Aakanksha', image: WorkMockUp_5, to: '/arinon-digital/1' },
    { name: 'Peter Cat', image: WorkMockUp_1,to: '/arinon-digital/3'},
    { name: 'Musings Of Akanksha', image: WorkMockUp_2, to: '/arinon-digital/1' },
    { name: '3L Cafe', image: WorkMockUp_6 , to:"/ArinonDigital/5"},
    { name: 'Laxya Production', image: WorkMockUp_7, to: '/arinon-digital/2' },
    { name: 'The Bridge Hotel', image: WorkMockUp_4 ,to :"/ArinonDigital/4" }, //
];

// <<<<<<<------->>>>>>>

const DigitalArinonPage = () => {
    // these 3 states for displaying our clients and projects with animation
    const [happyClients, setHappyClients] = useState(0);
    const [partners, setpartners] = useState(0);
    const [projects, setProjects] = useState(0);

    // these state is for side Navbar
    const [activeIndex, setActiveIndex] = useState(null);

    // these state is for FAQ accordian
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active item
    };

    const [isVisible, setVisible] = useState(false);

    // toggleButton for back to top Button
    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useEffect(() => {
        const interval_1 = setInterval(() => {
            setHappyClients((prev) => {
                if (prev < 15) return prev + 1;
                clearInterval(interval_1);
                return prev;
            });
        }, 500);

        const interval_2 = setInterval(() => {
            setpartners((prev) => {
                if (prev < 5) return prev + 1;
                clearInterval(interval_2);
                return prev;
            });
        }, 1000);

        const interval_3 = setInterval(() => {
            setProjects((prev) => {
                if (prev < 35) return prev + 2;
                clearInterval(interval_3);
                return prev;
            });
        }, 500);

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

        gsap.fromTo(
            '.leftCard',
            { x: '-100%' },
            {
                x: '0%',
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.leftCard',
                    start: 'top 80%',
                    toggleActions: 'play none none reset',
                },
            },
        );

        gsap.fromTo(
            '.rightCard',
            {
                x: '100%',
            },
            {
                x: '0%',
                duration: 1.5,
                ease: 'ease.out',
                scrollTrigger: {
                    trigger: '.rightCard',
                    start: 'top 80%',
                    toggleActions: 'play none none reset',
                },
            },
        );

        gsap.fromTo(
            '.objectRight',
            {
                x: '100%',
            },
            {
                x: '0%',
                duration: 1.5,
                ease: 'ease.out',
                scrollTrigger: {
                    trigger: '.objectRight',
                    start: 'top 70%',
                    toggleActions: 'play none none reset',
                    scrub: true,
                },
            },
        );
        gsap.fromTo(
            '.objectLeft',
            {
                x: '-100%',
            },
            {
                x: '0%',
                duration: 1.5,
                ease: 'ease.out',
                scrollTrigger: {
                    trigger: '.objectLeft',
                    start: 'top 70%',
                    toggleActions: 'play none none reset',
                    scrub: 1,
                },
            },
        );

        gsap.fromTo(
            '.objectRight2',
            {
                x: '100%',
            },
            {
                x: '0%',
                duration: 1.5,
                ease: 'ease.out',
                scrollTrigger: {
                    trigger: '.objectRight2',
                    start: 'top 70%',
                    toggleActions: 'play none none reset',
                },
            },
        );
        gsap.fromTo(
            '.objectLeft2',
            {
                x: '-100%',
            },
            {
                x: '0%',
                duration: 1.5,
                ease: 'ease.out',
                scrollTrigger: {
                    trigger: '.objectLeft2',
                    start: 'top 70%',
                    toggleActions: 'play none none reset',
                },
            },
        );

        gsap.fromTo(
            '.controlOpacity',
            { opacity: 0.01 },
            {
                opacity: 1,
                duration: 1.9,
                scrollTrigger: {
                    trigger: '.controlOpacity',
                    start: 'top 80%',
                    toggleActions: 'play none none reset',
                },
            },
        );
    }, []);

    let carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
    };

    let brandCarousel = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 800,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='font-custom'>
            <section>
                <div className='relative w-full h-[36rem]'>
                    <img src={arinonBanner} className='w-full h-full object-cover' alt='' />

                    <a
                        href='#home'
                        className='bottom-4 left-1/2 absolute px-4 py-4 rounded-full transform transition-all -translate-x-1/2 duration-500'
                    >
                        <img src={downArrow} alt='Down Arrow' />
                    </a>
                </div>
            </section>
            {/* -------------------------------SECTION 1------------------------------- */}
            <section>
                {/* -------------------------------CHILD SECTION A------------------------------- */}
                <div className='px-36 max-sm:px-5 max-md:px-20 text-center' id='home'>
                    <h1 className='py-16 font-bold text-5xl max-sm:text-4xl'>
                        We Are Digital Agency
                    </h1>
                    <p>
                        At Arinon, creativity meets expertise. Our mission is to transform brands
                        through innovative digital marketing, cutting-edge web development, and app
                        solutions that drive measurable results. By combining a customer-centric
                        approach with industry-leading technology, we forge strong client
                        relationships and deliver exceptional outcomes.
                    </p>
                </div>
                {/* -------------------------------CHILD SECTION B------------------------------- */}
                {/* cardsSection */}
                <div className='flex max-md:flex-col flex-wrap justify-center items-center gap-5 px-24 max-sm:px-3 max-md:px-12 pt-8 pb-8 text-center overflow-hidden'>
                    {/* Left Card */}
                    <div className='leftCard flex flex-col items-center w-full sm:w-[30%] md:w-[50%] lg:w-[30%] creativeIdea'>
                        <div className='relative top-12'>
                            <img src={BulbSvg} alt='bulb Svg' />
                        </div>
                        <div className='shadow-[0px_3px_18px_0px_lightgray] px-14 py-20 rounded-2xl h-56'>
                            <h1 className='font-semibold text-xl'>
                                We have some creative ideas for you.
                            </h1>
                        </div>
                    </div>

                    {/* Control Opacity Card */}
                    <div className='flex flex-col items-center w-full sm:w-[30%] md:w-[50%] lg:w-[30%] controlOpacity creativeIdea'>
                        <div className='relative top-12'>
                            <img src={businessLogo} alt='business logo' />
                        </div>
                        <div className='shadow-[0px_3px_18px_0px_lightgray] px-14 py-20 rounded-2xl h-56'>
                            <h1 className='font-semibold text-xl'>
                                Your business is our top priority.
                            </h1>
                        </div>
                    </div>
                    {/* Right Card */}
                    <div className='rightCard flex flex-col items-center w-full sm:w-[30%] md:w-[50%] lg:w-[30%] creativeIdea'>
                        <div className='relative top-12'>
                            <img src={heartLogo} alt='heart logo' />
                        </div>
                        <div className='shadow-[0px_3px_18px_0px_lightgray] px-14 py-20 rounded-2xl h-56'>
                            <h1 className='font-semibold text-xl'>We love our valued customers.</h1>
                        </div>
                    </div>
                </div>
                {/* -------------------------------CHILD SECTION C------------------------------- */}
            </section>

            {/* -------------------------------SECTION 2------------------------------- */}
            <section className='bg-blue-custom mt-12 py-20 text-white' id='about-us'>
                {/* -------------------------------CHILD SECTION A------------------------------- */}
                {/* our Philosophy and vision  */}
                <div className='flex max-md:flex-col justify-center items-center max-md:px-5 overflow-hidden'>
                    <div className='pr-11 max-md:pr-0 pl-11 w-2/4 max-md:w-full max-md:text-center'>
                        <h1 className='py-4 font-bold text-4xl'>Our Philosophy</h1>
                        <p className='py-3'>
                            At Arinon, we believe in personalized, cutting-edge solutions that
                            deliver measurable success. By combining innovation with creativity, we
                            aim to exceed expectations and build long-lasting relationships.
                        </p>
                    </div>
                    <div className='flex justify-end pl-6 objectRight'>
                        <img src={plantImg} alt='' className='pl-5 w-full' />
                    </div>
                </div>

                <div className='flex max-md:flex-col-reverse justify-center items-center max-md:px-5 overflow-hidden'>
                    <div className='flex justify-end pl-6 objectLeft'>
                        <img src={plant2} alt='' className='pl-5' />
                    </div>
                    <div className='text-right pr-11 max-md:pr-0 w-2/4 max-md:w-full max-md:text-center'>
                        <h1 className='py-4 font-bold text-4xl'>Our Vision</h1>
                        <p className='py-3'>
                            We aspire to be the industry leader in digital marketing and
                            development, offering a one-stop solution for all digital needs. By
                            staying at the forefront of innovation, we’re shaping the future of
                            marketing and advertising.
                        </p>
                    </div>
                </div>

                {/* -------------------------------CHILD SECTION B------------------------------- */}

                {/* -------------------------------CHILD SECTION C------------------------------- */}

                <div className='flex max-md:flex-col justify-around items-center max-sm:gap-5 pt-9 pb-7'>
                    <div className='flex items-center gap-3'>
                        <img src={groupSvg} alt='' />
                        <div className='flex flex-col pr-[29px]'>
                            <span className='font-bold text-3xl'>{`${happyClients}+`}</span>
                            <span className='font-bold text-xl'>Satisfied Clients</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={codeSvg} alt='' />
                        <div className='flex flex-col'>
                            <span className='font-bold text-3xl'>{`${partners}+`}</span>
                            <span className='font-bold text-xl'>Partners Worldwide</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={completedSvg} alt='' />
                        <div className='flex flex-col'>
                            <span className='font-bold text-3xl'>{`${projects}+`}</span>
                            <span className='font-bold text-xl'>Completed Projects</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands Logos Carousels */}
            {/* -------------------------------SECTION 3------------------------------- */}
            <section className='py-10 brandBg'>
                <div>
                    <Slider {...brandCarousel}>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={peterCat}
                                className='p-4 transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='peter cat'
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={deeBake}
                                className='p-4 transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt="dee's Bake"
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={elCafe}
                                className='p-4 w-full transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='3L Cafe'
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={musingOfAkansha}
                                className='p-4 transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='musings of aakanksha'
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={specify}
                                className='p-4 transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='specify'
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={laxya}
                                className='p-4 transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='laxya '
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={aeikyam}
                                className='p-4 transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='aeikyam'
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={jmdLogo}
                                className='p-4 transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='jmd logo'
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={Manch}
                                className='p-4 transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='manch'
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={fillme}
                                className='p-4 transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='fillme'
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={appKart}
                                className='p-4 invert transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='appKart '
                            />
                        </div>
                        <div className='flex justify-center items-center outline-none'>
                            <img
                                src={bridgeHotel}
                                className='p-4 transition-all duration-300 brand_logo grayscale hover:grayscale-0'
                                alt='bridge Hotel'
                            />
                        </div>
                    </Slider>
                </div>
            </section>

            {/* -------------------------------SECTION 4------------------------------- */}

            <section className='bg-blue-custom pt-10'>
                <h1 className='pb-10 font-semibold text-4xl text-center text-white'>
                    Our Latest and Creative Works
                </h1>
                <div className='gap-0 grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-rows-2 max-sm:grid-rows-1 max-md:grid-rows-2 max-lg:grid-rows-3 w-full'>
                    {projectsClient.map((project, index) => (
                        <div key={index}>
                            <Link to={project.to}>
                                <div className='relative w-full h-full overflow-hidden group'>
                                    <img
                                        src={project.image}
                                        alt={`Image of ${project.name}`}
                                        className='w-full h-full object-cover'
                                    />

                                    <div className='top-2/4 left-2/4 absolute flex justify-center items-center bg-[#0000008f] opacity-0 group-hover:opacity-100 w-full h-full font-semibold text-white text-xl tracking-[0.3em] transition-all -translate-x-2/4 -translate-y-2/4 duration-300'>
                                        VISIT
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* -------------------------------CHILD SECTION 5------------------------------- */}
            <section className='bg-white py-11'>
                {/* SERVICES  */}
                {/* -------------------------------CHILD SECTION A------------------------------- */}

                <section className='py-16 overflow-hidden' id='services'>
                    <h1 className='py-10 font-semibold text-4xl text-center'>Our Services</h1>
                    <div className='flex max-md:flex-col items-center max-md:gap-5 max-md:text-center'>
                        <div className='text-right flex flex-col justify-between gap-40 max-md:gap-5 max-md:px-8 pr-10 pl-32 max-md:text-left objectLeft2'>
                            <div>
                                <h1 className='py-2 font-semibold text-xl'>DIGITAL MARKETING</h1>
                                <p className='text-gray-600'>
                                    Take your brand to the next level with powerful digital
                                    marketing strategies, that aligns with your vision.
                                </p>
                            </div>
                            {/* <div>
                <h1 className="font-semibold text-xl">WEB DEVELOPMENT</h1>
                <p className="text-gray-600">Build fast, responsive, and user-friendly websites with our expert development team.</p>
              </div> */}
                            <div>
                                <h1 className='py-2 font-semibold text-xl uppercase'>
                                    App Development
                                </h1>
                                <p className='text-gray-600'>
                                    Develop mobile and web applications that meet your business
                                    needs and enhance user experience.
                                </p>
                            </div>
                        </div>

                        <div className='min-w-52 max-w-72 max-md:max-w-52 controlOpacity'>
                            <img src={ServiceMockup} alt='' />
                        </div>

                        <div className='flex flex-col gap-8 max-md:px-8 pr-32 pl-10 max-md:text-left objectRight2'>
                            {/* <div>
                <h1 className="font-semibold text-xl">DIGITAL MARKETING</h1>
                <p className="text-gray-600">Take your brand to the next level with powerful digital marketing strategies, that aligns with your vision.</p>
              </div> */}
                            <div>
                                <h1 className='py-2 font-semibold text-xl'>WEB DEVELOPMENT</h1>
                                <p className='text-gray-600'>
                                    Build fast, responsive, and user-friendly websites with our
                                    expert development team.
                                </p>
                            </div>
                            {/* <div>
                <h1 className="font-semibold text-xl">App Development
                </h1>
                <p className="text-gray-600">
                  Develop mobile and web applications that meet your business needs and enhance user experience.
                </p>
              </div> */}
                        </div>
                    </div>
                </section>

                {/* -------------------------------CHILD SECTION B------------------------------- */}

                {/* web design packages ---------------- */}
                <div className='items-centerflex-col max-md:gap-20 pt-24 text-center' id='pricing'>
                    <h1 className='flex-shrink-0 pr-7 font-custom font-semibold text-4xl'>
                        Web Designs Packages
                    </h1>
                    <p className='px-20 max-sm:px-5 max-md:px-15 py-5 text-lg'>
                        We offer comprehensive social media management packages designed to help you
                        achieve your brand goals, whether you're starting out or looking to dominate
                        your niche.
                    </p>
                </div>

                {/* -------------------------------CHILD SECTION C------------------------------- */}

                {/* prices up down annimation Cards */}
                <div>
                    <div className='flex flex-wrap justify-center items-center gap-7 pt-8'>
                        <div className='shadow-[0px_2px_15px_4px_#0000001a] h-[450px] group'>
                            <div className='relative flex justify-center items-center bg-white w-72 h- overflow-hidden'>
                                <div className='group-hover:text-white relative z-10 py-6 text-center transition-all duration-300'>
                                    <h1 className='font-bold text-xl tracking-wider'>
                                        Starter Package
                                    </h1>

                                    <h1 className='font-bold text-5xl tracking-wider'>
                                        10000<span className='font-medium text-2xl'>₹</span>
                                    </h1>
                                    <span className='font-medium text-lg'>Monthly billing</span>
                                </div>
                                <div className='bottom-[-100%] group-hover:bottom-0 left-0 absolute bg-[#1d3962] w-full h-full transition-all duration-300 ease-in-out' />
                            </div>

                            <div className='relative flex justify-center items-center bg-white w-72 h- overflow-hidden group'>
                                <div className='group-hover:text-white relative z-10 px-5 text-center transition-all duration-300'>
                                    <h1 className='py-4 text-base'>
                                        3 posts/week (Reels, photos, captions)
                                    </h1>
                                    <h1 className='py-4 text-base'>
                                        2 stories/week for audience engagement
                                    </h1>
                                    <h1 className='py-4 text-base'>
                                        Basic hashtag research boost reach
                                    </h1>
                                    <h1 className='py-4 text-base'>
                                        {' '}
                                        Monthly insights on followers and engagement
                                    </h1>
                                </div>
                                <div className='group-hover:top-0 top-[-100%] left-0 absolute bg-[#a62d7a] w-full h-full transition-all duration-300 ease-in-out' />
                            </div>
                        </div>
                        <div className='shadow-[0px_2px_15px_4px_#0000001a] h-[450px] group'>
                            <div className='relative flex justify-center items-center bg-white w-72 h- overflow-hidden'>
                                <div className='group-hover:text-white relative z-10 py-6 text-center transition-all duration-300'>
                                    <h1 className='font-bold text-xl tracking-wider'>
                                        Growth Package
                                    </h1>
                                    <h1 className='font-bold text-5xl tracking-wider'>
                                        16000<span className='font-medium text-2xl'>₹</span>
                                    </h1>
                                    <span className='font-medium text-lg'>Monthly billing</span>
                                </div>
                                <div className='bottom-[-100%] group-hover:bottom-0 left-0 absolute bg-[#1d3962] w-full h-full transition-all duration-300 ease-in-out' />
                            </div>

                            <div className='relative flex justify-center items-center bg-white w-72 overflow-hidden group'>
                                <div className='group-hover:text-white relative z-10 px-5 text-center transition-all duration-300'>
                                    <h1 className='py-4 text-base'>
                                        4 posts/week (photos, Reels, captions)
                                    </h1>
                                    <h1 className='py-4 text-base'>
                                        3 stories/week to deepen connection
                                    </h1>
                                    <h1 className='py-4 text-base'> 1 trending Reel per week</h1>
                                    <h1 className='py-4 text-base'>
                                        {' '}
                                        Advanced monthly report with engagement insights
                                    </h1>
                                </div>
                                <div className='group-hover:top-0 top-[-100%] left-0 absolute bg-[#a62d7a] w-full h-full transition-all duration-300 ease-in-out' />
                            </div>
                        </div>
                        <div className='shadow-[0px_2px_15px_4px_#0000001a] h-[450px] group'>
                            <div className='relative flex justify-center items-center bg-white w-72 h- overflow-hidden'>
                                <div className='group-hover:text-white relative z-10 py-6 text-center transition-all duration-300'>
                                    <h1 className='font-bold text-xl tracking-wider'>
                                        Premium Package
                                    </h1>

                                    <h1 className='font-bold text-5xl tracking-wider'>
                                        20000<span className='font-medium text-2xl'>₹</span>
                                    </h1>
                                    <span className='font-medium text-lg'>Monthly billing</span>
                                </div>
                                <div className='bottom-[-100%] group-hover:bottom-0 left-0 absolute bg-[#1d3962] w-full h-full transition-all duration-300 ease-in-out' />
                            </div>

                            <div className='relative flex justify-center items-center bg-white w-72 h- overflow-hidden group'>
                                <div className='group-hover:text-white relative z-10 px-5 text-center transition-all duration-300'>
                                    <h1 className='py-4 text-base'>
                                        {' '}
                                        5 posts/week (diverse mix including Reels, quotes)
                                    </h1>
                                    <h1 className='py-4 text-base'>
                                        Daily stories to maintain engagement
                                    </h1>
                                    <h1 className='py-4 text-base'>
                                        2 high-quality Reels per week
                                    </h1>
                                    <h1 className='py-4 text-base'>
                                        {' '}
                                        Detailed monthly analytics with growth strategies
                                    </h1>
                                </div>
                                <div className='group-hover:top-0 top-[-100%] left-0 absolute bg-[#a62d7a] w-full h-full transition-all duration-300 ease-in-out' />
                            </div>
                        </div>
                        <div className='shadow-[0px_2px_15px_4px_#0000001a] h-[450px] group'>
                            <div className='relative flex justify-center items-center bg-white py-5 w-72 overflow-hidden group'>
                                <div className='group-hover:text-white relative z-10 px-5 text-center transition-all duration-300'>
                                    <h1 className='font-bold text-2xl tracking-wider'>
                                        1:1 Consulting
                                    </h1>
                                    <p className='py-4 text-base'>
                                        In-person consultation for a deep dive into your brand
                                        strategy.
                                    </p>
                                    <p>
                                        Comprehensive guidance with hands-on support for execution.
                                    </p>
                                </div>
                                <div className='bottom-[-100%] group-hover:bottom-0 left-0 absolute bg-[#1d3962] w-full h-full transition-all duration-300 ease-in-out' />
                            </div>
                            <div className='relative flex justify-center items-center bg-white py-4 w-72 overflow-hidden'>
                                <div className='group-hover:text-white relative z-10 px-5 text-center transition-all duration-300'>
                                    <h1 className='font-bold text-2xl tracking-wider'>
                                        Online Consulting
                                    </h1>
                                    <p className='py-4 tracking-wide'>
                                        Personalized strategy session via video call tailored to
                                        your business goals.
                                    </p>
                                    <p className='py-4'>
                                        Actionable insights and a roadmap for your digital growth.
                                    </p>
                                </div>
                                <div className='group-hover:top-0 top-[-100%] left-0 absolute bg-[#a62d7a] w-full h-full transition-all duration-300 ease-in-out' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------------------CHILD SECTION 6------------------------------- */}
            <section className='bg-blue-100 py-24 group testimonialsBg'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-semibold text-3xl text-center text-white uppercase'>
                        Happy clients
                    </h1>
                    <div className='group-hover:w-80 bg-[#a62d7a] rounded-md w-16 h-1 transition-all duration-500' />
                </div>
                <div className='m-auto pt-12 w-[90%]'>
                    <div>
                        <Slider {...carouselSettings}>
                            <div>
                                <div className='flex max-sm:flex-col justify-center items-center gap-20 max-sm:gap-7'>
                                    <div className='w-[80%] max-sm:w-full text-center'>
                                        <p className='py-3 text-2xl text-white'>
                                            Arinon’s dedication and expertise in social media have
                                            elevated our brand presence. We couldn’t ask for a
                                            better partner!
                                        </p>
                                        <h1 className='font-medium text-gray-500 text-lg'>
                                            LAXYA PRODUCTION
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex max-sm:flex-col justify-center items-center gap-20 max-sm:gap-7'>
                                    <div className='w-[80%] max-sm:w-full text-center'>
                                        <p className='py-3 text-2xl text-white'>
                                            Arinon’s content captures the essence of our
                                            Vastu-inspired products beautifully. They’ve helped us
                                            connect with the right audience.
                                        </p>
                                        <h1 className='font-medium text-gray-500 text-lg'>
                                            AEIKYAM
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex max-sm:flex-col justify-center items-center gap-20 max-sm:gap-7'>
                                    <div className='w-[80%] max-sm:w-full text-center'>
                                        <p className='py-3 text-2xl text-white'>
                                            Arinon has helped us bring the essence of 3L Cafe to
                                            life online. Their expertise in managing our website and
                                            social media has truly elevated our brand.
                                        </p>
                                        <h1 className='font-medium text-gray-500 text-lg'>
                                            3L CAFE
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex max-sm:flex-col justify-center items-center gap-20 max-sm:gap-7'>
                                    <div className='w-[80%] max-sm:w-full text-center'>
                                        <p className='py-3 text-2xl text-white'>
                                            Arinon understands my audience perfectly! Their creative
                                            approach has taken my social media to the next level.{' '}
                                        </p>
                                        <h1 className='font-medium text-gray-500 text-lg'>
                                            MUSINGS OF AAKANKSHA
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex max-sm:flex-col justify-center items-center gap-20 max-sm:gap-7'>
                                    <div className='w-[80%] max-sm:w-full text-center'>
                                        <p className='py-3 text-2xl text-white'>
                                            Arinon has turned our cafe into a digital hotspot. Their
                                            posts capture the warm, cozy vibe we’re known for.
                                        </p>
                                        <h1 className='font-medium text-gray-500 text-lg'>
                                            PETER CAT
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <section id='faqs' className='hidden'>
                {/* Accordians  */}
                <div className='bg-gray-100 px-6 sm:px-8 lg:px-16 py-20'>
                    <div className='mx-auto mb-8 max-w-4xl text-center'>
                        <h2 className='font-semibold text-2xl text-gray-800 md:text-3xl'>
                            Why Arinon Is the Right Choice for You
                        </h2>
                    </div>

                    <div className='space-y-4'>
                        <div className='bg-white shadow-md rounded-lg'>
                            <button
                                className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 px-6 py-4 rounded-t-lg w-full font-medium text-gray-800 text-left text-xl focus:outline-none'
                                onClick={() => toggleAccordion(0)}
                            >
                                <span>01. Innovative Solutions</span>
                                <span
                                    className={`transform transition-transform duration-300 ${
                                        activeIndex === 0 ? 'rotate-180' : ''
                                    }`}
                                >
                                    ↑
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeIndex === 0 ? 'max-h-40' : 'max-h-0'
                                }`}
                            >
                                <div className='px-6 py-4 text-gray-600'>
                                    We stay ahead of the curve, leveraging the latest tools and
                                    trends to create impactful solutions.
                                </div>
                            </div>
                        </div>

                        <div className='bg-white shadow-md rounded-lg'>
                            <button
                                className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 px-6 py-4 rounded-t-lg w-full font-medium text-gray-800 text-left text-xl focus:outline-none'
                                onClick={() => toggleAccordion(1)}
                            >
                                <span>02. Industry Expertise</span>
                                <span
                                    className={`transform transition-transform duration-300 ${
                                        activeIndex === 1 ? 'rotate-180' : ''
                                    }`}
                                >
                                    ↑
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeIndex === 1 ? 'max-h-40' : 'max-h-0'
                                }`}
                            >
                                <div className='px-6 py-4 text-gray-600'>
                                    With years of experience and a proven track record, our team
                                    delivers excellence in every project.
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-md rounded-lg'>
                            <button
                                className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 px-6 py-4 rounded-t-lg w-full font-medium text-gray-800 text-left text-xl focus:outline-none'
                                onClick={() => toggleAccordion(2)}
                            >
                                <span>03. Customer-Centric Approach</span>
                                <span
                                    className={`transform transition-transform duration-300 ${
                                        activeIndex === 2 ? 'rotate-180' : ''
                                    }`}
                                >
                                    ↑
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeIndex === 2 ? 'max-h-40' : 'max-h-0'
                                }`}
                            >
                                <div className='px-6 py-4 text-gray-600'>
                                    We prioritize your success by providing tailored solutions and
                                    exceptional service.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* button here */}
                    {/* <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block bg-[#1d3962] hover:bg-[#A62E7A] px-6 py-3 rounded-lg font-bold text-white transition duration-300"
            >
              Learn More About Our Approach
            </a>
          </div> */}
                </div>
            </section>

            {/* -------------------------------SECTION 7------------------------------- */}
            {/* map */}
            <section className='hidden'>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.892285649533!2d77.128384141839!3d28.491128988361147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1ee09641bef%3A0x77de0cc8f025a2d!2sLAXYA%20PRODUCTIONS%20PVT.%20LTD.%20%26%20STUDIOS!5e0!3m2!1sen!2sin!4v1732096941617!5m2!1sen!2sin'
                    height={290}
                    style={{ border: 0 }}
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    className='w-full'
                />
            </section>

            <button
                onClick={scrollToTop}
                className={`z-50 backdrop-blur-sm fixed bottom-5 right-5 p-3 rounded-full hover:bg-[#1d3962] bg-transparent text-black hoe border-gray-700 border  text-2xl  duration-300 hover:text-white  shadow-lg transition-opacity ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                ⇡
            </button>
        </div>
    );
};

export default DigitalArinonPage;
