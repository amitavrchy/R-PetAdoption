import React from 'react';

const CancelPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h2 className="text-2xl font-bold text-red-600">Donation Cancelled</h2>
                <p className="mt-4 text-gray-700">It looks like your donation was cancelled. Please try again if you'd like to support us.</p>
            </div>
        </div>
    );
};

export default CancelPage;
