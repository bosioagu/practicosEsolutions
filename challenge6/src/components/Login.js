import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../services/UserService';

import '../styles/Login.css'

export default function Login() {

    let navigate = useNavigate();
    const [alert, setAlert] = useState(false);
    const [alertError, setAlertError] = useState(false);
    const [email, setEmail] = useState("")
    let mounted = useRef(true);

    useEffect(() => {
        if (alert) {
          setTimeout(() => {
            if (mounted.current) {
              setAlert(false);
            }
          }, 1800);
        }
      }, [alert]);
   
    useEffect(() => {
        if (alertError) {
          setTimeout(() => {
            if (!mounted.current) {
                setAlertError(false);
            }
          }, 1800);
        }
      }, [alertError]);

    const getEmail = event =>{
        setEmail(event.target.value);
    }
 
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const navigateToAllPost     = () => navigate("/AllPost")
        const navigateToRegister    = () => navigate("/Register")

        getUser().then((data) => {
            let usersEmails= data.map((user) => (user.email)) 
            let includes = usersEmails.includes(email)
            if( includes){
                setAlert(true)
                setTimeout(navigateToAllPost,1800)
            }else{
                setAlertError(true)
                setTimeout(navigateToRegister,1800)
            }
        })
    }

    function handleClick() {
        navigate("/Register")
    }
    
    return(
        <div className='container text-center' id='login-container'>
            <h3>Bienvenidos de nuevo <br/> Por favor inicie sesión</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label col-md-4'>
                        <input type='email' className='form-control' placeholder='Escriba su dirección electrónico' name="email" onChange={getEmail} required/>
                    </label>
                    </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label col-md-4'>
                        <input type='password' className='form-control ' placeholder='Escriba su contraseña' name="password" />
                    </label>
                </div>
                <div className='container text-center'>
                    <button type="submit"className='btn btn-outline-primary' id="login-button">Ingresar</button>
                    <button type="button" className='btn btn-outline-primary' id="login-button-register" onClick={handleClick}>Registrarse</button>
                </div>
                <div className='row justify-content-center ' id='login-alert'>
                    {alert && <div className='alert alert-success form-label col-md-4'>Bienvenido</div>}
                    {alertError && <div className='alert alert-danger col-md-4'>Usted debe registrse</div>}
                </div>
            </form>
        </div>
    )
}