import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import Loading from '../../../../Shared/Loading/Loading';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../../../images/google.svg';

const ThirdPartyLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (googleError) {
        errorElement = <div>
            <p className='text-danger'>Error: {googleError?.message} </p>
        </div>
    }
    if (googleLoading) {
        return <Loading></Loading>
    }
    if (googleUser) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '2px', backgroundColor: '#dcf715' }} className=' w-50'>
                </div>
                <p className='m-2 fw-bolder' style={{ color: '#dcf715' }}>OR</p>
                <div style={{ height: '2px', backgroundColor: '#dcf715' }} className='w-50'>
                </div>
            </div>
            {errorElement}

            <button onClick={() => { signInWithGoogle() }} className="btn btn-dark d-block w-50 mx-auto mb-2">
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2'> Google Sign In</span>
            </button>
        </div>

    );
};

export default ThirdPartyLogin;