import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
//store
import useProductStore from "../../store/productStore";
//test paginate
import ReactPaginate from "react-paginate";
import SearchProduct from "./SearchProduct";

const Product = ({ itemsPerPage, serverError }) => {
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
    setCurrentItems(product.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(product.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, product]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    setItemOffset(newOffset);
  };
  //test code paginate end
  return (
    <div className="w-full min-w-[288px] p-2 pt-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-blacky/80">Products</h1>
        <button
          className="rounded-sm border-none bg-blue-400 px-2 py-1 text-sm text-white outline-none"
          onClick={() => navigateTo("/products/add")}
        >
          + Add products
        </button>
      </div>
      <SearchProduct />
      {serverError.action === "fetch" && serverError.text !== "" && (
        <p className="mt-2 w-full rounded-sm bg-primary/20 py-2 text-center text-sm text-primary/80 ">
          {serverError.text}
        </p>
      )}

      {product?.length === 0 ? (
        <p className="mt-10 text-center text-sm text-blacky/70">
          No products available
        </p>
      ) : (
        <ProductList currentItems={currentItems} />
      )}

      {product?.length > 0 && (
        <ReactPaginate
          className="center mt-5 w-full"
          previousLabel="<"
          breakLabel="..."
          nextLabel=">"
          pageRangeDisplayed={3}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          //style
          previousClassName="hover:bg-primary text-white bg-primary/50 mx-1 w-5 h-5 rounded-sm overflow-hidden"
          previousLinkClassName="w-full h-full center"
          nextClassName="hover:bg-primary text-white bg-primary/50 mx-1 w-5 h-5 rounded-sm overflow-hidden"
          nextLinkClassName="w-full h-full center"
          pageClassName="hover:bg-primary text-white bg-primary/50 mx-1 w-5 h-5 rounded-sm overflow-hidden"
          pageLinkClassName="w-full h-full center"
          activeClassName="bg-primary"
          activeLinkClassName="bg-primary"
        />
      )}
    </div>
  );
};

export default Product;
