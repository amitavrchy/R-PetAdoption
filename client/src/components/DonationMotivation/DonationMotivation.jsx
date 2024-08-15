import React from 'react';
import { Link } from 'react-router-dom';

const DonationMotivation = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-12 px-6 rounded-lg shadow-lg">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Make a Difference Today</h2>
                <p className="text-lg mb-8">
                    Your generous donation helps us provide care, shelter, and love to animals in need. 
                    Together, we can give them a second chance at life and find them forever homes.
                </p>
                <div className="flex justify-center">
                    <Link to="/donation"><button className="btn bg-blue-500 text-white border-0 btn-lg mx-2">Donate Now</button></Link>
                    <Link to="/blog"><button className="btn btn-outline btn-lg mx-2">Learn More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DonationMotivation;
