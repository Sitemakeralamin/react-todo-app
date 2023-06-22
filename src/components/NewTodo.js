import React, { useState } from 'react'

import style1 from './newtodo.module.css'


const NewTodo = (props) => {
  const [newTodo,setTodo] = useState({ title: "", desc: "" });
  const{title,desc} = newTodo;
  const handlechange = (event) =>{
  const name = event.target.name;
  setTodo((oldTodo) =>{
    return {...newTodo,[name]:event.target.value}
  }) 

  }
  const submitFrom =(event)=>{
    event.preventDefault();
    props.onAddTodo(newTodo);
    setTodo({title: "",desc : ""});
  }

  return (
    <form className={style1.form} onSubmit={submitFrom}>
        <div className={style1["form-field"]}>
            <label htmlFor='title'> Title : </label>
            <input type='text' name='title' value={title} id='title' placeholder='Enter Title Here' style={{color:'black'}}  onChange={handlechange}/>
        </div>
        <div className={style1["form-field"]}>
            <label htmlFor='desc'> Desc : </label>
            <textarea type='text'  name='desc' value={desc} id='desc' placeholder='Enter desc Here'  style={{color:'black'}} onChange={handlechange}/>
        </div>
        <button type='submit' > Add Todo</button>
    </form>
  )
}

export default NewTodo
