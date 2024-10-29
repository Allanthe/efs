import React, { useState } from 'react';
import { 
  FaUsers, FaBuilding, FaCogs, FaChartLine, 
  FaUserShield, FaClipboardList, FaExclamationTriangle, 
  FaMoneyBillWave, FaBell, FaHeartbeat, FaHandsHelping, FaChevronDown 
} from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; // Import Link


const Sidebar = ({ sidebarToggle }) => {
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open

  // Toggle submenu visibility
  const handleToggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu); // Close if already open
  };

  return (
    <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-violet-500 fixed h-full`}>
      <div className="my-2 mb-4 px-4 py-2">
        <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
        <hr />
        <ul className="mt-3 text-white font-bold">

          {/* Client Management with Submenu */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <button 
              className="w-full flex justify-between items-center px-3" 
              onClick={() => handleToggle('clientManagement')}
            >
              <span><FaUsers className="inline-block h-6 w-6 mr-2" /> Client Management</span>
              <FaChevronDown />
            </button>
            {openMenu === 'clientManagement' && (
              <ul className="ml-6 mt-2">
                <li className="py-1 hover:bg-gray-700 px-2 rounded">
                  <Link to="/dashboard/users">View Users</Link>
                </li>
                <li className="py-1 hover:bg-gray-700 px-2 rounded">
                  <Link to="/dashboard/activate">Activate/Deactivate</Link>
                </li>
                <li className="py-1 hover:bg-gray-700 px-2 rounded">
                  <Link to="/reset-password">Reset Password</Link>
                </li>
                <li className="py-1 hover:bg-gray-700 px-2 rounded">
                  <Link to="/kyc-verification">KYC Verification</Link>
                </li>
                
              </ul>
            )}
          </li>

          {/* Business & Enterprise */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <Link to="/business-enterprise" className="px-3">
              <FaBuilding className="inline-block h-6 w-6 mr-2" /> Business & Enterprise
            </Link>
          </li>

          {/* Settings with Submenu */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <button 
              className="w-full flex justify-between items-center px-3" 
              onClick={() => handleToggle('settings')}
            >
              <span><FaCogs className="inline-block h-6 w-6 mr-2" /> Settings</span>
              <FaChevronDown />
            </button>
            {openMenu === 'settings' && (
              <ul className="ml-6 mt-2">
                <li className="py-1 hover:bg-gray-700 px-2 rounded">
                  <Link to="/profile-settings">Profile Settings</Link>
                </li>
                <li className="py-1 hover:bg-gray-700 px-2 rounded">
                  <Link to="/account-settings">Account Settings</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Monitoring */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <Link to="/monitoring" className="px-3">
              <FaChartLine className="inline-block h-6 w-6 mr-2" /> Monitoring
            </Link>
          </li>

          {/* Role-Based Control */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <Link to="/role-based-control" className="px-3">
              <FaUserShield className="inline-block h-6 w-6 mr-2" /> Role-Based Control
            </Link>
          </li>

          {/* Audit & Reporting */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <Link to="/audit-reporting" className="px-3">
              <FaClipboardList className="inline-block h-6 w-6 mr-2" /> Audit & Reporting
            </Link>
          </li>

          {/* Fraud & Alerts */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <Link to="/fraud-alerts" className="px-3">
              <FaExclamationTriangle className="inline-block h-6 w-6 mr-2" /> Fraud & Alerts
            </Link>
          </li>

          {/* Revenue Management */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <Link to="/revenue-management" className="px-3">
              <FaMoneyBillWave className="inline-block h-6 w-6 mr-2" /> Revenue Mgt
            </Link>
          </li>

          {/* Notifications */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <Link to="/notifications" className="px-3">
              <FaBell className="inline-block h-6 w-6 mr-2" /> Notifications
            </Link>
          </li>

          {/* System Health */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <Link to="/system-health" className="px-3">
              <FaHeartbeat className="inline-block h-6 w-6 mr-2" /> System Health
            </Link>
          </li>

          {/* Support Team */}
          <li className="mb-2 rounded hover:shadow hover:bg-gray-800 py-2">
            <Link to="/support-team" className="px-3">
              <FaHandsHelping className="inline-block h-6 w-6 mr-2" /> Support Team
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
