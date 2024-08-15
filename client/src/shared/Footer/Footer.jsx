import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="container px-4 footer  flex flex-col dark:text-base-content justify-center text-white p-4">
                <div className="flex flex-col md:flex-row items-center w-4/5 mx-auto gap-10">
                    {/* Logo and Description */}
                    <div className="flex flex-col text-center md:text-left mt-5 w-full md:w-3/5 mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold text-green-400">R Adoption</h2>
                        <p className="mt-4 text-gray-400">
                            We are dedicated to helping pets find loving homes. <br /> Join us in our mission to make a difference.
                        </p>
                    </div>

                    <div className='flex w-full justify-end gap-20 md:gap-0'>
                        {/* Navigation Links */}
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul>
                                <li className="mb-2"><Link to="/donation" className="hover:text-green-400">Donate</Link></li>
                                <li className="mb-2"><Link to="/campaigns" className="hover:text-green-400">Campaigns</Link></li>
                                <li className="mb-2"><Link to="/listing" className="hover:text-green-400">Pet Listing</Link></li>
                                <li className="mb-2"><Link to="/user-dashboard" className="hover:text-green-400">Dashboard</Link></li>
                            </ul>
                        </div>

                        {/* Contact and Social Links */}
                        <div className="w-full md:w-1/2 mb-6 md:mb-0">
                            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                            <p className="text-gray-400">Uttarkhan, Dhaka - 1230</p>
                            <p className="text-gray-400">Email: amitavrchy01.com</p>
                            <p className="text-gray-400">Phone: 01610121435</p>

                            <div className="flex mt-4 space-x-4">
                                <a href="https://facebook.com" className="text-gray-400 hover:text-green-400"><FaFacebookF /></a>
                                <a href="https://twitter.com" className="text-gray-400 hover:text-green-400"><FaTwitter /></a>
                                <a href="https://instagram.com" className="text-gray-400 hover:text-green-400"><FaInstagram /></a>
                                <a href="https://linkedin.com" className="text-gray-400 hover:text-green-400"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <aside className='bg-secondary dark:text-base-content text-center text-white p-4'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Amitav Roy Chowdhury.</p>
            </aside>
        </footer>
    )
}

export default Footer