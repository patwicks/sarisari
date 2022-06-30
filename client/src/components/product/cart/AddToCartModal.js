import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import useCartStore from "../../../store/cartStore";

const AddToCartModal = ({ setShowModal, item }) => {
  const { addToCart } = useCartStore((state) => state);
  const [error, setError] = useState(null);
  const [count, setCount] = React.useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity = parseFloat(count);

    if (quantity <= 0) {
      return setError("Invalid quantity input!");
    } else {
      const total = quantity * item.sellPrice;
      addToCart(item, quantity, total);
      setCount(0);
      setShowModal();
    }
  };
  const handleChange = (e) => {
    setCount(e?.target?.value);
  };

  return (
    <main className="absolute left-0 right-0 top-20 z-10 h-[95%] w-full bg-white/10 backdrop-blur-sm">
      <div className="left-0 right-0 w-full flex-col rounded-md bg-primary/50 p-4 text-white">
        <AiFillCloseSquare
          className="float-right cursor-pointer text-xl hover:text-black"
          onClick={setShowModal}
        />
        {error !== null && (
          <p className="rounded-sm bg-red-200 py-2 text-center text-red-600">
            {error}
          </p>
        )}
        <h1 className="mt-2 text-xl font-bold">{item.name}</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="number"
            name="count"
            value={count}
            placeholder="How many?"
            onChange={handleChange}
          />
          <button className="form-btn">Add to Cart</button>
        </form>
      </div>
    </main>
  );
};

export default AddToCartModal;
