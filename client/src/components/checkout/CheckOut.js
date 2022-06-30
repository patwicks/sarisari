import React from "react";
import { useNavigate } from "react-router-dom";
//icons
import { IoChevronBack } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const CheckOut = (props) => {
  const { cartItem, removeToCart, decreaseQuantity, increaseQuantity } = props;
  const navigate = useNavigate();
  return (
    <div className="h-full max-h-screen w-full overflow-scroll p-2">
      <div className="flex items-center">
        <IoChevronBack
          className="cursor-pointer rounded-full p-1 text-3xl font-bold hover:bg-whitey-300"
          onClick={() => navigate("/")}
        />
      </div>
      <div>
        <h1 className="py-5 text-xl uppercase">Items</h1>
      </div>
      <table className="w-full">
        <thead>
          <tr className="fint-semibold text-left text-sm text-blacky/70">
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItem?.map((product, index) => {
            const { name, sellPrice, image, _id: itemID } = product.item;
            return (
              <tr key={index}>
                <td>
                  <div className="h-8 w-8 overflow-hidden rounded-full border">
                    <img
                      className="h-full w-full object-center"
                      src={image[0].url}
                      alt="product"
                    />
                  </div>
                </td>
                <td className="text-sm">{name}</td>
                <td className="text-sm">₱ {sellPrice}</td>
                <td className="text-sm">{product.quantity}</td>
                <td className="text-sm font-semibold">{product.total}</td>
                <td>
                  <div className="flex gap-x-1">
                    <button
                      className="h-7 w-7 rounded-sm bg-blacky/70 text-xl text-white outline-none"
                      onClick={() => decreaseQuantity(itemID, cartItem)}
                    >
                      -
                    </button>
                    <button
                      className="h-7 w-7 rounded-sm bg-blacky/70 text-xl text-white outline-none"
                      onClick={() => increaseQuantity(itemID, cartItem)}
                    >
                      +
                    </button>
                  </div>
                </td>

                <td>
                  <div className=" center h-7 w-7 rounded-sm bg-blacky/70 text-white">
                    <MdDelete
                      className="cursor-pointer text-lg hover:text-red-400"
                      onClick={() => removeToCart(itemID, cartItem)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="mt-2 border-t py-5 text-right">
        Total: ₱ <span className="font-bold">500.00</span>
      </p>
      <div className="w-[19rem]">
        <p className="mb-2  text-blacky/80">Payment</p>
        <input
          className="w-full rounded-sm border-[0.1rem] px-5 py-2 outline-none"
          type="number"
          name="pay"
          id="pay"
          placeholder="Enter customer payment"
        />
      </div>
      <p className="my-2 text-blacky/80">Customer change: 0</p>
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
