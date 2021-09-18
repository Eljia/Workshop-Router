import React from "react";
import ProductDetails from "./ProductDetails";

const ProductList = ({ list }) => {
  return (
    <div>
      <h1>Shoping card</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {list.map((el) => (
          <ProductDetails el={el} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
