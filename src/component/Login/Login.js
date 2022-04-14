
import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div className='container'>
            <h2 className='text-center my-5'>This is login Page</h2>

            <div className='text-center my-2'>
                <button onClick={signInWithGoogle} className='btn btn-success'>Google Sign in</button>
            </div>

            <form className='register'>
                <input type="email" placeholder='Your Email' className='my-2' /><br />
                <input type="password" placeholder='Your Password' className='my-2' /><br />
                <input className='btn btn-success' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;