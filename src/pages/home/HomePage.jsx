// React stuff & imports
import React, {useContext} from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
// ...

// other imports
import './homePage.css';
import NewsDisplay from '../NewsDisplay';
import ServerCount from './ServerCount.jsx';
import DetailComments from '../DetailComments';
// ...

const HomePage = () => {
  
  return (

    <main className='hp'>


        {/* Home opage banner */}
          <div className='hp-banner'>
            <div class="content">
              <h2 class="text_shadows">Welcome!!! <br /> <p className='text_shadows'>bot community manager IDAHOW</p> </h2>
            </div>
          </div>
        {/* ... */}

        {/* Description & info */}
          <div className='home-info'>
            <section className='hp-desc-side1'>
              <p className='info-1'> - Bienvenido a la pagina de IDAHOW, el bot de gestion de comunidad de servidores de discord 
               que esperabas! En esta pagina web proporcionamos toda informacion que sea necesaria para el 
               usuario, guia de comandos del bot, otras funciones y extras... 
              </p>

              <p className='info-1'> - Les recordamos que esta es una version inicial beta y puede compartir su experiencia 
               creandose una cuenta de usuario en esta pagina para poder comentar en la seccion de comentarios al final de la pagina. </p>
            </section>
            <section className='hp-desc-side2'>
              <h2>Noticias y actualizaciones</h2>
              <NewsDisplay/>

            </section>
          </div>
        {/* ... */}
  
        {/* image gallery */}
          

            <div className='example-section'>

              <h1>- Que te ofrece IDAHOW? -</h1>

              <article className='example-art ex1'>
                <img src='https://idahow-express-production.up.railway.app/api/images/Screenshot_46.png' alt="" />
                <div>
                  <h2>Sistema de mensajes de bienvenida: </h2>
                  <p>IDAHOW tiene un sistema de mensajes de bienvenida estatico que busca un canal del servidor en el que este que se llame "bienvenida" para mandar los mensajes de bienvenida.</p>
                </div>
              </article>

              <article className='example-art ex2'>
                <div>
                  <h2>Sistema de nivel único por servidor: </h2>
                  <p>Proporcionamos ademas con un sistema de nivelacion de servidor, donde crearemos perfiles unicos de usuario que iran acumulando experiencia y nivel a medida de que el usuario vaya hablando en ese servidor, este nivel sera unico por serivor y luego usted podrá ver su propio perfil de servidor con la experiencia que tenga y una tabla de ranking. </p>
                </div>
                <img src='https://idahow-express-production.up.railway.app/api/images/Screenshot_47.png' alt="" />
              </article>

              <article className='example-art ex3'>
                
                <div className='autorole1'>
                  <section className='hp-img-gallery-section'>
                    <img src='https://idahow-express-production.up.railway.app/api/images/Screenshot_48.png' alt='' />
                    <img src='https://idahow-express-production.up.railway.app/api/images/Screenshot_49.png' alt='' />
                  </section>
                </div>

                <div className='autorole2'>
                  <h2>Sistema de autorol con asignacion de roles automatica:</h2>
                  <p>Hasta proporcionamos un sistema de auto asignacion de roles donde el usuario podra asignarse o quitarse automaticamente los roles que esten asignados en la tabla de roles!</p>
                </div>

                
                
              </article>

              <article>
                  <h4> Y mucho mas! <br/> vaya a la seccion de guia de comandos para una informacion mas detallada de los comandos existentes. </h4>
                </article>
              
            </div>
            
        {/* ... */}

        {/* End page */}
          <div>
            <section className='server-count'>
              <ServerCount/>
            </section>

            <div className='end-page'>
              <article className='comment-section'>
                <DetailComments/>
              </article>

              <article className='sponsor'>
                <h2>Te gustaria ser parte del grupo de tester de IDAHOW?</h2>
                <p>Unase a nuestro servidor publico para pruebas ! </p>

                  <div className='sitioBtn'>
                  <a className='invServer' href="https://discord.gg/NMSR7QVJMf">Discord server<FaExternalLinkAlt/> </a>
                  </div>
                  
              </article>
            </div>
            
          </div>
        {/* ... */}

        <ul className='circles-home'>
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

      {/* </div> */}
        
    </main>

  )
}

export default HomePage