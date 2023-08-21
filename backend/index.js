const express = require("express")
const multer = require("multer")
const cors = require("cors")

const router = require("./routes/routes")

const app = express()
const PORT = 5001


app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`server is listen on the port on ${PORT}`)
})