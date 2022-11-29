const mongoose = require("mongoose");


const connectDB = async () => {
    try {

        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log()
    }catch(error) {

    }
}

module.exports = connectDB