import {useState, useEffect} from 'react'
const TaskForm = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        props.createTask({
            title,description
        })
        // e.target.reset();
        setTitle('')
        setDescription('')
    }
    return (
   <form onSubmit={handleSubmit}>
    <input placeholder="Escribe tu tarea" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus/>
    <textarea placeholder="Escribe una descripcion de la tarea" onChange={(e => setDescription(e.target.value))} value={description} ></textarea>
    <button>Guardar</button>
   </form>
  );
}

export default TaskForm