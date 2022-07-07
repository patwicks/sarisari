import React from "react";
import { NavLink } from "react-router-dom";
//local imports
import menuList from "./menuList";
//store
import useUserStore from "../../store/userStore";
//icon
import { BiLogOutCircle } from "react-icons/bi";

const SideMenu = () => {
  const { user, logoutUser } = useUserStore((state) => ({
    user: state.user,
    logoutUser: state.logoutUser,
  }));

  return (
    <div className="relative h-full w-full overflow-hidden bg-whitey-100">
      {/* Top start */}
      <div className="center w-full flex-col bg-primary/80 p-2 text-white md:p-4">
        <div className="h-7 w-7 overflow-hidden rounded-full border-2 border-whitey-200/75 md:h-16 md:w-16">
          <img
            className="h-full w-full object-cover object-center"
            src={user?.profile}
            alt="profile"
          />
        </div>
        <h1 className="mt-2 hidden text-xl font-bold capitalize md:block">
          {user?.username}
        </h1>
        <p className="hidden text-sm text-whitey-200 md:block">owner</p>
      </div>
      {/* Top end / list menu start */}
      <div>
        <ul className="h-full w-full">
          {menuList?.map((list, index) => (
            <li key={index} className="p-0">
              <NavLink
                to={list.route}
                className="flex h-14 w-full items-center justify-center hover:bg-blacky/10 md:justify-start"
              >
                <span className="text-lg md:mx-3">{list.icon}</span>
                <span className="hidden md:block">{list.title}</span>
              </NavLink>
            </li>
          ))}
          <li className="p-0" onClick={logoutUser}>
            <NavLink
              to="/"
              className="flex h-14 w-full items-center justify-center hover:bg-blacky/10 md:justify-start"
            >
              <span className="text-lg md:mx-3">
                <BiLogOutCircle />
              </span>
              <span className="hidden md:block">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hidden md:block center absolute left-0 right-0 bottom-0 w-full flex-col">
        <p className="text-[0.6rem] truncate text-center">&copy; Copyright 2022 SariSari - Dev Pat</p>
      </div>
    </div>
  );
};

export default SideMenu;
