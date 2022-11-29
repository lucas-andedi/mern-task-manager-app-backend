const Task = require("../models/taskModel");
// Create a new Task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
// Get all tasks
const getTasks = async (req,res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
// Get a single task
const getTask = async (req,res) => {
    try {
    const { id } = req.params
    const task = await 
    } catch (error) {
        
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
}