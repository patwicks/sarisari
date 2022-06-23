import React from "react";
import { useFormik } from "formik";
import ProductForm from "./ProductForm";
import addProductValidation from "./addFormValidation";
// product store
import useProductStore from "../../store/productStore";

const AddProduct = () => {
  const addNewProduct = useProductStore((state) => state.addNewProduct);

  const onSubmit = (values, action) => {
    const data = new FormData();
    data.append("item_code", values.item_code);
    data.append("name", values.name);
    data.append("category", values.category);
    data.append("status", values.status);
    data.append("stock", values.stock);
    data.append("price", values.price);
    data.append("image", values.image);

    addNewProduct(data);
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      item_code: "",
      name: "",
      category: "",
      status: "in stock",
      stock: 1,
      price: 1,
      image: "",
    },
    validationSchema: addProductValidation,
    onSubmit,
  });
  return (
    <ProductForm
      values={values}
      touched={touched}
      errors={errors}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      setFieldValue={setFieldValue}
    />
  );
};

export default AddProduct;
