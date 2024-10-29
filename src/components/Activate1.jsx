import React from 'react';
import data from "../../server/data.json"; // Adjust this path as needed

const Activate1 = () => {
  const login = data.login_details || []; // Fallback to an empty array

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Client Login Details</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Client ID</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Password</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Last login</th>
          </tr>
        </thead>
        <tbody>
          {login.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4">No login details available.</td>
            </tr>
          ) : (
            login.map(logins => (
              <tr key={logins.user_id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{logins.user_id}</td>
                <td className="border border-gray-300 px-4 py-2">{logins.email}</td>
                <td className="border border-gray-300 px-4 py-2">{logins.password}</td>
                <td className="border border-gray-300 px-4 py-2">{logins.role}</td>
                <td className="border border-gray-300 px-4 py-2">{logins.last_login}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Activate1;
