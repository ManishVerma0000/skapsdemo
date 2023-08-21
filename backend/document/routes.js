const express = require("express")
const multer = require("multer")
const router = express.Router()
const screendata = require("../controllers/screendata")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './document')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })



router.post("/data", upload.single("excel"), screendata)
module.exports = router