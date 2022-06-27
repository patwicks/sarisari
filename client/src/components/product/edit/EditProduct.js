import React from "react";
import { useFormik } from "formik";
//local imports
import EditProductForm from "./EditProductForm";
import formProductValidation from "../formProductValidation";
// store
import useProductStore from "../../../store/productStore";

const EditProduct = ({ productData }) => {
  const {
    item_code,
    name,
    category,
    purchasePrice,
    stock,
    sellPrice,
    image,
    _id: productID,
  } = productData;
  const { editProduct } = useProductStore((state) => state);
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      editProduct(productID, values);
      actions.setSubmitting(false);
    }, 2000);
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      item_code: item_code ? item_code : "",
      name: name ? name : "",
      category: category ? category : "",
      purchasePrice: purchasePrice ? purchasePrice : "",
      stock: stock ? stock : 0,
      sellPrice: sellPrice ? sellPrice : 0,
    },
    validationSchema: formProductValidation,
    onSubmit,
  });

  const categoryList = [
    { productCategory: "Canned goods", value: "canned goods" },
    { productCategory: "Instant coffee", value: "instant coffee" },
    { productCategory: "Rice", value: "rice" },
    { productCategory: "Toiletries", value: "toiletries" },
    { productCategory: "Powdered drinks", value: "powdered drinks" },
    { productCategory: " Instant sauces", value: "instant sauce" },
    { productCategory: " Cooking oil", value: "cooking oil" },
    { productCategory: "Instant noodles", value: "instant noodles" },
    { productCategory: "Snacks", value: "snacks" },
    { productCategory: "Sugar", value: "sugar" },
  ];

  return (
    <EditProductForm
      categoryList={categoryList}
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleBlur={handleBlur}
      touched={touched}
      errors={errors}
      isSubmitting={isSubmitting}
      image={image}
    />
  );
};

export default EditProduct;
