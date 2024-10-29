import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = ({ sidebarToggle, setSideBarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
      <Navbar 
        sidebarToggle={sidebarToggle} 
        setSideBarToggle={setSideBarToggle} 
      />
      <div className="p-4">
        {/* This is where the routed components will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
