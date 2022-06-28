import React from "react";
// local imports
import Product from "../components/product/Product";
//main layout
import AppLayout from "./AppLayout";
//store
import useProductStore from "../store/productStore";
import useUserStore from "../store/userStore";

const ProductPage = () => {
  const { fetchAllProducts, serverError } = useProductStore((state) => state);
  const user = useUserStore((state) => state.user);
  const userID = user?._id;
  React.useEffect(() => {
    if (userID) {
      fetchAllProducts(userID);
    }
  }, [fetchAllProducts, userID]);

  return (
    <AppLayout>
      <Product itemsPerPage={10} serverError={serverError} />
    </AppLayout>
  );
};

export default ProductPage;
