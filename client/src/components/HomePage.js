import React, { useState, useEffect } from "react";
import Card from "./Card";
import Head from "./Head";
import Button from "./Button";
import axios from "axios";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to fetch the collection data
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGF2IiwiaWF0IjoxNjk0NDQ5MTA0fQ.s1O7biydlYn7hs3EQVEkOhRFGOxxXAkjjr_gUFNd_ZY"; 

  // Define the headers
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };


    axios
      .get("/api/products",{ headers })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 

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
