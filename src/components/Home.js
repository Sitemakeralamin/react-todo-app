import React, { useState } from 'react'
import Todos from './Todos';
import { v4 as uuidv4 } from "uuid";

import style from './home.module.css'
import NewTodo from './NewTodo';
import styles from './todo.module.css'





const Home = () => {

  const [todos,setTodo] = useState([]);
  const OnAddtoDo = (todo) =>{
    setTodo((previousTodos) =>{
      return [...previousTodos,{id: uuidv4(),todo }];
    });
  
  }

  const onRemoveData = (id) =>{
   setTodo((previousTodos) => {
    const filtertodos = previousTodos.filter((todo)=> todo.id !== id);
    return filtertodos;
   })
  }

  return (
    <div className={style.container}>
      <h1 style={{color:"white"}}>Todo App</h1>
      <NewTodo onAddTodo ={OnAddtoDo}/>
    <Todos todos ={todos} onRemoveData ={onRemoveData}/>
    <button
        className={styles.btn}
        onClick={() => {
          setTodo([]);
        }}
      >
        Clear All todos
      </button>
    </div>
  )
}

export default Home
