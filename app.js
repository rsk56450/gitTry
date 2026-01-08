const express = require("express");

const app = express();
const portNumber = 3000;

app.get("/users/:id/:name", (req, res) => {
    console.log(req.query)
    console.log(req.params)
    res.send("users get")
})

// app.post("/hello",(req, res)=>{
//     res.send("hello world post")
// })

app.get("/",(req, res)=>{
    res.send("///// get")
})



app.listen(portNumber,()=>{
    console.log(`server is running on port ${portNumber}`)
});