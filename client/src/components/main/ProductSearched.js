import React from "react";

const ProductSearched = () => {
  return (
    <div className="pt-4">
      <p className="mb-4 text-sm">Product</p>
      <table className="w-full ">
        <thead>
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
        </thead>
        <tbody>
          <tr>
            <td className="flex items-center justify-center">
              <div className="h-7 w-7 overflow-hidden rounded-full bg-primary/50">
                <img
                  className="h-full w-full object-center"
                  src={require("../../assets/products.png")}
                  alt="product"
                />
              </div>
            </td>
            <td className="p-2 text-center text-sm">
              White Milk 2Liter White Milk 2Liter
            </td>
            <td className="p-2 text-center text-sm">250</td>
            <td className="p-2 text-center text-sm">₱ 28.50</td>
            <td className="p-2 text-center text-sm">
              <button className="h-7 w-7 rounded-sm bg-primary text-white hover:opacity-70">
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductSearched;
