import React, { useState } from "react";
//local imports
import useProductStore from "../../store/productStore";
import useUserStore from "../../store/userStore";

const SearchProduct = () => {
  const [search, setSearch] = useState("");
  const { searchProduct } = useProductStore((state) => state);
  const user = useUserStore((state) => state.user);

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchProduct(user?._id, search);
  };

  return (
    <div>
      <p className="mt-2 pb-1 text-[0.8rem] text-blacky/50">
        Search product by name or ID:
      </p>
      <input
        className="border-blacky/15 w-full rounded-full border px-5 py-1 outline-none"
        type="text"
        name="search"
        autoComplete="false"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchProduct;
