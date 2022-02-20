import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Purchases = () => {
    const { user } = useAuth();
    const [purchases, setPurchases] = useState([])

    useEffect(() => {
        const url = ` https://fast-fjord-41602.herokuapp.com/purchases?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPurchases(data));

    },[user.email])

    const handleDelete = email => {
        const url = `https://fast-fjord-41602.herokuapp.com/purchases?email=${user.email}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted');
                const remaining = purchases.filter(purchases => purchases.email !== email);
                setPurchases(remaining);
            }
            


        })

    }
    return (
        <div>
            <div className="text-center">
            <h2>MY ORDERS</h2>
            <p>purchase item {purchases.length}</p>
            </div>
            {
                purchases.map(purchases => <div>
                    <table className="table">
                    <thead>
                        <tr>
                            <th>Img</th>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>number</th>
                            <th>Activaty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={purchases.img} alt="" /></td>
                           
                            <td>{purchases.name}</td>
                            <td>{purchases.email}</td>
                            <td>{purchases.number}</td>
                            <td><button onClick={() => handleDelete(purchases.email)} className="btn btn-danger">delete</button></td>
                        </tr>
                    </tbody>

                </table>
                    {/* <h3>{purchases.name}</h3>
                    <img src={purchases.img} alt="" />
                     */}
    
                </div>)
                }
        </div>
    );
};

export default Purchases;