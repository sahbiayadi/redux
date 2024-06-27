import React, { useState } from 'react'
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/todoslices/Todoslice';

function Addtodo() {

  const dispatch=useDispatch();
  const [task, setTask] = useState({
    
    id:Math.random(),
    title:"",
    descirption:"",
    isDone:false,
  });
  return (
    <div className="add-task">
      <input type='text' placeholder='Enter a task title' onChange={(e)=>{setTask({...task,title:e.target.value})}}/>
      <input type='text' placeholder='Enter a task description'   onChange={(e)=>{setTask({...task,description:e.target.value})}}/>
      <button onClick={()=>dispatch(addTask(task))}>
        Add a new task
        </button>
    </div>
  )
}

export default Addtodo
