import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import Task from "./Task"
import TaskForm from "./TaskForm"



const TaskList = () => {
  const [formData, setFormData] = useState({
    name: "",
    completed: false
  })

  const { name } = formData

  const handleInputChange = (e) => {
    const {name , value} = e.target
    setFormData({ ...formData , [name]: value})
  }

  const createTask = async (e) => {
    e.preventDefault()
    if (name === "") {
      return toast.error("Input field is required")
    }

    try {
      await 
    } catch (error) {
      
    }
  }
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm name={name} handleInputChange={handleInputChange}  createTask={createTask} />
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
