import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import useProductStore from "../../../store/productStore";

const EditProductForm = (props) => {
  let navigateTo = useNavigate();
  const { serverError, serverSuccess } = useProductStore((state) => state);
  const {
    categoryList,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    image,
  } = props;

  return (
    <div className="center min-w-[288px] flex-col">
      <div
        className="relative w-full items-center bg-whitey-200/70 py-2"
        onClick={() => navigateTo("/products")}
      >
        <MdArrowBackIos className="absolute top-1  left-[4px] cursor-pointer rounded-full p-2 text-4xl hover:bg-blacky/10" />
        <h1 className="ml-10 text-xl font-semibold text-blacky/80">
          Edit Product Info
        </h1>
      </div>
      <h1 className=" w-full py-5 px-2 text-lg text-blacky/60">
        Product Information:
      </h1>
      {/* image */}
      {image && (
        <div className="center mb-2 h-16 w-16  overflow-hidden rounded-full border-2 border-blue-300">
          <img
            className="h-full w-full object-cover object-center"
            src={image[0].url}
            alt="imageProduct"
          />
        </div>
      )}
      {/* server error */}

      {serverError.action === "edit" && serverError.text !== "" && (
        <p className="w-[90%] max-w-[1000px] rounded-sm bg-primary/20 py-2 text-center text-sm text-primary/80 ">
          {serverError.text}
        </p>
      )}
      {serverSuccess.action === "edit" && serverSuccess.text !== "" && (
        <p className="w-[90%] max-w-[1000px] rounded-sm bg-green-200 py-2 text-center text-sm text-green-500 ">
          {serverSuccess.text}
        </p>
      )}
      <form
        className="flex w-full max-w-[1000px] flex-col p-2 first:overflow-hidden"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="mt-3 flex w-full flex-col">
          <label className="text-[0.7rem] uppercase" htmlFor="itemcode">
            Item code:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            type="text"
            name="item_code"
            placeholder="ex. 000068123456"
            disabled
            readOnly
            value={values.item_code}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.item_code && touched.item_code && (
            <p className="text-[0.8rem] text-primary/80">{errors.item_code}</p>
          )}
        </div>

        {/* Product name */}
        <div className="mt-3 flex w-full flex-col">
          <label className="text-[0.7rem]  uppercase" htmlFor="name">
            Product name:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            type="text"
            name="name"
            placeholder="Enter product name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <p className="text-[0.8rem] text-primary/80">{errors.name}</p>
          )}
        </div>
        {/* category */}
        <div className="mt-3 flex w-full flex-col">
          <label className="text-[0.7rem]  uppercase" htmlFor="category">
            Category:
          </label>
          <select
            className="rounded-sm border-[0.05rem] px-4 py-1 capitalize outline-1 outline-primary/60"
            name="category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option className="capitalize text-primary" value={values.category}>
              {values.category}
            </option>
            {categoryList?.map((list, index) => (
              <option value={list.value} key={index}>
                {list.productCategory}
              </option>
            ))}
          </select>
          {errors.category && touched.category && (
            <p className="text-[0.8rem] text-primary/80">{errors.category}</p>
          )}
        </div>
        {/* status */}
        <div className="mt-3 flex w-full flex-col">
          <label className="text-[0.7rem]  uppercase" htmlFor="purchasePrice">
            Purchase price:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            type="text"
            name="purchasePrice"
            placeholder="In stock"
            value={values.purchasePrice}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.purchasePrice && touched.purchasePrice && (
            <p className="text-[0.8rem] text-primary/80">
              {errors.purchasePrice}
            </p>
          )}
        </div>
        {/* Stock */}
        <div className="mt-3 flex w-full flex-col">
          <label className="text-[0.7rem]  uppercase" htmlFor="stock">
            Stock count:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            type="number"
            name="stock"
            placeholder="Enter stock count"
            value={values.stock}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.stock && touched.stock && (
            <p className="text-[0.8rem] text-primary/80">{errors.stock}</p>
          )}
        </div>
        {/* selling price */}
        <div className="mt-3 flex w-full flex-col">
          <label className="text-[0.7rem]  uppercase" htmlFor="sellPrice">
            Selling price:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            type="number"
            name="sellPrice"
            placeholder="Enter price"
            value={values.sellPrice}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.sellPrice && touched.sellPrice && (
            <p className="text-[0.8rem] text-primary/80">{errors.sellPrice}</p>
          )}
        </div>
        <button disabled={isSubmitting} className="form-btn" type="submit">
          {isSubmitting ? "editing product info..." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
