import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FrontPage = lazy(() => import("./Pages/FrontPage.jsx"))
const DigitalArinonPage = lazy(() => import("./Digital_Arinon/DigitalArinonPage.jsx"))
const Game_page = lazy(() => import("./Games_Arinon/Game_page"))
const AboutUs = lazy(() => import("./Games_Arinon/Components/About_us/About-Us.jsx"))

const PrivacyPolicyDigital = lazy(() => import("./Digital_Arinon/DigitalPrivacyPolicy"));
const PrivacyPolicyGame = lazy(() => import("./Games_Arinon/PrivacyPolicyGames"));

import CustomCursor from "./Pages/Cursor";
import GamesLayout from "./Layouts/GamesLayout";
import DigitalLayout from "./Layouts/DigitalLayout";

import "./SecondaryStyle.css"
const App = () => {
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === "/arinon-digital") {
      document.body.className = "bg-white"
    }
    else {
      document.body.className = "bg-black"
    }
  })
  return (
    <div>
      <CustomCursor />
      <Suspense fallback={<div className="w-screen h-screen flex justify-center items-center bg-black"><span className="loader"></span></div>}>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route element={<DigitalLayout />}>
            <Route path="/arinon-digital" element={<DigitalArinonPage />} />
          </Route>
          <Route path="/arinon-digital/privacy-policy" element={<PrivacyPolicyDigital />} />
          <Route element={<GamesLayout />}>
            <Route path="/arinon-games" element={<Game_page />} />
            <Route path="/games~about-us" element={<AboutUs />} />
          </Route>
          <Route path="/arinon-games/privacy-policy" element={<PrivacyPolicyGame />} />
        </Routes>
      </Suspense>
    </div>
  )
};
export default App;
