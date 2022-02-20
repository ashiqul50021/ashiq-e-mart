import React, { useState } from 'react';
// import './Login.css';
import catimg from '../../../../images/img-pet-food.png';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
        // console.log(field, value)
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match!');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <div className="bgimg">
            <div className="container">
                <div className="row">
                    <h2 className='text-center mt-4'>Registration Page</h2>
                    <div className=" col-md-6">
                        <div className='shadow rounded m-5'>
                            {!isLoading && <form className='p-5' onSubmit={handleLoginSubmit}>
                                <label className="form-label mx-2" htmlFor="name">User Name:</label><br />
                                <input onBlur={handleOnBlur} id="name" className='form-control rounded-pill w-100' type="text" name="name" />
                                <br />
                                <label className="form-label mx-2" htmlFor="email">User Email:</label><br />
                                <input onBlur={handleOnBlur} id="email" className='form-control rounded-pill w-100' type="email" name="email" />
                                <br />

                                <label className="form-label mx-2" htmlFor="password">User Password:</label><br />
                                <input onBlur={handleOnBlur} id="password" className='form-control rounded-pill w-100' type="password" name="password" />
                                <label className="form-label mx-2" htmlFor="password">Retype Your Password:</label><br />
                                <input onBlur={handleOnBlur} id="password" className='form-control rounded-pill w-100' type="password" name="password2" />

                                <button type="submit" className="mt-4 btn btn-success">Register</button><br />
                                <Link style={{ textDecoration: 'none' }} class="" to="/login" role="button">Already Register?? please! Login.</Link>
                            </form>}
                            {isLoading && <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>}
                            {user?.email &&
                                <div className="alert alert-success d-flex align-items-center" role="alert">
                                    <svg className="bi flex-shrink-0 me-2" width={24} height={24} role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill" /></svg>
                                    <div>
                                        User create successfully!
                                    </div>
                                </div>

                            }
                            {
                                authError &&
                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <svg className="bi flex-shrink-0 me-2" width={24} height={24} role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill" /></svg>
                                    <div>
                                        {authError}
                                    </div>
                                </div>

                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100 h-100" src={catimg} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;