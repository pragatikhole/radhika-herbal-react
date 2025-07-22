import React from "react";
import OurProducts from "./components/ourproducts"; // Capitalized import
import ProductsGrid from "./components/ProductsGrid";

const App = () => {
  return (
    <div className="p-6">
      
      <div className="bg-gray-50 min-h-screen p-4">
  <div className="max-w-6xl mx-auto">
    <OurProducts />
    <ProductsGrid />
  </div>
</div>

      
    </div>
  );
};

export default App;
