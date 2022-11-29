const mongoose = require("mongoose");


const connectDB = async () => {
    try {

        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDb connect ${connect.connection.host}`);
    }catch(error) {
        console.log(`Connection to the DB failed : ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB