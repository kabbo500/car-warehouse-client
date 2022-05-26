import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <h1 className='text-3xl font-bold my-7'>My Profile</h1>
            <form className='grid grid-cols-1 gap-3 justify-items-center'>

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
                <input type="text"
                    name="education"
                    placeholder="Your educational qualification" class="input input-bordered w-full max-w-xs" />
                <input type="submit"
                    value="Purchase"
                    class="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default MyProfile;