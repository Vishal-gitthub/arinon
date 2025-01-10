import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';

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
const Aakanksha = lazy(() => import('./Digital_Arinon/Portfolio/portfolioComponent/Aakanksha.jsx'));
const Laxya = lazy(() => import('./Digital_Arinon/Portfolio/portfolioComponent/Laxya.jsx'));
const PeterCat = lazy(() => import('./Digital_Arinon/Portfolio/portfolioComponent/PeterCat.jsx'));
const BridgeBendigo = lazy(() =>
    import('./Digital_Arinon/Portfolio/portfolioComponent/BridgeBendigo.jsx'),
);
const LCafe = lazy(() => import('./Digital_Arinon/Portfolio/portfolioComponent/LCafe.jsx'));
const Aeikyam = lazy(() => import('./Digital_Arinon/Portfolio/portfolioComponent/Aeikyam.jsx'));
const Spacify = lazy(() => import('./Digital_Arinon/Portfolio/portfolioComponent/Spacify.jsx'));
const AppKart = lazy(() => import('./Digital_Arinon/Portfolio/portfolioComponent/AppKart.jsx'));
const Career = lazy(() => import('./Digital_Arinon/CareerPages/Career.jsx'));
const Department = lazy(() => import('./Digital_Arinon/CareerPages/Department.jsx'));
const Department_1 = lazy(() =>
    import('./Digital_Arinon/CareerPages/ChildComponents/Department_1.jsx'),
);
const Department_2 = lazy(() =>
    import('./Digital_Arinon/CareerPages/ChildComponents/Department_2.jsx'),
);
const Department_3 = lazy(() =>
    import('./Digital_Arinon/CareerPages/ChildComponents/Department_3.jsx'),
);

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
                    </Route>

                    {/* portfolio components of digital arinon */}

                    <Route path='/arinon-digital/portfolio/1' element={<Aakanksha />} />
                    <Route path='/arinon-digital/portfolio/2' element={<Laxya />} />
                    <Route path='/arinon-digital/portfolio/3' element={<PeterCat />} />
                    <Route path='/arinon-digital/portfolio/4' element={<BridgeBendigo />} />
                    <Route path='/arinon-digital/portfolio/5' element={<LCafe />} />
                    <Route path='/arinon-digital/portfolio/6' element={<Aeikyam />} />
                    <Route path='/arinon-digital/portfolio/7' element={<Spacify />} />
                    <Route path='/arinon-digital/portfolio/8' element={<AppKart />} />
                    {/* <Route path='/arinon-digital/career' element={<CareerForm />} /> */}
                    <Route path='/arinon-digital/career' element={<Career />} />
                    <Route path='/arinon-digital/department' element={<Department />} />
                    <Route path='/arinon-digital/department/1' element={<Department_1 />} />
                    <Route path='/arinon-digital/department/2' element={<Department_2 />} />
                    <Route path='/arinon-digital/department/3' element={<Department_3 />} />
                    {/* -------------------------------- */}

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
            <Outlet />
        </div>
    );
};

export default App;
