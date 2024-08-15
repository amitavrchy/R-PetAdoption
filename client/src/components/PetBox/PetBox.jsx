import React from 'react';
import { PiDog } from "react-icons/pi";
import { FaCat } from "react-icons/fa";
import { IoPawSharp } from "react-icons/io5";
import { GiRabbit } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const PetBox = () => {
    const navigate = useNavigate();
    
    const onSelectCategory = (pet) => {
        navigate(`/category/${pet}`);
    }

    return (
        <div className="relative flex justify-center items-center w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:w-1/2 justify-center items-center py-10 md:p-0">
                <div
                    className="relative bg-gray-300 text-secondary w-40 h-40 text-3xl rounded-2xl flex flex-col gap-2 justify-center items-center md:top-[-40px] cursor-pointer"
                    onClick={() => onSelectCategory('dog')}
                >
                    <PiDog />
                    <p className='text-xl font-bold text-secondary'>Dog</p>
                </div>
                <div
                    className="relative bg-gray-300 text-secondary w-40 h-40 text-3xl rounded-2xl flex flex-col gap-2 justify-center items-center md:top-[-40px] cursor-pointer"
                    onClick={() => onSelectCategory('cat')}
                >
                    <FaCat />
                    <p className='text-xl font-bold text-secondary'>Cat</p>
                </div>
                <div
                    className="relative bg-gray-300 text-secondary w-40 h-40 text-3xl rounded-2xl flex flex-col gap-2 justify-center items-center md:top-[-40px] cursor-pointer"
                    onClick={() => onSelectCategory('other')}
                >
                    <IoPawSharp />
                    <p className='text-xl font-bold text-secondary'>Other Animals</p>
                </div>
                <div
                    className="relative bg-gray-300 text-secondary w-40 h-40 text-3xl rounded-2xl flex flex-col gap-2 justify-center items-center md:top-[-40px] cursor-pointer"
                    onClick={() => onSelectCategory('rabbit')}
                >
                    <GiRabbit />
                    <p className='text-xl font-bold text-secondary'>Rabbit</p>
                </div>
            </div>
        </div>
    );
};

export default PetBox;
