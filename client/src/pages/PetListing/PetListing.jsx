import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import usePetList from '../../hooks/usePetList';

const PetListing = () => {
    const [data] = usePetList();
    const pets = data;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTab, setSelectedTab] = useState('all');
    const [sortOption, setSortOption] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);
    const petsPerPage = 5;

    // Sorting logic
    const sortPets = (pets) => {
        switch (sortOption) {
            case 'age':
                return [...pets].sort((a, b) => parseInt(a.age) - parseInt(b.age));
            case 'price':
                return [...pets].sort((a, b) => {
                    const priceA = parseFloat(a.adoptionFee.split('$')[1]);
                    const priceB = parseFloat(b.adoptionFee.split('$')[1]);
                    return priceA - priceB;
                });
            case 'weight':
                return [...pets].sort((a, b) => parseInt(a.weight) - parseInt(b.weight));
            case 'name':
                return [...pets].sort((a, b) => a.name.localeCompare(b.name));
            default: // 'newest'
                return pets;
        }
    };

    const filteredPets = pets?.filter((pet) => {
        return (
            (selectedTab === 'all' || pet.species.value === selectedTab) &&
            (pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pet.species.label.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const sortedPets = sortPets(filteredPets);

    // Pagination logic
    const indexOfLastPet = currentPage * petsPerPage;
    const indexOfFirstPet = indexOfLastPet - petsPerPage;
    const currentPets = sortedPets?.slice(indexOfFirstPet, indexOfLastPet);
    const totalPages = Math.ceil(sortedPets?.length / petsPerPage);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 w-full text-center">Available Pets</h1>
            <input
                type="text"
                placeholder="Search by name, species, or breed..."
                className="input input-bordered w-full mb-6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className='flex flex-col md:flex-row'>
                {/* Sidebar */}
                <div className="md:w-1/5 w-full md:pr-4 flex md:flex-col mb-4 md:mb-0 mx-3 flex-wrap items-center md:items-start gap-4">
                    <h2 className="text-lg font-bold">Sort By</h2>
                    <div className="flex md:flex-col flex-wrap gap-3 items-center md:items-start">
                        <button
                            onClick={() => setSortOption('newest')}
                            className={`btn w-full ${sortOption === 'newest' ? 'btn-active' : ''}`}>
                            Newest
                        </button>
                        <button
                            onClick={() => setSortOption('age')}
                            className={`btn w-full ${sortOption === 'age' ? 'btn-active' : ''}`}>
                            By Age
                        </button>
                        <button
                            onClick={() => setSortOption('price')}
                            className={`btn w-full ${sortOption === 'price' ? 'btn-active' : ''}`}>
                            By Price
                        </button>
                        <button
                            onClick={() => setSortOption('weight')}
                            className={`btn w-full ${sortOption === 'weight' ? 'btn-active' : ''}`}>
                            By Weight
                        </button>
                        <button
                            onClick={() => setSortOption('name')}
                            className={`btn w-full ${sortOption === 'name' ? 'btn-active' : ''}`}>
                            By Name
                        </button>
                    </div>
                </div>

                {/* Pet Cards */}
                <div className="md:w-4/5 w-full">
                    <Tab.Group onChange={(index) => setSelectedTab(index === 0 ? 'all' : index === 1 ? 'dog' : 'cat')}>
                        <Tab.List className="tabs tabs-boxed mb-6">
                            <Tab className={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>All</Tab>
                            <Tab className={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>Dogs</Tab>
                            <Tab className={({ selected }) => (selected ? 'tab tab-active' : 'tab')}>Cats</Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {currentPets?.map((pet) => (
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
                                                    <Link to={`/pets/${pet._id}`} className="btn bg-greenTheme w-full text-white">
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {currentPets?.filter(pet => pet.species.value === 'dog').map((pet) => (
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
                                                    <Link to={`/pets/${pet._id}`} className="btn bg-greenTheme text-white w-full">
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {currentPets?.filter(pet => pet.species.value === 'cat').map((pet) => (
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
                                                    <Link to={`/pets/${pet._id}`} className="btn bg-greenTheme w-full text-white">
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>

                    {/* Pagination */}
                    <div className="flex justify-between mt-6">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className={`btn ${currentPage === 1 ? 'btn-disabled' : ''}`}>
                            Previous
                        </button>
                        <p>Page {currentPage} of {totalPages}</p>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className={`btn ${currentPage === totalPages ? 'btn-disabled' : ''}`}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetListing;
