
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


mongoose.connect(`mongodb+srv://admin-david:${process.env.DATABASE_PASSWORD}@cluster0.xky7db8.mongodb.net/User`);

const  userSchema = {
    name: String,
    email: String,
    password: String
}

const User =  mongoose.model("User",userSchema);

async function userInsert(collection,doc) {
    try {
      return await collection.insertMany(doc);
      
    } catch (error) {
      console.error(error);
    }
}
async function findUserByEmailAndPassword(collection, email, password) {
    try {
      const user = await collection.findOne({ email, password });
      return user;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
  
 




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
    findUserByEmailAndPassword(User, info.email, info.password).then((result)=>{
        console.log(result);
        if(result){
            res.json(true);
        }else{
            res.json(false);
        }
    });
    
})

app.post("/register",(req,res)=>{
    const info = req.body;
    
    userInsert(User,info);
})