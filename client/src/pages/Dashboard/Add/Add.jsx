import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { FaDog, FaCat, FaInfoCircle, FaHeartbeat, FaBehance, FaHome, FaEllipsisH } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const speciesOptions = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'rabbit', label: 'Rabbit' },
];

function MultiLevelForm() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [step, setStep] = useState(0);
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()

  const onSubmit = async(data) => {
    const image = data.photosVideos[0]
    const formData = new FormData();
    formData.append('image', image);
    const response = await axiosPublic.post(imageHostingURL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: false
    });

    const imgUrl = response.data.data.url;
    const petData = {image:imgUrl,email:user?.email, ...data}
    const res = axiosSecure.post("/pet", petData)
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Pet Adoption Form</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-gray-600">
        
        {/* Basic Information */}
        {step === 0 && (
          <div className="card shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaInfoCircle className="text-primary text-2xl mr-2" />
              <h2 className="text-2xl font-bold">Basic Information</h2>
            </div>
            
            <div className="form-control text-gray-600">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input {...register('name', { required: true })} className="input input-bordered bg-transparent" />
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
                render={({ field }) => <Select {...field} options={speciesOptions} />}
              />
              {errors.species && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Breed</span>
              </label>
              <input {...register('breed', { required: true })} className="input input-bordered bg-transparent" />
              {errors.breed && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input {...register('age', { required: true })} className="input input-bordered bg-transparent" />
              {errors.age && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select {...register('gender', { required: true })} className="select select-bordered bg-transparent">
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
              <select {...register('size', { required: true })} className="select select-bordered bg-transparent">
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
              <input {...register('color', { required: true })} className="input input-bordered bg-transparent" />
              {errors.color && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Weight</span>
              </label>
              <input {...register('weight', { required: true })} className="input input-bordered bg-transparent" />
              {errors.weight && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex justify-between mt-6">
              <button type="button" onClick={prevStep} disabled={step === 0} className="btn btn-secondary">
                Previous
              </button>
              <button type="button" onClick={nextStep} className="btn btn-primary">
                Next
              </button>
            </div>
          </div>
        )}
        
        {/* Health & Medical Information */}
        {step === 1 && (
          <div className="card shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaHeartbeat className="text-primary text-2xl mr-2" />
              <h2 className="text-2xl font-bold">Health & Medical Information</h2>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Spayed/Neutered Status</span>
              </label>
              <select {...register('spayedNeutered', { required: true })} className="select select-bordered">
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
              <input {...register('vaccinationStatus', { required: true })} className="input input-bordered" />
              {errors.vaccinationStatus && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Microchip Status</span>
              </label>
              <input {...register('microchipStatus', { required: true })} className="input input-bordered" />
              {errors.microchipStatus && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Medical History</span>
              </label>
              <textarea {...register('medicalHistory')} className="textarea textarea-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Special Needs</span>
              </label>
              <textarea {...register('specialNeeds')} className="textarea textarea-bordered" />
            </div>

            <div className="flex justify-between mt-6">
              <button type="button" onClick={prevStep} className="btn btn-secondary">
                Previous
              </button>
              <button type="button" onClick={nextStep} className="btn btn-primary">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Behavioral Information */}
        {step === 2 && (
          <div className="card shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaBehance className="text-primary text-2xl mr-2" />
              <h2 className="text-2xl font-bold">Behavioral Information</h2>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Temperament</span>
              </label>
              <input {...register('temperament', { required: true })} className="input input-bordered" />
              {errors.temperament && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Behavior with Other Pets</span>
              </label>
              <input {...register('behaviorOtherPets', { required: true })} className="input input-bordered" />
              {errors.behaviorOtherPets && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Behavior with Children</span>
              </label>
              <input {...register('behaviorChildren', { required: true })} className="input input-bordered" />
              {errors.behaviorChildren && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Training Level</span>
              </label>
              <select {...register('trainingLevel', { required: true })} className="select select-bordered">
                <option value="">Select Training Level</option>
                <option value="house-trained">House-Trained</option>
                <option value="basic-commands">Basic Commands</option>
              </select>
              {errors.trainingLevel && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Exercise Requirements</span>
              </label>
              <input {...register('exerciseRequirements', { required: true })} className="input input-bordered" />
              {errors.exerciseRequirements && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Barking/Noise Level</span>
              </label>
              <input {...register('barkingNoiseLevel', { required: true })} className="input input-bordered" />
              {errors.barkingNoiseLevel && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex justify-between mt-6">
              <button type="button" onClick={prevStep} className="btn btn-secondary">
                Previous
              </button>
              <button type="button" onClick={nextStep} className="btn btn-primary">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Adoption Information */}
        {step === 3 && (
          <div className="card shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaHome className="text-primary text-2xl mr-2" />
              <h2 className="text-2xl font-bold">Adoption Information</h2>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Adoption Fee</span>
              </label>
              <input {...register('adoptionFee', { required: true })} className="input input-bordered" />
              {errors.adoptionFee && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input {...register('location', { required: true })} className="input input-bordered" />
              {errors.location && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Adoption Contact Information</span>
              </label>
              <input {...register('adoptionContactInfo', { required: true })} className="input input-bordered" />
              {errors.adoptionContactInfo && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Adoption Process Description</span>
              </label>
              <textarea {...register('adoptionProcessDescription', { required: true })} className="textarea textarea-bordered" />
              {errors.adoptionProcessDescription && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available From/To Date</span>
              </label>
              <input type="date" {...register('availableFromToDate', { required: true })} className="input input-bordered" />
              {errors.availableFromToDate && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex justify-between mt-6">
              <button type="button" onClick={prevStep} className="btn btn-secondary">
                Previous
              </button>
              <button type="button" onClick={nextStep} className="btn btn-primary">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Miscellaneous */}
        {step === 4 && (
          <div className="card shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaEllipsisH className="text-primary text-2xl mr-2" />
              <h2 className="text-2xl font-bold">Miscellaneous</h2>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Favorite Activities/Toys</span>
              </label>
              <textarea {...register('favoriteActivitiesToys')} className="textarea textarea-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photos/Videos</span>
              </label>
              <input type="file" {...register('photosVideos')} className="input input-bordered mt-2" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Background Story</span>
              </label>
              <textarea {...register('backgroundStory')} className="textarea textarea-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Reason for Surrender</span>
              </label>
              <textarea {...register('reasonForSurrender')} className="textarea textarea-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Compatibility with Specific Home Environments</span>
              </label>
              <input {...register('compatibilityWithHome')} className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Diet</span>
              </label>
              <input {...register('diet')} className="input input-bordered" />
            </div>

            <div className="flex justify-between mt-6">
              <button type="button" onClick={prevStep} className="btn btn-secondary">
                Previous
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default MultiLevelForm;
