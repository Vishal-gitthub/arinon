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
import thumbnail11 from './Portfolio_Images/Aakanksha/_Thumbnail (3).png';
import thumbnail12 from './Portfolio_Images/Aakanksha/thumbnail1.jpg';
import thumbnail13 from './Portfolio_Images/Aakanksha/thumbnail2.jpg';
import thumbnail14 from './Portfolio_Images/Aakanksha/thumbnail3.jpg';

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
import pc_post1 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Dec_25.webp';
import pc_post2 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Dec_28.webp';
import pc_post3 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Dec_31.webp';
import pc_post4 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_02.webp';
import pc_post5 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_04.webp';
import pc_post6 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_06.webp';
import pc_post7 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_10.webp';
import pc_post8 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_12.webp';
import pc_post9 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_14.webp';
import pc_post10 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_16.webp';
import pc_post11 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_18.webp';
import pc_post12 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_20.webp';
import pc_post13 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_22.webp';
import pc_post14 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Jan_24.webp';
import pc_post15 from '../Portfolio/Portfolio_Images/peterCatImages/posts/Smoothie_Day-01.webp';

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
import Lpost1 from '../Portfolio/Portfolio_Images/3lcafe/8. Vegan Banner.jpg';
import Lpost2 from '../Portfolio/Portfolio_Images/3lcafe/4. Take Home.jpg';
import Lpost3 from '../Portfolio/Portfolio_Images/3lcafe/5. Tomato n cheese.jpg';
import Lpost4 from '../Portfolio/Portfolio_Images/3lcafe/12. Staff Discount-01.jpg';
import Lpost5 from '../Portfolio/Portfolio_Images/3lcafe/Amenity Posters.png';
import Lpost6 from '../Portfolio/Portfolio_Images/3lcafe/Digital Directories.png';
import Lpost7 from '../Portfolio/Portfolio_Images/3lcafe/Lift posters.png';
import Lpost8 from '../Portfolio/Portfolio_Images/3lcafe/post2.jpg';
// 3LCafeVideosImport
import video1 from '../Portfolio/Portfolio_Images/3lcafe/3LCAFE egg mayo croissant (1).mp4';
import video2 from '../Portfolio/Portfolio_Images/3lcafe/chocolate milk shake 1.mp4';
import video3 from '../Portfolio/Portfolio_Images/3lcafe/Comp 2.mp4';
import video4 from '../Portfolio/Portfolio_Images/3lcafe/D-1.mp4';

//Aiekyam

import aeikyamBanner from '../Portfolio/Portfolio_Images/Aeikyam/AeikyamBanner.jpg';
import aeikyamLogo from '../Portfolio/Portfolio_Images/Aeikyam/Aeikyamlogo.png';
import aeikyamPost1 from '../Portfolio/Portfolio_Images/Aeikyam/posts/13_sep.jpg';
import aeikyamPost2 from '../Portfolio/Portfolio_Images/Aeikyam/posts/25_sep.jpg';
import aeikyamPost3 from '../Portfolio/Portfolio_Images/Aeikyam/posts/29_sep.jpg';
import aeikyamPost4 from '../Portfolio/Portfolio_Images/Aeikyam/posts/5_oct.jpg';
import aeikyamPost5 from '../Portfolio/Portfolio_Images/Aeikyam/posts/post 10.png';
import aeikyamPost6 from '../Portfolio/Portfolio_Images/Aeikyam/posts/post 12.png';
import aeikyamPost7 from '../Portfolio/Portfolio_Images/Aeikyam/posts/post 2.png';
import aeikyamPost8 from '../Portfolio/Portfolio_Images/Aeikyam/posts/post 4.png';
import aeikyamPost9 from '../Portfolio/Portfolio_Images/Aeikyam/posts/post 6.png';
import aeikyamPost10 from '../Portfolio/Portfolio_Images/Aeikyam/posts/post 8.png';
import aeikyamPost11 from '../Portfolio/Portfolio_Images/Aeikyam/posts/Post-14.jpg';
import aeikyamPost12 from '../Portfolio/Portfolio_Images/Aeikyam/posts/Post-18.jpg';
import aeikyamPost13 from '../Portfolio/Portfolio_Images/Aeikyam/posts/Post-20.jpg';
import aeikyamPost14 from '../Portfolio/Portfolio_Images/Aeikyam/posts/Post-22.jpg';
import aeikyamPost15 from '../Portfolio/Portfolio_Images/Aeikyam/posts/Post-24.jpg';
import aeikyamPost16 from '../Portfolio/Portfolio_Images/Aeikyam/posts/Post-9_Sep.jpg';
import aeikyamPost17 from '../Portfolio/Portfolio_Images/Aeikyam/posts/Post_5-01.jpg';
import aeikyamPost18 from '../Portfolio/Portfolio_Images/Aeikyam/posts/Post_6-01.jpg';
import aeikyamPost19 from '../Portfolio/Portfolio_Images/Aeikyam/posts/Post_7-01.jpg';
import aeikyamPost20 from '../Portfolio/Portfolio_Images/Aeikyam/posts/Post_8-01.jpg';

