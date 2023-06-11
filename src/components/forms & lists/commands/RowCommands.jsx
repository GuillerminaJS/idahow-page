// React stuff & imports
import React, {useState} from 'react';
import { FaTrashAlt, FaEdit,FaSave } from 'react-icons/fa';
// ...

// Other imports
import CommandsService from '../../../services/CommandsService';
// ...

const RowCommands = ({ index, id, name, description, handleDelete, setNewCommand }) => {

    const [editCommand, setEditCommand] = useState(false);
    const [nameValue, setName] = useState(name);
    const [descriptionValue, setDescription] = useState(description);
    

    const handleSave = () => {
        
        const commands = {
            "id": id,
            "name": nameValue,
            "description": descriptionValue,
        }

        CommandsService.update(id, commands).then(e=>{
            setNewCommand("Updated command:"+ e.id);
            setEditCommand(false)
        });
    }

  return (
    <tr className='crud-tr'>
        <td><input type="text" value={nameValue} onChange={e=>setName(e.target.value)}  
                className={editCommand ? 'editForm' : "readOnlyForm"} 
                readOnly={!editCommand}
                />
        </td>
        <td><input type="text" value={descriptionValue} onChange={e=>setDescription(e.target.value)}  
                className={editCommand ? 'editForm' : "readOnlyForm"} 
                readOnly={!editCommand}
                />
        </td>

        <td className="actions">
                {
                    (editCommand) ? <FaSave onClick={() => handleSave(id)} color='orange' size='20'/> 
                        : <FaEdit onClick={() => setEditCommand(true)} color='blue' size='20'/>
                }
                <FaTrashAlt onClick={() => handleDelete(id)} color='red' />
        </td>
    </tr>
  )
}

export default RowCommands