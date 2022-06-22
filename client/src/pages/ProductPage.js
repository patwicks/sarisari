import React from "react";
// local imports
import Product from "../components/product/Product";
import useUserStore from "../store/userStore";
const ProductPage = () => {
  const user = useUserStore((state) => state.user);
  console.log(user);
  return <Product />;
};

export default ProductPage;
