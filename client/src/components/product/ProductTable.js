import React from "react";

const ProductTable = () => {
  return (
    <div className="w-full min-w-[288px] overflow-y-scroll">
      <table className="mt-2 w-full border-collapse">
        <thead>
          <tr className="border text-left">
            <th className="p-2 font-semibold">Item code</th>
            <th className="p-2 font-semibold">Image</th>
            <th className="p-2 font-semibold">Name</th>
            <th className="p-2 font-semibold">Stock</th>
            <th className="p-2 font-semibold">Category</th>
            <th className="p-2 font-semibold">Status</th>
            <th className="p-2 font-semibold">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="p-2">0000123456</td>
            <td className="p-2">
              <div className="center h-8 w-8 overflow-hidden rounded-full border">
                <img
                  className="h-full w-full object-center"
                  src={require("../../assets/products.png")}
                  alt="Product"
                />
              </div>
            </td>
            <td className="p-2">Bottle milk</td>
            <td className="p-2">250</td>
            <td className="p-2">Drinks</td>
            <td className="p-2">
              <p className="w-20 rounded-md border border-green-300 p-0 text-center text-sm text-green-500">
                in stock
              </p>
            </td>
            <td className="p-2">₱ 250</td>
            <td className="p-2">
              <button className="cursor-pointer border-none text-sm uppercase text-blue-400 outline-none hover:text-blacky">
                edit
              </button>
            </td>
            <td className="p-2">
              <button className="cursor-pointer border-none text-sm uppercase text-red-400 outline-none hover:text-blacky">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
