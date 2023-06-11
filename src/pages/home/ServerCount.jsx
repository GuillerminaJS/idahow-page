import React, {useState, useEffect} from 'react'
// const {Client} = require('discord.js');


const ServerCount = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch(`https://idahow-express-production.up.railway.app/api/server-count`)
        .then((response) => response.json())
        .then((data) => {
            setCount(data.serverCount)
        });
      }, []);
    

  return (
    <div>
        <p>IDAHOW bot es confiado actualmente por {count} servidores!</p>
    </div>
  )
}

export default ServerCount