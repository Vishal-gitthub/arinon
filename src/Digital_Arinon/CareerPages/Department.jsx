import React from 'react';
import videoEditing from '../CareerPages/CareerPageImages/department1.jpg';
import s_w_Devlopment from '../CareerPages/CareerPageImages/department2WebDevlopment.jpg';
import businessDev from '../CareerPages/CareerPageImages/department3BusinessDevlopment.jpg';
import PortfolioNavbar from '../Portfolio/PortfolioNavbar';
import { Link } from 'react-router-dom';
const department = [
    {
        img: videoEditing,
        name: 'Video Editor - Intern',
        description: 'Master the art of storytelling through visuals, cuts, and transitions.',
        role: 'Edit, enhance, and produce high-quality videos that captivate audiences and meet creative goals.',
        to: '/arinon-digital/department/1',
    },
    {
        img: s_w_Devlopment,
        name: 'Social Media - Intern',
        description: 'Develop and maintain cutting-edge software solutions.',
        role: 'Design, code, and debug applications while ensuring robust and scalable software architecture.',
        to: '/arinon-digital/department/2',
    },
    {
        img: businessDev,
        name: 'Junior Sales Executive - Intern',
        description: 'Drive growth through innovative sales strategies and marketing campaigns.',
        role: 'Engage with clients, identify opportunities, and implement data-driven marketing approaches to maximize ROI.',
        to: '/arinon-digital/department/3',
    },
];
export default function Department() {
    return (
        <div>
            <PortfolioNavbar />
            <div>
                <h1 className='pt-36 font-semibold text-4xl text-center'>
                    Which Team Do You Want To Join
                </h1>
                <div className='gap-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:px-5 md:px-10 lg:px-40 w-full'>
                    {department.map((data, index) => (
                        <div key={index} className='py-10'>
                            <Link to={data.to}>
                                <div className='relative w-full h-96 group'>
                                    <img
                                        src={data.img}
                                        alt={data.name}
                                        className='rounded-lg w-full h-full object-cover' // Rounded corners for the image
                                    />
                                    <div className='absolute inset-0 bg-black/25 rounded-lg'>
                                        {/* Overlay with rounded corners */}
                                        <div className='bottom-0 absolute px-2 py-5 w-full text-white'>
                                            <div className='flex justify-between items-center'>
                                                <h1 className='font-bold text-xl sm:text-2xl'>
                                                    {data.name}
                                                </h1>
                                                <i className='fa-chevron-right hover:bg-white py-[0.6rem] pr-[0.72rem] pl-[0.78rem] border rounded-full hover:text-black transition duration-300 fa'></i>
                                            </div>
                                            <p className='group-hover:hidden text-sm text-white/80'>
                                                {data.description}
                                            </p>
                                            <p className='group-hover:block hidden text-sm text-white/80'>
                                                {data.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
