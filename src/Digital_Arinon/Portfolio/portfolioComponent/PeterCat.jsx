import React, { useContext, useEffect } from 'react';

import gsap from 'gsap';
import { PortfolioContext } from '../Context';
import pc_grid from '../Portfolio_Images/peterCatImages/pc_grid.webp';
import pc_grid2 from '../Portfolio_Images/peterCatImages/peterCatgrid.jpg';

export default function peterCat() {
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
                        src={data[3].BannerImg}
                        className='w-full max-h-full object-cover'
                        alt=''
                    />
                    <div className='absolute inset-0 flex flex-col justify-center items-center bg-black/50 w-full h-full font-bold text-white'>
                        <h1 className='font-custom font-semibold text-3xl max-sm:text-xl'>
                            {data[3].name}
                        </h1>
                        <p className='py-3 text-white/70 text-xl max-sm:text-base'>{data[3].job}</p>
                    </div>
                </div>
            </header>

            <div className='flex max-sm:flex-col justify-center items-start max-sm:items-center gap-10 mx-auto px-5 pt-6 sm:pt-8 md:pt-10 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12'>
                <div className='max-w-80 imgLeft'>
                    <img src={data[3].ClientIcon} alt='' />
                </div>
                <div>
                    <h1 className='font-custom font-semibold text-3xl'>About</h1>

                    <p className='py-8 text-black/80 tracking-wider'>{data[3].description}</p>
                    <div className='flex items-center gap-6'>
                        <a href={data[3].smLinks.facebook}>
                            <i
                                className='hover:text-[#0866ff] transition-all duration-300 fa fa-facebook smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit Facebook'
                                target='_blank'
                                rel='noreferrer'
                            ></i>
                        </a>
                        <a href={data[3].smLinks.instagram} target='_blank' rel='noreferrer'>
                            <i
                                className='hover:text-[#E1306C] transition-all duration-300 fa fa-instagram smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit Instagram'
                            ></i>
                        </a>
                        <a href={data[3].smLinks.youtube} target='_blank' rel='noreferrer'>
                            <i
                                className='hover:text-red-600 transition-all duration-300 fa fa-youtube-play smIcons'
                                style={{ fontSize: '2rem' }}
                                title='Visit YouTube'
                            ></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-10 mx-auto px-5 pt-6 sm:pt-8 md:pt-10 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 h-full'>
                {/* <div className='mx-auto py-10 max-w-80'>
                    <img src={pc_grid3} className='w-full h-full' alt='' />
                </div> */}

                <div className='mx-auto py-10 max-w-80'>
                    <img className='w-full h-full' src={pc_grid} alt='' />
                </div>
                <div className='mx-auto py-10 max-w-80'>
                    <img className='w-full h-full' src={pc_grid2} alt='' />
                </div>
            </div>

            <div className='flex justify-center items-center my-5 w-full'>
                <div className='inline-flex justify-center items-center gap-5 px-10 py-10 border'>
                    <div className='pr-5 border-r w-48'>
                        <img src={data[3].ClientIcon} className='w-full' alt='' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <a className='font-medium text-2xl'>Peter Cat</a>
                        <a href='https://www.petercat.com.au/' className='text-sm underline'>
                            https://www.petercat.com.au/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
