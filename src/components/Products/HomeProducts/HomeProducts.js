import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const HomeProducts = () => {
    const [allHomeProducts, setAllHomeProducts] = useState([]);

    useEffect(() => {
        fetch('https://fast-fjord-41602.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => setAllHomeProducts(data))

    }, [])
    return (
       <div style={{marginTop:'90px'}}>
           <h3 style={{color:'#1C3C7F',textAlign:'center',fontWeight:'bold',fontWeight:'700',textTransform:'uppercase'}}>Products</h3>
           <p className='text-center mt-0 mb-5'>best product ,best price</p>
            <div className='container'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                
               {
                   allHomeProducts.slice(4,8).map(allHomeProducts => <Product products={allHomeProducts}></Product>)
               }
             
             
            </div>
        </div>
       </div>
    );
};

export default HomeProducts;