// React stuff & imports
import React, { useRef, useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
// ...

// Other imports
import CommandsService from '../../../services/CommandsService.js';
import RowCommands from './RowCommands';
// ...

const FormCommands = () => {

    const [newCommand, setNewCommand] = useState("")
    const [commands, setCommands] = useState([]);
    // const [message, setMessage] = useState("");

    const inputName = useRef(null);
    const inputDescription = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const command = {
            "name": inputName.current.value,
            "description": inputDescription.current.value,
        }

        CommandsService.newCommand(command).then(data => {
            document.getElementById('frm-command').reset();
            setNewCommand(command);
        });
        
    }

    const handleDelete = (id) => {
        CommandsService.delete(id).then(data => setNewCommand(data.message));
    }

    useEffect(() => {
        CommandsService.getCommand().then(data => setCommands(data));
    },[newCommand]);

  return (
    <div className='from-container'>
        <form id="frm-command" name='frm-command' onSubmit={e => handleSubmit(e)}>
            <h2>Commands Data</h2>
            <section className='firstRowcrud'>

                <label htmlFor="name-cm">Name</label>
                <input type="text" maxLength='20' id='title-cm' required placeholder='Name' ref={inputName} autoComplete='off'/>

                <label htmlFor="description-cm">Description</label>
                <input type="text" maxLength='200' id='description-cm' required placeholder='Description' ref={inputDescription}/>

                

            </section>
            <section className='panelButton'>
                <button><FaEdit size='16' /> Create new command</button>
            </section>

            

        </form>

        <div className='list'>

            <section id='commandsList'>
                <h2>Commands List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commands.map((e, index) => <RowCommands key={e.id} 
                                                            index={index + 1} {...e}
                                                            handleDelete={handleDelete}
                                                            setNewCommand={setNewCommand}
                        />)}
                    </tbody>
                </table>

            </section>

        </div>
    </div>
  )
}

export default FormCommands