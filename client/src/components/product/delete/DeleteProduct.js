import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
// import useProductStore from "../../../store/productStore";

const DeleteProduct = ({ productData }) => {
  let navigateTo = useNavigate();

  const [disable, setDisable] = useState(true);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (productName === productData?.name) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [productName, productData]);

  return (
    <div className="center min-w-[288px] flex-col">
      <div
        className="relative w-full items-center bg-whitey-200/70 py-2"
        onClick={() => navigateTo("/products")}
      >
        <MdArrowBackIos className="absolute top-1  left-[4px] cursor-pointer rounded-full p-2 text-4xl hover:bg-blacky/10" />
        <h1 className="ml-10 text-xl font-semibold text-blacky/80">
          Delete Product
        </h1>
      </div>
      <div className="mt-20 w-[90%] max-w-[500px] rounded-sm bg-whitey-200 p-2">
        <h2 className="text-center text-sm text-blacky/80">
          To delete this product, type it's name to confirm."
          <span className="font-bold text-blacky">{productData.name}</span> "
        </h2>
        <form>
          <input
            className="form-input"
            type="text"
            name="productName"
            placeholder={productData?.name}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <button
            disabled={disable}
            className={
              disable
                ? `form-btn cursor-not-allowed hover:opacity-100`
                : `form-btn`
            }
            type="submit"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteProduct;
