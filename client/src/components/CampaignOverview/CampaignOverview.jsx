import React from 'react';
import { Link } from 'react-router-dom';

const CampaignOverview = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-secondary">Make a Difference for Animals</h2>
                <p className="text-lg mb-8 text-gray-600">
                    Our campaigns are dedicated to providing shelter, medical care, and love to animals in need. 
                    Join us in our mission to save lives and create a better world for all animals.
                </p>
                <Link to="/campaigns" className="btn text-white bg-blue-500 btn-lg">Explore Our Campaigns</Link>
            </div>
        </section>
    );
};

export default CampaignOverview;
