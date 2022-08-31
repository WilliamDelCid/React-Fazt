import {useState, useEffect} from 'react'
const TaskForm = (props) => {

    const [title, setTitle] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        props.createTask(title)
    }
    return (
   <form onSubmit={handleSubmit}>
    <input placeholder="Escribe tu tarea" onChange={(e) => setTitle(e.target.value)}/>
    <button>Guardar</button>
   </form>
  );
}

export default TaskForm