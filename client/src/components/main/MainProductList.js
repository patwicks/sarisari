import React, { useState } from "react";
import AddToCartModal from "../product/cart/AddToCartModal";
import useActionStore from "../../store/actionStore";
const MainProductList = ({ currentItems }) => {
  const { setShowModal, isVisible } = useActionStore((state) => state);
  const [item, setItem] = useState();

  return (
    <div className="relative pt-4">
      <p className="mb-4 text-sm">Product</p>
      <table className="mt-2 w-full border-collapse">
        <thead>
          <tr>
            <th className="text-semibold text-center text-sm text-blacky/80">
              Image
            </th>
            <th className="text-semibold text-center text-sm text-blacky/80">
              Name
            </th>
            <th className="text-semibold text-center text-sm text-blacky/80">
              Available
            </th>
            <th className="text-semibold text-center text-sm text-blacky/80">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item) => (
            <tr className="border-b" key={item._id}>
              <td className="p-2">
                <div className="h-7 w-7 overflow-hidden rounded-full bg-primary/50">
                  <img
                    className="h-full w-full object-center"
                    src={item?.image[0].url}
                    alt="product"
                  />
                </div>
              </td>
              <td className="p-2 text-center text-sm">{item?.name}</td>
              <td className="p-2 text-center text-sm">{item?.stock}</td>
              <td className="p-2 text-center text-sm">₱ {item?.sellPrice}</td>
              <td className="p-2 text-center text-sm">
                <button
                  disabled={item?.stock <= 0 ? true : false}
                  className={
                    item?.stock <= 0
                      ? `h-7 w-7 cursor-not-allowed rounded-sm bg-primary/30 text-white hover:opacity-100`
                      : `h-7 w-7 rounded-sm bg-primary text-white hover:opacity-70`
                  }
                  onClick={() => {
                    setShowModal();
                    setItem(item);
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* modal */}
      {isVisible ? (
        <AddToCartModal setShowModal={setShowModal} item={item} />
      ) : null}
    </div>
  );
};

export default MainProductList;
