import React  from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = ({ currentItems }) => {
  let navigateTo = useNavigate();

  return (
    <>
      <div className="hidden w-full min-w-[288px] overflow-y-scroll md:block">
        <table className="mt-2 w-full border-collapse">
          <thead>
            <tr className="border text-left">
              <th className="p-2 font-semibold">Item code</th>
              <th className="p-2 font-semibold">Image</th>
              <th className="p-2 font-semibold">Name</th>
              <th className="p-2 font-semibold">Stock</th>
              <th className="p-2 font-semibold">Category</th>
              <th className="p-2 font-semibold">Purchase Price</th>
              <th className="p-2 font-semibold">Selling Price</th>
              <th className="p-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((item) => (
              <tr className="border" key={item._id}>
                <td className="p-2">{item.item_code}</td>
                <td className="p-2">
                  <div className="center h-8 w-8 overflow-hidden rounded-full border">
                    <img
                      className="h-full w-full object-center"
                      src={item.image[0].url}
                      alt="Product"
                    />
                  </div>
                </td>
                <td className="truncate p-2">{item.name}</td>
                <td className="p-2">{item.stock}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">
                  <p className="p-2">₱ {item.purchasePrice}</p>
                </td>
                <td className="p-2">₱ {item.sellPrice}</td>
                <td className="p-2">
                  {item.stock > 10 ? (
                    <p className="truncate rounded-sm border-[1px] border-green-200 px-1 text-center text-[0.7rem] text-green-400">
                      In Stock
                    </p>
                  ) : (
                    <p className="truncate border-[1px] border-red-200 px-1 text-center text-[0.7rem] text-red-400">
                      Out of Stock
                    </p>
                  )}
                </td>
                <td className="p-2">
                  <button
                    className="cursor-pointer border-none text-sm uppercase text-blue-400 outline-none hover:text-blacky"
                    onClick={() => navigateTo(`/products/edit/${item._id}`)}
                  >
                    edit
                  </button>
                </td>
                <td className="p-2">
                  <button
                    className="cursor-pointer border-none text-sm uppercase text-red-400 outline-none hover:text-blacky"
                    onClick={() => navigateTo(`/products/delete/${item._id}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex w-full min-w-[288px] flex-col overflow-y-scroll md:hidden">
        {currentItems?.map((item) => (
          // <div className="flex w-full bg-red-500">
          <div className="h-18 flex w-full border-b-[1px] p-2" key={item._id}>
            <div className="w-[10%]">
              <div className="h-7 w-7 overflow-hidden rounded-full border-[1px] border-black/80 bg-primary/80">
                <img
                  className="h-full w-full object-cover object-center"
                  src={item.image[0].url}
                  alt="imageProduct"
                />
              </div>
            </div>

            <div className="relative flex w-[90%] flex-col">
              <p className="truncate pl-2 text-sm font-semibold capitalize text-blacky/90">
                {item.name}
              </p>
              <p className="pl-2 text-[0.7rem]">₱ {item.sellPrice}</p>
              <button className="w-20 rounded-sm bg-primary/80 text-[0.7rem] text-white hover:opacity-80">
                details
              </button>
              {item.stock > 10 && (
                <p className="absolute right-0 bottom-0 rounded-md text-[0.6rem] text-green-500">
                  in stock
                </p>
              )}
              {item.stock < 10 && (
                <p className="absolute right-0 bottom-0 rounded-md text-[0.6rem] text-red-500">
                  out of stock
                </p>
              )}
            </div>
          </div>
          // </div>
        ))}
      </div>
    </>
  );
};

export default ProductTable;
