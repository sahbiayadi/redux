import { configureStore } from '@reduxjs/toolkit'
import todoSlice  from './todoslices/Todoslice';

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});