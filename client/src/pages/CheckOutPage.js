import React from "react";
//local imports
import CheckOut from "../components/checkout/CheckOut";
// layout
import AppLayout from "./AppLayout";

const CheckOutPage = () => {
  return (
    <AppLayout>
      <CheckOut />
    </AppLayout>
  );
};

export default CheckOutPage;
