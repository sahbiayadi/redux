import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem';
import Addtodo from './Addtodo';

function Todolist() {
    const todos = useSelector(state => state.todo.todolist);
    console.log(todos);
    const [showdone, setshowdone] = useState(false)
  return (
    <div className="todo-list">
      <Addtodo/>
      <button className='btn2' onClick={()=>setshowdone(!showdone)}> {showdone ? "show done": "show undone"}</button>
      {todos.filter((todo)=>todo.isDone === showdone).map((todo)=><Todoitem todo={todo}/>)}
    </div>
  )
}

export default Todolist
