// React stuff & imports
import React from 'react';
// ...

// css imports
import './header.css';
// ...

// Other imports
import Navigation from './Navigation';
import UserDisplay from './UserDisplay';
// ...

const Header = () => {

  return (

    <header>

      {/* falta cambiar que la imagen se coja del backend */}
      <img src='/assets/img/png/logo-no-background.png' className='logo' alt='' />

      <Navigation/>

      <UserDisplay/>

    </header>

  )
}

export default Header