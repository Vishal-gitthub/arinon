import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../Image_Files/GamesImages/three-medieval-warriors-armor-3d-illustration-white-background.png"
import image2 from "../../Image_Files/GamesImages/rpg-ranger-isometric-rpg-item-object-rpg-game-generative-ai.png"
import image3 from "../../Image_Files/GamesImages/tom-jerry.png"
import image4 from "../../Image_Files/GamesImages/3d-cartoon-style-miner.png"
import image5 from "../../Image_Files/GamesImages/couple-cartoon-soldiers-with-bow-arrow-3d-illustration.png"
import image6 from "../../Image_Files/GamesImages/female-dwarf-warrior.png"
import image7 from "../../Image_Files/GamesImages/mighty-thor-3d-element.png"
import image8 from "../../Image_Files/GamesImages/medieval-warrior-design-video-game-character-concept-design-multiple-concept-designs-full-body.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function EffectCoverflowSlider() {
      const slides = document.querySelectorAll(".slideImg")
      const [activeIndex, setActiveIndex] = useState(0)

      useEffect(() => {
            slides.forEach((slide, index) => {
                  if (index === activeIndex) {
                        slide.style.transform = "scale(1.2)";
                        slide.style.transition = "transform 0.4s ease"
                  }
                  else {
                        slide.style.transform = "scale(0.9)";
                  }
            })
      })

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
                        className="coverflowSwiper"
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
