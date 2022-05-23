import React from 'react';

const Product = ({ product }) => {
    const { name, img, description, quantity, minimumOrder, pricePerUnit } = product;
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
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;