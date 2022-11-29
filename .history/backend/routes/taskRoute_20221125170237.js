const express = require('express');
const { createTask, getTasks } = require('../controllers/taskController');
const Task = require('../models/taskModel');
const router = express.Router()

// Create a Task
router.post('/api/task', createTask);

// Get/Read tasks
router.get("/api/task", getTasks);

module.exports = router