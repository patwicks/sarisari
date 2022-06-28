import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
// icons
import { FaShoppingCart } from "react-icons/fa";
// local imports
import MainProductList from "./MainProductList";
const Main = ({ debounceChangeHandler }) => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full min-w-[288px] bg-whitey-100 py-2 px-2 pt-5">
      {/* top search input */}
      <div className="relative w-full">
        <p className="mb-4 text-sm">Search by product name:</p>
        <input
          className="w-full rounded-full border bg-transparent px-5 py-2 outline-1 outline-primary/50 focus:shadow-xl"
          type="text"
          name="search"
          id="search"
          onChange={debounceChangeHandler}
        />

        <FaShoppingCart
          className="absolute top-0 right-0 cursor-pointer text-xl text-whitey-300 hover:opacity-75"
          onClick={() => navigate("/checkout")}
        />
        <p className="center absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary text-[0.7rem] font-semibold text-whitey-100">
          0
        </p>
      </div>
      <MainProductList />
    </div>
  );
};

export default memo(Main);
