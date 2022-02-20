import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fast-fjord-41602.herokuapp.com/allproducts`)
            .then(res => res.json())
            .then(data => setAllProducts(data))

    }, [])
    return (
        <div className='container mt-5'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                
               {
                   allProducts.map(allProducts => <Product products={allProducts}></Product>)
               }
             
             
            </div>
        </div>
    );
};

export default AllProducts;