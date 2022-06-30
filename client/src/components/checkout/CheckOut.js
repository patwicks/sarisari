import React from "react";
import { useNavigate } from "react-router-dom";
//icons
import { IoChevronBack } from "react-icons/io5";

import ListItem from "./ListItem";

const CheckOut = ({ grandTotal }) => {
  const navigate = useNavigate();
  return (
    <div className="h-full max-h-screen w-full min-w-[288px] p-2">
      <div className="flex items-center">
        <IoChevronBack
          className="cursor-pointer rounded-full p-1 text-3xl font-bold hover:bg-whitey-300"
          onClick={() => navigate("/")}
        />
      </div>
      <div>
        <h1 className="py-5 text-xl uppercase">Items</h1>
      </div>
      <ListItem /> {/* list item on cart */}
      <p className="mt-2 border-t py-5 text-right">
        Total: ₱ <span className="font-bold">{grandTotal}</span>
      </p>
      <div className="w-[19rem]">
        <p className="mb-2 text-sm text-blacky/80">Payment</p>
        <input
          className="w-full rounded-sm border-[0.1rem] px-5 py-2 text-sm outline-none"
          type="number"
          name="pay"
          id="pay"
          placeholder="Enter customer payment"
        />
      </div>
      {/* <p className="my-2  text-sm text-blacky/80">Customer change: 0</p> */}
      {/* button */}
      <div className="mt-5 flex w-full flex-col items-center justify-center">
        <button className=" my-2 w-full rounded-full bg-primary py-2 text-white outline-none transition-all  ease-in-out hover:opacity-80 md:w-[80%]">
          Checkout
        </button>
        <button className=" my-2 w-full rounded-full bg-blacky/40 py-2 text-white outline-none transition-all ease-in-out hover:opacity-80 md:w-[80%]">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
