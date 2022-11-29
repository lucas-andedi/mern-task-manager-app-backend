import TaskForm from "./TaskForm"


const TaskList = () => {
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm />
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks : </b>
        </p>
      </div>
    </div>
  )
}

export default TaskList
