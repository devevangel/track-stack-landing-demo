import React from "react";

const Products = () => {
  return (
    <section className="mt-20 w-full h-80">
      <div className="w-full h-full pl-20 pr-20 flex flex-col items-center">
        <div className="font-russo text-4xl">Our Products</div>
        <div className="font-work text-sm">
          Marketplace, T-port, Track Booth, Track Yard and Galley- all in one
          place
        </div>
        <div className="h-60 w-60 mt-5 shadow-md rounded flex items-center justify-center">
          Product 1
        </div>
      </div>
    </section>
  );
};

export default Products;
