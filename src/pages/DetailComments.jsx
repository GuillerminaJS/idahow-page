import React, { useRef, useEffect, useState, useContext } from 'react'
import { FaPaperPlane } from "react-icons/fa";
import UserContext from '../context/user/UserContext';
import ListDComments from './ListDComments';
import CommentsService from '../services/CommentsService.js'

const DetailComments = () => {

    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const inputDescription = useRef(null);
    


    const handleSubmit = (e) =>{
        e.preventDefault();

        const comment ={
            "comment": inputDescription.current.value,
            "user" : user._id,
        }

        CommentsService.newC(comment).then(data =>{
            document.getElementById('frm-comment').reset();
            setNewComment(comment);
        });
    }

    useEffect(()=> {
        CommentsService.getC().then(data => { 
                                            const reversedComments = [...data].reverse(); 
                                            setComments(reversedComments);
                                });
    },[newComment]);


  return (
    <div className='comments'>
        <section id='commentsList' >
            <h5 className='tituloComentario'>| Sección de comentarios</h5>
            {user.name ?
                <form id="frm-comment" name="frm-comment" className='form-section' onSubmit={e => handleSubmit(e)}>  
                    <section className='firstRow'>

                            {/* <p type="text"  readOnly value={user.name}/> */}
                            <input type="text" maxLength='2000' id="comment-cm" required placeholder='comment' ref={inputDescription} />
                            
                            <button className='publicar'><FaPaperPlane /></button>
                    </section>

                </form>
                :

                ''

                }
            
            <div className='scrollbar'>

                <table>

                    
                    <tbody>
                        {comments.map((e, index) => <ListDComments  key={e._id}
                                                                    index={index + 1}{...e}
                                                                    setMessage={setNewComment}
                        />)}
                    </tbody>
                </table>

            </div>
            
        </section>
        
    </div>
  )
}

export default DetailComments