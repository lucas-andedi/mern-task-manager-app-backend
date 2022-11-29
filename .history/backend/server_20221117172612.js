const dotenv = require("dotenv").config()
const express = require('express');

const app = express();
const connectDB = require('./config/connectDB')
const mongoose = require("mongoose");

// Middleware
const logger = () => {
    console.log();
}
// Routes
app.get('/', (req,res) => {
    res.send("Home page")
})

// Create a Task

app.post('/api/task',logger, async (req, res) => {
    console.log(req.body);
    res.send("Task created")
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
