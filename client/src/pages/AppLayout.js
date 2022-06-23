import React from "react";
import SideMenu from "../components/menu/SideMenu";
import Loader from "../utils/Loader";
import useUserStore from "../store/userStore";

const AppLayout = ({ children }) => {
  const { isLoading, isLogin, autoLoginUser } = useUserStore((state) => state);

  React.useEffect(() => {
    autoLoginUser();
  }, [autoLoginUser]);

  return (
    <>
      {isLoading === true && isLogin === false ? (
        <div className="center h-screen w-screen">
          <Loader />
        </div>
      ) : (
        <div className="h-screen w-screen min-w-[320] overflow-hidden">
          <div className="absolute z-10 h-full w-[10%] min-w-[2rem] overflow-hidden bg-slate-400 text-blacky md:w-[20%]">
            <SideMenu />
          </div>
          <div className="ml-[10%] max-h-screen overflow-hidden overflow-y-scroll md:ml-[20%] md:overflow-auto  md:p-2">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default AppLayout;
