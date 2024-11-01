import axios from 'axios';
import React, { useState } from 'react';

const Create = () => {
    const [inputData, setInputData] = useState({
        client_id: '',
        name: '',
        email: '',
        wallet_type: '',
        balance: '',
        status: '',
        created_at: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/clients', inputData)
            .then(res => {
                alert("Client added successfully");
            })
            .catch(err => {
                console.error(err);
                alert("There was an error adding the client");
            });
    };

    return (
        <div className="max-w-full p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Client</h2>
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
                        onChange={e => setInputData({ ...inputData, client_id: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='text' 
                        name='name' 
                        onChange={e => setInputData({ ...inputData, name: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='email' 
                        name='email' 
                        onChange={e => setInputData({ ...inputData, email: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='text' 
                        name='wallet_type' 
                        onChange={e => setInputData({ ...inputData, wallet_type: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='number' 
                        name='balance' 
                        onChange={e => setInputData({ ...inputData, balance: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='text' 
                        name='status' 
                        onChange={e => setInputData({ ...inputData, status: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                    <input 
                        type='date' 
                        name='created_at' 
                        onChange={e => setInputData({ ...inputData, created_at: e.target.value })} 
                        className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                </div>

                <div>
                    <button type="submit" className='bg-blue-500 text-white rounded-none py-2 px-4 w-30'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Create;
