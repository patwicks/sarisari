import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductTable from "./ProductTable";
//store
import useProductStore from "../../store/productStore";
//test paginate
import ReactPaginate from "react-paginate";

const Product = ({ itemsPerPage }) => {
  let navigateTo = useNavigate();
  const product = useProductStore((state) => state.product);
  //test code paginate start
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(product.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(product.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, product]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  //test code paginate end
  return (
    <div className="w-full p-2 pt-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-blacky/80">Products</h1>
        <button
          className="rounded-sm border-none bg-blue-400 px-2 py-1 text-sm text-white outline-none"
          onClick={() => navigateTo("/products/add")}
        >
          + Add products
        </button>
      </div>
      <div>
        <p className="mt-2 pb-1 text-[0.8rem] text-blacky/50">
          Search product by name or ID:
        </p>
        <input
          className="border-blacky/15 w-full rounded-full border px-5 py-1 outline-none"
          type="text"
          name="search"
        />
      </div>
      <ProductTable currentItems={currentItems} />
      {/* <div className="w-full bg-primary/20 center"> */}
      <ReactPaginate
        className="center w-full"
        previousLabel="previous"
        breakLabel="..."
        nextLabel="next"
        pageRangeDisplayed={3}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        //style
        pageClassName="hover:bg-primary text-white bg-primary/50 mx-1 w-5 h-5 rounded-sm overflow-hidden"
        pageLinkClassName="w-full h-full center"
        activeClassName="bg-primary"
        activeLinkClassName="bg-primary"
      />
      {/* </div> */}
    </div>
  );
};

export default Product;
