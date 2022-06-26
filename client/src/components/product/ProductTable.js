import React from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = ({currentItems}) => {
  let navigateTo = useNavigate()


  return (
    <div className="w-full min-w-[288px] overflow-y-scroll">
      <table className="mt-2 w-full border-collapse">
        <thead>
          <tr className="border text-left">
            <th className="hidden p-2 font-semibold md:block">Item code</th>
            <th className="p-2 font-semibold">Image</th>
            <th className="p-2 font-semibold">Name</th>
            <th className="p-2 font-semibold">Stock</th>
            <th className="p-2 font-semibold">Category</th>
            <th className="p-2 font-semibold">Status</th>
            <th className="p-2 font-semibold">Price</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item, index) => (
            <tr className="border" key={item._id}>
              <td className="hidden p-2 md:block">{item.item_code}</td>
              <td className="p-2">
                <div className="center h-8 w-8 overflow-hidden rounded-full border">
                  <img
                    className="h-full w-full object-center"
                    src={item.image[0].url}
                    alt="Product"
                  />
                </div>
              </td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.stock}</td>
              <td className="p-2">{item.category}</td>
              <td className="p-2">
                <p className="w-20 rounded-md border border-green-300 p-0 text-center text-sm text-green-500">
                  {item.status}
                </p>
              </td>
              <td className="p-2">₱ {item.price}</td>
              <td className="p-2">
                <button
                  className="cursor-pointer border-none text-sm uppercase text-blue-400 outline-none hover:text-blacky"
                  onClick={() => navigateTo(`/products/edit/${item._id}`)}
                >
                  edit
                </button>
              </td>
              <td className="p-2">
                <button className="cursor-pointer border-none text-sm uppercase text-red-400 outline-none hover:text-blacky">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
