import { useState, createContext } from 'react';

// aakanksha
import aakankshaBanner from './Portfolio_Images/Aakanksha/aakankshaBanner.jpg';
import moa_icon from './Portfolio_Images/Aakanksha/Musings Of Aakanksha_icon.png';
import thumbnail1 from './Portfolio_Images/Aakanksha/14nov thumbnail.jpg';
import thumbnail2 from './Portfolio_Images/Aakanksha/14Sep-thumbnail.jpg';
import thumbnail3 from './Portfolio_Images/Aakanksha/19 Oct_thumbnail.jpg';
import thumbnail4 from './Portfolio_Images/Aakanksha/21Sep-thumbnail-01.jpg';
import thumbnail5 from './Portfolio_Images/Aakanksha/28Sep-thumbnail-01.jpg';
import thumbnail6 from './Portfolio_Images/Aakanksha/28th Oct_thumbnail-01.jpg';
import thumbnail7 from './Portfolio_Images/Aakanksha/5th thumbnail, 30 nov.jpg';
import thumbnail8 from './Portfolio_Images/Aakanksha/6th series thumbnail.jpg';
import thumbnail9 from './Portfolio_Images/Aakanksha/7Sep-thumbnail.jpg';
import thumbnail10 from './Portfolio_Images/Aakanksha/9th nov thumbnail.jpg';

//---------------------- laxya Imports ---------------------
import laxyaLogo from './Portfolio_Images/LaxyaImages/laxyaLogo.png';
import laxyaBanner from './Portfolio_Images/LaxyaImages/laxyaBanner.jpg';
import post1 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 1.png';
import post2 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 10.png';
import post3 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 11.png';
import post4 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 12.png';
import post5 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 14.png';
import post6 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 15.png';
import post7 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 16.png';
import post8 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 16.png';
import post9 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 17.png';
import post10 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 18.png';
import post11 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 19.png';
import post12 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 2.png';
import post13 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 24.png';
import post14 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 25.png';
import post15 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 3.png';
import post16 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 4.png';
import post17 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 5.png';
import post18 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 6.png';
import post19 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 7.png';
import post20 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 8.png';
import post21 from '../Portfolio/Portfolio_Images/LaxyaImages/postsGallery/Artboard 9.png';

//peter cat
import pc_banner from '../Portfolio/Portfolio_Images/peterCatImages/Peter Cat logo board_210cm x 40.5cm .svg';
import peterCAtLogo from '../Portfolio/Portfolio_Images/peterCatImages/Peter-Catlog.png';

//bridge bendigo
import bb_banner from '../Portfolio/Portfolio_Images/BridgeBendigo/bb+banner.jpg';
import bbicon from '../Portfolio/Portfolio_Images/BridgeBendigo/New Project.png';
import tshirtDesign1 from '../Portfolio/Portfolio_Images/BridgeBendigo/BGD.jpg';
import tshirtDesign2 from '../Portfolio/Portfolio_Images/BridgeBendigo/Polo-Shirt.jpg';
import tshirtDesign3 from '../Portfolio/Portfolio_Images/BridgeBendigo/Round-necks.jpg';
import tshirtDesign4 from '../Portfolio/Portfolio_Images/BridgeBendigo/T-Shirt-Design_01.jpg';
import tshirtDesign5 from '../Portfolio/Portfolio_Images/BridgeBendigo/T-Shirt-Design_02.jpg';
import tshirtDesign6 from '../Portfolio/Portfolio_Images/BridgeBendigo/T-Shirt-Design_03.jpg';
//3L cafe
import three_LCafe from '../Portfolio/Portfolio_Images/3lcafe/3lLogo.png';
import three_LBanner from '../Portfolio/Portfolio_Images/3lcafe/3LBanner.jpg';

