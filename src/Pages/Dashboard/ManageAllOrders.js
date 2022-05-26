// import { signOut } from 'firebase/auth';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import auth from '../../firebase.init';

// const ManageAllOrders = () => {
//     const [bookings, setBookings] = useState([]);
//     const [user] = useAuthState(auth);
//     const navigate = useNavigate();


//     useEffect(() => {
//         if (user) {
//             fetch(`https://boiling-tor-55040.herokuapp.com/booking`, {
//                 method: 'GET',
//                 headers: {
//                     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//                 .then(res => {
//                     console.log('res', res)
//                     if (res.status === 401 || res.status === 403) {
//                         signOut(auth);
//                         localStorage.removeItem('accessToken');
//                         navigate('/')
//                     }
//                     return res.json()
//                 })
//                 .then(data => {
//                     setBookings(data);
//                 });
//         }
//     }, [user])
//     return (
//         <div>
//             <h1 className='text-2xl font-bold text-primary'>All Orders</h1>
//             <div class="overflow-x-auto">
//                 <table class="table w-full">

//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Product</th>
//                             <th>Address</th>
//                             <th>Mobile</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                         {
//                             bookings.map((booking, index) => <tr>
//                                 <th>{index + 1}</th>
//                                 <td>{booking.customerName}</td>
//                                 <td>{booking.name}</td>
//                                 <td>{booking.address}</td>
//                                 <td>{booking.phone}</td>
//                             </tr>)
//                         }





//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManageAllOrders;