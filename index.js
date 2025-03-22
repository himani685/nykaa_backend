const cookieParser = require("cookie-parser")
const express = require("express")
const cors = require("cors")
const{PORT} = require("./src/config/config")
const{connectToDb} = require("./src/config/database")
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
    connectToDb()
})
