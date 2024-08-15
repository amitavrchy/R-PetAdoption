import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div
            className="hero min-h-screen bg-cover bg-center place-items-start"
            style={{ backgroundImage: `url('https://i.ibb.co/HKZXJ0y/photo-human-footprint-beside-dog-600nw-671318779.webp')`, backgroundSize: 'cover' }}
        >
            <div className="flex hero-overlay bg-opacity-50 bg-black justify-center"></div>
            <div className="text-neutral-content mt-10 p-10">
                <div className="lg:w-2/3">
                    <h1 className="mb-5 text-5xl font-bold">Find Your Perfect Feline Friend</h1>
                    <p className="mb-5 text-xl">Whether you want to adopt or rehome a pet, we're here to help.</p>
                    <div className="flex flex-col gap-4">
                        <Link to="/listing" className="btn-xl rounded-xl hover:bg-blue-600 hover:scale-105 transition-transform duration-300 hover:text-white text-gray-800 text-xl bg-primary p-5 flex items-center justify-center gap-5 border-none text-center">
                        <img className='h-20' src="https://i.ibb.co/72Bxqnt/home-icon-2.png" alt="" />
                            I want to adopt a pet
                        </Link>
                        <Link to="/user-dashboard/add" className="btn-xl rounded-xl hover:bg-blue-600 hover:scale-105 transition-transform duration-300 hover:text-white text-xl text-white bg-[#5FA503] p-5 gap-5 justify-center border-none text-center flex items-center">
                            <img className='h-20' src="https://i.ibb.co/KNyTpdR/home-icon-1.png" alt="" />
                            I want to rehome my pet
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
