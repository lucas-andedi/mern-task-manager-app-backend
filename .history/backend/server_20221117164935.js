const dotenv = require("dotenv").config()
const express = require('express');

const app = express();
const connectDB = require('./config/connectDB')
const mongoose = require("mongoose");


// Routes
app.get('/', (req,res) => {
    res.send("Home page")
})



const PORT = process.env.PORT || 5000

mongoose.connect(p
const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT , () => {
            console.log(`Server running at ${PORT}`);
        });
    } catch (error) {
        console.log(`Failed to start server: ${error}`);
    }
}

startServer()