import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Header = () => {
    const { user, logout } = useAuth()
    const handleLogout = async () => {
        logout()
            .then(data => {
                toast.success("Logout Successful")
            })
    }
    const menu = <>
        <li><Link className='focus:text-[#556b2f]' to="/">Home</Link></li>
        <li><Link className='focus:text-[#556B2F]' to="/listing">Pet Listing</Link></li>
        <li><Link className='focus:text-[#556B2F]' to="/donation">Donation</Link></li>
        <li><Link className='focus:text-[#556B2F]' to="/campaigns">Campaigns</Link></li>
        {user ?
            <>
                <li><Link to="/user-dashboard">Dashboard</Link></li>
                <li onClick={handleLogout}><Link>Logout</Link></li>
            </>
            :
            <>
                <li><Link className='focus:text-[#556B2F]' to="/login">Login</Link></li>
                <li><Link className='focus:text-[#556B2F]' to="/signup">Register</Link></li>
            </>}
    </>
    return (
        <>
            <Toaster />
            <div className='bg-secondary text-white py-2'>
                <div className='w-11/12 mx-auto flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#333333]'><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#333333]'><FaTwitter /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#333333]'><FaYoutube /></a>
                    </div>
                    <div>
                        <p className='flex gap-2'><span className='hidden md:block'>Contact us:</span> 01610121435 | r-adoption@gmail.com</p>
                    </div>
                </div>
            </div>
            <nav className='dark:bg-primaryDark bg-primary sticky z-1000'>
                <div className="navbar w-11/12 mx-auto text-[#333333]">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {menu}
                            </ul>
                        </div>
                        <Link to="/" className="font-extrabold text-xl my-0"><img className='w-24 h-20' src="https://i.ibb.co/d0hPB5L/Screenshot-14-removebg-preview-1.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menu}
                        </ul>
                    </div>
                    <div className="navbar-end gap-5">
                        <button className='btn bg-secondary text-white border-0'>Add a pet</button>
                        {user && <div className="avatar online">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header