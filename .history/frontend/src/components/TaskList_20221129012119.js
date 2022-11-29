import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { URL } from "../App"
import Task from "./Task"
import TaskForm from "./TaskForm"
// http://localhost:5000/api/tasks


const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    completed: false
  })

  const { name } = formData

  const handleInputChange = (e) => {
    const {name , value} = e.target
    setFormData({ ...formData , [name]: value})
  }

  const getTasks = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`${URL}/api/tasks`)
      setIsLoading(false)

      console.log(response);
    } catch (error) {
      toast.error(error.message)
      console.log(error);
      setIsLoading(false)
    }
  }

  const createTask = async (e) => {
    e.preventDefault()
    if (name === "") {
      return toast.error("Input field is required")
    }

    try {
      await axios.post(`${URL}/api/tasks` , formData)
      toast.success("Task added successfully")
      setFormData({ ...formData, name:""})
    } catch (error) {
      toast.error(error.message) 
    }
  }
  useEffect(())
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
