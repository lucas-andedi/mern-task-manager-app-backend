const express = require('express');
const { createTask, readTasks } = require('../controllers/taskController');
const Task = require('../model/taskModel');
const router = express.Router()

// Create a Task
router.post('/api/task', createTask)

// Get/Read tasks
router.get("/api/task", readTasks);

module.exports = router