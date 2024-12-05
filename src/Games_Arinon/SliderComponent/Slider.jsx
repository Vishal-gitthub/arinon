import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AmazingSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Check initial width on component mount
    handleResize();

    // Add event listener to handle window resizing
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const slides = document.querySelectorAll('.slide-img');
      slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.style.transform = 'scale(1)'; // Increase the scale of the active slide
          slide.style.transition = 'transform 0.3s ease';
        } else {
          slide.style.transform = 'scale(0.9)';
        }
      });
    }
  }, [activeIndex, isMobile]);

  return (
    <div className="w-full flex justify-center pt-20 select-none">
      {!isMobile ? (
        <Swiper
          speed={100}
          spaceBetween={60}
          loop={false}
          autoplay={{
            delay: 200,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: 'bullets',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={2}
          centeredSlides={true}
          grabCursor={true}
          effect="slide"
          scrollbar={{
            hide: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track active slide
          className="swiper-container"
        >
          <SwiperSlide className="swiper-slide">
            <div className="bg-[#2c3137] p-2 slide-img w-full">
              <img src="https://html.themegenix.com/mykd/assets/img/gallery/gallery01.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="bg-[#2c3137] p-2 slide-img w-full">
              <img src="https://html.themegenix.com/mykd/assets/img/gallery/gallery05.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="bg-[#2c3137] p-2 slide-img w-full">
              <img src="https://html.themegenix.com/mykd/assets/img/gallery/gallery02.jpg" alt="" />
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components here */}
        </Swiper>
      ) : (
        <div className="flex flex-col space-y-4 w-full ">
          {/* Display images vertically for mobile */}
          <div className="bg-[#2c3137] p-2 slide-img w-full">
            <img src="https://html.themegenix.com/mykd/assets/img/gallery/gallery01.jpg" alt="" />
          </div>
          <div className="bg-[#2c3137] p-2 slide-img w-full">
            <img src="https://html.themegenix.com/mykd/assets/img/gallery/gallery05.jpg" alt="" />
          </div>
          <div className="bg-[#2c3137] p-2 slide-img w-full">
            <img src="https://html.themegenix.com/mykd/assets/img/gallery/gallery02.jpg" alt="" />
          </div>
          {/* Add more images as needed */}
        </div>
      )}

      {/* Pagination */}
      {!isMobile && (
        <>
          <div className="swiper-pagination"></div>
          <div className="swiper-scrollbar h-2 bg-gray-300 rounded-full"></div>
        </>
      )}
    </div>
  );
};

export default AmazingSlider;
