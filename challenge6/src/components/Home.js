import React from 'react'
import "../styles/Home.css"

export default function Home() {
    return(
        <div className='container text-center '>
            <div>
                <h3>Bienvenidos a mi Blog</h3>
            </div>
            <div className='text-center'>
                <img    className='rounded'
                        src="https://img.freepik.com/foto-gratis/arreglo-libros-antiguos-espacio-copia_23-2148898331.jpg?w=826&t=st=1659010588~exp=1659011188~hmac=763ebda2a762e3c1e74d6ec79a0eb264f4ff9c4c1980ef0db85a30a99c7c3f92"
                        alt="bienvenido"
                        width="500px"/>
            </div>

        </div>
    )
}