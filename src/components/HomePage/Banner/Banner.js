import React from 'react';
import { Link } from 'react-router-dom';
import bannerimg from '../../../images/banner2.gif';
import './Banner.css'

const Banner = () => {
    return (
       <div className="banner mt-5">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={bannerimg} className='w-100 h-100' alt="" />
                </div>
                <div className="col-md-6">
                    <div className='banner-text'>
                    <p className='top-text-p' style={{marginBottom:'0px'}}>ORGINAL FOODS</p>
                    <h1 className='banner-h1'>Our Promise</h1>
                    <p className='text-p'>we bring the seoason's best mix of animal food and hand-crafted factory from product conveniently to your door by growing and partnering with local farms and artisans in your area.</p>
                    <Link class="btn button" to="/allproducts" role="button"><span> more Explore!</span></Link>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Banner;