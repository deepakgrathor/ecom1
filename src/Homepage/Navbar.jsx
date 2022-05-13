import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './logo.png'

const Navbar = () => {
    return (
        <>
            <nav className='main_div'>
                <div className='logo'>
                    <img src={logo} />
                </div>
                <div className='menu'>
                    <a href="#">Home</a>
                    <a href="#">Category</a>
                    <a href="#">Contact us</a>
                    <a href="#">About us</a>
                </div>
                <div className='search'>
                    <input type="text" placeholder='Search for Products' /><button>Search</button>
                </div>
                <div className='cart'>
                    <img src="https://img.icons8.com/material-rounded/24/ffffff/shopping-cart.png" />
                </div>
                <div className='signin'>
                    <h2>Sign in / Sign up</h2>
                </div>
            </nav>
        </>
    )
}

export default Navbar
