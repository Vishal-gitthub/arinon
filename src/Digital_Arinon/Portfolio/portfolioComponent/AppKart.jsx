import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { PortfolioContext } from '../Context';
import webss1 from '../Portfolio_Images/AppKart/web.png';
import webss2 from '../Portfolio_Images/AppKart/web2.png';
import webss3 from '../Portfolio_Images/AppKart/web3.png';
import webss4 from '../Portfolio_Images/AppKart/web4.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import PortfolioSlider from '../PortfolioSlider';
import PortfolioNavbar from '../PortfolioNavbar';
export default function AppKart() {
    const { data } = useContext(PortfolioContext);
    console.log(data);

    useEffect(() => {
        gsap.fromTo(
            '.imgLeft',
            {
                x: '-100%',
                opacity: 0,
            },
            { x: '0%', opacity: 1, duration: 1.5, ease: 'ease.out', delay: 0.2 },
        );
        gsap.fromTo(
            '.smIcons',
            {
                y: '100%',
                opacity: 0,
            },
            { y: '0%', opacity: 1, duration: 1.5, ease: 'ease.in' },
        );
    }, []);
    return (
        <div>
            <PortfolioNavbar />
            <header>
                <div className='relative h-72 max-lg:h-full'>
                    <img
                        src={data[6].BannerImg}
                        className='w-full max-h-full object-cover'
                        alt=''
                    />
                    <div className='absolute inset-0 flex flex-col justify-center items-center bg-black/50 w-full h-full font-bold text-white'>
                        <h1 className='font-custom font-semibold text-3xl max-sm:text-xl'>
                            {data[6].name}
                        </h1>
                        <p className='py-3 text-white/70 text-xl max-sm:text-base'>{data[6].job}</p>
                    </div>
                </div>
            </header>

            <div className='flex max-sm:flex-col justify-center items-center max-sm:items-center gap-10 mx-auto px-5 pt-6 sm:pt-8 md:pt-10 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
                <div className='min-w-40 max-w-96 imgLeft'>
                    <img src={data[6].ClientIcon} className='w-full invert' alt='' />
                </div>
                <div>
                    <h1 className='font-custom font-semibold text-3xl'>About</h1>

                    <p className='py-8 text-black/80 tracking-wider'>{data[6].description}</p>
                    <div className='flex items-center gap-6'>
                        <a href={data[6].smLinks.facebook}>
                            <i
                                className='hover:text-[#0866ff] transition-all duration-300 fa fa-facebook smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit Facebook'
                                target='_blank'
                                rel='noreferrer'
                            ></i>
                        </a>
                        <a href={data[6].smLinks.instagram} target='_blank' rel='noreferrer'>
                            <i
                                className='hover:text-[#E1306C] transition-all duration-300 fa fa-instagram smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit Instagram'
                            ></i>
                        </a>
                        <a href={data[6].smLinks.youtube} target='_blank' rel='noreferrer'>
                            <i
                                className='hover:text-red-600 transition-all duration-300 fa fa-youtube-play smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit YouTube'
                            ></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className='px-10 py-20'>
                <div className='flex md:flex-row flex-col justify-center items-center gap-10 bg-white shadow-2xl shadow-stone-200 px-5 py-10 rounded-lg w-full'>
                    <div className='relative w-full md:w-7/12 lg:w-7/12 min-w-[16rem]'>
                        <Swiper
                            navigation={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            effect={'fade'}
                            modules={[EffectFade, Autoplay, Navigation]}
                            className='mySwiper'
                        >
                            {[webss1, webss2, webss3, webss4].map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div>
                                        <img
                                            src={src}
                                            alt={`Web Screenshot ${index + 1}`}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className='mx-auto px-5 pt-6 sm:pt-8 md:pt-10 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
                        <h1 className='mb-4 font-semibold text-3xl'>
                            What We Do for Appkart: Game Development co.
                        </h1>
                        <ul className='space-y-4 pl-5 text-gray-700 list-disc'>
                            <li>
                                <strong>Website Development:</strong>We designed an engaging,
                                user-friendly website for Appkart, focusing on smooth navigation and
                                an immersive experience for gamers. The site showcases their games,
                                features, and news, ensuring a captivating journey for visitors.
                            </li>
                            <li>
                                <strong>Website Hosting & SEO:</strong>We manage Appkart’s website
                                hosting to ensure fast load times, high security, and reliable
                                performance. Our SEO optimization helps improve search engine
                                rankings, attracting more gamers to the platform.
                            </li>
                            <li>
                                <strong>Content Management System (CMS):</strong>We integrated an
                                easy-to-use CMS, allowing Spacify to update and manage their website
                                content effortlessly, keeping it fresh and relevant.
                            </li>
                            <li>
                                <strong>Contact & Support System:</strong>We implemented a
                                user-friendly contact system, making it simple for players to reach
                                out for support, inquiries, or technical assistance. This ensures
                                quick and responsive communication with their community.
                            </li>
                        </ul>
                        <a
                            href='https://appkartstudio.com/'
                            title='Visit https://appkartstudio.com/'
                            className='flex items-baseline py-5 text-gray-500 text-xs hover:text-red-600 transition-all duration-300'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                                width='18'
                                height='18'
                                className='transition-all duration-300 fill-current hover:fill-red-600'
                            >
                                <path d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z' />
                            </svg>
                            <span className='pl-2'>🔴Live</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div>
                <h1 className='py-5 font-custom font-semibold text-3xl text-center'>
                    We Designed T-Shirt
                </h1>
                <div className='flex flex-wrap justify-center items-center gap-10 w-full'>
                    {data[6].teesDesign.map((design, index) => (
                        <div className='min-w-64 max-w-96' key={index}>
                            <img src={design} className='w-full' alt='' />
                        </div>
                    ))}
                </div>
            </div> */}

            <div className='flex justify-center items-center my-5 w-full'>
                <div className='inline-flex max-sm:flex-col justify-center items-center gap-5 px-10 py-10 border'>
                    <div className='pr-5 border-r max-sm:border-r-0 max-sm:border-b w-48'>
                        <img src={data[6].ClientIcon} className='w-full invert' alt='' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <a className='font-medium text-2xl'>AppKart</a>
                        <a href='https://appkartstudio.com/' className='text-sm underline'>
                            https://appkartstudio.com/
                        </a>
                    </div>
                </div>
            </div>
            <PortfolioSlider />
        </div>
    );
}
