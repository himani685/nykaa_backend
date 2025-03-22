const mongoose = require("mongoose")
const {DB_URI} = require("./config")
const connectToDb = async() => {
        try {
            await mongoose.connect(DB_URI)
            console.log("database connected")
        } catch (error) {
            console.log(error)
        }
}
module.exports = {connectToDb}