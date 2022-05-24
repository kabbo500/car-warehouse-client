import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?customer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    return (
        <div>
            <h1 className='text-2xl font-bold text-primary'>My Orders</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Address</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.name}</td>
                                <td>{order.address}</td>
                                <td>{order.phone}</td>
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;