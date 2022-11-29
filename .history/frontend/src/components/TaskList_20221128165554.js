import { useState } from "react"
import Task from "./Task"
import TaskForm from "./TaskForm"


const TaskList = () => {
  const [formData, setFormData] = useState({
    name: "",
    completed: false
  })
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm />
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks : </b> 0
        </p>
        <p>
          <b>Completed Tasks : </b> 0
        </p>
      </div>
      <hr />
      <Task />
    </div>
  )
}

export default TaskList
