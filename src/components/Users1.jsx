import React from 'react';
import data from "../../server/data.json"; // Adjust this path as needed

const Users1 = () => {
  const users = data.clients || []; // Fallback to an empty array

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Client Details</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Wallet Type</th>
            <th className="border border-gray-300 px-4 py-2">Balance</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Balance</th>
            <th className="border border-gray-300 px-4 py-2">Date Created</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.client_id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.wallet_type}</td>
              <td className="border border-gray-300 px-4 py-2">{user.status}</td>
              <td className="border border-gray-300 px-4 py-2">{user.balance}</td>
              <td className="border border-gray-300 px-4 py-2">{user.created_at}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users1;
