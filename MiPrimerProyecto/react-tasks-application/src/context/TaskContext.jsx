import {useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks'

import { createContext } from "react"; //Importacion de atributo de React

export const TaskContext = createContext(); //Nombre del contexto general

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([])

  const createTask = (task) =>{
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task=>  task.id !== taskId))
  }

  useEffect(()=>{
    setTasks(data)
  },[])
  // El que englobara todo
  let x = 20;
  //Renderiza un objeto de jsx
  return (
    <TaskContext.Provider value={{
      tasks: tasks,
      deleteTask: deleteTask,
      createTask: createTask
    }}>{props.children}</TaskContext.Provider>
  );
};
