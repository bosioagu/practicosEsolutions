import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../services/UserService';
import '../styles/Login.css'

export default function Login() {

    let navigate = useNavigate();
    const [email, setEmail] = useState("")

    const getEmail = event =>{
        setEmail(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        getUser().then((data) => {
            let usersEmails= data.map((user) => (user.email)) 
            let includes = usersEmails.includes(email)
         if( includes){
                alert("Bienvenido");
                navigate("/AllPost")
            }else{
                alert("Usted debe registrse")}
                
    })
    }

    function handleClick() {
        navigate("/Register")
    }
    
    return(
        <div className='container text-center '>
            <h3>Bienvenidos de nuevo. Por favor inicie sesión</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label col-md-4'>
                        <input type='email' className='form-control' placeholder='Escriba su dirección electrónico' name="email" onChange={getEmail}/>
                    </label>
                    </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label col-md-4'>
                        <input type='password' className='form-control ' placeholder='Escriba su contraseña' name="password"/>
                    </label>
                </div>
                <div className='container text-center'>
                    <button className='btn btn-outline-primary'>Ingresar</button>
                    
                    <button type="button" className='btn btn-outline-primary ' onClick={handleClick}>Registrarse</button>
                </div>
            </form>
        </div>
    )
}