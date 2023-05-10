import React from 'react'
import AddingTask from '../AddingTask/AddingTask'
import TasksList from '../TasksList/TasksList'
import { useState } from 'react'
export default function Todo() {
    
  const [todos,setTodos]= useState([]);
  return (
    
    <div>
        <AddingTask todos={todos} setTodos={setTodos}/>
        <TasksList/>
    </div>
  )
}
