const express = require('express');
const { createTask, getTasks, getTask, deleteTask } = require('../controllers/taskController');
const Task = require('../models/taskModel');
const router = express.Router()

// Create a Task
router.post('/api/task', createTask);

// Get/Read tasks
router.get("/api/task", getTasks);

// Get/Read A single task
router.get("/api/task/:id", getTask);

// Get/deletea task
router.delete("/api/task/:id", deleteTask);


module.exports = router