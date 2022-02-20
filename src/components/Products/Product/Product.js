import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { _id, img, name, price ,rating} = props.products;
    return (
        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="text-center card-title">{name}</h5>
                    <p  class="card-text text-center">Price. {price}  BDT<span>{rating}</span></p>
                    <Link className="btn btn-outline-success product-btn" to={`/purchase/${_id}`} role="button">Buy now</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;