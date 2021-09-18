import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/">
            <li style={{ listStyle: "none" }}>Home</li>
          </Link>
          <Link to="/product">
            <li style={{ listStyle: "none" }}>Product</li>
          </Link>
          <Link to="/login">
            <li style={{ listStyle: "none" }}>Login</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
