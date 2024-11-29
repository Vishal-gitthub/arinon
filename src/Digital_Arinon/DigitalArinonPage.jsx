import React, { useEffect, useState } from "react";

// images & Svg files import
import BulbSvg from "../Image_Files/Icons_File/bulb-2.svg";
import businessLogo from "../Image_Files/Icons_File/briefcase-2.svg";
import heartLogo from "../Image_Files/Icons_File/heart.svg";
import plantImg from "../Image_Files/plant.png";
import groupSvg from "../Image_Files/Icons_File/groupSvg.svg";
import codeSvg from "../Image_Files/Icons_File/code-svgrepo-com.svg";
import completedSvg from "../Image_Files/Icons_File/completedSvg.svg";
import locationIcon from "../Image_Files/Icons_File/location-iconm.svg"
import emailIcon from "../Image_Files/Icons_File/send-email-icon.svg"
import callIcon from "../Image_Files/Icons_File/call-icon.svg"
import formImg from "../Image_Files/brandsLogos/formIllustrator.png"
// logo 
import logo from "../Assets/Logo/Arinon_Logo_Final-02.png"
// brand logo 
import elCafe from "../Image_Files/brandsLogos/3L-Cafe.png"
import peterCat from "../Image_Files/brandsLogos/Peter-Cat.png"
import aeikyam from "../Image_Files/brandsLogos/Aeikyam.png"
import laxya from "../Image_Files/brandsLogos/Laxya.png"
import musingOfAkansha from "../Image_Files/brandsLogos/Musings-of-Aakanksha.png"
import deeBake from "../Image_Files/brandsLogos/Dee's_Bake.png"
import bridgeHotel from "../Image_Files/brandsLogos/The-Bridge-Hotel.png"
//nav bar import 
import listIcon from "../Image_Files/Icons_File/hamburger.svg";
import arrowRight from "../Image_Files/Icons_File/cross-svgrepo.svg";

