import React from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div className='navbar'>
            <h2><Link to="/">Fabuloso Blog</Link></h2>
            <div>
                <ul>
                    <li><Link to="/Login">Iniciar Sesión</Link></li>

                </ul>
            </div>
        </div>
    )
}