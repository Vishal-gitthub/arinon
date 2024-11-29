import React, { useEffect } from "react";
import frontPageLeftVideo from "../Video_Files/frontPage_leftSide_Video.mp4";
import gsap from "gsap";
import "../SecondaryStyle.css";
import { Link } from "react-router-dom";
// import tabVideo from "../Video_Files/Untitled video - Made with Clipchamp.mp4"
// import DigitalArinonPage from "../Digital_Arinon/DigitalArinonPage";
// import testImg from "../Image_Files/WhatsApp Image 2024-11-19 at 16.24.07_794332b0.jpg";
import web2 from "../Video_Files/web2.mp4";
import tabImg from "../Image_Files/tabImgTest.jpg";
import arinonLogo from "../Assets/Logo/Arinon_Logo_Icon-diffrentSize.svg"
import arinonGames from "../Assets/Logo/Arinon_Games-02.png"
const FrontPage = () => {
  useEffect(() => {
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
  }, []);
  return (
    <>
      {/* -------------------------------SECTION 1------------------------------- */}
      <header className="overflow-hidden">
        <div>
          <div className="flex max-sm:flex-col max-sm:h-full w-full h-screen ">
            {/* -------------------------------CHILD SECTION A------------------------------- */}
            <div className="w-[60%] max-sm:w-full bg-black text-white left flex items-center justify-center">
              {/* for mobile */}
              <video
                className="w-full h-full object-cover hidden max-sm:block max-md:hidden"
                autoPlay
                muted
                loop
              >
                <source src={web2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* for tablet */}
              {/* <video
                className="w-full h-full object-cover bg-center hidden max-sm:hidden max-md:block"
                autoPlay
                loop
              >
              <source
              src={tabVideo}
              type="video/mp4"
              />
              Your browser does not support the video tag.
              </video> */}
              <img src={tabImg} alt="" className="w-full h-full object-cover bg-center hidden max-sm:hidden max-md:block"
              />


              {/* for desktop */}
              <video
                className="w-full h-full object-cover block max-sm:hidden max-md:hidden"
                autoPlay
                loop
              >
                <source src={web2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>

            {/* -------------------------------CHILD SECTION B------------------------------- */}
            <div className="w-[40%] max-sm:w-full  right ">
              <Link to="/arinon-digital">
                <div className="bg-[#1d3962] w-full h-2/4 text-white px-4">

                  <div className=" items-center flex justify-center flex-col pt-14">
                    <img src={arinonLogo} className="w-[20rem]" alt="" />
                    <h1 className="text-5xl font-bold -mt-12 ml-40 ">Digital</h1>

                    <div className="text-right pt-11">
                      {/*  className="relative inline-flex border items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-[#1d3962] rounded-full hover:bg-[#a62d7a] group">
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-400 transition-all border-[#a62d7a] rounded-full"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Get Started Now</span>
                      </Link> */}
                    </div>
                  </div>

                </div>
              </Link>

              <div className=" w-full bg-[#f37c20] h-2/4">
                <div className="text-white px-4">
                  <div className="flex justify-end items-end ">

                    <div className="w-[200px] h-[100px]">
                      <img src={arinonGames} alt="" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <h1 className="text-5xl font-bold">Mobile Games</h1>
                  <p className="pl-11 pt-2 text-xl">
                    Adorn Your Life With Game
                  </p>
                  <div className="text-left pt-11">
                    <Link to="/arinon-games" className="relative inline-flex border items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-[#f37c20] rounded-full hover:bg-[#a62d7a] group">
                      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-400 transition-all border-[#1d3962] rounded-full"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-500 ease-in-out group-hover:text-white">Get Started Now</span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default FrontPage;
