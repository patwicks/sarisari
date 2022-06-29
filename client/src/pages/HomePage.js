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
  const { fetchAllProducts, serverError, searchProduct } = useProductStore(
    (state) => state
  );
  const userID = user._id;

  const onType = (e) => {
    let data = e.target.value;
    searchProduct(userID, data);
  };
  const debounceChangeHandler = debounce(onType, 500);

  React.useEffect(() => {
    if (userID) {
      fetchAllProducts(userID);
    }
  }, [fetchAllProducts, userID]);

  return (
    <AppLayout>
      <Main
        debounceChangeHandler={debounceChangeHandler}
        serverError={serverError}
        itemsPerPage={10}
      />
    </AppLayout>
  );
};

export default HomePage;
