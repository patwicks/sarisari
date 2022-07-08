import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
// icons
import { FaShoppingCart } from "react-icons/fa";
// local imports
import MainProductList from "./MainProductList";
import useProductStore from "../../store/productStore";
import useCartStore from "../../store/cartStore";

const Main = ({ debounceChangeHandler, serverError, itemsPerPage }) => {
  const navigate = useNavigate();

  const { product } = useProductStore((state) => state);
  const cart = useCartStore((state) => state.cart);
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
  return (
    <div className="h-full w-full min-w-[288px] py-2 px-2 pt-5">
      {/* top search input */}
      <div className="relative w-full">
        <p className="mb-4 text-sm">Search by product name:</p>
        <input
          className="w-full rounded-full border bg-transparent px-5 py-2 outline-1 outline-primary/50 focus:shadow-xl"
          type="text"
          name="search"
          id="search"
          onChange={debounceChangeHandler}
        />

        <FaShoppingCart
          className="absolute top-0 right-0 cursor-pointer text-xl text-whitey-300 hover:opacity-75"
          onClick={() => navigate("/checkout")}
        />
        <p className="center absolute -right-2 -top-2 h-4 w-4 rounded-full bg-primary text-[0.7rem] font-semibold text-whitey-100">
          {cart?.length}
        </p>
      </div>
      {serverError.action === "fetch" && serverError.text !== "" && (
        <p className="mt-2 w-full rounded-sm bg-primary/20 py-2 text-center text-sm text-primary/80 ">
          {serverError.text}
        </p>
      )}
      {product?.length <= 0 ? (
        <p className="mt-10 text-center text-sm text-blacky/70">
          Search a product now
        </p>
      ) : (
        <MainProductList currentItems={currentItems} />
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

export default memo(Main);
