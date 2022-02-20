import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const PurchasePage = () => {
    // order place
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://fast-fjord-41602.herokuapp.com/placeorders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
                console.log(res);
            })
    }


    // single page 
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fast-fjord-41602.herokuapp.com/allproducts/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId])
    return (
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={product.img} style={{height:'400px', width:'100%'}} alt="" />
                            </div>
                            <div className="col-md-6 border-end">
                                <h4 className="text-center">{product.name}</h4>
                                
                                <hr />
                                <p>rating: {product.ratings}</p>
                                <h6>৳ {product.price}.00</h6>
                                <p>{product.description}</p>
                                
                            </div>
                        </div>
                        <hr />
                        <p>DESCRIPTION</p>
                        <hr />
                        <p>{product.description}</p>
                       
                    </div>
                    <div className="col-md-4">
                        <h4 className="text-center">Purchase</h4>
                        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
                           
                            <input className="form-control mt-3" defaultValue={user.displayName} {...register("name", { required: true, maxLength: 50 })} placeholder="Name" />

                            <input className="form-control mt-3" defaultValue={user.email} {...register("email", { required: true, maxLength: 50 })} placeholder="Email" />


                            <input className="form-control mt-3" {...register("address")} placeholder="Address" />
                            <input className="form-control mt-3 " {...register("number")} placeholder="Phone Number" />
                            <input className="form-control mt-3 " {...register("img")} placeholder="image Url" />
                          
                           
                           <input className="btn btn-secondary mt-3" type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;