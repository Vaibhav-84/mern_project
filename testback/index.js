const express = require("express");

const app = express();

const port = 8000;


app.get("/", (req, res)=> {
    return res.send("Home page");
})

const admin = (req, res)=>{
    return res.send("Admin page");
}

const isAdmin = (req, res, next)=>{
    console.log("isAdmin is running")
    next();
};
const isloggedIn = (req, res, next)=>{
    console.log("Is looged in");
    next();
}
app.get('/admin', isloggedIn ,isAdmin , admin) 

app.get('/login', (req, res)=> {
    return res.send("login rout");
})
app.get('/signup', (req, res)=> {
    return res.send("SignUp rout");
})

app.listen(port, ()=>{
    console.log("server is running..");
})
