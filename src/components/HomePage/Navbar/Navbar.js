import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Navbar.css'

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
      <div className="container">
        <div><h2>E <span style={{color:'#103178'}}>mart</span></h2></div>


        <div className="d-flex">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allproducts">Products</Link>
              </li>
             
                    {user?.email &&<li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/dashboard">Dashboard</Link>
                    </li>}
                    <li className="nav-item">
                      <p className="nav-link menu-color" to="/login">

                        {
                          user?.displayName

                        }

                      </p>
                    </li>

              {
                user?.email ?
                  
                    
                    
                    <li className="nav-item">
                      <button onClick={logout} className="btn btn-dark" >Log Out</button>
                    </li>
                  
                  :
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
              }


            </ul>
          </div>

        </div>
      </div>
    </nav>

  );
};

export default Navbar;