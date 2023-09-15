const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function authenticateToken(req,res,next){
  
  const authHeader = req.headers['authorization'];
  const token =authHeader && authHeader.split(' ')[1]
  if(!token){
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user) => {
    if(err){return res.sendStatus(403)}
  req.user = user;
  next();
    
  })
}
mongoose.connect(
  `mongodb+srv://admin-david:${process.env.DATABASE_PASSWORD}@cluster0.xky7db8.mongodb.net/User`
);
const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    price: String,
    quantity: String,
    location: String,
    password: String,
    ownerId: String,
  })
);
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    products: [], // Reference to Product model
  })
);

async function userInsert(collection, doc) {
  try {
    const result = await collection.insertMany(doc);
    return result;
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

async function findUserByPassword(collection, password) {
  try {
    const user = await collection.findOne({ password });
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

app.listen(5000, () => {
  console.log("server started on port 5000");
});

app.post("/sendLogin", (req, res) => {
  const info = req.body;

  findUserByEmailAndPassword(User, info.email, info.password).then((result) => {
    if (result) {
      const username = result.name;

      const user = { name: username };

      const accessToken = generateAccessToken(user);
      //res.json({accessToken: accessToken })
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
      res.json({
        "ok":true,
        "accessToken":accessToken,
        "refreshToken":refreshToken
      });
    } else {
      res.json(false);
    }
  });
});

app.post("/register", (req, res) => {
  const info = req.body;
  userInsert(User, info);
  res.json(true);
});

app.post("/addProduct", (req, res) => {
  const info = req.body;
  // console.log(info);
  findUserByPassword(User, info.password).then((result) => {
    //console.log(result);
    if (result) {
      userInsert(Product, { ...info, ownerId: result._id }).then((result2) => {
        console.log(result2._id);
        result.products.push({ ...info, productId: result2[0]._id });
        result.save();
      });

      res.json(true);
    } else {
      res.json(false);
    }
  });
});

app.get("/api/products",authenticateToken, async (req, res) => {
  
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

function generateAccessToken(user){
  return accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{
    expiresIn: '20s'
  });
}
