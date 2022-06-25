import React from "react";
import { useFormik } from "formik";
import ProductForm from "./ProductForm";
import formProductValidation from "./formProductValidation";
// product store
import useProductStore from "../../store/productStore";
import useUserStore from "../../store/userStore";

const AddProduct = () => {
  const addNewProduct = useProductStore((state) => state.addNewProduct);
  const user = useUserStore((state) => state.user);

  const onSubmit = (values, action) => {
    const data = new FormData();
    data.append("item_code", values.item_code);
    data.append("name", values.name);
    data.append("category", values.category);
    data.append("status", values.status);
    data.append("stock", values.stock);
    data.append("price", values.price);
    data.append("image", values.image);

    addNewProduct(user?._id, data);
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
    validationSchema: formProductValidation,
    onSubmit,
  });
  //category
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
    <ProductForm
      values={values}
      touched={touched}
      errors={errors}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      setFieldValue={setFieldValue}
      categoryList={categoryList}
    />
  );
};

export default AddProduct;
