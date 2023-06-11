// React stuff & imports
import React, {useState} from 'react';
import { FaTrashAlt, FaEdit, FaSave } from 'react-icons/fa';
// ...

// Other imports
import NewsService from '../../../services/NewsService.js';
// ...

const RowNews = ({ index, _id, title, date, desc, handleDelete, setNewNews }) => {

    const [editNews, setEditNews] = useState(false);
    const [titleValue, setTitle] = useState(title);
    const [dateValue, setDate] = useState(date);
    const [descValue, setDesc] = useState(desc);

    const handleSave = () => {
        
        const news = {
            "id": _id,
            "title": titleValue,
            "date": dateValue,
            "desc": descValue,
        }

        NewsService.update(news).then(e=>{
            setNewNews("Updated news:"+ e._id);
            setEditNews(false)
        });
    }

  return (
    <tr className='crud-tr'>
        <td><input type="text" value={titleValue} onChange={e=>setTitle(e.target.value)}  
                className={editNews ? 'editForm' : "readOnlyForm"} 
                readOnly={!editNews}
                />
        </td>
        <td><input type="text" value={dateValue} onChange={e=>setDate(e.target.value)}  
                className={editNews ? 'editForm' : "readOnlyForm"} 
                readOnly={!editNews}
                />
        </td>
        <td><input type="text" value={descValue} onChange={e=>setDesc(e.target.value)}  
                className={editNews ? 'editForm' : "readOnlyForm"} 
                readOnly={!editNews}
                />
        </td>
        <td className="actions">
                {
                    (editNews) ? <FaSave onClick={() => handleSave()} color='orange' size='20'/> 
                        : <FaEdit onClick={() => setEditNews(true)} color='blue' size='20'/>
                }
                <FaTrashAlt onClick={() => handleDelete(_id)} color='red' />
        </td>
    </tr>
  )
}

export default RowNews