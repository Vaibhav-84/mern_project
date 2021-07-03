const express = require("express");

const app = express();

const port = 8000;
app.get('/', (req, res)=> {
    return res.send("Home page");
})
app.get('/login', (req, res)=> {
    return res.send("login rout");
})
app.get('/signup', (req, res)=> {
    return res.send("SignUp rout");
})

app.listen(port, ()=>{
    console.log("server is running..");
})
