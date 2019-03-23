import React from "react";
import mockData from "../mock-data";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  return (
    <div>
      {mockData.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
