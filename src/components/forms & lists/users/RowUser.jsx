// React stuff & imports
import React, { useState } from 'react';
import { FaTrashAlt, FaEdit, FaSave } from 'react-icons/fa';
// ...

// Other imports
import UserService from '../../../services/UsersService.js';
// ...

const RowUser = ({ index, _id, name, surname, email, rol, setMessage}) => {
    const [editUser, setEditUser] = useState(false);
    const [usernameValue, setName] = useState(name);
    const [surnameValue, setSurname] = useState(surname);
    const [mailValue, setMail ] = useState(email)
    const [roleValue, setRole] = useState(rol);

    const handleSave = () => {
        if (usernameValue===""){
            alert("Error: name is null");
            return false;
        }

        const user={
            "id": _id,
            "name": usernameValue,
            "surname": surnameValue,
            "rol": roleValue,
            "email": mailValue,
        }
        
        UserService.update(user).then(e=>{
            setMessage("Updated user:"+ e.name);
            setEditUser(false);
        });
    }

  return (
    
        <tr className='crud-tr'>
            <td><input type="text" value={usernameValue} onChange={e=>setName(e.target.value)}  
                className={editUser ? 'editForm' : "readOnlyForm"} 
                readOnly={!editUser}
                />
            </td>
            <td><input type="text" value={surnameValue} onChange={e=>setSurname(e.target.value)}
                className={editUser ? 'editForm' : "readOnlyForm"}
                readOnly={!editUser}
                />
            </td>

            <td><select className={editUser ? 'editForm' : "readOnlyForm"} onChange={e=>setRole(e.target.value)} defaultValue={roleValue} readOnly={!editUser}>
                        <option value="ADMIN">ADMIN</option>
                        <option value="STANDARD">STANDARD</option>
                    </select>
            </td>

            <td><input type="text" value={mailValue} onChange={e=>setMail(e.target.value)}
                className={editUser ? 'editForm' : "readOnlyForm"}
                readOnly={!editUser}
                />
            </td>

            <td className="actions">
                {
                    (editUser) ? <FaSave onClick={() => handleSave()} color='orange' size='20'/> 
                        : <FaEdit onClick={() => setEditUser(true)} color='blue' size='20'/>
                }
            </td>
        </tr>

  )
}


export default RowUser