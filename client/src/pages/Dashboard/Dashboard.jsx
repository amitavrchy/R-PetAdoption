import React, { useState } from 'react';
import { IoAddCircleOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import { FiMenu } from 'react-icons/fi'; // Using react-icons for a menu icon
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const menu = <>
        <li className='flex items-center gap-2'>
            <GrView className='text-xl' />
            <Link to="/">View Site</Link>
        </li>
        <li className='flex items-center gap-2'>
            <IoAddCircleOutline className='text-xl' />
            <Link to="/dashboard/add">Add a pet</Link>
        </li>
    </>

    return (
        <div className="flex h-screen bg-gray-100 font-kanit">
            {/* Sidebar */}
            <div className={`fixed z-30 inset-y-0 left-0 w-48 bg-base-200 shadow-md transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="p-4">
                    <h1 className="text-xl font-bold">Dashboard</h1>
                    <ul className="mt-6 flex flex-col gap-1">
                        {menu}
                    </ul>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Mobile header with menu button */}
                <div className="lg:hidden p-4 flex justify-between items-center bg-white shadow-md">
                    <h2 className="text-xl font-semibold">Dashboard</h2>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        <FiMenu className="text-2xl" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 overflow-auto">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold">Welcome to Your Dashboard</h2>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
