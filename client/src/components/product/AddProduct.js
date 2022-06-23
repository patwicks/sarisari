import React from "react";
import { useFormik } from "formik";
import ProductForm from "./ProductForm";
import addProductValidation from "./addFormValidation";

const AddProduct = () => {
  const onSubmit = (values, action) => {
    console.log(values);
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        item_code: "",
        name: "",
        category: "",
        status: "in stock",
        stock: 1,
        price: 1,
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
    />
  );
};

export default AddProduct;
