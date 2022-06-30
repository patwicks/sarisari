import React, { useEffect, useState } from "react";
//local imports
import CheckOut from "../components/checkout/CheckOut";
// layout
import AppLayout from "./AppLayout";
//store
import useCartStore from "../store/cartStore";
const CheckOutPage = () => {
  const [grandTotal,setGrandTotal] = useState(0);
  const cart = useCartStore((state) => state.cart);
  useEffect(() => {
    const sum = () => {
      //  a= price 1 - previous === b= price 2 - next price
      const sumAll= cart.map((item) => item.total).reduce((a, b) => a + b);
      return setGrandTotal(sumAll)
    };
    sum();
  }, [cart]);
  return (
    <AppLayout>
      <CheckOut grandTotal={grandTotal}/>
    </AppLayout>
  );
};

export default CheckOutPage;
