import React from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
        <nav className='navbar  navbar-expand-lg bg-light'>
            <div className='container-fluid'>
                <h2 ><Link className='navbar-brand' to="/">Fabuloso Blog</Link></h2>
                <div className='nav justify-content-end'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link active' to="/Login">Iniciar Sesión</Link>
                        </li>
                    </ul>
                 </div>
            </div>
        </nav>
    )
}