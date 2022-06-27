import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//local imports
import DeleteProduct from "../components/product/delete/DeleteProduct";
import AppLayout from "./AppLayout";
import API from "../api/Api";

//store

const DeleteProductPage = () => {
  const { productID } = useParams();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await API.get(`/product/${productID}`);
        setProductData(res.data);
      } catch (error) {
        alert(error.response.data.errorMessage);
      }
    };
    fetchSingleProduct();
  }, [productID]);
  return (
    <AppLayout>
      <DeleteProduct productData={productData} />
    </AppLayout>
  );
};

export default DeleteProductPage;
