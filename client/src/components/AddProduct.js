import React, { useState } from "react";
import Head from "./Head";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  let history = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: Number,
    quantity: Number,
    location: "",
    password: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }

  async function clickHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch("/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      setProduct({
        name: "",
        price: "",
        quantity: "",
        location: "",
        password: "",
      });

      const result = await response.json();

      console.log(result);
      if (result) {
        history("/homepage");
      } else {
        alert("sign up unsuccesful! try again");

        history("/signup");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Head />
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product name
              </label>
              <input
                onChange={changeHandler}
                type="name"
                name="name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Product Price
              </label>
              <input
                onChange={changeHandler}
                type="price"
                name="price"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Product Quantity
              </label>
              <input
                onChange={changeHandler}
                type="quantity"
                name="quantity"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Product Location
              </label>
              <input
                onChange={changeHandler}
                type="location"
                name="location"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Your User Password
              </label>
              <input
                onChange={changeHandler}
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                onChange={changeHandler}
                className="form-check-label"
                htmlFor="exampleCheck1"
              >
                Check out
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={clickHandler}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>
    </div>
  );
}

export default AddProduct;
