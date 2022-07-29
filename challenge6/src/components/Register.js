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
        <div className='wrapper-register'>
            <h2>Bienvenidos. Por favor registrese aquí.</h2>
            <form className='register-form' onSubmit={handleSubmit}> 
                <fieldset>
                    <label htmlFor='name'>
                        <input type="text" placeholder='Escriba su nombre' className='register-input' name='name' onChange={postName}/>
                    </label> <br/>
                    <label htmlFor='email'>
                        <input type="email" placeholder='Escriba su dirección de correo' className='register-input'name='email'onChange={postEmail}/>
                    </label> <br/>
                    <label htmlFor='password'>
                        <input type="password" placeholder='Escriba su contraseña' className='register-input' name='password' onChange={postPassword}/>
                    </label>
                </fieldset>
                <button type="submit"  className='register-button' > Enviar</button>
            </form>
        </div>
    )
}

