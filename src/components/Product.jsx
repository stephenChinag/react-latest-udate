import React, { useEffect, useState } from "react";

import "./product.scss";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
function Product() {
  const dispatch = useDispatch();
  const [products, setProdducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProdducts(result));
  }, []);

  const addTocart = (product) => {
    dispatch(add(product));
  };

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
