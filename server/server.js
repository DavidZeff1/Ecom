
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.listen(5000,()=>{
    console.log("server started on port 5000");
})

app.post("/sendLogin",(req,res)=>{
    const info = req.body;
    console.log(info);
})