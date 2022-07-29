import React, { useState } from 'react'
import { getUser, setUser } from '../services/UserService';
import { useNavigate } from 'react-router-dom';
import "../styles/Register.css"

export default function Register() {

    let navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
        getUser().then((data) => {
            let usersEmails= data.map((user) => (user.email)) 
            let includes = usersEmails.includes(email)
            if( !includes){
                setUser( name, email, password).then( (data) => data)
                alert("Bienvenido");
                navigate("/AllPost")
            }else{
                alert("Usted ya se encuentra registrado, por favor inicie sesion")
                navigate("/Login")
                }
        })
    }

    return(
        <div className='container text-center'>
            <h3>Bienvenidos. Por favor registrese aquí.</h3>
            <form className='register-form' onSubmit={handleSubmit}> 
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label col-md-4'>
                        <input type="text" className='form-control' placeholder='Escriba su nombre'  name='name' onChange={postName}/>
                    </label> 
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label col-md-4'>
                        <input type="email" className='form-control' placeholder='Escriba su dirección de correo' name='email'onChange={postEmail}/>
                    </label>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label col-md-4'>
                        <input type="password" className='form-control' placeholder='Escriba su contraseña'  name='password' onChange={postPassword}/>
                    </label>
                </div>
                <div className='container text-center'>
                    <button type="submit"  className='btn btn-outline-primary' > Enviar</button>
                </div>
            </form>
        </div>
    )
}

