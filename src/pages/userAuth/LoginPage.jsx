// React stuff & imports
import React, { useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ...

// css Imports
import './auth.css';
// ...

// Other imports
import UserContext from "../../context/user/UserContext";
import { URL_API_USERS, HEADERS } from '../../constants/api_constants';
// ...

const LoginPage = () => {

  const [errorMessage, setErrorMessage] = useState(null)
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const inputUsername = useRef(null);
  const inputPass = useRef(null);

  // Login function
  const loginUser = async (params) => {
    setErrorMessage(null);
    const options = {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(params)
    };

    try {
      const response = await fetch(`${URL_API_USERS}/login`, options);
      const data = await response.json();
      if (data.token) {
        // Context
        setUser(data);
        // LocalStarage
        localStorage.setItem('user', JSON.stringify(data));
        // Redirect
        navigate("/");
      }else{
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  }

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
    const data = {
      "email": inputUsername.current.value,
      "password": inputPass.current.value
    }
    loginUser(data);
  }

  return (
    <main className='form-container-auth'>
      <div>
        <form  autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <p>Email: <input className='authSubm2' type="text" name="username" ref={inputUsername} placeholder="email" /></p>
          <p>Password: <input className='authSubm2' type="password" name="password" ref={inputPass} placeholder="password" /></p>
          <input className='authSubm' type="submit" value="Enviar" />
        </form>
        {errorMessage && <div className='error'>{errorMessage}</div>}
        
      </div>
    </main>
  )
}

export default LoginPage