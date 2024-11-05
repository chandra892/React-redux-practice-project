import React from 'react';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="header">
            <h1>flipmart</h1>
        </div>

        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/jewelery">Jewelery</Link>
            <Link to="/men">Mens</Link>
            <Link to="/womens">Womens</Link>
        </div>

        <div className="login-links">
            <Link to="/profile"><i class="bi bi-person-circle"></i></Link>
            <Link to="/cart"><i class="bi bi-cart3"></i></Link>
            <Link to="/wishlist"><i class="bi bi-bag-heart"></i></Link>
            <button>Logout</button>
        </div>
        
    </div>
  )
}

export default Navbar