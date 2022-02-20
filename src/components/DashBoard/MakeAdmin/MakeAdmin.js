import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnblur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://fast-fjord-41602.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    console.log(data);
                    //   setEmail('');
                    setSuccess(true);
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <h2 className="text-center">Make A Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <label className="form-label" htmlFor="email">Email:</label>
                <input className="form-control" onBlur={handleOnblur} type="email" />
                <button className="btn btn-secondary mt-4" type="submit">Make Admin</button>

            </form>
            {success &&
                <div className="alert alert-success d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" width={24} height={24} role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill" /></svg>
                    <div>
                        Made Admin successfully!
                    </div>
                </div>

            }
        </div>
    );
};

export default MakeAdmin;