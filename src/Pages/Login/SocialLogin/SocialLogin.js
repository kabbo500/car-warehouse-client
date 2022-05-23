import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {

        errorElement = <p className='text-danger'>Error: {error.message}</p>

    }

    if (user) {
        if (user) {
            navigate(from, { replace: true });

        }
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-secondary w-50'></div>
                <h5 className='mt-2 px-2'>OR</h5>
                <div style={{ height: '2px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn d-flex mx-auto w-50 mt-3 bg-blue-600'><img src="https://www.linkpicture.com/q/kisspng-google-logo-google-search-google-now-5b1dacc1ad0462.3234288415286714257087-1.png" alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;