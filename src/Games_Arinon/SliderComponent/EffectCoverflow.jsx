import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../Image_Files/GamesImages/CharacterImages/CH FRONT .png';
import image2 from '../../Image_Files/GamesImages/CharacterImages/0027.png';
import image3 from '../../Image_Files/GamesImages/CharacterImages/BODY 1.png';
import image4 from '../../Image_Files/GamesImages/CharacterImages/character 101.png';
import image5 from '../../Image_Files/GamesImages/CharacterImages/character102.png';
import image6 from '../../Image_Files/GamesImages/CharacterImages/auto.png';
import image7 from '../../Image_Files/GamesImages/CharacterImages/red car.png';
import image8 from '../../Image_Files/GamesImages/CharacterImages/bus1 .png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function EffectCoverflowSlider() {
    const slides = document.querySelectorAll('.slideImg');
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        slides.forEach((slide, index) => {
            if (index === activeIndex) {
                slide.style.transform = 'scale(1.3)';
                slide.style.transition = 'transform 0.4s ease';
            } else {
                slide.style.transform = 'scale(1sk)';
            }
        });
    });

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className='coverflowSwiper'
            >
                <SwiperSlide>
                    <img src={image1} className='slideImg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} className='slideImg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} className='slideImg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} className='slideImg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} className='slideImg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image6} className='slideImg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image7} className='slideImg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image8} className='slideImg' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
