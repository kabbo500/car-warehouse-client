import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import auth from '../../../firebase.init';
import './Purchase.css'
const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const { name, pricePerUnit, _id } = product;
    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        const url = `https://boiling-tor-55040.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handlePurchase = event => {
        event.preventDefault();
        const name = event.target.name.value;

        const booking = {
            productId: _id,
            name: name,
            pricePerUnit,
            customer: user.email,
            customerName: user.displayName,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value,
            address: event.target.address.value
        }

        fetch('https://boiling-tor-55040.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast(`${product.name} Purchase is successful`)
                }
                console.log(data)
            })

    }

    return (
        <div>
            <h1 className='text-3xl font-bold my-7'>Purchase:{name}</h1>
            <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center'>
                <input type="text" name="name" disabled
                    value={name}
                    class="input input-bordered w-full max-w-xs" />
                <input type="text" disabled
                    value={_id}
                    class="input input-bordered w-full max-w-xs" />
                <input type="number"
                    name="quantity"
                    placeholder="Product quantity" class="input input-bordered w-full max-w-xs" />
                <input type="text"
                    value={user?.displayName || ''}
                    name="customerName" class="input input-bordered w-full max-w-xs" />
                <input type="email"
                    value={user?.email || ''}
                    name="email"
                    class="input input-bordered w-full max-w-xs" />
                <input type="number"
                    name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                <input type="text"
                    name="address"
                    placeholder="Your Address" class="input input-bordered w-full max-w-xs" />
                <input type="submit"
                    value="Purchase"
                    class="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Purchase;