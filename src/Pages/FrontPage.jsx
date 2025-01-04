import React, { useEffect } from "react";
import frontPageLeftVideo from "../Video_Files/frontPage_leftSide_Video.mp4";
import gsap from "gsap";
import "../SecondaryStyle.css";
import { Link } from "react-router-dom";
import web2 from "../Video_Files/Arinon (1920 x 1080 px).mp4";
import tabImg from "../Image_Files/tabImgTest.jpg";
import arinonLogo from "../Assets/Logo/Arinon_Logo_Icon-diffrentSize.svg"
import arinonGames from "../Assets/Logo/Arinon_Games-White-Logo.png"
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
              <video
                className="w-full h-full object-cover bg-center hidden max-sm:hidden max-md:block"
                autoPlay
                loop
              >
                <source
                  src={web2}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>



              {/* for desktop */}
              <video
                className="w-full h-full object-cover block max-sm:hidden max-md:hidden"
                autoPlay loop muted preload="auto"

              >
                <source src={web2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>

            {/* -------------------------------CHILD SECTION B------------------------------- */}
            <div className="w-[40%] max-sm:w-full  right ">
              <Link to="/arinon-digital">
                <div className="bg-[#1d3962] w-full h-2/4 text-white px-4 max-sm:py-7 flex justify-center items-center">
                  <div className=" items-center flex justify-center flex-col py-14">
                    <img src={arinonLogo} className="w-[20rem]" alt="" />
                    <h1 className="text-[2rem] font-bold -mt-[3.9rem] ml-52 ">Digital</h1>
                  </div>

                </div>
              </Link>
              <Link to="/arinon-games">
                <div className="bg-orange-custom w-full h-2/4 text-white px-4 max-sm:py-7  flex justify-center items-center">
                  <div className=" items-center flex justify-center flex-col py-14">
                    <img src={arinonGames} className="w-[20rem]" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default FrontPage;
