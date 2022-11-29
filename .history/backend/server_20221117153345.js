const express = require('express');

const app = express();
const connectDB = require('./config/connectDB')


connectDB()
// Routes
app.get('/', (req,res) => {
    res.send("Home page")
})


app.listen(PORT , () => {
    console.log(`Server running at ${PORT}`);
});

// mongodb+srv://joel1234:<password>@joelcluster.ukl1fnk.mongodb.net/?retryWrites=true&w=majority