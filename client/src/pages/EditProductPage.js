import React from "react";
import { useParams } from "react-router-dom";
//local imports
import API from "../api/Api";
import EditProduct from "../components/product/EditProduct";
import AppLayout from "./AppLayout";

const EditProductPage = () => {
  const { productID } = useParams();
  const [productData, setProductData] = React.useState({});

  React.useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await API.get(`/product/${productID}`);
        setProductData(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchSingleProduct();
  }, [productID]);

  return (
    <AppLayout>
      <EditProduct productData={productData} />
    </AppLayout>
  );
};

export default EditProductPage;
