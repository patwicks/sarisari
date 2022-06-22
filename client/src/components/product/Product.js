import React from "react";
import { useNavigate } from "react-router-dom";
import ProductTable from "./ProductTable";

const Product = () => {
  let navigateTo = useNavigate();
  return (
    <div className="w-full p-2 pt-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-blacky/80">Products</h1>
        <button className="rounded-sm border-none bg-blue-400 px-2 py-1 text-sm text-white outline-none" onClick={() => navigateTo("/products/add")}>
          + Add products
        </button>
      </div>
      <div>
        <p className="mt-2 pb-1 text-[0.8rem] text-blacky/50">
          Search product by name or ID:
        </p>
        <input
          className="w-full rounded-full border border-blacky/15 px-5 py-1 outline-none"
          type="text"
          name="search"
        />
      </div>
      <ProductTable />
    </div>
  );
};

export default Product;
