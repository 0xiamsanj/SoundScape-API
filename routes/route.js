const router = require("express").Router();
const {getHomePage, songDetails} = require("../controllers/Controller")
router.get("/",getHomePage)
router.get("/song",songDetails)

module.exports = router 