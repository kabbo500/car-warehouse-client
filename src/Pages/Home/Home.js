import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import useReviews from '../../hooks/useReviews';
import Banner from './Banner/Banner';
import BusinessSummary from './BusincessSummary/BusinessSummary';
import Product from './Product/Product';
import Promotion from './Promotion/Promotion';
import Purchase from './Purchase/Purchase';
import Review from './Review/Review';

const Home = () => {
    const [products, setProducts] = useProducts([]);

    const [reviews] = useReviews([]);
    return (
        <div>
            <Banner></Banner>
            <div className='container'>
                <h1 className='text-primary text-center my-4 text-3xl'>Available Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        products.map(product => <Product key={product._id} product={product}
                        ></Product>)
                    }

                </div>

            </div>
            <BusinessSummary></BusinessSummary>
            <div className='container'>
                <h1 className='text-primary text-center my-4 text-3xl'>Customers Feedback</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }

                </div>
            </div>
            <Promotion></Promotion>
        </div>
    );
};

export default Home;