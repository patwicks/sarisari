import React from "react";
import useUserStore from "../../store/userStore";
import Dashboard from "./Dashboard";
//icons
import { FaUserEdit } from "react-icons/fa";
const Account = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="min-w-[288px] overflow-hidden p-2">
      <div className="relative min-h-[14rem] w-full overflow-hidden rounded-md bg-white shadow-xl">
        <div className="h-[7rem] w-full overflow-hidden bg-slate-200"></div>
        <div className="center absolute top-20 left-4 h-14 w-14 overflow-hidden  rounded-full border-4 border-white bg-white">
          <img
            className="h-full w-full object-cover object-center"
            src={user?.profile}
            alt="profile"
          />
        </div>
        <h1 className="mt-10 ml-5 text-base font-bold capitalize md:text-lg cursor-pointer">
          {user?.username}
        </h1>
        <p className="ml-5 text-sm text-blacky/70 ">username</p>
        <div className="center ml-5 h-10 w-10 overflow-hidden rounded-full bg-slate-200 absolute right-5 bottom-1 hover:opacity-50 cursor-pointer">
          <FaUserEdit className="text-xl text-primary " />
        </div>
      </div>
      <h1 className="mt-5 font-semibold text-blacky/80">Account summary</h1>
      <Dashboard />
    </div>
  );
};

export default Account;
