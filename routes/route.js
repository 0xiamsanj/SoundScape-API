const router = require("express").Router();
const {getHomePage} = require("../controllers/home_page_controller")
router.get("/",getHomePage)

module.exports = router 