export const PortfolioContext = createContext();
export const DataProvider = ({ children }) => {
    const objectData = [
        {
            name: 'Musings Of Aakanksha',
            job: 'Influencer',
            BannerImg: aakankshaBanner,
            ClientIcon: moa_icon,
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at voluptatibus dolor nulla voluptatem tenetur inventore mollitia odit laborum consequuntur quia provident ducimus est aperiam esse expedita in commodi quos, consectetur neque? Adipisci, cum?',
            smLinks: {
                instagram: 'https://instagram.com/musingsofaakanksha',
                facebook: 'https://facebook.com/musingsofaakanksha',
                youtube: 'https://www.youtube.com/@MusingsofAakanksha',
            },
            thumbnails: [
                thumbnail1,
                thumbnail2,
                thumbnail3,
                thumbnail4,
                thumbnail5,
                thumbnail6,
                thumbnail7,
                thumbnail8,
                thumbnail9,
                thumbnail10,
            ],
        },
        {
            name: 'Laxya Production',
            job: 'Studio',
            BannerImg: laxyaBanner,
            ClientIcon: laxyaLogo,
            description:
                "We manage Laxya Production's Instagram, crafting engaging posts, reels, and stories, while also maintaining their website and blogs. Along with professional video editing, we ensure their brand stands out with creative and impactful content across all platforms.",
            smLinks: {
                instagram: 'https://instagram.com/laxyaproduccion',
                facebook: 'https://facebook.com/laxyaproduccion',
                youtube: 'https://www.youtube.com/@LaxyaProduccion',
            },
            postsGallery: [
                post1,
                post2,
                post3,
                post4,
                post5,
                post6,
                post7,
                post8,
                post9,
                post10,
                post11,
                post12,
                post13,
                post14,
                post15,
                post16,
                post17,
                post18,
                post19,
                post20,
                post21,
            ],
        },
        {
            name: 'The Bridge Hotel Bendigo',
            job: 'Hotel',
            BannerImg: bb_banner,
            ClientIcon: bbicon,
            description:
                "We manage the website for The Bridge Bendigo, designing a user-friendly platform with features like a secure payment gateway, voucher facility, and an efficient contact system to enhance customer interaction. Additionally, we handle the design of custom t-shirts, ensuring high-quality, creative designs that align with the brand's identity. ",
            smLinks: {
                instagram: 'https://instagram.com/etherealcreations',
                facebook: 'https://facebook.com/etherealcreations',
                youtube: 'https://www.youtube.com/@EtherealCreations',
            },
            teesDesign: [
                tshirtDesign1,
                tshirtDesign2,
                tshirtDesign3,
                tshirtDesign4,
                tshirtDesign5,
                tshirtDesign6,
            ],
        },
        {
            name: 'Peter Cat ',
            job: 'Restaurant',
            BannerImg: pc_banner,
            ClientIcon: peterCAtLogo,
            description:
                'Capture memories that last a lifetime. Pixel Perfect Studios brings your visions to life through the lens of creativity.',
            smLinks: {
                instagram: 'https://instagram.com/pixelperfectstudios',
                facebook: 'https://facebook.com/pixelperfectstudios',
                youtube: 'https://www.youtube.com/@PixelPerfectStudios',
            },
        },
        {
            name: '3L Cafe',
            job: 'Cafe',
            BannerImg: three_LBanner,
            ClientIcon: three_LCafe,
            description:
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, numquam iste commodi aspernatur saepe alias adipisci maiores officia labore. Labore dolor dolorum non omnis, necessitatibus odio tempore quam obcaecati provident aliquid ducimus sapiente officia porro voluptatibus numquam, animi illo! Magnam voluptatum quo quaerat dolor.',
            smLinks: {
                instagram: 'https://instagram.com/pixelperfectstudios',
                facebook: 'https://facebook.com/pixelperfectstudios',
                youtube: 'https://www.youtube.com/@PixelPerfectStudios',
            },

        },
    ];

    const [data, setData] = useState(objectData);
    return (
        <PortfolioContext.Provider value={{ data, setData }}>{children}</PortfolioContext.Provider>
    );
};
