
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 todolist: [
    {
        id:Math.random(),
        title:"to do item1 ",
        description:"description to do item 1",
        isDone:false,
    },
    {
        id:Math.random(),
        title:"to do item 2",
        description:"description to do item 2",
        isDone:false,
    },
    {
        id:Math.random(),
        title:"to do item 3 ",
        description:"description to do item 3",
        isDone:true,
    }
 ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
     state.todolist.push(action.payload);
    },
    removeTask: (state, action) => {
      state.todolist=state.todolist.filter((el)=>el.id !== action.payload.id);
     },
     doneTask:(state,action)=> { 
      let i =state.todolist.findIndex((el)=>el.id === action.payload.id);
      state.todolist[i]={...state.todolist[i],isDone:!state.todolist[i].isDone}
     },
   updateTask:(state,action)=> { 
      let i =state.todolist.findIndex((el)=>el.id === action.payload.id);
      
      state.todolist[i]={...state.todolist[i],
       title:action.payload.edited.title,
        description:action.payload.edited.description,
     };
  },
},
})

// Action creators are generated for each case reducer function
export const {addTask,removeTask,doneTask,updateTask} = todoSlice.actions

export default todoSlice.reducer