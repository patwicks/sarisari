import React from "react";
import { useNavigate } from "react-router-dom";
// icons
import { MdArrowBackIos } from "react-icons/md";
// store
import useProductStore from "../../../store/productStore";

const ProductForm = (props) => {
  let navigateTo = useNavigate();
  const { serverError, serverSuccess } = useProductStore((state) => state);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    categoryList,
    isSubmitting,
  } = props;

  return (
    <div className="center min-w-[288px] flex-col">
      <div
        className="relative w-full items-center bg-whitey-200/70 py-2"
        onClick={() => navigateTo("/products")}
      >
        <MdArrowBackIos className="absolute top-1  left-[4px] cursor-pointer rounded-full p-2 text-4xl hover:bg-blacky/10" />
        <h1 className="ml-10 text-xl font-semibold text-blacky/80">
          Add new Product
        </h1>
      </div>
      <h1 className=" w-full py-5 px-2 text-lg text-blacky/60">
        Product Information:
      </h1>
      {/* server error */}

      {serverError.action === "add" && serverError.text !== "" && (
        <p className="w-[90%] max-w-[1000px] rounded-sm bg-primary/20 py-2 text-center text-sm text-primary/80 ">
          {serverError.text}
        </p>
      )}
      {serverSuccess.action === "add" && serverSuccess.text !== "" && (
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
            value={values.item_code}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* form error */}
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
          {/* form error */}
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
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            name="category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option>Select</option>
            {categoryList?.map((list, index) => (
              <option className="text-sm" value={list.value} key={index}>
                {list.productCategory}
              </option>
            ))}
          </select>
          {/* form error */}
          {errors.category && touched.category && (
            <p className="text-[0.8rem] text-primary/80">{errors.category}</p>
          )}
        </div>
        {/* purchasePrice */}
        <div className="mt-3 flex w-full flex-col">
          <label className="text-[0.7rem]  uppercase" htmlFor="purchasePrice">
            Purchased price:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            type="number"
            name="purchasePrice"
            placeholder="Purchased price"
            value={values.purchasePrice}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* form error */}
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
          {/* form error */}
          {errors.stock && touched.stock && (
            <p className="text-[0.8rem] text-primary/80">{errors.stock}</p>
          )}
        </div>
        {/* selling price */}
        <div className="mt-3 flex w-full flex-col">
          <label className="text-[0.7rem]  uppercase" htmlFor="stock">
            Selling price:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            type="number"
            name="sellPrice"
            placeholder="Enter selling price"
            value={values.sellPrice}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* form error */}
          {errors.sellPrice && touched.sellPrice && (
            <p className="text-[0.8rem] text-primary/80">{errors.sellPrice}</p>
          )}
        </div>

        {/* Image */}
        <div className="mt-3 flex w-full flex-col">
          <label className="text-[0.7rem]  uppercase" htmlFor="image">
            Attached Image:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            required
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setFieldValue("image", e.target.files[0])}
          />
        </div>
        <button disabled={isSubmitting} className="form-btn" type="submit">
          {isSubmitting ? "adding new product..." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
