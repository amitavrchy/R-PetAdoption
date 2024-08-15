import React from 'react';
import { Link } from 'react-router-dom';
import usePetList from '../../hooks/usePetList';

const HomePagePets = () => {
    const [data] = usePetList();
    const petsToShow = data?.slice(0, 4);

    return (
        <div className="bg-gray-100 py-16 px-8">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-secondary">Find Your Perfect Pet</h1>
                <p className="text-lg text-gray-600 mt-4">Discover loving pets waiting for a forever home</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {petsToShow?.map(pet => (
                    <div key={pet.id} className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <figure>
                            <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover rounded-t-xl" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-2xl text-gray-800">{pet.name}</h2>
                            <div className='text-gray-600'>
                                <p><span className='font-bold'>Breed:</span> {pet.breed}</p>
                                <p><span className='font-bold'>Location:</span> {pet.location}</p>
                            </div>
                            <div className="card-actions mt-4">
                                <Link to={`/pets/${pet._id}`} className="btn bg-green-500 hover:bg-green-600 w-full text-white">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <Link to="/listing" className="btn bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
                    Show More
                </Link>
            </div>
        </div>
    );
};

export default HomePagePets;