// SPACIFY
import spacifyLogo from '../Portfolio/Portfolio_Images/Spacify/specifyLogo.png';
import spacifyBanner from '../Portfolio/Portfolio_Images/Spacify/spacifyBannere.jpg';

// appkart
import appkart_banner from '../Portfolio/Portfolio_Images/AppKart/appkart_banner.jpg';
import appkart_logo from '../Portfolio/Portfolio_Images/AppKart/app-kart-logo-White-png.webp';
export const PortfolioContext = createContext();
export const DataProvider = ({ children }) => {
    const objectData = [
        {
            id: 0,
            name: 'Musings Of Aakanksha',
            job: 'Influencer',
            BannerImg: aakankshaBanner,
            ClientIcon: moa_icon,
            description:
                'We manage Musings of Aakanksha’s Instagram and YouTube, creating visually captivating posts and editing engaging reels. From crafting content that resonates with the audience to managing the YouTube channel for maximum reach, we ensure a cohesive and impactful online presence. With a focus on storytelling and creative expression, we help Musings of Aakanksha connect meaningfully with their audience across platforms.',
            smLinks: {
                instagram: 'https://www.instagram.com/musingsofaakanksha/',
                facebook: ' https://www.facebook.com/Musingsofaakanksha',
                youtube: ' https://www.youtube.com/channel/UCC0zwGX1ZeI6Kw1pVrjWjEg',
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
                thumbnail11,
                thumbnail12,
                thumbnail13,
                thumbnail14,
            ],
        },
        {
            id: 1,
            name: 'Laxya Production',
            job: 'Studio',
            BannerImg: laxyaBanner,
            ClientIcon: laxyaLogo,
            description:
                "We manage Laxya Production's Instagram, crafting engaging posts, reels, and stories, while also maintaining their website and blogs. Along with professional video editing, we ensure their brand stands out with creative and impactful content across all platforms.",
            smLinks: {
                instagram: 'https://www.instagram.com/laxya_productions/',
                facebook: 'https://www.facebook.com/laxyaproductions',
                youtube: 'https://www.youtube.com/channel/UCMweC-XJROGLBQ03f7zlU9A',
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
            id: 2,
            name: 'The Bridge Hotel Bendigo',
            job: 'Hotel',
            BannerImg: bb_banner,
            ClientIcon: bbicon,
            description:
                "We manage the website for The Bridge Bendigo, designing a user-friendly platform with features like a secure payment gateway, voucher facility, and an efficient contact system to enhance customer interaction. Additionally, we handle the design of custom t-shirts, ensuring high-quality, creative designs that align with the brand's identity. ",
            smLinks: {
                instagram: '#',
                facebook: '#',
                youtube: '#',
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
            id: 3,
            name: 'Peter Cat ',
            job: 'Cafe',
            BannerImg: pc_banner,
            ClientIcon: peterCAtLogo,
            description:
                "We crafted an exceptional website for Peter Cat Cafe, capturing the essence of their unique ambiance and rich heritage. The website features a captivating front page that highlights the cafe's distinct charm, inviting visitors to explore its history and offerings. The menu page is visually appealing and easy to navigate, giving customers a seamless experience in discovering the cafe’s culinary delights. A fully functional contact page ensures effortless communication, while the integration of an online ordering system and table booking feature elevates the customer experience, enabling users to place orders and reserve their tables with ease.",
            smLinks: {
                instagram: 'https://www.instagram.com/petercatmalvern/',
                facebook: 'https://www.facebook.com/petercatcafe',
            },
            posts: [
                pc_post1,
                pc_post2,
                pc_post3,
                pc_post4,
                pc_post5,
                pc_post6,
                pc_post7,
                pc_post8,
                pc_post9,
                pc_post10,
                pc_post11,
                pc_post12,
                pc_post13,
                pc_post14,
                pc_post15,
            ],
        },
        {
            id: 4,
            name: '3L Cafe',
            job: 'Cafe',
            BannerImg: three_LBanner,
            ClientIcon: three_LCafe,
            description:
                "We manage the website for 3L Cafe, designing an exceptional user experience that showcases the cafe's offerings. The website features a clean and modern design with a well-organized layout for easy navigation.",
            smLinks: {
                instagram: 'https://www.instagram.com/3lcafe.official/',
                facebook: 'https://www.facebook.com/3lcafe.official',
            },
            posts: [Lpost1, Lpost2, Lpost3, Lpost4, Lpost5, Lpost6, Lpost7, Lpost8],
            videos: [video1, video2, video3, video4],
        },
        {
            id: 5,
            name: 'Aeikyam',
            job: 'Home Decor',
            BannerImg: aeikyamBanner,
            ClientIcon: aeikyamLogo,
            description:
                "We manage Aeikyam's website and Instagram, delivering visually appealing posts and a fully functional, user-friendly website. From crafting engaging content for their social media to optimizing the website’s performance, we ensure a seamless experience for users. With a focus on creating compelling brand narratives, we help Aeikyam maintain a strong and consistent online presence.",
            smLinks: {
                instagram: 'https://www.instagram.com/aeikyam1/',
                facebook: 'https://www.facebook.com/aeikyam',
            },
            posts: [
                aeikyamPost1,
                aeikyamPost2,
                aeikyamPost3,
                aeikyamPost4,
                aeikyamPost5,
                aeikyamPost6,
                aeikyamPost7,
                aeikyamPost8,
                aeikyamPost9,
                aeikyamPost10,
                aeikyamPost11,
                aeikyamPost12,
                aeikyamPost13,
                aeikyamPost14,
                aeikyamPost15,
                aeikyamPost16,
                aeikyamPost17,
                aeikyamPost18,
                aeikyamPost19,
                aeikyamPost20,
            ],
        },
        {
            id: 6,
            name: 'APPKART STUDIO',
            job: 'Game Development co. ',
            BannerImg: appkart_banner,
            ClientIcon: appkart_logo,
            description:
                "We manage Appkart's website and digital marketing efforts, delivering a visually appealing, user-friendly website alongside engaging marketing strategies. From optimizing the website’s performance to creating targeted campaigns, we ensure a seamless online experience for their customers. With a focus on driving growth through digital marketing and enhancing the website’s user experience, we help Appkart build a strong, impactful digital presence.",
            smLinks: {
                instagram: 'https://www.instagram.com/aeikyam1/',
                facebook: 'https://www.facebook.com/aeikyam',
            },
            posts: [],
        },
        {
            id: 7,
            name: 'Spacify',
            job: 'Co Working Space',
            BannerImg: spacifyBanner,
            ClientIcon: spacifyLogo,
            description:
                "We manage Spacify's website and Instagram, delivering a visually appealing, user-friendly website and engaging social media content. From crafting compelling posts for Instagram to optimizing the website’s performance, we ensure a seamless experience for users. With a focus on showcasing their coworking spaces and building a strong online presence, we help Spacify maintain a consistent and impactful digital identity.",
            smLinks: {
                instagram:
                    'https://www.instagram.com/spacifycowork?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
                facebook: 'https://www.facebook.com/aeikyam',
            },
            posts: [],
        },
    ];

    const [data, setData] = useState(objectData);

    // this is for Career Form Page
    const [formVisible, setFormVisible] = useState(false);
    const ToggleForm = () => {
        setFormVisible(!formVisible);
    };
    return (
        <PortfolioContext.Provider value={{ data, setData, formVisible, ToggleForm }}>
            {children}
        </PortfolioContext.Provider>
    );
};
export default DataProvider;
