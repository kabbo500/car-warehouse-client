import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    toast('Your product is successfully added')
                }
                console.log(result);

            })
    };
    return (
        <div>
            <div className='w-50 mx-auto mt-12'>
                <h1 className='text-2xl font-bold text-purple-400 mb-6'>Please add new Product</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                    <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Name' {...register("name")} />
                    <input type='number' className='mb-2 input input-bordered w-full max-w-xs' placeholder='Minimum order' {...register("minimumOrder")} />
                    <textarea className='mb-2 input input-bordered w-full max-w-xs' placeholder='Description' {...register("description")} />
                    <input className='mb-3 input input-bordered w-full max-w-xs' placeholder='Price' type="number" {...register("pricePerUnit")} />
                    <input className='mb-3 input input-bordered w-full max-w-xs' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-3 input input-bordered w-full max-w-xs' type="email" value={user.email} {...register("email")} />
                    <input className='input input-bordered w-full max-w-xs bg-primary text-white' type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;