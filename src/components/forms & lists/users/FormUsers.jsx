// React stuff & imports
import React, { useRef, useState, useEffect } from 'react'
// ...

// Other imports
import UserService from '../../../services/UsersService.js';
import RowUser from './RowUser.jsx';
// ...

// import './users.css '

const FormUsers = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(()=> {
        UserService.getUser().then(data => setUsers(data));
    },[message]);
    
  return (
    <div className='form-container'>

        {/* {message && <div className='action-message'>{message}</div>} */}

        <div className='list'>
        <section id="categoriesList">
                <h2>Lista de usuarios :</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surnames</th>
                            <th>Role</th>
                            <th>Email</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((e, index) =><RowUser key={e._id} 
                                                                  index={index + 1}{...e} 
                                                                  setMessage={setMessage}
                                                                  />)}
                    </tbody>
                </table>
            </section>
        </div>
            
    </div>
  )
}

export default FormUsers