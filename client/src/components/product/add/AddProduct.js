import React from "react";
import { useFormik } from "formik";
import AddProductForm from "./AddProductForm";
import formProductValidation from "../formProductValidation";
// product store
import useProductStore from "../../../store/productStore";
import useUserStore from "../../../store/userStore";

const AddProduct = () => {
  const { addNewProduct, serverError } = useProductStore((state) => state);
  const user = useUserStore((state) => state.user);

  const onSubmit = (values, actions) => {
    const data = new FormData();
    data.append("item_code", values.item_code);
    data.append("name", values.name);
    data.append("category", values.category);
    data.append("purchasePrice", values.purchasePrice);
    data.append("stock", values.stock);
    data.append("sellPrice", values.sellPrice);
    data.append("image", values.image);

    setTimeout(() => {
      addNewProduct(user?._id, data);
      actions.setSubmitting(false);
    }, 2000);
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: {
      item_code: "",
      name: "",
      category: "",
      purchasePrice: 0,
      stock: 0,
      sellPrice: 0,
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
    <AddProductForm
      values={values}
      touched={touched}
      errors={errors}
      isSubmitting={isSubmitting}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      setFieldValue={setFieldValue}
      categoryList={categoryList}
    />
  );
};

export default AddProduct;
