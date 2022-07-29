import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return(
        <div className='container text-center'>
            <h5>Página no encontrada <br/> Por favor dirijase nuevamente a Home</h5>
            <button type="button" className='btn btn-outline-primary' ><Link className='nav-link active' to="/">Home</Link></button>
        </div>
    )
}