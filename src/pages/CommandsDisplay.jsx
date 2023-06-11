// React stuff & imports
import React, { useState, useEffect} from 'react'
// ...

// Other imports
import CommandsService from '../services/CommandsService.js'
import CommandsList from './CommandsList'
// ...

// css imports
import './commandsDisplay.css'
// ...

const CommandsDisplay = () => {

    const [commands, setCommands] = useState([])

    useEffect(()=> {
        CommandsService.getCommand().then(data => setCommands(data));
    },[]);


  return (
    <main className='hp cd'>

        <h2 className='cd-title'>- Guia y lista de comandos -</h2>

        <table className='tabla-lc'>
            <thead>
                <tr >
                    <th className='cd-theadth nameC'>Nombre del comando</th>
                    <th className='cd-theadth'>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {commands.map((e) => <CommandsList key={e._id} {...e}/>)}
            </tbody>
        </table>

        <ul className='circles-cd'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

    </main>
  )
}

export default CommandsDisplay