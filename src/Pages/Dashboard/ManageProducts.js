import React from 'react';
import useProducts from '../../hooks/useProducts';
import AllProduct from './AllProduct';

const ManageProducts = () => {
    const [products, setProducts] = useProducts([]);
    return (

        <div className='container'>
            <h1 className='text-primary text-center my-4 text-3xl'>Manage All Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <AllProduct key={product._id} product={product}
                    ></AllProduct>)
                }

            </div>

        </div>

    );
};

export default ManageProducts;