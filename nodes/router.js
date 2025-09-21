const express = require("express");

const sqlDbconnect = require("./dbconnect");

const Router = express.Router();

Router.get("/",(req, res)=>{
    const userData = [{name:"John USA", email:"ahdha@gmail.com", age:34}];
    res.send(userData);
});

Router.get("/api/user", ()=>{
    sqlDbconnect.query("select * from tbl_user", (err, rows)=>{
        
    });
})

module.exports = Router;