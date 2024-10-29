import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateClient = () => {
    const [inputData, setInputData] = useState({
        client_id: '',
        name: '',
        email: '',
        wallet_type: '',
        balance: '',
        status: '',
        created_at: ''
    });
    const [searchId, setSearchId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchId) {
                handleSearch();
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchId]);

    const handleSearch = () => {
        setLoading(true);
        setError('');
        
        axios.get(`http://localhost:3030/clients/${searchId}`)
            .then(res => {
                setInputData(res.data);
            })
            .catch(err => {
                console.error(err);
                setError("Client not found");
                setInputData({ client_id: '', name: '', email: '', wallet_type: '', balance: '', status: '', created_at: '' });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3030/clients/${inputData.client_id}`, inputData)
            .then(res => {
                alert("Client updated successfully");
            })
            .catch(err => {
                console.error(err);
                alert("There was an error updating the client");
            });
    };

    return (
        <div className="max-w-full p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Update Client</h2>
            <div className="mb-4">
                <input 
                    type='text' 
                    placeholder='Enter Client ID' 
                    value={searchId} 
                    onChange={e => setSearchId(e.target.value)} 
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <button 
                    onClick={handleSearch} 
                    disabled={loading} 
                    className={`mt-2 bg-blue-500 text-white rounded-lg py-2 px-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Loading...' : 'Search'}
                </button>
                {error && <span className="text-red-500">{error}</span>}
            </div>

            <form className='space-y-4' onSubmit={handleSubmit}>
                <div className="grid grid-cols-7 gap-2 mb-2">
                    <div className="flex items-center">
                        <label className="block text-gray-700">Client ID:</label>
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700">Name:</label>
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700">Email:</label>
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700">Wallet Type:</label>
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700">Balance:</label>
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700">Status:</label>
                    </div>
                    <div className="flex items-center">
                        <label className="block text-gray-700">Date Created:</label>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                    <input 
                        type='text' 
                        name='client_id' 
                        value={inputData.client_id} 
                        readOnly 
                        className="border border-gray-300 p-2 w-30"
                    />
                    <input 
                        type='text' 
                        name='name' 
                        value={inputData.name} 
                        onChange={e => setInputData({ ...inputData, name: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='email' 
                        name='email' 
                        value={inputData.email} 
                        onChange={e => setInputData({ ...inputData, email: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='text' 
                        name='wallet_type' 
                        value={inputData.wallet_type} 
                        onChange={e => setInputData({ ...inputData, wallet_type: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='number' 
                        name='balance' 
                        value={inputData.balance} 
                        onChange={e => setInputData({ ...inputData, balance: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='text' 
                        name='status' 
                        value={inputData.status} 
                        onChange={e => setInputData({ ...inputData, status: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='date' 
                        name='created_at' 
                        value={inputData.created_at} 
                        onChange={e => setInputData({ ...inputData, created_at: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                </div>

                <div>
                    <button type="submit" className='bg-violet-950 text-white rounded-lg py-2 px-4 w-30'>Update</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateClient;
