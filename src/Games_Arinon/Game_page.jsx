import React, { useEffect } from 'react';

import 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AmazingSlider from './SliderComponent/Slider';
import EffectCoverflowSlider from './SliderComponent/EffectCoverflow';

import playCircle from '../Image_Files/Icons_File/play-circle-svgrepo-com.svg';
import buttonBorderOrange from '../Image_Files/GamesSvgs/buttonBorderOrange.svg';
import buttonBorderBlue from '../Image_Files/GamesSvgs/buttonBorderBlue.svg';
import cardStack1 from '../Image_Files/GamesImages/card_stack_1.jpg';
import cardStack2 from '../Image_Files/GamesImages/card_stack_2.jpg';
import cardStack3 from '../Image_Files/GamesImages/card_stack_3.jpg';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Game_Page.css';
import '../Games_Arinon/SliderComponent/effectCoverFlow.css';
import gsap from 'gsap';
import PopUp from './PopUp';

gsap.registerPlugin(ScrollTrigger);

const gameCards = [
    {
        name: 'Killer Master',
        image: 'https://html.themegenix.com/mykd/assets/img/team/team01.png',
        job: 'Gamer',
    },
    {
        name: 'Tanu Mark',
        image: 'https://html.themegenix.com/mykd/assets/img/team/team02.png',
        job: 'Developer',
    },
    {
        name: 'Thompsom Master',
        image: 'https://html.themegenix.com/mykd/assets/img/team/team03.png',
        job: 'Art Director',
    },
    {
        name: 'Killer',
        image: 'https://html.themegenix.com/mykd/assets/img/team/team04.png',
        job: 'Advisor',
    },
];
const Game_page = () => {
    useEffect(() => {
        const cards = gsap.utils.toArray('.card');
        const spacer = 10;

        cards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: `top-=${index * spacer} top+=11px`, // Adjust this based on your needs
                endTrigger: '.pin-panel',
                end: () => `bottom bottom-=${10}`,
                pin: true,
                pinSpacing: false,
                markers: false, // Keep for debugging
                id: 'card-pin',
                invalidateOnRefresh: false,
                scrub: true,
                onEnter: () => {
                    gsap.to(card, {
                        scale: 0.96,
                        duration: 0.5,
                        ease: 'power1.inOut',
                    });
                },
                onLeaveBack: () => {
                    gsap.to(card, {
                        scale: 1,
                        duration: 0.5,
                        ease: 'power1.inout',
                    });
                },
            });
        });
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
    console.log('Arinon Games is under DEVELOPMENT!');

    return (
        <div className='bg-white w-full h-full'>
            <div className='home pin-panel' id='home'>
                <div className='flex gap-8'>
                    <div className='flex flex-col flex-1 gap-8 cards'>
                        <div className='relative m-auto p-4 w-full h-[90vh] card'>
                            <img
                                className='rounded-md w-full h-full object-cover'
                                src={cardStack1}
                                alt=''
                            />
                            {/* <h1 className='top-2/4 left-2/4 absolute font-extrabold text-[10vw] text-white max-sm:text-[17vw] max-md:text-[15vw] tracking-widest -translate-x-2/4 -translate-y-2/4'>Dummy Content</h1> */}
                        </div>

                        <div className='relative m-auto p-4 w-full h-[90vh] card'>
                            <img
                                className='rounded-md w-full h-full object-cover'
                                src={cardStack2}
                                alt=''
                            />
                            {/* <h1 className='top-2/4 left-2/4 absolute font-extrabold text-[10vw] text-white max-sm:text-[17vw] max-md:text-[15vw] tracking-widest -translate-x-2/4 -translate-y-2/4'>Dummy Content</h1> */}
                        </div>

                        <div className='relative m-auto p-4 w-full h-[90vh] card'>
                            <img
                                className='rounded-md w-full h-full object-cover'
                                src={cardStack3}
                                alt=''
                            />
                            {/* <h1 className='top-2/4 left-2/4 absolute font-extrabold text-[10vw] text-white max-sm:text-[17vw] max-md:text-[15vw] tracking-widest -translate-x-2/4 -translate-y-2/4'>Dummy Content</h1> */}
                        </div>
                    </div>
                </div>
            </div>
            <PopUp />

            {/* <div className='bg-blue-custom pt-10'>
                       
                        <div className='hidden px-5' id='our-games'>
                              <div className='bg-cyan-200 mt-8 px-4 py-16 rounded-2xl'>
                                    <div className='flex justify-between items-center py-6'>
                                          <h1 className='text-4xl'>↳ Our Games</h1>
                                          <div className='bg-violet-500 hover:bg-blue-600 px-4 py-2 rounded-md text-black hover:text-white transition-all duration-300'>View More →</div>
                                    </div>
                                    <hr />
                                    <div>

                                          <div className='flex justify-between items-baseline py-5'>
                                                <p className='text-2xl max-sm:text-lg max-md:text-xl'>01.</p>
                                                <div className='font-bold text-5xl max-sm:text-2xl max-md:text-3xl'>GAME NAME 1</div>
                                                <div className='text-2xl'>Game logo</div>
                                          </div>
                                          <hr />
                                          <div className='flex justify-between items-baseline py-5'>
                                                <p className='text-2xl max-sm:text-lg max-md:text-xl'>02.</p>
                                                <div className='font-bold text-5xl max-sm:text-2xl max-md:text-3xl'>GAME NAME 2</div>
                                                <div className='text-2xl'>Game logo</div>
                                          </div>
                                          <hr />
                                          <div className='flex justify-between items-baseline py-5'>
                                                <p className='text-2xl max-sm:text-lg max-md:text-xl'>03.</p>
                                                <div className='font-bold text-5xl max-sm:text-2xl max-md:text-3xl'>GAME NAME 3</div>
                                                <div className='text-2xl'>Game logo</div>
                                          </div>
                                          <hr />
                                          <div className='flex justify-between items-baseline py-5'>
                                                <p className='text-2xl max-sm:text-lg max-md:text-xl'>04.</p>
                                                <div className='font-bold text-5xl max-sm:text-2xl max-md:text-3xl'>GAME NAME 4</div>
                                                <div className='text-2xl'>Game logo</div>
                                          </div>
                                          <hr />
                                    </div>
                              </div>

                        </div>

                        <div className='hidden px-5 py-6'>
                              <div className='bg-[#1a1b1e] pb-14 rounded-2xl' >

                                    <div className='flex max-md:flex-col px-7 py-16'>

                                          <div className='w-2/4 max-md:w-full text-center'>
                                                <div className='relative'>
                                                      <div>
                                                            <img src="https://uithemez.com/i/hubfolio_HTML/creative-studio/assets/imgs/testim/Vector_Cricle_Text.svg" alt="" />
                                                      </div>
                                                      <div className='top-2/4 right-2/4 absolute w-[100px] -translate-x-2/4 -translate-y-2/4'>
                                                            <img src={qoutes} alt="" />
                                                      </div>
                                                </div>
                                          </div>

                                          <div className='w-2/4 max-md:w-full'>
                                                <div className="pt-10 w-full h-52 md:h-72 text-white">
                                                      <Slider {...carouselSettings}>
                                                            <div className="h-full">
                                                                  <h1 className='py-3 text-2xl max-sm:text-xl'>" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam aperiam, sint recusandae dolore laborum. Eaque laboriosam dolorem rerum assumenda. "</h1>
                                                                  <hr />
                                                                  <div className='flex items-center gap-9 py-4'>
                                                                        <div className='w-12 h-12'>
                                                                              <img src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-[50%] w-full h-full' alt="" />
                                                                        </div>
                                                                        <div >
                                                                              <h1>John Doe</h1>
                                                                              <p>Ceo</p>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                            <div className="h-full">
                                                                  <h1 className='py-3 text-2xl max-sm:text-xl'>" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam aperiam, sint recusandae dolore laborum. Eaque laboriosam dolorem rerum assumenda. "</h1>
                                                                  <hr />
                                                                  <div className='flex items-center gap-9 py-4'>
                                                                        <div className='w-12 h-12'>
                                                                              <img src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-[50%] w-full h-full' alt="" />
                                                                        </div>
                                                                        <div >
                                                                              <h1>John Doe</h1>
                                                                              <p>Ceo</p>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                            <div className="h-full">
                                                                  <h1 className='py-3 text-2xl max-sm:text-xl'>" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam aperiam, sint recusandae dolore laborum. Eaque laboriosam dolorem rerum assumenda. "</h1>
                                                                  <hr />
                                                                  <div className='flex items-center gap-9 py-4'>
                                                                        <div className='w-12 h-12'>
                                                                              <img src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-[50%] w-full h-full' alt="" />
                                                                        </div>
                                                                        <div >
                                                                              <h1>John Doe</h1>
                                                                              <p>Ceo</p>
                                                                        </div>

                                                                  </div>
                                                            </div>

                                                      </Slider>
                                                </div>
                                          </div>


                                    </div>
                                    <div className='px-7 py-8 max-sm:py-28 text-white'>
                                          <h1 className='text-4xl'>↳ Partner with +150 brands</h1>
                                          <div className='flex flex-wrap justify-between pt-14'>
                                                <div className='border-[#c9c8c72b] hover:bg-[#59595945] px-8 py-12 border rounded-[80px] text-lg'>icon1-------</div>
                                                <div className='border-[#c9c8c72b] hover:bg-[#59595945] px-8 py-12 border rounded-[80px] text-lg'>icon2-------</div>
                                                <div className='border-[#c9c8c72b] hover:bg-[#59595945] px-8 py-12 border rounded-[80px] text-lg'>icon3-------</div>
                                                <div className='border-[#c9c8c72b] hover:bg-[#59595945] px-8 py-12 border rounded-[80px] text-lg'>icon4-------</div>
                                                <div className='border-[#c9c8c72b] hover:bg-[#59595945] px-8 py-12 border rounded-[80px] text-lg'>icon5-------</div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div> */}

            {/* <================================================================================================> */}

            {/* <========================== Cards Section START ===================================> */}
            <section className='bg-white py-14'>
                <div className='flex flex-wrap justify-center gap-6'>
                    <div className='inline-flex max-sm:flex-col items-center gap-5 border-[#4c4c4c80] bg-transparent max-sm:mx-6 p-6 border hover:border-blue-custom rounded-lg bg-coloring max-sm:w-full text-white transition-all duration-300'>
                        <div className='m-6 min-w-[150px] max-w-[170px]'>
                            <img
                                className='rounded-md'
                                src='https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img01.jpg'
                                alt=''
                            />
                        </div>

                        <div className='flex flex-col items-start max-sm:items-center gap-3 w-full'>
                            <h1 className='font-semibold text-xl uppercase'>Wolf Gaming art</h1>
                            <div className='flex items-center gap-2'>
                                <img
                                    src='https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar.png'
                                    alt=''
                                />{' '}
                                <span>Alax Max</span>{' '}
                                <span className='border- pl-2 border-l font-semibold text-gray-400 text-xs tracking-wide'>
                                    CREATOR
                                </span>
                            </div>
                            <div className='flex justify-between items-center border-[#4c4c4c80] py-[14px] pr-[15px] pl-[20px] border rounded-lg w-full text-lg'>
                                <div className='flex flex-shrink-0 gap-1'>
                                    <span>100.2</span> <span className='text-[#f37c20]'>ETH</span>
                                </div>
                                <div className='bg-[#1d3962] hover:bg-[#f37c20] ml-8 px-[14px] py-[11px] rounded-md text-[18px] leading-none transition-all duration-300'>
                                    <a>Bid </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='inline-flex max-sm:flex-col items-center gap-5 border-[#4c4c4c80] bg-transparent max-sm:mx-6 p-6 border hover:border-blue-custom rounded-lg bg-coloring max-sm:w-full text-white transition-all duration-300'>
                        <div className='m-6 min-w-[150px] max-w-[170px]'>
                            <img
                                className='rounded-md'
                                src='https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img02.jpg'
                                alt=''
                            />
                        </div>

                        <div className='flex flex-col items-start gap-3 w-full'>
                            <h1 className='font-semibold text-xl uppercase'>Forest Princess</h1>
                            <div className='flex items-center gap-2'>
                                <img
                                    src='https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar.png'
                                    alt=''
                                />{' '}
                                <span>Alax Max</span>{' '}
                                <span className='border- pl-2 border-l font-semibold text-gray-400 text-xs tracking-wide'>
                                    CREATOR
                                </span>
                            </div>
                            <div className='flex justify-between items-center border-[#4c4c4c80] py-[14px] pr-[15px] pl-[20px] border rounded-lg w-full text-lg'>
                                <div className='flex flex-shrink-0 gap-1'>
                                    <span>100.2</span> <span className='text-[#f37c20]'>ETH</span>
                                </div>
                                <div className='bg-[#f37c20] hover:bg-[#1d3962] ml-8 px-[14px] py-[11px] rounded-md text-[18px] leading-none transition-all duration-300'>
                                    <a>Bid </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='inline-flex max-sm:flex-col items-center gap-5 border-[#4c4c4c80] bg-transparent max-sm:mx-6 p-6 border hover:border-blue-custom rounded-lg bg-coloring max-sm:w-full text-white transition-all duration-300'>
                        <div className='m-6 min-w-[150px] max-w-[170px]'>
                            <img
                                className='rounded-md'
                                src='https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img03.jpg'
                                alt=''
                            />
                        </div>

                        <div className='flex flex-col items-start gap-3 w-full'>
                            <h1 className='font-semibold text-xl uppercase'>Girl firefly art</h1>
                            <div className='flex items-center gap-2'>
                                <img
                                    src='https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar.png'
                                    alt=''
                                />{' '}
                                <span>Alax Max</span>{' '}
                                <span className='border- pl-2 border-l font-semibold text-gray-400 text-xs tracking-wide'>
                                    CREATOR
                                </span>
                            </div>
                            <div className='flex justify-between items-center border-[#4c4c4c80] py-[14px] pr-[15px] pl-[20px] border rounded-lg w-full text-lg'>
                                <div className='flex flex-shrink-0 gap-1'>
                                    <span>100.2</span> <span className='text-[#f37c20]'>ETH</span>
                                </div>
                                <div className='bg-[#1d3962] hover:bg-[#f37c20] ml-8 px-[14px] py-[11px] rounded-md text-[18px] leading-none transition-all duration-300'>
                                    <a>Bid </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <========================== Cards Section ENDS ===================================> */}

            {/* <========================== About-Us Section START ===================================> */}
            <section className='bg-blue-custom mt-12 py-32 text-white about-us-BG'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-5xl text-center uppercase'>
                        Top Rated Steamers
                    </h1>
                    <p className='clipedUnderline' />

                    <div className='flex flex-wrap gap-4 pt-16'>
                        <div>
                            <a
                                href='#'
                                className='relative hover:bg-[#f37c20] px-5 py-[0.6rem] font-bold text-xl hover:text-black tracking-wider transition-all duration-300'
                            >
                                BUY HERO
                                <img
                                    className='top-0 left-0 absolute'
                                    src={buttonBorderOrange}
                                    alt=''
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href='#'
                                className='relative hover:bg-blue-custom px-5 py-[0.6rem] font-bold text-xl hover:text-black tracking-wider transition-all duration-300'
                            >
                                BUY NFTS
                                <img
                                    className='top-0 left-0 absolute'
                                    src={buttonBorderBlue}
                                    alt=''
                                />
                            </a>
                        </div>
                    </div>

                    <div className='relative hr-custom-line mt-12 w-full text-center'>
                        <div className='py-7'>
                            <div className='flex flex-wrap justify-center gap-9'>
                                <div className='inline-flex img-custom-border'>
                                    <div className='img-custom-border2'>
                                        <img
                                            src='https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab01.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='inline-flex img-custom-border'>
                                    <div className='img-custom-border2'>
                                        <img
                                            src='https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab02.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='inline-flex img-custom-border'>
                                    <div className='img-custom-border2'>
                                        <img
                                            src='https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab03.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='inline-flex img-custom-border'>
                                    <div className='img-custom-border2'>
                                        <img
                                            src='https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab04.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='inline-flex img-custom-border'>
                                    <div className='img-custom-border2'>
                                        <img
                                            src='https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab05.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='inline-flex img-custom-border'>
                                    <div className='img-custom-border2'>
                                        <img
                                            src='https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab06.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    {/* GAME NAME CARD  */}
                    <div className='flex lg:flex-row flex-col lg:space-x-10 space-y-8 lg:space-y-0 px-10 pt-10 text-center text-white lg:text-left'>
                        <div className='px-5 w-full lg:w-1/2'>
                            <img
                                className='rounded-lg w-full h-full object-cover'
                                src='https://themedox.com/mykd/wp-content/uploads/2023/10/about_img01.jpg'
                                alt='About Image'
                            />
                        </div>

                        <div className='flex flex-col space-y-8'>
                            <div className='flex lg:flex-row max-sm:flex-col justify-between items-start max-md:items-center space-y-5 lg:space-y-0'>
                                <div className='flex flex-col gap-3 px-5'>
                                    <h1 className='font-semibold text-4xl'>HUMAN GAME</h1>
                                    <span className='font-semibold text-2xl text-orange-custom'>
                                        RATE 50%
                                    </span>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Itaque quaerat facere nobis dolor tempore repellat veritatis
                                        voluptas iure blanditiis vel!
                                    </p>
                                </div>

                                <div className='flex flex-col flex-shrink-0 space-y-4'>
                                    <div className='flex justify-start items-center px-3 py-2 rounded-lg humanGame-sideButton'>
                                        <img
                                            className='mr-2'
                                            src='https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon01.png'
                                            alt='Icon 1'
                                        />
                                        <p>Chichi Dragon Ball</p>
                                    </div>
                                    <div className='flex justify-start items-center px-3 py-2 rounded-lg humanGame-sideButton'>
                                        <img
                                            className='mr-2'
                                            src='https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon01.png'
                                            alt='Icon 2'
                                        />
                                        <p>Chichi Dragon Ball</p>
                                    </div>
                                    <div className='flex justify-start items-center px-3 py-2 rounded-lg humanGame-sideButton'>
                                        <img
                                            className='mr-2'
                                            src='https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon01.png'
                                            alt='Icon 3'
                                        />
                                        <p>Chichi Dragon Ball</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex max-sm:flex-col gap-5 pt-5'>
                                <button className='humanGame-bottomButton px-8 py-6 w-full lg:w-auto'>
                                    DRAGON BALL
                                </button>
                                <button className='humanGame-bottomButton px-8 py-6 w-full lg:w-auto'>
                                    NFT MARKET
                                </button>
                                <button className='humanGame-bottomButton px-8 py-6 w-full lg:w-auto'>
                                    SUPPORT
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='hr-custom-line' />
                    <AmazingSlider />
                </section>
            </section>
            {/* <========================== About-Us Section ENDS ===================================> */}

            {/* <========================== Our Teams Section Starts ===================================> */}
            <section className='pb-20 playerCardsBg'>
                <div className='place-items-center grid-cols-1 grid-rows-1 m-auto py-16 text-black text-center uppercase'>
                    <h1 className='py-5 font-bold text-orange-custom text-sm tracking-wider'>
                        our Team Member
                    </h1>
                    <h1 className='font-bold text-5xl'>ACTIVE TEAM MEMBERS</h1>
                    <p className='clipedUnderline' />
                </div>

                <div className='flex flex-wrap flex-grow justify-center items-center gap-10'>
                    {gameCards.map((players, index) => (
                        <div className='flex justify-center items-center' key={index}>
                            <div className='bg-black px-5 py-10 rounded-lg overflow-hidden'>
                                <div>
                                    <div className='relative teamCard'>
                                        <div className='relative imgWrapper'>
                                            <div className='border-[3px] rounded-full img-thumb'>
                                                <img src={players.image} alt='' />
                                            </div>
                                        </div>
                                        <div className='pt-5 text-center'>
                                            <h1 className='font-semibold text-2xl text-white'>
                                                {players.name}
                                            </h1>
                                            <p className='font-semibold text-orange-custom text-xl'>
                                                {players.job}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* <================================================================================================> */}

            {/* <==================================== Discord Community ==========================================> */}
            <section className='flex flex-col justify-center items-center text-center text-white community_bg'>
                <div>
                    <img src={playCircle} alt='' />
                </div>
                <div className='pt-5'>
                    <h1 className='font-bold text-6xl'>
                        JOIN THE <span className='text-orange-custom'> COMMUNITY</span>
                    </h1>
                    <p className='font-semibold text-lg tracking-wider'>
                        Join our Discord community and choosec onsteur
                    </p>
                </div>
                <div className='mt-4 border rounded-full'>
                    <button
                        aria-label='Join the Community'
                        className='inline-flex relative justify-center items-center bg-blue-custom hover:bg-[#a62d7a] px-6 py-3 rounded-full font-medium text-white transition-all group'
                    >
                        <span className='group-hover:text-white relative text-white'>Submit</span>
                    </button>
                </div>
            </section>
            <section className='bg-blue-custom pt-20 select-none'>
                <h1 className='flex items-center gap-3 px-8 font-bold text-4xl text-left text-white'>
                    OUR LATEST CREATIONS
                    <span>
                        {' '}
                        <img
                            src='https://html.themegenix.com/mykd/assets/img/icons/fire.png'
                            alt=''
                            className='w-8'
                        />
                    </span>
                </h1>
                <EffectCoverflowSlider />
            </section>

            {/* <================================================================================================> */}
        </div>
    );
};

export default Game_page;
