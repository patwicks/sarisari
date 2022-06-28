import React from "react";
import debounce from "lodash.debounce";
//local imports
import Main from "../components/main/Main";
// layout
import AppLayout from "./AppLayout";
// store
import useUserStore from "../store/userStore";
import useProductStore from "../store/productStore";

const HomePage = () => {
  const user = useUserStore((state) => state.user);
  const limitProductSearch = useProductStore(
    (state) => state.limitProductSearch
  );
  const userID = user._id;

  const onType = (e) => {
    let data = e.target.value;
    limitProductSearch(userID, data);
  };
  const debounceChangeHandler = debounce(onType, 500);
  return (
    <AppLayout>
      <Main debounceChangeHandler={debounceChangeHandler} />
    </AppLayout>
  );
};

export default HomePage;
