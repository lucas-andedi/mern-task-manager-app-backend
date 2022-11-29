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

mongoose
    .connect(proces.env.MONGO_URI)
    .then(() => {
        
    })


const startServer = async () => {
    try {
        await connectDB()
        
    } catch (error) {
        console.log(`Failed to start server: ${error}`);
    }
}

startServer()