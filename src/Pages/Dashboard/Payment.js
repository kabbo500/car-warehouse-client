import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0f4eFyMJ4daUd0RiSCD2X0GW0BJ2bR76oJjUliwi9CAPQjCkZRd9pS8Y5cYlRiKqTj39DkQsxRHv51AV7uKJo900ZJg82XyO');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello :{order.customerName}</p>
                    <h2 class="card-title">Pay for {order.name}</h2>
                    <p>Please Pay: {order.pricePerUnit}</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 my-12 mx-auto">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;