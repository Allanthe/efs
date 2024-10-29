import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Kyc = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3030/clients')
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-red-500 text-center">Error loading data: {error.message}</p>;

    return (
        <div className="max-w-full p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Client Management</h1>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Wallet Type</th>
                        <th className="border border-gray-300 p-2">Balance</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Created At</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => (
                        <tr key={d.client_id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-2">{d.client_id}</td>
                            <td className="border border-gray-300 p-2">{d.email}</td>
                            <td className="border border-gray-300 p-2">{d.wallet_type}</td>
                            <td className="border border-gray-300 p-2">{d.balance}</td>
                            <td className="border border-gray-300 p-2">{d.status}</td>
                            <td className="border border-gray-300 p-2">{d.created_at}</td>
                            <td className="border border-gray-300 p-2">
                                <button className="bg-red-500 text-white rounded-lg py-1 px-3 mr-2">Delete</button>
                                <button className="bg-blue-500 text-white rounded-lg py-1 px-3">Read</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Kyc;
