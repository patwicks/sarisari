import React from "react";
//local imports
import CheckOut from "../components/checkout/CheckOut";
// layout
import AppLayout from "./AppLayout";
//store
import useCartStore from "../store/cartStore";

const CheckOutPage = () => {
  const { cart, removeToCart, decreaseQuantity, increaseQuantity } =
  useCartStore((state) => state);
  return (
    <AppLayout>
      <CheckOut
        cartItem={cart}
        removeToCart={removeToCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />
    </AppLayout>
  );
};

export default CheckOutPage;
