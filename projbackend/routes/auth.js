var express = require('express')
var router = express.Router()
const {signout, signin, signup} = require("../controllers/auth")

router.post("/signup", signup);
router.get("/signout", signout);
router.get("/signin", signin);

module.exports = router;
