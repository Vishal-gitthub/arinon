import React from 'react';
import videoEditing from '../CareerPages/CareerPageImages/department1.jpg';
import s_w_Devlopment from '../CareerPages/CareerPageImages/department2WebDevlopment.jpg';
import businessDev from '../CareerPages/CareerPageImages/department3BusinessDevlopment.jpg';
import PortfolioNavbar from '../Portfolio/PortfolioNavbar';
import { Link } from 'react-router-dom';
const department = [
    {
        img: videoEditing,
        name: 'Video Editing',
        description: 'Lorem ipsum dolor sit amet consectetur,icia, labore!',
        role: 'Veritatis nam quisquam delectus perspiciatis error consequuntur optio temporibus. Porro suscipit incidunt pariatur',
        to: '/arinon-digital/department/1',
    },
    {
        img: s_w_Devlopment,
        name: 'S/W Devlopment',
        description: 'Lorem ipsum dolor sit amet consectetur,icia, labore!',
        role: 'Veritatis nam quisquam delectus perspiciatis error consequuntur optio temporibus. Porro suscipit incidunt pariatur',
    },
    {
        img: businessDev,
        name: 'Sales Marketing',
        description: 'Lorem ipsum dolor sit amet consectetur,icia, labore!',
        role: 'Veritatis nam quisquam delectus perspiciatis error consequuntur optio temporibus. Porro suscipit incidunt pariatur',
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
                                            <Link to={data.to}>
                                                <i className='fa-chevron-right hover:bg-white py-[0.6rem] pr-[0.72rem] pl-[0.78rem] border rounded-full hover:text-black transition duration-300 fa'></i>
                                            </Link>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
