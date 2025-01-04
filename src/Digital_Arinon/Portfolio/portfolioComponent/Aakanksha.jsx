import React, { useContext, useEffect } from 'react';

import gsap from 'gsap';
import { PortfolioContext } from '../Context';
import IgReel from '../InstaPostEmbed/AakankshaReel';
import IgReel2 from '../InstaPostEmbed/AakankshaReel2';

export default function Aakanksha() {
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
            <header>
                <div className='relative h-72 max-lg:h-full'>
                    <img
                        src={data[0].BannerImg}
                        className='w-full max-h-full object-cover'
                        alt=''
                    />
                    <div className='absolute inset-0 flex flex-col justify-center items-center bg-black/50 w-full h-full font-bold text-white'>
                        <h1 className='font-custom font-semibold text-3xl max-sm:text-xl'>
                            {data[0].name}
                        </h1>
                        <p className='py-3 text-white/70 text-xl max-sm:text-base'>{data[0].job}</p>
                    </div>
                </div>
            </header>

            <div className='flex max-sm:flex-col justify-center items-start max-sm:items-center gap-10 mx-auto px-5 pt-6 sm:pt-8 md:pt-10 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
                <div className='max-w-80 imgLeft'>
                    <img src={data[0].ClientIcon} alt='' />
                </div>
                <div>
                    <h1 className='font-custom font-semibold text-3xl'>About</h1>

                    <p className='py-8 text-black/80 tracking-wider'>{data[0].description}</p>
                    <div className='flex items-center gap-6'>
                        <a href={data[0].smLinks.facebook}>
                            <i
                                className='hover:text-[#0866ff] transition-all duration-300 fa fa-facebook smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit Facebook'
                                target='_blank'
                                rel='noreferrer'
                            ></i>
                        </a>
                        <a href={data[0].smLinks.instagram} target='_blank' rel='noreferrer'>
                            <i
                                className='hover:text-[#E1306C] transition-all duration-300 fa fa-instagram smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit Instagram'
                            ></i>
                        </a>
                        <a href={data[0].smLinks.youtube} target='_blank' rel='noreferrer'>
                            <i
                                className='hover:text-red-600 transition-all duration-300 fa fa-youtube-play smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit YouTube'
                            ></i>
                        </a>
                    </div>
                </div>
            </div>
            <h1 className='py-16 font-semibold text-4xl text-center'>
                Thumbnails We Created for Aakanksha
            </h1>
            <div className='flex flex-wrap justify-center items-center gap-10 h-full'>
                {data[0].thumbnails.map((post, index) => (
                    <div key={index}>
                        <div className='w-72 h-56'>
                            <img src={post} className='w-full h-full' alt='' />
                        </div>
                    </div>
                ))}
            </div>

            <h1 className='pt-16 font-semibold text-4xl text-center'>Youtube Shorts</h1>

            <div className='flex flex-wrap justify-center items-center gap-5 my-16'>
                <iframe
                    width={300}
                    height={515}
                    src='https://www.youtube.com/embed/sGQhC2sMuAM'
                    title='Dear 25-Year-Old Me: The Amazing News You Need to Hear!'
                    frameBorder={0}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen=''
                    className='rounded-md'
                />
                <iframe
                    width={300}
                    height={515}
                    src='https://www.youtube.com/embed/wTaF1PEribk'
                    title='Dear 25-Year-Old Me: The Amazing News You Need to Hear!'
                    frameBorder={0}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen=''
                    className='rounded-md'
                />
                <iframe
                    width={300}
                    height={515}
                    src='https://www.youtube.com/embed/ebb2EomhtWQ'
                    title='Dear 25-Year-Old Me: The Amazing News You Need to Hear!'
                    frameBorder={0}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen=''
                    className='rounded-md'
                />
                <iframe
                    width={300}
                    height={515}
                    src='https://www.youtube.com/embed/aMxOQymM6WA'
                    title='Dear 25-Year-Old Me: The Amazing News You Need to Hear!'
                    frameBorder={0}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen=''
                    className='rounded-md'
                />
            </div>
            <h1 className='pt-16 font-semibold text-4xl text-center'>
                Most Viral Reels Created By Us
            </h1>
            <div className='flex justify-center items-center gap-9 my-5 w-full'>
                <IgReel />
                <IgReel2 />
            </div>
        </div>
    );
}
