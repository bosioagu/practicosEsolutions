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
        <div className='login-wrapper'>
            <h1>Bienvenidos de nuevo. Por favor inicie sesión</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor='email'>
                        <input type='email' placeholder='Escriba su dirección electrónico' name="email" onChange={getEmail}/>
                    </label>
                    <label htmlFor='password'>
                        <input type='password' placeholder='Escriba su contraseña' name="password"/>
                    </label>
                </fieldset>
                <button>Ingresar</button>
                <button type="button" onClick={handleClick}>Registrarse</button>
            </form>
        </div>
    )
}