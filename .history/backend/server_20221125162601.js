const dotenv = require("dotenv").config()
const express = require('express');

const app = express();
const connectDB = require('./config/connectDB')
const mongoose = require("mongoose");
const Task = require("./model/taskModel");


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// const logger = (req,res,next) => {
//     console.log("Middleware run");
//     console.log(req.method);
//     next()
// }

// Routes
app.get('/', (req,res) => {
    res.send("Home page")
})

// Create a Task

app.post('/api/task', async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})

// Get/Read a Data
app.get("/api/tasks", async (req,res) => {
    try {
        const tasks = await Task.find()
        res.status
    } catch (error) {
        
    }
})


const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT , () => {
            console.log(`Server running at ${PORT}`);
        });
    })
    .catch((error) => console.log(error))
