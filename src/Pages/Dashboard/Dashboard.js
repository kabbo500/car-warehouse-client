import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h1 className='text-3xl font-bold text-green-600 mx-auto'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profiles</Link></li>
                    {!admin && <li><Link to="/dashboard/addReview">Add Reviews</Link></li>}
                    {!admin && <li><Link to="/dashboard/myOrders">My Orders</Link></li>}
                    {admin && <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>}
                    {admin && <li><Link to="/dashboard/addProduct">AddProduct</Link></li>}
                    {admin && <li><Link to="/dashboard/manageAllOrders">Manage All Orders</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;