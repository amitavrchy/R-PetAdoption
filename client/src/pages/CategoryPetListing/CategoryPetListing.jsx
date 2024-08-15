import React, { useState, useEffect } from 'react';
import usePetList from '../../hooks/usePetList';
import { useParams } from 'react-router-dom';

const CategoryPetListing = () => {
    const { category } = useParams(); 
    const [filteredPets, setFilteredPets] = useState([]);
    const [data] = usePetList();
    const pets = data;

    useEffect(() => {
        if (pets && category) {
            const filtered = pets?.filter(pet => pet.species.value === category.toLowerCase());
            setFilteredPets(filtered);
        }
    }, [pets, category]);
return (
    <div className='p-16'>
        <h2 className='text-center text-3xl text-secondary font-bold mb-10'>Showing Category: {category}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {filteredPets.map(pet => (
                <div key={pet.id} className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{pet.name}</h2>
                        <div className='flex justify-between'>
                            <div>
                                <p className="text-sm"><span className='font-bold'>Breed:</span> {pet.breed}</p>
                                <p className="text-sm"><span className='font-bold'>Location:</span> {pet.location}</p>
                            </div>
                            <div>
                                <p className="text-sm"><span className='font-bold'>Age:</span> {pet.age}</p>
                                <p className="text-sm"><span className='font-bold'>Weight:</span> {pet.weight}</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <a href={`/pets/${pet._id}`} className="btn bg-greenTheme w-full text-white">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default CategoryPetListing;
