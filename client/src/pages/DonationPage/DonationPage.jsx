import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../hooks/useAxiosSecure/useAxiosSecure';

const stripePromise = loadStripe('pk_test_51PSKaVDp6UhTOLT6WQqsRFsHGyn94qpre4F9W94o7egn58VXPJXArM4hDcV018TTuc6CHjnTaeANJ3Azvq2glPLB00n7ww5iSe');

const DonationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const { amount } = data;  // Destructure amount from the form data
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        try {
            const response = await axiosSecure.post('/create-checkout-session', {
                amount,
            });

            const result = await stripe.redirectToCheckout({
                sessionId: response.data.id,
            });

            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex items-center mt-10 md:mt-0 flex-col-reverse md:flex-row'>
            <div className="md:w-1/2 p-6 flex flex-col justify-center ml-10 items-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Support Our Cause</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Your donation helps us continue our mission of providing shelter, food, and medical care to animals in need. Every contribution, no matter how small, makes a significant impact.
                </p>
                <div className="mb-6">
                    <img
                        src="https://i.ibb.co/3RgH7TF/images.jpg"
                        alt="Supporting Animals"
                        className="w-[200px] h-[200px] rounded-full shadow-md"
                    />
                </div>
                <p className="text-lg text-gray-700">
                    Join us in making a difference today. Together, we can ensure that every animal gets the love and care they deserve. Thank you for your generosity!
                </p>
            </div>
            <div className='w-full mb-10 md:mb-0 md:w-1/2'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mx-auto bg-white p-6 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-center">Make a Donation</h2>

                    <label htmlFor="amount" className="block mb-2 text-gray-700">Donation Amount (USD)</label>
                    <input
                        type="number"
                        id="amount"
                        {...register('amount', { required: true, min: 1 })}
                        className="w-full p-2 mb-4 border rounded"
                        placeholder="Enter amount"
                    />
                    {errors.amount && <p className="text-red-500 text-sm">Please enter a valid amount.</p>}

                    <CardElement className="p-4 border rounded mb-4" />

                    <button
                        type="submit"
                        disabled={!stripe || loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded"
                    >
                        {loading ? 'Processing...' : 'Donate Now'}
                    </button>
                </form>
            </div>
        </div>
    );
};

const DonationPage = () => {
    return (
        <Elements stripe={stripePromise}>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <DonationForm />
            </div>
        </Elements>
    );
};

export default DonationPage;
