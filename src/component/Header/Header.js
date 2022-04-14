import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user } = useFirebase();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to='/' className='nav-link' >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' className='nav-link' >Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/order' className='nav-link' >Order</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/register' className='nav-link' >Register</Link>
                            </li>

                            {
                                user.uid
                                    ?
                                    <button className='btn btn-info'>Sign Out</button>
                                    :
                                    <li className="nav-item">
                                        <Link to='/login' className='nav-link' >Login</Link>
                                    </li>
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;