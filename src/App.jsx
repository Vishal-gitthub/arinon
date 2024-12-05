import React from "react";
import FrontPage from "./Pages/FrontPage";
import CustomCursor from "./Pages/Cursor";
import { Routes, Route } from "react-router-dom";
import DigitalArinonPage from "./Digital_Arinon/DigitalArinonPage";
import Game_page from "./Games_Arinon/Game_page";
import "./SecondaryStyle.css"
import Test from "./Pages/Test";
import AboutUs from "./Games_Arinon/Components/About_us/About-Us";
const App = () => {
  return (
    <div>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/arinon-digital" element={<DigitalArinonPage />} />
        <Route path="/arinon-games" element={<Game_page />} />
        <Route path="/games~about-us" element={<AboutUs />} />
        <Route path="/test" element={<Test />} />

      </Routes>

    </div>
  )
};

export default App;
