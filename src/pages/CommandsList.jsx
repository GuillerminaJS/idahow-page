import React from 'react'

const CommandsList = ({ name, description }) => {
  return (
    
    <tr className='command-row'>

        <td className='cn'> /{name}:</td>
        <td className='cd-desc'> - {description}</td>
        
    </tr>

  )
}

export default CommandsList