//gsap library import
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//slick-caraousel library import
import Slider from "react-slick";
import "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const DigitalArinonPage = () => {
  // these 3 states for displaying our clients and projects with animation 
  const [happyClients, setHappyClients] = useState(0);
  const [partners, setpartners] = useState(0);
  const [projects, setProjects] = useState(0);

  // these state is for side Navbar 
  const [activeIndex, setActiveIndex] = useState(null);

  // these state is for FAQ accordian 
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active item
  };

  const [isVisible, setVisible] = useState(false)

  // const [stickyBarVisible, setStickyBarVisible] = useState(false)

  // toggleButton for back to top Button 
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setVisible(true)
    }
    else {
      setVisible(false)
    }
  }


  // const stickyBarVisibility = () => {
  //   if (window.scrollY > window.document.documentElement.scrollHeight * 0.88) {
  //     setStickyBarVisible(true)
  //   }
  //   else {
  //     setStickyBarVisible(false)
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", stickyBarVisibility);
  //   return () => { window.removeEventListener("scroll", stickyBarVisibility) }
  // })



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => { window.removeEventListener("scroll", toggleVisibility) };

  }, [])

  useEffect(() => {


    const interval_1 = setInterval(() => {
      setHappyClients((prev) => {
        if (prev < 15) return prev + 1;
        clearInterval(interval_1);
        return prev;
      });
    }, 500);


    const interval_2 = setInterval(() => {
      setpartners((prev) => {
        if (prev < 5) return prev + 1;
        clearInterval(interval_2);
        return prev;
      });
    }, 1000);


    const interval_3 = setInterval(() => {
      setProjects((prev) => {
        if (prev < 35) return prev + 2;
        clearInterval(interval_3);
        return prev;
      });
    }, 500);


    gsap.fromTo(
      ".left",
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "ease.out",
      }
    );


    gsap.fromTo(
      ".right",
      { x: "100%", opacity: 0 },
      { x: "0%", duration: 1, opacity: 1, ease: "ease.out" }
    );


    gsap.fromTo(
      ".leftCard",
      { x: "-100%" },
      {
        x: "0%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".leftCard",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );


    gsap.fromTo(
      ".rightCard",
      {
        x: "100%",
      },
      {
        x: "0%",
        duration: 1.5,
        ease: "ease.out",
        scrollTrigger: {
          trigger: ".rightCard",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      ".objectRight",
      {
        x: "100%",
      },
      {
        x: "0%",
        duration: 1.5,
        ease: "ease.out",
        scrollTrigger: {
          trigger: ".objectRight",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      }
    );
    gsap.fromTo(
      ".objectLeft",
      {
        x: "-100%",
      },
      {
        x: "0%",
        duration: 1.5,
        ease: "ease.out",
        scrollTrigger: {
          trigger: ".objectLeft",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      ".objectRight2",
      {
        x: "100%",
      },
      {
        x: "0%",
        duration: 1.5,
        ease: "ease.out",
        scrollTrigger: {
          trigger: ".objectRight2",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      }
    );
    gsap.fromTo(
      ".objectLeft2",
      {
        x: "-100%",
      },
      {
        x: "0%",
        duration: 1.5,
        ease: "ease.out",
        scrollTrigger: {
          trigger: ".objectLeft2",
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      }
    );


    gsap.fromTo(
      ".controlOpacity",
      { opacity: 0.01 },
      {
        opacity: 1,
        duration: 1.9,
        scrollTrigger: {
          trigger: ".controlOpacity",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      }
    );

  }, []);


  let carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };


  let brandCarousel = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      }
    ]
  }

  let [widthState, setWidthState] = useState(false);
  function menuBtn() {
    setWidthState(!widthState);
  }
  function menuCloseBtn() {
    setWidthState(!widthState);
  }

  return (
    //  className="font-custom"
    <div className="font-custom">
      {/* -------------------------------NAVBAR------------------------------- */}
      {/* Navbar   */}
      <header className="sticky top-0  z-40 ">
        <nav
          className="backdrop-blur-sm py-5 px-8 flex items-center justify-between bg-[#1d3962]"
        >
          <a href="#home">
            <div className="w-24">
              <img src={logo} alt="" className="w-full" />
            </div>
          </a>

          <div className="flex gap-4 max-md:hidden text-white">

            <a href="#services">
              Services
            </a>
            <a href="#pricing">
              Pricing
            </a>

            <a href="#about-us">
              About Us
            </a>
            <a href="#faqs">FAQs</a>

            <a href="#contact">
              Contact Us
            </a>


          </div>
          <div className=" hidden max-md:block">
            <button onClick={menuBtn}>
              <img src={listIcon} alt="" />
            </button>
          </div>
        </nav>

        <div
          id="sidebar"
          className={`flex flex-col fixed h-full top-0 right-0 transition-transform duration-300 z-50 ${widthState ? "translate-x-0" : "translate-x-full"
            } text-black max-md:w-64 bg-slate-50`}

        >
          <button onClick={menuCloseBtn} className="p-4 grid place-items-center">
            <img src={arrowRight} alt="" />
          </button>

          <a href="#services"

            className="py-3 hover:bg-[#1d3962] hover:text-white rounded-2xl mx-2 px-4 text-xl"
          >
            Services
          </a>

          <a href="#about-us"
            className="py-3 hover:bg-[#1d3962] hover:text-white rounded-2xl mx-2 px-4 text-xl"
          >
            About Us
          </a>
          <a href="#faqs"
            className="py-3 hover:bg-[#1d3962] hover:text-white rounded-2xl mx-2 px-4 text-xl"
          >FAQs
          </a>

          <a href="#contact"
            className="py-3 hover:bg-[#1d3962] hover:text-white rounded-2xl mx-2 px-4 text-xl"
          >

            Contact Us
          </a>

        </div>

      </header>

      {/* -------------------------------SECTION 1------------------------------- */}
      <section>
        {/* -------------------------------CHILD SECTION A------------------------------- */}
        <div className="px-36 max-md:px-20 max-sm:px-5 text-center " id="home">
          <h1 className=" text-5xl max-sm:text-4xl font-bold py-8">
            We are Digital Agency
          </h1>
          <p>

            At Arinon, creativity meets expertise. Our mission is to transform brands through innovative digital marketing, cutting-edge web development, and app solutions that drive measurable results. By combining a customer-centric approach with industry-leading technology, we forge strong client relationships and deliver exceptional outcomes.

          </p>
        </div>
        {/* -------------------------------CHILD SECTION B------------------------------- */}
        {/* cardsSection */}
        <div className="flex flex-wrap max-md:flex-col items-center justify-center gap-5 px-24 max-md:px-12 max-sm:px-3 pt-8 pb-8 text-center overflow-hidden">
          {/* Left Card */}
          <div className="flex flex-col items-center creativeIdea leftCard w-full sm:w-[30%] md:w-[50%] lg:w-[30%]">
            <div className="relative top-12">
              <img src={BulbSvg} alt="bulb Svg" />
            </div>
            <div className="py-20 px-14 shadow-[0px_3px_18px_0px_lightgray] rounded-2xl h-56">
              <h1 className="text-xl font-semibold">
                We have some creative ideas for you.
              </h1>
            </div>
          </div>

          {/* Control Opacity Card */}
          <div className="flex flex-col items-center creativeIdea controlOpacity w-full sm:w-[30%] md:w-[50%] lg:w-[30%]">
            <div className="relative top-12">
              <img src={businessLogo} alt="business logo" />
            </div>
            <div className="shadow-[0px_3px_18px_0px_lightgray] py-20 px-14 rounded-2xl h-56">
              <h1 className="text-xl font-semibold">
                Your business is our top priority.
              </h1>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex flex-col items-center creativeIdea rightCard w-full sm:w-[30%] md:w-[50%] lg:w-[30%]">
            <div className="relative top-12">
              <img src={heartLogo} alt="heart logo" />
            </div>
            <div className="py-20 px-14 shadow-[0px_3px_18px_0px_lightgray] rounded-2xl h-56">
              <h1 className="text-xl font-semibold">
                We love our valued customers.
              </h1>
            </div>
          </div>
        </div>
        {/* -------------------------------CHILD SECTION C------------------------------- */}


      </section>



      {/* -------------------------------SECTION 2------------------------------- */}
      <section className=" bg-violet-100 mt-12 py-20 " id="about-us">
        {/* -------------------------------CHILD SECTION A------------------------------- */}
        {/* our Philosophy and vision  */}
        <div className="flex items-center justify-center max-md:px-5 max-md:flex-col overflow-hidden">
          <div className="pr-11 w-2/4 max-md:w-full max-md:pr-0 max-md:text-center">
            <span className="text-2xl font-light">
              Our Philosophy and Vision
            </span>
            <h1 className="text-4xl font-bold py-4">
              Our Philosophy

            </h1>
            <p className="py-3">
              At Arinon, we believe in personalized, cutting-edge solutions that deliver measurable success. By combining innovation with creativity, we aim to exceed expectations and build long-lasting relationships.
            </p>
          </div>
          <div className="flex justify-end pl-6 objectRight ">
            <img src={plantImg} alt="" className="pl-5 " />
          </div>
        </div>


        <div className="flex items-center justify-center max-md:px-5 max-md:flex-col-reverse overflow-hidden ">
          <div className="flex justify-end pl-6 objectLeft ">
            <img src={plantImg} alt="" className="pl-5 " />
          </div>
          <div className="pr-11 w-2/4 max-md:w-full max-md:pr-0 max-md:text-center text-right">

            <h1 className="text-4xl font-bold py-4">
              Our Vision

            </h1>
            <p className="py-3">
              We aspire to be the industry leader in digital marketing and development, offering a one-stop solution for all digital needs. By staying at the forefront of innovation, we’re shaping the future of marketing and advertising.
            </p>
          </div>

        </div>

        {/* -------------------------------CHILD SECTION B------------------------------- */}

        {/* -------------------------------CHILD SECTION C------------------------------- */}

        <div className="flex justify-around items-center  max-sm:gap-5 pt-9 max-md:flex-col">
          <div className="flex items-center gap-3 ">
            <img src={groupSvg} alt="" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{`${happyClients}+`}</span>
              <span className="text-xl font-bold">Satisfied Clients</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={codeSvg} alt="" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{`${partners}+`}</span>
              <span className="text-xl font-bold">Partners Worldwide</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={completedSvg} alt="" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{`${projects}+`}</span>
              <span className="text-xl font-bold">Completed Projects</span>
            </div>
          </div>
        </div>
      </section>



      {/* Brands Logos Carousels */}
      {/* -------------------------------SECTION 3------------------------------- */}
      <section className="py-20 brandBg">
        <div>
          <Slider {...brandCarousel}>
            <div className="flex justify-center items-center">
              <img src={elCafe} className=" w-full grayscale hover:grayscale-0 transition-all duration-300 p-4 brand_logo" alt="brand logo 1" />
            </div>
            <div className="flex justify-center items-center">
              <img src={peterCat} className=" grayscale hover:grayscale-0 transition-all duration-300 p-4 brand_logo" alt="brand logo 2" />
            </div>
            <div className="flex justify-center items-center">
              <img src={deeBake} className=" grayscale hover:grayscale-0 transition-all duration-300 p-4 brand_logo" alt="brand logo 3" />
            </div>
            <div className="flex justify-center items-center">
              <img src={laxya} className=" grayscale hover:grayscale-0 transition-all duration-300 p-4 brand_logo" alt="brand logo 4" />
            </div>
            <div className="flex justify-center items-center">
              <img src={aeikyam} className=" grayscale hover:grayscale-0 transition-all duration-300 p-4 brand_logo" alt="brand logo 5" />
            </div>
            <div className="flex justify-center items-center">
              <img src={musingOfAkansha} className=" grayscale hover:grayscale-0 transition-all duration-300 p-4 brand_logo" alt="brand logo 5" />
            </div>
            <div className="flex justify-center items-center">
              <img src={bridgeHotel} className=" grayscale hover:grayscale-0 transition-all duration-300 p-4 brand_logo" alt="brand logo 5" />
            </div>

          </Slider>
        </div>
      </section>



      {/* -------------------------------SECTION 4------------------------------- */}
      <section>
        {/* -------------------------------CHILD SECTION A------------------------------- */}
        {/* latest and creative works  */}
        <div className="bg-violet-100 py-16 px-16">
          <div className="flex items-center max-md:flex-col max-md:text-center max-md:gap-5">
            <h1 className="text-5xl pr-7 flex-shrink-0">
              Latest & <br />
              <span>Creative Work</span>
            </h1>
            <p className="pl-7 text-lg py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              optio quos tempora vel error expedita cupiditate, consequatur
              saepe numquam inventore?
            </p>
          </div>

          <div className="h-62 w-full pt-10">
            <Slider {...carouselSettings}>
              <div>
                <img
                  className="object-cover w-full h-full"
                  src="https://picsum.photos/seed/game5/2400/780"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="object-cover w-full h-full"
                  src="https://picsum.photos/seed/game5/2400/780"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="object-cover w-full h-full"
                  src="https://picsum.photos/seed/game5/2400/780"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </section >



      {/* -------------------------------CHILD SECTION 5------------------------------- */}
      <section className="bg-white py-11">


        {/* SERVICES  */}
        {/* -------------------------------CHILD SECTION A------------------------------- */}
        <section className="py-20 overflow-hidden" id="services">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Our Services
            </h2>

            {/* Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

              {/* Service 1: Digital Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md objectLeft2">
                <div className="flex justify-center mb-6">
                  <img
                    src="https://via.placeholder.com/60/a62e7a/FFFFFF?text=SEO"
                    alt="SEO Icon"
                    className="w-16 h-16 rounded-full bg-[#1d3962] p-4"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  01. Digital Marketing
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Take your brand to the next level with powerful digital marketing strategies,
                  that aligns with your vision.
                </p>
                <ul className="text-gray-600 list-inside list-disc mb-4">
                  <li>SEO: Rank higher and attract the right audience.</li>
                  <li>Social Media: Create engaging campaigns for your audience.</li>
                  <li>Content Marketing: Drive conversions with well-crafted content.</li>
                </ul>
                <div className="text-center mt-6">
                  <a
                    href="#"
                    className="inline-block px-6 py-3 bg-[#1d3962] text-white font-bold rounded-lg hover:bg-[#A62E7A] transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Service 2: Web Development */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                  <img
                    src="https://via.placeholder.com/60/a62e7a/FFFFFF?text=Web"
                    alt="Web Development Icon"
                    className="w-16 h-16 rounded-full bg-[#1d3962] p-4"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  02. Web Development
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Build fast, responsive, and user-friendly websites with our expert development team.
                </p>
                <ul className="text-gray-600 list-inside list-disc mb-4">
                  <li>Responsive Web Design: Optimized for all devices.</li>
                  <li>Custom Websites: Tailored to your business needs.</li>
                  <li>E-commerce: Powerful platforms for online sales.</li>
                </ul>
                <div className="text-center mt-6">
                  <a
                    href="#"
                    className="inline-block px-6 py-3 bg-[#1d3962] text-white font-bold rounded-lg hover:bg-[#A62E7A] transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Service 3: App Development */}
              <div className="bg-white p-8 rounded-lg shadow-md objectRight2">
                <div className="flex justify-center mb-6">
                  <img
                    src="https://via.placeholder.com/60/a62e7a/FFFFFF?text=App"
                    alt="App Development Icon"
                    className="w-16 h-16 rounded-full bg-[#1d3962] p-4"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  03. App Development
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Develop mobile and web applications that meet your business needs and enhance user experience.
                </p>
                <ul className="text-gray-600 list-inside list-disc mb-4">
                  <li>Web Apps: Build powerful, fast, and functional applications.</li>
                  <li>Mobile Apps: User-friendly apps for iOS and Android.</li>
                  <li>Cross-Platform: Apps that work seamlessly across all devices.</li>
                </ul>
                <div className="text-center mt-6">
                  <a
                    href="#"
                    className="inline-block px-6 py-3 bg-[#1d3962] text-white font-bold rounded-lg hover:bg-[#A62E7A] transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* -------------------------------CHILD SECTION B------------------------------- */}


        {/* web design packages ---------------- */}
        <div className=" items-centerflex-col text-center max-md:gap-5 pt-10" id="pricing">
          <h1 className="text-5xl pr-7 flex-shrink-0 font-semibold font-custom">Web Designs Packages</h1>
          <p className="px-20 max-md:px-15 max-sm:px-5 text-lg py-5 ">We offer comprehensive social media management packages designed to help you achieve your brand goals, whether you're starting out or looking to dominate your niche.
          </p>
        </div>


        {/* -------------------------------CHILD SECTION C------------------------------- */}


        {/* prices up down annimation Cards */}
        <div className="py-16">
          <div className="flex items-center justify-center gap-7 flex-wrap pt-12">

            <div className="group shadow-[0px_2px_15px_4px_#0000001a] h-[450px]">
              <div className="relative w-72 h- bg-white overflow-hidden flex items-center justify-center ">
                <div className="relative z-10 text-center group-hover:text-white transition-all duration-300 py-6">
                  <h1 className="text-xl font-bold tracking-wider">Starter Package</h1>

                  <h1 className="text-5xl font-bold tracking-wider">10000<span className="text-2xl font-medium">₹</span></h1>
                  <span className="text-lg font-medium">Monthly billing</span>
                </div>
                <div className="absolute bottom-[-100%] left-0 w-full h-full bg-[#1d3962] transition-all duration-300 ease-in-out group-hover:bottom-0  " />
              </div>

              <div className="relative w-72 h- bg-white overflow-hidden flex items-center justify-center group">
                <div className="relative z-10 text-center group-hover:text-white transition-all duration-300 px-5">
                  <h3 className="text-base py-4">3 posts/week (Reels, photos, captions)</h3>
                  <h3 className="text-base py-4">2 stories/week for audience engagement
                  </h3>
                  <h3 className="text-base py-4 ">Basic hashtag research boost reach
                  </h3>
                  <h3 className="text-base py-4 "> Monthly insights on followers and engagement
                  </h3>
                </div>
                <div className="absolute top-[-100%] left-0 w-full h-full bg-[#a62d7a] transition-all duration-300 ease-in-out group-hover:top-0  " />
              </div>
            </div>
            <div className="group shadow-[0px_2px_15px_4px_#0000001a] h-[450px]">
              <div className="relative w-72 h- bg-white overflow-hidden flex items-center justify-center ">
                <div className="relative z-10 text-center group-hover:text-white transition-all duration-300 py-6">

                  <h1 className="text-xl font-bold tracking-wider">Growth Package</h1>
                  <h1 className="text-5xl font-bold tracking-wider">16000<span className="text-2xl font-medium">₹</span></h1>
                  <span className="text-lg font-medium">Monthly billing</span>
                </div>
                <div className="absolute bottom-[-100%] left-0 w-full h-full bg-[#1d3962] transition-all duration-300 ease-in-out group-hover:bottom-0  " />
              </div>

              <div className="relative w-72 h- bg-white overflow-hidden flex items-center justify-center group">
                <div className="relative z-10 text-center group-hover:text-white transition-all duration-300 px-5">
                  <h3 className="text-base py-4">4 posts/week (photos, Reels, captions)
                  </h3>
                  <h3 className="text-base py-4">3 stories/week to deepen connection

                  </h3>
                  <h3 className="text-base py-4 "> 1 trending Reel per week

                  </h3>
                  <h3 className="text-base py-4 "> Advanced monthly report with engagement insights


                  </h3>
                </div>
                <div className="absolute top-[-100%] left-0 w-full h-full bg-[#a62d7a] transition-all duration-300 ease-in-out group-hover:top-0  " />
              </div>
            </div>
            <div className="group shadow-[0px_2px_15px_4px_#0000001a] h-[450px]">
              <div className="relative w-72 h- bg-white overflow-hidden flex items-center justify-center ">
                <div className="relative z-10 text-center group-hover:text-white transition-all duration-300 py-6">
                  <h1 className="text-xl font-bold tracking-wider">Premium  Package</h1>

                  <h1 className="text-5xl font-bold tracking-wider">20000<span className="text-2xl font-medium">₹</span></h1>
                  <span className="text-lg font-medium">Monthly billing</span>
                </div>
                <div className="absolute bottom-[-100%] left-0 w-full h-full bg-[#1d3962] transition-all duration-300 ease-in-out group-hover:bottom-0  " />
              </div>

              <div className="relative w-72 h- bg-white overflow-hidden flex items-center justify-center group">
                <div className="relative z-10 text-center group-hover:text-white transition-all duration-300 px-5">
                  <h3 className="text-base py-4"> 5 posts/week (diverse mix including Reels, quotes)
                  </h3>
                  <h3 className="text-base py-4">Daily stories to maintain engagement
                  </h3>
                  <h3 className="text-base py-4 ">2 high-quality Reels per week

                  </h3>
                  <h3 className="text-base py-4 "> Detailed monthly analytics with growth strategies
                  </h3>
                </div>
                <div className="absolute top-[-100%] left-0 w-full h-full bg-[#a62d7a] transition-all duration-300 ease-in-out group-hover:top-0  " />
              </div>
            </div>
            <div className="group shadow-[0px_2px_15px_4px_#0000001a] h-[450px]">
              <div className="relative w-72 bg-white overflow-hidden flex items-center justify-center group py-5">
                <div className="relative z-10 text-center group-hover:text-white transition-all duration-300 px-5">
                  <h1 className="text-2xl font-bold tracking-wider">1:1 Consulting
                  </h1>
                  <p className="text-base py-4">In-person consultation for a deep dive into your brand strategy.
                  </p>
                  <p>
                    Comprehensive guidance with hands-on support for execution.
                  </p>

                </div>
                <div className="absolute bottom-[-100%] left-0 w-full h-full bg-[#1d3962] transition-all duration-300 ease-in-out group-hover:bottom-0  " />
              </div>
              <div className="relative w-72 bg-white overflow-hidden flex items-center justify-center py-4 ">
                <div className="relative z-10 text-center group-hover:text-white transition-all duration-300 px-5">
                  <h1 className="text-2xl font-bold tracking-wider">Online Consulting</h1>
                  <p className="py-4 tracking-wide">Personalized strategy session via video call tailored to your business goals.</p>
                  <p className="py-4">Actionable insights and a roadmap for your digital growth.
                  </p>
                </div>
                <div className="absolute top-[-100%] left-0 w-full h-full bg-[#a62d7a] transition-all duration-300 ease-in-out group-hover:top-0  " />
              </div>


            </div>
          </div>
        </div>

      </section>



      {/* -------------------------------CHILD SECTION 6------------------------------- */}
      <section className="bg-blue-100 py-14 group" >
        <div className="flex flex-col items-center">
          <h1 className="text-6xl  text-center">Testimonials</h1>
          <div className="w-16 h-1 bg-[#a62d7a] rounded-md group-hover:w-80 transition-all duration-500 " />
        </div>
        <div className="w-[70%] max-sm:w-[90%] m-auto pt-12 testimonialsBg">
          <div>
            <Slider {...carouselSettings}>
              <div>
                <div className="flex max-sm:flex-col justify-center items-center  gap-5  ">
                  <div>
                    <img src={laxya} alt="" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">LAXYA Prod.</h1>
                    <p className="py-3  text-lg text-gray-700">Arinon’s dedication and expertise in social media have elevated our brand presence. We couldn’t ask for a better partner!
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex max-sm:flex-col justify-center items-center  gap-5 ">
                  <div>
                    <img src={aeikyam} alt="" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">AEIKYAM</h1>
                    <p className="py-3  text-lg text-gray-700">Arinon’s content captures the essence of our Vastu-inspired products beautifully. They’ve helped us connect with the right audience.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex max-sm:flex-col justify-center items-center  gap-5 ">
                  <div>
                    <img src={elCafe} alt="" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">3L CAFE</h1>
                    <p className="py-3  text-lg text-gray-700">Arinon has helped us bring the essence of 3L Cafe to life online. Their expertise in managing our website and social media has truly elevated our brand.</p>
                  </div>
                </div>
              </div>

              {/* bridge Hotel Testimonials pending  */}
              {/* <div>
                <div className="flex justify-center items-center  gap-5 ">
                  <div>
                    <img src={bridgeHotel} alt="" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">BRIDGE HOTEL</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim unde quisquam aliquam.</p>
                  </div>
                </div>
              </div> */}

              <div>
                <div className="flex max-sm:flex-col justify-center items-center  gap-5 ">
                  <div>
                    <img src={musingOfAkansha} alt="" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">MUSINGS OF AKANKSHA</h1>
                    <p className="py-3   text-lg text-gray-700">Arinon understands my audience perfectly! Their creative approach has taken my social media to the next level. </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex max-sm:flex-col justify-center items-center  gap-5 ">
                  <div>
                    <img src={peterCat} alt="" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold">PETER CAT</h1>
                    <p className="py-3 text-lg text-gray-700">Arinon has turned our cafe into a digital hotspot. Their posts capture the warm, cozy vibe we’re known for.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>


      <section id="faqs">
        {/* Accordians  */}
        <div className="bg-gray-100 py-20 px-6 sm:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Why Arinon Is the Right Choice for You
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left px-6 py-4 text-xl font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-t-lg focus:outline-none flex items-center justify-between"
                onClick={() => toggleAccordion(0)}
              >
                <span>01. Innovative Solutions</span>
                <span
                  className={`transform transition-transform duration-300 ${activeIndex === 0 ? "rotate-180" : ""
                    }`}
                >
                  ↑
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 0 ? "max-h-40" : "max-h-0"
                  }`}
              >
                <div className="px-6 py-4 text-gray-600">
                  We stay ahead of the curve, leveraging the latest tools and trends to create impactful solutions.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left px-6 py-4 text-xl font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-t-lg focus:outline-none flex items-center justify-between"
                onClick={() => toggleAccordion(1)}
              >
                <span>02. Industry Expertise</span>
                <span
                  className={`transform transition-transform duration-300 ${activeIndex === 1 ? "rotate-180" : ""
                    }`}
                >
                  ↑
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 1 ? "max-h-40" : "max-h-0"
                  }`}
              >
                <div className="px-6 py-4 text-gray-600">
                  With years of experience and a proven track record, our team delivers excellence in every project.
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left px-6 py-4 text-xl font-medium text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-t-lg focus:outline-none flex items-center justify-between"
                onClick={() => toggleAccordion(2)}
              >
                <span>03. Customer-Centric Approach</span>
                <span
                  className={`transform transition-transform duration-300 ${activeIndex === 2 ? "rotate-180" : ""
                    }`}
                >
                  ↑
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 2 ? "max-h-40" : "max-h-0"
                  }`}
              >
                <div className="px-6 py-4 text-gray-600">
                  We prioritize your success by providing tailored solutions and exceptional service.
                </div>
              </div>
            </div>
          </div>
          {/* button here */}
          {/* <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-[#1d3962] text-white font-bold rounded-lg hover:bg-[#A62E7A] transition duration-300"
            >
              Learn More About Our Approach
            </a>
          </div> */}
        </div>
      </section>

      {/* -------------------------------SECTION 7------------------------------- */}
      {/* map */}
      <section className="hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.892285649533!2d77.128384141839!3d28.491128988361147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1ee09641bef%3A0x77de0cc8f025a2d!2sLAXYA%20PRODUCTIONS%20PVT.%20LTD.%20%26%20STUDIOS!5e0!3m2!1sen!2sin!4v1732096941617!5m2!1sen!2sin"
          height={290}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </section>


      {/* -------------------------------Footer Section------------------------------- */}
      <footer className="px-14 py-6 bg-blue-50" id="contact">
        <div className="px-7 py-6 bg-blue-50 flex w-full items-center justify-center">
          <div className="flex bg-white py-8 px-5 rounded-md">
            <div className="flex flex-col gap-2 items-center">
              <h1 className="text-5xl font-semibold">Contact</h1>
              <input type="text" className="py-2 px-4 rounded-3xl w-full border " placeholder="👤Name" />
              <input type="email" className="py-2 px-4 rounded-3xl w-full border" placeholder="✉️ Email" />
              <textarea name="Description" id="disc" className="py-3 px-6 border w-72 h-36 rounded-3xl resize-none " placeholder="Drop Your Message"></textarea>

              <button className="relative inline-flex border items-center justify-start px-10 py-3 overflow-hidden font-medium transition-all bg-[#f37c20] rounded-full hover:bg-[#a62d7a] group">
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-400 transition-all border-[#1d3962] rounded-full"></span>
                <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Submit</span>
              </button>

            </div>
            <div className="w-64 h-72 max-sm:hidden">
              <img src={formImg} alt="" />
            </div>
          </div>
        </div>

        <hr />
        {/* LOCATION  */}

        <div className="flex justify-between max-md:justify-cente pt-10 gap-5 flex-wrap items-center ">

          <div className="flex items-center gap-3 max-md:flex-col">
            <img src={locationIcon} alt="" />
            <p className="text-lg">Arinon Digital, Ghitorni, Delhi NCR</p>
          </div>

          <div className="flex items-center gap-3 max-md:flex-col">
            <img src={callIcon} alt="" />
            <p className="tracking-wide text-lg">+91-0123456789</p>
          </div>

          <div className="flex items-center gap-3 max-md:flex-col">
            <img src={emailIcon} alt="" />
            <p className="text-lg">info@arinon.com</p>
          </div>

        </div>

        {/* ${stickyBarVisible ? "opacity-100" : "opacity-0"} this code will go for side sticky social bar */}

        <div className={`fixed right-0 top-1/2  inline-flex -translate-y-1/2 flex-col gap-2 pr-1`}>
          <i className="fa fa-facebook text-3xl  border py-2 px-[15px] rounded-[50%] bg-transparent hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i>
          <i className="fa fa-instagram text-3xl border py-2 px-3 rounded-[50%] bg-transparent hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i>
          {/* <i className="fa fa-whatsapp text-3xl  border py-2 px-3 rounded-[50%] bg-white hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i> */}
          <i className="fa fa-linkedin text-3xl  border py-2 px-3 rounded-[50%] bg-transparent hover:bg-[#a62d7a] hover:text-white transition-all duration-300"></i>
        </div>
      </footer>
      <button onClick={scrollToTop} className={`z-50 backdrop-blur-sm fixed bottom-5 right-5 p-3 rounded-full hover:bg-[#1d3962] bg-transparent text-black hoe border-gray-700 border  text-2xl  duration-300 hover:text-white  shadow-lg transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}>
        ⇡
      </button>
    </div >
  );
};

export default DigitalArinonPage;