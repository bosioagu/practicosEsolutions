import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"

export default function Home() {
    return(
        <div id="intro" class="bg-image shadow-2-strong">
            <div className='container d-flex align-items-center justify-content-center text-center h-100  '>
                <div>
                    <h3>Bienvenidos a mi Blog</h3>
                    <button type="button" className='btn btn-outline-secondary' id="login-button" ><Link className='nav-link active' to="/Login">Historias</Link></button>
                </div>
            </div>
        </div>
    )
}