import React, { useEffect } from "react";
//local imports
import Main from "../components/main/Main";
import Loader from "../utils/Loader"
import useUserStore from "../store/userStore";

const HomePage = () => {
  const { autoLoginUser, isLoading } = useUserStore(
    (state) => state
  );

  const handleLogin = React.useCallback(() => {
    autoLoginUser();
  }, [autoLoginUser]);

  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  return (
    <>
      {isLoading === true ? (
        <div className="center h-full w-full bg-white">
          <Loader />
        </div>
      ) : (
      <Main />
      )}
    </>
  );
};

export default HomePage;
