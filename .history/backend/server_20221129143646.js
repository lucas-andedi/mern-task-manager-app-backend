const dotenv = require("dotenv").config()
const express = require('express');
const cors = require("cors")

const app = express();
const connectDB = require('./config/connectDB')
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: ["http://localhost:3000", "https://mern-task-app-joel.onrender.com"]
}))
app.use("/api/tasks",taskRoutes)

// const logger = (req,res,next) => {
//     console.log("Middleware run");
//     console.log(req.method);
//     next()
// }

// Routes
app.get('/', (req,res) => {
    res.send("Home page")
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
