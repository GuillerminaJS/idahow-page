// React stuff & imports
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
// ...

// Other imports
import UserContext from '../../../context/user/UserContext';
// ...

const Navigation = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    
    <ul className='navigation'>

        <Link className='nav-1' to='/'>HOME</Link>
        <Link className='nav-1' to='/commandsList'>COMMANDS</Link>
        <li className='nav-1' ><a href="https://discord.com/api/oauth2/authorize?client_id=1113521748042850385&permissions=8&scope=bot%20applications.commands">INVITE</a></li>

        {/* Administration panel */}
        {user.rol === 'ADMIN' &&

          <Link className='nav-1' to='/crud'>ADMINISTRATION</Link>

        }
        {/* ..... */}

    </ul>
    
  )
}

export default Navigation