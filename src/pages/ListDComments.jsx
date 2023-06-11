import React from 'react'
import {FaUserCircle, FaCaretSquareDown} from 'react-icons/fa'


const ListComments = ({comment, user, }) => {

  return (

    <div className='listC'>


            <td className="comentarioUsr">
            
            <p className='nameUsr'> <FaUserCircle className='user-icon'/> {user.name} :</p>
                <p>{comment}</p>
                
            </td>
        

    </div>
  )
}

export default ListComments