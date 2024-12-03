import React, { useState, useEffect } from 'react'
import qoutes from "../Image_Files/Icons_File/quotes-svgrepo-com.svg"
import Slider from "react-slick";
import logo from "../Assets/Logo/Arinon_Games-02.png"
import "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import listIcon from "../Image_Files/Icons_File/hamburger.svg"
import cross from "../Image_Files/Icons_File/cross-2-white.svg"
import gsap from 'gsap';
import "./Game_Page.css"
import buttonBorderOrange from "../Image_Files/GamesSvgs/buttonBorderOrange.svg"
import buttonBorderBlue from "../Image_Files/GamesSvgs/buttonBorderBlue.svg"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Game_page = () => {
      let carouselSettings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
      };
      let [widthState, setWidthState] = useState(false);

      function menuBtn() {
            setWidthState(!widthState);
      }

      function menuCloseBtn() {
            setWidthState(!widthState);
      }

      useEffect(() => {
            const cards = gsap.utils.toArray(".card");
            const spacer = 20;

            cards.forEach((card, index) => {
                  ScrollTrigger.create({
                        trigger: card,
                        start: `top-=${index * spacer} top+=10px`, // Adjust this based on your needs
                        endTrigger: '.pin-panel',
                        end: `bottom top+=${550 + (cards.length * spacer)}`,
                        pin: true,
                        pinSpacing: false,
                        markers: false, // Keep for debugging
                        id: 'card-pin',
                        invalidateOnRefresh: true,
                        onEnter: () => {
                              gsap.to(card, {
                                    scale: 0.96,
                                    duration: 0.5,
                                    ease: "power1.inOut"
                              })
                        },
                        onLeaveBack: () => {
                              gsap.to(card, {
                                    scale: 1,
                                    duration: 0.5,
                                    ease: "power1.inout"
                              })
                        }

                  });
            });

            return () => {
                  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
      }, []);

      return (
            <div className='w-full h-full bg-black'>
                  <header className="sticky top-0  z-40">
                        <nav
                              className="backdrop-blur-sm py-5 px-8 flex items-center justify-between bg-[#00000038]"
                        >

                              <div className="w-32">
                                    <img src={logo} alt="" className="w-full" />
                              </div>

                              <div className="flex gap-4 max-md:hidden text-white">

                                    <a href="#home">
                                          Home
                                    </a>

                                    <a href="#our-games">
                                          Our Games
                                    </a>

                                    <a href="#about-us">
                                          About Us
                                    </a>

                                    <a href="#contact">
                                          Support
                                    </a>

                              </div>

                              <div className="hidden max-md:block">
                                    <button onClick={menuBtn}>
                                          <img src={listIcon} alt="" />
                                    </button>
                              </div>

                        </nav>

                        <div
                              id="sidebar"
                              className={`flex flex-col fixed h-full top-0 right-0 transition-transform duration-300 z-50 ${widthState ? "translate-x-0" : "translate-x-full"
                                    } text-white max-md:w-64 bg-[#00000038] backdrop-blur-md `}
                        >
                              <button onClick={menuCloseBtn} className="p-4 grid place-items-center">
                                    <img src={cross} alt="" />
                              </button>

                              <a href="#home" className="py-3 hover:bg-[#00000038]  hover:backdrop-blur-md hover:text-white rounded-2xl mx-2 px-4 text-xl"
                              >
                                    Home
                              </a>

                              <a href="#our-games"
                                    className="py-3 hover:bg-[#00000038]  hover:backdrop-blur-md hover:text-white rounded-2xl mx-2 px-4 text-xl"
                              >
                                    Our Games                              </a>

                              <a href="#about-us"
                                    className="py-3 hover:bg-[#00000038]  hover:backdrop-blur-md hover:text-white rounded-2xl mx-2 px-4 text-xl"
                              >
                                    About Us
                              </a>
                              <a href="#contact"
                                    className="py-3 hover:bg-[#00000038]  hover:backdrop-blur-md hover:text-white rounded-2xl mx-2 px-4 text-xl"
                              >

                                    Support
                              </a>

                        </div>

                  </header>

                  <div className="home pin-panel">
                        <div className="flex gap-8">

                              <div className='cards flex-1 flex flex-col gap-8'>
                                    <div className='w-full h-[90vh] relative   m-auto p-4 card'>
                                          <img className='w-full h-full object-cover rounded-md' src="https://uithemez.com/i/hubfolio_HTML/creative-studio/assets/imgs/works/1.jpg" alt="" />
                                          <h1 className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[10vw] max-md:text-[15vw] max-sm:text-[17vw] text-white font-extrabold tracking-widest'>Dummy Content</h1>
                                    </div>

                                    <div className='w-full h-[90vh] relative   m-auto p-4 card'>
                                          <img className='w-full h-full object-cover  rounded-md' src="https://uithemez.com/i/hubfolio_HTML/creative-studio/assets/imgs/works/2.jpg" alt="" />
                                          <h1 className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[10vw] max-md:text-[15vw] max-sm:text-[17vw] text-white font-extrabold tracking-widest'>Dummy Content</h1>
                                    </div>

                                    <div className='w-full h-[90vh] relative   m-auto p-4 card'>
                                          <img className='w-full h-full object-cover  rounded-md' src="https://uithemez.com/i/hubfolio_HTML/creative-studio/assets/imgs/works/4.jpg" alt="" />
                                          <h1 className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-[10vw] max-md:text-[15vw] max-sm:text-[17vw] text-white font-extrabold tracking-widest'>Dummy Content</h1>
                                    </div>
                              </div>

                        </div>

                  </div>

                  <div className='pt-10 max-sm:pt-0 max-md:pt-20 max-lg:pt-1 max-xl:pt-8 max-2xl:pt-8 max-[2560px]:pt-96'>
                        <div id='about-us'>
                              <div className='flex justify-between px-5 text-white py-10'>
                                    <h1 className='text-4xl'>About Us ⏎</h1>
                                    <div className='bg-violet-500 hover:bg-blue-600 duration-300 transition-all text-black hover:text-white py-2 px-4 rounded-md'>View More →</div>
                              </div>

                        </div>
                        <hr />

                        <div className='flex justify-end max-md:justify-center text-white py-10'>
                              <div className='w-3/4'>
                                    <h1 className='text-2xl max-md:text-2xl '>At Arinon Games, we are passionate about creating immersive, captivating gaming experiences. As a leading game publisher and developer, we specialize in bringing innovative game concepts to life. From strategic development to marketing, we guide each project through every stage to ensure it reaches its full potential.
                                          <br />
                                          <p className='pt-2'>

                                                Our team combines creativity, technology, and industry expertise to craft games that engage, entertain, and inspire players worldwide. Whether you're looking to publish a game or develop a new concept, Arinon Games is dedicated to delivering exceptional experiences that resonate with audiences and stand out in the gaming
                                          </p>
                                    </h1>
                              </div>
                        </div>

                        <div className='px-5 hidden' id='our-games'>
                              <div className='px-4 rounded-2xl bg-cyan-200 py-16 mt-8'>
                                    <div className='flex justify-between items-center py-6'>
                                          <h1 className='text-4xl'>↳ Our Games</h1>
                                          <div className='bg-violet-500 hover:bg-blue-600 duration-300 transition-all text-black hover:text-white py-2 px-4 rounded-md'>View More →</div>
                                    </div>
                                    <hr />
                                    <div>

                                          <div className='flex justify-between items-baseline py-5'>
                                                <p className='text-2xl max-md:text-xl max-sm:text-lg'>01.</p>
                                                <div className='text-5xl max-md:text-3xl max-sm:text-2xl  font-bold'>GAME NAME 1</div>
                                                <div className='text-2xl'>Game logo</div>
                                          </div>
                                          <hr />
                                          <div className='flex justify-between items-baseline py-5'>
                                                <p className='text-2xl max-md:text-xl max-sm:text-lg'>02.</p>
                                                <div className='text-5xl font-bold  max-md:text-3xl max-sm:text-2xl '>GAME NAME 2</div>
                                                <div className='text-2xl'>Game logo</div>
                                          </div>
                                          <hr />
                                          <div className='flex justify-between items-baseline py-5'>
                                                <p className='text-2xl max-md:text-xl max-sm:text-lg'>03.</p>
                                                <div className='text-5xl font-bold  max-md:text-3xl max-sm:text-2xl '>GAME NAME 3</div>
                                                <div className='text-2xl'>Game logo</div>
                                          </div>
                                          <hr />
                                          <div className='flex justify-between items-baseline py-5'>
                                                <p className='text-2xl max-md:text-xl max-sm:text-lg'>04.</p>
                                                <div className='text-5xl font-bold  max-md:text-3xl max-sm:text-2xl '>GAME NAME 4</div>
                                                <div className='text-2xl'>Game logo</div>
                                          </div>
                                          <hr />
                                    </div>
                              </div>

                        </div>

                        <div className='px-5 py-6 hidden'>
                              <div className=' bg-[#1a1b1e] rounded-2xl pb-14' >

                                    <div className='flex py-16 px-7 max-md:flex-col'>

                                          <div className='w-2/4 max-md:w-full  text-center'>
                                                <div className='relative'>
                                                      <div>
                                                            <img src="https://uithemez.com/i/hubfolio_HTML/creative-studio/assets/imgs/testim/Vector_Cricle_Text.svg" alt="" />
                                                      </div>
                                                      <div className='absolute top-2/4 right-2/4 -translate-y-2/4 -translate-x-2/4 w-[100px]'>
                                                            <img src={qoutes} alt="" />
                                                      </div>
                                                </div>
                                          </div>

                                          <div className='w-2/4 max-md:w-full'>
                                                <div className="h-52 md:h-72 w-full pt-10 text-white">
                                                      <Slider {...carouselSettings}>
                                                            <div className="h-full ">
                                                                  <h1 className='text-2xl  max-sm:text-xl py-3'>" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam aperiam, sint recusandae dolore laborum. Eaque laboriosam dolorem rerum assumenda. "</h1>
                                                                  <hr />
                                                                  <div className='flex gap-9 items-center py-4'>
                                                                        <div className='w-12 h-12'>
                                                                              <img src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full rounded-[50%]' alt="" />
                                                                        </div>
                                                                        <div >
                                                                              <h1>John Doe</h1>
                                                                              <p>Ceo</p>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                            <div className="h-full ">
                                                                  <h1 className='text-2xl  max-sm:text-xl py-3'>" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam aperiam, sint recusandae dolore laborum. Eaque laboriosam dolorem rerum assumenda. "</h1>
                                                                  <hr />
                                                                  <div className='flex gap-9 items-center py-4'>
                                                                        <div className='w-12 h-12'>
                                                                              <img src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full rounded-[50%]' alt="" />
                                                                        </div>
                                                                        <div >
                                                                              <h1>John Doe</h1>
                                                                              <p>Ceo</p>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                            <div className="h-full">
                                                                  <h1 className='text-2xl max-sm:text-xl py-3'>" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam aperiam, sint recusandae dolore laborum. Eaque laboriosam dolorem rerum assumenda. "</h1>
                                                                  <hr />
                                                                  <div className='flex gap-9 items-center py-4'>
                                                                        <div className='w-12 h-12'>
                                                                              <img src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full rounded-[50%]' alt="" />
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
                                          <div className='flex justify-between flex-wrap pt-14'>
                                                <div className='py-12 px-8 rounded-[80px] border border-[#c9c8c72b] hover:bg-[#59595945] text-lg '>icon1-------</div>
                                                <div className='py-12 px-8 rounded-[80px] border border-[#c9c8c72b] hover:bg-[#59595945] text-lg '>icon2-------</div>
                                                <div className='py-12 px-8 rounded-[80px] border border-[#c9c8c72b] hover:bg-[#59595945] text-lg '>icon3-------</div>
                                                <div className='py-12 px-8 rounded-[80px] border border-[#c9c8c72b] hover:bg-[#59595945] text-lg '>icon4-------</div>
                                                <div className='py-12 px-8 rounded-[80px] border border-[#c9c8c72b] hover:bg-[#59595945] text-lg '>icon5-------</div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>

                  {/* <================================================================================================> */}

                  {/* <========================== Cards Section START ===================================> */}
                  <section className='bg-[#0b0e13'>
                        <div className='flex justify-center flex-wrap gap-6'>

                              <div className='inline-flex max-sm:flex-col max-sm:w-full max-sm:mx-6 hover:border-blue-custom transition-all duration-300 p-6 bg-transparent border border-[#4c4c4c80]  rounded-lg text-white bg-coloring gap-5 items-center'>

                                    <div className='min-w-[150px] max-w-[170px]  m-6'>
                                          <img className='rounded-md' src="https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img01.jpg" alt="" />
                                    </div>

                                    <div className='flex flex-col items-start gap-3 max-sm:items-center  w-full'>
                                          <h1 className='text-xl font-semibold uppercase'>Wolf Gaming art</h1>
                                          <div className='flex items-center gap-2'><img src="https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar.png" alt="" /> <span>Alax Max</span> <span className='border-l pl-2 border- text-xs tracking-wide font-semibold text-gray-400'>CREATOR</span></div>
                                          <div className='flex w-full items-center justify-between border rounded-lg border-[#4c4c4c80] py-[14px] pl-[20px] pr-[15px] text-lg '>
                                                <div className='flex flex-shrink-0 gap-1'><span>100.2</span> <span className='text-[#f37c20]'>ETH</span></div>
                                                <div className='ml-8 py-[11px] px-[14px] text-[18px] rounded-md bg-[#1d3962] hover:bg-[#f37c20] transition-all duration-300 leading-none'>
                                                      <a>Bid </a>
                                                </div>
                                          </div>
                                    </div>
                              </div>



                              <div className='inline-flex max-sm:flex-col max-sm:w-full max-sm:mx-6 hover:border-blue-custom transition-all duration-300 p-6 bg-transparent border border-[#4c4c4c80]  rounded-lg text-white bg-coloring gap-5 items-center'>

                                    <div className='min-w-[150px] max-w-[170px] m-6'>
                                          <img className='rounded-md' src="https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img02.jpg" alt="" />
                                    </div>

                                    <div className='flex flex-col items-start gap-3  w-full'>
                                          <h1 className='text-xl font-semibold uppercase'>Forest Princess</h1>
                                          <div className='flex items-center gap-2 '><img src="https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar.png" alt="" /> <span>Alax Max</span> <span className='border-l pl-2 border- text-xs tracking-wide font-semibold text-gray-400'>CREATOR</span></div>
                                          <div className='flex w-full items-center justify-between border rounded-lg border-[#4c4c4c80] py-[14px] pl-[20px] pr-[15px] text-lg '>
                                                <div className='flex flex-shrink-0 gap-1'><span>100.2</span> <span className='text-[#f37c20]'>ETH</span></div>
                                                <div className='ml-8 py-[11px] px-[14px] text-[18px] rounded-md hover:bg-[#1d3962] bg-[#f37c20] transition-all duration-300 leading-none'>
                                                      <a>Bid </a>
                                                </div>
                                          </div>
                                    </div>
                              </div>



                              <div className='inline-flex max-sm:flex-col max-sm:w-full max-sm:mx-6 hover:border-blue-custom transition-all duration-300 p-6 bg-transparent border border-[#4c4c4c80]  rounded-lg text-white bg-coloring gap-5 items-center'>

                                    <div className='min-w-[150px] max-w-[170px] m-6'>
                                          <img className='rounded-md' src="https://themedox.com/mykd/wp-content/uploads/2023/10/nft_img03.jpg" alt="" />
                                    </div>

                                    <div className='flex flex-col items-start gap-3  w-full'>
                                          <h1 className='text-xl font-semibold uppercase'>
                                                Girl firefly art</h1>
                                          <div className='flex items-center gap-2 '><img src="https://themedox.com/mykd/wp-content/uploads/2023/10/nft_avatar.png" alt="" /> <span>Alax Max</span> <span className='border-l pl-2 border- text-xs tracking-wide font-semibold text-gray-400'>CREATOR</span></div>
                                          <div className='flex w-full items-center justify-between border rounded-lg border-[#4c4c4c80] py-[14px] pl-[20px] pr-[15px] text-lg '>
                                                <div className='flex flex-shrink-0 gap-1'><span>100.2</span> <span className='text-[#f37c20]'>ETH</span></div>
                                                <div className='ml-8 py-[11px] px-[14px] text-[18px] rounded-md bg-[#1d3962] hover:bg-[#f37c20] transition-all duration-300 leading-none'>
                                                      <a>Bid </a>
                                                </div>
                                          </div>
                                    </div>
                              </div>


                        </div>






                  </section>
                  {/* <========================== Cards Section ENDS ===================================> */}



                  {/* <========================== About-Us Section START ===================================> */}
                  <section className='about-us-BG text-white flex justify-center flex-col items-center py-32 mt-12'>
                        <h1 className=' uppercase text-5xl font-semibold text-center'>Top Rated Steamers</h1>
                        <p className='clipedUnderline' />

                        <div className='pt-16 flex gap-4 flex-wrap '>
                              <div>
                                    <a href="#" className='relative py-[0.6rem] px-5  transition-all duration-300 text-xl hover:text-black font-bold tracking-wider hover:bg-[#f37c20] '>BUY HERO<img className='absolute top-0 left-0' src={buttonBorderOrange} alt="" />
                                    </a>
                              </div>
                              <div>
                                    <a href="#" className='relative py-[0.6rem] px-5  transition-all duration-300 text-xl hover:text-black font-bold tracking-wider hover:bg-blue-custom '>BUY NFTS<img className='absolute top-0 left-0' src={buttonBorderBlue} alt="" />
                                    </a>
                              </div>

                        </div>

                        <div className='hr-custom-line relative w-full mt-12 text-center'>
                              <div className='py-7'>
                                    <div className='flex justify-center gap-9'>
                                          <div className='img-custom-border inline-flex'>
                                                <div className='img-custom-border2'>
                                                      <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab01.png" alt="" />
                                                </div>
                                          </div>
                                          <div className='img-custom-border inline-flex'>
                                                <div className='img-custom-border2'>
                                                      <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab02.png" alt="" />
                                                </div>
                                          </div>
                                          <div className='img-custom-border inline-flex'>
                                                <div className='img-custom-border2'>
                                                      <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab03.png" alt="" />
                                                </div>
                                          </div>
                                          <div className='img-custom-border inline-flex'>
                                                <div className='img-custom-border2'>
                                                      <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab04.png" alt="" />
                                                </div>
                                          </div>
                                          <div className='img-custom-border inline-flex'>
                                                <div className='img-custom-border2'>
                                                      <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab05.png" alt="" />
                                                </div>
                                          </div>
                                          <div className='img-custom-border inline-flex'>
                                                <div className='img-custom-border2'>
                                                      <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab06.png" alt="" />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>


                  </section>
                  <section>

                        {/* GAME NAME CARD  */}
                        <div className="flex flex-col lg:flex-row lg:text-left text-center text-white px-10 pt-10 space-y-8 lg:space-y-0 lg:space-x-10">

                              <div className="w-full lg:w-1/2 px-5">
                                    <img className="w-full h-full object-cover rounded-lg" src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_img01.jpg" alt="About Image" />
                              </div>

                              <div className="flex flex-col space-y-8">
                                    <div className="flex lg:flex-row max-sm:flex-col justify-between items-start max-md:items-center space-y-5 lg:space-y-0">
                                          <div className="flex flex-col gap-3 px-5">
                                                <h1 className="text-4xl font-semibold">HUMAN GAME</h1>
                                                <span className="text-orange-custom text-2xl font-semibold">RATE 50%</span>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat facere nobis dolor tempore repellat veritatis voluptas iure blanditiis vel!</p>
                                          </div>

                                          <div className="flex flex-col space-y-4 flex-shrink-0">
                                                <div className="flex items-center justify-start py-2 px-3 rounded-lg humanGame-sideButton">
                                                      <img className="mr-2" src="https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon01.png" alt="Icon 1" />
                                                      <p>Chichi Dragon Ball</p>
                                                </div>
                                                <div className="flex items-center justify-start py-2 px-3 rounded-lg humanGame-sideButton">
                                                      <img className="mr-2" src="https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon01.png" alt="Icon 2" />
                                                      <p>Chichi Dragon Ball</p>
                                                </div>
                                                <div className="flex items-center justify-start py-2 px-3 rounded-lg humanGame-sideButton">
                                                      <img className="mr-2" src="https://themedox.com/mykd/wp-content/uploads/2023/10/features_icon01.png" alt="Icon 3" />
                                                      <p>Chichi Dragon Ball</p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="flex gap-5 pt-5 max-sm:flex-col">
                                          <button className="humanGame-bottomButton py-6 px-8 w-full lg:w-auto">DRAGON BALL</button>
                                          <button className="humanGame-bottomButton py-6 px-8 w-full lg:w-auto">NFT MARKET</button>
                                          <button className="humanGame-bottomButton py-6 px-8 w-full lg:w-auto">SUPPORT</button>
                                    </div>
                              </div>
                        </div>
                        <div className='hr-custom-line '/>

                  </section>


                  {/* <========================== About-Us Section ENDS ===================================> */}



                  {/* <================================================================================================> */}
                  <footer id='contact'>
                        <div className='px-10 py-6 '>
                              <div className='text-white'>
                                    <h1 className='text-[10vw] text-center'>CONTACT US</h1>
                              </div>

                              <div className='flex justify-between items-baseline text-white max-md:flex-col max-md:gap-6'>
                                    <div>

                                          <div className="w-32">
                                                <img src={logo} title='A UNIT OF MANISI' alt="" className="w-full" />
                                          </div>
                                    </div>
                                    <div>
                                          <p className='pb-3'>LOCATION</p>
                                          <p>GHITORNI, DELHI NCR</p>
                                    </div>
                                    <div className='pr-5'>
                                          <p className=' pb-3'>INQUIRY</p>
                                          <p>info@arinon.com</p>
                                          <p>+91-1234567890</p>
                                    </div>

                              </div>

                              <div className='flex items-center gap-4 pt-7 flex-wrap'>
                                    <i className="fa fa-facebook text-3xl  border py-2 px-[15px] rounded-[50%] bg-white hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i>
                                    <i className="fa fa-instagram text-3xl border py-2 px-3 rounded-[50%] bg-white hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i>
                                    {/* <i className="fa fa-whatsapp text-3xl  border py-2 px-3 rounded-[50%] bg-white hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i> */}
                                    <i className="fa fa-linkedin text-3xl  border py-2 px-3 rounded-[50%] bg-white hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i>

                              </div>


                        </div> <hr className='border-t-2 border-gray-700 my-4' />

                        <div className='text-gray-400 px-10'>
                              <p className='py-5'>© 2024 Arinon Games. All Right Reserved</p>
                              <div className='py-6 flex justify-around flex-wrap'>
                                    <i>Navigation 1</i><i>Navigation 2</i><i>Navigation 3</i><i>Navigation 4</i>
                              </div>
                        </div>

                  </footer>
            </div>
      )
}

export default Game_page
