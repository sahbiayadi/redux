import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, removeTask } from '../redux/todoslices/Todoslice';
import EditTask from './EditTask';

function Todoitem({todo}) {
  const dispatch = useDispatch();
  return (
    <div className={`todo-item ${todo.isDone ?  "done":"undone"}`}>
        <div className="text">
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      </div>
      <span onClick={()=>dispatch(doneTask({id:todo.id }))}>{todo.isDone?"Done":"NotDone"}</span>
      <EditTask id={todo.id}/>


      <button className="btn1" onClick={()=>dispatch(removeTask({id : todo.id}))}>remove</button>
      
    </div>
  )
}

export default Todoitem
