import React from "react";
import useProductStore from "../../store/productStore";
const MainProductList = () => {
  const productLimit = useProductStore((state) => state.productLimit);

  return (
    <div className="pt-4">
      <p className="mb-4 text-sm">Product</p>
      <table className="w-full ">
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
          {productLimit?.map((item) => (
            <tr className="border-b" key={item._id}>
              <td className="flex items-center justify-center">
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
                  className="h-7 w-7 rounded-sm bg-primary text-white hover:opacity-70"
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainProductList;
