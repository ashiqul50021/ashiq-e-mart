import React, { useState } from 'react';
import './Login.css';
import catimg from '../../../images/img-pet-food.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, signInWithGoogle, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value)
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div className="bgimg">
           <div className="container">
               <div className="row">
               <h2 className='text-center mt-4'>Login Page</h2>
                   <div className=" col-md-6">
                       <div className='shadow rounded m-5'>
                       <form className='p-5' onSubmit={handleLoginSubmit}>
                       
                           <label className="form-label mx-2" htmlFor="email">User Email:</label><br />
                           <input onChange={handleOnChange} id="email" className='form-control rounded-pill w-100' type="email" name="email"/>
                           <br />
                           <label className="form-label mx-2" htmlFor="password">User Password:</label><br />
                           <input onChange={handleOnChange} id="password" className='form-control rounded-pill w-100' type="password" name="password"/>
                           
                           <button type="submit" className="mt-4 btn btn-success">Log In</button><br />
                           <Link style={{textDecoration:'none'}} class="" to="/register" role="button">New User?? Please! Register</Link>
                           {isLoading && <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>}
                            {user?.email &&
                                <div className="alert alert-success d-flex align-items-center" role="alert">
                                    <svg className="bi flex-shrink-0 me-2" width={24} height={24} role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill" /></svg>
                                    <div>
                                        User Login successfully!
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
                       </form>
                       <p>-------------or-------------</p>
                       <button onClick={handleGoogleSignIn} style={{textDecoration:'none'}} class="btn btn-outline-dark">google Sign In</button>
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

export default Login;