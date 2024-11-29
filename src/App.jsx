import React from "react";
import FrontPage from "./Pages/FrontPage";
import CustomCursor from "./Pages/Cursor";
import { Routes, Route } from "react-router-dom";
import DigitalArinonPage from "./Digital_Arinon/DigitalArinonPage";
import Game_page from "./Games_Arinon/Game_page";
import "./SecondaryStyle.css"
import TestPage from "./Pages/TestPage";
const App = () => {
  return (
    <div>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/arinon-digital" element={<DigitalArinonPage />} />
        <Route path="/arinon-games" element={<Game_page />} />

      </Routes>

    </div>
  )
};

export default App;
