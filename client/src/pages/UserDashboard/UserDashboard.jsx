import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menu = (
    <>
      <li><Link to="/user-dashboard" className="block py-2 px-4 rounded-lg hover:bg-primary hover:text-white">Home</Link></li>
      <li><Link to="/user-dashboard/add" className="block py-2 px-4 rounded-lg hover:bg-primary hover:text-white">Add a pet</Link></li>
      <li><Link to="/user-dashboard/mypet" className="block py-2 px-4 rounded-lg hover:bg-primary hover:text-white">My pet</Link></li>
    </>
  );

  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center p-4 bg-sky-900 text-white">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`bg-sky-900 text-slate-300 p-5 md:block ${isSidebarOpen ? 'block sticky top:0' : 'hidden'} fixed top-0 left-0 h-100vh z-10 w-64 md:sticky md:top-0`}>
        <div className="flex justify-between items-center mb-5 md:hidden">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="md:sticky md:top-0">
          {menu}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default UserDashboard;
