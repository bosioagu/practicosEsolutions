import React, { useState, useRef, useEffect } from 'react'
import { getUser, setUser } from '../services/UserService';
import { useNavigate } from 'react-router-dom';
import "../styles/Register.css"

export default function Register() {

    let navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState(false);
    const [alertError, setAlertError] = useState(false);

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

    const postName = event =>{
        setName(event.target.value);
    }

    const postEmail = event =>{
        setEmail(event.target.value)
    }
    const postPassword = event =>{
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const navigateToAllPost     = () => navigate("/AllPost")
        const navigateToLogin    = () => navigate("/Login")

        getUser().then((data) => {
            let usersEmails= data.map((user) => (user.email)) 
            let includes = usersEmails.includes(email)
            if( !includes){
                setUser( name, email, password).then( (data) => data)
                setAlert(true)
                setTimeout(navigateToAllPost,1800)
            }else{
                setAlertError(true)
                setTimeout(navigateToLogin,1800)
                }
        })
    }

    return(
        <div className='container text-center' id='register-container'>
            <h3>Por favor registrese aquí.</h3>
            <form className='register-form' onSubmit={handleSubmit}> 
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label col-md-4'>
                        <input type="text" className='form-control' placeholder='Escriba su nombre'  name='name' onChange={postName} required/>
                    </label> 
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label col-md-4'>
                        <input type="email" className='form-control' placeholder='Escriba su dirección de correo' name='email'onChange={postEmail} required/>
                    </label>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label col-md-4'>
                        <input type="password" className='form-control' placeholder='Escriba su contraseña'  name='password' onChange={postPassword} required/>
                    </label>
                </div>
                <div className='container text-center'>
                    <button type="submit"  className='btn btn-outline-primary' id='register-button' > Enviar</button>
                </div>
                <div className='row justify-content-center ' id='login-alert'>
                    {alert && <div className='alert alert-success form-label col-md-4'>Bienvenido</div>}
                    {alertError && <div className='alert alert-danger col-md-4'>Usted ya se encuentra registrado, por favor inicie sesion</div>}
                </div>

            </form>
        </div>
    )
}

