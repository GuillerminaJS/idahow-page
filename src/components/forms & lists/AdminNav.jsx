// React stuff & imports
import React from 'react'
import { Link } from 'react-router-dom';
// ...

import './adminNav.css';

const AdminNav = ({item}) => {
  return (
    <nav className='crud-menu'>
        <Link to="/user-mg" id='nav-a' className={item==="user"?'active':''}> Users</Link>
        <Link to="/news-mg" id='nav-a' className={item==="news"?'active':''}> News</Link>
        <Link to="/commands-mg" id='nav-a' className={item==="commands"?'active':''}> Commands</Link>
    </nav>
  )
}

export default AdminNav