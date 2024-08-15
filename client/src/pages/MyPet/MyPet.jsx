import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure/useAxiosSecure';
import usePetList from '../../hooks/usePetList';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { FaInfoCircle, FaHeartbeat, FaBehance, FaHome, FaEllipsisH } from 'react-icons/fa';
import '../AddPet/AddPet.css'
import useAuth from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const speciesOptions = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'rabbit', label: 'Rabbit' },
];
const MyPet = () => {
    const { user } = useAuth()
    const userEmail = user?.email;
    const [data, refetch] = usePetList()
    const pets = data?.filter(item => item.user === user.email);
    const [isEditOpen, setIsEditOpen] = useState(false)
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const [step, setStep] = useState(0);
    const axiosSecure = useAxiosSecure()

    const onSubmit = (data) => {
        const formData = { user: userEmail, status: "Not Adopted", ...data }
        axiosSecure.post("/pet", formData)
            .then(data => {
                if (data.data.insertedId) {
                    toast.success("Pet Added Successfully!")
                    reset()
                }
            })
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);
    const [selectedPet, setSelectedPet] = useState(null);
    const handleAdopt = (id) => {

    }
    const handleEdit = (pet) => {
        setIsEditOpen(true)
        setSelectedPet(pet)
    }
    const closeEditBox = () => {
        setIsEditOpen(false)
    }
    const handleDelete = (id) => {

    }
    return (
        <div className="container mx-auto p-4">
            <h2 className='text-center text-3xl font-bold mb-5 text-secondary'>Your Pets</h2>
            <div className="overflow-x-auto rounded shadow">
                <table className="table max-w-full">
                    <thead>
                        <tr className="bg-gray-200 text-center">
                            <th className="px-4 py-2">Serial Number</th>
                            <th className="px-4 py-2">Pet Name</th>
                            <th className="px-4 py-2">Pet Category</th>
                            <th className="px-4 py-2">Pet Image</th>
                            <th className="px-4 py-2">Adoption Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets?.map((pet, index) => (
                            <tr key={pet.id} className="text-center">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{pet.name}</td>
                                <td className="px-4 py-2">{pet.category}</td>
                                <td className="px-4 py-2">
                                    <img src={pet.image} alt={pet.name} className="w-12 h-12 object-cover" />
                                </td>
                                <td className="px-4 py-2">{pet.status}</td>
                                <td className="px-4 py-2">
                                    <a href="#edit">
                                        <button onClick={() => handleEdit(pet)} className="btn btn-sm btn-info mr-2">Update</button>
                                    </a>
                                    <button className="btn btn-sm btn-error mr-2">Delete</button>
                                    <button className="btn btn-sm btn-success">Adopted</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isEditOpen && <>
                <div className="" id="edit">
                    <div className="max-w-4xl mx-auto my-10">
                        <h1 className="text-4xl font-bold text-center mb-8 text-secondary">Edit: {selectedPet.name}</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-gray-600">

                            {/* Basic Information */}
                            {step === 0 && (
                                <div className="card shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <FaInfoCircle className="text-secondary text-2xl mr-2" />
                                        <h2 className="text-2xl font-bold">Basic Information</h2>
                                    </div>

                                    <div className="form-control text-gray-600">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.name}
                                            {...register('name', { required: true })}
                                            className="input input-bordered bg-transparent"
                                        />
                                        {errors.name && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Species</span>
                                        </label>
                                        <Controller
                                            name="species"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => <Select {...field} options={speciesOptions} defaultValue={selectedPet.species} />}
                                        />
                                        {errors.species && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Breed</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.breed}
                                            {...register('breed', { required: true })}
                                            className="input input-bordered bg-transparent"
                                        />
                                        {errors.breed && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Age</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.age}
                                            {...register('age', { required: true })}
                                            className="input input-bordered bg-transparent"
                                        />
                                        {errors.age && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Gender</span>
                                        </label>
                                        <select
                                            defaultValue={selectedPet.gender}
                                            {...register('gender', { required: true })}
                                            className="select select-bordered bg-transparent"
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        {errors.gender && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Size</span>
                                        </label>
                                        <select
                                            defaultValue={selectedPet.size}
                                            {...register('size', { required: true })}
                                            className="select select-bordered bg-transparent"
                                        >
                                            <option value="">Select Size</option>
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                        {errors.size && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Color/Markings</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.color}
                                            {...register('color', { required: true })}
                                            className="input input-bordered bg-transparent"
                                        />
                                        {errors.color && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Weight</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.weight}
                                            {...register('weight', { required: true })}
                                            className="input input-bordered bg-transparent"
                                        />
                                        {errors.weight && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="flex justify-between mt-6">
                                        <button type="button" onClick={prevStep} disabled={step === 0} className="btn btn-secondary">
                                            Previous
                                        </button>
                                        <button type="button" onClick={nextStep} className="btn bg-secondary text-gray-200">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Health & Medical Information */}
                            {step === 1 && (
                                <div className="card shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <FaHeartbeat className="text-secondary text-2xl mr-2" />
                                        <h2 className="text-2xl font-bold">Health & Medical Information</h2>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Spayed/Neutered Status</span>
                                        </label>
                                        <select
                                            defaultValue={selectedPet.spayedNeutered}
                                            {...register('spayedNeutered', { required: true })}
                                            className="select select-bordered"
                                        >
                                            <option value="">Select Status</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        {errors.spayedNeutered && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Vaccination Status</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.vaccinationStatus}
                                            {...register('vaccinationStatus', { required: true })}
                                            className="input input-bordered"
                                        />
                                        {errors.vaccinationStatus && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Microchip Status</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.microchipStatus}
                                            {...register('microchipStatus', { required: true })}
                                            className="input input-bordered"
                                        />
                                        {errors.microchipStatus && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Medical History</span>
                                        </label>
                                        <textarea
                                            defaultValue={selectedPet.medicalHistory}
                                            {...register('medicalHistory')}
                                            className="textarea textarea-bordered"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Special Needs</span>
                                        </label>
                                        <textarea
                                            defaultValue={selectedPet.specialNeeds}
                                            {...register('specialNeeds')}
                                            className="textarea textarea-bordered"
                                        />
                                    </div>

                                    <div className="flex justify-between mt-6">
                                        <button type="button" onClick={prevStep} className="btn bg-primary text-gray-600">
                                            Previous
                                        </button>
                                        <button type="button" onClick={nextStep} className="btn bg-secondary text-gray-200">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Behavioral Information */}
                            {step === 2 && (
                                <div className="card shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <FaBehance className="text-secondary text-2xl mr-2" />
                                        <h2 className="text-2xl font-bold">Behavioral Information</h2>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Temperament</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.temperament}
                                            {...register('temperament', { required: true })}
                                            className="input input-bordered"
                                        />
                                        {errors.temperament && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Activity Level</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.activityLevel}
                                            {...register('activityLevel', { required: true })}
                                            className="input input-bordered"
                                        />
                                        {errors.activityLevel && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Training Level</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.trainingLevel}
                                            {...register('trainingLevel')}
                                            className="input input-bordered"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Compatibility with Other Pets</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.compatibilityWithPets}
                                            {...register('compatibilityWithPets')}
                                            className="input input-bordered"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Compatibility with Children</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.compatibilityWithChildren}
                                            {...register('compatibilityWithChildren')}
                                            className="input input-bordered"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Behavioral Challenges</span>
                                        </label>
                                        <textarea
                                            defaultValue={selectedPet.behavioralChallenges}
                                            {...register('behavioralChallenges')}
                                            className="textarea textarea-bordered"
                                        />
                                    </div>

                                    <div className="flex justify-between mt-6">
                                        <button type="button" onClick={prevStep} className="btn bg-primary text-gray-600">
                                            Previous
                                        </button>
                                        <button type="button" onClick={nextStep} className="btn bg-secondary text-gray-200">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Home & Environment Information */}
                            {step === 3 && (
                                <div className="card shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <FaHome className="text-secondary text-2xl mr-2" />
                                        <h2 className="text-2xl font-bold">Home & Environment Information</h2>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Living Environment</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.livingEnvironment}
                                            {...register('livingEnvironment')}
                                            className="input input-bordered"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Outdoor Access</span>
                                        </label>
                                        <select
                                            defaultValue={selectedPet.outdoorAccess}
                                            {...register('outdoorAccess', { required: true })}
                                            className="select select-bordered"
                                        >
                                            <option value="">Select Access</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                        {errors.outdoorAccess && <span className="text-red-500">This field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Dietary Requirements</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.dietaryRequirements}
                                            {...register('dietaryRequirements')}
                                            className="input input-bordered"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Exercise Requirements</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.exerciseRequirements}
                                            {...register('exerciseRequirements')}
                                            className="input input-bordered"
                                        />
                                    </div>

                                    <div className="flex justify-between mt-6">
                                        <button type="button" onClick={prevStep} className="btn bg-primary text-gray-600">
                                            Previous
                                        </button>
                                        <button type="button" onClick={nextStep} className="btn bg-secondary text-gray-200">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Miscellaneous Information */}
                            {step === 4 && (
                                <div className="card shadow-md p-6">
                                    <div className="flex items-center mb-4">
                                        <FaEllipsisH className="text-secondary text-2xl mr-2" />
                                        <h2 className="text-2xl font-bold">Miscellaneous Information</h2>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Favorite Activities</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.favoriteActivities}
                                            {...register('favoriteActivities')}
                                            className="input input-bordered"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Favorite Toys</span>
                                        </label>
                                        <input
                                            defaultValue={selectedPet.favoriteToys}
                                            {...register('favoriteToys')}
                                            className="input input-bordered"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Additional Notes</span>
                                        </label>
                                        <textarea
                                            defaultValue={selectedPet.additionalNotes}
                                            {...register('additionalNotes')}
                                            className="textarea textarea-bordered"
                                        />
                                    </div>

                                    <div className="flex justify-between mt-6">
                                        <button type="button" onClick={prevStep} className="btn bg-primary text-gray-600">
                                            Previous
                                        </button>
                                        <button type="submit" className="btn bg-secondary text-gray-200">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </>}
        </div>
    );
};

export default MyPet;
