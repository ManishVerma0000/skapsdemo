const uplaodfile = async (req, res) => {
    try {
        console.log(req.file)
        res.status(200).send({ message: "file is uploaded successfully" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

module.exports = uplaodfile