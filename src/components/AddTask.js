import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const AddTask = ({ tasklist, setTasklist }) => {

    const [input, setInput] = useState({ id: uuidv4() })

    useEffect (()=>{
        const TaskList = JSON.parse(
            localStorage.getItem('tasks')
        );
        setTasklist(TaskList)
    },[])

    const saveToLocalStorage = (items) => {
        localStorage.setItem('tasks', JSON.stringify(items))
    } 


    const addTask = (e) => {
        e.preventDefault()
        const taskList = [...tasklist, input]
        setTasklist(taskList)
        saveToLocalStorage(taskList)
    }


    return (
        <div>
            <form>
                <input type="text" name='title' placeholder='title...' onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                <input type="text" name='description' placeholder='description' onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
                <button onClick={addTask}> Add Task </button>
            </form>
        </div>
    )
}

export default AddTask