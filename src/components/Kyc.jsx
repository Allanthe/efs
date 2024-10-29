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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    return (

        
        <div >
            
            <h1>Client's Management</h1><br/>
              
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Wallet type</th>
                        <th>Balance</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => (
                        <tr key={d.client_id}>
                            <td>{d.client_id}</td>
                            <td>{d.email}</td>
                            <td>{d.wallet_type}</td>
                            <td>{d.balance}</td>
                            <td>{d.status}</td>
                            <td>{d.created_at}</td>
                            <td>
                                <button>Update</button>
                                <button>Delete</button>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Kyc;
