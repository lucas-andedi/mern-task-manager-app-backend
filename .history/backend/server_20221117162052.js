const dotenv = require("dotenv").config()
const express = require('express');

const app = express();
const connectDB = require('./config/connectDB')


// Routes
app.get('/', (req,res) => {
    res.send("Home page")
})



const PORT = process.env.PORT || 5000
app.listen(PORT , () => {
    console.log(`Server running at ${PORT}`);
});

const startServer = async () => {
    try {
        await connectDB()
    } catch (error) {
        
    }
}