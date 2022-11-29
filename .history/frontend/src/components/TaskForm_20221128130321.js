

const TaskForm = () => {
  return (
    <form action="" className="task-form">
        <input type="text" placeholder="Add a Task" name="name" value={name} onChange />

    </form>
  )
}

export default TaskForm