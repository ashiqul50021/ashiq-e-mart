import React from 'react';
import freeshipping from '../../../images/rocket.png';
import freeReturn from '../../../images/reload.png';
import getoff from '../../../images/notification.png';
import support from '../../../images/support.png';
const Facilities = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                <img className='mx-2' src={freeshipping} alt="" />
                    <div><p style={{fontWeight:'bold'}}>Free shipping</p>
                    <small style={{color:'#AAAAAA'}}>orders TK40 BDT or more</small></div>
                </div>
                
                <div className='d-flex'>
                <img className='mx-2' src={freeReturn} alt="" />
                    <div><p style={{fontWeight:'bold'}}>Free Return</p>
                    <small style={{color:'#AAAAAA'}}>within 30 days</small></div>
                </div>
                
                <div className='d-flex'>
                <img className='mx-2' src={getoff} alt="" />
                    <div><p style={{fontWeight:'bold'}}>Get 20% Off 1 Item</p>
                    <small style={{color:'#AAAAAA'}}>when you sign up</small></div>
                </div>
                
                <div className='d-flex'>
                <img className='mx-2' src={support} alt="" />
                    <div className='mx-4'><p  style={{fontWeight:'bold'}}>We support</p>
                    <small style={{color:'#AAAAAA'}}>24/7 amazing services</small></div>
                </div>
                
            </div>
        </div>
    );
};

export default Facilities;