import axios from 'axios';
import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';

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
        <div>
            <form className='form-control' onSubmit={handleSubmit}>
                <div>
                    <label>Client ID :</label>
                    <input type='text' name='id' onChange={e => setInputData({ ...inputData, client_id: e.target.value })} />
                </div>

                <div>
                    <label>Name :</label>
                    <input type='text' name='name' onChange={e => setInputData({ ...inputData, name: e.target.value })} />
                </div>

                <div>
                    <label>Email</label>
                    <input type='text' name='email' onChange={e => setInputData({ ...inputData, email: e.target.value })} />
                </div>

                <div>
                    <label>Wallet Type</label>
                    <input type='text' name='type' onChange={e => setInputData({ ...inputData, wallet_type: e.target.value })} />
                </div>

                <div>
                    <label>Balance</label>
                    <input type='text' name='balance' onChange={e => setInputData({ ...inputData, balance: e.target.value })} />
                </div>

                <div>
                    <label>Status</label>
                    <input type='text' name='status' onChange={e => setInputData({ ...inputData, status: e.target.value })} />
                </div>

                <div>
                    <label>Date Created</label>
                    <input type='text' name='date' onChange={e => setInputData({ ...inputData, created_at: e.target.value })} />
                </div>

                <div>
                    <button className='btn btn-info'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Create;
