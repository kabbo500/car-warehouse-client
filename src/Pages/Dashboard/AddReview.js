import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://boiling-tor-55040.herokuapp.com/review`;
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
                    toast('Your Review is successfully submit')
                }
                console.log(result);

            })
    };

    return (
        <div className='w-50  mx-auto mt-10'>
            <h1 className='text-2xl font-bold text-primary mb-8'>Add Your Review</h1>
            <form className='d-flex flex-column w-100 mx-auto' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2 input input-bordered w-full max-w-xs' placeholder='Name' {...register("name")} />

                <textarea className='mb-2 input input-bordered w-full max-w-xs' placeholder='Description' {...register("feedback")} />


                <input className='mb-3 input input-bordered w-full max-w-xs' type="email" value={user.email} {...register("email")} />
                <input className='input input-bordered w-full max-w-xs bg-primary text-white' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;