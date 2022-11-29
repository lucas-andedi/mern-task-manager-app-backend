const mongoose = require("mongoose");


const connectDB = async () => {
    try {

        const connect = await mongoose.connect()
    }catch(error) {

    }
}

module.exports = connectDB