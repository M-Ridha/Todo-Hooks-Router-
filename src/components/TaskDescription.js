import React from 'react'
import { useParams , Link } from 'react-router-dom'

const TaskDescription = ({tasklist}) => {

    const params = useParams()

    const descrip = tasklist.find((el)=> el.id ===params.taskID)


    return (
        <div>
            <button> <Link to={'/'} > back to Home </Link>  </button> 
            {descrip.description}
        </div>
    )
}

export default TaskDescription