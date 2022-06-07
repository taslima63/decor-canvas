import React, { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import Loading from '../../../../Shared/Loading/Loading';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";
    console.log(from);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // error message show
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} </p>
        </div>
    }
    const [sendPasswordResetEmail, sending, passError] = useSendPasswordResetEmail(auth);

    //  return to the page from where login page invoked

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }


    // password reset
    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email address');
        }
    }
    // Login button handle event
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }

    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <div className='container'>
            <div className='w-50 mx-auto'>
                <h2 style={{ textAlign: 'center', color: "#dcf715", margin: '20px 0px' }}>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <button type="submit" className='bookBtn text-dark' >Login</button>

                </Form>
                {errorElement}

                <p>Forget Password?<button style={{ color: '#c5d912', outline: 'none', backgroundColor: '#fff', border: 'none' }} className=' pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

                <p>New to Decor Canvas? <Link to="/register" style={{ color: '#c5d912' }} className='pe-auto text-decoration-none' onClick={navigateRegister}> Register Here</Link> </p>
            </div>
            <ThirdPartyLogin></ThirdPartyLogin>
            <ToastContainer />

        </div>
    );
};

export default Login;