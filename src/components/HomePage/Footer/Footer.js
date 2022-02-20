import React from 'react';
import bkashlogo from '../../../images/Bkash-logo1.png';
import rocketlogo from '../../../images/rocketlogo.png';
import upailogo from '../../../images/upai.png';
import nogodlogo from '../../../images/nagad-logo.png';
import visalogo from '../../../images/vishalogo.png';
import './Footer.css'


const Footer = () => {
    return (
        <div style={{backgroundColor:'#131313', width:'100%', height:'100%',overflow:'hidden'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-white">
                        <p className="mt-5">© Copyright 2021 Ashiq Cat Food's</p>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-evenly mt-2 container">
                            <img className='img-size' src={bkashlogo} alt="" />
                            <img className='img-size' src={rocketlogo} alt="" />
                            <img className='img-size' src={upailogo} alt="" />
                            <img className='img-size' src={nogodlogo} alt="" />
                            <img className='img-size' src={visalogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;