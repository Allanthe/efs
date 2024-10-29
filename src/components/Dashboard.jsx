import React from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Dashboard = ({ sidebarToggle, setSideBarToggle, isLoggedIn }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // Adjust this to match your home route

  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Navbar 
        sidebarToggle={sidebarToggle} 
        setSideBarToggle={setSideBarToggle} 
      />
      <div className="p-4">
        {isLoggedIn && isHomePage && (
          <div className="flex flex-col items-center justify-center mb-8 text-center">
            <img src="/path/to/your/image.png" alt="Welcome" className="mb-4" /> {/* Update the image path */}
            <h1 className="text-4xl font-bold mb-4">Welcome to EVzone Dashboard</h1>
            <p className="text-xl mb-4 max-w-2xl">
              Manage your clients, track balances, and update information seamlessly. 
              Here at EVzone, we prioritize efficient management and a user-friendly experience.
            </p>
            <p className="text-xl mb-4">
              Explore the features of our platform, including:
            </p>
            <ul className="list-disc list-inside pl-5 mb-4 text-xl">
              <li>Client Management</li>
              <li>Transaction Tracking</li>
              <li>Wallet Management</li>
              <li>Real-Time Data Insights</li>
            </ul>
            <p className="text-xl">
              Get started by navigating through the options in the sidebar.
            </p>
          </div>
        )}

        {/* This is where the routed components will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
