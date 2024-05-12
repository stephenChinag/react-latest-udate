import "./navbar.scss";

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  // Ensure type safety

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
          <span> my Bag</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
