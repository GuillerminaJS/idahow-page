// React stuff & imports
import React, { useRef, useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
// ...

// Other imports
import NewsService from '../../../services/NewsService.js';
import RowNews from './RowNews';
// ...

const FormNews = () => {

    const [newNews, setNewNews] = useState("")
    const [news, setNews] = useState([]);

    const inputTitle = useRef(null);
    const inputDate = useRef(null);
    const inputDesc = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newObj = {
            "title": inputTitle.current.value,
            "date": inputDate.current.value,
            "desc": inputDesc.current.value,
        }

        NewsService.newNews(newObj).then(data => {
            document.getElementById('frm-news').reset();
            setNewNews(newObj);
        });
        
    }

    const handleDelete = (id) => {
        NewsService.delete(id).then(data => setNewNews(data.message));
    }

    useEffect(() => {
        NewsService.getNews().then(data => setNews(data));
    },[newNews]);

  return (
    <div className='from-container'>
        <form className='crud-frm' id="frm-news" name='frm-news' onSubmit={e => handleSubmit(e)}>
            <h2>News Data</h2>
            <section className='firstRowcrud'>

                <label htmlFor="title-cm">Title</label>
                <input type="text" maxLength='200' id='title-cm' required placeholder='Title' ref={inputTitle}/>

                <label htmlFor="date-cm">Date</label>
                <input type="text" maxLength='20' id='date-cm' required placeholder='Date' ref={inputDate}/>

                <label htmlFor="desc-cm">Desc</label>
                <input type="text" maxLength='2000' id='desc-cm' required placeholder='Desc' ref={inputDesc}/>

            </section>

            <section className='panelButton'>
                <button><FaEdit size='16' /> Post News</button>
            </section>

        </form>

        <div className='list'>

            <section id='newsList'>
                <h2>Lista de noticias :</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Desc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.map((e, index) => <RowNews key={e._id} 
                                                            index={index + 1} {...e}
                                                            handleDelete={handleDelete}
                                                            setNewNews={setNewNews}
                        />)}
                    </tbody>
                </table>

            </section>

        </div>
    </div>
  )
}

export default FormNews