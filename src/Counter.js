import {useState} from 'react';

export default function Counter(){
    const [like,setLike] = useState(0);
    const [dislike,setDislike] = useState(0);
    return(
      <div className='counter-container'>
        <button className='like' onClick={() =>{setLike(like + 1)}}>👍{like}</button>
        <button className='dislike' onClick={() =>{setDislike(dislike + 1)}}>👎{dislike}</button>
        
      </div>
      
    );
}