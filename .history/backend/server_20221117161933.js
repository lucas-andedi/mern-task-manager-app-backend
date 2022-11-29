const dotenv = require("dotenv").config()
const express = require('express');

const app = express();
const connectDB = require('./config/connectDB')


// Routes
app.get('/', (req,res) => {
    res.send("Home page")
})

connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT , () => {
    console.log(`Server running at ${PORT}`);
});

