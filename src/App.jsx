import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const FrontPage = lazy(() => import('./Pages/FrontPage.jsx'));
const DigitalArinonPage = lazy(() => import('./Digital_Arinon/DigitalArinonPage.jsx'));
const GamePage = lazy(() => import('./Games_Arinon/Game_page'));
const AboutUs = lazy(() => import('./Games_Arinon/Components/About_us/About-Us.jsx'));
const Support = lazy(() => import('./Games_Arinon/Support.jsx'));
const PrivacyPolicyDigital = lazy(() => import('./Digital_Arinon/DigitalPrivacyPolicy'));
const PrivacyPolicyGame = lazy(() => import('./Games_Arinon/PrivacyPolicyGames'));
const EarlyAccess = lazy(() => import('./Games_Arinon/EarlyAccess.jsx'));
const NotFound = lazy(() => import('./NotFound.jsx'));

import ScrollToTop from './ScrollToTop.jsx';
import CustomCursor from './Pages/Cursor';
import GamesLayout from './Layouts/GamesLayout';
import DigitalLayout from './Layouts/DigitalLayout';

import './SecondaryStyle.css';
import Aakanksha from './Digital_Arinon/Portfolio/portfolioComponent/Aakanksha.jsx';
import Laxya from './Digital_Arinon/Portfolio/portfolioComponent/Laxya.jsx';
import PeterCat from './Digital_Arinon/Portfolio/portfolioComponent/PeterCat.jsx';
import BridgeBendigo from './Digital_Arinon/Portfolio/portfolioComponent/BridgeBendigo.jsx';
import LCafe from './Digital_Arinon/Portfolio/portfolioComponent/LCafe.jsx';
const App = () => {
    const location = useLocation();

    useEffect(() => {
        document.body.className = 'bg-white'; // No need for condition as both cases are the same
    }, []);

    return (
        <div className='font-custom'>
            <CustomCursor />
            <ScrollToTop />
            <Suspense
                fallback={
                    <div className='flex justify-center items-center bg-black w-screen h-screen'>
                        <span className='loader'></span>
                    </div>
                }
            >
                <Routes>
                    {/* FrontPage Route */}
                    <Route path='/' element={<FrontPage />} />

                    {/* Digital Layout Routes */}
                    <Route element={<DigitalLayout />}>
                        <Route path='/arinon-digital' element={<DigitalArinonPage />} />
                        <Route
                            path='/arinon-digital/privacy-policy'
                            element={<PrivacyPolicyDigital />}
                        />

                        {/* portfolio components of digital arinon  */}
                        <Route path='/arinon-digital/1' element={<Aakanksha />} />
                        <Route path='/arinon-digital/2' element={<Laxya />} />
                        <Route path='/arinon-digital/3' element={<PeterCat />} />
                        <Route path='/arinon-digital/4' element={<BridgeBendigo />} />
                        <Route path='/arinon-digital/5' element={<LCafe />} />
                    </Route>

                    {/* Games Layout Routes */}
                    <Route element={<GamesLayout />}>
                        <Route path='/arinon-games' element={<GamePage />} />
                        <Route path='/arinon-games/about-us' element={<AboutUs />} />
                        <Route path='/arinon-games/support' element={<Support />} />
                        <Route path='/arinon-games/early-access' element={<EarlyAccess />} />
                        <Route
                            path='/arinon-games/privacy-policy'
                            element={<PrivacyPolicyGame />}
                        />
                    </Route>

                    {/* Catch-all Route */}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
