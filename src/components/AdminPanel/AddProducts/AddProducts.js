import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://fast-fjord-41602.herokuapp.com/allproducts', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
             console.log(res);
        })
    }
        return (
            <div className="add-service text-center">
                <h2>Please Add a Products</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name" />
                    <input {...register("ratings", { required: true, maxLength: 20 })} placeholder="Ratings" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="image url" />
                    <input className='btn  btn-outline-dark' type="submit" />
                </form>
            </div>
        );
    };
    export default AddProducts;