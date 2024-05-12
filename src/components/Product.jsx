import React, { useEffect, useState } from "react";

import "./product.scss";
function Product() {
  const [products, setProdducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProdducts(result));
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="card-container">
        {products.map((p) => (
          <div className="card">
            <img src={p.image} alt="" className="card-image" />
            <div className="card-content">
              <h2 className="card-title"> {p.title}</h2>
              <p className="card-price">{p.price}</p>
            </div>

            <button className="button">checkout</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
