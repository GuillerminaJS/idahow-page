// React stuff & imports
import React, { useState, useEffect} from 'react'
// ...

// Other imports
import NewsService from '../services/NewsService.js';
import NewsList from './NewsList';
// ...

const NewsDisplay = () => {

    const [news, setNews] = useState([])

    useEffect(()=> {
        NewsService.getNews().then(data => { 
                                            const reversedNews = [...data].reverse(); 
                                            setNews(reversedNews);
                                  });
    },[]);

  return (
    <div className='scrollbar-news'>
        {news.map((e) => <NewsList key={e._id} {...e}/>)}
    </div>
  )
}

export default NewsDisplay