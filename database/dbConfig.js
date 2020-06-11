const mongoose = require("mongoose")

const connOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/API_TEST"

const connectToDB = () => {
    try {
        const connect = mongoose.connect(MONGO_URI, connOptions)
        if (connect) console.log("Database connected")

    } catch (err) {
        console.log(`Database error ${err}`)
    }
}

module.exports = connectToDB