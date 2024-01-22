import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import CartWidget from '../Shopping/CartWidget.jsx'

function NavBar() {
    return (
        <div className='navBar-container'>
            <ul>
                <li>
                    <Link to='/' className='links'>Home</Link>
                    <Link to={`/products/joyas`} className='links'>
                        Jewelry Products
                    </Link>
                    <Link to={`/products/electronic`} className='links'>
                        Electronics Products
                    </Link>
                    <Link to={`/products/men`} className='links'>
                        Men´s Products
                    </Link>
                    <Link to={`/products/women`} className='links'>
                        Women´s Products
                    </Link>
                    <Link to='/shoppingcart'>
                        <div className='widget-container'>
                            <CartWidget />
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar