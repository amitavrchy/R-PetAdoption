import React from 'react';
import { useParams, Link } from 'react-router-dom';
import usePetList from '../../hooks/usePetList';
import { FaDollarSign } from "react-icons/fa";

const PetDetails = () => {
    const { id } = useParams();
    const [data] = usePetList();
    console.log(id, data)
    const pet = data?.find((p) => p._id === id);

    if (!pet) {
        return <p>Pet not found</p>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">{pet.name}</h1>
            <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <div className="md:w-1/4 mb-6 md:mb-0 md:pr-6">
                    <div className="card bg-base-100 shadow-xl p-4">
                        <h2 className="text-xl font-bold mb-4 text-greenTheme">Pet Information</h2>
                        <ul>
                            <li><strong>Age:</strong> {pet.age}</li>
                            <li><strong>Breed:</strong> {pet.breed}</li>
                            <li><strong>Size:</strong> {pet.size}</li>
                            <li><strong>Color:</strong> {pet.color}</li>
                            <li><strong>Weight:</strong> {pet.weight}</li>
                            <li><strong>Spayed/Neutered:</strong> {pet.spayedNeutered}</li>
                        </ul>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-4 mt-5">
                        <h2 className="text-xl font-bold mb-4 text-greenTheme">Adoption Fee</h2>
                        <h2 className="text-[14px] font-bold mb-4">{pet.adoptionFee}</h2>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-4 mt-5">
                        <h2 className="text-xl font-bold mb-4 text-greenTheme">Vaccination Status</h2>
                        <h2 className="text-[14px] font-bold mb-4">{pet.vaccinationStatus}</h2>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-4 mt-5">
                        <h2 className="text-xl font-bold mb-4 text-greenTheme">Gender</h2>
                        <h2 className="text-[14px] font-bold mb-4">{pet.gender}</h2>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-4 mt-5">
                        <h2 className="text-xl font-bold mb-4 text-greenTheme">Microchip Status</h2>
                        <h2 className="text-[14px] font-bold mb-4">{pet.microchipStatus}</h2>
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:w-3/4">
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={pet.image} alt={pet.name} className="w-full h-[400px] object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{pet.name}</h2>
                            <p><strong>Temperament:</strong> {pet.temperament}</p>
                            <p><strong>Behavior with Other Pets:</strong> {pet.behaviorOtherPets}</p>
                            <p><strong>Behavior with Children:</strong> {pet.behaviorChildren}</p>
                            <p><strong>Training Level:</strong> {pet.trainingLevel}</p>
                            <p><strong>Exercise Requirements:</strong> {pet.exerciseRequirements}</p>
                            <p><strong>Barking/Noise Level:</strong> {pet.barkingNoiseLevel}</p>
                            <p><strong>Favorite Activities/Toys:</strong> {pet.favoriteActivitiesToys}</p>
                            <p><strong>Background Story:</strong> {pet.backgroundStory}</p>
                            <p><strong>Reason for Surrender:</strong> {pet.reasonForSurrender}</p>
                            <p><strong>Compatibility with Home:</strong> {pet.compatibilityWithHome}</p>
                            <p><strong>Diet:</strong> {pet.diet}</p>

                            <div className="card-actions justify-end mt-6">
                                <a href={`mailTo:${pet.user}`} className="btn bg-greenTheme text-white">
                                    Contact Pet Owner
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;
