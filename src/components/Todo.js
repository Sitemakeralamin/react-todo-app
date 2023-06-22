import React from 'react'


import style from './todo.module.css';

const Todo = (props) => {
    
    const {title,desc} =props.todo;
    const {id} = props;
   const tododelete = (id) =>{
    props.onRemoveData(id);
   }
  return (

    
      <article className={style.todo}>
        <div >      
        <h3>{title}</h3>
        <p>{desc}</p>     
      </div>
      <div>
      <a href='#' className={style.btn} onClick={()=>{tododelete(id)}}><i className='fa fa-trash fa-2x '></i></a>
      </div>
    </article>

  
  )
}

export default Todo
