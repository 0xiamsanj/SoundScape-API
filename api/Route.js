const router = require("express").Router();
const {getHomePage, songDetails} = require("./Controller")
router.get("/",getHomePage)
router.get("/song",songDetails)

module.exports = router 