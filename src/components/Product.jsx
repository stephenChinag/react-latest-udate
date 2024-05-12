import React, { useEffect, useState } from "react";

import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
function Product() {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addTocart = (product) => {
    dispatch(add(product));
  };

  console.log(status);

  if (status === "loading") {
    return <p> Loading</p>;
  }
  if (status === "error") {
    return <p> Something went wrong</p>;
  }
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="card-container">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.image} alt="" className="card-image" />
            <div className="card-content">
              <h2 className="card-title"> {p.title}</h2>
              <p className="card-price"> Niara :{p.price}</p>
            </div>

            <button
              className="button"
              onClick={() => {
                addTocart(p);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
