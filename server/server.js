const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Schema = mongoose.Schema;

mongoose.connect(
  `mongodb+srv://admin-david:${process.env.DATABASE_PASSWORD}@cluster0.xky7db8.mongodb.net/User`
);
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  quantity: String,
  location: String,
  password: String,
  ownerId: String,
});

const Product = mongoose.model("Product", productSchema);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  products: [], // Reference to Product model
});

const User = mongoose.model("User", userSchema);

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

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("server started on port 5000");
});

app.post("/sendLogin", (req, res) => {
  const info = req.body;
  findUserByEmailAndPassword(User, info.email, info.password).then((result) => {
    if (result) {
      res.json(true);
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

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
