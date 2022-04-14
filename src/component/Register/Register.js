
import React from 'react';
import './Register.css';
const Register = () => {
    return (
        <div className='container'>
            <h2 className='mb-3 text-center'>Sign Up Page</h2>

            <form className='register'>
                <input type="text" placeholder='Your Name' className='my-2' /> <br />
                <input type="email" placeholder='Your Email' className='my-2' /><br />
                <input type="password" placeholder='Your Password' className='my-2' /><br />
                <input className='btn btn-success' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;