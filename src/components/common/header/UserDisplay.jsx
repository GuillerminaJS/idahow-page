// React stuff & imports
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
// ...

// Other imports
import UserContext from '../../../context/user/UserContext';
// ...

const UserDisplay = () => {
  
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    // Init context
    setUser({
      id: null,
      name: null,
      surnames: null,
      email: null,
      phone: null,
      token: null,
      rol: null,
      language: "en"
    });
    // Remove local storage data
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (

    <article className='user-display-article'>

      {user.name ?

        <nav className='profileY'>
          <div className='menu-1'>
          <span className='span-profile'> <FaUserCircle className='user-icon'/> {`${user.name}` }</span> |
          
            <a className='logout' href="#" onClick={() => { logout() }}>Logout</a>
       
          </div>
        </nav>
        :
        <nav className='profileN'>
          <Link  className='menu-1' to='/registration'>Create Account</Link> |
          <Link  className='menu-1' to='/login'> Login</Link>
        </nav>

      }

    </article>
    
  )
}

export default UserDisplay