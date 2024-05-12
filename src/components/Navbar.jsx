import "./navbar.scss";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <nav>
      <div className="left">
        <Link to="/product" className="logo">
          <span>Products</span>
        </Link>
        <Link to="/">Products</Link>
      </div>

      <div className="right">
        <Link to="/cart">
          <span> my Bag {cartProducts.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
