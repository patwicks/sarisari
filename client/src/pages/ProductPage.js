import React from "react";
// local imports
import Product from "../components/product/Product";
//main layout
import AppLayout from "./AppLayout";

const ProductPage = () => {

  return (
    <AppLayout>
      <Product />
    </AppLayout>
  );
};

export default ProductPage;
