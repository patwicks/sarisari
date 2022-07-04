import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//icons
import { IoChevronBack } from "react-icons/io5";

import ListItem from "./ListItem";
// store
import useCartStore from "../../store/cartStore";
import useUserStore from "../../store/userStore";
const CheckOut = ({ grandTotal }) => {
  const navigate = useNavigate();
  const { cart, checkout, serverError, serverSuccess } = useCartStore(
    (state) => ({
      cart: state.cart,
      checkout: state.checkout,
      serverError: state.serverError,
      serverSuccess: state.serverSuccess,
    })
  );
  const user = useUserStore((state) => state.user);
  const [payment, setPayment] = useState(0);
  const [error, setError] = useState("");
  const inputRef = useRef();

  const { _id: userID } = user;

  const data = {
    cart,
    grandTotal,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (payment < grandTotal) {
      setError(`Payment should be greater than or equal to ${grandTotal}!`);
    }
    if (grandTotal <= 0) {
      setError(`Cart dont have an item!`);
    } else {
      setError("");
      setPayment(0);
      checkout(userID, data);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
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
      {serverError !== "" && (
        <p className="w-full rounded-sm bg-primary/20 py-2 text-center text-sm text-primary/80 ">
          {serverError}
        </p>
      )}
      {serverSuccess !== "" && (
        <p className="w-full rounded-sm bg-green-200 py-2 text-center text-sm text-green-500 ">
          {serverSuccess}
        </p>
      )}
      <ListItem /> {/* list item on cart */}
      <p className="mt-2 border-t py-5 text-right">
        Total: ₱ <span className="font-bold">{grandTotal}</span>
      </p>
      <div className="w-full md:w-[19rem]">
        <p className="mb-2 text-sm text-blacky/80">Payment</p>
        <input
          className="w-full rounded-sm border-[0.1rem] px-5 py-2 text-sm outline-none"
          type="number"
          name="payment"
          id="payment"
          ref={inputRef}
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          placeholder="Enter customer payment"
        />
        {/* error */}
        {error && (
          <p className="w-full rounded-sm bg-primary/20 py-2 text-center text-sm text-primary/80 ">
            {error}
          </p>
        )}
      </div>
      {payment >= grandTotal ? (
        <p className="mt-5">
          Customer change: <strong>₱ {payment - grandTotal}</strong>
        </p>
      ) : null}
      {/* button */}
      <div className="mt-5 flex w-full flex-col items-center justify-center">
        <button
          className=" my-2 w-full rounded-full bg-primary py-2 text-white outline-none transition-all  ease-in-out hover:opacity-80 md:w-[80%]"
          disabled={payment < grandTotal ? true : false}
          onClick={handleSubmit}
        >
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
