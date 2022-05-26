import React, { useState } from 'react';

const AllProduct = ({ product }) => {
    const { name, img, description, quantity, minimumOrder, pricePerUnit } = product;

    const [products, setProducts] = useState([]);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://boiling-tor-55040.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);

                })

        }
    }

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold">{name}</h2>
                <p><small>{description}</small></p>
                <p>Available-Quantity:<small>{quantity}</small></p>
                <p>Minimum-Order: {minimumOrder}</p>
                <p className='font-bold'>Price-Per Unit: {pricePerUnit}</p>
                <div class="card-actions">
                    <button onClick={() => handleDelete(product._id)} class="btn btn-red-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;