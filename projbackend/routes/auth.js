var express = require('express')
var router = express.Router()
const { check } = require('express-validator');
const {signout, signin, signup, isSignedIn} = require("../controllers/auth")

router.post("/signup",[
    check("name","name should be at least 3 char").isLength({ min: 5 }),
    check("email","email is required").isEmail(),
    check("password","password should be at least 3 char").isLength({ min: 5 }),
], signup);

router.post("/signin",[
    check("email","email is required").isEmail(),
    check("password","password is required").isLength({ min: 5 }),
], signin);


router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res)=>{
    res.json(req.auth);
});

module.exports = router;
 