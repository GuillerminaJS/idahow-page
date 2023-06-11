// React stuff & imports
import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// ...

// css Imports
import './auth.css';
// ...

// Other imports
import UserContext from '../../context/user/UserContext';
import { URL_API_USERS, HEADERS } from '../../constants/api_constants';
// ...

const RegistrationFormPage = () => {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const inputName = useRef(null);
    const inputSurnames = useRef(null);
    const inputEmail = useRef(null);
    const inputPass1 = useRef(null);
    const inputPass2 = useRef(null);

    const newUser = async (params) => {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };


        try {
            const response = await fetch(`${URL_API_USERS}/register`, options);

            const data = await response.json();
            if (data.token) {
                console.log("registrado");
                // Context
                setUser(data);
                // LocalStarage
                localStorage.setItem('user', JSON.stringify(data));
                // Redirect
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate password
        if (inputPass1.current.value != inputPass2.current.value) {
            alert("Password dont match");
            return false;
        }
        const data = {
            "name": inputName.current.value,
            "surname": inputSurnames.current.value,
            "email": inputEmail.current.value,
            "rol": "STANDARD",
            "password": inputPass1.current.value
        }
        newUser(data);
    }

    return (
        <main className='form-container-auth'>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <p>Nombre: <input className='authSubm2' type="text" ref={inputName} placeholder="name" /></p>
                    <p>Apellido/s: <input className='authSubm2' type="text" ref={inputSurnames} placeholder="surname" /></p>
                    <p>Gmail: <input className='authSubm2' type="email" ref={inputEmail} placeholder="email" /></p>
                    <p>Contraseña: <input className='authSubm2' type="password" ref={inputPass1} placeholder="password" /></p>
                    <p>Repita la contraseña:<input className='authSubm2' type="password" ref={inputPass2} placeholder="password2" /></p>
                    <input className='authSubm' type="submit" value="Enviar" />
                </form>
                <p className='iflogin'> 
                    Si ya tienes una cuenta:
                    <Link to="/login">Login</Link>
                </p>
            </div>


           
        </main>

    )
}

export default RegistrationFormPage