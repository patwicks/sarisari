import React from "react";
import debounce from "lodash.debounce";
//local imports
import useProductStore from "../../store/productStore";
import useUserStore from "../../store/userStore";

const SearchProduct = () => {
  const { searchProduct } = useProductStore((state) => state);
  const user = useUserStore((state) => state.user);
  //trigger by onChange

  const onType = (e) => {
    let data = e.target.value;
    const userID = user?._id;
    return searchProduct(userID, data);
  };

  const changeHandler = debounce(onType, 300);

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
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchProduct;
