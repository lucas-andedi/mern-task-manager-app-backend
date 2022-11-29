

const TaskForm = ({ createTask , name,handleInputChange,isEditing , updateTask} ) => {
  return (
    <form action="" className="task-form" onSubmit={isEditing ? u}>
        <input type="text" placeholder="Add a Task" name="name" value={name} onChange={handleInputChange} />
        <button type="submit">{isEditing ? "Edit" : "Add"}</button>
    </form>
  )
}

export default TaskForm