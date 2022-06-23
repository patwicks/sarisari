import React from "react";
// local imports
import Product from "../components/product/Product";
//main layout
import AppLayout from "./AppLayout";
//store
import useProductStore from "../store/productStore";

const ProductPage = () => {
  const fetchAllProducts = useProductStore((state) => state.fetchAllProducts);

  React.useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <AppLayout>
      <Product />
    </AppLayout>
  );
};

export default ProductPage;
