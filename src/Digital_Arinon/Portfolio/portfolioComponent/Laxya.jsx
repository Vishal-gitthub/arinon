import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { PortfolioContext } from '../Context';
import laxyaGrid from '../Portfolio_Images/LaxyaImages/laxya production instagram grid.jpg';
import laxyalogo from '../Portfolio_Images/LaxyaImages/laxyaLogo.png';
import webSS1 from '../Portfolio_Images/LaxyaImages/web-ss-1.png';
import webSS2 from '../Portfolio_Images/LaxyaImages/web-ss-2.png';
import webSS3 from '../Portfolio_Images/LaxyaImages/web-ss-3.png';
import webSS4 from '../Portfolio_Images/LaxyaImages/web-ss-4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Laxya() {
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

    if (!data || !data[1]) return <div>Loading...</div>;

    return (
        <div className='h-auto'>
            <header>
                <div className='relative h-72 max-lg:h-full'>
                    <img
                        src={data[1].BannerImg}
                        className='w-full max-h-full object-cover'
                        alt={`${data[1].name} Banner`}
                    />
                    <div className='absolute inset-0 flex flex-col justify-center items-center bg-black/50 w-full h-full font-bold text-white'>
                        <h1 className='font-custom font-semibold text-3xl max-sm:text-xl'>
                            {data[1].name}
                        </h1>
                        <p className='py-3 text-white/70 text-xl max-sm:text-base'>{data[1].job}</p>
                    </div>
                </div>
            </header>
            <div className='flex max-sm:flex-col justify-center items-start max-sm:items-center gap-10 mx-auto px-5 pt-6 sm:pt-8 md:pt-10 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
                <div className='max-w-80 imgLeft'>
                    <img src={data[1].ClientIcon} alt={`${data[1].name} Logo`} />
                </div>
                <div>
                    <h1 className='font-custom font-semibold text-3xl'>About</h1>
                    <p className='py-8 text-black/80 tracking-wider'>{data[1].description}</p>
                    <div className='flex items-center gap-6'>
                        <a href={data[1].smLinks.facebook}>
                            <i
                                className='hover:text-[#0866ff] transition-all duration-300 fa fa-facebook smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit Facebook'
                                target='_blank'
                                rel='noreferrer'
                            ></i>
                        </a>
                        <a href={data[1].smLinks.instagram} target='_blank' rel='noreferrer'>
                            <i
                                className='hover:text-[#E1306C] transition-all duration-300 fa fa-instagram smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit Instagram'
                            ></i>
                        </a>
                        <a href={data[1].smLinks.youtube} target='_blank' rel='noreferrer'>
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
                            modules={[Navigation, Autoplay]}
                            className='mySwiper'
                        >
                            {[webSS1, webSS2, webSS3, webSS4].map((src, index) => (
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
                        <h1 className='mb-5 font-semibold text-3xl text-gray-800'>What We Did</h1>
                        <ul className='space-y-4 pl-5 text-gray-700 list-disc'>
                            <li>
                                <strong>Website Development:</strong> Designed and developed a fully
                                responsive, visually appealing, and user-friendly website tailored
                                to showcase Laxya Production's creative portfolio and services.
                            </li>
                            <li>
                                <strong>Creative Direction:</strong> Collaborated with the client to
                                ensure the website reflects their brand identity and artistic
                                vision.
                            </li>
                            <li>
                                <strong>Technical Implementation:</strong> Implemented modern web
                                technologies to ensure optimal performance, seamless navigation, and
                                enhanced user experience.
                            </li>
                            <li>
                                <strong>Post-Launch Support:</strong> Provided ongoing support and
                                updates to maintain the website's functionality and relevance.
                            </li>
                        </ul>
                        <a
                            href='https://laxya.net/'
                            title='Visit Laxya'
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

            <h1 className='py-16 font-semibold text-4xl text-center'>Posts We Created for Laxya</h1>
            <div className='flex flex-wrap justify-center items-center gap-10 h-full'>
                {data[1].postsGallery.map((post, index) => (
                    <div key={index}>
                        <div className='w-56 h-56'>
                            <img src={post} className='w-full h-full' alt='' />
                        </div>
                    </div>
                ))}
            </div>
            <h1 className='pt-16 pb-3 font-semibold text-4xl text-center'>Videos and Grids</h1>
            <div className='flex max-sm:flex-col justify-center items-center gap-5 mt-10'>
                <iframe
                    width={300}
                    height={515}
                    src='https://www.youtube.com/embed/3ChenJrAXGg'
                    title='Throwback to TVS Raider Shoot with Laxya Production | Power Meets Style'
                    frameBorder={0}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                />
                <iframe
                    width={300}
                    height={515}
                    src='https://www.youtube.com/embed/OSsKq4r1ZNE'
                    title='Crafting Elegance | Teachers Liquor Shoot by Laxya Productions'
                    frameBorder={0}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                />
                <div className='w-[300px] h-[515px]' title='laxya insta grids'>
                    <img src={laxyaGrid} className='w-full h-full' alt='Laxya Grid' />
                </div>
            </div>
            <div className='flex justify-center items-center my-5 w-full'>
                <div className='inline-flex max-sm:flex-col justify-center items-center gap-5 px-10 py-10 border'>
                    <div className='pr-5 pb-4 border-r max-sm:border-r-0 max-sm:border-b w-48'>
                        <img src={laxyalogo} className='w-full' alt='Laxya Logo' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <a className='font-medium text-2xl'>Laxya Production</a>
                        <a href='https://laxya.net/' className='text-sm underline'>
                            https://laxya.net/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
