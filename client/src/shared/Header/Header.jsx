import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
    const [darkMode, setDarkMode] = useState(true)
    const { user, logout } = useAuth()
    const navigate = useNavigate();
    const handleLogout = async () => {
        logout()
        .then(data => {
            toast.success("Logout Successful")
        })
    }
        useEffect(() => {
            const htmlTag = document.getElementsByTagName('html')[0];
            if (darkMode) {
                document.documentElement.classList.add('dark');
                htmlTag.setAttribute("data-theme", "dark");
            }
            else {
                document.documentElement.classList.remove('dark');
                htmlTag.setAttribute("data-theme", "light");
            }
        }, [darkMode])
        const toggleDarkMode = () => {
            setDarkMode(!darkMode)
        }
        const menu = <>
            <li><Link className='focus:text-[#556b2f]' to="/home">Home</Link></li>
            <li><Link className='focus:text-[#556B2F]' to="/listing">Pet Listing</Link></li>
            <li><Link className='focus:text-[#556B2F]' to="/donation">Donation</Link></li>
            <li><Link className='focus:text-[#556B2F]' to="/campaigns">Campaigns</Link></li>
            {user ?
                <>
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
                <nav className='dark:bg-primaryDark bg-primary'>
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
                            <a className="font-extrabold text-xl">R-Pet Adaption</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {menu}
                            </ul>
                        </div>
                        <div className="navbar-end gap-5">
                            <button className='flex justify-center items-center gap-2' onClick={toggleDarkMode} >
                                Dark Mode
                                <input type="checkbox" className="toggle [--tglbg: white] toggle-sm" defaultChecked />
                            </button>
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