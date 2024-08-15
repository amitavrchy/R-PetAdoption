import React from 'react';

const SuccessPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
                <p className="mt-4 text-gray-700">Your donation was successful. We appreciate your support!</p>
            </div>
        </div>
    );
};

export default SuccessPage;
