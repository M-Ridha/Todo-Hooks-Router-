import { useState } from 'react'
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route } from 'react-router-dom'
import TaskDescription from './components/TaskDescription';

function App() {
  const [tasklist, setTasklist] = useState([
    {
      id: uuidv4(),
      title: "task 01",
      description: "description task 01"
    },
    {
      id: uuidv4(),
      title: "task 02",
      description: "description task 02"
    },
    {
      id: uuidv4(),
      title: "task 03",
      description: "description task 03"
    }
  ])




  return (
    <div className="App">
      <header className="App-header">
        <Routes>

          <Route
            path='/'
            element={
              <>
                <AddTask tasklist={tasklist} setTasklist={setTasklist} />
                <TaskList tasklist={tasklist} setTasklist={setTasklist} />
              </>
            }
          />

          <Route path='/description/:taskID' element={<TaskDescription tasklist={tasklist}/>} />
        </Routes>



      </header>
    </div>
  );
}

export default App;
