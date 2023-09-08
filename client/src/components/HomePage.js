import React, { useState, useEffect } from "react";
import Card from "./Card";
import Head from "./Head";
import Button from "./Button";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch the collection data
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(products);

  return (
    <div>
      <Head />
      <Button />
      {products.map((product, i) => {
        return (
          <Card
            key={i}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            location={product.location}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
