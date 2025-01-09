import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Link } from 'react-router-dom';
import pr1 from '../../Image_Files/ArinonImages/Work MockUp-01.jpg';
import pr2 from '../../Image_Files/ArinonImages/Work MockUp-02.png';
import pr3 from '../../Image_Files/ArinonImages/Work MockUp-03.jpg';
import pr4 from '../../Image_Files/ArinonImages/Work MockUp-04.jpg';
import pr5 from '../../Image_Files/ArinonImages/Work MockUp-05.jpg';
import pr6 from '../../Image_Files/ArinonImages/Work MockUp-06.jpg';
import pr7 from '../../Image_Files/ArinonImages/Work MockUp-07.jpg';
import pr8 from '../../Image_Files/ArinonImages/Work MockUp-08.jpg';
export default function PortfolioSlider() {
    return (
        <div>
            <h1 className='pt-10 pb-5 font-semibold text-3xl text-center'>Related Projects</h1>
            <div>
                <Swiper
                    pagination={{ clickable: true }}
                    slidesPerView={4}
                    slides
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[Pagination, FreeMode, Autoplay]}
                    breakpoints={{
                        // Mobile (< 640px)
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                            slidesPerGroup: 1,
                        },
                        // Small tablets (640px - 768px)
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                            slidesPerGroup: 1,
                        },
                        // Tablets (768px - 1024px)
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 24,
                            slidesPerGroup: 1,
                        },
                        // Small laptops (1024px - 1280px)
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 28,
                            slidesPerGroup: 1,
                        },
                        // Laptops and desktops (≥ 1280px)
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 32,
                            slidesPerGroup: 1,
                        },
                    }}
                >
                    {[
                        { img: pr1, to: '/arinon-digital/portfolio/3' },
                        { img: pr2, to: '/arinon-digital/portfolio/7' },
                        { img: pr3, to: '/arinon-digital/portfolio/2' },
                        { img: pr4, to: '/arinon-digital/portfolio/4' },
                        { img: pr5, to: '/arinon-digital/portfolio/1' },
                        { img: pr6, to: '/arinon-digital/portfolio/5' },
                        { img: pr7, to: '/arinon-digital/portfolio/6' },
                        { img: pr8, to: '/arinon-digital/portfolio/8' },
                    ].map((project, index) => (
                        <SwiperSlide key={index}>
                            <Link to={project.to}>
                                <div className='flex justify-center items-center w-full'>
                                    <div className='w-80 max-sm:w-full h-80'>
                                        <img src={project.img} alt='project' />
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
