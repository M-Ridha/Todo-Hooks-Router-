import React from 'react'
import {Link} from 'react-router-dom'

const TaskList = ({tasklist , setTasklist}) => {



    const saveToLocalStorage = (items) => {
        localStorage.setItem('tasks', JSON.stringify(items))
      }



    const deleteTask = (task) => {
        const newTaskList = tasklist.filter(el => el.id !== task.id)
        setTasklist(newTaskList)
        saveToLocalStorage(newTaskList)
    }



    return (
        <div>
            {
                tasklist.map((task,i)=> 
                    <div key={i}>
                        <hr></hr>
                        <button onClick={()=>deleteTask(task)}> DELETE </button>
                        <h2> <Link to={`/description/${task.id}`}  > {task.title} </Link>  </h2>
                        <hr></hr>
                    </div>
                )
            }
        </div>
    )
}

export default TaskList