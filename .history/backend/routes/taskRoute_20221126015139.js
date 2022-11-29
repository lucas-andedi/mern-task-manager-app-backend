const express = require('express');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController');
const Task = require('../models/taskModel');
const router = express.Router()

router.route("/").get(getTasks)
// Create a Task
router.post('/', createTask);



// Get/Read A single task
router.get("/:id", getTask);

// Get/deletea task
router.delete("/:id", deleteTask);

// Get/deletea task
router.put("/:id", updateTask);


module.exports = router