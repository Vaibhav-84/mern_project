var express = require('express')
var router = express.Router()
const { check } = require('express-validator');
const {signout, signin, signup} = require("../controllers/auth")

router.post("/signup",[
    check("name","name should be at least 3 char").isLength({ min: 5 }),
    check("email","email is required").isEmail(),
    check("password","password should be at least 3 char").isLength({ min: 5 }),
], signup);
router.get("/signout", signout);
router.get("/signin", signin);

module.exports = router;
