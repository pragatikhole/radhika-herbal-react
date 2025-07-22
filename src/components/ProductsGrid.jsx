import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductCard key={index} selected={index === 2} />
      ))}
    </div>
  );
};

export default ProductsGrid;
