import {createContext} from 'react' //Importacion de atributo de React

export const TaskContext = createContext() //Nombre del contexto general

export const TaskContextProvider = (props) => { // El que englobara todo
    //Renderiza un objeto de jsx
  return (
     <TaskContext.Provider> 
        {props.children}
    </TaskContext.Provider>
  )
}
