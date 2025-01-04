import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const PopUp = () => {
    const [popUpVisible, setPopUpVisible] = useState(true);
    const toggleVisibility = () => {
        setPopUpVisible(!popUpVisible);
    };
    return (
        <div className={`${popUpVisible ? 'block' : 'hidden'} relative w-full h-full`}>
            <div className='top-2/4 left-2/4 fixed px-40 max-sm:px-4 py-40 e-a-pop-up max-md:w-full -translate-x-2/4 -translate-y-2/4'>
                <button
                    onClick={toggleVisibility}
                    className='top-0 right-2 absolute font-black text-3xl text-white'
                >
                    X
                </button>
                <h1 className='font-semibold text-4xl text-white'>
                    Do you want Early Access of Street Runner Our First Game
                </h1>
                <div className='flex justify-center items-center hover:bg-white/50 mx-auto my-7 px-2 py-4 border rounded-md w-2/4 text-white transition duration-300 outline-none'>
                    <Link to='/arinon-games/early-access'>
                        Get Early Access 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
