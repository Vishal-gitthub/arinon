import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center bg-gray-100 h-screen'>
            <div className='text-center'>
                <h1 className='mb-4 font-bold text-5xl text-red-600'>404</h1>
                <p className='mb-4 text-xl'>Oops! The page you're looking for doesn't exist.</p>
                <p className='text-lg'>
                    You can go back to the{' '}
                    <Link to='/' className='text-blue-500 hover:underline'>
                        Home Page
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default NotFound;
