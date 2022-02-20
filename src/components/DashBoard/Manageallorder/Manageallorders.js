import React, { useEffect, useState } from 'react';
// import Manageallorder from './Manageallorder';

const Manageallorders = () => {
    const [manageallorders, setManageallorders] = useState([])
    useEffect(() => {
        fetch('https://fast-fjord-41602.herokuapp.com/placeorders')
        .then(res => res.json())
        .then(data => setManageallorders(data))
    } ,[]);

    const handleDelete = id => {
        const url = `https://fast-fjord-41602.herokuapp.com/placeorders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted');
                const remaining = manageallorders.filter(manageallorder => manageallorder._id !== id);
                setManageallorders(remaining);
            }
            


        })

    }
    return (
        <div className="container">
        <h2 className="text-center">Manage All Order </h2>
        {
            manageallorders.map(manageallorder => <div key={manageallorder._id}>
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
                            <td><img src={manageallorder.img} alt="" /></td>
                            <td>{manageallorder.name}</td>
                            <td>{manageallorder.email}</td>
                            <td>{manageallorder.number}</td>
                            <td><button onClick={() => handleDelete(manageallorder._id)} className="btn btn-danger">delete</button></td>
                        </tr>
                    </tbody>

                </table>
                {/* <h3>{manageallorder.name}</h3>
                <img src={manageallorder.img} alt="" />
                <button onClick={() => handleDelete(manageallorder._id)} className="btn btn-danger">delete</button> */}

            </div>)
        }
    </div>
);
};
export default Manageallorders;