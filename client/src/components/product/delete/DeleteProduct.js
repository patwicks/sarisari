import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import useProductStore from "../../../store/productStore";
import useUserStore from "../../../store/userStore";

const DeleteProduct = ({ productData }) => {
  let navigateTo = useNavigate();
  const { serverError, serverSuccess, deleteProduct } = useProductStore(
    (state) => state
  );
  const { user } = useUserStore((state) => state);
  //local states
  const [disable, setDisable] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (productName === productData?.name) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [productName, productData]);

  //handle submit delete
  const handleSubmitDelete = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      deleteProduct(productData?._id, user._id);
      setDisable(true);
      setIsSubmitting(false);
      setProductName("");
    }, 3000);
  };

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
        {/* server error */}

        {serverError.action === "delete" && serverError.text !== "" && (
          <p className="text w-full max-w-[1000px] rounded-sm bg-primary/20 py-2 text-center text-sm text-primary/80 ">
            {serverError.text}
          </p>
        )}
        {serverSuccess.action === "delete" && serverSuccess.text !== "" && (
          <p className="w-full max-w-[1000px] rounded-sm bg-green-200 py-2 text-center text-sm text-green-500 ">
            {serverSuccess.text}
          </p>
        )}
        <h2 className="mt-5 text-center text-sm text-blacky/80">
          To delete this product, type it's name to confirm."
          <span className="font-bold text-blacky">{productData.name}</span> "
        </h2>
        <form onSubmit={handleSubmitDelete}>
          <input
            className="form-input"
            type="text"
            name="productName"
            placeholder={"Type " + productData?.name}
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
            {isSubmitting ? "Deleting..." : "Delete"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteProduct;
