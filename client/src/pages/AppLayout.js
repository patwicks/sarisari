import React from "react";
import SideMenu from "../components/menu/SideMenu";
import Loader from "../utils/Loader";
import SigninPage from "./SigninPage";
import useUserStore from "../store/userStore";

const AppLayout = ({ children }) => {
  const { isLoading, isLogin, autoLoginUser } = useUserStore((state) => state);

  React.useEffect(() => {
    autoLoginUser();
  }, [autoLoginUser]);

  return (
    <>
      {isLoading === true && isLogin === false ? (
        <div className="center h-screen w-screen bg-white">
          <Loader />
        </div>
      ) : (
        <>
          {isLogin === false ? (
            <SigninPage />
          ) : (
            <div className="h-screen max-h-screen w-screen min-w-[320] overflow-scroll scrollbar-hide">
              <div className="absolute z-10 h-screen w-[10%] min-w-[2rem] overflow-hidden bg-slate-400 text-blacky md:w-[20%]">
                <SideMenu />
              </div>
              <div className="ml-[10%] max-h-full overflow-y-scroll md:ml-[20%] md:p-2">
                {children}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AppLayout;
