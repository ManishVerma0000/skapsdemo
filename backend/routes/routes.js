const express = require("express")
const multer = require("multer")
const router = express.Router()
const screendata = require("../controllers/screendata")
const uplaodfile = require("../controllers/admincontroller")
const anjani = require("../controllers/anjaniController")
const aanya = require("../controllers/aanyaController")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './document')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })
router.get("/aanya", aanya)
router.get("/anjani", anjani)
router.post("/uplaodfile", upload.single("excel"), uplaodfile)
router.get("/data", screendata)
module.exports = router