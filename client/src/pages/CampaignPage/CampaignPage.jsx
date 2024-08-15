import React from 'react';

const CampaignPage = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.ibb.co/cYHw1RL/happy-earth-day-concept-22-260nw-2285427533.webp')" }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-4">Join Our Mission</h1>
                        <p className="text-xl mb-8">Help us make a difference in the lives of animals. Your support changes everything.</p>
                        <a href="#donate" className="btn btn-primary btn-lg">Donate Now</a>
                    </div>
                </div>
            </section>

            {/* Campaign Details */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Our Campaign</h2>
                    <p className="text-lg mb-8">
                        Our campaign is dedicated to providing shelter, medical care, and love to animals in need. We are on a mission to save as many lives as possible, but we need your help. Every donation, big or small, brings us one step closer to achieving our goal.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-white shadow-lg">
                        <img src="https://i.ibb.co/LdFwWzc/animal-shelter-banner-template-dog-help-poster-pet-care-adoption-donation-vector-illustration-web-de.webp" alt="Campaign 1" className="w-full h-64 object-cover rounded-t-lg" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Rescue & Shelter</h3>
                            <p className="text-gray-700">
                                We provide safe havens for animals rescued from harmful situations, giving them a chance to heal and find loving homes.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-white shadow-lg">
                        <img src="https://i.ibb.co/XLTdbFx/Screenshot-10.png" alt="Campaign 2" className="w-full h-64 object-cover rounded-t-lg" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Medical Care</h3>
                            <p className="text-gray-700">
                                Our campaign ensures that all animals receive the necessary medical treatments, from vaccinations to surgeries, to keep them healthy.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-white shadow-lg">
                        <img src="https://i.ibb.co/b6ckYXh/adopt-friend-do-not-buy-600nw-1667045542.webp" alt="Campaign 3" className="w-full h-64 object-cover rounded-t-lg" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">Adoption & Education</h3>
                            <p className="text-gray-700">
                                We work tirelessly to find forever homes for our animals while educating the community about responsible pet ownership.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section id="donate" className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Make a Difference Today</h2>
                    <p className="text-lg mb-8">Your contribution, no matter the size, helps us continue our mission. Together, we can create a world where every animal is loved and cared for.</p>
                    <a href="/donate" className="btn btn-primary btn-lg">Donate Now</a>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
                    <p className="text-lg mb-8">
                        Thanks to supporters like you, we've been able to transform the lives of countless animals. Here are just a few of the many success stories that your donations have made possible.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img src="https://i.ibb.co/ccvjMjw/Brown-Chihuahua.jpg" alt="Success Story 1" className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Bella's Journey</h3>
                        <p className="text-gray-700">
                            Bella was rescued from a neglectful situation and nursed back to health. Today, she lives happily with her forever family.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img src="https://i.ibb.co/2y7spmR/kitty-cat-kitten-pet-45201.jpg" alt="Success Story 2" className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Max's Transformation</h3>
                        <p className="text-gray-700">
                            Max was found injured and alone. After extensive medical care and rehabilitation, he's now thriving in his new home.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <img src="https://i.ibb.co/RNs3RDD/pexels-smoothclick0z1-3828097.jpg" alt="Success Story 3" className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Luna's New Life</h3>
                        <p className="text-gray-700">
                            Luna's life was transformed after being rescued. She's now a beloved companion, bringing joy to her new family.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampaignPage;
