const express = require('express');

const app = express();
const connectDB = require('./con')

const PORT = process.env.PORT || 5000

// Routes
app.get('/', (req,res) => {
    res.send("Home page")
})


app.listen(PORT , () => {
    console.log(`Server running at ${PORT}`);
});

// mongodb+srv://joel1234:<password>@joelcluster.ukl1fnk.mongodb.net/?retryWrites=true&w=majority