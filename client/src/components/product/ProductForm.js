import React from "react";
// icons
import { MdArrowBackIos } from "react-icons/md";

const ProductForm = (props) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    props;
  return (
    <div className="center min-w-[288px] flex-col">
      <div className="relative w-full items-center bg-whitey-200 py-2">
        <MdArrowBackIos className="absolute top-1  left-[4px] cursor-pointer rounded-full p-2 text-4xl hover:bg-blacky/10" />
        <h1 className="text-semibold text-md ml-10 uppercase md:text-xl">
          Add new Product
        </h1>
      </div>
      <h1 className=" w-full py-5 px-2 text-lg text-blacky/60">
        Product Information:
      </h1>
      {/* server error */}
      <p className="text center w-[90%] max-w-[500px] rounded-sm bg-primary/20 py-2 text-sm text-primary/80 ">
        Error from server
      </p>
      <form
        className="flex w-full max-w-[500px] flex-col p-2 first:overflow-hidden"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="mt-2 flex w-full flex-col">
          <label
            className="text-[0.7rem] font-semibold uppercase"
            htmlFor="itemcode"
          >
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
        <div className="mt-2 flex w-full flex-col">
          <label
            className="text-[0.7rem] font-semibold uppercase"
            htmlFor="name"
          >
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
        <div className="mt-2 flex w-full flex-col">
          <label
            className="text-[0.7rem] font-semibold uppercase"
            htmlFor="category"
          >
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
            <option className="text-sm" value="canned goods">
              Cannned Goods
            </option>
          </select>
          {/* form error */}
          {errors.category && touched.category && (
            <p className="text-[0.8rem] text-primary/80">{errors.category}</p>
          )}
        </div>
        {/* status */}
        <div className="mt-2 flex w-full flex-col">
          <label
            className="text-[0.7rem] font-semibold uppercase"
            htmlFor="status"
          >
            Status:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            type="text"
            name="status"
            placeholder="In stock"
            readOnly
            disabled
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* form error */}
          {errors.status && touched.status && (
            <p className="text-[0.8rem] text-primary/80">{errors.status}</p>
          )}
        </div>
        {/* Stock */}
        <div className="mt-2 flex w-full flex-col">
          <label
            className="text-[0.7rem] font-semibold uppercase"
            htmlFor="stock"
          >
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
        {/* price */}
        <div className="mt-2 flex w-full flex-col">
          <label
            className="text-[0.7rem] font-semibold uppercase"
            htmlFor="stock"
          >
            Stock count:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            type="number"
            name="price"
            placeholder="Enter price"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* form error */}
          {errors.price && touched.price && (
            <p className="text-[0.8rem] text-primary/80">{errors.price}</p>
          )}
        </div>

        {/* Image */}
        <div className="mt-2 flex w-full flex-col">
          <label
            className="text-[0.7rem] font-semibold uppercase"
            htmlFor="image"
          >
            Attached Image:
          </label>
          <input
            className="rounded-sm border-[0.05rem] px-4 py-1 outline-1 outline-primary/60"
            type="file"
            name="image"
            accept="image/*"
          />
        </div>
        <button className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
