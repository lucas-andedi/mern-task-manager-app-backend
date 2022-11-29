const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000

// Routes
app.get('/')


app.listen(PORT , () => {
    console.log(`Server running at ${PORT}`);
});