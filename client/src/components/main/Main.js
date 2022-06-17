import React, { memo } from "react";
// local imports
import ProductSearched from "./ProductSearched";

const Main = () => {
  console.log("Main Menu");
  return (
    <div className="h-full w-full py-2 px-2 pt-5">
      {/* top search input */}
      <div className="w-full">
        <p className="mb-4 text-sm">Search by product name:</p>
        <input
          className="w-full rounded-full border bg-transparent px-5 py-2 outline-1 outline-primary/50 focus:shadow-xl"
          type="text"
          name="search"
          id="search"
        />
      </div>
      <ProductSearched />
    </div>
  );
};

export default memo(Main);
